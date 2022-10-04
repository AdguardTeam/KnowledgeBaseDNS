---
title: Známí poskytovatelé DNS
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) je alternativní řešení pro blokování reklam, ochranu soukromí a rodičovskou kontrolu. Poskytuje řadu potřebných funkcí ochrany proti online reklamám, slídičům a krádeži identity bez ohledu na to, jakou platformu a zařízení používáte.

#### Výchozí

Tyto servery zajišťují blokování reklam, ochranu proti slídičům a krádeži identity

| Protokol        | Adresa                                                                            |                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.14` a `94.140.15.15`                                                   | [Přidat do AdGuardu](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6       | `2a10:50c0::ad1:ff` a `2a10:50c0::ad2:ff`                                         | [Přidat do AdGuardu](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS skrze HTTPS | `https://dns.adguard-dns.com/dns-query`                                           | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS skrze TLS   | `tls://dns.adguard-dns.com`                                                       | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS skrze QUIC  | `quic://dns.adguard-dns.com`                                                      | [Přidat do AdGuardu](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |


#### Ochrana rodiny

Tyto servery poskytují výchozí funkce + blokování webových stránek pro dospělé + bezpečné vyhledávání

| Protokol        | Adresa                                                                            |                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.15` a `94.140.15.16`                                                   | [Přidat do AdGuardu](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6       | `2a10:50c0::bad1:ff` a `2a10:50c0::bad2:ff`                                       | [Přidat do AdGuardu](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS skrze HTTPS | `https://family.adguard-dns.com/dns-query`                                        | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS skrze TLS   | `tls://family.adguard-dns.com`                                                    | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS skrze QUIC  | `quic://family.adguard-dns.com`                                                   | [Přidat do AdGuardu](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Bez filtrování

Tyto servery poskytují bezpečné a spolehlivé připojení, ale nefiltrují nic jako servery "Výchozí" a "Ochrana rodiny".

| Protokol        | Adresa                                                                             |                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.140` a `94.140.14.141`                                                  | [Přidat do AdGuardu](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6       | `2a10:50c0::1:ff` a `2a10:50c0::2:ff`                                              | [Přidat do AdGuardu](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS skrze HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                     | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS skrze TLS   | `tls://unfiltered.adguard-dns.com`                                                 | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS skrze QUIC  | `quic://unfiltered.adguard-dns.com`                                                | [Přidat do AdGuardu](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |


### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) je bezplatná rekurzivní služba DNS. Servery Yandex.DNS se nacházejí v Rusku, zemích SNS a západní Evropě. Požadavky uživatelů zpracovává nejbližší datové centrum, které poskytuje vysoké rychlosti připojení.

#### Základní

V "Základním" režimu není filtrování datového provozu prováděno

| Protokol       | Adresa                                                                    |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` a `77.88.8.1`                                                 | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` a `2a02:6b8:0:1::feed:0ff`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Přidat do AdGuardu](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |


#### Bezpečný

V "Bezpečném" režimu je poskytována ochrana před infikovanými a podvodnými stránkami

| Protokol  | Adresa                                          |                                                                       |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` a `77.88.8.2`                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` a `2a02:6b8:0:1::feed:bad` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |


#### Rodinný

V "Rodinném" režimu je zajištěna ochrana před infikovanými, podvodnými stránkami a stránkami pro dospělé

| Protokol  | Adresa                                          |                                                                       |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` a `77.88.8.7`                       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` a `2a02:6b8:0:1::feed:a11` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) je služba DNS, která poskytuje přizpůsobitelné filtrování. Tato služba nabízí bezpečný způsob prohlížení webu bez nevhodného obsahu.

#### Rodinný filtr

Blokuje přístup ke všem webům pro dospělé, pornografickým a explicitním webům, včetně proxy serverů a domén VPN a webů se smíšeným obsahem

| Protokol        | Adresa                                                       |                                                                                                                                           |
| --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.168` a `185.228.169.168`                        | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6       | `2a0d:2a00:1::` a `2a0d:2a00:2::`                            | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4  | Poskytovatel: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6  | Poskytoatelr: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`           | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS skrze TLS   | `tls://family-filter-dns.cleanbrowsing.org`                  | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Filtr pro dospělé

Je méně omezující než Rodinný filtr, blokuje pouze přístup k obsahu pro dospělé, škodlivým doménám a zamezuje krádeži identity

| Protokol        | Adresa                                                        |                                                                                                                                             |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.10` a `185.228.169.11`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6       | `2a0d:2a00:1::1` a `2a0d:2a00:2::1`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4  | Poskytovatel: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6  | Poskytovatel: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`             | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS skrze TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                    | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |


#### Bezpečnostní filtr

Blokuje krádež identity, spam a škodlivé domény

| Protokol        | Adresa                                               |                                                                                                         |
| --------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.9` a `185.228.169.9`                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6       | `2a0d:2a00:1::2` a `2a0d:2a00:2::2`                  | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS skrze TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) je služba řešení doménových jmen, která řeší vaše požadavky DNS prostřednictvím celosvětové sítě serverů DNS. Odstraňuje nadměrné množství reklam a chrání před krádeží identity a spywarem.

| Protokol       | Adresa                                                                    |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` a `8.20.247.20`                                              | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |
### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) je bezplatná cloudová rekurzivní služba DNS, která poskytuje rychlý a spolehlivý přístup k webům a online aplikacím s integrovaným zabezpečením a informacemi o hrozbách.

