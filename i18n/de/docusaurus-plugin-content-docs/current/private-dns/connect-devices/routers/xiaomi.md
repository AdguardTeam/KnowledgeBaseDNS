---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have a lot of advantages: Steady strong signal, network security, stable operation, intelligent management, at the same time, the user can connect up to 64 devices to the local Wi-Fi network.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## Use your router admin panel

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
6. Speichern Sie die Einstellungen.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
