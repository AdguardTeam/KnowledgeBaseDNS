---
title: 개요
sidebar_position: 1
slug: /
---

## What is DNS?

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. 웹 사이트로 이동할 때마다, 브라우저는 웹 사이트의 IP 주소를 파악하기 위해 DNS 서버에 DNS 쿼리를 전송합니다.  그리고 일반 DNS 클라이언트는 단순히 요청된 도메인의 IP 주소를 반환합니다.

> 기본 DNS 서버는 일반적으로 ISP에서 제공합니다. 이는 ISP가 당신의 온라인 활동을 추적하고 제3자에게 로그를 판매할 수 있음을 의미합니다.

![Your device always uses some DNS server to obtain IP addresses of the domain name apps want to navigate to](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

There are also DNS servers that can block certain websites at DNS-level. 그것은 어떻게 작동합니까? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

요즘 TV에서 스마트 전구, 모바일 장치에서 스마트 자동차에 이르기까지 모든 것이 인터넷에 연결되어 있습니다. 그리고 인터넷이 있는 곳에는, 광고와 트레커가 있습니다. In this case, a browser-based ad blocker has proven insufficient. 더 발전된 보호를 원하시면, VPN 및 광고 차단기와 함께 DNS를 사용하십시오.

콘텐츠 차단에 DNS를 사용하면 장점 뿐만 아니라 명백히 결점도 있습니다. 한편으로 DNS는 브라우저뿐만 아니라 모든 장치를 관찰하기 때문에 사각 지대가 없습니다. 그러나 DNS 차단만으로는 코스메틱 필터링을 제공할 수 없습니다.

## What is AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. DNS-over-HTTPS, DNS-over-TLS 및 DNS-over-QUIC와 같은 신뢰할 수 있는 암호화 프로토콜을 지원합니다. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard는 광고, 추적기 및 사기를 제공하는 자체 도메인 이름 기반을 보유하고 있으며 정기적으로 업데이트됩니다.

![An approximate scheme of how AdGuard DNS works](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

> AdGuard DNS 트래픽의 약 75%가 암호화됩니다. This is actually what differentiates content-blocking DNS servers from others. CloudFlare 또는 Quad9 통계를 살펴보면 암호화된 DNS가 모든 쿼리의 작은 부분에 불과하다는 것을 알 수 있습니다.

AdGuard DNS exists in two main forms: [public AdGuard DNS](public-dns/overview.md) and [private AdGuard DNS](private-dns/overview.md). Both of these services do not require installing any apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different services. Their main difference is that you can customize private AdGuard DNS, while public AdGuard DNS cannot.

## DNS filtering module in AdGuard products

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — public or private.
