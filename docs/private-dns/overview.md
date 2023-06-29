---
title: Overview
sidebar_position: 1
---

:::info

With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device

Quick link: [Try AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# Private AdGuard DNS

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## What is Private AdGuard DNS?

Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard.

## Why you need Private AdGuard DNS

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

We already have [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard.

## The difference between Private and Public AdGuard DNS

Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers.

| Public AdGuard DNS  | Private AdGuard DNS |
| ----------- | ----------- |
| DNS traffic encryption      | DNS traffic encryption       |
| Pre-determined domain blocklists      | Customizable domain blocklists      |
| -   | Custom DNS filtering rules with import/export feature
| -   | Request statistics (see where do your DNS requests go: which countries, which companies, etc.)        |
| -   | Detailed query log |
| -   | Parental control       |

## How to set up Private AdGuard DNS

1. Go to your [AdGuard DNS dashboard](https://adguard-dns.io/dashboard/) (if not logged in, log in using your AdGuard account)
2. Click “Connect device” and follow on-screen instructions

> Supported platforms:
>- Android
>- iOS
>- Windows
>- Mac
>- Linux
>- Routers
>- Gaming consoles

## Private AdGuard DNS features

### Blocklists management

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Parental control

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

> In case you don't have Private AdGuard DNS yet, you can [get it on the official website](https://adguard-dns.io/).

### Linked IP

"Linked IP" refers to the connection between a domain name and its corresponding IP address through DNS records, allowing the resolution of domain names to the correct IP addresses for communication on the Internet.

To use your IP address as a linked IP, the following requirements must be met:

1. An IPv4 address must not be `0.0.0.0`. It must not be one of the [following values](https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml) as well:

```
0.0.0.0/8,
10.0.0.0/8,
100.64.0.0/10,
169.254.0.0/16,
172.16.0.0/12,
192.0.0.0/24,
192.0.2.0/24,
192.31.196.0/24,
192.52.193.0/24,
192.88.99.0/24,
192.168.0.0/16,
192.175.48.0/24,
198.18.0.0/15,
198.51.100.0/24,
203.0.113.0/24,
240.0.0.0/4,
255.255.255.255/32,
127.0.0.0/8, // loop-back
224.0.0.0/4
```

An IPv6 address must not be `2000::/3`.

2. The address must be some kind of residential proxy. These services provide users with proxy connections through residential ISP with or without the consent of peers to share their idle resources.

3. The address must not be assigned to another user (it must be a valid IP address, globally routable, from a local ISP).