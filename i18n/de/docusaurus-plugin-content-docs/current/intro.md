---
title: Überblick
sidebar_position: 1
slug: /
---

## Was bedeutet DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS steht für „Domain Name System“ und soll Website-Namen in IP-Adressen umwandeln. Jedes Mal, wenn Sie eine Website aufrufen, sendet Ihr Browser eine DNS-Anfrage an einen DNS-Server, um die IP-Adresse der Website zu ermitteln. Und ein normaler DNS-Auflösungsdienst liefert einfach die IP-Adresse der angeforderten Domain.

:::note

The default DNS server is usually provided by your ISP. Das bedeutet, dass Ihr Internetdienstanbieter Ihre Online-Aktivitäten verfolgen und die Protokolle an Dritte verkaufen kann.

:::

![Ihr Gerät verwendet immer einen DNS-Server, um die IP-Adressen der Domains zu erhalten, auf die verschiedene Anwendungen, Dienste usw. zugreifen.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Es gibt auch DNS-Server, die bestimmte Websites auf DNS-Ebene sperren können. Wie funktionieren diese? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart car. Und wo das Internet ist, gibt es auch Werbung und Tracker. In diesem Fall hat sich ein browserbasierter Werbeblocker als unzureichend erwiesen. Um einen besseren Schutz zu erhalten, sollten Sie DNS in Kombination mit einem VPN und einem Werbeblocker nutzen.

Die Verwendung von DNS für das Sperren von Inhalten hat einige Vorteile, aber auch offensichtliche Schwächen. Einerseits ist DNS in der Schleife für Anfragen von allen Geräten und ihren Anwendungen. Andererseits kann die DNS-Sperrung allein keine kosmetische Filterung bieten.

## Was ist AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. Es unterstützt so zuverlässige Verschlüsselungsprotokolle wie DNS-over-HTTPS, DNS-over-TLS und DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own frequently updated database with names of domains that serve ads, trackers, and scam.

![Ein ungefähres Schema der Funktionsweise von AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. Wenn Sie sich die Statistiken von CloudFlare oder Quad9 ansehen, werden Sie feststellen, dass verschlüsselte DNS nur einen kleinen Teil aller Abfragen ausmachen.

AdGuard DNS exists in two main forms: [Public AdGuard DNS](public-dns/overview) and [Private AdGuard DNS](private-dns/overview). Keiner dieser Dienste erfordert die Installation von Apps. Sie sind einfach einzurichten und zu verwenden und bieten den Nutzer:innen ein Minimum an Funktionen, um Werbung, Tracker, bösartige Websites und jugendgefährdende Inhalte (falls erforderlich) zu sperren. Es gibt keine Einschränkungen hinsichtlich der Geräte, mit denen sie verwendet werden können.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot.

## DNS filtering module in AdGuard products

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — Public or Private.
