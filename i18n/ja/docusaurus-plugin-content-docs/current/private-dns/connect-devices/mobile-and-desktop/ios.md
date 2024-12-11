---
title: iOS
sidebar_position: 3
---

iOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「iOS」を選択します。
3. デバイスに名前を付けます。
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、iOSデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃうことがメリットです。

1. AdGuard DNS に接続したいデバイスに [AdGuard アプリ](https://adguard.com/adguard-ios/overview.html)をインストールします。
2. AdGuard アプリを開きます。
3. 下部メニューで盾アイコン（左から2番目）を選択します。
   ![Shield icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. 「DNS通信を保護」がオンになっていることを確認し、タップします。 「_DNSサーバー_」を選択します。
   ![DNS protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. 一番下にスクロールダウンして、「＋ カスタムDNSサーバーを追加する」をクリックします。
   ![Add DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. 以下のDNSアドレスから一つを選んでコピーして、「DNSサーバーアドレス」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスをお使いください。
   ![Copy server address \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Paste server address \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tap _Save And Select_.
   ![Save And Select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Your freshly created server should appear at the bottom of the list.
   ![Custom server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/ios/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the AdGuard VPN app.
3. Tap the gear icon in the bottom right corner of the screen.
   ![Gear icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Open _General_.
   ![General settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Select _DNS server_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Scroll down to _Add custom DNS server_.
   ![Add server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ text field. If you are not sure which one to prefer, select _DNS-over-HTTPS_.
   ![DoH server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tap _Save_.
   ![Save server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Your freshly created server should appear under _Custom DNS servers_.
   ![Custom servers \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## Use a configuration profile

An iOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

:::note 【重要】

If you are using a VPN, the configuration profile will be ignored.

:::

1. [Download](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml) profile.
2. Open settings.
3. Tap _Profile Downloaded_.
   ![Profile Downloaded \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tap _Install_ and follow the onscreen instructions.
   ![Install \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configure plain DNS

If you prefer not to use extra software to configure DNS, you can opt for unencrypted DNS. There are two options: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
