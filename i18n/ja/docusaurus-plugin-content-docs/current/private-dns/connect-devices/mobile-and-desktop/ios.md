---
title: iOS
sidebar_position: 3
---

iOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「iOS」を選択します。
3. デバイスに名前を付けます。
   ![Connecting device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard DNS アプリを使う

AdGuard DNSアプリは基本的なDNSレベル保護を目的としており、広告、トラッカー、そして悪意あるウェブサイトをブロックします。 AdGuard 広告ブロッカーまたは AdGuard VPN が提供するすべての機能が必要でない方には、このアプリが最適な選択肢かもしれません。

デバイスの設定方法：

1. AdGuard DNS アプリを [App Store からダウンロード](https://agrd.io/ios_dns)します。
2. AdGuard DNS ダッシュボード（[adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/)）にアクセスします。
3. 「ダッシュボード」タブの「_ホーム_」画面で「_デバイスを接続する_」をクリックします。
4. デバイスタイプを選択し名前を付けて、「_次へ_」をクリックします。
5. 「_AdGuardアプリを使って接続_」セクションを開きます。

![Use AdGuard apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps-ja.png)

1. 「AdGuard DNS アプリを使う」セクションで、以下の設定方法のいずれかを選択します：

   - DNSに接続したいデバイス上で操作する場合は「_設定する_」をクリック
   - DNSに接続したいデバイスでQRコードをスキャン
   - 「Setup ID」をコピーし、保護したいデバイス上のアプリに直接貼り付ける:

     ![SetupID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/setup-id-ja.png)

2. 「_続行する_」 → 「_接続する_」をタップします。

![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. これで、お使いのデバイスは正常に AdGuard DNS に接続されました。 保護機能をオンにするには、「_有効する_」ボタンをタップするだけです。

![Enable \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/protect-ja.png)

1. VPNベースのプロトコルを使用する場合、保護を有効にする前にVPNプロファイルの作成を許可する必要があります。 これを行うには、アプリのホームページで「_有効にする_」をクリックし、アプリ内の指示に従ってください。

2. iOSのネイティブDNSを好むユーザーは、iOSの_設定_アプリ → 「_一般_」 → 「_VPNとデバイス管理_」 → 「_DNS_」 でAdGuard DNSを有効にする必要があります。

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、iOSデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃうことがメリットです。

1. AdGuard DNS に接続したいデバイスに [AdGuard アプリ](https://adguard.com/adguard-ios/overview.html)をインストールします。
2. AdGuard アプリを開きます。
3. 下部メニューで盾アイコン（左から2番目）を選択します。
   ![Shield icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. 「DNS通信を保護」がオンになっていることを確認し、タップします。 「_DNSサーバー_」を選択します。
   ![DNS protection \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. 一番下にスクロールダウンして、「＋ カスタムDNSサーバーを追加する」をクリックします。
   ![Add DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. 以下のDNSアドレスから一つを選んでコピーして、「DNSサーバーアドレス」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスをお使いください。
   ![Copy server address \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Paste server address \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. 「_保存して選択する_」をタップします。
   ![Save And Select \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. 追加したばかりのサーバーはリストの一番下に表示されるはずです。
   ![Custom server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard VPN を使用する

VPNサービスの中には、暗号化DNSをサポートしていないものもあります。 しかし、AdGuard VPN は対応しているので、VPNとプライベートDNSの両方が必要な場合、AdGuard VPN がベストチョイスになります。

1. AdGuard DNS に接続したいデバイスへ [AdGuard VPN アプリ](https://adguard-vpn.com/ios/overview.html)をインストールします。
2. AdGuard VPN アプリを開きます。
3. 画面右下の⚙️アイコンをタップします。
   ![Gear icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. 「_一般設定_」を開きます。
   ![General settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. 「_DNSサーバー_」を選択します。
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. 「カスタムDNSサーバーを追加する」までスクロールダウンします。
   ![Add server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. 以下のDNSアドレスから一つを選んでコピーして、「DNSサーバーアドレス」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスを選択してください。
   ![DoH server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. 「保存」をタップします。
   ![Save server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. これで、新しく追加したサーバーが「_カスタムDNSサーバー_」の下に現れるはずです。
   ![Custom servers \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## 構成プロファイルを使用する

An iOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. これにより、デバイス上でプライベート AdGuard DNS を設定できます。

:::note 【重要】

VPNを使用している場合、構成プロファイルは無視されます。

:::

1. 構成プロファイルをダウンロードします。
2. iOSの「設定」を開きます。
3. 「ダウンロード済みプロファイル」をタップします。
   ![Profile Downloaded \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. 「インストール」をタップして、画面上の手順を行います。
   ![Install \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを使うことができます。 リンクされた IP または 専用 IP を使用するという2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
