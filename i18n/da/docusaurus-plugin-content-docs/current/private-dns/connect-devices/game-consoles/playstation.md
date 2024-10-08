---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Spillekonsoller understøtter ikke krypteret DNS, men de er velegnede til opsætning af Public AdGuard DNS eller Private AdGuard DNS via en linket IP-adresse.

Det er sandsynligt, at routeren understøtter brugen af krypterede DNS-servere, så man kan altid opsætte Private AdGuard DNS på den og tilslutte spillekonsollen til den.

[Sådan opsættes routeren](/private-dns/connect-devices/routers/routers.md)

## Tilslut AdGuard DNS

Opsæt spillekonsollen til at bruge en offentlig AdGuard DNS-server eller opsæt den via en linket IP:

1. Tænd PS4/PS5-konsollen og log ind på brugerkontoen.
2. Fra startskærmen vælges tandhjulsikonet i øverste række.
3. Vælg _Netværk_ i menuen _Indstillinger_.
4. Select _Set Up Internet Connection_.
5. Choose _Use Wi-Fi_ or _Use a LAN Cable_, depending on your network setup.
6. Select _Custom_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. In the _DNS Server_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see "Internet Connection: Successful", save your settings.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
