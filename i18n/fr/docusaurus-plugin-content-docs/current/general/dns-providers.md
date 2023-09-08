---
title: Fournisseurs de DNS connus
sidebar_position: 3
---

:::info

Nous proposons ici une liste de fournisseurs DNS fiables. Pour les utiliser, installez d'abord le Bloqueur AdGuard ou AdGuard VPN sur votre appareil. Ensuite, sur le même appareil, cliquez sur le lien vers un fournisseur dans cet article

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) est une solution alternative pour le blocage des publicités, la protection de la vie privée et le contrôle parental. Il fournit le nombre nécessaire de fonctions de protection contre les publicités en ligne, les traqueurs et l'hameçonnage, quels que soient la plateforme et l'appareil que vous utilisez.

#### Par défaut

Ces serveurs bloquent les publicités, le suivi et l'hameçonnage.

| Protocole      | Adresse                                                                     |                                                                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` et `94.140.15.15`                                            | [Ajouter à AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` et `2a10:50c0::ad2:ff`                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `tls://dns.adguard-dns.com`                                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt.default.ns1.adguard.com` IP : `94.140.14.14:5443` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                       |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt.default.ns1.adguard.com` IP : `94.140.14.14:5443` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                              |

#### Protection Familiale

Ces serveurs fournissent les fonctionnalités par défaut + Blocage des sites web pour adultes + Recherche sécurisée.

| Protocole      | Adresse                                                                            |                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` et `94.140.15.16`                                                   | [Ajouter à AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6      | `2a10:50c0::bad1:ff` et `2a10:50c0::bad2:ff`                                       | [Ajouter à AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                         | [Ajouter à AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `tls://family.adguard-dns.com`                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt.family.ns1.adguard.com` IP : `94.140.14.15:5443`         | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                              |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt.family.ns1.adguard.com` IP : `[2a10:50c0::bad1:ff]:5443` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                    |

#### Sans filtrage

Chacun de ces serveurs fournit une connexion sécurisée et fiable, mais contrairement aux serveurs "Standard" et "Protection Famille", ils ne filtrent rien.

| Protocole      | Adresse                                                                             |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` et `94.140.14.141`                                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` et `2a10:50c0::2:ff`                                              | [Ajouter à AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt.unfiltered.ns1.adguard.com` IP : `94.140.14.140:5443`     | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                          |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt.unfiltered.ns1.adguard.com` IP : `[2a10:50c0::1:ff]:5443` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                             |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) est un service DNS récursif gratuit. Les serveurs de Yandex.DNS sont situés en Russie, dans les pays de la CEI et en Europe occidentale. Les requêtes des utilisateurs sont traitées par le centre de données le plus proche qui offre des vitesses de connexion élevées.

#### Basique

En mode "Basique", il n'y a pas de filtrage du trafic.

| Protocole      | Adresse                                                                    |                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` et `77.88.8.1`                                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=77.88.8.8&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` et `2a02:6b8:0:1::feed:0ff`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.browser.yandex.net` IP : `77.88.8.78:15353` | [Ajouter à AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)        |

#### Sûr

En mode "Sûr", la protection contre les sites infectés et frauduleux est assurée.

| Protocole | Adresse                                          |                                                                                                                                                                   |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` et `77.88.8.2`                      | [Ajouter à AdGuard](adguard:add_dns_server?address=77.88.8.88&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=)                 |
| DNS, IPv6 | `2a02:6b8::feed:bad` et `2a02:6b8:0:1::feed:bad` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Famille

En mode "Famille", la protection contre les sites infectés, frauduleux et pour adultes est assurée.

