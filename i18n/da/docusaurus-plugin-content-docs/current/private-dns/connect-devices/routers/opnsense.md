---
title: OPNSense
sidebar_position: 8
---

OPNSense-firmware bruges ofte til at opsætte trådløse adgangspunkter, DHCP- og DNS-servere, så man kan opsætte AdGuard DNS direkte på enheden.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Klik på _Tjenester_ i topmenuen, og vælg dernæst _DHCP-server_ fra rullemenuen.
4. På siden _DHCP-server_ vælges grænsefladen, for hvilken DNS-indstillingerne skal opsættes (f.eks. LAN, WLAN).
5. Rul ned til _DNS-servere_.
6. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Gem indstillingerne.
8. DNSSEC kan valgfrit slås til for øget sikkerhed.
9. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
