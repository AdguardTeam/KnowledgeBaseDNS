---
title: Keenetic
sidebar_position: 5
---

Keenetic routere er kendt for deres stabilitet og fleksible opsætninger, og der er nemme at opsætte, så man kan nemt at installere krypteret Private AdGuard DNS på enheden.

## Opsæt DNS-over-HTTPS

1. Open the router admin panel. Den kan tilgås på my.keenetic.net, IP-adressen på routeren eller `192.168.1.1`.
2. Tryk på menuknappen nederst på skærmen, og vælg _Håndtering_.
3. Åbn _Systemindstillinger_.
4. Tryk på _Komponentindstillinger_ → _Systemkomponentindstillinger_.
5. Under _Værktøjer og tjenester_, vælg og installér DNS-over-HTTPS-proxy.
6. Gå til _Menu_ → _Netværksregler_ → _Internetsikkerhed_.
7. Gå til DNS-over-HTTPS-servere, og klik på Tilføj DNS-over-HTTPS server\*.
8. Angiv URL'en på Private AdGuard DNS-serveren i feltet `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`.
9. Klik på _Gem_.

## Opsæt DNS-over-TLS

1. Open the router admin panel. Den kan tilgås på my.keenetic.net, IP-adressen på routeren eller `192.168.1.1`.
2. Tryk på menuknappen nederst på skærmen, og vælg _Håndtering_.
3. Åbn _Systemindstillinger_.
4. Tryk på _Komponentindstillinger_ → _Systemkomponentindstillinger_.
5. Under _Værktøjer og tjenester_, vælg og installér DNS-over-HTTPS-proxy.
6. Gå til _Menu_ → _Netværksregler_ → _Internetsikkerhed_.
7. Gå til DNS-over-HTTPS-servere, og klik på Tilføj DNS-over-HTTPS server\*.
8. Angiv URL'en på Private AdGuard DNS-serveren i feltet `tls://*********.d.adguard-dns.com`.
9. Klik på _Gem_.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Internet_ eller _Hjemmenetværk_.
4. Select _WAN_ or _Internet_.
5. Vælg _DNS_ eller _DNS-indstillinger_.
6. Vælg _Manuel DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Gem indstillingerne.
8. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
