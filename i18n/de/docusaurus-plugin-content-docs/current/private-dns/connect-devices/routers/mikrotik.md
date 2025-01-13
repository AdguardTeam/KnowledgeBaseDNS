---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

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
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - Klicken Sie auf _OK_
4. Statische DNS-Einträge erstellen:
   - Klicken Sie in den _DNS-Einstellungen_ auf _Statisch_
   - Klicken Sie auf _Hinzufügen_
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - Setzen Sie _Address_ auf `94.140.14.49`
   - Set _TTL_ to `1d 00:00:00`
   - Wiederholen Sie den Vorgang, um einen identischen Eintrag zu erstellen, aber mit _Address_ auf `94.140.14.59` gesetzt
5. Peer-DNS auf dem DHCP-Client deaktivieren:
   - Öffnen Sie _IP_ → _DHCP-Client_
   - Doppelklicken Sie auf den Client, der für Ihre Internetverbindung verwendet wird (normalerweise auf der WAN-Schnittstelle)
   - Deaktivieren Sie _Peer DNS verwenden_
   - Klicken Sie auf _OK_
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Aufrufen der MikroTik-Router-Einstellungen:
   - Öffnen Sie Ihren Browser und rufen Sie die IP-Adresse Ihres Routers auf (normalerweise `192.168.88.1`)
   - Sie können auch Winbox verwenden, um eine Verbindung zu Ihrem MikroTik-Router herzustellen
   - Geben Sie den Benutzernamen und das Passwort des Administrators ein
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4: `94.140.14.49` und `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. Peer-DNS auf dem DHCP-Client deaktivieren:
   - Go to _IP_ → _DHCP Client_
   - Doppelklicken Sie auf den Client, der für Ihre Internetverbindung verwendet wird (normalerweise auf der WAN-Schnittstelle)
   - Uncheck _Use Peer DNS_
   - Click _OK_
