---
title: DNS-filtrering
sidebar_position: 1
---

:::info

The easiest way to explore the benefits of DNS filtering is to install AdGuard Ad Blocker or try AdGuard DNS. If you want to filter DNS at the network level, AdGuard Home is your tool

Hurtig-links: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Hent AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Prøv AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

To better understand DNS filtering, first, we should answer the question "What is DNS?".

## Hvad er DNS?

DNS stands for "Domain Name System", and its purpose is to translate websites' names into something browsers can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). That server looks at the requested domain name and replies with a corresponding IP address. Very schematically it can be represented like this:

![How DNS works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

The same applies, of course, to all apps and programs that send any web requests, not just browsers.

## Hvordan fungerer DNS-filtrering?

When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

### DNS-servere

There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the very new and promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in [this article](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like.

### Lokale DNS-blokeringslister

But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use [more advanced syntax](dns-filtering-syntax.md). They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, it gets rerouted to a "blackhole".
> I AdGuard til iOS skal man først aktivere "Avanceret tilstand" i indstillingerne for at få adgang til DNS-blokering.

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.
> Der er hundredvis af forskellige DNS-blokeringslister, som kan tjekkes ud [hér](https://filterlists.com/).

## DNS-filtrering contra netværksfiltrering

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. På visse platforme er dette den eneste måde at opnå systemniveaufiltrering på. iOS understøtter f.eks. kun indholdsblokering i vanlig forstand i Safari-browseren, for alt andet findes kun DNS-filtrering.
2. Visse former for sporing (såsom [CNAME-tilsløret sporing](https://adguard.com/blog/cname-tracking.html)) kan kun imødegås vha. DNS-filtrering.
3. Stadiet, hvor en DNS-forespørgsel behandles, er det tidligste, man overhovedet kan imødegå en annonce eller tracker, hvilket medvirker til at spare en lille smule batteristrøm og trafik.

**Cons of DNS filtering:**

1. DNS-filtrering er "grov", dvs., at den hverken fjerner tomme felter efterladt fra en blokeret annonce eller anvender nogen form for kosmetisk filtrering. Mange af de mere komplicerede annoncer kan ikke blokeres på DNS-niveau (eller rettere sagt, det kan de, men kun ved at blokere selve domænerne, som muligvis også bruges til andre formål).

![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

2. Oprindelsen på en DNS-forespørgsel ikke kan fastslås, hvorfor der på DNS-niveau ikke kan skelnes mellem forskellige apps. Dette påvirker statistikken negativt og umuliggør at oprette app-specifikke filtreringsregler.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
