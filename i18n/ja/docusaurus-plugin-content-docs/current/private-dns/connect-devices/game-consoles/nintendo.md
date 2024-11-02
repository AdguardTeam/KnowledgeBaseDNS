---
title: Nintendo
sidebar_position: 2
---

ゲーム機は暗号化されたDNSをサポートしていませんが、リンクされたIPアドレスを介してパブリックAdGuard DNSまたはプライベートAdGuard DNSを設定できます。

お使いのルーターが暗号化DNSサーバーの使用をサポートしている可能性が高いため、ルーターにプライベートAdGuard DNSを設定し、ゲーム機をルーター（Wi-Fi）に接続するという方法もあります。そうすれば、ゲーム機は暗号化AdGuard DNSに接続されます。

[ルーターでの設定方法はこちら](/private-dns/connect-devices/routers/routers.md)

:::note 互換性

【対象機種】Newニンテンドー3DS、Newニンテンドー3DS LL、Newニンテンドー2DS LL、ニンテンドー3DS、ニンテンドー3DS LL、ニンテンドー2DS

:::

## AdGuard DNSに接続する方法

パブリックAdGuard DNSサーバーを使用するようにゲーム機を設定するか、リンクされたIPを介して設定します:

1. ホームメニューから「_システム設定_」を選択します。
2. 「_インターネット設定_」→「_接続設定_」に移動します。
3. 接続ファイルを選択し、「_設定を変更_」を選択します。
4. 「_DNS_」 → 「_セットアップ_ 」を選択します。
5. _DNS の自動取得_を「_いいえ_」に設定します。
6. _詳細セットアップ_ → _プライマリDNS_ を選択します。 既存の DNS を削除するには、左矢印を長押しします。
7. 「_DNS サーバー_」欄に、次のいずれかの DNS サーバーアドレスを入力します:
   - `94.140.14.49`
   - `94.140.14.59`
8. 設定を保存します。

リンクされたIP（チームプランをご利用の場合は専用IP）を使用するのがおすすめです:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
