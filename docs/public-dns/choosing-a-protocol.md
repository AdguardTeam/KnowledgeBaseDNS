---
title: Choosing a DNS protocol
sidebar_position: 2
---

A DNS protocol is a set of rules that your device uses to communicate with a DNS server — a system that translates website names, like example.com, into IP addresses that computers can understand. This process used to occur in plain text, meaning it could be seen or intercepted by third parties, such as your ISP or hackers. Encrypted DNS protocols address this issue by protecting your DNS requests, thereby making your browsing more private and secure.

AdGuard DNS supports three secure, encrypted DNS protocols: DoH, DoT, and DoQ. They’re all designed to protect your DNS traffic, but each one has its own strengths and limitations. The following overview will help you understand the differences and choose the best one for you.

### DNS-over-TLS (DoT)

DNS-over-TLS improves privacy by encrypting your DNS traffic and sending it over a dedicated port (port 853) specifically reserved for encrypted DNS traffic.

When it comes to privacy, DoT isn’t the strongest option. Because it uses a dedicated port (853), it’s easier for networks to detect and possibly block. However, it can still be useful in enterprise or managed environments, where administrators want to allow secure DNS but still keep control over network traffic.

### DNS-over-HTTPS (DoH)

DNS-over-HTTPS sends your DNS queries through the same secure connection used to load websites — over port 443. This makes it harder for networks or censors to detect or block, which is great for privacy and especially useful when bypassing censorship.

However, it can be unstable and result in performance issues. When all data packets share the same connection, they rely on the same transport layer. This can cause a problem called head-of-line blocking. If one packet is lost or delayed, it holds up everything else, even other packets that aren't related. As a result, all responses get delayed, even if most of the data is ready to be delivered.

### DNS-over-QUIC (DoQ)

DNS-over-QUIC is a DNS protocol that takes advantage of the QUIC transport layer protocol and uses it to transmit DNS requests. It avoids one of the main problems with the DoH protocol: instability due to head-of-line blocking.

Since DoQ keeps DNS activity separate from web traffic by using the QUIC protocol, it avoids the timing issues observed in DoH and, as a consequence, doesn’t reveal any traffic patterns. This makes it harder to link your DNS queries to your browsing, even if the traffic itself is easier to spot.

If you're looking for a combination of privacy and stability, DoQ is usually the best choice.

![DoH vs. DoQ *border](https://cdn.adtidy.org/blog/new/gy178dohdoq.jpg)

:::note

More detailed information about head-of-line blocking and the DNS-over-QUIC protocol can be found in our [blog post](https://adguard-dns.io/en/blog/dns-over-quic.html)

:::
