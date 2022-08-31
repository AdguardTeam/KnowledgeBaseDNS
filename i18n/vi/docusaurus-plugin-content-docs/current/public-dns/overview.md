---
title: Overview
sidebar_position: 1
---

## What is AdGuard DNS?

AdGuard DNS is a free, privacy-oriented DNS resolver that provides secure connection and also can block tracking, ads, phishing and adult content (optionally). AdGuard DNS does not require installing any applications. It is easy to use and can be effortlessly set up on any device (smartphones, desktops, routers, game consoles, etc.).


## Public AdGuard DNS servers
AdGuard DNS has three different public servers. "Default" server is for blocking ads, trackers, malware and phishing websites. "Family protection" does the same, but also blocks websites with adult content and enforces "Safe search" option in browsers that provide it. "Non-filtering" provides a secure and reliable connection but doesn't block anything. You can find detailed instructions on setting up AdGuard DNS on any device on [our website](https://adguard-dns.io/en/public-dns.html). Each server supports different secure protocols: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), and DNS-over-QUIC (DoQ).


## AdGuard DNS protocols
Besides plain DNS (both IPv4 and IPv6) AdGuard DNS supports various encrypted protocols, so you can choose the one that suits you best.

### DNSCrypt
AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration. But compared to the DoH, DoT and DoQ protocols, DNSCrypt is considered obsolete and if possible we recommend using these protocols.

### DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)
DoH and DoT are modern secure DNS protocols that gain more and more popularity and will become the industry standards for the foreseeable future. Both are more reliable than DNSCrypt and both are supported by AdGuard DNS.

### DNS-over-QUIC (DoQ)
[DNS-over-QUIC is a new DNS encryption protocol](https://adguard.com/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. It brings all the good things that QUIC has to offer — out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH.


