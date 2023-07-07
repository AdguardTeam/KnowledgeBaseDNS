---
title: Überblick
sidebar_position: 1
slug: /
---

## Was bedeutet DNS?

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. Each time you go to a website, your browser sends a DNS query to a DNS server to figure out the IP address of the website. Und ein normaler DNS-Auflösungsdienst liefert einfach die IP-Adresse der angeforderten Domain.

> The default DNS server is usually provided by your ISP. This means that your ISP can track your online activity and sell logs to third parties.

![Ihr Gerät verwendet immer einen DNS-Server, um die IP-Adressen der Domainnamen zu erhalten, zu denen Apps navigieren möchten](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Es gibt auch DNS-Server, die bestimmte Websites auf DNS-Ebene sperren können. How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart auto. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker has proven insufficient. To get a better protection, use DNS in combination with VPN and ad blocker.

Die Verwendung von DNS für das Sperren von Inhalten hat einige Vorteile, aber auch offensichtliche Schwächen. On the one hand, DNS has no blind spots since it observes all devices and not just the browsers. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering.

## What is AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard verfügt über eine eigene Datenbank mit Domainnamen, die Werbung, Tracker und Betrugsversuche schalten, und wird regelmäßig aktualisiert.

![An approximate scheme of how AdGuard DNS works](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

> About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS exists in two main forms: [public AdGuard DNS](public-dns/overview.md) and [private AdGuard DNS](private-dns/overview.md). Both of these services do not require installing any apps. Sie sind einfach einzurichten und zu verwenden und bieten den Nutzern die Mindestfunktionen, die zum Sperren von Werbung, Trackern, bösartigen Websites und nicht jugendfreien Inhalten (falls erforderlich) erforderlich sind. There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different services. Their main difference is that you can customize private AdGuard DNS, while public AdGuard DNS cannot.

## DNS filtering module in AdGuard products

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — public or private.
