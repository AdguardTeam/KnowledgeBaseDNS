---
title: Provedores de DNS conhecidos
sidebar_position: 3
---

### AdGuard DNS

[Adguard DNS](https://adguard-dns.io/welcome.html) é uma solução alternativa para bloqueio de anúncios, proteção de privacidade e controle parental. It provides the necessary number of protection features against online ads, trackers, and phishing, no matter what platform and device you use.

#### Padrão

These servers block ads, tracking, and phishing.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.14` e `94.140.15.15`                                               | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6       | `2a10:50c0::ad1:ff` e `2a10:50c0::ad2:ff`                                     | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS sobre HTTPS | `https://dns.adguard-dns.com/dns-query`                                       | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS sobre TLS   | `tls://dns.adguard-dns.com`                                                   | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-sobre-QUIC  | `quic://dns.adguard-dns.com`                                                  | [Adicionar ao AdGuard](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |

#### Proteção familiar

These servers provide the Default features + Blocking adult websites + Safe search.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.15` e `94.140.15.16`                                               | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6       | `2a10:50c0::bad1:ff` e `2a10:50c0::bad2:ff`                                   | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS sobre HTTPS | `https://family.adguard-dns.com/dns-query`                                    | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS sobre TLS   | `tls://family.adguard-dns.com`                                                | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-sobre-QUIC  | `quic://family.adguard-dns.com`                                               | [Adicionar ao AdGuard](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Sem filtragem

Each of these servers provides a secure and reliable connection, but unlike the "Standard" and "Family Protection" servers, they don't filter anything.

| Protocolo       | Endereço                                                                       |                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.140` e `94.140.14.141`                                              | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6       | `2a10:50c0::1:ff` e `2a10:50c0::2:ff`                                          | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS sobre HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                 | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS sobre TLS   | `tls://unfiltered.adguard-dns.com`                                             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-sobre-QUIC  | `quic://unfiltered.adguard-dns.com`                                            | [Adicionar ao AdGuard](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) é um serviço DNS recursivo gratuito. Os servidores do Yandex.DNS estão localizados na Rússia, países membros da CEI, e Europa Ocidental. As solicitações dos usuários são processadas pelos data centers mais próximos, que oferecem altas velocidades de conexão.

#### Básico

In "Basic" mode, there is no traffic filtering.

| Protocolo      | Endereço                                                              |                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` e `77.88.8.1`                                             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` e `2a02:6b8:0:1::feed:0ff`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Adicionar ao AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |

#### Seguro

In "Safe" mode, protection from infected and fraudulent sites is provided.

| Protocolo | Endereço                                        |                                                                         |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` and `77.88.8.2`                    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` e `2a02:6b8:0:1::feed:bad` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |

#### Família

In "Family" mode, protection from infected, fraudulent and adult sites is provided.

| Protocolo | Endereço                                        |                                                                         |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` e `77.88.8.7`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` e `2a02:6b8:0:1::feed:a11` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) é um serviço DNS que fornece filtragem personalizável. Este serviço oferece uma maneira segura de navegar na web sem conteúdo impróprio.

#### Filtro familiar

Blocks access to all adult, pornographic and explicit sites, including proxy & VPN domains and mixed content sites.

| Protocolo       | Endereço                                                 |                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.168` e `185.228.169.168`                    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6       | `2a0d:2a00:1::` e `2a0d:2a00:2::`                        | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4  | Provedor: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6  | Provedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`       | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS sobre TLS   | `tls://family-filter-dns.cleanbrowsing.org`              | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Filtro adulto

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains.

| Protocolo       | Endereço                                                  |                                                                                                                                               |
| --------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.10` e `185.228.169.11`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6       | `2a0d:2a00:1::1` e `2a0d:2a00:2::1`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4  | Provedor: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6  | Provedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`         | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS sobre TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |

#### Filtro de segurança

Blocks phishing, spam and malicious domains.

