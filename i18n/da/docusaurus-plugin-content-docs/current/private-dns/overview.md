---
title: Oversigt
sidebar_position: 1
---

:::info

With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device

Hurtig-link: [Prøv AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# Private AdGuard DNS

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Hvad er Private AdGuard DNS?

Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard.

## Hvorfor man behøver Private AdGuard DNS

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

We already have [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard.

## Forskellen mellem Private og Public AdGuard DNS

Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers.

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

**Understøttede platforme:**
* Android
* iOS
* Windows
* Mac
* Linux
* Routere
* Spillekonsoller

Hver enhed, der tilføjes i AdGuard DNS-panelet, har sin egen unikke adresse, som kan bruges, hvis enheden understøtter moderne, krypterede DNS-protokoller (DoH, DoT og DoQ).

### Linket IP

Understøtter enheden ikke krypteret DNS, og man skal bruge alm. DNS, er der en anden måde, der lader AdGuard DNS genkende enheden — link dens IP-adresse. In this case AdGuard DNS counts all plain DNS requests that come from that IP address towards that "device".

Det eneste krav for at linke en IP, er, at **det skal være en privat/hjemme IP-adresse**.

:::bemærk

En hjemme IP-adresse er en IP-adresse tildelt en enhed, der er tilsluttet en privat internetudbyder. Den er typisk knyttet til en fysisk placering og tildeles enkelte boliger/lejligheder. Hjemme IP-adresser bruges af alm. internetbrugere til deres daglige onlineaktiviteter, såsom at surfe på nettet, få adgang til sociale medieplatforme, sende e-mails eller streame indhold.

:::

Forsøges en hjemme IP-adresse linket uden at AdGuard DNS vil tillader dette, bedes vores supportteam på support@adguard.com kontaktet.

## Private AdGuard DNS-funktioner

### Sortlistehåndtering

Der kan med funktionen "Sortlister" opsættes domæner, som skal blokeres, og domæner, som ikke skal. Vælg mellem et bredt udvalg af sortlister til forskellige formål.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Brugerregler

Til situationer, hvor præinstallerede *Sortlister* med tusindvis af regler ikke er nok, findes en funktion kaldet "Brugerregler". Her kan der manuelt tilføjes tilpassede regler for at blokere/afblokere et bestemt domæne eller importere tilpassede regellister (tjek [syntaks for DNS-filtreringsregler](../general/dns-filtering-syntax.md)). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistik

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

For at beskytte sit barn mod onlineindhold, man finder upassende, så opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Private AdGuard DNS-kontrolpanel, Forælderkontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

:::bemærk

Har man endnu ikke Private AdGuard DNS, kan den fås via det officielle websted [](https://adguard-dns.io/).

:::