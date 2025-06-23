---
title: Synology NAS
sidebar_position: 9
---

Synology NAS-Router sind einfach zu benutzen und können in einem einzigen Mesh-Netzwerk kombiniert werden. Sie können Ihr Netzwerk von überall und jederzeit verwalten. Sie können auch AdGuard DNS direkt auf dem Router konfigurieren.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie _Systemsteuerung_ oder _Netzwerk_.
4. Wählen Sie _Netzwerkschnittstelle_ oder _Netzwerkeinstellungen_.
5. Wählen Sie Ihr WLAN-Netzwerk oder Ihre Kabelverbindung.
6. Wählen Sie _Manuelles DNS_. Wählen Sie _Diese DNS-Server verwenden_ oder _DNS-Server manuell angeben_ und geben Sie die folgenden DNS-Serveradressen ein:
    - IPv4: `94.140.14.49` und `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
