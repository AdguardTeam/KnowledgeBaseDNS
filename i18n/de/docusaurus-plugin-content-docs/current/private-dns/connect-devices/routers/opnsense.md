---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Use your router admin panel

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Click _Services_ in the top menu, then select _DHCP Server_ from the drop-down menu.
4. On the _DHCP Server_ page, select the interface that you want to configure the DNS settings for (e.g., LAN, WLAN).
5. Scroll down to _DNS Servers_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Optionally, you can enable DNSSEC for enhanced security.
9. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
