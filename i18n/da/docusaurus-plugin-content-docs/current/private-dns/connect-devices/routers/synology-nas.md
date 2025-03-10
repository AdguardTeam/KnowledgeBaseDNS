---
title: Synology NAS
sidebar_position: 9
---

Synology NAS-routere er utroligt nemme at bruge og kan kombineres til ét enkelt mesh-netværk. Man kan håndtere sit netværk eksternt når som helst, hvor som helst. Man kan også opsætte AdGuard DNS på selve routeren.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Kontrolpanel_ eller _Netværk_.
4. Vælg _Netværksgrænseflade_ eller _Netværksindstillinger_.
5. Vælg relevant Wi-Fi netværk eller kabelforbindelse.
6. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Gem indstillingerne.
8. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](private-dns/connect-devices/other-options/linked-ip.md)
