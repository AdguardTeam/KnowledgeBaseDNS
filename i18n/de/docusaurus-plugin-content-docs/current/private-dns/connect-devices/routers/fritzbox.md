---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box bietet maximale Flexibilität für alle Geräte, indem gleichzeitig die 2,4-GHz- und 5-GHz-Frequenzbänder genutzt werden. Alle Geräte, die mit der FRITZ!Box verbunden sind, sind vollständig gegen Angriffe aus dem Internet geschützt. Die Konfiguration dieser Router-Marke ermöglicht es Ihnen auch, verschlüsseltes AdGuard DNS einzurichten.

## DNS-over-TLS konfigurieren

1. Öffnen Sie das Router-Admin-Panel. Der Zugriff erfolgt über fritz.box, die IP-Adresse Ihres Routers oder `192.168.178.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie _Internet_ oder _Heimnetzwerk_.
4. Wählen Sie _DNS_ oder _DNS-Einstellungen_.
5. Aktivieren Sie unter DNS-over-TLS (DoT) das Kontrollkästchen _DNS-over-TLS verwenden_, wenn dies vom Anbieter unterstützt wird.
6. Wählen Sie _Benutzerdefinierte TLS-Servernamen-Angabe (SNI) verwenden_ und geben Sie die AdGuard DNS-Serveradresse ein: `{Your_Device_ID}.d.adguard-dns.com`.
7. Speichern Sie die Einstellungen.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anleitung, wenn Ihr FritzBox-Router keine DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie _Internet_ oder _Heimnetzwerk_.
4. Wählen Sie _DNS_ oder _DNS-Einstellungen_.
5. Wählen Sie _Manuelles DNS_, dann _Diese DNS-Server verwenden_ oder _DNS-Server manuell angeben_ und geben Sie die folgenden DNS-Serveradressen ein:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
6. Speichern Sie die Einstellungen.
7. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
