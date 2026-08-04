---
title: Известные DNS-провайдеры
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Здесь вы найдёте список надёжных DNS-провайдеров. Чтобы использовать их, сначала установите на устройство Блокировщик рекламы AdGuard или AdGuard VPN. Затем на том же устройстве кликните по ссылке провайдера в этой статье

Быстрые ссылки: [Скачать Блокировщик AdGuard](https://agrd.io/download-kb-adblock), [Скачать AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

## **Публичные anycast-резолверы**

Это крупномасштабные DNS-резолверы, распределённые по всему миру, которые используют anycast-маршрутизацию, чтобы направлять ваши DNS-запросы в ближайший центр обработки данных.

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) — это альтернативный способ заблокировать рекламу, защитить личные данные и оградить детей от материалов для взрослых. Он включает в себя необходимый набор функций по защите от рекламы, трекинга и фишинга, независимо от платформы и устройства, которым вы пользуетесь.

#### Стандартный

Эти серверы блокируют рекламу, трекеры и фишинг.

| Протокол       | Адрес                                                                                |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` и `94.140.15.15`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` и `2a10:50c0::ad2:ff`                                            | [Добавить в AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                              | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                          | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                         | [Добавить в AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.default.ns1.adguard.com` IP-адрес: `94.140.14.14:5443`        | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                        |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.default.ns1.adguard.com` IP-адрес: `[2a10:50c0::ad1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                               |

#### Семейная защита

У этих серверов есть те же функции, что и у стандартных серверов, а ещё блокировка сайтов для взрослых и безопасный поиск.

| Протокол       | Адрес                                                                               |                                                                                                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` и `94.140.15.16`                                                     | [Добавить в AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` и `2a10:50c0::bad2:ff`                                         | [Добавить в AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                          | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                     | [Добавить в AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.family.ns1.adguard.com` IP-адрес: `94.140.14.15:5443`        | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                               |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.family.ns1.adguard.com` IP-адрес: `2a10:50c0::bad1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                     |

#### Нефильтрующий

Каждый из этих серверов обеспечивает безопасное и надёжное соединение, но, в отличие от серверов «Стандартный» и «Семейная защита», они ничего не фильтруют.

| Протокол       | Адрес                                                                                 |                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` и `94.140.14.141`                                                     | [Добавить в AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` и `2a10:50c0::2:ff`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                        | [Добавить в AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                                    | [Добавить в AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                                   | [Добавить в AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.unfiltered.ns1.adguard.com` IP-адрес: `94.140.14.140:5443`     | [Добавить в AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                           |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.unfiltered.ns1.adguard.com` IP-адрес: `[2a10:50c0::1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                              |

### 360 Secure DNS

**360 Secure DNS** is a industry-leading recursive DNS service with advanced network security threat protection.

| Протокол       | Адрес                              |                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` and `218.30.118.6`   | [Add to AdGuard](adguard:add_dns_server?address=101.226.4.6&name=360%20Secure%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=360%20Secure%20DNS)                   |
| DNS, IPv4      | `123.125.81.6` and `140.207.198.6` | [Add to AdGuard](adguard:add_dns_server?address=123.125.81.6&name=360%20Secure%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=360%20Secure%20DNS)                 |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Ali DNS

[Ali DNS](https://alidns.com/) is a free recursive DNS service that is committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It includes AliGuard facility to protect users from various attacks and threats.

| Протокол       | Адрес                                  |                                                                                                                                                                                                                     |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` and `223.6.6.6`            | [Add to AdGuard](adguard:add_dns_server?address=223.5.5.5&name=Ali%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=Ali%20DNS)                                                         |
| DNS, IPv6      | `2400:3200::1` and `2400:3200:baba::1` | [Add to AdGuard](adguard:add_dns_server?address=2400:3200::1&name=Ali%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=Ali%20DNS)                                                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)       |

### BebasDNS от BebasID

[BebasDNS](https://github.com/bebasid/bebasdns) — это бесплатный и нейтральный публичный резолвер, который расположен в Индонезии и поддерживает домен OpenNIC. Created by Komunitas Internet Netral Indonesia (KINI) to serve Indonesian users with free and neutral internet connection.

#### Стандартный

Это вариант BebasDNS по умолчанию. Он блокирует рекламу, вредоносное ПО и фишинговые домены.

| Протокол       | Адрес                                                                 |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                           | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.bebasid.com:853&name=dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bebasid.com:853&name=dns.bebasid.com:853)                 |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                                       |

#### Нефильтрующий

Этот сервер ничего не фильтрует.

| Протокол       | Адрес                                  |                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                           |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [Add to AdGuard](adguard:add_dns_server?address=tls://unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### Безопасность

Это сервер BebasDNS, защищающий от вирусов и других угроз. Он блокирует только вредоносное ПО и фишинговые домены.

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [Add to AdGuard](adguard:add_dns_server?address=tls://antivirus.bebasid.com:853&name=antivirus.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                 |

#### Семейный

Это семейный вариант BebasDNS. This variant blocks pornography, gambling, hate sites, malware, and phishing domains.

| Протокол       | Адрес                                                                           |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                           | [Add to AdGuard](adguard:add_dns_server?address=tls://internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                 |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                                 |

#### Семейный с фильтрацией рекламы

This is the family variant of BebasDNS but with an ad blocker

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [Add to AdGuard](adguard:add_dns_server?address=tls://family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)         |

#### OISD Filter

This is a custom BebasDNS variant with only OISD Big Filter

| Протокол       | Адрес                              |                                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [Add to AdGuard](adguard:add_dns_server?address=tls://oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                 |

#### Hagezi Multi Normal Filter

This is a custom BebasDNS variant with only Hagezi Multi Normal Filter

| Протокол       | Адрес                                |                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [Add to AdGuard](adguard:add_dns_server?address=tls://hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                         |

### Caliph DNS

[Caliph DNS](https://dns.caliph.dev) is a free DNS service based in Indonesia. Note: The website (https://dns.caliph.dev) is currently returning HTTP 502. The DNS service itself (DoH/DoT/DNS IPv4) remains functional. This service applies SafeSearch enforcement on Google queries and blocks certain websites (e.g., Reddit returns `internetpositif.id`).

| Протокол       | Адрес                              |                                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `160.19.167.150`                   | [Add to AdGuard](adguard:add_dns_server?address=160.19.167.150&name=Caliph%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=160.19.167.150&name=Caliph%20DNS)                                         |
| DNS, IPv6      | `2001:df7:5300:3::51e`             | [Add to AdGuard](adguard:add_dns_server?address=2001:df7:5300:3::51e&name=Caliph%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:df7:5300:3::51e&name=Caliph%20DNS)                             |
| DNS-over-HTTPS | `https://dns.caliph.dev/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.caliph.dev/dns-query&name=dns.caliph.dev), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.caliph.dev/dns-query&name=dns.caliph.dev) |
| DNS-over-TLS   | `tls://dns.caliph.dev:853`         | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.caliph.dev:853&name=dns.caliph.dev:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.caliph.dev:853&name=dns.caliph.dev:853)         |
| DNS-over-QUIC  | `quic://dns.caliph.dev:853`        | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.caliph.dev:853&name=dns.caliph.dev:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.caliph.dev:853&name=dns.caliph.dev:853)       |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) — сервис, который расширяет возможности DNS за счёт включения таких функций, как фильтрация контента и защита от фишинга с нулевым временем простоя.

#### Стандартный

DNS-серверы с фильтрацией, защищающей ваше устройство от вредоносного ПО.

| Протокол       | Адрес                                                                |                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` и `208.67.220.220`                                  | [Add to AdGuard](adguard:add_dns_server?address=208.67.222.222&name=Cisco%20OpenDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=Cisco%20OpenDNS)                                               |
| DNS, IPv6      | `2620:119:35::35` и `2620:119:53::53`                                | [Add to AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=Cisco%20OpenDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=Cisco%20OpenDNS)                                             |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `208.67.220.220`  | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                 |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `[2620:0:ccc::2]` | [Добавить в AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                                |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |
| DNS-over-TLS   | `tls://dns.opendns.com`                                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

Серверы OpenDNS с блокировкой контента для взрослых.

| Протокол       | Адрес                                                         |                                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` и `208.67.220.123`                           | [Add to AdGuard](adguard:add_dns_server?address=208.67.222.123&name=Cisco%20OpenDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=Cisco%20OpenDNS)                                                                                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

Серверы OpenDNS без фильтрации.

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.2` и `208.67.220.2`             | [Add to AdGuard](adguard:add_dns_server?address=208.67.222.2&name=Cisco%20OpenDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.2&name=Cisco%20OpenDNS)                                                                                   |
| DNS, IPv6      | `2620:0:ccc::2` IP: `2620:0:ccd::2`         | [Add to AdGuard](adguard:add_dns_server?address=2620:0:ccc::2&name=Cisco%20OpenDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=Cisco%20OpenDNS)                                                                                 |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com)                                                 |

:::info

Серверы OpenDNS удаляют секции AUTHORITY из определённых ответов, включая ответы с NODATA, что делает невозможным кеширование таких ответов.

:::

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) — это DNS-сервис с настраиваемой фильтрацией. Этот сервис позволяет пользоваться интернетом безопасно и без нежелательного контента.

#### Семейный фильтр

Блокирует доступ к контенту для взрослых, прокси и VPN-доменам, а также к сайтам со смешанным содержимым.

| Протокол       | Адрес                                                           |                                                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` и `185.228.169.168`                           | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.168&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=CleanBrowsing)                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::` и `2a0d:2a00:2::`                               | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=CleanBrowsing)                                                                                                             |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.168:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`              | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`                     | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Фильтр контента для взрослых

Менее ограничивающий, чем Семейный фильтр: блокирует доступ только к контенту для взрослых, вредоносным и фишинговым доменам.

| Протокол       | Адрес                                                            |                                                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` и `185.228.169.11`                              | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.10&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=CleanBrowsing)                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::1` и `2a0d:2a00:2::1`                              | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=CleanBrowsing)                                                                                                       |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.10:8443`   | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                            |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::1]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                         |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`                | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Фильтр безопасности