#### Spolehlivost a výkonnost 1

Tyto servery poskytují spolehlivé a rychlé DNS vyhledávání bez blokování určitých kategorií

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` a `156.154.71.1`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` a `2610:a1:1019::1` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Spolehlivost a výkonnost 2*

Tyto servery poskytují spolehlivé a rychlé DNS vyhledávání bez blokování konkrétních kategorií a také zabraňují přesměrování odpovědí na neexistující doménu (NXDomain) na cílovou stránku

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` a `156.154.71.5`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` a `2610:a1:1019::5` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Ochrana před hrozbami

Tyto servery poskytují ochranu proti škodlivým doménám a obsahují také funkce "Spolehlivost a výkonnost"

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` a `156.154.71.2`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` a `2610:a1:1019::2` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Zabezpečení rodiny

Tyto servery poskytují blokování přístupu ke obsahu pro dospělé a zahrnují také funkce "Spolehlivost a výkonnost" + "Ochrana před hrozbami"

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` a `156.154.71.3`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` a `2610:a1:1019::3` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### Zabezpečení podnikání

Tyto servery zajišťují blokování nežádoucího a časově náročného obsahu a obsahují také funkce "Spolehlivost a výkonnost" + "Ochrana před hrozbami" + "Zabezpečení rodiny"

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` a `156.154.71.4`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` a `2610:a1:1019::4` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) je služba, která rozšiřuje DNS o funkce, jako je filtrování obsahu a ochrana proti krádeži identity.

#### Standardní

DNS servery s vlastním filtrováním, které chrání zařízení před malwarem

| Protokol        | Adresa                                                            |                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `208.67.222.222` a `208.67.220.220`                               | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6       | `2620:119:35::35` a `2620:119:53::53`                             | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS skrze HTTPS | `https://doh.opendns.com/dns-query`                               | [Přidat do AdGuardu](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### FamilyShield

Servery OpenDNS, které zajišťují blokování obsahu pro dospělé

| Protokol        | Adresa                                                           |                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.123` a `208.67.220.123`                              | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS skrze HTTPS | `https://doh.familyshield.opendns.com/dns-query`                 | [Přidat do AdGuardu](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) je bezplatná globální služba DNS, kterou můžete používat jako alternativu ke svému stávajícímu poskytovateli DNS.

| Protokol        | Adresa                                          |                                                                                                                      |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `8.8.8.8` a `8.8.4.4`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6       | `2001:4860:4860::8888` a `2001:4860:4860::8844` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS skrze HTTPS | `https://dns.google/dns-query`                  | [Přidat do AdGuardu](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://dns.google`                              | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) je bezplatná a rychlá služba DNS, která funguje jako rekurzivní jmenný server poskytující překlad názvů domén pro libovolného hostitele na internetu.

#### Standardní

| Protokol              | Adresa                                          |                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4             | `1.1.1.1` a `1.0.0.1`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6             | `2606:4700:4700::1111` a `2606:4700:4700::1001` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS skrze HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Přidat do AdGuardu](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS skrze HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS skrze TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Pouze blokování škodlivého softwaru

| Protokol        | Adresa                                          |                                                                                                  |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `1.1.1.2` a `1.0.0.2`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6       | `2606:4700:4700::1112` a `2606:4700:4700::1002` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS skrze HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://security.cloudflare-dns.com`             | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |


#### Blokování škodlivého softwaru a obsahu pro dospělé

| Protokol              | Adresa                                          |                                                                                               |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.3` a `1.0.0.3`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6             | `2606:4700:4700::1113` a `2606:4700:4700::1003` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS skrze HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS skrze TLS         | `tls://family.cloudflare-dns.com`               | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |


### Quad9 DNS

[Quad9 DNS](https://quad9.net/) je bezplatná rekurzivní platforma DNS s libovolným vysíláním, která poskytuje vysoký výkon, ochranu soukromí a zabezpečení před krádeží identity a spywarem. Servery Quad9 neposkytují cenzurní komponentu.

#### Standardní

Obvyklé servery DNS, které poskytují ochranu před krádeží identity a spywarem. Zahrnují seznamy blokování, ověřování DNSSEC a další bezpečnostní funkce.

| Protokol        | Adresa                                                             |                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.9` a `149.112.112.112`                                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6       | `2620:fe::fe` IP: `2620:fe::fe:9`                                  | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS skrze HTTPS | `https://dns.quad9.net/dns-query`                                  | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS skrze TLS   | `tls://dns.quad9.net`                                              | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Nezabezpečený

Nezabezpečené servery DNS neposkytují žádný zabezpečený seznam zakázaných, žádný DNSSEC, žádný EDNS klient-podsíť

| Protokol        | Adresa                                                                |                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.10` a `149.112.112.10`                                         | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6       | `2620:fe::10` IP: `2620:fe::fe:10`                                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS skrze HTTPS | `https://dns10.quad9.net/dns-query`                                   | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS skrze TLS   | `tls://dns10.quad9.net`                                               | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### Podpora [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client-Subnet je metoda, která zahrnuje součásti údajů o IP adresách koncových uživatelů v požadavcích zasílaných autoritativním serverům DNS. Poskytuje zabezpečený seznam zakázaných, DNSSEC, EDNS Client-Subnet.

| Protokol        | Adresa                                                             |                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.11` a `149.112.112.11`                                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6       | `2620:fe::11` IP: `2620:fe::fe:11`                                 | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS skrze HTTPS | `https://dns11.quad9.net/dns-query`                                | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS skrze TLS   | `tls://dns11.quad9.net`                                            | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |
### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) je bezplatná služba DNS, která oproti jiným alternativám nabízí lepší stabilitu a zabezpečení DNS. Verisign respektuje soukromí uživatelů: neprodává veřejná data DNS třetím stranám a nepřesměrovává dotazy uživatelů pro zobrazování reklam.

| Protokol  | Adresa                                   |                                                                   |
| --------- | ---------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` nebo `64.6.65.6`             | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` nebo `2620:74:1c::2:2` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |
### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) je švýcarská veřejná služba DNS, kterou poskytuje [switch.ch](https://www.switch.ch/)

| Protokol        | Adresa                                                                                 |                                                                               |
| --------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4       | Poskytovatel: `dns.switch.ch` IP: `130.59.31.248`                                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6       | Poskytovatel: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                 | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS skrze HTTPS | `https://dns.switch.ch/dns-query`                                                      | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | Název hostitele: `tls://dns.switch.ch` IP: `130.59.31.248`  a IPv6: `2001:620:0:ff::2` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) je bezplatná alternativní služba DNS společnosti Dyn

| Protokol  | Adresa                            |                                                              |
| --------- | --------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `216.146.35.35` a `216.146.36.36` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) je rychlý a bezplatný server bez přihlašování s funkcí ochrany soukromí.

| Protokol  | Adresa                                                      |                                                                                  |
| --------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` a `84.200.70.40`                             | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` a `2001:1608:10:25::9249:d69b` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) je služba DNS šetrná k soukromí s podporou OpenNIC, která blokuje reklamy, slídiče, malware a nezaznamenává žádná data.

