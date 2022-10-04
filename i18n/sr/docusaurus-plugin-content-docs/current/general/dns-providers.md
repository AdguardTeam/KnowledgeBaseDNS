---
title: Poznati DNS dobavljači
sidebar_position: 3
---

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) je alternativno rešenje za blokiranje reklama, zaštitu privatnosti i roditeljsku kontrolu. On obezbeđuje brojne neophodnne funkcije zaštite od reklama na mreži, praćenja i phishinga, bez obzira koju platformu i uređaj koristite.

#### Podrazumevano

Ovi serveri obezbeđuju blokiranje reklama, praćenje i phishing

| Protokol       | Adresa                                                                         |                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `94.140.14.14` i `94.140.15.15`                                                | [Dodaj u AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::ad1:ff` i `2a10:50c0::ad2:ff`                                      | [Dodaj u AdGuard](sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0)                                                                                                  |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                        | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                                 |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                    | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                   | [Dodaj u AdGuard](sdns://BAMAAAAAAAAAAAATZG5zLmFkZ3VhcmQtZG5zLmNvbQ)                                                                                               |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)          |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t) |


#### Porodična zaštita

Ovi serveri obezbeđuju podrazumevane funkcije + Blokiranje Veb lokacija za odrasle + Bezbedna pretraga

| Protokol       | Adresa                                                                         |                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `94.140.14.15` i `94.140.15.16`                                                | [Dodaj u AdGuard](sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ)                                                                                                           |
| DNS, IPv6      | `2a10:50c0::bad1:ff` i `2a10:50c0::bad2:ff`                                    | [Dodaj u AdGuard](sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd)                                                                                                 |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                     | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQovZG5zLXF1ZXJ5)                                                                             |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                 | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                | [Dodaj u AdGuard](sdns://BAMAAAAAAAAAAAAWZmFtaWx5LmFkZ3VhcmQtZG5zLmNvbQ)                                                                                           |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)           |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t) |

#### Bez filtriranja

Ovi serveri obezbeđuju bezbednu i pouzdanu vezu, ali ne filtriraju ništa poput servera "Podrazumevano" i "Zaštita porodice".

| Protokol       | Adresa                                                                          |                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` i `94.140.14.141`                                               | [Dodaj u AdGuard](sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA)                                                                                                            |
| DNS, IPv6      | `2a10:50c0::1:ff` i `2a10:50c0::2:ff`                                           | [Dodaj u AdGuard](sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd)                                                                                                       |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                  | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20KL2Rucy1xdWVyeQ)                                                                         |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                              | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                             | [Dodaj u AdGuard](sdns://BAAAAAAAAAAAAAAadW5maWx0ZXJlZC5hZGd1YXJkLWRucy5jb20)                                                                                        |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)    |


### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) je besplatna rekurzivna DNS usluga. Yandex.DNS serveri se nalaze u Rusiji, zemljama CIS-a i zapadnoj Evropi. Zahteve korisnika obrađuje najbliži data centar koji obezbeđuje velike brzine povezivanja.

#### Osnovno

U "Osnovnom" režimu nema filtriranja saobraćaja

| Protokol       | Adresa                                                                 |                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                                            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguOA)                                                                                                     |
| DNS, IPv6      | `2a02:6b8::feed:0ff` i `2a02:6b8:0:1::feed:0ff`                        | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd)                                                                                       |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Dodaj u AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA) |


#### Sigurno

U "Bezbednom" režimu obezbeđena zaštita od zaraženih i lažnih lokacija

| Protokol  | Adresa                                          |                                                                    |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.88` i `77.88.8.2`                      | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACjc3Ljg4LjguODg)              |
| DNS, IPv6 | `2a02:6b8::feed:bad` i `2a02:6b8:0:1::feed:bad` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd) |


#### Porodica

U "Porodičnom" režimu, obezbeđena zaštita od zaraženih, prevarantskih i sajtova za odrasle

| Protokol  | Adresa                                          |                                                                    |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.3` i `77.88.8.7`                       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACTc3Ljg4LjguMw)               |
| DNS, IPv6 | `2a02:6b8::feed:a11` i `2a02:6b8:0:1::feed:a11` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd) |

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) je DNS usluga koja obezbeđuje prilagodljivo filtriranje. Ova usluga nudi bezbedan način pregledanja Veba bez neprikladnog sadržaja.

#### Porodični filter

Blokira pristup svim sajtovima za odrasle, pornografiji i eksplicitnim lokacijama, uključujući proxy & VPN domene i sajtove mešovitog sadržaja

| Protokol       | Adresa                                                    |                                                                                                                                        |
| -------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` i `185.228.169.168`                     | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA)                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` i `2a0d:2a00:2::`                         | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ)                                                                           |
| DNSCrypt, IPv4 | Dobavljač: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | Dobavljač: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`        | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8)                                      |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`               | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc)                                              |

#### Filter za odrasle

Manje restriktivan od filtera "Porodica", on samo blokira pristup sadržaju za odrasle i zlonamernim i phishing domenima

| Protokol       | Adresa                                                     |                                                                                                                                          |
| -------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` i `185.228.169.11`                        | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw)                                                                               |
| DNS, IPv6      | `2a0d:2a00:1::1` i `2a0d:2a00:2::1`                        | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0)                                                                            |
| DNSCrypt, IPv4 | Dobavljač: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)    |
| DNSCrypt, IPv6 | Dobavljač: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`          | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw)                                         |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                 | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)                                                 |


#### Bezbedni filter

