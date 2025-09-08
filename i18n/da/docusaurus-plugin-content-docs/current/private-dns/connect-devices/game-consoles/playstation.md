---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Spillekonsoller understøtter ikke krypteret DNS, men de er velegnede til opsætning af Public AdGuard DNS eller Private AdGuard DNS via en linket IP-adresse.

Det er sandsynligt, at routeren understøtter brugen af krypterede DNS-servere, så man kan altid opsætte Private AdGuard DNS på den og tilslutte spillekonsollen til den.

[Sådan opsættes routeren](/private-dns/connect-devices/routers/routers.md)

## Tilslut AdGuard DNS

Opsæt spillekonsollen til at bruge en offentlig AdGuard DNS-server eller opsæt den via en linket IP:

### PlayStation 4

1. Tænd PS4-konsollen og log ind på brugerkontoen.
2. Fra startskærmen vælges tandhjulsikonet i øverste række.
3. Gå til _Indstillinger_ → _Netværk_ → _Indstillinger_.
4. Vælg _Opsæt internetforbindelse_.
5. Vælg _Brug et LAN-kabel_ → _Let_.
6. Vælg _Manuel_ og dernæst _Automatisk_ for _IP-adresseindstillinger_.
7. For _DHCP-værtsnavn_ vælges _Angiv ikke_.
8. For _DNS-indstillinger_ vælges _Manuel_.
9. Angiv i feltet _DNS-server_ en af flg. DNS-serveradresser:
    - `94.140.14.49`
    - `94.140.14.59`
10. Vælg _Næste_ for at fortsætte.
11. På skærmen _MTU-indstillinger_ vælges _Automatisk_.
12. På skærmen _Proxyserver_ vælges _Anvend ikke_.
13. Vælg _Test internetforbindelse_ for at teste de nye DNS-indstillinger.
14. Når testen er færdig, og beskeden "Internetforbindelse: Etableret" ses, gem indstillingerne.

### PlayStation 5

1. Tænd PS5-konsollen og log ind på brugerkontoen.
2. Fra startskærmen vælges tandhjulsikonet i øverste række.
3. Gå til _Indstillinger_ → _Netværk_ → _Indstillinger_.
4. Vælg _Opsæt internetforbindelse_.
5. Vælg _Opsætning af kablet LAN_ → _Tilslut_.
6. Vælg _Manuel_ og dernæst _Automatisk_ for _IP-adresseindstillinger_.
7. For _DHCP-værtsnavn_ vælges _Angiv ikke_.
8. For _DNS-indstillinger_ vælges _Manuel_.
9. Angiv i feltet _DNS-server_ en af flg. DNS-serveradresser:
    - `94.140.14.49`
    - `94.140.14.59`
10. Vælg _Næste_ for at fortsætte.
11. På skærmen _MTU-indstillinger_ vælges _Automatisk_.
12. På skærmen _Proxyserver_ vælges _Anvend ikke_.
13. Vælg _Test internetforbindelse_ for at teste de nye DNS-indstillinger.
14. Når testen er færdig, og beskeden "Internetforbindelse: Etableret" ses, gem indstillingerne.

Brug af en linket IP (eller dedikeret IP, hvis man har et Team-abonnement) vil være at foretrække:

 - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
