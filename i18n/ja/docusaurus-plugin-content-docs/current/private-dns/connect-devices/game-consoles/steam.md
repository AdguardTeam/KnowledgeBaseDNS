---
title: Steam Deck
sidebar_position: 5
---

ゲーム機は暗号化されたDNSをサポートしていませんが、リンクされたIPアドレスを介してパブリックAdGuard DNSまたはプライベートAdGuard DNSを設定できます。

お使いのルーターが暗号化DNSサーバーの使用をサポートしている可能性が高いため、ルーターにプライベートAdGuard DNSを設定し、ゲーム機をルーター（Wi-Fi）に接続するという方法もあります。そうすれば、ゲーム機は暗号化AdGuard DNSに接続されます。

[ルーターでの設定方法はこちら](/private-dns/connect-devices/routers/routers.md)

## AdGuard DNSに接続する方法

パブリックAdGuard DNSサーバーを使用するようにゲーム機を設定するか、リンクされたIPを介して設定します:

1. 画面右下の歯車⚙アイコンをクリックして、Steam Deck の設定を開きます。
2. 「_ネットワーク_」をクリックします。
3. 設定したいネットワーク接続の横にある歯車アイコン（⚙）をクリックします。
4. 使用しているネットワークの種類に応じて、IPv4またはIPv6を選択します。
5. 「_自動（DHCP）アドレスのみ_」もしくは「_自動（DHCP）_」を選択します。
6. 「_DNS サーバー_」欄に、次のいずれかの DNS サーバーアドレスを入力します:
    - `94.140.14.49`
    - `94.140.14.59`
7. 変更を保存します。

リンクされたIP（チームプランをご利用の場合は専用IP）を使用するのがおすすめです:

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
