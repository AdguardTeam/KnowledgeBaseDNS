---
title: UniFi
sidebar_position: 10
---

Der UiFi-Router (allgemein bekannt als die UniFi-Serie von Ubiquiti) hat eine Reihe von Vorteilen, die ihn besonders geeignet für Heim-, Geschäfts- und Unternehmensumgebungen machen. Leider unterstützen diese Router kein verschlüsseltes DNS, eignen sich aber gut für die Einrichtung von AdGuard DNS über verknüpfte IPs.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Melden Sie sich am Ubiquiti UniFi-Controller an.
2. Öffnen Sie _Einstellungen_ → _Netzwerke_.
3. Klicken Sie auf _Netzwerk bearbeiten_ → _WAN_.
4. Wechseln Sie zu _Allgemeine Einstellungen_ → _DNS-Server_ und geben Sie die folgenden DNS-Serveradressen ein:
    - IPv4: `94.140.14.49` und `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
5. Klicken Sie auf _Speichern_.
6. Wechseln Sie zurück zu _Netzwerk_.
7. Wählen Sie _Netzwerk bearbeiten_ → _LAN_.
8. Suchen Sie nach _DHCP Name Server_ und wählen Sie _Manuell_.
9. Geben Sie Ihre Gateway-Adresse im Feld _DNS-Server 1_ ein. Alternativ können Sie die AdGuard DNS-Serveradressen in die Felder _DNS-Server 1_ und _DNS-Server 2_ eingeben:
    - IPv4: `94.140.14.49` und `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
10. Speichern Sie die Einstellungen.
11. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](private-dns/connect-devices/other-options/linked-ip.md)
