---
title: Linux
sidebar_position: 6
---

Linuxデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「Linux」を選択します。
3. デバイスに名前を付けます。
    ![デバイスの接続 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## AdGuard DNS Client を使用する

AdGuard DNS Client は、暗号化されたDNSプロトコルを使用してAdGuard DNSにアクセスできるクロスプラットフォームのコンソールユーティリティです。

詳しくは、[関連記事](/dns-client/overview/)をご覧ください。

## AdGuard VPN for Linux（AdGuard VPN CLI）を使用する

AdGuard VPN for Linux (コマンドラインインターフェイス版AdGuard VPN) を使用してプライベート AdGuard DNS を設定することができます。 AdGuard VPN CLI を使用開始するには、Terminal を使用する必要があります。

1. [こちらの手順](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/)に従って、AdGuard VPN CLI をインストールします。
2. [設定](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/)に移動します。
3. 特定の DNS サーバーを設定するには、 `adguardvpn-cli config set-dns <server_address>` というコマンドを使用します。（ここで、`<server_address>` はあなたのプライベートサーバーのアドレスです。）
4. adguardvpn-cli config set-system-dns on\` と入力して DNS 設定を有効にします。

## Ubuntu で手動で設定する（リンクされたIPまたは専用IPが必要）

1. System（システム）→Settings（設定）→Network（ネットワーク）をクリックします。
2. 「Wireless」（無線・ワイヤレス）タブを選択し、現在接続しているWi-Fiネットワークを選択します。
3. 「IPv4」に移動します。
4. 「_自動 (DHCP)_」を「_手動_」に設定します。
5. そこにあるDNSアドレスを以下のものに変更します:
    - `94.140.14.49`
    - `94.140.14.59`
6. 「Apply」（適用）をクリックします。
7. 「IPv6」に移動します。
8. 「_自動_」を「_手動_」に設定します。
9. そこにあるDNSアドレスを以下のものに変更します:
    - `2a10:50c0:0:0:0:0:ded:ff`
    - `2a10:50c0:0:0:0:0:dad:ff`
10. 「Apply」（適用）をクリックします。
11. IPアドレス（チームプランをご利用の場合は専用IP）をリンクします。
    - [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)

## Debian で手動で設定する（リンクされたIPまたは専用IPが必要）

1. Terminalを開きます。
2. コマンドラインで、`su`と入力します。
3. お使いの `admin` パスワードを入力します。
4. コマンドラインで次のように入力します: `nano /etc/resolv.conf`
5. そこにあるDNSアドレスを以下のものに変更します:
    - IPv4: `94.140.14.49` と `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
6. Ctrl + O キーを押して、ドキュメントを保存します。
7. Enterキーを押します。
8. ドキュメントを保存するには Ctrl + X を押します。
9. コマンドラインで次のように入力します: `/etc/init.d/networking restart`
10. Enterキーを押します。
11. Terminalを閉じます。
12. IPアドレス（チームプランをご利用の場合は専用IP）をリンクします。
    - [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)

## dnsmasq を使用する

1. 以下のコマンドを使用して dnsmasq をインストールします:

    `sudo apt updatesudo`

    `apt install`

    `dnsmasqsudo nano /etc/dnsmasq.conf`

2. dnsmasq.confでこのコマンドを使用します:

    `no-resolv`

    `bogus-priv`

    `strict-order`

    `server=94.140.14.49`

    `server=94.140.14.59`

    `port=5353`

    `add-cpe-id={Your_Device_ID}`

3. dnsmasq サービスを再起動します:

    `sudo service dnsmasq restart`

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

:::note 【重要】

※AdGuard DNS に接続されていないという通知が表示された場合、 dnsmasq の実行に使用されているポートが他のサービスによって占有されている可能性が高いです。 問題を解決するには、[こちらの手順](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse)をご利用しください。

:::

## EDNS（Extended DNS）を使用する

EDNSはDNSプロトコルを拡張し、より大きなUDPパケットで追加データを伝送できるようにしました。 これにより、AdGuard DNSでは、追加パラメータを使用してプレーンDNSでDeviceIDを渡すことができるようになっています。

DeviceIDは8桁の16進数の識別子（例: `1a2b3c4d`）で、DNSリクエストを特定のデバイスに結びつけるのに役立ちます。 暗号化DNSの場合、このIDはドメインの一部となります（例：`1a2b3c4d.d.adguard-dns.com`）。 暗号化されていないDNSでは、この識別子を転送するためにEDNSが必要です。

AdGuard DNS はEDNSを使用して、オプション番号`65074`を検索してDeviceIDを取得します。 そのようなオプションが存在する場合は、そこから DeviceID を読み取ります。 これには、ターミナルで `dig` コマンドを使うことができます:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

ここで、`65074` はオプション ID であり、`3031323334353637` はその 16 進形式の値です (DeviceID: `01234567`)。

完了です! DeviceIDを表示する必要があります。

:::note

`dig` コマンドは単なる例であり、このアクションを実行するには、EDNS オプションを追加できるものであれば、任意のDNSソフトウェアを使用できます。

:::

## プレーンDNSを使う

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを選ぶことができます。 リンクされた IP または 専用 IP を使用するという次の2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
