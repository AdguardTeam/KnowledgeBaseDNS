---
title: 概览
sidebar_position: 1
---

## 什么是 AdGuard DNS？

AdGuard DNS 是款个免费的、注重隐私的DNS解析器，他可以提供安全的连接，还可以拦截追踪器、广告和网络钓鱼(可选)。 AdGuard DNS不需要安装任何应用程序。 他可以轻松地安装在所有设备（智能手机、台式电脑、路由器、游戏机等）上。

## 免费的 AdGuard DNS 服务器

AdGuard DNS 有三个公共服务器的类型。 ”默认“服务器是用于拦截广告、追踪器、恶意软件和钓鱼网站的。 ”家庭保护“也有同样的功能。他会屏蔽儿童不适合儿童的网站，并在提供”安全搜索“选项的浏览器中强制执行。 ”不过滤“提供了一个安全可靠的链接，但是不会过滤任何东西。 您可以在[我们的网站](https://adguard-dns.io/public-dns.html)上找到有关在任何设备上设置 AdGuard DNS 的详细说明。 每个服务器都支持不同的安全协议： DNSCrypt、DNS-over-HTTPS (DoH)、DNS-over-TLS (DoT)、和 DNS-over-QUIC (DoQ)。

## AdGuard DNS 协议

除了无加密的DNS(IPv4和IPv6)，AdGuard DNS支持各种加密协议，所以你可以选择一个最适合你的加密协议。

### DNSCrypt（开源的加密协议）

AdGuard DNS允许您使用特定的加密协议：DNSCrypt 由于他，所有DNS请求都被加密，这可以保护您免受可能的请求拦截和随后的窃听和更改。 但是与 DoH、 DoT 和 DoQ 协议相比，DNSCcrypt 被广泛认为是过时的，如果可以的话，我们建议使用这些协议。

### DNS-over-HTTPS (DoH) 和DNS-over-TLS (DoT)

DoH 和 DoT 是现代安全的 DNS 协议，它们越来越受欢迎，可预见的，在未来将成为最受欢迎的安全协议。 两者都比 DNSCcrypt 更可靠，并且都已经得到了 AdGuard DNS 的支持。

#### JSON 应用程序接口（API）用于 DNS

AdGuard DNS 还提供用于 DNS 的 JSON 应用程序接口（API）。 可以通过输入以下内容来获取 JSON 格式的 DNS 响应：

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

有关详细文档，请参阅 [ Google 关于 DNS-over-HTTPS 的 JSON API 指南](https://developers.google.com/speed/public-dns/docs/doh/json)。 在 AdGuard DNS 中，获取 JSON 格式的 DNS 响应的操作方式相同。

:::note

与 Google DNS 不同，AdGuard DNS 的响应 JSON 中不支持 `edns_client_subnet` 和 `Comment` 值。

:::

### DNS-over-QUIC 端口

[DNS-over-QUIC 是一个新的 DNS 安全协议](https://adguard.com/blog/dns-over-quic.html)，AdGuard DNS 是第一个支持它的公共解析器。 与 DoH 和 DoT 不同的是，它使用 QUIC 作为传输协议，并最终将 DNS 带回到它的根——通过 UDP 工作。 它带来了 QUIC 所能提供的所有好东西ーー开箱即用的加密、减少连接时间、当数据包丢失时更好的性能。 此外，QUIC 应该是一个传输级别的协议，并且不存在 DoH 可能发生的元数据泄漏风险。

### 请求数量限制

DNS 请求数量限制是一种用于调节 DNS 服务器在特定时间周期内可以处理的流量的技术。 我们提供提高 AdGuard DNS 的「团队版」和「企业版」套餐默认限制的选项。 有关更多信息，请[阅读相关文章](/private-dns/server-and-settings/rate-limit.md)。
