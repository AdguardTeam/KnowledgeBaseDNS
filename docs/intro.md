---
title: Overview
sidebar_position: 1
---

## What is DNS

DNS stands for "Domain name system", and its purpose is to convert websites' names into IP addresses. Each time you go to a website, your browser sends a DNS query to a DNS server (which is usually provided by your ISP) to figure out the IP address of the website. And a regular DNS resolver simply returns the IP address of the requested domain.

![](https://cdn.adguard.com/public/Adguard/Blog/scr1.png)

There are also DNS servers that can provide a DNS-level blocking. How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non routable IP address for a blocked domain.

## What is AdGuard DNS

AdGuard DNS is one of the most privacy-friendly DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can identify requests to an ad, tracking, and/or adult domains (optionally), and responds with an empty response. AdGuard has its own base of domain names that serve ads, trackers, and fraud, and it is regularly updated. 

![](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS exists in different forms: public AdGuard DNS (free), private AdGuard DNS (subscription), DNS filtering modules in AdGuard products. 

## Public AdGuard DNS

Public АdGuard DNS is a foolproof way to block Internet ads that does not require installing any apps. It is easy to set up and use, and it provides you with minimal necessary functions to block ads, trackers, malicious websites, and adult content. There are no restrictions for which devices you can use it with. You can find a separate configuration manual for each platform on [our website](https://adguard-dns.com/en/public-dns.html).

**Adguard DNS can work in three different modes:**

* **Default.** In this mode the server blocks ads, trackers, and queries to malware websites.
* **Family protection.** When this mode is enabled, queries to websites with adult content are blocked, as well as ads, trackers, and malware websites. Also safe search and safe mode options are enabled where possible. 
* **Non-filtering.** If you don't want AdGuard DNS to block ads and trackers, or any other DNS requests, enable this mode.	 

Blocking access to sites with adult content and malicious software is accomplished by **black lists** of domains. Every request to the domain from those lists is redirected to a neutral page. **Black lists** are not customizable, though: you only select which DNS server to use.

To better understand what public AdGuard DNS is, how does it work and what do you need it for — read an [article dedicated to this product](public-dns/overview).

## Private AdGuard DNS

Many users are completely satisfied with public AdGuard DNS, but for some of them there exists one unavoidable drawback: it is impossible to configure it according to personal preferences. 

![](https://cdn.adguard.com/public/Adguard/Blog/private-adguard-dns.png)

[Private AdGuard DNS](https://adguard-dns.com/en/welcome.html) allows you to set which domains you want to block and which you don't. There are way more benefits of the service:

* **Advanced statistics**. Private AdGuard DNS will provide you with a complete picture of requests sent by apps and browser extensions: the total number and geography of requests, the number of blocked requests and a list of companies the requests were addressed to both in the summary table and in separate tabs with detailed statistical information.

* **Import/export custom rules**. There are dozens of pre-installed Blocklists with thousands of rules, but you can also add your custom rules, manually or using an import feature.

* **Parental control**. In addition to options such as adult content blocking and safe search, there is an ability to manually specify domains for blocking and set a schedule for the Parental control to work accordingly.

Private AdGuard DNS is a useful tool with many settings. To get a full understanding of the product, check out [this article](private-dns/overview). 

## DNS-filtering module in AdGuard products

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server from a provider you trust. Of course, AdGuard DNS, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.com/en/public-dns.html) — public or private. 











