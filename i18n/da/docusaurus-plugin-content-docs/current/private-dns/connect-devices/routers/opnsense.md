---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Click _Services_ in the top menu, then select _DHCP Server_ from the drop-down menu.
4. On the _DHCP Server_ page, select the interface that you want to configure the DNS settings for (e.g., LAN, WLAN).
5. Scroll down to _DNS Servers_.
6. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Save the settings.
8. Optionally, you can enable DNSSEC for enhanced security.
9. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
