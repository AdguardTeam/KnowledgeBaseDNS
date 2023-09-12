---
title: Bilinen DNS Sağlayıcıları
sidebar_position: 3
---

:::info

Burada güvenilir DNS sağlayıcılarının bir listesini tavsiye ediyoruz. Bunları kullanmak için önce cihazınıza AdGuard Reklam Engelleyici veya AdGuard VPN yükleyin. Ardından, aynı cihazda, bu makaledeki bir sağlayıcıya giden bağlantıya tıklayın

Hızlı bağlantılar: [AdGuard Reklam Engelleyici indir](https://agrd.io/download-kb-adblock), [AdGuard VPN indir](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html), reklam engelleme, gizlilik koruması ve ebeveyn denetimi için alternatif bir çözümdür. Hangi platformu ve cihazı kullanırsanız kullanın, çevrimiçi reklamlara, izleyicilere ve kimlik avına karşı gerekli sayıda koruma özelliği sağlar.

#### Default

Bu sunucular reklamları, izlemeyi ve kimlik avını engeller.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` ve `94.140.15.15`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` ve `2a10:50c0::ad2:ff`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                        | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                    | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                   | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                    |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                           |

#### Family Protection

These servers provide the Default features + Blocking adult websites + Safe search.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` ve `94.140.15.16`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` ve `2a10:50c0::bad2:ff`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                 |

#### Non-filtering

Each of these servers provides a secure and reliable connection, but unlike the "Standard" and "Family Protection" servers, they don't filter anything.

| Protokol       | Adres                                                                           |                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` ve `94.140.14.141`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` ve `2a10:50c0::2:ff`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                             | [AdGuard'a ekle](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [AdGuard'a ekle](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                       |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                          |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/), ücretsiz bir özyinelemeli DNS hizmetidir. Yandex.DNS'in sunucuları Rusya, BDT ülkeleri ve Batı Avrupa'da bulunmaktadır. Kullanıcıların talepleri, yüksek bağlantı hızları sağlayan en yakın veri merkezi tarafından işlenir.

#### Basic

In "Basic" mode, there is no traffic filtering.

| Protokol       | Adres                                                                  |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` ve `77.88.8.1`                                             | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.8&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` ve `2a02:6b8:0:1::feed:0ff`                       | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [AdGuard'a ekle](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)     |

#### Safe

In "Safe" mode, protection from infected and fraudulent sites is provided.

| Protokol  | Adres                                            |                                                                                                                                                             |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` ve `77.88.8.2`                      | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.88&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.88&name=)                 |
| DNS, IPv6 | `2a02:6b8::feed:bad` ve `2a02:6b8:0:1::feed:bad` | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Family

In "Family" mode, protection from infected, fraudulent and adult sites is provided.

| Protokol  | Adres                                            |                                                                                                                                                             |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` ve `77.88.8.7`                       | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.3&name=)                   |
| DNS, IPv6 | `2a02:6b8::feed:a11` ve `2a02:6b8:0:1::feed:a11` | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/), özelleştirilebilir filtreleme sağlayan bir DNS hizmetidir. Bu hizmet, uygunsuz içerik olmadan web'de gezinmek için güvenli bir yol sunar.

#### Family Filter

Blocks access to all adult, pornographic and explicit sites, including proxy & VPN domains and mixed content sites.

| Protokol       | Adres                                                     |                                                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` ve `185.228.169.168`                    | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.168&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` ve `2a0d:2a00:2::`                        | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                           |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`        | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`               | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Adult Filter

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains.

