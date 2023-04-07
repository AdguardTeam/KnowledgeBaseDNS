---
title: Oversigt
sidebar_position: 1
---

# Private AdGuard DNS

![Private AdGuard DNS-hovedkontrolpanel](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Hvad er Private AdGuard DNS?

Private AdGuard DNS er en DNS-server, der ud over fordelene ved en offentlig DNS-server (såsom trafikkryptering og domæneblokeringslister) giver funktioner såsom fleksibel tilpasning, DNS-statistik og forældrekontrol samt nemt håndteres via et praktisk kontrolpanel.

## Hvorfor man behøver Private AdGuard DNS

I dag kan alt tilsluttes internet: TV, køleskabe, smartpærer eller højttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilfælde, hvorimod AdGuard DNS, som kan opsættes til at filtrere trafik, blokere indhold og trackere, fungerer på systemniveau.

Vi har allerede [offentlig AdGuard DNS](../public-dns/overview.md) og [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Disse løsninger fungerer fint for nogle brugere, mens andre savner opsætningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er her, privat AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information — alt sammen via et enkelt, brugervenligt kontrolpanel.

## Forskellen mellem Private og Public AdGuard DNS

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

1. Gå til [AdGuard DNS-kontrolpanelet](https://adguard-dns.io/dashboard/) (log ind på din AdGuard-konto, hvis det ikke allerede er sket)
2. Klik på "Tilslut enhed", og følg skærmvejledningen

> Understøttede platforme: - Android - iOS - Windows - Mac - Linux - Routere - Spillekonsoller

## Private AdGuard DNS-funktioner

### Håndtering af sortlister

Med funktionen "Sortlister" kan man indstille, hvilke domæner, som skal blokeres, og hvilke, som ikke skal. Vælg mellem et bred udvalg af sortlister til forskellige formål.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Brugerregler

Til situationer, hvor præinstallerede *Sortlister* med tusindvis af regler ikke er nok, findes funktionen kaldet "Brugerregler". Her kan der manuelt tilføjes tilpassede regler for at blokere/afblokere et bestemt domæne eller importere tilpassede regellister (tjek [syntaks for DNS-filtreringsregler](../general/dns-filtering-syntax.md)). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistikker

På fanen "Statistik" fremgår alle de opsummerede statistikker om DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard DNS. Den viser det samlede antal samt geografi for forespørgsler, antallet af blokerede forespørgsler, en liste over virksomhederne, som var målene for forespørgslerne, forespørgselstyper og hyppigst forespurgte domæner.

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

For at beskytte børn mod onlineindhold, man finder upassende, så opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Private AdGuard DNS-kontrolpanel, Forælderkontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

> Har du endnu ikke Private AdGuard DNS endnu, kan den fås via det officielle websted [](https://adguard-dns.io/).
