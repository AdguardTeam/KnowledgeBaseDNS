---
title: UniFi
sidebar_position: 10
---

UiFi-routeren (almindeligvis kendt som Ubiquitis UniFi-serie) har en række fordele, der gør den særligt velegnet til hjemme-, erhvervs- og virksomhedsmiljøer. Desværre understøtter den ikke krypteret DNS, men den er fantastisk til opsætning af AdGuard DNS via linket IP.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Log ind på Ubiquiti UniFi-controlleren.
2. Gå til _Indstillinger_ → _Netværk_.
3. Klik på _Redigér netværk_ → _WAN_.
4. Fortsæt til _Almindelige indstillinger_ → _DNS-server_, og angiv flg. DNS-serveradresser.
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Klik på _Gem_.
6. Returnér til _Netværk_.
7. Vælg _Redigér netværk_ → _LAN_.
8. Find _DHCP Name Server_ and select _Manual_.
9. Enter your gateway address in the _DNS Server 1_ field. Alternatively, you can enter the AdGuard DNS server addresses in _DNS Server 1_ and _DNS Server 2_ fields:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
10. Save the settings.
11. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