Blokira phishing, bezvrednu poštu i zlonamerne domene

| Protokol       | Adresa                                               |                                                                                                      |
| -------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` i `185.228.169.9`                    | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk)                                            |
| DNS, IPv6      | `2a0d:2a00:1::2` i `2a0d:2a00:2::2`                  | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0)                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw)         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) je usluga rešavanja imena domena koja rešava vaše DNS zahteve putem svetske mreže DNS servera. Uklanja prekomerne reklame i štiti od phishinga i špijunskog softvera.

| Protokol       | Adresa                                                                 |                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` i `8.20.247.20`                                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACjguMjYuNTYuMjY)                                                                                                    |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Dodaj u AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |
### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) je besplatan servis DNS zasnovan na oblaku koji isporučuje brz i pouzdan pristup lokacijama i onlajn aplikacijama sa ugrađenim bezbednosnim i obaveštajnim podacima o pretnjama.

#### Performanse i pouzdanost 1

Ovi serveri obezbeđuju pouzdane i brze DNS preglede bez blokiranja određenih kategorija

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` i `156.154.71.1`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ)       |
| DNS, IPv6 | `2610:a1:1018::1` i `2610:a1:1019::1` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd) |

#### Pouzdanost i performanse 2*

Ovi serveri obezbeđuju pouzdane i brze DNS preglede bez blokiranja određenih kategorija i takođe sprečavaju preusmeravanje NXDomain (nepostojeći domen) odgovora na landing page

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` i `156.154.71.5`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ)       |
| DNS, IPv6 | `2610:a1:1018::5` i `2610:a1:1019::5` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd) |

#### Zaštita od pretnji

Ovi serveri obezbeđuju zaštitu od zlonamernih domena i uključuju funkcije "pouzdanost i performanse"

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` i `156.154.71.2`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg)       |
| DNS, IPv6 | `2610:a1:1018::2` i `2610:a1:1019::2` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd) |

#### Porodična bezbednost

Ovi serveri obezbeđuju blokiranje pristupa sadržaju za odrasle i takođe uključuju "Reliability & Performance" + "Threat Protection" funkcije

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` i `156.154.71.3`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw)       |
| DNS, IPv6 | `2610:a1:1018::3` i `2610:a1:1019::3` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd) |

#### Poslovna zaštita

Ovi serveri obezbeđuju blokiranje neželjenog i sadržaja koji troši vreme, a uključuju i "Performanse pouzdanosti & " + "Zaštita od pretnji" + "Porodična bezbednost"

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` i `156.154.71.4`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA)       |
| DNS, IPv6 | `2610:a1:1018::4` i `2610:a1:1019::4` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) je usluga koja proširuje DNS uključivanjem funkcija kao što su filtriranje sadržaja i zaštita od phishinga sa nultim padom.

#### Standard

DNS serveri sa prilagođenim filtriranjem koji štite uređaj od zlonamernog softvera

| Protokol       | Adresa                                                         |                                                                                                                                               |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` i `208.67.220.220`                            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy)                                                                                    |
| DNS, IPv6      | `2620:119:35::35` i `2620:119:53::53`                          | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd)                                                                                |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Dodaj u AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)  |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Dodaj u AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                            | [Dodaj u AdGuard](sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk)                                                                 |

#### Porodična zaštita

OpenDNS serveri koji obezbeđuju blokiranje sadržaja za odrasle

| Protokol       | Adresa                                                        |                                                                                                                                              |
| -------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` i `208.67.220.123`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz)                                                                                   |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Dodaj u AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Dodaj u AdGuard](sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5)                                               |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) je besplatna, globalna usluga DNS rezolucije koju možete koristiti kao alternativu svom trenutnom DNS dobavljaču.

| Protokol       | Adresa                                          |                                                                                                                   |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` i `8.8.4.4`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAABzguOC44Ljg)                                                                 |
| DNS, IPv6      | `2001:4860:4860::8888` i `2001:4860:4860::8844` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0)                                             |
| DNS-over-HTTPS | `https://dns.google/dns-query`                  | [Dodaj u AdGuard](sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.google`                              | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ)                                                          |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) je besplatna i brza DNS usluga koja funkcioniše kao server sa ponovnim imenom koji obezbeđuje rezoluciju imena domena za bilo kog domaćina na Internetu.

#### Standard

| Protokol             | Adresa                                          |                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` i `1.0.0.1`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjE)                                                                                                                                                         |
| DNS, IPv6            | `2606:4700:4700::1111` i `2606:4700:4700::1001` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0)                                                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Dodaj u AdGuard](sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk)                         |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20)                                                                                                                     |

#### Samo blokiranje zlonamernog softvera

| Protokol       | Adresa                                          |                                                                                               |
| -------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` i `1.0.0.2`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjI)                                             |
| DNS, IPv6      | `2606:4700:4700::1112` i `2606:4700:4700::1002` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0)                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`             | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t)                |


#### Blokiranje zlonamernog softvera i sadržaja za odrasle

