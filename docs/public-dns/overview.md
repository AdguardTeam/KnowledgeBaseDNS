---
title: Overview
sidebar_position: 1
---
bolok
## What is AdGuard DNS?

AdGuard DNS is a free, privacy-oriented DNS resolver that provides secure connection and also can block tracking, ads, phishing and adult content (optionally). AdGuard DNS does not require installing any applications. It is easy to use and can be effortlessly set up on any device (smartphones, desktops, routers, game consoles, etc.).

## Public AdGuard DNS servers

AdGuard DNS has three different types of public servers. *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. You can find detailed instructions on setting up AdGuard DNS on any device on [our website](https://adguard-dns.io/public-dns.html).
Each server supports different secure protocols: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), and DNS-over-QUIC (DoQ).

## AdGuard DNS protocols

Besides plain DNS (both IPv4 and IPv6) AdGuard DNS supports various encrypted protocols, so you can choose the one that suits you best.

### DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)

DoH and DoT are modern secure DNS protocols that gain more and more popularity and will become the industry standards for the foreseeable future. Both are more reliable than DNSCrypt and both are supported by AdGuard DNS.

#### JSON API for DNS

AdGuard DNS also provides a JSON API for DNS. It is possible to get a DNS response in JSON by typing:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). Getting a DNS response in JSON works the same way with AdGuard DNS.

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard-dns.io/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. It brings all the good things that QUIC has to offer — out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH.

### Rate limit

DNS rate limiting is a technique used to regulate the amount of traffic a DNS server can handle within a specific time period. We offer the option to increase the default limit for Team and Enterprise plans of Private AdGuard DNS. For more information, please [read the related article](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration.

:::note

This is an obsolete protocol with restricted support.

:::
