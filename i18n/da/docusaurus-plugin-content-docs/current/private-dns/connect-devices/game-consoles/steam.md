---
title: Steam Deck
sidebar_position: 5
---

Spillekonsoller understøtter ikke krypteret DNS, men de er velegnede til opsætning af Public AdGuard DNS eller Private AdGuard DNS via en linket IP-adresse.

Det er sandsynligt, at routeren understøtter brugen af krypterede DNS-servere, så man kan altid opsætte Private AdGuard DNS på den og tilslutte spillekonsollen til den.

[Sådan opsættes routeren](/private-dns/connect-devices/routers/routers.md)

## Tilslut AdGuard DNS

Opsæt spillekonsollen til at bruge en offentlig AdGuard DNS-server eller opsæt den via en linket IP:

1. Åbn Stream Deck-indstillingerne ved at klikke på tandhjulsikonet øverst til højre på skærmen.
2. Klik på _Netværk_.
3. Klik på tandhjulsikonet ud for den netværksforbindelse, der skal opsættes.
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. Vælg _Kun automatiske adresser (DHCP)_ eller _Automatisk (DHCP)_.
6. Angiv i feltet _DNS-server_ en af flg. DNS-serveradresser:
    - `94.140.14.49`
    - `94.140.14.59`
7. Gem ændringerne.

Brug af en linket IP (eller dedikeret IP, hvis man har et Team-abonnement) vil være at foretrække:

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
