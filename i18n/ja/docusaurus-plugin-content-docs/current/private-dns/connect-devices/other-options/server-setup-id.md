---
title: サーバーSetup ID
sidebar_position: 6
---

:::info

This article covers a feature available in the AdGuard DNS mobile app. To try it yourself, download the AdGuard DNS app for [Android](https://agrd.io/android_dns) or [iOS](https://agrd.io/ios_dns).

:::

## 「サーバーSetup ID」とは何ですか？

特定のサーバーにデバイスを接続したい場合で、ダッシュボードで各デバイスを手動で作成したくない場合は、「**サーバーSetup ID**」を使用することができます。 これを行うには、 AdGuard DNS アプリで「**サーバーSetup ID**」を使用してデバイス接続してください。 そうしますと、“デバイス”は接続時にダッシュボードの方に自動的に作成されます。

## 「サーバーSetup ID」を使用してデバイスを接続する方法

:::note

If you’re configuring AdGuard on multiple managed devices, consider using managed app configuration to automatically provide the server setup ID to each app. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. [「_ダッシュボード_」 → 「_サーバー_」](https://adguard-dns.io/dashboard/servers)に移動してください。
2. 必要なサーバーを選択します。
3. 下にスクロールして「_Setup ID_」をクリックします。
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. **Setup ID** をコピーします。
   ![Server setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. AdGuard DNS アプリを開き、**Setup ID** を貼り付けます。
   ![セットアップ ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/setup-id-ja.png)
6. デバイス名を指定します。
7. 「**接続する**」をタップします。
   ![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

これで完了です。 デバイスはDNSサーバー接続され、ダッシュボードにもデバイスが自動的に追加されます。

## 「サーバーSetup ID」をリセットする方法

特定のサーバーSetup IDを使用しているすべてのデバイスの接続を切断したい場合は、IDをリセットすることができます。 その方法は以下のとおりです:

1. [「_ダッシュボード_」 → 「_サーバー_」](https://adguard-dns.io/dashboard/servers)に移動して、対象のサーバーを選択します。
2. 下にスクロールして「_Setup ID_」をクリックします。
3. 「_Setup IDをリセットする_」をクリックします。

リセット後、サーバーSetup IDは変更され、旧IDを使用していたデバイスはすべてサーバーから切断されます。
