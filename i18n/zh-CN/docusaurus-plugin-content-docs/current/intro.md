---
title: 概览
sidebar_position: 1
slug: /
---

## DNS 是什么？

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. 每次你访问一个网站，你的浏览器向DNS 服务器发送一个DNS查询用于找到网站的IP 地址 一个常规DNS 解析器只是返回请求域名的IP 地址。

> 默认DNS 服务器通常由你的ISP提供。 这意味着你的ISP可以跟踪你的在线活动，并将日志出售给第三方。

![你的设备总是使用一些DNS 服务器来取得应用程序想要访问的域名的IP 地址。](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

也有一些 DNS 服务器可以在 DNS 层面拦截特定的网站。 它们如何工作？ When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

如今的一切都连接到互联网，从电视到智能电灯，从移动设备到智能汽车。 然而哪里有互联网，哪里就有广告和跟踪器。 In this case, a browser-based ad blocker has proven insufficient. 为了获得更好地保护，同时使用DNS，VPN和广告拦截器。

使用DNS进行内容拦截既有优点，也有明显的不足。 一方面，DNS没有盲点，因为它监视所有的设备，而不只是浏览器。 但是，在另一方面，单独的DNS拦截不能提供外观过滤。

## 什么是 AdGuard DNS？

AdGuard DNS 是市场上最注重隐私的 DNS 服务之一。 它支持如此可靠的加密协议，例如 DNS-over-HTTPS，DNS-over-TLS和DNS-over-Quic。 It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard有自己的广告，跟踪器和诈骗域名数据库，并且经常更新。

![AdGuard DNS 工作的大致流程](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

> 大约75%的AdGuard DNS流量被加密。 This is actually what differentiates content-blocking DNS servers from others. 如果你看一看CloudFlare或Quad9的统计数据，你会看到加密的DNS只是所有查询的一小部分。

AdGuard DNS 主要有两种形式：[公共 AdGuard DNS](public-dns/overview.md) 和 [私人 AdGuard DNS](private-dns/overview.md) 这两种服务都不需要安装任何应用程序。 它们容易设置和使用，向用户提供拦截广告，跟踪器，恶意网站和成人内容(如果被要求) 所需的最小特性。 对它们可以使用的设备没有任何限制。

尽管有这么多相似点，私人AdGuard DNS和公共AdGuard DNS是两个不同的服务。 它们主要的不同点在于你可以个性化定制私人AdGuard DNS，而公共AdGuard DNS不可以。

## AdGuard产品中的DNS过滤模块

所有主要的 AdGuard 产品，包括 AdGuard VPN，都有一个 **DNS 过滤模块**，您可以通过信任的提供商选择 DNS 服务器。 当然，AdGuard DNS Default、AdGuard DNS Non filtering和AdGuard DNS Family Protection都在列表中。 Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — public or private.