Блокирует фишинговые, вредоносные и спам-сайты.

| Протокол       | Адрес                                                |                                                                                                                                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` и `185.228.169.9`                    | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.9&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=CleanBrowsing)                                                                                                                     |
| DNS, IPv6      | `2a0d:2a00:1::2` и `2a0d:2a00:2::2`                  | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=CleanBrowsing), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=CleanBrowsing)                                                                                                                   |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Добавить в AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) — это бесплатный и быстрый DNS-сервис, который функционирует как рекурсивный сервер, ищущий доменные имена для любого хоста в интернете.

#### Стандартный

| Протокол             | Адрес                                           |                                                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` и `1.0.0.1`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.1&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=Cloudflare%20DNS)                                                                             |
| DNS, IPv6            | `2606:4700:4700::1111` и `2606:4700:4700::1001` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=Cloudflare%20DNS)                                                   |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                         | [Добавить в AdGuard](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Блокировка вредоносных сайтов

| Протокол       | Адрес                                           |                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` и `1.0.0.2`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.2&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=Cloudflare%20DNS)                                                                                                           |
| DNS, IPv6      | `2606:4700:4700::1112` и `2606:4700:4700::1002` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=Cloudflare%20DNS)                                                                                 |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Блокировка вредоносных и «взрослых» сайтов

| Протокол             | Адрес                                           |                                                                                                                                                                                                                                                                         |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` и `1.0.0.3`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.3&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=Cloudflare%20DNS)                                                                                                   |
| DNS, IPv6            | `2606:4700:4700::1113` и `2606:4700:4700::1003` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=Cloudflare%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=Cloudflare%20DNS)                                                                         |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) — это DNS-сервис, который обрабатывает DNS-запросы через всемирную сеть DNS-серверов. Удаляет рекламу и защищает от фишинговых и шпионских программ.

| Протокол       | Адрес                                                                  |                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` и `8.20.247.20`                                           | [Add to AdGuard](adguard:add_dns_server?address=8.26.56.26&name=Comodo%20Secure%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=Comodo%20Secure%20DNS) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Добавить в AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ)                           |

### ControlD

[ControlD](https://controld.com/free-dns) — настраиваемый DNS-сервис с возможностями прокси-сервера. Это означает, что он не только блокирует рекламу, порно и прочее, но может и разблокировать веб-сайты и сервисы.

#### Нефильтрующий

| Протокол       | Адрес                             |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` и `76.76.10.0`        | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.0&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.0&name=ControlD)                                             |
| DNS, IPv6      | `2606:1a40::` и `2606:1a40:1::`   | [Add to AdGuard](adguard:add_dns_server?address=2606:1a40::&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=ControlD)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=ControlD) |
| DNS-over-TLS   | `tls://p0.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p0.freedns.controld.com&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p0.freedns.controld.com&name=ControlD)     |

#### Блокировка вредоносного ПО

| Протокол       | Адрес                             |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.1&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=ControlD)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=ControlD) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=ControlD)     |

#### Блокировка вредоносного ПО и рекламы

| Протокол       | Адрес                             |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.2&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=ControlD)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=ControlD) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=ControlD)     |

#### Блокировка вредоносного ПО, рекламы и кнопок социальных сетей

| Протокол       | Адрес                             |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.3&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=ControlD)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=ControlD) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=ControlD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=ControlD)     |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) is a DNS service that lets you block anything you wish while also protecting you and your family by default from ads, trackers, malware, phishing, malicious sites, and much more.

| Протокол       | Адрес                                                                          |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                   |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

Открытый проект-коллаборация для продвижения, реализации и внедрения [DNS Privacy](https://dnsprivacy.org/).

#### DNS-серверы, управляемые [Stubby developers](https://getdnsapi.net/)

| Протокол     | Адрес                                                                                                                               |                                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Имя хоста: `tls://getdnsapi.net` IP: `185.49.141.37` и IPv6: `2a04:b900:0:100::37`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Провайдер: `Surfnet` Имя хоста: `tls://dnsovertls.sinodun.com` IP-адрес: `145.100.185.15` и IPv6: `2001:610:1:40ba:145:100:185:15`  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Провайдер: `Surfnet` Имя хоста: `tls://dnsovertls1.sinodun.com` IP-адрес: `145.100.185.16` и IPv6: `2001:610:1:40ba:145:100:185:16` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

#### Другие DNS-серверы с политикой без логов

| Протокол           | Адрес                                                                                                                |                                                                                                                                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Провайдер: `UncensoredDNS` Имя хоста: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` и IPv6: `2a01:3a0:53:53::0` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Провайдер: `UncensoredDNS` Имя хоста: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` и IPv6: `2001:67c:28a4::` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Провайдер: `dkg` Имя хоста: `tls://dns.cmrg.net`  IP: `199.58.81.218` и IPv6: `2001:470:1c:76d::53`                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Имя хоста: `tls://dns.larsdebruin.net` IP-адрес: `51.15.70.167`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Имя хоста: `tls://dns-tls.bitwiseshift.net` IP-адрес: `81.187.221.24` и IPv6: `2001:8b0:24:24::24`                   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Имя хоста: `tls://ns1.dnsprivacy.at` IP-адрес: `94.130.110.185` и IPv6: `2a01:4f8:c0c:3c03::2`                       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Имя хоста: `tls://ns2.dnsprivacy.at` IP-адрес: `94.130.110.178` и IPv6: `2a01:4f8:c0c:3bfc::2`                       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Имя хоста: `tls://dns.bitgeek.in` IP-адрес: `139.59.51.46`                                                           | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Имя хоста: `tls://dns.neutopia.org` IP-адрес: `89.234.186.112` и IPv6: `2a00:5884:8209::2`                           | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Провайдер: `Go6Lab` Имя хоста `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Имя хоста: `tls://dot.securedns.eu` IP-адрес: `146.185.167.43` и IPv6: `2a03:b0c0:0:1010::e9a:3001`                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

