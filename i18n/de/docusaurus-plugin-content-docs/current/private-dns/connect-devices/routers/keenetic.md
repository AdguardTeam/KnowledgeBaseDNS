---
title: Keenetic
sidebar_position: 5
---

Keenetic-Router sind bekannt für ihre Stabilität und flexible Konfigurationen und sind einfach einzurichten, sodass Sie problemlos verschlüsselte Private AdGuard DNS auf Ihrem Gerät installieren können.

## DNS-over-HTTPS konfigurieren

1. Öffnen Sie das Router-Admin-Panel. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. Click _Save_.

## DNS-over-TLS konfigurieren

1. Öffnen Sie das Router-Admin-Panel. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. Click _Save_.

## Use your router admin panel

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Open _Internet_ or _Home Network_.
4. Select _WAN_ or _Internet_.
5. Select _DNS_ or _DNS Settings_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