| Protokol       | Adres                                                      |                                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` ve `185.228.169.11`                       | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` ve `2a0d:2a00:2::1`                       | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                        |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`          | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Security Filter

Blocks phishing, spam and malicious domains.

| Protokol       | Adres                                                |                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` ve `185.228.169.9`                   | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.9&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` ve `2a0d:2a00:2::2`                 | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/), DNS isteklerinizi dünya çapındaki DNS sunucuları ağı üzerinden çözümleyen bir alan adı çözümleme hizmetidir. Fazla reklamları kaldırır, kimlik avı ve casus yazılımlardan korur.

| Protokol       | Adres                                                                  |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` ve `8.20.247.20`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=8.26.56.26&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=8.26.56.26&name=)             |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [AdGuard'a ekle](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns), yerleşik güvenlik ve tehdit istihbaratı ile sitelere ve çevrimiçi uygulamalara hızlı ve güvenilir erişim sağlayan ücretsiz bir bulut tabanlı özyinelemeli DNS hizmetidir.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` ve `156.154.71.1`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` ve `2610:a1:1019::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Reliability & Performance 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (non-existent domain) responses to landing pages.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` ve `156.154.71.5`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` ve `2610:a1:1019::5` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` ve `156.154.71.2`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` ve `2610:a1:1019::2` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Family Secure

These servers provide adult content blocking and also include "Reliability & Performance" + "Threat Protection" features.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` ve `156.154.71.3`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` ve `2610:a1:1019::3` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` and  `156.154.71.4`     | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.4&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` ve `2610:a1:1019::4` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::4&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/), içerik filtreleme ve kimlik avı koruması gibi özellikleri sıfır kesinti süresiyle birleştirerek DNS'i genişleten bir hizmettir.

#### Standard

Cihazınızı kötü amaçlı yazılımlardan koruyan özel filtrelemeye sahip DNS sunucuları.

| Protokol       | Adres                                                          |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` ve `208.67.220.220`                           | [AdGuard'a ekle](adguard:add_dns_server?address=208.67.222.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` ve `2620:119:53::53`                         | [AdGuard'a ekle](adguard:add_dns_server?address=2620:119:35::35&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                             |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [AdGuard'a ekle](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                            |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                            | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

Yetişkinlere uygun içerik engelleme sağlayan OpenDNS sunucuları.

| Protokol       | Adres                                                         |                                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` ve `208.67.220.123`                          | [AdGuard'a ekle](adguard:add_dns_server?address=208.67.222.123&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                 |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/), mevcut DNS sağlayıcınıza alternatif olarak kullanabileceğiniz ücretsiz, küresel bir DNS sağlayıcı hizmetidir.

| Protokol       | Adres                                            |                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` ve `8.8.4.4`                           | [AdGuard'a ekle](adguard:add_dns_server?address=8.8.8.8&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` ve `2001:4860:4860::8844` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                               | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/), internetteki herhangi bir ana makine için alan adı çözümlemesi sağlayan özyinelemeli bir ad sunucusu olarak işlev gören ücretsiz ve hızlı bir DNS hizmetidir.

#### Standard

| Protokol             | Adres                                            |                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` ve `1.0.0.1`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` ve `2606:4700:4700::1001` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Malware blocking only

| Protokol       | Adres                                            |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` ve `1.0.0.2`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` ve `2606:4700:4700::1002` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [AdGuard'a ekle](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Malware and adult content blocking

| Protokol             | Adres                                            |                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` ve `1.0.0.3`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` ve `2606:4700:4700::1003` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/), kimlik avı ve casus yazılımlara karşı yüksek performans, gizlilik ve güvenlik koruması sağlayan ücretsiz, özyinelemeli, anycast bir DNS platformudur. Quad9 sunucuları bir sansürleme bileşeni sağlamaz.

#### Standard

Kimlik avı ve casus yazılımlara karşı koruma sağlayan düzenli DNS sunucuları. Bunlar blok listeleri, DNSSEC doğrulaması ve diğer güvenlik özelliklerini içerir.

| Protokol       | Adres                                                           |                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` ve `149.112.112.112`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.9&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                               | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::fe&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [AdGuard'a ekle](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                   |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Unsecured

Güvenli olmayan DNS sunucuları güvenlik blok listeleri, DNSSEC veya EDNS İstemci Alt Ağı sağlamaz.

| Protokol       | Adres                                                              |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` ve `149.112.112.10`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                 |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) desteği

EDNS İstemci Alt Ağı, yetkili DNS sunucularına gönderilen isteklerde son kullanıcı IP adresi verilerinin bileşenlerini içeren bir yöntemdir. Güvenlik engelleme listesi, DNSSEC, EDNS İstemci Alt Ağı sağlar.

| Protokol       | Adres                                                           |                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` ve `149.112.112.11`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                 |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/), diğer alternatiflere kıyasla gelişmiş DNS kararlılığı ve güvenliği sunan ücretsiz bir DNS hizmetidir. Verisign, kullanıcıların gizliliğine saygı duyar: Ne herkese açık DNS verilerini üçüncü taraflara satarlar ne de kullanıcıların sorgularını onlara reklam sunmak üzere yönlendirirler.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` ve `64.6.65.6`             | [AdGuard'a ekle](adguard:add_dns_server?address=64.6.64.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` ve `2620:74:1c::2:2` | [AdGuard'a ekle](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/), [switch.ch](https://www.switch.ch/) tarafından sağlanan bir İsviçre genel DNS hizmetidir.

| Protokol       | Adres                                                                                 |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Sağlayıcı: `dns.switch.ch` IP: `130.59.31.248`                                        | [AdGuard'a ekle](adguard:add_dns_server?address=130.59.31.248&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Sağlayıcı: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Ana makine adı: `tls://dns.switch.ch` IP: `130.59.31.248` ve IPv6: `2001:620:0:ff::2` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/), Dyn tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                              |                                                                                                                                                   |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` ve `216.146.36.36` | [AdGuard'a ekle](adguard:add_dns_server?address=216.146.35.35&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/), gizlilik koruma özelliği ile günlük kaydı tutmayan hızlı ve ücretsiz bir sunucudur.

| Protokol  | Adres                                                        |                                                                                                                                                                             |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` ve `84.200.70.40`                             | [AdGuard'a ekle](adguard:add_dns_server?address=84.200.69.80&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` ve `2001:1608:10:25::9249:d69b` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/), içerik filtreleme ve internet güvenliği çözümleri sağlar.

| Protokol  | Adres            |                                                                                                                                                     |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [AdGuard'a ekle](adguard:add_dns_server?address=193.58.251.251&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315), reklamlara, izlemeye ve kimlik avına karşı korumalı, hızlı ve güvenli bir DNS hizmetidir.

#### West DNS Server (Main)

| Protokol       | Adres                             |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Siberia and Far East)

| Protokol       | Adres                                  |                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/), dünya çapında herhangi bir noktadan hızlı ve güvenilir bir DNS çözümlemesi sağlamak için hem Amerika, Avrupa, Afrika, Avustralya hem de Uzak Doğu'da bulunan sunuculardan oluşan küresel bir anycast ağıdır.