#### DNS-серверы с минимальным логированием/ограничениями

Эти серверы используют логирование, самоподписанные сертификаты или не поддерживают строгий режим.

| Протокол     | Адрес                                                                                                                   |                                                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Провайдер: `NIC Chile` Имя хоста: `dnsotls.lab.nic.cl` IP-адрес: `200.1.123.46` и IPv6: `2001:1398:1:0:200:1:123:46`    | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Провайдер: `OARC` Имя хоста: `tls-dns-u.odvr.dns-oarc.net` IP-адрес: `184.105.193.78` и IPv6: `2620:ff:c000:0:1::64:25` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/) — это бесплатный DNS-сервис без логирования и с DNSSEC.

| Протокол       | Адрес                             |                                                                                                                                                                                                             |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` и `45.11.45.11` | [Add to AdGuard](adguard:add_dns_server?address=185.222.222.222&name=DNS.SB), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=DNS.SB)                                           |
| DNS, IPv6      | `2a09::` и `2a11::`               | [Add to AdGuard](adguard:add_dns_server?address=2a09::&name=DNS.SB), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=DNS.SB)                                                             |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                    | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) is a privacy-friendly DNS provider with years of experience in domain name resolution services development, it aims to provide users with more rapid, accurate and stable recursive resolution service.

| Протокол       | Адрес                           |                                                                                                                                                                                                                 |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`                  | [Add to AdGuard](adguard:add_dns_server?address=119.29.29.29&name=DNSPod), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=DNSPod)                                                     |
| DNS, IPv6      | `2402:4e00::`                   | [Add to AdGuard](adguard:add_dns_server?address=2402:4e00::&name=DNSPod), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2402:4e00::&name=DNSPod)                                                       |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub)                 |
| DNS-over-HTTPS | `https://sm2.doh.pub/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.doh.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                                         |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo) — это DNS-сервис WatchGuard, который предотвращает взаимодействие с вредоносным контентом.

| Протокол  | Адрес                            |                                                                                                                                                                       |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` и `52.3.100.184` | [Add to AdGuard](adguard:add_dns_server?address=54.174.40.213&name=DNSWatchGO), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=DNSWatchGO) |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) — это бесплатный альтернативный DNS-сервис от Dyn.

| Протокол  | Адрес                             |                                                                                                                                                                     |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` и `216.146.36.36` | [Add to AdGuard](adguard:add_dns_server?address=216.146.35.35&name=Dyn%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=Dyn%20DNS) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) — это бесплатный анонимный DNS-резолвер Freenom World.

| Протокол  | Адрес                         |                                                                                                                                                                             |
| --------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` и `80.80.81.81` | [Add to AdGuard](adguard:add_dns_server?address=80.80.80.80&name=Freenom%20World), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=Freenom%20World) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) — бесплатный глобальный DNS-сервис, который можно использовать в качестве альтернативы текущему DNS-провайдеру.

| Протокол       | Адрес                                           |                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` и `8.8.4.4`                           | [Add to AdGuard](adguard:add_dns_server?address=8.8.8.8&name=Google%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=Google%20DNS)                                               |
| DNS, IPv6      | `2001:4860:4860::8888` и `2001:4860:4860::8844` | [Add to AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=Google%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=Google%20DNS)                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor — это бесплатный альтернативный DNS-сервис от Hurricane Electric с anycast.

| Протокол       | Адрес                            |                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [Add to AdGuard](adguard:add_dns_server?address=74.82.42.42&name=Hurricane%20Electric), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=74.82.42.42&name=Hurricane%20Electric)                               |
| DNS, IPv6      | `2001:470:20::2`                 | [Add to AdGuard](adguard:add_dns_server?address=2001:470:20::2&name=Hurricane%20Electric), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:470:20::2&name=Hurricane%20Electric)                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) предоставляет общедоступный DNS-сервис с минимизацией QNAME, конечными точками в Германии, Сингапуре, Швеции, Великобритании и США (Даллас и Нью-Йорк).

#### Нефильтрующий

| Протокол       | Адрес                               |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### Блокировка рекламы

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### Блокировка рекламы и вредоносного ПО

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### Блокировка рекламы, вредоносного ПО и кнопок социальных сетей

| Протокол       | Адрес                                        |                                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### Блокировка рекламы, вредоносного ПО, взрослых и азартных игр

| Протокол       | Адрес                                      |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### Блокировка рекламы, вредоносного ПО, взрослых и азартных игр, а также кнопок социальных сетей

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive content.

| Протокол       | Адрес                                                              |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` и `180.131.145.145`                              | [Add to AdGuard](adguard:add_dns_server?address=180.131.144.144&name=Nawala), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=Nawala) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.nawala.id` IP-адрес: `180.131.144.144` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                     |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) — это бесплатный облачный рекурсивный DNS-сервис, который обеспечивает быстрый и надёжный доступ к сайтам и онлайн-приложениям со встроенной системой безопасности и анализа угроз.

#### Надёжность и производительность 1

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий.

| Протокол  | Адрес                                 |                                                                                                                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` и `156.154.71.1`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.1&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=Neustar)       |
| DNS, IPv6 | `2610:a1:1018::1` и `2610:a1:1019::1` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=Neustar) |

#### Надёжность и производительность 2

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий, а также предотвращают перенаправление ответов NXDomain (несуществующий домен) на лендинговые страницы.

| Протокол  | Адрес                                 |                                                                                                                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` и `156.154.71.5`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.5&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=Neustar)       |
| DNS, IPv6 | `2610:a1:1018::5` и `2610:a1:1019::5` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=Neustar) |

#### Защита от угроз

Эти серверы защищают от вредоносных доменов и включают функции режима «Надёжность и производительность».

| Протокол  | Адрес                                 |                                                                                                                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` и `156.154.71.2`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.2&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=Neustar)       |
| DNS, IPv6 | `2610:a1:1018::2` и `2610:a1:1019::2` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=Neustar) |

#### Семейный DNS

Эти серверы блокируют доступ к контенту для взрослых и включают функции режимов «Надёжность и производительность» + «Защита от угроз».

| Протокол  | Адрес                                 |                                                                                                                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` и `156.154.71.3`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.3&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=Neustar)       |
| DNS, IPv6 | `2610:a1:1018::3` и `2610:a1:1019::3` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=Neustar) |

#### DNS для бизнеса

Эти серверы блокируют нежелательный и отвлекающий контент, а также включают в себя функции режимов «Надёжность и производительность», «Защита от угроз» и «Семейный DNS».

| Протокол  | Адрес                                 |                                                                                                                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` и `156.154.71.4`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.4&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=Neustar)       |
| DNS, IPv6 | `2610:a1:1018::4` и `2610:a1:1019::4` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=Neustar), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=Neustar) |

### NextDNS

