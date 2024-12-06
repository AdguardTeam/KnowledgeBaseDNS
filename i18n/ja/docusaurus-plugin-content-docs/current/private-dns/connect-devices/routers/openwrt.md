---
title: OpenWRT
sidebar_position: 7
---

OpenWRTルーターは、オープンソースでLinuxベースのオペレーティングシステムを使用しています。このオペレーティングシステムはユーザーの好みに応じてルーターやゲートウェイを構成できる柔軟性を提供します。 開発者は暗号化DNSサーバーのサポートを追加しているので、デバイス上でプライベート AdGuard DNS を設定可能になっています。

## DNS-over-HTTPS を設定する

- **コマンドライン指示**。 必要なパッケージをインストールします。 DNS暗号化は自動的に有効になるはずです。

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy

  ```
- **ウェブインターフェース**。 ウェブインターフェースを使用して設定を管理したい場合は、必要なパッケージをインストールしてください。

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

「LuCI」→「Services（サービス）」→「HTTPS DNS Proxy」に移動して、https-dns-proxyを構成します。

- **DoHプロバイダーを設定します**。 https-dns-proxyは、デフォルトで Google DNS と Cloudflare DNS で構成されています。 それを AdGuard DoH に変更する必要があります。 故障耐性を向上させるために、いくつかのリゾルバーを指定しておきます。

  ```# Configure DoH provider
  1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  2. uci set https-dns-proxy.dns="https-dns-proxy"
  3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  6. uci set https-dns-proxy.dns.listen_port="5053"
  7. uci commit https-dns-proxy
  8. /etc/init.d/https-dns-proxy restart
  ```

## DNS-over-TLS を構成して接続する

- **コマンドライン指示**。 Dnsmasq DNSの役割を[無効にする](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role)か、完全に削除して、任意オプションとしてそのDHCPの役割をodhcpdで[置き換えます](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound)。

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

LANクライアントとローカルシステムは、Dnsmasqが無効になっていると仮定して、プライマリリゾルバとして「Unbound」を使用するはずです。

- **ウェブインターフェース**。 ウェブインターフェースを使用して設定を管理したい場合は、必要なパッケージをインストールしてください。

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

「LuCI」 → 「サービス 」→ 「再帰 DNS」 に移動して、「Unbound」 を構成します。

- **AdGuard DNS-over-TLS を構成して接続します**。

  ```1. uci add unbound zone
  2. uci set unbound.@zone[-1].enabled="1"
  3. uci set unbound.@zone[-1].fallback="0"
  4. uci set unbound.@zone[-1].zone_type="forward_zone"
  5. uci add_list unbound.@zone[-1].zone_name="."
  6. uci set unbound.@zone[-1].tls_upstream="1"
  7. uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  8. uci add_list unbound.@zone[-1].server="94.140.14.49"
  9. uci add_list unbound.@zone[-1].server="94.140.14.59"
  10. uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  11. uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  12. uci commit unbound
  13. /etc/init.d/unbound restart
  ```

## ルーターの管理画面を使って接続する

OpenW RT ルーターが DNS-over-HTTPS または DNS-over-TLS の設定をサポートしていない場合は、これらの手順を使用してください:

1. ルーターの管理画面を開きます。 （管理画面は、`192.168.1.1` または `192.168.0.1` でアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「ネットワーク」→「インターフェース」を開きます。
4. お使いのWi-Fiネットワークまたは有線接続を選択します。
5. 設定したいIPバージョンに応じて、IPv4アドレスまたはIPv6アドレスまでスクロールダウンします。
6. 「_カスタムDNSサーバーを使用_」の下で、使用したいDNSサーバーのIPアドレスを入力します。 複数のDNSサーバーを、スペースまたはカンマで区切って入力できます:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
7. ルーターをネットワーク上のデバイスのDNSフォワーダとして動作させたい場合は、追加でDNSフォワーディングを有効にできます。
8. 設定を保存します。
9. IP（チームプランをご利用の場合は専用IP）をリンクします。

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