| Síť Anycast     | Adresa                               |                                                                                   |
| --------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.futuredns.me/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://dns.futuredns.me`             | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS skrze QUIC  | `quic://dns.futuredns.me`            | [Přidat do AdGuardu](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Umístění            | Adresa - IPv4                                                                   |
| ------------------- | ------------------------------------------------------------------------------- |
| Londýn, UK          | `52.56.224.201`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Milán, Itálie       | `15.161.11.3`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Stockholm, Švédsko  | `13.49.168.178`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Ashburn, USA        | `52.0.69.145`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| San Francisco, USA  | `13.56.204.161`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Montreal, Kanada    | `3.97.137.100`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Singapur            | `54.254.82.60`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Tokio, Japonsko     | `54.199.94.55`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Bombaj, Indie       | `3.7.162.217`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| São Paulo, Brazílie | `177.71.191.153`| [Přidat do AdGuardu](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

Řešení [SkyDNS](https://www.skydns.ru/en/) pro filtrování obsahu a zabezpečení internetu.

| Protokol  | Adresa           |                                                               |
| --------- | ---------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.ru DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) je rychlý a bezpečný server DNS s ochranou proti reklamám, sledování a krádeži identity.

#### West DNS Server (hlavní)

| Protokol        | Adresa                                                                           |                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `92.38.152.163` a `93.115.24.204`                                                | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTkyLjM4LjE1Mi4xNjM)                                                                                                         |
| DNS, IPv6       | `2a03:90c0:56::1a5` a `2a02:7b40:5eb0:e95d::1`                                   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syYTAzOjkwYzA6NTY6OjFhNV0)                                                                                                 |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.dns.comss.one` IP: `94.176.233.93:443`            | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAETk0LjE3Ni4yMzMuOTM6NDQzIBVpyAOGbSSr5yLPYOsmU-FiMj2_q0BAdu6WiMTPzpMTHTIuZG5zY3J5cHQtY2VydC5kbnMuY29tc3Mub25l)                |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.dns.comss.one` IP: `[2a02:7b40:5eb0:e95d::1]:443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAyOjdiNDA6NWViMDplOTVkOjoxXTo0NDMgFWnIA4ZtJKvnIs9g6yZT4WIyPb-rQEB27paIxM_OkxMdMi5kbnNjcnlwdC1jZXJ0LmRucy5jb21zcy5vbmU) |
| DNS skrze HTTPS | `https://dns.comss.one/dns-query`                                                | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5)                                                                                        |
| DNS skrze TLS   | `tls://dns.comss.one`                                                            | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)                                                                                                      |

#### East DNS Server (Sibiř a Dálný východ)