[NextDNS](https://nextdns.io/) предоставляет общедоступные нефильтрующие серверы без логирования в дополнение к настраиваемым фильтрующим фримиум-серверам с опциональным логированием.

#### Сверхнизкая задержка

| Протокол       | Адрес                    |                                                                                                                                                                                                                             |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Протокол       | Адрес                            |                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Добавить в AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS резолверы с блокировкой рекламы, отслеживания, рекламного и вредоносного ПО, вредоносной деятельности и фишинговых компаний, блокирует примерно миллион доменов. 24-часовые/48-часовые логи для предотвращения DDoS- или Flood-атак.

#### Adaptive Filtering (ADA)

Рекомендуется для большинства пользователей, очень гибкая фильтрация с блокировкой большинства рекламных сетей, отслеживания рекламы, вредоносных и фишинговых доменов.

| Протокол       | Адрес                               |                                                                                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Add to AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk), [Add to AdGuard](adguard:add_dns_server?address=https://ada.openbld.net/dns-query&name=ada.openbld.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://ada.openbld.net/dns-query&name=ada.openbld.net) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Add to AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0), [Add to AdGuard](adguard:add_dns_server?address=tls://ada.openbld.net&name=ada.openbld.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ada.openbld.net&name=ada.openbld.net)                                        |

#### Strict Filtering (RIC)

Более строгая политика фильтрации с блокировкой рекламных, маркетинговых, отслеживающих, кликбейтных, фишинговых, вредоносных и coinhive-доменов.

| Протокол       | Адрес                               |                                                                                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Add to AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk), [Add to AdGuard](adguard:add_dns_server?address=https://ric.openbld.net/dns-query&name=ric.openbld.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://ric.openbld.net/dns-query&name=ric.openbld.net) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Add to AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0), [Add to AdGuard](adguard:add_dns_server?address=tls://ric.openbld.net&name=ric.openbld.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ric.openbld.net&name=ric.openbld.net)                                        |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) — это бесплатная рекурсивная anycast DNS-платформа, которая обеспечивает высокую производительность, конфиденциальность и защиту от фишинга и шпионских программ. Серверы Quad9 не предоставляют компонент цензуры.

#### Стандартный

Обычные DNS-серверы, которые защищают от фишинга и шпионских программ. Они включают списки блокировки, валидацию DNSSEC и другие функции безопасности.

| Протокол       | Адрес                                                                 |                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` и `149.112.112.112`                                         | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.9&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=Quad9)                                                                         |
| DNS, IPv6      | `2620:fe::fe` и `2620:fe::9`                                          | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=Quad9)                                                                 |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.9:8443`       | [Добавить в AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                                     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Незащищённый

У незащищённых DNS-серверов нет списков блокировки, DNSSEC или EDNS Сlient Subnet.

| Протокол       | Адрес                                                                    |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` и `149.112.112.10`                                            | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.10&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.112.10&name=Quad9)                                                                         |
| DNS, IPv6      | `2620:fe::10` IP-адрес: `2620:fe::fe:10`                                 | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::10&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=Quad9)                                                                         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.10:8443`         | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe:10]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                      | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [Поддержка ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client Subnet — это метод, который включает компоненты IP-адресов конечных пользователей в запросы, отправляемые на полномочные DNS-серверы. Он предоставляет список блокировки, DNSSEC и опцию EDNS Client Subnet.

| Протокол       | Адрес                                                           |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` и `149.112.112.11`                                   | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.11&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=Quad9)                                                                               |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::11&name=Quad9), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=Quad9)                                                                         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker and DNS-over-TLS service running as Fly.io Worker with configurable blocklists.

#### Нефильтрующий

| Протокол       | Адрес                           |                                                                                                                                                                                                                           |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Add to AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Add to AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Протокол  | Адрес                             |                                                                                                                                                                     |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` and `195.46.39.40` | [Add to AdGuard](adguard:add_dns_server?address=195.46.39.39&name=Safe%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=Safe%20DNS) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) is a DNS service that blocks 50+ categories like porn, ads, malware, and popular social media sites making web surfing safer.

| Протокол       | Адрес                                                             |                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`                            | [Add to AdGuard](adguard:add_dns_server?address=104.155.237.225&name=Safe%20Surfer), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=Safe%20Surfer) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)                           |

### Surfshark DNS

[Surfshark DNS](https://dns.surfsharkdns.com/) is a DNS service that doesn’t log, track, or sell your data. Surfshark’s global infrastructure ensures stable and consistent speeds.

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `194.169.169.169`                        | [Add to AdGuard](adguard:add_dns_server?address=194.169.169.169&name=Surfshark%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=194.169.169.169&name=Surfshark%20DNS)                                                         |
| DNS, IPv6      | `2a09:a707:169::`                        | [Add to AdGuard](adguard:add_dns_server?address=2a09:a707:169::&name=Surfshark%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a09:a707:169::&name=Surfshark%20DNS)                                                         |
| DNS-over-HTTPS | `https://dns.surfsharkdns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.surfsharkdns.com/dns-query&name=dns.surfsharkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.surfsharkdns.com/dns-query&name=dns.surfsharkdns.com) |
| DNS-over-TLS   | `tls://dns.surfsharkdns.com`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.surfsharkdns.com&name=dns.surfsharkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.surfsharkdns.com&name=dns.surfsharkdns.com)                         |
| DNS-over-QUIC  | `quic://dns.surfsharkdns.com`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.surfsharkdns.com&name=dns.surfsharkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.surfsharkdns.com&name=dns.surfsharkdns.com)                       |

### v.recipes DNS (former 0ms.dev)

[v.recipes DNS](https://v.recipes/dns/) is a global DNS resolution service provided as an alternative to your current DNS provider.

It is designed with various optimizations, such as HTTP/3, caching, and more. It leverages machine learning to protect users from potential security threats while also optimizing itself over time. Some of its users can see how the DNS handles queries in real-time from its statistics page, but currently the stats page is temporarily disabled. Even if the stats page is temporarily disabled, the DNS itself still able to serve users’ requests normally.

| Протокол       | Адрес                         |                                                                                                                                                                                                 |
| -------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://v.recipes/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://v.recipes/dns-query&name=v.recipes), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://v.recipes/dns-query&name=v.recipes) |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: they neither sell public DNS data to third parties nor redirect users' queries to serve them ads.

| Протокол  | Адрес                                   |                                                                                                                                                                       |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` and `64.6.65.6`             | [Add to AdGuard](adguard:add_dns_server?address=64.6.64.6&name=Verisign), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=Verisign)             |
| DNS, IPv6 | `2620:74:1b::1:1` and `2620:74:1c::2:2` | [Add to AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=Verisign), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=Verisign) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) is a caching, recursive, public DoH and DoT resolver service that is run and managed by the Site Reliability Engineering (Traffic) team at the Wikimedia Foundation on all six Wikimedia data centers with anycast.

| Протокол       | Адрес                                                                          |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                          | [Add to AdGuard](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Hostname: `wikimedia-dns.org` IP: `185.71.138.138` and IPv6: `2001:67c:930::1` | [Add to AdGuard](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [Add to AdGuard VPN](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Региональные резолверы**

Regional DNS resolvers are typically focused on specific geographic regions, offering optimized performance for users in those areas. These resolvers are often operated by non-profit organizations, local ISPs, or other entities.

### 114DNS

[114DNS](https://www.114dns.com) is a professional and high-reliability DNS service.

#### Normal

Block ads and annoying websites.

| Протокол  | Адрес                                   |                                                                                                                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` and `114.114.115.115` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.114&name=114DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=114DNS) |

#### Safe

Blocks phishing, malicious and other unsafe websites.

| Протокол  | Адрес                                   |                                                                                                                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` and `114.114.115.119` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.119&name=114DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=114DNS) |

#### Семейный

These servers block adult websites and inappropriate contents.

| Протокол  | Адрес                                   |                                                                                                                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` and `114.114.115.110` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.110&name=114DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=114DNS) |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operates DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern protocols.

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Add to AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS is a free alternative DNS service by ByteDance at China. The only DNS currently provided by ByteDance supports IPv4. DOH, DOT, DOQ, and other encrypted DNS services will be launched soon.

