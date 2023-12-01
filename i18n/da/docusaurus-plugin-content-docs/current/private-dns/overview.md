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

Private AdGuard DNS offers all the advantages of a public AdGuard DNS server, including traffic encryption and domain blocklists. It also offers additional features such as flexible customization, DNS statistics, and Parental control. All these options are easily accessible and managed via a user-friendly dashboard.

### Why you need private AdGuard DNS

I dag kan alt tilsluttes internet: TV, køleskabe, køleskabe, smarte pærer eller højttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilfælde, hvorimod AdGuard DNS — som kan opsættes til at filtrere trafik, blokere indhold og trackere — fungerer på systemniveau.

At one time, the AdGuard product line included only [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Disse løsninger fungerer fint for visse brugere, mens andre savner opsætningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er hér, at Private AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information — alt sammen via et enkelt, brugervenligt kontrolpanel.

### The difference between public and private AdGuard DNS

Here is a simple comparison of features available in public and private AdGuard DNS.

| Offentlig AdGuard DNS          | Privat AdGuard DNS                                                               |
| ------------------------------ | -------------------------------------------------------------------------------- |
| DNS-trafikkryptering           | DNS-trafikkryptering                                                             |
| Forudbestemte domænesortlister | Tilpasselige domænesortlister                                                    |
| -                              | Tilpasselige DNS-filtreringsregler med import-/eksportfunktion                   |
| -                              | Anmod om statistik (se mål for DNS-forepørgsler: Hvilke lande, virksomheder mv.) |
| -                              | Detaljeret forespørgselslog                                                      |
| -                              | Forældrekontrol                                                                  |

## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Gå til [AdGuard DNS-betjeningspanelet](https://agrd.io/download-dns) (hvis ikke indlogget, log ind via din AdGuard-konto)
1. Click *Connect device* and follow on-screen instructions

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

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Linket IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

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

## Server settings

This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire.

### Håndtering af sortlister

The *Blocklists* feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Security settings

Even if you're aware of all the tricks online scammers use, there's always a chance you'll accidentally click a malicious link. To protect yourself from such accidents, go to the *Security settings* section and check the boxes next to the options listed there.

The *Block malicious, phishing, and scam domains* feature will block domains found in the dedicated database. And the *Block newly registered domains* will block all domains registered less than 30 days ago, which are often considered risky for your online privacy.

### Brugerregler

For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called *User rules*. Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Forældrekontrol

For at beskytte sit barn mod onlineindhold, man finder upassende, opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Private AdGuard DNS-kontrolpanel, Forælderkontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)
