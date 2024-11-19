---
title: Bilinen DNS Sağlayıcıları
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Burada güvenilir DNS sağlayıcılarının bir listesini tavsiye ediyoruz. Bunları kullanmak için önce cihazınıza AdGuard Reklam Engelleyici veya AdGuard VPN yükleyin. Ardından, aynı cihazda, bu makaledeki bir sağlayıcıya giden bağlantıya tıklayın

Hızlı bağlantılar: [AdGuard Reklam Engelleyici indir](https://agrd.io/download-kb-adblock), [AdGuard VPN indir](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

## **Herkese açık anycast çözümleyicileri**

Bunlar, DNS sorgularınızı en yakın veri merkezine yönlendirmek için herhangi bir yayın yönlendirmesini kullanan, küresel olarak dağıtılmış, büyük ölçekli DNS çözümleyicilerdir.

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html), reklam engelleme, gizlilik koruması ve ebeveyn denetimi için alternatif bir çözümdür. Hangi platformu ve cihazı kullanırsanız kullanın, çevrimiçi reklamlara, izleyicilere ve kimlik avına karşı gerekli sayıda koruma özelliği sağlar.

#### Default

Bu sunucular reklamları, izlemeyi ve kimlik avını engeller.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` ve `94.140.15.15`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6      | `2a10:50c0::ad1:ff` ve `2a10:50c0::ad2:ff`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                        | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                    | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                   | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                    |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                           |

#### Family Protection

Bu sunucular Default özellikler + Yetişkinlere yönelik siteleri engelleme + Güvenli arama sağlar.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` ve `94.140.15.16`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` ve `2a10:50c0::bad2:ff`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                 |

#### Non-filtering

Bu sunucuların her biri güvenli ve güvenilir bir bağlantı sağlar, ancak "Standart" ve "Family Protection" sunucularının aksine, hiçbir şeyi filtrelemezler.

| Protokol       | Adres                                                                           |                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.140` ve `94.140.14.141`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` ve `2a10:50c0::2:ff`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                             | [AdGuard'a ekle](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [AdGuard'a ekle](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                       |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                          |

### Ali DNS

[Ali DNS](https://alidns.com/), İnternet kullanıcılarının çoğu için hızlı, kararlı ve güvenli DNS çözünürlüğü sağlamayı taahhüt eden ücretsiz bir özyinelemeli DNS hizmetidir. Kullanıcıları çeşitli saldırılardan ve tehditlerden korumak için AliGuard özelliğini içerir.

| Protokol       | Adres                                 |                                                                                                                                                                                                                     |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` ve `223.6.6.6`            | [AdGuard'a ekle](adguard:add_dns_server?address=223.5.5.5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` ve `2400:3200:baba::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2400:3200::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |
| DNS-over-QUIC  | `quic://dns.alidns.com:853`           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.alidns.com:853&name=dns.alidns.com:853)       |

### BebasID tarafından BebasDNS

[BebasDNS](https://github.com/bebasid/bebasdns), OpenNIC alan adını destekleyen Endonezya merkezli ücretsiz ve tarafsız bir genel çözümleyicidir. Komunitas Internet Netral Indonesia (KINI) tarafından Endonezce kullanıcılara ücretsiz ve tarafsız internet bağlantısı sunmak için oluşturulmuştur.

#### Default

Bu, BebasDNS'nin varsayılan çeşididir. Bu çeşit reklamları, kötü amaçlı yazılımları ve kimlik avı alan adlarını engeller.

| Protokol       | Adres                                                                 |                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com) |
| DNS-over-TLS   | `tls://dns.bebasid.com:853`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7QR8yLmRuc2NyeXB0LWNlcnQuZG5zLmJlYmFzaWQuY29t)                                                                   |

#### Unfiltered

Bu çeşit hiçbir şeyi filtrelemez.

| Protokol       | Adres                                  |                                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered`   | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com)                       |
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [AdGuard'a ekle](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853) |

#### Security

Bu, BebasDNS'nin güvenlik/antivirüs çeşididir. Bu çeşit yalnızca kötü amaçlı yazılımları ve kimlik avı alan adlarını engeller.

| Protokol       | Adres                                     |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://antivirus.bebasid.com/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://antivirus.bebasid.com/dns-query&name=antivirus.bebasid.com) |
| DNS-over-TLS   | `tls://antivirus.bebasid.com:853`         | [AdGuard'a ekle](adguard:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=antivirus.bebasid.com:853&name=antivirus.bebasid.com:853)                     |

#### Family

Bu BebasDNS'in aile versiyonudur. This variant blocks pornography, gambling, hate site, blocks malware, and phishing domains.

| Protokol       | Adres                                                                           |                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/dns-query`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/dns-query&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://internetsehat.bebasid.com:853`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=internetsehat.bebasid.com:853&name=internetsehat.bebasid.com:853)                     |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.internetsehat.bebasid.com` IP: `103.87.68.196:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTY6ODQ0MyD5k4vgIHmBCZ2DeLtmoDVu1C6nVrRNzSVgZ1T0m0-3rCkyLmRuc2NyeXB0LWNlcnQuaW50ZXJuZXRzZWhhdC5iZWJhc2lkLmNvbQ)                                                                                             |

#### Family With Ad Filtering

Bu, BebasDNS'in family çeşididir ancak reklam engelleyicilidir

| Protokol       | Adres                                       |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://internetsehat.bebasid.com/adblock` | [AdGuard'a ekle](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://family-adblock.bebasid.com:853`      | [AdGuard'a ekle](adguard:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=family-adblock.bebasid.com:853&name=family-adblock.bebasid.com:853)             |

#### OISD Filter

Bu, yalnızca OISD Big filtreye sahip özel bir BebasDNS çeşididir

