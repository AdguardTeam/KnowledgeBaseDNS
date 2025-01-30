---
title: Universelle Anweisungen
sidebar_position: 2
---

Hier sind einige allgemeine Anweisungen zur Einrichtung von Private AdGuard DNS auf Routern. Sie können auf diesen Leitfaden verweisen, wenn Sie Ihren spezifischen Router nicht in der Hauptliste finden. Bitte beachten Sie, dass die hier angegebenen Konfigurationsdetails ungefähr sind und von den Einstellungen Ihres spezifischen Modells abweichen können.

## Administrationsoberfläche Ihres Routers verwenden

1. Öffnen Sie die Einstellungen für Ihren Router. Normalerweise können Sie auf diese über Ihren Browser zugreifen. Abhängig vom Modell Ihres Routers versuchen Sie, eine der folgenden Adressen einzugeben:
   - Linksys- und Asus-Router verwenden typischerweise: [http://192.168.1.1](http://192.168.1.1/)
   - Netgear-Router verwenden typischerweise: [http://192.168.0.1](http://192.168.0.1/) oder [http://192.168.1.1](http://192.168.1.1/). D-Link-Router verwenden typischerweise [http://192.168.0.1](http://192.168.0.1/)
   - Ubiquiti-Router verwenden typischerweise: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Geben Sie das Router-Passwort ein.

   :::note Wichtig

   Wenn das Passwort unbekannt ist, lässt es sich oftmals per Knopfdruck am Router zurücksetzen. Dabei wird der Router gleichzeitig auf die Werkseinstellungen zurückgesetzt. Einige Modelle haben eine dedizierte Verwaltungseinrichtung, die bereits auf Ihrem Computer installiert sein sollte.

   :::

3. Finden Sie heraus, wo die DNS-Einstellungen im Admin-Bereich des Routers zu finden sind. Ändern Sie die aufgeführten DNS-Adressen in die folgenden Adressen:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`

4. Speichern Sie die Einstellungen.

5. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