| Protokol             | Adresa                                          |                                                                                            |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| DNS, IPv4            | `1.1.1.3` i `1.0.0.3`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAABzEuMS4xLjM)                                          |
| DNS, IPv6            | `2606:4700:4700::1113` i `2606:4700:4700::1003` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10)                      |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`               | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ)               |


### Quad9 DNS

[Quad9 DNS](https://quad9.net/) je besplatna, ponavljajuća DNS platforma koja obezbeđuje visoke performanse, privatnost i bezbednosnu zaštitu od phishinga i špijunskog softvera. Quad9 serveri ne obezbeđuju komponentu za cenzuru.

#### Standard

Obični DNS serveri koji obezbeđuju zaštitu od phishinga i špijunskog softvera. One uključuju liste blokiranja, DNSSEC proveru valjanosti i druge bezbednosne funkcije.

| Protokol       | Adresa                                                          |                                                                                                                                                |
| -------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` i `149.112.112.112`                                   | [Dodaj u AdGuard](sdns://AAAAAAAAAAAABzkuOS45Ljk)                                                                                              |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                               | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0)                                                                                      |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Dodaj u AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)         |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                               | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5)                                                                     |
| DNS-over-TLS   | `tls://dns.quad9.net`                                           | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA)                                                                                   |

#### Nebezbedno

Neobezbeđeni DNS serveri ne obezbeđuju bezbednosnu blok listu, DNSSEC, nema EDNS klijent-podmreže

| Protokol       | Adresa                                                             |                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` i `149.112.112.10`                                      | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEw)                                                                                                 |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                 | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0)                                                                                          |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Dodaj u AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)           |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                      |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                            | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0)                                                                                     |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client-Subnet je metod koji uključuje komponente podataka IP adrese krajnjeg korisnika u zahtevima koji se šalju autoritativnim DNS serverima. On obezbeđuje bezbednosnu blok listu, DNSSEC, EDNS klijent-podmrežnu mrežu.

| Protokol       | Adresa                                                          |                                                                                                                                                |
| -------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` i `149.112.112.11`                                   | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACDkuOS45LjEx)                                                                                             |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0)                                                                                      |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Dodaj u AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)       |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk)                                                                  |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0)                                                                                 |
### Verisign javni DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) je besplatna DNS usluga koja nudi poboljšanu stabilnost i bezbednost DNS-a u odnosu na druge alternative. Verisign poštuje privatnost korisnika: ne prodaje javne DNS podatke trećim licima i preusmerava upite korisnika kako im ne bi servirao bilo kakve reklame.

| Protokol  | Adresa                                  |                                                                |
| --------- | --------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` ili `64.6.65.6`             | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACTY0LjYuNjQuNg)           |
| DNS, IPv6 | `2620:74:1b::1:1` ili `2620:74:1c::2:2` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd) |
### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) je švajcarski javni DNS servis koji pruža [switch.ch](https://www.switch.ch/)

| Protokol       | Adresa                                                                            |                                                                            |
| -------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| DNS, IPv4      | Dobavljač: `dns.switch.ch` IP: `130.59.31.248`                                    | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg)                  |
| DNS, IPv6      | Dobavljač: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ)           |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                 | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248`  and IPv6: `2001:620:0:ff::2` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA)               |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) je besplatna alternativna DNS usluga od strane Dyn-a

| Protokol  | Adresa                            |                                                           |
| --------- | --------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` i `216.146.36.36` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU) |

### DNS.WATCH

[DNS. WATCH](https://dns.watch/) je brz i besplatan server bez evidentiranja pomoću funkcije zaštite privatnosti.

| Protokol  | Adresa                                                      |                                                                               |
| --------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` i `84.200.70.40`                             | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA)                      |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` i `2001:1608:10:25::9249:d69b` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0) |

### FutureDNS

[FutureDNS](https://futuredns.me/) je DNS usluga pogodna za privatnost sa OpenNIC podrškom koja blokira reklame, tragače, malver i ne evidentira nikakve podatke.

| Anycast Network | Adresa                               |                                                                                |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------ |
| DNS-over-HTTPS  | `https://dns.futuredns.me/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQovZG5zLXF1ZXJ5) |
| DNS-over-TLS    | `tls://dns.futuredns.me`             | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |
| DNS-over-QUIC   | `quic://dns.futuredns.me`            | [Dodaj u AdGuard](sdns://BAcAAAAAAAAAAAAQZG5zLmZ1dHVyZWRucy5tZQ)               |

| Lokacija           | Adresa - IPv4                                                                |
| ------------------ | ---------------------------------------------------------------------------- |
| London, UK         | `52.56.224.201`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADTUyLjU2LjIyNC4yMDE)   |
| Milano, Italija    | `15.161.11.3`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAACzE1LjE2MS4xMS4z)        |
| Stokholm, Švedska  | `13.49.168.178`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADTEzLjQ5LjE2OC4xNzg)   |
| Ašburn SAD         | `52.0.69.145`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAACzUyLjAuNjkuMTQ1)        |
| San Francisko, SAD | `13.56.204.161`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADTEzLjU2LjIwNC4xNjE)   |
| Montreal, Kanada   | `3.97.137.100`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADDMuOTcuMTM3LjEwMA)     |
| Singapur           | `54.254.82.60`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADDU0LjI1NC44Mi42MA)     |
| Tokyo, Japan       | `54.199.94.55`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADDU0LjE5OS45NC41NQ)     |
| Mumbaj, India      | `3.7.162.217`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAACzMuNy4xNjIuMjE3)        |
| Saao Paolo, Brazil | `177.71.191.153`| [Dodaj u AdGuard](sdns://AAcAAAAAAAAADjE3Ny43MS4xOTEuMTUz) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) rešenja za filtriranje sadržaja i bezbednost na internetu.

| Protokol  | Adresa           |                                                            |
| --------- | ---------------- | ---------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx) |

### Comss.ru DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) je brz i bezbedan DNS server sa zaštitom od reklama, praćenja i phishinga.

