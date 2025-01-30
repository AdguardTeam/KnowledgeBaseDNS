---
title: Bekannte DNS-Anbieter
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Hier finden Sie eine Liste mit vertrauenswürdigen DNS-Anbietern. Um sie zu nutzen, installieren Sie zunächst AdGuard Werbeblocker oder AdGuard VPN auf Ihrem Gerät. Klicken Sie dann auf demselben Gerät auf den Link zu einem Anbieter in diesem Artikel

Schnellzugriff: [AdGuard Werbeblocker herunterladen](https://agrd.io/download-kb-adblock), [AdGuard VPN herunterladen](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

## **Öffentliche Anycast-Resolver**

Dabei handelt es sich um global verteilte, groß angelegte DNS-Resolver, die Anycast-Routing verwenden, um Ihre DNS-Anfragen an das nächstgelegene Rechenzentrum weiterzuleiten.

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) ist eine alternative Lösung für Werbeblockierung, Schutz der Privatsphäre und Kindersicherung. Es bietet die notwendige Anzahl von Schutzfunktionen gegen Online-Werbung, Tracker und Phishing, unabhängig von der Plattform und dem Gerät, das Sie verwenden.

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

Diese Server bieten die Standardfunktionen + Sperren von Websites für Erwachsene + sichere Suche.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` und `94.140.15.16`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` und `2a10:50c0::bad2:ff`                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                                  |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                        |

#### Ohne Filterung

Jeder dieser Server bietet eine sichere und zuverlässige Verbindung, aber im Gegensatz zu den Servern „Standard“ und „Familienschutz“ filtern sie nichts.

| Protokoll      | Adresse                                                                        |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` und `94.140.14.141`                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` und `2a10:50c0::2:ff`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                              |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                                 |

### Ali DNS

[Ali DNS](https://alidns.com/) ist ein kostenloser, rekursiver DNS-Dienst, der eine schnelle, stabile und sichere DNS-Auflösung bietet. Er enthält die AliGuard-Funktion zum Schutz vor verschiedenen Angriffen und Bedrohungen.

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` und `223.6.6.6`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=223.5.5.5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` und `2400:3200:baba::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2400:3200::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)       |

### BebasDNS von BebasID

[BebasDNS](https://github.com/bebasid/bebasdns) ist ein freier und neutraler öffentlicher Resolver mit Sitz in Indonesien, der die OpenNIC-Domain unterstützt. Erstellt von Komunitas Internet Netral Indonesia (KINI), um indonesischen Nutzer:innen eine kostenlose und neutrale Internetverbindung zu bieten.

#### Standard

Dies ist die Standardvariante von BebasDNS. Diese Variante sperrt Werbung, Malware und Phishing-Domains.

| Protokoll      | Adresse                                                              |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                                          |

#### Ohne Filterung

Bei dieser Variante wird nichts gefiltert.

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                       |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### Sicherheit

Dies ist die Sicherheits-/Antivirus-Variante von BebasDNS. Diese Variante sperrt ausschließlich Malware- und Phishing-Domains.

| Protokoll      | Adresse                                   |                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [Zu Adguard hinzufügen](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com), [Zu Adguard VPN hinzufügen](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [Zu Adguard hinzufügen](adguard:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853), [Zu Adguard VPN hinzufügen](adguardvpn:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                     |

#### Familie

Dies ist die Familienvariante von BebasDNS. Diese Variante sperrt Pornografie, Glücksspiel, Hass-Seiten, sperrt Malware und Phishing-Domains.

| Protokoll      | Adresse                                                                        |                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                  | [Zu Adguard hinzufügen](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [Zu Adguard VPN hinzufügen](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                                    |

#### Familienschutz mit Werbefilterung

Dies ist die Familienvariante von BebasDNS, aber mit Werbeblocker

| Protokoll      | Adresse                                     |                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD-Filter

Dies ist eine benutzerdefinierte BebasDNS-Variante mit nur OISD Big-Filter

| Protokoll      | Adresse                            |                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal Filter

Dies ist eine benutzerdefinierte BebasDNS-Variante mit nur dem Hagezi Multi Normal-Filter

| Protokoll      | Adresse                              |                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### 0ms DNS

[DNS](https://0ms.dev/) ist ein globaler DNS-Auflösungsdienst, der von der 0ms-Gruppe als Alternative zu Ihrem derzeitigen DNS-Anbieter angeboten wird.

Er verwendet [OISD Big](https://oisd.nl/) als Basisfilter, um allen eine sicherere Umgebung zu bieten. Er wurde mit verschiedenen Optimierungen entwickelt, wie HTTP/3, Caching und mehr. Es nutzt maschinelles Lernen, um Benutzer vor potenziellen Sicherheitsbedrohungen zu schützen und sich gleichzeitig im Laufe der Zeit zu optimieren.

| Protokoll      | Adresse                     |                                                                                                                                                                                                               |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://0ms.dev/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev) |

### CFIEC Public DNS

IPv6-basierter Anycast-DNS-Dienst mit starken Sicherheitsfunktionen und Schutz vor Spyware und bösartigen Websites. Er unterstützt DNS64, um die Auflösung von Domainnamen nur für IPv6-Benutzer zu ermöglichen.

| Protokoll      | Adresse                           |                                                                                                                                                                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` und `240C::6644`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=240C::6666&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

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
| DNS-over-TLS   | `tls://dns.opendns.com`                                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

OpenDNS-Server, die das Sperren von Inhalten für Erwachsene ermöglichen.

| Protokoll      | Adresse                                                      |                                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` und `208.67.220.123`                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=208.67.222.123&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                        |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

OpenDNS-Server ohne Filterung.

| Protokoll      | Adresse                                     |                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.2` und `208.67.220.2`           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=208.67.220.2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=208.67.222.2&name=)                                                                                                         |
| DNS, IPv6      | `2620:0:ccc::2` IP: `2620:0:ccd::2`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:0:ccc::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=)                                                                                                       |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com/dns-query&name=sandbox.opendns.com)                               |

