---
title: 統計
sidebar_position: 2
---

## 全般的な統計

「統計」タブには、プライベート AdGuard DNSに接続されているデバイスによって行われたDNSリクエストすべての総合統計が表示されます。 リクエストの総数と場所、ブロックされたリクエストの数、リクエスト先の企業リスト、リクエストの種類、最もリクエストの多いドメインが表示されます。

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## カテゴリ

### リクエストタイプ

- **広告**: ユーザーデータを収集・共有し、ユーザーの行動を分析し、広告をターゲティングする広告およびその他の広告関連リクエスト
- **トラッカー**: ユーザーの活動を追跡することを目的としる、ウェブサイトやサードパーティからのリクエスト
- **ソーシャルメディア**: SNSウェブサイトへのリクエスト
- **CDN**: エンドユーザーへのコンテンツ配信を高速化するプロキシサーバーの世界的なネットワークであるコンテンツ・デリバリー・ネットワーク（CDN）への接続リクエスト
- **その他**

![Request types \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### リクエストが一番多い企業

ここでは、最も多くのリクエストを送信している企業が表示されます。

![Top companies \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### リクエストが一番多い国

ここでは、どの国へ最も多くのリクエストが送信されているのかが表示されます。

国名に加えて、リストにはさらに2つの一般カテゴリが含まれます：

- **該当なし**: 応答に IP アドレスが含まれていません
- **送信先不明**: IPアドレスから国を特定できません

![Top destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### リクエストが一番多いドメイン

ここでは、どのドメインへ最も多くのリクエストが送信されているのかが表示されます。

![Top domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### 暗号化されたリクエスト

リクエストの総数と、暗号化されたトラフィックと暗号化されていないトラフィックの割合が表示されます。

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### 上位クライアント

ここでは、クライアントへのリクエスト数が表示されます。 クライアントのIPアドレスを表示するには、「サーバー設定」で「<b>IPアドレスをログ記録する</b>」を有効にしてください。 [サーバー設定の詳細はこちら](/private-dns/server-and-settings/advanced.md)をご覧ください。