#### West DNS Server (Glavni)

| Protokol       | Adresa                                                                        |                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `92.38.152.163` i `93.115.24.204`                                             | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTkyLjM4LjE1Mi4xNjM)                                                                                                         |
| DNS, IPv6      | `2a03:90c0:56::1a5` i `2a02:7b40:5eb0:e95d::1`                                | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syYTAzOjkwYzA6NTY6OjFhNV0)                                                                                                 |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.dns.comss.one` IP: `94.176.233.93:443`            | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAETk0LjE3Ni4yMzMuOTM6NDQzIBVpyAOGbSSr5yLPYOsmU-FiMj2_q0BAdu6WiMTPzpMTHTIuZG5zY3J5cHQtY2VydC5kbnMuY29tc3Mub25l)                |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.dns.comss.one` IP: `[2a02:7b40:5eb0:e95d::1]:443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAHFsyYTAyOjdiNDA6NWViMDplOTVkOjoxXTo0NDMgFWnIA4ZtJKvnIs9g6yZT4WIyPb-rQEB27paIxM_OkxMdMi5kbnNjcnlwdC1jZXJ0LmRucy5jb21zcy5vbmU) |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query`                                             | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5)                                                                                        |
| DNS-over-TLS   | `tls://dns.comss.one`                                                         | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ)                                                                                                      |

#### East DNS Server (Sibir i Daleki istok)

| Protokol       | Adresa                                  |                                                                                   |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------- |
| DNS, IPv4      | `92.223.109.31` i `91.230.211.67`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTkyLjIyMy4xMDkuMzE)                         |
| DNS, IPv6      | `2a03:90c0:b5::1a` i `2a04:2fc0:39::47` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAElsyYTAzOjkwYzA6YjU6OjFhXQ)                  |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query`  | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dns.east.comss.one`              | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l)                |

### Safe DNS

[Safe DNS](https://www.safedns.com/) je globalna anycast mreža koju čine serveri koji se nalaze širom sveta — i Amerika, Evropa, Afrika, Australija i Daleki istok kako bi se osiguralo brzo i pouzdano DNS rešavanje sa bilo koje tačke širom sveta.

| Protokol  | Adresa                          |                                                          |
| --------- | ------------------------------- | -------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` i `195.46.39.40` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ) |


### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) štiti od krađe ličnih i finansijskih podataka. Držite viruse, ransomware i drugi malver van svog doma.

#### Privatni

Samo u "Privatnom" režimu, samo DNS rezolucija

| Protokol               | Adresa                                                                                               |                                                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` i `149.112.122.10`                                                                  | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw)                                        |
| DNS, IPv6              | `2620:10A:80BB::10` i `2620:10A:80BC::10`                                                            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0)                                 |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                   | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk) |
| DNS-over-TLS - Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10`  and IPv6: `2620:10A:80BB::10` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh)                |

#### Zaštićeno

U "Zaštićenom" režimu, malver i zaštita od phishinga

| Protokol                 | Adresa                                                                                                 |                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` i `149.112.122.20`                                                                    | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw)                                           |
| DNS, IPv6                | `2620:10A:80BB::20` i `2620:10A:80BC::20`                                                              | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0)                                    |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                   | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - zaštićeno | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20`  and IPv6: `2620:10A:80BB::20` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |


#### Porodica

U režimu "Porodica", Zaštićeno + blokiranje sadržaja za odrasle

| Protokol              | Adresa                                                                                                 |                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| DNS, IPv4             | `149.112.121.30` i `149.112.122.30`                                                                    | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw)                                       |
| DNS, IPv6             | `2620:10A:80BB::30` i `2620:10A:80BC::30`                                                              | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0)                                |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                      | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ) |
| DNS-over-TLS - Family | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30`  and IPv6: `2620:10A:80BB::30` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E)                |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) je besplatna alternativna DNS usluga od strane OpenNIC Project-a

| Protokol  | Adresa                                   |                                                                |
| --------- | ---------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` i `169.239.202.202`    | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw)   |
| DNS, IPv6 | `2a05:dfc7:5::53` i `2a05:dfc7:5353::53` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Mali hobi DNS projekat. Nema evidencija, Ethereum Name Service, DNSSEC spreman & filtrirane reklame, tragači, malveri

#### Finski DNS server

| Protokol             | Adresa                                                                    |                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177`                | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t)                                                                                     |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`     | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                              |
| DNSCrypt, IPv4       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Japanski DNS server

| Protokol             | Adresa                                                                               |                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-jp.blahdns.com`  IP: `139.162.112.47`                           | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t)                                                                                                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query`                                     | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk)                                                                                          |
| DNSCrypt, IPv4       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                         |
| DNSCrypt, IPv6       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

#### Nemački DNS server

| Protokol             | Adresa                                                                    |                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-de.blahdns.com`  IP: `159.69.198.101`                | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t)                                                                                             |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`     | [Dodaj u AdGuard](sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ)                                                           |
| DNSCrypt, IPv4       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)             |
| DNSCrypt, IPv6       | Dobavljač: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t) |

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) je DNS usluga pogodna za privatnost koju vodi Noah Seefried.

| Protokol       | Adresa                                                                                            |                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` and IPv6: `2a01:4f9:2a:1919::9301` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` i IPv6: `2a01:4f9:2a:1919::9301`               | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw)               |

### DNS za porodicu

[DNS za porodične](https://dnsforfamily.com/) da blokira veb lokacije za odrasle. Pomaže deci i svima za bezbedno surfovanje internetom bez brige da će ih pratiti štetni sajtovi.


| Protokol       | Adresa                                                      |                                                                                                                                           |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ)                                      |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                            | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t)                                                                |
| DNS, IPv4      | `94.130.180.225` i `78.47.64.161`                           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1)                                                                                |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` i `2a01:4f8:1c17:4df8::1`           | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd)                                                                    |
| DNSCrypt, IPv4 | Dobavljač: `dnsforfamily.com` IP: `94.130.180.225`          | [Dodaj u AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)             |
| DNSCrypt, IPv6 | Dobavljač: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20) |

