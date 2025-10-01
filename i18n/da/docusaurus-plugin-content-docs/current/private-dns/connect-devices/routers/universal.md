---
title: Universalvejledning
sidebar_position: 2
---

Her er nogle generelle vejledninger til opsætning af Private AdGuard DNS på routere. Man kan henholde sig til denne guide, hvis en bestemt router ikke findes på hovedlisten. Bemærk, at de her angivne opsætningsoplysninger er omtrentlige og kan afvige fra indstillingerne på den routermodel, man selv har.

## Brug routerens håndteringspanel

1. Åbn præferencerne for routeren. Man kan som regel tilgå dem via en webbrowser. Afhængigt af routermodel, prøv at indtaste en af flg. adresser:
   - Linksys- og Asus-routere bruger typisk: [http://192.168.1.1](http://192.168.1.1/)
   - Netgear-routere bruger typisk: [http://192.168.0.1](http://192.168.0.1/) eller [http://192.168.1.1](http://192.168.1.1/) D-Link-routere bruger typisk: [http://192.168.0.1](http://192.168.0.1/)
   - Ubiquiti-routere bruger typisk: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Angiv routerens adgangskode.

   :::note Vigtigt

   Er adgangskoden ikke kendt, kan man ofte nulstille routeren via en trykknap. Dette nulstille dog routeren til sine fabriksindstillingerne. Nogle modeller har en dedikeret administrationsapplikation, man allerede burde have installeret på sin computer.

   :::

3. Find ud af, hvor DNS-indstillingerne er placeret i routerens admin-konsol. Erstat de aktuelle DNS-adresser med flg.:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`

4. Gem indstillingerne.

5. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'erIPs](/private-dns/connect-devices/other-options/linked-ip.md)
