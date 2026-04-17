---
title: セキュリティ機能
sidebar_position: 4
---

The AdGuard DNS security settings are a set of configurations designed to protect the user’s personal information.

ここでは、攻撃者から自分自身を守るために使用したい方法を選択できます。 これにより、フィッシングや偽ウェブサイトへのアクセスが防止され、個人情報・機密データの漏洩のリスクから保護されます。

### フィッシング、詐欺、悪質ドメインをブロック

現在までに1,500万以上のサイトを分類し、フィッシングやマルウェアで知られる150万のウェブサイトのデータベースを構築してきました。 このデータベースを使用して、AdGuardはあなたが訪問するウェブサイトをチェックし、オンライン脅威から守ります。

### 新しく登録されたドメインをブロックする

詐欺師は、最近登録したドメインをフィッシングや詐欺に利用することが多い。 このため、ドメインの寿命を検出し、最近作成された場合はドメインをブロックするという特別なフィルタを開発しました。
これにより誤検出が発生することもありますが、統計データによればほとんどの場合、ユーザーの機密データ漏えい防止となります。

### ブロックリストを使用して悪意のあるドメインをブロック

AdGuard DNSは、サードパーティのブロックフィルタの追加に対応しています。
`security`としてマークされたフィルタを有効化して、保護層を増やせます。

To learn more about Blocklists, see [the separate article](/private-dns/setting-up-filtering/blocklists.md).

## Protection against typosquatting domains

AdGuard DNS detects and blocks suspicious look-alike domains at the DNS level by analyzing patterns such as common typos, swapped characters, and missing or extra letters. It blocks the request before a connection is even established.

Because this feature relies on similarity detection, legitimate domains that resemble popular websites may occasionally be flagged. If that happens, you can add the domain to the allowlist by going to [_Servers_](https://adguard-dns.io/dashboard/servers) ⭢ _Server settings_ ⭢ _User rules_ ⭢ _Add new rule_.