| Protokol  | Adres                            |                                                                                                                                                 |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` ve `195.46.39.40` | [AdGuard'a ekle](adguard:add_dns_server?address=195.46.39.39&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works), kişisel ve finansal verilerin çalınmasına karşı koruma sağlar. Virüsleri, fidye yazılımlarını ve diğer kötü amaçlı yazılımları evinizden uzak tutun.

#### Private

In "Private" mode, DNS resolution only.

| Protokol               | Adres                                                                                                    |                                                                                                                                                                                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` ve `149.112.122.10`                                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` ve `2620:10A:80BC::10`                                                               | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Private | Ana makine adı: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` ve IPv6: `2620:10A:80BB::10` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

In "Protected" mode, malware and phishing protection.

| Protokol                 | Adres                                                                                                      |                                                                                                                                                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` ve `149.112.122.20`                                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.20&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` ve `2620:10A:80BC::20`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protected | Ana makine adı: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` ve IPv6: `2620:10A:80BB::20` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Family

In "Family" mode, Protected + blocking adult content.

| Protokol              | Adres                                                                                                   |                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` ve `149.112.122.30`                                                                    | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.30&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` ve `2620:10A:80BC::30`                                                              | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Family | Ana makine adı: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` ve IPv6: `2620:10A:80BB::30` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/), OpenNIC Project tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                                     |                                                                                                                                                       |
| --------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` ve `169.239.202.202`    | [AdGuard'a ekle](adguard:add_dns_server?address=185.121.177.177&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` ve `2a05:dfc7:5353::53` | [AdGuard'a ekle](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/), küçük bir hobi DNS projesi. No logs, Ethereum Name Service, DNSSEC ready & Filtered ads, trackers, malwares.

#### Finland DNS Server

| Protokol             | Adres                                                                       |                                                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`          | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                   |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                       |

#### Japan DNS Server

| Protokol             | Adres                                                                                |                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                      | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-jp.blahdns.com/dns-query`                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                   |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                           |

#### Germany DNS Server

| Protokol             | Adres                                                                       |                                                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot-de.blahdns.com` IP: `159.69.198.101`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`          | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                   |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                       |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/), yetişkinlere yönelik siteleri engellemeyi amaçlar. Çocukların ve yetişkinlerin kötü amaçlı siteler tarafından izlenme endişesi duymadan internette güvenle gezinmesini sağlar.