:::info

Die Server von OpenDNS entfernen die AUTHORITY-Abschnitte aus bestimmten Antworten, einschließlich derer mit NODATA, was das Zwischenspeichern solcher Antworten unmöglich macht.

:::

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

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) ist ein kostenloser und schneller DNS-Dienst, der als rekursiver Namensserver fungiert und die Auflösung von Domainnamen für jeden Host im Internet ermöglicht.

#### Standard

| Protokoll            | Adresse                                           |                                                                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` und `1.0.0.1`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=1.1.1.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` und `2606:4700:4700::1001` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Nur zum Sperren von Malware

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

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) ist ein Dienst zur Auflösung von Domainnamen, der Ihre DNS-Anfragen über ein weltweites Netz von DNS-Servern auflöst. Entfernt übermäßige Werbung und schützt vor Phishing und Spyware.

| Protokoll      | Adresse                                                               |                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` und `8.20.247.20`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=8.26.56.26&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=8.26.56.26&name=)      |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### ControlD

[ControlD](https://controld.com/free-dns) ist ein anpassbarer DNS-Dienst mit Proxy-Funktionen. Das bedeutet, dass es nicht nur Werbung, Pornos usw. sperrt, sondern auch Websites und Dienste entsperren kann.

#### Ohne Filterung

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` und `76.76.10.0`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` und `2606:1a40:1::` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2606:1a40::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Malware sperren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

#### Malware und Werbung sperren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

#### Malware, Werbung und soziale Netzwerke sperren

| Protokoll      | Adresse                           |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=76.76.2.3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) ist ein DNS-Dienst, mit dem Sie alles sperren können, was Sie möchten, und der Sie und Ihre Familie standardmäßig vor Werbung, Trackern, Malware, Phishing, bösartigen Websites und vielem mehr schützt.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                   |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                      |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

Ein gemeinschaftliches offenes Projekt zur Förderung, Implementierung und Bereitstellung von [DNS Privacy](https://dnsprivacy.org/).

#### DNS-Server, die von den [Stubby-Entwicklern](https://getdnsapi.net/) geführt werden

| Protokoll    | Adresse                                                                                                                       |                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` und IPv6: `2a04:b900:0:100::37`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Anbieter: `Surfnet` Hostname: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` und IPv6: `2001:610:1:40ba:145:100:185:15`  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Anbieter: `Surfnet` Hostname: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` und IPv6: `2001:610:1:40ba:145:100:185:16` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

### FutureDNS