| Protokol        | Adresa                                  |                                                                                      |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS, IPv4       | `92.223.109.31` a `91.230.211.67`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTkyLjIyMy4xMDkuMzE)                         |
| DNS, IPv6       | `2a03:90c0:b5::1a` a `2a04:2fc0:39::47` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAElsyYTAzOjkwYzA6YjU6OjFhXQ)                  |
| DNS skrze HTTPS | `https://dns.east.comss.one/dns-query`  | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://dns.east.comss.one`              | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |

### Safe DNS

[Safe DNS](https://www.safedns.com/) je globální anycastová síť, která se skládá ze serverů umístěných po celém světě — v Americe, Evropě, Africe, Austrálii a na Dálném východě, aby bylo zajištěno rychlé a spolehlivé překládání DNS z libovolného místa na světě.

| Protokol  | Adresa                          |                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` a `195.46.39.40` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) chrání před krádeží osobních a finančních údajů. Chrání vás před viry, ransomwarem a dalším malwarem.

#### Soukromý

V "Soukromém" režimu pouze překlad DNS

| Protokol                 | Adresa                                                                                                    |                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.10` a `149.112.122.10`                                                                       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6                | `2620:10A:80BB::10` a `2620:10A:80BC::10`                                                                 | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS skrze HTTPS          | `https://private.canadianshield.cira.ca/dns-query`                                                        | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS skrze TLS – soukromý | Název hostitele: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10`  a IPv6: `2620:10A:80BB::10` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Chráněný

V "Chráněném" režimu ochrana proti malwaru a krádeži identity

| Protokol                 | Adresa                                                                                                      |                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` a `149.112.122.20`                                                                         | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` a `2620:10A:80BC::20`                                                                   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS skrze HTTPS          | `https://protected.canadianshield.cira.ca/dns-query`                                                        | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS skrze TLS – chráněný | Název hostitele: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20`  a IPv6: `2620:10A:80BB::20` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Rodinný

V "Rodinném" režimu — Chráněný + blokování obsahu pro dospělé

| Protokol                | Adresa                                                                                                      |                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS, IPv4               | `149.112.121.30` a `149.112.122.30`                                                                         | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6               | `2620:10A:80BB::30` a `2620:10A:80BC::30`                                                                   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS skrze HTTPS         | `https://family.canadianshield.cira.ca/dns-query`                                                           | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS skrze TLS - rodinný | Název hostitele: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30`  a IPv6: `2620:10A:80BB::30` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) je bezplatná alternativní služba DNS projektu OpenNIC

| Protokol  | Adresa                                   |                                                                   |
| --------- | ---------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` a `169.239.202.202`    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` a `2a05:dfc7:5353::53` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) — malý zájmový projekt DNS. Žádné záznamy, Ethereum Name Service, DNSSEC ready, filtrování reklam, slídičů a malware

#### Finský DNS server

| Protokol              | Adresa                                                                       |                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177`            | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Japonský DNS server

| Protokol              | Adresa                                                                                  |                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-jp.blahdns.com`  IP: `139.162.112.47`                       | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-jp.blahdns.com/dns-query`                                 | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Německý DNS server

| Protokol              | Adresa                                                                       |                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-de.blahdns.com`  IP: `159.69.198.101`            | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [Přidat do AdGuardu](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) je služba DNS šetrná k soukromí, kterou provozuje Noah Seefried.

| Protokol        | Adresa                                                                                          |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` a IPv6: `2a01:4f9:2a:1919::9301` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` a IPv6: `2a01:4f9:2a:1919::9301`             | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS pro rodinu

[DNS pro rodinu](https://dnsforfamily.com/) se zaměřuje na blokování webových stránek pro dospělé. Pomáhá dětem a všem, kteří chtějí bezpečně surfovat po internetu, aniž by se museli obávat, že se dostanou na škodlivé webové stránky.


| Protokol        | Adresa                                                         |                                                                                                                                              |
| --------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                   | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS skrze TLS   | `tls://dns-dot.dnsforfamily.com`                               | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4       | `94.130.180.225` a `78.47.64.161`                              | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6       | `2a01:4f8:1c0c:40db::1` a `2a01:4f8:1c17:4df8::1`              | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4  | Poskytovatel: `dnsforfamily.com` IP: `94.130.180.225`          | [Přidat do AdGuardu](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6  | Poskytovatel: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) je ověřování řešitelů Open DNSSEC. CZ.NIC neshromažďuje žádné osobní údaje ani neshromažďuje informace o stránkách, na které zařízení odesílají osobní údaje.

| Protokol        | Adresa                                    |                                                                      |
| --------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| DNS, IPv4       | `193.17.47.1` a `185.43.135.1`            | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6       | `2001:148f:ffff::1` a `2001:148f:fffe::1` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS skrze HTTPS | `https://odvr.nic.cz/doh`                 | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS skrze TLS   | `tls://odvr.nic.cz`                       | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) je bezplatná rekurzivní služba DNS, která se zavázala poskytovat rychlé, stabilní a bezpečné řešení DNS pro většinu uživatelů internetu. Obsahuje funkci AliGuard, která chrání uživatele před různými útoky a hrozbami.

