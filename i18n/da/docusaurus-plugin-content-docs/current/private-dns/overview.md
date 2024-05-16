---
title: Oversigt
sidebar_position: 1
---

:::info

Med AdGuard DNS kan der opsættes egne private DNS-servere til at opløse DNS-forespørgsler og blokere annoncer, trackere og ondsindede domæner, før de når enheden

Hurtigt link: [Prøv AdGuard DNS](https://agrd.io/download-dns)

:::

![Private AdGuard DNS-hovedkontrolpanel](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Generelt

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube-videoafspiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Privat AdGuard DNS tilbyder alle fordelene ved en offentlig AdGuard DNS-server, herunder trafikkryptering og domænesortlister. Den tilbyder også yderligere funktioner såsom fleksibel tilpasning, DNS-statistik og Forældrekontrol. Alle disse muligheder er let tilgængelige og håndteres via et brugervenligt kontrolpanel.

### Hvorfor man behøver Private AdGuard DNS

I dag kan alt tilsluttes internet: TV, køleskabe, køleskabe, smarte pærer eller højttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilfælde, hvorimod AdGuard DNS — som kan opsættes til at filtrere trafik, blokere indhold og trackere — fungerer på systemniveau.

På et tidspunkt omfattede AdGuard-produktlinjen kun [Public AdGuard DNS](../public-dns/overview.md) og [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Disse løsninger fungerer fint for visse brugere, mens andre savner opsætningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er hér, at Private AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information — alt sammen via et enkelt, brugervenligt kontrolpanel.

### Forskellene mellem Public og Private AdGuard DNS

Her er en simpel funktionssammenligning mellem Public og Private AdGuard DNS.

| Offentlig AdGuard DNS          | Privat AdGuard DNS                                                               |
| ------------------------------ | -------------------------------------------------------------------------------- |
| DNS-trafikkryptering           | DNS-trafikkryptering                                                             |
| Forudbestemte domænesortlister | Tilpasselige domænesortlister                                                    |
| -                              | Tilpasselige DNS-filtreringsregler med import-/eksportfunktion                   |
| -                              | Anmod om statistik (se mål for DNS-forepørgsler: Hvilke lande, virksomheder mv.) |
| -                              | Detaljeret forespørgselslog                                                      |
| -                              | Forældrekontrol                                                                  |

## Sådan opsættes Private AdGuard DNS

### Til enheder, som understøtter DoH, DoT og DoQ

1. Gå til [AdGuard DNS-betjeningspanelet](https://agrd.io/download-dns) (hvis ikke indlogget, log ind via din AdGuard-konto)
1. Klik på *Tilslut enhed*, og følg skærmvejledningen

:::note Understøttede platforme:

- Android
- iOS
- Windows
- Mac
- Linux
- Routere
- Spillekonsoller
- Smart TV'er

:::

Hver enhed, der tilføjes i AdGuard DNS-panelet, har sin egen unikke adresse, der kan bruges, hvis enheden understøtter moderne, krypterede DNS-protokoller (DoH, DoT og DoQ).

### Til enheder, som ikke understøtter DoH, DoT og DoQ

Understøtter enheden ikke krypteret DNS, og alm. DNS derfor må bruges, findes to anden måde, med hvilke AdGuard DNS kan genkende enheden — benyt dedikerede IP-adresser eller link dens IP-adresse.

:::note

Brug kun alm. DNS-adresser, hvis der ikke har andre muligheder, da dette reducerer sikkerheden for DNS-forespørgsler. Vil man at bruge alm. DNS, anbefaler vi valg af dedikerede IP-adresser.

:::

#### Dedikerede IP-adresser

For hver enhed, der forbindes til AdGuard DNS, tilbydes to dedikerede IPv6-adresser, som kan angives i enhedsindstillingerne. Brug af begge IPv6-adresser er ikke obligatorisk, men ofte vil enheder anmode om to IPv6-adresser.

Når der oprettes forbindelse til dem, vil AdGuard DNS kunne fastslå, hvilken bestemt enhed, der sender DNS-forespørgsler og vise statistik for den. Man vil ligeledes kunne opsætte DNS-regler specifikt for denne enhed.

Ikke alle tjenesteudbydere tilbyder dog IPv6-understøttelse, og ikke alle enheder tillader opsætning af IPv6-adresser. I så tilfælde må man muligvis nøjes med den linkede IP-metode.

#### Linket IP

Forbinder man sin enhed til AdGuard DNS via Linket IP, vil tjenesten tælle alle alm. DNS-forespørgsler, som kommer fra denne IP-adresse til den "enhed". Med denne forbindelsesmetode skal forbindelsen genoprettes manuelt eller via et særligt program, hver gang enhedens IP ændres, hvilket f.eks. sker efter hver genstart.

Eneste krav for at linke en IP, er, at **det skal være en privat/hjemme IP-adresse**.

:::note

En hjemme IP-adresse er en IP-adresse tildelt en enhed, der er tilsluttet en privat internetudbyder. Den er typisk knyttet til en fysisk placering og tildeles individuelle boliger/lejligheder. Hjemme IP-adresser bruges af alm. internetbrugere til deres daglige onlineaktiviteter, såsom at surfe på nettet, få adgang til sociale medieplatforme, sende e-mails eller streame indhold.

:::

Forsøges en hjemme IP-adresse linket uden at AdGuard DNS vil tillader dette, bedes vores supportteam kontaktet via support@adguard.com.

## Private AdGuard DNS-funktioner

### Statistikker

På fanen *Statistik* fremgår alle de opsummerede statistikker om DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard DNS. Den viser det samlede antal samt geografi for forespørgsler, antallet af blokerede forespørgsler, en liste over virksomhederne, som var målene for forespørgslerne, forespørgselstyper og hyppigst forespurgte domæner.

![Private AdGuard DNS-kontrolpanel, statistikker](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Trafikdestination

Denne funktion viser målene for enhedernes DNS-forespørgsler. Ud over at se et kort over forespørgselsmål/-destinationer, kan oplysningerne filtreres efter dato, enhed og land.

![Private AdGuard DNS-kontrolpanel, trafik](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Virksomheder

Denne fane muliggør hurtigt at tjekke, hvilke virksomheder, som sender flest forespørgsler, og hvilke, som har flest blokerede forespørgsler.

![Private AdGuard DNS-kontrolpanel, virksomheder](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Forespørgselslog

Dette er en detaljeret log, hvori man kan tjekke oplysningerne om hver enkelt forespørgsel samt sortere forespørgsler efter status, type, virksomhed, enhed, tid, land.

![Private AdGuard DNS-kontrolpanel, forespørgselslog](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Serverindstillinger

Dette afsnit indeholder en række indstillinger, som giver mulighed for at tilpasse driften af Private AdGuard DNS, hvilket sikrer, at internet fungerer præcist som ønsket.

### Håndtering af sortlister

Funktionen *Sortlister* giver mulighed for at angive, hvilke domæner, man vil blokere, og hvilke man ikke vil. Vælg mellem et bredt udvalg af sortlister til forskellige formål.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Sikkerhedsindstillinger

Selvom man er opmærksom på alle onlinesvindlernes tricks, er der altid en risiko for et utilsigtet klik på et ondsindet link. For at beskytte mod sådanne uheld, gå til afsnittet *Sikkerhedsindstillinger* og markér afkrydsningsfelterne ud for de her anførte valgmuligheder.

Funktionen *Blokér ondsindede, phishing- og svindeldomæner* blokerer domæner, som findes i den dedikerede database. *Blokér nyregistrerede domæner* blokerer alle domæner, som er registreret for mindre end 30 dage siden, og som ofte anses for risikable for onlinefortroligheden.

### Forældrekontrol

For at beskytte sit barn mod onlineindhold, man finder upassende, opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Forældrekontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### Brugerregler

I tilfælde hvor forudinstallerede sortlister med tusindvis af regler ikke er nok, har vi en praktisk funktion kaldet *Brugerregler*. Her kan der manuelt tilføjes tilpassede regler for at blokere/afblokere et bestemt domæne eller importere tilpassede regellister (tjek [syntaks for DNS-filtreringsregler](../general/dns-filtering-syntax.md) ud). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### DNS-over-HTTPS med godkendelse

DNS-over-HTTPS med godkendelse giver et login og adgangskode til at oprette forbindelse til serveren. Dette kan begrænse adgangen for uautoriserede brugere og øge sikkerheden.

For at aktivere denne funktion, gå til *Serverindstillinger* → *Enheder* → *Indstillinger* og skift til en DNS-server med godkendelse. Vælg *Afvis andre protokoller* for at deaktivere alternativ protokolbrug, sikre eksklusiv DNS-over-HTTPS godkendelse og blokering af tredjepartsadgang.

![DNS-over-HTTPS med godkendelse](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Avanceret

Her kan vælges, hvordan AdGuard skal reagere på blokerede DNS:

- Standard — nul IP-adresse
- NXDOMAIN — domænet findes ikke
- REFUSED — serveren nægtede at behandle forespørgslen
- Tilpasset IP — der kan manuelt angives en IP-adresse

Derudover kan indstillingen *Time to live* (TTL) justeres. Denne parameter definerer den tidsperiode (i sekunder), i hvilken en klientenhed gemmer svaret på en DNS-forespørgsel. En højere TTL betyder, at selvom et tidligere blokeret domæne er afblokeret, kan det stadig se blokeret ud i et stykke tid. En TTL på 0 angiver, at enheden ikke cachelagrer svar.

I afsnittet Avanceret findes tre muligheder, som kan tilpasses:

- Blokér adgang til iCloud Private Relay. Enheder, som bruger iCloud Private Relay, ignorerer muligvis DNS-indstillinger. Aktivering af denne mulighed sikrer, at AdGuard DNS effektivt kan beskytte enheden.
- Blokér Firefox canary-domæne. Denne indstilling forhindrer Firefox i automatisk at skifte til sin DoH-opløser, når AdGuard DNS er sat som overordnet system DNS-tjeneste.
- Log IP-adresser. Er denne indstilling aktiveret, vil IP-adresser knyttet til indgående DNS-forespørgsler blive registreret og vist i Forespørgselslog.

### Adgangsindstillinger

Her kan adgangsmulighed til DNS-serveren håndteres via opsætning af flg. indstillinger:

- Tilladte klienter. Angiv klienter med tilladelse til at bruge DNS-serveren
- Ikke-tilladte klienter. Angiv klienter, som nægtes brug af DNS-serveren
- Ikke-tilladte domæner. Angiv domænenavne, som nægtes adgang til DNS-serveren. Jokertegn og DNS-filtreringsregler kan også angives her

Ved at opsætte disse muligheder kan man styre, hvem som bruger DNS-serveren og forhindre potentielle DDoS-angreb. Ikke-tilladte forespørgsler vises ikke i Forespørgselslog, og de er gratis.