### CZ.NIC ODVR

[CZ. NIC ODVR](https://www.nic.cz/odvr/) CZ. NIC ODVR su Otvoreni DNSSEC razrešivači za proveru valjanosti. CZ. NIC niti prikuplja lične podatke niti prikuplja informacije na stranicama na kojima uređaji šalju lične podatke.

| Protokol       | Adresa                                    |                                                                   |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` i `185.43.135.1`            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x)            |
| DNS, IPv6      | `2001:148f:ffff::1` i `2001:148f:fffe::1` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0) |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                 | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA)  |
| DNS-over-TLS   | `tls://odvr.nic.cz`                       | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o)         |

### Ali DNS

[Ali DNS](https://alidns.com/) je besplatna rekursivna DNS usluga koja se obavezala da će obezbediti brzo, stabilno i bezbedno DNS rešenje za većinu korisnika Interneta. On uključuje AliGuard postrojenje za zaštitu korisnika od raznih napada i pretnji.

| Protokol       | Adresa                               |                                                                              |
| -------------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` i `223.6.6.6`            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACTIyMy41LjUuNQ)                         |
| DNS, IPv6      | `2400:3200::1` i `2400:3200:baba::1` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd)                   |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`   | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.alidns.com`               | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20)                |

### CFIEC javni DNS

DNS usluga zasnovana na IPv6 sa jakim bezbednosnim mogućnostima i zaštitom od špijunskog softvera, zlonamernih Veb lokacija. Podržava DNS64 da obezbedi rezoluciju imena domena samo za IPv6 korisnike.

| Protokol       | Adresa                            |                                                                            |
| -------------- | --------------------------------- | -------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` i `240C::6644`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ)                   |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA)       |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) je anycast sistem filtriranja interneta koji štiti decu od neprikladnih veb lokacija i uvredljivih sadržaja.

| Protokol       | Adresa                                                       |                                                                                                                                            |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `180.131.144.144` i `180.131.145.145`                        | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA)                                                                               |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Dodaj u AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |

### 360 Secure DNS

**360 Secure DNS** je vodeća industrijska rekursivna DNS usluga sa naprednom zaštitom bezbednosti mreže.

| Protokol       | Adresa                           |                                                                        |
| -------------- | -------------------------------- | ---------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` i `218.30.118.6`   | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42)                 |
| DNS, IPv4      | `123.125.81.6` i `140.207.198.6` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg)               |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`   | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.360.cn`               | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg)               |

### IIJ.JP DNS

[IIJ. JP](https://public.dns.iij.jp/) je javni DNS servis kojim upravlja Internet inicijativa Japan. Takođe blokira sadržaj zlostavljanja dece.

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA)                |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) je DNS dobavljač usluga pogodnih za privatnost sa višegodišnjim iskustvom u razvoju usluga rešavanja imena domena, ima za cilj da korisnicima pruži brziju, tačniju i stabilniju uslugu rekursivne rezolucije.

| Protokol       | Adresa                          |                                                                    |
| -------------- | ------------------------------- | ------------------------------------------------------------------ |
| DNS, IPv4      | `119.29.29.29` i `119.28.28.28` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ)           |
| DNS-over-HTTPS | `https://doh.pub/dns-query`     | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg)               |

### 114DNS

**114DNS** je profesionalna i visoko-pouzdana DNS usluga.

#### Normal

Blokiranje reklama i dosadnih Veb lokacija

| Protokol  | Adresa                                |                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.114` i `114.114.115.115` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA) |

#### Sigurno

Blokira phishing, zlonamerne i druge nebezbedne Web lokacije

| Protokol  | Adresa                                |                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.119` i `114.114.115.119` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ) |

#### Porodica

Ovi serveri blokiraju Veb lokacije za odrasle i neprikladne sadržaje.

| Protokol  | Adresa                                |                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.110` i `114.114.115.110` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA) |

### Quad101

[Quad101](https://101.101.101.101) je besplatna alternativna DNS usluga bez evidentiranja od strane TWNIC-a (Tajvanski mrežni informativni centar)

| Protokol       | Adresa                                |                                                                           |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` i `101.102.103.104` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ)              |
| DNS, IPv6      | `2001:de4::101` i `2001:de4::102`     | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ)              |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`      | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://101.101.101.101`               | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx)            |


### OneDNS

**OneDNS** je bezbedna, brza, besplatna DNS usluga sa postrojenjem koje blokira zlonamerne domene.

#### Čisto izdanje

| Protokol  | Adresa                         |                                                          |
| --------- | ------------------------------ | -------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` i `52.80.52.52` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA) |

#### Blok izdanje

| Protokol  | Adresa                         |                                                          |
| --------- | ------------------------------ | -------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` i `52.80.66.66` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokira preko 140 hiljada reklama, praćenja, malvera i phishing domena!. Nema evidentiranja, nema ECS-a, DNSSEC validacija, besplatno!

