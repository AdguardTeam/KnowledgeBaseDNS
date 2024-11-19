---
title: 已知的 DNS 提供商
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

在这篇文章中，我们推荐一份受信任的 DNS 供应商名单。 要使用它们，请先在您的设备上安装 AdGuard 广告拦截程序或 AdGuard VPN。 然后，在同一设备上，点击本文中一个供应商的链接。

快速链接：[下载 AdGuard 广告拦截程序](https://agrd.io/download-kb-adblock)，[下载 AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)。

:::

## **公共 Anycast 解析器**

这些是分布在全球的大型 DNS 解析器，使用 Anycast 路由将用户的 DNS 查询引导到最近的数据中心。

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) 是广告拦截、隐私保护和家长控制的替代解决方案。 无论用户使用什么平台和设备，它都能提供必要的保护，防止在线广告、跟踪器和网络钓鱼。

#### 默认

以下服务器阻止广告、跟踪和网络钓鱼。

| 协议             | 地址                                                                       |                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` 和 `94.140.15.15`                                          | [添加到 AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` 和 `2a10:50c0::ad2:ff`                                | [添加到 AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                  | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                              | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                             | [添加到 AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | 提供者: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [添加到 AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                |
| DNSCrypt, IPv6 | 提供者: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [添加到 AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                       |

#### 家庭保护

以下服务器提供默认功能 + 禁止成人网站 + 安全搜索功能。

| 协议             | 地址                                                                       |                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` 和 `94.140.15.16`                                          | [添加到 AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6      | `2a10:50c0::bad1:ff` 和 `2a10:50c0::bad2:ff`                              | [添加到 AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                               | [添加到 AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                           | [添加到 AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                          | [添加到 AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt.family.ns1.adguard.com` IP：`94.140.14.15:5443`           | [添加到 AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                       |
| DNSCrypt, IPv6 | 提供者: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [添加到 AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                             |

#### 无过滤

以下服务器都能提供安全可靠的连接，但与「标准」和「家庭保护」服务器不同，它们无法过滤任何内容。

| 协议             | 地址                                                                      |                                                                                                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` 和 `94.140.14.141`                                       | [添加到 AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::bad1:ff` 和 `2a10:50c0::bad2:ff`                             | [添加到 AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                          | [添加到 AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                      | [添加到 AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                     | [添加到 AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | 提供者: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`   | [添加到AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                    |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt.unfiltered.ns1.adguard.com` IP：`[2a10:50c0::1:ff]:5443` | [添加到AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                       |

### Ali DNS

[Ali DNS](https://alidns.com/) 是免费的 DNS 递归解析系统，致力于为广大互联网用户提供“快速”、“稳定”、“安全”的 DNS 递归解析服务。 它包括 AliGuard 多种攻击防御策略，可以保护用户免受各种攻击和威胁。

| 协议             | 地址                                   |                                                                                                                                                                                                              |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `223.5.5.5` 和 `223.6.6.6`            | [添加到 AdGuard](adguard:add_dns_server?address=223.5.5.5&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` 和 `2400:3200:baba::1` | [添加到 AdGuard](adguard:add_dns_server?address=2400:3200::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`   | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`          | [ 添加到 AdGuard](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [ 添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)    |

### BebasID 提供的 BebasDNS

[BebasDNS](https://github.com/bebasid/bebasdns) 是一个位于印度尼西亚，支持 OpenNIC 域名的免费中立公共 DNS 解析器。 它由印度尼西亚网络中立社区 (Komunitas Internet Netral Indonesia, KINI) 创建，旨在为印尼用户提供免费的中立互联网连接。

#### 默认

这是 BebasDNS 的默认变体。 该变体仅阻止广告、恶意软件和网络钓鱼域名。

| 协议             | 地址                                                               |                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                              | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                      | [添加到 AdGuard](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)                     |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dns.bebasid.com` IP 地址：`103.87.68.194:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                               |

#### 无过滤

该变体无法过滤任何内容。

| 协议             | 地址                                     |                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                       |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [添加到 AdGuard](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### 安全

这是 BebasDNS 的安全/防病毒变体。 该变体仅阻止恶意软件和网络钓鱼域名。

| 协议             | 地址                                        |                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [添加到 AdGuard](adguard:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                     |

#### 家庭

这是 BebasDNS 的家庭模式变体。 该变体阻止色情、赌博、仇恨网站，阻止恶意软件和网络钓鱼域名。

| 协议             | 地址                                                                         |                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                              | [添加到 AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                      | [添加到 AdGuard](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                     |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.internetsehat.bebasid.com` IP 地址：`103.87.68.196:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                         |

#### 具有广告过滤功能的家庭模式

这是带有广告拦截器的 BebasDNS 家庭模式变体。

| 协议             | 地址                                          |                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [添加到 AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [添加到 AdGuard](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD 过滤器

这是一个自定义的 BebasDNS，仅包含 OISD Big 过滤器。

| 协议             | 地址                                 |                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [添加到 AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [添加到 AdGuard](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal 过滤器

这是一个自定义的 BebasDNS，仅包含 Hagezi Multi Normal 过滤器。

| 协议             | 地址                                   |                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [添加到 AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [添加到 AdGuard](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### 0ms DNS

[DNS](https://0ms.dev/) 是由 0ms Group 提供的全球 DNS 解析服务，用户可以将其作为当前 DNS 提供商的替代方案。

它使用 [OISD Big](https://oisd.nl/) 作为基本过滤器，为每个人提供更安全的环境。 它在设计上进行了各种优化，如 HTTP/3、DNS 缓存等。 它利用机器学习技术来保护用户免受潜在的安全威胁，同时还能随着时间的推移不断优化自身性能。

| 协议             | 地址                          |                                                                                                                                                                                          |
| -------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://0ms.dev/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev) |

### CFIEC 公共 DNS

基于 IPv6 的 anycast DNS 服务，具有强大的安全功能，可以防止间谍软件和恶意网站。 它支持 DNS64，只为 IPv6 用户提供域名解析。

| 协议             | 地址                                |                                                                                                                                                                                                          |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` 和 `240C::6644`       | [添加到 AdGuard](adguard:add_dns_server?address=240C::6666&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) 是一个通过整合内容过滤和网络钓鱼防护等功能来扩展 DNS 的服务，并且具有零停机时间。

#### 标准

具有自定义过滤功能的 DNS 服务器可以保护用户的设备免受恶意软件攻击。

| 协议             | 地址                                                        |                                                                                                                                                                                                                  |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` 和 `208.67.220.220`                       | [添加到 AdGuard](adguard:add_dns_server?address=208.67.222.222&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` 和 `2620:119:53::53`                     | [添加到 AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`208.67.220.220`  | [添加到 AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                         |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`[2620:0:ccc::2]` | [添加到 AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                        |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                       | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |
| DNS-over-TLS   | `tls://dns.opendns.com`                                   | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

阻止成人内容的 OpenDNS 服务器。

| 协议             | 地址                                                       |                                                                                                                                                                                                                                                                      |
| -------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` 和 `208.67.220.123`                      | [添加到 AdGuard](adguard:add_dns_server?address=208.67.222.123&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`208.67.220.123` | [添加到 AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                             |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`         | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                         | [添加到 AdGuard](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

无过滤的 OpenDNS 服务器。

| 协议             | 地址                                          |                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `208.67.222.2` 和 `208.67.220.2`             | [添加到 AdGuard](adguard:add_dns_server?address=208.67.220.2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.2&name=)                                                                                                         |
| DNS, IPv6      | `2620:74:1b::1:1` 和 `2620:74:1c::2:2`       | [添加到 AdGuard](adguard:add_dns_server?address=2620:0:ccc::2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=)                                                                                                       |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [添加到 AdGuard](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com/dns-query&name=sandbox.opendns.com)                               |

:::info

OpenDNS 服务器删除某些响应（包括带有 NODATA 的响应）中的 AUTHORITY 部分，因此无法缓存此类响应。

:::

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) 是一个提供私人定制过滤的 DNS 服务。 这项服务提供一种安全的浏览方式，不会出现不适当的内容。

#### 家庭版过滤器

阻止访问所有成人、色情和露骨网站，包括代理，以及 VPN 域和混合内容站点。

| 协议             | 地址                                                   |                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `185.228.168.168` 和 `185.228.169.168`                | [添加到 AdGuard](adguard:add_dns_server?address=185.228.168.168&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` 和 `2a0d:2a00:2::`                    | [添加到 AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | 提供者：`cleanbrowsing.org` IP 地址：`185.228.168.168:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                       |
| DNSCrypt, IPv6 | 提供者：`cleanbrowsing.org` IP 地址：`[2a0d:2a00:1::]:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                       |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`   | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`          | [添加到 AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### 成人过滤器

比家庭过滤器限制更小，它仅拦截成人内容，恶意和钓鱼域名。

| 协议             | 地址                                                    |                                                                                                                                                                                                                                                                      |
| -------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` 和 `185.228.169.11`                   | [添加到 AdGuard](adguard:add_dns_server?address=185.228.168.10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` 和 `2a0d:2a00:2::1`                   | [添加到 AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | 提供者：`cleanbrowsing.org` IP 地址：`185.228.168.10:8443`   | [添加到 AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                    |
| DNSCrypt, IPv6 | 提供者：`cleanbrowsing.org` IP 地址：`[2a0d:2a00:1::1]:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                 |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`     | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`            | [添加到 AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### 安全过滤器

拦截钓鱼，垃圾邮件和恶意域名。

| 协议             | 地址                                                   |                                                                                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` 和 `185.228.169.9`                    | [添加到 AdGuard](adguard:add_dns_server?address=185.228.168.9&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` 和 `2a0d:2a00:2::2`                  | [添加到 AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [添加到 AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) 是一种免费、快速的 DNS 服务，它作为递归名称服务器，为互联网上的任何主机提供域名解析。

#### 标准

| 协议                   | 地址                                              |                                                                                                                                                                                                                                    |
| -------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` 和 `1.0.0.1`                           | [添加到 AdGuard](adguard:add_dns_server?address=1.1.1.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` 和 `2606:4700:4700::1001` | [添加到 AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                         | [添加到 AdGuard](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                              |

#### 仅阻止恶意软件

| 协议             | 地址                                              |                                                                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` 和 `1.0.0.2`                           | [添加到 AdGuard](adguard:add_dns_server?address=1.1.1.2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` 和 `2606:4700:4700::1002` | [添加到 AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### 阻止恶意软件和成人内容

| 协议                   | 地址                                              |                                                                                                                                                                                                                                                          |
| -------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` 和 `1.0.0.3`                           | [添加到 AdGuard](adguard:add_dns_server?address=1.1.1.3&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` 和 `2606:4700:4700::1003` | [添加到 AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [添加到 AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) 是一种域名解析服务，通过全球 DNS 服务器网络解析用户的 DNS 请求。 清除过多广告，防止网络钓鱼和间谍软件。

| 协议             | 地址                                                                |                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` 和 `8.20.247.20`                                      | [添加到 AdGuard](adguard:add_dns_server?address=8.26.56.26&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)                 |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP 地址：`8.20.247.2` | [添加到 AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### ControlD

[ControlD](https://controld.com/free-dns) 是具有代理功能的可定制 DNS 服务。 这意味着它不仅能屏蔽各种内容（广告、色情等），还能解除对网站和服务的拦截。

#### 无过滤

| 协议             | 地址                                |                                                                                                                                                                                |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS、IPv4       | `76.76.2.0` 和 `76.76.10.0`        | [添加到 AdGuard](adguard:add_dns_server?address=76.76.2.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` 和 `2606:1a40:1::`   | [添加到 AdGuard](adguard:add_dns_server?address=2606:1a40::&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [添加到 AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [添加到 AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### 拦截恶意软件

| 协议             | 地址                                |                                                                                                                                                                                |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.1`                       | [添加到 AdGuard](adguard:add_dns_server?address=76.76.2.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [添加到 AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

#### 阻止恶意软件和广告

| 协议             | 地址                                |                                                                                                                                                                                |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.2`                       | [添加到 AdGuard](adguard:add_dns_server?address=76.76.2.2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [添加到 AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

#### 拦截恶意软件 + 广告 + 社交媒体

| 协议             | 地址                                |                                                                                                                                                                                |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.3`                       | [添加到 AdGuard](adguard:add_dns_server?address=76.76.2.3&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [添加到 AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)     |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) 是一项 DNS 服务，让用户阻止任何想要的内容，同时默认保护用户和家人免受广告、跟踪器、恶意软件、网络钓鱼、恶意网站等的侵害。

| 协议             | 地址                                                                         |                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 供应商：`2.dnscrypt-cert.DeCloudUs-test` IP 地址:`78.47.212.211:9443`            | [添加到 AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                         |
| DNSCrypt, IPv6 | 供应商：`2.dnscrypt-cert.DeCloudUs-test` IP 地址: `[2a01:4f8:13a:250b::30]:9443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                            |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                      | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                  | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

促进、实施和部署 [DNS Privacy](https://dnsprivacy.org/) 的协作开放项目。

#### 由 [Stubby 开发者](https://getdnsapi.net/)运行的 DNS 服务器

| 协议           | 地址                                                                                                               |                                                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-TLS | 主机名：`tls://getdnsapi.net` IP 地址：`185.49.141.37`和 IPv6：`2a04:b900:0:100::37`                                      | [添加到 AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | 提供商：`Surfnet` 主机名：`tls://dnsovertls.sinodun.com` IP 地址：`145.100.185.15` IPv6 地址：`2001:610:1:40ba:145:100:185:15` | [添加到 AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | 提供商：`Surfnet` 主机名：`tls://dnsovertls1.sinodun.com` IP 地址：`145.100.185.16` 和 IPv6：`2001:610:1:40ba:145:100:185:16` | [添加到 AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

#### 其他采取「零日志」政策的 DNS 服务器。

| 协议                 | 地址                                                                                                      |                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | 提供商：`UncensoredDNS` 主机名：`tls://unicast.censurfridns.dk` IP 地址：`89.233.43.71` 和 IPv6：`2a01:3a0:53:53::0` | [添加到 AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | 提供商：`UncensoredDNS` 主机名：`tls://anycast.censurfridns.dk` IP 地址：`91.239.100.100` 和 IPv6：`2001:67c:28a4::` | [添加到 AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | 提供商：`dkg` 主机名：`tls://dns.cmrg.net` IP 地址：`199.58.81.218` 和 IPv6 地址：`2001:470:1c:76d::53`                | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | 主机名：`tls://dns.larsdebruin.net` IP 地址：`51.15.70.167`                                                    | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | 主机名：`tls://dns-tls.bitwiseshift.net` IP 地址：`81.187.221.24` 和 IPv6：`2001:8b0:24:24::24`                  | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | 主机名：`tls://ns1.dnsprivacy.at` IP 地址：`94.130.110.185` 和 IPv6：`2a01:4f8:c0c:3c03::2`                      | [添加到 AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | 主机名：`tls://ns2.dnsprivacy.at` IP 地址：`94.130.110.178` 和 IPv6：`2a01:4f8:c0c:3bfc::2`                      | [添加到 AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | 主机名：`tls://dns.bitgeek.in` IP 地址：`139.59.51.46`                                                         | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | 主机名：`tls://dns.neutopia.org` IP 地址：`89.234.186.112` 和 IPv6：`2a00:5884:8209::2`                          | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | 提供商：`Go6Lab` 主机名：`tls://privacydns.go6lab.si` 和 IPv6 地址：`2001:67c:27e4::35`                             | [添加到 AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | 主机名：`tls://dot.securedns.eu` IP 地址：`146.185.167.43` 和 IPv6： `2a03:b0c0:0:1010::e9a:3001`                | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

#### 进行最低限度日志记录/限制的 DNS 服务器

这些服务器使用一些日志、自签名证书或不支持严格模式。

| 协议           | 地址                                                                                                   |                                                                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | 提供商：`NIC Chile` 主机名 `dnsotls.lab.nic.cl` IP 地址：`200.1.123.46` 和 IPv6：`2001:1398:1:0:200:1:123:46`    | [添加到 AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | 提供商：`OARC` 主机名：`tls-dns-u.odvr.dns-oarc.net` IP 地址：`184.105.193.78` 和 IPv6：`2620:ff:c000:0:1::64:25` | [添加到 AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/) 提供免费的 DNS 服务，无日志记录，启用 DNSSEC。

| 协议             | 地址                                |                                                                                                                                                                                              |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` 和 `45.11.45.11` | [添加到 AdGuard](adguard:add_dns_server?address=185.222.222.222&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` 和 `2a11::`               | [添加到 AdGuard](adguard:add_dns_server?address=2a09::&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                    | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                        |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) 是一家拥有多年域名解析服务开发经验的隐私友好型 DNS 提供商，旨在为用户提供更快速、准确、稳定的递归解析服务。

| 协议             | 地址                          |                                                                                                                                                                                  |
| -------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`              | [添加到 AdGuard](adguard:add_dns_server?address=119.29.29.29&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS, IPv6      | `2402:4e00::`               | [添加到 AdGuard](adguard:add_dns_server?address=2402:4e00::&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2402:4e00::&name=)                                           |
| DNS-over-HTTPS | `https://dns.pub/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### DNSWatchGO

[Strongarm DNS](https://www.watchguard.com/wgrd-products/dnswatchgo) 是 Strongarm 的一项 DNS 服务，防止人们与恶意内容进行交互。

| 协议        | 地址                               |                                                                                                                                            |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `54.174.40.213` 和 `52.3.100.184` | [添加到 AdGuard](adguard:add_dns_server?address=54.174.40.213&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### dns0.eu

[dns0.eu](https://www.dns0.eu) 是一个免费、独立且符合 GDPR 递归 DNS 解析器，它非常注重安全性，以保护欧盟的公民和组织。

| 协议             | 地址                             |                                                                                                                                                             |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.110.81.0` 和 `185.253.5.0` | [添加到 AdGuard](adguard:add_dns_server?address=193.110.81.0&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`        | [添加到 AdGuard](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`           | [添加到 AdGuard](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`          | [添加到 AdGuard](adguard:add_dns_server?address=quic://zero.dns0.eu)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) 是 Dyn 公司提供的免费替代 DNS 服务。

| 协议        | 地址                                |                                                                                                                                            |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `216.146.35.35` 和 `216.146.36.36` | [添加到 AdGuard](adguard:add_dns_server?address=216.146.35.35&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) 是 Freenom World 提供的免费匿名 DNS 解析器。

| 协议        | 地址                            |                                                                                                                                        |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` 和 `80.80.81.81` | [添加到 AdGuard](adguard:add_dns_server?address=80.80.80.80&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) 是一项免费的全球 DNS 解析服务，用户可以将其作为当前 DNS 提供商的替代服务。

| 协议             | 地址                                              |                                                                                                                                                                                              |
| -------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` 和 `8.8.4.4`                           | [添加到 AdGuard](adguard:add_dns_server?address=8.8.8.8&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` 和 `2001:4860:4860::8844` | [添加到 AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                              | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor 是 Hurricane Electric 提供的一项免费的替代 DNS 服务，它采用了 Anycast 技术。

| 协议             | 地址                               |                                                                                                                                                                                                         |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [ 添加到 AdGuard](adguard:add_dns_server?address=74.82.42.42&name=), [ 添加到 AdGuard VPN](adguardvpn:add_dns_server?address=74.82.42.42&name=)                                                               |
| DNS, IPv6      | `2001:470:20::2`                 | [ 添加到 AdGuard](adguard:add_dns_server?address=2001:470:20::2&name=), [ 添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:470:20::2&name=)                                                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [ 添加到 AdGuard](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [ 添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [ 添加到 AdGuard](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [ 添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) 提供具有 QNAME 最小化功能的可公开访问 DNS，端点位于德国、新加坡、瑞典、英国和美国 (达拉斯和纽约)。

#### 无过滤

| 协议             | 地址                                  |                                                                                                                                                                                                         |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### 广告拦截

| 协议             | 地址                                          |                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### 广告 + 恶意软件拦截

| 协议             | 地址                                       |                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### 广告 + 恶意软件 + 社交媒体拦截

| 协议             | 地址                                           |                                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### 广告 + 恶意软件 + 成人 + 赌博拦截

| 协议             | 地址                                         |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### 广告 + 恶意软件 + 成人 + 赌博 + 社交媒体拦截

| 协议             | 地址                                      |                                                                                                                                                                                                                                   |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) 是一种任播互联网过滤系统，保护儿童免受不当网站和虐待内容的侵害。

| 协议             | 地址                                                        |                                                                                                                                                |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` 和 `180.131.145.145`                     | [添加到 AdGuard](adguard:add_dns_server?address=180.131.144.144&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.nawala.id` IP 地址： `180.131.144.144` | [添加到 AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)         |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) 是一项免费的基于云的递归 DNS 服务，通过内置的安全和威胁情报，快速可靠地访问网站和在线应用程序。

#### 可靠性和性能 1

这些服务器提供可靠、快速的 DNS 查找，但无法阻止任何特定类别。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` 和 `156.154.71.1`       | [添加到 AdGuard](adguard:add_dns_server?address=156.154.70.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` 和 `2610:a1:1019::1` | [添加到 AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### 可靠性和性能 2

这些服务器提供可靠、快速的 DNS 查询，不会阻止任何特定类别，还能防止将 NXDomain（不存在的域）响应重定向到登录页面。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` 和 `156.154.71.5`       | [添加到 AdGuard](adguard:add_dns_server?address=156.154.70.5&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` 和 `2610:a1:1019::5` | [添加到 AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### 威胁防护

这些服务器提供针对恶意域的保护，还包括「可靠性和性能」功能。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` 和 `156.154.71.2`       | [添加到 AdGuard](adguard:add_dns_server?address=156.154.70.2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` 和 `2610:a1:1019::2` | [添加到 AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### 家庭版保护

这些服务器阻止访问成熟内容，还包括「可靠性和性能」+「威胁防护」功能。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` 和 `156.154.71.3`       | [添加到 AdGuard](adguard:add_dns_server?address=156.154.70.3&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` 和 `2610:a1:1019::3` | [添加到 AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### 商业安全

这些服务器阻止不需要的和浪费时间的内容，还包括「可靠性和性能」+「威胁防护」+「家庭安全」功能。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` 和 `156.154.71.4`       | [添加到 AdGuard](adguard:add_dns_server?address=156.154.70.4&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` 和 `2610:a1:1019::4` | [添加到 AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) 除了提供免费的可配置过滤解析器和可选的日志记录外，还提供可公开访问的非过滤解析器，没有日志记录。

#### 超低延迟

| 协议             | 地址                       |                                                                                                                                                                                                              |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| 协议             | 地址                               |                                                                                                                                                                                                                                              |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [添加到 AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS 解析器，可拦截：广告、跟踪、广告软件、恶意软件、恶意活动和网络钓鱼公司，可拦截约100万个域。 该服务器提供 24/48 小时日志记录，可用于 DDoS/Flood 攻击的缓解。

#### Adaptive Filtering (ADA)

建议大多数用户使用，过滤功能非常灵活，可拦截大多数广告网络、广告跟踪、恶意软件和网络钓鱼域。

| 协议             | 地址                                  |                                                                           |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [添加到 AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [添加到 AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

更严格的过滤策略，包括拦截广告、营销、跟踪器、点击诱饵、Coinhive、恶意域名和钓鱼域名。

| 协议             | 地址                                  |                                                                           |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [添加到 AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [添加到 AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) 是一个免费、递归、任意播放的 DNS 平台，提供高性能、隐私和安全保护，免受钓鱼和间谍软件的攻击。 Quad9 服务器不提供审查组件。

#### 标准

提供网络钓鱼和间谍软件保护的常规 DNS 服务器， 包括拦截列表、DNSSEC 验证和其他安全功能。

| 协议             | 地址                                                          |                                                                                                                                                                                                          |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` 和 `149.112.112.112`                               | [添加到 AdGuard](adguard:add_dns_server?address=9.9.9.9&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP 地址：`2620:fe::fe:9`                         | [添加到 AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.9:8443`        | [添加到 AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe]: 8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                               |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                           | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                       | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### 不安全

不安全的 DNS 服务器不提供安全拦截列表、DNSSEC、或 EDNS 客户端子网。

| 协议             | 地址                                                             |                                                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` 和 `149.112.112.10`                                  | [添加到 AdGuard](adguard:add_dns_server?address=9.9.9.10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP 地址：`2620:fe::fe:10`                           | [添加到 AdGuard](adguard:add_dns_server?address=2620:fe::10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.10:8443`          | [添加到 AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                             |
| DNSCrypt, IPv6 | 提供者： `2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe:10]:8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                   |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                            | [添加到 AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                        | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) 支持

EDNS Client Subnet 是一种在发送到权威 DNS 服务器的请求中包含终端用户 IP 地址数据的方法。 它提供安全拦截列表、DNSSEC、EDNS Client Subnet。

| 协议             | 地址                                                          |                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` 和 `149.112.112.11`                               | [添加到 AdGuard](adguard:add_dns_server?address=9.9.9.11&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP 地址：`2620:fe::fe:11`                        | [添加到 AdGuard](adguard:add_dns_server?address=2620:fe::11&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.11:8443`       | [添加到 AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                             |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe]: 8443` | [添加到 AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                         | [添加到 AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                     | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Quadrant Security

[Quadrant Security](https://www.quadrantsec.com/post/public-dns-resolver-with-tls-https-support) 提供带有无日志记录或过滤功能的 DoH 和 DoT 服务器，适用于广大公众。

| 协议             | 地址                             |                                                                                                                                                                                              |
| -------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.qis.io/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io) |
| DNS-over-TLS   | `tls://dns-tls.qis.io`         | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)         |

### Rabbit DNS

[Rabbit DNS](https://rabbitdns.org/) 是一个注重隐私的 DNS-over-HTTPS 服务，不收集任何用户数据。

#### 无过滤

| 协议             | 地址                                    |                                                                                                                                                                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns.rabbitdns.org/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org) |

#### Security-filtering

| 协议             | 地址                                         |                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://security.rabbitdns.org/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org) |

#### Family-filtering

| 协议             | 地址                                       |                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://family.rabbitdns.org/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org) |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) 提供以 Cloudflare Worker 身份运行的 DNS-over-HTTPS 服务，以及作为 Fly.io Worker 运行的 DNS-over-TLS 服务，并提供可配置的拦截列表。

#### 无过滤

| 协议             | 地址                              |                                                                                                                                                                                                                    |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [添加到 AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [添加到 AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) 是一个全球任播网络，由遍布全球的服务器组成，包括美洲，欧洲，非洲，澳大利亚和远东，以确保从全球任何地方快速可靠地解析 DNS。

| 协议        | 地址                              |                                                                                                                                          |
| --------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` 和 `195.46.39.40` | [添加到 AdGuard](adguard:add_dns_server?address=195.46.39.39&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) 是一项 DNS 服务，可阻止 50 多个类别，例如色情、广告、恶意软件和流行的社交媒体网站，使网络冲浪更加安全。

| 协议             | 地址                                                            |                                                                                                                                                |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` 和 `104.197.28.121`                          | [添加到 AdGuard](adguard:add_dns_server?address=104.155.237.225&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.safesurfer.co.nz` IP 地址：`104.197.28.121` | [添加到 AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### 360 Secure DNS

**360 Secure DNS** 是行业领先的递归 DNS 服务，具有高级网络安全威胁防护。

| 协议             | 地址                               |                                                                                                                                                                                              |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` 和 `218.30.118.6`   | [添加到 AdGuard](adguard:add_dns_server?address=101.226.4.6&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` 和 `140.207.198.6` | [添加到 AdGuard](adguard:add_dns_server?address=123.125.81.6&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`   | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) 是一项免费的 DNS 服务，与其他替代方案相比，提供了更好的 DNS 稳定性和安全性。 Verisign 尊重用户的隐私：它不会向第三方出售公共 DNS 数据，也不会重定向用户的查询以托管广告。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` 和 `64.6.65.6`             | [添加到 AdGuard](adguard:add_dns_server?address=64.6.64.6&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` 和 `2620:74:1c::2:2` | [添加到 AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) 是由 Wikimedia 基金会运营的缓存、递归、公共的 DoH 和 DoT 解析器服务。它由 Wikimedia 基金会站点可靠性工程 (流量) 团队在所有六个 Wikimedia 数据中心上运行和管理，并采用了 Anycast 技术。

| 协议             | 地址                                                                      |                                                                                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                   | [添加到 AdGuard](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | 主机名: `wikimedia-dns.org` IPv4: `185.71.138.138` IPv6: `2001:67c:930::1` | [添加到 AdGuard](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [添加到 AdGuard VPN](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Regional Resolvers**

Regional DNS 解析器通常专注于特定地理区域，为这些区域的用户提供优化的性能。 这些解析器通常由非营利组织、本地 ISP 或其他实体运营。

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) 运营 DNS 隐私服务，以帮助保护 DNS 流量，并帮助使提供现代协议的 DNS 解析器环境多样化。

| 协议             | 地址                                      |                                                                                                                                                                                                                                          |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS 是字节跳动在中国提供的免费替代 DNS 服务。 ByteDance DNS 目前仅支持 IPv4。 将陆续推出 DNS-over-HTTPS（DoH）、TLS 加密协议的 DNS（DoT）、DNS-over-Quic（DoQ）等加密 DNS 服务。

| 协议        | 地址                          |                                                                                                                                        |
| --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1`和`180.184.2.2` | [添加到 AdGuard](adguard:add_dns_server?address=180.184.1.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) 可防止个人和财务数据被盗。 将病毒、勒索软件和其他恶意软件拒之门外。

#### 私人

在「私人」模式下，仅进行 DNS 解析。

| 协议                | 地址                                                                                            |                                                                                                                                                                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4         | `149.112.121.10` 和 `149.112.122.10`                                                           | [添加到 AdGuard](adguard:add_dns_server?address=149.112.121.10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6         | `2620：10A：80BB：：10` 和 `2620：10A：80BC：10`                                                      | [添加到 AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS    | `https://private.canadianshield.cira.ca/dns-query`                                            | [添加到 AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — 私人 | 主机名：`tls://private.canadianshield.cira.ca` IP 地址：`149.112.121.10` IPv6 地址：`2620:10A:80BB::10` | [添加到 AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### 受保护

在「受保护」模式下，进行恶意软件和网络钓鱼的防护。

| 协议                 | 地址                                                                                                |                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4          | `149.112.121.20` 和 `149.112.122.20`                                                               | [添加到 AdGuard](adguard:add_dns_server?address=149.112.121.20&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6          | `2620:10A:80BB::20` 和 `2620:10A:80BC::20`                                                         | [添加到 AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS     | `https://protected.canadianshield.cira.ca/dns-query`                                              | [添加到 AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — 受保护 | 主机名：`tls://protected.canadianshield.cira.ca` IP 地址：`149.112.121.20` 和 IPv6 地址：`2620:10A:80BB::20` | [添加到 AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### 家庭

在「家庭」模式下，受保护 + 拦截成人内容。

| 协议                | 地址                                                                                             |                                                                                                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4         | `149.112.121.30` 和 `149.112.122.30`                                                            | [添加到 AdGuard](adguard:add_dns_server?address=149.112.121.30&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6         | `2620:10A:80BB::30` 和 `2620:10A:80BC::30`                                                      | [添加到 AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS    | `https://family.canadianshield.cira.ca/dns-query`                                              | [添加到 AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — 家庭 | 主机名：`tls://family.canadianshield.cira.ca` IP 地址：`149.112.121.30` 和 IPv6 地址：`2620:10A:80BB::30` | [添加到 AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) 是一个快速且安全的 DNS 服务，它能保护用户免受广告、跟踪和网络钓鱼。

| 协议             | 地址                               |                                                                                                                                                                                                                        |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.controld.com/comss` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com)          |
| DNS-over-TLS   | `tls://comss.dns.controld.com`   | [添加到 AdGuard](adguard:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com), [添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com)  |
| DNS-over-QUIC  | `quic://comss.dns.controld.com`  | [添加到 AdGuard](adguard:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR 是开放式的 DNSSEC 验证解析器。 CZ.NIC 既不收集任何个人数据，也不在设备发送个人数据的页面上收集信息。

| 协议             | 地址                                        |                                                                                                                                                                                      |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `193.17.47.1` 和 `185.43.135.1`            | [添加到 AdGuard](adguard:add_dns_server?address=193.17.47.1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` 和 `2001:148f:fffe::1` | [添加到 AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                 | [添加到 AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                       | [添加到 AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) 是由 Digital Society 运营的公共解析器。 服务器托管在瑞士苏黎世。

| 协议             | 地址                                                                                             |                                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP 地址： `185.95.218.42` 和 IPv6：`2a05:fc84::42` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digital-gesellschaft.ch` IP 地址: `185.95.218.43` 和 IPv6: `2a05:fc84::43`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### 家庭 DNS

[家庭 DNS](https://dnsforfamily.com/) 旨在拦截成人网站。 它使儿童和成人能够安全地上网，而不必担心被恶意网站跟踪。

| 协议             | 地址                                                        |                                                                                                                                                                                                                                                                                      |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`              | [添加到 AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                          | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` 和 `78.47.64.161`                         | [添加到 AdGuard](adguard:add_dns_server?address=94.130.180.225&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` 和 `2a01:4f8:1c17:4df8::1`         | [添加到 AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | 提供商：`dnsforfamily.com` IP 地址：`94.130.180.225`             | [添加到 AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                            |
| DNSCrypt, IPv6 | 提供商： `1.dnsforfamily.com` IP 地址：`[2a01:4f8:1c0c:40db::1]` | [添加到 AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) 服务器由 [Restena Foundation](https://www.restena.lu/) 提供。

| 协议             | 地址                                                                                   |                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP 地址: `158.64.1.29` 和 IPv6: `2001:a18:1::29` | [添加到 AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP 地址: `158.64.1.29` 和 IPv6 地址: `2001:a18:1::29`          | [添加到 AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)                         |

### 114DNS

[114DNS](https://www.114dns.com) 专业、高可靠的 DNS 服务。

#### 一般

拦截广告和烦人的网站。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` 和 `114.114.115.115` | [添加到 AdGuard](adguard:add_dns_server?address=114.114.114.114&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### 安全

拦截网络钓鱼、恶意和其他不安全的网站。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` 和 `114.114.115.119` | [添加到 AdGuard](adguard:add_dns_server?address=114.114.114.119&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### 家庭

这些服务器拦截成人网站和不适当的内容。

| 协议        | 地址                                    |                                                                                                                                                |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` 和 `114.114.115.110` | [添加到 AdGuard](adguard:add_dns_server?address=114.114.114.110&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) 是由 Internet Initiative Japan 运营的公共 DNS 服务。 它还会拦截虐待儿童的内容。

| 协议             | 地址                                    |                                                                                                                                                                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) 是一个专注于安全的免费递归 DNS 服务，能拦截恶意软件。 它支持 DNSSEC，而且不存储日志。

| 协议             | 地址                                    |                                                                                                                                                                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `155.248.232.226`                     | [添加到 AdGuard](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [添加到 AdGuard](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

### LibreDNS

[LibreDNS](https://libredns.gr/) 是一个由 [LibreOps](https://libreops.cc/) 运行的公共加密 DNS 服务。

| 协议             | 地址                                              |                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                                 | [添加到 AdGuard](adguard:add_dns_server?address=88.198.92.222&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`             | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                   | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP 地址: `116.202.176.26` | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/) 是一种安全、快速、免费的小众 DNS 服务，具有恶意域阻止功能。

#### Pure Edition

| 协议        | 地址                             |                                                                                                                                          |
| --------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` 和 `52.80.52.52` | [添加到 AdGuard](adguard:add_dns_server?address=117.50.10.10&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| 协议        | 地址                             |                                                                                                                                          |
| --------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` 和 `52.80.66.66` | [添加到 AdGuard](adguard:add_dns_server?address=117.50.11.11&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) 是 OpenNIC 项目提供的免费替代 DNS 服务。

| 协议        | 地址                      |                                                                                                                                                            |
| --------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [添加到 AdGuard](adguard:add_dns_server?address=217.160.70.42&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=217.160.70.42&name=)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [添加到 AdGuard](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

这只是可用服务器之一，在[这里](https://servers.opennic.org/)可以查看完整列表。

### Quad101

[Quad101](https://101.101.101.101) 是由 TWNIC (台湾网络信息中心) 提供的免费替代 DNS 服务，无日志记录。

| 协议             | 地址                                    |                                                                                                                                                                                                      |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` 和 `101.102.103.104` | [添加到 AdGuard](adguard:add_dns_server?address=101.101.101.101&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` 和 `2001:de4::102`     | [添加到 AdGuard](adguard:add_dns_server?address=2001:de4::101&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`      | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) 为内容过滤和互联网安全提供解决方案。

| 协议        | 地址               |                                                                                                                                              |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [添加到 AdGuard](adguard:add_dns_server?address=193.58.251.251&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) 是由 [switch.ch](https://www.switch.ch/) 提供的瑞士公共 DNS 服务。

| 协议             | 地址                                                                         |                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | 提供商：`dns.switch.ch` IP 地址：`130.59.31.248:`                                 | [添加到 AdGuard](adguard:add_dns_server?address=130.59.31.248&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | 提供商：`dns.switch.ch` IP 地址：`2001.620:`                                      | [添加到 AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                          | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | 主机名：`tls://dns.switch.ch` IP 地址：`130.59.31.248` 和 IPv6: `2001:620:0:ff::2` | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/) 是一个基于韩国的公共 DNS 服务，不会记录用户的 IP 地址。 广告和跟踪器已拦截。

#### SK Broadband

| 协议             | 地址                              |                                                                                                                                                                                                  |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud South Korea

| 协议             | 地址                                        |                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) 是一个免费的递归 DNS 服务。 Yandex.DNS 服务器位于俄罗斯、独联体国家和西欧。 用户的请求由提供高速连接的最近的数据中心处理。

#### 基础

在「基础」模式下，服务器不进行流量过滤。

| 协议             | 地址                                              |                                                                                                                                                                                                                            |
| -------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` 和 `77.88.8.1`                       | [添加到 AdGuard](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` 和 `2a02:6b8:0:1::feed:0ff` | [添加到 AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`   | [添加到 AdGuard](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### 安全

在「安全」模式下，可阻止感染和欺诈网站。

| 协议             | 地址                                              |                                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` 和 `77.88.8.2`                      | [添加到 AdGuard](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` 和 `2a02:6b8:0:1::feed:bad` | [添加到 AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`     | [添加到 AdGuard](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                 | [添加到 AdGuard](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### 家庭

在「家庭」模式下，可防止感染、欺诈和成人网站。

| 协议             | 地址                                              |                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` 和 `77.88.8.7`                       | [添加到 AdGuard](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` 和 `2a02:6b8:0:1::feed:a11` | [添加到 AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`   | [添加到 AdGuard](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`               | [添加到 AdGuard](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **个人小型解析器**

这些是 DNS 解析器，通常由爱好者或小团体运行。 虽然它们可能缺乏大型提供商的规模和冗余，但它们往往优先考虑隐私、透明度或提供专门功能。

我们无法正确监控它们的可用性。 **使用它们需要您自担风险！**

### AhaDNS

[AhaDNS](https://ahadns.com/) 是由 Fredrik Pettersson 提供的零记录和广告拦截 DNS 服务。

#### 荷兰

| 协议             | 地址                                    |                                                                                                                                                                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `5.2.75.75`                           | [添加到 AdGuard](adguard:add_dns_server?address=5.2.75.75&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [添加到 AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### 洛杉矶

| 协议             | 地址                                    |                                                                                                                                                                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `45.67.219.208`                       | [添加到 AdGuard](adguard:add_dns_server?address=45.67.219.208&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [添加到 AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### Arapurayil

[Arapurayil](https://dns.arapurayil.com) 是托管在印度孟买的个人 DNS 服务。

无日志 | 过滤广告、跟踪器、网络钓鱼等 | DNSSEC | QNAME 最小化 | 无 EDNS 客户端子网

| 协议             | 地址                                                          |                                                                                                                                                                                                                              |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 主机：`2.dnscrypt-cert.dns.arapurayil.com` IP 地址：`3.7.156.128` | [添加到 AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                         |
| DNS-over-HTTPS | 主机：`https://dns.arapurayil.com/dns-query`                   | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) 是运行在 Digital Ocean droplet BLR1 区域中的服务器。 由 Abhay Rana（又名 Nemo）维护。

| 协议             | 地址                                                           |                                                                                                                                               |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.captnemo.in` IP 地址：`139.59.48.222:4434` | [添加到 AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### Dandelion Sprout 的官方 DNS 服务器

[Dandelion Sprout 的官方 DNS 服务器](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server)是托管在挪威特隆赫姆的个人 DNS 服务，使用 AdGuard Home 基础设施。

由于更先进的语法，它比 AdGuard DNS 拦截的广告和恶意软件更多，更容易识别追踪器，并拦截 alt-right 小报和大多数图像板。 日志记录用于改进其使用的过滤列表（例如，通过取消拦截不应拦截的站点），并确定服务器系统更新的最小不良时间。

| 协议             | 地址                                                    |                                                                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [添加到 AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [添加到 AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | 各不相同；请参阅上面的链接。                                        |                                                                                                                                                                                                                                                                                          |
| DNS, IPv6      | 各不相同；请参阅上面的链接。                                        |                                                                                                                                                                                                                                                                                          |
| DNSCrypt, IPv4 | 各不相同；请参阅上面的链接。                                        |                                                                                                                                                                                                                                                                                          |

### DNS Forge

[DNS Forge](https://dnsforge.de/) 是 [adminforge](https://adminforge.de/) 提供的冗余 DNS 解析器，带有广告拦截器，没有日志记录。

| 协议             | 地址                                                  |                                                                                                                                                                                                  |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `176.9.93.198` 和 `176.9.1.117`                      | [添加到 AdGuard](adguard:add_dns_server?address=176.9.93.198&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` 和 `2a01:4f8:141:316d::117` | [添加到 AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                     | [添加到 AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                 | [添加到 AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### dnswarden

| 协议             | 地址                                     |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [添加到 AdGuard](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

您还可以[配置自定义 DNS 服务器](https://dnswarden.com/customfilter.html)以阻止广告或过滤成人内容。

### FFMUC DNS

[FFMUC](https://ffmuc.net/) 由 Freifunk Mnchen 提供的免费 DNS 服务器。

| 协议                   | 地址                                                                 |                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | 主机名：`tls://dot.ffmuc.net`                                          | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | 主机名：`https://doh.ffmuc.net/dns-query`                              | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | 提供商：`2.dnscrypt-cert.ffmuc.net` IP 地址：`5.1.66.255:8443`            | [添加到 AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                   |
| DNSCrypt, IPv6       | 供应商：`2.dnscrypt-cert.fmuc.net` IP 地址: `[2001:678:e68:f000::]:8443` | [添加到 AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                    |

### fvz DNS

[fvz DNS](http://meo.ws/) 是 Fusl 的公共主要 OpenNIC Tier2 任播 DNS 解析器。

| 协议             | 地址                                                                 |                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.dnsrec.meo.ws` IP 地址： `185.121.177.177:5353` | [添加到 AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dnsrec.meo.ws` IP 地址： `169.239.202.202:5353`  | [添加到 AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

由 ibksturm 提供的 [ibksturm DNS](https://ibksturm.synology.me/) 测试服务器。 支持 OPENNIC、DNSSEC、无过滤、无日志记录。

| 协议                   | 地址                                                                  |                                                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-TLS, IPv4   | 主机名：`tls://ibksturm.synology.me` IP 地址：`213.196.191.96`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | 主机名：`quic://ibksturm.synology.me` IP 地址：`213.196.191.96`            | [添加到 AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | 主机名：`https://ibksturm.synology.me/dns-query` IP 地址：`213.196.191.96` | [添加到 AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | 提供商：`2.dnscrypt-cert.ibksturm` IP 地址：`213.196.191.96:8443`          | [添加到 AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                           |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) 由 Elias Ojala 运营，芬兰。

| 协议             | 地址                                       |                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Marbled Fennec

Marbled Fennec 网络正在托管能够解析 OpenNIC（根域名系统） 和 ICANN 域名的 DNS解析器。

| 协议             | 地址                                        |                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### momou! DNS

[momou! DNS](https://dns.momou.ch/) 提供三级过滤的 DNS-over-HTTPS 和 TLS 加密协议的 DNS（DoT）解析器。

#### 标准

拦截广告、跟踪器和恶意软件

| 协议             | 地址                               |                                                                                                                                                                                                      |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://dns.momou.ch`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch)                         |

#### 儿童

儿童友好的过滤器，也会拦截广告、跟踪器和恶意软件

| 协议             | 地址                                    |                                                                                                                                                                                                                |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/kids` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://kids.dns.momou.ch`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch)               |

#### 无过滤

| 协议             | 地址                                          |                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/unfiltered` | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://unfiltered.dns.momou.ch`             | [添加到 AdGuard](adguard:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch)   |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) 是一个小型的广告拦截 DNS 爱好项目。

#### OSZX DNS

该服务是一个小型广告拦截 DNS 爱好项目，支持 DoH、DoT 和 DNSCrypt v2。

| 协议             | 地址                                                                   |                                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `51.38.83.141`                                                       | [添加到 AdGuard](adguard:add_dns_server?address=51.38.83.141&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                            | [添加到 AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.oszx.co` IP 地址： `51.38.83.141：5353`            | [添加到 AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                           |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.oszx.co` IP 地址：`[2001:41d0:801:2000::d64]:5353` | [添加到 AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                            |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                      | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                  | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

这些服务器不提供广告拦截，不保留日志，并启用 DNSSEC。

| 协议             | 地址                                                                        |                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                            | [添加到 AdGuard](adguard:add_dns_server?address=51.38.82.198&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                | [添加到 AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.pumplex.com` IP 地址：`51.38.82.198:5353`               | [添加到 AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                     |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.pumplex.com` IP 地址：`[2001:41d0:801:2000::1b28]:5353` | [添加到 AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                     |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                       | [添加到 AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                   | [添加到 AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) 拦截超过十四万个广告、广告跟踪、恶意软件和钓鱼域名。 无日志记录，无 ECS，DNSSEC 验证，免费！

#### 新加坡 DNS 服务器

| 协议             | 地址                                                                     | 位置                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `174.138.21.128`                                                       | [添加到 AdGuard](adguard:add_dns_server?address=174.138.21.128&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                            | [添加到 AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dns.tiar.app` IP 地址： `174.138.21.128`             | [添加到 AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                    |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.dns.tiar.app` IP 地址：`[2400:6180:0:d0::5f6e:4001]` | [添加到 AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                   |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` （通过第三方缓存）                           | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                       | [添加到 AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                  | [添加到 AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                   | [添加到 AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### 日本 DNS 服务器

| 协议             | 地址                                                                         |                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                            | [添加到 AdGuard](adguard:add_dns_server?address=172.104.93.80&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                           | [添加到 AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.jp.tiar.app` IP 地址： `172.104.93.80`                   | [添加到 AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                            |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.jp.tiar.app` IP 地址：`[2400:8902::f03c:91ff:feda:c514]` | [添加到 AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                   |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                          | [添加到 AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                            | [添加到 AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                        | [添加到 AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### Seby DNS

[Seby DNS](https://dns.seby.io/) 是 Sebastian Schmidt 提供的一项注重隐私的 DNS 服务。 无日志记录，支持 DNSSEC 验证。

#### DNS 服务器 1

| 协议             | 地址                                                     |                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `45.76.113.31`                                         | [添加到 AdGuard](adguard:add_dns_server?address=45.76.113.31&name=)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dns.seby.io` IP 地址：`45.76.113.31` | [添加到 AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                            |
| DNS-over-TLS   | `tls://dot.seby.io`                                    | [添加到 AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) 是一个位于越南的 DNS 服务器，供个人和小规模使用。 它具有广告拦截、恶意软件/网络钓鱼保护、成人内容过滤和 DNSSEC 验证功能。

| 协议             | 地址                                      |                                                                                                                                                                                                                        |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.252.122.187`                       | [添加到 AdGuard](adguard:add_dns_server?address=103.252.122.187&name=BlackMagiccDNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=103.252.122.187&name=BlackMagiccDNS)                                             |
| DNS, IPv6      | `2401:4ae0::38`                         | [添加到 AdGuard](adguard:add_dns_server?address=2401:4ae0::38&name=BlackMagiccDNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=2401:4ae0::38&name=BlackMagiccDNS)                                                 |
| DNS-over-HTTPS | `https://rx.techomespace.com/dns-query` | [添加到 AdGuard](adguard:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS)，[添加到 AdGuard VPN](adguardvpn:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS) |