| Protokol        | Adresa                               |                                                                                 |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| DNS, IPv4       | `223.5.5.5` a `223.6.6.6`            | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6       | `2400:3200::1` a `2400:3200:baba::1` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS skrze HTTPS | `https://dns.alidns.com/dns-query`   | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dns.alidns.com`               | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC Public DNS

Služba DNS anycast založená na protokolu IPv6 se silnými bezpečnostními funkcemi a ochranou před spywarem a škodlivými webovými stránkami. Podporuje DNS64 a poskytuje překlad názvů domén pouze pro uživatele IPv6.

| Protokol        | Adresa                            |                                                                               |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv6       | `240C::6666` a `240C::6644`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS skrze HTTPS | `https://dns.cfiec.net/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://dns.cfiec.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) je anycast systém filtrování internetu, který chrání děti před nevhodnými webovými stránkami a zneužitelným obsahem.

| Protokol       | Adresa                                                          |                                                                                                                                               |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` a `180.131.145.145`                           | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** je špičková rekurzivní služba DNS s pokročilou ochranou před síťovými hrozbami.

| Protokol        | Adresa                           |                                                                           |
| --------------- | -------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4       | `101.226.4.6` a `218.30.118.6`   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4       | `123.125.81.6` a `140.207.198.6` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS skrze HTTPS | `https://doh.360.cn/dns-query`   | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://dot.360.cn`               | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) je veřejná služba DNS provozovaná společností Internet Initiative Japan. Blokuje také obsah, který zneužívá děti.

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://public.dns.iij.jp/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://public.dns.iij.jp`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) je poskytovatel DNS šetrný k soukromí, který má dlouholeté zkušenosti s vývojem služeb pro překlad názvů domén a jehož cílem je poskytovat uživatelům rychlejší, přesnější a stabilnější služby rekurzivního překladu.

| Protokol        | Adresa                          |                                                                       |
| --------------- | ------------------------------- | --------------------------------------------------------------------- |
| DNS, IPv4       | `119.29.29.29` a `119.28.28.28` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS skrze HTTPS | `https://doh.pub/dns-query`     | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS skrze HTTPS | `https://dns.pub/dns-query`     | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://dot.pub`                 | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** je profesionální a vysoce spolehlivá služba DNS.

#### Normální

Blokuje reklamy a obtěžující weby

| Protokol  | Adresa                                |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` a `114.114.115.115` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Bezpečný

Blokuje krádež identity, škodlivé a další nebezpečné weby

| Protokol  | Adresa                                |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` a `114.114.115.119` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Rodinný

Tyto servery blokují webové stránky pro dospělé a nevhodný obsah.

| Protokol  | Adresa                                |                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` a `114.114.115.110` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) je bezplatná alternativní služba DNS bez přihlašování od TWNIC (Taiwan Network Information Center)

| Protokol        | Adresa                                |                                                                              |
| --------------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| DNS, IPv4       | `101.101.101.101` a `101.102.103.104` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6       | `2001:de4::101` a `2001:de4::102`     | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS skrze HTTPS | `https://dns.twnic.tw/dns-query`      | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://101.101.101.101`               | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |


### OneDNS

**OneDNS** je bezpečná, rychlá a bezplatná služba DNS s možností blokování škodlivých domén.

#### Pure Edition

| Protokol  | Adresa                         |                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` a `52.80.52.52` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Block Edition

| Protokol  | Adresa                         |                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` a `52.80.66.66` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokuje více než 140 tisíc reklam, slídičů, malwaru a domén zaměřených na krádež identity. Žádné záznamy, ECS, ověření DNSSEC, je zdarma!

#### Singapurský DNS server

| Protokol        | Adresa                                                                         | Umístění                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `174.138.21.128`                                                               | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6       | `2400:6180:0:d0::5f6e:4001`                                                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS skrze HTTPS | `https://doh.tiarap.org/dns-query` (uloženo v mezipaměti třetích stran)        | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS skrze HTTPS | `https://doh.tiar.app/dns-query`                                               | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS skrze QUIC  | `quic://doh.tiar.app`                                                          | [Přidat do AdGuardu](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS skrze TLS   | `tls://dot.tiar.app`                                                           | [Přidat do AdGuardu](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |


#### Japonský DNS server

| Protokol        | Adresa                                                                             |                                                                                                                                                                               |
| --------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `172.104.93.80`                                                                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6       | `2400:8902::f03c:91ff:feda:c514`                                                   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS skrze HTTPS | `https://jp.tiarap.org/dns-query`                                                  | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS skrze HTTPS | `https://jp.tiar.app/dns-query`                                                    | [Přidat do AdGuardu](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS skrze TLS   | `tls://jp.tiar.app`                                                                | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) je otevřená, bezplatná a veřejná služba DNS poskytovaná [cloudovými službami společnosti Virtexxa](https://virtexxa.com/). Bez přesměrování DNS a záznamů.

| Protokol  | Adresa                              |                                                               |
| --------- | ----------------------------------- | ------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` a `172.104.49.100` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` a `37.235.1.177`     | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) je bezplatný anonymní DNS řešitel od Freenom World

| Protokol  | Adresa                        |                                                           |
| --------- | ----------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` a `80.80.81.81` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) je malý projekt pro blokování reklam založený na DNS.

#### Server OSZX

Tyto servery neposkytují žádné blokování reklam, neuchovávají žádné záznamy a mají povolený DNSSEC

| Protokol        | Adresa                                                                       |                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `51.38.83.141`                                                               | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6       | `2001:41d0:801:2000::d64`                                                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS skrze HTTPS | `https://dns.oszx.co/dns-query`                                              | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS skrze TLS   | `tls://dns.oszx.co`                                                          | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### Server PumpleX

Tyto servery neposkytují žádné blokování reklam, neuchovávají žádné záznamy a mají povolený DNSSEC

| Protokol        | Adresa                                                                            |                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.82.198`                                                                    | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::1b28`                                                        | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS skrze HTTPS | `https://dns.pumplex.com/dns-query`                                               | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS skrze TLS   | `tls://dns.pumplex.com`                                                           | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) provozuje služby ochrany soukromí DNS, které pomáhají chránit provoz DNS a diverzifikovat prostředí DNS řešitelů nabízejících moderní protokoly.

| Protokol        | Adresa                                  |                                                                                       |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.applied-privacy.net/query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS skrze TLS   | `tls://dot1.applied-privacy.net`        | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) je služba DNS od společnosti Strongarm, která zabraňuje interakci se škodlivým obsahem

