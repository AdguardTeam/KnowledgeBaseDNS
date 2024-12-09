---
title: 概览
sidebar_position: 1
slug: /
---

## DNS 是什么？

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS 表示“域名系统”，它可以将网站的域名转换为 IP 地址。 每次你访问一个网站，你的浏览器向DNS 服务器发送一个DNS查询用于找到网站的IP 地址 一个常规DNS 解析器只是返回请求域名的IP 地址。

:::note

默认 DNS 服务器通常由用户的 ISP 提供。 这意味着您的 ISP 可以跟踪用户的在线活动并将日志出售给第三方。

:::

![您的设备始终使用 DNS 服务器来获取应用，服务的域名的 IP 地址](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

也有一些 DNS 服务器可以在 DNS 层面拦截特定的网站。 它们是如何工作的？ 当设备发送一个“不好的”请求，无论是广告还是跟踪器，DNS 服务器通过回复被拦截域名一个不可路由的 IP 地址来阻止连接。

## 为什么要使用 DNS 进行内容拦截？

如今的一切都连接到互联网，从电视到智能电灯，从移动设备到智能汽车。 然而哪里有互联网，哪里就有广告和跟踪器。 在这种情况下，基于浏览器的广告拦截器被证明是不够的。 要获得更好地保护，请同时使用 DNS，VPN 和广告拦截程序。

使用 DNS 进行内容拦截既有优点，也有明显的缺陷。 一方面，DNS 负责处理来自所有设备及其应用程序的查询。 不过，在另一方面，单独的 DNS 拦截不能提供外观过滤。

## 什么是 AdGuard DNS？

AdGuard DNS 是市场上最注重隐私的 DNS 服务之一。 它支持如此可靠的加密协议，例如 DNS-over-HTTPS，DNS-over-TLS和DNS-over-Quic。 它可以在无过滤模式下作为常规DNS 解析器工作，也可以提供 DNS 级别的内容过滤：识别指向广告，跟踪器和/或成人内容的域名（可选），并以空响应回复。 AdGuard 拥有自己的数据库，经常更新提供广告、跟踪器和欺诈服务的网域名称。

![AdGuard DNS 的大致工作原理](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

大约 75% 的 AdGuard DNS 流量被加密。 这实际上就是内容屏蔽 DNS 服务器与其他服务器的区别。 如果查看一下 CloudFlare 或 Quad9 的统计数据，您就会发现加密 DNS 只占所有查询的一小部分。

AdGuard DNS 存在两种主要的形式：[公共 AdGuard DNS](public-dns/overview)，以及[私有 AdGuard DNS](private-dns/overview)。 这些服务都不需要安装应用程序。 它们易于设置和使用，可为用户提供阻止广告、跟踪器、恶意网站和成人内容（如需要）所需的最低限度功能。 而且它们对可用的设备类型没有任何限制。

尽管他们有许多相似之处，私有 AdGuard DNS 服务和公共 AdGuard DNS 服务是两种不同的产品。 它们的主要区别在于用户可以自定义私有 AdGuard DNS，而公共 AdGuard DNS 则不能。

## AdGuard 产品中的 DNS 过滤模块

AdGuard 的所有主要服务，包括 AdGuard VPN，都有 **DNS 过滤模块**，用户可以选择自己信任的供应商提供的 DNS 服务器。 当然，AdGuard DNS 默认、AdGuard DNS 无过滤和 AdGuard DNS 家庭保护都在列表中。 此外，AdGuard 应用程序允许用户[简单轻松配置和使用 AdGuard DNS](https://adguard-dns.io/public-dns.html)，无论是公共还是私有的。
