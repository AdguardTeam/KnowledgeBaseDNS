---
title: Kendte DNS-udbydere
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) er en alternativ løsning til adblocking, fortrolighedsbeskyttelse og forældrekontrol. Den tilbyder det nødvendige antal beskyttelsesfunktioner mod onlinereklamer, trackere og phishing, uanset hvilken platform og enhed, der benyttes.

#### Standard

Disse servere blokerer reklamer, sporing og phishing.

| Protokol       | Adresse                                                                      |                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `94.140.14.14` og `94.140.15.15`                                             | [Føj til AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::ad1:ff` og `2a10:50c0::ad2:ff`                                   | [Føj til AdGuard](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                      | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                  | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                 | [Føj til AdGuard](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |

#### Familiebeskyttelse

Disse servere leverer Standardfunktionerne + Blokering af voksne websteder + Sikker søgning.

| Protokol       | Adresse                                                                      |                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `94.140.14.15` og `94.140.15.16`                                             | [Føj til AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::bad1:ff` og `2a10:50c0::bad2:ff`                                 | [Føj til AdGuard](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                   | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                               | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                              | [Føj til AdGuard](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Ikke-filtrerende

Hver af disse servere leverer en sikker og pålidelig forbindelse, men i modsætning til "Standard"- og "Familiebeskyttelse"-serverne filtrerer de intet.

| Protokol       | Adresse                                                                       |                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` og `94.140.14.141`                                            | [Føj til AdGuard](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6      | `2a10:50c0::1:ff` og `2a10:50c0::2:ff`                                        | [Føj til AdGuard](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                            | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                           | [Føj til AdGuard](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Føj til AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) er en gratis rekursiv DNS-tjeneste. Yandex.DNS-servere er placeret i Rusland, SNG-lande og Vesteuropa. Brugerforespørgsler behandles af det nærmeste datacenter, hvilket giver høje forbindelseshastigheder.

#### Basis

I tilstanden "Basis" sker ingen trafikfiltrering.

| Protokol       | Adresse                                                              |                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` og `77.88.8.1`                                           | [Føj til AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` og `2a02:6b8:0:1::feed:0ff`                     | [Føj til AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Føj til AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |

#### Sikker

I tilstanden "Sikker" ydes beskyttelse mod inficerede og svigagtige websteder.

| Protokol  | Adresse                                          |                                                                    |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.88` og `77.88.8.2`                      | [Føj til AdGuard](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` og `2a02:6b8:0:1::feed:bad` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |

#### Familie

I tilstanden "Familie" ydes beskyttelse mod inficerede, svigagtige og voksenwebsteder.

| Protokol  | Adresse                                          |                                                                    |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.3` og `77.88.8.7`                       | [Føj til AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` og `2a02:6b8:0:1::feed:a11` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) er en DNS-tjeneste, der leverer tilpasset filtrering. Tjenesten tilbyder en sikker måde at surfe på nettet uden upassende indhold.

#### Familiefilter

Blokerer adgang til alle eksplicitte voksne- og pornowebsteder, inkl. proxy og VPN-domæner samt websteder med blandet indhold.

| Protokol       | Adresse                                                 |                                                                                                                                        |
| -------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` og `185.228.169.168`                  | [Føj til AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` og `2a0d:2a00:2::`                      | [Føj til AdGuard](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`      | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Voksenfilter

Mindre restriktivt end Familiefilter og blokerer kun adgang til voksenindhold samt phishing- og ondsindede domæner.

| Protokol       | Adresse                                                  |                                                                                                                                          |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` og `185.228.169.11`                     | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6      | `2a0d:2a00:1::1` og `2a0d:2a00:2::1`                     | [Føj til AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`        | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`               | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |

#### Sikkerhedsfilter

Blokerer phishing, spam og ondsindede domæner.

| Protokol       | Adresse                                              |                                                                                                      |
| -------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` og `185.228.169.9`                   | [Føj til AdGuard](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6      | `2a0d:2a00:1::2` og `2a0d:2a00:2::2`                 | [Føj til AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) er en domænenavnsopløsningstjeneste, der opløser DNS-forespørgsler gennem et verdensomspændende netværk af DNS-servere. Fjerner overdrevne annonceantal og beskytter mod phishing og spyware.

| Protokol       | Adresse                                                              |                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` og `8.20.247.20`                                        | [Føj til AdGuard](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Føj til AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) er en gratis cloud-baseret rekursiv DNS-tjeneste, der giver hurtig og pålidelig adgang til websteder og online-applikationer med indbygget sikkerhed og trusselsintelligens.

#### Pålidelighed og Ydeevne 1

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere nogen specifikke kategorier.

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` og `156.154.71.1`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` og `2610:a1:1019::1` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Pålidelighed og Ydeevne 2*

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere nogen specifikke kategorier og forhindrer også omdirigering af NXDomain-svar (ikke-eksisterende domæne) til en landingssider.

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` og `156.154.71.5`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` og `2610:a1:1019::5` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Trusselsbeskyttelse

Disse servere yder beskyttelse mod ondsindede domæner samt inkluderer funktionerne "Pålidelighed og Ydelse".

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` og `156.154.71.2`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` og `2610:a1:1019::2` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Familiesikker

Disse servere leverer adgangsblokering af voksenindhold samt inkluderer funktionerne "Plidelighed og Ydeevne" + "Trusselsbeskyttelse".

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` og `156.154.71.3`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` og `2610:a1:1019::3` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### Forretningssikker

Disse servere leverer blokering af uønsket og irrelevant indhold samt inkluderer funktionerne "Pålidelighed og Ydeevne" + "Trusselsbeskyttelse" + "Familiesikker".

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` og `156.154.71.4`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` og `2610:a1:1019::4` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) er en tjeneste, der udvider DNS ved at inkorporere funktioner såsom indholdsfiltrering og phishing-beskyttelse med nul nedetid.

#### Standard

DNS-servere med tilpasset filtrering, der beskytter enheden mod malware.

| Protokol       | Adresse                                                      |                                                                                                                                               |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` og `208.67.220.220`                         | [Føj til AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6      | `2620:119:35::35` og `2620:119:53::53`                       | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Føj til AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                          | [Føj til AdGuard](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### FamilyShield

OpenDNS-servere med blokering af voksenindhold.

| Protokol       | Adresse                                                     |                                                                                                                                              |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` og `208.67.220.123`                        | [Føj til AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`            | [Føj til AdGuard](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) er en gratis, global DNS-opløsningstjeneste, man kan anvende som et alternativ til sin aktuelle DNS-udbyder.

| Protokol       | Adresse                                          |                                                                                                                   |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` og `8.8.4.4`                           | [Føj til AdGuard](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6      | `2001:4860:4860::8888` og `2001:4860:4860::8844` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [Føj til AdGuard](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.google`                               | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) er en gratis og hurtig DNS-tjeneste, der fungerer som en rekursiv navneserver med domænenavnsopløsning til enhver vært på internet.

#### Standard

| Protokol             | Adresse                                          |                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` og `1.0.0.1`                           | [Føj til AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6            | `2606:4700:4700::1111` og `2606:4700:4700::1001` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [Føj til AdGuard](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [Føj til AdGuard](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`         | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Kun malwareblokering

| Protokol       | Adresse                                          |                                                                                               |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`                          | [Føj til AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6      | `2606:4700:4700::1112` og `2606:4700:4700::1002` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |

#### Blokering af malware og voksenindhold

| Protokol             | Adresse                                          |                                                                                            |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| DNS, IPv4            | `1.1.1.3` og `1.0.0.3`                           | [Føj til AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6            | `2606:4700:4700::1113` og `2606:4700:4700::1003` | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) er en gratis, rekursiv, anycast DNS-platform med højtydende, fortroligheds- og sikkerhedsbeskyttelse mod phishing og spyware. Quad9-servere har ingen censureringskomponent.

#### Standard

Almindelige DNS-servere med beskyttelse mod phishing og spyware. De omfatter blokeringslister, DNSSEC-validering og andre sikkerhedsfunktioner.

| Protokol       | Adresse                                                       |                                                                                                                                                |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` og `149.112.112.112`                                | [Føj til AdGuard](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                             | [Føj til AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Føj til AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                             | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS-over-TLS   | `tls://dns.quad9.net`                                         | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Ikke-sikret

Ikke-sikrede DNS-servere har ingen sikkerhedsblokeringsliste, DNSSEC eller EDNS Client Subnet.

| Protokol       | Adresse                                                          |                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` og `149.112.112.10`                                   | [Føj til AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                               | [Føj til AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                              | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                          | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client Subnet er en metode, der inkluderer komponenter af slutbrugerens IP-adressedata i forespørgsler sendt til autoritative DNS-servere. Den har sikkerhedsblokeringsliste, DNSSEC og EDNS Client-Subnet.

| Protokol       | Adresse                                                       |                                                                                                                                                |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` og `149.112.112.11`                                | [Føj til AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                            | [Føj til AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                           | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                       | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |

### Verisign offentlig DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) er en gratis DNS-tjeneste med forbedret DNS-stabilitet og sikkerhed ift. andre alternativer. Verisign respekterer brugernes fortrolighed: De sælger ikke offentlige DNS-data til tredjeparter eller omdirigerer brugernes forespørgsler mhp. reklamevisning.

| Protokol  | Adresse                                   |                                                                |
| --------- | ----------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` eller `64.6.65.6`             | [Føj til AdGuard](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` eller `2620:74:1c::2:2` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) er en schweizisk offentlig DNS-tjeneste leveret af [switch.ch](https://www.switch.ch/).

| Protokol       | Adresse                                                                          |                                                                            |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| DNS, IPv4      | Udbyder: `dns.switch.ch` IP: `130.59.31.248`                                     | [Føj til AdGuard](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6      | Udbyder: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                | [Føj til AdGuard](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | Værtsnavn: `tls://dns.switch.ch` IP: `130.59.31.248` og IPv6: `2001:620:0:ff::2` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) er en gratis, alternativ DNS-tjeneste fra Dyn.

| Protokol  | Adresse                            |                                                           |
| --------- | ---------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` og `216.146.36.36` | [Føj til AdGuard](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) er en hurtig og gratis server uden logning med fortrolighedsbeskyttelsesfunktion.

| Protokol  | Adresse                                                      |                                                                               |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` og `84.200.70.40`                             | [Føj til AdGuard](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` og `2001:1608:10:25::9249:d69b` | [Føj til AdGuard](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) er en fortrolighedsvenlig DNS-tjeneste med OpenNIC-understøttelse, der blokerer annoncer, trackere og malware, og den logger ingen data.

| Anycast Network | Adresse                              |                                                                                |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------ |
| DNS-over-HTTPS  | `https://dns.futuredns.me/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS    | `tls://dns.futuredns.me`             | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-over-QUIC   | `quic://dns.futuredns.me`            | [Føj til AdGuard](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Placering              | Adresse - IPv4                                                               |
| ---------------------- | ---------------------------------------------------------------------------- |
| London, Storbritannien | `52.56.224.201`| [Føj til AdGuard](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Milano, Italien        | `15.161.11.3`| [Føj til AdGuard](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Stockholm, Sverige     | `13.49.168.178`| [Føj til AdGuard](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Ashburn, USA           | `52.0.69.145`| [Føj til AdGuard](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| San Francisco, USA     | `13.56.204.161`| [Føj til AdGuard](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Montreal, Canada       | `3.97.137.100`| [Føj til AdGuard](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Singapore              | `54.254.82.60`| [Føj til AdGuard](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Tokyo, Japan           | `54.199.94.55`| [Føj til AdGuard](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Mumbai, Indien         | `3.7.162.217`| [Føj til AdGuard](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| São Paulo, Brasilien   | `177.71.191.153`| [Føj til AdGuard](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/)-løsning til indholdsfiltrering og internetsikkerhed.

| Protokol  | Adresse          |                                                            |
| --------- | ---------------- | ---------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) er en hurtig og sikker DNS-tjeneste med annonce-, sporings- og phishing-beskyttelse.

#### West DNS Server (primær)

| Protokol       | Adresse                           |                                                                            |
| -------------- | --------------------------------- | -------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)               |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [Føj til AdGuard](sdns://BAAAAAAAAAAAAAARZG5zLmNvbXNzLm9uZTo3ODQ)          |

#### East DNS Server (Sibirien og Fjernøsten)

| Protokol       | Adresse                                |                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [Føj til AdGuard](sdns://BAAAAAAAAAAAAAAWZG5zLmVhc3QuY29tc3Mub25lOjc4NA)          |

### Safe DNS

[Safe DNS](https://www.safedns.com/) er et globalt anycast-netværk bestående af servere placeret verden over — både Amerika, Europa, Afrika, Australien og Fjernøsten for at sikre hurtig og pålidelig DNS-opløsning fra ethvert punkt i hele verden.

| Protokol  | Adresse                          |                                                          |
| --------- | -------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` og `195.46.39.40` | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) beskytter imod tyveri af personlige og økonomiske data. Hold vira, ransomware og anden malware ude af hjemmet.

#### Privat

I tilstanden "Privat", kun DNS-opløsning.

| Protokol               | Adresse                                                                                             |                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` og `149.112.122.10`                                                                | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620:10A:80BB::10` og `2620:10A:80BC::10`                                                          | [Føj til AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS - Private | Værtsnavn: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` og IPv6: `2620:10A:80BB::10` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Beskyttet

I tilstanden "Beskyttet", beskyttelse mod malware og phishing.

| Protokol                 | Adresse                                                                                               |                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` og `149.112.122.20`                                                                  | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` og `2620:10A:80BC::20`                                                            | [Føj til AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Protected | Værtsnavn: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` og IPv6: `2620:10A:80BB::20` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Familie

I tilstanden "Familie", beskyttelse + blokering af voksenindhold.

| Protokol              | Adresse                                                                                               |                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DNS, IPv4             | `149.112.121.30` og `149.112.122.30`                                                                  | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` og `2620:10A:80BC::30`                                                            | [Føj til AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                     | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Family | Værtsnavn: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30` og IPv6: `2620:10A:80BB::30` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) er en gratis, alternativ DNS-tjeneste fra OpenNIC Project.

| Protokol  | Adresse                                   |                                                                |
| --------- | ----------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` og `169.239.202.202`    | [Føj til AdGuard](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` og `2a05:dfc7:5353::53` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Et lille hobby DNS-projekt. Ingen logger, Ethereum Name Service, DNSSEC-klar og Filtrerede reklamer, trackere, malware.

#### Finland DNS Server

| Protokol             | Adresse                                                                 |                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`  | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Japan DNS Server

| Protokol             | Adresse                                                                            |                                                                                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot-jp.blahdns.com`  IP: `139.162.112.47`                        | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-jp.blahdns.com/dns-query`                                  | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Germany DNS Server

| Protokol             | Adresse                                                                 |                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot-de.blahdns.com`  IP: `159.69.198.101`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`  | [Føj til AdGuard](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) er en fortrolighedsvenlig DNS-tjeneste drevet af Noah Seefried.

| Protokol       | Adresse                                                                                          |                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` og IPv6: `2a01:4f9:2a:1919::9301` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` og IPv6: `2a01:4f9:2a:1919::9301`             | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) har til formål at blokere voksne websteder. Den muliggør, at børn og voksne kan surfe sikkert på internet uden at bekymre sig om at blive sporet af ondsindede websteder.

| Protokol       | Adresse                                                   |                                                                                                                                           |
| -------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`              | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                          | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`                       | [Føj til AdGuard](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` og `2a01:4f8:1c17:4df8::1`        | [Føj til AdGuard](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4 | Udbyder: `dnsforfamily.com` IP: `94.130.180.225`          | [Føj til AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6 | Udbyder: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR er Open DNSSEC Validating Resolvers. CZ.NIC hverken indsamler personlige data eller oplysninger fra sider, hvortil enheder sender personlige data.

| Protokol       | Adresse                                    |                                                                   |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` og `185.43.135.1`            | [Føj til AdGuard](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6      | `2001:148f:ffff::1` og `2001:148f:fffe::1` | [Føj til AdGuard](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) er en gratis rekursiv DNS-tjeneste, dedikeret til at levere hurtig, stabil og sikker DNS-opløsning til hovedparten af internetbrugere. Den inkluderer AliGuard-funktion for brugerbeskyttelse mod forskellige angreb og trusler.

| Protokol       | Adresse                               |                                                                              |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` og `223.6.6.6`            | [Føj til AdGuard](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6      | `2400:3200::1` og `2400:3200:baba::1` | [Føj til AdGuard](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

IPv6-baseret anycast DNS-tjeneste med stærke sikkerhedskapaciteter og beskyttelse imod spyware, ondsindede websteder. Den understøtter DNS64 for kun at levere domænenavnsopløsning til rene IPv6-brugere.

| Protokol       | Adresse                           |                                                                            |
| -------------- | --------------------------------- | -------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` og `240C::6644`      | [Føj til AdGuard](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) er et anycast-internetfiltreringssystem, der beskytter børn mod upassende websteder og stødende indhold.

| Protokol       | Adresse                                                    |                                                                                                                                            |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `180.131.144.144` og `180.131.145.145`                     | [Føj til AdGuard](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Føj til AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** er en brancheførende rekursiv DNS-tjeneste med avanceret beskyttelse mod netværkssikkerhedstrusler.

| Protokol       | Adresse                           |                                                                        |
| -------------- | --------------------------------- | ---------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` og `218.30.118.6`   | [Føj til AdGuard](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4      | `123.125.81.6` og `140.207.198.6` | [Føj til AdGuard](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) er en offentlig DNS-tjeneste drevet af Internet Initiative Japan. Den blokerer også børnemisbrugsindhold.

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) er en fortrolighedsvenlig DNS-udbyder med mange års erfaring inden for udvikling af domænenavnsopløsningstjenester. Den har til formål at give brugerne en hurtigere, mere præcis samt stabil rekursiv opløsningstjeneste.

| Protokol       | Adresse                          |                                                                    |
| -------------- | -------------------------------- | ------------------------------------------------------------------ |
| DNS, IPv4      | `119.29.29.29` og `119.28.28.28` | [Føj til AdGuard](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS-over-HTTPS | `https://doh.pub/dns-query`      | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`      | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.pub`                  | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** er en professionel DNS-tjeneste med høj pålidelighed.

#### Normal

Blokér annoncer og irriterende websteder.

| Protokol  | Adresse                                |                                                              |
| --------- | -------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.114` og `114.114.115.115` | [Føj til AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Sikker

Blokerer phishing, ondsindede og andre ikke-sikre websteder.

| Protokol  | Adresse                                |                                                              |
| --------- | -------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.119` og `114.114.115.119` | [Føj til AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Familie

Disse servere blokerer voksenwebsteder og upassende indhold.

| Protokol  | Adresse                                |                                                              |
| --------- | -------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.110` og `114.114.115.110` | [Føj til AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) er en gratis alternativ DNS-tjeneste uden logning fra TWNIC (Taiwan Network Information Center).

| Protokol       | Adresse                                |                                                                           |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` og `101.102.103.104` | [Føj til AdGuard](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6      | `2001:de4::101` og `2001:de4::102`     | [Føj til AdGuard](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |

### OneDNS

**OneDNS** er en sikker, hurtig og gratis niche DNS-tjeneste med blokeringsfacilitet for ondsindede domæner.

#### Pure Edition

| Protokol  | Adresse                         |                                                          |
| --------- | ------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` og `52.80.52.52` | [Føj til AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| Protokol  | Adresse                         |                                                          |
| --------- | ------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` og `52.80.66.66` | [Føj til AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokerer flere end 140K reklame-, reklamesporings-, malware- og phishing-domæner. Ingen logning, ingen ECS, DNSSEC-validering, gratis!

#### Singapore DNS Server

| Protokol       | Adresse                                                                   | Placering                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                          | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                               | [Føj til AdGuard](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Føj til AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Føj til AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party)               | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                          | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                     | [Føj til AdGuard](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                      | [Føj til AdGuard](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |

#### Japan DNS Server

| Protokol       | Adresse                                                                       |                                                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                               | [Føj til AdGuard](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                              | [Føj til AdGuard](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Føj til AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Føj til AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                             | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                               | [Føj til AdGuard](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                           | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) er en åben, gratis og offentlig DNS-tjeneste. Ingen DNS-omdirigeringer, nul logning.

| Protokol  | Adresse                              |                                                            |
| --------- | ------------------------------------ | ---------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` og `172.104.49.100` | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` og `37.235.1.177`     | [Føj til AdGuard](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) er en gratis, anonym DNS-opløser fra Freenom World.

| Protokol  | Adresse                        |                                                        |
| --------- | ------------------------------ | ------------------------------------------------------ |
| DNS, IPv4 | `80.80.80.80` og `80.80.81.81` | [Føj til AdGuard](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) er et lille Adblocking DNS-hobbyprojekt.

#### OSZX server

Disse servere tilbyder ingen reklameblokering, opbevarer ingen logfiler og har DNSSEC aktiveret.

| Protokol       | Adresse                                                                 |                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                          | [Føj til AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                               | [Føj til AdGuard](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Føj til AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Føj til AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                         | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                     | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### PumpleX server

Disse servere tilbyder ingen reklameblokering, opbevarer ingen logfiler og har DNSSEC aktiveret.

| Protokol       | Adresse                                                                      |                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                               | [Føj til AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                   | [Føj til AdGuard](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Føj til AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Føj til AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                          | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                      | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) driver DNS-fortrolighedstjenester for, vha. moderne protokoller, at hjælpe med at beskytte DNS-trafik og hjælpe med at diversificere DNS-opløser landskabet.

| Protokol       | Adresse                                 |                                                                                    |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) er en DNS-tjeneste fra Strongarm, der forhindrer folk i at interagere med ondsindet indhold.

| Protokol  | Adresse                           |                                                           |
| --------- | --------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` og `52.3.100.184` | [Føj til AdGuard](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) er en DNS-tjeneste fra SafeSurfer, der beskytter enheden mod skadeligt og voksent indhold.

| Protokol       | Adresse                                                          |                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` og `104.197.28.121`                            | [Føj til AdGuard](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Føj til AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) En sikker, privat, open-source DNS-opløser med malwarebeskyttelse, adblocking og uden logfiler. Degoogle og Ungoogle mobilen, tabletten og computeren.

| Protokol       | Adresse                                                                      |                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Føj til AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                        | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                    | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) drives af Elias Ojala.

| Protokol       | Adresse                                  |                                                                                      |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) er en server, der kører fra en Digital Ocean-droplet i BLR1-regionen. Vedligeholdes af Abhay Rana aka Nemo.

| Protokol       | Adresse                                                         |                                                                                                                                                   |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Føj til AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) leverer gratis DNS-tjeneste uden logning, DNSSEC aktiveret.

| Protokol       | Adresse                            |                                                                        |
| -------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` og `45.11.45.11` | [Føj til AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6      | `2a09::` og `2a11::`               | [Føj til AdGuard](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://185.222.222.222`            | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) er en redundant DNS-opløser med en adblocking og ingen logning leveret af [adminforge](https://adminforge.de/).

| Protokol       | Adresse                                              |                                                                          |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4      | `176.9.93.198` og `176.9.1.117`                      | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` og `2a01:4f8:141:316d::117` | [Føj til AdGuard](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver)-servere leveres af [Restena Foundation](https://www.restena.lu/).

| Protokol       | Adresse                                                                            |                                                                                   |
| -------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` og IPv6: `2001:a18:1::29` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` og IPv6: `2001:a18:1::29`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) er en Fusls offentlige primær OpenNIC Tier2 Anycast DNS-opløser.

| Protokol       | Adresse                                                             |                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) gratis DNS-servere leveret af Freifunk München.

| Protokol             | Adresse                                                               |                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot.ffmuc.net`                                      | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh.ffmuc.net/dns-query`                          | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Føj til AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Føj til AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) er en offentlig opløser drevet af Digital Society. Hostes i Zürich, Schweiz.

| Protokol       | Adresse                                                                                       |                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` og IPv6: `2a05:fc84::42` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` og IPv6: `2a05:fc84::43`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) er en offentlig, krypteret DNS-tjeneste drevet af [LibreOps](https://libreops.cc/).

| Protokol       | Adresse                                      |                                                                               |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Føj til AdGuard](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testservere leveret af ibksturm. OPENNIC, DNSSEC, ingen filtrering, nul logning.

| Protokol             | Adresse                                                                                  |                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://ibksturm.synology.me` IP: `83.77.85.7`                                 | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190`                 | [Føj til AdGuard](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443`                                | [Føj til AdGuard](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [Føj til AdGuard](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

Et åbent samarbejdsprojekt til promovering, implementering og udrulning af [DNS Privacy](https://dnsprivacy.org/).

DNS-servere drives af [Stubby-udviklerne](https://getdnsapi.net/).

| Protokol     | Adresse                                                                                                                      |                                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-TLS | Værtsnavn: `tls://getdnsapi.net` IP: `185.49.141.37` og IPv6: `2a04:b900:0:100::37`                                          | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` og IPv6: `2001:610:1:40ba:145:100:185:15`  | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` og IPv6: `2001:610:1:40ba:145:100:185:16` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Andre DNS-servere med 'nul logning'-politik.

| Protokol           | Adresse                                                                                                             |                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` og IPv6: `2a01:3a0:53:53::0` | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` og IPv6: `2001:67c:28a4::` | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Udbyder: `dkg` Værtsnavn: `tls://dns.cmrg.net` IP: `199.58.81.218` og IPv6: `2001:470:1c:76d::53`                   | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                           | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS-over-TLS       | Værtsnavn: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` og IPv6: `2001:8b0:24:24::24`                       | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS-over-TLS       | Værtsnavn: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` og IPv6: `2a01:4f8:c0c:3c03::2`                           | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS       | Værtsnavn: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` og IPv6: `2a01:4f8:c0c:3bfc::2`                           | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS-over-TLS       | Værtsnavn: `tls://dns.neutopia.org` IP: `89.234.186.112` og IPv6: `2a00:5884:8209::2`                               | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS-over-TLS       | Udbyder: `Go6Lab` Værtsnavn: `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                 | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS-over-TLS       | Værtsnavn: `tls://dot.securedns.eu` IP: `146.185.167.43` og IPv6: `2a03:b0c0:0:1010::e9a:3001`                      | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS-servere med minimal logning/restriktioner. Disse servere anvender noget logning, selvsignerede certifikater eller ingen understøttelse af streng tilstand.

| Protokol     | Adresse                                                                                                          |                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| DNS-over-TLS | Udbyder: `NIC Chile` Værtsnavn: `dnsotls.lab.nic.cl` IP: `200.1.123.46` og IPv6: `2001:1398:1:0:200:1:123:46`    | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS-over-TLS | Udbyder: `OARC` Værtsnavn: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` og IPv6: `2620:ff:c000:0:1::64:25` | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) En nul-logning og adblocking DNS-tjeneste leveret af Fredrik Pettersson.

#### Blitz

[Konfigurerbar filtrering](https://blitz-setup.ahadns.com/) verdensomspændende, kun DoH-variant.

| Protokol                                      | Adresse                           |                                                                            |
| --------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| DNS-over-HTTPS, ucensureret                   | `https://blitz.ahadns.com`        | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS, OISD-filter                   | `https://blitz.ahadns.com/1:1`    | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD og Energized-pornofilter | `https://blitz.ahadns.com/1:1.12` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Holland

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Føj til AdGuard](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### Indien

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Føj til AdGuard](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Føj til AdGuard](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Føj til AdGuard](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Føj til AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### New York

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Føj til AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Føj til AdGuard](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Polen

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### Italien

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |

#### Spanien

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Norge

| Protokol       | Adresse                               |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Chicago

| Protokol       | Adresse                                |                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) er en fortrolighedsorienteret DNS-tjeneste leveret af Sebastian Schmidt. Ingen logning, DNSSEC-validering.

#### DNS-server 1

| Protokol       | Adresse                                                   |                                                                                                                                           |
| -------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                            | [Føj til AdGuard](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Føj til AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS-over-TLS   | `tls://dot.seby.io`                                       | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) er fysisk placeret nær Barcelona, Spain. puntCAT tilbyder en offentlig DNS-tjeneste, gratis, sikker, lukket, der også respekterer brugernes fortrolighed.

| Protokol  | Adresse            |                                                                  |
| --------- | ------------------ | ---------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Føj til AdGuard](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Føj til AdGuard](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) driver offentlige DNS-opløsere mhp. at accelerere forespørgsler og forøge redundans. Tjenesten leveres af [Peerix](https://www.peerix.net/)

#### Standard

Disse servere leverer DNS-opløsning uden trafikfiltrering.

| Protokol       | Adresse                                |                                                                               |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` og `185.235.81.2`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6      | `2a0d:4d00:81::1` og `2a0d:4d00:81::2` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`    | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Sikker

Sikker tilstand beskytter mod inficerede, svigagtige eller bot-websteder.

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` og `185.235.81.4`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` og `2a0d:4d00:81::4` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Familie

Familietilstand tilbyder beskyttelse fra "Sikre" opløsere og blokerer voksenwebsteder.

| Protokol  | Adresse                                |                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` og `185.235.81.6`       | [Føj til AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` og `2a0d:4d00:81::6` | [Føj til AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) leverer offentligt tilgængelige ikke-filtrerende opløsere uden logning i tilgift til sine freemium opsætbare filtreringsopløsere med valgfri logning.

#### Ultralav latenstid

| Protokol       | Adresse                  |                                                                              |
| -------------- | ------------------------ | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Protokol       | Adresse                          |                                                                                        |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) leverer en DNS-over-HTTPS tjeneste, der kører som Cloudflare Worker, og en DNS-over-TLS tjeneste, der kører som Fly.io Worker med tilpasselige blokeringslister.

#### Ikke-filtrerende

| Protokol       | Adresse                         |                                                                          |
| -------------- | ------------------------------- | ------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) er en tilpasselig DNS-tjeneste med proxy-funktioner. Dette betyder, at den ikke kun blokerer ting (annoncer, porno mv.), men også kan afblokere websteder og tjenester.

#### Ikke-filtrerende

| Protokol       | Adresse                           |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` og `76.76.10.0`       | [Føj til AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| IPv6           | `2606:1a40::` og `2606:1a40:1::`  | [Føj til AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Føj til AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Føj til AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

#### Malware-blokering

| Protokol       | Adresse                           |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Føj til AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Føj til AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Føj til AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokér malware + annoncer

| Protokol       | Adresse                           |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Føj til AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Føj til AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Føj til AdGuard](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokér malware + annoncer + social

| Protokol       | Adresse                           |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Føj til AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Føj til AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [Føj til AdGuard](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) leverer offentligt tilgængeligt DNS med QNAME-minimering, endepunkter placeret i Australien, Tyskland, Singapore, Sverige, Storbritannien og USA (New York og Los Angeles).

#### Ikke-filtrerende

| Protokol       | Adresse                             |                                                                               |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Adblocking

| Protokol       | Adresse                                     |                                                                                          |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Små personlige opløsere

Dette afsnit oplister små og fortrinsvis personlige DNS-opløsere. De har ofte kun én eller meget få servere og dårligere oppetid end 'store' udbydere. Vi vil ikke kunne overvåge deres tilgængelighed ordentligt. **Anvendelse sker på eget ansvar!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) er en personlig DNS-tjeneste, der hostes i Mumbai, India.

Ikke-logning | Filtrerer reklamer, trackere, phishing mv. | DNSSEC | QNAME-minimering | Intet EDNS Client-Subnet.

| Protokol       | Adresse                                                      |                                                                                                                                                          |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Vært: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Føj til AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS-over-HTTPS | Vært: `https://dns.arapurayil.com/dns-query`                 | [Føj til AdGuard](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) er en personlig DNS-tjeneste, der hostes i Trondheim, Norge, vha. en AdGuard Home-infrastruktur.

Blokerer flere annoncer og malware end AdGuard DNS takket være en mere avanceret syntaks, men med mindre striks håndtering af trackere, samt blokering af alt-right tabloids og de fleste imageboards. Logning bruges til at forbedre dens anvendte filterlister (f.eks. ved afblokering af websteder, som ikke burde være blevet blokeret), samt til at bestemme de mindst forstyrrende tidspunkter for serversystemopdateringer.

| Protokol       | Adresse                                               |                                                                                                       |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Føj til AdGuard](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Føj til AdGuard](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Føj til AdGuard](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4      | Varierer; se link ovenfor.                            |                                                                                                       |
| DNS, IPv6      | Varierer; se link ovenfor.                            |                                                                                                       |
| DNSCrypt, IPv4 | Varierer; se link ovenfor.                            |                                                                                                       |
