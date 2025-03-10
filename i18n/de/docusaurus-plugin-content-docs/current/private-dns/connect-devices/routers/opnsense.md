---
title: OPNSense
sidebar_position: 8
---

Die OPNSense-Firmware wird häufig verwendet, um drahtlose Zugangspunkte, DHCP-Server, DNS-Server zu konfigurieren, und ermöglicht es Ihnen, AdGuard DNS direkt auf dem Gerät zu konfigurieren.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Klicken Sie im oberen Menü auf _Dienste_ und wählen Sie dann _DHCP-Server_ aus dem Auswahlmenü.
4. Wählen Sie auf der Seite _DHCP-Server_ die Schnittstelle aus, für die Sie die DNS-Einstellungen konfigurieren möchten (z. B. LAN, WLAN).
5. Blättern Sie nach unten zu _DNS-Server_.
6. Wählen Sie _Manuelles DNS_. Wählen Sie _Diese DNS-Server verwenden_ oder _DNS-Server manuell angeben_ und geben Sie die folgenden DNS-Serveradressen ein:
    - IPv4: `94.140.14.49` und `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Optional können Sie DNSSEC aktivieren, um die Sicherheit zu erhöhen.
9. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