[FutureDNS](https://futuredns.eu.org) is a privacy-focused DNS service that prioritizes user security and anonymity. It supports both standard DNS and encrypted protocols while maintaining a strict no-logging policy.

#### Standard

| Protokoll            | Adresse                                      |                                                                                                                                                                                                                               |
| -------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `162.55.52.228`                              | [Add to AdGuard](adguard:add_dns_server?address=162.55.52.228&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=162.55.52.228&name=)                                                                             |
| DNS, IPv6            | `2a01:4f8:1c1c:adbc::`                       | [Add to AdGuard](adguard:add_dns_server?address=2a01:4f8:1c1c:adbc::&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c1c:adbc::&name=)                                                               |
| DNS-over-HTTPS, IPv4 | `https://dns.de.futuredns.eu.org/dns-query/` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns) |
| DNS-over-HTTPS, IPv6 | `https://dns.de.futuredns.eu.org/dns-query/` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns) |
| DNS-over-TLS         | `tls://dns.de.futuredns.eu.org`              | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.de.futuredns.eu.org&name=FutureDNSDoT), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.de.futuredns.eu.org&name=FutureDNSDoT)                     |
| DNS-over-QUIC        | `quic://dns.de.futuredns.eu.org`             | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.de.futuredns.eu.org&name=FutureDNSDoQ), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.de.futuredns.eu.org&name=FutureDNSDoQ)                   |

#### Andere DNS-Server mit No-Logging-Richtlinie

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

#### DNS-Server mit minimaler Protokollierung/Einschränkungen

Diese Server verwenden einige Protokollierung, selbstsignierte Zertifikate oder keine Unterstützung für den strikten Modus.

| Protokoll    | Adresse                                                                                                           |                                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Anbieter: `NIC Chile` Hostname: `dnsotls.lab.nic.cl` IP: `200.1.123.46` und IPv6: `2001:1398:1:0:200:1:123:46`    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Anbieter: `OARC` Hostname: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` und IPv6: `2620:FF:C000:0:1::64:25` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/) bietet einen kostenlosen DNS-Dienst ohne Protokollierung und mit aktiviertem DNSSEC.

| Protokoll      | Adresse                             |                                                                                                                                                                                                                   |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` und `45.11.45.11` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=185.222.222.222&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` und `2a11::`               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a09::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) ist ein datenschutzfreundlicher DNS-Anbieter mit jahrelanger Erfahrung in der Entwicklung von Auflösungsdiensten für Domainnamen. Sein Ziel ist es, einen schnelleren, genaueren und stabileren rekursiven Auflösungsdienst zu bieten.

| Protokoll      | Adresse                         |                                                                                                                                                                                                         |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=119.29.29.29&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                           |
| DNS, IPv6      | `2402:4e00::`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2402:4e00::&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2402:4e00::&name=)                                             |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub)   |
| DNS-over-HTTPS | `https://sm2.doh.pub/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.doh.pub), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                           |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo) ist ein DNS-Dienst von WatchGuard, der verhindert, dass Menschen mit bösartigen Inhalten in Kontakt kommen.

| Protokoll | Adresse                            |                                                                                                                                                                 |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` und `52.3.100.184` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=54.174.40.213&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### dns0.eu

[dns0.eu](https://www.dns0.eu) ist ein kostenloser, souveräner und DSGVO-konformer rekursiver DNS-Auflösungsdienst mit einem starken Fokus auf Sicherheit zum Schutz der Bürger und Organisationen der Europäischen Union.

| Protokoll      | Adresse                          |                                                                                                                                                                                  |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.110.81.0` und `185.253.5.0` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=193.110.81.0&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`          | [Zu AdGuard hinzufügen](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`             | [Zu AdGuard hinzufügen](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://zero.dns0.eu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) ist ein kostenloser alternativer DNS-Dienst von Dyn.

| Protokoll | Adresse                             |                                                                                                                                                                 |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` und `216.146.36.36` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=216.146.35.35&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) ist ein kostenloser anonymer DNS-Resolver von Freenom World.

| Protokoll | Adresse                         |                                                                                                                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` und `80.80.81.81` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=80.80.80.80&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) ist ein kostenloser, globaler DNS-Auflösungsdienst, den Sie als Alternative zu Ihrem derzeitigen DNS-Anbieter nutzen können.

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` und `8.8.4.4`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=8.8.8.8&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` und `2001:4860:4860::8844` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor ist ein kostenloser alternativer DNS-Dienst von Hurricane Electric mit Anycast.

