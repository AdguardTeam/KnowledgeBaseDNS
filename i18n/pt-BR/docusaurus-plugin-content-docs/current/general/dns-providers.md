---
title: Provedores de DNS conhecidos
sidebar_position: 3
---

:::info

Aqui sugerimos uma lista de provedores de DNS confiáveis. Para usá-los, primeiro instale o bloqueador de anúncios AdGuard ou o AdGuard VPN em seu dispositivo. Em seguida, no mesmo dispositivo, clique no link de um provedor neste artigo

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[Adguard DNS](https://adguard-dns.io/welcome.html) é uma solução alternativa para bloqueio de anúncios, proteção de privacidade e controle parental. Ele fornece os recursos de proteção necessários contra anúncios online, rastreadores e phishing, independentemente da plataforma e do dispositivo que você usa.

#### Padrão

Esses servidores bloqueiam anúncios, rastreamento e phishing.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.14` e `94.140.15.15`                                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6       | `2a10:50c0::ad1:ff` e `2a10:50c0::ad2:ff`                                     | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS sobre HTTPS | `https://dns.adguard-dns.com/dns-query`                                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS sobre TLS   | `tls://dns.adguard-dns.com`                                                   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-sobre-QUIC  | `quic://dns.adguard-dns.com`                                                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                          |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                                 |

#### Proteção familiar

Esses servidores fornecem os recursos padrão + Bloqueio de sites adultos + Pesquisa segura.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.15` e `94.140.15.16`                                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6       | `2a10:50c0::bad1:ff` e `2a10:50c0::bad2:ff`                                   | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS sobre HTTPS | `https://family.adguard-dns.com/dns-query`                                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS sobre TLS   | `tls://family.adguard-dns.com`                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-sobre-QUIC  | `quic://family.adguard-dns.com`                                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                                 |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                       |

#### Sem filtragem

Cada um desses servidores fornece uma conexão segura e confiável, mas ao contrário dos servidores "Padrão" e "Proteção Familiar", eles não filtram nada.

| Protocolo       | Endereço                                                                       |                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.140` e `94.140.14.141`                                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6       | `2a10:50c0::1:ff` e `2a10:50c0::2:ff`                                          | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS sobre HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS sobre TLS   | `tls://unfiltered.adguard-dns.com`                                             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-sobre-QUIC  | `quic://unfiltered.adguard-dns.com`                                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                             |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                                |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) é um serviço de DNS recursivo gratuito. Os servidores do Yandex.DNS estão localizados na Rússia, nos países da CEI e na Europa Ocidental. As solicitações dos usuários são processadas pelo data center mais próximo, que oferece altas velocidades de conexão.

#### Básico

No modo "Básico", não há filtragem de tráfego.

| Protocolo      | Endereço                                                              |                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` e `77.88.8.1`                                             | [Adicionar ao AdGuard](adguard:add_dns_server?address=77.88.8.8&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` e `2a02:6b8:0:1::feed:0ff`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Adicionar ao AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)           |

#### Seguro

No modo "Seguro", é fornecida proteção contra sites com vírus e fraudulentos.

| Protocolo | Endereço                                        |                                                                                                                                                                         |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` and `77.88.8.2`                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=77.88.8.88&name=),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=)                |
| DNS, IPv6 | `2a02:6b8::feed:bad` e `2a02:6b8:0:1::feed:bad` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Família

No modo "Família", é fornecida a proteção contra sites infectados, fraudulentos e de conteúdo adulto.

| Protocolo | Endereço                                        |                                                                                                                                                                         |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` e `77.88.8.7`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=77.88.8.3&name=),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=)                  |
| DNS, IPv6 | `2a02:6b8::feed:a11` e `2a02:6b8:0:1::feed:a11` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) é um serviço DNS que fornece filtragem personalizável. Este serviço oferece uma maneira segura de navegar na web sem conteúdo impróprio.

#### Filtro familiar

Bloqueia o acesso a todos os sites adultos, pornográficos e explícitos, incluindo domínios proxy & VPN e sites de conteúdo misto.

| Protocolo       | Endereço                                                 |                                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.168` e `185.228.169.168`                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6       | `2a0d:2a00:1::` e `2a0d:2a00:2::`                        | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4  | Provedor: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                                 |
| DNSCrypt, IPv6  | Provedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                                 |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS sobre TLS   | `tls://family-filter-dns.cleanbrowsing.org`              | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Filtro adulto

Menos restritivo que o Filtro Familiar, bloqueia apenas o acesso a conteúdo adulto e domínios maliciosos e de phishing.

| Protocolo       | Endereço                                                  |                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.10` e `185.228.169.11`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6       | `2a0d:2a00:1::1` e `2a0d:2a00:2::1`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4  | Provedor: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                              |
| DNSCrypt, IPv6  | Provedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                           |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`         | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS sobre TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Filtro de segurança

Bloqueia phishing, spam e domínios maliciosos.