| Protokol       | Adres                              |                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-oisd` | [AdGuard'a ekle](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://oisd.dns.bebasid.com:853`   | [AdGuard'a ekle](adguard:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=oisd.dns.bebasid.com:853&name=oisd.dns.bebasid.com:853)                                     |

#### Hagezi Multi Normal Filter

Bu, yalnızca Hagezi Multi Normal filtresine sahip özel bir BebasDNS çeşididir

| Protokol       | Adres                                |                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-hagezi` | [AdGuard'a ekle](adguard:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://internetsehat.bebasid.com/adblock&name=internetsehat.bebasid.com) |
| DNS-over-TLS   | `tls://hagezi.dns.bebasid.com:853`   | [AdGuard'a ekle](adguard:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=hagezi.dns.bebasid.com:853&name=hagezi.dns.bebasid.com:853)                             |

### 0ms DNS

[DNS](https://0ms.dev/), mevcut DNS sağlayıcınıza alternatif olarak 0ms Group tarafından sağlanan küresel bir DNS çözümleme hizmetidir.

Herkese daha güvenli bir ortam sağlamak için temel filtre olarak [OISD Big](https://oisd.nl/) kullanır. HTTP/3, önbellekleme ve daha fazlası gibi çeşitli optimizasyonlarla tasarlanmıştır. Kullanıcıları potansiyel güvenlik tehditlerinden korumak için makine öğreniminden yararlanırken aynı zamanda zaman içinde kendini optimize eder.

| Protokol       | Adres                       |                                                                                                                                                                                                 |
| -------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://0ms.dev/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://0ms.dev/dns-query&name=dns.0ms.dev) |

### CFIEC Public DNS

Güçlü güvenlik yeteneklerine ve casus yazılımlara, kötü amaçlı sitelere karşı korumaya sahip IPv6 tabanlı her noktaya dağıtılabilen DNS hizmeti. Yalnızca IPv6 kullanıcıları için alan adı çözümlemesi sağlamak üzere DNS64'ü destekler.

| Protokol       | Adres                             |                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` ve `240C::6644`      | [AdGuard'a ekle](adguard:add_dns_server?address=240C::6666&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/), içerik filtreleme ve kimlik avı koruması gibi özellikleri sıfır kesinti süresiyle birleştirerek DNS'i genişleten bir hizmettir.

#### Standard

Cihazınızı kötü amaçlı yazılımlardan koruyan özel filtrelemeye sahip DNS sunucuları.

| Protokol       | Adres                                                          |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` ve `208.67.220.220`                           | [AdGuard'a ekle](adguard:add_dns_server?address=208.67.222.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` ve `2620:119:53::53`                         | [AdGuard'a ekle](adguard:add_dns_server?address=2620:119:35::35&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                             |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [AdGuard'a ekle](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                            |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                            | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |
| DNS-over-TLS   | `tls://dns.opendns.com`                                        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.opendns.com&name=dns.opendns.com)                         |

#### FamilyShield

Yetişkinlere uygun içerik engelleme sağlayan OpenDNS sunucuları.

| Protokol       | Adres                                                         |                                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` ve `208.67.220.123`                          | [AdGuard'a ekle](adguard:add_dns_server?address=208.67.222.123&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                 |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |
| DNS-over-TLS   | `tls://familyshield.opendns.com`                              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://familyshield.opendns.com&name=familyshield.opendns.com)                                         |

#### Sandbox

Filtreleme yapmayan OpenDNS sunucuları.

| Protokol       | Adres                                       |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.2` ve `208.67.220.2`            | [AdGuard'a ekle](adguard:add_dns_server?address=208.67.220.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=208.67.222.2&name=)                                                                                                         |
| DNS, IPv6      | `2620:0:ccc::2` IP: `2620:0:ccd::2`         | [AdGuard'a ekle](adguard:add_dns_server?address=2620:0:ccc::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:0:ccc::2&name=)                                                                                                       |
| DNS-over-HTTPS | `https://doh.sandbox.opendns.com/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.sandbox.opendns.com/dns-query&name=doh.sandbox.opendns.com) |
| DNS-over-TLS   | `tls://sandbox.opendns.com`                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://sandbox.opendns.com&name=sandbox.opendns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://sandbox.opendns.com/dns-query&name=sandbox.opendns.com)                               |

:::BİLGİ

OpenDNS sunucuları, NODATA'lı olanlar da dahil olmak üzere belirli yanıtlardan AUTHORITY bölümlerini kaldırır, bu da bu tür yanıtların önbelleğe alınmasını imkansız hâle getirir.

:::

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/), özelleştirilebilir filtreleme sağlayan bir DNS hizmetidir. Bu hizmet, uygunsuz içerik olmadan web'de gezinmek için güvenli bir yol sunar.

#### Family Filter

Proxy ve VPN alan adlarını ve karma içerikli siteler dahil tüm yetişkinlere yönelik, pornografik ve müstehcen sitelere erişimi engeller.

| Protokol       | Adres                                                     |                                                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` ve `185.228.169.168`                    | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.168&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` ve `2a0d:2a00:2::`                        | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                           |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`        | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`               | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Adult Filter

Family filter'dan daha az kısıtlayıcı olan bu filtre, yalnızca yetişkinlere yönelik içeriklere, kötü amaçlı ve kimlik avı amaçlı alan adlarına erişimi engeller.

| Protokol       | Adres                                                      |                                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` ve `185.228.169.11`                       | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` ve `2a0d:2a00:2::1`                       | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                        |
| DNSCrypt, IPv6 | Sağlayıcı: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`          | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Security Filter

Kimlik avı, spam ve kötü amaçlı alan adlarını engeller.

| Protokol       | Adres                                                |                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` ve `185.228.169.9`                   | [AdGuard'a ekle](adguard:add_dns_server?address=185.228.168.9&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` ve `2a0d:2a00:2::2`                 | [AdGuard'a ekle](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/), internetteki herhangi bir ana makine için alan adı çözümlemesi sağlayan özyinelemeli bir ad sunucusu olarak işlev gören ücretsiz ve hızlı bir DNS hizmetidir.

#### Standard

| Protokol             | Adres                                            |                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` ve `1.0.0.1`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                     |
| DNS, IPv6            | `2606:4700:4700::1111` ve `2606:4700:4700::1001` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                           |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)       |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com) |
| DNS-over-TLS         | `tls://one.one.one.one`                          | [AdGuard'a ekle](adguard:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://one.one.one.one&name=CloudflareDoT)                                               |

#### Malware blocking only

| Protokol       | Adres                                            |                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` ve `1.0.0.2`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` ve `2606:4700:4700::1002` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`  | [AdGuard'a ekle](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Malware and adult content blocking

| Protokol             | Adres                                            |                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` ve `1.0.0.3`                           | [AdGuard'a ekle](adguard:add_dns_server?address=1.1.1.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` ve `2606:4700:4700::1003` | [AdGuard'a ekle](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/), DNS isteklerinizi dünya çapındaki DNS sunucuları ağı üzerinden çözümleyen bir alan adı çözümleme hizmetidir. Fazla reklamları kaldırır, kimlik avı ve casus yazılımlardan korur.

| Protokol       | Adres                                                                  |                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` ve `8.20.247.20`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=8.26.56.26&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=8.26.56.26&name=)             |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [AdGuard'a ekle](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### ControlD

[ControlD](https://controld.com/free-dns), proxy özelliklerine sahip özelleştirilebilir bir DNS hizmetidir. Bu, yalnızca bir şeyleri (reklamlar, porno, vb.) engellemekle kalmayıp aynı zamanda sitelerin ve hizmetlerin engelini kaldırabileceği anlamına gelir.

#### Non-filtering

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` ve `76.76.10.0`       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` ve `2606:1a40:1::`  | [AdGuard'a ekle](adguard:add_dns_server?address=2606:1a40::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [AdGuard'a ekle](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Block malware

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

#### Block malware + ads

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

#### Block malware + ads + social

| Protokol       | Adres                             |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [AdGuard'a ekle](adguard:add_dns_server?address=76.76.2.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [AdGuard'a ekle](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [[AdGuard'a ekle](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/), varsayılan olarak sizi ve ailenizi reklamlardan, izleyicilerden, kötü amaçlı yazılımlardan, kimlik avından, kötü amaçlı sitelerden ve çok daha fazlasından korurken istediğiniz her şeyi engellemenizi sağlayan bir DNS hizmetidir.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                            |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                               |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                          | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                      | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### DNS Privacy

[DNS Privacy](https://dnsprivacy.org/), tanıtmak, yürürlüğe koymak ve dağıtmak için işbirliğine dayalı bir açık projedir.

#### [Stubby geliştiricileri](https://getdnsapi.net/)tarafından çalıştırılan DNS sunucuları

| Protokol     | Adres                                                                                                                               |                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Ana makine adı: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` ve IPv6: `2001:610:1:40ba:145:100:185:15`  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Sağlayıcı: `Surfnet` Ana makine adı: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` ve IPv6: `2001:610:1:40ba:145:100:185:16` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

#### Günlük tutmamama politikasına sahip diğer DNS sunucuları

| Protokol           | Adres                                                                                                                      |                                                                                                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` ve IPv6: `2a01:3a0:53:53::0` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Sağlayıcı: `UncensoredDNS` Ana makine adı: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` ve IPv6: `2001:67c:28a4::` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Sağlayıcı: `dkg` Ana makine adı: `tls://dns.cmrg.net` IP: `199.58.81.218` ve IPv6: `2001:470:1c:76d::53`                   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Ana makine adı: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` ve IPv6: `2001:8b0:24:24::24`                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Ana makine adı: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` ve IPv6: `2a01:4f8:c0c:3c03::2`                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Ana makine adı: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` ve IPv6: `2a01:4f8:c0c:3bfc::2`                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Ana makine adı: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Ana makine adı: `tls://dns.neutopia.org` IP: `89.234.186.112` ve IPv6: `2a00:5884:8209::2`                                 | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Sağlayıcı: `Go6Lab` Ana makine adı: `tls://privacydns.go6lab.si` ve IPv6: `2001:67c:27e4::35`                              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Ana makine adı: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

#### Minimum günlük tutma/sınırlamaları olan DNS sunucuları

Bu sunucular bazı günlük kaydı, kendinden imzalı sertifikalar kullanır veya katı mod desteği yoktur.

| Protokol     | Adres                                                                                                                   |                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Sağlayıcı: `NIC Chile` Ana makine adı: `dnsotls.lab.nic.cl` IP: `200.1.123.46` ve IPv6: `2001:1398:1:0:200:1:123:46`    | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Sağlayıcı: `OARC` Ana makine adı: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` ve IPv6: `2620:ff:c000:0:1::64:25` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### DNS.SB

[DNS.SB](https://dns.sb/), günlük kaydı olmadan ve DNSSEC etkinleştirilmiş olarak ücretsiz DNS hizmeti sağlar.

| Protokol       | Adres                              |                                                                                                                                                                                                     |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` ve `45.11.45.11` | [AdGuard'a ekle](adguard:add_dns_server?address=185.222.222.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` ve `2a11::`               | [AdGuard'a ekle](adguard:add_dns_server?address=2a09::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`     | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://dot.sb`                     | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.sb&name=dot.sb), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.sb&name=dot.sb)                                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.cn/products/publicdns) is a privacy-friendly DNS provider with years of experience in domain name resolution services development, it aims to provide users more rapid, accurate and stable recursive resolution service.

| Protokol       | Adres                       |                                                                                                                                                                                         |
| -------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29`              | [AdGuard'a ekle](adguard:add_dns_server?address=119.29.29.29&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS, IPv6      | `2402:4e00::`               | [AdGuard'a ekle](adguard:add_dns_server?address=2402:4e00::&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2402:4e00::&name=)                                           |
| DNS-over-HTTPS | `https://dns.pub/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### DNSWatchGO

[DNSWatchGO](https://www.watchguard.com/wgrd-products/dnswatchgo), WatchGuard tarafından sunulan ve insanların kötü amaçlı içeriklerle etkileşime girmesini engelleyen bir DNS hizmetidir.

| Protokol  | Adres                             |                                                                                                                                                   |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` ve `52.3.100.184` | [AdGuard'a ekle](adguard:add_dns_server?address=54.174.40.213&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### dns0.eu

[dns0.eu](https://www.dns0.eu), Avrupa Birliği vatandaşlarını ve kuruluşlarını korumak için güvenliğe güçlü bir şekilde odaklanan, ücretsiz, egemen ve GDPR uyumlu bir özyinelemeli DNS çözümleyicisidir.

| Protokol       | Adres                           |                                                                                                                                                                    |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `193.110.81.0` ve `185.253.5.0` | [AdGuard'a ekle](adguard:add_dns_server?address=193.110.81.0&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=193.110.81.0&name=)                    |
| DNS-over-HTTPS | `https://zero.dns0.eu/`         | [AdGuard'a ekle](sdns://AgcAAAAAAAAAAAAVaHR0cHM6Ly96ZXJvLmRuczAuZXUvCi9kbnMtcXVlcnk), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://zero.dns0.eu) |
| DNS-over-TLS   | `tls://zero.dns0.eu`            | [AdGuard'a ekle](sdns://AwcAAAAAAAAAAAASdGxzOi8vemVyby5kbnMwLmV1), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://zero.dns0.eu)                      |
| DNS-over-QUIC  | `quic://zero.dns0.eu`           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://zero.dns0.eu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://zero.dns0.eu)                  |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/), Dyn tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                              |                                                                                                                                                   |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` ve `216.146.36.36` | [AdGuard'a ekle](adguard:add_dns_server?address=216.146.35.35&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### Freenom World

[Freenom World](https://freenom.world/en/index.html), Freenom World tarafından sunulan ücretsiz bir anonim DNS çözümleyicisidir.

| Protokol  | Adres                          |                                                                                                                                               |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` ve `80.80.81.81` | [AdGuard'a ekle](adguard:add_dns_server?address=80.80.80.80&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/), mevcut DNS sağlayıcınıza alternatif olarak kullanabileceğiniz ücretsiz, küresel bir DNS sağlayıcı hizmetidir.

| Protokol       | Adres                                            |                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` ve `8.8.4.4`                           | [AdGuard'a ekle](adguard:add_dns_server?address=8.8.8.8&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` ve `2001:4860:4860::8844` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                   | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                               | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Hurricane Electric Public Recursor

Hurricane Electric Public Recursor is a free alternative DNS service by Hurricane Electric with anycast.

| Protokol       | Adres                            |                                                                                                                                                                                                             |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `74.82.42.42`                    | [AdGuard'a ekle](adguard:add_dns_server?address=74.82.42.42&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=74.82.42.42&name=)                                                               |
| DNS, IPv6      | `2001:470:20::2`                 | [AdGuard'a ekle](adguard:add_dns_server?address=2001:470:20::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:470:20::2&name=)                                                         |
| DNS-over-HTTPS | `https://ordns.he.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://ordns.he.net/dns-query&name=ordns.he.net) |
| DNS-over-TLS   | `tls://ordns.he.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ordns.he.net&name=ordns.he.net)                         |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/), Avustralya, Almanya, Singapur, İsveç, Birleşik Krallık ve Amerika Birleşik Devletleri'nde (New York ve Los Angeles) bulunan uç noktalarıyla QNAME minimizasyonuyla halka açık DNS sağlar.

#### Non-filtering

| Protokol       | Adres                               |                                                                                                                                                                                                               |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.mullvad.net/dns-query&name=MullvadDoH) |
| DNS-over-TLS   | `tls://dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.mullvad.net&name=MullvadDoT)                         |

#### Ad blocking

| Protokol       | Adres                                       |                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://adblock.dns.mullvad.net/dns-query&name=adblock.dns.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://adblock.dns.mullvad.net&name=adblock.dns.mullvad.net)                         |

#### Reklam + kötü amaçlı yazılım engelleme

| Protokol       | Adres                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://base.dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://base.dns.mullvad.net/dns-query&name=base.dns.mullvad.net) |
| DNS-over-TLS   | `tls://base.dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://base.dns.mullvad.net&name=base.dns.mullvad.net)                         |

#### Reklam + kötü amaçlı yazılım + sosyal medya engelleme

| Protokol       | Adres                                        |                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://extended.dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://extended.dns.mullvad.net/dns-query&name=extended.dns.mullvad.net) |
| DNS-over-TLS   | `tls://extended.dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://extended.dns.mullvad.net&name=extended.dns.mullvad.net)                         |

#### Reklam + kötü amaçlı yazılım + yetişkin + kumar engelleme

| Protokol       | Adres                                      |                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.dns.mullvad.net/dns-query&name=family.dns.mullvad.net) |
| DNS-over-TLS   | `tls://family.dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.dns.mullvad.net&name=family.dns.mullvad.net)                         |

#### Reklam + kötü amaçlı yazılım + yetişkin + kumar + sosyal medya engelleme

| Protokol       | Adres                                   |                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://all.dns.mullvad.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://all.dns.mullvad.net/dns-query&name=all.dns.mullvad.net) |
| DNS-over-TLS   | `tls://all.dns.mullvad.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://all.dns.mullvad.net&name=all.dns.mullvad.net)                         |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/), çocukları uygunsuz sitelerden ve kötü niyetli içeriklerden koruyan bir her noktaya dağıtılabilen internet filtreleme sistemidir.

| Protokol       | Adres                                                        |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` ve `180.131.145.145`                       | [AdGuard'a ekle](adguard:add_dns_server?address=180.131.144.144&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [AdGuard'a ekle](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)             |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns), yerleşik güvenlik ve tehdit istihbaratı ile sitelere ve çevrimiçi uygulamalara hızlı ve güvenilir erişim sağlayan ücretsiz bir bulut tabanlı özyinelemeli DNS hizmetidir.

#### Reliability & Performance 1

Bu sunucular, herhangi bir belirli kategoriyi engellemeden güvenilir ve hızlı DNS aramaları sağlar.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` ve `156.154.71.1`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` ve `2610:a1:1019::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Reliability & Performance 2

Bu sunucular, belirli kategorileri engellemeden güvenilir ve hızlı DNS aramaları sağlar ve ayrıca NXDomain (var olmayan alan adı) yanıtlarının açılış sayfalarına yönlendirilmesini önler.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` ve `156.154.71.5`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` ve `2610:a1:1019::5` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::5&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Threat Protection

Bu sunucular kötü amaçlı alan adlarına karşı koruma sağlar ve ayrıca "Reliability & Performance" özelliklerini içerir.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` ve `156.154.71.2`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` ve `2610:a1:1019::2` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Family Secure

Bu sunucular yetişkinlere yönelik içerik engellemesi sağlar ve ayrıca "Reliability & Performance" + "Threat Protection" özelliklerini içerir.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` ve `156.154.71.3`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` ve `2610:a1:1019::3` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::3&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Business Secure

Bu sunucular istenmeyen, zaman kaybettiren içeriklerin engellenmesini sağlar ve "Reliability & Performance" + "Threat Protection" + "Family Secure" özelliklerini de içerir.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` ve `156.154.71.4`       | [AdGuard'a ekle](adguard:add_dns_server?address=156.154.70.4&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` ve `2610:a1:1019::4` | [AdGuard'a ekle](adguard:add_dns_server?address=2610:a1:1018::4&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### NextDNS

[NextDNS](https://nextdns.io/), isteğe bağlı günlüğe kaydetme özelliğine sahip ücretsiz yapılandırılabilir filtreleme çözümleyicilerine ek olarak, günlüğe kaydetmeden, herkese açık olarak erişilebilen filtreleme yapmayan çözümleyiciler sunar.

#### Ultra-low latency

| Protokol       | Adres                    |                                                                                                                                                                                                                     |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protokol       | Adres                            |                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [AdGuard'a ekle](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) — Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS engelleme ile kurtarır: reklam, izleme, reklam yazılımı, kötü amaçlı yazılım, kötü amaçlı etkinlikler ve kimlik avı şirketleri, ~1M etki alanını engeller. DDoS/Flood saldırılarının azaltılması için 24 veya 48 saat günlüklere sahiptir.

#### Adaptive Filtering (ADA)

Çoğu kullanıcı için önerilir; çoğu reklam ağını, reklam izlemeyi, kötü amaçlı yazılımı ve kimlik avı alan adlarını engelleyen çok esnek filtreleme.

| Protokol       | Adres                               |                                                                              |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

More strictly filtering policies with blocking — ads, marketing, tracking, clickbait, coinhive, malicious, and phishing domains.

| Protokol       | Adres                               |                                                                              |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [AdGuard'a ekle](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [AdGuard'a ekle](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/), kimlik avı ve casus yazılımlara karşı yüksek performans, gizlilik ve güvenlik koruması sağlayan ücretsiz, özyinelemeli, anycast bir DNS platformudur. Quad9 sunucuları bir sansürleme bileşeni sağlamaz.

#### Standard

Kimlik avı ve casus yazılımlara karşı koruma sağlayan düzenli DNS sunucuları. Bunlar blok listeleri, DNSSEC doğrulaması ve diğer güvenlik özelliklerini içerir.

| Protokol       | Adres                                                           |                                                                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` ve `149.112.112.112`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.9&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                               | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::fe&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [AdGuard'a ekle](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                   |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Unsecured

Güvenli olmayan DNS sunucuları güvenlik blok listeleri, DNSSEC veya EDNS İstemci Alt Ağı sağlamaz.

| Protokol       | Adres                                                              |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` ve `149.112.112.10`                                     | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                 |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                                | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) desteği

EDNS İstemci Alt Ağı, yetkili DNS sunucularına gönderilen isteklerde son kullanıcı IP adresi verilerinin bileşenlerini içeren bir yöntemdir. Güvenlik engelleme listesi, DNSSEC, EDNS İstemci Alt Ağı sağlar.

| Protokol       | Adres                                                           |                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` ve `149.112.112.11`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=9.9.9.11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                              | [AdGuard'a ekle](adguard:add_dns_server?address=2620:fe::11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [AdGuard'a ekle](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                 |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                             | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Quadrant Security

[Quadrant Security](https://www.quadrantsec.com/post/public-dns-resolver-with-tls-https-support), günlük kaydı veya filtreleme olmadan genel halk için DoH ve DoT sunucuları sunar.

| Protokol       | Adres                          |                                                                                                                                                                                                     |
| -------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.qis.io/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.qis.io/dns-query&name=doh.qis.io) |
| DNS-over-TLS   | `tls://dns-tls.qis.io`         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns-tls.qis.io&name=dns-tls.qis.io)         |

### Rabbit DNS

[Rabbit DNS](https://rabbitdns.org/), herhangi bir kullanıcı verisi toplamayan gizlilik odaklı bir DoH hizmetidir.

#### Non-filtering

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.rabbitdns.org/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.rabbitdns.org/dns-query&name=dns.rabbitdns.org) |

#### Security-filtering

| Protokol       | Adres                                      |                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://security.rabbitdns.org/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://security.rabbitdns.org/dns-query&name=security.rabbitdns.org) |

#### Family-filtering

| Protokol       | Adres                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://family.rabbitdns.org/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.rabbitdns.org/dns-query&name=family.rabbitdns.org) |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure), Cloudflare Worker olarak çalışan DNS-over-HTTPS hizmeti ve yapılandırılabilir blok listeleri ile Fly.io Worker olarak çalışan DNS-over-TLS hizmeti sağlar.

#### Non-filtering

| Protokol       | Adres                           |                                                                                                                                                                                                                           |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [AdGuard'a ekle](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [AdGuard'a ekle](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### Safe DNS

[Safe DNS](https://www.safedns.com/), dünya çapında herhangi bir noktadan hızlı ve güvenilir bir DNS çözümlemesi sağlamak için hem Amerika, Avrupa, Afrika, Avustralya hem de Uzak Doğu'da bulunan sunuculardan oluşan küresel bir anycast ağıdır.

| Protokol  | Adres                            |                                                                                                                                                 |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` ve `195.46.39.40` | [AdGuard'a ekle](adguard:add_dns_server?address=195.46.39.39&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### Safe Surfer

[Safe Surfer](https://www.safesurfer.co.nz/), porno, reklamlar, kötü amaçlı yazılımlar ve popüler sosyal medya siteleri gibi 50'den fazla kategoriyi engelleyerek internette gezinmeyi daha güvenli hâle getiren bir DNS hizmetidir.

| Protokol       | Adres                                                              |                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` ve `104.197.28.121`                              | [AdGuard'a ekle](adguard:add_dns_server?address=104.155.237.225&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)     |

### 360 Secure DNS

**360 Secure DNS**, gelişmiş ağ güvenliği tehdit korumasına sahip endüstri lideri bir özyinelemeli DNS hizmetidir.

| Protokol       | Adres                             |                                                                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` ve `218.30.118.6`   | [AdGuard'a ekle](adguard:add_dns_server?address=101.226.4.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` ve `140.207.198.6` | [AdGuard'a ekle](adguard:add_dns_server?address=123.125.81.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/), diğer alternatiflere kıyasla gelişmiş DNS kararlılığı ve güvenliği sunan ücretsiz bir DNS hizmetidir. Verisign, kullanıcıların gizliliğine saygı duyar: Ne herkese açık DNS verilerini üçüncü taraflara satarlar ne de kullanıcıların sorgularını onlara reklam sunmak üzere yönlendirirler.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` ve `64.6.65.6`             | [AdGuard'a ekle](adguard:add_dns_server?address=64.6.64.6&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` ve `2620:74:1c::2:2` | [AdGuard'a ekle](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### Wikimedia DNS

[Wikimedia DNS](https://meta.wikimedia.org/wiki/Wikimedia_DNS) is a caching, recursive, public DoH and DoT resolver service that is run and managed by the Site Reliability Engineering (Traffic) team at the Wikimedia Foundation on all six Wikimedia data centers with anycast.

| Protokol       | Adres                                                                               |                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://wikimedia-dns.org/dns-query`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://wikimedia-dns.org/dns-query&name=wikimedia-dns.org) |
| DNS-over-TLS   | Ana makine adı: `wikimedia-dns.org` IP: `185.71.138.138` ve IPv6: `2001:67c:930::1` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org), [AdGuard VPN'e ekle](adguard:add_dns_server?address=tls://wikimedia-dns.org&name=wikimedia-dns.org)                            |

## **Bölgesel çözümleyiciler**

Bölgesel DNS çözümleyicileri genellikle belirli coğrafi bölgelere odaklanır ve bu bölgelerdeki kullanıcılar için optimize edilmiş performans sunar. Bu çözümleyiciler genellikle kar amacı gütmeyen kuruluşlar, yerel İSS'ler veya diğer kuruluşlar tarafından işletilmektedir.

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/), DNS trafiğini korumaya ve modern protokoller sunan DNS çözümleyici ortamını çeşitlendirmeye yardımcı olmak için DNS gizlilik hizmetlerini işletmektedir.

| Protokol       | Adres                                   |                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### ByteDance Public DNS

ByteDance Public DNS, Çin'de ByteDance tarafından sunulan ücretsiz bir alternatif DNS hizmetidir. Şu anda ByteDance tarafından sağlanan tek DNS IPV4'ü desteklemektedir. DOH, DOT, DOQ ve diğer şifrelenmiş DNS hizmetleri yakında yayınlanacaktır.

| Protokol  | Adres                          |                                                                                                                                               |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `180.184.1.1` ve `180.184.2.2` | [AdGuard'a ekle](adguard:add_dns_server?address=180.184.1.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=180.184.1.1&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works), kişisel ve finansal verilerin çalınmasına karşı koruma sağlar. Virüsleri, fidye yazılımlarını ve diğer kötü amaçlı yazılımları evinizden uzak tutun.

#### Private

"Özel" modda, yalnızca DNS çözümlemesi.

| Protokol               | Adres                                                                                                    |                                                                                                                                                                                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` ve `149.112.122.10`                                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` ve `2620:10A:80BC::10`                                                               | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS — Private | Ana makine adı: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` ve IPv6: `2620:10A:80BB::10` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

"Protected" modda, kötü amaçlı yazılımlara ve kimlik avına karşı koruma.

| Protokol                 | Adres                                                                                                      |                                                                                                                                                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` ve `149.112.122.20`                                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.20&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` ve `2620:10A:80BC::20`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS — Protected | Ana makine adı: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` ve IPv6: `2620:10A:80BB::20` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Family

"Family" modda, Protected + yetişkinlere uygun içeriği engelleme.

| Protokol              | Adres                                                                                                   |                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` ve `149.112.122.30`                                                                    | [AdGuard'a ekle](adguard:add_dns_server?address=149.112.121.30&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` ve `2620:10A:80BC::30`                                                              | [AdGuard'a ekle](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS — Family | Ana makine adı: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` ve IPv6: `2620:10A:80BB::30` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315), reklamlara, izlemeye ve kimlik avına karşı korumalı, hızlı ve güvenli bir DNS hizmetidir.

| Protokol       | Adres                            |                                                                                                                                                                                                                               |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.controld.com/comss` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.controld.com/comss&name=dns.controld.com)           |
| DNS-over-TLS   | `tls://comss.dns.controld.com`   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://comss.dns.controld.com&name=comss.dns.controld.com)   |
| DNS-over-QUIC  | `quic://comss.dns.controld.com`  | [AdGuard'a ekle](adguard:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://comss.dns.controld.com&name=comss.dns.controld.com) |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/), CZ.NIC ODVR, Açık DNSSEC Doğrulama Çözümleyicileridir. CZ.NIC herhangi bir kişisel veri ve cihazların kişisel veri gönderdiği sayfalarda bilgi toplamaz.

| Protokol       | Adres                                      |                                                                                                                                                                                             |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` ve `185.43.135.1`            | [AdGuard'a ekle](adguard:add_dns_server?address=193.17.47.1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` ve `2001:148f:fffe::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                  | [AdGuard'a ekle](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/), Digital Society tarafından işletilen halka açık bir çözümleyicidir. İsviçre'nin Zürih kentinde düzenlenmiştir.

| Protokol       | Adres                                                                                         |                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` ve IPv6: `2a05:fc84::42` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` ve IPv6: `2a05:fc84::43`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/), yetişkinlere yönelik siteleri engellemeyi amaçlar. Çocukların ve yetişkinlerin kötü amaçlı siteler tarafından izlenme endişesi duymadan internette güvenle gezinmesini sağlar.

| Protokol       | Adres                                                       |                                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                | [AdGuard'a ekle](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` ve `78.47.64.161`                          | [AdGuard'a ekle](adguard:add_dns_server?address=94.130.180.225&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` ve `2a01:4f8:1c17:4df8::1`          | [AdGuard'a ekle](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `dnsforfamily.com` IP: `94.130.180.225`          | [AdGuard'a ekle](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                |
| DNSCrypt, IPv6 | Sağlayıcı: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                    |

### Fondation Restena DNS

[Restena Foundation](https://www.restena.lu/) tarafından sağlanan [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) sunucuları.

| Protokol       | Adres                                                                              |                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29` | [AdGuard'a ekle](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |
| DNS-over-TLS   | `tls://kaitain.restena.lu` IP: `158.64.1.29` ve IPv6: `2001:a18:1::29`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)                         |

### 114DNS

[114DNS](https://www.114dns.com), profesyonel ve yüksek güvenilirliğe sahip bir DNS hizmetidir.

#### Normal

Reklamları ve rahatsız edici siteleri engelleyin.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` ve `114.114.115.115` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.114&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Safe

Kimlik avını, kötü amaçlı ve diğer güvenli olmayan siteleri engeller.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` ve `114.114.115.119` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.119&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Family

Bu sunucular yetişkinlere yönelik siteleri ve uygunsuz içerikleri engeller.

| Protokol  | Adres                                  |                                                                                                                                                       |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` ve `114.114.115.110` | [AdGuard'a ekle](adguard:add_dns_server?address=114.114.114.110&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/), Internet Initiative Japan tarafından yürütülen genel bir DNS hizmetidir. Ayrıca çocuk istismarı içeriklerini de engeller.

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### JupitrDNS

[JupitrDNS](https://jupitrdns.com/) is a free security-focused recursive DNS service that blocks malware. DNSSEC desteği vardır ve günlükleri saklamaz.

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `155.248.232.226`                     | [AdGuard'a ekle](adguard:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=155.248.232.226&name=dns.jupitrdns.com)                                         |
| DNS-over-HTTPS | `https://dns.jupitrdns.com/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.jupitrdns.com/dns-query&name=dns.jupitrdns.com) |
| DNS-over-TLS   | `tls://dns.jupitrdns.com`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.jupitrdns.com&name=dns.jupitrdns.com)                         |
| DNS-over-QUIC  | `quic://dns.jupitrdns.com`            | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dns.jupitrdns.com&name=dns.jupitrdns.com)                       |

### LibreDNS

[LibreDNS](https://libredns.gr/), [LibreOps](https://libreops.cc/) tarafından işletilen genel şifrelenmiş bir DNS hizmetidir.

| Protokol       | Adres                                        |                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [AdGuard'a ekle](adguard:add_dns_server?address=88.198.92.222&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### OneDNS

[**OneDNS**](https://www.onedns.net/), kötü amaçlı alan adlarını engelleme özelliğine sahip güvenli, hızlı, ücretsiz bir mevki DNS hizmetidir.

#### Pure Edition

| Protokol  | Adres                           |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` ve `52.80.52.52` | [AdGuard'a ekle](adguard:add_dns_server?address=117.50.10.10&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protokol  | Adres                           |                                                                                                                                                 |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` ve `52.80.66.66` | [AdGuard'a ekle](adguard:add_dns_server?address=117.50.11.11&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/), OpenNIC Project tarafından sunulan ücretsiz bir alternatif DNS hizmetidir.

| Protokol  | Adres                   |                                                                                                                                                                   |
| --------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `217.160.70.42`         | [AdGuard'a ekle](adguard:add_dns_server?address=217.160.70.42&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=217.160.70.42&name=)                 |
| DNS, IPv6 | `2001:8d8:1801:86e7::1` | [AdGuard'a ekle](adguard:add_dns_server?address=2001:8d8:1801:86e7::1&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:8d8:1801:86e7::1&name=) |

Bu mevcut sunuculardan sadece bir tanesidir, tam listeyi [burada](https://servers.opennic.org/) bulabilirsiniz.

### Quad101

[Quad101](https://101.101.101.101), TWNIC (Taiwan Network Information Center) tarafından günlük tutmayan ücretsiz bir alternatif DNS hizmetidir.

| Protokol       | Adres                                  |                                                                                                                                                                                                             |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` ve `101.102.103.104` | [AdGuard'a ekle](adguard:add_dns_server?address=101.101.101.101&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` ve `2001:de4::102`     | [AdGuard'a ekle](adguard:add_dns_server?address=2001:de4::101&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`       | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/), içerik filtreleme ve internet güvenliği çözümleri sağlar.

| Protokol  | Adres            |                                                                                                                                                     |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [AdGuard'a ekle](adguard:add_dns_server?address=193.58.251.251&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/), [switch.ch](https://www.switch.ch/) tarafından sağlanan bir İsviçre genel DNS hizmetidir.

| Protokol       | Adres                                                                                 |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Sağlayıcı: `dns.switch.ch` IP: `130.59.31.248`                                        | [AdGuard'a ekle](adguard:add_dns_server?address=130.59.31.248&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Sağlayıcı: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Ana makine adı: `tls://dns.switch.ch` IP: `130.59.31.248` ve IPv6: `2001:620:0:ff::2` | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Xstl DNS

[Xstl DNS](https://get.dns.seia.io/), Güney Kore'de bulunan ve kullanıcının IP'sini günlüğe kaydetmeyen bir genel DNS hizmetidir. Reklamlar ve izleyiciler engellenir.

#### SK Broadband

| Protokol       | Adres                           |                                                                                                                                                                                                         |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.seia.io/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.seia.io/dns-query&name=dns.seia.io) |
| DNS-over-TLS   | `tls://dns.seia.io`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.seia.io&name=dns.seia.io)                         |

#### Oracle Cloud Güney Kore

| Protokol       | Adres                                     |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://secondary.dns.seia.io/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://secondary.dns.seia.io/dns-query&name=secondary.dns.seia.io) |
| DNS-over-TLS   | `tls://secondary.dns.seia.io`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://secondary.dns.seia.io&name=secondary.dns.seia.io)                         |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/), ücretsiz bir özyinelemeli DNS hizmetidir. Yandex.DNS'in sunucuları Rusya, BDT ülkeleri ve Batı Avrupa'da bulunmaktadır. Kullanıcıların talepleri, yüksek bağlantı hızları sağlayan en yakın veri merkezi tarafından işlenir.

#### Basic

"Basic" modda, trafik filtreleme yoktur.

| Protokol       | Adres                                            |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` ve `77.88.8.1`                       | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.8&name=yandex.ipv4), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.8&name=yandex.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` ve `2a02:6b8:0:1::feed:0ff` | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=yandex.ipv6)                                                 |
| DNS-over-HTTPS | `https://common.dot.dns.yandex.net/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://common.dot.dns.yandex.net/dns-query&name=yandex.doh) |
| DNS-over-TLS   | `tls://common.dot.dns.yandex.net`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://common.dot.dns.yandex.net&name=yandex.dot)                         |

#### Safe

"Safe" modda, virüslü ve sahte sitelere karşı koruma sağlanır.

| Protokol       | Adres                                            |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.88` ve `77.88.8.2`                      | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.88&name=yandex.safe.ipv4)                                                             |
| DNS, IPv6      | `2a02:6b8::feed:bad` ve `2a02:6b8:0:1::feed:bad` | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=yandex.safe.ipv6)                                             |
| DNS-over-HTTPS | `https://safe.dot.dns.yandex.net/dns-query`      | [AdGuard'a ekle](adguard:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://safe.dot.dns.yandex.net/dns-query&name=yandex.safe.doh) |
| DNS-over-TLS   | `tls://safe.dot.dns.yandex.net`                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://safe.dot.dns.yandex.net&name=yandex.safe.dot)                         |

#### Family

"Family" modda, virüslü, sahte ve yetişkinlere yönelik sitelere karşı koruma sağlanır.

| Protokol       | Adres                                            |                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.3` ve `77.88.8.7`                       | [AdGuard'a ekle](adguard:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=77.88.8.3&name=yandex.family.ipv4)                                                                   |
| DNS, IPv6      | `2a02:6b8::feed:a11` ve `2a02:6b8:0:1::feed:a11` | [AdGuard'a ekle](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=yandex.family.ipv6)                                                 |
| DNS-over-HTTPS | `https://family.dot.dns.yandex.net/dns-query`    | [AdGuard'a ekle](adguard:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://family.dot.dns.yandex.net/dns-query&name=yandex.family.doh) |
| DNS-over-TLS   | `tls://family.dot.dns.yandex.net`                | [AdGuard'a ekle](adguard:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://family.dot.dns.yandex.net&name=yandex.family.dot)                         |

## **Küçük kişisel çözümleyiciler**

Bunlar genellikle meraklılar veya küçük gruplar tarafından çalıştırılan DNS çözümleyicilerdir. Daha büyük sağlayıcıların ölçeğine ve yedekliliğine sahip olmasalar da genellikle gizliliğe, şeffaflığa öncelik verirler veya özel özellikler sunarlar.

Uygunluklarını düzgün bir şekilde izleyemeyeceğiz. **Bunları kendi sorumluluğunuzda kullanın.**

### AhaDNS

[AhaDNS](https://ahadns.com/), Fredrik Pettersson tarafından sağlanan sıfır günlük tutma ve reklam engelleme DNS hizmetidir.

#### Hollanda

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [AdGuard'a ekle](adguard:add_dns_server?address=5.2.75.75&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [AdGuard'a ekle](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### Los Angeles

| Protokol       | Adres                                 |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [AdGuard'a ekle](adguard:add_dns_server?address=45.67.219.208&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [AdGuard'a ekle](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

### Arapurayil

[Arapurayil](https://dns.arapurayil.com) Mumbai, Hindistan'da barındırılan kişisel bir DNS hizmetidir.

Kayıt tutmaz | Reklamları, izleyicileri, kimlik avını, vb. filtreler | DNSSEC | QNAME Minimizasyonu | EDNS istemci Alt Ağı yok.

| Protokol       | Adres                                                              |                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Ana makine: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [AdGuard'a ekle](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                             |
| DNS-over-HTTPS | Ana makine: `https://dns.arapurayil.com/dns-query`                 | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/), BLR1 bölgesindeki bir Digital Ocean damlacığından çalışan bir sunucudur. Abhay Rana aka Nemo tarafından sürdürülmektedir.

| Protokol       | Adres                                                             |                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [AdGuard'a ekle](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### Dandelion Sprout's Official DNS Server

[Dandelion Sprout's Official DNS Server](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server), AdGuard Home altyapısı kullanılarak Trondheim, Norveç'te barındırılan kişisel bir DNS hizmetidir.

Daha gelişmiş sözdizimi sayesinde AdGuard DNS'den daha fazla reklam ve kötü amaçlı yazılımı engeller, ancak izleyicilere daha kolay gider ve alternatif sağ tabloidleri ve çoğu resim panosunu engeller. Günlük kaydı, kullanılan filtre listelerini iyileştirmek (örneğin, engellenmemesi gereken sitelerin engelini kaldırarak) ve sunucu sistemi güncellemeleri için en az kötü zamanları belirlemek için kullanılır.

| Protokol       | Adres                                                 |                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | Değişir; yukarıdaki bağlantıya bakın.                 |                                                                                                                                                                                                                                                                                                 |
| DNS, IPv6      | Değişir; yukarıdaki bağlantıya bakın.                 |                                                                                                                                                                                                                                                                                                 |
| DNSCrypt, IPv4 | Değişir; yukarıdaki bağlantıya bakın.                 |                                                                                                                                                                                                                                                                                                 |

### DNS Forge

[DNS Forge](https://dnsforge.de/), [adminforge](https://adminforge.de/) tarafından sağlanan bir reklam engelleyici ve günlük tutmama özelliğine sahip yedek bir DNS çözümleyicisidir.

| Protokol       | Adres                                                |                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` ve `176.9.1.117`                      | [AdGuard'a ekle](adguard:add_dns_server?address=176.9.93.198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` ve `2a01:4f8:141:316d::117` | [AdGuard'a ekle](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                      | [AdGuard'a ekle](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                  | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### dnswarden

| Protokol       | Adres                                  |                                                                                                                                                                                                                                              |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS   | `uncensored.dns.dnswarden.com`         | [AdGuard'a ekle](adguard:add_dns_server?address=huncensored.dns.dnswarden.com&name=uncensored.dns.dnswarden.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=huncensored.dns.dnswarden.com&uncensored.dns.dnswarden.com)         |
| DNS-over-HTTPS | `https://dns.dnswarden.com/uncensored` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.dnswarden.com/uncensored&name=https://dns.dnswarden.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.dnswarden.com/uncensored&https://dns.dnswarden.com) |

Ayrıca reklamları engellemek veya yetişkinlere yönelik içeriği filtrelemek için [özel DNS sunucusunu yapılandırabilirsiniz](https://dnswarden.com/customfilter.html).

### FFMUC DNS

[FFMUC](https://ffmuc.net/), Freifunk München tarafından sağlanan ücretsiz DNS sunucularıdır.

| Protokol             | Adres                                                                   |                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://dot.ffmuc.net`                                   | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://doh.ffmuc.net/dns-query`                       | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [AdGuard'a ekle](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                       |
| DNSCrypt, IPv6       | Sağlayıcı: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                        |

### fvz DNS

[fvz DNS](http://meo.ws/), Fusl'ın genel birincil OpenNIC Tier2 Anycast DNS Çözümleyicisidir.

| Protokol       | Adres                                                                 |                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [AdGuard'a ekle](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/), ibksturm tarafından sağlanan test sunucuları. OPENNIC, DNSSEC, filtreleme yok, günlük kaydı yok.

| Protokol             | Adres                                                                         |                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Ana makine adı: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Ana makine adı: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [AdGuard'a ekle](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Ana makine adı: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [AdGuard'a ekle](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Sağlayıcı: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`               | [AdGuard'a ekle](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                               |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/), Elias Ojala, Finlandiya tarafından yönetilmektedir.

| Protokol       | Adres                                    |                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Marbled Fennec

Marbled Fennec Networks is hosting DNS resolvers that are capable of resolving both OpenNIC and ICANN domains

| Protokol       | Adres                                     |                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.marbledfennec.net/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.marbledfennec.net/dns-query&name=dns.marbledfennec.net) |
| DNS-over-TLS   | `tls://dns.marbledfennec.net`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.marbledfennec.net&name=dns.marbledfennec.net)                         |

### momou! DNS

[momou! DNS](https://dns.momou.ch/), DoH ve DoT çözümleyicilerine üç filtreleme düzeyi sağlar

#### Standard

Reklamları, izleyicileri ve kötü amaçlı yazılımları engeller

| Protokol       | Adres                            |                                                                                                                                                                                                             |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://dns.momou.ch`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.momou.ch&name=dns.momou.ch)                         |

#### Kids

Reklamları, izleyicileri ve kötü amaçlı yazılımları da engelleyen çocuk dostu filtre

| Protokol       | Adres                                 |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/kids` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/kids&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://kids.dns.momou.ch`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://kids.dns.momou.ch&name=kids.dns.momou.ch)               |

#### Unfiltered

| Protokol       | Adres                                       |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.momou.ch/dns-query/unfiltered` | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.momou.ch/dns-query/unfiltered&name=dns.momou.ch) |
| DNS-over-TLS   | `tls://unfiltered.dns.momou.ch`             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://unfiltered.dns.momou.ch&name=unfiltered.dns.momou.ch)   |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/), küçük bir Reklam Engelleme DNS hobi projesidir.

#### OSZX DNS

Bu hizmet, D-o-H, D-o-T ve DNSCrypt v2 desteği ile küçük bir reklam engelleme DNS hobi projesidir.

| Protokol       | Adres                                                                     |                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                            | [AdGuard'a ekle](adguard:add_dns_server?address=51.38.83.141&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [AdGuard'a ekle](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                               |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [AdGuard'a ekle](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                           | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                       | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX

Bu sunucular reklam engelleme sağlamaz, günlük tutmaz ve DNSSEC'yi etkinleştirir.

| Protokol       | Adres                                                                          |                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=51.38.82.198&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [AdGuard'a ekle](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                         |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                         |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                            | [AdGuard'a ekle](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                        | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/), 140 binden fazla reklam, reklam izleme, kötü amaçlı yazılım ve kimlik avı alan adlarını engeller. Günlük tutmama, ECS yok, DNSSEC doğrulaması var, ücretsiz!

#### Singapur DNS Sunucusu

| Protokol       | Adres                                                                           | Konum                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                                | [AdGuard'a ekle](adguard:add_dns_server?address=174.138.21.128&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                     | [AdGuard'a ekle](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`                  | [AdGuard'a ekle](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                        |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`     | [AdGuard'a ekle](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                       |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (üçüncü taraf aracılığıyla önbelleğe alınır) | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                           | [AdGuard'a ekle](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                            | [AdGuard'a ekle](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japonya DNS Sunucusu

| Protokol       | Adres                                                                           |                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=172.104.93.80&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                                | [AdGuard'a ekle](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [AdGuard'a ekle](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                |
| DNSCrypt, IPv6 | Sağlayıcı: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [AdGuard'a ekle](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                       |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                               | [AdGuard'a ekle](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                 | [AdGuard'a ekle](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                             | [AdGuard'a ekle](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### Seby DNS

[Seby DNS](https://dns.seby.io/), Sebastian Schmidt tarafından sağlanan gizlilik odaklı bir DNS hizmetidir. Günlük Tutmama, DNSSEC doğrulaması.

#### DNS Server 1

| Protokol       | Adres                                                       |                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                              | [AdGuard'a ekle](adguard:add_dns_server?address=45.76.113.31&name=), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Sağlayıcı: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [AdGuard'a ekle](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                |
| DNS-over-TLS   | `tls://dot.seby.io`                                         | [AdGuard'a ekle](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### BlackMagicc DNS

[BlackMagicc DNS](https://bento.me/blackmagicc) is a personal DNS Server located in Vietnam and intended for personal and small-scale use. It features ad blocking, malware/phishing protection, adult content filter, and DNSSEC validation.

| Protokol       | Adres                                   |                                                                                                                                                                                                                               |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `103.252.122.187`                       | [AdGuard'a ekle](adguard:add_dns_server?address=103.252.122.187&name=BlackMagiccDNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=103.252.122.187&name=BlackMagiccDNS)                                             |
| DNS, IPv6      | `2401:4ae0::38`                         | [AdGuard'a ekle](adguard:add_dns_server?address=2401:4ae0::38&name=BlackMagiccDNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=2401:4ae0::38&name=BlackMagiccDNS)                                                 |
| DNS-over-HTTPS | `https://rx.techomespace.com/dns-query` | [AdGuard'a ekle](adguard:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS), [AdGuard VPN'e ekle](adguardvpn:add_dns_server?address=https://rx.techomespace.com/dns-query&name=BlackMagiccDNS) |