| Protokol       | Adres                                                       |                                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                | [AdGuard'a ekle](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` ve `78.47.64.161`                          | [AdGuard'a ekle](adguard:add_dns_server?address=94.130.180.225&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` ve `2a01:4f8:1c17:4df8::1`          | [AdGuard'a ekle](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `dnsforfamily.com` IP: `94.130.180.225`          | [AdGuard'a ekle](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                |
| DNSCrypt, IPv6 | Sağlayıcı: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                    |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/), CZ.NIC ODVR, Açık DNSSEC Doğrulama Çözümleyicileridir. CZ.NIC herhangi bir kişisel veri ve cihazların kişisel veri gönderdiği sayfalarda bilgi toplamaz.

| Protokol       | Adres                                      |                                                                                                                                                                                             |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` ve `185.43.135.1`            | [AdGuard'a ekle](adguard:add_dns_server?address=193.17.47.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` ve `2001:148f:fffe::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [AdGuard'a ekle](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/), İnternet kullanıcılarının çoğu için hızlı, kararlı ve güvenli DNS çözünürlüğü sağlamayı taahhüt eden ücretsiz bir özyinelemeli DNS hizmetidir. Kullanıcıları çeşitli saldırılardan ve tehditlerden korumak için AliGuard özelliğini içerir.

| Protokol       | Adres                                 |                                                                                                                                                                                                                     |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` ve `223.6.6.6`            | [AdGuard'a ekle](adguard:add_dns_server?address=223.5.5.5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` ve `2400:3200:baba::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2400:3200::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It supports DNS64 to provide domain name resolution only for IPv6 users.

| Protokol       | Adres                             |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` ve `240C::6644`      | [AdGuard'a ekle](adguard:add_dns_server?address=240C::6666&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/), çocukları uygunsuz sitelerden ve kötü niyetli içeriklerden koruyan bir her noktaya dağıtılabilen internet filtreleme sistemidir.

| Protokol       | Adres                                                        |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` ve `180.131.145.145`                       | [AdGuard'a ekle](adguard:add_dns_server?address=180.131.144.144&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)             |

### 360 Secure DNS

**360 Secure DNS**, gelişmiş ağ güvenliği tehdit korumasına sahip endüstri lideri bir özyinelemeli DNS hizmetidir.

| Protokol       | Adres                             |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` ve `218.30.118.6`   | [AdGuard'a ekle](adguard:add_dns_server?address=101.226.4.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` ve `140.207.198.6` | [AdGuard'a ekle](adguard:add_dns_server?address=123.125.81.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/), Internet Initiative Japan tarafından yürütülen genel bir DNS hizmetidir. Ayrıca çocuk istismarı içeriklerini de engeller.

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/), alan adı çözümleme hizmetleri geliştirmede yılların deneyimine sahip gizlilik dostu bir DNS sağlayıcısıdır, kullanıcılara daha hızlı, doğru ve istikrarlı özyinelemeli çözümleme hizmeti sunmayı amaçlamaktadır.

| Protokol       | Adres                            |                                                                                                                                                                                         |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` ve `119.28.28.28` | [AdGuard'a ekle](adguard:add_dns_server?address=119.29.29.29&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`      | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`      | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS**, profesyonel ve yüksek güvenilirliğe sahip bir DNS hizmetidir.

#### Normal

Reklamları ve rahatsız edici siteleri engelleyin.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` ve `114.114.115.115` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.114&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Safe

Kimlik avını, kötü amaçlı ve diğer güvenli olmayan siteleri engeller.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` ve `114.114.115.119` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.119&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Family

Bu sunucular yetişkinlere yönelik siteleri ve uygunsuz içerikleri engeller.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` ve `114.114.115.110` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.110&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101), TWNIC (Taiwan Network Information Center) tarafından günlük tutmayan ücretsiz bir alternatif DNS hizmetidir.

