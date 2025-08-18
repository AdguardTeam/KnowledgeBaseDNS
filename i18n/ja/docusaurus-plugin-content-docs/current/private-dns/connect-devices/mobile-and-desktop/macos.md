---
title: macOS
sidebar_position: 4
---

macOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「macOS」を選択します。
3. デバイスに名前を付けます。
    ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、macOSデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃうことがメリットです。

1. AdGuard DNS に接続したいデバイスに [AdGuard アプリ](https://adguard.com/adguard-mac/overview.html)をインストールします。
2. アプリを開きます。
3. 右上の⚙アイコンを押します。
    ![Protection icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. 「_設定..._」を選択します。
    ![Preferences \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
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
3. 「_設定_」 → 「_本アプリの設定_」 → 「_DNSサーバー_」 → 「_カスタムサーバーを追加_」を開きます。
    ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. 以下のDNSアドレスから一つを選んでコピーして、「DNSサーバーアドレス」欄に貼り付けます。 どちらを選ぶべきかわからない場合は、「DNS-over-HTTPS」を選択します。
    ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. 「_保存して選択する_」をクリックします。
6. 追加したDNSサーバーは、「カスタムDNSサーバー」リストの一番下に現れます。
    ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## 構成プロファイルを使用する

A macOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. これにより、デバイス上でプライベート AdGuard DNS を設定できます。

:::note 【重要】

VPNを使用している場合、構成プロファイルは無視されます。

:::

1. AdGuard DNSに接続したいデバイスで、構成プロファイルをダウンロードします。
2. Appleメニュー→「システム設定」を選択し、「プライバシーとセキュリティ」をクリックし、右側の「プロファイル」をクリックします（スクロールダウンする必要がある場合があります）。
    ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. 「ダウンロード済み」セクションで、プロファイルをダブルクリックします。
    ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. プロファイルの内容を確認し、「_インストール_」をクリックします。
    ![Install \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. 管理者パスワードを入力し、「OK」をクリックします。

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを選ぶことができます。 リンクされた IP または 専用 IP を使用するという次の2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
