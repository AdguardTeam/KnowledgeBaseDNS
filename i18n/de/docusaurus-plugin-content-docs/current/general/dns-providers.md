---
title: Bekannte DNS-Anbieter
sidebar_position: 3
---

:::info

Hier finden Sie eine Liste mit vertrauenswürdigen DNS-Anbietern. Um sie zu nutzen, installieren Sie zunächst AdGuard Werbeblocker oder AdGuard VPN auf Ihrem Gerät. Klicken Sie dann auf demselben Gerät auf den Link zu einem Anbieter in diesem Artikel

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) ist eine alternative Lösung für Werbeblockierung, Schutz der Privatsphäre und Kindersicherung. Es bietet die erforderliche Anzahl von Schutzfunktionen gegen Online-Werbung, Tracker und Phishing, unabhängig von der Plattform und dem Gerät, das Sie verwenden.

#### Standard

Diese Server sperren Werbung, Tracking und Phishing.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` und `94.140.15.15`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                             |
| DNS, IPv6      | `2a10:50c0::ad1:ff` und `2a10:50c0::ad2:ff`                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                   |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)   |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)   |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                     |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                            |

#### Familienschutz

Diese Server bieten die Standardfunktionen und das Sperren von Websites für Erwachsene und eine Sichere Suche.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` und `94.140.15.16`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6      | `2a10:50c0::bad1:ff` und `2a10:50c0::bad2:ff`                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                                  |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                        |

#### Ohne Filterung

Jeder dieser Server bietet eine sichere und zuverlässige Verbindung, aber im Gegensatz zu den Servern „Standard” und „Familienschutz” filtern sie nichts.

| Protokoll      | Adresse                                                                        |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` und `94.140.14.141`                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` und `2a10:50c0::2:ff`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                              |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                                 |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) ist ein kostenloser rekursiver DNS-Dienst. Die Server von Yandex.DNS befinden sich in Russland, den GUS-Ländern und Westeuropa. Die Anfragen der Nutzer werden vom nächstgelegenen Datenzentrum bearbeitet, das hohe Verbindungsgeschwindigkeiten bietet.

#### Basic

Im „Basic”-Modus findet keine Datenverkehrsfilterung statt.

| Protokoll      | Adresse                                                               |                                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` und `77.88.8.1`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.8&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` und `2a02:6b8:0:1::feed:0ff`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Zu AdGuard hinzufügen](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)            |

#### Sicher

Im Modus „Sicher” ist ein Schutz vor infizierten und betrügerischen Websites gewährleistet.

| Protokoll | Adresse                                           |                                                                                                                                                                           |
| --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` und `77.88.8.2`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.88&name=),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.88&name=)                |
| DNS, IPv6 | `2a02:6b8::feed:bad` und `2a02:6b8:0:1::feed:bad` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Familie

Im Modus „Familie” wird ein Schutz vor infizierten, betrügerischen und nicht jugendfreien Websites geboten.

| Protokoll | Adresse                                           |                                                                                                                                                                           |
| --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` und `77.88.8.7`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.3&name=),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.3&name=)                  |
| DNS, IPv6 | `2a02:6b8::feed:a11` und `2a02:6b8:0:1::feed:a11` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) ist ein DNS-Dienst, der anpassbare Filterung bietet. Dieser Dienst bietet eine sichere Möglichkeit zum Surfen im Internet ohne ungeeignete Inhalte.

#### Familienfilter

Sperrt den Zugang zu allen nicht jugendfreien, pornografischen und expliziten Websites, einschließlich Proxy- und VPN-Domains und Websites mit gemischten Inhalten.

| Protokoll      | Adresse                                                  |                                                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` und `185.228.169.168`                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.228.168.168&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` und `2a0d:2a00:2::`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Anbieter: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                                  |
| DNSCrypt, IPv6 | Anbieter: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                                  |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Filter für Erwachseneninhalte

