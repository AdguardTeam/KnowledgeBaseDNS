---
title: Kendte DNS-udbydere
sidebar_position: 3
---

:::info

Here we suggest a list of trusted DNS providers. To use them, first install AdGuard Ad Blocker or AdGuard VPN on your device. Then, on the same device, click the link to a provider in this article

Hurtig-links: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) er en alternativ løsning til adblocking, fortrolighedsbeskyttelse og forældrekontrol. Den tilbyder det nødvendige antal beskyttelsesfunktioner mod onlinereklamer, trackere og phishing uanset den benyttede platform og enhed.

#### Standard

Disse servere blokerer reklamer, sporing og phishing.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` og `94.140.15.15`                                             | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` og `2a10:50c0::ad2:ff`                                   | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                      | [Add to AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                  | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                 | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                   |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                          |

#### Familiebeskyttelse

Disse servere leverer Standardfunktionerne + Blokering af voksne websteder + Sikker søgning.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` og `94.140.15.16`                                             | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6      | `2a10:50c0::bad1:ff` og `2a10:50c0::bad2:ff`                                 | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                   | [Add to AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                               | [Add to AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                              | [Add to AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                          |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                |

#### Ikke-filtrerende

Hver af disse servere leverer en sikker og pålidelig forbindelse, men modsat "Standard"- og "Familiebeskyttelse"-serverne, filtrerer de intet.

| Protokol       | Adresse                                                                       |                                                                                                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` og `94.140.14.141`                                            | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` og `2a10:50c0::2:ff`                                        | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                | [Add to AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                            | [Add to AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                           | [Add to AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Føj til AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                      |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) er en gratis rekursiv DNS-tjeneste. Yandex.DNS-servere er placeret i Rusland, SNG-lande og Vesteuropa. Brugerforespørgsler behandles af det nærmeste datacenter, hvilket giver høje forbindelseshastigheder.

#### Basis

I tilstanden "Basis" sker ingen trafikfiltrering.

| Protokol       | Adresse                                                              |                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` og `77.88.8.1`                                           | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.8&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` og `2a02:6b8:0:1::feed:0ff`                     | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Føj til AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)    |

#### Sikker

I tilstanden "Sikker" ydes beskyttelse mod inficerede og svigagtige websteder.

| Protokol  | Adresse                                          |                                                                                                                                                             |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` og `77.88.8.2`                      | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.88&name=),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=)                |
| DNS, IPv6 | `2a02:6b8::feed:bad` og `2a02:6b8:0:1::feed:bad` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Familie

I tilstanden "Family" ydes beskyttelse mod inficerede, svigagtige og voksenwebsteder.

