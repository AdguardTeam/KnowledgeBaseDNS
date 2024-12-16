---
title: Xbox One
sidebar_position: 6
---

ゲーム機は暗号化されたDNSをサポートしていませんが、リンクされたIPアドレスを介してパブリックAdGuard DNSまたはプライベートAdGuard DNSを設定できます。

お使いのルーターが暗号化DNSサーバーの使用をサポートしている可能性が高いため、ルーターにプライベートAdGuard DNSを設定し、ゲーム機をルーター（Wi-Fi）に接続するという方法もあります。そうすれば、ゲーム機は暗号化AdGuard DNSに接続されます。

[ルーターでの設定方法はこちら](/private-dns/connect-devices/routers/routers.md)

## AdGuard DNSに接続する方法

パブリックAdGuard DNSサーバーを使用するようにゲーム機を設定するか、リンクされたIPを介して設定します:

1. お持ちのゲーム機（Xbox One）を起動して、アカウントにサインインしてください。
2. コントローラーのXboxボタンを押してガイドを開き、メニューから「_システム_」を選択します。
3. 「_設定_」メニューで、「_ネットワーク_」を選択します。
4. 「_ネットワーク設定_」で「_詳細設定_」を選択します。
5. 「_DNS 設定_」で、「_手動_」を選択します。
6. 「_DNS サーバー_」欄に、次のいずれかの DNS サーバーアドレスを入力します:
   - `94.140.14.49`
   - `94.140.14.59`
7. 変更を保存します。

リンクされたIP（チームプランをご利用の場合は専用IP）を使用するのがおすすめです:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
