---
title: Overview
sidebar_position: 1
slug: /
---

## What is DNS?

DNS staat voor "Domain Name System", en heeft tot doel de namen van websites om te zetten in IP-adressen. Each time you go to a website, your browser sends a DNS query to a DNS server to figure out the IP address of the website. And a regular DNS resolver simply returns the IP address of the requested domain.

:::note

De standaard DNS-server wordt meestal geleverd door je internetprovider. Dit betekent dat je ISP jouw online activiteiten kan volgen en logboeken aan derden kan verkopen.

:::

![Jouw apparaat gebruikt altijd een DNS-server om IP-adressen te verkrijgen van de domeinnaam waar apps naartoe willen navigeren](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Er zijn ook DNS-servers die bepaalde websites op DNS-niveau kunnen blokkeren. Hoe werken ze? Wanneer jouw apparaat een "slecht" verzoek verzendt, of het nu een advertentie of een tracker is, verhindert een DNS-server de verbinding door te reageren met een niet-routeerbaar IP-adres voor een geblokkeerd domein.

## Why use DNS for content blocking

Werkelijk alles is tegenwoordig verbonden met internet, van tv tot slimme lampen, van mobiele apparaten tot slimme auto's. En waar internet is, zijn er advertenties en volgers. In dit geval is een browsergebaseerde advertentieblokker onvoldoende gebleken. To get a better protection, use DNS in combination with VPN and ad blocker.

Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS has no blind spots since it observes all devices and not just the browsers. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering.

## What is AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own base of domain names that serve ads, trackers, and fraud, and it is regularly updated.

![An approximate scheme of how AdGuard DNS works](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS exists in two main forms: [public AdGuard DNS](public-dns/overview.md) and [private AdGuard DNS](private-dns/overview.md). Both of these services do not require installing any apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different services. Their main difference is that you can customize private AdGuard DNS, while public AdGuard DNS cannot.

## DNS filtering module in AdGuard products

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — public or private.