| Protocolo       | Endereço                                             |                                                                                                           |
| --------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.9` e `185.228.169.9`                    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6       | `2a0d:2a00:1::2` e `2a0d:2a00:2::2`                  | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS sobre TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) is a domain name resolution service that resolves your DNS requests through worldwide network of DNS servers. Remove anúncios excessivos e protege contra phishing e spyware.

| Protocolo      | Endereço                                                               |                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` e `8.20.247.20`                                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Confiabilidade & Desempenho 1

These servers provide reliable and fast DNS lookups without blocking any specific categories.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` e `156.154.71.1`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` e `2610:a1:1019::1` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Confiabilidade & Desempenho 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (non-existent domain) responses to landing pages.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` e `156.154.71.5`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` e `2610:a1:1019::5` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Proteção contra ameaças

These servers provide protection against malicious domains and also include "Reliability & Performance" features.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` e `156.154.71.2`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` e `2610:a1:1019::2` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Segurança familiar

These servers provide adult content blocking and also include "Reliability & Performance" + "Threat Protection" features.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` e `156.154.71.3`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` e `2610:a1:1019::3` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### Segurança empresarial

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` e `156.154.71.4`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` e `2610:a1:1019::4` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www. opendns. com/) é um serviço que estende o DNS incorporando recursos como filtragem de conteúdo e proteção contra phishing com tempo de inatividade zero.

#### Padrão

DNS servers with custom filtering that protects your device from malware.

| Protocolo       | Endereço                                                      |                                                                                                                                                    |
| --------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.222` e `208.67.220.220`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6       | `2620:119:35::35` e `2620:119:53::53`                         | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS sobre HTTPS | `https://doh.opendns.com/dns-query`                           | [Adicionar ao AdGuard](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### FamilyShield

OpenDNS servers that provide adult content blocking.

| Protocolo       | Endereço                                                      |                                                                                                                                                   |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.123` e `208.67.220.123`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS sobre HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Adicionar ao AdGuard](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers. google. com/speed/public-dns/) é um serviço de resolução de DNS global e gratuito que você pode usar como alternativa ao seu provedor de DNS atual.

| Protocolo       | Endereço                                        |                                                                                                                        |
| --------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `8.8.8.8` e `8.8.4.4`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6       | `2001:4860:4860::8888` e `2001:4860:4860::8844` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS sobre HTTPS | `https://dns.google/dns-query`                  | [Adicionar ao AdGuard](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://dns.google`                              | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) é um serviço de DNS gratuito e rápido que funciona como um servidor de nomes recursivo, fornecendo resolução de nomes de domínio para qualquer host na Internet.

#### Padrão

| Protocolo             | Endereço                                        |                                                                                                                                                                                                                |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.1` e `1.0.0.1`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6             | `2606:4700:4700::1111` e `2606:4700:4700::1001` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS sobre HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS sobre HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS sobre TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Somente bloqueio de malware

| Protocolo       | Endereço                                        |                                                                                                    |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `1.1.1.2` e `1.0.0.2`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6       | `2606:4700:4700::1112` e `2606:4700:4700::1002` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS sobre HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://security.cloudflare-dns.com`             | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |

#### Bloqueio de malware e conteúdo adulto

| Protocolo             | Endereço                                        |                                                                                                 |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.3` e `1.0.0.3`                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6             | `2606:4700:4700::1113` e `2606:4700:4700::1003` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS sobre HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS sobre TLS         | `tls://family.cloudflare-dns.com`               | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) is a free, recursive, anycast DNS platform that provides high-performance, privacy, and security protection from phishing and spyware. Os servidores Quad9 não fornecem um componente de censura.

#### Padrão

Regular DNS servers which provide protection from phishing and spyware. They include blocklists, DNSSEC validation, and other security features.

| Protocolo       | Endereço                                                       |                                                                                                                                                     |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.9` e `149.112.112.112`                                  | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6       | `2620:fe::fe` IP: `2620:fe::fe:9`                              | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS sobre HTTPS | `https://dns.quad9.net/dns-query`                              | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS sobre TLS   | `tls://dns.quad9.net`                                          | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Unsecured

