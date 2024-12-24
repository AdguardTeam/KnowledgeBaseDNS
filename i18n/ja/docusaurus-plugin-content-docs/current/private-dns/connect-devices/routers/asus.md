---
title: ASUS
sidebar_position: 3
---

## DNS-over-TLS を構成して接続する

これは、ASUSルーターでプライベート AdGuard DNS を設定するための一般的な手順です。

※この手順に含まれている構成情報は、特定のルーターモデルから取得したものであるため、個々のデバイスのインターフェースとは多少異なる場合があります。

必要に応じて、ASUS で DNS-over-TLS を設定し、お使いのルーターのバージョンに適した [ASUS Merlin ファームウェア](https://www.asuswrt-merlin.net/download) をコンピューターにインストールしてください。

1. ASUSルーターの管理画面にログインします。 （管理画面は、[http://router.asus.com](http://router.asus.com/)、[http://192.168.1.1](http://192.168.1.1/)、[http://192.168.0.1](http://192.168.0.1/)、または[http://192.168.2.1](http://192.168.2.1/)からアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「_詳細設定_」サイドバーで、「WAN」セクションに移動します。
4. _WAN DNS 設定セクション_で、「_DNS サーバーに自動的に接続_」を「_いいえ_」に設定します。
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. 「_DNSプライバシープロトコル_」を「_DNS-over-TLS（DoT）_」に変更します。
7. _DNS-over-TLSプロファイル_が_Strict_に設定されていることを確認してください。
8. 「_DNS-over-TLSサーバーのリスト_」セクションまでスクロールダウンします。 「_アドレス_」フィールドに、以下のいずれかのアドレスを入力します:
   - `94.140.14.49` と `94.140.14.59`
9. _TLSポート_には「853」を入力します。
10. 「_TLSホスト名_」フィールドに、プライベート AdGuard DNS サーバーのアドレスを入力します:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. ページの一番下までスクロールし、「_適用_」をクリックします。

## ルーターの管理画面を使って接続する

1. ルーターの管理画面を開きます。 （管理画面は、`192.168.1.1` または `192.168.0.1` でアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「_詳細設定_」または「_詳細_」を開きます。
4. 「_WAN_」または「_インターネット_」を選択します。
5. 「_DNS設定_」または「_DNS_」を開きます。
6. Choose _Manual Setting_. 「_これらの DNS サーバーを使用する_」または 「_DNS サーバーを手動で指定する_」を選択し、以下の DNS サーバーアドレスを入力します:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
7. 設定を保存します。
8. IP（チームプランをご利用の場合は専用IP）をリンクします。
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
