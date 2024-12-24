---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

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
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - 「_OK_」をクリックします。
4. 静的DNSレコードを作成する:
   - 「_DNS Settings_」で「_Static_」をクリックします。
   - _Add New_をクリックします。
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - _Address_を`94.140.14.49`に設定します。
   - Set _TTL_ to `1d 00:00:00`
   - このプロセスを繰り返して、同一のエントリを作成します。ただし、今度は _Address_ を `94.140.14.59` にしてください。
5. DHCP クライアントで Peer DNS を無効にする:
   - _IP_ → _DHCP Client_ へ進みます。
   - インターネット接続に使用されているクライアント（通常はWANインターフェース上）をダブルクリックします。
   - _Use Peer DNS_ のチェックを外します。
   - 「_OK_」をクリックします。
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. お使いのMikroTikルーターにアクセスする:
   - ウェブブラウザを開き、ルーターのIPアドレス（通常は `192.168.88.1`）にアクセスします。
   - （または、Winboxを使用してMikroTikルーターに接続することもできます。）
   - 管理者のユーザー名とパスワードを入力します。
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4: `94.140.14.49` と `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. DHCP クライアントで Peer DNS を無効にする:
   - Go to _IP_ → _DHCP Client_
   - インターネット接続に使用されているクライアント（通常はWANインターフェース上）をダブルクリックします。
   - Uncheck _Use Peer DNS_
   - Click _OK_