| Protocole | Adresse                                          |                                                                                                                                                                   |
| --------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` et `77.88.8.7`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=77.88.8.3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=)                   |
| DNS, IPv6 | `2a02:6b8::feed:a11` et `2a02:6b8:0:1::feed:a11` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) est un service DNS qui offre un filtrage personnalisable. Ce service offre un moyen sûr de naviguer sur le web sans contenu inapproprié.

#### Filtre familial

Bloque l'accès à tous les sites pour adultes, pornographiques et explicites, y compris les proxy & VPN et les sites à contenu mixte.

| Protocole      | Adresse                                                       |                                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` et `185.228.169.168`                        | [Ajouter à AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` et `2a0d:2a00:2::`                            | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Fournisseur : `cleanbrowsing.org` IP : `185.228.168.168:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                              |
| DNSCrypt, IPv6 | Fournisseur : `cleanbrowsing.org` IP : `[2a0d:2a00:1::]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                              |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`            | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`                   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Filtre pour adultes

Moins restrictif que le filtre familial, il ne bloque que l'accès aux contenus pour adultes et aux domaines malveillants et de phishing.

| Protocole      | Adresse                                                        |                                                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` et `185.228.169.11`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` et `2a0d:2a00:2::1`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Fournisseur : `cleanbrowsing.org` IP : `185.228.168.10:8443`   | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                           |
| DNSCrypt, IPv6 | Fournisseur : `cleanbrowsing.org` IP : `[2a0d:2a00:1::1]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                        |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`              | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                     | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Filtre de sécurité

Bloque l'hameçonnage, le spam et les domaines malveillants.

| Protocole      | Adresse                                              |                                                                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` et `185.228.169.9`                   | [Ajouter à AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` et `2a0d:2a00:2::2`                 | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) est un service de résolution de noms de domaine qui résout vos requêtes DNS par le biais du réseau mondial de serveurs DNS. Supprime les publicités excessives et protège contre l'hameçonnage et les logiciels espions.

| Protocole      | Adresse                                                                    |                                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` et `8.20.247.20`                                              | [Ajouter à AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)          |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP : `8.20.247.2` | [Ajouter à AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) est un service DNS récursif gratuit basé sur le cloud qui offre un accès rapide et fiable aux sites et aux applications en ligne avec une sécurité intégrée et des renseignements sur les menaces.

#### Fiabilité & Performance 1

Ces serveurs fournissent des recherches DNS fiables et rapides sans bloquer aucune catégorie spécifique.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` et `156.154.71.1`       | [Ajouter à AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` et `2610:a1:1019::1` | [Ajouter à AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Fiabilité & Performance 2*

Ces serveurs fournissent des recherches DNS fiables et rapides sans bloquer aucune catégorie spécifique et empêchent également de rediriger les réponses NXDomain (domaine inexistant) vers les pages de destination.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` et `156.154.71.5`       | [Ajouter à AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` et `2610:a1:1019::5` | [Ajouter à AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Protection contre les menaces

Ces serveurs offrent une protection contre les domaines malveillants et comprennent également des fonctions de "Fiabilité & Performance".

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` et `156.154.71.2`       | [Ajouter à AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` et `2610:a1:1019::2` | [Ajouter à AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Sécurité Famille

Ces serveurs bloquent les contenus pour adultes et comprennent également les fonctions "Fiabilité & Performance" et "Protection contre les menaces".

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` et `156.154.71.3`       | [Ajouter à AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` et `2610:a1:1019::3` | [Ajouter à AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Sécurité Entreprise

Ces serveurs permettent de bloquer les contenus indésirables et les contenus chronophages et comprennent également les fonctions "Fiabilité & Performance" + "Protection contre les menaces" + "Sécurité Famille".

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` et `156.154.71.4`       | [Ajouter à AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` et `2610:a1:1019::4` | [Ajouter à AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) est un service qui étend le DNS en incorporant des fonctionnalités telles que le filtrage de contenu et la protection contre le phishing sans aucun temps d'arrêt.

#### Standard

Serveurs DNS avec filtrage personnalisé qui protège votre appareil contre les logiciels malveillants.

| Protocole      | Adresse                                                            |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` et `208.67.220.220`                               | [Ajouter à AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` et `2620:119:53::53`                             | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.opendns.com` IP : `208.67.220.220`  | [Ajouter à AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.opendns.com` IP : `[2620:0:ccc::2]` | [Ajouter à AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                               |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                                | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

Serveurs OpenDNS qui bloquent les contenus pour adultes.

| Protocole      | Adresse                                                           |                                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` et `208.67.220.123`                              | [Ajouter à AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.opendns.com` IP : `208.67.220.123` | [Ajouter à AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                    |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`                  | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) est un service de résolution DNS gratuit et global que vous pouvez utiliser comme alternative à votre fournisseur DNS actuel.

| Protocole      | Adresse                                          |                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` et `8.8.4.4`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` et `2001:4860:4860::8844` | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                               | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) est un service DNS gratuit et rapide qui fonctionne comme un serveur de noms récursif fournissant une résolution de nom de domaine pour n'importe quel hôte sur Internet.

#### Standard

| Protocole            | Adresse                                          |                                                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` et `1.0.0.1`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` et `2606:4700:4700::1001` | [Ajouter à AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`         | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Blocage des logiciels malveillants uniquement

| Protocole      | Adresse                                          |                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` et `1.0.0.2`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` et `2606:4700:4700::1002` | [Ajouter à AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [Ajouter à AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Blocage des logiciels malveillants et des contenus pour adultes

| Protocole            | Adresse                                          |                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` et `1.0.0.3`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` et `2606:4700:4700::1003` | [Ajouter à AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) est une plateforme DNS anycast gratuite et récursive qui offre une protection de haute performance, de confidentialité et de sécurité contre l'hameçonnage et les logiciels espions. Les serveurs Quad9 ne fournissent pas de composante de censure.

#### Standard

Des serveurs DNS réguliers qui offrent une protection contre l'hameçonnage et les logiciels espions. Ils comprennent des listes de blocage, la validation DNSSEC et d'autres fonctions de sécurité.

| Protocole      | Adresse                                                             |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` et `149.112.112.112`                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP : `2620:fe::fe:9`                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.quad9.net` IP : `9.9.9.9:8443`       | [Ajouter à AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.quad9.net` IP : `[2620:fe::fe]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                      |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                                   | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                               | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Non sécurisé

Les serveurs DNS non sécurisés ne fournissent pas de listes de blocage de sécurité, de DNSSEC ou de sous-réseau client EDNS.

| Protocole      | Adresse                                                             |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` et `149.112.112.10`                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP : `2620:fe::fe:10`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.quad9.net` IP : `9.9.9.10:8443`      | [Ajouter à AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                    |
| DNSCrypt, IPv6 | Provider : `2.dnscrypt-cert.quad9.net` IP : `[2620:fe::fe:10]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://fr.m.wikipedia.org/wiki/EDNS) support

Le sous-réseau du client EDNS est une méthode qui inclut les composants des données d'adresse IP de l'utilisateur final dans les demandes envoyées aux serveurs DNS faisant autorité. Il fournit une liste de blocage de sécurité, DNSSEC, sous-réseau client EDNS.

| Protocole      | Adresse                                                             |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` et `149.112.112.11`                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP : `2620:fe::fe:11`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.quad9.net` IP : `9.9.9.11:8443`      | [Ajouter à AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                    |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.quad9.net` IP : `[2620:fe::11]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### DNS public Verisign

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) est un service DNS gratuit qui offre une stabilité et une sécurité DNS améliorées par rapport à d'autres alternatives. Verisign respecte la vie privée des utilisateurs : elle ne vend pas de données DNS publiques à des tiers et ne redirige pas les requêtes des utilisateurs pour leur proposer des publicités.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` et `64.6.65.6`             | [Ajouter à AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` et `2620:74:1c::2:2` | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) est un service DNS public suisse fourni par [switch.ch](https://www.switch.ch/).

| Protocole      | Adresse                                                                              |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Fournisseur : `dns.switch.ch` IP : `130.59.31.248`                                   | [Ajouter à AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Fournisseur : `dns.switch.ch` IPv6 : `2001:620:0:ff::2`                              | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Nom d'hôte : `tls://dns.switch.ch` IP : `130.59.31.248` et IPv6 : `2001:620:0:ff::2` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) est un service DNS alternatif gratuit de Dyn.

| Protocole | Adresse                            |                                                                                                                                                         |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` et `216.146.36.36` | [Ajouter à AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) est un serveur rapide et gratuit sans connexion avec une fonction de protection de la vie privée.

| Protocole | Adresse                                                      |                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` et `84.200.70.40`                             | [Ajouter à AdGuard](adguard:add_dns_server?address=84.200.69.80&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` et `2001:1608:10:25::9249:d69b` | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions de filtrage de contenu et de sécurité Internet.

| Protocole | Adresse          |                                                                                                                                                           |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Ajouter à AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) est un service DNS rapide et sécurisé avec une protection contre les publicités, le pistage et le phishing.

#### Serveur DNS Ouest (principal)

| Protocole      | Adresse                           |                                                                                                                                                                                                                       |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### Serveur DNS Est (Sibérie et Extrême-Orient)

| Protocole      | Adresse                                |                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) est un réseau mondial d'anycast constitué de serveurs répartis à travers la planète - des Amériques à l'Europe, en passant par l'Afrique, l'Australie et jusqu'à l'Extrême-Orient - offrant une résolution DNS à la fois fulgurante et infaillible, accessible depuis n'importe quel point du globe.

| Protocole | Adresse                          |                                                                                                                                                       |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` et `195.46.39.40` | [Ajouter à AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protège contre le vol de données personnelles et financières. Protégez votre domicile contre les virus, les rançongiciels et autres logiciels malveillants.

#### Privé

En mode "Privé", la résolution DNS uniquement.

| Protocole            | Adresse                                                                                                 |                                                                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `149.112.121.10` et `149.112.122.10`                                                                    | [Ajouter à AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6            | `2620:10A:80BB::10` et `2620:10A:80BC::10`                                                              | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS       | `https://private.canadianshield.cira.ca/dns-query`                                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Privé | Nom d'hôte : `tls://private.canadianshield.cira.ca` IP : `149.112.121.10` et IPv6 : `2620:10A:80BB::10` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protégé

En mode "Protégé", protection contre les logiciels malveillants et l'hameçonnage.

| Protocole              | Adresse                                                                                                     |                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.20` et `149.112.122.20`                                                                        | [Ajouter à AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                           |
| DNS, IPv6              | `2620:10A:80BB::20` et `2620:10A:80BC::20`                                                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                     |
| DNS-over-HTTPS         | `https://protected.canadianshield.cira.ca/dns-query`                                                        | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protégé | Nom d'hôte : `tls://protected.canadianshield.cira.ca` IPv4 : `149.112.121.20` et IPv6 : `2620:10A:80BB::20` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                           |

#### Famille

En mode 'Famille', protection + blocage des contenus pour adultes.

| Protocole              | Adresse                                                                                     |                                                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.30` et `149.112.122.30`                                                        | [Ajouter à AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                               |
| DNS, IPv6              | `2620:10A:80BB::30` et `2620:10A:80BC::30`                                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                         |
| DNS-over-HTTPS         | `https://family.canadianshield.cira.ca/dns-query`                                           | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Famille | `tls://family.canadianshield.cira.ca` IPv4 : `149.112.121.30` et IPv6 : `2620:10A:80BB::30` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                           |

### OpenNIC DNS

[ OpenNIC DNS ](https://www.opennic.org/) est un service DNS alternatif gratuit proposé par le projet OpenNIC.

| Protocole | Adresse                                   |                                                                                                                                                             |
| --------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` et `169.239.202.202`    | [Ajouter à AdGuard](adguard:add_dns_server?address=185.121.177.177&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` et `2a05:dfc7:5353::53` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Un petit projet DNS amateur. Sans journalisation, Ethereum Name Service, DNSSEC ready & Filtrage des annonces, traqueurs, maliciels.

#### Serveur DNS de Finlande

| Protocole            | Adresse                                                                       |                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nom d'hôte : `tls://dot-fi.blahdns.com` IP : `95.216.212.177`                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Nom d'hôte : `https://doh-fi.blahdns.com/dns-query` IP : `95.216.212.177`     | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `95.216.212.177:8443`        | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `2a01:4f9:c010:43ce::1:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                          |

#### Serveur DNS du Japon

| Protocole            | Adresse                                                                                  |                                                                                                                                                                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nom d'hôte : `tls://dot-jp.blahdns.com` IP : `139.162.112.47`                            | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Nom d'hôte : `https://doh-jp.blahdns.com/dns-query`                                      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `139.162.112.47:8443`                   | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                              |

#### Serveur DNS Allemagne

| Protocole            | Adresse                                                                       |                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nom d'hôte : `tls://dot-de.blahdns.com` IP : `159.69.198.101`                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Nom d'hôte : `https://doh-de.blahdns.com/dns-query` IP : `159.69.198.101`     | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `159.69.198.101:8443`        | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6       | Fournisseur : `2.dnscrypt-cert.blahdns.com` IP : `2a01:4f8:1c1c:6b4b::1:8443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                          |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) vise à bloquer les sites web pour adultes. Il permet aux enfants et aux adultes de surfer sur Internet en toute sécurité sans craindre d'être suivis par des sites web malveillants.

| Protocole      | Adresse                                                         |                                                                                                                                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` et `78.47.64.161`                              | [Ajouter à AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` et `2a01:4f8:1c17:4df8::1`              | [Ajouter à AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Fournisseur : `dnsforfamily.com` IP : `94.130.180.225:`         | [Ajouter à AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                   |
| DNSCrypt, IPv6 | Fournisseur : `dnsforfamily.com` IP : `[2a01:4f8:1c0c:40db::1]` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                       |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR sont des résolveurs de validation de Open DNSSEC. CZ.NIC ne collecte pas de données personnelles et ne recueille pas d'informations sur les pages où les dispositifs envoient des données personnelles.

| Protocole      | Adresse                                    |                                                                                                                                                                                                   |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` et `185.43.135.1`            | [Ajouter à AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` et `2001:148f:fffe::1` | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [Ajouter à AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) est un service DNS récursif gratuit qui s'engage à fournir une résolution DNS rapide, stable et sécurisée pour la majorité des utilisateurs d'Internet. Il comprend la fonction AliGuard qui protège les utilisateurs contre diverses attaques et menaces.

| Protocole      | Adresse                               |                                                                                                                                                                                                                           |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` et `223.6.6.6`            | [Ajouter à AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` et `2400:3200:baba::1` | [Ajouter à AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

Service DNS anycast basé sur IPv6 avec de fortes capacités de sécurité et une protection contre les logiciels espions et les sites web malveillants. Il prend en charge le DNS64 pour fournir une résolution de nom de domaine uniquement pour les utilisateurs IPv6.

| Protocole      | Adresse                           |                                                                                                                                                                                                                       |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` et `240C::6644`      | [Ajouter à AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) est un système de filtrage Internet anycast qui protège les enfants des sites web inappropriés et des contenus abusifs.

| Protocole      | Adresse                                                          |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` et `180.131.145.145`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.nawala.id` IP : `180.131.144.144` | [Ajouter à AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                |

### 360 Secure DNS

**360 Secure DNS** est un service DNS récursif de pointe avec une protection avancée contre les menaces de sécurité du réseau.

| Protocole      | Adresse                           |                                                                                                                                                                                                           |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` et `218.30.118.6`   | [Ajouter à AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` et `140.207.198.6` | [Ajouter à AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) est un service DNS public géré par Internet Initiative Japan. Il bloque également le contenu pédopornographique.

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) est un fournisseur de DNS respectueux de la vie privée avec des années d'expérience dans le développement de services de résolution de noms de domaine, il vise à fournir aux utilisateurs un service de résolution récursive plus rapide, plus précis et plus stable.

| Protocole      | Adresse                          |                                                                                                                                                                                               |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` et `119.28.28.28` | [Ajouter à AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                  | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** est un service DNS professionnel et fiable.

#### Normal

Bloque les publicités et les sites web gênants.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` et `114.114.115.115` | [Ajouter à AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Sûr

Bloque les sites d'hameçonnage, les sites malveillants et autres sites dangereux.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` et `114.114.115.119` | [Ajouter à AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Famille

Ces serveurs bloquent les sites web pour adultes et les contenus inappropriés.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` et `114.114.115.110` | [Ajouter à AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) est un service DNS alternatif gratuit sans journalisation par TWNIC (Taiwan Network Information Center).

| Protocole      | Adresse                                |                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` et `101.102.103.104` | [Ajouter à AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` et `2001:de4::102`     | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** est un service DNS de niche sécurisé, rapide et gratuit avec une fonction de blocage des domaines malveillants.

#### Édition pure

| Protocole | Adresse                         |                                                                                                                                                       |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` et `52.80.52.52` | [Ajouter à AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Édition Bloc

| Protocole | Adresse                         |                                                                                                                                                       |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` et `52.80.66.66` | [Ajouter à AdGuard](adguard:add_dns_server?address=117.50.11.11&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) bloque plus de 140 000 publicités, domaines de suivi publicitaire, de logiciels malveillants et hameçonneurs. Sans journalisation, pas d'ECS, validation DNSSEC, gratuit !

#### Serveur DNS de Singapour

| Protocole      | Adresse                                                                         | Localisation                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                | [Ajouter à AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.dns.tiar.app` IP : `174.138.21.128:`             | [Ajouter à AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                           |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.dns.tiar.app` IP : `[2400:6180:0:d0::5f6e:4001]` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                          |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (mis en cache par un tiers)                  | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                           | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                            | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Serveur DNS du Japon

| Protocole      | Adresse                                                                             |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                    | [Ajouter à AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.jp.tiar.app` IP : `172.104.93.80:`                   | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                   |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.jp.tiar.app` IP : `[2400:8902::f03c:91ff:feda:c514]` | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                          |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                                   | [Ajouter à AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) est un service DNS ouvert, gratuit et public. Pas de redirection DNS, pas de journalisation.

| Protocole | Adresse                              |                                                                                                                                                           |
| --------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` et `172.104.49.100` | [Ajouter à AdGuard](adguard:add_dns_server?address=172.104.237.57&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` et `37.235.1.177`     | [Ajouter à AdGuard](adguard:add_dns_server?address=37.235.1.174&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) est un résolveur de DNS anonyme et gratuit par Freenom World.

| Protocole | Adresse                        |                                                                                                                                                     |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` et `80.80.81.81` | [Ajouter à AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### DNS OSZX

[OSZX DNS](https://dns.oszx.co/) est un petit projet DNS amateur bloquant les publicités.

#### Serveur OSZX

Ces serveurs ne bloquent pas les publicités, ne conservent pas de journaux et ont activé le protocole DNSSEC.

| Protocole      | Adresse                                                                       |                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                                | [Ajouter à AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.oszx.co` IP : `51.38.83.141:5353`              | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                  |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.oszx.co` IP : `[2001:41d0:801:2000::d64]:5353` | [Ajouter à AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                   |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                               | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                           | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

Ces serveurs ne bloquent pas les publicités, ne conservent pas de journaux et ont activé le protocole DNSSEC.

| Protocole      | Adresse                                                                            |                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                         | [Ajouter à AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.pumplex.com` IP : `51.38.82.198`                    | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                            |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.pumplex.com` IP : `[2001:41d0:801:2000::1b28]:5353` | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                            |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                                | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                            | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) exploite des services de confidentialité DNS pour aider à protéger le trafic DNS et à diversifier le paysage des résolveurs DNS en proposant des protocoles modernes.

| Protocole      | Adresse                                 |                                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) est un service DNS par Strongarm qui empêche les gens d'interagir avec des contenus malveillants.

| Protocole | Adresse                           |                                                                                                                                                         |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` et `52.3.100.184` | [Ajouter à AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) est un service DNS par SafeSurfer qui protège votre appareil des contenus nuisibles et pour adultes.

| Protocole      | Adresse                                                                |                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` et `104.197.28.121`                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.safesurfer.co.nz` IP : `104.197.28.121` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)        |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Un résolveur DNS sécurisé, privé et open-source avec protection contre les maliciels, blocage des publicités et sans journalisation. Dégoogling et Ungoogling de votre téléphone, tablette et ordinateur.

| Protocole      | Adresse                                                                            |                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.DeCloudUs-test` IP : `78.47.212.211:9443`           | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                               |
| DNSCrypt, IPv6 | Fournisseur : `2.dnscrypt-cert.DeCloudUs-test` IP : `[2a01:4f8:13a:250b::30]:9443` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                  |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                              | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                          | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) est géré par Elias Ojala, Finlande.

| Protocole      | Adresse                                  |                                                                                                                                                                                                                                                   |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) est un serveur qui tourne sur un droplet Digital Ocean dans la région BLR1. Maintenu par Abhay Rana aka Nemo.

| Protocole      | Adresse                                                               |                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.captnemo.in` IP : `139.59.48.222:4434` | [Ajouter à AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) fournit un service DNS gratuit sans journalisation, avec DNSSEC activé.

| Protocole      | Adresse                            |                                                                                                                                                                                                           |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` et `45.11.45.11` | [ Ajouter à AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                             |
| DNS, IPv6      | `2a09::` et `2a11::`               | [Ajouter à AdGuard](adguard:add_dns_server?address=2a09::&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://185.222.222.222`            | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) est un résolveur DNS redondant avec un bloqueur de publicités et aucune journalisation fournie par [adminforge](https://adminforge.de/).

| Protocole      | Adresse                                              |                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` et `176.9.1.117`                      | [Ajouter à AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` et `2a01:4f8:141:316d::117` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

Serveurs [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) fournis par [Restena Foundation](https://www.restena.lu/).

| Protocole      | Adresse                                                                              |                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP : `158.64.1.29` et IPv6 : `2001:a18:1::29` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP : `158.64.1.29` et IPv6 : `2001:a18:1::29`   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)|

### fvz DNS

[fvz DNS](http://meo.ws/) est le résolveur DNS Anycast OpenNIC Tier2 public principal de Fusl.

| Protocole      | Adresse                                                                   |                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.dnsrec.meo.ws` IP : `185.121.177.177:5353` | [Ajouter à AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.dnsrec.meo.ws` IP : `169.239.202.202`      | [Ajouter à AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) serveurs DNS gratuits fournis par Freifunk München.

| Protocole            | Adresse                                                                     |                                                                                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nom d'hôte : `tls://dot.ffmuc.net`                                          | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Nom d'hôte : `https://doh.ffmuc.net/dns-query`                              | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Fournisseur : `2.dnscrypt-cert.ffmuc.net` IP : `5.1.66.255:8443`            | [Ajouter à AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                            |
| DNSCrypt, IPv6       | Fournisseur : `2.dnscrypt-cert.ffmuc.net` IP : `[2001:678:e68:f000::]:8443` | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) est un résolveur public exploité par Digital Society. Se trouve à Zurich, Suisse.

| Protocole      | Adresse                                                                                         |                                                                                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP : `185.95.218.42` et IPv6 : `2a05:fc84::42` | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP : `185.95.218.43` et IPv6 : `2a05:fc84::43`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                           |

### LibreDNS

[LibreDNS](https://libredns.gr/) est un service DNS crypté public géré par [LibreOps](https://libreops.cc/).

| Protocole      | Adresse                                       |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                               | [ Ajouter à AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`           | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                 | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP : `116.202.176.26` | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

Serveurs de test [ibksturm DNS](https://ibksturm.synology.me/) fournis par ibksturm. OPENNIC, DNSSEC, sans filtrage, sans journalisation.

| Protocole            | Adresse                                                                     |                                                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nom d'hôte : `tls://ibksturm.synology.me` IP : `213.196.191.96`             | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-QUIC, IPv4  | Nom d'hôte : `quic://ibksturm.synology.me` IP : `213.196.191.96`            | [ Ajouter à AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                     |
| DNS-over-HTTPS, IPv4 | Nom d'hôte : `https://ibksturm.synology.me/dns-query` IP : `213.196.191.96` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Fournisseur : `2.dnscrypt-cert.ibksturm` IP : `213.196.191.96:8443`         | [Ajouter à AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                  |

### DNS Privacy

Un projet ouvert collaboratif pour promouvoir, implémenter et déployer [DNS Privacy](https://dnsprivacy.org/).

Serveurs DNS gérés par les [ développeurs de Stubby](https://getdnsapi.net/).

| Protocole    | Adresse                                                                                                                               |                                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Nom d'hôte : `tls://getdnsapi.net` IP : `185.49.141.37` et IPv6 : `2a04:b900:0:100::37`                                               | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Fournisseur : `Surfnet` Nom d'hôte : `tls://dnsovertls.sinodun.com` IP : `145.100.185.15` et IPv6 : `2001:610:1:40ba:145:100:185:15`  | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Fournisseur : `Surfnet` Nom d'hôte : `tls://dnsovertls1.sinodun.com` IP : `145.100.185.16` et IPv6 : `2001:610:1:40ba:145:100:185:16` | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Autres serveurs DNS avec une politique sans journalisation.

| Protocole          | Adresse                                                                                                                       |                                                                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Fournisseur : `UncensoredDNS` Nom d'hôte : `tls://unicast.censurfridns.dk` IP : `89.233.43.71` et IPv6 : `2a01:3a0:53:53::0`  | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)   |
| DNS-over-TLS       | Fournisseur : `UncensoredDNS` Nom d'hôte : `tls://anycast.censurfridns.dk` IP : `91.239.100.100` et IPv6 : `2001:67c:28a4: :` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Fournisseur : `dkg` Nom d'hôte : `tls://dns.cmrg.net` IP : `199.58.81.218` et IPv6 : `2001:470:1c:76d::53`                    | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Nom d'hôte : `tls://dns.larsdebruin.net` IP : `51.15.70.167`                                                                  | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Nom d'hôte : `tls://dns-tls.bitwiseshift.net` IP : `81.187.221.24` et IPv6 : `2001:8b0:24:24::24`                             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Nom d'hôte : `tls://ns1.dnsprivacy.at` IP : `94.130.110.185` et IPv6 : `2a01:4f8:c0c:3c03::2`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Nom d'hôte : `tls://ns2.dnsprivacy.at` IP : `94.130.110.178` et IPv6 : `2a01:4f8:c0c:3bfc::2`                                 | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Nom d'hôte : `tls://dns.bitgeek.in` IP : `139.59.51.46`                                                                       | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Nom d'hôte : `tls://dns.neutopia.org` IP : `89.234.186.112` et IPv6 : `2a00:5884:8209::2`                                     | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Fournisseur : `Go6Lab` Nom d'hôte : `tls://privacydns.go6lab.si` et IPv6 : `2001:67c:27e4::35`                                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Nom d'hôte : `tls://dot.securedns.eu` IP : `146.185.167.43` et IPv6 : `2a03:b0c0:0:1010::e9a:3001`                            | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

Serveurs DNS avec un minimum de connexions/restrictions. Ces serveurs utilisent une journalisation, des certificats autosignés ou aucune prise en charge du mode strict.

| Protocole    | Adresse                                                                                                                   |                                                                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Fournisseur : `NIC Chili` Nom d'hôte : `dnsotls.lab.nic.cl` IP : `200.1.123.46` et IPv6 : `2001:1398:1:0:200:1:123:46`    | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Fournisseur : `OARC` Nom d'hôte : `tls-dns-u.odvr.dns-oarc.net` IP : `184.105.193.78` et IPv6 : `2620:ff:c000:0:1::64:25` | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) Un service DNS sans enregistrement et bloquant les publicités, fourni par Fredrik Pettersson.

#### Blitz

[Filtrage configurable](https://blitz-setup.ahadns.com/) variante mondiale DoH uniquement.

| Protocole                                    | Adresse                           |                                                                                                                                                                                                                             |
| -------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, non censuré                  | `https://blitz.ahadns.com`        | [Ajouter à AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, filtre OISD                  | `https://blitz.ahadns.com/1:1`    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, Filtre OISD & Energized porn | `https://blitz.ahadns.com/1:1.12` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Pays-Bas

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Ajouter à AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Ajouter à AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Inde

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=45.79.120.233&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [Ajouter à AdGuard](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Ajouter à AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [Ajouter à AdGuard](adguard:add_dns_server?address=185.213.26.187&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Pologne

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Italie

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Espagne

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                        |

#### Norvège

| Protocole      | Adresse                               |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protocole      | Adresse                                |                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) est un service DNS axé sur la confidentialité fourni par Sebastian Schmidt. Sans journalisation, validation DNSSEC.

#### Serveur DNS 1

| Protocole      | Adresse                                                          |                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                                   | [ Ajouter à AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                        |
| DNSCrypt, IPv4 | Fournisseur : `2.dnscrypt-cert.dns.seby.io` IP : `45.76.113.31:` | [Ajouter à AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                   |
| DNS-over-TLS   | `tls://dot.seby.io`                                              | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) est physiquement situé près de Barcelone, en Espagne. puntCAT offre un service DNS public, gratuit, sécurisé, proche et qui respecte votre vie privée.

| Protocole | Adresse            |                                                                                                                                                               |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Ajouter à AdGuard](adguard:add_dns_server?address=109.69.8.51&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) exploite des résolveurs DNS publics pour accélérer les requêtes, augmenter la redondance. Le service est fourni par [Peerix](https://www.peerix.net/)

#### Par défaut

Ces serveurs fournissent une résolution DNS sans filtrage du trafic.

| Protocole      | Adresse                                |                                                                                                                                                                                                                               |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` et `185.235.81.2`       | [Ajouter à AdGuard](adguard:add_dns_server?address=185.235.81.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6      | `2a0d:4d00:81::1` et `2a0d:4d00:81::2` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`    | [Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Sûr

Le mode sécurisé permet de se prémunir contre les sites infectés, frauduleux ou sites robots.

| Protocole | Adresse                                |                                                                                                                                                              |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `185.235.81.3` et `185.235.81.4`       | [Ajouter à AdGuard](adguard:add_dns_server?address=185.235.81.3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.3&name=)        |
| DNS, IPv6 | `2a0d:4d00:81::3` et `2a0d:4d00:81::4` | [ Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Famille

Le mode familial offre une protection par des résolveurs "sûrs" et bloque les sites pour adultes.

| Protocole | Adresse                                |                                                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` et `185.235.81.6`       | [Ajouter à AdGuard](adguard:add_dns_server?address=185.235.81.5&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` et `2a0d:4d00:81::6` | [Ajouter à AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) fournit des résolveurs non filtrants accessibles au public sans journalisation en plus de ses résolveurs de filtrage configurables freemium avec leur journalisation facultative.

#### Latence ultra-faible

| Protocole      | Adresse                  |                                                                                                                                                                                                                           |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protocole      | Adresse                          |                                                                                                                                                                                                                                                           |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) fournit un service DNS-over-HTTPS exécuté en tant que Cloudflare Worker et un service DNS-over-TLS exécuté en tant que Fly.io Worker avec des listes de blocage configurables.

#### Sans filtrage

| Protocole      | Adresse                         |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) est un service DNS personnalisable avec des capacités de proxy. Cela signifie qu'il bloque non seulement des éléments (publicités, porno, etc.), mais peut également débloquer des sites web et des services.

#### Sans filtrage

| Protocole      | Adresse                           |                                                                                                                                                                                             |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` et `76.76.10.0`       | [Ajouter à AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` et `2606:1a40:1::`  | [Ajouter à AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Ajouter à AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Bloquer les maliciels

| Protocole      | Adresse                           |                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                               |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)       |

##### Bloquer les maliciels + la pub

| Protocole      | Adresse                           |                                                                                                                                                                                             |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Bloquer les maliciels + la pub + les réseaux sociaux

| Protocole      | Adresse                           |                                                                                                                                                                                             |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Ajouter à AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Ajouter à AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) fournit un DNS accessible au public avec minimisation QNAME, des terminaux situés en Australie, en Allemagne, à Singapour, en Suède, au Royaume-Uni et aux États-Unis (New York et Los Angeles).

#### Sans filtrage

| Protocole      | Adresse                             |                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Blocage de contenus

| Protocole      | Adresse                                     |                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [ Ajouter à AdGuard](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [ Ajouter à AdGuard](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [ Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Petits résolveurs personnels

Dans cette section, nous répertorions les petits résolveurs DNS, principalement personnels. Ils n'ont souvent qu'un ou très peu de serveurs et une disponibilité inférieure à celle des "grands" fournisseurs. Nous ne serons pas en mesure de contrôler leur disponibilité correctement. **Utilisez-les à vos propres risques et périls !**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) est un service DNS personnel hébergé à Mumbai, en Inde.

Sans journalisation | Filtre les annonces, le suivi, l'hameçonnage, etc. | DNSSEC | Minimisation QNAME | Aucun sous-réseau du client EDNS.

| Protocole      | Adresse                                                        |                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Hôte : `2.dnscrypt-cert.dns.arapurayil.com` IP : `3.7.156.128` | [Ajouter à AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                |
| DNS-over-HTTPS | Hôte : `https://dns.arapurayil.com/dns-query`                  | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Serveur DNS officiel de Dandelion Sprout

[Le serveur DNS officiel de Dandelion Sprout](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) est un service DNS personnel hébergé à Trondheim, en Norvège, utilisant l'infrastructure AdGuard Home.

Bloque plus de publicités et de logiciels malveillants qu'AdGuard DNS grâce à une syntaxe plus avancée, mais est moins strict avec les traqueurs, bloque les tabloïds d'extrême droite et la plupart des forums de discussion. La journalisation est utilisée pour améliorer ses listes de filtres utilisées (par exemple en débloquant des sites qui n'auraient pas dû être bloqués), et pour déterminer les moments les moins propices pour les mises à jour du système du serveur.

| Protocole      | Adresse                                               |                                                                                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Ajouter à AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Ajouter à AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Ajouter à AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Ajouter à AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Variable ; voir le lien ci-dessus.                    |                                                                                                                                                                                                                                                                                                       |
| DNS, IPv6      | Variable ; voir le lien ci-dessus.                    |                                                                                                                                                                                                                                                                                                       |
| DNSCrypt, IPv4 | Variable ; voir le lien ci-dessus.                    |                                                                                                                                                                                                                                                                                                       |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) - resolveurs Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS bloquant les publicités, le suivi, publiciels, maliciels, activités malveillantes et les entreprises d'hameçonnage, bloque ~1 million de domaines. Comporte des journaux de 24h/48h pour l'atténuation des attaques DDoS/Flood.

#### Filtrage adaptatif (ADA)

Recommandé pour la plupart des utilisateurs, filtrage très flexible avec blocage de la plupart des réseaux publicitaires, suivi des publicités, logiciels malveillants et domaines d'hameçonnage.

| Protocole      | Adresse                             |                                                                                 |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Ajouter à AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Ajouter à AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Filtrage strict (RIC)

Politiques de filtrage plus strictes qui bloquent les publicités, le marketing, le suivi, les logiciels malveillants, des domaines de clickbait, coinhive et d'hameçonnage.

| Protocole      | Adresse                             |                                                                                 |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Ajouter à AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Ajouter à AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
