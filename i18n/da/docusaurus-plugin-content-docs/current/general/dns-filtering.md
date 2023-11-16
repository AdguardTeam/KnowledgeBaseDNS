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

I AdGuard til iOS skal *Avanceret tilstand* først aktiveres i indstillingerne for at få adgang til DNS-blokering.

:::

Så mange tilpassede sortlister som ønsket kan tilføjes. Man kan f.eks. bruge [AdGuard DNS-filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). Det blokerer bogstaveligt talt alt, hvad en AdGuard DNS-server gør, men samtidig kan enhver anden DNS-server frit anvendes. På denne måde kan der også tilføjes flere filtre eller oprettes tilpassede undtagelsesregler, hvilket vil være umuligt med en simpel "brug en blokerende DNS-server"-opsætning.

Der er hundredvis af forskellige DNS-sortlister, som kan tjekkes ud [hér](https://filterlists.com/).

## DNS-filtrering contra netværksfiltrering

Netværksfiltrering er, hvad vi kalder, den 'almindelige' måde, som enkeltstående AdGuard apps behandler netværkstrafik på, heraf navnet. Opfrisk evt. videnen herom ved at læse [denne artikel](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

Først og fremmest skal nævnes, at man med AdGuard ikke behøver at vælge. Både alm. netværksfiltrering og DNS-filtrering kan altid anvendes sideløbende. Det er dog vigtigt at forstå de vigtigste forskelle de to imellem. DNS-filtrering har både sine unikke fordele og ulemper:

**Fordele ved DNS-filtrering:**

1. På visse platforme er dette den eneste måde at opnå systemniveaufiltrering på. iOS understøtter f.eks. kun indholdsblokering i vanlig forstand i Safari-browseren, for alt andet findes kun DNS-filtrering.
1. Visse former for sporing (såsom [CNAME-tilsløret sporing](https://adguard.com/blog/cname-tracking.html)) kan kun imødegås vha. DNS-filtrering.
1. Stadiet, hvor en DNS-forespørgsel behandles, er det tidligste, man overhovedet kan imødegå en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristrøm og trafik.

**Ulemper ved DNS-filtrering:**

1. DNS-filtrering er "grov", dvs., at den hverken fjerner tomme felter efterladt fra en blokeret annonce eller anvender nogen form for kosmetisk filtrering. Mange af de mere komplicerede annoncer kan ikke blokeres på DNS-niveau (eller rettere sagt, det kan de, men kun ved at blokere hele domænet, der muligvis også bruges til andre formål).

    ![Eksempel på forskel](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Et eksempel på forskellen mellem DNS- og netværksfiltrering*

1. Oprindelsen af en DNS-forespørgsel ikke kan fastslås, hvorfor der på DNS-niveau ikke kan skelnes mellem forskellige apps. Dette påvirker statistikken negativt og umuliggør oprettelse af app-specifikke filtreringsregler.

Brug af DNS-filtrering anbefales i tillæg til netværksfiltrering, ikke i stedet for, når dette er muligt.