| Protokol       | Adres                                  |                                                                                                                                                                                                             |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` ve `101.102.103.104` | [AdGuard'a ekle](adguard:add_dns_server?address=101.101.101.101&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` ve `2001:de4::102`     | [AdGuard'a ekle](adguard:add_dns_server?address=2001:de4::101&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS**, kötü amaçlı alan adlarını engelleme özelliğine sahip güvenli, hızlı, ücretsiz bir niş DNS hizmetidir.

#### Pure Edition

| Protokol  | Adres                           |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` ve `52.80.52.52` | [AdGuard'a ekle](adguard:add_dns_server?address=117.50.10.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokol  | Adres                           |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` ve `52.80.66.66` | [AdGuard'a ekle](adguard:add_dns_server?address=117.50.11.11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/), 140 binden fazla reklam, reklam izleme, kötü amaçlı yazılım ve kimlik avı alan adlarını engeller. No logging, no ECS, DNSSEC validation, free!

#### Singapore DNS Server

| Protokol       | Adres                                                                           | Konum                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                | [AdGuard'a ekle](adguard:add_dns_server?address=174.138.21.128&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`                  | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                        |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`     | [AdGuard'a ekle](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                       |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (üçüncü taraf aracılığıyla önbelleğe alınır) | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| Protokol       | Adres                                                                           |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=172.104.93.80&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [AdGuard'a ekle](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                       |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/), açık, ücretsiz ve herkese açık bir DNS hizmetidir. DNS yönlendirmesi yok, günlük kaydı yok.

| Protokol  | Adres                                |                                                                                                                                                     |
| --------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` ve `172.104.49.100` | [AdGuard'a ekle](adguard:add_dns_server?address=172.104.237.57&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` ve `37.235.1.177`     | [AdGuard'a ekle](adguard:add_dns_server?address=37.235.1.174&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html), Freenom World tarafından sunulan ücretsiz bir anonim DNS çözümleyicisidir.

| Protokol  | Adres                          |                                                                                                                                               |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` ve `80.80.81.81` | [AdGuard'a ekle](adguard:add_dns_server?address=80.80.80.80&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/), küçük bir Reklam Engelleme DNS hobi projesidir.

#### OSZX server

Bu sunucular reklam engelleme sağlamaz, günlük tutmaz ve DNSSEC'yi etkinleştirir.

| Protokol       | Adres                                                                     |                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                            | [AdGuard'a ekle](adguard:add_dns_server?address=51.38.83.141&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                               |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

Bu sunucular reklam engelleme sağlamaz, günlük tutmaz ve DNSSEC'yi etkinleştirir.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=51.38.82.198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [AdGuard'a ekle](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                         |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                         |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                            | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/), DNS trafiğini korumaya ve modern protokoller sunan DNS çözümleyici ortamını çeşitlendirmeye yardımcı olmak için DNS gizlilik hizmetlerini işletmektedir.

| Protokol       | Adres                                   |                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io), Strongarm tarafından sunulan ve insanların kötü amaçlı içerikle etkileşime girmesini engelleyen bir DNS hizmetidir.

| Protokol  | Adres                             |                                                                                                                                                   |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` ve `52.3.100.184` | [AdGuard'a ekle](adguard:add_dns_server?address=54.174.40.213&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/), SafeSurfer tarafından sunulan, cihazınızı zararlı ve yetişkinlere yönelik içeriklerden koruyan bir DNS hizmetidir.

| Protokol       | Adres                                                              |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` ve `104.197.28.121`                              | [AdGuard'a ekle](adguard:add_dns_server?address=104.155.237.225&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)     |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Kötü amaçlı yazılım koruması, reklam engelleme ve kayıt tutmayan güvenli, özel, açık kaynaklı bir DNS çözümleyicisi. Telefonunuzu, tabletinizi ve bilgisayarınızı Degoogle ve Ungoogle yapın.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                            |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                               |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/), Elias Ojala, Finlandiya tarafından yönetilmektedir.

| Protokol       | Adres                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/), BLR1 bölgesindeki bir Digital Ocean damlacığından çalışan bir sunucudur. Abhay Rana aka Nemo tarafından sürdürülmektedir.

| Protokol       | Adres                                                             |                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [AdGuard'a ekle](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/), günlük kaydı olmadan, DNSSEC etkinleştirilmiş ücretsiz DNS hizmeti sağlar.

| Protokol       | Adres                              |                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` ve `45.11.45.11` | [AdGuard'a ekle](adguard:add_dns_server?address=185.222.222.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` ve `2a11::`               | [AdGuard'a ekle](adguard:add_dns_server?address=2a09::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://185.222.222.222`            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/), [adminforge](https://adminforge.de/) tarafından sağlanan bir reklam engelleyici ve günlük tutmama özelliğine sahip yedek bir DNS çözümleyicisidir.

| Protokol       | Adres                                                |                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` ve `176.9.1.117`                      | [AdGuard'a ekle](adguard:add_dns_server?address=176.9.93.198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` ve `2a01:4f8:141:316d::117` | [AdGuard'a ekle](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [AdGuard'a ekle](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

[Restena Foundation](https://www.restena.lu/) tarafından sağlanan [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) sunucuları.

| Protokol       | Adres                                                                              |                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29` | [AdGuard'a ekle](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu) |

### fvz DNS

[fvz DNS](http://meo.ws/), Fusl'ın genel birincil OpenNIC Tier2 Anycast DNS Çözümleyicisidir.

| Protokol       | Adres                                                                 |                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/), Freifunk München tarafından sağlanan ücretsiz DNS sunucularıdır.

| Protokol             | Adres                                                                   |                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot.ffmuc.net`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh.ffmuc.net/dns-query`                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [AdGuard'a ekle](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                       |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                        |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/), Digital Society tarafından işletilen halka açık bir çözümleyicidir. İsviçre'nin Zürih kentinde düzenlenmiştir.

| Protokol       | Adres                                                                                         |                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` ve IPv6: `2a05:fc84::42` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` ve IPv6: `2a05:fc84::43`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/), [LibreOps](https://libreops.cc/) tarafından işletilen genel şifreli bir DNS hizmetidir.

| Protokol       | Adres                                        |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [AdGuard'a ekle](adguard:add_dns_server?address=88.198.92.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/), ibksturm tarafından sağlanan test sunucuları. OPENNIC, DNSSEC, filtreleme yok, günlük kaydı yok.

| Protokol             | Adres                                                                         |                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Ana makine adı: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [AdGuard'a ekle](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [AdGuard'a ekle](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`               | [AdGuard'a ekle](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                               |

### DNS Gizliliği

[DNS Gizliliğini](https://dnsprivacy.org/) teşvik etmek, uygulamak ve dağıtmak için işbirliğine dayalı bir açık proje.

[Stubby geliştiricileri](https://getdnsapi.net/)tarafından çalıştırılan DNS sunucuları.

| Protokol     | Adres                                                                                                                               |                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Ana makine adı: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` ve IPv6: `2001:610:1:40ba:145:100:185:15`  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` ve IPv6: `2001:610:1:40ba:145:100:185:16` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

"Günlüğe kaydetme yok" ilkesine sahip diğer DNS sunucuları.

| Protokol           | Adres                                                                                                                      |                                                                                                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` ve IPv6: `2a01:3a0:53:53::0` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` ve IPv6: `2001:67c:28a4::` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Sağlayıcı: `dkg` Ana makine adı: `tls://dns.cmrg.net` IP: `199.58.81.218` ve IPv6: `2001:470:1c:76d::53`                   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Ana makine adı: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` ve IPv6: `2001:8b0:24:24::24`                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Ana makine adı: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` ve IPv6: `2a01:4f8:c0c:3c03::2`                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Ana makine adı: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` ve IPv6: `2a01:4f8:c0c:3bfc::2`                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Ana makine adı: `tls://dns.neutopia.org` IP: `89.234.186.112` ve IPv6: `2a00:5884:8209::2`                                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Sağlayıcı: `Go6Lab` Ana makine adı: `tls://privacydns.go6lab.si` ve IPv6: `2001:67c:27e4::35`                              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Ana makine adı: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

DNS servers with minimal logging/restrictions. These servers use some logging, self-signed certs or no support for strict mode.

| Protokol     | Adres                                                                                                                   |                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Sağlayıcı: `NIC Chile` Ana makine adı: `dnsotls.lab.nic.cl` IP: `200.1.123.46` ve IPv6: `2001:1398:1:0:200:1:123:46`    | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Sağlayıcı: `OARC` Ana makine adı: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` ve IPv6: `2620:ff:c000:0:1::64:25` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/), Fredrik Pettersson tarafından sağlanan sıfır günlük tutma ve reklam engelleme DNS hizmetidir.

#### Blitz

[Yapılandırılabilir filtreleme](https://blitz-setup.ahadns.com/) dünya çapında yalnızca DoH varyantı.

| Protokol                                        | Adres                             |                                                                                                                                                                                                                       |
| ----------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, sansürsüz                       | `https://blitz.ahadns.com`        | [AdGuard'a ekle](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, OISD filtresi                   | `https://blitz.ahadns.com/1:1`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD & Energized porno filtresi | `https://blitz.ahadns.com/1:1.12` | [AdGuard'a ekle](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Hollanda

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [AdGuard'a ekle](adguard:add_dns_server?address=5.2.75.75&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [AdGuard'a ekle](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Hindistan

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [AdGuard'a ekle](adguard:add_dns_server?address=45.79.120.233&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [AdGuard'a ekle](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [AdGuard'a ekle](adguard:add_dns_server?address=45.67.219.208&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [AdGuard'a ekle](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [AdGuard'a ekle](adguard:add_dns_server?address=185.213.26.187&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polonya

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### İtalya

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### İspanya

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Norveç

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Şikago

| Protokol       | Adres                                  |                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/), Sebastian Schmidt tarafından sağlanan gizlilik odaklı bir DNS hizmetidir. Günlük Tutmama, DNSSEC doğrulaması.

#### DNS Server 1

| Protokol       | Adres                                                       |                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=45.76.113.31&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [AdGuard'a ekle](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                |
| DNS-over-TLS   | `tls://dot.seby.io`                                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) fiziksel olarak Barselona, İspanya yakınlarında yer almaktadır. puntCAT, ücretsiz, güvenli, yakın ve gizliliğinize saygı duyan bir genel DNS hizmeti sunar.

| Protokol  | Adres              |                                                                                                                                                         |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [AdGuard'a ekle](adguard:add_dns_server?address=109.69.8.51&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [AdGuard'a ekle](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/), istekleri hızlandırmak, fazlalığı artırmak için genel DNS çözümleyicileri çalıştırır. Hizmet [Peerix](https://www.peerix.net/) tarafından sağlanmaktadır

#### Default

Bu sunucular trafik filtrelemesi olmadan DNS çözümlemesi sağlar.

| Protokol       | Adres                                  |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` ve `185.235.81.2`       | [AdGuard'a ekle](adguard:add_dns_server?address=185.235.81.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6      | `2a0d:4d00:81::1` ve `2a0d:4d00:81::2` | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Safe

Güvenli mod virüslü, hileli veya bot sitelere karşı koruma sağlar.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` ve `185.235.81.4`       | [AdGuard'a ekle](adguard:add_dns_server?address=185.235.81.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` ve `2a0d:4d00:81::4` | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Family

Aile modu, "Güvenli" çözümleyicilerle koruma sağlar ve yetişkinlere yönelik siteleri engeller.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` ve `185.235.81.6`       | [AdGuard'a ekle](adguard:add_dns_server?address=185.235.81.5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` ve `2a0d:4d00:81::6` | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/), isteğe bağlı günlüğe kaydetme özelliğine sahip ücretsiz yapılandırılabilir filtreleme çözümleyicilerine ek olarak, günlüğe kaydetme özelliği olmayan, herkese açık filtreleme yapmayan çözümleyiciler sunar.

#### Ultra-low latency

| Protokol       | Adres                    |                                                                                                                                                                                                                     |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokol       | Adres                            |                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [AdGuard'a ekle](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure), Cloudflare Worker olarak çalışan DNS-over-HTTPS hizmeti ve yapılandırılabilir blok listeleri ile Fly.io Worker olarak çalışan DNS-over-TLS hizmeti sağlar.

#### Non-filtering

| Protokol       | Adres                           |                                                                                                                                                                                                                           |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [AdGuard'a ekle](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [AdGuard'a ekle](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns), proxy özelliklerine sahip özelleştirilebilir bir DNS hizmetidir. Bu, yalnızca bir şeyleri (reklamlar, porno, vb.) engellemekle kalmayıp aynı zamanda sitelerin ve hizmetlerin engelini kaldırabileceği anlamına gelir.

#### Non-filtering

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` ve `76.76.10.0`       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` ve `2606:1a40:1::`  | [AdGuard'a ekle](adguard:add_dns_server?address=2606:1a40::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [AdGuard'a ekle](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Block malware

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Block malware + ads

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Block malware + ads + social

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[AdGuard'a ekle](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/), Avustralya, Almanya, Singapur, İsveç, Birleşik Krallık ve Amerika Birleşik Devletleri'nde (New York ve Los Angeles) bulunan uç noktaları ile QNAME minimizasyonu ile halka açık DNS sağlar.

#### Non-filtering

| Protokol       | Adres                               |                                                                                                                                                                                                                         |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Ad blocking

| Protokol       | Adres                                       |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Küçük kişisel çözümleyiciler

Bu bölümde küçük, çoğunlukla kişisel DNS çözümleyicilerini listeliyoruz. Genellikle sadece bir veya çok az sayıda sunucuya ve 'büyük' sağlayıcılardan daha kötü çalışma süresine sahiptirler. Uygunluklarını düzgün bir şekilde izleyemeyeceğiz. **Bunları kendi sorumluluğunuzda kullanın!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) Mumbai, Hindistan'da barındırılan kişisel bir DNS hizmetidir.

Non-logging | Filters ads, trackers, phishing,etc | DNSSEC | QNAME Minimization | No EDNS Client Subnet.

| Protokol       | Adres                                                              |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Ana makine: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                             |
| DNS-over-HTTPS | Ana makine: `https://dns.arapurayil.com/dns-query`                 | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server), AdGuard Home altyapısı kullanılarak Trondheim, Norveç'te barındırılan kişisel bir DNS hizmetidir.

Daha gelişmiş söz dizimi sayesinde AdGuard DNS'den daha fazla reklam ve kötü amaçlı yazılımı engeller, ancak izleyicilere daha kolay gider ve alternatif sağ tabloidleri ve çoğu resim panosunu engeller. Günlük kaydı, kullanılan filtre listelerini iyileştirmek (örneğin, engellenmemesi gereken sitelerin engelini kaldırarak) ve sunucu sistemi güncellemeleri için en az kötü zamanları belirlemek için kullanılır.

| Protokol       | Adres                                                 |                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Varies; see link above.                               |                                                                                                                                                                                                                                                                                                 |
| DNS, IPv6      | Varies; see link above.                               |                                                                                                                                                                                                                                                                                                 |
| DNSCrypt, IPv4 | Varies; see link above.                               |                                                                                                                                                                                                                                                                                                 |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) - Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS resovers with blocking: adverticing, tracking, adware, malware, malicious activities and phishing companies, blocks ~1M domains. Can be has 24h/48h logs for DDoS/Flood mitigation attack.

#### Adaptive Filtering (ADA)

Recommended for most users, very flexible filtering with blocking most ads networks, ad-tracking, malware and phishing domains.

| Protokol       | Adres                               |                                                                              |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

More strictly filtering policies with blocking - ads, marketing, tracking, malware, clickbait, coinhive and phishing domains.

| Protokol       | Adres                               |                                                                              |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
