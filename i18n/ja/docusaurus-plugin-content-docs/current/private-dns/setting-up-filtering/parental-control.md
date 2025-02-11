---
title: ペアレンタルコントロール
sidebar_position: 4
---

## ペアレンタルコントロールとは

ペアレンタルコントロールは、「センシティブ」なコンテンツを含むウェブサイトへのアクセスを制限・カスタマイズする柔軟性を与える機能です。  この機能を使用すると、子供が成人向けサイトへアクセスできないように制限したり、検索クエリをカスタマイズしたり、人気のサービスの使用をブロックしたりできます。

## 設定方法

ペアレンタルコントロール機能を含め、サーバー上で機能をすべて柔軟に設定できます。 [該当する記事](private-dns/server-and-settings/server-and-settings.md)では、AdGuard DNS における「サーバー」が何であるか、異なる設定セットを持つ異なるサーバーを作成する方法を確認するができます。

次に、選択したサーバーの設定に移動し、必要な構成を有効にします。

### アダルト系サイトをブロックする

不適切なコンテンツや成人向けコンテンツのあるウェブサイトをブロックします。

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### セーフサーチ

検索エンジン（Google、Bing、DuckDuckGo、Yandex、Pixabay、Brave、Ecosia）で、不適切な検索結果を削除します。

![Safe search \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/porn.png)

### YouTube制限付きモードをオンにする

動画の下でコメントを表示・投稿できないようにし、YouTubeの18禁コンテンツに関わるオプションを無効にします。

![Restricted mode \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/restricted.png)

### ブロックするサービスやWebサイト

AdGuard DNS は、人気のあるサービスへのアクセスをワンクリックでブロックできます。 たとえば、AdGuard DNSに接続されているデバイスで、InstagramやYouTubeへのアクセスを防ぎたい場合に、この設定を使えます。

![Blocked services \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### オフタイムを設定する

指定された時間間隔で選択した日にペアレンタルコントロールを有効にします。いわゆる「スクリーンタイム」設定のようなものです。 たとえば、子供にYouTube動画の閲覧を平日の21:00までに許可しているとします。 ところが、週末にはこの制限はないとします。 このような場合に、ニーズに合わせてスケジュールをカスタマイズし、希望の時間に選択したサイトへのアクセスをブロックするように設定できます。

![Schedule \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/schedule.png)
