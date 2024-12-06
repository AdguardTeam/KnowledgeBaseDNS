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

| Протокол       | Адрес                                                                           |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                           | [Добавить в AdGuard](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                                 |

#### Семейный с фильтрацией рекламы

Это семейный вариант BebasDNS, но с блокировщиком рекламы

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [Добавить в AdGuard](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD Filter

Это пользовательский вариант BebasDNS с фильтром OISD Big

| Протокол       | Адрес                              |                                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [Добавить в AdGuard](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal Filter

Это пользовательский вариант BebasDNS с фильтром Hagezi Multi Normal

| Протокол       | Адрес                                |                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [Добавить в AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [Добавить в AdGuard](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### 0ms DNS

[DNS](https://0ms.dev/) — бесплатный глобальный DNS-сервис 0ms Group, который можно использовать в качестве альтернативы текущему DNS-провайдеру.

Он использует [OISD Big](https://oisd.nl/) в качестве основного фильтра, чтобы сделать интернет безопаснее. Он разработан с различными оптимизациями, такими как HTTP/3, кеширование и многое другое. Он использует машинное обучение для защиты пользователей от потенциальных угроз безопасности, а также оптимизирует свою работу с течением времени.

| Протокол       | Адрес                       |                                                                                                                                                                                                         |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://0ms.dev/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev) |

### CFIEC Public DNS

Основанный на IPv6 DNS-сервис с мощным потенциалом в области безопасности, защитой от шпионских программ и вредоносных сайтов. Поддерживает DNS64, чтобы обеспечить разрешение доменных имён только для пользователей IPv6.

| Протокол       | Адрес                             |                                                                                                                                                                                                                         |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` и `240C::6644`       | [Добавить в AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) — сервис, который расширяет возможности DNS за счёт включения таких функций, как фильтрация контента и защита от фишинга с нулевым временем простоя.

#### Стандартный

DNS-серверы с фильтрацией, защищающей ваше устройство от вредоносного ПО.

| Протокол       | Адрес                                                                |                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` и `208.67.220.220`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
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

| Протокол       | Адрес                                                            |                                                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` и `185.228.169.11`                              | [Добавить в AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` и `2a0d:2a00:2::1`                              | [Добавить в AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.10:8443`   | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                            |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::1]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                         |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`                | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Фильтр безопасности

Блокирует фишинговые, вредоносные и спам-сайты.

| Протокол       | Адрес                                                |                                                                                                                                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` и `185.228.169.9`                    | [Добавить в AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` и `2a0d:2a00:2::2`                  | [Добавить в AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Добавить в AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) — это бесплатный и быстрый DNS-сервис, который функционирует как рекурсивный сервер, ищущий доменные имена для любого хоста в интернете.

#### Стандартный

| Протокол             | Адрес                                           |                                                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` и `1.0.0.1`                           | [Добавить в AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` и `2606:4700:4700::1001` | [Добавить в AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                         | [Добавить в AdGuard](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Блокировка вредоносных сайтов

| Протокол       | Адрес                                           |                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` и `1.0.0.2`                           | [Добавить в AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` и `2606:4700:4700::1002` | [Добавить в AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Блокировка вредоносных и «взрослых» сайтов

| Протокол             | Адрес                                           |                                                                                                                                                                                                                                                                         |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` и `1.0.0.3`                           | [Добавить в AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` и `2606:4700:4700::1003` | [Добавить в AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

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

Открытый проект-коллаборация для продвижения, реализации и внедрения [DNS Privacy](https://dnsprivacy.org/).

#### DNS-серверы, управляемые [Stubby developers](https://getdnsapi.net/)

| Протокол     | Адрес                                                                                                                               |                                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Имя хоста: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                                | [Добавить в AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
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
| DNS, IPv4      | `185.222.222.222` и `45.11.45.11` | [Добавить в AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` и `2a11::`               | [Добавить в AdGuard](adguard:add_dns_server?address=2a09::&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                    | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) — это защищающий конфиденциальность DNS-провайдер с многолетним опытом развития DNS-сервисов, который стремится обеспечить пользователей быстрым, точным и стабильным рекурсивным сервисом разрешения имён.

| Протокол       | Адрес                       |                                                                                                                                                                                                 |
| -------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`              | [Добавить в AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS, IPv6      | `2402:4e00::`               | [Добавить в AdGuard](adguard:add_dns_server?address=2402:4e00::&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2402:4e00::&name=)                                           |
| DNS-over-HTTPS | `https://dns.pub/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo) — это DNS-сервис WatchGuard, который предотвращает взаимодействие с вредоносным контентом.

| Протокол  | Адрес                            |                                                                                                                                                           |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` и `52.3.100.184` | [Добавить в AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### dns0.eu

[dns0.eu](https://www.dns0.eu) — это бесплатный, суверенный и соответствующий GDPR рекурсивный DNS-резолвер, уделяющий большое внимание безопасности для защиты граждан и организаций Европейского союза.

| Протокол       | Адрес                          |                                                                                                                                                                            |
| -------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.110.81.0` и `185.253.5.0` | [Добавить в AdGuard](adguard:add_dns_server?address=193.110.81.0&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`        | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`           | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`          | [Добавить в AdGuard](adguard:add_dns_server?address=quic://zero.dns0.eu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

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

[Nawala Childprotection DNS](http://nawala.id/) — это система интернет-фильтрации, которая защищает детей от нежелательного контента и материалов оскорбительного характера.

| Протокол       | Адрес                                                              |                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` и `180.131.145.145`                              | [Добавить в AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.nawala.id` IP-адрес: `180.131.144.144` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                 |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) — это бесплатный облачный рекурсивный DNS-сервис, который обеспечивает быстрый и надёжный доступ к сайтам и онлайн-приложениям со встроенной системой безопасности и анализа угроз.

#### Надёжность и производительность 1

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` и `156.154.71.1`       | [Добавить в AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` и `2610:a1:1019::1` | [Добавить в AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Надёжность и производительность 2

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий, а также предотвращают перенаправление ответов NXDomain (несуществующий домен) на лендинговые страницы.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` и `156.154.71.5`       | [Добавить в AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` и `2610:a1:1019::5` | [Добавить в AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Защита от угроз

Эти серверы защищают от вредоносных доменов и включают функции режима «Надёжность & Производительность».

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` и `156.154.71.2`       | [Добавить в AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` и `2610:a1:1019::2` | [Добавить в AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Семейный DNS

Эти серверы блокируют доступ к контенту для взрослых и включают функции режимов «Надёжность и производительность» + «Защита от угроз».

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` и `156.154.71.3`       | [Добавить в AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` и `2610:a1:1019::3` | [Добавить в AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### DNS для бизнеса

Эти серверы блокируют нежелательный и отвлекающий контент, а также включают в себя функции режимов «Надёжность и производительность», «Защита от угроз» и «Семейный DNS».

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` и `156.154.71.4`       | [Добавить в AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` и `2610:a1:1019::4` | [Добавить в AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

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

| Протокол       | Адрес                               |                                                                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

Более строгая политика фильтрации с блокировкой рекламных, маркетинговых, отслеживающих, кликбейтных, фишинговых, вредоносных и coinhive-доменов.

| Протокол       | Адрес                               |                                                                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

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

#### Unsecured

У незащищённых DNS-серверов нет списков блокировки, DNSSEC или EDNS Сlient Subnet.

| Протокол       | Адрес                                                                    |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` и `149.112.112.10`                                            | [Добавить в AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP-адрес: `2620:fe::fe:10`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.10:8443`         | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe:10]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                      | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [Поддержка ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client Subnet — это метод, который включает компоненты IP-адресов конечных пользователей в запросы, отправляемые на полномочные DNS-серверы. Он предоставляет список блокировки, DNSSEC и опцию EDNS Client Subnet.

| Протокол       | Адрес                                                           |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` и `149.112.112.11`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [Добавить в AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Quadrant Security

[Quadrant Security](https://www.quadrantsec.com/post/public-dns-resolver-with-tls-https-support) предлагает серверы DoH и DoT для широкой публики без логирования и фильтрации.

| Протокол       | Адрес                          |                                                                                                                                                                                                             |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.qis.io/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io) |
| DNS-over-TLS   | `tls://dns-tls.qis.io`         | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)         |

### Rabbit DNS

[Rabbit DNS](https://rabbitdns.org/) — это сервис DoH, ориентированный на конфиденциальность, который не собирает данные пользователей.

#### Нефильтрующий

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.rabbitdns.org/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org) |

#### Security-filtering

| Протокол       | Адрес                                      |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://security.rabbitdns.org/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org) |

#### Family-filtering

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.rabbitdns.org/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org) |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) предоставляет сервис DNS-over-HTTPS, работающий как Cloudflare Worker, и сервис DNS-over-TLS, работающий как Fly.io Worker с настраиваемыми списками блокировки.

#### Нефильтрующий

| Протокол       | Адрес                           |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Добавить в AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Добавить в AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) — это глобальная сеть, состоящая из серверов, расположенных по всему миру — в Северной и Южной Америке, Европе, Африке, Австралии и на Дальнем Востоке. Она быстро и надёжно обрабатывает DNS-запросы из любой точки мира.

| Протокол  | Адрес                           |                                                                                                                                                         |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` и `195.46.39.40` | [Добавить в AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Sade Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) — это DNS-сервис, который блокирует 50+ категорий, таких как порно, реклама, вредоносные программы и популярные сайты социальных сетей, делая интернет безопаснее.

| Протокол       | Адрес                                                                    |                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` и `104.197.28.121`                                     | [Добавить в AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.safesurfer.co.nz` IP-адрес: `104.197.28.121` | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)         |

### 360 Secure DNS

**360 Secure DNS** — это ведущий рекурсивный DNS-сервис с расширенной защитой данных в сети.

| Протокол       | Адрес                            |                                                                                                                                                                                                             |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` и `218.30.118.6`   | [Добавить в AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` и `140.207.198.6` | [Добавить в AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) — это бесплатный DNS-сервис, который предлагает большую стабильность и безопасность по сравнению с другими сервисами. Verisign заботится о конфиденциальности пользователей — он не продаёт публичные данные DNS третьим лицам и не перенаправляет запросы пользователей для показа им рекламы.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` и `64.6.65.6`             | [Добавить в AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` и `2620:74:1c::2:2` | [Добавить в AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) — это кеширующая, рекурсивная, публичная служба DoH и DoT-резолвер, которая работает и управляется командой Site Reliability Engineering (Traffic) Фонда Викимедиа во всех шести центрах обработки данных Викимедиа с использованием anycast.

| Протокол       | Адрес                                                                                    |                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                                    | [Добавить в AdGuard](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Имя хоста: `tls://wikimedia-dns.org` IP-адрес: `185.71.31.48` и IPv6: `2101:930:0:ff::2` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [Добавить в AdGuard VPN](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Региональные резолверы**

Региональные DNS-резолверы обычно ориентированы на определённые географические регионы и обеспечивают оптимизированную производительность для пользователей в них. Этими резолверами часто управляют некоммерческие организации, местные интернет-провайдеры или другие организации.

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) — это DNS-сервис, который защищает DNS-трафик и увеличивает разнообразие DNS-резолверов, предлагая современные протоколы.

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS — это бесплатный альтернативный DNS-сервис ByteDance в Китае. Единственный DNS, предоставляемый ByteDance, который поддерживает IPV4. Скоро будут запущены DOH, DOT, DOQ и другие сервисы зашифрованного DNS.

| Протокол  | Адрес                         |                                                                                                                                                       |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` и `180.184.2.2` | [Добавить в AdGuard](adguard:add_dns_server?address=180.184.1.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) защищает от кражи личных и финансовых данных. Помогает справиться с вирусами, программами-вымогателями и другими вредоносными программами.

#### Private

В «Приватном» режиме — только разрешение DNS.

| Протокол               | Адрес                                                                                                    |                                                                                                                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` и `149.112.122.10`                                                                      | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` и `2620:10A:80BC::10`                                                                | [Добавить в AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — частный | Имя хоста: `tls://private.canadianshield.cira.ca` IP-адрес: `149.112.121.10` и IPv6: `2620:10A:80BB::10` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

В «Защищённом» режиме — защита от вредоносного ПО и фишинга.

| Протокол                  | Адрес                                                                                                      |                                                                                                                                                                                                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                 | `149.112.121.20` и `149.112.122.20`                                                                        | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                 | `2620:10A:80BB::20` и `2620:10A:80BC::20`                                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS            | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — защищённый | Имя хоста: `tls://protected.canadianshield.cira.ca` IP-адрес: `149.112.121.20` и IPv6: `2620:10A:80BB::20` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Семейный

В «Семейном» режиме — то же, что в «Защищённом» режиме + блокировка контента для взрослых.

| Протокол                | Адрес                                                                                             |                                                                                                                                                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4               | `149.112.121.30` и `149.112.122.30`                                                               | [Добавить в AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6               | `2620:10A:80BB::30` и `2620:10A:80BC::30`                                                         | [Добавить в AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS          | `https://family.canadianshield.cira.ca/dns-query`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — семейный | Имя хоста: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` и IPv6: `2620:10A:80BB::30` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) — это быстрый и безопасный DNS сервис с защитой от рекламы, трекинга и фишинга.

| Протокол       | Адрес                            |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.controld.com/comss` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com)           |
| DNS-over-TLS   | `tls://comss.dns.controld.com`   | [Добавить в AdGuard](adguard:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com)   |
| DNS-over-QUIC  | `quic://comss.dns.controld.com`  | [Добавить в AdGuard](adguard:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR — это валидирующие резолверы Open DNSSEC. CZ.NIC не собирает личные данные и информацию на страницах, где устройства отправляют личные данные.

| Протокол       | Адрес                                     |                                                                                                                                                                                                     |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` и `185.43.135.1`            | [Добавить в AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` и `2001:148f:fffe::1` | [Добавить в AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                 | [Добавить в AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) — это публичный резолвер Digital Society. Расположен в Цюрихе, Швейцария.

| Протокол       | Адрес                                                                                        |                                                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` и IPv6: `2a05:fc84::42` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP-адрес: `185.95.218.43` и IPv6: `2a05:fc84::43`       | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) блокирует сайты с контентом для взрослых. Он позволяет детям и взрослым безопасно пользоваться интернетом, не беспокоясь о том, что вредоносные сайты отследят их действия.

| Протокол       | Адрес                                                             |                                                                                                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                      | [Добавить в AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` и `78.47.64.161`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` и `2a01:4f8:1c17:4df8::1`                 | [Добавить в AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Провайдер: `dnsforfamily.com` IP-адрес: `94.130.180.225`          | [Добавить в AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                    |
| DNSCrypt, IPv6 | Провайдер: `dnsforfamily.com` IP-адрес: `[2a01:4f8:1c0c:40db::1]` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                        |

### Fondation Restena DNS

[Серверы Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) предоставлены [Restena Foundation](https://www.restena.lu/).

| Протокол       | Адрес                                                                                   |                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP-адрес: `158.64.1.29` и IPv6: `2001:a18:1::29` | [Добавить в AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP-адрес: `158.64.1.29` и IPv6: `2001:a18:1::29`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)                         |

### 114DNS

[114DNS](https://www.114dns.com) — это профессиональный и надёжный DNS-сервис.

#### Normal

Блокирует рекламу и раздражающие сайты.

| Протокол  | Адрес                                 |                                                                                                                                                               |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` и `114.114.115.115` | [Добавить в AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Safe

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

[JupitrDNS](https://jupitrdns.com/) — это бесплатный рекурсивный DNS-сервис, ориентированный на безопасность и блокирующий вредоносное ПО. Он поддерживает DNSSEC и не хранит логи.

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `155.248.232.226`                     | [Добавить в AdGuard](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [Добавить в AdGuard](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

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

| Протокол  | Адрес                   |                                                                                                                                                                           |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [Добавить в AdGuard](adguard:add_dns_server?address=217.160.70.42&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=217.160.70.42&name=)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [Добавить в AdGuard](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

Это лишь один из доступных серверов, а вот [их полный список](https://servers.opennic.org/).

### Quad101

[Quad101](https://101.101.101.101) — это бесплатный альтернативный DNS-сервис без логирования от TWNIC (Taiwan Network Information Center).

| Протокол       | Адрес                                 |                                                                                                                                                                                                                     |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` и `101.102.103.104` | [Добавить в AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` и `2001:de4::102`     | [Добавить в AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`      | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### SkyDNS RU

Решения [SkyDNS](https://www.skydns.ru/en/) для фильтрации контента и безопасности в интернете.

| Протокол  | Адрес            |                                                                                                                                                             |
| --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Добавить в AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) — это швейцарская общедоступная служба DNS, предоставляемая [switch.ch](https://www.switch.ch/).

| Протокол       | Адрес                                                                                 |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Провайдер: `dns.switch.ch` IP-адрес: `130.59.31.248:`                                 | [Добавить в AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Провайдер: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                   | [Добавить в AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                     | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Имя хоста: `tls://dns.switch.ch` IP-адрес: `130.59.31.248` и IPv6: `2001:620:0:ff::2` | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/) — это публичный DNS-сервис, базирующийся в Южной Корее, который не регистрирует IP-адрес пользователя. Реклама и трекеры не блокируются.

#### SK Broadband

| Протокол       | Адрес                           |                                                                                                                                                                                                                 |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud South Korea

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) — это бесплатный рекурсивный DNS-сервис. Серверы Yandex.DNS расположены в России, странах СНГ и Западной Европы. Пользовательские запросы обрабатываются ближайшим дата-центром, что обеспечивает высокую скорость соединения.

#### Basic

В «Базовом» режиме трафик не фильтруется.

| Протокол       | Адрес                                           |                                                                                                                                                                                                                                           |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` и `77.88.8.1`                       | [Добавить в AdGuard](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` и `2a02:6b8:0:1::feed:0ff` | [Добавить в AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Safe

В «Безопасном» режиме обеспечивается защита от заражённых и мошеннических сайтов.

| Протокол       | Адрес                                           |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` и `77.88.8.2`                      | [Добавить в AdGuard](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` и `2a02:6b8:0:1::feed:bad` | [Добавить в AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`     | [Добавить в AdGuard](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                 | [Добавить в AdGuard](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Семейный

В «Семейном» режиме предусмотрена защита от заражённых, мошеннических и сайтов для взрослых.

| Протокол       | Адрес                                           |                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` и `77.88.8.7`                       | [Добавить в AdGuard](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` и `2a02:6b8:0:1::feed:a11` | [Добавить в AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`   | [Добавить в AdGuard](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Небольшие персональные резолверы**

Это DNS-резолверы, которыми обычно управляют энтузиасты или небольшие группы. Хотя им может не хватать масштаба крупных провайдеров, они часто ставят во главу угла конфиденциальность, прозрачность или предлагают специализированные функции.

Мы не сможем должным образом следить за их доступностью. **Используйте их на свой страх и риск.**

### AhaDNS

[AhaDNS](https://ahadns.com/) — DNS-сервис без логирования и с блокировкой рекламы от провайдера Fredrik Pettersson.

#### Netherlands

| Протокол       | Адрес                                 |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Добавить в AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Добавить в AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Los Angeles

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

### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) — это персональный DNS-сервер, использующий инфраструктуру AdGuard Home. Расположен в Тронхейме, Норвегия.

Блокирует больше рекламы и вредоносного ПО, чем AdGuard DNS, благодаря более продвинутому синтаксису, также блокирует ультраправые таблоиды и большинство имиджбордов, частично блокирует трекинг. Записи используются для улучшения используемых списков фильтров (например, путём разблокироваки сайтов, которые не должны были быть заблокированы), а также для определения наименее подходящего времени для обновления серверной системы.

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

| Протокол       | Адрес                                  |                                                                                                                                                                                                                                                      |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [Добавить в AdGuard](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

Вы также можете [настроить пользовательский DNS-сервер](https://dnswarden.com/customfilter.html) для блокировки рекламы или фильтрации контента для взрослых.

### FFMUC DNS

Бесплатные DNS-серверы [FFMUC](https://ffmuc.net/) от провайдера Freifunk München.

| Протокол             | Адрес                                                                         |                                                                                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://dot.ffmuc.net`                                              | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://doh.ffmuc.net/dns-query`                                  | [Добавить в AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.ffmuc.net` IP-адрес: `5.1.66.255:8443`            | [Добавить в AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                           |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.ffmuc.net` IP-адрес: `[2001:678:e68:f000::]:8443` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                            |

### fvz DNS

[fvz DNS](http://meo.ws/) — это публичный базовый OpenNIC Tier2 Anycast DNS-резолвер разработчика Fusl.

| Протокол       | Адрес                                                                       |                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dnsrec.meo.ws` IP-адрес: `185.121.177.177:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dnsrec.meo.ws` IP-адрес: `169.239.202.202:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

Тестовые серверы [ibksturm DNS](https://ibksturm.synology.me/) от провайдера ibksturm. OPENNIC, DNSSEC, без фильтрации и логирования.

| Протокол             | Адрес                                                                          |                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://ibksturm.synology.me` IP-адрес: `213.196.191.96`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Имя хоста: `quic://ibksturm.synology.me` IP-адрес: `213.196.191.96`            | [Добавить в AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://ibksturm.synology.me/dns-query` IP-адрес: `213.196.191.96` | [Добавить в AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.ibksturm` IP-адрес: `213.196.191.96:8443`          | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                   |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) управляется Elias Ojala, Финляндия.

| Протокол       | Адрес                                    |                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Marbled Fennec

Marbled Fennec Networks размещает DNS-резолверы, способные разрешать домены OpenNIC и ICANN

| Протокол       | Адрес                                     |                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### momou! DNS

[momou! DNS](https://dns.momou.ch/) provides DoH & DoT resolvers with three levels of filtering

#### Стандартный

Блокирует рекламу, трекеры и вредоносное ПО

| Протокол       | Адрес                            |                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://dns.momou.ch`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch)                         |

#### Kids

Фильтр для детей, который также блокирует рекламу, трекеры и вредоносное ПО

| Протокол       | Адрес                                 |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/kids` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://kids.dns.momou.ch`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch)               |

#### Нефильтрующий

| Протокол       | Адрес                                       |                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/unfiltered` | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://unfiltered.dns.momou.ch`             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch)   |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) — это небольшой любительский DNS-проект, блокирующий рекламу.

#### OSZX DNS

Это небольшой любительский DNS-проект c блокировкой рекламы и поддержкой D-o-H, D-o-T & DNSCrypt v2.

| Протокол       | Адрес                                                                           |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                                  | [Добавить в AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                       | [Добавить в AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.oszx.co` IP-адрес: `51.38.83.141:5353`              | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                   |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.oszx.co` IP-адрес: `[2001:41d0:801:2000::d64]:5353` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                    |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                                 | [Добавить в AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                             | [Добавить в AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

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

#### Singapore DNS Server

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

#### Japan DNS Server

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

[Seby DNS](https://dns.seby.io/) — это сервис, ориентированный на конфиденциальность, предоставляемый Sebastian Schmidt. Нет регистрации, проверка DNSSEC.

#### DNS Server 1

| Протокол       | Адрес                                                             |                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                                    | [Добавить в AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.seby.io` IP-адрес: `45.76.113.31` | [Добавить в AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                    |
| DNS-over-TLS   | `tls://dot.seby.io`                                               | [Добавить в AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) — это персональный DNS-сервер, расположенный во Вьетнаме и предназначенный для личного использования. Он блокирует рекламу, защищает от вредоносного ПО и фишинга, фильтрует контент для взрослых и проверяет DNSSEC.

| Протокол       | Адрес                                   |                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.70.12.129`                         | [Добавить в AdGuard](adguard:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS)                                                 |
| DNS, IPv6      | `2001:df4:4c0:1::399:1`                 | [Добавить в AdGuard](adguard:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS)                                 |
| DNS-over-QUIC  | `quic://rx.techomespace.com`            | [Добавить в AdGuard](adguard:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS)                       |
| DNS-over-HTTPS | `https://rx.techomespace.com/dns-query` | [Добавить в AdGuard](adguard:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS), [Добавить в AdGuard VPN](adguardvpn:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS) |
