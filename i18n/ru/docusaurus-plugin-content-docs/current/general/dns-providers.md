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

These servers block ads, tracking, and phishing.

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

### Ali DNS

[Ali DNS](https://alidns.com/) — это бесплатный рекурсивный DNS-сервис, который стремится обеспечить быстрое, стабильное и безопасное DNS-разрешение для большинства пользователей интернета. Он защищает пользователей от различных атак и угроз.

| Протокол       | Адрес                                |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` и `223.6.6.6`            | [Добавить в AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` и `2400:3200:baba::1` | [Добавить в AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`          | [Добавить в AdGuard](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)       |

### BebasDNS от BebasID

[BebasDNS](https://github.com/bebasid/bebasdns) — это бесплатный и нейтральный публичный резолвер, который расположен в Индонезии и поддерживает домен OpenNIC. Создан Komunitas Internet Netral Indonesia (KINI), чтобы предоставить индонезийским пользователям бесплатное подключение к интернету.

#### Стандартный

Это вариант BebasDNS по умолчанию. Он блокирует рекламу, вредоносное ПО и фишинговые домены.

| Протокол       | Адрес                                                                 |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                           | [Добавить в AdGuard](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                                       |

#### Нефильтрующий

Этот сервер ничего не фильтрует.

| Протокол       | Адрес                                  |                                                                                                                                                                                                                                                         |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                       |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [Добавить в AdGuard](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### Безопасность

Это сервер BebasDNS, защищающий от вирусов и других угроз. Он блокирует только вредоносное ПО и фишинговые домены.

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [Добавить в AdGuard](adguard:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                     |

#### Семейный

Это семейный вариант BebasDNS. Он блокирует сайты с порнографическим содержанием, азартными играми и информацией, разжигающей ненависть, а также вредоносное ПО и фишинговые домены.

| Протокол       | Адрес                                                                          |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                          | [Add to AdGuard](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                             |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                                 |

#### Family With Ad Filtering

This is the family variant of BebasDNS but with adblocker

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [Add to AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [Add to AdGuard](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD Filter

This is a custom BebasDNS variant with only OISD Big filter

| Протокол       | Адрес                              |                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [Add to AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [Add to AdGuard](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal Filter

This is a custom BebasDNS variant with only Hagezi Multi Normal filter

| Протокол       | Адрес                                |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [Add to AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [Add to AdGuard](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### 0ms DNS

[DNS](https://0ms.dev/) is a global DNS resolution service provided by 0ms Group as an alternative to your current DNS provider.

It uses [OISD Big](https://oisd.nl/) as the basic filter to give everyone a more secure environment. It is designed with various optimizations, such as HTTP/3, caching, and more. It leverages machine learning to protect users from potential security threats while also optimizing itself over time.

| Протокол       | Адрес                       |                                                                                                                                                                                                 |
| -------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://0ms.dev/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev) |

### CFIEC Public DNS

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It supports DNS64 to provide domain name resolution only for IPv6 users.

| Протокол       | Адрес                             |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` and `240C::6644`     | [Add to AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) is a service which extends the DNS by incorporating features such as content filtering and phishing protection with a zero downtime.

#### Стандартный

DNS servers with custom filtering that protects your device from malware.

| Протокол       | Адрес                                                                |                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`                                | [Добавить в AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` и `2620:119:53::53`                                | [Добавить в AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `208.67.220.220`  | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                 |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `[2620:0:ccc::2]` | [Добавить в AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                                |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |
| DNS-over-TLS   | `tls://dns.opendns.com`                                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

Серверы OpenDNS с блокировкой контента для взрослых.

| Протокол       | Адрес                                                         |                                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` и `208.67.220.123`                           | [Добавить в AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

Серверы OpenDNS без фильтрации.

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.2` и `208.67.220.2`             | [Добавить в AdGuard](adguard:add_dns_server?address=208.67.220.2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.2&name=)                                                                                                         |
| DNS, IPv6      | `2620:0:ccc::2` IP: `2620:0:ccd::2`         | [Добавить в AdGuard](adguard:add_dns_server?address=2620:0:ccc::2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=)                                                                                                       |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com/dns-query&name=sandbox.opendns.com)                               |

:::info

Серверы OpenDNS удаляют секции AUTHORITY из определённых ответов, включая ответы с NODATA, что делает невозможным кеширование таких ответов.

:::

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) — это DNS-сервис с настраиваемой фильтрацией. Этот сервис позволяет пользоваться интернетом безопасно и без нежелательного контента.

#### Семейный фильтр

Блокирует доступ к контенту для взрослых, прокси и VPN-доменам, а также к сайтам со смешанным содержимым.

| Протокол       | Адрес                                                           |                                                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` и `185.228.169.168`                           | [Добавить в AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` и `2a0d:2a00:2::`                               | [Добавить в AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.168:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`              | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`                     | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Фильтр контента для взрослых

Менее ограничивающий, чем Семейный фильтр: блокирует доступ только к контенту для взрослых, вредоносным и фишинговым доменам.

| Протокол       | Адрес                                                     |                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` и `185.228.169.11`                       | [Добавить в AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                 |
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`                     | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                    |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                 |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`         | [Add to AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                | [Add to AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Security Filter

Blocks phishing, spam and malicious domains.

| Протокол       | Адрес                                                |                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                  | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`                | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Add to AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) is a free and fast DNS service which functions as a recursive name server providing domain name resolution for any host on the Internet.

#### Стандартный

| Протокол             | Адрес                                             |                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` and `1.0.0.1`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` and `2606:4700:4700::1001` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`            | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`            | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                           | [Add to AdGuard](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Malware blocking only

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` and `2606:4700:4700::1002` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`   | [Add to AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`               | [Add to AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Malware and adult content blocking

| Протокол             | Адрес                                             |                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` and `1.0.0.3`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` and `2606:4700:4700::1003` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                 |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) — это DNS-сервис, который обрабатывает DNS-запросы через всемирную сеть DNS-серверов. Удаляет рекламу и защищает от фишинговых и шпионских программ.

| Протокол       | Адрес                                                                  |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` и `8.20.247.20`                                           | [Добавить в AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Добавить в AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### ControlD

[ControlD](https://controld.com/free-dns) — настраиваемый DNS-сервис с возможностями прокси-сервера. Это означает, что он не только блокирует рекламу, порно и прочее, но может и разблокировать веб-сайты и сервисы.

#### Нефильтрующий

| Протокол       | Адрес                             |                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` и `76.76.10.0`        | [Добавить в AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` и `2606:1a40:1::`   | [Добавить в AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Добавить в AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Добавить в AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Блокировка вредоносного ПО

| Протокол       | Адрес                             |                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Добавить в AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Добавить в AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

#### Блокировка вредоносного ПО и рекламы

| Протокол       | Адрес                             |                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Добавить в AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Добавить в AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

#### Блокировка вредоносного ПО, рекламы и кнопок социальных сетей

| Протокол       | Адрес                             |                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Добавить в AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Добавить в AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Добавить в AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) — это DNS-сервис, позволяющий блокировать всё, что вы пожелаете. Он по умолчанию защищает от рекламы, трекеров, вредоносных программ, фишинга, вредоносных сайтов и многого другого.

| Протокол       | Адрес                                                                          |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                   |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

A collaborative open project to promote, implement, and deploy [DNS Privacy](https://dnsprivacy.org/).

#### DNS servers run by the [Stubby developers](https://getdnsapi.net/)

| Протокол     | Адрес                                                                                                                         |                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [Add to AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15`  | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

#### Other DNS servers with no-logging policy

| Протокол           | Адрес                                                                                                                |                                                                                                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Provider: `UncensoredDNS` Hostname: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` and IPv6: `2a01:3a0:53:53::0` | [Add to AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Provider: `UncensoredDNS` Hostname: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` and IPv6: `2001:67c:28a4::` | [Add to AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Provider: `dkg` Hostname: `tls://dns.cmrg.net`  IP: `199.58.81.218` and IPv6: `2001:470:1c:76d::53`                  | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Hostname: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` and IPv6: `2001:8b0:24:24::24`                        | [Add to AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Hostname: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` and IPv6: `2a01:4f8:c0c:3c03::2`                            | [Add to AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Hostname: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` and IPv6: `2a01:4f8:c0c:3bfc::2`                            | [Add to AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Hostname: `tls://dns.neutopia.org` IP: `89.234.186.112` and IPv6: `2a00:5884:8209::2`                                | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Provider: `Go6Lab` Hostname: `tls://privacydns.go6lab.si` and IPv6: `2001:67c:27e4::35`                              | [Add to AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

#### DNS servers with minimal logging/restrictions

These servers use some logging, self-signed certs or no support for strict mode.

| Протокол     | Адрес                                                                                                             |                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Provider: `NIC Chile` Hostname: `dnsotls.lab.nic.cl` IP: `200.1.123.46` and IPv6: `2001:1398:1:0:200:1:123:46`    | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Provider: `OARC` Hostname: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` and IPv6: `2620:ff:c000:0:1::64:25` | [Add to AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/) provides free DNS service without logging and with DNSSEC enabled.

| Протокол       | Адрес                               |                                                                                                                                                                                                     |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` and `45.11.45.11` | [Add to AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` and `2a11::`               | [Add to AdGuard](adguard:add_dns_server?address=2a09::&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`      | [Add to AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) — это DNS-провайдер, защищающий конфиденциальность, с многолетним опытом развития DNS-сервисов. Его цель — обеспечить пользователей быстрым, точным и стабильным рекурсивным сервисом разрешения имён.

| Протокол       | Адрес                           |                                                                                                                                                                                                 |
| -------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` и `119.28.28.28` | [Добавить в AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`     | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo) — это DNS-сервис WatchGuard, который предотвращает взаимодействие с вредоносным контентом.

| Протокол  | Адрес                            |                                                                                                                                                           |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` и `52.3.100.184` | [Добавить в AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) — это бесплатный альтернативный DNS-сервис от Dyn.

| Протокол  | Адрес                             |                                                                                                                                                           |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` и `216.146.36.36` | [Добавить в AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) — это бесплатный анонимный DNS-резолвер Freenom World.

| Протокол  | Адрес                         |                                                                                                                                                       |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` и `80.80.81.81` | [Добавить в AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) — бесплатный глобальный DNS-сервис, который можно использовать в качестве альтернативы текущему DNS-провайдеру.

| Протокол       | Адрес                                           |                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` и `8.8.4.4`                           | [Добавить в AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` и `2001:4860:4860::8844` | [Добавить в AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor — это бесплатный альтернативный DNS-сервис от Hurricane Electric с anycast.

| Протокол       | Адрес                            |                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [Добавить в AdGuard](adguard:add_dns_server?address=74.82.42.42&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=74.82.42.42&name=)                                                               |
| DNS, IPv6      | `2001:470:20::2`                 | [Добавить в AdGuard](adguard:add_dns_server?address=2001:470:20::2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:470:20::2&name=)                                                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) provides publicly accessible DNS with QNAME minimization, endpoints located in Germany, Singapore, Sweden, United Kingdom and United States (Dallas & New York).

#### Нефильтрующий

| Протокол       | Адрес                               |                                                                                                                                                                                                               |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### Блокировка рекламы

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### Ad + malware blocking

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### Ad + malware + social media blocking

| Протокол       | Адрес                                        |                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### Ad + malware + adult + gambling blocking

| Протокол       | Адрес                                      |                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### Ad + malware + adult + gambling + social media blocking

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| Протокол       | Адрес                                                       |                                                                                                                                                       |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` and `180.131.145.145`                     | [Add to AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)         |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` and `156.154.71.1`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` and `2610:a1:1019::1` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Reliability & Performance 2

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (non-existent domain) responses to landing pages.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` and `156.154.71.5`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` and `2610:a1:1019::5` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` and `156.154.71.2`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` and `2610:a1:1019::2` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Family Secure

These servers provide adult content blocking and also include "Reliability & Performance" + "Threat Protection" features.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` and `156.154.71.3`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` and `2610:a1:1019::3` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` and `156.154.71.4`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` and `2610:a1:1019::4` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) provides publicly accessible non-filtering resolvers without logging in addition to its freemium configurable filtering resolvers with optional logging.

#### Ultra-low latency

| Протокол       | Адрес                    |                                                                                                                                                                                                                     |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Протокол       | Адрес                            |                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Add to AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                 |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS resolvers with blocking: advertising, tracking, adware, malware, malicious activities and phishing companies, blocks ~1M domains. 24-часовые/48-часовые логи для предотвращения DDoS- или Flood-атак.

#### Adaptive Filtering (ADA)

Рекомендуется для большинства пользователей, очень гибкая фильтрация с блокировкой большинства рекламных сетей, отслеживания рекламы, вредоносных и фишинговых доменов.

| Протокол       | Адрес                               |                                                                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

More strictly filtering policies with blocking — ads, marketing, tracking, malware, clickbait, coinhive and phishing domains.

| Протокол       | Адрес                               |                                                                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

#### dns0.eu

[dns0.eu](https://www.dns0.eu) is a free, sovereign and GDPR-compliant recursive DNS resolver with a strong focus on security to protect the citizens and organizations of the European Union.

| Протокол       | Адрес                          |                                                                                                                                                                            |
| -------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.110.81.0` и `185.253.5.0` | [Добавить в AdGuard](adguard:add_dns_server?address=193.110.81.0&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`        | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`           | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`          | [Добавить в AdGuard](adguard:add_dns_server?address=quic://zero.dns0.eu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) — это бесплатная рекурсивная anycast DNS-платформа, которая обеспечивает высокую производительность, конфиденциальность и защиту от фишинга и шпионских программ. Серверы Quad9 не предоставляют компонент цензуры.

#### Стандартный

Обычные DNS-серверы, которые защищают от фишинга и шпионских программ. Они включают списки блокировки, валидацию DNSSEC и другие функции безопасности.

| Протокол       | Адрес                                                                 |                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` и `149.112.112.112`                                         | [Добавить в AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP-адрес: `2620:fe::fe:9`                               | [Добавить в AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.9:8443`       | [Добавить в AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                                     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Незащищённый

Unsecured DNS servers don't provide security blocklists, DNSSEC, or EDNS Client Subnet.

| Протокол       | Адрес                                                                    |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` и `149.112.112.10`                                            | [Добавить в AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP-адрес: `2620:fe::fe:10`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.10:8443`         | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe:10]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                      | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client Subnet is a method that includes components of end-user IP address data in requests that are sent to authoritative DNS servers. It provides security blocklist, DNSSEC, EDNS Client Subnet.

| Протокол       | Адрес                                                          |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` and `149.112.112.11`                                | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                             | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                             |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                            | [Add to AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                        | [Add to AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker and DNS-over-TLS service running as Fly.io Worker with configurable blocklists.

#### Нефильтрующий

| Протокол       | Адрес                           |                                                                                                                                                                                                                           |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Add to AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Add to AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Протокол  | Адрес                             |                                                                                                                                                 |
| --------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` and `195.46.39.40` | [Add to AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) is a DNS service that blocks 50+ categories like porn, ads, malware, and popular social media sites making web surfing safer.

| Протокол       | Адрес                                                             |                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`                            | [Add to AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### 360 Secure DNS

**360 Secure DNS** is a industry-leading recursive DNS service with advanced network security threat protection.

| Протокол       | Адрес                              |                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` and `218.30.118.6`   | [Add to AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` and `140.207.198.6` | [Add to AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: they neither sell public DNS data to third parties nor redirect users' queries to serve them ads.

| Протокол  | Адрес                                   |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` and `64.6.65.6`             | [Add to AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` and `2620:74:1c::2:2` | [Add to AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) — это кеширующая, рекурсивная, публичная служба DoH и DoT-резолвер, которая работает и управляется командой Site Reliability Engineering (Traffic) Фонда Викимедиа во всех шести центрах обработки данных Викимедиа с использованием anycast.

| Протокол       | Адрес                                                                                    |                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                                    | [Добавить в AdGuard](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Имя хоста: `tls://wikimedia-dns.org` IP-адрес: `185.71.31.48` и IPv6: `2101:930:0:ff::2` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [Добавить в AdGuard VPN](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Региональные резолверы**

Regional DNS resolvers are typically focused on specific geographic regions, offering optimized performance for users in those areas. Этими резолверами часто управляют некоммерческие организации, местные интернет-провайдеры или другие организации.

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operates DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern protocols.

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS — это бесплатный альтернативный DNS-сервис ByteDance в Китае. Единственный DNS, предоставляемый ByteDance, который поддерживает IPV4. DOH, DOT, DOQ, and other encrypted DNS services will be launched soon.

| Протокол  | Адрес                         |                                                                                                                                                       |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` и `180.184.2.2` | [Добавить в AdGuard](adguard:add_dns_server?address=180.184.1.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) защищает от кражи личных и финансовых данных. Помогает справиться с вирусами, программами-вымогателями и другими вредоносными программами.

#### Приватный

В «Приватном» режиме — только разрешение DNS.

| Протокол               | Адрес                                                                                                    |                                                                                                                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` и `149.112.122.10`                                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` и `2620:10A:80BC::10`                                                                | [Добавить в AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — Private | Имя хоста: `tls://private.canadianshield.cira.ca` IP-адрес: `149.112.121.10` и IPv6: `2620:10A:80BB::10` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Защищённый

В «Защищённом» режиме — защита от вредоносного ПО и фишинга.

| Протокол                 | Адрес                                                                                                      |                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` и `149.112.122.20`                                                                        | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` и `2620:10A:80BC::20`                                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — Protected | Имя хоста: `tls://protected.canadianshield.cira.ca` IP-адрес: `149.112.121.20` и IPv6: `2620:10A:80BB::20` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Семейный

В «Семейном» режиме — то же, что в «Защищённом» режиме + блокировка контента для взрослых.

| Протокол              | Адрес                                                                                              |                                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` и `149.112.122.30`                                                                | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                     |
| DNS, IPv6             | `2620:10A:80BB::30` и `2620:10A:80BC::30`                                                          | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — Family | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` and IPv6: `2620:10A:80BB::30` | [Add to AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) is a fast and secure DNS service with protection against ads, tracking, and phishing.

| Протокол       | Адрес                            |                                                                                                                                                                                                                               |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.controld.com/comss` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com)           |
| DNS-over-TLS   | `tls://comss.dns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com)   |
| DNS-over-QUIC  | `quic://comss.dns.controld.com`  | [Add to AdGuard](adguard:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| Протокол       | Адрес                                       |                                                                                                                                                                                             |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` and `185.43.135.1`            | [Add to AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` and `2001:148f:fffe::1` | [Add to AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
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

| Протокол       | Адрес                                                      |                                                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [Add to AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                           | [Add to AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`                        | [Add to AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` and `2a01:4f8:1c17:4df8::1`        | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Provider: `dnsforfamily.com` IP: `94.130.180.225`          | [Добавить в AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                            |
| DNSCrypt, IPv6 | Provider: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servers provided by [Restena Foundation](https://www.restena.lu/).

| Протокол       | Адрес                                                                               |                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` and IPv6: `2001:a18:1::29` | [Добавить в AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` и IPv6: `2001:a18:1::29` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)|

### 114DNS

[114DNS](https://www.114dns.com) — это профессиональный и надёжный DNS-сервис.

#### Нормальный

Block ads and annoying websites.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` и `114.114.115.115` | [Добавить в AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Безопасный

Блокирует фишинговые, вредоносные и другие небезопасные сайты.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` и `114.114.115.119` | [Добавить в AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Семейный

Эти серверы блокируют сайты для взрослых и неприемлемое содержимое.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` и `114.114.115.110` | [Добавить в AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) — это публичный DNS-сервис, управляемый компанией Internet Initiative Japan. Также он блокирует контент с жестоким обращением с детьми.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) — это бесплатный рекурсивный DNS-сервис, который блокирует рекламу, трекеры и вредоносное ПО. Он поддерживает DNSSEC и не хранит логи.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `35.215.30.118` и `35.215.48.207`     | [Добавить в AdGuard](adguard:add_dns_server?address=35.215.30.118&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=35.215.30.118&name=dns.jupitrdns.com)                                             |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                                 |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                               |

### LibreDNS

[LibreDNS](https://libredns.gr/) — это публичный зашифрованный DNS-сервис, управляемый [LibreOps](https://libreops.cc/).

| Протокол       | Адрес                                              |                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                                    | [Добавить в AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`                | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                      | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP-адрес: `116.202.176.26` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/) — это безопасный, быстрый, бесплатный нишевый DNS-сервис, блокирующий вредоносные домены.

#### Pure Edition

| Протокол  | Адрес                          |                                                                                                                                                         |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` и `52.80.52.52` | [Добавить в AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Протокол  | Адрес                          |                                                                                                                                                         |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` и `52.80.66.66` | [Добавить в AdGuard](adguard:add_dns_server?address=117.50.11.11&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) — это бесплатный альтернативный DNS-сервис OpenNIC Project.

| Протокол  | Адрес                   |                                                                                                                                                                   |
| --------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [Добавить в AdGuard](adguard:add_dns_server?address=217.160.70.42&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=217.160.70.42&name=)         |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [Add to AdGuard](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

This is just one of the available servers, the full list can be found [here](https://servers.opennic.org/).

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center).

| Протокол       | Адрес                                   |                                                                                                                                                                                                             |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104` | [Add to AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`     | [Add to AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`        | [Add to AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions for content filtering and internet security.

| Протокол  | Адрес            |                                                                                                                                                     |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Add to AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) is a Swiss public DNS service provided by [switch.ch](https://www.switch.ch/).

| Протокол       | Адрес                                                                            |                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Provider: `dns.switch.ch` IP: `130.59.31.248`                                    | [Add to AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Provider: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Add to AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Add to AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` and IPv6: `2001:620:0:ff::2` | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) is a free recursive DNS service. Yandex.DNS' servers are located in Russia, CIS countries, and Western Europe. Users' requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In "Basic" mode, there is no traffic filtering.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                       | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Безопасный

In "Safe" mode, protection from infected and fraudulent sites is provided.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                      | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`       | [Add to AdGuard](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                   | [Add to AdGuard](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Семейный

In "Family" mode, protection from infected, fraudulent and adult sites is provided.

| Протокол       | Адрес                                             |                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                       | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Small personal resolvers**

These are DNS resolvers usually run by enthusiasts or small groups. While they may lack the scale and redundancy of larger providers, they often prioritize privacy, transparency, or offer specialized features.

We won't be able to proper monitor their availability. **Use them at your own risk.**

### AhaDNS

[AhaDNS](https://ahadns.com/) A zero-logging and ad-blocking DNS service provided by Fredrik Pettersson.

#### Netherlands

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Добавить в AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Добавить в AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Лос-Анджелес

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Добавить в AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Добавить в AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### Arapurayil

[Arapurayil](https://dns.arapurayil.com) — это персональный DNS-сервис, расположенный в Мумбаи, Индия.

Без логирования | Фильтрует рекламу, трекеры, фишинг и т. д. | DNSSEC | Минимизация QNAME | Нет EDNS Client Subnet.

| Протокол       | Адрес                                                              |                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Хост: `2.dnscrypt-cert.dns.arapurayil.com` IP-адрес: `3.7.156.128` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                 |
| DNS-over-HTTPS | Хост: `https://dns.arapurayil.com/dns-query`                       | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) — это сервер, работающий из дроплета Digital Ocean в регионе BLR1. Поддерживается Abhay Rana, или Nemo.

| Протокол       | Адрес                                                                   |                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.captnemo.in` IP-адрес: `139.59.48.222:4434` | [Добавить в AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### Официальный DNS-сервер Dandelion Sprout

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) — это персональный DNS-сервер, использующий инфраструктуру AdGuard Home. Расположен в Тронхейме, Норвегия.

Блокирует больше рекламы и вредоносного ПО, чем AdGuard DNS, благодаря более продвинутому синтаксису, также блокирует ультраправые таблоиды и большинство имиджбордов, частично блокирует трекинг. Логирование используется, чтобы улучшить используемые им фильтры (например, для разблокирования сайтов, которые не должны были блокироваться) и определить наиболее удачное время для системного обновления сервера.

| Протокол       | Адрес                                                 |                                                                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Добавить в AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Варьируется; см. ссылку выше.                         |                                                                                                                                                                                                                                                                                                         |
| DNS, IPv6      | Варьируется; см. ссылку выше.                         |                                                                                                                                                                                                                                                                                                         |
| DNSCrypt, IPv4 | Варьируется; см. ссылку выше.                         |                                                                                                                                                                                                                                                                                                         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) — это резервный DNS-резолвер с блокировщиком рекламы без логирования от провайдера [adminforge](https://adminforge.de/).

| Протокол       | Адрес                                               |                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` и `176.9.1.117`                      | [Добавить в AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` и `2a01:4f8:141:316d::117` | [Добавить в AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### dnswarden

| Протокол       | Адрес                                  |                                                                                                                                                                                                                                              |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [Add to AdGuard](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

You can also [configure custom DNS server](https://dnswarden.com/customfilter.html) to block ads or filter adult content.

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München.

| Протокол             | Адрес                                                                  |                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                        | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                            | [Add to AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Добавить в AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                   |
| DNSCrypt, IPv6       | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                    |

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver.

| Протокол       | Адрес                                                                |                                                                                                                                                           |
| -------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, no filtering, no logging.

| Протокол             | Адрес                                                                   |                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Add to AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Hostname: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Add to AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Add to AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`          | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                           |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) is run by Elias Ojala, Finland.

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Add to AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) is a small Ad-Blocking DNS hobby project.

#### OSZX DNS

This service ia a small ad blocking DNS hobby project with D-o-H, D-o-T & DNSCrypt v2 support.

| Протокол       | Адрес                                                                    |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                           | [Add to AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                                 |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                | [Add to AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                           |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                   |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                    |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

Эти серверы с DNSSEC не блокируют рекламу и не сохраняют логи.

| Протокол       | Адрес                                                                                |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                           | [Добавить в AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.pumplex.com` IP-адрес: `51.38.82.198:5353`               | [Добавить в AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                             |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.pumplex.com` IP-адрес: `[2001:41d0:801:2000::1b28]:5353` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                             |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) блокирует больше 140 тысяч рекламных, трекинговых, вредоносных и фишинговых доменов. Без логирования и ECS, с валидацией DNSSEC, бесплатный!

#### Сингапурский DNS-сервер

| Протокол       | Адрес                                                                             | Локация                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.tiar.app` IP-адрес: `174.138.21.128`              | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                            |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.dns.tiar.app` IP-адрес: `[2400:6180:0:d0::5f6e:4001]` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                           |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (кешируется сторонним сервисом)                | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                             | [Добавить в AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Японский DNS-сервер

| Протокол       | Адрес                                                                           |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                | [Добавить в AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                    |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                           |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                               | [Добавить в AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS Server 1

| Протокол       | Адрес                                                      |                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [Add to AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Добавить в AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                            |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [Add to AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) is a personal DNS Server located in Vietnam and intended for personal and small-scale use. It features ad blocking, malware/phishing protection, adult content filter, and DNSSEC validation.

| Протокол       | Адрес                                      |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.178.234.160`                          | [Add to AdGuard](adguard:add_dns_server?address=103.178.234.160&name=BlacMagiccDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=103.178.234.160&name=BlacMagiccDNS)                                                   |
| DNS, IPv6      | `2405:19c0:2:ea2e::1`                      | [Add to AdGuard](adguard:add_dns_server?address=2405:19c0:2:ea2e::1&name=BlacMagiccDNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2405:19c0:2:ea2e::1&name=BlacMagiccDNS)                                           |
| DNS-over-HTTPS | `https://robin.techomespace.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://robin.techomespace.com/dns-query&name=BlacMagiccDoH), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://robin.techomespace.com/dns-query&name=BlacMagiccDoH) |
| DNS-over-TLS   | `tls://robin.techomespace.com:853`         | [Add to AdGuard](adguard:add_dns_server?address=tls://robin.techomespace.com:853&name=BlacMagiccDoT), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://robin.techomespace.com:853&name=BlacMagiccDoT)                 |
