---
title: Xiaomi
sidebar_position: 11
---

Xiaomi-routere har mange fordele: Et stabilt, stærkt signal, netværkssikkerhed, robust ydeevne og intelligent håndtering. Brugere kan tilslutte op til 64 enheder til et lokalt Wi-Fi netværk.

Desværre understøtter den ikke krypteret DNS, men den er fantastisk til opsætning af AdGuard DNS via linket IP.

## Brug routerens håndteringspanel

Følg denne vejledning, hvis en Xiaomi-router ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Routeren kan tilgås på `192.168.31.1`, eller hvis ændret, den aktuelle IP-adresse.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Avancerede indstillinger_ eller _Avanceret_, afhængigt af routermodel.
4. Åbn _Netværk_ eller _Internet_ og find DNS eller DNS-indstillinger.
5. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Gem indstillingerne.
7. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