#### Singapur DNS server

| Protokol       | Adresa                                                                      | Lokacija                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4)                                                                                                     |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                 | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ)                                                                                   |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Dodaj u AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                  |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (keširano od trećeg lica)                | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                            | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk)                                                                                      |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                       | [Dodaj u AdGuard](sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw)                                                                             |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                        | [Dodaj u AdGuard](sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw)                                                                                                     |


#### Japan DNS Server

| Protokol       | Adresa                                                                          |                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                 | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA)                                                                                                                  |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd)                                                                                         |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Dodaj u AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                          |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Dodaj u AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw) |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                               | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5)                                                                                                 |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                 | [Dodaj u AdGuard](sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ)                                       |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA)                                                                                                                  |

### FreeDNS

[FreeDNS](https://freedns.zone/) je otvoren, besplatan i javni DNS servis koji pruža [Virtexxa cloud usluga](https://virtexxa.com/). Nema DNS preusmeravanja, nema evidentiranja.

| Protokol  | Adresa                              |                                                            |
| --------- | ----------------------------------- | ---------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` i `172.104.49.100` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3) |
| DNS, IPv4 | `37.235.1.174` i `37.235.1.177`     | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA)   |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) je besplatan anonimni DNS razrešivač od strane Freenom World-a

| Protokol  | Adresa                        |                                                        |
| --------- | ----------------------------- | ------------------------------------------------------ |
| DNS, IPv4 | `80.80.80.80` i `80.80.81.81` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) je mali Ad-Blocking DNS hobi projekat.

#### OSZX server

Ovi serveri ne obezbeđuju blokiranje reklama, ne drže evidencije i omogućen je DNSSEC

| Protokol       | Adresa                                                                    |                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                            | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ)                                                                                                  |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                 | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0)                                                                                 |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Dodaj u AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28) |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                           | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ)                                                                                  |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                       | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28)                                                                                                 |

#### PumpleX server

Ovi serveri ne obezbeđuju blokiranje reklama, ne drže evidencije i omogućen je DNSSEC

| Protokol       | Adresa                                                                         |                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                 | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA)                                                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                     | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd)                                                                                       |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Dodaj u AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                 |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Dodaj u AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ) |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                            | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk)                                                                                    |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                        | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t)                                                                                                   |

### Applied Privacy DNS

[Primenjena privatnost DNS](https://applied-privacy.net/) upravlja DNS uslugama privatnosti kako bi pomogla u zaštiti DNS saobraćaja i pomogla diversifikaciju pejzaža DNS rešavača koji nudi savremene protokole.

| Protokol       | Adresa                                  |                                                                                    |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5) |
| DNS-over-TLS   | `https://doh.applied-privacy.net/query` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0)         |


### Strongarm DNS

[Strongarm DNS](https://strongarm.io) je DNS servis od strane Strongarma koji sprečava ljude da komuniciraju sa zlonamernim sadržajem

| Protokol  | Adresa                           |                                                           |
| --------- | -------------------------------- | --------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` i `52.3.100.184` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) je DNS servis od strane SafeSurfera koji štiti vaš uređaj od štetnih i sadržaja za odrasle.

| Protokol       | Adresa                                                             |                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` i `104.197.28.121`                               | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ)                                                                                       |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56) |


### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A bezbedan, privatni, DNS otvorenog koda, razrešivač sa zaštitom od malvera, blokiranjem reklama i bez evidencija. Odguglajte vaš telefon, tablet i računar.

| Protokol       | Adresa                                                                         |                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)              |
| DNSCrypt, IPv6 | Dobavljač: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0) |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ)                                                                                   |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20)                                                                                                  |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) vodi Elijas Ojala. Finska.

| Protokol       | Adresa                                   |                                                                                      |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk)                |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) je server koji ostaje bez kapljice Digitalnog okeana u regionu BLR1. Održava ga Abhay Rana aka Nemo.

| Protokol       | Adresa                                                            |                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Dodaj u AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS. SB](https://dns.sb/) besplatnu DNS uslugu bez evidentiranja, omogućen je DNSSEC.


| Protokol       | Adresa                            |                                                                        |
| -------------- | --------------------------------- | ---------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` i `45.11.45.11` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg)           |
| DNS, IPv6      | `2a09::` i `2a11::`               | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACFsyYTA5Ojpd)                     |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`    | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://185.222.222.222`           | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy)         |

### DNS Forge

[DNS Forge](https://dnsforge.de/) je odličan DNS razrešivač sa blokatorom oglasa i nema evidentiranja koje obezbeđuje [adminforge](https://adminforge.de/).

| Protokol       | Adresa                                              |                                                                          |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| DNS, IPv4      | `176.9.93.198` i `176.9.1.117`                      | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA)                 |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` i `2a01:4f8:141:316d::117` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ) |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                     | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dnsforge.de`                                 | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU)                |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) serveri koje je obezbedila [Restena Fondacija](https://www.restena.lu/)

| Protokol       | Adresa                                                                            |                                                                                   |
| -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` i IPv6: `2001:a18:1::29` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` i IPv6: `2001:a18:1::29`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1)                |

### fvz DNS

[fvz DNS](http://meo.ws/) je Fusl-ovaj javni primarni OpenNIC Tier2 Anycast DNS razrešivač

| Protokol       | Adresa                                                                |                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Dodaj u AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Dobavljač: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Dodaj u AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) besplatne DNS servere koje obezbeđuje Freifunk München

