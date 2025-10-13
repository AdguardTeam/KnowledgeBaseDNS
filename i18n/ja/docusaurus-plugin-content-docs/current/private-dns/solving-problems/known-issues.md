---
title: 既知の問題
sidebar_position: 1
---

AdGuard DNS を設定した後、デバイスが AdGuard DNS に接続されていないというメッセージが表示されたり、そのデバイスからのリクエストが「クエリログ」に表示されないなど、AdGuard DNS が正しく機能しないことに気づくかもしれません。 これは、ブラウザやオペレーティングシステムの特定の隠れた設定が原因で発生することがあります。 よくある問題とその解決策を見てみましょう。

:::tip

AdGuard DNS のステータス・稼働状況は[こちらの専用テストページ](https://adguard.com/test.html)で確認できます。

:::

## ChromeのセキュアDNS設定

Chromeを使用していて、AdGuard DNSダッシュボードにリクエストが表示されない場合は、Chromeが独自のDNSサーバーを使用している可能性があります。 そのサーバーを無効にする方法は以下のとおりです:

1. Chromeの設定を開きます。
1. 「*プライバシーとセキュリティ*」に移動します。
1. 「*セキュリティ*」を選択します。
1. 「*セキュア DNS を使用する*」までスクロールします。
1. この機能をオフにします。

![ChromeのセキュアDNS設定](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloudプライベートリレー (Safari、macOS、iOS)

デバイス設定で「iCloud プライベートリレー」を有効にすると、Safari は Apple の DNS アドレスを使用するため、AdGuard DNS 設定が上書きされます。

iPhoneでiCloudプライベートリレーを無効にする方法は以下のとおりです：

1. 「*設定*」アプリを開き、上部の自分の名前をタップします。
1. 「*iCloud*」→「*プライベートリレー*」を選択します。
1. 「プライベートリレー」をオフにします。

![iOSプライベートリレー](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Macの場合：

1. 「*システム設定*」を開き、自分の名前または*Apple ID*をクリックします。
1. 「*iCloud*」→「*プライベートリレー*」を選択します。
1. 「プライベートリレー」をオフにします。
1. 「*完了*」をクリックします。

![macOSプライベートリレー](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## 「高度なトラッキングとフィンガープリント保護」 (iOS 17以降のSafari)

iOS 17へのアップデート後、Safariの設定で「高度なトラッキングとフィンガープリント保護」で有効になっている可能性があり、iCloud プライベートリレーがAdGuard DNS設定をバイパスするのと同様の効果が出てしまうことがあります。

「高度なトラッキングとフィンガープリント保護」を無効にする方法は以下のとおりです:

1. デバイスで「*設定*」を開き、「*Safari*」までスクロールします。
1. 「*詳細*」をタップします。
1. 「*高度なトラッキングとフィンガープリント保護*」をオフにします。

![iOSの高度なトラッキングとフィンガープリント保護 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
