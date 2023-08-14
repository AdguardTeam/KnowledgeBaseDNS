---
title: Známí poskytovatelé DNS
sidebar_position: 3
---

:::info

Zde nabízíme seznam důvěryhodných poskytovatelů DNS. Chcete-li je použít, nejprve si do zařízení nainstalujte Blokátor reklam AdGuard nebo AdGuard VPN. Poté na stejném zařízení klikněte na odkaz na poskytovatele v tomto článku

Rychlé odkazy: [Stáhnout Blokátor reklam AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [stáhnout AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) je alternativní řešení pro blokování reklam, ochranu soukromí a rodičovskou kontrolu. Poskytuje řadu potřebných funkcí ochrany proti online reklamám, slídičům a krádeži identity bez ohledu na to, jakou platformu a zařízení používáte.

#### Výchozí

Tyto servery blokují reklamy, slídiče a krádež identity.

| Protokol        | Adresa                                                                            |                                                                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.14` a `94.140.15.15`                                                   | [Přidat do AdGuardu](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6       | `2a10:50c0::ad1:ff` a `2a10:50c0::ad2:ff`                                         | [Přidat do AdGuardu](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS skrze HTTPS | `https://dns.adguard-dns.com/dns-query`                                           | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS skrze TLS   | `tls://dns.adguard-dns.com`                                                       | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS skrze QUIC  | `quic://dns.adguard-dns.com`                                                      | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                       |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                              |

#### Ochrana rodiny

Tyto servery poskytují výchozí funkce + blokování webových stránek pro dospělé + bezpečné vyhledávání.

| Protokol        | Adresa                                                                            |                                                                                                                                                                                                                                          |
| --------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `94.140.14.15` a `94.140.15.16`                                                   | [Přidat do AdGuardu](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6       | `2a10:50c0::bad1:ff` a `2a10:50c0::bad2:ff`                                       | [Přidat do AdGuardu](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS skrze HTTPS | `https://family.adguard-dns.com/dns-query`                                        | [Přidat do AdGuardu](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS skrze TLS   | `tls://family.adguard-dns.com`                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS skrze QUIC  | `quic://family.adguard-dns.com`                                                   | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                              |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                    |

#### Bez filtrování

Každý z těchto serverů poskytuje bezpečné a spolehlivé připojení, ale na rozdíl od serverů "Standardní" a "Ochrana rodiny" nic nefiltruje.

| Protokol        | Adresa                                                                             |                                                                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `94.140.14.140` a `94.140.14.141`                                                  | [Přidat do AdGuardu](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6       | `2a10:50c0::1:ff` a `2a10:50c0::2:ff`                                              | [Přidat do AdGuardu](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS skrze HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS skrze TLS   | `tls://unfiltered.adguard-dns.com`                                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS skrze QUIC  | `quic://unfiltered.adguard-dns.com`                                                | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                          |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                             |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) je bezplatná rekurzivní služba DNS. Servery Yandex.DNS se nacházejí v Rusku, zemích SNS a západní Evropě. Požadavky uživatelů zpracovává nejbližší datové centrum, které poskytuje vysoké rychlosti připojení.

#### Základní

V "Základním" režimu není filtrování datového provozu prováděno.

| Protokol       | Adresa                                                                    |                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `77.88.8.8` a `77.88.8.1`                                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=77.88.8.8&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` a `2a02:6b8:0:1::feed:0ff`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Přidat do AdGuardu](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)        |

#### Bezpečný

V "Bezpečném" režimu je poskytována ochrana před infikovanými a podvodnými stránkami.

| Protokol  | Adresa                                          |                                                                                                                                                                    |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.88` a `77.88.8.2`                      | [Přidat do AdGuardu](adguard:add_dns_server?address=77.88.8.88&name=),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=)                |
| DNS, IPv6 | `2a02:6b8::feed:bad` a `2a02:6b8:0:1::feed:bad` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Rodinný

V "Rodinném" režimu je zajištěna ochrana před infikovanými, podvodnými stránkami a stránkami pro dospělé.

| Protokol  | Adresa                                          |                                                                                                                                                                    |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `77.88.8.3` a `77.88.8.7`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=77.88.8.3&name=),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=)                  |
| DNS, IPv6 | `2a02:6b8::feed:a11` a `2a02:6b8:0:1::feed:a11` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) je služba DNS, která poskytuje přizpůsobitelné filtrování. Tato služba nabízí bezpečný způsob prohlížení webu bez nevhodného obsahu.

#### Rodinný filtr

Blokuje přístup ke všem webům pro dospělé, pornografickým a explicitním webům, včetně proxy serverů a domén VPN a webů se smíšeným obsahem.

| Protokol        | Adresa                                                       |                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.168` a `185.228.169.168`                        | [Přidat do AdGuardu](adguard:add_dns_server?address=185.228.168.168&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6       | `2a0d:2a00:1::` a `2a0d:2a00:2::`                            | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4  | Poskytovatel: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                              |
| DNSCrypt, IPv6  | Poskytoatelr: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                              |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`           | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS skrze TLS   | `tls://family-filter-dns.cleanbrowsing.org`                  | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Filtr pro dospělé

Je méně omezující než Rodinný filtr, blokuje pouze přístup k obsahu pro dospělé, škodlivým doménám a zamezuje krádeži identity.

| Protokol        | Adresa                                                        |                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.10` a `185.228.169.11`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=185.228.168.10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6       | `2a0d:2a00:1::1` a `2a0d:2a00:2::1`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4  | Poskytovatel: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                           |
| DNSCrypt, IPv6  | Poskytovatel: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                        |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`             | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS skrze TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                    | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Bezpečnostní filtr

Blokuje krádež identity, spam a škodlivé domény.

| Protokol        | Adresa                                               |                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.228.168.9` a `185.228.169.9`                    | [Přidat do AdGuardu](adguard:add_dns_server?address=185.228.168.9&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6       | `2a0d:2a00:1::2` a `2a0d:2a00:2::2`                  | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS skrze HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS skrze TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) je služba řešení doménových jmen, která řeší vaše požadavky DNS prostřednictvím celosvětové sítě serverů DNS. Odstraňuje nadměrné množství reklam a chrání před krádeží identity a spywarem.

| Protokol       | Adresa                                                                    |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` a `8.20.247.20`                                              | [Přidat do AdGuardu](adguard:add_dns_server?address=8.26.56.26&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)          |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) je bezplatná cloudová rekurzivní služba DNS, která poskytuje rychlý a spolehlivý přístup k webům a online aplikacím s integrovaným zabezpečením a informacemi o hrozbách.

