---
title: Nintendo Switch
sidebar_position: 3
---

ゲーム機は暗号化されたDNSをサポートしていませんが、リンクされたIPアドレスを介してパブリックAdGuard DNSまたはプライベートAdGuard DNSを設定できます。

お使いのルーターが暗号化DNSサーバーの使用をサポートしている可能性が高いため、ルーターにプライベートAdGuard DNSを設定し、ゲーム機をルーター（Wi-Fi）に接続するという方法もあります。そうすれば、ゲーム機は暗号化AdGuard DNSに接続されます。

[ルーターでの設定方法はこちら](/private-dns/connect-devices/routers/routers.md)

## AdGuard DNSに接続する方法

パブリックAdGuard DNSサーバーを使用するようにゲーム機を設定するか、リンクされたIPを介して設定します:

1. Nintendo Switch 本体の電源を入れ、ホームメニューに進みます。
2. 「_システム設定_」→「_インターネット_」に移動します。
3. DNS 設定を変更したいWi-Fiネットワークを選択します。
4. 選択した Wi-Fi ネットワークの「_設定を変更_」を押します。
5. 下にスクロールして、「_DNS設定_」を選択します。
6. 「_DNS サーバー_」欄に、次のいずれかの DNS サーバーアドレスを入力します:
   - `94.140.14.49`
   - `94.140.14.59`
7. DNS設定を保存します。

リンクされたIP（チームプランをご利用の場合は専用IP）を使用するのがおすすめです:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
