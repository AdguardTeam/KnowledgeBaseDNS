---
title: Custom domains
sidebar_position: 6
---

AdGuard DNS subscribers can set up their own domains (like `dns.example.com`) instead of the default `d.adguard-dns.com`. This feature is intended to help businesses align DNS protection with their infrastructure by ensuring seamless integration with corporate security policies while maintaining full ad-blocking and privacy features provided by AdGuard DNS.

:::note

Custom domains are currently available only for the **Enterprise** subscription, but we plan to expand support to the **Team** plan in future updates.

:::

## How to set up a custom domain

To configure a custom domain, log in to your AdGuard DNS dashboard and go to [*Account settings*](https://adguard-dns.io/en/dashboard/account). Scroll down to *Advanced settings* and select *Custom domains*. Next you will need to go through three main steps: the protocol, CNAME, and certificates.

 1. Choose the protocol. Here, you have two options:

      - Add DoH domain (for DNS-over-HTTPS)
      - Add DoT/DoQ domain (for DNS-over-TLS or DNS-over-QUIC)

![Choose the protocol *mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

 1. After selecting your preferred protocol, enter the preferred domain name (e.g., `example.com`) and verify the CNAME record.

![CNAME record *mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

 1. Set up a certificate. For DoT/DoQ domains, you’ll need to upload a wildcard TLS certificate. If you choose DoH, you can either provide your own TLS certificate or let AdGuard DNS generate one for you. Once verified, your custom domain will appear in the dashboard, ready for use.

![Custom domain list *mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
