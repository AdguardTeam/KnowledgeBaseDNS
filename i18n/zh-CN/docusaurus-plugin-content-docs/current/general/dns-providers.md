---
title: 已知的 DNS 提供商
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) 是广告拦截、隐私保护和家长控制的另一个解决方案。 无论您使用什么平台和设备，它都提供许多必要的保护功能，以防在线广告、跟踪器和网络钓鱼。

#### 默认

这些服务器拦截广告、跟踪和网络钓鱼。

| 协议             | 地址                                                                       |                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` 和 `94.140.15.15`                                          | [添加到AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::ad1:ff` 和 `2a10:50c0::ad2:ff`                                | [添加到AdGuard](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                  | [添加到AdGuard](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                              | [添加到AdGuard](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                             | [添加到AdGuard](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4 | 提供者: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [添加到AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6 | 提供者: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [添加到AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |

#### 家庭保护

下面的服务器提供默认功能 + 阻止成人网站 + 安全搜索。

| 协议             | 地址                                                                       |                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` 和 `94.140.15.16`                                          | [添加到AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::bad1:ff` 和 `2a10:50c0::bad2:ff`                              | [添加到AdGuard](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                               | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                           | [添加到AdGuard](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                          | [添加到AdGuard](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt.family.ns1.adguard.com` IP：`94.140.14.15:5443`           | [添加到AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6 | 提供者: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [添加到AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### 无过滤

下面的服务器提供安全可靠的连接，但与「标准」和「家庭保护」服务器不同，它们无法进行过滤。

| 协议             | 地址                                                                      |                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` 和 `94.140.14.141`                                       | [添加到AdGuard](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6      | `2a10:50c0::bad1:ff` 和 `2a10:50c0::bad2:ff`                             | [添加到AdGuard](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                          | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                      | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                     | [添加到AdGuard](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4 | 提供者: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`   | [添加到AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt.unfiltered.ns1.adguard.com` IP：`[2a10:50c0::1:ff]:5443` | [添加到AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) 是一个免费的递归 DNS 服务。 Yandex.DNS'服务器位于俄罗斯、独联体国家和西欧。 用户的请求由提供高速连接的最近的数据中心处理。

#### 基础

在「基础」模式下，服务器不进行流量过滤

| 协议             | 地址                                                             |                                                                                                                                                     |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` 和 `77.88.8.1`                                      | [添加到AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` 和 `2a02:6b8:0:1::feed:0ff`                | [添加到AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.browser.yandex.net` IP：`77.88.8.78:15353` | [添加到AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |

#### 安全

在「安全」模式下，可阻止感染和欺诈网站。

| 协议        | 地址                                              |                                                               |
| --------- | ----------------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` 和 `77.88.8.2`                      | [添加到AdGuard](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` 和 `2a02:6b8:0:1::feed:bad` | [添加到AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |

#### 家庭模式

在「家庭」模式下，可防止感染、欺诈和成人网站。

| 协议        | 地址                                              |                                                               |
| --------- | ----------------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` 和 `77.88.8.7`                       | [添加到AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` 和 `2a02:6b8:0:1::feed:a11` | [添加到AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) 是一项提供私人定制过滤的 DNS 服务。 这项服务提供了一种安全的方式来浏览web，而不包含不适当的内容。

#### 家庭版过滤器

阻止访问所有成人、色情和露骨网站，包括代理、& VPN 域和混合内容站点。

| 协议             | 地址                                                   |                                                                                                                                   |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` 和 `185.228.169.168`                | [添加到AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` 和 `2a0d:2a00:2::`                    | [添加到AdGuard](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4 | 提供者：`cleanbrowsing.org` IP 地址：`185.228.168.168:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | 提供者：`cleanbrowsing.org` IP：`[2a0d:2a00:1::]:8443`    | [添加到AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`   | [添加到AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`          | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### 成人过滤器

比家庭过滤器限制更小，它仅拦截成人内容，恶意和钓鱼域名。

| 协议             | 地址                                                 |                                                                                                                                     |
| -------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` 和 `185.228.169.11`                | [添加到AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6      | `2a0d:2a00:1::1` 和 `2a0d:2a00:2::1`                | [添加到AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4 | 提供者：`cleanbrowsing.org` IP：`185.228.168.10:8443`   | [添加到AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6 | 提供者：`cleanbrowsing.org` IP：`[2a0d:2a00:1::1]:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`  | [添加到AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`         | [添加到AdGuard](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |

#### 安全过滤器

拦截钓鱼，垃圾邮件和恶意域名。

| 协议             | 地址                                                   |                                                                                                 |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` 和 `185.228.169.9`                    | [添加到AdGuard](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6      | `2a0d:2a00:1::2` 和 `2a0d:2a00:2::2`                  | [添加到AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [添加到AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [添加到AdGuard](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### 舒适安全的DNS

[舒适安全的 DNS](https://comodo.com/secure-dns/) 是一种域名解析服务，通过全球 DNS 服务器网络解析您的 DNS 请求。 删除过多的广告并防止钓鱼和间谍软件。

| 协议             | 地址                                                                |                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` 和 `8.20.247.20`                                      | [添加到AdGuard](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP 地址：`8.20.247.2` | [添加到AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) 是一项免费的基于云的递归 DNS 服务，通过内置的安全和威胁情报，快速可靠地访问网站和在线应用程序。

#### 可靠性 & 性能 1

这些服务器提供可靠、快速的 DNS 查找，无需阻止任何特定类别。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` 和 `156.154.71.1`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` 和 `2610:a1:1019::1` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### 可靠性 & 性能 2*

这些服务器提供可靠、快速的 DNS 查找，无需阻止任何特定类别，还可以防止将 NXDomain（不存在的域）响应重定向到登录页。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` 和 `156.154.71.5`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` 和 `2610:a1:1019::5` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### 威胁防护

这些服务器提供针对恶意域的保护，还包括「可靠性 & 性能」功能。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` 和 `156.154.71.2`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` 和 `2610:a1:1019::2` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### 家庭版保护

这些服务器阻止访问成熟内容，还包括「可靠性 & 性能」+「威胁防护」功能。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` 和 `156.154.71.3`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` 和 `2610:a1:1019::3` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### 业务安全

这些服务器阻止不需要的和浪费时间的内容，还包括「可靠性 & 性能」+「威胁防护」+「家庭安全」功能。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS、IPv4  | `156.154.70.4` 和 `156.154.71.4`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` 和 `2610:a1:1019::4` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) 是一项通过整合内容过滤和网络钓鱼保护等功能扩展 DNS 的服务，无需停机时间。

#### 标准

具有自定义过滤功能的 DNS 服务器可保护用户的设备免受恶意软件攻击。

| 协议             | 地址                                                        |                                                                                                                                          |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` 和 `208.67.220.220`                       | [添加到AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6      | `2620:119:35::35` 和 `2620:119:53::53`                     | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`208.67.220.220`  | [添加到AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`[2620:0:ccc::2]` | [添加到AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                       | [添加到AdGuard](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### 家庭防护罩

阻止成人内容的 OpenDNS 服务器。

| 协议             | 地址                                                       |                                                                                                                                         |
| -------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` 和 `208.67.220.123`                      | [添加到AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.opendns.com` IP 地址：`208.67.220.123` | [添加到AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`         | [添加到AdGuard](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### 谷歌DNS

[Google DNS](https://developers.google.com/speed/public-dns/) 是一项免费的全球 DNS 解析服务，您可以将其作为当前 DNS 提供商的替代服务。

| 协议             | 地址                                              |                                                                                                              |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `8.8.8.8` 和 `8.8.4.4`                           | [添加到AdGuard](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6      | `2001:4860:4860::8888` 和 `2001:4860:4860::8844` | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [添加到AdGuard](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.google`                              | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) 是一种免费、快速的DNS服务，它作为递归名称服务器，为 Internet 上的任何主机提供域名解析。

#### 标准

| 协议                   | 地址                                              |                                                                                                                                                                                                      |
| -------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` 和 `1.0.0.1`                           | [添加到AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6            | `2606:4700:4700::1111` 和 `2606:4700:4700::1001` | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS-over-HTTPS IPv4  | `https://dns.cloudflare.com/dns-query`          | [添加到AdGuard](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS-over-HTTPS， IPv6 | `https://dns.cloudflare.com/dns-query`          | [添加到AdGuard](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### 仅阻止恶意软件

| 协议             | 地址                                              |                                                                                          |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` 和 `1.0.0.2`                           | [添加到AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6      | `2606:4700:4700::1112` 和 `2606:4700:4700::1002` | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |

#### 恶意软件和成人内容阻止

| 协议                  | 地址                                              |                                                                                       |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4           | `1.1.1.3` 和 `1.0.0.3`                           | [添加到AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6           | `2606:4700:4700::1113` 和 `2606:4700:4700::1003` | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS-over-HTTPS IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS-over-TLS        | `tls://family.cloudflare-dns.com`               | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) 是一个免费、递归、任意播放的 DNS 平台，提供高性能、隐私和安全保护，免受钓鱼和间谍软件的攻击。 Quad9服务器不提供审查组件。

#### 标准

提供网络钓鱼和间谍软件保护的常规DNS服务器 它们包括阻止列表、DNSSEC验证和其他安全功能。

| 协议             | 地址                                                          |                                                                                                                                           |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9`和`149.112.112.112`                                 | [添加到AdGuard](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6      | `2620:fe::fe` IP地址：`2620:fe::fe:9`                          | [添加到AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.9:8443`        | [添加到AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe]: 8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                           | [添加到AdGuard](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS-over-TLS   | `tls://dns.quad9.net`                                       | [添加到AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Unsecured

不安全的 DNS 服务器不提供安全阻止列表、DNSSEC 和 EDNS 客户端子网。

| 协议             | 地址                                                             |                                                                                                                                               |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` 和 `149.112.112.10`                                  | [添加到AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6      | `2620:fe::10` IP 地址：`2620:fe::fe:10`                           | [添加到AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.10:8443`          | [添加到AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6 | 提供者： `2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe:10]:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                            | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                        | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) 支持

EDNS 客户端子网是一种在发送到权威 DNS 服务器的请求中包含终端用户 IP 地址数据的方法。 它提供安全阻止列表、DNSSEC、EDNS 客户端子网。

| 协议             | 地址                                                          |                                                                                                                                           |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` 和 `149.112.112.11`                               | [添加到AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6      | `2620:fe::11` IP 地址：`2620:fe::fe:11`                        | [添加到AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4 | 提供者：`2.dnscrypt-cert.quad9.net` IP 地址：`9.9.9.11:8443`       | [添加到AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.quad9.net` IP 地址：`[2620:fe::fe]: 8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                         | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                     | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |

### 威瑞信公共DNS

[威瑞信公共 DNS](https://www.verisign.com/security-services/public-dns/) 是一项免费的 DNS 服务，与其他替代方案相比，提供了更好的 DNS 稳定性和安全性。 Verisign 尊重用户的隐私：它不会向第三方出售公共 DNS 数据，也不会重定向用户的查询以托管广告。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` 或 `64.6.65.6`             | [添加到AdGuard](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` 或 `2620:74:1c::2:2` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) 是由 [switch.ch](https://www.switch.ch/) 提供的瑞士公共 DNS 服务。

| 协议             | 地址                                                                         |                                                                       |
| -------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4      | 提供商：`dns.switch.ch` IP 地址：`130.59.31.248:`                                 | [添加到AdGuard](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6      | 提供商：`dns.switch.ch` IP 地址：`2001.620:`                                      | [添加到AdGuard](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                          | [添加到AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | 主机名：`tls://dns.switch.ch` IP 地址：`130.59.31.248` 和 IPv6: `2001:620:0:ff::2` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) 是 Dyn 公司提供的免费替代 DNS 服务。

| 协议        | 地址                                |                                                      |
| --------- | --------------------------------- | ---------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` 和 `216.146.36.36` | [添加到AdGuard](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) 是一个快速和免费的服务器，没有记录，具有隐私保护功能。

| 协议        | 地址                                                          |                                                                          |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4 | `84.200.69.80` 和 `84.200.70.40`                             | [添加到AdGuard](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` 和 `2001:1608:10:25::9249:d69b` | [添加到AdGuard](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) 是一个支持 OpenNIC 的隐私友好型 DNS 服务，可拦截广告、跟踪器、恶意软件，并且不记录任何数据。

| Anycast 网络     | 地址                                   |                                                                           |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.futuredns.me/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.futuredns.me`             | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-over-QUIC  | `quic://dns.futuredns.me`            | [添加到AdGuard](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| 位置        | 地址 —— IPv4                                                               |
| --------- | ------------------------------------------------------------------------ |
| 伦敦，英国     | `52.56.224.201`| [添加到 AdGuard](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| 米兰、意大利    | `15.161.11.3`| [添加到 AdGuard](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| 斯德哥尔摩， 瑞典 | `13.49.168.178`| [添加到 AdGuard](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| 阿什本，美国    | `52.0.69.145`| [添加到 AdGuard](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| 旧金山，美国    | `13.56.204.161`| [添加到 AdGuard](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| 蒙特利尔，加拿大  | `3.97.137.100`| [添加到 AdGuard](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| 新加坡       | `54.254.82.60`| [添加到 AdGuard](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| 东京，日本     | `54.199.94.55`| [添加到 AdGuard](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| 孟买，印度     | `3.7.162.217`| [添加到 AdGuard](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| 圣保罗，巴西    | `177.71.191.153`| [添加到 AdGuard](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

[SkyDNS 为内容过滤和互联网安全](https://www.skydns.ru/en/)提供解决方案。

| 协议        | 地址               |                                                       |
| --------- | ---------------- | ----------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [添加到AdGuard](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) is a fast and secure DNS service with protection against ads, tracking, and phishing.

#### 西部 DNS 服务器(主服务器)

| 协议             | 地址                                |                                                                       |
| -------------- | --------------------------------- | --------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)               |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [添加到AdGuard](sdns://BAAAAAAAAAAAAAARZG5zLmNvbXNzLm9uZTo3ODQ)          |

#### 东部DNS服务器(西伯利亚和远东)

| 协议             | 地址                                     |                                                                              |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [添加到AdGuard](sdns://BAAAAAAAAAAAAAAWZG5zLmVhc3QuY29tc3Mub25lOjc4NA)          |

### Safe DNS

[Safe DNS](https://www.safedns.com/) 是一个全球任播网络，由遍布全球的服务器组成——包括美洲，欧洲，非洲，澳大利亚和远东，以确保从全球任何地方快速可靠地解析 DNS。

| 协议        | 地址                              |                                                     |
| --------- | ------------------------------- | --------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` 和 `195.46.39.40` | [添加到AdGuard](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) 可防止个人和财务数据被盗。 将病毒、勒索软件和其他恶意软件拒之门外。

#### 私人

在「私人」模式下，仅进行 DNS 解析。

| 协议                     | 地址                                                                                                 |                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` 和 `149.112.122.10`                                                                | [添加到AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620：10A：80BB：：10` 和 `2620：10A：80BC：10`                                                           | [添加到AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                 | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS - Private | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.10` and IPv6: `2620:10A:80BB::10` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### 受保护

在「受保护」模式下，进行恶意软件和网络钓鱼的防护。

| 协议                       | 地址                                                                                                |                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` 和 `149.112.122.20`                                                               | [添加到AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` 和 `2620:10A:80BC::20`                                                         | [添加到AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                              | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Protected | 主机名：`tls://protected.canadianshield.cira.ca` IP 地址：`149.112.121.20` 和 IPv6 地址：`2620:10A:80BB::20` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### 家庭模式

在「家庭」模式下，受保护 + 拦截成人内容.

| 协议                    | 地址                                                                                             |                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` 和 `149.112.122.30`                                                            | [添加到AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` 和 `2620:10A:80BC::30`                                                      | [添加到AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                              | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Family | 主机名：`tls://protected.canadianshield.cira.ca` IP地址：`149.112.121.30` IPv6 地址：`2620:10A:80BB::30` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) 是 OpenNIC Project 提供的免费替代 DNS 服务。

| 协议        | 地址                                       |                                                           |
| --------- | ---------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` 和 `169.239.202.202`    | [添加到AdGuard](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` 和 `2a05:dfc7:5353::53` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) 是一个小型的业余爱好 DNS 项目。 无日志记录，提供以太坊名称服务，DNSSEC & 过滤的广告，跟踪器，恶意软件。

#### 芬兰 DNS 服务器

| 协议                  | 地址                                                                     |                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4  | 主机名： `tls://dot-fi.blahdns.com` IP 地址： `95.216.212.177`                | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS-over-HTTPS IPv4 | 主机名： `https://doh-fi.blahdns.com/dns-query` IP 地址： `95.216.212.177`    | [添加到AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `95.216.212.177:8443`        | [添加到AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `2a01:4f9:c010:43ce::1:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### 日本 DNS 服务器

| 协议                  | 地址                                                                                |                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4  | 主机名： `tls://dot-jp.blahdns.com` IP 地址： `139.162.112.47`                           | [添加到AdGuard](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS-over-HTTPS IPv4 | 主机名： `https://doh-jp.blahdns.com/dns-query`                                       | [添加到AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `139.162.112.47:8443`                   | [添加到AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `[2400:8902::f03c:92ff:fe27:344b]:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### 德国 DNS 服务器

| 协议                  | 地址                                                                     |                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4  | 主机名： `tls://dot-de.blahdns.com` IP 地址： `159.69.198.101`                | [添加到AdGuard](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS-over-HTTPS IPv4 | 主机名： `https://doh-de.blahdns.com/dns-query` IP 地址： `159.69.198.101`    | [添加到AdGuard](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `159.69.198.101:8443`        | [添加到AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6      | 提供商： `2.dnscrypt-cert.blahdns.com` IP 地址： `2a01:4f8:1c1c:6b4b::1:8443` | [添加到AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) 是由 Noah Seefried 运营的隐私友好型 DNS 服务。

| 协议             | 地址                                                                                                |                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP地址： `95.216.24.230` 和 IPv6： `2a01:4f9:2a:1919::9301` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `fi.dot.dns.snopyta.org` IP 地址： `95.216.24.230` 和 IPv6：`2a01:4f9:2a:1919::9301`                   | [添加到AdGuard](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) 旨在拦截成人网站。 It enables children and adults to surf the Internet safely without worrying about being tracked by malicious websites.

| 协议             | 地址                                                        |                                                                                                                                      |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`              | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                          | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4      | `94.130.180.225` 和 `78.47.64.161`                         | [添加到AdGuard](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` 和 `2a01:4f8:1c17:4df8::1`         | [添加到AdGuard](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4 | 提供商：`dnsforfamily.com` IP 地址：`94.130.180.225`             | [添加到AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6 | 提供商： `1.dnsforfamily.com` IP 地址：`[2a01:4f8:1c0c:40db::1]` | [添加到AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC 既不收集任何个人数据，也不在设备发送个人数据的页面上收集信息。

| 协议             | 地址                                        |                                                              |
| -------------- | ----------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4      | `193.17.47.1`和`185.43.135.1`              | [添加到AdGuard](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6      | `2001:148f:ffff::1` 和 `2001:148f:ffff::1` | [添加到AdGuard](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                 | [添加到AdGuard](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS-over-TLS   | `tls://odvr.nic.cz`                       | [添加到AdGuard](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) 是一个免费的递归 DNS 服务，致力于为广大互联网用户提供快速、稳定和安全的 DNS 解析。 它包括 AliGuard 设施，保护用户免受各种攻击和威胁。

| 协议             | 地址                                   |                                                                         |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` 和 `223.6.6.6`            | [添加到AdGuard](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6      | `2400:3200::1` 和 `2400:3200:baba::1` | [添加到AdGuard](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`   | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.alidns.com`               | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

基于 IPv6 的任播 DNS 服务，具有强大的安全功能，可防止间谍软件和恶意网站。 它支持 DNS64，只为 IPv6 用户提供域名解析。

| 协议             | 地址                                |                                                                       |
| -------------- | --------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` 和 `240C::6644`       | [添加到AdGuard](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) 是一种任播互联网过滤系统，保护儿童免受不当网站和虐待内容的侵害。

| 协议             | 地址                                                        |                                                                                                                                       |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` 和 `180.131.145.145`                     | [添加到AdGuard](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.nawala.id` IP 地址： `180.131.144.144` | [添加到AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** 是行业领先的递归 DNS 服务，具有高级网络安全威胁防护。

| 协议             | 地址                               |                                                                   |
| -------------- | -------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` 和 `218.30.118.6`   | [添加到AdGuard](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4      | `123.125.81.6` 和 `140.207.198.6` | [添加到AdGuard](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`   | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.360.cn`               | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) 是由 Internet Initiative Japan 运营的公共 DNS 服务。 它还会拦截虐待儿童的内容。

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) 是一家拥有多年域名解析服务开发经验的隐私友好型 DNS 提供商，旨在为用户提供更快速、准确、稳定的递归解析服务。

| 协议             | 地址                              |                                                               |
| -------------- | ------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` 和 `119.28.28.28` | [添加到AdGuard](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS-over-HTTPS | `https://doh.pub/dns-query`     | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.pub`                 | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** 是专业的可靠性高的 DNS 服务。

#### 一般

拦截广告和烦人的网站。

| 协议        | 地址                                    |                                                         |
| --------- | ------------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` 和 `114.114.115.115` | [添加到AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### 安全

拦截网络钓鱼、恶意和其他不安全的网站。

| 协议        | 地址                                    |                                                         |
| --------- | ------------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` 和 `114.114.115.119` | [添加到AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### 家庭模式

这些服务器拦截成人网站和不适当的内容。

| 协议        | 地址                                    |                                                         |
| --------- | ------------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` 和 `114.114.115.110` | [添加到AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) 是由 TWNIC (台湾网络信息中心) 提供的免费替代 DNS 服务，无日志记录。

| 协议             | 地址                                    |                                                                      |
| -------------- | ------------------------------------- | -------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` 和 `101.102.103.104` | [添加到AdGuard](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6      | `2001:de4::101` 和 `2001:de4::102`     | [添加到AdGuard](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`      | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://101.101.101.101`               | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |

### OneDNS

**OneDNS** 是一个安全、快速、免费的小众 DNS 服务，具有恶意域名拦截功能。

#### Pure Edition

| 协议        | 地址                             |                                                     |
| --------- | ------------------------------ | --------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` 和 `52.80.52.52` | [添加到AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| 协议        | 地址                             |                                                     |
| --------- | ------------------------------ | --------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` 和 `52.80.66.66` | [添加到AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) 拦截超过十四万个广告、广告跟踪、恶意软件和钓鱼域名。 无日志记录，无 ECS，DNSSEC 验证，免费！

#### 新加坡 DNS 服务器

| 协议             | 地址                                                                     | 位置                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                       | [添加到AdGuard](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                            | [添加到AdGuard](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dns.tiar.app` IP 地址： `174.138.21.128`             | [添加到AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.dns.tiar.app` IP 地址：`[2400:6180:0:d0::5f6e:4001]` | [添加到AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` （通过第三方缓存）                           | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                       | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                  | [添加到AdGuard](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                   | [添加到AdGuard](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |

#### 日本 DNS 服务器

| 协议             | 地址                                                                         |                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                            | [添加到AdGuard](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                           | [添加到AdGuard](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.jp.tiar.app` IP 地址： `172.104.93.80`                   | [添加到AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.jp.tiar.app` IP 地址：`[2400:8902::f03c:91ff:feda:c514]` | [添加到AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                          | [添加到AdGuard](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                            | [添加到AdGuard](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                        | [添加到AdGuard](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) is an open, free and public DNS service. 没有 DNS 重定向，没有日志记录。

| 协议        | 地址                                  |                                                       |
| --------- | ----------------------------------- | ----------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` 和 `172.104.49.100` | [添加到AdGuard](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` 和 `37.235.1.177`     | [添加到AdGuard](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) 是 Freenom World 提供的免费匿名 DNS 解析器。

| 协议        | 地址                            |                                                   |
| --------- | ----------------------------- | ------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` 和 `80.80.81.81` | [添加到AdGuard](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) 是一个小型的广告拦截 DNS 爱好项目。

#### OSZX 服务器

这些服务器不提供广告拦截，不保留日志，并启用 DNSSEC。

| 协议             | 地址                                                                   |                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                       | [添加到AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                            | [添加到AdGuard](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.oszx.co` IP 地址： `51.38.83.141：5353`            | [添加到AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.oszx.co` IP 地址：`[2001:41d0:801:2000::d64]:5353` | [添加到AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                      | [添加到AdGuard](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                  | [添加到AdGuard](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### PumpleX 服务器

这些服务器不提供广告拦截，不保留日志，并启用 DNSSEC。

| 协议             | 地址                                                                        |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                            | [添加到AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                | [添加到AdGuard](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.pumplex.com` IP 地址：`51.38.82.198:5353`               | [添加到AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6 | 提供商：`2.dnscrypt-cert.pumplex.com` IP 地址：`[2001:41d0:801:2000::1b28]:5353` | [添加到AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                       | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                   | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) 运营 DNS 隐私服务，以帮助保护 DNS 流量，并帮助使提供现代协议的 DNS 解析器环境多样化。

| 协议             | 地址                                      |                                                                               |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) 是 Strongarm 的一项 DNS 服务，可防止人们与恶意内容进行交互。

| 协议        | 地址                               |                                                      |
| --------- | -------------------------------- | ---------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` 和 `52.3.100.184` | [添加到AdGuard](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) 是 SafeSurfer 的一项 DNS 服务，可保护您的设备免受有害内容和成人内容的侵害。

| 协议             | 地址                                                            |                                                                                                                                               |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` 和 `104.197.28.121`                          | [添加到AdGuard](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.safesurfer.co.nz` IP 地址：`104.197.28.121` | [添加到AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) 是一个安全、私有、开源的 DNS 解析器，具有恶意软件保护、广告拦截功能，并没有日志记录。 对您的手机，平板电脑和电脑去 Degoogle 和 Ungoogle。

| 协议             | 地址                                                                         |                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 供应商：`2.dnscrypt-cert.DeCloudUs-test` IP 地址:`78.47.212.211:9443`            | [添加到AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6 | 供应商：`2.dnscrypt-cert.DeCloudUs-test` IP 地址: `[2a01:4f8:13a:250b::30]:9443` | [添加到AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                      | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                  | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) 由 Elias Ojala 运营，芬兰。

| 协议             | 地址                                       |                                                                                 |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) 是运行在 Digital Ocean droplet BLR1 区域中的服务器。 由 Abhay Rana（又名 Nemo）维护。

| 协议             | 地址                                                           |                                                                                                                                              |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.captnemo.in` IP 地址：`139.59.48.222:4434` | [添加到AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) 提供免费的 DNS 服务，无日志记录，启用 DNSSEC。

| 协议             | 地址                                |                                                                   |
| -------------- | --------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` 和 `45.11.45.11` | [添加到AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6      | `2a09::` 和 `2a11::`               | [添加到AdGuard](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://185.222.222.222`           | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) 是 [adminforge](https://adminforge.de/) 提供的冗余 DNS 解析器，带有广告拦截器，没有日志记录。

| 协议             | 地址                                                  |                                                                     |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` 和 `176.9.1.117`                      | [添加到AdGuard](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` 和 `2a01:4f8:141:316d::117` | [添加到AdGuard](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                     | [添加到AdGuard](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dnsforge.de`                                 | [添加到AdGuard](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) 服务器由 [Restena Foundation](https://www.restena.lu/) 提供。

| 协议             | 地址                                                                                   |                                                                              |
| -------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP 地址: `158.64.1.29` 和 IPv6: `2001:a18:1::29` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP 地址: `158.64.1.29` 和 IPv6: `2001:a18:1::29`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) 是 Fusl 的公共主要 OpenNIC Tier2 任播 DNS 解析器。

| 协议             | 地址                                                                 |                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | 提供商： `2.dnscrypt-cert.dnsrec.meo.ws` IP 地址： `185.121.177.177:5353` | [添加到AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dnsrec.meo.ws` IP 地址： `169.239.202.202:5353`  | [添加到AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) 由 Freifunk Mnchen 提供的免费 DNS 服务器。

| 协议                  | 地址                                                                 |                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4  | 主机名：`tls://dot.ffmuc.net`                                          | [添加到AdGuard](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS-over-HTTPS IPv4 | 主机名：`https://doh.ffmuc.net/dns-query`                              | [添加到AdGuard](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4      | 提供商：`2.dnscrypt-cert.ffmuc.net` IP 地址：`5.1.66.255:8443`            | [添加到AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6      | 供应商：`2.dnscrypt-cert.fmuc.net` IP 地址: `[2001:678:e68:f000::]:8443` | [添加到AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) 是由 Digital Society 运营的公共解析器。 服务器托管在瑞士苏黎世。

| 协议             | 地址                                                                                             |                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP 地址： `185.95.218.42` 和 IPv6：`2a05:fc84::42` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.digital-gesellschaft.ch` IP 地址: `185.95.218.43` 和 IPv6: `2a05:fc84::43`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) 是一个由 [LibreOps](https://libreops.cc/) 运行的公共加密 DNS 服务。

| 协议             | 地址                                              |                                                                          |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4      | `88.198.92.222`                                 | [添加到AdGuard](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`             | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                   | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP 地址: `116.202.176.26` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

由 ibksturm 提供的 [ibksturm DNS](https://ibksturm.synology.me/) 测试服务器。 支持 OPENNIC、DNSSEC、无过滤、无日志记录。

| 协议                  | 地址                                                                                      |                                                                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4  | 主机名：`tls://ibksturm.synology.me` IP 地址：`83.77.85.7`                                     | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS-over-HTTPS IPv4 | 主机名：`https://ibksturm.synology.me/dns-query` IP 地址：`178.82.102.190`                     | [添加到AdGuard](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4      | 提供商：`2.dnscrypt-cert.ibksturm` IP 地址：`83.77.85.7:8443`                                  | [添加到AdGuard](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6      | 供应商：`2.dnscrypt-certif.ibksturm` IP 地址：`[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [添加到AdGuard](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

促进、实施和部署 [DNS Privacy](https://dnsprivacy.org/) 的协作开放项目。

由 [Stubby 开发者](https://getdnsapi.net/)运行的 DNS 服务器。

| 协议           | 地址                                                                                                               |                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| DNS-over-TLS | 主机名：`tls://getdnsapi.net` IP 地址：`185.49.141.37` 和 IPv6：`2a04:b900:0:100::37`                                     | [添加到AdGuard](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS-over-TLS | 提供商：`Surfnet` 主机名：`tls://dnsovertls.sinodun.com` IP 地址：`145.100.185.15` IPv6 地址：`2001:610:1:40ba:145:100:185:15` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS-over-TLS | 提供商：`Surfnet` 主机名：`tls://dnsovertls1.sinodun.com` IP 地址：`145.100.185.16` 和 IPv6：`2001:610:1:40ba:145:100:185:16` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

其他具有"无日志记录"政策的 DNS 服务器。

| 协议                 | 地址                                                                                                      |                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| DNS-over-TLS       | 提供商：`UncensoredDNS` 主机名：`tls://unicast.censurfridns.dk` IP 地址：`89.233.43.71` 和 IPv6：`2a01:3a0:53:53::0` | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | 提供商：`UncensoredDNS` 主机名：`tls://anycast.censurfridns.dk` IP 地址：`91.239.100.100` 和 IPv6：`2001:67c:28a4::` | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | 提供商：`dkg` 主机名：`tls://dns.cmrg.net` IP 地址：`199.58.81.218` 和 IPv6：`2001:470:1c:76d::53`                   | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-over-TLS, IPv4 | 主机名：`tls://dns.larsdebruin.net` IP 地址：`51.15.70.167`                                                    | [添加到AdGuard](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS-over-TLS       | 主机名：`tls://dns-tls.bitwiseshift.net` IP 地址：`81.187.221.24` 和 IPv6：`2001:8b0:24:24::24`                  | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS-over-TLS       | 主机名：`tls://ns1.dnsprivacy.at` IP 地址：`94.130.110.185` 和 IPv6：`2a01:4f8:c0c:3c03::2`                      | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS       | 主机名：`tls://ns2.dnsprivacy.at` IP 地址：`94.130.110.178` 和 IPv6：`2a01:4f8:c0c:3bfc::2`                      | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS, IPv4 | 主机名：`tls://dns.bitgeek.in` IP 地址：`139.59.51.46`                                                         | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS-over-TLS       | 主机名：`tls://dns.neutopia.org` IP 地址：`89.234.186.112` 和 IPv6：`2a00:5884:8209::2`                          | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS-over-TLS       | 提供商：`Go6Lab` 主机名：`tls://privacydns.go6lab.si` IPv6：`2001:67c:27e4::35`                                  | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS-over-TLS       | 主机名：`tls://dot.securedns.eu` IP 地址：`146.185.167.43` 和 IPv6： `2a03:b0c0:0:1010::e9a:3001`                | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

具有最少日志记录/限制的 DNS 服务器。 这些服务器使用一些日志记录、自签名证书或不支持严格模式。

| 协议           | 地址                                                                                                  |                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-TLS | 提供商：`NIC Chile` 主机名 `dnsotls.lab.nic.cl` IP 地址：`200.1.123.46` 和 IPv6：`2001:1398:1:0:200:1:123:46`   | [添加到AdGuard](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS-over-TLS | 提供商：`OARC` 主机名：`tls-dns-u.odvr.dns-oarc.net` IP地址：`184.105.193.78` 和 IPv6：`2620:ff:c000:0:1::64:25` | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) 是由 Fredrik Pettersson 提供的零记录和广告拦截 DNS 服务。

#### Blitz

[可配置过滤](https://blitz-setup.ahadns.com/)全球仅限 DoH 的变体。

| 协议                                      | 地址                                |                                                                       |
| --------------------------------------- | --------------------------------- | --------------------------------------------------------------------- |
| DNS-over-HTTPS，未经审查                     | `https://blitz.ahadns.com`        | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS，OISD 过滤器                 | `https://blitz.ahadns.com/1:1`    | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD & Energized 的色情过滤器 | `https://blitz.ahadns.com/1:1.12` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### 荷兰

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [添加到AdGuard](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### India

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [添加到AdGuard](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [添加到AdGuard](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [添加到AdGuard](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [添加到AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### 纽约

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [添加到AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [添加到AdGuard](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### 波兰

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### 意大利

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |

#### 西班牙

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### 挪威

| 协议             | 地址                                    |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### 芝加哥

| 协议             | 地址                                     |                                                                              |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [添加到AdGuard](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [添加到AdGuard](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) 是 Sebastian Schmidt 提供的一项注重隐私的 DNS 服务。 无日志记录，支持 DNSSEC 验证。

#### DNS 服务器 1

| 协议             | 地址                                                     |                                                                                                                                      |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `45.76.113.31`                                         | [添加到AdGuard](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | 提供商：`2.dnscrypt-cert.dns.seby.io` IP 地址：`45.76.113.31` | [添加到AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS-over-TLS   | `tls://dot.seby.io`                                    | [添加到AdGuard](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) 位于西班牙巴塞罗那附近。 puntCAT 提供免费，安全，近距离的，尊重您的隐私的公共 DNS 服务。

| 协议        | 地址                 |                                                             |
| --------- | ------------------ | ----------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [添加到AdGuard](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [添加到AdGuard](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) 运行公共 DNS 解析器以加速请求，增加冗余。 该服务由 [Peerix](https://www.peerix.net/) 提供

#### 默认

这些服务器提供没有流量过滤的 DNS 解析。

| 协议             | 地址                                    |                                                                          |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4      | `185.235.81.1` 和 `185.235.81.2`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6      | `2a0d:4d00:81::1` 和 `2a0d:4d00:81::2` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`   | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.dnslify.com`               | [添加到AdGuard](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### 安全

安全模式可防止受感染、欺诈或机器人网站。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` 和 `185.235.81.4`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` 和 `2a0d:4d00:81::4` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### 家庭模式

家庭模式通过"安全"解析器提供保护，并拦截成人网站。

| 协议        | 地址                                    |                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` 和 `185.235.81.6`       | [添加到AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` 和 `2a0d:4d00:81::6` | [添加到AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) 除了提供免费的可配置过滤解析器和可选的日志记录外，还提供可公开访问的非过滤解析器，没有日志记录。

#### 超低延迟

| 协议             | 地址                       |                                                                         |
| -------------- | ------------------------ | ----------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| 协议             | 地址                               |                                                                                   |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) 提供以 Cloudflare Worker 身份运行的 DNS-over-HTTPS 服务，以及作为 Fly.io Worker 运行的 DNS-over-TLS 服务，并提供可配置的拦截列表。

#### 无过滤

| 协议             | 地址                              |                                                                     |
| -------------- | ------------------------------- | ------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [添加到AdGuard](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) is a customizable DNS service with proxy capabilities. This means it not only blocks things (ads, porn, etc.), but can also unblock websites and services.

#### 无过滤

| 协议             | 地址                                |                                                                                  |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` and `76.76.10.0`      | [添加到AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| IPv6           | `2606:1a40::` and `2606:1a40:1::` | [添加到AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [添加到AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [添加到AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

#### Block malware

| 协议             | 地址                                |                                                                                  |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [添加到AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [添加到AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [添加到AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### 拦截恶意软件 + 广告

| 协议             | 地址                                |                                                                                  |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [添加到AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [添加到AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [添加到AdGuard](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### 拦截恶意软件 + 广告 + 社交媒体

| 协议             | 地址                                |                                                                                  |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [添加到AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [添加到AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [添加到AdGuard](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) 提供具有 QNAME 最小化功能的可公开访问的 DNS，端点位于澳大利亚，德国，新加坡，瑞典，英国和美国（纽约和洛杉矶）。

#### 无过滤

| 协议             | 地址                                  |                                                                          |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Ad blocking

| 协议             | 地址                                          |                                                                                     |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [添加到AdGuard](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [添加到AdGuard](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### 个人小型解析器

在本节中，我们列出了小型的、主要是个人的 DNS 解析器。 它们通常只有一台或很少的服务器，并且正常运行时间比“大型”提供商更差。 我们无法正确监控它们的可用性。 **使用它们需要您自担风险！**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) 是托管在印度孟买的个人 DNS 服务。

无记录｜过滤广告、跟踪器、网络钓鱼等｜DNSSEC｜QNAME 最小化｜无 EDNS 客户端子网。

| 协议             | 地址                                                           |                                                                                                                                                     |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [添加到AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [添加到AdGuard](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout 的官方 DNS 服务器](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server)是托管在挪威特隆赫姆的个人 DNS 服务，使用 AdGuard Home 基础设施。

由于更先进的语法，它比 AdGuard DNS 拦截的广告和恶意软件更多，更容易识别追踪器，并拦截 alt-right 小报和大多数图像板。 日志记录用于改进其使用的过滤器列表（例如，通过取消拦截不应拦截的站点），并确定服务器系统更新的最小不良时间。

| 协议             | 地址                                                    |                                                                                                  |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [添加到AdGuard](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [添加到AdGuard](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [添加到AdGuard](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4      | Varies; see link above.                               |                                                                                                  |
| DNS, IPv6      | Varies; see link above.                               |                                                                                                  |
| DNSCrypt, IPv4 | Varies; see link above.                               |                                                                                                  |