Er ist weniger restriktiv als der Familienfilter und sperrt nur den Zugang zu Inhalten für Erwachsene sowie zu bösartigen und Phishing-Domains.

| Protokoll      | Adresse                                                   |                                                                                                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` und `185.228.169.11`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.228.168.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` und `2a0d:2a00:2::1`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Anbieter: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                               |
| DNSCrypt, IPv6 | Anbieter: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                            |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Sicherheitsfilter

Sperrt Phishing, Spam und bösartige Domains.

| Protokoll      | Adresse                                              |                                                                                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` und `185.228.169.9`                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.228.168.9&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` und `2a0d:2a00:2::2`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) ist ein Dienst zur Auflösung von Domainnamen, der Ihre DNS-Anfragen über ein weltweites Netz von DNS-Servern auflöst. Entfernt übermäßige Werbung und schützt vor Phishing und Spyware.

| Protokoll      | Adresse                                                               |                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` und `8.20.247.20`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=8.26.56.26&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=8.26.56.26&name=)      |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) ist ein kostenloser Cloud-basierter rekursiver DNS-Dienst, der einen schnellen und zuverlässigen Zugang zu Websites und Online-Anwendungen mit integrierter Sicherheit und Bedrohungsanalyse bietet.

#### Zuverlässigkeit und Leistung 1

Diese Server bieten zuverlässige und schnelle DNS-Abfragen, ohne bestimmte Kategorien zu sperren.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` und `156.154.71.1`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` und `2610:a1:1019::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Zuverlässigkeit und Leistung 2*

Diese Server bieten zuverlässige und schnelle DNS-Abfragen, ohne bestimmte Kategorien zu blockieren, und verhindern auch die Umleitung von NXDomain-Antworten (nicht existierende Domains) auf Zielseiten.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` und `156.154.71.5`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` und `2610:a1:1019::5` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Schutz vor Bedrohungen

Diese Server bieten Schutz vor bösartigen Domains und verfügen außerdem über „Zuverlässigkeits- und Leistungsmerkmale”.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` und `156.154.71.2`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` und `2610:a1:1019::2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Familiensicherheit

Diese Server sperren nicht jugendfreie Inhalte und bieten außerdem die Funktionen „Zuverlässigkeit und Leistung” und „Schutz vor Bedrohungen”.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` und `156.154.71.3`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` und `2610:a1:1019::3` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Sicheres Business

Diese Server sperren unerwünschte und zeitraubende Inhalte und bieten außerdem die Funktionen „Zuverlässigkeit und Leistung”, „Schutz vor Bedrohungen” und „Familiensicherheit”.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` und `156.154.71.4`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.4&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` und `2610:a1:1019::4` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) ist ein Dienst, der das DNS um Funktionen wie Inhaltsfilterung und Phishing-Schutz erweitert, ohne dass es zu Ausfallzeiten kommt.

#### Standard

DNS-Server mit benutzerdefinierter Filterung, die Ihr Gerät vor Malware schützt.

| Protokoll      | Adresse                                                       |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` und `208.67.220.220`                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=208.67.222.222&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` und `2620:119:53::53`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:119:35::35&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                    |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                                   |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

OpenDNS-Server, die das Sperren von Inhalten für Erwachsene ermöglichen.

| Protokoll      | Adresse                                                      |                                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` und `208.67.220.123`                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=208.67.222.123&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                        |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) ist ein kostenloser, globaler DNS-Auflösungsdienst, den Sie als Alternative zu Ihrem derzeitigen DNS-Anbieter nutzen können.

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` und `8.8.4.4`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=8.8.8.8&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` und `2001:4860:4860::8844` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) ist ein kostenloser und schneller DNS-Dienst, der als rekursiver Namensserver fungiert und die Auflösung von Domainnamen für jeden Host im Internet ermöglicht.

#### Standard

