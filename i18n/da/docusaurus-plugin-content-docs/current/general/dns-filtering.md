---
title: DNS-filtrering
sidebar_position: 1
---

:::info

Den nemmeste måde at udforske fordelene ved DNS-filtrering på er at installere AdGuard Ad Blocker eller afprøve AdGuard DNS. Ønskes DNS filtreret på netværksniveau, så er AdGuard Home værktøjet

Hurtige links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Hent AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Prøv AdGuard DNS](https://agrd.io/download-dns)

:::

For bedre at forstå DNS-filtrering, bør spørgsmålet "Hvad er DNS?" først besvares.

## Hvad er DNS?

DNS står for "Domain Name System", hvis formål er at oversætte websteders navne til IP-adresser, som browsere kan forstå. Hver gang man går til et websted, sender browseren en forespørgsel til en særlig servertype (DNS-server). Denne server ser på det forespurgte domænenavn og svarer med en korresponderende IP-adresse. Meget skematisk kan det repræsenteres således:

![Sådan fungerer DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Det samme gælder naturligvis for alle apps og programmer, som sender evt. webforespørgsler, ikke kun browsere.

## Hvordan fungerer DNS-filtrering?

Ved brug af en AdGuard-app, der understøtter DNS-filtrering, fungerer den som en buffer mellem brugerens enhed og DNS-serveren. Alle DNS-forespørgsler, som browseren eller apps er ved at sende, behandles først af AdGuard. Benyttes en standard DNS-server leveret af internetudbyderen, krypteres DNS-trafik sandsynligvis ikke og er derfor sårbar over for snooping og hijacking. AdGuard krypterer alle DNS-forespørgsler, før de forlader enheden, så ingen ondsindede kan få adgang til indholdet. Derudover kan AdGuard identificere forespørgsler til annonce-, sporings- og/eller voksendomæner og omdirigere disse til et "sort hul" i stedet for at videresende dem til DNS-serveren. Mere herom [senere](#local-dns-blocklists).

![Sådan fungerer DNS-filtrering](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS-filtrering er et kraftfuldt værktøj understøttet af alle større AdGuard-apps: [AdGuard til Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard til Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard til Android](https://adguard.com/adguard-android/overview.html) samt [AdGuard til iOS](https://adguard.com/adguard-ios/overview.html).

DNS-filtrering kan opdeles i to separate funktioner: At kryptere og omdirigere DNS-trafik til DNS-servere, samt at blokere visse domæner lokalt ved at anvende DNS-sortlister.

### DNS-servere

Der er tusindvis af DNS-servere at vælge imellem, alle unikke i deres egenskaber og formål. De fleste returnerer blot IP-adressen på det forespurgte domæne, men nogle har ekstrafunktioner, da de blokerer annonce-, sporings-, voksendomæner mv. I dag anvender alle større DNS-servere en eller flere pålidelige krypteringsprotokoller: DNS-over-HTTPS, DNS-over-TLS. AdGuard leverer også en [DNS-tjeneste](https://adguard-dns.io/), der også var verdens første til at tilbyde den nye og meget lovende [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html)-krypteringsprotokol. AdGuard har forskellige servere til forskellige mål. Dette diagram illustrerer, hvordan AdGuard-blokeringsservere fungerer:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Andre DNS-udbydere fungerer muligvis anderledes, så find ud af mere om dem, inden der vælges en DNS-server. En listen over nogle af de mest populære DNS-udbydere findes i denne [denne artikel](dns-providers.md). Alle AdGuard-apps, som understøtter DNS-funktionalitet, har også en liste over DNS-servere at vælge imellem, eller tillader endda valg af en hvilken som helst tilpasset DNS-server efter ønske.

### Lokale DNS-blokeringslister

Ved kun at stole på DNS-servere til at filtrere DNS-trafik, mister man imidlertid al fleksibilitet. Blokerer den valgte server et domæne, kan man ikke tilgå det. Med AdGuard behøver man ikke engang at opsætte nogen bestemt DNS-server til at filtrere DNS-trafik. Alle AdGuard-produkter muliggør brug af DNS-sortlister, fra simple værtsfiler til lister med [mere avancerede syntakser](dns-filtering-syntax.md). De fungerer på samme måde som alm. sortlister: Matcher en DNS-forespørgsel en af reglerne i den aktive filterliste, blokeres den. Mere præcist, så omdirigeres den til et "sort hul".

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in settings in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## DNS-filtrering contra netværksfiltrering

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. På visse platforme er dette den eneste måde at opnå systemniveaufiltrering på. iOS understøtter f.eks. kun indholdsblokering i vanlig forstand i Safari-browseren, for alt andet findes kun DNS-filtrering.
1. Visse former for sporing (såsom [CNAME-tilsløret sporing](https://adguard.com/blog/cname-tracking.html)) kan kun imødegås vha. DNS-filtrering.
1. Stadiet, hvor en DNS-forespørgsel behandles, er det tidligste, man overhovedet kan imødegå en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristrøm og trafik.

**Cons of DNS filtering:**

1. DNS-filtrering er "grov", dvs., at den hverken fjerner tomme felter efterladt fra en blokeret annonce eller anvender nogen form for kosmetisk filtrering. Mange af de mere komplicerede annoncer kan ikke blokeres på DNS-niveau (eller rettere sagt, det kan de, men kun ved at blokere hele domænet, der muligvis også bruges til andre formål).

    ![Eksempel på forskel](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Et eksempel på forskellen mellem DNS- og netværksfiltrering*

1. Oprindelsen af en DNS-forespørgsel ikke kan fastslås, hvorfor der på DNS-niveau ikke kan skelnes mellem forskellige apps. Dette påvirker statistikken negativt og umuliggør oprettelse af app-specifikke filtreringsregler.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
