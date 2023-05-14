---
title: Bilinen DNS Sağlayıcıları
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html), reklam engelleme, gizlilik koruması ve ebeveyn denetimi için alternatif bir çözümdür. It provides the necessary number of protection features against online ads, trackers, and phishing, no matter what platform and device you use.

#### Default

These servers block ads, tracking, and phishing.

| Protokol       | Adres                                                                          |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` ve `94.140.15.15`                                               | [AdGuard'a ekle](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::ad1:ff` ve `2a10:50c0::ad2:ff`                                     | [AdGuard'a ekle](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                        | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                    | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                   | [AdGuard'a ekle](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |

#### Family Protection

These servers provide the Default features + Blocking adult websites + Safe search.

| Protokol       | Adres                                                                          |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` ve `94.140.15.16`                                               | [AdGuard'a ekle](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::bad1:ff` ve `2a10:50c0::bad2:ff`                                   | [AdGuard'a ekle](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                     | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                 | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                | [AdGuard'a ekle](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Non-filtering

Each of these servers provides a secure and reliable connection, but unlike the "Standard" and "Family Protection" servers, they don't filter anything.

| Protokol       | Adres                                                                           |                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` ve `94.140.14.141`                                              | [AdGuard'a ekle](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6      | `2a10:50c0::1:ff` ve `2a10:50c0::2:ff`                                          | [AdGuard'a ekle](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                  | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                              | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                             | [AdGuard'a ekle](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [AdGuard'a ekle](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/), ücretsiz bir özyinelemeli DNS hizmetidir. Yandex.DNS' servers are located in Russia, CIS countries, and Western Europe. Users' requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In "Basic" mode, there is no traffic filtering.

| Protokol       | Adres                                                                  |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` ve `77.88.8.1`                                             | [AdGuard'a ekle](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` ve `2a02:6b8:0:1::feed:0ff`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [AdGuard'a ekle](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |

#### Safe

In "Safe" mode, protection from infected and fraudulent sites is provided.

| Protokol  | Adres                                            |                                                                   |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` ve `77.88.8.2`                      | [AdGuard'a ekle](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` ve `2a02:6b8:0:1::feed:bad` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |

#### Family

In "Family" mode, protection from infected, fraudulent and adult sites is provided.

| Protokol  | Adres                                            |                                                                   |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` ve `77.88.8.7`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` ve `2a02:6b8:0:1::feed:a11` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/), özelleştirilebilir filtreleme sağlayan bir DNS hizmetidir. This service offers a safe way to browse the web without inappropriate content.

#### Family Filter

Blocks access to all adult, pornographic and explicit sites, including proxy & VPN domains and mixed content sites.

| Protokol       | Adres                                                     |                                                                                                                                       |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` ve `185.228.169.168`                    | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` ve `2a0d:2a00:2::`                        | [AdGuard'a ekle](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`        | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`               | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Adult Filter

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains.

| Protokol       | Adres                                                      |                                                                                                                                         |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` ve `185.228.169.11`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6      | `2a0d:2a00:1::1` ve `2a0d:2a00:2::1`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`          | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                 | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |

#### Security Filter

Blocks phishing, spam and malicious domains.

| Protokol       | Adres                                                |                                                                                                     |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` ve `185.228.169.9`                   | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6      | `2a0d:2a00:1::2` ve `2a0d:2a00:2::2`                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) is a domain name resolution service that resolves your DNS requests through worldwide network of DNS servers. Removes excessive ads and protects from phishing and spyware.

| Protokol       | Adres                                                                  |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` ve `8.20.247.20`                                          | [AdGuard'a ekle](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [AdGuard'a ekle](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` ve `156.154.71.1`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` ve `2610:a1:1019::1` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Reliability & Performance 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (non-existent domain) responses to landing pages.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` ve `156.154.71.5`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` ve `2610:a1:1019::5` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` ve `156.154.71.2`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` ve `2610:a1:1019::2` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Family Secure

These servers provide adult content blocking and also include "Reliability & Performance" + "Threat Protection" features.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` ve `156.154.71.3`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` ve `2610:a1:1019::3` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` ve `156.154.71.4`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` ve `2610:a1:1019::4` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/), içerik filtreleme ve kimlik avı koruması gibi özellikleri sıfır kesinti süresiyle birleştirerek DNS'i genişleten bir hizmettir.

#### Standard

DNS servers with custom filtering that protects your device from malware.

| Protokol       | Adres                                                          |                                                                                                                                              |
| -------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` ve `208.67.220.220`                           | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6      | `2620:119:35::35` ve `2620:119:53::53`                         | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [AdGuard'a ekle](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                            | [AdGuard'a ekle](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### FamilyShield

OpenDNS servers that provide adult content blocking.

| Protokol       | Adres                                                         |                                                                                                                                             |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` ve `208.67.220.123`                          | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [AdGuard'a ekle](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/), mevcut DNS sağlayıcınıza alternatif olarak kullanabileceğiniz ücretsiz, küresel bir DNS sağlayıcı hizmetidir.

| Protokol       | Adres                                            |                                                                                                                  |
| -------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` ve `8.8.4.4`                           | [AdGuard'a ekle](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6      | `2001:4860:4860::8888` ve `2001:4860:4860::8844` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [AdGuard'a ekle](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.google`                               | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/), internetteki herhangi bir ana makine için alan adı çözümlemesi sağlayan özyinelemeli bir ad sunucusu olarak işlev gören ücretsiz ve hızlı bir DNS hizmetidir.

#### Standard

| Protokol             | Adres                                            |                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` ve `1.0.0.1`                           | [AdGuard'a ekle](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6            | `2606:4700:4700::1111` ve `2606:4700:4700::1001` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`         | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Malware blocking only

| Protokol       | Adres                                            |                                                                                              |
| -------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` ve `1.0.0.2`                           | [AdGuard'a ekle](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6      | `2606:4700:4700::1112` ve `2606:4700:4700::1002` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |

#### Malware and adult content blocking

| Protokol             | Adres                                            |                                                                                           |
| -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` ve `1.0.0.3`                           | [AdGuard'a ekle](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6            | `2606:4700:4700::1113` ve `2606:4700:4700::1003` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) is a free, recursive, anycast DNS platform that provides high-performance, privacy, and security protection from phishing and spyware. Quad9 servers don't provide a censoring component.

#### Standard

Regular DNS servers which provide protection from phishing and spyware. They include blocklists, DNSSEC validation, and other security features.

| Protokol       | Adres                                                           |                                                                                                                                               |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` ve `149.112.112.112`                                  | [AdGuard'a ekle](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                               | [AdGuard'a ekle](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [AdGuard'a ekle](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                               | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS-over-TLS   | `tls://dns.quad9.net`                                           | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Unsecured

Unsecured DNS servers don't provide security blocklists, DNSSEC, or EDNS Client Subnet.

| Protokol       | Adres                                                              |                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` ve `149.112.112.10`                                     | [AdGuard'a ekle](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                            | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) desteği

EDNS Client Subnet is a method that includes components of end-user IP address data in requests that are sent to authoritative DNS servers. It provides security blocklist, DNSSEC, EDNS Client Subnet.

| Protokol       | Adres                                                           |                                                                                                                                               |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` ve `149.112.112.11`                                  | [AdGuard'a ekle](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [AdGuard'a ekle](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/), diğer alternatiflere kıyasla gelişmiş DNS kararlılığı ve güvenliği sunan ücretsiz bir DNS hizmetidir. Verisign respects users' privacy: they neither sell public DNS data to third parties nor redirect users' queries to serve them ads.

| Protokol  | Adres                                    |                                                               |
| --------- | ---------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` veya `64.6.65.6`             | [AdGuard'a ekle](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` veya `2620:74:1c::2:2` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/), [switch.ch](https://www.switch.ch/) tarafından sağlanan bir İsviçre genel DNS hizmetidir.

| Protokol       | Adres                                                                                 |                                                                           |
| -------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4      | Sağlayıcı: `dns.switch.ch` IP: `130.59.31.248`                                        | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6      | Sağlayıcı: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                   | [AdGuard'a ekle](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                     | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | Ana makine adı: `tls://dns.switch.ch` IP: `130.59.31.248` ve IPv6: `2001:620:0:ff::2` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/), Dyn tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                              |                                                          |
| --------- | ---------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` ve `216.146.36.36` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/), gizlilik koruma özelliği ile günlük kaydı tutmayan hızlı ve ücretsiz bir sunucudur.

| Protokol  | Adres                                                        |                                                                              |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` ve `84.200.70.40`                             | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` ve `2001:1608:10:25::9249:d69b` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/), reklamları, izleyicileri, kötü amaçlı yazılımları engelleyen ve herhangi bir veriyi günlüğe kaydetmeyen OpenNIC desteğine sahip gizlilik dostu bir DNS hizmetidir.

| Anycast Network | Adres                                |                                                                               |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS  | `https://dns.futuredns.me/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS    | `tls://dns.futuredns.me`             | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-over-QUIC   | `quic://dns.futuredns.me`            | [AdGuard'a ekle](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Konum                    | Adres - IPv4                                                                |
| ------------------------ | --------------------------------------------------------------------------- |
| Londra, Birleşik Krallık | `52.56.224.201`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Milan, İtalya            | `15.161.11.3`| [AdGuard'a ekle](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Stockholm, İsveç         | `13.49.168.178`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Ashburn, ABD             | `52.0.69.145`| [AdGuard'a ekle](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| San Francisco, ABD       | `13.56.204.161`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Montreal, Kanada         | `3.97.137.100`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Singapur                 | `54.254.82.60`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Tokyo, Japonya           | `54.199.94.55`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Mumbai, Hindistan        | `3.7.162.217`| [AdGuard'a ekle](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| São Paulo, Brezilya      | `177.71.191.153`| [AdGuard'a ekle](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/), içerik filtreleme ve internet güvenliği çözümleri sağlar.

| Protokol  | Adres            |                                                           |
| --------- | ---------------- | --------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315), reklamlara, izlemeye ve kimlik avına karşı korumalı, hızlı ve güvenli bir DNS hizmetidir.

#### West DNS Server (Main)

| Protokol       | Adres                             |                                                                           |
| -------------- | --------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)               |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [AdGuard'a ekle](sdns://BAAAAAAAAAAAAAARZG5zLmNvbXNzLm9uZTo3ODQ)          |

#### East DNS Server (Siberia and Far East)

| Protokol       | Adres                                  |                                                                                  |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [AdGuard'a ekle](sdns://BAAAAAAAAAAAAAAWZG5zLmVhc3QuY29tc3Mub25lOjc4NA)          |

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Protokol  | Adres                            |                                                         |
| --------- | -------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` ve `195.46.39.40` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works), kişisel ve finansal verilerin çalınmasına karşı koruma sağlar. Virüsleri, fidye yazılımlarını ve diğer kötü amaçlı yazılımları evinizden uzak tutun.

#### Private

In "Private" mode, DNS resolution only.

| Protokol               | Adres                                                                                                   |                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DNS, IPv4              | `149.112.121.10` ve `149.112.122.10`                                                                    | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620:10A:80BB::10` ve `2620:10A:80BC::10`                                                              | [AdGuard'a ekle](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                      | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS - Private | Ana makine adı: `tls://family.canadianshield.cira.ca` IP: `149.112.121.10` ve IPv6: `2620:10A:80BB::10` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Protected

In "Protected" mode, malware and phishing protection.

| Protokol                 | Adres                                                                                                      |                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` ve `149.112.122.20`                                                                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` ve `2620:10A:80BC::20`                                                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Protected | Ana makine adı: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` ve IPv6: `2620:10A:80BB::20` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Family

In "Family" mode, Protected + blocking adult content.

| Protokol              | Adres                                                                                                      |                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` ve `149.112.122.30`                                                                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` ve `2620:10A:80BC::30`                                                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                          | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Family | Ana makine adı: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30` ve IPv6: `2620:10A:80BB::30` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/), OpenNIC Project tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                                     |                                                               |
| --------- | ----------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` ve `169.239.202.202`    | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` ve `2a05:dfc7:5353::53` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) A small hobby DNS project. No logs, Ethereum Name Service, DNSSEC ready & Filtered ads, trackers, malwares.

#### Finland DNS Server

| Protokol             | Adres                                                                       |                                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177`                  | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`          | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Japan DNS Server

| Protokol             | Adres                                                                                |                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                      | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-jp.blahdns.com/dns-query`                               | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Germany DNS Server

| Protokol             | Adres                                                                       |                                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot-de.blahdns.com` IP: `159.69.198.101`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [AdGuard'a ekle](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`          | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/), Noah Seefried tarafından yönetilen gizlilik dostu bir DNS hizmetidir.

| Protokol       | Adres                                                                                            |                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` ve IPv6: `2a01:4f9:2a:1919::9301` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` ve IPv6: `2a01:4f9:2a:1919::9301`             | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/), yetişkinlere yönelik siteleri engellemeyi amaçlar. Çocukların ve yetişkinlerin kötü amaçlı siteler tarafından izlenme endişesi duymadan internette güvenle gezinmesini sağlar.

| Protokol       | Adres                                                       |                                                                                                                                          |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                            | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4      | `94.130.180.225` ve `78.47.64.161`                          | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` ve `2a01:4f8:1c17:4df8::1`          | [AdGuard'a ekle](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4 | Sağlayıcı: `dnsforfamily.com` IP: `94.130.180.225`          | [AdGuard'a ekle](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6 | Sağlayıcı: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| Protokol       | Adres                                      |                                                                  |
| -------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` ve `185.43.135.1`            | [AdGuard'a ekle](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6      | `2001:148f:ffff::1` ve `2001:148f:fffe::1` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) is a free recursive DNS service that committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It includes AliGuard facility to protect users from various attacks and threats.

| Protokol       | Adres                                 |                                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` ve `223.6.6.6`            | [AdGuard'a ekle](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6      | `2400:3200::1` ve `2400:3200:baba::1` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It supports DNS64 to provide domain name resolution only for IPv6 users.

| Protokol       | Adres                             |                                                                           |
| -------------- | --------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` ve `240C::6644`      | [AdGuard'a ekle](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| Protokol       | Adres                                                        |                                                                                                                                           |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` ve `180.131.145.145`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** is a industry-leading recursive DNS service with advanced network security threat protection.

| Protokol       | Adres                             |                                                                       |
| -------------- | --------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` ve `218.30.118.6`   | [AdGuard'a ekle](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4      | `123.125.81.6` ve `140.207.198.6` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/), Internet Initiative Japan tarafından yürütülen genel bir DNS hizmetidir. It also blocks child abuse content.

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) is a privacy-friendly DNS provider with years of experience in domain name resolution services development, it aims to provide users more rapid, accurate and stable recursive resolution service.

| Protokol       | Adres                            |                                                                   |
| -------------- | -------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` ve `119.28.28.28` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS-over-HTTPS | `https://doh.pub/dns-query`      | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`      | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.pub`                  | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** is a professional and high-reliability DNS service.

#### Normal

Block ads and annoying websites.

| Protokol  | Adres                                  |                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` ve `114.114.115.115` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Safe

Blocks phishing, malicious and other unsafe websites.

| Protokol  | Adres                                  |                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` ve `114.114.115.119` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Family

These servers block adult websites and inappropriate contents.

| Protokol  | Adres                                  |                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` ve `114.114.115.110` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101), TWNIC (Taiwan Network Information Center) tarafından günlük tutmayan ücretsiz bir alternatif DNS hizmetidir.

| Protokol       | Adres                                  |                                                                          |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4      | `101.101.101.101` ve `101.102.103.104` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6      | `2001:de4::101` ve `2001:de4::102`     | [AdGuard'a ekle](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |

### OneDNS

**OneDNS** is a secure, fast, free niche DNS service with malicious domains blocking facility.

#### Pure Edition

| Protokol  | Adres                           |                                                         |
| --------- | ------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` ve `52.80.52.52` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| Protokol  | Adres                           |                                                         |
| --------- | ------------------------------- | ------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` ve `52.80.66.66` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blocks over 140K ads, ad-tracking, malware and phishing domains. No logging, no ECS, DNSSEC validation, free!

#### Singapore DNS Server

| Protokol       | Adres                                                                           | Konum                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                     | [AdGuard'a ekle](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`                  | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`     | [AdGuard'a ekle](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (üçüncü taraf aracılığıyla önbelleğe alınır) | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                           | [AdGuard'a ekle](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                            | [AdGuard'a ekle](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |

#### Japan DNS Server

| Protokol       | Adres                                                                           |                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                | [AdGuard'a ekle](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [AdGuard'a ekle](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                               | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                 | [AdGuard'a ekle](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) is an open, free and public DNS service. No DNS redirects, no logging.

| Protokol  | Adres                                |                                                           |
| --------- | ------------------------------------ | --------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` ve `172.104.49.100` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` ve `37.235.1.177`     | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html), Freenom World tarafından sunulan ücretsiz bir anonim DNS çözümleyicisidir.

| Protokol  | Adres                          |                                                       |
| --------- | ------------------------------ | ----------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` ve `80.80.81.81` | [AdGuard'a ekle](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/), küçük bir Reklam Engelleme DNS hobi projesidir.

#### OSZX server

These servers provide no ad blocking, keep no logs, and have DNSSEC enabled.

| Protokol       | Adres                                                                     |                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                            | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                           | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                       | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### PumpleX server

These servers provide no ad blocking, keep no logs, and have DNSSEC enabled.

| Protokol       | Adres                                                                          |                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                 | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                     | [AdGuard'a ekle](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [AdGuard'a ekle](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                            | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                        | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operates DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern protocols.

| Protokol       | Adres                                   |                                                                                   |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io), Strongarm tarafından sunulan ve insanların kötü amaçlı içerikle etkileşime girmesini engelleyen bir DNS hizmetidir.

| Protokol  | Adres                             |                                                          |
| --------- | --------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` ve `52.3.100.184` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/), SafeSurfer tarafından sunulan, cihazınızı zararlı ve yetişkinlere yönelik içeriklerden koruyan bir DNS hizmetidir.

| Protokol       | Adres                                                              |                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` ve `104.197.28.121`                              | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A secure, private, open-source DNS resolver with malware protection, ad blocking and without logs. Degoogle and Ungoogle your phone, tablet, and computer.

| Protokol       | Adres                                                                          |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) is run by Elias Ojala, Finland.

| Protokol       | Adres                                    |                                                                                     |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running off of a Digital Ocean droplet in BLR1 region. Abhay Rana aka Nemo tarafından sürdürülmektedir.

| Protokol       | Adres                                                             |                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [AdGuard'a ekle](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) provide free DNS service with no logging, DNSSEC enabled.

| Protokol       | Adres                              |                                                                       |
| -------------- | ---------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` ve `45.11.45.11` | [AdGuard'a ekle](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6      | `2a09::` and `2a11::`              | [AdGuard'a ekle](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://185.222.222.222`            | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/), [adminforge](https://adminforge.de/) tarafından sağlanan bir reklam engelleyici ve günlük tutmama özelliğine sahip yedek bir DNS çözümleyicisidir.

| Protokol       | Adres                                                |                                                                         |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` ve `176.9.1.117`                      | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` ve `2a01:4f8:141:316d::117` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

[Restena Foundation](https://www.restena.lu/) tarafından sağlanan [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) sunucuları.

| Protokol       | Adres                                                                              |                                                                                  |
| -------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver.

| Protokol       | Adres                                                                 |                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/), Freifunk München tarafından sağlanan ücretsiz DNS sunucularıdır.

| Protokol             | Adres                                                                   |                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot.ffmuc.net`                                   | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh.ffmuc.net/dns-query`                       | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [AdGuard'a ekle](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland.

| Protokol       | Adres                                                                                         |                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` ve IPv6: `2a05:fc84::42` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` ve IPv6: `2a05:fc84::43`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| Protokol       | Adres                                        |                                                                              |
| -------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/), ibksturm tarafından sağlanan test sunucuları. OPENNIC, DNSSEC, no filtering, no logging.

| Protokol             | Adres                                                                                      |                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://ibksturm.synology.me` IP: `83.77.85.7`                              | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190`              | [AdGuard'a ekle](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443`                                | [AdGuard'a ekle](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [AdGuard'a ekle](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

A collaborative open project to promote, implement and deploy [DNS Privacy](https://dnsprivacy.org/).

DNS servers run by the [Stubby developers](https://getdnsapi.net/).

| Protokol     | Adres                                                                                                                               |                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| DNS-over-TLS | Ana makine adı: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` ve IPv6: `2001:610:1:40ba:145:100:185:15`  | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` ve IPv6: `2001:610:1:40ba:145:100:185:16` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Other DNS servers with 'no logging' policy.

| Protokol           | Adres                                                                                                                      |                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` ve IPv6: `2a01:3a0:53:53::0` | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` ve IPv6: `2001:67c:28a4::` | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Sağlayıcı: `dkg` Ana makine adı: `tls://dns.cmrg.net` IP: `199.58.81.218` ve IPv6: `2001:470:1c:76d::53`                   | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS-over-TLS       | Ana makine adı: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` ve IPv6: `2001:8b0:24:24::24`                         | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS-over-TLS       | Ana makine adı: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` ve IPv6: `2a01:4f8:c0c:3c03::2`                             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS       | Ana makine adı: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` ve IPv6: `2a01:4f8:c0c:3bfc::2`                             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS-over-TLS       | Ana makine adı: `tls://dns.neutopia.org` IP: `89.234.186.112` ve IPv6: `2a00:5884:8209::2`                                 | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS-over-TLS       | Sağlayıcı: `Go6Lab` Ana makine adı: `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                 | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS-over-TLS       | Ana makine adı: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS servers with minimal logging/restrictions. These servers use some logging, self-signed certs or no support for strict mode.

| Protokol     | Adres                                                                                                                   |                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-TLS | Sağlayıcı: `NIC Chile` Ana makine adı: `dnsotls.lab.nic.cl` IP: `200.1.123.46` ve IPv6: `2001:1398:1:0:200:1:123:46`    | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS-over-TLS | Sağlayıcı: `OARC` Ana makine adı: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` ve IPv6: `2620:ff:c000:0:1::64:25` | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/), Fredrik Pettersson tarafından sağlanan sıfır günlük tutma ve reklam engelleme DNS hizmetidir.

#### Blitz

[Configurable filtering](https://blitz-setup.ahadns.com/) worldwide DoH-only variant.

| Protokol                                     | Adres                             |                                                                           |
| -------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-HTTPS, uncensored                   | `https://blitz.ahadns.com`        | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS, OISD filter                  | `https://blitz.ahadns.com/1:1`    | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Hollanda

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### Hindistan

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [AdGuard'a ekle](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [AdGuard'a ekle](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### New York

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [AdGuard'a ekle](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [AdGuard'a ekle](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Polonya

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### İtalya

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |

#### İspanya

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Norveç

| Protokol       | Adres                                 |                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Şikago

| Protokol       | Adres                                  |                                                                                  |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/), Sebastian Schmidt tarafından sağlanan gizlilik odaklı bir DNS hizmetidir. Günlük Tutmama, DNSSEC doğrulaması.

#### DNS Server 1

| Protokol       | Adres                                                       |                                                                                                                                          |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                              | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [AdGuard'a ekle](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS-over-TLS   | `tls://dot.seby.io`                                         | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) is physically located near Barcelona, Spain. puntCAT offers a public DNS service, free, secure, close and that respects your privacy.

| Protokol  | Adres              |                                                                 |
| --------- | ------------------ | --------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [AdGuard'a ekle](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/), istekleri hızlandırmak, fazlalığı artırmak için genel DNS çözümleyicileri çalıştırır. The service is provided by [Peerix](https://www.peerix.net/)

#### Default

Bu sunucular trafik filtrelemesi olmadan DNS çözümlemesi sağlar.

| Protokol       | Adres                                  |                                                                              |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` ve `185.235.81.2`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6      | `2a0d:4d00:81::1` ve `2a0d:4d00:81::2` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`    | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Safe

Safe mode guard against infected, fraudulent or bot sites.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` ve `185.235.81.4`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` ve `2a0d:4d00:81::4` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Family

Family mode offers protection by "Safe" resolvers and blocks adult sites.

| Protokol  | Adres                                  |                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` ve `185.235.81.6`       | [AdGuard'a ekle](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` ve `2a0d:4d00:81::6` | [AdGuard'a ekle](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) provides publicly accessible non-filtering resolvers with no logging in addition to its freemium configurable filtering resolvers with optional logging.

#### Ultra-low latency

| Protokol       | Adres                    |                                                                             |
| -------------- | ------------------------ | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Protokol       | Adres                            |                                                                                       |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker and DNS-over-TLS service running as Fly.io Worker with configurable blocklists.

#### Non-filtering

| Protokol       | Adres                           |                                                                         |
| -------------- | ------------------------------- | ----------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) is a customizable DNS service with proxy capabilities. This means it not only blocks things (ads, porn, etc.), but can also unblock websites and services.

#### Non-filtering

| Protokol       | Adres                             |                                                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.0` ve `76.76.10.0`       | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| IPv6           | `2606:1a40::` ve `2606:1a40:1::`  | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [AdGuard'a ekle](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

#### Block malware

| Protokol       | Adres                             |                                                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.1`                       | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [AdGuard'a ekle](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Block malware + ads

| Protokol       | Adres                             |                                                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.2`                       | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [AdGuard'a ekle](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Block malware + ads + social

| Protokol       | Adres                             |                                                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| DNS, IPv4      | `76.76.2.3`                       | [AdGuard'a ekle](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [AdGuard'a ekle](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) provides publicly accessible DNS with QNAME minimization, endpoints located in Australia, Germany, Singapore, Sweden, United Kingdom and United States (New York and Los Angeles).

#### Non-filtering

| Protokol       | Adres                               |                                                                              |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Ad blocking

| Protokol       | Adres                                       |                                                                                         |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Small personal resolvers

In this section we list small, mostly personal DNS resolvers. They often have only one or very few servers and worse uptime than 'big' providers. We won't be able to proper monitor their availability. **Use them at your own risk!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) is a personal DNS service hosted in Mumbai, India.

Non-logging | Filters ads, trackers, phishing,etc | DNSSEC | QNAME Minimization | No EDNS Client Subnet.

| Protokol       | Adres                                                              |                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Ana makine: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS-over-HTTPS | Ana makine: `https://dns.arapurayil.com/dns-query`                 | [AdGuard'a ekle](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) is a personal DNS service hosted in Trondheim, Norway, using an AdGuard Home infrastructure.

Blocks more ads and malware than AdGuard DNS thanks to more advanced syntax, but goes easier on trackers, and blocks alt-right tabloids and most imageboards. Logging is used to improve its used filterlists (e.g. by unblocking sites that shouldn't have been blocked), and to determine the least bad times for server system updates.

| Protokol       | Adres                                                 |                                                                                                      |
| -------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [AdGuard'a ekle](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [AdGuard'a ekle](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [AdGuard'a ekle](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4      | Varies; see link above.                               |                                                                                                      |
| DNS, IPv6      | Varies; see link above.                               |                                                                                                      |
| DNSCrypt, IPv4 | Varies; see link above.                               |                                                                                                      |
