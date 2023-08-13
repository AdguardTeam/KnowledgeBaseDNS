---
title: 既知のDNSプロバイダー一覧
sidebar_position: 3
---

:::info

このページでは、信頼できる DNS プロバイダーのおすすめリストがあります。 これらを使用するには、まず AdGuard 広告ブロッカーもしくは AdGuard VPN をお使いのデバイスにインストールしてください。 次に、同じデバイスで、この記事に記載されているプロバイダーへのリンクをクリックしてください。

クイックリンク: [AdGuard 広告ブロッカーをダウンロード](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [AdGuard VPN をダウンロード](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) は、広告ブロック、プライバシー保護、ペアレンタルコントロールができる、DNSレベルのソリューションです。 使用しているプラットフォームやデバイスに関係なく、オンライン広告、トラッカー、フィッシングに対して十分な保護機能を提供します。

#### AdGuard DNS デフォルト

これらのサーバーは、広告、トラッキング（追跡）、フィッシングをブロックします。

| プロトコル          | アドレス                                                                          |                                                                                                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.14` と `94.140.15.15`                                               | [[AdGuard に追加する](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)]                                                 |
| DNS, IPv6      | `2a10:50c0::ad1:ff` と `2a10:50c0::ad2:ff`                                     | [[AdGuard に追加する](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)]                                       |
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query`                                       | [[AdGuardに追加する](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS)] [[AdGuard VPNに追加する](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS)] |
| DNS-over-TLS   | `tls://dns.adguard-dns.com`                                                   | [[AdGuard に追加する](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)]                       |
| DNS-over-QUIC  | `quic://dns.adguard-dns.com`                                                  | [[AdGuard に追加する](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)]                     |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [AdGuard に追加する](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                    |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [AdGuard に追加する](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                           |

#### AdGuard DNS ファミリー保護

これらのサーバーは、「AdGuard DNS デフォルト」の機能 ＋ アダルトWebサイトのブロック ＋ セーフサーチを提供します。

| プロトコル          | アドレス                                                                          |                                                                                                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` と `94.140.15.16`                                               | [[AdGuard に追加する](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)]                                                         |
| DNS, IPv6      | `2a10:50c0::bad1:ff` と `2a10:50c0::bad2:ff`                                   | [[AdGuardに追加する](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)] [[AdGuard VPNに追加する](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)]                                               |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                    | [[AdGuard に追加する](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS)] |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                | [[AdGuard に追加する](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)]                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                               | [[AdGuard に追加する](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)]                       |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`         | [AdGuard に追加する](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                             |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [AdGuard に追加する](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                   |

#### AdGuard DNS フィルタリングなし

これらの各サーバーは、安全で信頼性の高い接続を提供しますが、「AdGuard DNS デフォルト」サーバーや「AdGuard DNS ファミリー保護」サーバーと違って、何もフィルタリング（ブロック）しません。

| プロトコル          | アドレス                                                                           |                                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `94.140.14.140` と `94.140.14.141`                                              | [[AdGuard に追加する](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)]                                                               |
| DNS, IPv6      | `2a10:50c0::1:ff` と `2a10:50c0::2:ff`                                          | [[AdGuard に追加する](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)]                                                           |
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query`                                 | [[AdGuard に追加する](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS)] |
| DNS-over-TLS   | `tls://unfiltered.adguard-dns.com`                                             | [[AdGuard に追加する](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)]                         |
| DNS-over-QUIC  | `quic://unfiltered.adguard-dns.com`                                            | [[AdGuardに追加する](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)] [[AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)]                        |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [AdGuard に追加する](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                         |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [AdGuard に追加する](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                            |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) は無料の再帰DNSサービスです。 Yandex.DNS のサーバーはロシア、CIS 諸国、西ヨーロッパにあります。 ユーザーのリクエストは、高速接続を提供する最寄りのデータセンターによって処理されます。

#### Basic

「Basic」モードでは、トラフィック フィルタリングはありません。

| プロトコル          | アドレス                                                                  |                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                                           | [AdGuard に追加する](adguard:add_dns_server?address=77.88.8.8&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff`                     | [AdGuard に追加する](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [AdGuard に追加する](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)    |

#### Safe

「Safe」モードでは、感染サイトや詐欺サイトからの保護が提供されます。

| プロトコル     | アドレス                                              |                                                                                                                                                           |
| --------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` and `77.88.8.2`                      | [AdGuard に追加する](adguard:add_dns_server?address=77.88.8.88&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=77.88.8.88&name=)                 |
| DNS, IPv6 | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad` | [AdGuard に追加する](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Family

「Family」モードでは、感染しているサイト、詐欺サイト、アダルト系サイトからの保護が提供されます。

| プロトコル     | アドレス                                              |                                                                                                                                                           |
| --------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` and `77.88.8.7`                       | [AdGuard に追加する](adguard:add_dns_server?address=77.88.8.3&name=), [AdGuard VPNに追加する](adguardvpn:add_dns_server?address=77.88.8.3&name=)                    |
| DNS, IPv6 | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11` | [AdGuard に追加する](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) はカスタマイズ可能なフィルタリングを提供する DNS サービスです。 このサービスは、不適切なコンテンツなしで安全なウェブ閲覧方法を提供します。

#### Family Filter

プロキシ & VPNドメインや混合コンテンツサイトを含む、すべてのアダルト、ポルノ、露骨なサイトへのアクセスをブロックします。

| プロトコル          | アドレス                                                     |                                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168`                  | [AdGuard に追加する](adguard:add_dns_server?address=185.228.168.168&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::`                      | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                          |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                          |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`       | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS-over-TLS   | `tls://family-filter-dns.cleanbrowsing.org`              | [AdGuard に追加する](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Adult Filter

ファミリーフィルタよりも制限が緩く、アダルトコンテンツや悪意のあるドメイン、フィッシングドメインへのアクセスのみをブロックします。

| プロトコル          | アドレス                                                      |                                                                                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.10` and `185.228.169.11`                     | [AdGuard に追加する](adguard:add_dns_server?address=185.228.168.10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`                     | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [AdGuard に追加する](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                       |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                    |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`         | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS-over-TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                | [AdGuard に追加する](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Security Filter

フィッシング、スパム、悪意のあるドメインをブロックします。

| プロトコル          | アドレス                                                 |                                                                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                  | [AdGuard に追加する](adguard:add_dns_server?address=185.228.168.9&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`                | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS-over-TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [AdGuard に追加する](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) は、世界中の DNS サーバー ネットワークを通じて DNS リクエストを解決するドメイン名解決サービスです。 過剰な広告を削除し、フィッシングやスパイウェアから保護します。

| プロトコル          | アドレス                                                                  |                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                                        | [AdGuard に追加する](adguard:add_dns_server?address=8.26.56.26&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=8.26.56.26&name=)              |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [AdGuard に追加する](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) は、セキュリティと脅威インテリジェンスが組み込まれており、サイトやオンラインアプリケーションへの高速かつ信頼性の高いアクセスを提供する、無料のクラウドベース再帰 DNS サービスです。

#### Reliability & Performance 1

これらのサーバーは、特定のカテゴリをブロックすることなく、信頼性が高く高速な DNS ルックアップを提供します。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` and `156.154.71.1`       | [AdGuard に追加する](adguard:add_dns_server?address=156.154.70.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` and `2610:a1:1019::1` | [AdGuard に追加する](adguard:add_dns_server?address=2610:a1:1018::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Reliability & Performance 2*

これらのサーバーは、特定のカテゴリをブロックすることなく、信頼性の高い高速な DNS ルックアップを提供し、NXDomain (存在しないドメイン) 応答がランディングページにリダイレクトされることも防ぎます。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` and `156.154.71.5`       | [AdGuard に追加する](adguard:add_dns_server?address=156.154.70.5&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` and `2610:a1:1019::5` | [AdGuard に追加する](adguard:add_dns_server?address=2610:a1:1018::5&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Threat Protection

これらのサーバーは、悪意のあるドメインからの保護を提供し、「Reliability & Performance」機能も備えています。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` and `156.154.71.2`       | [AdGuard に追加する](adguard:add_dns_server?address=156.154.70.2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` and `2610:a1:1019::2` | [AdGuard に追加する](adguard:add_dns_server?address=2610:a1:1018::2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Family Secure

これらのサーバーはアダルトコンテンツをブロックし、「Reliability & Performance」+「Threat Protection」機能を備えています。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` and `156.154.71.3`       | [AdGuard に追加する](adguard:add_dns_server?address=156.154.70.3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` and `2610:a1:1019::3` | [AdGuard に追加する](adguard:add_dns_server?address=2610:a1:1018::3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Business Secure

これらのサーバーは、不要なコンテンツや時間を浪費するコンテンツをブロックし、「Reliability & Performance」+「Threat Protection」+「Family Secure」機能も備えています。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` and  `156.154.71.4`      | [AdGuard に追加する](adguard:add_dns_server?address=156.154.70.4&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` and `2610:a1:1019::4` | [AdGuard に追加する](adguard:add_dns_server?address=2610:a1:1018::4&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) は、ダウンタイムはゼロで、コンテンツフィルタリングやフィッシング保護などの機能を組み込んでDNSを拡張するサービスです。

#### Standard

マルウェアからデバイスを保護するカスタムフィルタリング機能付きDNSサーバー。

| プロトコル          | アドレス                                                          |                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`                         | [AdGuard に追加する](adguard:add_dns_server?address=208.67.222.222&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`                       | [AdGuard に追加する](adguard:add_dns_server?address=2620:119:35::35&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [AdGuard に追加する](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                            |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [AdGuard に追加する](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                           |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query`                           | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

アダルトコンテンツブロックを提供するOpenDNSサーバー。

| プロトコル          | アドレス                                                         |                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`                        | [AdGuard に追加する](adguard:add_dns_server?address=208.67.222.123&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [AdGuard に追加する](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query`             | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) は、現在お使いのDNSプロバイダーの代わりとして使用できる、無料のグローバルDNS解決サービスです。

| プロトコル          | アドレス                                              |                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`                           | [AdGuard に追加する](adguard:add_dns_server?address=8.8.8.8&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844` | [AdGuard に追加する](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS-over-HTTPS | `https://dns.google/dns-query`                    | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS-over-TLS   | `tls://dns.google`                                | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) は、インターネット上のあらゆるホストのドメイン名解決を提供する再帰ネームサーバーとして機能する、無料で高速なDNSサービスです。

#### Standard

| プロトコル                | アドレス                                              |                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` and `1.0.0.1`                           | [AdGuard に追加する](adguard:add_dns_server?address=1.1.1.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` and `2606:4700:4700::1001` | [AdGuard に追加する](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`            | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`            | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS-over-TLS         | `tls://1dot1dot1dot1.cloudflare-dns.com`          | [AdGuard に追加する](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Malware blocking only（マルウェアブロックのみ）

| プロトコル          | アドレス                                              |                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`                           | [AdGuard に追加する](adguard:add_dns_server?address=1.1.1.2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6      | `2606:4700:4700::1112` and `2606:4700:4700::1002` | [AdGuard に追加する](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                         |
| DNS-over-HTTPS | `https://security.cloudflare-dns.com/dns-query`   | [AdGuard に追加する](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS-over-TLS   | `tls://security.cloudflare-dns.com`               | [AdGuard に追加する](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Malware and adult content blocking（マルウェアとアダルトコンテンツブロック）

| プロトコル                | アドレス                                              |                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` and `1.0.0.3`                           | [AdGuard に追加する](adguard:add_dns_server?address=1.1.1.3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` and `2606:4700:4700::1003` | [AdGuard に追加する](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`     | [AdGuard に追加する](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS-over-TLS         | `tls://family.cloudflare-dns.com`                 | [AdGuard に追加する](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) は、ハイパフォーマンス、プライバシー、フィッシングやスパイウェアからのセキュリティ保護を提供する、無料で再帰的なエニーキャストDNSプラットフォームです。 Quad9サーバーは検閲コンポーネントを提供していません。

#### Standard

フィッシングやスパイウェアからの保護を提供する通常のDNSサーバー。 ブロックリスト、DNSSEC検証、その他のセキュリティ機能が含まれています。

| プロトコル          | アドレス                                                           |                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.9` and `149.112.112.112`                                | [AdGuard に追加する](adguard:add_dns_server?address=9.9.9.9&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`                              | [AdGuard に追加する](adguard:add_dns_server?address=2620:fe::fe&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [AdGuard に追加する](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                  |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`                              | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS-over-TLS   | `tls://dns.quad9.net`                                          | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Unsecured

Unsecured（セキュリティ保護されていない）DNSサーバーは、セキュリティブロックリスト、DNSSEC、EDNSクライアントサブネットを提供しません。

| プロトコル          | アドレス                                                              |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.10` and `149.112.112.10`                                   | [AdGuard に追加する](adguard:add_dns_server?address=9.9.9.10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`                                | [AdGuard に追加する](adguard:add_dns_server?address=2620:fe::10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [AdGuard に追加する](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                      |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`                               | [AdGuard に追加する](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                           | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNSクライアントサブネットは、権威DNSサーバーに送信されるリクエストにエンドユーザーIPアドレスデータのコンポーネントを含める方法です。 セキュリティブロックリスト、DNSSEC、EDNSクライアントサブネットを提供します。

| プロトコル          | アドレス                                                           |                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `9.9.9.11` and `149.112.112.11`                                | [AdGuard に追加する](adguard:add_dns_server?address=9.9.9.11&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`                             | [AdGuard に追加する](adguard:add_dns_server?address=2620:fe::11&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [AdGuard に追加する](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                          |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`                            | [AdGuard に追加する](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                        | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) は無料のDNSサービスで、他の代替サービスよりもDNSの安定性とセキュリティが向上しています。 ベVerisignはユーザーのプライバシーを尊重しています。公開DNSデータを第三者に販売したり、ユーザーのクエリをリダイレクトして広告を配信したりすることはありません。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` and `64.6.65.6`             | [AdGuard に追加する](adguard:add_dns_server?address=64.6.64.6&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=64.6.64.6&name=)             |
| DNS, IPv6 | `2620:74:1b::1:1` and `2620:74:1c::2:2` | [AdGuard に追加する](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) は、 [switch.ch](https://www.switch.ch/)によって提供されるスイスのパブリックDNSサービスです。

| プロトコル          | アドレス                                                                             |                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | Provider: `dns.switch.ch` IP: `130.59.31.248`                                    | [AdGuard に追加する](adguard:add_dns_server?address=130.59.31.248&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6      | Provider: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                               | [AdGuard に追加する](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query`                                                | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS-over-TLS   | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248` and IPv6: `2001:620:0:ff::2` | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/)は、Dynによる無料の代替DNSサービスです。

| プロトコル     | アドレス                                |                                                                                                                                                 |
| --------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` and `216.146.36.36` | [AdGuard に追加する](adguard:add_dns_server?address=216.146.35.35&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) は、プライバシー保護機能を備えたロギングなしで高速な無料サーバーです。

| プロトコル     | アドレス                                                          |                                                                                                                                                                           |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` and `84.200.70.40`                             | [AdGuard に追加する](adguard:add_dns_server?address=84.200.69.80&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b` | [AdGuard に追加する](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/)のコンテンツフィルタリングとインターネットセキュリティ用ソリューション。

| プロトコル     | アドレス             |                                                                                                                                                   |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [AdGuard に追加する](adguard:add_dns_server?address=193.58.251.251&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) は、広告、追跡、フィッシングから保護する、高速で安全なDNSサービスです。

#### West DNS Server (Main)

| プロトコル          | アドレス                              |                                                                                                                                                                                                               |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS-over-TLS   | `tls://dns.comss.one`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.comss.one:784`        | [AdGuard に追加する](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Siberia and Far East)

| プロトコル          | アドレス                                   |                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS-over-TLS   | `tls://dns.east.comss.one`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC  | `quic://dns.east.comss.one`            | [AdGuard に追加する](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) は、南北アメリカ、ヨーロッパ、アフリカ、オーストラリア、極東など、世界中に配置されたサーバーで構成されるグローバル・エニーキャスト・ネットワークで、世界中のどの地点からでも高速で信頼性の高いDNS解決を保証します。

| プロトコル     | アドレス                              |                                                                                                                                               |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` and `195.46.39.40` | [AdGuard に追加する](adguard:add_dns_server?address=195.46.39.39&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works)は個人情報や財務データの盗難から保護します。 ウイルス、ランサムウェア、その他のマルウェアが家に入らないようにします。

#### Private

「Private」モードはDNS解決のみです。

| プロトコル                  | アドレス                                                                                                |                                                                                                                                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` and `149.112.122.10`                                                               | [AdGuard に追加する](adguard:add_dns_server?address=149.112.121.10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` and `2620:10A:80BC::10`                                                         | [AdGuard に追加する](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS-over-HTTPS         | `https://private.canadianshield.cira.ca/dns-query`                                                  | [AdGuard に追加する](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` and IPv6: `2620:10A:80BB::10` | [AdGuard に追加する](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protected

「Protected」モードでは、マルウェアとフィッシングから保護します。

| プロトコル                    | アドレス                                                                                                  |                                                                                                                                                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` and `149.112.122.20`                                                                 | [AdGuard に追加する](adguard:add_dns_server?address=149.112.121.20&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` and  `2620:10A:80BC::20`                                                          | [AdGuard に追加する](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS-over-HTTPS           | `https://protected.canadianshield.cira.ca/dns-query`                                                  | [AdGuard に追加する](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protected | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` and IPv6: `2620:10A:80BB::20` | [AdGuard に追加する](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Family

「Family」モードでは、「Protected」＋アダルトコンテンツのブロックを提供。

| プロトコル                 | アドレス                                                                                               |                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4             | `149.112.121.30` and `149.112.122.30`                                                              | [AdGuard に追加する](adguard:add_dns_server?address=149.112.121.30&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6             | `2620:10A:80BB::30` and `2620:10A:80BC::30`                                                        | [AdGuard に追加する](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS-over-HTTPS        | `https://family.canadianshield.cira.ca/dns-query`                                                  | [AdGuard に追加する](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Family | Hostname: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` and IPv6: `2620:10A:80BB::30` | [AdGuard に追加する](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) は、OpenNICプロジェクトによる無料の代替DNSサービスです。

| プロトコル     | アドレス                                       |                                                                                                                                                     |
| --------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` and `169.239.202.202`    | [AdGuard に追加する](adguard:add_dns_server?address=185.121.177.177&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53` | [AdGuard に追加する](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/)は、趣味としての小さなDNSプロジェクト。 ログなし、Ethereum Name Service（イーサリアムネームサービス）、DNSSEC対応 & 広告、トラッカー、マルウェアをフィルタリング。

#### Finland DNS Server

| プロトコル                | アドレス                                                                     |                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`                | [AdGuard に追加する](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177`    | [AdGuard に追加する](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`        | [AdGuard に追加する](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                      |

#### Japan DNS Server

| プロトコル                | アドレス                                                                                |                                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                           | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query`                                    | [AdGuard に追加する](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [AdGuard に追加する](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                          |

#### Germany DNS Server

| プロトコル                | アドレス                                                                     |                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot-de.blahdns.com` IP: `159.69.198.101`                | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`    | [AdGuard に追加する](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`        | [AdGuard に追加する](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                  |
| DNSCrypt, IPv6       | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                      |

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) 、アダルトサイトのブロックを目的としています。 子供も大人も、悪質なウェブサイトによる追跡を心配することなく、安全にインターネットを利用することができるようにします。

| プロトコル          | アドレス                                                       |                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`               | [AdGuard に追加する](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS-over-TLS   | `tls://dns-dot.dnsforfamily.com`                           | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`                        | [AdGuard に追加する](adguard:add_dns_server?address=94.130.180.225&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` and `2a01:4f8:1c17:4df8::1`        | [AdGuard に追加する](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4 | Provider: `dnsforfamily.com` IP: `94.130.180.225`          | [AdGuard に追加する](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                               |
| DNSCrypt, IPv6 | Provider: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [AdGuard に追加する](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                   |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/)はOpen DNSSEC Validating Resolversです。 CZ.NICは個人情報を収集したり、デバイスが個人情報を送信するページで情報を収集したりすることはありません。

| プロトコル          | アドレス                                        |                                                                                                                                                                                           |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `193.17.47.1` and `185.43.135.1`            | [AdGuard に追加する](adguard:add_dns_server?address=193.17.47.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6      | `2001:148f:ffff::1` and `2001:148f:fffe::1` | [AdGuard に追加する](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh`                   | [AdGuard に追加する](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS-over-TLS   | `tls://odvr.nic.cz`                         | [AdGuard に追加する](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) は無料の再帰的DNSサービスで、インターネットユーザーの大半に高速で安定した安全なDNS解決を提供するよう努力しています。 様々な攻撃や脅威からユーザーを守る「AliGuard」機能を搭載しています。

| プロトコル          | アドレス                                   |                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `223.5.5.5` and `223.6.6.6`            | [AdGuard に追加する](adguard:add_dns_server?address=223.5.5.5&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6      | `2400:3200::1` and `2400:3200:baba::1` | [AdGuard に追加する](adguard:add_dns_server?address=2400:3200::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query`     | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS-over-TLS   | `tls://dns.alidns.com`                 | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### CFIEC Public DNS

強力なセキュリティ機能を備え、スパイウェアや悪意のあるウェブサイトから保護するIPv6ベースのエニーキャストDNSサービス。 IPv6ユーザーのみに対してドメイン名解決を提供するために、DNS64をサポートしています。

| プロトコル          | アドレス                              |                                                                                                                                                                                                               |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6      | `240C::6666` and `240C::6644`     | [AdGuard に追加する](adguard:add_dns_server?address=240C::6666&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS-over-TLS   | `tls://dns.cfiec.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) は、不適切なウェブサイトや虐待的なコンテンツから子供たちを保護するためのエニーキャスト・インターネット・フィルタリング・システムです。

| プロトコル          | アドレス                                                        |                                                                                                                                                     |
| -------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` and `180.131.145.145`                     | [AdGuard に追加する](adguard:add_dns_server?address=180.131.144.144&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [AdGuard に追加する](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)            |

### 360 Secure DNS

**360 Secure DNS** は、高度なネットワークセキュリティ脅威保護機能を備えた、業界をリードする再帰型DNSサービスです。

| プロトコル          | アドレス                               |                                                                                                                                                                                                   |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.226.4.6` and `218.30.118.6`   | [AdGuard に追加する](adguard:add_dns_server?address=101.226.4.6&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4      | `123.125.81.6` and `140.207.198.6` | [AdGuard に追加する](adguard:add_dns_server?address=123.125.81.6&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query`     | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS-over-TLS   | `tls://dot.360.cn`                 | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) は、Internet Initiative Japan（インターネットイニシアティブジャパン）が運営するパブリックDNSサービスです。 また、児童虐待コンテンツもブロックします。

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS-over-TLS   | `tls://public.dns.iij.jp`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) は、プライバシーに配慮したDNSプロバイダーであり、ドメイン名解決サービス開発において長年の経験を持ち、より迅速、正確、安定した再帰的解決サービスをユーザーに提供することを目指しています。

| プロトコル          | アドレス                              |                                                                                                                                                                                       |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `119.29.29.29` and `119.28.28.28` | [AdGuard に追加する](adguard:add_dns_server?address=119.29.29.29&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS-over-HTTPS | `https://doh.pub/dns-query`       | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS-over-HTTPS | `https://dns.pub/dns-query`       | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS-over-TLS   | `tls://dot.pub`                   | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** は、プロフェッショナルで信頼性の高いDNSサービスです。

#### Normal

広告や迷惑なウェブサイトをブロックします。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` and `114.114.115.115` | [AdGuard に追加する](adguard:add_dns_server?address=114.114.114.114&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Safe

フィッシングサイト、悪質なサイト、その他の危険なサイトをブロックします。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` and `114.114.115.119` | [AdGuard に追加する](adguard:add_dns_server?address=114.114.114.119&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Family

これらのサーバーは、アダルトサイトや不適切なコンテンツをブロックします。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` and `114.114.115.110` | [AdGuard に追加する](adguard:add_dns_server?address=114.114.114.110&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) は、TWNIC (Taiwan Network Information Center)によるログなしで無料の代替DNSサービスです。

| プロトコル          | アドレス                                    |                                                                                                                                                                                                           |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104` | [AdGuard に追加する](adguard:add_dns_server?address=101.101.101.101&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6      | `2001:de4::101` and  `2001:de4::102`    | [AdGuard に追加する](adguard:add_dns_server?address=2001:de4::101&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query`        | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS-over-TLS   | `tls://101.101.101.101`                 | [AdGuard に追加する](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** は、悪意のあるドメインをブロックする機能を備えた、安全・高速・無料のニッチDNSサービスです。

#### Pure Edition

| プロトコル     | アドレス                             |                                                                                                                                               |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` and `52.80.52.52` | [AdGuard に追加する](adguard:add_dns_server?address=117.50.10.10&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| プロトコル     | アドレス                             |                                                                                                                                               |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` and `52.80.66.66` | [AdGuard に追加する](adguard:add_dns_server?address=117.50.11.11&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) は、14万以上の広告、広告追跡、マルウェア、フィッシング・ドメインをブロックします。 ロギングなし、ECSなし、DNSSEC検証、無料。

#### Singapore DNS Server

| プロトコル          | アドレス                                                                       | ロケーション                                                                                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `174.138.21.128`                                                           | [AdGuard に追加する](adguard:add_dns_server?address=174.138.21.128&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`                                                | [AdGuard に追加する](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`              | [AdGuard に追加する](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                       |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]` | [AdGuard に追加する](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                      |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party)                | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query`                                           | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC  | `quic://doh.tiar.app`                                                      | [AdGuard に追加する](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS-over-TLS   | `tls://dot.tiar.app`                                                       | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Japan DNS Server

| プロトコル          | アドレス                                                                           |                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `172.104.93.80`                                                                | [AdGuard に追加する](adguard:add_dns_server?address=172.104.93.80&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`                                               | [AdGuard に追加する](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [AdGuard に追加する](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                               |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [AdGuard に追加する](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                      |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query`                                              | [AdGuard に追加する](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query`                                                | [AdGuard に追加する](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS-over-TLS   | `tls://jp.tiar.app`                                                            | [AdGuard に追加する](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) は、オープンで無料のパブリックDNSサービスです。 DNSリダイレクトなし、ロギングなし。

| プロトコル     | アドレス                                  |                                                                                                                                                   |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` and `172.104.49.100` | [AdGuard に追加する](adguard:add_dns_server?address=172.104.237.57&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` and `37.235.1.177`     | [AdGuard に追加する](adguard:add_dns_server?address=37.235.1.174&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) は、Freenom Worldによる無料の匿名DNSリゾルバです。

| プロトコル     | アドレス                            |                                                                                                                                             |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` and `80.80.81.81` | [AdGuard に追加する](adguard:add_dns_server?address=80.80.80.80&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) は、小さな広告ブロックDNSホビープロジェクトです。

#### OSZX server

これらのサーバーは、広告ブロックを提供せず、ログを保存せず、DNSSECを有効にしています。

| プロトコル          | アドレス                                                                     |                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.83.141`                                                           | [AdGuard に追加する](adguard:add_dns_server?address=51.38.83.141&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::d64`                                                | [AdGuard に追加する](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [AdGuard に追加する](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                              |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [AdGuard に追加する](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                               |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query`                                          | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS-over-TLS   | `tls://dns.oszx.co`                                                      | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### PumpleX server

これらのサーバーは、広告ブロックを提供せず、ログを保存せず、DNSSECを有効にしています。

| プロトコル          | アドレス                                                                          |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `51.38.82.198`                                                                | [AdGuard に追加する](adguard:add_dns_server?address=51.38.82.198&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`                                                    | [AdGuard に追加する](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [AdGuard に追加する](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                        |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [AdGuard に追加する](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                        |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query`                                           | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS-over-TLS   | `tls://dns.pumplex.com`                                                       | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) はDNSプライバシーサービスを運営し、DNSトラフィックの保護と、最新のプロトコルを提供するDNSリゾルバの多様化を、支援しています。

| プロトコル          | アドレス                                    |                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS-over-TLS   | `tls://dot1.applied-privacy.net`        | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) は、Strongarm社によるDNSサービスで、悪意のあるコンテンツとのやり取りを防止します。

| プロトコル     | アドレス                               |                                                                                                                                                 |
| --------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` and `52.3.100.184` | [AdGuard に追加する](adguard:add_dns_server?address=54.174.40.213&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) は、SafeSurferによるDNSサービスで、有害なアダルトコンテンツからあなたのデバイスを保護します。

| プロトコル          | アドレス                                                              |                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`                            | [AdGuard に追加する](adguard:add_dns_server?address=104.155.237.225&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [AdGuard に追加する](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)    |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) はマルウェア保護、広告ブロック、ログなしのセキュアでプライベートなオープンソースDNSリゾルバです。 あなたのスマホ、タブレット、コンピュータをDegoogleとUngoogleします。

| プロトコル          | アドレス                                                                          |                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [AdGuard に追加する](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                           |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [AdGuard に追加する](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                              |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query`                                         | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS-over-TLS   | `tls://dns.decloudus.com`                                                     | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) はフィンランドのElias Ojala（エリアス・オヤラ）によって運営されています。

| プロトコル          | アドレス                                     |                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS-over-TLS   | `tls://resolver-eu.lelux.fi`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) は、BLR1地域のDigital Ocean dropletで動作するサーバーです。 管理人：NemoことAbhay Rana。

| プロトコル          | アドレス                                                             |                                                                                                                                                 |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [AdGuard に追加する](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) はロギングなし、DNSSEC有効の無料DNSサービスを提供します。

| プロトコル          | アドレス                                |                                                                                                                                                                                                   |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.222.222.222` and `45.11.45.11` | [AdGuard に追加する](adguard:add_dns_server?address=185.222.222.222&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6      | `2a09::` and `2a11::`               | [AdGuard に追加する](adguard:add_dns_server?address=2a09::&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query`      | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS-over-TLS   | `tls://185.222.222.222`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) は、 [adminforge](https://adminforge.de/)によって提供される広告ブロッカー付きでロギングなしの冗長DNSリゾルバです。

| プロトコル          | アドレス                                                  |                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `176.9.93.198` and `176.9.1.117`                      | [AdGuard に追加する](adguard:add_dns_server?address=176.9.93.198&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` and `2a01:4f8:141:316d::117` | [AdGuard に追加する](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query`                       | [AdGuard に追加する](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS-over-TLS   | `tls://dnsforge.de`                                   | [AdGuard に追加する](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver)のサーバーは[Restena Foundation](https://www.restena.lu/)が提供しています。

| プロトコル          | アドレス                                                                                |                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` and IPv6: `2001:a18:1::29` | [AdGuard に追加する](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` and IPv6: `2001:a18:1::29`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu) |

### fvz DNS

[fvz DNS](http://meo.ws/) はFuslのパブリックプライマリOpenNIC Tier2 Anycast DNS Resolverです。

| プロトコル          | アドレス                                                                 |                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [AdGuard に追加する](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [AdGuard に追加する](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) はFreifunk Münchenが提供する無料のDNSサーバー。

| プロトコル                | アドレス                                                                   |                                                                                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://dot.ffmuc.net`                                        | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query`                            | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [AdGuard に追加する](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                      |
| DNSCrypt, IPv6       | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [AdGuard に追加する](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                       |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) は、Digital Society（デジタル・ソサエティ）が運営するパブリック・リゾルバです。 スイスのチューリッヒでホストされています。

| プロトコル          | アドレス                                                                                           |                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` and IPv6: `2a05:fc84::42` | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS-over-TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` and IPv6: `2a05:fc84::43`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) は、 [LibreOps](https://libreops.cc/)によって運営されているパブリック暗号化 DNS サービスです。

| プロトコル          | アドレス                                         |                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `88.198.92.222`                              | [AdGuard に追加する](adguard:add_dns_server?address=88.198.92.222&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query`          | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads`                | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS-over-TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) はibksturmが提供するテストサーバー。 OPENNIC、DNSSEC、フィルタリングなし、ロギングなし。

| プロトコル                | アドレス                                                                    |                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Hostname: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Hostname: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [AdGuard に追加する](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [AdGuard に追加する](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Provider: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`          | [AdGuard に追加する](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                              |

### DNS Privacy

[DNS Privacy](https://dnsprivacy.org/)を推進、実装、展開するための共同オープンプロジェクト。

[Stubby開発者](https://getdnsapi.net/)が運営するDNSサーバー。

| プロトコル        | アドレス                                                                                                                          |                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37`                                           | [AdGuard に追加する](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS-over-TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15`  | [AdGuard に追加する](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS-over-TLS | Provider: `Surfnet` Hostname: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | [AdGuard に追加する](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

ノーログポリシーのある他のDNSサーバー。

| プロトコル              | アドレス                                                                                                                 |                                                                                                                                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS       | Provider: `UncensoredDNS` Hostname: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` and IPv6: `2a01:3a0:53:53::0` | [AdGuard に追加する](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS-over-TLS       | Provider: `UncensoredDNS` Hostname: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` and IPv6: `2001:67c:28a4::` | [AdGuard に追加する](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS-over-TLS       | Provider: `dkg` Hostname: `tls://dns.cmrg.net`  IP: `199.58.81.218` and IPv6: `2001:470:1c:76d::53`                  | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS-over-TLS       | Hostname: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` and IPv6: `2001:8b0:24:24::24`                        | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS-over-TLS       | Hostname: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` and IPv6: `2a01:4f8:c0c:3c03::2`                            | [AdGuard に追加する](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS-over-TLS       | Hostname: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` and IPv6: `2a01:4f8:c0c:3bfc::2`                            | [AdGuard に追加する](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS-over-TLS       | Hostname: `tls://dns.neutopia.org` IP: `89.234.186.112` and IPv6: `2a00:5884:8209::2`                                | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS-over-TLS       | Provider: `Go6Lab` Hostname: `tls://privacydns.go6lab.si` and IPv6: `2001:67c:27e4::35`                              | [AdGuard に追加する](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS-over-TLS       | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001`                       | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

最小限のロギング/制限のDNSサーバー。 これらのサーバーは、いくつかのロギング、自己署名証明書、またはストリクト・モードのサポートなしを使用しています。

| プロトコル        | アドレス                                                                                                              |                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS | Provider: `NIC Chile` Hostname: `dnsotls.lab.nic.cl` IP: `200.1.123.46` and IPv6: `2001:1398:1:0:200:1:123:46`    | [AdGuard に追加する](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS-over-TLS | Provider: `OARC` Hostname: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` and IPv6: `2620:ff:c000:0:1::64:25` | [AdGuard に追加する](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) はFredrik Petterssonが提供するゼロ・ロギングと広告ブロックのDNSサービス。

#### Blitz

[Configurable filtering](https://blitz-setup.ahadns.com/) worldwide DoH-only variant.（設定可能なフィルタリングワールドワイドDoHのみのバリアント。）

| プロトコル                                        | アドレス                              |                                                                                                                                                                                                                     |
| -------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, uncensored                   | `https://blitz.ahadns.com`        | [AdGuard に追加する](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, OISD filter                  | `https://blitz.ahadns.com/1:1`    | [AdGuard に追加する](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [AdGuard に追加する](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Netherlands（オランダ）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `5.2.75.75`                           | [AdGuard に追加する](adguard:add_dns_server?address=5.2.75.75&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6      | `2a04:52c0:101:75::75`                | [AdGuard に追加する](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.nl.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### India（インド）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.79.120.233`                       | [AdGuard に追加する](adguard:add_dns_server?address=45.79.120.233&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6      | `2400:8904:e001:43::43`               | [AdGuard に追加する](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS-over-TLS   | `tls://dot.in.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles（ロサンゼルス）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.67.219.208`                       | [AdGuard に追加する](adguard:add_dns_server?address=45.67.219.208&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6      | `2a04:bdc7:100:70::70`                | [AdGuard に追加する](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS-over-TLS   | `tls://dot.la.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York（ニューヨーク）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.213.26.187`                      | [AdGuard に追加する](adguard:add_dns_server?address=185.213.26.187&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6      | `2a0d:5600:33:3::3`                   | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS-over-TLS   | `tls://dot.ny.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Poland（ポーランド）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS-over-TLS   | `tls://dot.pl.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Italy（イタリア）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS-over-TLS   | `tls://dot.it.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### Spain（スペイン）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS-over-TLS   | `tls://dot.es.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Norway（ノルウェー）

| プロトコル          | アドレス                                  |                                                                                                                                                                                                                               |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS-over-TLS   | `tls://dot.no.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago（シカゴ）

| プロトコル          | アドレス                                   |                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS-over-TLS   | `tls://dot.chi.ahadns.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) は、Sebastian Schmidt（セバスチャン・シュミット）が提供するプライバシー重視のDNSサービスです。 ロギングなし、DNSSEC検証。

#### DNS Server 1

| プロトコル          | アドレス                                                       |                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `45.76.113.31`                                             | [AdGuard に追加する](adguard:add_dns_server?address=45.76.113.31&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [AdGuard に追加する](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                               |
| DNS-over-TLS   | `tls://dot.seby.io`                                        | [AdGuard に追加する](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) はスペインのバルセロナ近郊にあります。 puntCATは、あなたのプライバシーを尊重し、無料、安全、密接なパブリックDNSサービスを提供しています。

| プロトコル     | アドレス               |                                                                                                                                                       |
| --------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [AdGuard に追加する](adguard:add_dns_server?address=109.69.8.51&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [AdGuard に追加する](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) はパブリックDNSリゾルバを操作してリクエストを高速化し、冗長性を高めます。 サービスは [Peerix](https://www.peerix.net/) によって提供されています。

#### AdGuard DNS デフォルト

これらのサーバーは、トラフィックフィルタリングなしでDNS解決を提供します。

| プロトコル          | アドレス                                    |                                                                                                                                                                                                                       |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `185.235.81.1` and `185.235.81.2`       | [AdGuard に追加する](adguard:add_dns_server?address=185.235.81.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6      | `2a0d:4d00:81::1` and `2a0d:4d00:81::2` | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query`     | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS-over-TLS   | `tls://doh.dnslify.com`                 | [AdGuard に追加する](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Safe

「Safe」モードは、感染サイト、詐欺サイト、ボットサイトから保護します。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` and `185.235.81.4`       | [AdGuard に追加する](adguard:add_dns_server?address=185.235.81.3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` and `2a0d:4d00:81::4` | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Family

「Family」モードは、「Safe」リゾルバによる保護を提供し、アダルトサイトをブロックします。

| プロトコル     | アドレス                                    |                                                                                                                                                     |
| --------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` and `185.235.81.6`       | [AdGuard に追加する](adguard:add_dns_server?address=185.235.81.5&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` and `2a0d:4d00:81::6` | [AdGuard に追加する](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) は、任意ロギングを備えていて設定可能なフリーミアムフィルタリングリゾルバに加えて、ロギングなしの一般にアクセス可能な非フィルタリング・リゾルバを提供します。

#### Ultra-low latency（超低遅延）

| プロトコル          | アドレス                     |                                                                                                                                                                                                                   |
| -------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dns.nextdns.io` | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS-over-TLS   | `tls://dns.nextdns.io`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast（エニーキャスト）

| プロトコル          | アドレス                             |                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://anycast.dns.nextdns.io` | [AdGuard に追加する](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS-over-TLS   | `tls://anycast.dns.nextdns.io`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) は、Cloudflare Workerとして動作するDNS-over-HTTPSサービスと、設定可能なブロックリストを備えたFly.io Workerとして動作するDNS-over-TLSサービスを提供します。

#### AdGuard DNS フィルタリングなし

| プロトコル          | アドレス                            |                                                                                                                                                                                                                         |
| -------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://basic.rethinkdns.com/` | [AdGuard に追加する](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS-over-TLS   | `tls://max.rethinkdns.com`      | [AdGuard に追加する](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) は、プロキシ機能を備えたカスタマイズ可能なDNSサービスです。 つまり、広告やポルノなどをブロックするだけでなく、ウェブサイトやサービスのブロックを解除することもできるのです。

#### AdGuard DNS フィルタリングなし

| プロトコル          | アドレス                              |                                                                                                                                                                                     |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.0` and `76.76.10.0`      | [AdGuard に追加する](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6           | `2606:1a40::` and `2606:1a40:1::` | [AdGuard に追加する](adguard:add_dns_server?address=2606:1a40::&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS-over-HTTPS | `https://freedns.controld.com/p0` | [AdGuard に追加する](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS-over-TLS   | `p0.freedns.controld.com`         | [AdGuard に追加する](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Block malware（マルウェアブロック）

| プロトコル          | アドレス                              |                                                                                                                                                                                     |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.1`                       | [AdGuard に追加する](adguard:add_dns_server?address=76.76.2.1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p1` | [AdGuard に追加する](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Block malware + ads（マルウェアブロック＋広告ブロック）

| プロトコル          | アドレス                              |                                                                                                                                                                                     |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.2`                       | [AdGuard に追加する](adguard:add_dns_server?address=76.76.2.2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p2` | [AdGuard に追加する](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Block malware + ads + social（マルウェアブロック＋広告ブロック＋ソーシャルブロック）

| プロトコル          | アドレス                              |                                                                                                                                                                                     |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `76.76.2.3`                       | [AdGuard に追加する](adguard:add_dns_server?address=76.76.2.3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS-over-HTTPS | `https://freedns.controld.com/p3` | [AdGuard に追加する](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`   | [AdGuard に追加する](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)     |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) はオーストラリア、ドイツ、シンガポール、スウェーデン、英国、米国（ニューヨーク、ロサンゼルス）にエンドポイントを置き、QNAME最小化のあるパブリックアクセス可能なDNSを提供しています。

#### AdGuard DNS フィルタリングなし

| プロトコル          | アドレス                                |                                                                                                                                                                                                                       |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS-over-TLS   | `tls://doh.mullvad.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Ad blocking（広告ブロック）

| プロトコル          | アドレス                                        |                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`             | [AdGuard に追加する](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### 個人による小さなレゾルバ

このセクションでは、小さくて、主に個人的なDNSリゾルバを列挙します。 これらのプロバイダーは、「大手」プロバイダーと比較して、サーバーが1台またはごく少数しかなく、稼働率も悪いことが多い。 私たちは、これらの稼働率を適切に監視することはできません。 **自己責任で使用してください。**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) はインドのムンバイでホスティングされているパーソナルDNSサービスです。

Non-logging | Filters ads, trackers, phishing,etc | DNSSEC | QNAME Minimization | No EDNS Client Subnet.（ノンロギング | 広告、トラッカー、フィッシングなどをフィルタリング | DNSSEC | QNAMEの最小化 | EDNS クライアントサブネットなし）

| プロトコル          | アドレス                                                         |                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [AdGuard に追加する](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                            |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | [AdGuard に追加する](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Dandelion Sprout's Official DNS Server

[Dandelion Sproutの公式DNSサーバー](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) はノルウェーのトロンハイムでホストされているパーソナルDNSサービスで、AdGuard Homeのインフラストラクチャを使用しています。

より高度な構文のおかげで、AdGuard DNS よりも多くの広告やマルウェアをブロックするが、トラッカーにはより優しい。また、オルト・ライト・タブロイドやほとんどのイメージボードをブロックします。 ログは、使用されているフィルタリストの改善（例えば、ブロックされるべきではないサイトのブロックを解除するなど）や、サーバーシステムのアップデートに適していないタイミングを判断するために使用されます。

| プロトコル          | アドレス                                                  |                                                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [AdGuard に追加する](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [AdGuard に追加する](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582`           | [AdGuard に追加する](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [AdGuard VPN に追加する](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4      | 変動します（上記リンク参照）                                        |                                                                                                                                                                                                                                                                                               |
| DNS, IPv6      | 変動します（上記リンク参照）                                        |                                                                                                                                                                                                                                                                                               |
| DNSCrypt, IPv4 | 変動します（上記リンク参照）                                        |                                                                                                                                                                                                                                                                                               |

### OpenBLD.net DNS

[OpenBLD.net DNS](https://openbld.net/) は、Anycast/GeoDNS DNS-over-HTTPS、DNS-over-TLS リゾルバ。ブロックするもの：広告、追跡、アドウェア、マルウェア、悪質な活動、フィッシング会社。約100万のドメインをブロックします。 Can be has 24h/48h logs for DDoS/Flood mitigation attack.（DDoS/洪水軽減攻撃のために24時間/48時間のログを持つことがあります。）

#### Adaptive Filtering (ADA)

多くのユーザーにおすすめ。ほとんどの広告ネットワーク、広告トラッキング、マルウェア、フィッシング・ドメインをブロックする非常に柔軟なフィルタリング機能を備えています。

| プロトコル          | アドレス                                |                                                                             |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ada.openbld.net/dns-query` | [AdGuard に追加する](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ada.openbld.net`             | [AdGuard に追加する](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Strict Filtering (RIC)

広告、マーケティング、トラッキング、マルウェア、クリックベイト、コインハイブ、フィッシングドメインをブロックするという、より厳格なフィルタリングポリシー。

| プロトコル          | アドレス                                |                                                                             |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| DNS-over-HTTPS | `https://ric.openbld.net/dns-query` | [AdGuard に追加する](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS-over-TLS   | `tls://ric.openbld.net`             | [AdGuard に追加する](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
