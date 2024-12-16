---
title: Keenetic
sidebar_position: 5
---

Keenetic-Router sind bekannt für ihre Stabilität und flexible Konfigurationen und sind einfach einzurichten, sodass Sie problemlos verschlüsselte Private AdGuard DNS auf Ihrem Gerät installieren können.

## DNS-over-HTTPS konfigurieren

1. Öffnen Sie das Router-Admin-Panel. Der Zugriff erfolgt über my.keenetic.net, die IP-Adresse Ihres Routers oder `192.168.1.1`.
2. Drücken Sie die Menütaste unten auf dem Bildschirm und wählen Sie _Verwaltung_.
3. Öffnen Sie _Systemeinstellungen_.
4. Drücken Sie _Komponentenoptionen_ → _Systemkomponentenoptionen_.
5. Wählen Sie unter _Dienstprogramme und Dienste_ den DNS-over-HTTPS-Proxy aus und installieren Sie ihn.
6. Wechseln Sie zu _Menü_ → _Netzwerkregeln_ → _Internetsicherheit_.
7. Navigieren Sie zu DNS-over-HTTPS-Servern und klicken Sie auf _DNS-over-HTTPS-Server hinzufügen_.
8. Geben Sie die URL des Private AdGuard DNS-Servers in das Feld `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` ein.
9. Klicken Sie auf _Speichern_.

## DNS-over-TLS konfigurieren

1. Öffnen Sie das Router-Admin-Panel. Der Zugriff erfolgt über my.keenetic.net, die IP-Adresse Ihres Routers oder `192.168.1.1`.
2. Drücken Sie die Menütaste unten auf dem Bildschirm und wählen Sie _Verwaltung_.
3. Öffnen Sie _Systemeinstellungen_.
4. Drücken Sie _Komponentenoptionen_ → _Systemkomponentenoptionen_.
5. Wählen Sie unter _Dienstprogramme und Dienste_ den DNS-over-HTTPS-Proxy aus und installieren Sie ihn.
6. Wechseln Sie zu _Menü_ → _Netzwerkregeln_ → _Internetsicherheit_.
7. Navigieren Sie zu DNS-over-HTTPS-Servern und klicken Sie auf _DNS-over-HTTPS-Server hinzufügen_.
8. Geben Sie die URL des Privaten AdGuard DNS-Servers in das Feld `tls://*********.d.adguard-dns.com` ein.
9. Klicken Sie auf _Speichern_.

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie _Internet_ oder _Heimnetzwerk_.
4. Wählen Sie _WAN_ oder _Internet_.
5. Wählen Sie _DNS_ oder _DNS-Einstellungen_.
6. Wählen Sie _Manuelles DNS_. Wählen Sie _Diese DNS-Server verwenden_ oder _DNS-Server manuell angeben_ und geben Sie die folgenden DNS-Serveradressen ein:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
