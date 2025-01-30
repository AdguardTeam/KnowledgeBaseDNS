---
title: MikroTik
sidebar_position: 6
---

MikroTik-Router verwenden das quelloffene Betriebssystem RouterOS, das Routing-, drahtlose Netzwerk- und Firewall-Dienste für Heim- und kleine Büronetzwerke bietet.

## DNS-over-HTTPS konfigurieren

1. Aufrufen der MikroTik-Router-Einstellungen:
   - Öffnen Sie Ihren Browser und rufen Sie die IP-Adresse Ihres Routers auf (normalerweise `192.168.88.1`)
   - Sie können auch Winbox verwenden, um eine Verbindung zu Ihrem MikroTik-Router herzustellen
   - Geben Sie den Benutzernamen und das Passwort des Administrators ein
2. Stammzertifikat importieren:
   - Laden Sie das neueste Paket mit vertrauenswürdigen Stammzertifikaten herunter: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Navigieren Sie zu _Dateien_. Klicken Sie auf _Hochladen_ und wählen Sie das heruntergeladene cacert.pem-Zertifikatpaket aus
   - Öffnen Sie _System_ → _Zertifikate_ → _Importieren_
   - Wählen Sie im Feld _Dateiname_ die hochgeladene Zertifikatsdatei
   - Klicken Sie auf _Importieren_
3. DNS-over-HTTPS konfigurieren:
   - Öffnen Sie _IP_ → _DNS_
   - Fügen Sie im Abschnitt _Server_ die folgenden AdGuard DNS-Server hinzu:
     - `94.140.14.49`
     - `94.140.14.59`
   - Setzen Sie _Allow Remote Requests_ auf _Yes_ (dies ist entscheidend für das Funktionieren von DNS-over-HTTPS)
   - Geben Sie im Feld _DoH-Server verwenden_ die URL des privaten AdGuard DNS-Servers ein: `https://d.adguard-dns.com/dns-query/*******`
   - Klicken Sie auf _OK_
4. Statische DNS-Einträge erstellen:
   - Klicken Sie in den _DNS-Einstellungen_ auf _Statisch_
   - Klicken Sie auf _Hinzufügen_
   - Setzen Sie _Name_ auf d.adguard-dns.com
   - Setzen Sie _Type_ auf A
   - Setzen Sie _Address_ auf `94.140.14.49`
   - Setzen Sie _TTL_ auf 1d 00:00:00
   - Wiederholen Sie den Vorgang, um einen identischen Eintrag zu erstellen, aber mit _Address_ auf `94.140.14.59` gesetzt
5. Peer-DNS auf dem DHCP-Client deaktivieren:
   - Öffnen Sie _IP_ → _DHCP-Client_
   - Doppelklicken Sie auf den Client, der für Ihre Internetverbindung verwendet wird (normalerweise auf der WAN-Schnittstelle)
   - Deaktivieren Sie _Peer DNS verwenden_
   - Klicken Sie auf _OK_
6. Testen und überprüfen:
   - Möglicherweise müssen Sie Ihren MikroTik-Router neu starten, damit alle Änderungen wirksam werden
   - Leeren Sie den DNS-Cache Ihres Browsers. Sie können ein Tool wie [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) verwenden, um zu prüfen, ob Ihre DNS-Anfragen jetzt über AdGuard geleitet werden

## Mein Router unterstützt kein DNS-over-HTTPS

Verwenden Sie diese Anleitung, wenn Ihr MikroTik-Router keine DNS-over-HTTPS-Konfiguration unterstützt:

1. Aufrufen der MikroTik-Router-Einstellungen:
   - Öffnen Sie Ihren Browser und rufen Sie die IP-Adresse Ihres Routers auf (normalerweise `192.168.88.1`)
   - Sie können auch Winbox verwenden, um eine Verbindung zu Ihrem MikroTik-Router herzustellen
   - Geben Sie den Benutzernamen und das Passwort des Administrators ein
2. Einfaches DNS konfigurieren:
   - Öffnen Sie _IP_ ➜ _DNS_
   - Fügen Sie im Abschnitt _Server_ die folgenden AdGuard DNS-Server hinzu:
     - IPv4: `94.140.14.49` und `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
     - Dedizierte IPv6: Private AdGuard DNS unterstützt dedizierte IPv6-Adressen. Um sie zu finden, öffnen Sie die Übersicht, klicken Sie auf _Einstellungen_ neben Ihrem Gerät ➜ _Einzelne DNS-Serveradressen_ ➜ _Zugeordnete IPv6-Adressen_.
   - Klicken Sie auf _OK_
3. Öffnen Sie _Webfig_ → _IP_ → _DNS_.
   - Öffnen Sie _IP_ ➜ _DHCP-Client_
   - Doppelklicken Sie auf den Client, der für Ihre Internetverbindung verwendet wird (normalerweise auf der WAN-Schnittstelle)
   - Deaktivieren Sie _Peer DNS verwenden_
   - Klicken Sie auf _OK_
