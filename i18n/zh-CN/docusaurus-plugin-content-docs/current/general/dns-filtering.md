---
title: DNS 过滤
sidebar_position: 1
---

:::info

探索 DNS 过滤的最简单方法是安装 AdGuard 广告拦截程序或试用 AdGuard DNS。 如果用户想在网络层面过滤 DNS，AdGuard Home 是最好的选择。

快捷链接： [下载 AdGuard 广告拦截程序](https://adguard.com/download.html?auto=true&utm_source=kb_dns)，[获取 AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started)，[试用 AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

为了更好了解 DNS 过滤，首先我们要回答一个问题，就是“什么是 DNS”？

## DNS 是什么？

DNS stands for "Domain Name System", and its purpose is to translate websites' names into something browsers can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). That server looks at the requested domain name and replies with a corresponding IP address. Very schematically it can be represented like this:

![How DNS works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

The same applies, of course, to all apps and programs that send any web requests, not just browsers.

## DNS 过滤工作原理是什么？

When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

### DNS 服务器

There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the very new and promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in [this article](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like.

### 本地 DNS 拦截列表

But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use [more advanced syntax](dns-filtering-syntax.md). They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, it gets rerouted to a "blackhole".
> 在 AdGuard iOS 版上您先要在设置里启用「高级模式」以使用 DNS 拦截。

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.
> 您可以[在这里](https://filterlists.com/)找到几百个不同的 DNS 拦截列表。

## DNS filtering vs. network filtering

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. 在某些平台上，这是实现系统范围过滤的唯一方法。 比方说，在 iOS 上只有 Safari 浏览器支持内容拦截。为了拦截其它内容，用户只可以用 DNS 过滤。
2. 有些跟踪方式，比如 [CNAME 跟踪](https://adguard.com/blog/cname-tracking.html)，只可以通过 DNS 过滤被拦截。
3. 处理 DNS 请求是您可以拦截广告或跟踪器的最早阶段。这样您可以节省点电池寿命及流量。

**Cons of DNS filtering:**

1. DNS 过滤是一种“粗略的过滤法”。意思是 DNS 过滤不会移除拦截广告后留下的白空，或让您使用自定义过滤方式。 许多更复杂的广告无法在 DNS 级别被阻止（或者更确切地说，它们可以被拦截，但只能通过阻止用于其他目的的整个网域）。

![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

2. 无法知道 DNS 请求的来源，这意味着您无法区分 DNS 级别的不同应用。 这会影响统计数据，并且不允许我们创建针对特定的应用程序过滤规则。

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