| Protokol  | Adresa                           |                                                              |
| --------- | -------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `54.174.40.213` a `52.3.100.184` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) je služba DNS společnosti SafeSurfer, která chrání vaše zařízení před škodlivým obsahem pro dospělé.

| Protokol       | Adresa                                                                |                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` a `104.197.28.121`                                  | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |


### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) je bezpečný, soukromý, open-source DNS řešitel s ochranou proti malwaru, blokováním reklam a bez záznamů. Blokuje všechny požadavky na služby Google v telefonu, tabletu nebo počítači.

| Protokol        | Adresa                                                                            |                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS skrze HTTPS | `https://dns.decloudus.com/dns-query`                                             | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS skrze TLS   | `tls://dns.decloudus.com`                                                         | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) provozuje Elias Ojala. Finsko.

| Protokol        | Adresa                                   |                                                                                         |
| --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://resolver-eu.lelux.fi`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) je server běžící z dropletu Digital Ocean v regionu BLR1. Spravuje Abhay Rana alias Nemo.

| Protokol       | Adresa                                                               |                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Přidat do AdGuardu](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) poskytuje bezplatnou službu DNS bez záznamů, DNSSEC povolen.


| Protokol        | Adresa                            |                                                                           |
| --------------- | --------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4       | `185.222.222.222` a `45.11.45.11` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6       | `2a09::` a `2a11::`               | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS skrze HTTPS | `https://doh.dns.sb/dns-query`    | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://185.222.222.222`           | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) je redundantní DNS řešitel s blokátorem reklam a bez záznamů, který poskytuje [adminforge](https://adminforge.de/).

| Protokol        | Adresa                                              |                                                                             |
| --------------- | --------------------------------------------------- | --------------------------------------------------------------------------- |
| DNS, IPv4       | `176.9.93.198` a `176.9.1.117`                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6       | `2a01:4f8:151:34aa::198` a `2a01:4f8:141:316d::117` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS skrze HTTPS | `https://dnsforge.de/dns-query`                     | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dnsforge.de`                                 | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

Servery [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) poskytované společností [Restena Foundation](https://www.restena.lu/)

| Protokol        | Adresa                                                                            |                                                                                      |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` a IPv6: `2001:a18:1::29` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` a IPv6: `2001:a18:1::29`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) je veřejný primární OpenNIC Tier2 Anycast DNS řešitel společnosti Fusl

| Protokol       | Adresa                                                                   |                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Přidat do AdGuardu](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Přidat do AdGuardu](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) bezplatné DNS servery poskytované společností Freifunk München

| Protokol              | Adresa                                                                     |                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot.ffmuc.net`                                     | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh.ffmuc.net/dns-query`                         | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Přidat do AdGuardu](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) je veřejný řešitel provozovaný společností Digital Society. Hostováno v Curychu ve Švýcarsku

| Protokol        | Adresa                                                                                       |                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` a IPv6: `2a05:fc84::42` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` a IPv6: `2a05:fc84::43`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) je veřejná šifrovaná služba DNS, kterou provozuje [LibreOps](https://libreops.cc/).

| Protokol        | Adresa                                       |                                                                                  |
| --------------- | -------------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4       | `88.198.92.222`                              | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS skrze HTTPS | `https://doh.libredns.gr/dns-query`          | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS skrze HTTPS | `https://doh.libredns.gr/ads`                | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS skrze TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) jsou testovací servery poskytované společností ibksturm. OPENNIC, DNSSEC, bez filtrování, bez záznamů

| Protokol              | Adresa                                                                                        |                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://ibksturm.synology.me` IP: `83.77.85.7`                                | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190`                | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443`                                | [Přidat do AdGuardu](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS Privacy