| Protokoll            | Adresse                                           |                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` und `1.0.0.1`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=1.1.1.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` und `2606:4700:4700::1001` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Malware blocking only

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` und `1.0.0.2`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=1.1.1.2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` und `2606:4700:4700::1002` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Sperren von Malware und jugendgefährdenten Inhalten

| Protokoll            | Adresse                                           |                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` und `1.0.0.3`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=1.1.1.3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` und `2606:4700:4700::1003` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) ist eine kostenlose, rekursive Anycast-DNS-Plattform, die hohe Leistung, Datenschutz und Sicherheit vor Phishing und Spyware bietet. Quad9-Server enthalten keine Zensurkomponente.

#### Standard

Reguläre DNS-Server, die Schutz vor Phishing und Spyware bieten. Dazu gehören Blocklisten, DNSSEC-Validierung und andere Sicherheitsfunktionen.

| Protokoll      | Adresse                                                        |                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` und `149.112.112.112`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=9.9.9.9&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:fe::fe&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                                  |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Ungesichert

Ungesicherte DNS-Server bieten keine Sicherheits-Blocklisten, DNSSEC oder EDNS Client Subnet.

| Protokoll      | Adresse                                                           |                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` und `149.112.112.10`                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=9.9.9.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:fe::10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                        |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)-Unterstützung

EDNS Client Subnet ist eine Methode, die Komponenten von Endbenutzer-IP-Adressdaten in Anfragen einschließt, die an autoritative DNS-Server gesendet werden. Es bietet eine Sicherheits-Blockliste, DNSSEC, EDNS Client Subnet.

| Protokoll      | Adresse                                                        |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` und `149.112.112.11`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=9.9.9.11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:fe::11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                        |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                                  |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) ist ein kostenloser DNS-Dienst, der im Vergleich zu anderen Alternativen eine verbesserte DNS-Stabilität und Sicherheit bietet. Verisign respektiert die Privatsphäre der Nutzer: Das Unternehmen verkauft weder öffentliche DNS-Daten an Dritte noch leitet es die Anfragen der Nutzer um, um ihnen Werbung anzuzeigen.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` und `64.6.65.6`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=64.6.64.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` und `2620:74:1c::2:2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) ist ein öffentlicher Schweizer DNS-Dienst, der von [switch.ch](https://www.switch.ch/) bereitgestellt wird.

| Protokoll      | Adresse                                                                          |                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Anbieter: `dns.switch.ch` IP: `130.59.31.248`                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=130.59.31.248&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Anbieter: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` und IPv6: `2001:620:0:ff::2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) ist ein kostenloser alternativer DNS-Dienst von Dyn.

| Protokoll | Adresse                             |                                                                                                                                                                 |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` und `216.146.36.36` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=216.146.35.35&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) ist ein schneller und kostenloser Server ohne Protokollierung mit einer Funktion zum Schutz der Privatsphäre.

| Protokoll | Adresse                                                       |                                                                                                                                                                                           |
| --------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` und `84.200.70.40`                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=84.200.69.80&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` und `2001:1608:10:25::9249:d69b` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) Lösungen für Content-Filterung und Internet-Sicherheit.

| Protokoll | Adresse          |                                                                                                                                                                   |
| --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=193.58.251.251&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) ist ein schneller und sicherer DNS-Dienst mit Schutz vor Werbung, Tracking und Phishing.

#### West DNS Server (Main)

| Protokoll      | Adresse                           |                                                                                                                                                                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Siberia and Far East)

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) ist ein globales Anycast-Netzwerk, das aus Servern auf der ganzen Welt besteht — Amerika, Europa, Afrika, Australien und dem Fernen Osten, um eine schnelle und zuverlässige DNS-Auflösung von jedem Punkt der Welt zu gewährleisten.

| Protokoll | Adresse                           |                                                                                                                                                               |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` und `195.46.39.40` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=195.46.39.39&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) schützt vor Diebstahl von persönlichen und finanziellen Daten. Hält Viren, Ransomware und andere Malware von Ihrem Zuhause fern.