| Protokol  | Adresse                                          |                                                                                                                                                             |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` og `77.88.8.7`                       | [Add to AdGuard](adguard:add_dns_server?address=77.88.8.3&name=),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=)                  |
| DNS, IPv6 | `2a02:6b8::feed:a11` og `2a02:6b8:0:1::feed:a11` | [Add to AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) er en DNS-tjeneste, der leverer tilpasset filtrering. Tjenesten tilbyder en sikker måde at surfe på nettet uden upassende indhold.

#### Familiefilter

Blokerer adgang til alle eksplicitte voksen- og pornowebsteder, inkl. proxy og VPN-domæner samt websteder med blandet indhold.

| Protokol       | Adresse                                                 |                                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` og `185.228.169.168`                  | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` og `2a0d:2a00:2::`                      | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                          |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                          |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`      | [Add to AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`             | [Add to AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Voksenfilter

Mindre restriktivt end Family-filter og blokerer kun adgang til voksenindhold samt phishing og ondsindede domæner.

| Protokol       | Adresse                                                  |                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` og `185.228.169.11`                     | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` og `2a0d:2a00:2::1`                     | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                       |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                    |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`        | [Add to AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`               | [Add to AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Sikkerhedsfilter

Blokerer phishing, spam og ondsindede domæner.

| Protokol       | Adresse                                              |                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` og `185.228.169.9`                   | [Add to AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` og `2a0d:2a00:2::2`                 | [Add to AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Add to AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) er en domænenavnsopløsningstjeneste, der opløser DNS-forespørgsler gennem et verdensomspændende netværk af DNS-servere. Fjerner overdrevne annonceantal og beskytter mod phishing og spyware.

| Protokol       | Adresse                                                              |                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` og `8.20.247.20`                                        | [Add to AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)              |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Føj til AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) er en gratis cloud-baseret rekursiv DNS-tjeneste med indbygget sikkerhed og trusselsinformation, der leverer hurtig og pålidelig adgang til websteder og onlineapplikationer.

#### Pålidelighed og Ydeevne 1

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere nogen bestemte kategorier.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` og `156.154.71.1`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` og `2610:a1:1019::1` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Pålidelighed og Ydeevne 2*

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere bestemte kategorier og forhindrer også omdirigering af NXDomain (ikke-eksisterende domæne) svar til landing-sider.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` og `156.154.71.5`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` og `2610:a1:1019::5` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Trusselsbeskyttelse

Disse servere yder beskyttelse mod ondsindede domæner samt inkluderer funktionerne "Pålidelighed og Ydelse".

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` og `156.154.71.2`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` og `2610:a1:1019::2` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Familiesikker

Disse servere leverer adgangsblokering af voksenindhold samt inkluderer funktionerne "Plidelighed og Ydeevne" + "Trusselsbeskyttelse".

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` og `156.154.71.3`       | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` og `2610:a1:1019::3` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Forretningssikker

Disse servere blokerer uønsket og tidsspildende indhold og inkluderer også funktionerne "Plidelighed og Ydeevne" + "Trusselsbeskyttelse" + "Familiesikker".

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` and  `156.154.71.4`     | [Add to AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` og `2610:a1:1019::4` | [Add to AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) er en tjeneste, der udvider DNS ved at inkorporere funktioner såsom indholdsfiltrering og phishing-beskyttelse uden nedetid.

#### Standard

DNS-servere med tilpasset filtrering, som beskytter enheden mod malware.

| Protokol       | Adresse                                                      |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` og `208.67.220.220`                         | [Add to AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` og `2620:119:53::53`                       | [Add to AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                            |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Føj til AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                           |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                          | [Add to AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

OpenDNS-servere, som tilbyder blokering af voksenindhold.

| Protokol       | Adresse                                                     |                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` og `208.67.220.123`                        | [Add to AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`            | [Add to AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) er en alternativ og gratis global DNS-opløsningstjeneste.

| Protokol       | Adresse                                          |                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` og `8.8.4.4`                           | [Add to AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` og `2001:4860:4860::8844` | [Add to AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [Add to AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                               | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) er en gratis og hurtig DNS-tjeneste, der fungerer som en rekursiv navneserver, der leverer domænenavnsopløsning til enhver vært på internet.

#### Standard

| Protokol             | Adresse                                          |                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` og `1.0.0.1`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` og `2606:4700:4700::1001` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`         | [Add to AdGuard](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Kun malwareblokering

| Protokol       | Adresse                                          |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`                          | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` og `2606:4700:4700::1002` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [Add to AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [Add to AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Blokering af malware og voksenindhold

| Protokol             | Adresse                                          |                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` og `1.0.0.3`                           | [Add to AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` og `2606:4700:4700::1003` | [Add to AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [Add to AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [Add to AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) er en gratis, rekursiv, anycast DNS-platform, der leverer høj ydeevne, fortrolighed samt sikkerhedsbeskyttelse mod phishing og spyware. Quad9-servere tilbyder ingen censureringskomponent.

#### Standard

Alm. DNS-servere med beskyttelse mod phishing og spyware. De inkluderer sortlister, DNSSEC-bekræftelse og andre sikkerhedsfunktioner.

| Protokol       | Adresse                                                       |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` og `149.112.112.112`                                | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                             | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Føj til AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                  |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                             | [Add to AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                         | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Ikke-sikret

Ikke-sikrede DNS-servere har ingen sikkerhedssortliste, DNSSEC eller EDNS Client Subnet.

| Protokol       | Adresse                                                          |                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` og `149.112.112.10`                                   | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                               | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                      |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                              | [Add to AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                          | [Add to AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client Subnet er en metode, der inkluderer komponenter af slutbrugerens IP-adressedata i forespørgsler sendt til autoritative DNS-servere. Den har sikkerhedssortliste, DNSSEC og EDNS Client-Subnet.

| Protokol       | Adresse                                                       |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` og `149.112.112.11`                                | [Add to AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                            | [Add to AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                           | [Add to AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                       | [Add to AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign offentlig DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) er en gratis DNS-tjeneste med forbedret DNS-stabilitet og sikkerhed ift. andre alternativer. Verisign respekterer brugernes fortrolighed og sælger ikke offentlige DNS-data til tredjeparter eller omdirigerer brugerforespørgsler mhp. reklamevisning.

| Protokol  | Adresse                                 |                                                                                                                                                       |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` and `64.6.65.6`             | [Add to AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` and `2620:74:1c::2:2` | [Add to AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) er en offentlig schweizisk DNS-tjeneste leveret af [switch.ch](https://www.switch.ch/).

| Protokol       | Adresse                                                                          |                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Udbyder: `dns.switch.ch` IP: `130.59.31.248`                                     | [Add to AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Udbyder: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                | [Add to AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Add to AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Værtsnavn: `tls://dns.switch.ch` IP: `130.59.31.248` og IPv6: `2001:620:0:ff::2` | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) er en alternativ, gratis DNS-tjeneste fra Dyn.

| Protokol  | Adresse                            |                                                                                                                                                   |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` og `216.146.36.36` | [Add to AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) er en hurtig og gratis server uden logning med fortrolighedsbeskyttelsesfunktion.

| Protokol  | Adresse                                                      |                                                                                                                                                                             |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` og `84.200.70.40`                             | [Add to AdGuard](adguard:add_dns_server?address=84.200.69.80&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` og `2001:1608:10:25::9249:d69b` | [Add to AdGuard](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### FutureDNS

[FutureDNS](https://futuredns.me/) er en fortrolighedsvenlig DNS-tjeneste med OpenNIC-understøttelse, der blokerer annoncer, trackere og malware uden at logge nogen data.

| Anycast Network | Adresse                              |                                                                                                                                                                                                                             |
| --------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS  | `https://dns.futuredns.me/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.futuredns.me/dns-query&name=dns.futuredns.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.futuredns.me/dns-query&name=dns.futuredns.me) |
| DNS-over-TLS    | `tls://dns.futuredns.me`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.futuredns.me&name=dns.futuredns.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.futuredns.me&name=dns.futuredns.me)                         |
| DNS-over-QUIC   | `quic://dns.futuredns.me`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.futuredns.me&name=dns.futuredns.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.futuredns.me&name=dns.futuredns.me)                       |

| Placering              | Adresse - IPv4                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| London, Storbritannien | `52.56.224.201`| [Add to AdGuard](adguard:add_dns_server?address=52.56.224.201&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=52.56.224.201&name=)    |
| Milano, Italien        | `15.161.11.3`| [Add to AdGuard](adguard:add_dns_server?address=15.161.11.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=15.161.11.3&name=)          |
| Stockholm, Sverige     | `13.49.168.178`| [Add to AdGuard](adguard:add_dns_server?address=13.49.168.178&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=13.49.168.178&name=)    |
| Ashburn, USA           | `52.0.69.145`| [Add to AdGuard](adguard:add_dns_server?address=52.0.69.145&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=52.0.69.145&name=)          |
| San Francisco, USA     | `13.56.204.161`| [Add to AdGuard](adguard:add_dns_server?address=13.56.204.161&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=13.56.204.161&name=)    |
| Montreal, Canada       | `3.97.137.100`| [Add to AdGuard](adguard:add_dns_server?address=3.97.137.100&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=3.97.137.100&name=)       |
| Singapore              | `54.254.82.60`| [Add to AdGuard](adguard:add_dns_server?address=54.254.82.60&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=54.254.82.60&name=)       |
| Tokyo, Japan           | `54.199.94.55`| [Add to AdGuard](adguard:add_dns_server?address=54.199.94.55&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=54.199.94.55&name=)       |
| Mumbai, Indien         | `3.7.162.217`| [Add to AdGuard](adguard:add_dns_server?address=3.7.162.217&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=3.7.162.217&name=)          |
| São Paulo, Brasilien   | `177.71.191.153`| [Add to AdGuard](adguard:add_dns_server?address=177.71.191.153&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=177.71.191.153&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) løsninger til indholdsfiltrering og internetsikkerhed.

| Protokol  | Adresse          |                                                                                                                                                     |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Add to AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) er en hurtig og sikker DNS-tjeneste med reklame-, sporings- og phishing-beskyttelse.

#### West DNS Server (primær)

| Protokol       | Adresse                           |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Sibirien og Fjernøsten)

| Protokol       | Adresse                                |                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) er et globalt anycast-netværk bestående af servere placeret verden over — både Amerika, Europa, Afrika, Australien og Fjernøsten — for at sikre en hurtig og pålidelig DNS-opløsning fra ethvert punkt i verden.

| Protokol  | Adresse                          |                                                                                                                                                 |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` og `195.46.39.40` | [Add to AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) beskytter mod tyveri af personlige og finansielle data. Hold vira, ransomware og anden malware ude af hjemmet.

#### Privat

I tilstanden "Privat", kun DNS-opløsning.

| Protokol               | Adresse                                                                                             |                                                                                                                                                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` og `149.112.122.10`                                                                | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` og `2620:10A:80BC::10`                                                          | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Private | Værtsnavn: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` og IPv6: `2620:10A:80BB::10` | [Add to AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Beskyttet

I tilstanden "Beskyttet", beskyttelse mod malware og phishing.

| Protokol                 | Adresse                                                                                               |                                                                                                                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` og `149.112.122.20`                                                                  | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` and  `2620:10A:80BC::20`                                                          | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protected | Værtsnavn: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` og IPv6: `2620:10A:80BB::20` | [Add to AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |


#### Familie

I tilstanden "Familie", beskyttelse + blokering af voksenindhold.

| Protokol              | Adresse                                                                                            |                                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` og `149.112.122.30`                                                               | [Add to AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` og `2620:10A:80BC::30`                                                         | [Add to AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Add to AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Family | Værtsnavn: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` og IPv6: `2620:10A:80BB::30` | [Add to AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) er en alternativ, gratis DNS-tjeneste fra OpenNIC Project.

| Protokol  | Adresse                                   |                                                                                                                                                       |
| --------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` og `169.239.202.202`    | [Add to AdGuard](adguard:add_dns_server?address=185.121.177.177&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` og `2a05:dfc7:5353::53` | [Add to AdGuard](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Et lille hobby DNS-projekt. Ingen logger, Ethereum Name Service, DNSSEC-klar og Filtrerede reklamer, trackere, malware.

#### Finland DNS Server

| Protokol             | Adresse                                                                 |                                                                                                                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`               | [Add to AdGuard](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`  | [Add to AdGuard](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                      |

#### Japan DNS Server

| Protokol             | Adresse                                                                            |                                                                                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                          | [Add to AdGuard](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-jp.blahdns.com/dns-query`                                  | [Add to AdGuard](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                          |

#### Germany DNS Server

| Protokol             | Adresse                                                                 |                                                                                                                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-de.blahdns.com` IP: `159.69.198.101`               | [Add to AdGuard](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`  | [Add to AdGuard](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                      |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) er en fortrolighedsvenlig DNS-tjeneste drevet af Noah Seefried.

| Protokol       | Adresse                                                                                          |                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` og IPv6: `2a01:4f9:2a:1919::9301` | [Add to AdGuard](adguard:add_dns_server?address=https://fi.doh.dns.snopyta.org/dns-query&name=fi.doh.dns.snopyta.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://fi.doh.dns.snopyta.org/dns-query&name=fi.doh.dns.snopyta.org) |
| DNS-over-TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` og IPv6: `2a01:4f9:2a:1919::9301`             | [Add to AdGuard](adguard:add_dns_server?address=tls://fi.dot.dns.snopyta.org&name=fi.dot.dns.snopyta.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://fi.dot.dns.snopyta.org&name=fi.dot.dns.snopyta.org)                         |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) har til formål at blokere voksne websteder. Den muliggør, at børn og voksne kan surfe sikkert på internet uden at bekymre sig om at blive sporet af ondsindede websteder.

| Protokol       | Adresse                                                   |                                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`              | [Add to AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                          | [Add to AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`                       | [Add to AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` og `2a01:4f8:1c17:4df8::1`        | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Udbyder: `dnsforfamily.com` IP: `94.130.180.225`          | [Føj til AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                               |
| DNSCrypt, IPv6 | Udbyder: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                   |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR er Open DNSSEC Validating Resolvers. CZ.NIC hverken indsamler personlige data eller oplysninger fra sider, hvortil enheder sender personlige data.

| Protokol       | Adresse                                    |                                                                                                                                                                                             |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` og `185.43.135.1`            | [Add to AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` og `2001:148f:fffe::1` | [Add to AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [Add to AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [Add to AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) er en gratis rekursiv DNS-tjeneste, dedikeret til at levere hurtig, stabil og sikker DNS-opløsning til hovedparten af internetbrugere. Den inkluderer AliGuard-funktion for brugerbeskyttelse mod forskellige angreb og trusler.

| Protokol       | Adresse                               |                                                                                                                                                                                                                     |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` og `223.6.6.6`            | [Add to AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` og `2400:3200:baba::1` | [Add to AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [Add to AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

IPv6-baseret anycast DNS-tjeneste med stærke sikkerhedskapaciteter og beskyttelse imod spyware, ondsindede websteder. Den understøtter DNS64 for kun at levere domænenavnsopløsning til rene IPv6-brugere.

| Protokol       | Adresse                           |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` og `240C::6644`      | [Add to AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) er et anycast internetfiltreringssystem, der beskytter børn mod upassende websteder og krænkende indhold.

| Protokol       | Adresse                                                    |                                                                                                                                                       |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` og `180.131.145.145`                     | [Add to AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Føj til AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)            |

### 360 Secure DNS

**360 Secure DNS** er en brancheførende rekursiv DNS-tjeneste med avanceret beskyttelse mod netværkssikkerhedstrusler.

| Protokol       | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` og `218.30.118.6`   | [Add to AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` og `140.207.198.6` | [Add to AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [Add to AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) er en offentlig DNS-tjeneste drevet af Internet Initiative Japan. Det blokerer også børnemisbrugsindhold.

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Add to AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) er en fortrolighedsvenlig DNS-udbyder med mange års erfaring inden for udvikling af domænenavnsopløsningstjenester, der har til formål at give brugerne en hurtigere, mere præcis og stabil rekursiv opløsningstjeneste.

| Protokol       | Adresse                          |                                                                                                                                                                                         |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` og `119.28.28.28` | [Add to AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`      | [Add to AdGuard](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`      | [Add to AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                  | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** er en professionel DNS-tjeneste med høj pålidelighed.

#### Normal

Block ads and annoying websites.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` og `114.114.115.115` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Sikker

Blokerer phishing, ondsindede og andre ikke-sikre websteder.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` og `114.114.115.119` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Familie

Disse servere blokerer voksenwebsteder og upassende indhold.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` og `114.114.115.110` | [Add to AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) er en alternativ, gratis DNS-tjeneste uden logning fra TWNIC (Taiwan Network Information Center).

| Protokol       | Adresse                                |                                                                                                                                                                                                             |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` og `101.102.103.104` | [Add to AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` and  `2001:de4::102`   | [Add to AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [Add to AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [Add to AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** er en sikker, hurtig og gratis niche DNS-tjeneste med blokeringsfacilitet for ondsindede domæner.

#### Pure Edition

| Protokol  | Adresse                         |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` og `52.80.52.52` | [Add to AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokol  | Adresse                         |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` og `52.80.66.66` | [Add to AdGuard](adguard:add_dns_server?address=117.50.11.11&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokerer flere end 140K reklame-, reklamesporings-, malware- og phishing-domæner. Ingen logning, ingen ECS, DNSSEC-bekræftelse, gratis!

#### Singapore DNS Server

| Protokol       | Adresse                                                                   | Placering                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                          | [Add to AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                               | [Add to AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Føj til AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                       |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Føj til AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                      |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party)               | [Add to AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                          | [Add to AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                     | [Add to AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| Protokol       | Adresse                                                                       |                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                               | [Add to AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                              | [Add to AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Føj til AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                               |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Føj til AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                      |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                             | [Add to AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                               | [Add to AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                           | [Add to AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) er en åben, gratis og offentlig DNS-tjeneste. Ingen DNS-omdirigeringer, nul logning.

| Protokol  | Adresse                              |                                                                                                                                                     |
| --------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` og `172.104.49.100` | [Add to AdGuard](adguard:add_dns_server?address=172.104.237.57&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` og `37.235.1.177`     | [Add to AdGuard](adguard:add_dns_server?address=37.235.1.174&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) er en gratis, anonym DNS-opløser fra Freenom World.

| Protokol  | Adresse                        |                                                                                                                                               |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` og `80.80.81.81` | [Add to AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) er et lille Adblocking DNS-hobbyprojekt.

#### OSZX server

Disse servere tilbyder ingen reklameblokering, opbevarer ingen logfiler og har DNSSEC aktiveret.

| Protokol       | Adresse                                                                 |                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                          | [Add to AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                               | [Add to AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Føj til AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                              |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Føj til AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                               |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                         | [Add to AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                     | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

Disse servere tilbyder ingen reklameblokering, opbevarer ingen logfiler og har DNSSEC aktiveret.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                               | [Add to AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                   | [Add to AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Føj til AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                        |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Føj til AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                        |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                          | [Add to AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) driver vha. moderne protokoller DNS-fortrolighedstjenester for at hjælpe med at beskytte DNS-trafik og hjælpe med at diversificere DNS-opløser landskabet.

| Protokol       | Adresse                                 |                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Add to AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) is a DNS service by Strongarm that prevents people from interacting with malicious content.

| Protokol  | Adresse                           |                                                                                                                                                   |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` og `52.3.100.184` | [Add to AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) is a DNS service by SafeSurfer that protects your device from harmful and adult contents.

| Protokol       | Adresse                                                          |                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` og `104.197.28.121`                            | [Add to AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Føj til AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A secure, private, open-source DNS resolver with malware protection, ad blocking and without logs. Degoogle and Ungoogle your phone, tablet, and computer.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Føj til AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                            |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                               |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                        | [Add to AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                    | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) is run by Elias Ojala, Finland.

| Protokol       | Adresse                                  |                                                                                                                                                                                                                                              |
| -------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Add to AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi),  [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running off of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo.

| Protokol       | Adresse                                                         |                                                                                                                                                   |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Føj til AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) provide free DNS service with no logging, DNSSEC enabled.

| Protokol       | Adresse                            |                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` og `45.11.45.11` | [Add to AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` og `2a11::`               | [Add to AdGuard](adguard:add_dns_server?address=2a09::&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [Add to AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://185.222.222.222`            | [Add to AdGuard](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) is a redundant DNS resolver with an ad blocker and no logging provided by [adminforge](https://adminforge.de/).

| Protokol       | Adresse                                              |                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` og `176.9.1.117`                      | [Add to AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` og `2a01:4f8:141:316d::117` | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [Add to AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servers provided by [Restena Foundation](https://www.restena.lu/).

| Protokol       | Adresse                                                                            |                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` og IPv6: `2001:a18:1::29` | [Add to AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` and IPv6: `2001:a18:1::29`   | [Add to AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu) |

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver.

| Protokol       | Adresse                                                             |                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München.

| Protokol             | Adresse                                                               |                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot.ffmuc.net`                                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh.ffmuc.net/dns-query`                          | [Add to AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Føj til AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                      |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Føj til AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                       |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland.

| Protokol       | Adresse                                                                                       |                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` og IPv6: `2a05:fc84::42` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` og IPv6: `2a05:fc84::43`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| Protokol       | Adresse                                      |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Add to AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Add to AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Add to AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, no filtering, no logging.

| Protokol             | Adresse                                                                  |                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Add to AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Værtsnavn: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Add to AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Add to AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`            | [Føj til AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                              |

### DNS Privacy

A collaborative open project to promote, implement and deploy [DNS Privacy](https://dnsprivacy.org/).

DNS servers run by the [Stubby developers](https://getdnsapi.net/).

| Protokol     | Adresse                                                                                                                      |                                                                                                                                                                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Værtsnavn: `tls://getdnsapi.net` IP: `185.49.141.37` og IPv6: `2a04:b900:0:100::37`                                          | [Add to AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` og IPv6: `2001:610:1:40ba:145:100:185:15`  | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` og IPv6: `2001:610:1:40ba:145:100:185:16` | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Other DNS servers with 'no logging' policy.

| Protokol           | Adresse                                                                                                             |                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` og IPv6: `2a01:3a0:53:53::0` | [Add to AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` og IPv6: `2001:67c:28a4::` | [Add to AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Provider: `dkg` Hostname: `tls://dns.cmrg.net`  IP: `199.58.81.218` and IPv6: `2001:470:1c:76d::53`                 | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                           | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Værtsnavn: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` og IPv6: `2001:8b0:24:24::24`                       | [Add to AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Værtsnavn: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` og IPv6: `2a01:4f8:c0c:3c03::2`                           | [Add to AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Værtsnavn: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` og IPv6: `2a01:4f8:c0c:3bfc::2`                           | [Add to AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Værtsnavn: `tls://dns.neutopia.org` IP: `89.234.186.112` og IPv6: `2a00:5884:8209::2`                               | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Provider: `Go6Lab` Hostname: `tls://privacydns.go6lab.si` and IPv6: `2001:67c:27e4::35`                             | [Add to AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Værtsnavn: `tls://dot.securedns.eu` IP: `146.185.167.43` og IPv6: `2a03:b0c0:0:1010::e9a:3001`                      | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

DNS servers with minimal logging/restrictions. These servers use some logging, self-signed certs or no support for strict mode.

| Protokol     | Adresse                                                                                                          |                                                                                                                                                                                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Udbyder: `NIC Chile` Værtsnavn: `dnsotls.lab.nic.cl` IP: `200.1.123.46` og IPv6: `2001:1398:1:0:200:1:123:46`    | [Add to AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Udbyder: `OARC` Værtsnavn: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` og IPv6: `2620:ff:c000:0:1::64:25` | [Add to AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) A zero-logging and ad-blocking DNS service provided by Fredrik Pettersson.

#### Blitz

[Configurable filtering](https://blitz-setup.ahadns.com/) worldwide DoH-only variant.

| Protokol                                      | Adresse                           |                                                                                                                                                                                                                       |
| --------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, ucensureret                   | `https://blitz.ahadns.com`        | [Add to AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, OISD-filter                   | `https://blitz.ahadns.com/1:1`    | [Add to AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD og Energized-pornofilter | `https://blitz.ahadns.com/1:1.12` | [Add to AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Holland

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Add to AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Add to AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Indien

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Add to AdGuard](adguard:add_dns_server?address=45.79.120.233&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Add to AdGuard](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Add to AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Add to AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Add to AdGuard](adguard:add_dns_server?address=185.213.26.187&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Add to AdGuard](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polen

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Italien

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Spanien

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Norge

| Protokol       | Adresse                               |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protokol       | Adresse                                |                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS-server 1

| Protokol       | Adresse                                                   |                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                            | [Add to AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Føj til AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                               |
| DNS-over-TLS   | `tls://dot.seby.io`                                       | [Add to AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) is physically located near Barcelona, Spain. puntCAT offers a public DNS service, free, secure, close and that respects your privacy.

| Protokol  | Adresse            |                                                                                                                                                         |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Add to AdGuard](adguard:add_dns_server?address=109.69.8.51&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Add to AdGuard](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) operate public DNS resolvers to speed up requests, increase redundancy. The service is provided by [Peerix](https://www.peerix.net/)

#### Standard

These servers provide DNS resolution without traffic filtering.

| Protokol       | Adresse                                |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` og `185.235.81.2`       | [Add to AdGuard](adguard:add_dns_server?address=185.235.81.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6      | `2a0d:4d00:81::1` og `2a0d:4d00:81::2` | [Add to AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`    | [Add to AdGuard](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                | [Add to AdGuard](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Sikker

Safe mode guard against infected, fraudulent or bot sites.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` og `185.235.81.4`       | [Add to AdGuard](adguard:add_dns_server?address=185.235.81.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` og `2a0d:4d00:81::4` | [Add to AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Familie

Family mode offers protection by "Safe" resolvers and blocks adult sites.

| Protokol  | Adresse                                |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` og `185.235.81.6`       | [Add to AdGuard](adguard:add_dns_server?address=185.235.81.5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` og `2a0d:4d00:81::6` | [Add to AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) provides publicly accessible non-filtering resolvers with no logging in addition to its freemium configurable filtering resolvers with optional logging.

#### Ultralav latenstid

| Protokol       | Adresse                  |                                                                                                                                                                                                                     |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokol       | Adresse                          |                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Add to AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Add to AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker and DNS-over-TLS service running as Fly.io Worker with configurable blocklists.

#### Ikke-filtrerende

| Protokol       | Adresse                         |                                                                                                                                                                                                                           |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Add to AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Add to AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |


### ControlD

[ControlD](https://controld.com/free-dns) is a customizable DNS service with proxy capabilities. This means it not only blocks things (ads, porn, etc.), but can also unblock websites and services.

#### Ikke-filtrerende

| Protokol       | Adresse                           |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` og `76.76.10.0`       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` og `2606:1a40:1::`  | [Add to AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Add to AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Malware-blokering

| Protokol       | Adresse                           |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Blokér malware + annoncer

| Protokol       | Adresse                           |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Add to AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Blokér malware + annoncer + social

| Protokol       | Adresse                           |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Add to AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Add to AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Add to AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) provides publicly accessible DNS with QNAME minimization, endpoints located in Australia, Germany, Singapore, Sweden, United Kingdom and United States (New York and Los Angeles).

#### Ikke-filtrerende

| Protokol       | Adresse                             |                                                                                                                                                                                                                         |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Adblocking

| Protokol       | Adresse                                     |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [Add to AdGuard](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Små personlige opløsere

In this section we list small, mostly personal DNS resolvers. They often have only one or very few servers and worse uptime than 'big' providers. We won't be able to proper monitor their availability. **Use them at your own risk!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) is a personal DNS service hosted in Mumbai, India.

Non-logging | Filters ads, trackers, phishing,etc | DNSSEC | QNAME Minimization | No EDNS Client Subnet.

| Protokol       | Adresse                                                      |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Vært: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Føj til AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                            |
| DNS-over-HTTPS | Vært: `https://dns.arapurayil.com/dns-query`                 | [Add to AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) is a personal DNS service hosted in Trondheim, Norway, using an AdGuard Home infrastructure.

Blocks more ads and malware than AdGuard DNS thanks to more advanced syntax, but goes easier on trackers, and blocks alt-right tabloids and most imageboards. Logging is used to improve its used filterlists (e.g. by unblocking sites that shouldn't have been blocked), and to determine the least bad times for server system updates.

| Protokol       | Adresse                                               |                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Add to AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Add to AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                 |
| DNS, IPv6      | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                 |
| DNSCrypt, IPv4 | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                 |
