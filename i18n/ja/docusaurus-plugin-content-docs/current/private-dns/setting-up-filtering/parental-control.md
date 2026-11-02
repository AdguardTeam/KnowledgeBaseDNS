---
title: ペアレンタルコントロール
sidebar_position: 5
---

ペアレンタルコントロールは、成人向けコンテンツや不適切なコンテンツを含むウェブサイトへのアクセスを制限・カスタマイズする柔軟性を与える機能です。この機能を使用すると、子供が成人向けサイトへアクセスできないように制限したり、検索クエリをカスタマイズしたり、人気のサービスの使用をブロックしたりできます。

## 設定方法

機能は、ペアレンタルコントロール機能を含め、サーバー上ですべて柔軟に設定できます。（[こちらの記事](private-dns/server-and-settings/server-and-settings.md)では、AdGuard DNS における「サーバー」が何であるか、異なる設定セットを持つ異なるサーバーを作成する方法を確認するができます。）

選択したサーバーの設定に移動し、必要な構成を有効にします。

### アダルト系ウェブサイトをブロックする

不適切なコンテンツや成人向けコンテンツのあるウェブサイトをブロックします。

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### セーフサーチ

検索エンジン（Google、Bing、DuckDuckGo、Yandex、Pixabay、Brave、Ecosia）で、不適切な検索結果を削除します。

### YouTube制限付きモード

動画の下でコメントを表示・投稿できないようにし、YouTubeの18禁コンテンツに関われないようにします。

### ブロックするサービスやWebサイト

人気サービスへのアクセスをワンクリックで制限できます。これは、AdGuard DNSに接続されたデバイスでInstagramやYouTubeなどにアクセスできないようにしたい場合に便利です。

![Blocked services \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### カテゴリごとにウェブサイトをブロックする

AdGuard DNS は、人気サービスへのアクセスをワンクリックでブロックできます。たとえば、アルコール、タバコ、または薬物に関する情報を含むサイトをブロックすると、選択したデバイスではそれらのカテゴリーに該当するページを開くことができなくなります。

![Category-based blocking \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### スクリーンタイム（休止時間帯）

指定した日および時間帯中に、「ペアレンタルコントロール」の制限を解除するように設定できます。各日に、休止間隔を5つまで設定できます。

たとえば、平日の午前7:00〜8:00と午後18:00〜20:00に制限を一時停止するよう設定できます。 to 8:00 a.m.    この時間帯以外の時間には、「ペアレンタルコントロール」は通常どおり適用されます。

休止スケジュールを設定する方法は以下のとおりです:

1. 「サーバー」→ 設定したいサーバーを一覧から選ぶ →「ペアレンタルコントロール」→「スクリーンタイム」に進みます。
2. 希望する曜日の横にある「**+**」ボタンをクリックし、「休止時間を追加」ダイアログで時間帯を設定します。
3. 同じ日にさらに時間帯を追加するには、手順「2.」を繰り返します。
4. 既存の休止時間帯を変更するには、「編集」をクリックします。

同じ日に複数の休止時間を設定できます。同じ日の休止時間は重複できません。重複するj館を作成しようとすると、警告が表示され、スケジュールを保存できなくなります。

![Overlapping intervals \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

「まる一日（24時間）」チェックボックスを選択すると、設定した時間帯が置き換えられ、一日中ペアレンタルコントロールの制限が休止されます。

休止時間帯は午前0時をまたぐこともできます。たとえば、月曜日の午後10時から火曜日の午前7時まで休止時間を設定した場合、ダッシュボードには「月曜日 22:00～00:00」と「火曜日 00:00～07:00」の2つの時間帯として表示されます。

![Pause schedule \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