#### Private

Im Modus „Private” nur DNS-Auflösung.

| Protokoll              | Adresse                                                                                             |                                                                                                                                                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` und `149.112.122.10`                                                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` und `2620:10A:80BC::10`                                                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` und IPv6: `2620:10A:80BB::10` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

Im Modus „Protected”, Schutz vor Malware und Phishing.

| Protokoll                | Adresse                                                                                               |                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` und `149.112.122.20`                                                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.20&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` und `2620:10A:80BC::20`                                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protected | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` und IPv6: `2620:10A:80BB::20` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Family

Im Modus „Family“, Protected + Sperren von Inhalten für Erwachsene.

| Protokoll             | Adresse                                                                                            |                                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` und `149.112.122.30`                                                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.30&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` und `2620:10A:80BC::30`                                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Family | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` und IPv6: `2620:10A:80BB::30` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) ist ein kostenloser alternativer DNS-Dienst von OpenNIC Project.

| Protokoll | Adresse                                    |                                                                                                                                                                     |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` und `169.239.202.202`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.121.177.177&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` und `2a05:dfc7:5353::53` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Ein kleines Hobby-DNS-Projekt. Keine Protokolle, Ethereum Name Service, DNSSEC bereit und gefilterte Werbung, Tracker, Malwares.

#### Finland DNS Server

| Protokoll            | Adresse                                                                  |                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                          |
| DNSCrypt, IPv6       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                              |

#### Japan DNS Server

| Protokoll            | Adresse                                                                             |                                                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query`                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                          |
| DNSCrypt, IPv6       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                  |

#### Germany DNS Server

| Protokoll            | Adresse                                                                  |                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-de.blahdns.com` IP: `159.69.198.101`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                          |
| DNSCrypt, IPv6       | Anbieter: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                              |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) zielt darauf ab, Websites für Erwachsene zu sperren. Sie ermöglicht es Kindern und Erwachsenen, sicher im Internet zu surfen, ohne sich Sorgen machen zu müssen, von bösartigen Websites verfolgt zu werden.

| Protokoll      | Adresse                                                    |                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` und `78.47.64.161`                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.130.180.225&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` und `2a01:4f8:1c17:4df8::1`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Anbieter: `dnsforfamily.com` IP: `94.130.180.225`          | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                       |
| DNSCrypt, IPv6 | Anbieter: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                           |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR sind Open DNSSEC validierende Auflösungssysteme. CZ.NIC erhebt keine persönlichen Daten und sammelt auch keine Informationen auf Seiten, auf denen Geräte persönliche Daten senden.

| Protokoll      | Adresse                                     |                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` und `185.43.135.1`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=193.17.47.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` und `2001:148f:fffe::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) ist ein kostenloser, rekursiver DNS-Dienst, der für die Mehrheit der Internetnutzer eine schnelle, stabile und sichere DNS-Auflösung bietet. Es enthält die AliGuard-Funktion zum Schutz der Benutzer vor verschiedenen Angriffen und Bedrohungen.

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` und `223.6.6.6`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=223.5.5.5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` und `2400:3200:baba::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2400:3200::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

IPv6-basierter Anycast-DNS-Dienst mit starken Sicherheitsfunktionen und Schutz vor Spyware und bösartigen Websites. Es unterstützt DNS64, um die Domainnamenauflösung nur für IPv6-Benutzer bereitzustellen.

| Protokoll      | Adresse                           |                                                                                                                                                                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` und `240C::6644`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=240C::6666&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) ist ein Anycast-Internet-Filtersystem, das Kinder vor ungeeigneten Websites und missbräuchlichen Inhalten schützt.

