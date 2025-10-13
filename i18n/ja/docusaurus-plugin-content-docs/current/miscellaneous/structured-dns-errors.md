---
title: "構造化DNSエラー (SDE: Structured DNS Errors)"
sidebar_position: 5
---

AdGuard DNS v2.10 のリリースで、AdGuardは[RFC 8914](https://datatracker.ietf.org/doc/rfc8914/)の更新版である[**構造化DNSエラー** (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/)のサポートを実装した世界初のパブリックDNSリゾルバーとなりました。 この機能のおかげで、DNS サーバーは、一般的なブラウザメッセージに頼るのではなく、ブロックされた Web サイトに関する詳細情報を DNS 応答で直接表示できるようになります。 In this article, we’ll explain what _Structured DNS Errors_ are and how they work.

## 構造化DNSエラー（Structured DNS Errors）とは

広告ドメインやトラッキングドメインへのリクエストがブロックされると、ユーザーにはウェブサイト上に空白スペースが表示されたり、またはDNSフィルタリングが行われたことに全く気づかなかったりします。 しかし、ウェブサイト全体がDNSレベルでブロックされると、ユーザーはそのページにまったくアクセスできなくなります。 When trying to access a blocked website, the user may see a generic “This site can’t be reached” error displayed by the browser.

![“This site can’t be reached” error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Such errors don’t explain what happened and why. 結果として、ユーザーはウェブサイトにアクセスできない理由について混乱し、インターネット接続または DNS リゾルバが壊れていると考えてしまうこともよくあります。

このようなシチュエーションで混乱を減らすよう、DNSサーバーはユーザーを独自の説明付きページにリダイレクトすることができますが、 HTTPS ウェブサイト (多くのウェブサイトはHTTPSを使用) には別の証明書が必要になるという難点が出てきます。

![Certificate error](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

そこで、[構造化DNSエラー（SDE: Structured DNS Errors）](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/)というもっと簡単な解決策があります。 SDE の概念は、[_拡張DNSエラー_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/) をベースに構築されており、後者においてはDNS応答に追加のエラー情報を含める機能が導入されました。 構造化DNSエラー（SDE）のドラフトは、[I-JSON](https://www.rfc-editor.org/rfc/rfc7493)(JSONの制限付きプロファイル)を用いて、ブラウザやクライアントアプリケーションが簡単に解析できる方法で情報をフォーマットすることで、この機能をさらに一歩進化させています。

SDEのデータはI-JSONファイルの形で、DNS応答の`EXTRA-TEXT` フィールドに含まれます。 データには以下の内容が含まれます:

- `j` (justification＝正当化): ブロックの理由
- `c` (contact＝連絡先): ページが誤ブロックされた場合の問い合わせ先
- `o` (organization＝組織): このケースに対してDNSフィルタリングを担当する組織 (任意)
- `s` (suberror＝サブエラー): この場合のDNSフィルタリングに対するサブエラーコード (任意)

このような仕組みにより、DNSサービスとユーザー間の透明性が向上します。

### 構造化DNSエラー（SDE）の実装に必要なもの

AdGuard DNS は構造化DNSエラーのサポートをすでに実装していますが、ブラウザらは現在、SDEデータの解析と表示をネイティブにサポートしていません。 サイトがブロックされたときにブラウザでユーザーに詳細な説明が表示されるようになるには、それぞれのブラウザの開発者がSDEドラフト仕様を採用し、対応させる必要があります。

### SDEを体験できる AdGuard DNS デモ拡張機能

構造化DNSエラー（Structured DNS Errors）がどのように機能するかを紹介するために、AdGuard DNS は、ブラウザが構造化DNSエラーをサポートした場合にどのように機能するかを試せるデモブラウザ拡張機能を開発しました。 この拡張機能を有効にした状態で AdGuard DNS によってブロックされたWebサイトにアクセスしようとすると、ブロックの理由、連絡先の詳細、担当組織など、構造化DNSエラー（Structured DNS Errors）を介して提供される情報記載の説明ページが表示されます。

![Explanation page](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

拡張機能は[Chromeウェブストア](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen)または[GitHub](https://github.com/AdguardTeam/dns-sde-extension/)からインストールできます。

DNSレベルでSDEの動作がどのように見えるかを確認したい場合は、`dig`コマンドを使い、出力で`EDE`を探します。

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
