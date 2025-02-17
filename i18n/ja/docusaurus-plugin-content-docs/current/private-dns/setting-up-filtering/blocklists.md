---
title: ブロックリスト
sidebar_position: 1
---

## ブロックリストとは

ブロックリストは、広告やプライバシーを侵害する可能性のあるコンテンツをフィルタリングするために、AdGuard DNS が使用するテキスト形式ルールのセットです。 一般的にフィルタは、同じような焦点を持つルールで構成されます。 たとえば、ウェブサイトの言語に対するルール（例：ドイツ語やロシア語フィルタなど）や、フィッシングサイトから保護するルール（フィッシングURLブロックリストなど）があります。 フィルタというグループになっているこれらのルールを、グループとして簡単に有効または無効にできます。

## ブロックリストはどう役に立つのか

ブロックリストは、フィルタリングルールを柔軟にカスタマイズできるように設計されています。 例えば、特定の言語地域の広告ドメインをブロックしたい場合や、トラッキングや広告ドメインを排除したい場合などがあったりします。 ぜひお好みのブロックリストを選択し、フィルタリングをニーズに応じてカスタマイズしてください。

## AdGuard DNS でブロックリストを有効化する方法

【ブロックリストを有効化する方法】

1. 「ダッシュボード」を開きます。
2. 「サーバー」セクションに移動します。
3. 必要なサーバーを選択します。
4. 「ブロックリスト」をクリックします。

## ブロックリストの種類

### 一般

広告やトラッキングドメインをブロックするリストを含むフィルタグループです。

![General blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### 地域特化

特定の言語のドメインをブロックするための地域リストで構成されたフィルタグループです。

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### セキュリティ

詐欺サイトやフィッシングドメインをブロックするためのルールを含むフィルタグループです。

![Security blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### その他

サードパーティの開発者からのさまざまなブロックルールを持つブロックリストです。

![Other blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## フィルタを追加する方法

AdGuard DNS フィルタのリストを拡張したい場合は、[GitHubのHostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry)の該当セクションで追加のリクエストを送信することができます。

リクエストを送信する方法：

1. 上記のGitHubリンクにアクセスします（GitHubへの登録が必要な場合があります）。
2. 「_New issue_」をクリックします。
3. 「Blocklist request」をクリックし、フォームに記入します。
4. フォームに記入したら、「_Submit new issue_」をクリックします。

ご提案のフィルタのブロックルールが既存のリストと重複しない場合、リポジトリに追加されます。

## ユーザールール

独自のブロックルールを作成することもできます。
詳細は、[こちらのユーザールールに関する記事](/private-dns/setting-up-filtering/user-rules.md)でご確認ください。