| Protokoll      | Adresse                                                     |                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` und `180.131.145.145`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=180.131.144.144&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                    |

### 360 Secure DNS

**360 Secure DNS** ist ein branchenführender rekursiver DNS-Service mit fortschrittlichem Schutz vor Netzwerksicherheitsbedrohungen.

| Protokoll      | Adresse                            |                                                                                                                                                                                                                   |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` und `218.30.118.6`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=101.226.4.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` und `140.207.198.6` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=123.125.81.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) ist ein öffentlicher DNS-Dienst, der von der Internet Initiative Japan betrieben wird. Er sperrt auch Inhalte, die dem Missbrauch von Kindern betreffen.

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) ist ein datenschutzfreundlicher DNS-Anbieter mit jahrelanger Erfahrung in der Entwicklung von Domain-Namensauflösungsdiensten, dessen Ziel es ist, den Benutzern einen schnelleren, genaueren und stabileren rekursiven Auflösungsdienst zu bieten.

| Protokoll      | Adresse                           |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` und `119.28.28.28` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=119.29.29.29&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** ist ein professioneller und hochzuverlässiger DNS-Dienst.

#### Normal

Sperrt Werbung und unerwünschte Websites.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` und `114.114.115.115` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=114.114.114.114&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Sicher

Sperrt Phishing-, bösartige und andere unsichere Websites.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` und `114.114.115.119` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=114.114.114.119&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Familie

Diese Server sperren Websites mit nicht jugendfreien und unangemessenen Inhalten.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` und `114.114.115.110` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=114.114.114.110&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) ist ein kostenloser alternativer DNS-Dienst ohne Protokollierung von TWNIC (Taiwan Network Information Center).

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                           |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` und `101.102.103.104` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=101.101.101.101&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` und  `2001:de4::102`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:de4::101&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** ist ein sicherer, schneller, kostenloser Nischen-DNS-Dienst mit der Möglichkeit, bösartige Domains zu sperren.

#### Pure Edition

| Protokoll | Adresse                          |                                                                                                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` und `52.80.52.52` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=117.50.10.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokoll | Adresse                          |                                                                                                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` und `52.80.66.66` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=117.50.11.11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) sperrt über 140.000 Werbe-, Werbe-Tracking, Malware und Phishing-Domains. Keine Protokollierung, kein ECS, DNSSEC-Validierung, kostenlos!

#### Singapore DNS Server

| Protokoll      | Adresse                                                                     | Standort                                                                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=174.138.21.128&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`               | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                               |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`  | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                              |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (zwischengespeichert über Drittanbieter) | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| Protokoll      | Adresse                                                                        |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=172.104.93.80&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                       |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                              |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) ist ein offener, kostenloser und öffentlicher DNS-Dienst. Keine DNS-Umleitungen, keine Protokollierung.

| Protokoll | Adresse                               |                                                                                                                                                                   |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` und `172.104.49.100` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=172.104.237.57&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` und `37.235.1.177`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=37.235.1.174&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) ist ein kostenloser anonymer DNS-Auflöser von Freenom World.

| Protokoll | Adresse                         |                                                                                                                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` und `80.80.81.81` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=80.80.80.80&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) ist ein kleines Hobbyprojekt zum Sperren von Werbung über DNS.

#### OSZX server

Diese Server sperren keine Werbung, führen keine Protokolle und DNSSEC ist aktiviert.

| Protokoll      | Adresse                                                                  |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=51.38.83.141&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                      |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                       |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

Diese Server sperren keine Werbung, führen keine Protokolle und DNSSEC ist aktiviert.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=51.38.82.198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                                |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                           | [Zu Adguard hinzufügen](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Zu Adguard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) betreibt DNS-Datenschutzdienste zum Schutz des DNS-Datenverkehrs und zur Diversifizierung der DNS-Auflöserlandschaft mit modernen Protokollen.

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) ist ein DNS-Dienst von Strongarm, der verhindert, dass Menschen mit bösartigen Inhalten in Kontakt kommen.

