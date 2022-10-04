---
title: DNS-filtrering
sidebar_position: 1
---

For bedre at forstå DNS-filtrering bør vi først besvare spørgsmålet "Hvad er DNS"?

## Hvad er DNS?

DNS står for "Domain Name System", og dets formål er at oversætte websteders navne til noget, som browsere kan forstå, dvs. IP-adresser. Hver gang man går til et websted, sender browseren således en forespørgsel til en særlig servertype (DNS-server). Denne server ser på det anmodede domænenavn og svarer med en dertilhørende IP-adresse. Meget skematisk kan det repræsenteres således:

![Sådan fungerer DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Det samme gælder naturligvis for alle apps og programmer, som sender evt. webforespørgsler, ikke kun browsere.

## Hvordan fungerer DNS-filtrering?

Når der bruges en af de AdGuard-apps, der understøtter DNS-filtrering, fungerer den som en buffer mellem brugerens enhed og DNS-serveren. Alle DNS-forespørgsler, som browseren eller apps er ved at sende, behandles først af AdGuard. Benyttes en standard DNS-server leveret af internetudbyderen, krypteres DNS-trafik sandsynligvis ikke og er derfor sårbar over for snooping og hijacking. AdGuard krypterer alle DNS-forespørgsler, før de forlader enheden, så ingen ondsindede kan få adgang til indholdet. Derudover kan AdGuard identificere forespørgsler til annonce-, sporings- og/eller voksendomæner og omdirigere dem til et "sort hul" i stedet for at videresende dem til DNS-serveren. Mere om dette [senere](#local-dns-blocklists).

![Sådan fungerer DNS-filtrering](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS-filtrering er et kraftfuldt værktøj, der understøttes af alle større AdGuard-apps: [AdGuard til Windows](https://adguard.com/en/adguard-windows/overview.html), [AdGuard til Mac](https://adguard.com/en/adguard-mac/overview.html), [AdGuard til Android](https://adguard.com/en/adguard-android/overview.html) og [AdGuard til iOS](https://adguard.com/en/adguard-ios/overview.html).

DNS-filtrering kan opdeles i to separate funktioner: Kryptering og omdirigering af DNS-trafik til DNS-servere samt blokering af visse domæner lokalt via DNS-blokeringslister.

### DNS-servere

Der er tusindvis af DNS-servere at vælge imellem, alle unikke i deres egenskaber og formål. De fleste returnerer blot IP-adressen på det forespurgte domæne, men nogle har ekstrafunktioner, da de blokerer annonce-, sporings-, voksendomæner mv. I dag anvender alle større DNS-servere en eller flere pålidelige krypteringsprotokoller: DNS-over-HTTPS, DNS-over-TLS. AdGuard leverer også en [DNS-tjeneste](https://adguard-dns.io/en/welcome.html), og det var verdens første til at tilbyde den helt nye og lovende krypteringsprotokol [DNS-over-QUIC](https://adguard.com/en/blog/dns-over-quic.html). AdGuard har forskellige servere til forskellige mål. Dette diagram illustrerer, hvordan AdGuard-blokeringsservere fungerer:

![AdGuard DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Andre DNS-udbydere fungerer muligvis anderledes, så find ud af mere om dem, inden der vælges en DNS-server. Man kan finde listen over nogle af de mest populære DNS-udbydere i [denne artikel](dns-providers.md). Alle AdGuard-apps, som understøtter DNS-funktionalitet, har også en liste over DNS-servere at vælge imellem, eller tillader endda at vælge en hvilken som helst tilpasset DNS-server, der måtte ønskes.

### Lokale DNS-blokeringslister

Ved kun at stole på DNS-servere til at filtrere DNS-trafik, mister man imidlertid al fleksibilitet. Blokerer den valgte server et domæne, kan man ikke tilgå det. Med AdGuard behøver man ikke engang at opsætte nogen bestemt DNS-server til at filtrere DNS-trafik. Alle AdGuard-produkter muliggør brug af DNS-blokeringslister, fra simple værtsfiler til lister med [mere avancerede syntakser](dns-filtering-syntax.md). De fungerer på samme måde som alm. blokeringslister: Matcher en DNS-forespørgsel en af reglerne i den aktive filterliste, blokeres den. Mere præcist, så omdirigeres den til et "sort hul".
> I AdGuard til iOS skal man først aktivere "Avanceret tilstand" i indstillingerne for at få adgang til DNS-blokering.

Man kan tilføje så mange tilpassede blokeringslister, som ønsket. Man kan f.eks. bruge [AdGuard DNS-filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). Det blokerer bogstaveligt talt alt, hvad AdGuard DNS-server gør, men i dette tilfælde kan man frit bruge enhver anden DNS-server. Plus, på denne måde kan man tilføje flere filtre eller oprette tilpassede undtagelsesregler, som alle ville være umulige med en simpel "brug en blokerende DNS-server"-opsætning.
> Der er hundredvis af forskellige DNS-blokeringslister, som kan tjekkes ud [hér](https://filterlists.com/).

## DNS-filtrering kontra netværksfiltrering

Netværksfiltrering er, hvad vi kalder, den 'almindelige' måde, som enkeltstående AdGuard apps behandler netværkstrafik på, heraf navnet. Man kan opfriske sin viden, ved at læse [denne artikel](https://kb.adguard.com/en/general/how-ad-blocking-works).

Først og fremmest skal vi nævne, at man med AdGuard ikke behøver at vælge. Man kan altid bruge både alm. netværksfiltrering og DNS-filtrering sideløbende. Det er dog vigtigt at forstå de vigtigste forskelle de to imellem. DNS-filtrering har både sine unikke fordele og ulemper:

**Fordele ved DNS-filtrering:**

1. På nogle platforme er dette den eneste måde at opnå systemniveaufiltrering på. iOS understøtter f.eks. kun indholdsblokering i vanlig forstand i Safari-browseren, for alt andet findes kun DNS-filtrering.
2. Visse former for sporing (såsom [CNAME-tilsløret sporing](https://adguard.com/en/blog/cname-tracking.html)) kan kun imødegås vha. DNS-filtrering.
3. Stadiet, hvor en DNS-forespørgsel behandles, er det tidligste, man overhovedet kan imødegå en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristrøm og trafik.

**Fordele ved DNS-filtrering:**

1. DNS-filtrering er "grov", dvs., at den hverken fjerner tomme felter efterladt fra en blokeret annonce eller anvender nogen form for kosmetisk filtrering. Mange af de mere komplicerede annoncer kan ikke blokeres på DNS-niveau (eller rettere sagt, det kan de, men kun ved at blokere selve domænerne, selvom disse muligvis også bruges til andre formål).

![Eksempel på forskel](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Et eksempel på forskellen mellem DNS-filtrering og netværksfiltrering*

2. Det er umuligt at kende oprindelsen af en DNS-forespørgsel, hvilket betyder, at der på DNS-niveau ikke kan skelnes mellem forskellige apps. Dette belaster statistikken negative og umuliggør at oprette app-specifikke filtreringsregler.

Vi anbefaler brug af DNS-filtrering i tillæg til netværksfiltrering, ikke i stedet for, når det er muligt.
