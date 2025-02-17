---
title: iCloudプライベートリレーと一緒に使用する方法
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

iCloudプライベートリレーをデバイスで使用している場合、AdGuard DNSダッシュボード（および関連する[AdGuardテストページ](https://adguard.com/test.html)）では、そのデバイスでAdGuard DNSを使用していないとを表示されます。

![デバイスは接続されていません](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

この問題を解決するには、デバイスの設定で AdGuard ウェブサイトがあなたのIPアドレスを見られるように許可する必要があります。

- iPhone・iPadの場合：

    1. `adguard-dns.io` にアクセスします。

    1. 「**ページ設定**」ボタンをタップし、次に「**IP アドレスを表示**」をタップします。

        ![iCloud プライベートリレー 設定 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com` に対してもじ１と２のステップを行います。

- Mac の場合：

    1. `adguard-dns.io` にアクセスします。

    1. Safari で、「**表示**」→「**再読み込みして IP アドレスを表示**」を選択します。

    1. `adguard.com` に対してもじ１と２のステップを行います。

ウェブサイトにあなたの IP アドレスを見れるための一時的許可のオプションが表示されていない場合は、デバイスを最新の iOS、iPadOS、または macOS にアップデートし、再度お試しください。

これで、AdGuard DNS のダッシュボードにデバイスが正しく表示されるはずです：

![デバイスは接続されています](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

※特定のウェブサイトに対してiCloudプライベートリレーをオフにすると、あなたのネットワークプロバイダーもあなたが閲覧しているサイトを見ることができるようになることにご注意ください。
