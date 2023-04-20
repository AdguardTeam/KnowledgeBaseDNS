---
title: Известные DNS-провайдеры
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) — это альтернативный способ заблокировать рекламу, защитить личные данные и оградить детей от материалов для взрослых. Он включает в себя необходимый набор функций по защите от рекламы, трекинга и фишинга, независимо от платформы и устройства, которым вы пользуетесь.

#### По умолчанию

Эти серверы блокируют рекламу, трекеры и фишинг.

| Протокол       | Адрес                                                                                |                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` и `94.140.15.15`                                                      | [Добавить в AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::ad1:ff` и `2a10:50c0::ad2:ff`                                            | [Добавить в AdGuard](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                              | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                          | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                         | [Добавить в AdGuard](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.default.ns1.adguard.com` IP-адрес: `94.140.14.14:5443`        | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.default.ns1.adguard.com` IP-адрес: `[2a10:50c0::ad1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |

#### Семейная защита

У этих серверов есть те же функции, что и у серверов «По умолчанию» + блокировка сайтов для взрослых + Безопасный поиск.

| Протокол       | Адрес                                                                               |                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` и `94.140.15.16`                                                     | [Добавить в AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::bad1:ff` и `2a10:50c0::bad2:ff`                                         | [Добавить в AdGuard](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                          | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                      | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                     | [Добавить в AdGuard](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.family.ns1.adguard.com` IP-адрес: `94.140.14.15:5443`        | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.family.ns1.adguard.com` IP-адрес: `2a10:50c0::bad1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Нефильтрующий

Каждый из этих серверов обеспечивает безопасное и надёжное соединение, но, в отличие от серверов «Стандартный» и «Семейная защита», они ничего не фильтруют.

| Протокол       | Адрес                                                                                 |                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` и `94.140.14.141`                                                     | [Добавить в AdGuard](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6      | `2a10:50c0::1:ff` и `2a10:50c0::2:ff`                                                 | [Добавить в AdGuard](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                        | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                                    | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                                   | [Добавить в AdGuard](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt.unfiltered.ns1.adguard.com` IP-адрес: `94.140.14.140:5443`     | [Добавить в AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt.unfiltered.ns1.adguard.com` IP-адрес: `[2a10:50c0::1:ff]:5443` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) — это бесплатный рекурсивный DNS-сервис. Серверы Yandex.DNS расположены в России, странах СНГ и Западной Европы. Пользовательские запросы обрабатываются ближайшим дата-центром, что обеспечивает высокую скорость соединения.

#### Базовый

В Базовом режиме трафик не фильтруется.

| Протокол       | Адрес                                                                        |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` и `77.88.8.1`                                                    | [Добавить в AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` и `2a02:6b8:0:1::feed:0ff`                              | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.browser.yandex.net` IP-адрес: `77.88.8.78:15353` | [Добавить в AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |

#### Безопасный

В Безопасном режиме AdGuard DNS защищает от заражённых и мошеннических сайтов.

| Протокол  | Адрес                                           |                                                                       |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` и `77.88.8.2`                      | [Добавить в AdGuard](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` и `2a02:6b8:0:1::feed:bad` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |

#### Семейный

В Семейном режиме AdGuard DNS защищает от заражённых, мошеннических сайтов и сайтов для взрослых.

| Протокол  | Адрес                                           |                                                                       |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` и `77.88.8.7`                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` и `2a02:6b8:0:1::feed:a11` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) — это DNS-сервис с настраиваемой фильтрацией. Этот сервис позволяет пользоваться интернетом безопасно и без нежелательного контента.

#### Семейный фильтр

Блокирует доступ к контенту для взрослых, прокси и VPN-доменам, а также к сайтам со смешанным содержимым.

| Протокол       | Адрес                                                           |                                                                                                                                           |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` и `185.228.169.168`                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` и `2a0d:2a00:2::`                               | [Добавить в AdGuard](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.168:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`              | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`                     | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Фильтр контента для взрослых

Менее ограничивающий, чем Семейный фильтр: блокирует доступ только к контенту для взрослых, вредоносным и фишинговым доменам.

| Протокол       | Адрес                                                            |                                                                                                                                             |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` и `185.228.169.11`                              | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6      | `2a0d:2a00:1::1` и `2a0d:2a00:2::1`                              | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4 | Провайдер: `cleanbrowsing.org` IP-адрес: `185.228.168.10:8443`   | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6 | Провайдер: `cleanbrowsing.org` IP-адрес: `[2a0d:2a00:1::1]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`                | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                       | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |

#### Фильтр безопасности

Блокирует фишинговые, вредоносные и спам-сайты.

| Протокол       | Адрес                                                |                                                                                                         |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` и `185.228.169.9`                    | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6      | `2a0d:2a00:1::2` и `2a0d:2a00:2::2`                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) — это DNS-сервис, который обрабатывает ваши DNS-запросы через всемирную сеть DNS-серверов. Удаляет рекламу и защищает от фишинговых и шпионских программ.

| Протокол       | Адрес                                                                        |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` и `8.20.247.20`                                                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP-адрес: `8.20.247.2` | [Добавить в AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) — это бесплатный облачный рекурсивный DNS-сервис, который обеспечивает быстрый и надёжный доступ к сайтам и онлайн-приложениям со встроенной системой безопасности и анализа угроз.

#### Надёжность & Производительность 1

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий.

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` и `156.154.71.1`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` и `2610:a1:1019::1` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Надёжность & Производительность 2*

Эти серверы предоставляют надёжный и быстрый DNS-поиск без блокировки каких-либо категорий, а также предотвращают перенаправление ответов NXDomain (несуществующий домен) на лендинговые страницы.

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` и `156.154.71.5`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` и `2610:a1:1019::5` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Защита от угроз

Эти серверы защищают от вредоносных доменов и включают функции режима «Надёжность и производительность».

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` и `156.154.71.2`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` и `2610:a1:1019::2` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Семейный DNS

Эти серверы блокируют доступ к контенту для взрослых и включают функции режимов «Надёжность и производительность» + «Защита от угроз».

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` и `156.154.71.3`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` и `2610:a1:1019::3` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### DNS для бизнеса

Эти серверы блокируют нежелательный и отвлекающий контент, а также включают в себя функции режимов «Надёжность и производительность», «Защита от угроз» и «Семейный DNS».

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` и `156.154.71.4`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` и `2610:a1:1019::4` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) — сервис, который расширяет возможности DNS за счёт включения таких функций, как фильтрация контента и защита от фишинга с нулевым временем простоя.

#### Стандартный

DNS-серверы с фильтрацией, защищающей ваше устройство от вредоносного ПО.

| Протокол       | Адрес                                                                |                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `208.67.222.222` и `208.67.220.220`                                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6      | `2620:119:35::35` и `2620:119:53::53`                                | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `208.67.220.220`  | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `[2620:0:ccc::2]` | [Добавить в AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                                  | [Добавить в AdGuard](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### FamilyShield

Серверы OpenDNS с блокировкой контента для взрослых.

| Протокол       | Адрес                                                               |                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` и `208.67.220.123`                                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.opendns.com` IP-адрес: `208.67.220.123` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`                    | [Добавить в AdGuard](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) — бесплатный глобальный DNS-сервис, который можно использовать в качестве альтернативы текущему DNS-провайдеру.

| Протокол       | Адрес                                           |                                                                                                                      |
| -------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` и `8.8.4.4`                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6      | `2001:4860:4860::8888` и `2001:4860:4860::8844` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [Добавить в AdGuard](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.google`                              | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) — это бесплатный и быстрый DNS-сервис, который функционирует как рекурсивный сервер, ищущий доменные имена для любого хоста в интернете.

#### Стандартный

| Протокол             | Адрес                                           |                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4            | `1.1.1.1` и `1.0.0.1`                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6            | `2606:4700:4700::1111` и `2606:4700:4700::1001` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Добавить в AdGuard](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Блокировка вредоносных сайтов

| Протокол       | Адрес                                           |                                                                                                  |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `1.1.1.2` и `1.0.0.2`                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6      | `2606:4700:4700::1112` и `2606:4700:4700::1002` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |

#### Блокировка вредоносных и «взрослых» сайтов

| Протокол             | Адрес                                           |                                                                                               |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` и `1.0.0.3`                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6            | `2606:4700:4700::1113` и `2606:4700:4700::1003` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`               | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) — это бесплатная рекурсивная DNS-платформа, которая обеспечивает высокую производительность, конфиденциальность и защиту от фишинга и шпионских программ. Серверы Quad9 не предоставляют цензурный компонент.

#### Стандартный

Обычные DNS-серверы, которые защищают от фишинга и шпионских программ. Они включают списки блокировки, валидацию DNSSEC и другие функции безопасности.

| Протокол       | Адрес                                                                 |                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` и `149.112.112.112`                                         | [Добавить в AdGuard](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6      | `2620:fe::fe` IP-адрес: `2620:fe::fe:9`                               | [Добавить в AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.9:8443`       | [Добавить в AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                                     | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS-over-TLS   | `tls://dns.quad9.net`                                                 | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Незащищённый

У незащищённых DNS-серверов нет списка блокировки, DNSSEC или опции EDNS Сlient Subnet.

| Протокол       | Адрес                                                                    |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` и `149.112.112.10`                                            | [Добавить в AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6      | `2620:fe::10` IP-адрес: `2620:fe::fe:10`                                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.10:8443`         | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::fe:10]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                      | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                                  | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### Поддержка [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client Subnet — это метод, который включает компоненты IP-адресов конечных пользователей в запросы, отправляемые на полномочные DNS-серверы. Он предоставляет список блокировки, DNSSEC и опцию EDNS Client Subnet.

| Протокол       | Адрес                                                                 |                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` и `149.112.112.11`                                         | [Добавить в AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6      | `2620:fe::11` IP-адрес: `2620:fe::fe:11`                              | [Добавить в AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `9.9.9.11:8443`      | [Добавить в AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.quad9.net` IP-адрес: `[2620:fe::11]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                                   | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) — это бесплатный DNS-сервис, который предлагает большую стабильность и безопасность по сравнению с другими сервисами. Verisign заботится о конфиденциальности пользователей — он не продаёт публичные данные DNS третьим лицам и не перенаправляет запросы пользователей для показа им рекламы.

| Протокол  | Адрес                                   |                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` или `64.6.65.6`             | [Добавить в AdGuard](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` или `2620:74:1c::2:2` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) — это швейцарский публичный DNS-сервис провайдера [SWITCH DNS](https://www.switch.ch/).

| Протокол       | Адрес                                                                                 |                                                                               |
| -------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4      | Провайдер: `dns.switch.ch` IP-адрес: `130.59.31.248:`                                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6      | Провайдер: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                   | [Добавить в AdGuard](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                     | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | Имя хоста: `tls://dns.switch.ch` IP-адрес: `130.59.31.248` и IPv6: `2001:620:0:ff::2` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) — это бесплатный альтернативный DNS-сервис компании Dyn.

| Протокол  | Адрес                             |                                                              |
| --------- | --------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `216.146.35.35` и `216.146.36.36` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) — это быстрый и бесплатный DNS-сервер без логирования с функцией защиты конфиденциальности.

| Протокол  | Адрес                                                       |                                                                                  |
| --------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` и `84.200.70.40`                             | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` и `2001:1608:10:25::9249:d69b` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) — это DNS-сервис с поддержкой OpenNIC, который блокирует рекламу, трекеры, вредоносное ПО и не записывает данные.

| Сеть Anycast   | Адрес                                |                                                                                   |
| -------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.futuredns.me/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.futuredns.me`             | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-over-QUIC  | `quic://dns.futuredns.me`            | [Добавить в AdGuard](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Локация                | Адрес — IPv4                                                                    |
| ---------------------- | ------------------------------------------------------------------------------- |
| Лондон, Великобритания | `52.56.224.201`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Милан, Италия          | `15.161.11.3`| [Добавить в AdGuard](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Стокгольм, Швеция      | `13.49.168.178`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Эшберн, США            | `52.0.69.145`| [Добавить в AdGuard](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| Сан-Франциско, США     | `13.56.204.161`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Монреаль, Канада       | `3.97.137.100`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Сингапур               | `54.254.82.60`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Токио, Япония          | `54.199.94.55`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Мумбаи, Индия          | `3.7.162.217`| [Добавить в AdGuard](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| Сан-Паулу, Бразилия    | `177.71.191.153`| [Добавить в AdGuard](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

Решения [SkyDNS](https://www.skydns.ru/en/) для фильтрации контента и безопасности в интернете.

| Протокол  | Адрес            |                                                               |
| --------- | ---------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) — это быстрый и безопасный DNS сервис с защитой от рекламы, трекинга и фишинга.

#### West DNS Server (основной)

| Протокол       | Адрес                             |                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)               |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [Добавить в AdGuard](sdns://BAAAAAAAAAAAAAARZG5zLmNvbXNzLm9uZTo3ODQ)          |

#### East DNS Server (Сибирь и Дальний Восток)

| Протокол       | Адрес                                  |                                                                                      |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [Добавить в AdGuard](sdns://BAAAAAAAAAAAAAAWZG5zLmVhc3QuY29tc3Mub25lOjc4NA)          |

### Safe DNS

[Safe DNS](https://www.safedns.com/) — это глобальная сеть, состоящая из серверов, расположенных по всему миру — в Северной и Южной Америке, Европе, Африке, Австралии и на Дальнем Востоке. Она быстро и надёжно обрабатывает DNS-запросы из любой точки мира.

| Протокол  | Адрес                           |                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` и `195.46.39.40` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) защищает от кражи личных и финансовых данных. Помогает справиться с вирусами, программами-вымогателями и другими вредоносными программами.

#### Приватный

В Приватном режиме — только разрешение DNS.

| Протокол               | Адрес                                                                                              |                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` и `149.112.122.10`                                                                | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620:10A:80BB::10` и `2620:10A:80BC::10`                                                          | [Добавить в AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                 | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS — Private | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.10` and IPv6: `2620:10A:80BB::10` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Защищённый

В Защищённом режиме — защита от вредоносного ПО и фишинга.

| Протокол                 | Адрес                                                                                                      |                                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` и `149.112.122.20`                                                                        | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` и `2620:10A:80BC::20`                                                                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS — Protected | Имя хоста: `tls://protected.canadianshield.cira.ca` IP-адрес: `149.112.121.20` и IPv6: `2620:10A:80BB::20` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Семейный

В Семейном режиме — то же, что в Защищённом режиме + блокировка контента для взрослых.

| Протокол              | Адрес                                                                                                      |                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` и `149.112.122.30`                                                                        | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` и `2620:10A:80BC::30`                                                                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                          | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS — Family | Имя хоста: `tls://protected.canadianshield.cira.ca` IP-адрес: `149.112.121.30` и IPv6: `2620:10A:80BB::30` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) — это бесплатный альтернативный DNS-сервис OpenNIC Project.

| Протокол  | Адрес                                    |                                                                   |
| --------- | ---------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` и `169.239.202.202`    | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` и `2a05:dfc7:5353::53` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Небольшой любительский DNS-проект. Без логирования, Ethereum Name Service, DNSSEC & Фильтрует рекламу, трекеры, вредоносное ПО.

#### Финский DNS-сервер

| Протокол             | Адрес                                                                           |                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://dot-fi.blahdns.com` IP-адрес: `95.216.212.177`                | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://doh-fi.blahdns.com/dns-query` IP-адрес: `95.216.212.177`    | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `95.216.212.177:8443`        | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `2a01:4f9:c010:43ce::1:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Японский DNS-сервер

| Протокол             | Адрес                                                                                      |                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://dot-jp.blahdns.com` IP-адрес: `139.162.112.47`                           | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://doh-jp.blahdns.com/dns-query`                                          | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `139.162.112.47:8443`                   | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Немецкий DNS-сервер

| Протокол             | Адрес                                                                           |                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://dot-de.blahdns.com` IP-адрес: `159.69.198.101`                | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://doh-de.blahdns.com/dns-query` IP-адрес: `159.69.198.101`    | [Добавить в AdGuard](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `159.69.198.101:8443`        | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.blahdns.com` IP-адрес: `2a01:4f8:1c1c:6b4b::1:8443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) — это защищающий конфиденциальность DNS-сервис, управляемый Noah Seefried.

| Протокол       | Адрес                                                                                                 |                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP-адрес: `95.216.24.230` и IPv6: `2a01:4f9:2a:1919::9301` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://fi.dot.dns.snopyta.org` IP-адрес: `95.216.24.230` и IPv6: `2a01:4f9:2a:1919::9301`             | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) блокирует сайты с контентом для взрослых. Он позволяет детям и взрослым безопасно пользоваться интернетом, не беспокоясь о том, что вредоносные сайты отследят их действия.

| Протокол       | Адрес                                                             |                                                                                                                                              |
| -------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                      | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                                  | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4      | `94.130.180.225` и `78.47.64.161`                                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` и `2a01:4f8:1c17:4df8::1`                 | [Добавить в AdGuard](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4 | Провайдер: `dnsforfamily.com` IP-адрес: `94.130.180.225`          | [Добавить в AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6 | Провайдер: `dnsforfamily.com` IP-адрес: `[2a01:4f8:1c0c:40db::1]` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR — это валидирующие резолверы Open DNSSEC. CZ.NIC не собирает личные данные и информацию на страницах, где устройства отправляют личные данные.

| Протокол       | Адрес                                     |                                                                      |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` и `185.43.135.1`            | [Добавить в AdGuard](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6      | `2001:148f:ffff::1` и `2001:148f:fffe::1` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                 | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS-over-TLS   | `tls://odvr.nic.cz`                       | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) — это бесплатный рекурсивный DNS-сервис, который стремится обеспечить быстрое, стабильное и безопасное разрешение имён DNS для большинства пользователей интернета. Защищает пользователей от различных атак и угроз.

| Протокол       | Адрес                                |                                                                                 |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` и `223.6.6.6`            | [Добавить в AdGuard](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6      | `2400:3200::1` и `2400:3200:baba::1` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`   | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.alidns.com`               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

Основанный на IPv6 DNS-сервис с мощным потенциалом в области безопасности, защитой от шпионских программ и вредоносных сайтов. Поддерживает DNS64, чтобы обеспечить разрешение доменных имён только для пользователей IPv6.

| Протокол       | Адрес                             |                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` и `240C::6644`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) — это система интернет-фильтрации, которая защищает детей от нежелательного контента и материалов оскорбительного характера.

| Протокол       | Адрес                                                              |                                                                                                                                               |
| -------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` и `180.131.145.145`                              | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.nawala.id` IP-адрес: `180.131.144.144` | [Добавить в AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** — это ведущий рекурсивный DNS-сервис с расширенной защитой данных в сети.

| Протокол       | Адрес                            |                                                                           |
| -------------- | -------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` и `218.30.118.6`   | [Добавить в AdGuard](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4      | `123.125.81.6` и `140.207.198.6` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`   | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.360.cn`               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) — это публичный DNS-сервис, управляемый компанией Internet Initiative Japan. Также он блокирует контент с жестоким обращением с детьми.

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) — это защищающий конфиденциальность DNS-провайдер с многолетним опытом развития DNS-сервисов, который стремится обеспечить пользователей быстрым, точным и стабильным рекурсивным сервисом разрешения имён.

| Протокол       | Адрес                           |                                                                       |
| -------------- | ------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` и `119.28.28.28` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS-over-HTTPS | `https://doh.pub/dns-query`     | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** — это профессиональный и надёжный DNS-сервис.

#### Нормальный

Блокирует рекламу и раздражающие сайты.

| Протокол  | Адрес                                 |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` и `114.114.115.115` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Безопасный

Блокирует фишинговые, вредоносные и другие небезопасные сайты.

| Протокол  | Адрес                                 |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` и `114.114.115.119` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Семейный

Эти серверы блокируют сайты для взрослых и нежелательный контент.

| Протокол  | Адрес                                 |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` и `114.114.115.110` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) — это бесплатный альтернативный DNS-сервис без логирования TWNIC (Taiwan Network Information Center).

| Протокол       | Адрес                                 |                                                                              |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` и `101.102.103.104` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6      | `2001:de4::101` и `2001:de4::102`     | [Добавить в AdGuard](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`      | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://101.101.101.101`               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |

### OneDNS

**OneDNS** — это безопасный, быстрый, бесплатный нишевый DNS-сервис, блокирующий вредоносные домены.

#### Pure Edition

| Протокол  | Адрес                          |                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` и `52.80.52.52` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| Протокол  | Адрес                          |                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` и `52.80.66.66` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) блокирует больше 140 тысяч рекламных, трекинговых, вредоносных и фишинговых доменов. Без логирования и ECS, с валидацией DNSSEC, бесплатный!

#### Сингапурский DNS-сервер

| Протокол       | Адрес                                                                             | Локация                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.tiar.app` IP-адрес: `174.138.21.128`              | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.dns.tiar.app` IP-адрес: `[2400:6180:0:d0::5f6e:4001]` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (кешируется сторонним сервисом)                | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                  | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                             | [Добавить в AdGuard](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                              | [Добавить в AdGuard](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |

#### Японский DNS-сервер

| Протокол       | Адрес                                                                                 |                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                      | [Добавить в AdGuard](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.jp.tiar.app` IP-адрес: `172.104.93.80`                    | [Добавить в AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.jp.tiar.app` IP-адрес: `[2400:8902::f03c:91ff:feda:c514]` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                                     | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                       | [Добавить в AdGuard](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                                   | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) является открытым, бесплатным и публичным DNS-сервисом. Без перенаправления DNS-запросов, без логирования.

| Протокол  | Адрес                               |                                                               |
| --------- | ----------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` и `172.104.49.100` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` и `37.235.1.177`     | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) — это бесплатный анонимный DNS-резолвер Freenom World.

| Протокол  | Адрес                         |                                                           |
| --------- | ----------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` и `80.80.81.81` | [Добавить в AdGuard](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) — это небольшой любительский проект DNS, блокирующий рекламу.

#### Сервер OSZX

Эти серверы с DNSSEC не блокируют рекламу и не сохраняют логи.

| Протокол       | Адрес                                                                           |                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `51.38.83.141`                                                                  | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.oszx.co` IP-адрес: `51.38.83.141:5353`              | [Добавить в AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.oszx.co` IP-адрес: `[2001:41d0:801:2000::d64]:5353` | [Добавить в AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                                 | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### Сервер PumpleX

Эти серверы с DNSSEC не блокируют рекламу и не сохраняют логи.

| Протокол       | Адрес                                                                                |                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                           | [Добавить в AdGuard](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.pumplex.com` IP-адрес: `51.38.82.198:5353`               | [Добавить в AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.pumplex.com` IP-адрес: `[2001:41d0:801:2000::1b28]:5353` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                                  | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                              | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) — это DNS-сервис, который защищает DNS-трафик и увеличивает разнообразие DNS-резолверов, предлагая современные протоколы.

| Протокол       | Адрес                                   |                                                                                       |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) — это DNS-сервис Strongarm, который предотвращает взаимодействие с вредоносным контентом.

| Протокол  | Адрес                            |                                                              |
| --------- | -------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `54.174.40.213` и `52.3.100.184` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) — это DNS-сервис SafeSurfer, который защищает устройство от вредоносного и взрослого контента.

| Протокол       | Адрес                                                                    |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` и `104.197.28.121`                                     | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.safesurfer.co.nz` IP-адрес: `104.197.28.121` | [Добавить в AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Безопасный, конфиденциальный DNS-резолвер с открытым исходным кодом, защитой от вредоносного ПО, блокировкой рекламы и без логирования. Блокирует все запросы к сервисам Google с вашего телефона, планшета или компьютера.

| Протокол       | Адрес                                                                                |                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP-адрес: `78.47.212.211:9443`           | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6 | Провайдер: `2.dnscrypt-cert.DeCloudUs-test` IP-адрес: `[2a01:4f8:13a:250b::30]:9443` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                                | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                            | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) управляется Elias Ojala, Финляндия.

| Протокол       | Адрес                                    |                                                                                         |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) — это сервер, работающий из дроплета Digital Ocean в регионе BLR1. Поддерживается Abhay Rana, или Nemo.

| Протокол       | Адрес                                                                   |                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.captnemo.in` IP-адрес: `139.59.48.222:4434` | [Добавить в AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) — это бесплатный DNS-сервис без логирования и с DNSSEC.

| Протокол       | Адрес                             |                                                                           |
| -------------- | --------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` и `45.11.45.11` | [Добавить в AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6      | `2a09::` и `2a11::`               | [Добавить в AdGuard](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://185.222.222.222`           | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) — это резервный DNS-резолвер с блокировщиком рекламы без логирования от провайдера [adminforge](https://adminforge.de/).

| Протокол       | Адрес                                               |                                                                             |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` и `176.9.1.117`                      | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` и `2a01:4f8:141:316d::117` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                     | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dnsforge.de`                                 | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

Серверы [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) от провайдера [Restena Foundation](https://www.restena.lu/).

| Протокол       | Адрес                                                                                   |                                                                                      |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP-адрес: `158.64.1.29` и IPv6: `2001:a18:1::29` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP-адрес: `158.64.1.29` и IPv6: `2001:a18:1::29`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) — это публичный базовый OpenNIC Tier2 Anycast DNS-резолвер разработчика Fusl.

| Протокол       | Адрес                                                                       |                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dnsrec.meo.ws` IP-адрес: `185.121.177.177:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dnsrec.meo.ws` IP-адрес: `169.239.202.202:5353` | [Добавить в AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

Бесплатные DNS-серверы [FFMUC](https://ffmuc.net/) от провайдера Freifunk München.

| Протокол             | Адрес                                                                         |                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://dot.ffmuc.net`                                              | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://doh.ffmuc.net/dns-query`                                  | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.ffmuc.net` IP-адрес: `5.1.66.255:8443`            | [Добавить в AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.ffmuc.net` IP-адрес: `[2001:678:e68:f000::]:8443` | [Добавить в AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) — это публичный резолвер Digital Society. Расположен в Цюрихе, Швейцария.

| Протокол       | Адрес                                                                                              |                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP-адрес: `185.95.218.42` и IPv6: `2a05:fc84::42` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP-адрес: `185.95.218.43` и IPv6: `2a05:fc84::43`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) — это публичный зашифрованный DNS-сервис, управляемый [LibreOps](https://libreops.cc/).

| Протокол       | Адрес                                              |                                                                                  |
| -------------- | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                                    | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`                | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                      | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP-адрес: `116.202.176.26` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

Тестовые серверы [ibksturm DNS](https://ibksturm.synology.me/) от провайдера ibksturm. OPENNIC, DNSSEC, без фильтрации и логирования.

| Протокол             | Адрес                                                                                            |                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Имя хоста: `tls://ibksturm.synology.me` IP-адрес: `83.77.85.7`                                   | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS-over-HTTPS, IPv4 | Имя хоста: `https://ibksturm.synology.me/dns-query` IP-адрес: `178.82.102.190`                   | [Добавить в AdGuard](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4       | Провайдер: `2.dnscrypt-cert.ibksturm` IP-адрес: `83.77.85.7:8443`                                | [Добавить в AdGuard](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6       | Провайдер: `2.dnscrypt-cert.ibksturm` IP-адрес: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [Добавить в AdGuard](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

Открытый проект-коллаборация для продвижения, реализации и внедрения [DNS Privacy](https://dnsprivacy.org/).

DNS-серверы, оперируемые [Stubby developers](https://getdnsapi.net/).

| Протокол     | Адрес                                                                                                                               |                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-TLS | Имя хоста: `tls://getdnsapi.net` IP-адрес: `185.49.141.37` и IPv6: `2a04:b900:0:100::37`                                            | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS-over-TLS | Провайдер: `Surfnet` Имя хоста: `tls://dnsovertls.sinodun.com` IP-адрес: `145.100.185.15` и IPv6: `2001:610:1:40ba:145:100:185:15`  | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS-over-TLS | Провайдер: `Surfnet` Имя хоста: `tls://dnsovertls1.sinodun.com` IP-адрес: `145.100.185.16` и IPv6: `2001:610:1:40ba:145:100:185:16` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Другие DNS-серверы с политикой «без логирования».

| Протокол           | Адрес                                                                                                                      |                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-TLS       | Провайдер: `UncensoredDNS` Имя хоста: `tls://unicast.censurfridns.dk` IP-адрес: `89.233.43.71` и IPv6: `2a01:3a0:53:53::0` | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Провайдер: `UncensoredDNS` Имя хоста: `tls://anycast.censurfridns.dk` IP-адрес: `91.239.100.100` и IPv6: `2001:67c:28a4::` | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Провайдер: `dkg` Имя хоста: `tls://dns.cmrg.net` IP-адрес: `199.58.81.218`и IPv6: `2001:470:1c:76d::53`                    | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-over-TLS, IPv4 | Имя хоста: `tls://dns.larsdebruin.net` IP-адрес: `51.15.70.167`                                                            | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS-over-TLS       | Имя хоста: `tls://dns-tls.bitwiseshift.net` IP-адрес: `81.187.221.24` и IPv6: `2001:8b0:24:24::24`                         | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS-over-TLS       | Имя хоста: `tls://ns1.dnsprivacy.at` IP-адрес: `94.130.110.185` и IPv6: `2a01:4f8:c0c:3c03::2`                             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS       | Имя хоста: `tls://ns2.dnsprivacy.at` IP-адрес: `94.130.110.178` и IPv6: `2a01:4f8:c0c:3bfc::2`                             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS, IPv4 | Имя хоста: `tls://dns.bitgeek.in` IP-адрес: `139.59.51.46`                                                                 | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS-over-TLS       | Имя хоста: `tls://dns.neutopia.org` IP-адрес: `89.234.186.112` и IPv6: `2a00:5884:8209::2`                                 | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS-over-TLS       | Провайдер: `Go6Lab` Имя хоста `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                       | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS-over-TLS       | Имя хоста: `tls://dot.securedns.eu` IP-адрес: `146.185.167.43` и IPv6: `2a03:b0c0:0:1010::e9a:3001`                        | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS-серверы с минимальным логированием/ограничениями. Эти серверы используют логирование, самоподписанные сертификаты или не поддерживают строгий режим.

| Протокол     | Адрес                                                                                                                   |                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-TLS | Провайдер: `NIC Chile` Имя хоста: `dnsotls.lab.nic.cl` IP-адрес: `200.1.123.46` и IPv6: `2001:1398:1:0:200:1:123:46`    | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS-over-TLS | Провайдер: `OARC` Имя хоста: `tls-dns-u.odvr.dns-oarc.net` IP-адрес: `184.105.193.78` и IPv6: `2620:ff:c000:0:1::64:25` | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) DNS-сервис без логирования и с блокировкой рекламы от провайдера Fredrik Pettersson.

#### Blitz

[Настраиваемая фильтрация](https://blitz-setup.ahadns.com/) только для DoH.

| Протокол                                      | Адрес                             |                                                                               |
| --------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS, без цензуры                   | `https://blitz.ahadns.com`        | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS, фильтр OISD                   | `https://blitz.ahadns.com/1:1`    | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD & фильтр порно Energized | `https://blitz.ahadns.com/1:1.12` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Нидерланды

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### Индия

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Добавить в AdGuard](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Лос-Анджелес

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Добавить в AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### Нью-Йорк

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Добавить в AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Добавить в AdGuard](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Польша

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### Италия

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |

#### Испания

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Норвегия

| Протокол       | Адрес                                 |                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Чикаго

| Протокол       | Адрес                                  |                                                                                      |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Добавить в AdGuard](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) — это сервис, ориентированный на конфиденциальность, предоставляемый Sebastian Schmidt. Без логирования, с валидацией DNSSEC.

#### DNS-сервер 1

| Протокол       | Адрес                                                             |                                                                                                                                              |
| -------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                                    | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Провайдер: `2.dnscrypt-cert.dns.seby.io` IP-адрес: `45.76.113.31` | [Добавить в AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS-over-TLS   | `tls://dot.seby.io`                                               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) физически расположен рядом с Барселоной, Испания. puntCAT предлагает публичный DNS-сервис: бесплатный, безопасный, близко расположенный и уважающий вашу конфиденциальность.

| Протокол  | Адрес              |                                                                     |
| --------- | ------------------ | ------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Добавить в AdGuard](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) управляет публичными DNS-резолверами, чтобы ускорить ответы на запросы и расширить альтернативные возможности. Сервис от провайдера [Peerix](https://www.peerix.net/)

#### По умолчанию

Cерверы с функцией разрешения имён DNS без фильтрации трафика.

| Протокол       | Адрес                                 |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` и `185.235.81.2`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6      | `2a0d:4d00:81::1` и `2a0d:4d00:81::2` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`   | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.dnslify.com`               | [Добавить в AdGuard](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Безопасный

Безопасный режим защищает от заражённых и мошеннических сайтов.

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` и `185.235.81.4`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` и `2a0d:4d00:81::4` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Семейный

Семейный режим предлагает защиту со стороны «безопасных» резолверов и блокирует сайты с контентом для взрослых.

| Протокол  | Адрес                                 |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` и `185.235.81.6`       | [Добавить в AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` и `2a0d:4d00:81::6` | [Добавить в AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) предоставляет публично доступные нефильтрующие резолверы без логирования вдобавок к настраиваемым фильтрующим фримиум-серверам с опциональным логированием.

#### Сверхнизкая задержка

| Протокол       | Адрес                    |                                                                                 |
| -------------- | ------------------------ | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Протокол       | Адрес                            |                                                                                           |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) предоставляет сервис DNS-over-HTTPS, работающий как Cloudflare Worker, и сервис DNS-over-TLS, работающий как Fly.io Worker с настраиваемыми списками блокировки.

#### Нефильтрующий

| Протокол       | Адрес                           |                                                                             |
| -------------- | ------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[УправлениеD](https://controld.com/free-dns) — настраиваемый DNS-сервис с возможностями прокси-сервера. Это означает, что она не только блокирует рекламу, порно и прочее, но может и разблокировать веб-сайты и сервисы.

#### Нефильтрующий

| Протокол       | Адрес                             |                                                                                          |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` и `76.76.10.0`        | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| IPv6           | `2606:1a40::` и `2606:1a40:1::`   | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Добавить в AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

#### Блокировка вредоносного ПО

| Протокол       | Адрес                             |                                                                                          |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Добавить в AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Блокировка вредоносных доменов и рекламы

| Протокол       | Адрес                             |                                                                                          |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Добавить в AdGuard](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Блокируют вредоносные сайты + рекламу + социальные медиа

| Протокол       | Адрес                             |                                                                                          |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Добавить в AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [Добавить в AdGuard](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) предоставляет общедоступный DNS-сервис с минимизацией QNAME, конечными точками в Австралии, Германии, Сингапуре, Швеции, Великобритании и США (Нью-Йорк и Лос-Анджелес).

#### Нефильтрующий

| Протокол       | Адрес                               |                                                                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Блокировка рекламы

| Протокол       | Адрес                                       |                                                                                             |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Добавить в AdGuard](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [Добавить в AdGuard](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Небольшие персональные резолверы

В этом разделе собраны маленькие, в основном персональные DNS-резолверы. Часто у них всего один или очень мало серверов и хуже время работоспособности по сравнению с «большими» провайдерами. Мы не сможем должным образом следить за их доступностью. **Используйте их на свой страх и риск!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) — это персональный DNS-сервис, расположенный в Мумбаи, Индия.

Без логирования | Фильтрует рекламу, трекеры, фишинг и т. д. | DNSSEC | Минимизация QNAME | Нет EDNS Client Subnet.

| Протокол       | Адрес                                                              |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Хост: `2.dnscrypt-cert.dns.arapurayil.com` IP-адрес: `3.7.156.128` | [Добавить в AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS-over-HTTPS | Хост: `https://dns.arapurayil.com/dns-query`                       | [Добавить в AdGuard](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |

#### Официальный DNS-сервер от Dandelion Sprout's

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) — это персональный DNS-сервис, расположенный в Тронхейме, Норвегия, и использующий инфраструктуру AdGuard Home.

Блокирует больше рекламы и вредоносного ПО, чем AdGuard DNS благодаря более продвинутому синтаксису, также блокирует ультраправые таблоиды и большинство имиджбордов, частично блокирует трекинг. Логирование используется, чтобы улучшить используемые им фильтры (например, для разблокирования сайтов, которые не должны были блокироваться) и определить наиболее удачное время для системного обновления сервера.

| Протокол       | Адрес                                                 |                                                                                                          |
| -------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Добавить в AdGuard](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Добавить в AdGuard](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Добавить в AdGuard](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4      | Меняется, см. ссылку выше.                            |                                                                                                          |
| DNS, IPv6      | Меняется, см. ссылку выше.                            |                                                                                                          |
| DNSCrypt, IPv4 | Меняется, см. ссылку выше.                            |                                                                                                          |
