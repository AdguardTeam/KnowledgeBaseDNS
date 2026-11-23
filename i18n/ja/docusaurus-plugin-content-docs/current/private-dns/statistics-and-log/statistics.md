---
title: 統計
sidebar_position: 2
---

## 全般的な統計

「統計」タブには、プライベート AdGuard DNSに接続されているデバイスによって行われたDNSリクエストすべての総合統計が表示されます。 It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

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

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Top destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### リクエストが一番多いドメイン

ここでは、どのドメインへ最も多くのリクエストが送信されているのかが表示されます。

![Top domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Top blocked categories

Displays the top 5 most frequently blocked content categories. The data can be filtered by time range, server, and device. Domains fall into more than 20 categories, including _Adult content_, _Gambling_, _Banking_, _Games_, and _Social networks_.

![Top blocked categories \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blocklists

Shows the top 5 blocklists by the number of blocked requests and their share of all blocks. The data can be filtered by time range, server, and device. Each blocked request is credited only to the blocklist whose rule was triggered, so domains that appear in multiple lists are never double-counted.

Custom blocklists appear under the names you gave them. If a blocklist isn’t in the top 5, it blocked fewer requests than the ones shown.

The tile works at the list level: it doesn’t show which rule was triggered, and it doesn’t include statistics for user rules or allowlists.

![Top blocklists \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