| Protokoll      | Adresse                          |                                                                                                                                                                                                                           |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=74.82.42.42&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=74.82.42.42&name=)                                                               |
| DNS, IPv6      | `2001:470:20::2`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:470:20::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:470:20::2&name=)                                                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) bietet öffentlich zugängliche DNS mit QNAME-Minimierung, Endpunkte in Deutschland, Singapur, Schweden, dem Vereinigten Königreich und den Vereinigten Staaten (Dallas und New York).

#### Ohne Filterung

| Protokoll      | Adresse                             |                                                                                                                                                                                                                             |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### Sperren von Werbung

| Protokoll      | Adresse                                     |                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### Sperren von Werbung und Malware

| Protokoll      | Adresse                                  |                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### Sperren von Werbung, Malware und sozialen Medien

| Protokoll      | Adresse                                      |                                                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### Sperren von Werbung + Malware + Erotik + Glücksspiel

| Protokoll      | Adresse                                    |                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### Sperren von Werbung + Malware + Erotik + Glücksspiel + Soziale Medien

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) ist ein Anycast-Internet-Filtersystem, das Kinder vor ungeeigneten Websites und missbräuchlichen Inhalten schützt.

| Protokoll      | Adresse                                                     |                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` und `180.131.145.145`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=180.131.144.144&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Zu AdGuard hinzufügen](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                    |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) ist ein kostenloser Cloud-basierter rekursiver DNS-Dienst, der einen schnellen und zuverlässigen Zugang zu Websites und Online-Anwendungen mit integrierter Sicherheit und Bedrohungsanalyse bietet.

#### Zuverlässigkeit und Leistung 1

Diese Server bieten zuverlässige und schnelle DNS-Abfragen, ohne bestimmte Kategorien zu sperren.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` und `156.154.71.1`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` und `2610:a1:1019::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Zuverlässigkeit und Leistung 2

Diese Server bieten zuverlässige und schnelle DNS-Abfragen, ohne bestimmte Kategorien zu blockieren, und verhindern auch die Umleitung von NXDomain-Antworten (nicht existierende Domains) auf Zielseiten.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` und `156.154.71.5`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=156.154.70.5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` und `2610:a1:1019::5` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Schutz vor Bedrohungen

Diese Server bieten Schutz vor bösartigen Domains und verfügen außerdem über die Merkmale „Zuverlässigkeit und Leistung”.

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

### NextDNS

[NextDNS](https://nextdns.io/) bietet öffentlich zugängliche, nicht filternde Resolver ohne Protokollierung zusätzlich zu seinen konfigurierbaren, filternden Freemium-Resolvern mit optionaler Protokollierung.

#### Extrem niedrige Latenzzeit

| Protokoll      | Adresse                  |                                                                                                                                                                                                                                   |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokoll      | Adresse                          |                                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS Resolver mit Sperrung von: Werbung, Tracking, Adware, Malware, bösartigen Aktivitäten und Phishing-Unternehmen, sperrt ca. 1 Mio. Domains. Verfügt über 24h/48h-Protokolle zur Eindämmung von DDoS/Flood-Angriffen.

#### Adaptive Filterung (ADA)

Empfohlen für die meisten Benutzer, sehr flexible Filterung mit Sperrung der meisten Werbenetzwerke, Ad-Tracking, Malware und Phishing-Domains.

| Protokoll      | Adresse                             |                                                                                     |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Zu AdGuard hinzufügen](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Zu AdGuard hinzufügen](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strenge Filterung (RIC)

Strengere Filterrichtlinien mit Sperrung von Werbung, Marketing, Tracking, Clickbait, Schüfen von Kryptowährung, bösartigen und Phishing-Domains.

| Protokoll      | Adresse                             |                                                                                     |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Zu AdGuard hinzufügen](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Zu AdGuard hinzufügen](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

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

Ungesicherte DNS-Server bieten weder Sicherheitsblocklisten noch DNSSEC oder EDNS Client Subnet.

| Protokoll      | Adresse                                                           |                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` und `149.112.112.10`                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=9.9.9.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:fe::10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                        |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)-Unterstützung

EDNS Client Subnet ist eine Methode, die Komponenten von Endbenutzer-IP-Adressdaten in Anfragen einschließt, die an autoritative DNS-Server gesendet werden. Es bietet eine Sicherheits-Sperrliste, DNSSEC, EDNS Client Subnet.

| Protokoll      | Adresse                                                        |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` und `149.112.112.11`                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=9.9.9.11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:fe::11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                        |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                                  |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Quadrant Security

[Quadrant Security](https://www.quadrantsec.com/post/public-dns-resolver-with-tls-https-support) bietet DoH- und DoT-Server für die Allgemeinheit an, die weder protokolliert noch gefiltert werden.

| Protokoll      | Adresse                        |                                                                                                                                                                                                                   |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.qis.io/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io) |
| DNS-over-TLS   | `tls://dns-tls.qis.io`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)         |

