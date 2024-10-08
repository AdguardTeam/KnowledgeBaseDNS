---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have a lot of advantages: Steady strong signal, network security, stable operation, intelligent management, at the same time, the user can connect up to 64 devices to the local Wi-Fi network.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Save the settings.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
