---
title: macOS
sidebar_position: 4
---

macOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「macOS」を選択します。
3. デバイスに名前を付けます。
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、macOSデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃうことがメリットです。

1. AdGuard DNS に接続したいデバイスに [AdGuard アプリ](https://adguard.com/adguard-mac/overview.html)をインストールします。
2. アプリを開きます。
3. 右上の⚙アイコンを押します。
   ![Protection icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. 「_設定..._」を選択します。
   ![Preferences \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. 上段アイコンで「DNS」タブをクリックします。
   ![DNS tab \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. 一番上のボックスにチェックを入れることで、「DNS通信を保護」を有効にします。
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. 左下の「＋」をクリックします。
   ![Click + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. 以下のDNSアドレスから一つを選んでコピーして、「_DNSサーバー_」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスを選択してください。
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. 「_保存して選択する_」をクリックします。
   ![Save and Choose \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. これで、作成したばかりのサーバーはリストの一番下に表示されるはずです。
    ![Providers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard VPN を使用する

VPNサービスの中には、暗号化DNSをサポートしていないものもあります。 しかし、AdGuard VPN は対応しているので、VPNとプライベートDNSの両方が必要な場合、AdGuard VPN がベストチョイスになります。

1. AdGuard DNS に接続したいデバイスに [AdGuard VPN アプリ](https://adguard-vpn.com/mac/overview.html)をインストールします。
2. AdGuard VPN アプリを開きます。
3. Open _Settings_ → _App settings_ → _DNS servers_ → _Add Custom Server_.
   ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. 以下のDNSアドレスから一つを選んでコピーして、「DNSサーバーアドレス」欄に貼り付けます。 If you are not sure which one to prefer, select DNS-over-HTTPS.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Click _Save and select_.
6. 追加したDNSサーバーは、「カスタムDNSサーバー」リストの一番下に現れます。
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## 構成プロファイルを使用する

A macOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. これにより、デバイス上でプライベート AdGuard DNS を設定できます。

:::note 【重要】

VPNを使用している場合、構成プロファイルは無視されます。

:::

1. On the device that you want to connect to AdGuard DNS, download the configuration profile.
2. Choose Apple menu → _System Settings_, click _Privacy & Security_ in the sidebar, then click _Profiles_ on the right (you may need to scroll down).
   ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. In the _Downloaded_ section, double-click the profile.
   ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Review the profile contents and click _Install_.
   ![Install \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Enter the admin password and click _OK_.

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを選ぶことができます。 リンクされた IP または 専用 IP を使用するという次の2つの選択肢があります:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