### Rabbit DNS

[Rabbit DNS](https://rabbitdns.org/) ist ein datenschutzorientierter DoH-Dienst, der keine Nutzerdaten sammelt.

#### Ohne Filterung

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.rabbitdns.org/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org) |

#### Sicherheitsfilter

| Protokoll      | Adresse                                    |                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://security.rabbitdns.org/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org) |

#### Familienfilter

| Protokoll      | Adresse                                  |                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.rabbitdns.org/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org) |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) stellt einen DNS-over-HTTPS-Dienst bereit, der als Cloudflare Worker ausgeführt wird, sowie einen DNS-over-TLS-Dienst, der als Fly.io Worker mit konfigurierbaren Sperrlisten ausgeführt wird.

#### Ohne Filterung

| Protokoll      | Adresse                         |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) ist ein globales Anycast-Netzwerk, das aus Servern auf der ganzen Welt besteht — Amerika, Europa, Afrika, Australien und dem Fernen Osten, um eine schnelle und zuverlässige DNS-Auflösung von jedem Punkt der Welt zu gewährleisten.

| Protokoll | Adresse                           |                                                                                                                                                               |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` und `195.46.39.40` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=195.46.39.39&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) ist ein DNS-Dienst, der mehr als 50 Kategorien wie Pornos, Werbung, Malware und beliebte Social-Media-Seiten sperrt und damit das Surfen im Internet sicherer macht.

| Protokoll      | Adresse                                                           |                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` und `104.197.28.121`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=104.155.237.225&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)            |

### 360 Secure DNS

**360 Secure DNS** ist ein branchenführender rekursiver DNS-Service mit fortschrittlichem Schutz vor Netzwerksicherheitsbedrohungen.

| Protokoll      | Adresse                            |                                                                                                                                                                                                                   |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` und `218.30.118.6`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=101.226.4.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` und `140.207.198.6` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=123.125.81.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) ist ein kostenloser DNS-Dienst, der im Vergleich zu Alternativen eine verbesserte DNS-Stabilität und Sicherheit bietet. Verisign respektiert die Privatsphäre der Nutzer: Das Unternehmen verkauft weder öffentliche DNS-Daten an Dritte noch leitet es die Anfragen der Nutzer um, um ihnen Werbung anzuzeigen.

| Protokoll | Adresse                                 |                                                                                                                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` und `64.6.65.6`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=64.6.64.6&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` und `2620:74:1c::2:2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) ist ein zwischenspeichernder, rekursiver, öffentlicher DoH- und DoT-Auflösungsdienst, der vom Site Reliability Engineering (Traffic)-Team der Wikimedia Foundation in allen sechs Wikimedia-Rechenzentren mit Anycast betrieben und verwaltet wird.

| Protokoll      | Adresse                                                                        |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Hostname: `wikimedia-dns.org` IP: `185.71.138.138` and IPv6: `2001:67c:930::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [Zu AdGuard VPN hinzufügen](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Regionale Resolver**

Regionale DNS-Resolver sind in der Regel auf bestimmte geografische Regionen ausgerichtet und bieten eine optimierte Leistung für Benutzer in diesen Gebieten. Diese Resolver werden oft von gemeinnützigen Organisationen, lokalen ISPs oder anderen Einrichtungen bereitgestellt.

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) betreibt DNS-Datenschutzdienste zum Schutz des DNS-Datenverkehrs und zur Diversifizierung der DNS-Auflöserlandschaft mit modernen Protokollen.

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS ist ein kostenloser alternativer DNS-Dienst von ByteDance in China. Der einzige DNS, der derzeit von ByteDance angeboten wird, unterstützt IPv4. DOH, DOT, DOQ und andere verschlüsselte DNS-Dienste werden in Kürze eingeführt.

| Protokoll | Adresse                         |                                                                                                                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` und `180.184.2.2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=180.184.1.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) schützt vor Diebstahl von persönlichen und finanziellen Daten. Hält Viren, Ransomware und andere Malware von Ihrem Zuhause fern.

#### Private

