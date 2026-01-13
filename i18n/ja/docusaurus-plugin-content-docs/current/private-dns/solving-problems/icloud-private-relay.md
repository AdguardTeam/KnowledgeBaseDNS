---
title: iCloudプライベートリレーと一緒に使用する方法
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![デバイスは接続されていません](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- iPhone・iPadの場合：

    1. `adguard-dns.io` にアクセスします。

    1. 「**ページ設定**」ボタンをタップし、次に「**IP アドレスを表示**」をタップします。

        ![iCloud プライベートリレー 設定 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com` に対してもじ１と２のステップを行います。

- Mac の場合：

    1. `adguard-dns.io` にアクセスします。

    1. Safari で、「**表示**」→「**再読み込みして IP アドレスを表示**」を選択します。

    1. `adguard.com` に対してもじ１と２のステップを行います。

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

これで、AdGuard DNS のダッシュボードにデバイスが正しく表示されるはずです：

![デバイスは接続されています](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