Společný otevřený projekt na podporu, implementaci a nasazení [DNS Privacy](https://dnsprivacy.org/).

DNS servery, které provozují vývojáři [Stubby](https://getdnsapi.net/)

| Protokol      | Adresa                                                                                                                                  |                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| DNS skrze TLS | Název hostitele: `tls://getdnsapi.net` IP: `185.49.141.37` a IPv6: `2a04:b900:0:100::37`                                                | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS skrze TLS | Poskytovatel: `Surfnet`, Název hostitele: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` a IPv6: `2001:610:1:40ba:145:100:185:15`  | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS skrze TLS | Poskytovatel: `Surfnet`, Název hostitele: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` a IPv6: `2001:610:1:40ba:145:100:185:16` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Ostatní servery DNS se zásadou 'bez záznamů'

| Protokol            | Adresa                                                                                                                         |                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| DNS skrze TLS       | Poskytovatel: `UncensoredDNS`, Název hostitele: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` a IPv6: `2a01:3a0:53:53::0` | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS skrze TLS       | Poskytovatel: `UncensoredDNS`, Název hostitele: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` a IPv6: `2001:67c:28a4::` | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS skrze TLS       | Poskytovatel: `dkg`, Název hostitele: `tls://dns.cmrg.net` IP: `199.58.81.218`a IPv6: `2001:470:1c:76d::53`                    | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS skrze TLS, IPv4 | Název hostitele: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                                | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS skrze TLS       | Název hostitele: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` a IPv6: `2001:8b0:24:24::24`                             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS skrze TLS       | Název hostitele: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` a IPv6: `2a01:4f8:c0c:3c03::2`                                 | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS skrze TLS       | Název hostitele: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` a IPv6: `2a01:4f8:c0c:3bfc::2`                                 | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS skrze TLS, IPv4 | Název hostitele: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                     | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS skrze TLS       | Název hostitele: `tls://dns.neutopia.org` IP: `89.234.186.112` a IPv6: `2a00:5884:8209::2`                                     | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS skrze TLS       | Poskytovatel: `Go6Lab` Název hostitele: `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                 | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS skrze TLS       | Název hostitele: `tls://dot.securedns.eu` IP: `146.185.167.43` a IPv6: `2a03:b0c0:0:1010::e9a:3001`                            | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS servery s minimálními záznamy/omezeními. Tyto servery používají některé záznamy, samopodepsané certifikáty nebo nepodporují striktní režim.

| Protokol      | Adresa                                                                                                                      |                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| DNS skrze TLS | Poskytovatel: `NIC Chile`, Název hostitele: `dnsotls.lab.nic.cl` IP: `200.1.123.46` a IPv6: `2001:1398:1:0:200:1:123:46`    | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS skrze TLS | Poskytovatel: `OARC`, Název hostitele: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` a IPv6: `2620:ff:c000:0:1::64:25` | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) je služba DNS pro blokování reklam, bez záznamů aktivit, poskytuje Fredrik Pettersson.

#### Blitz

[Konfigurovatelné filtrování](https://blitz-setup.ahadns.com/) – celosvětová varianta pouze pro DoH

| Protokol                                      | Adresa                            |                                                                               |
| --------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| DNS skrze HTTPS, necenzurováno                | `https://blitz.ahadns.com`        | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS skrze HTTPS, filtr OISD                   | `https://blitz.ahadns.com/1:1`    | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS skrze HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Nizozemsko

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4       | `5.2.75.75`                           | [Přidat do AdGuardu](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6       | `2a04:52c0:101:75::75`                | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS skrze HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.nl.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### Indie

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.79.120.233`                       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6       | `2400:8904:e001:43::43`               | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS skrze HTTPS | `https://doh.in.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.in.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.67.219.208`                       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6       | `2a04:bdc7:100:70::70`                | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS skrze HTTPS | `https://doh.la.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.la.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### New York

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.213.26.187`                      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6       | `2a0d:5600:33:3::3`                   | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS skrze HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.ny.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Polsko

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.pl.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### Itálie

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.it.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.it.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |


#### Španělsko

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.es.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.es.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Norsko

| Protokol        | Adresa                                |                                                                                     |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.no.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dot.no.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Chicago

| Protokol        | Adresa                                 |                                                                                      |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://dot.chi.ahadns.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) je služba DNS zaměřená na ochranu soukromí, kterou poskytuje Sebastian Schmidt. Bez záznamů, ověřování DNSSEC.

#### DNS server 1

| Protokol       | Adresa                                                         |                                                                                                                                              |
| -------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                                 | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS skrze TLS  | `tls://dot.seby.io`                                            | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |


### puntCAT DNS

[PuntCAT](http://www.servidordenoms.cat/) se fyzicky nachází nedaleko Barcelony ve Španělsku. puntCAT nabízí veřejnou službu DNS, která je bezplatná, bezpečná, blízká a respektuje vaše soukromí.

| Protokol  | Adresa             |                                                                     |
| --------- | ------------------ | ------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Přidat do AdGuardu](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) provozuje veřejné DNS řešitele, které zrychlují požadavky a zvyšují redundanci. Službu poskytuje [Peerix](https://www.peerix.net/)

#### Výchozí

Tyto servery poskytují překlad DNS bez filtrování datového provozu.

| Protokol        | Adresa                                |                                                                                  |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.235.81.1` a `185.235.81.2`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6       | `2a0d:4d00:81::1` a `2a0d:4d00:81::2` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS skrze HTTPS | `https://doh.dnslify.com/dns-query`   | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://doh.dnslify.com`               | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Bezpečný

Bezpečný režim chrání před infikovanými, podvodnými nebo stránkami s boty.

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` a `185.235.81.4`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` a `2a0d:4d00:81::4` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Rodinný

Rodinný režim nabízí ochranu pomocí "bezpečných" řešitelů a blokuje stránky pro dospělé.

| Protokol  | Adresa                                |                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` a `185.235.81.6`       | [Přidat do AdGuardu](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` a `2a0d:4d00:81::6` | [Přidat do AdGuardu](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) poskytuje kromě volně konfigurovatelných filtrovacích řešitelů s volitelnými záznamy také veřejně přístupné nefiltrující řešitele bez záznamů.

#### Ultra-low latency

| Protokol        | Adresa                   |                                                                                 |
| --------------- | ------------------------ | ------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.nextdns.io` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://dns.nextdns.io`   | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Protokol        | Adresa                           |                                                                                           |
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://anycast.dns.nextdns.io` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS skrze TLS   | `tls://anycast.dns.nextdns.io`   | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |


### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) poskytuje službu DNS skrze HTTPS běžící jako Cloudflare Worker a službu DNS skrze TLS běžící jako Fly.io Worker s konfigurovatelnými seznamy zakázaných.

#### Bez filtrování

| Protokol        | Adresa                          |                                                                             |
| --------------- | ------------------------------- | --------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://basic.rethinkdns.com/` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS skrze TLS   | `tls://max.rethinkdns.com`      | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) je veřejná služba DNS, která poskytuje blokování reklam, malwaru a sociálních médií.

#### Blokování malwaru

| Protokol        | Adresa                            |                                                                                          |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.1`                       | [Přidat do AdGuardu](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS skrze HTTPS | `https://freedns.controld.com/p1` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS skrze TLS   | `tls://p1.freedns.controld.com`   | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokování malwaru + reklam

| Protokol        | Adresa                            |                                                                                          |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.2`                       | [Přidat do AdGuardu](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS skrze HTTPS | `https://freedns.controld.com/p2` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS skrze TLS   | `tls://p2.freedns.controld.com`   | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokování malwaru + reklam + sociálních médií

| Protokol        | Adresa                            |                                                                                          |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.3`                       | [Přidat do AdGuardu](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS skrze HTTPS | `https://freedns.controld.com/p3` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS skrze TLS   | `tls://p3.freedns.controld.com`   | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) poskytuje veřejně přístupné DNS s minimalizací QNAME, koncové body se nacházejí v Austrálii, Německu, Singapuru, Švédsku, Velké Británii a Spojených státech (New York a Los Angeles).

#### Bez filtrování

| Protokol        | Adresa                              |                                                                                  |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.mullvad.net/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://doh.mullvad.net`             | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Blokování reklam

| Protokol        | Adresa                                      |                                                                                             |
| --------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Přidat do AdGuardu](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS skrze TLS   | `tls://adblock.doh.mullvad.net`             | [Přidat do AdGuardu](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Small personal resolvers

V této části uvádíme malé, většinou osobní DNS řešitele. Často mají pouze jeden nebo velmi málo serverů a horší provozuschopnost než "velcí" poskytovatelé. Nebudeme moci řádně sledovat jejich dostupnost. **Používejte je na vlastní nebezpečí!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) je osobní služba DNS hostovaná v Bombaji v Indii.

Bez záznamů | Filtruje reklamy, slídiče, blokuje krádež identity atd. | DNSSEC | Minimalizace QNAME | Bez podsítě klienta EDNS.

| Protokol        | Adresa                                                       |                                                                                                                                                             |
| --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS skrze HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Přidat do AdGuardu](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |


#### Oficiální DNS server Dandelion Sprout's

[Oficiální DNS server Dandelion Sprout's](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) je osobní služba DNS hostovaná v norském Trondheimu, která využívá infrastrukturu AdGuard Home.

Blokuje více reklam a škodlivého softwaru než AdGuard DNS díky pokročilejší syntaxi, ale lépe si poradí se slídiči a blokuje pravicové bulváry a většinu imageboardů. Protokolování se používá ke zlepšení používaných seznamů filtrů (např. odblokováním stránek, které neměly být blokovány) a k určení nejméně vhodných časů pro aktualizace systému serveru.

| Protokol        | Adresa                                                |                                                                                                          |
| --------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Přidat do AdGuardu](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Přidat do AdGuardu](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS skrze QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Přidat do AdGuardu](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4       | Různé; viz výše uvedený odkaz.                        |                                                                                                          |
| DNS, IPv6       | Různé; viz výše uvedený odkaz.                        |                                                                                                          |
| DNSCrypt, IPv4  | Různé; viz výše uvedený odkaz.                        |                                                                                                          |