Im Modus „Private” gibt's nur DNS-Auflösung.

| Protokoll              | Adresse                                                                                             |                                                                                                                                                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` und `149.112.122.10`                                                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` und `2620:10A:80BC::10`                                                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` und IPv6: `2620:10A:80BB::10` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

Im Modus „Protected” gibt's Schutz vor Malware und Phishing.

| Protokoll                | Adresse                                                                                               |                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` und `149.112.122.20`                                                                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.20&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` und `2620:10A:80BC::20`                                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — Geschützt | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` und IPv6: `2620:10A:80BB::20` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Familie

Im Modus „Family“, Protected und Sperren von Inhalten für Erwachsene.

| Protokoll                     | Adresse                                                                                            |                                                                                                                                                                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                     | `149.112.121.30` und `149.112.122.30`                                                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=149.112.121.30&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6                     | `2620:10A:80BB::30` und `2620:10A:80BC::30`                                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS                | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — Familienschutz | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` und IPv6: `2620:10A:80BB::30` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) ist ein schneller und sicherer DNS-Dienst mit Schutz vor Werbung, Tracking und Phishing.

| Protokoll      | Adresse                          |                                                                                                                                                                                                                                             |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.controld.com/comss` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com)           |
| DNS-over-TLS   | `tls://comss.dns.controld.com`   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com)   |
| DNS-over-QUIC  | `quic://comss.dns.controld.com`  | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR sind Open DNSSEC validierende Auflösungssysteme. CZ.NIC erhebt keine persönlichen Daten und sammelt auch keine Informationen auf Seiten, auf denen Geräte persönliche Daten senden.

| Protokoll      | Adresse                                     |                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` und `185.43.135.1`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=193.17.47.1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` und `2001:148f:fffe::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

Die „[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/)“ ist ein öffentlicher Auflösungsdienst, der von der Digitalen Gesellschaft betrieben wird. Standort ist Zürich, Schweiz.

| Protokoll      | Adresse                                                                                        |                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` und IPv6: `2a05:fc84::42` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` und IPv6: `2a05:fc84::43`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

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

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver)-Server, die von der [Restena Foundation](https://www.restena.lu/) bereitgestellt werden.

| Protokoll      | Adresse                                                                             |                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` und IPv6: `2001:a18:1::29` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` und IPv6: `2001:a18:1::29`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)                         |

### 114DNS

[114DNS](https://www.114dns.com) ist ein professioneller und hochzuverlässiger DNS-Dienst.

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

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) ist ein öffentlicher DNS-Dienst, der von der Internet Initiative Japan bereitgestellt wird. Er sperrt auch Inhalte, die dem Missbrauch von Kindern betreffen.

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) ist ein kostenloser, sicherheitsorientierter rekursiver DNS-Dienst, der Malware sperrt. Er bietet DNSSEC-Unterstützung und speichert keine Protokolle.

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `155.248.232.226`                     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

### LibreDNS

[LibreDNS](https://libredns.gr/) ist ein öffentlicher verschlüsselter DNS-Dienst, der von [LibreOps](https://libreops.cc/) angeboten wird.

| Protokoll      | Adresse                                      |                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=88.198.92.222&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/) ist ein sicherer, schneller, kostenloser Nischen-DNS-Dienst mit der Möglichkeit, bösartige Domains zu sperren.

#### Pure Edition

| Protokoll | Adresse                          |                                                                                                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` und `52.80.52.52` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=117.50.10.10&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokoll | Adresse                          |                                                                                                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` und `52.80.66.66` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=117.50.11.11&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) ist ein kostenloser alternativer DNS-Dienst von OpenNIC Project.

| Protokoll | Adresse                 |                                                                                                                                                                                 |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=217.160.70.42&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=217.160.70.42&name=)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

Dies ist nur einer der verfügbaren Server, die vollständige Liste finden Sie [hier](https://servers.opennic.org/).

### Quad101

[Quad101](https://101.101.101.101) ist ein kostenloser alternativer DNS-Dienst ohne Protokollierung von TWNIC (Taiwan Network Information Center).

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                           |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` und `101.102.103.104` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=101.101.101.101&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` und `2001:de4::102`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:de4::101&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/)-Lösungen für Inhaltsfilterung und Internetsicherheit.

| Protokoll | Adresse          |                                                                                                                                                                   |
| --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=193.58.251.251&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) ist ein öffentlicher Schweizer DNS-Dienst, der von [switch.ch](https://www.switch.ch/) bereitgestellt wird.

| Protokoll      | Adresse                                                                          |                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Anbieter: `dns.switch.ch` IP: `130.59.31.248`                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=130.59.31.248&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Anbieter: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` und IPv6: `2001:620:0:ff::2` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/) ist ein öffentlicher DNS-Dienst mit Sitz in Südkorea, der die IP des Nutzers nicht protokolliert. Werbung und Tracker werden gesperrt.