| Protokol             | Adresa                                                                  |                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                         | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA)                                                                                              |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                             | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5)                                                                                |
| DNSCrypt, IPv4       | Dobavljač: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Dodaj u AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                |
| DNSCrypt, IPv6       | Dobavljač: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Dodaj u AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ) |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) je javni razrešivač kojim upravlja Digitalno društvo. Domaćin u Cirihu, Švajcarska

| Protokol       | Adresa                                                                                       |                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` i IPv6: `2a05:fc84::42` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` i IPv6: `2a05:fc84::43`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA)               |
### LibreDNS

[LibreDNS](https://libredns.gr/) je javna šifrovana DNS usluga koju vodi [LibreOps](https://libreops.cc/).

| Protokol       | Adresa                                       |                                                                               |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI)                     |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM)         |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy)                |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) za testiranje servera koje obezbeđuje ibksturm. OPENNIC, DNSSEC, bez filtriranja, bez evidentiranja

| Protokol             | Adresa                                                                                     |                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `83.77.85.7`                                    | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU)                                                                                                              |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190`                    | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5)                                                     |
| DNSCrypt, IPv4       | Dobavljač: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443`                                | [Dodaj u AdGuard](sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0)                                          |
| DNSCrypt, IPv6       | Dobavljač: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | [Dodaj u AdGuard](sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt) |

### DNS privatnost

Saradnički otvoreni projekat za promovisanje, implementaciju i [DNS Privacy](https://dnsprivacy.org/).

DNS serveri koje vodi [Stubby programeri](https://getdnsapi.net/)

| Protokol     | Adresa                                                                                                                        |                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA)              |
| DNS-over-TLS | Dobavljač: `Surfnet` Hostname `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15`  | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ)  |
| DNS-over-TLS | Dobavljač: `Surfnet` Hostname `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20) |

Ostali DNS serveri sa smernicama "bez evidentiranja"

| Protokol           | Adresa                                                                                                             |                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| DNS-over-TLS       | Dobavljač: `UncensoredDNS` Hostname `tls://unicast.censurfridns.dk` IP: `89.233.43.71` i IPv6: `2a01:3a0:53:53::0` | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Dobavljač: `UncensoredDNS` Hostname `tls://anycast.censurfridns.dk` IP: `91.239.100.100` i IPv6: `2001:67c:28a4::` | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs)  |
| DNS-over-TLS       | Dobavljač: `dkg` Hostname `tls://dns.cmrg.net` IP: `199.58.81.218`i IPv6: `2001:470:1c:76d::53`                    | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0)                 |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                           | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA)       |
| DNS-over-TLS       | Hostname `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` i IPv6: `2001:8b0:24:24::24`                         | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0) |
| DNS-over-TLS       | Hostname `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` i IPv6: `2a01:4f8:c0c:3c03::2`                             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS       | Hostname `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` i IPv6: `2a01:4f8:c0c:3bfc::2`                             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ)          |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4)              |
| DNS-over-TLS       | Hostname `tls://dns.neutopia.org` IP: `89.234.186.112` i IPv6: `2a00:5884:8209::2`                                 | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw)           |
| DNS-over-TLS       | Dobavljač: `Go6Lab` Hostname `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35`                                | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k)      |
| DNS-over-TLS       | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` i IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ)           |

DNS serveri sa minimalnim evidentiranjem. Ovi serveri koriste neke certifikate za evidentiranje, samopotpisane certifikate ili nemaju podršku za strogi režim.

| Protokol     | Adresa                                                                                                          |                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| DNS-over-TLS | Dobavljač: `NIC Chile` Hostname `dnsotls.lab.nic.cl` IP: `200.1.123.46` i IPv6: `2001:1398:1:0:200:1:123:46`    | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs)             |
| DNS-over-TLS | Dobavljač: `OARC` Hostname `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` i IPv6: `2620:ff:c000:0:1::64:25` | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0) |

### AhaDNS

[AhaDNS](https://ahadns.com/) A zero-logging and ad-blocking DNS service provided by Fredrik Pettersson.

#### Blitz

[Configurable filtering](https://blitz-setup.ahadns.com/) worldwide DoH-only variant

| Protokol                                     | Adresa                            |                                                                            |
| -------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| DNS-over-HTTPS, uncensored                   | `https://blitz.ahadns.com`        | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQA)          |
| DNS-over-HTTPS, OISD filter                  | `https://blitz.ahadns.com/1:1`    | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQQvMTox)     |
| DNS-over-HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAQYmxpdHouYWhhZG5zLmNvbQcvMToxLjEy) |

#### Netherlands

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Dodaj u AdGuard](sdns://AAcAAAAAAAAACTUuMi43NS43NQ)                             |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0)            |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ)                |

#### India

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM)                        |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd)           |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ)                |

#### Los Angeles

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg)                        |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0)            |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ)                |

#### New York

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3)                       |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10)                |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ)                |

#### Poland

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ)                |

#### Italy

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ)                |


#### Spain

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ)                |

#### Norway

| Protokol       | Adresa                                |                                                                                  |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ)                |

#### Chicago

| Protokol       | Adresa                                 |                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Dodaj u AdGuard](sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0)                |

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS Server 1

| Protokol       | Adresa                                                     |                                                                                                                                           |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ)                                                                                  |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Dodaj u AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8) |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8)                                                                         |


### puntCAT DNS

