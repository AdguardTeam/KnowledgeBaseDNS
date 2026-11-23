---
title: ASUS
sidebar_position: 3
---

## DNS-over-TLS を構成して接続する

これは、ASUSルーターでプライベート AdGuard DNS を設定するための一般的な手順です。

※この手順に含まれている構成情報は、特定のルーターモデルから取得したものであるため、個々のデバイスのインターフェースとは多少異なる場合があります。

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. ASUSルーターの管理画面にログインします。（管理画面は、[http://router.asus.com](http://router.asus.com/)、[http://192.168.1.1](http://192.168.1.1/)、[http://192.168.0.1](http://192.168.0.1/)、または[http://192.168.2.1](http://192.168.2.1/)からアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「_詳細設定_」サイドバーで、「WAN」セクションに移動します。
4. _WAN DNS 設定セクショ&#x30F3;_&#x3067;、「_DNS サーバーに自動的に接続_」を「_いいえ_」に設定します。
5. [_ローカルクエリの転送_]、[_DNS リバインドの有効化_]、および [_DNSSECの有効化_] をすべて「いいえ」に設定します。
6. 「_DNSプライバシープロトコル_」を「_DNS-over-TLS（DoT）_」に変更します。
7. _DNS-over-TLSプロファイ&#x30EB;_&#x304C;_Stric&#x74;_&#x306B;設定されていることを確認してください。
8. 「_DNS-over-TLSサーバーのリスト_」セクションまでスクロールダウンします。「_アドレス_」フィールドに、以下のいずれかのアドレスを入力します:
   - `94.140.14.49` と `94.140.14.59`
9. _TLSポー&#x30C8;_&#x306B;は「853」を入力します。
10. 「_TLSホスト名_」フィールドに、プライベート AdGuard DNS サーバーのアドレスを入力します:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. ページの一番下までスクロールし、「_適用_」をクリックします。

## ルーターの管理画面を使って接続する

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
7. 設定を保存します。
8. IP（チームプランをご利用の場合は専用IP）をリンクします。
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
