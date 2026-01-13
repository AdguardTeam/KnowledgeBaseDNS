---
title: DNSフィルタリング
sidebar_position: 1
---

:::info

DNSフィルタリングのメリットを実感するための一番簡単な方法は、AdGuard 広告ブロッカーをインストールするか、AdGuard DNS を試してみることです。 そして、ネットワークレベルでDNSフィルタリングしたい場合は、AdGuard Home が最適です。

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## 「DNS」とは？

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. つまり、各ウェブサイトにアクセスするたびに、ブラウザは特種のサーバー（DNSサーバー）にリクエストを送信します。 そのサーバーはリクエストされたドメイン名を調べ、対応するIPアドレスを返信します。 このプロセスを簡単な図に表すとこうなります：

![DNS の仕組み](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

もちろん、ブラウザだけでなく、ウェブリクエストを送信するアプリやプログラムのすべてが同じようなプロセスになります。

## DNSフィルタリングの仕組み

DNSフィルタリングをサポートする AdGuard アプリを使用すると、AdGuard アプリはデバイスとDNSサーバーの間のバッファ（仲介）として機能します。 デバイス上のブラウザやアプリが送信しようとするすべてのDNSリクエストは、まずAdGuardによって処理されます。 If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard は、DNSリクエストがデバイスから送信される前にすべて暗号化し、悪意のある第三者がその内容にアクセスできないようにします。 On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. （これについては[以下で](#ローカルDNSブロックリスト)説明しております。）

![DNSフィルタリングの仕組み](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ja.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNSフィルタリングは、2つの機能に分けることができます。DNSトラフィックを暗号化してDNSサーバーにリルーティングする機能と、DNSブロックリストを適用して一部のドメインをローカルでブロックする機能です。

### DNSサーバー

DNSサーバーは何千もあって、それぞれ特性と目的においてユニークであります。 多くは単にリクエストされたドメインのIPアドレスを返すだけですが、広告、トラッキング、アダルトドメインなどをブロックする追加機能を持つものもあります。 現在、一般的なDNSサーバーのすべては、信頼できる暗号化プロトコル（DNS-over-HTTPS、DNS-over-TLS）を1つ以上採用しています。 AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard は目的別に複数のDNSサーバーを用意しています。 以下の図は、AdGuardのブロッキングサーバーの仕組みを示しています:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

他のDNSプロバイダーの仕組みは違ったりするので、それらのDNSサーバーを使う前に、プロバイダーや仕組みについての情報を確認しておいてください。 [こちらの記事](dns-providers.md)で、最も人気のあるDNSプロバイダーの一覧を確認することができます。 All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### ローカルDNSブロックリスト

しかし、DNSトラフィックをフィルタリングするためにDNSサーバーだけに頼ることは、柔軟性を失うことになります。 If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. AdGuard 製品のすべてで、DNS ブロックリスト（シンプルな hosts ファイルや[より高度な構文](dns-filtering-syntax.md)を使用するリストなど）を使用できます。 DNSブロックリストは、通常のブロックリストと同じように機能します。つまり、DNSリクエストがアクティブフィルタリストのルールの1つにマッチすると、そのリクエストはブロックされます。 To be more precise, the DNS server gives a non-routable IP address for such a request.

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in *Settings* in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## DNSフィルタリングとネットワークフィルタリングの比較

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don’t have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it’s important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. プラットフォームによっては、これがシステム全体フィルタリングを実現する唯一の方法です。 For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. トラッキング（追跡）の一部（ [CNAMEトラッキング](https://adguard.com/blog/cname-tracking.html)など）は、DNSフィルタリングによってのみ防止できます。
1. DNSリクエストを処理する段階は、広告やトラッカーに対処する場合の最も早い段階であるため、バッテリー寿命とトラフィックを少し節約するのに役立ちます。

**Cons of DNS filtering:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
