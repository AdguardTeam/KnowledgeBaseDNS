---
title: Xiaomi
sidebar_position: 11
---

Xiaomi-Router haben viele Vorteile: Stabiles starkes Signal, Netzwerksicherheit, stabile Funktion, intelligente Verwaltung. Gleichzeitig kann man bis zu 64 Geräte mit dem lokalen WLAN verbinden.

Leider unterstützen diese Router kein verschlüsseltes DNS, eignen sich aber gut für die Einrichtung von AdGuard DNS über verknüpfte IPs.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Der Zugriff erfolgt über `192.168.31.1` oder die IP-Adresse Ihres Routers.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie je nach Routermodell _Erweiterte Einstellungen_ oder _Erweitert_.
4. Öffnen Sie _Netzwerk_ oder _Internet_ und suchen Sie nach DNS oder DNS-Einstellungen.
5. Wählen Sie _Manuelles DNS_. Wählen Sie _Diese DNS-Server verwenden_ oder _DNS-Server manuell angeben_ und geben Sie die folgenden DNS-Serveradressen ein:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
6. Speichern Sie die Einstellungen.
7. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
