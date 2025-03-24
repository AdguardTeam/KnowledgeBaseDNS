---
title: iOS
sidebar_position: 3
---

iOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「iOS」を選択します。
3. デバイスに名前を付けます。
    ![Connecting device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

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

iOSデバイスプロファイルは、Appleによって「構成プロファイル」とも呼ばれ、あなたが手動でiOSデバイスにインストールしたり、MDMソリューションを使用してデプロイできる証明書に署名されたXMLファイルです。 これにより、デバイス上でプライベート AdGuard DNS を設定できます。

:::note 【重要】

VPNを使用している場合、構成プロファイルは無視されます。

:::

1. [プロファイルをダウンロード](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml)します。
2. iOSの「設定」を開きます。
3. 「ダウンロード済みプロファイル」をタップします。
    ![Profile Downloaded \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. 「インストール」をタップして、画面上の手順を行います。
    ![Install \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを使うことができます。 リンクされた IP または 専用 IP を使用するという2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
