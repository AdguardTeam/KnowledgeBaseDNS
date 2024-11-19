---
title: DNS 过滤
sidebar_position: 1
---

:::info

探索 DNS 过滤的最简单方法是安装 AdGuard 广告拦截程序或试用 AdGuard DNS。 如果用户想在网络层面过滤 DNS，AdGuard Home 是最好的选择。

快速链接：[下载 AdGuard 广告拦截程序](https://agrd.io/download-kb-adblock)，[获取 AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started)，[试用 AdGuard DNS](https://agrd.io/download-dns)。

:::

为了更好了解 DNS 过滤，首先我们要回答一个问题，就是“什么是 DNS”？

## DNS 是什么？

DNS 是指“域名系统”。它的目标是将网站名称转换成浏览器能识别的 IP 地址。 因此，每次用户访问网站，浏览器都能给特定服务器（DNS 服务器）发送请求。 该服务器会查看被请求的域名，并且用对应的 IP 地址响应。 它的示意图可以这样表示：

![DNS 工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

当然，不仅是浏览器，所有发送任何网络请求的应用程序和软件也都是如此。

## DNS 过滤工作原理是什么？

当用户使用某一款支持 DNS 过滤的 AdGuard 应用程序时，它作为设备和 DNS 服务器的“缓冲器”。 浏览器或应用程序所要发送的 DNS 请求会先由 AdGuard 来处理。 如用户使用的是由 ISP（互联网服务提供商）提供的默认 DNS 服务器，很可能用户的 DNS 流量未加密，因此容易受到窥探和劫持的威胁。 在 DNS 请求从设备发送到服务器前，AdGuard 会加密它们，因此没有坏人可以再轻松获取请求的内容。 除此之外，AdGuard 能够识别广告、跟踪器和/或成人网站信息，并且将它们发送到“黑洞”，而不是到 DNS 服务器。 [下述](#local-dns-blocklists)可了解更多。

![DNS 过滤工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS 过滤是效果很强的工具，并且主要的 AdGuard 应用程序都支持它，包括 [AdGuard Windows 版](https://adguard.com/adguard-windows/overview.html)、[AdGuard Mac 版](https://adguard.com/adguard-mac/overview.html)、[AdGuard Android 版](https://adguard.com/adguard-android/overview.html)以及 [AdGuard iOS 版](https://adguard.com/adguard-ios/overview.html)。

DNS 过滤可以分为两个不同的功能: 加密和重新路由 DNS 流量到 DNS 服务器，并拦截一些域名本地应用 DNS 拦截列表。

### DNS 服务器

一共有数千个 DNS 服务器可选。它们的属性与用途都是独一无二的。 大部分 DNS 服务器只能返回被请求网域的 IP 地址，但也有些 DNS 服务器具有一些额外功能。比如，它们能屏蔽广告、跟踪器、带有成人内容的网站等等。 现在部分主流 DNS 服务器都应用一个或更多可靠的加密协议，比如：DNS-over-HTTPS、DNS-over-TLS。 AdGuard 还提供 [DNS 服务](https://adguard-dns.io/)，并且是世界上第一个提供全新且极具前景的 [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) 加密协议的服务。 AdGuard 为不同目的提供不同的服务器。 下面的图标展示 AdGuard 拦截服务器的工作原理：

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

其它 DNS 提供商的工作方式也可能有所不同，所以在选择某一个 DNS 服务器前，我们建议您要先多了解它们。 [在这篇文章里](dns-providers.md)，用户可以找到最受欢迎 DNS 提供商的清单。 所有支持 DNS 功能的 AdGuard 应用程序也有 DNS 服务器清单。在清单里用户可以选择自己想使用的 DNS 服务器，或任何自定义 DNS 服务器。

### 本地 DNS 拦截列表

但是如果只依赖 DNS 服务器来过滤 DNS 流量，用户就失去所有的灵活性。 如果选定的服务器拦截域名，用户将无法访问该域名。 但如果使用 AdGuard，您甚至不需要配置任何特定的 DNS 服务器就可以过滤 DNS 流量。 所有 AdGuard 产品允许用户应用 DNS 拦截列表，无论是简单的 Hosts 文件还是使用[更复杂语法](dns-filtering-syntax.md)的清单。 它们与一般的广告过滤器运行相似：当 DNS 请求与某一个属于激活过滤器列表的规则相匹配时，该 DNS 请求将会被阻止。 更准确地说，对于这样的请求，DNS 服务器会返回一个不可路由的 IP 地址。

:::tip

在 iOS 版 AdGuard 中，您需要先在「*设置*」中启用「*高级模式*」，才能使用 DNS 拦截功能。

:::

用户可以添加任意数量的自定义拦截列表。 比方说，可以使用 [AdGuard DNS 过滤器](https://github.com/AdguardTeam/AdGuardSDNSFilter)。 它能够拦截所有 AdGuard DNS 服务器屏蔽的元素，但是使用 AdGuard DNS 过滤器后，用户还可以使用任何其它 DNS 服务器。 此外，还可以添加更多过滤器或创建自定义排除项规则。上述的功能都不能通过简单的「使用拦截 DNS 服务器」设置来实现。

您可以在[这里](https://filterlists.com/)找到上百种不同的 DNS 拦截列表。

## DNS 过滤与网络过滤

网络过滤就是我们所说的 AdGuard 独立应用程序处理网络流量的“常规”方式，因此得名。 请阅读[这篇文章](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/)回顾往期内容。

首先，我们要提到一点，使用 AdGuard 的话，用户不需要二选一。 您可以同时使用常规网络过滤和 DNS 过滤。 不过，重要的是要了解两者之间的主要区别。 DNS 过滤有其独特的优点和缺点：

**DNS 过滤的优点：**

1. 在某些平台上，这是实现系统范围过滤的唯一方法。 比方说，在 iOS 上只有 Safari 浏览器支持内容拦截。为了拦截其它内容，用户只可以用 DNS 过滤。
1. 有些跟踪方式，比如 [CNAME 跟踪](https://adguard.com/blog/cname-tracking.html)，只可以通过 DNS 过滤被拦截。
1. 处理 DNS 请求是您可以拦截广告或跟踪器的最早阶段。这样您可以节省点电池寿命及流量。

**DNS 过滤的缺点：**

1. DNS 拦截是一种“粗略”的拦截方式，这意味着它无法移除被拦截广告留下的空白区域，也无法进行任何形式的页面美化处理。 许多更复杂的广告无法在 DNS 级别被阻止（或者更确切地说，它们可以被拦截，但只能通过阻止用于其他目的的整个网域）。

    ![差异示例](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS 过滤和网络过滤的区别示例*

1. 无法知道 DNS 请求的来源，这意味着您无法区分 DNS 级别的不同应用。 这会影响统计数据，并且不允许我们创建针对特定的应用程序过滤规则。

我们建议在使用网络过滤的同时也使用 DNS 过滤，而不是二者只取其一。
