---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Brug routerens håndteringspanel

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Klik på _Tjenester_ i topmenuen, og vælg dernæst _DHCP-server_ fra rullemenuen.
4. På siden _DHCP-server_ vælges grænsefladen, for hvilken DNS-indstillingerne skal opsættes (f.eks. LAN, WLAN).
5. Rul ned til _DNS-servere_.
6. Vælg _Manuel DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Gem indstillingerne.
8. DNSSEC kan valgfrit slås til for øget sikkerhed.
9. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
