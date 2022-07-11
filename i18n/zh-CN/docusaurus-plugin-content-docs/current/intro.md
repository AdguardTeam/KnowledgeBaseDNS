---
title: 概览
sidebar_position: 1
slug: /
---

## DNS 是什么

DNS代表“域名系统”，它的作用是将网站的名称转换为IP 地址。 每次你访问一个网站，你的浏览器向DNS 服务器发送一个DNS查询用于找到网站的IP 地址 一个常规DNS 解析器只是返回请求域名的IP 地址。

> 默认DNS 服务器通常由你的ISP提供。 这意味着你的ISP可以跟踪你的在线活动，并将日志出售给第三方。

![你的设备总是使用一些DNS 服务器来取得应用程序想要访问的域名的IP 地址。](https://cdn.adguard.com/public/Adguard/Blog/scr1.png)

也有一些DNS 服务器可以在DNS层面拦截特定的网站。 它们如何工作？ 当你的设备发送一个“不好的”请求，无论是广告还是跟踪器，DNS 服务器通过为已拦截的域名回复一个不可路由的IP 地址来阻止连接。

## 为什么要使用DNS进行内容拦截

如今的一切都连接到互联网，从电视到智能电灯，从移动设备到智能汽车。 然而哪里有互联网，哪里就有广告和跟踪器。 在这种情况下，一个基于浏览器的广告拦截器看起来不够。 为了获得更好地保护，同时使用DNS，VPN和广告拦截器。

使用DNS进行内容拦截既有优点，也有明显的不足。 一方面，DNS没有盲点，因为它监视所有的设备，而不只是浏览器。 但是，在另一方面，单独的DNS拦截不能提供外观过滤。

## AdGuard DNS 是什么？

AdGuard DNS是市场上最注重隐私的DNS服务之一。 它支持如此可靠的加密协议，例如DNS-over-HTTPS，DNS-over-TLS和DNS-over-Quic。 它可以在无过滤模式下作为常规DNS 解析器工作，也可以提供DNS级别的内容过滤：识别指向广告，跟踪器和/或成人内容的域名(可选)，并以空响应回复。 AdGuard有自己的广告，跟踪器和诈骗域名数据库，并且经常更新。

![AdGuard DNS工作的大致流程](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> 大约75%的AdGuard DNS流量被加密。 这实际上就是内容拦截DNS 服务器与其他的区别。 如果你看一看CloudFlare或Quad9的统计数据，你会看到加密的DNS只是所有查询的一小部分。

AdGuard DNS主要有两种形式：[公共AdGuard DNS](public-dns/overview.md)和[私人AdGuard DNS](private-dns/overview.md) 这两种服务都不需要安装任何应用程序。 它们容易设置和使用，向用户提供拦截广告，跟踪器，恶意网站和成人内容(如果被要求) 所需的最小特性。 对它们可以使用的设备没有任何限制。

尽管有这么多相似点，私人AdGuard DNS和公共AdGuard DNS是两个不同的服务。 它们主要的不同点在于你可以个性化定制私人AdGuard DNS，而公共AdGuard DNS不可以。

## AdGuard产品中的DNS过滤模块

所有主要的AdGuard产品，包括AdGuard VPN，都有一个DNS过滤模块，您可以通过信任的提供商选择DNS服务器。 当然，AdGuard DNS Default、AdGuard DNS Non filtering和AdGuard DNS Family Protection都在列表中。 另外，AdGuard应用程序允许用户[轻松配置和使用Adguard DNS](https://adguard-dns.io/en/public-dns.html)–公共或私人。