| Протокол  | Адрес                           |                                                                                                                                                                 |
| --------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` and `180.184.2.2` | [Add to AdGuard](adguard:add_dns_server?address=180.184.1.1&name=ByteDance), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=180.184.1.1&name=ByteDance) |

### CERT-EE

CERT-EE (RIA) provides a DNS service that blocks malicious and phishing domains. Operated in Estonia, it works abroad as well. Requests are encrypted to enhance privacy and prevent interception or spoofing.

| Протокол       | Адрес                           |                                                                                                                                                                                                                             |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.cert.ee/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cert.ee/dns-query&name=dns.cert.ee/dns-query), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cert.ee/dns-query&name=dns.cert.ee/dns-query) |
| DNS-over-TLS   | `tls://dns.cert.ee`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.cert.ee&name=dns.cert.ee), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cert.ee&name=dns.cert.ee)                                             |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protects against theft of personal and financial data. Keep viruses, ransomware, and other malware out of your home.

#### Приватный

In *Private* mode, DNS resolution only.

| Протокол               | Адрес                                                                                               |                                                                                                                                                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` and `149.112.122.10`                                                               | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.10&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=CIRA%20Canadian%20Shield)                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` and `2620:10A:80BC::10`                                                         | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=CIRA%20Canadian%20Shield)                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` and IPv6: `2620:10A:80BB::10` | [Add to AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Защищённый

In *Protected* mode, malware and phishing protection.

| Протокол                 | Адрес                                                                                                 |                                                                                                                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` and `149.112.122.20`                                                                 | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.20&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=CIRA%20Canadian%20Shield)                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` and `2620:10A:80BC::20`                                                           | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=CIRA%20Canadian%20Shield)                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — Protected | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` and IPv6: `2620:10A:80BB::20` | [Add to AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Семейный

In *Family* mode, *Protected* + blocking adult content.

| Протокол              | Адрес                                                                                              |                                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` and `149.112.122.30`                                                              | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.30&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=CIRA%20Canadian%20Shield)                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` and `2620:10A:80BC::30`                                                        | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=CIRA%20Canadian%20Shield), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=CIRA%20Canadian%20Shield)                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — Family | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` and IPv6: `2620:10A:80BB::30` | [Add to AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) is a fast and secure DNS service based on SmartDNS with access to AI services, protection from advertising, tracking, phishing, and malicious websites. It supports the encryption of DNS-over HTTPS, DNS-over TLS, and DNS-over QUIC requests.

#### Обход геоблокировки

Access to AI, blocking phishing and malicious websites.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `83.220.169.155` and `212.109.195.93` | [Add to AdGuard](adguard:add_dns_server?address=83.220.169.155&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=212.109.195.93&name=dns.comss.one)                                   |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one`                | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.comss.one&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one&name=dns.comss.one)                       |

#### Обход геоблокировки с фильтрацией рекламы

Access to AI, blocking of ads, counters, phishing and malicious websites.