| Protocolo       | Endereço                                             |                                                                                                                                                                                                                                                                                                     |
| --------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.9` e `185.228.169.9`                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6       | `2a0d:2a00:1::2` e `2a0d:2a00:2::2`                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS sobre HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS sobre TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo. com/secure-dns/) é um serviço de resolução de nomes de domínio que resolve suas solicitações de DNS por meio da rede mundial de servidores DNS. Remove anúncios excessivos e protege contra phishing e spyware.

| Protocolo      | Endereço                                                               |                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` e `8.20.247.20`                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)       |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www. security. neustar/digital-performance/dns-services/recursive-dns) é um serviço DNS recursivo baseado em nuvem gratuito que oferece acesso rápido e confiável a sites e aplicativos online com segurança integrada e inteligência contra ameaças.

#### Confiabilidade & Desempenho 1

Esses servidores fornecem pesquisas de DNS confiáveis e rápidas sem bloquear nenhuma categoria específica.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` e `156.154.71.1`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` e `2610:a1:1019::1` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Confiabilidade & Desempenho 2*

Esses servidores fornecem pesquisas de DNS confiáveis e rápidas sem bloquear nenhuma categoria específica e também impedem o redirecionamento de respostas de NXDomain (domínio inexistente) para páginas de destino.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` e `156.154.71.5`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` e `2610:a1:1019::5` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Proteção contra ameaças

Esses servidores fornecem proteção contra domínios maliciosos e também incluem recursos de "Confiabilidade & Desempenho".

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` e `156.154.71.2`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` e `2610:a1:1019::2` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Segurança familiar

Estes servidores fornecem bloqueio de conteúdo adulto e também incluem características de "Confiabilidade & Desempenho" + "Protecção contra Ameaças".

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` e `156.154.71.3`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` e `2610:a1:1019::3` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Segurança empresarial

Esses servidores fornecem bloqueio de conteúdo indesejado e perda de tempo e também incluem recursos "Confiabilidade & Desempenho" + "Proteção contra Ameaças" + "Segurança Familiar".

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` e `156.154.71.4`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` e `2610:a1:1019::4` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) é um serviço que estende o DNS incorporando recursos como filtragem de conteúdo e proteção contra phishing com tempo de inatividade zero.

#### Padrão

Servidores DNS com filtragem personalizada que protege seu dispositivo contra malware.

| Protocolo       | Endereço                                                      |                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.222` e `208.67.220.220`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6       | `2620:119:35::35` e `2620:119:53::53`                         | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                   |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                                  |
| DNS sobre HTTPS | `https://doh.opendns.com/dns-query`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

Servidores OpenDNS que fornecem bloqueio de conteúdo adulto.

| Protocolo       | Endereço                                                      |                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.123` e `208.67.220.123`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                       |
| DNS sobre HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) é um serviço de resolução de DNS global e gratuito que você pode usar como alternativa ao seu provedor de DNS atual.

| Protocolo       | Endereço                                        |                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `8.8.8.8` e `8.8.4.4`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6       | `2001:4860:4860::8888` e `2001:4860:4860::8844` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS sobre HTTPS | `https://dns.google/dns-query`                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS sobre TLS   | `tls://dns.google`                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) é um serviço de DNS gratuito e rápido que funciona como um servidor de nomes recursivo, fornecendo resolução de nomes de domínio para qualquer host na Internet.

#### Padrão

| Protocolo             | Endereço                                        |                                                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.1` e `1.0.0.1`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6             | `2606:4700:4700::1111` e `2606:4700:4700::1001` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS sobre HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS sobre HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS sobre TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Somente bloqueio de malware

| Protocolo       | Endereço                                        |                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `1.1.1.2` e `1.0.0.2`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6       | `2606:4700:4700::1112` e `2606:4700:4700::1002` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS sobre HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS sobre TLS   | `tls://security.cloudflare-dns.com`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Bloqueio de malware e conteúdo adulto

| Protocolo             | Endereço                                        |                                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.3` e `1.0.0.3`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6             | `2606:4700:4700::1113` e `2606:4700:4700::1003` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS sobre HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS sobre TLS         | `tls://family.cloudflare-dns.com`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9. net/) é uma plataforma DNS anycast gratuita e recursiva que fornece proteção de alto desempenho, privacidade e segurança contra phishing e spyware. Os servidores Quad9 não fornecem um componente de censura.

#### Padrão

Servidores DNS regulares que fornecem proteção contra phishing e spyware. Eles incluem listas de bloqueio, validação de DNSSEC e outros recursos de segurança.

| Protocolo       | Endereço                                                       |                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.9` e `149.112.112.112`                                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6       | `2620:fe::fe` IP: `2620:fe::fe:9`                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                                 |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                         |
| DNS sobre HTTPS | `https://dns.quad9.net/dns-query`                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS sobre TLS   | `tls://dns.quad9.net`                                          | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Inseguro

Servidores DNS inseguros não fornecem listas de bloqueio de segurança, DNSSEC ou sub-rede de cliente EDNS.

