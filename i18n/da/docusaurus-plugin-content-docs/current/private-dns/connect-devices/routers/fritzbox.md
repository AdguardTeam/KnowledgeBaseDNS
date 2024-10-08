---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box provides maximum flexibility for all devices by simultaneously using the 2.4 GHz and 5 GHz frequency bands. All devices connected to the FRITZ!Box are fully protected against attacks from the Internet. The configuration of this brand of routers also allows you to set up encrypted Private AdGuard DNS.

## Opsæt DNS-over-TLS

1. Åbn routerens admin-panel. It can be accessed at fritz.box, the IP address of your router, or `192.168.178.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Open _Internet_ or _Home Network_.
4. Select _DNS_ or _DNS Settings_.
5. Under DNS-over-TLS (DoT), check _Use DNS-over-TLS_ if supported by the provider.
6. Select _Use Custom TLS Server Name Indication (SNI)_ and enter the AdGuard Private DNS server address:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Save the settings.

## Brug routerens håndteringspanel

Use this guide if your FritzBox router does not support DNS-over-TLS configuration:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Open _Internet_ or _Home Network_.
4. Vælg _DNS_ eller _DNS-indstillinger_.
5. Vælg _Manuel DNS_, dernæst _Anvend disse DNS-servere_ eller _Angiv DNS-server manuelt_ og angiv flg. DNS-serveradresser:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Gem indstillingerne.
7. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