#### Spolehlivost a výkonnost 1

Tyto servery poskytují spolehlivé a rychlé DNS vyhledávání bez blokování určitých kategorií.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `156.154.70.1` a `156.154.71.1`       | [Přidat do AdGuardu](adguard:add_dns_server?address=156.154.70.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` a `2610:a1:1019::1` | [Přidat do AdGuardu](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Spolehlivost a výkonnost 2*

Tyto servery poskytují spolehlivé a rychlé DNS vyhledávání bez blokování konkrétních kategorií a také zabraňují přesměrování odpovědí na neexistující doménu (NXDomain) na cílovou stránku.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `156.154.70.5` a `156.154.71.5`       | [Přidat do AdGuardu](adguard:add_dns_server?address=156.154.70.5&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` a `2610:a1:1019::5` | [Přidat do AdGuardu](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Ochrana před hrozbami

Tyto servery poskytují ochranu proti škodlivým doménám a obsahují také funkce "Spolehlivost a výkonnost".

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `156.154.70.2` a `156.154.71.2`       | [Přidat do AdGuardu](adguard:add_dns_server?address=156.154.70.2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` a `2610:a1:1019::2` | [Přidat do AdGuardu](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Zabezpečení rodiny

Tyto servery poskytují blokování obsahu pro dospělé a zahrnují také funkce "Spolehlivost a výkonnost" + "Ochrana před hrozbami".

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `156.154.70.3` a `156.154.71.3`       | [Přidat do AdGuardu](adguard:add_dns_server?address=156.154.70.3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` a `2610:a1:1019::3` | [Přidat do AdGuardu](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Zabezpečení podnikání

Tyto servery zajišťují blokování nežádoucího a časově náročného obsahu a obsahují také funkce "Spolehlivost a výkonnost" + "Ochrana před hrozbami" + "Zabezpečení rodiny".

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `156.154.70.4` a  `156.154.71.4`      | [Přidat do AdGuardu](adguard:add_dns_server?address=156.154.70.4&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` a `2610:a1:1019::4` | [Přidat do AdGuardu](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) je služba, která rozšiřuje DNS o funkce, jako je filtrování obsahu a ochrana proti krádeži identity.

#### Standardní

DNS servery s vlastním filtrováním, které chrání zařízení před malwarem.

| Protokol        | Adresa                                                            |                                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `208.67.222.222` a `208.67.220.220`                               | [Přidat do AdGuardu](adguard:add_dns_server?address=208.67.222.222&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6       | `2620:119:35::35` a `2620:119:53::53`                             | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:119:35::35&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                               |
| DNS skrze HTTPS | `https://doh.opendns.com/dns-query`                               | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

Servery OpenDNS, které zajišťují blokování obsahu pro dospělé.

| Protokol        | Adresa                                                           |                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `208.67.222.123` a `208.67.220.123`                              | [Přidat do AdGuardu](adguard:add_dns_server?address=208.67.222.123&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                    |
| DNS skrze HTTPS | `https://doh.familyshield.opendns.com/dns-query`                 | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) je bezplatná globální služba DNS, kterou můžete používat jako alternativu ke svému stávajícímu poskytovateli DNS.

| Protokol        | Adresa                                          |                                                                                                                                                                                                            |
| --------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `8.8.8.8` a `8.8.4.4`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=8.8.8.8&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6       | `2001:4860:4860::8888` a `2001:4860:4860::8844` | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS skrze HTTPS | `https://dns.google/dns-query`                  | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS skrze TLS   | `tls://dns.google`                              | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) je bezplatná a rychlá služba DNS, která funguje jako rekurzivní jmenný server poskytující překlad názvů domén pro libovolného hostitele na internetu.

#### Standardní

| Protokol              | Adresa                                          |                                                                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.1` a `1.0.0.1`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=1.1.1.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6             | `2606:4700:4700::1111` a `2606:4700:4700::1001` | [Přidat do AdGuardu](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS skrze HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS skrze HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS skrze TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Pouze blokování škodlivého softwaru

| Protokol        | Adresa                                          |                                                                                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `1.1.1.2` a `1.0.0.2`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=1.1.1.2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6       | `2606:4700:4700::1112` a `2606:4700:4700::1002` | [Přidat do AdGuardu](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS skrze HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS skrze TLS   | `tls://security.cloudflare-dns.com`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Blokování škodlivého softwaru a obsahu pro dospělé

| Protokol              | Adresa                                          |                                                                                                                                                                                                                                                                        |
| --------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `1.1.1.3` a `1.0.0.3`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=1.1.1.3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6             | `2606:4700:4700::1113` a `2606:4700:4700::1003` | [Přidat do AdGuardu](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS skrze HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS skrze TLS         | `tls://family.cloudflare-dns.com`               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) je bezplatná rekurzivní platforma DNS s libovolným vysíláním, která poskytuje vysoký výkon, ochranu soukromí a zabezpečení před krádeží identity a spywarem. Servery Quad9 neposkytují cenzurní komponentu.

#### Standardní

Obvyklé servery DNS, které poskytují ochranu před krádeží identity a spywarem. Zahrnují seznamy blokování, ověřování DNSSEC a další bezpečnostní funkce.

| Protokol        | Adresa                                                             |                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `9.9.9.9` a `149.112.112.112`                                      | [Přidat do AdGuardu](adguard:add_dns_server?address=9.9.9.9&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6       | `2620:fe::fe` IP: `2620:fe::fe:9`                                  | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:fe::fe&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                      |
| DNS skrze HTTPS | `https://dns.quad9.net/dns-query`                                  | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS skrze TLS   | `tls://dns.quad9.net`                                              | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Nezabezpečený

Nezabezpečené servery DNS neposkytují žádné zabezpečené seznamy zakázaných, DNSSEC, nebo EDNS Client-Subnet.

| Protokol        | Adresa                                                                |                                                                                                                                                                                                                                |
| --------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `9.9.9.10` a `149.112.112.10`                                         | [Přidat do AdGuardu](adguard:add_dns_server?address=9.9.9.10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6       | `2620:fe::10` IP: `2620:fe::fe:10`                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:fe::10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                    |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNS skrze HTTPS | `https://dns10.quad9.net/dns-query`                                   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS skrze TLS   | `tls://dns10.quad9.net`                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### Podpora [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

EDNS Client-Subnet je metoda, která zahrnuje součásti údajů o IP adresách koncových uživatelů v požadavcích zasílaných autoritativním serverům DNS. Poskytuje zabezpečený seznam zakázaných, DNSSEC, EDNS Client-Subnet.

| Protokol        | Adresa                                                             |                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `9.9.9.11` a `149.112.112.11`                                      | [Přidat do AdGuardu](adguard:add_dns_server?address=9.9.9.11&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6       | `2620:fe::11` IP: `2620:fe::fe:11`                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:fe::11&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                    |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                              |
| DNS skrze HTTPS | `https://dns11.quad9.net/dns-query`                                | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS skrze TLS   | `tls://dns11.quad9.net`                                            | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) je bezplatná služba DNS, která oproti jiným alternativám nabízí lepší stabilitu a zabezpečení DNS. Verisign respektuje soukromí uživatelů: neprodává veřejná data DNS třetím stranám a nepřesměrovává dotazy uživatelů pro zobrazování reklam.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `64.6.64.6` a `64.6.65.6`             | [Přidat do AdGuardu](adguard:add_dns_server?address=64.6.64.6&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` a `2620:74:1c::2:2` | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) je švýcarská veřejná služba DNS, kterou poskytuje [switch.ch](https://www.switch.ch/).

| Protokol        | Adresa                                                                                |                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | Poskytovatel: `dns.switch.ch` IP: `130.59.31.248`                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=130.59.31.248&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6       | Poskytovatel: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS skrze HTTPS | `https://dns.switch.ch/dns-query`                                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS skrze TLS   | Název hostitele: `tls://dns.switch.ch` IP: `130.59.31.248` a IPv6: `2001:620:0:ff::2` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) je bezplatná alternativní služba DNS společnosti Dyn.

| Protokol  | Adresa                            |                                                                                                                                                          |
| --------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` a `216.146.36.36` | [Přidat do AdGuardu](adguard:add_dns_server?address=216.146.35.35&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) je rychlý a bezplatný server bez přihlašování s funkcí ochrany soukromí.

| Protokol  | Adresa                                                      |                                                                                                                                                                                    |
| --------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` a `84.200.70.40`                             | [Přidat do AdGuardu](adguard:add_dns_server?address=84.200.69.80&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` a `2001:1608:10:25::9249:d69b` | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

Řešení [SkyDNS](https://www.skydns.ru/en/) pro filtrování obsahu a zabezpečení internetu.

| Protokol  | Adresa           |                                                                                                                                                            |
| --------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Přidat do AdGuardu](adguard:add_dns_server?address=193.58.251.251&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) je rychlá a bezpečná služba DNS s ochranou proti reklamám, sledování a krádeži identity.

#### West DNS Server (hlavní)

| Protokol        | Adresa                            |                                                                                                                                                                                                                        |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.comss.one/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS skrze TLS   | `tls://dns.comss.one`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS skrze QUIC  | `quic://dns.comss.one:784`        | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Sibiř a Dálný východ)

| Protokol        | Adresa                                 |                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://dns.east.comss.one/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS skrze TLS   | `tls://dns.east.comss.one`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS skrze QUIC  | `quic://dns.east.comss.one`            | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) je globální anycastová síť, která se skládá ze serverů umístěných po celém světě — v Americe, Evropě, Africe, Austrálii a na Dálném východě, aby bylo zajištěno rychlé a spolehlivé překládání DNS z libovolného místa na světě.

| Protokol  | Adresa                          |                                                                                                                                                        |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `195.46.39.39` a `195.46.39.40` | [Přidat do AdGuardu](adguard:add_dns_server?address=195.46.39.39&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) chrání před krádeží osobních a finančních údajů. Chrání vás před viry, ransomwarem a dalším malwarem.

#### Soukromý

V "Soukromém" režimu — pouze překlad DNS.

| Protokol                 | Adresa                                                                                                   |                                                                                                                                                                                                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.10` a `149.112.122.10`                                                                      | [Přidat do AdGuardu](adguard:add_dns_server?address=149.112.121.10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                |
| DNS, IPv6                | `2620:10A:80BB::10` a `2620:10A:80BC::10`                                                                | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                          |
| DNS skrze HTTPS          | `https://private.canadianshield.cira.ca/dns-query`                                                       | [Přidat do AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS skrze TLS – soukromý | Název hostitele: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` a IPv6: `2620:10A:80BB::10` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                        |

#### Chráněný

V "Chráněném" režimu — ochrana proti malwaru a krádeži identity.

| Protokol                 | Adresa                                                                                                     |                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` a `149.112.122.20`                                                                        | [Přidat do AdGuardu](adguard:add_dns_server?address=149.112.121.20&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` a  `2620:10A:80BC::20`                                                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS skrze HTTPS          | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [Přidat do AdGuardu](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS skrze TLS – chráněný | Název hostitele: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` a IPv6: `2620:10A:80BB::20` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Rodinný

V "Rodinném" režimu — Chráněný + blokování obsahu pro dospělé.

| Protokol                | Adresa                                                                                                  |                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4               | `149.112.121.30` a `149.112.122.30`                                                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=149.112.121.30&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6               | `2620:10A:80BB::30` a `2620:10A:80BC::30`                                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS skrze HTTPS         | `https://family.canadianshield.cira.ca/dns-query`                                                       | [Přidat do AdGuardu](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS skrze TLS – rodinný | Název hostitele: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` a IPv6: `2620:10A:80BB::30` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) je bezplatná alternativní služba DNS projektu OpenNIC.

| Protokol  | Adresa                                   |                                                                                                                                                              |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `185.121.177.177` a `169.239.202.202`    | [Přidat do AdGuardu](adguard:add_dns_server?address=185.121.177.177&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` a `2a05:dfc7:5353::53` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) — malý zájmový projekt DNS. Žádné záznamy, Ethereum Name Service, DNSSEC ready, filtrování reklam, slídičů a malware.

#### Finský DNS server

| Protokol              | Adresa                                                                       |                                                                                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                          |

#### Japonský DNS server

| Protokol              | Adresa                                                                                  |                                                                                                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                        | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-jp.blahdns.com/dns-query`                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                              |

#### Německý DNS server

| Protokol              | Adresa                                                                       |                                                                                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot-de.blahdns.com` IP: `159.69.198.101`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                      |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                          |

### DNS pro rodinu

[DNS pro rodinu](https://dnsforfamily.com/) se zaměřuje na blokování webových stránek pro dospělé. Umožňuje dětem i dospělým bezpečně surfovat po internetu bez obav, že je budou sledovat škodlivé webové stránky.

| Protokol        | Adresa                                                         |                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS skrze TLS   | `tls://dns-dot.dnsforfamily.com`                               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4       | `94.130.180.225` a `78.47.64.161`                              | [Přidat do AdGuardu](adguard:add_dns_server?address=94.130.180.225&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6       | `2a01:4f8:1c0c:40db::1` a `2a01:4f8:1c17:4df8::1`              | [Přidat do AdGuardu](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4  | Poskytovatel: `dnsforfamily.com` IP: `94.130.180.225`          | [Přidat do AdGuardu](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                   |
| DNSCrypt, IPv6  | Poskytovatel: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                       |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) je ověřování řešitelů Open DNSSEC. CZ.NIC neshromažďuje žádné osobní údaje ani neshromažďuje informace o stránkách, na které zařízení odesílají osobní údaje.

| Protokol        | Adresa                                    |                                                                                                                                                                                                    |
| --------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `193.17.47.1` a `185.43.135.1`            | [Přidat do AdGuardu](adguard:add_dns_server?address=193.17.47.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6       | `2001:148f:ffff::1` a `2001:148f:fffe::1` | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS skrze HTTPS | `https://odvr.nic.cz/doh`                 | [Přidat do AdGuardu](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS skrze TLS   | `tls://odvr.nic.cz`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) je bezplatná rekurzivní služba DNS, která se zavázala poskytovat rychlé, stabilní a bezpečné řešení DNS pro většinu uživatelů internetu. Obsahuje funkci AliGuard, která chrání uživatele před různými útoky a hrozbami.

| Protokol        | Adresa                               |                                                                                                                                                                                                                            |
| --------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `223.5.5.5` a `223.6.6.6`            | [Přidat do AdGuardu](adguard:add_dns_server?address=223.5.5.5&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6       | `2400:3200::1` a `2400:3200:baba::1` | [Přidat do AdGuardu](adguard:add_dns_server?address=2400:3200::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS skrze HTTPS | `https://dns.alidns.com/dns-query`   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS skrze TLS   | `tls://dns.alidns.com`               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

Služba DNS anycast založená na protokolu IPv6 se silnými bezpečnostními funkcemi a ochranou před spywarem a škodlivými webovými stránkami. Podporuje DNS64 a poskytuje překlad názvů domén pouze pro uživatele IPv6.

| Protokol        | Adresa                            |                                                                                                                                                                                                                        |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6       | `240C::6666` a `240C::6644`       | [Přidat do AdGuardu](adguard:add_dns_server?address=240C::6666&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS skrze HTTPS | `https://dns.cfiec.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS skrze TLS   | `tls://dns.cfiec.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) je anycast systém filtrování internetu, který chrání děti před nevhodnými webovými stránkami a zneužitelným obsahem.

| Protokol       | Adresa                                                          |                                                                                                                                                              |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `180.131.144.144` a `180.131.145.145`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=180.131.144.144&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Přidat do AdGuardu](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                |

### 360 Secure DNS

**360 Secure DNS** je špičková rekurzivní služba DNS s pokročilou ochranou před síťovými hrozbami.

| Protokol        | Adresa                           |                                                                                                                                                                                                            |
| --------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `101.226.4.6` a `218.30.118.6`   | [Přidat do AdGuardu](adguard:add_dns_server?address=101.226.4.6&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4       | `123.125.81.6` a `140.207.198.6` | [Přidat do AdGuardu](adguard:add_dns_server?address=123.125.81.6&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS skrze HTTPS | `https://doh.360.cn/dns-query`   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS skrze TLS   | `tls://dot.360.cn`               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) je veřejná služba DNS provozovaná společností Internet Initiative Japan. Blokuje také obsah, který zneužívá děti.

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://public.dns.iij.jp/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS skrze TLS   | `tls://public.dns.iij.jp`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) je poskytovatel DNS šetrný k soukromí, který má dlouholeté zkušenosti s vývojem služeb pro překlad názvů domén a jehož cílem je poskytovat uživatelům rychlejší, přesnější a stabilnější služby rekurzivního překladu.

| Protokol        | Adresa                          |                                                                                                                                                                                                |
| --------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `119.29.29.29` a `119.28.28.28` | [Přidat do AdGuardu](adguard:add_dns_server?address=119.29.29.29&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS skrze HTTPS | `https://doh.pub/dns-query`     | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS skrze HTTPS | `https://dns.pub/dns-query`     | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS skrze TLS   | `tls://dot.pub`                 | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** je profesionální a vysoce spolehlivá služba DNS.

#### Normální

Blokuje reklamy a obtěžující weby.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.114` a `114.114.115.115` | [Přidat do AdGuardu](adguard:add_dns_server?address=114.114.114.114&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Bezpečný

Blokuje krádež identity, škodlivé a další nebezpečné weby.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.119` a `114.114.115.119` | [Přidat do AdGuardu](adguard:add_dns_server?address=114.114.114.119&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Rodinný

Tyto servery blokují webové stránky pro dospělé a nevhodný obsah.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `114.114.114.110` a `114.114.115.110` | [Přidat do AdGuardu](adguard:add_dns_server?address=114.114.114.110&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) je bezplatná alternativní služba DNS bez přihlašování od TWNIC (Taiwan Network Information Center).

| Protokol        | Adresa                                |                                                                                                                                                                                                                    |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `101.101.101.101` a `101.102.103.104` | [Přidat do AdGuardu](adguard:add_dns_server?address=101.101.101.101&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6       | `2001:de4::101` a `2001:de4::102`     | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:de4::101&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS skrze HTTPS | `https://dns.twnic.tw/dns-query`      | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS skrze TLS   | `tls://101.101.101.101`               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** je bezpečná, rychlá a bezplatná služba DNS s možností blokování škodlivých domén.

#### Pure Edition

| Protokol  | Adresa                         |                                                                                                                                                        |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `117.50.10.10` a `52.80.52.52` | [Přidat do AdGuardu](adguard:add_dns_server?address=117.50.10.10&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokol  | Adresa                         |                                                                                                                                                        |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `117.50.11.11` a `52.80.66.66` | [Přidat do AdGuardu](adguard:add_dns_server?address=117.50.11.11&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) blokuje více než 140 tisíc reklam, slídičů, malwaru a domén zaměřených na krádež identity. Žádné záznamy, ECS, ověření DNSSEC, je zdarma!

#### Singapurský DNS server

| Protokol        | Adresa                                                                         | Umístění                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `174.138.21.128`                                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=174.138.21.128&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6       | `2400:6180:0:d0::5f6e:4001`                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                           |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                          |
| DNS skrze HTTPS | `https://doh.tiarap.org/dns-query` (uloženo v mezipaměti třetích stran)        | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS skrze HTTPS | `https://doh.tiar.app/dns-query`                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS skrze QUIC  | `quic://doh.tiar.app`                                                          | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS skrze TLS   | `tls://dot.tiar.app`                                                           | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japonský DNS server

| Protokol        | Adresa                                                                             |                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `172.104.93.80`                                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=172.104.93.80&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6       | `2400:8902::f03c:91ff:feda:c514`                                                   | [Přidat do AdGuardu](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                   |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                          |
| DNS skrze HTTPS | `https://jp.tiarap.org/dns-query`                                                  | [Přidat do AdGuardu](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS skrze HTTPS | `https://jp.tiar.app/dns-query`                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS skrze TLS   | `tls://jp.tiar.app`                                                                | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) je otevřená, bezplatná a veřejná služba DNS. Bez přesměrování DNS a záznamů.

| Protokol  | Adresa                              |                                                                                                                                                            |
| --------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` a `172.104.49.100` | [Přidat do AdGuardu](adguard:add_dns_server?address=172.104.237.57&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` a `37.235.1.177`     | [Přidat do AdGuardu](adguard:add_dns_server?address=37.235.1.174&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) je bezplatný anonymní DNS řešitel od Freenom World.

| Protokol  | Adresa                        |                                                                                                                                                      |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` a `80.80.81.81` | [Přidat do AdGuardu](adguard:add_dns_server?address=80.80.80.80&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) je malý projekt pro blokování reklam založený na DNS.

#### Server OSZX

Tyto servery neposkytují žádné blokování reklam, neuchovávají žádné záznamy a mají povolený DNSSEC.

| Protokol        | Adresa                                                                       |                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `51.38.83.141`                                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=51.38.83.141&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::d64`                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                  |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Přidat do AdGuardu](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                   |
| DNS skrze HTTPS | `https://dns.oszx.co/dns-query`                                              | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS skrze TLS   | `tls://dns.oszx.co`                                                          | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### Server PumpleX

Tyto servery neposkytují žádné blokování reklam, neuchovávají žádné záznamy a mají povolený DNSSEC.

| Protokol        | Adresa                                                                            |                                                                                                                                                                                                                                |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `51.38.82.198`                                                                    | [Přidat do AdGuardu](adguard:add_dns_server?address=51.38.82.198&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6       | `2001:41d0:801:2000::1b28`                                                        | [Přidat do AdGuardu](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                            |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                            |
| DNS skrze HTTPS | `https://dns.pumplex.com/dns-query`                                               | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS skrze TLS   | `tls://dns.pumplex.com`                                                           | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) provozuje služby ochrany soukromí DNS, které pomáhají chránit provoz DNS a diverzifikovat prostředí DNS řešitelů nabízejících moderní protokoly.

| Protokol        | Adresa                                  |                                                                                                                                                                                                                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://doh.applied-privacy.net/query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS skrze TLS   | `tls://dot1.applied-privacy.net`        | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) je služba DNS od společnosti Strongarm, která zabraňuje interakci se škodlivým obsahem.

| Protokol  | Adresa                           |                                                                                                                                                          |
| --------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` a `52.3.100.184` | [Přidat do AdGuardu](adguard:add_dns_server?address=54.174.40.213&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) je služba DNS společnosti SafeSurfer, která chrání vaše zařízení před škodlivým obsahem pro dospělé.

| Protokol       | Adresa                                                                |                                                                                                                                                              |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `104.155.237.225` a `104.197.28.121`                                  | [Přidat do AdGuardu](adguard:add_dns_server?address=104.155.237.225&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)        |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) je bezpečný, soukromý, open-source DNS řešitel s ochranou proti malwaru, blokováním reklam a bez záznamů. Blokuje všechny požadavky na služby Google v telefonu, tabletu nebo počítači.

| Protokol        | Adresa                                                                            |                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4  | Poskytovatel: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                |
| DNSCrypt, IPv6  | Poskytovatel: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                   |
| DNS skrze HTTPS | `https://dns.decloudus.com/dns-query`                                             | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS skrze TLS   | `tls://dns.decloudus.com`                                                         | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) provozuje Elias Ojala, Finsko.

| Protokol        | Adresa                                   |                                                                                                                                                                                                                                                     |
| --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS skrze TLS   | `tls://resolver-eu.lelux.fi`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi),  [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) je server běžící z dropletu Digital Ocean v regionu BLR1. Spravuje Abhay Rana alias Nemo.

| Protokol       | Adresa                                                               |                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Přidat do AdGuardu](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) poskytuje bezplatnou službu DNS bez záznamů, DNSSEC povolen.

| Protokol        | Adresa                            |                                                                                                                                                                                                            |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.222.222.222` a `45.11.45.11` | [Přidat do AdGuardu](adguard:add_dns_server?address=185.222.222.222&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6       | `2a09::` a `2a11::`               | [Přidat do AdGuardu](adguard:add_dns_server?address=2a09::&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS skrze HTTPS | `https://doh.dns.sb/dns-query`    | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS skrze TLS   | `tls://185.222.222.222`           | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) je redundantní DNS řešitel s blokátorem reklam a bez záznamů, který poskytuje [adminforge](https://adminforge.de/).

| Protokol        | Adresa                                              |                                                                                                                                                                                                                |
| --------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `176.9.93.198` a `176.9.1.117`                      | [Přidat do AdGuardu](adguard:add_dns_server?address=176.9.93.198&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6       | `2a01:4f8:151:34aa::198` a `2a01:4f8:141:316d::117` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS skrze HTTPS | `https://dnsforge.de/dns-query`                     | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS skrze TLS   | `tls://dnsforge.de`                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

Servery [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) poskytované společností [Restena Foundation](https://www.restena.lu/).

| Protokol        | Adresa                                                                            |                                                                                                                                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` a IPv6: `2001:a18:1::29` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS skrze TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` a IPv6: `2001:a18:1::29`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu) |

### fvz DNS

[fvz DNS](http://meo.ws/) je veřejný primární OpenNIC Tier2 Anycast DNS řešitel společnosti Fusl.

| Protokol       | Adresa                                                                   |                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Přidat do AdGuardu](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Přidat do AdGuardu](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) bezplatné DNS servery poskytované společností Freifunk München.

| Protokol              | Adresa                                                                     |                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://dot.ffmuc.net`                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://doh.ffmuc.net/dns-query`                         | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Přidat do AdGuardu](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                          |
| DNSCrypt, IPv6        | Poskytovatel: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                           |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) je veřejný řešitel provozovaný společností Digital Society. Hostováno v Curychu ve Švýcarsku.

| Protokol        | Adresa                                                                                       |                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` a IPv6: `2a05:fc84::42` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS skrze TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` a IPv6: `2a05:fc84::43`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) je veřejná šifrovaná služba DNS, kterou provozuje [LibreOps](https://libreops.cc/).

| Protokol        | Adresa                                       |                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `88.198.92.222`                              | [Přidat do AdGuardu](adguard:add_dns_server?address=88.198.92.222&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS skrze HTTPS | `https://doh.libredns.gr/dns-query`          | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS skrze HTTPS | `https://doh.libredns.gr/ads`                | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS skrze TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) jsou testovací servery poskytované společností ibksturm. OPENNIC, DNSSEC, bez filtrování, bez záznamů.

| Protokol              | Adresa                                                                         |                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS, IPv4   | Název hostitele: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS skrze QUIC, IPv4  | Název hostitele: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS skrze HTTPS, IPv4 | Název hostitele: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4        | Poskytovatel: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`             | [Přidat do AdGuardu](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                  |

### Soukromý DNS

Společný otevřený projekt na podporu, implementaci a nasazení [DNS Privacy](https://dnsprivacy.org/).

DNS servery, které provozují vývojáři [Stubby](https://getdnsapi.net/).

| Protokol      | Adresa                                                                                                                                  |                                                                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze TLS | Název hostitele: `tls://getdnsapi.net` IP: `185.49.141.37` a IPv6: `2a04:b900:0:100::37`                                                | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS skrze TLS | Poskytovatel: `Surfnet`, Název hostitele: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` a IPv6: `2001:610:1:40ba:145:100:185:15`  | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS skrze TLS | Poskytovatel: `Surfnet`, Název hostitele: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` a IPv6: `2001:610:1:40ba:145:100:185:16` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Ostatní servery DNS se zásadou 'bez záznamů'.

| Protokol            | Adresa                                                                                                                         |                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS       | Poskytovatel: `UncensoredDNS`, Název hostitele: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` a IPv6: `2a01:3a0:53:53::0` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS skrze TLS       | Poskytovatel: `UncensoredDNS`, Název hostitele: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` a IPv6: `2001:67c:28a4::` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS skrze TLS       | Poskytovatel: `dkg`, Název hostitele: `tls://dns.cmrg.net` IP: `199.58.81.218` a IPv6: `2001:470:1c:76d::53`                   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS skrze TLS, IPv4 | Název hostitele: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                                | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS skrze TLS       | Název hostitele: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` a IPv6: `2001:8b0:24:24::24`                             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS skrze TLS       | Název hostitele: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` a IPv6: `2a01:4f8:c0c:3c03::2`                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS skrze TLS       | Název hostitele: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` a IPv6: `2a01:4f8:c0c:3bfc::2`                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS skrze TLS, IPv4 | Název hostitele: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS skrze TLS       | Název hostitele: `tls://dns.neutopia.org` IP: `89.234.186.112` a IPv6: `2a00:5884:8209::2`                                     | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS skrze TLS       | Poskytovatel: `Go6Lab` Název hostitele: `tls://privacydns.go6lab.si` a IPv6: `2001:67c:27e4::35`                               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS skrze TLS       | Název hostitele: `tls://dot.securedns.eu` IP: `146.185.167.43` a IPv6: `2a03:b0c0:0:1010::e9a:3001`                            | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

DNS servery s minimálními záznamy/omezeními. Tyto servery používají některé záznamy, samopodepsané certifikáty nebo nepodporují striktní režim.

| Protokol      | Adresa                                                                                                                      |                                                                                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze TLS | Poskytovatel: `NIC Chile`, Název hostitele: `dnsotls.lab.nic.cl` IP: `200.1.123.46` a IPv6: `2001:1398:1:0:200:1:123:46`    | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS skrze TLS | Poskytovatel: `OARC`, Název hostitele: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` a IPv6: `2620:ff:c000:0:1::64:25` | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) je služba DNS pro blokování reklam, bez záznamů aktivit, poskytuje Fredrik Pettersson.

#### Blitz

[Konfigurovatelné filtrování](https://blitz-setup.ahadns.com/) – celosvětová varianta pouze pro DoH.

| Protokol                                      | Adresa                            |                                                                                                                                                                                                                              |
| --------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS, necenzurováno                | `https://blitz.ahadns.com`        | [Přidat do AdGuardu](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS skrze HTTPS, filtr OISD                   | `https://blitz.ahadns.com/1:1`    | [Přidat do AdGuardu](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS skrze HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Nizozemsko

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `5.2.75.75`                           | [Přidat do AdGuardu](adguard:add_dns_server?address=5.2.75.75&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6       | `2a04:52c0:101:75::75`                | [Přidat do AdGuardu](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS skrze HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS skrze TLS   | `tls://dot.nl.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Indie

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.79.120.233`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=45.79.120.233&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6       | `2400:8904:e001:43::43`               | [Přidat do AdGuardu](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS skrze HTTPS | `https://doh.in.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS skrze TLS   | `tls://dot.in.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `45.67.219.208`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=45.67.219.208&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6       | `2a04:bdc7:100:70::70`                | [Přidat do AdGuardu](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS skrze HTTPS | `https://doh.la.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS skrze TLS   | `tls://dot.la.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `185.213.26.187`                      | [Přidat do AdGuardu](adguard:add_dns_server?address=185.213.26.187&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6       | `2a0d:5600:33:3::3`                   | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS skrze HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS skrze TLS   | `tls://dot.ny.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polsko

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS skrze TLS   | `tls://dot.pl.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Itálie

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.it.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS skrze TLS   | `tls://dot.it.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Španělsko

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.es.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS skrze TLS   | `tls://dot.es.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Norsko

| Protokol        | Adresa                                |                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://doh.no.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS skrze TLS   | `tls://dot.no.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protokol        | Adresa                                 |                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS skrze TLS   | `tls://dot.chi.ahadns.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) je služba DNS zaměřená na ochranu soukromí, kterou poskytuje Sebastian Schmidt. Bez záznamů, ověřování DNSSEC.

#### DNS server 1

| Protokol       | Adresa                                                         |                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                                 | [Přidat do AdGuardu](adguard:add_dns_server?address=45.76.113.31&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Poskytovatel: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Přidat do AdGuardu](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                   |
| DNS skrze TLS  | `tls://dot.seby.io`                                            | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[PuntCAT](http://www.servidordenoms.cat/) se fyzicky nachází nedaleko Barcelony ve Španělsku. puntCAT nabízí veřejnou službu DNS, která je bezplatná, bezpečná, blízká a respektuje vaše soukromí.

| Protokol  | Adresa             |                                                                                                                                                                |
| --------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Přidat do AdGuardu](adguard:add_dns_server?address=109.69.8.51&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) provozuje veřejné DNS řešitele, které zrychlují požadavky a zvyšují redundanci. Službu poskytuje [Peerix](https://www.peerix.net/)

#### Výchozí

Tyto servery poskytují překlad DNS bez filtrování provozu.

| Protokol        | Adresa                                |                                                                                                                                                                                                                                |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4       | `185.235.81.1` a `185.235.81.2`       | [Přidat do AdGuardu](adguard:add_dns_server?address=185.235.81.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6       | `2a0d:4d00:81::1` a `2a0d:4d00:81::2` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS skrze HTTPS | `https://doh.dnslify.com/dns-query`   | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS skrze TLS   | `tls://doh.dnslify.com`               | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Bezpečný

Bezpečný režim chrání před infikovanými, podvodnými nebo stránkami s boty.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `185.235.81.3` a `185.235.81.4`       | [Přidat do AdGuardu](adguard:add_dns_server?address=185.235.81.3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` a `2a0d:4d00:81::4` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Rodinný

Rodinný režim nabízí ochranu pomocí "bezpečných" řešitelů a blokuje stránky pro dospělé.

| Protokol  | Adresa                                |                                                                                                                                                              |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4 | `185.235.81.5` a `185.235.81.6`       | [Přidat do AdGuardu](adguard:add_dns_server?address=185.235.81.5&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` a `2a0d:4d00:81::6` | [Přidat do AdGuardu](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) poskytuje kromě volně konfigurovatelných filtrovacích řešitelů s volitelnými záznamy také veřejně přístupné nefiltrující řešitele bez záznamů.

#### Ultra-low latency

| Protokol        | Adresa                   |                                                                                                                                                                                                                            |
| --------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://dns.nextdns.io` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS skrze TLS   | `tls://dns.nextdns.io`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokol        | Adresa                           |                                                                                                                                                                                                                                                            |
| --------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://anycast.dns.nextdns.io` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS skrze TLS   | `tls://anycast.dns.nextdns.io`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) poskytuje službu DNS skrze HTTPS běžící jako Cloudflare Worker a službu DNS skrze TLS běžící jako Fly.io Worker s konfigurovatelnými seznamy zakázaných.

#### Bez filtrování

| Protokol        | Adresa                          |                                                                                                                                                                                                                                  |
| --------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://basic.rethinkdns.com/` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS skrze TLS   | `tls://max.rethinkdns.com`      | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) je přizpůsobitelná DNS služba s funkcí proxy serveru. To znamená, že dokáže nejen blokovat (reklamy, porno atd.), ale také odblokovat webové stránky a služby.

#### Bez filtrování

| Protokol        | Adresa                            |                                                                                                                                                                                              |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.0` a `76.76.10.0`        | [Přidat do AdGuardu](adguard:add_dns_server?address=76.76.2.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6            | `2606:1a40::` a `2606:1a40:1::`   | [Přidat do AdGuardu](adguard:add_dns_server?address=2606:1a40::&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS skrze HTTPS | `https://freedns.controld.com/p0` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS skrze TLS   | `p0.freedns.controld.com`         | [Přidat do AdGuardu](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Blokování malwaru

| Protokol        | Adresa                            |                                                                                                                                                                                              |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.1`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=76.76.2.1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS skrze HTTPS | `https://freedns.controld.com/p1` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS skrze TLS   | `tls://p1.freedns.controld.com`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Blokování malwaru + reklam

| Protokol        | Adresa                            |                                                                                                                                                                                              |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.2`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=76.76.2.2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS skrze HTTPS | `https://freedns.controld.com/p2` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS skrze TLS   | `tls://p2.freedns.controld.com`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Blokování malwaru + reklam + sociálních médií

| Protokol        | Adresa                            |                                                                                                                                                                                              |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4       | `76.76.2.3`                       | [Přidat do AdGuardu](adguard:add_dns_server?address=76.76.2.3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS skrze HTTPS | `https://freedns.controld.com/p3` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS skrze TLS   | `tls://p3.freedns.controld.com`   | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Přidat do AdGuardu VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) poskytuje veřejně přístupné DNS s minimalizací QNAME, koncové body se nacházejí v Austrálii, Německu, Singapuru, Švédsku, Velké Británii a Spojených státech (New York a Los Angeles).

#### Bez filtrování

| Protokol        | Adresa                              |                                                                                                                                                                                                                                |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://doh.mullvad.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS skrze TLS   | `tls://doh.mullvad.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Blokování reklam

| Protokol        | Adresa                                      |                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS skrze TLS   | `tls://adblock.doh.mullvad.net`             | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Small personal resolvers

V této části uvádíme malé, většinou osobní DNS řešitele. Často mají pouze jeden nebo velmi málo serverů a horší provozuschopnost než "velcí" poskytovatelé. Nebudeme moci řádně sledovat jejich dostupnost. **Používejte je na vlastní nebezpečí!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) je osobní služba DNS hostovaná v Bombaji v Indii.

Bez záznamů | Filtruje reklamy, slídiče, blokuje krádež identity atd. | DNSSEC | Minimalizace QNAME | Bez EDNS Client-Subnet.

| Protokol        | Adresa                                                       |                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4  | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Přidat do AdGuardu](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                |
| DNS skrze HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Oficiální DNS server Dandelion Sprout's

[Oficiální DNS server Dandelion Sprout's](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) je osobní služba DNS hostovaná v norském Trondheimu, která využívá infrastrukturu AdGuard Home.

Blokuje více reklam a škodlivého softwaru než AdGuard DNS díky pokročilejší syntaxi, ale lépe si poradí se slídiči a blokuje pravicové bulváry a většinu imageboardů. Protokolování se používá ke zlepšení používaných seznamů filtrů (např. odblokováním stránek, které neměly být blokovány) a k určení nejméně vhodných časů pro aktualizace systému serveru.

| Protokol        | Adresa                                                |                                                                                                                                                                                                                                                                                                        |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS skrze HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Přidat do AdGuardu](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS skrze TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Přidat do AdGuardu](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS skrze QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [Přidat do AdGuardu](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Přidat do AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4       | Různé; viz výše uvedený odkaz.                        |                                                                                                                                                                                                                                                                                                        |
| DNS, IPv6       | Různé; viz výše uvedený odkaz.                        |                                                                                                                                                                                                                                                                                                        |
| DNSCrypt, IPv4  | Různé; viz výše uvedený odkaz.                        |                                                                                                                                                                                                                                                                                                        |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) - Anycast/GeoDNS DNS skrze HTTPS, DNS skrze TLS řeší s blokováním: reklamy, sledování, adware, malware, škodlivé aktivity a phishingové společnosti, blokuje ~1M domén. Může obsahovat 24h/48h záznamy pro zmírnění útoku DDoS/Flood.

#### Adaptivní filtrování (ADA)

Doporučeno pro většinu uživatelů, velmi flexibilní filtrování s blokováním většiny reklamních sítí, sledování reklam, malwaru a podvodných domén.

| Protokol        | Adresa                              |                                                                                  |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://ada.openbld.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://ada.openbld.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Přísné filtrování (RIC)

Přísnější zásady filtrování s blokováním - reklamy, marketing, sledování, malware, clickbait, coinhive a podvodné domény.

| Protokol        | Adresa                              |                                                                                  |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| DNS skrze HTTPS | `https://ric.openbld.net/dns-query` | [Přidat do AdGuardu](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS skrze TLS   | `tls://ric.openbld.net`             | [Přidat do AdGuardu](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