| Protocolo       | Endereço                                                          |                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.10` e `149.112.112.10`                                     | [Adicionar ao AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6       | `2620:fe::10` IP: `2620:fe::fe:10`                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                       |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                             |
| DNS sobre HTTPS | `https://dns10.quad9.net/dns-query`                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS sobre TLS   | `tls://dns10.quad9.net`                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### Suporte a [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client Subnet é um método que inclui componentes de dados de endereço IP do usuário final em solicitações enviadas a servidores DNS autoritativos. Ele fornece lista de bloqueio de segurança, DNSSEC, EDNS Client Subnet.

| Protocolo       | Endereço                                                       |                                                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.11` e `149.112.112.11`                                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6       | `2620:fe::11` IP: `2620:fe::fe:11`                             | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                       |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                                 |
| DNS sobre HTTPS | `https://dns11.quad9.net/dns-query`                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS sobre TLS   | `tls://dns11.quad9.net`                                        | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www. verisign. com/security-services/public-dns/) é um serviço de DNS gratuito que oferece maior estabilidade e segurança de DNS em relação a outras alternativas. A Verisign respeita a privacidade dos usuários: eles não vendem dados DNS públicos a terceiros nem redirecionam as consultas dos usuários para veicular anúncios.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` e `64.6.65.6`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` e `2620:74:1c::2:2` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) é um serviço DNS público suíço fornecido por [switch.ch](https://www.switch.ch/).

| Protocolo       | Endereço                                                                           |                                                                                                                                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | Provedor: `dns.switch.ch` IP: `130.59.31.248`                                      | [Adicionar ao AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6       | Provedor: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS sobre HTTPS | `https://dns.switch.ch/dns-query`                                                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS sobre TLS   | Nome do host: `tls://dns.switch.ch` IP: `130.59.31.248` e IPv6: `2001:620:0:ff::2` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) é um serviço DNS alternativo gratuito da Dyn.

| Protocolo | Endereço                          |                                                                                                                                                               |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` e `216.146.36.36` | [Adicionar ao AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) é um servidor rápido e gratuito sem registro com um recurso de proteção de privacidade.

| Protocolo | Endereço                                                    |                                                                                                                                                                                         |
| --------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` e `84.200.70.40`                             | [Adicionar ao AdGuard](adguard:add_dns_server?address=84.200.69.80&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` e `2001:1608:10:25::9249:d69b` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) soluções para filtragem de conteúdo e segurança na internet.

| Protocolo | Endereço         |                                                                                                                                                                 |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Adicionar ao AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) é um serviço de DNS rápido e seguro com proteção contra anúncios, rastreamento e phishing.

#### West DNS Server (Principal)

| Protocolo       | Endereço                          |                                                                                                                                                                                                                             |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.comss.one/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS sobre TLS   | `tls://dns.comss.one`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-sobre-QUIC  | `quic://dns.comss.one:784`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Sibéria e Extremo Oriente)

| Protocolo       | Endereço                               |                                                                                                                                                                                                                                                 |
| --------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.east.comss.one/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS sobre TLS   | `tls://dns.east.comss.one`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-sobre-QUIC  | `quic://dns.east.comss.one`            | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) é uma rede anycast global que consiste em servidores localizados em todo o mundo: Américas, Europa, África, Austrália e Extremo Oriente para garantir uma solução de DNS rápida e confiável de qualquer ponto do mundo.

| Protocolo | Endereço                        |                                                                                                                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` e `195.46.39.40` | [Adicionar ao AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protege contra roubo de dados pessoais e financeiros. Mantenha vírus, ransomware e outros malwares fora de sua casa.

#### Privado

No modo "Privado", apenas resolução de DNS.

| Protocolo               | Endereço                                                                                              |                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4               | `149.112.121.10` e `149.112.122.10`                                                                   | [Adicionar ao AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6               | `2620:10A:80BB::10` e `2620:10A:80BC::10`                                                             | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS sobre HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS sobre TLS - Privado | Nome do host: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` e IPv6: `2620:10A:80BB::10` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protegido

No modo "Protegido", proteção contra malware e phishing.

| Protocolo                | Endereço                                                                                            |                                                                                                                                                                                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` e `149.112.122.20`                                                                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` e `2620:10A:80BC::20`                                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS sobre HTTPS          | `https://protected.canadianshield.cira.ca/dns-query`                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protegido | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` e IPv6: `2620:10A:80BB::20` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Família

No modo "Família", Protegido + bloqueio de conteúdo adulto.

| Protocolo              | Endereço                                                                                             |                                                                                                                                                                                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.30` e `149.112.122.30`                                                                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6              | `2620:10A:80BB::30` e `2620:10A:80BC::30`                                                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS sobre HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Família | Nome do host: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` e IPv6: `2620:30A:80BB::10` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) é um serviço DNS alternativo gratuito do OpenNIC Project.

| Protocolo | Endereço                                 |                                                                                                                                                                   |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` e `169.239.202.202`    | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.121.177.177&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` e `2a05:dfc7:5353::53` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Um pequeno projeto DNS de hobby. Sem logs, Ethereum Name Service, pronto para DNSSEC & Anúncios filtrados, rastreadores, malwares.

#### Servidor DNS finlandês

| Protocolo             | Endereço                                                                  |                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Nome do host: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS sobre HTTPS, IPv4 | Nome do host: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`         | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                         |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`  | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                             |

#### Servidor DNS japonês

| Protocolo             | Endereço                                                                            |                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Nome do host: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS sobre HTTPS, IPv4 | Hostnamet: `https://doh-jp.blahdns.com/dns-query`                                   | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                         |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                 |

