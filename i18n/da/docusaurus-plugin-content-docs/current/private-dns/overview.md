---
title: Oversigt
sidebar_position: 1
---

:::info

Med AdGuard DNS kan der opsættes egne private DNS-servere til at opløse DNS-forespørgsler og blokere annoncer, trackere og ondsindede domæner, før de når enheden

Hurtigt link: [Prøv AdGuard DNS](https://agrd.io/download-dns)

:::

![Private AdGuard DNS-hovedkontrolpanel](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Hvad er Private AdGuard DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube-videoafspiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ud over fordelene ved en offentlig DNS-server (såsom trafikkryptering og domæneblokeringslister) tilbyder Private AdGuard DNS funktioner såsom fleksibel tilpasning, DNS-statistik og forældrekontrol samt er nem at håndtere via et praktisk kontrolpanel.

## Hvorfor man behøver Private AdGuard DNS

I dag kan alt tilsluttes internet: TV, køleskabe, køleskabe, smarte pærer eller højttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilfælde, hvorimod AdGuard DNS — som kan opsættes til at filtrere trafik, blokere indhold og trackere — fungerer på systemniveau.

Vi har allerede [Public AdGuard DNS](../public-dns/overview.md) og [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Disse løsninger fungerer fint for visse brugere, mens andre savner opsætningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er hér, at Private AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information — alt sammen via et enkelt, brugervenligt kontrolpanel.

## Forskellene mellem Private og Public AdGuard DNS

Her er en simpel sammenligning af funktioner tilgængelige i Public AdGuard DNS- og Private AdGuard DNS-servere.

| Offentlig AdGuard DNS          | Privat AdGuard DNS                                                               |
| ------------------------------ | -------------------------------------------------------------------------------- |
| DNS-trafikkryptering           | DNS-trafikkryptering                                                             |
| Forudbestemte domænesortlister | Tilpasselige domænesortlister                                                    |
| -                              | Tilpasselige DNS-filtreringsregler med import-/eksportfunktion                   |
| -                              | Anmod om statistik (se mål for DNS-forepørgsler: Hvilke lande, virksomheder mv.) |
| -                              | Detaljeret forespørgselslog                                                      |
| -                              | Forældrekontrol                                                                  |

## Sådan opsættes Private AdGuard DNS

1. Gå til [AdGuard DNS-betjeningspanelet](https://agrd.io/download-dns) (hvis ikke indlogget, log ind via din AdGuard-konto)
1. Klik på "Tilslut enhed", og følg skærmvejledningen

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

## Linket IP

Understøtter enheden ikke krypteret DNS, og alm. DNS derfor må bruges, findes en anden måde, med hvilken AdGuard DNS kan genkende enheden — link dens IP-adresse. I så tilfælde tæller AdGuard DNS alle alm. DNS-forespørgsler fra den pågældende IP-adresse til den pågældende "enhed".

Eneste krav for at linke en IP, er, at **det skal være en privat/hjemme IP-adresse**.

:::note

En hjemme IP-adresse er en IP-adresse tildelt en enhed, der er tilsluttet en privat internetudbyder. Den er typisk knyttet til en fysisk placering og tildeles individuelle boliger/lejligheder. Hjemme IP-adresser bruges af alm. internetbrugere til deres daglige onlineaktiviteter, såsom at surfe på nettet, få adgang til sociale medieplatforme, sende e-mails eller streame indhold.

:::

Forsøges en hjemme IP-adresse linket uden at AdGuard DNS vil tillader dette, bedes vores supportteam kontaktet via support@adguard.com.

## Private AdGuard DNS-funktioner

### Håndtering af sortlister

Der kan med funktionen "Sortlister" opsættes domæner, som skal blokeres, og domæner, som ikke skal. Vælg mellem et bredt udvalg af sortlister til forskellige formål.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Brugerregler

Til situationer, hvor præinstallerede *Sortlister* med tusindvis af regler ikke er nok, findes en funktion kaldet "Brugerregler". Her kan der manuelt tilføjes tilpassede regler for at blokere/afblokere et bestemt domæne eller importere tilpassede regellister (tjek [syntaks for DNS-filtreringsregler](../general/dns-filtering-syntax.md) ud). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

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

### Forældrekontrol

For at beskytte sit barn mod onlineindhold, man finder upassende, opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Private AdGuard DNS-kontrolpanel, Forælderkontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

Har man endnu ikke Private AdGuard DNS, kan den fås via det officielle websted [](https://adguard-dns.io/).
