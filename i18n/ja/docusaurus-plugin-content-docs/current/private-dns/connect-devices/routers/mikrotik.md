---
title: MikroTik
sidebar_position: 6
---

MikroTikルーターは、オープンソースのRouterOSオペレーティングシステムを使用しており、家庭や小規模オフィスのネットワーク向けにルーティング、ワイヤレスネットワーク、ファイアウォールサービスを提供しています。

## DNS-over-HTTPS を設定する

1. お使いのMikroTikルーターにアクセスする:
   - ウェブブラウザを開き、ルーターのIPアドレス（通常は `192.168.88.1`）にアクセスします。
   - （または、Winboxを使用してMikroTikルーターに接続することもできます。）
   - 管理者のユーザー名とパスワードを入力します。
2. ルート証明書をインポートする:
   - 最新の信頼できるルート証明書バンドルをダウンロードしてください: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - _Files_ に移動します。 _Upload_をクリックし、ダウンロードしたcacert.pem証明書バンドルを選択します。
   - System\* → _Certificates_ → _Import_ へ進みます。
   - _File Name_フィールドで、アップロードした証明書ファイルを選択します。
   - _Import_をクリックします。
3. DNS-over-HTTPS を設定する:
   - _IP_ → _DNS_ に移動します。
   - _Servers_ セクションで、以下の AdGuard DNS サーバーを追加します:
     - `94.140.14.49`
     - `94.140.14.59`
   - _Allow Remote Requests_ を _Yes_ に設定します（これは DoH が機能するために重要です）。
   - _Use DoH server_ フィールドに、プライベートAdGuard DNSサーバーのURLを入力します: `https://d.adguard-dns.com/dns-query/*******`
   - 「_OK_」をクリックします。
4. 静的DNSレコードを作成する:
   - 「_DNS Settings_」で「_Static_」をクリックします。
   - _Add New_をクリックします。
   - _Name_を d.adguard-dns.com に設定します。
   - _Type_を A に設定します。
   - _Address_を`94.140.14.49`に設定します。
   - _TTL_を 1d 00:00:00 に設定します。
   - このプロセスを繰り返して、同一のエントリを作成します。ただし、今度は _Address_ を `94.140.14.59` にしてください。
5. DHCP クライアントで Peer DNS を無効にする:
   - _IP_ → _DHCP Client_ へ進みます。
   - インターネット接続に使用されているクライアント（通常はWANインターフェース上）をダブルクリックします。
   - _Use Peer DNS_ のチェックを外します。
   - 「_OK_」をクリックします。
6. お使いのIPをリンクします。
7. テストして動作を確認する:
   - すべての変更内容を適用させるには、MikroTikルーターを再起動する必要がある場合があります。
   - ブラウザの DNS キャッシュをクリアします。 [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) のようなツールを使用して、DNSリクエストがAdGuard経由でルーティングされているかどうかを確認できます。

## ルーターの管理画面を使って接続する

MikrotikルーターがDNS-over-HTTPSやDNS-over-TLS設定をサポートしていない場合は、以下のガイドをご利用ください:

1. ルーターの管理画面を開きます。 （管理画面は、`192.168.1.1` または `192.168.0.1` でアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. 「_Webfig_」→「_IP_」→「_DNS_」を開きます。
4. _Servers_ を選択し、以下のDNSサーバーアドレスのいずれかを入力します:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
5. 設定を保存します。
6. IP（チームプランをご利用の場合は専用IP）をリンクします。

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
