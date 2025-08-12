---
title: DNS-filtrering
sidebar_position: 1
---

:::info

Den nemmeste måde at udforske fordelene ved DNS-filtrering på er at installere AdGuard Ad Blocker eller afprøve AdGuard DNS. Ønskes DNS filtreret på netværksniveau, så er AdGuard Home værktøjet

Hurtige links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Hent AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Prøv AdGuard DNS](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## Hvad er DNS?

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. Hver gang man går til et websted, sender browseren en forespørgsel til en særlig servertype (DNS-server). Denne server ser på det forespurgte domænenavn og svarer med en korresponderende IP-adresse. Meget skematisk kan det repræsenteres således:

![Sådan fungerer DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Det samme gælder naturligvis for alle apps og programmer, som sender evt. webforespørgsler, ikke kun browsere.

## Hvordan fungerer DNS-filtrering?

Ved brug af en AdGuard-app, der understøtter DNS-filtrering, fungerer den som en buffer mellem brugerens enhed og DNS-serveren. Alle DNS-forespørgsler, som browseren eller apps er ved at sende, behandles først af AdGuard. If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard krypterer alle DNS-forespørgsler, før de forlader enheden, så ingen ondsindede kan få adgang til indholdet. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. Mere herom [senere](#local-dns-blocklists).

![Sådan fungerer DNS-filtrering](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS-filtrering kan opdeles i to separate funktioner: At kryptere og omdirigere DNS-trafik til DNS-servere, samt at blokere visse domæner lokalt ved at anvende DNS-sortlister.

### DNS-servere

Der er tusindvis af DNS-servere at vælge imellem, alle unikke i deres egenskaber og formål. De fleste returnerer blot IP-adressen på det forespurgte domæne, men nogle har ekstrafunktioner, da de blokerer annonce-, sporings-, voksendomæner mv. I dag anvender alle større DNS-servere en eller flere pålidelige krypteringsprotokoller: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard har forskellige servere til forskellige mål. Dette diagram illustrerer, hvordan AdGuard-blokeringsservere fungerer:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Andre DNS-udbydere fungerer muligvis anderledes, så find ud af mere om dem, inden der vælges en DNS-server. En listen over nogle af de mest populære DNS-udbydere findes i denne [denne artikel](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### Lokale DNS-blokeringslister

Ved kun at stole på DNS-servere til at filtrere DNS-trafik, mister man imidlertid al fleksibilitet. If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. Alle AdGuard-produkter muliggør brug af DNS-sortlister, fra simple værtsfiler til lister med [mere avancerede syntakser](dns-filtering-syntax.md). De fungerer på samme måde som alm. sortlister: Matcher en DNS-forespørgsel en af reglerne i den aktive filterliste, blokeres den. For at være mere præcis leverer DNS-serveren en ikke-rutbar IP-adresse ved en sådan forespørgsel.

:::tip

I AdGuard til iOS skal *Avanceret tilstand* først aktiveres i *Indstillinger* for at få adgang til DNS-blokering.

:::

Så mange tilpassede sortlister som ønsket kan tilføjes. Man kan f.eks. bruge [AdGuard DNS-filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). Det blokerer bogstaveligt talt alt, hvad en AdGuard DNS-server gør, men samtidig kan enhver anden DNS-server frit anvendes. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## DNS-filtrering contra netværksfiltrering

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. Opfrisk evt. videnen herom ved at læse [denne artikel](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don’t have to choose. Både alm. netværksfiltrering og DNS-filtrering kan altid anvendes sideløbende. However, it’s important to understand key differences between the two. DNS-filtrering har både sine unikke fordele og ulemper:

**Fordele ved DNS-filtrering:**

1. På visse platforme er dette den eneste måde at opnå systemniveaufiltrering på. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. Visse former for sporing (såsom [CNAME-tilsløret sporing](https://adguard.com/blog/cname-tracking.html)) kan kun imødegås vha. DNS-filtrering.
1. Stadiet, hvor en DNS-forespørgsel behandles, er det tidligste, man overhovedet kan imødegå en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristrøm og trafik.

**Ulemper ved DNS-filtrering:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Eksempel på forskel](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Et eksempel på forskellen mellem DNS- og netværksfiltrering*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. Dette påvirker statistikken negativt og umuliggør oprettelse af app-specifikke filtreringsregler.

Brug af DNS-filtrering anbefales i tillæg til netværksfiltrering, ikke i stedet for, når dette er muligt.
