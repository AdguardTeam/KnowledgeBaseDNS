---
title: Visão Geral
sidebar_position: 1
slug: /
---

## O que é DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS stands for "Domain Name System", and its purpose is to convert website names into IP addresses. Cada vez que você acessa um site, seu navegador envia uma consulta DNS a um servidor DNS para descobrir o endereço IP do site. E um resolvedor de DNS regular simplesmente retorna o endereço IP do domínio solicitado.

:::note

The default DNS server is usually provided by your ISP. This means that your ISP can track your online activity and sell logs to third parties.

:::

![Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

There are also DNS servers that can block certain websites at DNS-level. How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart car. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker has proven insufficient. To get a better protection, use DNS in combination with VPN and ad blocker.

Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS is in the loop for queries from all devices and their apps. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering.

## What is AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own frequently updated database with names of domains that serve ads, trackers, and scam.

![An approximate scheme of how AdGuard DNS works](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS exists in two main forms: [Public AdGuard DNS](public-dns/overview) and [Private AdGuard DNS](private-dns/overview). None of these services require the installation of apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot.

## Módulo de filtragem de DNS em produtos AdGuard

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — Public or Private.
