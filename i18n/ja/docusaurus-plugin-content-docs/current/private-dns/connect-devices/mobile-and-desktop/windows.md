---
title: Windows
sidebar_position: 5
---

iOSデバイスを AdGuard DNS に接続するには、まずはデバイスを「ダッシュボード」に追加します:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. 「_デバイスタイプ_」のドロップダウンメニューから Windows を選択してください。
3. デバイスに名前を付けます。
    ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## AdGuard 広告ブロッカーアプリを使用する（有料オプション）

AdGuardアプリでは、暗号化されたDNSを使用できるため、Androidデバイスで AdGuard DNS を設定するのに最適です。 様々な暗号化プロトコルから選択することができます。 DNSフィルタリングに加えて、システム全体で機能する優れた広告ブロッカーも手に入っちゃうことがメリットです。

1. AdGuard DNS に接続したいデバイスに [AdGuard アプリ](https://adguard.com/adguard-windows/overview.html)をインストールします。
2. アプリを開きます。
3. アプリのホーム画面の上部にある「_設定_」をクリックします。
    ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. 左側のメニューから「_DNS通信を保護_」タブを選択します。
    ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. 現在選択されている DNS サーバーをクリックします。
    ![DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. 下にスクロールして、「カスタムDNSサーバーを追加する」をクリックします。
    ![Add a custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. DNSアップストリームフィールドに、以下のアドレスのいずれかを貼り付けます。 どれを使用すべきかわからない場合は、「_DNS-over-HTTPS_」アドレスをお使いください。
    ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
    ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. 「_保存して選択する_」をクリックします。
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. 追加したDNSサーバーは、「カスタムDNSサーバー」リストの一番下に現れます。
    ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard VPN を使用する

VPNサービスの中には、暗号化DNSをサポートしていないものもあります。 しかし、AdGuard VPN は対応しているので、VPNとプライベートDNSの両方が必要な場合、AdGuard VPN がベストチョイスになります。

1. AdGuard VPN をインストールします。
2. アプリを開いて「設定」をクリックします。
3. 「本アプリの設定」を開きます。
    ![App settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. 下にスクロールして、「DNSサーバー」をクリックします。
    ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. 「＋ カスタムDNSサーバーを追加する」をクリックします。
    ![Add custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. 「サーバーアドレス」欄に、次のいずれかのアドレスを貼り付けます: どちらを選ぶべきかわからない場合は、「DNS-over-HTTPS」を選択します。
    ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
    ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. 「_保存して選択する_」をクリックします。
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

完了です! これで、お使いのデバイスは正常に AdGuard DNS に接続されました。

## AdGuard DNS Client を使用する

AdGuard DNS Client は、暗号化された DNS プロトコルを使用して AdGuard DNS への接続を可能にする多目的なクロスプラットフォームコンソールツールです。

詳細については、[こちらの別の記事](/dns-client/overview/)をご覧ください。

## プレーンDNSを構成する

DNS設定に余分なソフトウェアを使いたくない場合は、暗号化されていないDNSを選ぶことができます。 リンクされた IP または 専用 IP を使用するという次の2つの選択肢があります:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