#### Servidor DNS alemão

| Protocolo             | Endereço                                                                  |                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Nome do host: `tls://dot-de.blahdns.com` IP: `159.69.198.101`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS sobre HTTPS, IPv4 | Nome do host: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`         | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                         |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`  | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                             |

### DNS para a família

[DNS for Family](https://dnsforfamily.com/) visa bloquear sites adultos. Ele permite que crianças e adultos naveguem na Internet com segurança, sem se preocupar em ser rastreados por sites maliciosos.

| Protocolo       | Endereço                                                   |                                                                                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS sobre TLS   | `tls://dns-dot.dnsforfamily.com`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4       | `94.130.180.225` e `78.47.64.161`                          | [Adicionar ao AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6       | `2a01:4f8:1c0c:40db::1` e `2a01:4f8:1c17:4df8::1`          | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4  | Provedor: `dnsforfamily.com` IP: `94.130.180.225`          | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                      |
| DNSCrypt, IPv6  | Provedor: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                          |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR são resolvedores de validação de DNSSEC aberto. CZ.NIC não coleta nenhum dado pessoal nem coleta informações em páginas onde os dispositivos enviam dados pessoais.

| Protocolo       | Endereço                                  |                                                                                                                                                                                                         |
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `193.17.47.1` e `185.43.135.1`            | [Adicionar ao AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6       | `2001:148f:ffff::1` e `2001:148f:fffe::1` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS sobre HTTPS | `https://odvr.nic.cz/doh`                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS sobre TLS   | `tls://odvr.nic.cz`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) é um serviço de DNS recursivo gratuito que se compromete a fornecer resolução de DNS rápida, estável e segura para a maioria dos usuários da Internet. Inclui a facilidade AliGuard para proteger os usuários de vários ataques e ameaças.

| Protocolo       | Endereço                             |                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `223.5.5.5` e `223.6.6.6`            | [Adicionar ao AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6       | `2400:3200::1` e `2400:3200:baba::1` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS sobre HTTPS | `https://dns.alidns.com/dns-query`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS sobre TLS   | `tls://dns.alidns.com`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

Serviço Anycast DNS baseado em IPv6 com fortes recursos de segurança e proteção contra spyware e sites maliciosos. Ele suporta DNS64 para fornecer resolução de nome de domínio apenas para usuários IPv6.

| Protocolo       | Endereço                          |                                                                                                                                                                                                                             |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6       | `240C::6666` e `240C::6644`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS sobre HTTPS | `https://dns.cfiec.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS sobre TLS   | `tls://dns.cfiec.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) é um sistema de filtragem de Internet anycast que protege as crianças de sites inapropriados e conteúdos abusivos.

| Protocolo      | Endereço                                                     |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` e `180.131.145.145`                        | [Adicionar ao AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144:` | [Adicionar ao AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                   |

### 360 Secure DNS

**360 Secure DNS** é um serviço DNS recursivo líder do setor com proteção avançada contra ameaças à segurança da rede.

| Protocolo       | Endereço                         |                                                                                                                                                                                                                 |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `101.226.4.6` e `218.30.118.6`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4       | `123.125.81.6` e `140.207.198.6` | [Adicionar ao AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS sobre HTTPS | `https://doh.360.cn/dns-query`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS sobre TLS   | `tls://dot.360.cn`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) é um serviço DNS público operado pela Internet Initiative Japan. Ele também bloqueia conteúdo de abuso infantil.

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://public.dns.iij.jp/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS sobre TLS   | `tls://public.dns.iij.jp`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) é um provedor de DNS voltado para a privacidade com anos de experiência no desenvolvimento de serviços de resolução de nomes de domínio. Ele visa fornecer aos usuários um serviço de resolução recursiva mais rápido, preciso e estável.

| Protocolo       | Endereço                        |                                                                                                                                                                                                     |
| --------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `119.29.29.29` e `119.28.28.28` | [Adicionar ao AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS sobre HTTPS | `https://doh.pub/dns-query`     | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS sobre HTTPS | `https://dns.pub/dns-query`     | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS sobre TLS   | `tls://dot.pub`                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** é um serviço DNS profissional e de alta confiabilidade.

#### Normal

Bloqueia anúncios e sites irritantes.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` e `114.114.115.115` | [Adicionar ao AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Seguro

Bloqueia sites de phishing, maliciosos e outros sites inseguros.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` e `114.114.115.119` | [Adicionar ao AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Família

Esses servidores bloqueiam sites adultos e conteúdos impróprios.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` e `114.114.115.110` | [Adicionar ao AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) é um serviço DNS alternativo gratuito sem registro pelo TWNIC (Taiwan Network Information Center).

| Protocolo       | Endereço                              |                                                                                                                                                                                                                         |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `101.101.101.101` e `101.102.103.104` | [Adicionar ao AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6       | `2001:de4::101` e `2001:de4::102`     | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS sobre HTTPS | `https://dns.twnic.tw/dns-query`      | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS sobre TLS   | `tls://101.101.101.101`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** é um serviço de DNS de nicho seguro, rápido e gratuito com recurso de bloqueio de domínios maliciosos.

#### Pure Edition

| Protocolo | Endereço                       |                                                                                                                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` e `52.80.52.52` | [Adicionar ao AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protocolo | Endereço                       |                                                                                                                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` e `52.80.66.66` | [Adicionar ao AdGuard](adguard:add_dns_server?address=117.50.11.11&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) bloqueia mais de 140 mil anúncios, rastreamento de anúncios, domínios de malware e phishing. Sem registro, sem ECS, validação de DNSSEC, grátis!

#### Singapore DNS Server

| Protocolo       | Endereço                                                                   | Localização                                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `174.138.21.128`                                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6       | `2400:6180:0:d0::5f6e:4001`                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128:`             | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                              |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                             |
| DNS sobre HTTPS | `https://doh.tiarap.org/dns-query` (armazenado em cache por terceiros)     | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS sobre HTTPS | `https://doh.tiar.app/dns-query`                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-sobre-QUIC  | `quic://doh.tiar.app`                                                      | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS sobre TLS   | `tls://dot.tiar.app`                                                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Servidor DNS japonês

| Protocolo       | Endereço                                                                       |                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `172.104.93.80`                                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6       | `2400:8902::f03c:91ff:feda:c514`                                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80:`                   | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                      |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                             |
| DNS sobre HTTPS | `https://jp.tiarap.org/dns-query`                                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS sobre HTTPS | `https://jp.tiar.app/dns-query`                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS sobre TLS   | `tls://jp.tiar.app`                                                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) é um serviço DNS aberto, gratuito e público. Sem redirecionamentos de DNS, sem registro.

| Protocolo | Endereço                            |                                                                                                                                                                 |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` e `172.104.49.100` | [Adicionar ao AdGuard](adguard:add_dns_server?address=172.104.237.57&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` e `37.235.1.177`     | [Adicionar ao AdGuard](adguard:add_dns_server?address=37.235.1.174&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) é um resolvedor de DNS anônimo gratuito da Freenom World.

| Protocolo | Endereço                      |                                                                                                                                                           |
| --------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` e `80.80.81.81` | [Adicionar ao AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) é um pequeno projeto de hobby DNS de bloqueio de anúncios.

#### OSZX server

Esses servidores não fornecem bloqueio de anúncios, não mantêm registros e têm o DNSSEC ativado.

| Protocolo       | Endereço                                                                 |                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.83.141`                                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::d64`                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                     |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Adicionar ao AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                      |
| DNS sobre HTTPS | `https://dns.oszx.co/dns-query`                                          | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS sobre TLS   | `tls://dns.oszx.co`                                                      | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

Esses servidores não fornecem bloqueio de anúncios, não mantêm registros e têm o DNSSEC ativado.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.82.198`                                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::1b28`                                                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                               |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                               |
| DNS sobre HTTPS | `https://dns.pumplex.com/dns-query`                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS sobre TLS   | `tls://dns.pumplex.com`                                                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) opera serviços de privacidade de DNS para ajudar a proteger o tráfego de DNS e a diversificar o panorama do resolvedor de DNS, oferecendo protocolos modernos.

| Protocolo       | Endereço                                |                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.applied-privacy.net/query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS sobre TLS   | `tls://dot1.applied-privacy.net`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) é um serviço DNS da Strongarm que impede que as pessoas interajam com conteúdo malicioso.

| Protocolo | Endereço                         |                                                                                                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` e `52.3.100.184` | [Adicionar ao AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) é um serviço de DNS da SafeSurfer que protege o seu dispositivo contra conteúdos nocivos e adultos.

| Protocolo      | Endereço                                                           |                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` e `104.197.28.121`                               | [Adicionar ao AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121:` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)           |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Um resolvedor DNS seguro, privado e de código aberto com proteção contra malware, bloqueio de anúncios e sem registros. Desgoogle o seu celular, tablet e computador.

| Protocolo       | Endereço                                                                      |                                                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Provedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                   |
| DNSCrypt, IPv6  | Provedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                      |
| DNS sobre HTTPS | `https://dns.decloudus.com/dns-query`                                         | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS sobre TLS   | `tls://dns.decloudus.com`                                                     | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) é gerido por Elias Ojala, Finlândia.

| Protocolo       | Endereço                                 |                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS sobre TLS   | `tls://resolver-eu.lelux.fi`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi),  [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) é um servidor executado a partir de um droplet Digital Ocean na região BLR1. Mantido por Abhay Rana, também conhecido como Nemo.

| Protocolo      | Endereço                                                         |                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Adicionar ao AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) fornece serviço de DNS gratuito sem registro, DNSSEC ativado.

| Protocolo       | Endereço                          |                                                                                                                                                                                                                 |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.222.222.222` e `45.11.45.11` | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6       | `2a09::` e `2a11::`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a09::&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS sobre HTTPS | `https://doh.dns.sb/dns-query`    | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS sobre TLS   | `tls://185.222.222.222`           | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) é um resolvedor de DNS redundante com um bloqueador de anúncios e sem registo, fornecido por [adminforge](https://adminforge.de/).

| Protocolo       | Endereço                                            |                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `176.9.93.198` e `176.9.1.117`                      | [Adicionar ao AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6       | `2a01:4f8:151:34aa::198` e `2a01:4f8:141:316d::117` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS sobre HTTPS | `https://dnsforge.de/dns-query`                     | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS sobre TLS   | `tls://dnsforge.de`                                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servidores fornecidos por [Restena Foundation](https://www.restena.lu/).

| Protocolo       | Endereço                                                                          |                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` e IPv6: `2001:a18:1::29` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS sobre TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` e IPv6: `2001:a18:1::29`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)|

### fvz DNS

[fvz DNS](http://meo.ws/) é um resolvedor de DNS OpenNIC Tier2 Anycast primário público da Fusl.

| Protocolo      | Endereço                                                             |                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Adicionar ao AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Adicionar ao AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) servidores DNS gratuitos fornecidos pela Freifunk München.

| Protocolo             | Endereço                                                               |                                                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Nome do host: `tls://dot.ffmuc.net`                                    | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS sobre HTTPS, IPv4 | Nome do host: `https://doh.ffmuc.net/dns-query`                        | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                             |
| DNSCrypt, IPv6        | Provedor: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                              |

### DNS Digitale Gesellschaft

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) é um resolvedor público operado pela Digital Society. Hospedado em Zurique, Suíça.

| Protocolo       | Endereço                                                                                     |                                                                                                                                                                                                                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` e IPv6: `2a05:fc84::42` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS sobre TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` e IPv6: `2a05:fc84::43`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) é um serviço público de DNS criptografado executado por [LibreOps](https://libreops.cc/).

| Protocolo       | Endereço                                     |                                                                                                                                                                                                                                     |
| --------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `88.198.92.222`                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS sobre HTTPS | `https://doh.libredns.gr/dns-query`          | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS sobre HTTPS | `https://doh.libredns.gr/ads`                | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS sobre TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) servidores de teste fornecidos pela ibksturm. OPENNIC, DNSSEC, sem filtragem, sem registro.

| Protocolo             | Endereço                                                                    |                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-sobre-TLS, IPv4   | Nome do host: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4   | Nome do host: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS sobre HTTPS, IPv4 | Nome do host: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4        | Provedor: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`              | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                     |

### Privacidade do DNS

Um projeto aberto colaborativo para promover, implementar e implantar [DNS Privacy](https://dnsprivacy.org/).

Servidores DNS executados pelos [desenvolvedores Stubby](https://getdnsapi.net/).

| Protocolo     | Endereço                                                                                                                       |                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre TLS | Nome do host: `tls://getdnsapi.net` IP: `185.49.141.37` e IPv6: `2a04:b900:0:100::37`                                          | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS sobre TLS | Provedor: `Surfnet` Nome do host: `tls://dnovertls.sinodun.com` IP: `145.100.185.15` e IPv6: `2001:610:1:40ba:145:100:185:15`  | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS sobre TLS | Provedor: `Surfnet` Nome do host: `tls://dnovertls1.sinodun.com` IP: `145.100.185.16` e IPv6: `2001:610:1:40ba:145:100:185:16` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Outros servidores DNS com política de "não registo".

| Protocolo           | Endereço                                                                                                               |                                                                                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre TLS       | Provedor: `UncensoredDNS` Nome do host: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` e IPv6: `2a01:3a0:53:53::0` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS sobre TLS       | Provedor: `UncensoredDNS` Nome do host: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` e IPv6: `2001:67c:28a4::` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS sobre TLS       | Provedor: `dkg` Nome do host: `tls://dns.cmrg.net`  IP: `199.58.81.218` e IPv6: `2001:470:1c:76d::53`                  | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-sobre-TLS, IPv4 | Nome do host: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS sobre TLS       | Nome do host: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` e IPv6: `2001:8b0:24:24::24`                        | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS sobre TLS       | Nome do host: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` e IPv6: `2a01:4f8:c0c:3c03::2`                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS sobre TLS       | Nome do host: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` e IPv6: `2a01:4f8:c0c:3bfc::2`                            | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-sobre-TLS, IPv4 | Nome do host: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS sobre TLS       | Nome do host: `tls://dns.neutopia.org` IP: `89.234.186.112` e IPv6: `2a00:5884:8209::2`                                | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS sobre TLS       | Provedor: `Go6Lab` Nome do host: `tls://privacydns.go6lab.si` e IPv6: `2001:67c:27e4::35`                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS sobre TLS       | Nome do host: `tls://dot.securedns.eu` IP: `146.185.167.43` e IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

Servidores DNS com um mínimo de registo/restrições. Esses servidores usam alguns registros, certificados autoassinados ou nenhum suporte para o modo estrito.

| Protocolo     | Endereço                                                                                                            |                                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre TLS | Provedor: `NIC Chile` Nome do host: `dnsotls.lab.nic.cl` IP: `200.1.123.46` e IPv6: `2001:1398:1:0:200:1:123:46`    | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS sobre TLS | Provedor: `OARC` Nome do host: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` e IPv6: `2620:ff:c000:0:1::64:25` | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) Um serviço DNS de bloqueio de anúncios e registro zero fornecido por Fredrik Pettersson.

#### Blitz

[Filtragem configurável](https://blitz-setup.ahadns.com/) variante mundial somente de DoH.

| Protocolo                                            | Endereço                          |                                                                                                                                                                                                                                   |
| ---------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, sem censura                          | `https://blitz.ahadns.com`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, filtro OISD                          | `https://blitz.ahadns.com/1:1`    | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD & Filtro de pornografia ativado | `https://blitz.ahadns.com/1:1.12` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Holanda

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `5.2.75.75`                           | [Adicionar ao AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6       | `2a04:52c0:101:75::75`                | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS sobre HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS sobre TLS   | `tls://dot.nl.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Índia

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.79.120.233`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=45.79.120.233&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6       | `2400:8904:e001:43::43`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS sobre HTTPS | `https://doh.in.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS sobre TLS   | `tls://dot.in.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.67.219.208`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6       | `2a04:bdc7:100:70::70`                | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS sobre HTTPS | `https://doh.la.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS sobre TLS   | `tls://dot.la.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### Nova york

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.213.26.187`                      | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.213.26.187&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6       | `2a0d:5600:33:3::3`                   | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS sobre HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS sobre TLS   | `tls://dot.ny.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polônia

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS sobre TLS   | `tls://dot.pl.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Itália

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.it.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS sobre TLS   | `tls://dot.it.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Espanha

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.es.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS sobre TLS   | `tls://dot.es.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Noruega

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.no.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS sobre TLS   | `tls://dot.no.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protocolo       | Endereço                               |                                                                                                                                                                                                                                                 |
| --------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS sobre TLS   | `tls://dot.chi.ahadns.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) é um serviço de DNS com foco na privacidade fornecido por Sebastian Schmidt. Sem registro, validação de DNSSEC.

#### DNS Server 1

| Protocolo      | Endereço                                                    |                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                              | [Adicionar ao AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Provedor: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31:` | [Adicionar ao AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                      |
| DNS sobre TLS  | `tls://dot.seby.io`                                         | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) está fisicamente localizado perto de Barcelona, Espanha. puntCAT oferece um serviço de DNS público, gratuito, seguro, próximo e que respeita a sua privacidade.

| Protocolo | Endereço           |                                                                                                                                                                     |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Adicionar ao AdGuard](adguard:add_dns_server?address=109.69.8.51&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) opera resolvedores de DNS públicos para acelerar as solicitações, aumentar a redundância. O serviço é fornecido por [Peerix](https://www.peerix.net/)

#### Padrão

Esses servidores fornecem resolução de DNS sem filtragem de tráfego.

| Protocolo       | Endereço                              |                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.235.81.1` e `185.235.81.2`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.235.81.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6       | `2a0d:4d00:81::1` e `2a0d:4d00:81::2` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS sobre HTTPS | `tls://doh.dnslify.com`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS sobre TLS   | `tls://doh.dnslify.com`               | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Seguro

O modo de segurança protege contra sites infectados, fraudulentos ou de bots.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` e `185.235.81.4`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.235.81.3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` e `2a0d:4d00:81::4` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Família

O modo familiar oferece proteção por resolvedores "seguros" e bloqueia sites adultos.

| Protocolo | Endereço                              |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` e `185.235.81.6`       | [Adicionar ao AdGuard](adguard:add_dns_server?address=185.235.81.5&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` e `2a0d:4d00:81::6` | [Adicionar ao AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) fornece resolvedores sem filtragem publicamente acessíveis sem registro, além de seus resolvedores de filtragem configuráveis freemium com registro opcional.

#### Latência ultrabaixa

| Protocolo       | Endereço                 |                                                                                                                                                                                                                                 |
| --------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dns.nextdns.io` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS sobre TLS   | `tls://dns.nextdns.io`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protocolo       | Endereço                         |                                                                                                                                                                                                                                                                 |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://anycast.dns.nextdns.io` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS sobre TLS   | `tls://anycast.dns.nextdns.io`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) fornece serviço DNS-over-HTTPS executado como Cloudflare Worker e serviço DNS-sobre-TLS executado como Fly.io Worker com listas de bloqueio configuráveis.

#### Sem filtragem

| Protocolo       | Endereço                        |                                                                                                                                                                                                                                       |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://basic.rethinkdns.com/` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS sobre TLS   | `tls://max.rethinkdns.com`      | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) é um serviço DNS personalizável com recursos de proxy. Isso significa que ele não apenas bloqueia coisas (anúncios, pornografia etc.), mas também pode desbloquear sites e serviços.

#### Sem filtragem

| Protocolo       | Endereço                          |                                                                                                                                                                                                   |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.0` e `76.76.10.0`        | [Adicionar ao AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6            | `2606:1a40::` e `2606:1a40:1::`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS sobre HTTPS | `https://freedns.controld.com/p0` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS sobre TLS   | `p0.freedns.controld.com`         | [Adicionar ao AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Bloquear malware

| Protocolo       | Endereço                          |                                                                                                                                                                                                   |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.1`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS sobre HTTPS | `https://freedns.controld.com/p1` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS sobre TLS   | `tls://p1.freedns.controld.com`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Bloquear malware + anúncios

| Protocolo       | Endereço                          |                                                                                                                                                                                                   |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.2`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS sobre HTTPS | `https://freedns.controld.com/p2` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS sobre TLS   | `tls://p2.freedns.controld.com`   | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Bloquear malware + anúncios + redes sociais

| Protocolo       | Endereço                          |                                                                                                                                                                                                   |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.3`                       | [Adicionar ao AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS sobre HTTPS | `https://freedns.controld.com/p3` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS sobre TLS   | `tls://p3.freedns.controld.com`   | [[Adicionar ao AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) fornece DNS publicamente acessível com minimização de QNAME, terminais localizados na Austrália, Alemanha, Cingapura, Suécia, Reino Unido e Estados Unidos (Nova York e Los Angeles).

#### Sem filtragem

| Protocolo       | Endereço                            |                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://doh.mullvad.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS sobre TLS   | `tls://doh.mullvad.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Bloqueio de anúncios

| Protocolo       | Endereço                                    |                                                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS sobre TLS   | `tls://adblock.doh.mullvad.net`             | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Pequenos resolvedores pessoais

Nesta seção, listamos pequenos resolvedores de DNS, na sua maioria pessoais. Eles geralmente têm apenas um ou muito poucos servidores e pior tempo de atividade do que os "grandes" provedores. Não poderemos monitorar adequadamente sua disponibilidade. **Use-os por sua conta e risco!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) é um serviço de DNS pessoal hospedado em Mumbai, na Índia.

Sem registo | Filtra anúncios, rastreadores, phishing, etc. | DNSSEC | Minimização de QNAME | Sem sub-rede de cliente EDNS.

| Protocolo       | Endereço                                                     |                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Adicionar ao AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                   |
| DNS sobre HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Servidor DNS oficial do Dandelion Sprout

[O servidor DNS Oficial](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) do Dandelion Sprout é um serviço DNS pessoal hospedado em Trondheim, Noruega, usando uma infraestrutura AdGuard Home.

Bloqueia mais anúncios e malware do que o AdGuard DNS graças a uma sintaxe mais avançada, mas deixa passar alguns rastreadores e bloqueia tablóides de extrema-direita e a maioria dos painéis de imagens. O registro é usado para melhorar suas listas de filtros usadas (por exemplo, desbloqueando sites que não deveriam ter sido bloqueados) e para determinar os horários menos ruins para atualizações do sistema do servidor.

| Protocolo       | Endereço                                              |                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Adicionar ao AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS sobre TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Adicionar ao AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-sobre-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Adicionar ao AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Adicionar ao AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4       | Varia; veja o link acima.                             |                                                                                                                                                                                                                                                                                                             |
| DNS, IPv6       | Varia; veja o link acima.                             |                                                                                                                                                                                                                                                                                                             |
| DNSCrypt, IPv4  | Varia; veja o link acima.                             |                                                                                                                                                                                                                                                                                                             |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) - Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS resovers com bloqueio: publicidade, rastreamento, adware, malware, atividades maliciosas e empresas de phishing, bloqueia ~1M domínios. Pode ter registos de 24h/48h para ataques de mitigação de DDoS/Flood.

#### Filtragem adaptativa (ADA)

Recomendado para a maioria dos usuários, filtragem muito flexível com bloqueio da maioria das redes de anúncios, rastreamento de anúncios, domínios de malware e phishing.

| Protocolo       | Endereço                            |                                                                                    |
| --------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://ada.openbld.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://ada.openbld.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Filtragem Estrita (RIC)

Políticas de filtragem mais rigorosas com bloqueio de anúncios, marketing, rastreio, malware, clickbait, coinhive e domínios de phishing.

| Protocolo       | Endereço                            |                                                                                    |
| --------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| DNS sobre HTTPS | `https://ric.openbld.net/dns-query` | [Adicionar ao AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS sobre TLS   | `tls://ric.openbld.net`             | [Adicionar ao AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