| Протокол       | Адрес                                |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `195.133.25.16`                      | [Add to AdGuard](adguard:add_dns_server?address=195.133.25.16&name=router.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=195.133.25.16&name=router.comss.one)                                           |
| DNS-over-HTTPS | `https://router.comss.one/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://router.comss.one/dns-query&name=router.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://router.comss.one/dns-query&name=router.comss.one) |
| DNS-over-TLS   | `tls://router.comss.one`             | [Add to AdGuard](adguard:add_dns_server?address=tls://router.comss.one&name=router.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://router.comss.one&name=router.comss.one)                         |
| DNS-over-QUIC  | `quic://router.comss.one`            | [Add to AdGuard](adguard:add_dns_server?address=quic://router.comss.one&name=router.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://router.comss.one&name=router.comss.one)                       |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR is an Open DNSSEC Validating Resolver. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| Протокол       | Адрес                                       |                                                                                                                                                                                             |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` and `185.43.135.1`            | [Add to AdGuard](adguard:add_dns_server?address=193.17.47.1&name=CZ.NIC%20ODVR), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=CZ.NIC%20ODVR)                     |
| DNS, IPv6      | `2001:148f:ffff::1` and `2001:148f:fffe::1` | [Add to AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=CZ.NIC%20ODVR), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=CZ.NIC%20ODVR)         |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                   | [Add to AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                         | [Add to AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland.

| Протокол       | Адрес                                                                                          |                                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` and IPv6: `2a05:fc84::42` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` and IPv6: `2a05:fc84::43`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) aims to block adult websites. It enables children and adults to surf the Internet safely without worrying about being tracked by malicious websites.

| Протокол       | Адрес                                                      |                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [Add to AdGuard](adguard:add_dns_server?address=https://dns-doh.dnsforfamily.com/dns-query&name=dns-doh.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns-doh.dnsforfamily.com/dns-query&name=dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                           | [Add to AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                         |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`                        | [Add to AdGuard](adguard:add_dns_server?address=94.130.180.225&name=DNS%20for%20Family), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=DNS%20for%20Family)                                                                     |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` and `2a01:4f8:1c17:4df8::1`        | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=DNS%20for%20Family), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=DNS%20for%20Family)                                                       |
| DNSCrypt, IPv4 | Provider: `dnsforfamily.com` IP: `94.130.180.225`          | [Добавить в AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                            |
| DNSCrypt, IPv6 | Provider: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                |

### DNS4EU

[DNS4EU](https://www.joindns4.eu) is a free, privacy-focused, and secure DNS resolver designed to protect citizens across the European Union. Co-funded by the European Union.

#### Защитное решение

Blocks access to known malicious and fraudulent websites.

| Протокол       | Адрес                                                 |                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.1` and `86.54.11.201`                       | [Add to AdGuard](adguard:add_dns_server?address=86.54.11.1&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.1&name=DNS4EU)                                                             |
| DNS, IPv6      | `2a13:1001::86:54:11:1` and `2a13:1001::86:54:11:201` | [Add to AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:1&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:1&name=DNS4EU)                                       |
| DNS-over-HTTPS | `https://protective.joindns4.eu/dns-query`            | [Add to AdGuard](adguard:add_dns_server?address=https://protective.joindns4.eu/dns-query&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://protective.joindns4.eu/dns-query&name=DNS4EU) |
| DNS-over-TLS   | `tls://protective.joindns4.eu`                        | [Add to AdGuard](adguard:add_dns_server?address=tls://protective.joindns4.eu&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://protective.joindns4.eu&name=DNS4EU)                         |

#### Защитное решение с защитой детей

Avoid access to websites inappropriate for children such as explicit content, violence or drugs on top of the protective functionality.

| Протокол       | Адрес                                                  |                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.12` and `86.54.11.212`                       | [Add to AdGuard](adguard:add_dns_server?address=86.54.11.12&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.12&name=DNS4EU)                                                 |
| DNS, IPv6      | `2a13:1001::86:54:11:12` and `2a13:1001::86:54:11:212` | [Add to AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:12&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:12&name=DNS4EU)                           |
| DNS-over-HTTPS | `https://child.joindns4.eu/dns-query`                  | [Add to AdGuard](adguard:add_dns_server?address=https://child.joindns4.eu/dns-query&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://child.joindns4.eu/dns-query&name=DNS4EU) |
| DNS-over-TLS   | `tls://child.joindns4.eu`                              | [Add to AdGuard](adguard:add_dns_server?address=tls://child.joindns4.eu&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://child.joindns4.eu&name=DNS4EU)                         |

#### Защитное решение с блокировкой рекламы

Hide website and in-app ads on top of the protective functionality.

| Протокол       | Адрес                                                  |                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.13` and `86.54.11.213`                       | [Add to AdGuard](adguard:add_dns_server?address=86.54.11.13&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.13&name=DNS4EU)                                                 |
| DNS, IPv6      | `2a13:1001::86:54:11:13` and `2a13:1001::86:54:11:213` | [Add to AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:13&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:13&name=DNS4EU)                           |
| DNS-over-HTTPS | `https://noads.joindns4.eu/dns-query`                  | [Add to AdGuard](adguard:add_dns_server?address=https://noads.joindns4.eu/dns-query&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://noads.joindns4.eu/dns-query&name=DNS4EU) |
| DNS-over-TLS   | `tls://noads.joindns4.eu`                              | [Add to AdGuard](adguard:add_dns_server?address=tls://noads.joindns4.eu&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://noads.joindns4.eu&name=DNS4EU)                         |

#### Защитное решение с защитой детей и блокировкой рекламы

Avoid access to websites inappropriate for children, such as explicit content, violence or drugs. Plus filter ads on top of the protective functionality.

| Протокол       | Адрес                                                  |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.11` and `86.54.11.211`                       | [Add to AdGuard](adguard:add_dns_server?address=86.54.11.11&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.11&name=DNS4EU)                                                             |
| DNS, IPv6      | `2a13:1001::86:54:11:11` and `2a13:1001::86:54:11:211` | [Add to AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:11&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:11&name=DNS4EU)                                       |
| DNS-over-HTTPS | `https://child-noads.joindns4.eu/dns-query`            | [Add to AdGuard](adguard:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=DNS4EU) |
| DNS-over-TLS   | `tls://child-noads.joindns4.eu`                        | [Add to AdGuard](adguard:add_dns_server?address=tls://child-noads.joindns4.eu&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://child-noads.joindns4.eu&name=DNS4EU)                         |

#### Решение без фильтрации

Unfiltered option is a valid option for users who are confident their devices and connection are secure, and are looking for fast, reliable, and anonymised resolution service.

| Протокол       | Адрес                                                   |                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.100` and `86.54.11.200`                       | [Add to AdGuard](adguard:add_dns_server?address=86.54.11.100&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.100&name=DNS4EU)                                                         |
| DNS, IPv6      | `2a13:1001::86:54:11:100` and `2a13:1001::86:54:11:100` | [Add to AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:100&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:100&name=DNS4EU)                                   |
| DNS-over-HTTPS | `https://unfiltered.joindns4.eu/dns-query`              | [Add to AdGuard](adguard:add_dns_server?address=https://unfiltered.joindns4.eu/dns-query&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.joindns4.eu/dns-query&name=DNS4EU) |
| DNS-over-TLS   | `tls://unfiltered.joindns4.eu`                          | [Add to AdGuard](adguard:add_dns_server?address=tls://unfiltered.joindns4.eu&name=DNS4EU), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.joindns4.eu&name=DNS4EU)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) is a public DNS service operated by Internet Initiative Japan. It also blocks child abuse content.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Add to AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) is a free security-focused recursive DNS service that blocks malware. It has DNSSEC support and does not store logs.

*Note: The TLS certificate for encrypted endpoints is issued by a Let's Encrypt staging CA, which may not be trusted by standard clients. Encrypted DNS (DoH/DoT/DoQ) may not work without disabling certificate validation.*

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `155.248.232.226`                     | [Add to AdGuard](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| Протокол       | Адрес                                        |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Add to AdGuard](adguard:add_dns_server?address=88.198.92.222&name=LibreDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=LibreDNS)                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Add to AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Add to AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/) is a secure, fast, free niche DNS service with malicious domains blocking facility.

#### Pure Edition

| Протокол       | Адрес                                               |                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `117.50.10.10` and `52.80.52.52`                    | [Add to AdGuard](adguard:add_dns_server?address=117.50.10.10&name=OneDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=OneDNS)                                                                             |
| DNS, IPv6      | `2400:7fc0:849e:200::8` and `2404:c2c0:85d8:901::8` | [Add to AdGuard](adguard:add_dns_server?address=2400:7fc0:849e:200::8&name=OneDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:7fc0:849e:200::8&name=OneDNS)                                                           |
| DNS-over-HTTPS | `https://doh-pure.onedns.net/dns-query`             | [Add to AdGuard](adguard:add_dns_server?address=https://doh-pure.onedns.net/dns-query&name=doh-pure.onedns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-pure.onedns.net/dns-query&name=doh-pure.onedns.net) |
| DNS-over-TLS   | `tls://dot-pure.onedns.net`                         | [Add to AdGuard](adguard:add_dns_server?address=tls://dot-pure.onedns.net&name=dot-pure.onedns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-pure.onedns.net&name=dot-pure.onedns.net)                         |

#### Block Edition

| Протокол       | Адрес                                               |                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `52.80.66.66` and `117.50.22.22`                    | [Add to AdGuard](adguard:add_dns_server?address=52.80.66.66&name=OneDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=52.80.66.66&name=OneDNS)                                                           |
| DNS, IPv6      | `2400:7fc0:849e:200::4` and `2404:c2c0:85d8:901::4` | [Add to AdGuard](adguard:add_dns_server?address=2400:7fc0:849e:200::4&name=OneDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:7fc0:849e:200::4&name=OneDNS)                                       |
| DNS-over-HTTPS | `https://doh.onedns.net/dns-query`                  | [Add to AdGuard](adguard:add_dns_server?address=https://doh.onedns.net/dns-query&name=doh.onedns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.onedns.net/dns-query&name=doh.onedns.net) |
| DNS-over-TLS   | `tls://dot.onedns.net`                              | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.onedns.net&name=dot.onedns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.onedns.net&name=dot.onedns.net)                         |

#### Family Edition

| Протокол  | Адрес                            |                                                                                                                                                             |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.60.30` and `52.80.60.30` | [Add to AdGuard](adguard:add_dns_server?address=117.50.60.30&name=OneDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=117.50.60.30&name=OneDNS) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) is a free alternative DNS service by OpenNIC Project.

| Протокол  | Адрес                   |                                                                                                                                                                                 |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [Add to AdGuard](adguard:add_dns_server?address=217.160.70.42&name=OpenNIC), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=217.160.70.42&name=OpenNIC)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [Add to AdGuard](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=OpenNIC), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=OpenNIC) |

This is just one of the available servers, the full list can be found on the [OpenNIC public servers page](https://servers.opennic.org/).

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center).

| Протокол     | Адрес                                   |                                                                                                                                                                                                 |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4    | `101.101.101.101` and `101.102.103.104` | [Add to AdGuard](adguard:add_dns_server?address=101.101.101.101&name=Quad101), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=Quad101)                             |
| DNS, IPv6    | `2001:de4::101` and `2001:de4::102`     | [Add to AdGuard](adguard:add_dns_server?address=2001:de4::101&name=Quad101), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=Quad101)                                 |
| DNS-over-TLS | `tls://101.101.101.101`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions for content filtering and internet security.

| Протокол  | Адрес            |                                                                                                                                                                 |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Add to AdGuard](adguard:add_dns_server?address=193.58.251.251&name=SkyDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=SkyDNS) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) is a Swiss public DNS service provided by [switch.ch](https://www.switch.ch/).

| Протокол       | Адрес                                                                            |                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Provider: `dns.switch.ch` IP: `130.59.31.248`                                    | [Add to AdGuard](adguard:add_dns_server?address=130.59.31.248&name=SWITCH%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=SWITCH%20DNS)                                       |
| DNS, IPv6      | Provider: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Add to AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=SWITCH%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=SWITCH%20DNS)                                 |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Add to AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` and IPv6: `2001:620:0:ff::2` | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### UK DNS Privacy Project

[UK DNS Privacy Project](https://dnsprivacy.org.uk) is a public DNS service based in the United Kingdom with no tracking, no logging, DNSSEC enabled.

| Протокол       | Адрес                                          |                                                                                                                                                                                                                                                   |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `209.250.227.42` and `64.176.190.82`           | [Add to AdGuard](adguard:add_dns_server?address=209.250.227.42&name=UK%20DNS%20Privacy), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=209.250.227.42&name=UK%20DNS%20Privacy)                                                           |
| DNS, IPv6      | `2001:19f0:7400:13c7:5400:05ff:fe40:d1ad`      | [Add to AdGuard](adguard:add_dns_server?address=2001:19f0:7400:13c7:5400:05ff:fe40:d1ad&name=UK%20DNS%20Privacy), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:19f0:7400:13c7:5400:05ff:fe40:d1ad&name=UK%20DNS%20Privacy)         |
| DNS-over-HTTPS | `https://resolver.dnsprivacy.org.uk/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://resolver.dnsprivacy.org.uk/dns-query&name=dnsprivacy.org.uk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver.dnsprivacy.org.uk/dns-query&name=dnsprivacy.org.uk) |
| DNS-over-TLS   | `tls://resolver.dnsprivacy.org.uk`             | [Add to AdGuard](adguard:add_dns_server?address=tls://resolver.dnsprivacy.org.uk&name=dnsprivacy.org.uk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver.dnsprivacy.org.uk&name=dnsprivacy.org.uk)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/) is a public DNS service based in South Korea that doesn’t log the user’s IP. Ads & trackers are blocked.

*Note: Encrypted DNS hostnames (dns.seia.io, secondary.dns.seia.io) are currently not resolving. Only plain DNS IPs (116.121.57.111, 140.238.14.191) are confirmed operational. This may be a transient issue.*

#### SK Broadband

| Протокол       | Адрес                           |                                                                                                                                                                                                         |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud South Korea

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [Add to AdGuard](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) is a free recursive DNS service. Yandex.DNS’ servers are located in Russia, CIS countries, and Western Europe. Users’ requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In *Basic* mode, there is no traffic filtering.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                       | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Safe

In *Safe* mode, protection from infected and fraudulent sites is provided.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                      | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`       | [Add to AdGuard](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                   | [Add to AdGuard](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Семейный

In *Family* mode, protection from infected, fraudulent and adult sites is provided.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                       | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Небольшие персональные резолверы**

These are DNS resolvers usually run by enthusiasts or small groups. While they may lack the scale and redundancy of larger providers, they often prioritize privacy, transparency, or offer specialized features.

We won’t be able to properly monitor their availability. **Use them at your own risk.**

### 18Bit DNS

[18Bit DNS](https://www.18bit.cn) is a free, encrypted public DNS service for the Chinese region that has been operating for many years. Consisting of over 10 endpoints, it provides users in the China region with fast, secure, and private DNS services. Additionally, it has malware and phishing protection.

| Протокол       | Адрес                            |                                                                                                                                                                                                     |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.18bit.cn/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.18bit.cn/dns-query&name=18bitDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.18bit.cn/dns-query&name=18bitDNS) |
| DNS-over-TLS   | `tls://dns.18bit.cn`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.18bit.cn&name=18bitDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.18bit.cn&name=18bitDNS)                         |

### AhaDNS

[AhaDNS](https://ahadns.com/). A zero-logging and ad-blocking DNS service provided by Fredrik Pettersson.

#### Netherlands

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Add to AdGuard](adguard:add_dns_server?address=5.2.75.75&name=AhaDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=AhaDNS)                                                                           |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Add to AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=AhaDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=AhaDNS)                                                     |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Los Angeles

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Add to AdGuard](adguard:add_dns_server?address=45.67.219.208&name=AhaDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=AhaDNS)                                                                   |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Add to AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=AhaDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=AhaDNS)                                                     |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### ASTRACAT DNS

[ASTRACAT DNS](https://astracat.vercel.app/) is a privacy-focused DNS resolver built on Cloudflare’s infrastructure and ASTRACAT’s data center. It emphasizes high speed, no logging, and no censorship, providing a secure and reliable DNS resolution experience.

| Протокол       | Адрес                                                 |                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `85.209.2.112`                                        | [Add to AdGuard](adguard:add_dns_server?address=85.209.2.112&name=ASTRACAT%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=85.209.2.112&name=ASTRACAT%20DNS)                                                                                                                     |
| DNS-over-HTTPS | `https://frd4wvnobp.cloudflare-gateway.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://frd4wvnobp.cloudflare-gateway.com/dns-query&name=frd4wvnobp.cloudflare-gateway.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://frd4wvnobp.cloudflare-gateway.com/dns-query&name=frd4wvnobp.cloudflare-gateway.com) |
| DNS-over-TLS   | `tls://frd4wvnobp.cloudflare-gateway.com`             | [Add to AdGuard](adguard:add_dns_server?address=tls://frd4wvnobp.cloudflare-gateway.com&name=frd4wvnobp.cloudflare-gateway.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://frd4wvnobp.cloudflare-gateway.com&name=frd4wvnobp.cloudflare-gateway.com)                         |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) is a personal DNS server located in Vietnam and intended for personal and small-scale use. It features ad blocking, malware/phishing protection, adult content filter, and DNSSEC validation.

*Note: Encrypted DNS (DoH/DoQ) is currently unavailable; only plain DNS (IPv4/IPv6) is operational.*

| Протокол  | Адрес                   |                                                                                                                                                                                               |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `103.70.12.129`         | [Add to AdGuard](adguard:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS)                 |
| DNS, IPv6 | `2001:df4:4c0:1::399:1` | [Add to AdGuard](adguard:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running off of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo.

| Протокол       | Адрес                                                            |                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Добавить в AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS Forge

[DNS Forge](https://dnsforge.de/) is a redundant DNS resolver with an ad blocker and no logging provided by [adminforge](https://adminforge.de/).

| Протокол       | Адрес                                                 |                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` and `176.9.1.117`                      | [Add to AdGuard](adguard:add_dns_server?address=176.9.93.198&name=DNS%20Forge), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=DNS%20Forge)                                   |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` and `2a01:4f8:141:316d::117` | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=DNS%20Forge), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=DNS%20Forge)               |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                       | [Add to AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                   | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### DNSGuard

[DNSGuard](https://dnsguard.pub) blocks ads, tracking, and malware and has a strict no-logging policy.

| Протокол       | Адрес                                   |                                                                                                                                                                                                             |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `62.192.153.242` and `62.192.153.243`   | [Add to AdGuard](adguard:add_dns_server?address=62.192.153.242&name=DNSGUARD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=62.192.153.242&name=DNSGUARD)                                         |
| DNS, IPv6      | `2a0c:4ac1:29::2` and `2a0c:4ac1:29::3` | [Add to AdGuard](adguard:add_dns_server?address=2a0c:4ac1:29::2&name=DNSGUARD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0c:4ac1:29::2&name=DNSGUARD)                                       |
| DNS-over-HTTPS | `https://dns.dnsguard.pub/dns-query`    | [Add to AdGuard](adguard:add_dns_server?address=https://dns.dnsguard.pub/dns-query&name=DNSGUARD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.dnsguard.pub/dns-query&name=DNSGUARD) |
| DNS-over-TLS   | `tls://dns.dnsguard.pub`                | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.dnsguard.pub&name=DNSGUARD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.dnsguard.pub&name=DNSGUARD)                         |
| DNS-over-QUIC  | `quic://dns.dnsguard.pub`               | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.dnsguard.pub&name=DNSGUARD), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.dnsguard.pub&name=DNSGUARD)                       |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München.

| Протокол        | Адрес                                                                  |                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS    | Hostname: `tls://dot.ffmuc.net`                                        | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS  | Hostname: `https://doh.ffmuc.net/dns-query`                            | [Add to AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNS-over-HTTP/3 | Hostname: `h3://doh.ffmuc.net/dns-query`                               | [Add to AdGuard](adguard:add_dns_server?address=h3://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=h3://doh.ffmuc.net/dns-query&name=doh.ffmuc.net)       |
| DNS-over-QUIC   | Hostname: `quic://doq.ffmuc.net`                                       | [Add to AdGuard](adguard:add_dns_server?address=quic://doq.ffmuc.net&name=doq.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://doq.ffmuc.net&name=doq.ffmuc.net)                       |
| DNSCrypt, IPv4  | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Добавить в AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                   |
| DNSCrypt, IPv6  | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                    |

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver.

| Протокол       | Адрес                                                                |                                                                                                                                                           |
| -------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### HaGeZi DNS

[HaGeZi DNS](https://github.com/hagezi/dns-servers) is a free public DNS service that provides DNS-level filtering of ads, trackers, phishing, scam, and malicious domains, with a strong focus on privacy and security. All servers are located exclusively within the EU and operate in compliance with GDPR requirements and ENISA recommendations.

The service supports encrypted DNS protocols only and does not log individual DNS queries.

#### Germany, Falkenstein

| Протокол       | Адрес                               |                                                                                                                                                                                                                         |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://root.hagezi.org/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://root.hagezi.org/dns-query&name=root.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://root.hagezi.org/dns-query&name=root.hagezi.org) |
| DNS-over-TLS   | `tls://root.hagezi.org`             | [Add to AdGuard](adguard:add_dns_server?address=tls://root.hagezi.org&name=root.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://root.hagezi.org&name=root.hagezi.org)                         |
| DNS-over-QUIC  | `quic://root.hagezi.org`            | [Add to AdGuard](adguard:add_dns_server?address=quic://root.hagezi.org&name=root.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://root.hagezi.org&name=root.hagezi.org)                       |

#### Germany, Nuremberg

| Протокол       | Адрес                                |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wurzn.hagezi.org/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://wurzn.hagezi.org/dns-query&name=wurzn.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://wurzn.hagezi.org/dns-query&name=wurzn.hagezi.org) |
| DNS-over-TLS   | `tls://wurzn.hagezi.org`             | [Add to AdGuard](adguard:add_dns_server?address=tls://wurzn.hagezi.org&name=wurzn.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://wurzn.hagezi.org&name=wurzn.hagezi.org)                         |
| DNS-over-QUIC  | `quic://wurzn.hagezi.org`            | [Add to AdGuard](adguard:add_dns_server?address=quic://wurzn.hagezi.org&name=wurzn.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://wurzn.hagezi.org&name=wurzn.hagezi.org)                       |

#### Finland, Helsinki

| Протокол       | Адрес                                |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://juuri.hagezi.org/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://juuri.hagezi.org/dns-query&name=juuri.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://juuri.hagezi.org/dns-query&name=juuri.hagezi.org) |
| DNS-over-TLS   | `tls://juuri.hagezi.org`             | [Add to AdGuard](adguard:add_dns_server?address=tls://juuri.hagezi.org&name=juuri.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://juuri.hagezi.org&name=juuri.hagezi.org)                         |
| DNS-over-QUIC  | `quic://juuri.hagezi.org`            | [Add to AdGuard](adguard:add_dns_server?address=quic://juuri.hagezi.org&name=juuri.hagezi.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://juuri.hagezi.org&name=juuri.hagezi.org)                       |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, no filtering, no logging.

| Протокол             | Адрес                                                                   |                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Add to AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Hostname: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Add to AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Add to AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`          | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgK374BJKvK0aJHWKjmXdkG8_X2KEoao_LALK_nK6PM_AYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                           |

### Marbled Fennec

Marbled Fennec Networks is hosting DNS resolvers that are capable of resolving both OpenNIC and ICANN domains

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### NWPS.fi DNS

[NWPS.fi DNS](https://nwps.fi) provides DoH & DoT resolvers with two levels of filtering.

#### Стандартный

Blocks ads, trackers, and malware.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.ns.nwps.fi/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://public.ns.nwps.fi/dns-query&name=public.ns.nwps.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://public.ns.nwps.fi/dns-query&name=public.ns.nwps.fi) |
| DNS-over-TLS   | `tls://public.ns.nwps.fi`             | [Add to AdGuard](adguard:add_dns_server?address=tls://public.ns.nwps.fi&name=public.ns.nwps.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.ns.nwps.fi&name=public.ns.nwps.fi)                         |

#### Kids

Kid-friendly filter that also blocks ads, trackers, and malware.

| Протокол       | Адрес                               |                                                                                                                                                                                                                         |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kids.ns.nwps.fi/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://kids.ns.nwps.fi/dns-query&name=kids.ns.nwps.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://kids.ns.nwps.fi/dns-query&name=kids.ns.nwps.fi) |
| DNS-over-TLS   | `tls://kids.ns.nwps.fi`             | [Add to AdGuard](adguard:add_dns_server?address=tls://kids.ns.nwps.fi&name=kids.ns.nwps.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://kids.ns.nwps.fi&name=kids.ns.nwps.fi)                         |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) is a small Ad-Blocking DNS hobby project.

#### OSZX DNS

This service is a small ad blocking DNS hobby project with D-o-H, D-o-T & DNSCrypt v2 support.

| Протокол       | Адрес                                                                    |                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                           | [Add to AdGuard](adguard:add_dns_server?address=51.38.83.141&name=OSZX%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=OSZX%20DNS)                                     |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                | [Add to AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=OSZX%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=OSZX%20DNS)               |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                           |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                            |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                          | [Add to AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

These servers provide no ad blocking, keep no logs, and have DNSSEC enabled.

| Протокол       | Адрес                                                                         |                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                | [Add to AdGuard](adguard:add_dns_server?address=51.38.82.198&name=PumpleX), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=PumpleX)                                                           |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                    | [Add to AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=PumpleX), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=PumpleX)                                   |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Добавить в AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                     |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                     |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                           | [Add to AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                       | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blocks over 140K ads, ad-tracking, malware, and phishing domains. No logging, no ECS, DNSSEC validation, free!

#### Singapore DNS Server

| Протокол       | Адрес                                                                      |                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                           | [Add to AdGuard](adguard:add_dns_server?address=174.138.21.128&name=Privacy-First%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=Privacy-First%20DNS)                           |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                | [Add to AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=Privacy-First%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=Privacy-First%20DNS)     |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                    |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                   |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party)                | [Add to AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                           | [Add to AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                      | [Add to AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                       | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| Протокол       | Адрес                                                                          |                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                | [Add to AdGuard](adguard:add_dns_server?address=172.104.93.80&name=Privacy-First%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=Privacy-First%20DNS)                                   |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                               | [Add to AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=Privacy-First%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=Privacy-First%20DNS) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                      |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                             |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                              | [Add to AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org)           |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                | [Add to AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)                   |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                            | [Add to AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                           |

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy-focused DNS service provided by Sebastian Schmidt. No logging, DNSSEC validation.

#### DNS Server 1

| Протокол       | Адрес                                                      |                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [Add to AdGuard](adguard:add_dns_server?address=45.76.113.31&name=Seby%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=Seby%20DNS)                         |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Добавить в AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.seby.io&name=tls://dot.seby.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.seby.io&name=tls://dot.seby.io) |

### uBlock DNS

uBlock DNS is an ad-blocking DNS service. It is free, open-source, and customizable. It includes an online dashboard that does not require an email address or password to access. uBlock DNS is not affiliated with uBlock Origin.

uBlock DNS does not provide public DNS addresses. To use it, you need to generate a personal account key and configure your own endpoint.

Example (without dashboard access):

`DoH: https://example.ublock.dns/`

> This is an example endpoint. To use uBlock DNS with full functionality, you need to create your own account key.
