---
title: DNS 过滤
sidebar_position: 1
---

:::info

探索 DNS 过滤的最简单方法是安装 AdGuard 广告拦截程序或试用 AdGuard DNS。 如果用户想在网络层面过滤 DNS，AdGuard Home 是最好的选择。

快速链接：[下载 AdGuard 广告拦截程序](https://agrd.io/download-kb-adblock)，[获取 AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started)，[试用 AdGuard DNS](https://agrd.io/download-dns)。

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## DNS 是什么？

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. 因此，每次用户访问网站，浏览器都能给特定服务器（DNS 服务器）发送请求。 该服务器会查看被请求的域名，并且用对应的 IP 地址响应。 它的示意图可以这样表示：

![DNS 工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

当然，不仅是浏览器，所有发送任何网络请求的应用程序和软件也都是如此。

## DNS 过滤工作原理是什么？

当用户使用某一款支持 DNS 过滤的 AdGuard 应用程序时，它作为设备和 DNS 服务器的“缓冲器”。 浏览器或应用程序所要发送的 DNS 请求会先由 AdGuard 来处理。 If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. 在 DNS 请求从设备发送到服务器前，AdGuard 会加密它们，因此没有坏人可以再轻松获取请求的内容。 On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. [下述](#local-dns-blocklists)可了解更多。

![DNS 过滤工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS 过滤可以分为两个不同的功能: 加密和重新路由 DNS 流量到 DNS 服务器，并拦截一些域名本地应用 DNS 拦截列表。

### DNS 服务器

一共有数千个 DNS 服务器可选。它们的属性与用途都是独一无二的。 大部分 DNS 服务器只能返回被请求网域的 IP 地址，但也有些 DNS 服务器具有一些额外功能。比如，它们能屏蔽广告、跟踪器、带有成人内容的网站等等。 现在部分主流 DNS 服务器都应用一个或更多可靠的加密协议，比如：DNS-over-HTTPS、DNS-over-TLS。 AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard 为不同目的提供不同的服务器。 下面的图标展示 AdGuard 拦截服务器的工作原理：

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

其它 DNS 提供商的工作方式也可能有所不同，所以在选择某一个 DNS 服务器前，我们建议您要先多了解它们。 [在这篇文章里](dns-providers.md)，用户可以找到最受欢迎 DNS 提供商的清单。 All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### 本地 DNS 拦截列表

但是如果只依赖 DNS 服务器来过滤 DNS 流量，用户就失去所有的灵活性。 If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. 所有 AdGuard 产品允许用户应用 DNS 拦截列表，无论是简单的 Hosts 文件还是使用[更复杂语法](dns-filtering-syntax.md)的清单。 它们与一般的广告过滤器运行相似：当 DNS 请求与某一个属于激活过滤器列表的规则相匹配时，该 DNS 请求将会被阻止。 更准确地说，对于这样的请求，DNS 服务器会返回一个不可路由的 IP 地址。

:::tip

在 iOS 版 AdGuard 中，您需要先在「*设置*」中启用「*高级模式*」，才能使用 DNS 拦截功能。

:::

用户可以添加任意数量的自定义拦截列表。 比方说，可以使用 [AdGuard DNS 过滤器](https://github.com/AdguardTeam/AdGuardSDNSFilter)。 它能够拦截所有 AdGuard DNS 服务器屏蔽的元素，但是使用 AdGuard DNS 过滤器后，用户还可以使用任何其它 DNS 服务器。 Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## DNS 过滤与网络过滤

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. 请阅读[这篇文章](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/)回顾往期内容。

First of all, we have to mention that with AdGuard you don’t have to choose. 您可以同时使用常规网络过滤和 DNS 过滤。 However, it’s important to understand key differences between the two. DNS 过滤有其独特的优点和缺点：

**DNS 过滤的优点：**

1. 在某些平台上，这是实现系统范围过滤的唯一方法。 For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. 有些跟踪方式，比如 [CNAME 跟踪](https://adguard.com/blog/cname-tracking.html)，只可以通过 DNS 过滤被拦截。
1. 处理 DNS 请求是您可以拦截广告或跟踪器的最早阶段。这样您可以节省点电池寿命及流量。

**DNS 过滤的缺点：**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![差异示例](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS 过滤和网络过滤的区别示例*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. 这会影响统计数据，并且不允许我们创建针对特定的应用程序过滤规则。

我们建议在使用网络过滤的同时也使用 DNS 过滤，而不是二者只取其一。