#### SK Broadband

| Protokoll      | Adresse                         |                                                                                                                                                                                                                       |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud South Korea

| Protokoll      | Adresse                                   |                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) ist ein kostenloser rekursiver DNS-Dienst. Die Server von Yandex.DNS befinden sich in Russland, den GUS-Ländern und Westeuropa. Die Anfragen werden vom nächstgelegenen Datenzentrum bearbeitet, das hohe Verbindungsgeschwindigkeiten bietet.

#### Basic

Im „Basic”-Modus findet keine Datenverkehrsfilterung statt.

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` und `77.88.8.1`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` und `2a02:6b8:0:1::feed:0ff` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Sicher

Im Modus „Sicher” ist ein Schutz vor infizierten und betrügerischen Websites gewährleistet.

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` und `77.88.8.2`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` und `2a02:6b8:0:1::feed:bad` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Familie

Im Modus „Familie” wird Schutz vor infizierten, betrügerischen und nicht jugendfreien Websites geboten.

| Protokoll      | Adresse                                           |                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` und `77.88.8.7`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` und `2a02:6b8:0:1::feed:a11` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`     | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Kleine individuelle Resolver**

Dies sind DNS-Resolver, die normalerweise von Enthusiasten oder kleinen Gruppen betrieben werden. Sie haben zwar nicht den Umfang und die Redundanz größerer Anbieter, legen aber oft Wert auf Datenschutz und Transparenz oder bieten spezielle Funktionen.

Wir werden nicht in der Lage sein, ihre Verfügbarkeit angemessen zu überwachen. **Die Verwendung erfolgt auf eigenes Risiko.**

### AhaDNS

[AhaDNS](https://ahadns.com/) ist ein von Fredrik Pettersson angebotener DNS-Dienst ohne Protokollierung und mit Werbeblockern.

#### Niederlande

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=5.2.75.75&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Los Angeles

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=45.67.219.208&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### Arapurayil

[Arapurayil](https://dns.arapurayil.com) ist ein persönlicher DNS-Dienst mit Sitz in Mumbai, Indien.

Nicht protokollierend | Filtert Werbung, Tracker, Phishing, usw. | DNSSEC | QNAME-Minimierung | Kein EDNS Client-Subnetz.

| Protokoll      | Adresse                                                      |                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Zu AdGuard hinzufügen](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                    |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) ist ein Server, der auf einem Digital Ocean-Droplet in der BLR1-Region bereitsteht. Betreut von Abhay Rana alias Nemo.

| Protokoll      | Adresse                                                          |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Zu AdGuard hinzufügen](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) ist ein persönlicher DNS-Dienst, der in Trondheim, Norwegen, gehostet wird und eine AdGuard Home-Infrastruktur nutzt.

Sperrt mehr Werbung und Malware als AdGuard DNS dank einer fortgeschritteneren Syntax, ist aber unempfindlicher gegenüber Trackern und sperrt rechtsextreme Boulevardblätter und die meisten Imageboards. Die Protokollierung dient dazu, die verwendeten Filterlisten zu verbessern (z. B. durch Aufhebung der Sperrung von Websites, die nicht hätten gesperrt werden dürfen) und die günstigsten Zeitpunkte für die Aktualisierung des Serversystems zu ermitteln.

| Protokoll      | Adresse                                               |                                                                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |
| DNS, IPv6      | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |
| DNSCrypt, IPv4 | Unterschiedlich; siehe Link oben.                     |                                                                                                                                                                                                                                                                                                               |

### DNS Forge

[DNS Forge](https://dnsforge.de/) ist ein redundanter DNS-Auflösungsdienst mit einem Werbeblocker und ohne Protokollierung, der von [adminforge](https://adminforge.de/) bereitgestellt wird.

| Protokoll      | Adresse                                               |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` und `176.9.1.117`                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=176.9.93.198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` und `2a01:4f8:141:316d::117` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                   | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### dnswarden

| Protokoll      | Adresse                                |                                                                                                                                                                                                                                                            |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

Sie können auch [einen benutzerdefinierten DNS-Server](https://dnswarden.com/customfilter.html) konfigurieren, um Werbung zu sperren oder Inhalte für Erwachsene zu filtern.

### FFMUC DNS

[FFMUC](https://ffmuc.net/) bietet kostenlose DNS-Server, die von „Freifunk München“ bereitgestellt werden.

| Protokoll            | Adresse                                                                |                                                                                                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                              |
| DNSCrypt, IPv6       | Anbieter: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                               |

### fvz DNS

[fvz DNS](http://meo.ws/) ist ein öffentlicher primärer OpenNIC Tier2 Anycast-DNS-Resolver von Fusl.

| Protokoll      | Adresse                                                              |                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Zu AdGuard hinzufügen](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Zu AdGuard hinzufügen](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testet die von ibksturm bereitgestellten Server. OPENNIC, DNSSEC, keine Filterung, keine Protokollierung.

| Protokoll            | Adresse                                                                 |                                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Hostname: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Anbieter: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`          | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                      |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) wird von Elias Ojala, Finnland, bereitgestellt.