[PuntCAT](http://www.servidordenoms.cat/) nalazi se u blizini Barselone, u Španiji. puntCAT nudi javnu DNS uslugu, besplatnu, bezbednu, blisku koja poštuje vašu privatnost.

| Protokol  | Adresa             |                                                                  |
| --------- | ------------------ | ---------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Dodaj u AdGuard](sdns://AAAAAAAAAAAACzEwOS42OS44LjUx)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ) |


### DNSlify DNS

[DNS i](https://www.dnslify.com/services/) javne DNS razrešivače kako bi ubrzali zahteve, povećali redundantnost. Uslugu pruža kompanija [Peerix](https://www.peerix.net/)

#### Podrazumevano

Ovi serveri obezbeđuju DNS rezoluciju bez filtriranja saobraćaja.

| Protokol       | Adresa                                |                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` i `185.235.81.2`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ)                      |
| DNS, IPv6      | `2a0d:4d00:81::1` i `2a0d:4d00:81::2` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd)                |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`   | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://doh.dnslify.com`               | [Dodaj u AdGuard](sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t)                |

#### Sigurno

Bezbedni režim čuva od zaraženih, lažnih ili bot sajtova.

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` i `185.235.81.4`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw)       |
| DNS, IPv6 | `2a0d:4d00:81::3` i `2a0d:4d00:81::4` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd) |

#### Porodica

Porodični režim nudi zaštitu "Bezbednih" razrešivača i blokira lokacije za odrasle.

| Protokol  | Adresa                                |                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` i `185.235.81.6`       | [Dodaj u AdGuard](sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ)       |
| DNS, IPv6 | `2a0d:4d00:81::5` i `2a0d:4d00:81::6` | [Dodaj u AdGuard](sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd) |

### NextDNS

[NextDNS](https://nextdns.io/) obezbeđuje javno dostupne razrešivače nefiltiranja bez evidentiranja pored svojih frimijum konfiguracionih rešavača filtriranja opcionalnim evidentiranjem.

#### Ultra-niska kašnjenja

| Protokol       | Adresa                   |                                                                              |
| -------------- | ------------------------ | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8KL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8)                |

#### Anycast

| Protokol       | Adresa                           |                                                                                        |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbwovZG5zLXF1ZXJ5) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAWYW55Y2FzdC5kbnMubmV4dGRucy5pbw)               |


### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) pruža DNS-over-HTTPS uslugu koja radi kao Cloudflare Worker i DNS-over-TLS servis koji radi kao Fly.io radnik sa konfiguracionim blok listama.

#### Nefiltrirano

| Protokol       | Adresa                          |                                                                          |
| -------------- | ------------------------------- | ------------------------------------------------------------------------ |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAUYmFzaWMucmV0aGlua2Rucy5jb20BLw) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAASbWF4LnJldGhpbmtkbnMuY29t)       |


### ControlD

[ControlD](https://controld.com/free-dns) javni DNS servis koji štiti od reklama, malver i blokiranje društvenih medija.

#### Blokiranje zlonamernog softvera

| Protokol       | Adresa                            |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Dodaj u AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokiranje zlonamernog softvera i reklama

| Protokol       | Adresa                            |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Dodaj u AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

##### Blokiranje zlonamernog softvera, reklama i društvenih mreža

| Protokol       | Adresa                            |                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Dodaj u AdGuard](sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw)                                  |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA)             |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) obezbeđuje javno dostupni DNS sa QNAME minimizacijom, krajnjim tačkama koje se nalaze u Australiji, Nemačkoj, Singapuru, Švedskoj, Velikoj Britaniji i Sjedinjenim Državama (Njujork i Los Anđeles).

#### Bez filtriranja

| Protokol       | Adresa                              |                                                                               |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `114DNS`                            | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0)                |

#### Blokiranje reklama

| Protokol       | Adresa                                      |                                                                                          |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Dodaj u AdGuard](sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [Dodaj u AdGuard](sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ)                |

### Mali lični razrešivač

U ovom odeljku nabrajamo male, uglavnom lične DNS razrešivače. Oni često imaju samo jedan ili vrlo mali broj servera i lošije vreme od 'velikih' provajdera. Nećemo moći pravilno da pratimo njihovu dostupnost. **Koristite ih na sopstveni rizik!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) je lični DNS servis koji se nalazi u Mumbaju, u Indiji.

Ne-vođenje evidencije | Filtrira oglase, tragače, phishing itd| DNSSEC | QNAME minimiziranje | Nema EDNS klijent-podmreži.

| Protokol       | Adresa                                                       |                                                                                                                                                          |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Dodaj u AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ) |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Dodaj u AdGuard](sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk)                                                                        |


#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) je lična DNS usluga koja se nalazi u Trondhajmu, u Norveškoj, koristeći AdGuard Home infrastrukturu.

Blokira više oglasa i malvera od AdGuard DNS zahvaljujući naprednijoj sintaksi, ali ide lakše na tragačima, i blokira desničarske tabloide i većinu imageboard-ova. Vođenje evidencije se koristi za poboljšanje korišćenih filterlista (npr. deblokiranjem lokacija koje nije trebalo blokirati), kao i za određivanje najmanje loših vremena za ažuriranje serverskog sistema.

| Protokol       | Adresa                                                |                                                                                                       |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Dodaj u AdGuard](sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Dodaj u AdGuard](sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM)                 |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Dodaj u AdGuard](sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg)              |
| DNS, IPv4      | Razlikuje se; pogledajte link iznad.                  |                                                                                                       |
| DNS, IPv6      | Razlikuje se; pogledajte link iznad.                  |                                                                                                       |
| DNSCrypt, IPv4 | Razlikuje se; pogledajte link iznad.                  |                                                                                                       |
