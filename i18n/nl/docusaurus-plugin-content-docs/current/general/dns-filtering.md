---
title: DNS filtering
sidebar_position: 1
---

:::info

The easiest way to explore the benefits of DNS filtering is to install AdGuard Ad Blocker or try AdGuard DNS. If you want to filter DNS at the network level, AdGuard Home is your tool

Snelle links: [AdGuard Advertentieblokker downloaden](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [AdGuard Home downloaden](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS proberen](https://adguard-dns.io/dashboard/)

:::

To better understand DNS filtering, first, we should answer the question "What is DNS?".

## What is DNS?

DNS stands for "Domain Name System", and its purpose is to translate websites' names into something browsers can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). That server looks at the requested domain name and replies with a corresponding IP address. Very schematically it can be represented like this:

![How DNS works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

The same applies, of course, to all apps and programs that send any web requests, not just browsers.

## How does DNS filtering work?

When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

### DNS servers

There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the very new and promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in [this article](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like.

### Local DNS blocklists

But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use [more advanced syntax](dns-filtering-syntax.md). They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, it gets rerouted to a "blackhole".
> In AdGuard for iOS, first you have to enable "Advanced mode" in settings in order to get access to DNS blocking.

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.
> There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## DNS-filtering versus netwerkfiltering

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. Op sommige platforms is dit de enige manier om systeembrede filtering te bereiken. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there's only DNS filtering.
2. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
3. The stage of processing a DNS request is the earliest you could possibly deal with an ad or a tracker, this helps save a little bit of battery life and traffic.

**Cons of DNS filtering:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Veel van de meer gecompliceerde advertenties kunnen niet op DNS-niveau worden geblokkeerd (of beter gezegd, ze kunnen dat wel, maar alleen door de volledige domeinen te blokkeren die voor andere doeleinden worden gebruikt).

![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

2. Het is niet mogelijk om de oorsprong van een DNS-verzoek te kennen, wat betekent dat je geen onderscheid kunt maken tussen verschillende apps op DNS-niveau. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