| Protokoll | Adresse                            |                                                                                                                                                                 |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` und `52.3.100.184` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=54.174.40.213&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) ist ein DNS-Dienst von SafeSurfer, der Ihr Gerät vor schädlichen und jugendgefährdenden Inhalten schützt.

| Protokoll      | Adresse                                                           |                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` und `104.197.28.121`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=104.155.237.225&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)            |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Ein sicherer, privater, quelloffener DNS-Auflösungsdienst mit Malware-Schutz, Werbesperren und ohne Protokollierung. Ent-googlen Sie Ihr Telefon, Tablet und Ihren Computer.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                    |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                       |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) wird von Elias Ojala, Finnland, betrieben.

| Protokoll      | Adresse                                  |                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi),  [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) ist ein Server, der auf einem Digital Ocean Droplet in der Region BLR1 läuft. Betreut von Abhay Rana alias Nemo.

| Protokoll      | Adresse                                                          |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Zu AdGuard hinzufügen](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) bietet einen kostenlosen DNS-Dienst ohne Protokollierung, DNSSEC ist aktiviert.

| Protokoll      | Adresse                             |                                                                                                                                                                                                                   |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` und `45.11.45.11` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.222.222.222&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` und `2a11::`               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a09::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://185.222.222.222`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) ist ein redundanter DNS-Auflösungsdienst mit einem Werbeblocker und ohne Protokollierung, der von [adminforge](https://adminforge.de/) bereitgestellt wird.

| Protokoll      | Adresse                                               |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` und `176.9.1.117`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=176.9.93.198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` und `2a01:4f8:141:316d::117` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver)-Server, die von der [Restena Foundation](https://www.restena.lu/) bereitgestellt werden.

| Protokoll      | Adresse                                                                             |                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` und IPv6: `2001:a18:1::29` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` und IPv6: `2001:a18:1::29`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)|

### fvz DNS

[fvz DNS](http://meo.ws/) ist ein öffentlicher primärer OpenNIC Tier2 Anycast DNS Resolver von Fusl.

| Protokoll      | Adresse                                                              |                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Zu AdGuard hinzufügen](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Zu AdGuard hinzufügen](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) kostenlose DNS-Server, der von „Freifunk München“ bereitgestellt wird.

| Protokoll            | Adresse                                                                |                                                                                                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                              |
| DNSCrypt, IPv6       | Anbieter: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                               |

### Digitale Gesellschaft DNS

Die „[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/)“ ist ein öffentlicher Auflösungsdienst, der von der Digitalen Gesellschaft betrieben wird. Standort ist Zürich, Schweiz.

| Protokoll      | Adresse                                                                                        |                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` und IPv6: `2a05:fc84::42` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` und IPv6: `2a05:fc84::43`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) ist ein öffentlicher verschlüsselter DNS-Dienst, der von [LibreOps](https://libreops.cc/) angeboten wird.

| Protokoll      | Adresse                                      |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=88.198.92.222&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) Testserver, die von ibksturm bereitgestellt werden. OPENNIC, DNSSEC, keine Filterung, keine Protokollierung.

