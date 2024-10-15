---
title: Synology NAS
sidebar_position: 9
---

Synology NAS-Router sind einfach zu benutzen und können in einem einzigen Mesh-Netzwerk kombiniert werden. Sie können Ihr Netzwerk von überall und jederzeit verwalten. Sie können auch AdGuard DNS direkt auf dem Router konfigurieren.

## Use your router admin panel

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Open _Control Panel_ or _Network_.
4. Select _Network Interface_ or _Network Settings_.
5. Select your Wi-Fi network or wired connection.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](private-dns/connect-devices/other-options/linked-ip.md)