| Protokoll      | Adresse                                  |                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Marbled Fennec

Marbled Fennec Networks hostet DNS-Resolver, die in der Lage sind, sowohl OpenNIC- als auch ICANN-Domains aufzulösen

| Protokoll      | Adresse                                   |                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### momou! DNS

[momou&#33; DNS](https://dns.momou.ch/) provides DoH & DoT resolvers with three levels of filtering

#### Standard

Sperrt Werbung, Tracker und Malware

| Protokoll      | Adresse                          |                                                                                                                                                                                                                           |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://dns.momou.ch`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch)                         |

#### Kindersicherung

Kinderfreundlicher Filter, der auch Werbung, Tracker und Malware sperrt

| Protokoll      | Adresse                               |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/kids` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://kids.dns.momou.ch`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch)               |

#### Ohne Filterung

| Protokoll      | Adresse                                     |                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/unfiltered` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://unfiltered.dns.momou.ch`             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch)   |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) ist ein kleines Hobbyprojekt zum Sperren von Werbung über DNS.

#### OSZX DNS

Bei diesem Dienst handelt es sich um ein kleines DNS-Hobbyprojekt mit D-o-H, D-o-T und DNSCrypt v2-Unterstützung, das Werbung sperrt.

| Protokoll      | Adresse                                                                  |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=51.38.83.141&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                      |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Zu AdGuard hinzufügen](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                       |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                          | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                      | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

Diese Server sperren keine Werbung, führen keine Protokolle und DNSSEC ist aktiviert.

| Protokoll      | Adresse                                                                       |                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=51.38.82.198&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                    | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                                |
| DNSCrypt, IPv6 | Anbieter: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                           | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                       | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blocks over 140K ads, ad-tracking, malware, and phishing domains. Keine Protokollierung, kein ECS, DNSSEC-Validierung, kostenlos!

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

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy-focused DNS service provided by Sebastian Schmidt. No logging, DNSSEC validation.

#### DNS Server 1

| Protokoll      | Adresse                                                    |                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=45.76.113.31&name=), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Anbieter: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Zu AdGuard hinzufügen](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                       |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) is a personal DNS server located in Vietnam and intended for personal and small-scale use. Er bietet Werbeblocker, Schutz vor Malware/Phishing, Filter für nicht jugendfreie Inhalte und DNSSEC-Validierung.

| Protokoll      | Adresse                                 |                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.70.12.129`                         | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS)                                                 |
| DNS, IPv6      | `2001:df4:4c0:1::399:1`                 | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS)                                 |
| DNS-over-QUIC  | `quic://rx.techomespace.com`            | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS)                       |
| DNS-over-HTTPS | `https://rx.techomespace.com/dns-query` | [Zu AdGuard hinzufügen](adguard:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS), [Zu AdGuard VPN hinzufügen](adguardvpn:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS) |

### LaxrFar DNS

[LaxrFar DNS](https://laxrfar.xyz/) is a DNS that is focused on ad blocking, privacy, malware protection and has a strict no-logging policy.

| Protokoll | Adresse         |                                                                                                                                                   |
| --------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `23.176.184.32` | [Add to AdGuard](adguard:add_dns_server?address=23.176.184.32&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=23.176.184.32&name=) |