| Protokoll            | Adresse                                                                 |                                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Hostname: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`          | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                      |

### DNS Privacy

Ein gemeinschaftliches offenes Projekt zur Förderung, Implementierung und Bereitstellung von [DNS Privacy](https://dnsprivacy.org/).

DNS-Server, die von den [Stubby-Entwicklern](https://getdnsapi.net/) unterhalten werden.

| Protokoll    | Adresse                                                                                                                       |                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Anbieter: `Surfnet` Hostname: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` und IPv6: `2001:610:1:40ba:145:100:185:15`  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Anbieter: `Surfnet` Hostname: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` und IPv6: `2001:610:1:40ba:145:100:185:16` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Andere DNS-Server mit der Richtlinie „keine Protokollierung”.

| Protokoll          | Adresse                                                                                                              |                                                                                                                                                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Anbieter: `UncensoredDNS` Hostname: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` und IPv6: `2a01:3a0:53:53::0` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Anbieter: `UncensoredDNS` Hostname: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` und IPv6: `2001:67c:28a4::` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Anbieter: `dkg` Hostname: `tls://dns.cmrg.net` IP: `199.58.81.218` und IPv6: `2001:470:1c:76d::53`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Hostname: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` und IPv6: `2001:8b0:24:24::24`                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Hostname: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` und IPv6: `2a01:4f8:c0c:3c03::2`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Hostname: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` und IPv6: `2a01:4f8:c0c:3bfc::2`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Hostname: `tls://dns.neutopia.org` IP: `89.234.186.112` und IPv6: `2a00:5884:8209::2`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Anbieter: `Go6Lab` Hostname: `tls://privacydns.go6lab.si` und IPv6: `2001:67c:27e4::35`                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` und IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

DNS-Server mit minimaler Protokollierung/Einschränkungen. Diese Server verwenden einige Protokollierung, selbstsignierte Zertifikate oder keine Unterstützung für den strikten Modus.

| Protokoll    | Adresse                                                                                                           |                                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Anbieter: `NIC Chile` Hostname: `dnsotls.lab.nic.cl` IP: `200.1.123.46` und IPv6: `2001:1398:1:0:200:1:123:46`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Anbieter: `OARC` Hostname: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` und IPv6: `2620:FF:C000:0:1::64:25` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) Ein von Fredrik Pettersson angebotener DNS-Dienst ohne Protokollierung und mit Werbeblockern.

#### Blitz

[Konfigurierbare Filterung](https://blitz-setup.ahadns.com/) weltweite DoH-only-Variante.

| Protokoll                                        | Adresse                           |                                                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, unzensiert                       | `https://blitz.ahadns.com`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, OISD-Filter                      | `https://blitz.ahadns.com/1:1`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD und aktivierter Pornofilter | `https://blitz.ahadns.com/1:1.12` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Niederlande

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=5.2.75.75&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Indien

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=45.79.120.233&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=45.67.219.208&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.213.26.187&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polen

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Italien

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Spanien

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Norwegen

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) ist ein auf Datenschutz ausgerichteter DNS-Dienst, der von Sebastian Schmidt bereitgestellt wird. Keine Protokollierung, DNSSEC-Validierung.

#### DNS Server 1

| Protokoll      | Adresse                                                    |                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=45.76.113.31&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                       |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) ist in der Nähe von Barcelona, Spanien, angesiedelt. puntCAT bietet einen öffentlichen DNS-Dienst an, der kostenlos, sicher und zuverlässig ist und der Ihre Privatsphäre respektiert.

| Protokoll | Adresse            |                                                                                                                                                                       |
| --------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=109.69.8.51&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) betreiben öffentliche DNS-Auflösungsdienste, um Anfragen zu beschleunigen und die Redundanz zu erhöhen. Der Dienst wird von [Peerix](https://www.peerix.net/) bereitgestellt

#### Standard

Diese Server bieten DNS-Auflösung ohne Filterung des Datenverkehrs.

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` und `185.235.81.2`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.235.81.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6      | `2a0d:4d00:81::1` und `2a0d:4d00:81::2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Sicher

Der abgesicherte Modus schützt vor infizierten, betrügerischen oder Bot-Seiten.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` und `185.235.81.4`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.235.81.3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` und `2a0d:4d00:81::4` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Familie

Der Family-Modus bietet Schutz durch „sichere” Resolver und sperrt Websites mit Inhalten die nur für Erwachsene bestimmt sind.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` und `185.235.81.6`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.235.81.5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` und `2a0d:4d00:81::6` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) stellt öffentlich zugängliche, nicht filternde Resolver ohne Protokollierung bereit, zusätzlich zu seinen konfigurierbaren, filternden Freemium-Resolvern mit optionaler Protokollierung.