Unsecured DNS servers don't provide security blocklists, DNSSEC, or EDNS Client Subnet.

| Protocolo       | Endereço                                                          |                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.10` e `149.112.112.10`                                     | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6       | `2620:fe::10` IP: `2620:fe::fe:10`                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS sobre HTTPS | `https://dns10.quad9.net/dns-query`                               | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS sobre TLS   | `tls://dns10.quad9.net`                                           | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client Subnet is a method that includes components of end-user IP address data in requests that are sent to authoritative DNS servers. It provides security blocklist, DNSSEC, EDNS Client Subnet.

| Protocolo       | Endereço                                                       |                                                                                                                                                     |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.11` e `149.112.112.11`                                  | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6       | `2620:fe::11` IP: `2620:fe::fe:11`                             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS sobre HTTPS | `https://dns11.quad9.net/dns-query`                            | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS sobre TLS   | `tls://dns11.quad9.net`                                        | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: they neither sell public DNS data to third parties nor redirect users' queries to serve them ads.

| Protocolo | Endereço                               |                                                                     |
| --------- | -------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` ou `64.6.65.6`             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` ou `2620:74:1c::2:2` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) is a Swiss public DNS service provided by [switch.ch](https://www.switch.ch/).

| Protocolo       | Endereço                                                                         |                                                                                 |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv4       | Provedor: `dns.switch.ch` IP: `130.59.31.248`                                    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6       | Provedor: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS sobre HTTPS | `https://dns.switch.ch/dns-query`                                                | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` and IPv6: `2001:620:0:ff::2` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) is a free alternative DNS service by Dyn.

| Protocolo | Endereço                          |                                                                |
| --------- | --------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` e `216.146.36.36` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) is a fast and free server without logging with a privacy protection feature.

| Protocolo | Endereço                                                    |                                                                                    |
| --------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` e `84.200.70.40`                             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` e `2001:1608:10:25::9249:d69b` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) is a privacy-friendly DNS service with OpenNIC support that blocks ads, trackers, malware and does not log any data.

