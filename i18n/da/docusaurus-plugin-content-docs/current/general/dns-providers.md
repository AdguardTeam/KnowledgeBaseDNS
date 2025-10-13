---
title: Kendte DNS-udbydere
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Her foreslås en liste over betroede DNS-udbydere. For at bruge dem, installér først AdGuard Ad Blocker eller AdGuard VPN på enheden. Klik derefter fra enheden på linket til en udbyder i denne artikel

Hurtige links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

## **Offentlige anycast-opløsere**

Disse er globalt distribuerede, store DNS-opløsere, som bruger anycast-rutning til at dirigere DNS-forespørgsler til nærmeste datacenter.

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) er en alternativ løsning til adblocking, fortrolighedsbeskyttelse og forældrekontrol. Den tilbyder det nødvendige antal beskyttelsesfunktioner mod onlineannoncer, trackere og phishing uanset den benyttede platform og enhed.

#### Standard

Disse servere blokerer annoncer, sporing og phishing.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` og `94.140.15.15`                                             | [Føj til AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` og `2a10:50c0::ad2:ff`                                   | [Føj til AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                      | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                  | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                 | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                     |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                            |

#### Familiebeskyttelse

Disse servere leverer standardfunktionerne + blokering af voksenwebsteder + sikker søgning.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` og `94.140.15.16`                                             | [Føj til AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` og `2a10:50c0::bad2:ff`                                 | [Føj til AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                   | [Føj til AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                               | [Føj til AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                              | [Føj til AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Føj til AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                            |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                  |

#### Ikke-filtrerende

Hver af disse servere leverer en sikker og pålidelig forbindelse, men modsat *Standard*- og *Family Protection*-serverne, foretager de ikke filtrering.

| Protokol       | Adresse                                                                       |                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` og `94.140.14.141`                                            | [Føj til AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` og `2a10:50c0::2:ff`                                        | [Føj til AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                | [Føj til AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                            | [Føj til AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                           | [Føj til AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Føj til AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                        |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                           |

### Ali DNS

[Ali DNS](https://alidns.com/) er en gratis rekursiv DNS-tjeneste dedikeret til at levere hurtig, stabil og sikker DNS-opløsning til hovedparten af internetbrugere. Den indeholder AliGuard-funktion til brugerbeskyttelse mod forskellige angreb og trusler.

| Protokol       | Adresse                               |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` og `223.6.6.6`            | [Føj til AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` og `2400:3200:baba::1` | [Føj til AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`           | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)       |

### Caliph DNS

 [Caliph DNS](https://dns.caliph.dev) er en gratis DNS-tjeneste baseret i Indonesien mhp. at surfe på internet sikkert og uden bekymringer.

 | Type           | Adresse                            |                                                                                                                                                                                                                       |
 | -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | DNS, IPv4      | `160.19.167.150`                   | [Føj til AdGuard](adguard:add_dns_server?address=160.19.167.150&name=160.19.167.150), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=160.19.167.150&name=160.19.167.150)                                     |
 | DNS, IPv6      | `2001:df7:5300:3::51e`             | [Føj til AdGuard](adguard:add_dns_server?address=2001:df7:5300:3::51e&name=2001:df7:5300:3::51e), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:df7:5300:3::51e&name=2001:df7:5300:3::51e)             |
 | DNS-over-HTTPS | `https://dns.caliph.dev/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.caliph.dev/dns-query&name=dns.caliph.dev), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.caliph.dev/dns-query&name=dns.caliph.dev) |
 | DNS-over-TLS   | `tls://dns.caliph.dev:853`         | [Føj til AdGuard](adguard:add_dns_server?address=dns.caliph.dev:853&name=dns.caliph.dev:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=dns.caliph.dev:853&name=dns.caliph.dev:853)                     |
 | DNS-over-QUIC  | `quic://dns.caliph.dev:853`        | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.caliph.dev:853&name=dns.caliph.dev:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.caliph.dev:853&name=dns.caliph.dev:853)       |

### BebasDNS fra BebasID

[BebasDNS](https://github.com/bebasid/bebasid) er en gratis og neutral offentlig indonesiskbaseret opløser med understøttelse af OpenNIC-domæne. Skabt af Komunitas Internet Netral Indonesia (KINI) for at betjene indonesiske brugere med gratis og neutral internetforbindelse.

#### Standard

Dette er standardvarianten af BebasDNS. Denne variant blokerer reklame-, malware- og phishing-domæner.

| Protokol       | Adresse                                                             |                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                                 | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                         | [Føj til AdGuard](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                                    |

#### Ufiltreret

Denne variant foretager ingen filtrering.

| Protokol       | Adresse                                |                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                       |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [Føj til AdGuard](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### Sikkerhed

Dette er sikkerheds-/antivirusvarianten af BebasDNS. Denne variant blokerer kun malware- og phishing-domæner.

| Protokol       | Adresse                                   |                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [Føj til AdGuard](adguard:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                     |

#### Family

Dette er familievarianten af BebasDNS. Denne variant blokerer pornografi-, hasardspil- og hadwebsteder samt malware- og phishing-domæner.

| Protokol       | Adresse                                                                       |                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                 | [Føj til AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                         | [Føj til AdGuard](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                              |

#### Familie med annoncefiltrering

Dette er familievarianten af BebasDNS, men med adblocker

| Protokol       | Adresse                                     |                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [Føj til AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [Føj til AdGuard](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD Filter

Dette er en tilpasset BebasDNS-variant med kun OISD Big-filter

| Protokol       | Adresse                            |                                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [Føj til AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [Føj til AdGuard](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal Filter

Dette er en tilpasset BebasDNS-variant med kun Hagezi Multi Normal-filter

| Protokol       | Adresse                              |                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [Føj til AdGuard](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [Føj til AdGuard](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### CFIEC Public DNS

IPv6-baseret anycast DNS-tjeneste med stærke sikkerhedsfunktioner og beskyttelse imod spyware og ondsindede websteder. Den understøtter DNS64 for alene at levere domænenavnsopløsning til IPv6-brugere.

| Protokol       | Adresse                           |                                                                                                                                                                                                                   |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` og `240C::6644`      | [Føj til AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) er en tjeneste, der udvider DNS ved at inkorporere funktioner såsom indholdsfiltrering og phishing-beskyttelse med nul nedetid.

#### Standard

DNS-servere med tilpasset filtrering, som beskytter enheden mod malware.

| Protokol       | Adresse                                                      |                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` og `208.67.220.220`                         | [Føj til AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` og `2620:119:53::53`                       | [Føj til AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                              |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Føj til AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                             |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                          | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |
| DNS-over-TLS   | `tls://dns.opendns.com`                                      | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

OpenDNS-servere, som tilbyder blokering af voksenindhold.

| Protokol       | Adresse                                                     |                                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` og `208.67.220.123`                        | [Føj til AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Føj til AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                  |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`            | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                            | [Føj til AdGuard](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

Ikke-filtrerende OpenDNS-servere.

| Protokol       | Adresse                                     |                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.2` and `208.67.220.2`           | [Føj til AdGuard](adguard:add_dns_server?address=208.67.220.2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.2&name=)                                                                                                         |
| DNS, IPv6      | `2620:0:ccc::2` IP: `2620:0:ccd::2`         | [Føj til AdGuard](adguard:add_dns_server?address=2620:0:ccc::2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=)                                                                                                       |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [Føj til AdGuard](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com/dns-query&name=sandbox.opendns.com)                               |

:::info

OpenDNS-servere fjerner AUTHORITY-segmenterne fra visse svar, herunder dem med NODATA, hvilket umuliggør cachelagring af sådanne svar.

:::

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) er en DNS-tjeneste, der leverer tilpasset filtrering. Tjenesten tilbyder en sikker måde at surfe på nettet uden upassende indhold.

#### Family-filter

Blokerer adgang til alle eksplicitte voksen- og pornowebsteder, inkl. proxy og VPN-domæner samt websteder med blandet indhold.

| Protokol       | Adresse                                                 |                                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` og `185.228.169.168`                  | [Føj til AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` og `2a0d:2a00:2::`                      | [Føj til AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                            |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                            |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`      | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Adult-filter

Mindre restriktivt end Family-filter, blokerer kun adgang til voksenindhold samt ondsindede og phishing-domæner.

| Protokol       | Adresse                                                  |                                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` og `185.228.169.11`                     | [Føj til AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` og `2a0d:2a00:2::1`                     | [Føj til AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Udbyder: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Føj til AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                         |
| DNSCrypt, IPv6 | Udbyder: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                      |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`        | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`               | [Føj til AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Sikkerhedsfilter

Blokerer ondsindede samt phishing- og spam-domæner.

| Protokol       | Adresse                                              |                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` og `185.228.169.9`                   | [Føj til AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` og `2a0d:2a00:2::2`                 | [Føj til AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Føj til AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) er en gratis og hurtig DNS-tjeneste, der fungerer som en rekursiv navneserver, der leverer domænenavnsopløsning til enhver vært på internet.

#### Standard

| Protokol             | Adresse                                          |                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` og `1.0.0.1`                           | [Føj til AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` og `2606:4700:4700::1001` | [Føj til AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                          | [Føj til AdGuard](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Kun malware-blokering

| Protokol       | Adresse                                          |                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` og `1.0.0.2`                           | [Føj til AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` og `2606:4700:4700::1002` | [Føj til AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [Føj til AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [Føj til AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Blokering af malware- og voksenindhold

| Protokol             | Adresse                                          |                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` og `1.0.0.3`                           | [Føj til AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` og `2606:4700:4700::1003` | [Føj til AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [Føj til AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) er en domænenavnsopløsningstjeneste, der opløser DNS-forespørgsler gennem et verdensomspændende netværk af DNS-servere. Fjerner overdrevne annonceantal og beskytter mod phishing og spyware.

| Protokol       | Adresse                                                              |                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` og `8.20.247.20`                                        | [Føj til AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)            |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Føj til AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### ControlD

[ControlD](https://controld.com/free-dns) er en tilpasselig DNS-tjeneste med proxyfunktionalitet. Dvs., at den ikke alene foretager blokering (reklamer, porno mv.), den kan også afblokere websteder og -tjenester.

#### Ikke-filtrerende

| Protokol       | Adresse                           |                                                                                                                                                                                         |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` og `76.76.10.0`       | [Føj til AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` og `2606:1a40:1::`  | [Føj til AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [Føj til AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [Føj til AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Malware-blokering

| Protokol       | Adresse                           |                                                                                                                                                                                         |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [Føj til AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [Føj til AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [Føj til AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

#### Malware- + annonceblokering

| Protokol       | Adresse                           |                                                                                                                                                                                         |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [Føj til AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [Føj til AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [Føj til AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

#### Malware- + annonce- + socialblokering

| Protokol       | Adresse                           |                                                                                                                                                                                         |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [Føj til AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [Føj til AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[Føj til AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) er en DNS-tjeneste, der lader brugerne blokere alt, hvad de ønsker, mens den som standard beskytter brugere og familier mod annoncer, trackere, malware, phishing, ondsindede websteder og meget mere.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Føj til AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                             |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                        | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                    | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

Et åbent samarbejdsprojekt til fremme, implementering og udrulning af [DNS Privacy](https://dnsprivacy.org/).

#### DNS-serverne drives af [Stubby-udviklerne](https://getdnsapi.net/)

| Protokol     | Adresse                                                                                                                      |                                                                                                                                                                                                                                   |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Værtsnavn: `tls://getdnsapi.net` IP: `185.49.141.37` og IPv6: `2a04:b900:0:100::37`                                          | [Føj til AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` og IPv6: `2001:610:1:40ba:145:100:185:15`  | [Føj til AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Udbyder: `Surfnet` Værtsnavn: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` og IPv6: `2001:610:1:40ba:145:100:185:16` | [Føj til AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

### FutureDNS

[FutureDNS](https://futuredns.eu.org) er en fortrolighedsfokuseret DNS-tjeneste, der blokerer annoncer, trackere og malware. Den understøtter både standard DNS og krypterede protokoller, og opretholder samtidig en streng nul logning-politik.

#### Servere

##### Tyskland

| Protokol       | Adresse                                      |                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `162.55.52.228`                              | [Føj til AdGuard](adguard:add_dns_server?address=162.55.52.228&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=162.55.52.228&name=)                                                                                 |
| DNS, IPv6      | `2a01:4f8:1c1c:adbc::`                       | [Føj til AdGuard](adguard:add_dns_server?address=2a01:4f8:1c1c:adbc::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c1c:adbc::&name=)                                                                   |
| DNS-over-HTTPS | `https://dns.de.futuredns.eu.org/dns-query/` | [Føj til AdGuard VPN](adguard:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.de.futuredns.eu.org/dns-query/&name=futuredns) |
| DNS-over-TLS   | `tls://dns.de.futuredns.eu.org`              | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.de.futuredns.eu.org&name=FutureDNSDoT), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.de.futuredns.eu.org&name=FutureDNSDoT)                         |
| DNS-over-QUIC  | `quic://dns.de.futuredns.eu.org`             | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.de.futuredns.eu.org&name=FutureDNSDoQ), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.de.futuredns.eu.org&name=FutureDNSDoQ)                       |

##### USA

| Protokol       | Adresse                                     |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.161.67.176`                              | [Føj til AdGuard](adguard:add_dns_server?address=5.161.67.176&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=5.161.67.176&name=)                                                                               |
| DNS, IPv6      | `2a01:4ff:f0:87a2::`                        | [Føj til AdGuard](adguard:add_dns_server?address=2a01:4ff:f0:87a2::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4ff:f0:87a2::&name=)                                                                   |
| DNS-over-HTTPS | `https://dns.us.futuredns.eu.org/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.us.futuredns.eu.org/dns-query/&name=futuredns), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.us.futuredns.eu.org/dns-query/&name=futuredns) |
| DNS-over-TLS   | `tls://dns.us.futuredns.eu.org`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.us.futuredns.eu.org&name=FutureDNSDoT), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.us.futuredns.eu.org&name=FutureDNSDoT)                     |
| DNS-over-QUIC  | `quic://dns.us.futuredns.eu.org`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.us.futuredns.eu.org&name=FutureDNSDoQ), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.us.futuredns.eu.org&name=FutureDNSDoQ)                   |

#### Andre DNS-servere med nul logning-politik

| Protokol           | Adresse                                                                                                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` og IPv6: `2a01:3a0:53:53::0` | [Føj til AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Udbyder: `UncensoredDNS` Værtsnavn: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` og IPv6: `2001:67c:28a4::` | [Føj til AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Udbyder: `dkg` Værtsnavn: `tls://dns.cmrg.net`  IP: `199.58.81.218` og IPv6: `2001:470:1c:76d::53`                  | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                           | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Værtsnavn: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` og IPv6: `2001:8b0:24:24::24`                       | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Værtsnavn: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` og IPv6: `2a01:4f8:c0c:3c03::2`                           | [Føj til AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Værtsnavn: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` og IPv6: `2a01:4f8:c0c:3bfc::2`                           | [Føj til AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Værtsnavn: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Værtsnavn: `tls://dns.neutopia.org` IP: `89.234.186.112` og IPv6: `2a00:5884:8209::2`                               | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Udbyder: `Go6Lab` Værtsnavn: `tls://privacydns.go6lab.si` og IPv6: `2001:67c:27e4::35`                              | [Føj til AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Værtsnavn: `tls://dot.securedns.eu` IP: `146.185.167.43` og IPv6: `2a03:b0c0:0:1010::e9a:3001`                      | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

#### DNS-servere med minimal logning/restriktioner

Disse servere bruger noget logning, selvsignerede certifikater eller ingen understøttelse af stringent tilstand.

| Protokol     | Adresse                                                                                                          |                                                                                                                                                                                                                                                   |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Udbyder: `NIC Chile` Værtsnavn: `dnsotls.lab.nic.cl` IP: `200.1.123.46` og IPv6: `2001:1398:1:0:200:1:123:46`    | [Føj til AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Udbyder: `OARC` Værtsnavn: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` og IPv6: `2620:ff:c000:0:1::64:25` | [Føj til AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/) leverer gratis DNS-tjeneste uden logning og med DNSSEC aktiveret.

| Protokol       | Adresse                            |                                                                                                                                                                                                       |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` og `45.11.45.11` | [Føj til AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` og `2a11::`               | [Føj til AdGuard](adguard:add_dns_server?address=2a09::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                     | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) er en fortrolighedsvenlig DNS-udbyder med mange års erfaring inden for udvikling af domænenavnsopløsningstjenester, hvis formål er at give brugerne en hurtigere, mere præcis og stabil rekursiv opløsningstjeneste.

| Protokol       | Adresse                         |                                                                                                                                                                                                           |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`                  | [Føj til AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                                         |
| DNS, IPv6      | `2402:4e00::`                   | [Føj til AdGuard](adguard:add_dns_server?address=2402:4e00::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2402:4e00::&name=)                                                           |
| DNS-over-HTTPS | `https://dns.pub/dns-query`     | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub)                 |
| DNS-over-HTTPS | `https://sm2.doh.pub/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.doh.pub), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://sm2.doh.pub/dns-query&name=sm2.dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                 | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                                         |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo) er en DNS-tjeneste fra WatchGuard, der forhindrer folk i at interagere med ondsindet indhold.

| Protokol  | Adresse                           |                                                                                                                                                     |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` og `52.3.100.184` | [Føj til AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### dns0.eu

[dns0.eu](https://www.dns0.eu) er en gratis, suveræn og GDPR-kompatibel rekursiv DNS-opløser med et stærkt fokus på sikkerhed for at beskytte borgerne og organisationerne i EU.

| Protokol       | Adresse                         |                                                                                                                                                                      |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.110.81.0` og `185.253.5.0` | [Føj til AdGuard](adguard:add_dns_server?address=193.110.81.0&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`         | [Føj til AdGuard](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`            | [Føj til AdGuard](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`           | [Føj til AdGuard](adguard:add_dns_server?address=quic://zero.dns0.eu), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) er en gratis alternativ DNS-tjeneste fra Dyn.

| Protokol  | Adresse                            |                                                                                                                                                     |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` og `216.146.36.36` | [Føj til AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) er en gratis anonym DNS-opløser fra Freenom World.

| Protokol  | Adresse                        |                                                                                                                                                 |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` og `80.80.81.81` | [Føj til AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) er en gratis global DNS-opløsningstjeneste, man kan bruge i stedet for sin aktuelle udbyder.

| Protokol       | Adresse                                          |                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` og `8.8.4.4`                           | [Føj til AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` og `2001:4860:4860::8844` | [Føj til AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                               | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor er en gratis, alternativ DNS-tjeneste fra Hurricane Electric med anycast.

| Protokol       | Adresse                          |                                                                                                                                                                                                               |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [Føj til AdGuard](adguard:add_dns_server?address=74.82.42.42&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=74.82.42.42&name=)                                                               |
| DNS, IPv6      | `2001:470:20::2`                 | [Føj til AdGuard](adguard:add_dns_server?address=2001:470:20::2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:470:20::2&name=)                                                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) leverer offentligt tilgængelig DNS med QNAME-minimering, endepunkter placeret i Singapore, Storbritannien, Sverige, Tyskland og USA (Dallas og New York).

#### Ikke-filtrerende

| Protokol       | Adresse                             |                                                                                                                                                                                                                 |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### Adblocking

| Protokol       | Adresse                                     |                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### Annonce- + malware-blokering

| Protokol       | Adresse                                  |                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### Annonce- + malware- + sociale medier-blokering

| Protokol       | Adresse                                      |                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### Annonce- + malware- + voksen- + hasardspilsblokering

| Protokol       | Adresse                                    |                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### Annonce- + malware- + voksen- + hasardspils- + sociale medier-blokering

| Protokol       | Adresse                                 |                                                                                                                                                                                                                                           |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) er et anycast internetfiltreringssystem, der beskytter børn mod upassende websteder og krænkende indhold.

| Protokol       | Adresse                                                    |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` og `180.131.145.145`                     | [Føj til AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Føj til AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)              |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) er en gratis cloud-baseret rekursiv DNS-tjeneste med indbygget sikkerhed og trusselsinformation, der leverer hurtig og pålidelig adgang til websteder og onlineapplikationer.

#### Pålidelighed og Ydeevne 1

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere nogen bestemte kategorier.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` og `156.154.71.1`       | [Føj til AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` og `2610:a1:1019::1` | [Føj til AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Pålidelighed og Ydeevne 2

Disse servere leverer pålidelige og hurtige DNS-opslag uden at blokere bestemte kategorier og forhindrer også omdirigering af NXDomain-svar (ikke-eksisterende domæne) til landing-sider.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` og `156.154.71.5`       | [Føj til AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` og `2610:a1:1019::5` | [Føj til AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Trusselsbeskyttelse

Disse servere yder beskyttelse mod ondsindede domæner samt inkluderer funktionerne *Pålidelighed og Ydelse*.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` og `156.154.71.2`       | [Føj til AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` og `2610:a1:1019::2` | [Føj til AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Familiesikker

Disse servere leverer blokering af voksenindhold samt inkluderer funktionerne *Pålidelighed og Ydeevne* + *Trusselsbeskyttelse*.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` og `156.154.71.3`       | [Føj til AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` og `2610:a1:1019::3` | [Føj til AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Virksomhedssikker

Disse servere blokerer uønsket og tidsspildende indhold samt inkluderer funktionerne *Pålidelighed og Ydeevne* + *Trusselsbeskyttelse* + *Familiesikker*.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` og `156.154.71.4`       | [Føj til AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` og `2610:a1:1019::4` | [Føj til AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) tilbyder offentligt tilgængelige ikke-filtrerende opløsere uden logning ud over sine freemium-konfigurerbare filtrerende opløsere med valgfri logning.

#### Ultralav latenstid

| Protokol       | Adresse                  |                                                                                                                                                                                                                       |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokol       | Adresse                          |                                                                                                                                                                                                                                                       |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [Føj til AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [Føj til AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS opløsere med blokering: Annoncer, sporing, adware, malware, ondsindede aktiviteter og phishing-virksomheder. Blokerer ~1M domæner. Har 24/48 timers logfiler til imødegåelse af DDoS/oversvømmelsesangreb.

#### Adaptiv filtrering (ADA)

Anbefales til de fleste brugere, meget fleksibel filtrering med blokering af de fleste reklamenetværks-, annoncesporings-, malware- og phishing-domæner.

| Protokol       | Adresse                             |                                                                               |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Stringent filtrering (RIC)

Mere strikse filtreringspolitikker med blokering — ondsindede samt reklame-, marketing-, tracking-, malware-, clickbait-, Coinhive- og phishing-domæner.

| Protokol       | Adresse                             |                                                                               |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [Føj til AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [Føj til AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) er en højtydende gratis, rekursiv anycast DNS-platform, der leverer fortrolighed samt sikkerhedsbeskyttelse mod phishing og spyware. Quad9-servere tilbyder ingen censureringskomponent.

#### Standard

Alm. DNS-servere med beskyttelse mod phishing og spyware. De inkluderer sortlister, DNSSEC-bekræftelse og andre sikkerhedsfunktioner.

| Protokol       | Adresse                                                       |                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` og `149.112.112.112`                                | [Føj til AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` og `2620:fe::9`                                 | [Føj til AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Føj til AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                            |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                    |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                             | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                         | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Ikke-sikret

Ikke-sikrede DNS-servere tilbyder ingen sikkerhedssortliste, DNSSEC eller EDNS Client Subnet.

| Protokol       | Adresse                                                          |                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` og `149.112.112.10`                                   | [Føj til AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                               | [Føj til AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                  |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                        |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                              | [Føj til AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                          | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)-support

EDNS Client Subnet er en metode, der inkluderer komponenter af slutbrugerens IP-adressedata i forespørgsler sendt til autoritative DNS-servere. Der tilbydes sikkerhedssortliste, DNSSEC og EDNS Client-Subnet.

| Protokol       | Adresse                                                       |                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` og `149.112.112.11`                                | [Føj til AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                            | [Føj til AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Føj til AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                  |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Føj til AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                            |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                           | [Føj til AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                       | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Quadrant Security

[Quadrant Security](https://www.quadrantsec.com/post/public-dns-resolver-with-tls-https-support) tilbyder DoH- og DoT-servere uden logning eller filtrering til den brede offentlighed.

| Protokol       | Adresse                        |                                                                                                                                                                                                       |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.qis.io/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io) |
| DNS-over-TLS   | `tls://dns-tls.qis.io`         | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)         |

### Rabbit DNS

[Rabbit DNS](https://rabbitdns.org/) er en fortrolighedsfokuseret DoH-tjeneste, der ikke indsamler nogen brugerdata.

#### Ikke-filtrerende

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.rabbitdns.org/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org) |

#### Sikkerhedsfiltrering

| Protokol       | Adresse                                    |                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://security.rabbitdns.org/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org) |

#### Familiefiltrering

| Protokol       | Adresse                                  |                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.rabbitdns.org/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org) |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) leverer en DNS-over-HTTPS-tjeneste, der kører som Cloudflare Worker, og en DNS-over-TLS-tjeneste, der kører som Fly.io Worker med konfigurerbare sortlister.

#### Ikke-filtrerende

| Protokol       | Adresse                         |                                                                                                                                                                                                                             |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [Føj til AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [Føj til AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/) er et globalt anycast-netværk bestående af servere placeret verden over — både Amerika, Europa, Afrika, Australien og Fjernøsten — for at sikre en hurtig og pålidelig DNS-opløsning fra ethvert punkt i verden.

| Protokol  | Adresse                          |                                                                                                                                                   |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` og `195.46.39.40` | [Føj til AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/) er en DNS-tjeneste, der blokerer 50+ kategorier, såsom porno, reklamer, malware og populære sociale medier, hvilket gør websurfing mere sikker.

| Protokol       | Adresse                                                          |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` og `104.197.28.121`                            | [Føj til AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Føj til AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)      |

### 360 Secure DNS

**360 Secure DNS** er en brancheførende rekursiv DNS-tjeneste med avanceret netværkssikkerhedstrusselbeskyttelse.

| Protokol       | Adresse                           |                                                                                                                                                                                                       |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` og `218.30.118.6`   | [Føj til AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` og `140.207.198.6` | [Føj til AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Surfshark DNS

[Surfshark DNS](https://dns.surfsharkdns.com/) er en DNS-tjeneste uden logning, sporing eller salg af brugerdata. Surfshark's globale infrastruktur sikrer stabile og konsistente hastigheder.

| Protokol       | Adresse                                  |                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `194.169.169.169`                        | [Føj til AdGuard](adguard:add_dns_server?address=194.169.169.169&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=194.169.169.169&name=)                                                                                       |
| DNS, IPv6      | `2a09:a707:169::`                        | [Føj til AdGuard](adguard:add_dns_server?address=2a09:a707:169::&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a09:a707:169::&name=)                                                                                       |
| DNS-over-HTTPS | `https://dns.surfsharkdns.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.surfsharkdns.com/dns-query&name=dns.surfsharkdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.surfsharkdns.com/dns-query&name=dns.surfsharkdns.com) |
| DNS-over-TLS   | `tls://dns.surfsharkdns.com`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.surfsharkdns.com&name=dns.surfsharkdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.surfsharkdns.com&name=dns.surfsharkdns.com)                         |
| DNS-over-QUIC  | `quic://dns.surfsharkdns.com`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.surfsharkdns.com&name=dns.surfsharkdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.surfsharkdns.com&name=dns.surfsharkdns.com)                       |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) er en gratis DNS-tjeneste med forbedret DNS-stabilitet og sikkerhed ift. andre alternativer. Verisign respekterer brugernes fortrolighed og sælger hverken offentlige DNS-data til tredjeparter eller omdirigerer brugerforespørgsler mhp. reklamevisning.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` og `64.6.65.6`             | [Føj til AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` og `2620:74:1c::2:2` | [Føj til AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### v.recipes DNS (tidligere 0ms.dev)

[v.recipes DNS](https://v.recipes/dns/) er en global DNS-opløsningstjeneste leveret som et alternativ til en aktuelt anvendt DNS-udbyder.

Den er designet med forskellige optimeringer, såsom HTTP/3, caching mv. Den udnytter maskinlæring til at beskytte brugere mod potentielle sikkerhedstrusler, samtidig med at den optimerer sig selv over tid. Nogle af dens brugere så, hvordan DNS'en håndterer forespørgsler i realtid fra dens statistikside, men p.t. er statistiksiden midlertidigt deaktiveret. Selv om statistiksiden midlertidigt er slået fra, kan DNS'en stadig håndtere brugernes forespørgsler normalt.

| Protokol       | Adresse                       |                                                                                                                                                                                                   |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://v.recipes/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://v.recipes/dns-query&name=v.recipes), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://v.recipes/dns-query&name=v.recipes) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) er en caching, rekursiv, offentlig DoH og DoT opløsertjeneste drevet og håndteret af Site Reliability Engineering (Traffic)-teamet hos Wikimedia Foundation på alle seks Wikimedia-datacentre med anycast.

| Protokol       | Adresse                                                                        |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                          | [Føj til AdGuard](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Værtsnavn: `wikimedia-dns.org` IP: `185.71.138.138` og IPv6: `2001:67c:930::1` | [Føj til AdGuard](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [Føj til AdGuard VPN](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Regionale opløsere**

Regionale DNS-opløsere er typisk fokuseret på bestemte geografiske områder og tilbyder optimeret ydeevne til brugere herfra. Disse opløsere drives ofte af non-profit organisationer, lokale internetudbydere eller andre entiteter.

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) driver vha. moderne protokoller DNS-fortrolighedstjenester for at hjælpe med at beskytte DNS-trafik og hjælpe med at diversificere DNS-opløserlandskabet.

| Protokol       | Adresse                                 |                                                                                                                                                                                                                                                   |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS er en gratis alternativ DNS-tjeneste fra ByteDance i Kina. Den p.t. eneste DNS leveret af ByteDance understøtter IPV4. DOH, DOT, DOQ og andre krypterede DNS-tjenester lanceres snart.

| Protokol  | Adresse                        |                                                                                                                                                 |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` og `180.184.2.2` | [Føj til AdGuard](adguard:add_dns_server?address=180.184.1.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) beskytter mod tyveri af personlige og finansielle data. Hold vira, ransomware og anden malware ude af hjemmet.

#### Fortrolige

I tilstanden *Private*, kun DNS-opløsning.

| Protokol               | Adresse                                                                                             |                                                                                                                                                                                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` og `149.112.122.10`                                                                | [Føj til AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` og `2620:10A:80BC::10`                                                          | [Føj til AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [Føj til AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — Private | Værtsnavn: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` og IPv6: `2620:10A:80BB::10` | [Føj til AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Beskyttede

I tilstanden *Protected*, malware- og phishing-beskyttelse.

| Protokol                 | Adresse                                                                                               |                                                                                                                                                                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` og `149.112.122.20`                                                                  | [Føj til AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` og `2620:10A:80BC::20`                                                            | [Føj til AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [Føj til AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — Protected | Værtsnavn: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` og IPv6: `2620:10A:80BB::20` | [Føj til AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Family

I tilstanden *Family*; *Beskyttet* + blokering af voksenindhold.

| Protokol              | Adresse                                                                                            |                                                                                                                                                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` og `149.112.122.30`                                                               | [Føj til AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` og `2620:10A:80BC::30`                                                         | [Føj til AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [Føj til AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — Family | Værtsnavn: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` og IPv6: `2620:10A:80BB::30` | [Føj til AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) er en hurtig og sikker DNS-tjeneste baseret på SmartDNS med adgang til AI-tjenester, beskyttelse mod annoncering, sporing, phishing og ondsindede websteder. Den understøtter kryptering af DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC forespørgsler.

#### Geoblokeringsomgåelse

Adgang til AI, blokering af phishing og ondsindede websteder.

| Protokol       | Adresse                              |                                                                                                                                                                                                                   |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `83.220.169.155` og `212.109.195.93` | [Føj til AdGuard](adguard:add_dns_server?address=83.220.169.155&name=dns.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=212.109.195.93&name=dns.comss.one)                                   |
| DNS-over-HTTPS | `tls://comss.dns.controld.com`       | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://comss.dns.controld.com`       | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one`               | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.comss.one&name=dns.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one&name=dns.comss.one)                       |

#### Geoblokeringsomgåelse med annoncefiltrering

Adgang til AI, blokering af annoncer, tællere, phishing og ondsindede websteder.

| Protokol       | Adresse                              |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `195.133.25.16`                      | [Føj til AdGuard](adguard:add_dns_server?address=195.133.25.16&name=router.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=195.133.25.16&name=router.comss.one)                                           |
| DNS-over-HTTPS | `https://router.comss.one/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://router.comss.one/dns-query&name=router.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://router.comss.one/dns-query&name=router.comss.one) |
| DNS-over-TLS   | `tls://router.comss.one`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://router.comss.one&name=router.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://router.comss.one&name=router.comss.one)                         |
| DNS-over-QUIC  | `quic://router.comss.one`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://router.comss.one&name=router.comss.one), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://router.comss.one&name=router.comss.one)                       |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR er Open DNSSEC-valideringsopløsere. CZ.NIC indsamler hverken personlige data eller oplysninger fra sider, hvortil enheder sender personlige data.

| Protokol       | Adresse                                    |                                                                                                                                                                                               |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` og `185.43.135.1`            | [Føj til AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` og `2001:148f:fffe::1` | [Føj til AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [Føj til AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [Føj til AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) er en offentlig opløser drevet af Digital Society. Hostes i Zurich, Schweiz.

| Protokol       | Adresse                                                                                       |                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` og IPv6: `2a05:fc84::42` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` og IPv6: `2a05:fc84::43`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) sigter mod at blokere voksenwebsteder. Den muliggør, at børn og voksne kan surfe sikkert på internet uden at bekymre sig om at blive sporet af ondsindede websteder.

| Protokol       | Adresse                                                   |                                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`              | [Føj til AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                          | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` og `78.47.64.161`                        | [Føj til AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` og `2a01:4f8:1c17:4df8::1`        | [Føj til AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Udbyder: `dnsforfamily.com` IP: `94.130.180.225`          | [Føj til AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                 |
| DNSCrypt, IPv6 | Udbyder: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Føj til AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                     |

### DNS4EU

[DNS4EU](https://www.joindns4.eu) er en gratis, fortrolighedsfokuseret og sikker DNS-opløser designet til at beskytte borgere i hele EU. Delfinansieret af EU.

#### Beskyttende opløsning

Blokerer adgang til kendte ondsindede og svigagtige websteder.

| Protokol       | Adresse                                              |                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.1` og `86.54.11.201`                       | [Føj til AdGuard](adguard:add_dns_server?address=86.54.11.1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.1&name=)                                                             |
| DNS, IPv6      | `2a13:1001::86:54:11:1` og `2a13:1001::86:54:11:201` | [Føj til AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:1&name=)                                       |
| DNS-over-HTTPS | `https://protective.joindns4.eu/dns-query`           | [Føj til AdGuard](adguard:add_dns_server?address=https://protective.joindns4.eu/dns-query&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://protective.joindns4.eu/dns-query&name=) |
| DNS-over-TLS   | `tls://protective.joindns4.eu`                       | [Føj til AdGuard](adguard:add_dns_server?address=tls://protective.joindns4.eu&name=DNS4EU), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://protective.joindns4.eu&name=DNS4EU)             |

#### Beskyttende opløsning med børnebeskyttelse

Undgå adgang til websteder, som er upassende for børn, såsom eksplicit indhold, vold eller stoffer, oveni den beskyttende funktionalitet.

| Protokol       | Adresse                                               |                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.12` og `86.54.11.212`                       | [Føj til AdGuard](adguard:add_dns_server?address=86.54.11.12&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.12&name=)                                                 |
| DNS, IPv6      | `2a13:1001::86:54:11:12` og `2a13:1001::86:54:11:212` | [Føj til AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:12&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:12&name=)                           |
| DNS-over-HTTPS | `https://child.joindns4.eu/dns-query`                 | [Føj til AdGuard](adguard:add_dns_server?address=https://child.joindns4.eu/dns-query&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://child.joindns4.eu/dns-query&name=) |
| DNS-over-TLS   | `tls://child.joindns4.eu`                             | [Føj til AdGuard](adguard:add_dns_server?address=tls://child.joindns4.eu&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://child.joindns4.eu&name=)                         |

#### Beskyttende opløsning med adblocking

Skjul websteds- og in-app-annoncer oven i den beskyttende funktionalitet.

| Protokol       | Adresse                                               |                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.13` og `86.54.11.213`                       | [Føj til AdGuard](adguard:add_dns_server?address=86.54.11.13&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.13&name=)                                                 |
| DNS, IPv6      | `2a13:1001::86:54:11:13` og `2a13:1001::86:54:11:213` | [Føj til AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:13&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:13&name=)                           |
| DNS-over-HTTPS | `https://noads.joindns4.eu/dns-query`                 | [Føj til AdGuard](adguard:add_dns_server?address=https://noads.joindns4.eu/dns-query&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://noads.joindns4.eu/dns-query&name=) |
| DNS-over-TLS   | `tls://noads.joindns4.eu`                             | [Føj til AdGuard](adguard:add_dns_server?address=tls://noads.joindns4.eu&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://noads.joindns4.eu&name=)                         |

#### Beskyttende opløsning med børnebeskyttelse og adblocking

Undgå adgang til websteder, som er upassende for børn, såsom eksplicit indhold, vold eller stoffer. Plus filtrér annoncer oven i den beskyttende funktionalitet.

| Protokol       | Adresse                                               |                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.11` og `86.54.11.211`                       | [Føj til AdGuard](adguard:add_dns_server?address=86.54.11.11&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.11&name=)                                                             |
| DNS, IPv6      | `2a13:1001::86:54:11:11` og `2a13:1001::86:54:11:211` | [Føj til AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:11&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:11&name=)                                       |
| DNS-over-HTTPS | `https://child-noads.joindns4.eu/dns-query`           | [Føj til AdGuard](adguard:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=) |
| DNS-over-TLS   | `tls://child-noads.joindns4.eu`                       | [Føj til AdGuard](adguard:add_dns_server?address=tls://child-noads.joindns4.eu&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://child-noads.joindns4.eu&name=)                         |

#### Ufiltreret opløsning

Ufiltreret mulighed er et alternativ til brugere, som er sikre på, at deres enheder og forbindelse er sikre, og som søger en hurtig, pålidelig og anonymiseret opløsningstjeneste.

| Protokol       | Adresse                                                |                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `86.54.11.100` og `86.54.11.200`                       | [Føj til AdGuard](adguard:add_dns_server?address=86.54.11.100&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=86.54.11.100&name=)                                                           |
| DNS, IPv6      | `2a13:1001::86:54:11:100` og `2a13:1001::86:54:11:100` | [Føj til AdGuard](adguard:add_dns_server?address=2a13:1001::86:54:11:100&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a13:1001::86:54:11:100&name=)                                     |
| DNS-over-HTTPS | `https://unfiltered.joindns4.eu/dns-query`             | [Føj til AdGuard](adguard:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://child-noads.joindns4.eu/dns-query&name=) |
| DNS-over-TLS   | `tls://child-noads.joindns4.eu`                        | [Føj til AdGuard](adguard:add_dns_server?address=tls://child-noads.joindns4.eu&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://child-noads.joindns4.eu&name=)                         |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver)-servere leveres af [Restena Foundation](https://www.restena.lu/).

| Protokol       | Adresse                                                                            |                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` og IPv6: `2001:a18:1::29` | [Føj til AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` og IPv6: `2001:a18:1::29`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)                         |

### 114DNS

[114DNS](https://www.114dns.com) er en professionel, højpålidelig DNS-tjeneste.

#### Normal

Bloker reklamer og irriterende websteder.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` og `114.114.115.115` | [Føj til AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Sikker

Blokerer phishing, ondsindede og andre ikke-sikre websteder.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` og `114.114.115.119` | [Føj til AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Family

Disse servere blokerer voksenwebsteder og upassende indhold.

| Protokol  | Adresse                                |                                                                                                                                                         |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` og `114.114.115.110` | [Føj til AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) er en offentlig DNS-tjeneste drevet af Internet Initiative Japan. Den blokerer også børnemisbrugsindhold.

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) er en gratis sikkerhedsfokuseret rekursiv DNS-tjeneste, der blokerer malware. Den har DNSSEC-understøttelse og lagrer ikke logfiler.

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `155.248.232.226`                     | [Føj til AdGuard](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

### LibreDNS

[LibreDNS](https://libredns.gr/) er en offentlig, krypteret DNS-tjeneste drevet af [LibreOps](https://libreops.cc/).

| Protokol       | Adresse                                      |                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [Føj til AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/) er en sikker, hurtig og gratis niche DNS-tjeneste med blokeringsfacilitet for ondsindede domæner.

#### Pure Edition

| Protokol       | Adresse                                            |                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `117.50.10.10` og `52.80.52.52`                    | [Føj til AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=)                                                                                         |
| DNS, IPv6      | `2400:7fc0:849e:200::8` og `2404:c2c0:85d8:901::8` | [Føj til AdGuard](adguard:add_dns_server?address=2400:7fc0:849e:200::8&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2400:7fc0:849e:200::8&name=)                                                                       |
| DNS-over-HTTPS | `https://doh-pure.onedns.net/dns-query`            | [Føj til AdGuard](adguard:add_dns_server?address=https://doh-pure.onedns.net/dns-query&name=doh-pure.onedns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-pure.onedns.net/dns-query&name=doh-pure.onedns.net) |
| DNS-over-TLS   | `tls://dot-pure.onedns.net`                        | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot-pure.onedns.net&name=dot-pure.onedns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-pure.onedns.net&name=dot-pure.onedns.net)                         |

#### Block Edition

| Protokol       | Adresse                                            |                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `52.80.66.66` og `117.50.22.22`                    | [Føj til AdGuard](adguard:add_dns_server?address=52.80.66.66&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=52.80.66.66&name=)                                                                       |
| DNS, IPv6      | `2400:7fc0:849e:200::4` og `2404:c2c0:85d8:901::4` | [Føj til AdGuard](adguard:add_dns_server?address=2400:7fc0:849e:200::4&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2400:7fc0:849e:200::4&name=)                                                   |
| DNS-over-HTTPS | `https://doh.onedns.net/dns-query`                 | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.onedns.net/dns-query&name=doh.onedns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.onedns.net/dns-query&name=doh.onedns.net) |
| DNS-over-TLS   | `tls://dot.onedns.net`                             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.onedns.net&name=dot.onedns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.onedns.net&name=dot.onedns.net)                         |

#### Family Edition

| Protokol  | Adresse                         |                                                                                                                                                   |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.60.30` og `52.80.60.30` | [Føj til AdGuard](adguard:add_dns_server?address=117.50.60.30&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=117.50.60.30&name=) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) er en gratis alternativ DNS-tjeneste fra OpenNIC Project.

| Protokol  | Adresse                 |                                                                                                                                                                     |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [Føj til AdGuard](adguard:add_dns_server?address=217.160.70.42&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=217.160.70.42&name=)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [Føj til AdGuard](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

Dette er blot en af de tilgængelige servere, den komplette liste findes på siden [OpenNIC public servers](https://servers.opennic.org/).

### Quad101

[Quad101](https://101.101.101.101) er en gratis, alternativ DNS-tjeneste uden logning fra TWNIC (Taiwan Network Information Center).

| Protokol     | Adresse                                |                                                                                                                                                                                                   |
| ------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4    | `101.101.101.101` og `101.102.103.104` | [Føj til AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                           |
| DNS, IPv6    | `2001:de4::101` og `2001:de4::102`     | [Føj til AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                               |
| DNS-over-TLS | `tls://101.101.101.101`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/)-løsninger til indholdsfiltrering og internetsikkerhed.

| Protokol  | Adresse          |                                                                                                                                                       |
| --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Føj til AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) er en offentlig schweizisk DNS-tjeneste leveret af [switch.ch](https://www.switch.ch/).

| Protokol       | Adresse                                                                          |                                                                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Udbyder: `dns.switch.ch` IP: `130.59.31.248`                                     | [Føj til AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Udbyder: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                | [Føj til AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Værtsnavn: `tls://dns.switch.ch` IP: `130.59.31.248` og IPv6: `2001:620:0:ff::2` | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### UK DNS Privacy Project

[UK DNS Privacy Project](https://dnsprivacy.org.uk), baseret i Storbritannien, er en offentlig DNS-tjeneste uden sporing og logning med DNSSEC aktiveret

| Protokol       | Adresse                                        |                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `209.250.227.42` og `64.176.190.82`            | [Føj til AdGuard](adguard:add_dns_server?address=209.250.227.42&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=209.250.227.42&name=)                                                                                               |
| DNS, IPv6      | `2001:19f0:7400:13c7:5400:05ff:fe40:d1ad`      | [Føj til AdGuard](adguard:add_dns_server?address=2001:19f0:7400:13c7:5400:05ff:fe40:d1ad&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:19f0:7400:13c7:5400:05ff:fe40:d1ad&name=)                                             |
| DNS-over-HTTPS | `https://resolver.dnsprivacy.org.uk/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://resolver.dnsprivacy.org.uk/dns-query&name=dnsprivacy.org.uk), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver.dnsprivacy.org.uk/dns-query&name=dnsprivacy.org.uk) |
| DNS-over-TLS   | `tls://resolver.dnsprivacy.org.uk`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://resolver.dnsprivacy.org.uk&name=dnsprivacy.org.uk), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver.dnsprivacy.org.uk&name=dnsprivacy.org.uk)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/), baseret i Sydkorea, er en offentlig DNS-tjeneste, der ikke logger brugerens IP. Annoncer og trackere blokeres.

#### SK Broadband

| Protokol       | Adresse                         |                                                                                                                                                                                                           |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud South Korea

| Protokol       | Adresse                                   |                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) er en gratis rekursiv DNS-tjeneste. Yandex.DNS-servere er placeret i Rusland, SNG-lande og Vesteuropa. Brugerforespørgsler behandles af nærmeste datacenter, hvilket giver høje forbindelseshastigheder.

#### Basis

I tilstanden *Basic* sker ingen trafikfiltrering.

| Protokol       | Adresse                                          |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` og `77.88.8.1`                       | [Føj til AdGuard](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` og `2a02:6b8:0:1::feed:0ff` | [Føj til AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`    | [Føj til AdGuard](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Sikker

I tilstanden *Safe* ydes beskyttelse mod inficerede og svigagtige websteder.

| Protokol       | Adresse                                          |                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` og `77.88.8.2`                      | [Føj til AdGuard](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` og `2a02:6b8:0:1::feed:bad` | [Føj til AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`      | [Føj til AdGuard](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                  | [Føj til AdGuard](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Family

I tilstanden *Family* ydes beskyttelse mod inficerede, svigagtige og voksenwebsteder.

| Protokol       | Adresse                                          |                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` og `77.88.8.7`                       | [Føj til AdGuard](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` og `2a02:6b8:0:1::feed:a11` | [Føj til AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`    | [Føj til AdGuard](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`                | [Føj til AdGuard](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Små personlige opløsere**

Disse er DNS-opløsere, som normalt drives af entusiaster eller små grupper. Selvom de måske ikke har samme kapacitet og redundans som større udbydere, prioriterer de ofte fortrolighed/transparens eller tilbyder særlige funktioner.

Vi kan ikke i tilstrækkelig grad monitorere deres tilgængelighed. **Brug af dem er for egen risiko.**

### AhaDNS

[AhaDNS](https://ahadns.com/) En adblocking DNS-tjeneste uden logning leveret af Fredrik Pettersson.

#### Holland

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [Føj til AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [Føj til AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Los Angeles

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [Føj til AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [Føj til AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### Arapurayil

[Arapurayil](https://dns.arapurayil.com) er en personlig DNS-tjeneste hostet i Mumbai, Indien.

Nul logging | Filtrerer annoncerer, trackere, phishing mv. | DNSSEC | QNAME-minimering | Intet EDNS Client Subnet.

| Protokol       | Adresse                                                      |                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Vært: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Føj til AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                              |
| DNS-over-HTTPS | Vært: `https://dns.arapurayil.com/dns-query`                 | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) er en server, der køres fra en Digital Ocean-droplet i BLR1-regionen. Vedligeholdes af Abhay Rana alias Nemo.

| Protokol       | Adresse                                                         |                                                                                                                                                   |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Føj til AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### Dandelion Sprout’s Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) er en personlig DNS-tjeneste hostet i Trondheim, Norge, vha. en AdGuard Home-infrastruktur.

Blokerer flere annoncer og malware end AdGuard DNS grundet en mere avanceret syntaks, men med mindre striks håndtering af trackere, samt blokering af alt-right tabloids og de fleste imageboards. Logning bruges til forbedring af de anvendte filterlister (f.eks. ved at afblokere websteder, som ikke burde have været blokeret) og til at bestemme de mindst forstyrrende tidspunkter for serversystemopdateringer.

| Protokol       | Adresse                                               |                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Føj til AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Føj til AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                   |
| DNS, IPv6      | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                   |
| DNSCrypt, IPv4 | Varierer; se link ovenfor.                            |                                                                                                                                                                                                                                                                                                   |

### DNS Forge

[DNS Forge](https://dnsforge.de/) er en redundant DNS-opløser med adblocker og nul logning leveret af [adminforge](https://adminforge.de/).

| Protokol       | Adresse                                              |                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` og `176.9.1.117`                      | [Føj til AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` og `2a01:4f8:141:316d::117` | [Føj til AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [Føj til AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [Føj til AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### dnswarden

| Protokol       | Adresse                                |                                                                                                                                                                                                                                                |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [Føj til AdGuard](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

Man kan også [opsætte en tilpasset DNS-server](https://dnswarden.com/customfilter.html) til adblocking eller filtrering af voksenindhold.

### FFMUC DNS

[FFMUC](https://ffmuc.net/), gratis DNS-servere leveret af Freifunk München.

| Protokol             | Adresse                                                               |                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://dot.ffmuc.net`                                      | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://doh.ffmuc.net/dns-query`                          | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Føj til AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                        |
| DNSCrypt, IPv6       | Udbyder: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Føj til AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                         |

### fvz DNS

[fvz DNS](http://meo.ws/) er en Fusls offentlig primær OpenNIC Tier2 Anycast DNS-opløser.

| Protokol       | Adresse                                                             |                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Føj til AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/)-testservere leveret af ibksturm. OPENNIC og DNSSEC uden filtrering og logging.

| Protokol             | Adresse                                                                  |                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Værtsnavn: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Værtsnavn: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Værtsnavn: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Føj til AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Udbyder: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`            | [Føj til AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) drives af Elias Ojala, Finland.

| Protokol       | Adresse                                  |                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Marbled Fennec

Marbled Fennec Networks hoster DNS-opløsere, som er i stand til at opløse både OpenNIC- og ICANN-domæner

| Protokol       | Adresse                                   |                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) er et lille adblocking DNS-hobbyprojekt.

#### OSZX DNS

Denne tjeneste er et lille adblocking DNS-hobbyprojekt med understøttelse af DoH, DoT og DNSCrypt v2.

| Protokol       | Adresse                                                                 |                                                                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                          | [Føj til AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                               | [Føj til AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Føj til AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Føj til AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                 |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                         | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                     | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

Disse servere tilbyder ingen adblocking, opbevarer ingen logfiler og har DNSSEC aktiveret.

| Protokol       | Adresse                                                                      |                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                               | [Føj til AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                   | [Føj til AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Føj til AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                          |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Føj til AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                          |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                          | [Føj til AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                      | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokerer flere end 140K reklame-, reklamesporings-, malware- og phishing-domæner. Nul logning, ingen ECS, DNSSEC-validering, gratis!

#### Singapore DNS Server

| Protokol       | Adresse                                                                   | Lokation                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                          | [Føj til AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                               | [Føj til AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Føj til AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                         |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Føj til AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                        |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cachet via tredjepart)                | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                          | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                     | [Føj til AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                      | [Føj til AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| Protokol       | Adresse                                                                       |                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                               | [Føj til AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                              | [Føj til AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Føj til AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                 |
| DNSCrypt, IPv6 | Udbyder: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Føj til AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                        |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                             | [Føj til AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                               | [Føj til AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                           | [Føj til AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### Seby DNS

[Seby DNS](https://dns.seby.io/) er en fortrolighedsfokuseret DNS-tjeneste leveret af Sebastian Schmidt. Nul logning, DNSSEC-validering.

#### DNS-server 1

| Protokol       | Adresse                                                   |                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                            | [Føj til AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Udbyder: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Føj til AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                 |
| DNS-over-TLS   | `tls://dot.seby.io`                                       | [Føj til AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) er en personlig DNS-server placeret i Vietnam og beregnet til personlig brug samt brug i mindre målestok. Tilbyder adblocking, malware-/phishing-beskyttelse, voksenindholdsfilter og DNSSEC-validering.

| Protokol       | Adresse                                 |                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.70.12.129`                         | [Føj til AdGuard](adguard:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=103.70.12.129&name=BlackMagiccDNS)                                                 |
| DNS, IPv6      | `2001:df4:4c0:1::399:1`                 | [Føj til AdGuard](adguard:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2001:df4:4c0:1::399:1&name=BlackMagiccDNS)                                 |
| DNS-over-QUIC  | `quic://rx.techomespace.com`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://rx.techomespace.com&name=BlackMagiccDNS)                       |
| DNS-over-HTTPS | `https://rx.techomespace.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS) |

### NWPS.fi DNS

[NWPS.fi DNS](https://nwps.fi) leverer DoH- og DoT-opløsere med to filtreringsniveauer.

#### Standard

Blokerer annoncer, trackere og malware

| Protokol       | Adresse                               |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.ns.nwps.fi/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://public.ns.nwps.fi/dns-query&name=public.ns.nwps.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://public.ns.nwps.fi/dns-query&name=public.ns.nwps.fi) |
| DNS-over-TLS   | `tls://public.ns.nwps.fi`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://public.ns.nwps.fi&name=public.ns.nwps.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.ns.nwps.fi&name=public.ns.nwps.fi)                         |

#### Børn

Børnevenligt filter, der også blokerer annoncer, trackere og malware

| Protokol       | Adresse                             |                                                                                                                                                                                                                           |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kids.ns.nwps.fi/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://kids.ns.nwps.fi/dns-query&name=kids.ns.nwps.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://kids.ns.nwps.fi/dns-query&name=kids.ns.nwps.fi) |
| DNS-over-TLS   | `tls://kids.ns.nwps.fi`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://kids.ns.nwps.fi&name=kids.ns.nwps.fi), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://kids.ns.nwps.fi&name=kids.ns.nwps.fi)                         |

### ASTRACAT DNS

[ASTRACAT DNS](https://astracat.vercel.app/) er en fortrolighedsorienteret DNS-opløser bygget på Cloudflares infrastruktur og ASTRACATs datacenter. Den fremhæver høj hastighed, ingen logning og ingen censur, hvilket giver en sikker og pålidelig DNS-opløsningsoplevelse.

| Protokol       | Adresse                                               |                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `85.209.2.112`                                        | [Føj til AdGuard](adguard:add_dns_server?address=85.209.2.112&name=ASTRACAT%20DNS), [<Føj til AdGuard VPN](adguardvpn:add_dns_server?address=85.209.2.112&name=ASTRACAT%20DNS)                                                                                                                    |
| DNS-over-HTTPS | `https://frd4wvnobp.cloudflare-gateway.com/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://frd4wvnobp.cloudflare-gateway.com/dns-query&name=frd4wvnobp.cloudflare-gateway.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://frd4wvnobp.cloudflare-gateway.com/dns-query&name=frd4wvnobp.cloudflare-gateway.com) |
| DNS-over-TLS   | `tls://frd4wvnobp.cloudflare-gateway.com`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://frd4wvnobp.cloudflare-gateway.com&name=frd4wvnobp.cloudflare-gateway.com), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://frd4wvnobp.cloudflare-gateway.com&name=frd4wvnobp.cloudflare-gateway.com)                         |

### DNSGuard

[DNSGuard](https://dnsguard.pub) blokerer annoncer, sporing samt malware og har en striks nul logning-politik.

| Protokol       | Adresse                          |                                                                                                                                                                                                       |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `179.61.253.223`                 | [Føj til AdGuard](adguard:add_dns_server?address=179.61.253.223&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=179.61.253.223&name=DNSGUARD)                                 |
| DNS 2, IPv4    | `181.214.231.96`                 | [Føj til AdGuard](adguard:add_dns_server?address=181.214.231.96&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=181.214.231.96&name=DNSGUARD)                                 |
| DNS 1, IPv6    | `2a0f:5707:aaf1:006c::1`         | [Føj til AdGuard](adguard:add_dns_server?address=2a0f:5707:aaf1:006c::1&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a0f:5707:aaf1:006c::1&name=DNSGUARD)                 |
| DNS 2, IPv6    | `2a0f:5707:aaf1:006c::2`         | [Føj til AdGuard](adguard:add_dns_server?address=2a0f:5707:aaf1:006c::2&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=2a0f:5707:aaf1:006c::2&name=DNSGUARD)                 |
| DNS-over-HTTPS | `https://dnsguard.pub/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://dnsguard.pub/dns-query&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsguard.pub/dns-query&name=DNSGUARD) |
| DNS-over-TLS   | `tls://dnsguard.pub`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dnsguard.pub&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsguard.pub&name=DNSGUARD)                         |
| DNS-over-QUIC  | `quic://dnsguard.pub`            | [Føj til AdGuard](adguard:add_dns_server?address=quic://dnsguard.pub&name=DNSGUARD), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=quic://dnsguard.pub&name=DNSGUARD)                       |

### 18Bit DNS

[18Bit DNS](https://www.18bit.cn) er en gratis, krypteret offentlig DNS-tjeneste til den kinesiske region, der har været i drift i mange år. Med flere end 10 endepunkter tilbyder den brugere i Kina-regionen hurtige, sikre og fortrolige DNS-tjenester. Den har endvidere malware- og phishing-beskyttelse.

| Protokol       | Adresse                          |                                                                                                                                                                                                       |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.18bit.cn/dns-query` | [Føj til AdGuard](adguard:add_dns_server?address=https://doh.18bit.cn/dns-query&name=18bitDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.18bit.cn/dns-query&name=18bitDNS) |
| DNS-over-TLS   | `tls://dns.18bit.cn`             | [Føj til AdGuard](adguard:add_dns_server?address=tls://dns.18bit.cn&name=18bitDNS), [Føj til AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.18bit.cn&name=18bitDNS)                         |
