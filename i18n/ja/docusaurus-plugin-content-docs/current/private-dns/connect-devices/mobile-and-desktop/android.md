---
title: Android
sidebar_position: 2
---

Android デバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」というドロップダウンメニューで「Android」を選択します。
3. デバイスに名前を付けます。
    ![Connecting device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、Androidデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃいます。

1. AdGuard DNS に接続したいデバイスに[AdGuardアプリ](https://adguard.com/adguard-android/overview.html)をインストールします。
2. アプリを開きます。
3. 画面下部メニューバーの左から2番目にある盾のアイコンをタップします。
    ![Shield icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. 「_DNS通信を保護_」をタップします。
    ![DNS protection \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. 「_DNSサーバー_」を選択します。
    ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. 「_カスタムサーバー_」までスクロールダウンし、「＋ DNSサーバーを追加する」をタップします。
    ![Add DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. 以下からDNSアドレスを一つ選んでコピーして、アプリ内の「サーバーアドレス」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスを選択してください。
    ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
    ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. 「_追加_」をタップします。
9. 追加したDNSサーバーは、「カスタムサーバー」リストの一番下に現れます。 サーバーを選択するには、その名前やその隣にあるラジオボタンをタップします。
    ![Select DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. 「_保存して選択する_」をタップします。
    ![Save and select \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard VPN を使用する

VPNサービスの中には、暗号化DNSをサポートしていないものもあります。 しかし、AdGuard VPN は対応しているので、VPNとプライベートDNSの両方が必要な場合、AdGuard VPN がベストチョイスになります。

1. AdGuard DNS に接続したいデバイスに [AdGuard VPN アプリ](https://adguard-vpn.com/android/overview.html)をインストールします。
2. アプリを開きます。
3. 画面下部のメニューバーで、設定⚙アイコンをタップします。
    ![Gear icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. 「一般設定」を開きます。
    ![App settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. 「_DNSサーバー_」を選択します。
    ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. 下にスクロールダウンして、「＋ カスタムDNSサーバーを追加する」をクリックします。
    ![Add a DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. 以下からDNSアドレスを一つ選んでコピーして、アプリ内の「サーバーアドレス」欄に貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスを選択してください。
    ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
    ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. 「_保存して選択する_」をタップします。
    ![Add a DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. 追加したDNSサーバーは、「カスタムDNSサーバー」リストの一番下に現れます。

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## プライベート DNS を手動で設定する

デバイスの設定でDNSサーバーを手動で設定することもできます。 ※Android デバイスは DNS-over-TLS プロトコルのみをサポートしていることに注意してください。

1. 端末の「設定」→「ネットワークとインターネット」（OSバージョン・端末によっては、「Wi-Fiとインターネット」や「接続」など）を開きます。
    ![Settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. （環境によっては「詳細設定」を押してから）「_プライベート DNS_」をタップします。
    ![Private DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. 「プライベート DNS プロバイダのホスト名」というオプションを選択し、あなたのパーソナルDNSサーバーのアドレスを入力します: `{Your_Device_ID}.d.adguard-dns.com`
4. 「保存」をタップします。
    ![プライベート DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
    完了です！ これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを設定することができます。 リンクされた IP または 専用 IP を使用するという次の2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