#### Ultra-niedrige Latenzzeit

| Protokoll      | Adresse                  |                                                                                                                                                                                                                                   |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokoll      | Adresse                          |                                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) stellt einen DNS-over-HTTPS-Dienst bereit, der als Cloudflare Worker ausgeführt wird, sowie einen DNS-over-TLS-Dienst, der als Fly.io Worker mit konfigurierbaren Sperrlisten ausgeführt wird.

#### Ohne Filterung

| Protokoll      | Adresse                         |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) ist ein anpassbarer DNS-Dienst mit Proxy-Funktionen. Das bedeutet, dass es nicht nur Dinge sperrt (Werbung, Pornos usw.), sondern auch Websites und Dienste entsperren kann.

#### Ohne Filterung

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` und `76.76.10.0`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` und `2606:1a40:1::` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:1a40::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Malware blockieren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Malware und Werbung blockieren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Malware, Werbung und soziale Netzwerke sperren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) bietet öffentlich zugängliches DNS mit QNAME-Minimierung, Endpunkte in Australien, Deutschland, Singapur, Schweden, Großbritannien und den Vereinigten Staaten (New York und Los Angeles).

#### Ohne Filterung

| Protokoll      | Adresse                             |                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Werbeblockierung

| Protokoll      | Adresse                                     |                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Kleine individuelle Resolver

In diesem Abschnitt führen wir kleine, meist individuelle DNS-Resolver auf. Sie haben oft nur einen oder sehr wenige Server und eine schlechtere Betriebszeit als die „großen” Anbieter. Wir werden nicht in der Lage sein, ihre Verfügbarkeit angemessen zu überwachen. **Die Verwendung erfolgt auf eigenes Risiko!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) ist ein persönlicher DNS-Dienst mit Sitz in Mumbai, Indien.

Nicht protokollierend | Filtert Werbung, Tracker, Phishing, usw. | DNSSEC | QNAME-Minimierung | Kein EDNS Client-Subnetz.

| Protokoll      | Adresse                                                      |                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                    |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) ist ein persönlicher DNS-Dienst, der in Trondheim, Norwegen, gehostet wird und eine AdGuard Home Infrastruktur nutzt.

Sperrt mehr Werbung und Malware als AdGuard DNS dank einer fortgeschritteneren Syntax, ist aber unempfindlicher gegenüber Trackern und sperrt rechtsextreme Boulevardblätter und die meisten Imageboards. Die Protokollierung dient dazu, die verwendeten Filterlisten zu verbessern (z. B. durch Freigabe von Websites, die nicht hätten gesperrt werden dürfen) und die günstigsten Zeitpunkte für die Aktualisierung des Serversystems zu ermitteln.

| Protokoll      | Adresse                                               |                                                                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |
| DNS, IPv6      | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |
| DNSCrypt, IPv4 | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) - Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS Wiederherstellungen mit Sperung: Werbung, Tracking, Adware, Malware, bösartige Aktivitäten und Phishing-Unternehmen, sperrt ≈ 1 Mio. Domains. Kann Protokolle für bis zu 24h/48h für DDoS/Flood Mitigation Attacken erstellen.

#### Adaptive Filterung (ADA)

Empfohlen für die meisten Benutzer, sehr flexible Filterung mit Sperrung der meisten Werbenetzwerke, Ad-Tracking, Malware und Phishing-Domains.

| Protokoll      | Adresse                             |                                                                                     |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Zu AdGuard hinzufügen](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Zu AdGuard hinzufügen](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strenge Filterung (RIC)

Strengere Filterrichtlinien mit Sperrung von Werbung, Marketing, Tracking, Malware, Clickbait, Coinhive und Phishing-Domains.

| Protokoll      | Adresse                             |                                                                                     |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Zu AdGuard hinzufügen](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Zu AdGuard hinzufügen](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
