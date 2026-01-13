---
title: 概览
sidebar_position: 1
---

## 什么是 AdGuard DNS？

AdGuard DNS 是款个免费的、注重隐私的DNS解析器，他可以提供安全的连接，还可以拦截追踪器、广告和网络钓鱼(可选)。 AdGuard DNS不需要安装任何应用程序。 他可以轻松地安装在所有设备（智能手机、台式电脑、路由器、游戏机等）上。

## 免费的 AdGuard DNS 服务器

AdGuard DNS 有三个公共服务器的类型。 *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. 您可以在[我们的网站](https://adguard-dns.io/public-dns.html)上找到有关在任何设备上设置 AdGuard DNS 的详细说明。 每个服务器都支持不同的安全协议： DNSCrypt、DNS-over-HTTPS (DoH)、DNS-over-TLS (DoT)、和 DNS-over-QUIC (DoQ)。

## AdGuard DNS 协议

除了无加密的DNS(IPv4和IPv6)，AdGuard DNS支持各种加密协议，所以你可以选择一个最适合你的加密协议。

### DNS-over-HTTPS (DoH) 和DNS-over-TLS (DoT)

DoH 和 DoT 是现代安全的 DNS 协议，它们越来越受欢迎，可预见的，在未来将成为最受欢迎的安全协议。 两者都比 DNSCcrypt 更可靠，并且都已经得到了 AdGuard DNS 的支持。

#### JSON 应用程序接口（API）用于 DNS

AdGuard DNS 还提供用于 DNS 的 JSON 应用程序接口（API）。 可以通过输入以下内容来获取 JSON 格式的 DNS 响应：

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). 在 AdGuard DNS 中，获取 JSON 格式的 DNS 响应的操作方式相同。

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC 端口

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard-dns.io/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. 与 DoH 和 DoT 不同的是，它使用 QUIC 作为传输协议，并最终将 DNS 带回到它的根——通过 UDP 工作。 它带来了 QUIC 所能提供的所有好东西ーー开箱即用的加密、减少连接时间、当数据包丢失时更好的性能。 此外，QUIC 应该是一个传输级别的协议，并且不存在 DoH 可能发生的元数据泄漏风险。

### 请求数量限制

DNS 请求数量限制是一种用于调节 DNS 服务器在特定时间周期内可以处理的流量的技术。 我们提供提高 AdGuard DNS 的「团队版」和「企业版」套餐默认限制的选项。 有关更多信息，请[阅读相关文章](/private-dns/server-and-settings/rate-limit.md)。

### DNSCrypt

AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration.

:::note

This is an obsolete protocol with restricted support.

:::
