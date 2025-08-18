---
title: Überblick
sidebar_position: 1
slug: /
---

## Was bedeutet DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS stands for *Domain Name System*, and its purpose is to convert website names into IP addresses. Jedes Mal, wenn Sie eine Website aufrufen, sendet Ihr Browser eine DNS-Anfrage an einen DNS-Server, um die IP-Adresse der Website zu ermitteln. Und ein normaler DNS-Auflösungsdienst liefert einfach die IP-Adresse der angeforderten Domain.

:::note

Der Standard-DNS-Server wird in der Regel von Ihrem Internetdienstanbieter bereitgestellt. Das bedeutet, dass Ihr Internetdienstanbieter Ihre Online-Aktivitäten verfolgen und die Protokolle an Dritte verkaufen kann.

:::

![Ihr Gerät verwendet immer einen DNS-Server, um die IP-Adressen der Domains zu erhalten, auf die verschiedene Anwendungen, Dienste usw. zugreifen.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Es gibt auch DNS-Server, die bestimmte Websites auf DNS-Ebene sperren können. Wie funktionieren diese? When your device sends a bad request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Warum DNS für das Sperren von Inhalten verwenden?

Heutzutage ist absolut alles mit dem Internet verbunden, vom Fernseher bis zur intelligenten Glühbirne, von mobilen Geräten bis zum intelligenten Fahrzeug. Und wo das Internet ist, gibt es auch Werbung und Tracker. In diesem Fall hat sich ein browserbasierter Werbeblocker als unzureichend erwiesen. Um einen besseren Schutz zu erhalten, sollten Sie DNS in Kombination mit einem VPN und einem Werbeblocker nutzen.

Die Verwendung von DNS für das Sperren von Inhalten hat einige Vorteile, aber auch offensichtliche Schwächen. Einerseits ist DNS in der Schleife für Anfragen von allen Geräten und ihren Anwendungen. Andererseits kann die DNS-Sperrung allein keine kosmetische Filterung bieten.

## Was ist AdGuard DNS?

AdGuard DNS ist einer der datenschutzfreundlichsten DNS-Dienste auf dem Markt. Es unterstützt so zuverlässige Verschlüsselungsprotokolle wie DNS-over-HTTPS, DNS-over-TLS und DNS-over-QUIC. Er kann als normaler DNS-Resolver im Nicht-Filter-Modus arbeiten, aber auch eine Inhaltssperre auf DNS-Ebene bereitstellen: Anfragen an Werbe-, Tracking- und/oder Erwachsenen-Domains (optional) identifizieren und mit einer leeren Antwort beantworten. AdGuard verfügt über eine eigene, regelmäßig aktualisierte Datenbank mit den Namen von Domains, die Werbung, Tracker und Betrug ausliefern.

![Ein ungefähres Schema der Funktionsweise von AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

Etwa 75 % des Datenverkehrs von AdGuard DNS ist verschlüsselt. Das ist tatsächlich das, was inhaltssperrende DNS-Server von anderen unterscheidet. Wenn Sie sich die Statistiken von CloudFlare oder Quad9 ansehen, werden Sie feststellen, dass verschlüsselte DNS nur einen kleinen Teil aller Abfragen ausmachen.

AdGuard DNS gibt es in zwei Hauptformen: [Public AdGuard DNS](public-dns/overview) und [Private AdGuard DNS](private-dns/overview). Keiner dieser Dienste erfordert die Installation von Apps. Sie sind einfach einzurichten und zu verwenden und bieten den Nutzer:innen ein Minimum an Funktionen, um Werbung, Tracker, bösartige Websites und jugendgefährdende Inhalte (falls erforderlich) zu sperren. Es gibt keine Einschränkungen hinsichtlich der Geräte, mit denen sie verwendet werden können.

Trotz vieler Gemeinsamkeiten sind der private AdGuard DNS und der öffentliche AdGuard DNS zwei unterschiedliche Produkte. Der Hauptunterschied besteht darin, dass Sie den Privaten AdGuard DNS anpassen können, während dies beim Öffentlichen AdGuard DNS nicht möglich ist.

## DNS-Filtermodul in AdGuard-Produkten

Alle großen AdGuard-Produkte, einschließlich AdGuard VPN, verfügen über ein **DNS-Filtermodul**, bei dem Sie einen DNS-Server eines Anbieters Ihres Vertrauens auswählen können. Natürlich stehen auch AdGuard DNS Default, AdGuard DNS Non-filtering und AdGuard DNS Family Protection auf der Liste. Darüber hinaus ermöglichen die AdGuard-Apps den Benutzern die [einfache Konfiguration und Nutzung von AdGuard DNS](https://adguard-dns.io/public-dns.html) — öffentlich oder privat.