| Anycast Network | Endereço                             |                                                                                     |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.futuredns.me/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dns.futuredns.me`             | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-sobre-QUIC  | `quic://dns.futuredns.me`            | [Adicionar ao AdGuard](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Localização          | Address - IPv4                                                              |
| -------------------- | --------------------------------------------------------------------------- |
| Londres, Reino Unido | `52.56.224.201`| [Add to AdGuard](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Milão, Itália        | `15.161.11.3`| [Add to AdGuard](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Estocolmo, Suécia    | `13.49.168.178`| [Add to AdGuard](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Ashburn, EUA         | `52.0.69.145`| [Add to AdGuard](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| São Francisco, EUA   | `13.56.204.161`| [Add to AdGuard](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Montreal, Canadá     | `3.97.137.100`| [Add to AdGuard](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Cingapura            | `54.254.82.60`| [Add to AdGuard](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Tóquio, Japão        | `54.199.94.55`| [Add to AdGuard](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Mumbai, índia        | `3.7.162.217`| [Add to AdGuard](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| São Paulo, Brasil    | `177.71.191.153`| [Add to AdGuard](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions for content filtering and internet security.

| Protocolo | Endereço         |                                                                 |
| --------- | ---------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) is a fast and secure DNS service with protection against ads, tracking, and phishing.

#### West DNS Server (Principal)

| Protocolo       | Endereço                          |                                                                                 |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.comss.one/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dns.comss.one`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)               |
| DNS-sobre-QUIC  | `quic://dns.comss.one:784`        | [Adicionar ao AdGuard](sdns://BAAAAAAAAAAAAAARZG5zLmNvbXNzLm9uZTo3ODQ)          |

#### East DNS Server (Sibéria e Extremo Oriente)

| Protocolo       | Endereço                               |                                                                                        |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.east.comss.one/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://dns.east.comss.one`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |
| DNS-sobre-QUIC  | `quic://dns.east.comss.one`            | [Adicionar ao AdGuard](sdns://BAAAAAAAAAAAAAAWZG5zLmVhc3QuY29tc3Mub25lOjc4NA)          |

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Protocolo | Endereço                        |                                                               |
| --------- | ------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` e `195.46.39.40` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protects against theft of personal and financial data. Keep viruses, ransomware, and other malware out of your home.

#### Private

In "Private" mode, DNS resolution only.

| Protocolo              | Endereço                                                                                           |                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| DNS, IPv4              | `149.112.121.10` e `149.112.122.10`                                                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620:10A:80BB::10` e `2620:10A:80BC::10`                                                          | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS sobre HTTPS        | `https://private.canadianshield.cira.ca/dns-query`                                                 | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS - Private | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.10` and IPv6: `2620:10A:80BB::10` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Protegido

In "Protected" mode, malware and phishing protection.

| Protocolo                | Endereço                                                                                              |                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` e `149.112.122.20`                                                                   | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` e `2620:10A:80BC::20`                                                             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS sobre HTTPS          | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Protected | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` and IPv6: `2620:10A:80BB::20` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Família

In "Family" mode, Protected + blocking adult content.

| Protocolo             | Endereço                                                                                              |                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` e `149.112.122.30`                                                                   | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` e `2620:10A:80BC::30`                                                             | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS sobre HTTPS       | `https://family.canadianshield.cira.ca/dns-query`                                                     | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Family | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30` and IPv6: `2620:10A:80BB::30` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) is a free alternative DNS service by OpenNIC Project.

| Protocolo | Endereço                                 |                                                                     |
| --------- | ---------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` e `169.239.202.202`    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` e `2a05:dfc7:5353::53` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) A small hobby DNS project. No logs, Ethereum Name Service, DNSSEC ready & Filtered ads, trackers, malwares.

#### Servidor DNS finlandês

| Protocolo             | Endereço                                                                 |                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS sobre HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`    | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Servidor DNS japonês

| Protocolo             | Endereço                                                                            |                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Hostname: `tls://dot-jp.blahdns.com`  IP: `139.162.112.47`                          | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS sobre HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query`                                    | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Servidor DNS alemão

| Protocolo             | Endereço                                                                 |                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Hostname: `tls://dot-de.blahdns.com`  IP: `159.69.198.101`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS sobre HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`    | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) is a privacy friendly DNS service run by Noah Seefried.

| Protocolo       | Endereço                                                                                          |                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` and IPv6: `2a01:4f9:2a:1919::9301` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` and IPv6: `2a01:4f9:2a:1919::9301`             | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) aims to block adult websites. It enables children and adults to surf the Internet safely without worrying about being tracked by malicious websites.

| Protocolo       | Endereço                                                   |                                                                                                                                                |
| --------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS sobre TLS   | `tls://dns-dot.dnsforfamily.com`                           | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4       | `94.130.180.225` e `78.47.64.161`                          | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6       | `2a01:4f8:1c0c:40db::1` e `2a01:4f8:1c17:4df8::1`          | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4  | Provedor: `dnsforfamily.com` IP: `94.130.180.225`          | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6  | Provedor: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| Protocolo       | Endereço                                  |                                                                        |
| --------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| DNS, IPv4       | `193.17.47.1` e `185.43.135.1`            | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6       | `2001:148f:ffff::1` e `2001:148f:fffe::1` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS sobre HTTPS | `https://odvr.nic.cz/doh`                 | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS sobre TLS   | `tls://odvr.nic.cz`                       | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) is a free recursive DNS service that committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It includes AliGuard facility to protect users from various attacks and threats.

| Protocolo       | Endereço                             |                                                                                   |
| --------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| DNS, IPv4       | `223.5.5.5` e `223.6.6.6`            | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6       | `2400:3200::1` e `2400:3200:baba::1` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS sobre HTTPS | `https://dns.alidns.com/dns-query`   | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dns.alidns.com`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It supports DNS64 to provide domain name resolution only for IPv6 users.

| Protocolo       | Endereço                          |                                                                                 |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| DNS, IPv6       | `240C::6666` e `240C::6644`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS sobre HTTPS | `https://dns.cfiec.net/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dns.cfiec.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| Protocolo      | Endereço                                                     |                                                                                                                                                 |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` e `180.131.145.145`                        | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** is a industry-leading recursive DNS service with advanced network security threat protection.

| Protocolo       | Endereço                         |                                                                             |
| --------------- | -------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4       | `101.226.4.6` e `218.30.118.6`   | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4       | `123.125.81.6` e `140.207.198.6` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS sobre HTTPS | `https://doh.360.cn/dns-query`   | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dot.360.cn`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) is a public DNS service operated by Internet Initiative Japan. It also blocks child abuse content.

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://public.dns.iij.jp/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://public.dns.iij.jp`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) is a privacy-friendly DNS provider with years of experience in domain name resolution services development, it aims to provide users more rapid, accurate and stable recursive resolution service.

| Protocolo       | Endereço                        |                                                                         |
| --------------- | ------------------------------- | ----------------------------------------------------------------------- |
| DNS, IPv4       | `119.29.29.29` e `119.28.28.28` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS sobre HTTPS | `https://doh.pub/dns-query`     | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS sobre HTTPS | `https://dns.pub/dns-query`     | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dot.pub`                 | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** is a professional and high-reliability DNS service.

#### Normal

Block ads and annoying websites.

| Protocolo | Endereço                              |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` e `114.114.115.115` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Seguro

Blocks phishing, malicious and other unsafe websites.

| Protocolo | Endereço                              |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` e `114.114.115.119` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Família

These servers block adult websites and inappropriate contents.

| Protocolo | Endereço                              |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` e `114.114.115.110` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center).

| Protocolo       | Endereço                              |                                                                                |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------ |
| DNS, IPv4       | `101.101.101.101` e `101.102.103.104` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6       | `2001:de4::101` e `2001:de4::102`     | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS sobre HTTPS | `https://dns.twnic.tw/dns-query`      | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://101.101.101.101`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |

### OneDNS

**OneDNS** is a secure, fast, free niche DNS service with malicious domains blocking facility.

#### Pure Edition

| Protocolo | Endereço                         |                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` and `52.80.52.52` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| Protocolo | Endereço                         |                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` and `52.80.66.66` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blocks over 140K ads, ad-tracking, malware and phishing domains. No logging, no ECS, DNSSEC validation, free!

#### Singapore DNS Server

| Protocolo       | Endereço                                                                   | Localização                                                                                                                                                         |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `174.138.21.128`                                                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6       | `2400:6180:0:d0::5f6e:4001`                                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128:`             | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS sobre HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party)                | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS sobre HTTPS | `https://doh.tiar.app/dns-query`                                           | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-sobre-QUIC  | `quic://doh.tiar.app`                                                      | [Adicionar ao AdGuard](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS sobre TLS   | `tls://dot.tiar.app`                                                       | [Adicionar ao AdGuard](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |

#### Servidor DNS japonês

| Protocolo       | Endereço                                                                       |                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `172.104.93.80`                                                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6       | `2400:8902::f03c:91ff:feda:c514`                                               | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80:`                   | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS sobre HTTPS | `https://jp.tiarap.org/dns-query`                                              | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS sobre HTTPS | `https://jp.tiar.app/dns-query`                                                | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS sobre TLS   | `tls://jp.tiar.app`                                                            | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) is an open, free and public DNS service. No DNS redirects, no logging.

| Protocolo | Endereço                            |                                                                 |
| --------- | ----------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` e `172.104.49.100` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` e `37.235.1.177`     | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) is a free anonymous DNS resolver by Freenom World.

| Protocolo | Endereço                      |                                                             |
| --------- | ----------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` e `80.80.81.81` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) is a small Ad-Blocking DNS hobby project.

#### OSZX server

These servers provide no ad blocking, keep no logs, and have DNSSEC enabled.

| Protocolo       | Endereço                                                                 |                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.83.141`                                                           | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6       | `2001:41d0:801:2000::d64`                                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS sobre HTTPS | `https://dns.oszx.co/dns-query`                                          | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS sobre TLS   | `tls://dns.oszx.co`                                                      | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### PumpleX server

These servers provide no ad blocking, keep no logs, and have DNSSEC enabled.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.82.198`                                                                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::1b28`                                                    | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS sobre HTTPS | `https://dns.pumplex.com/dns-query`                                           | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS sobre TLS   | `tls://dns.pumplex.com`                                                       | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operates DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern protocols.

| Protocolo       | Endereço                                |                                                                                         |
| --------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.applied-privacy.net/query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS sobre TLS   | `tls://dot1.applied-privacy.net`        | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) is a DNS service by Strongarm that prevents people from interacting with malicious content.

| Protocolo | Endereço                         |                                                                |
| --------- | -------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` e `52.3.100.184` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) is a DNS service by SafeSurfer that protects your device from harmful and adult contents.

| Protocolo      | Endereço                                                           |                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` e `104.197.28.121`                               | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121:` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A secure, private, open-source DNS resolver with malware protection, ad blocking and without logs. Degoogle and Ungoogle your phone, tablet, and computer.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS sobre HTTPS | `https://dns.decloudus.com/dns-query`                                         | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS sobre TLS   | `tls://dns.decloudus.com`                                                     | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) is run by Elias Ojala, Finland.

| Protocolo       | Endereço                                 |                                                                                           |
| --------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://resolver-eu.lelux.fi`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running off of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo.

| Protocolo      | Endereço                                                         |                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Adicionar ao AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) provide free DNS service with no logging, DNSSEC enabled.

| Protocolo       | Endereço                          |                                                                             |
| --------------- | --------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4       | `185.222.222.222` e `45.11.45.11` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6       | `2a09::` e `2a11::`               | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS sobre HTTPS | `https://doh.dns.sb/dns-query`    | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://185.222.222.222`           | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) is a redundant DNS resolver with an ad blocker and no logging provided by [adminforge](https://adminforge.de/).

| Protocolo       | Endereço                                              |                                                                               |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4       | `176.9.93.198` and `176.9.1.117`                      | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6       | `2a01:4f8:151:34aa::198` and `2a01:4f8:141:316d::117` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS sobre HTTPS | `https://dnsforge.de/dns-query`                       | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dnsforge.de`                                   | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servers provided by [Restena Foundation](https://www.restena.lu/).

| Protocolo       | Endereço                                                                            |                                                                                        |
| --------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` and IPv6: `2001:a18:1::29` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` and IPv6: `2001:a18:1::29`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver.

| Protocolo      | Endereço                                                             |                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Adicionar ao AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Adicionar ao AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München.

| Protocolo             | Endereço                                                               |                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                        | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS sobre HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                            | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4        | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6        | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland.

| Protocolo       | Endereço                                                                                       |                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` and IPv6: `2a05:fc84::42` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` and IPv6: `2a05:fc84::43`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| Protocolo       | Endereço                                     |                                                                                    |
| --------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| DNS, IPv4       | `88.198.92.222`                              | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS sobre HTTPS | `https://doh.libredns.gr/dns-query`          | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS sobre HTTPS | `https://doh.libredns.gr/ads`                | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS sobre TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, no filtering, no logging.

| Protocolo             | Endereço                                                                                  |                                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `83.77.85.7`                                   | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS sobre HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190`                   | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4        | Provider: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443`                                | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6        | Provider: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

A collaborative open project to promote, implement and deploy [DNS Privacy](https://dnsprivacy.org/).

DNS servers run by the [Stubby developers](https://getdnsapi.net/).

| Protocolo     | Endereço                                                                                                                      |                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| DNS sobre TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS sobre TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15`  | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS sobre TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Other DNS servers with 'no logging' policy.

| Protocolo           | Endereço                                                                                                             |                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| DNS sobre TLS       | Provider: `UncensoredDNS` Hostname: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` and IPv6: `2a01:3a0:53:53::0` | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS sobre TLS       | Provider: `UncensoredDNS` Hostname: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` and IPv6: `2001:67c:28a4::` | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS sobre TLS       | Provider: `dkg` Hostname: `tls://dns.cmrg.net` IP: `199.58.81.218` and IPv6: `2001:470:1c:76d::53`                   | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-sobre-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS sobre TLS       | Hostname: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` and IPv6: `2001:8b0:24:24::24`                        | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS sobre TLS       | Hostname: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` and IPv6: `2a01:4f8:c0c:3c03::2`                            | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS sobre TLS       | Hostname: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` and IPv6: `2a01:4f8:c0c:3bfc::2`                            | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-sobre-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS sobre TLS       | Hostname: `tls://dns.neutopia.org` IP: `89.234.186.112` and IPv6: `2a00:5884:8209::2`                                | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS sobre TLS       | Provider: `Go6Lab` Hostname: `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                  | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS sobre TLS       | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS servers with minimal logging/restrictions. These servers use some logging, self-signed certs or no support for strict mode.

| Protocolo     | Endereço                                                                                                          |                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS sobre TLS | Provider: `NIC Chile` Hostname: `dnsotls.lab.nic.cl` IP: `200.1.123.46` and IPv6: `2001:1398:1:0:200:1:123:46`    | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS sobre TLS | Provider: `OARC` Hostname: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` and IPv6: `2620:ff:c000:0:1::64:25` | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) A zero-logging and ad-blocking DNS service provided by Fredrik Pettersson.

#### Blitz

[Configurable filtering](https://blitz-setup.ahadns.com/) worldwide DoH-only variant.

| Protocolo                                    | Endereço                          |                                                                                 |
| -------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS, uncensored                   | `https://blitz.ahadns.com`        | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS, OISD filter                  | `https://blitz.ahadns.com/1:1`    | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Holanda

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4       | `5.2.75.75`                           | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6       | `2a04:52c0:101:75::75`                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS sobre HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.nl.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### Índia

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.79.120.233`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6       | `2400:8904:e001:43::43`               | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS sobre HTTPS | `https://doh.in.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.in.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.67.219.208`                       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6       | `2a04:bdc7:100:70::70`                | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS sobre HTTPS | `https://doh.la.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.la.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### Nova york

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.213.26.187`                      | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6       | `2a0d:5600:33:3::3`                   | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS sobre HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.ny.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Polônia

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.pl.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### Itália

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.it.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.it.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |

#### Espanha

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.es.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.es.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Noruega

| Protocolo       | Endereço                              |                                                                                       |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.no.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dot.no.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Chicago

| Protocolo       | Endereço                               |                                                                                        |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://dot.chi.ahadns.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS Server 1

| Protocolo      | Endereço                                                    |                                                                                                                                                |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                              | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31:` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS sobre TLS  | `tls://dot.seby.io`                                         | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) is physically located near Barcelona, Spain. puntCAT offers a public DNS service, free, secure, close and that respects your privacy.

| Protocolo | Endereço           |                                                                       |
| --------- | ------------------ | --------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) operate public DNS resolvers to speed up requests, increase redundancy. The service is provided by [Peerix](https://www.peerix.net/)

#### Padrão

These servers provide DNS resolution without traffic filtering.

| Protocolo       | Endereço                              |                                                                                    |
| --------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.235.81.1` e `185.235.81.2`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6       | `2a0d:4d00:81::1` e `2a0d:4d00:81::2` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS sobre HTTPS | `tls://doh.dnslify.com`               | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://doh.dnslify.com`               | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Seguro

Safe mode guard against infected, fraudulent or bot sites.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` e `185.235.81.4`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` e `2a0d:4d00:81::4` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Família

Family mode offers protection by "Safe" resolvers and blocks adult sites.

| Protocolo | Endereço                              |                                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` e `185.235.81.6`       | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` e `2a0d:4d00:81::6` | [Adicionar ao AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) provides publicly accessible non-filtering resolvers with no logging in addition to its freemium configurable filtering resolvers with optional logging.

#### Ultra-low latency

| Protocolo       | Endereço                 |                                                                                   |
| --------------- | ------------------------ | --------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.nextdns.io` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://dns.nextdns.io`   | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Protocolo       | Endereço                         |                                                                                             |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://anycast.dns.nextdns.io` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS sobre TLS   | `tls://anycast.dns.nextdns.io`   | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker and DNS-over-TLS service running as Fly.io Worker with configurable blocklists.

#### Sem filtragem

| Protocolo       | Endereço                        |                                                                               |
| --------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://basic.rethinkdns.com/` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS sobre TLS   | `tls://max.rethinkdns.com`      | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) is a customizable DNS service with proxy capabilities. This means it not only blocks things (ads, porn, etc.), but can also unblock websites and services.

#### Sem filtragem

| Protocolo       | Endereço                          |                                                                                            |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `76.76.2.0` and `76.76.10.0`      | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| IPv6            | `2606:1a40::` and `2606:1a40:1::` | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS sobre HTTPS | `https://freedns.controld.com/p0` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS sobre TLS   | `p0.freedns.controld.com`         | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

#### Block malware

| Protocolo       | Endereço                          |                                                                                            |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `76.76.2.1`                       | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS sobre HTTPS | `https://freedns.controld.com/p1` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS sobre TLS   | `tls://p1.freedns.controld.com`   | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Block malware + ads

| Protocolo       | Endereço                          |                                                                                            |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `76.76.2.2`                       | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS sobre HTTPS | `https://freedns.controld.com/p2` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS sobre TLS   | `tls://p2.freedns.controld.com`   | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Block malware + ads + social

| Protocolo       | Endereço                          |                                                                                            |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `76.76.2.3`                       | [Adicionar ao AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS sobre HTTPS | `https://freedns.controld.com/p3` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS sobre TLS   | `tls://p3.freedns.controld.com`   | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) provides publicly accessible DNS with QNAME minimization, endpoints located in Australia, Germany, Singapore, Sweden, United Kingdom and United States (New York and Los Angeles).

#### Sem filtragem

| Protocolo       | Endereço                            |                                                                                    |
| --------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.mullvad.net/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://doh.mullvad.net`             | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Ad blocking

| Protocolo       | Endereço                                    |                                                                                               |
| --------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Adicionar ao AdGuard](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS sobre TLS   | `tls://adblock.doh.mullvad.net`             | [Adicionar ao AdGuard](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Small personal resolvers

In this section we list small, mostly personal DNS resolvers. They often have only one or very few servers and worse uptime than 'big' providers. We won't be able to proper monitor their availability. **Use them at your own risk!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) is a personal DNS service hosted in Mumbai, India.

Non-logging | Filters ads, trackers, phishing,etc | DNSSEC | QNAME Minimization | No EDNS Client Subnet.

| Protocolo       | Endereço                                                     |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS sobre HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Adicionar ao AdGuard](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) is a personal DNS service hosted in Trondheim, Norway, using an AdGuard Home infrastructure.

Blocks more ads and malware than AdGuard DNS thanks to more advanced syntax, but goes easier on trackers, and blocks alt-right tabloids and most imageboards. Logging is used to improve its used filterlists (e.g. by unblocking sites that shouldn't have been blocked), and to determine the least bad times for server system updates.

| Protocolo       | Endereço                                              |                                                                                                            |
| --------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Adicionar ao AdGuard](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Adicionar ao AdGuard](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-sobre-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Adicionar ao AdGuard](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4       | Varies; see link above.                               |                                                                                                            |
| DNS, IPv6       | Varies; see link above.                               |                                                                                                            |
| DNSCrypt, IPv4  | Varies; see link above.                               |                                                                                                            |
