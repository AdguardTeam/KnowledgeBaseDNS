---
title: Keenetic
sidebar_position: 5
---

Keeneticルーターは、安定性と柔軟に設定できることで知られており、セットアップが簡単で、暗号化されたプライベートAdGuard DNSのデバイスへの簡単なインストールを可能にします。

## DNS-over-HTTPS を設定する

1. Open the router admin panel. （管理画面は、my.keenetic.net、ルーターのIPアドレス、または`192.168.1.1`からアクセスできます。）
2. 画面下部のメニューボタンを押し、「_管理_」を選択します。
3. 「_システム設定_」を開きます。
4. 「_コンポーネントオプション_」→ 「_システムコンポーネントオプション_」を押します。
5. 「_ユーティリティとサービス_」で、 %value% プロキシを選択してインストールします。
6. 「_メニュー_」→「_ネットワークルール_」→「&#x30A4;_&#x30F3;ターネットの安全性_」に進みます。
7. 「DNS-over-HTTPSサーバー」に移動し、「_DNS-over-HTTPSサーバーを追加_」をクリックします。
8. `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` フィールドにプライベート AdGuard DNS サーバーの URL を入力します。
9. [_保存_] をクリックします。

## DNS-over-TLS を構成して接続する

1. Open the router admin panel. （管理画面は、my.keenetic.net、ルーターのIPアドレス、または`192.168.1.1`からアクセスできます。）
2. 画面下部のメニューボタンを押し、「_管理_」を選択します。
3. 「_システム設定_」を開きます。
4. 「_コンポーネントオプション_」→ 「_システムコンポーネントオプション_」を押します。
5. 「_ユーティリティとサービス_」で、 %value% プロキシを選択してインストールします。
6. 「_メニュー_」→「_ネットワークルール_」→「&#x30A4;_&#x30F3;ターネットの安全性_」に進みます。
7. 「DNS-over-HTTPSサーバー」に移動し、「_DNS-over-HTTPSサーバーを追加_」をクリックします。
8. `tls://*********.d.adguard-dns.com` フィールドにプライベート AdGuard DNS サーバーの URL を入力します。
9. [_保存_] をクリックします。

## ルーターの管理画面を使って接続する

KeeneticルーターがDNS-over-HTTPSやDNS-over-TLS設定をサポートしていない場合は、以下のガイドをご利用ください:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「_インターネット_」または「_ホームネットワーク_」を開きます。
4. Select _WAN_ or _Internet_.
5. 「_DNS_」または「_DNS設定_」を選択します。
6. 「_手動DNS_」を選択します。 Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
7. 設定を保存します。
8. IP（チームプランをご利用の場合は専用IP）をリンクします。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
