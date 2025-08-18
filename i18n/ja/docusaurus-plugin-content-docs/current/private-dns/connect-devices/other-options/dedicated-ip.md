---
title: 専用IP（Dedicated IPs）
sidebar_position: 2
---

## 専用IPとは？

「専用IPv4アドレス」は、チームおよびエンタープライズプランを持つユーザーに提供される機能であり、「リンクされたIP」は全ユーザーが利用できる機能です。

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. 専用 IP アドレスはより安全で、管理もより簡単です。 With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## 専用IPが必要な理由は？

残念ながら、接続デバイスの技術仕様によっては、暗号化されたプライベートAdGuard DNSサーバーを設定できない場合があります。 この場合、標準の暗号化されていないDNSを使用する必要があります。 AdGuard DNSを設定する方法は2つあります: [リンクされたIPを使用する](/private-dns/connect-devices/other-options/linked-ip.md)か、専用IPを使用するという2方法です。

専用IPは一般的に、より安定したオプションです。 Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. 専用IPなら、あなた専用のIPアドレスが提供され、すべてのリクエストはあなたのデバイスのものとしてカウントされます。

デメリットは、パブリックDNSリゾルバで常に起こるように、無関係なトラフィック（スキャナやボット）を受信し始める可能性があることです。 その場合、[アクセス設定](/private-dns/server-and-settings/access.md)を使用してボットトラフィックを制限する必要があったりします。

デバイスに専用IPを接続する方法は以下のとおりです：

## 専用IPを使用して AdGuard DNS に接続する方法

1. AdGuard DNSの「ダッシュボード」を開きます。
2. 新しいデバイスを追加するか、以前に作成してあるデバイスの設定を開きます。
3. 「_サーバーアドレスを使用_」を選択します。
4. 「_プレーンDNSサーバーアドレス_」を開きます。
5. 使用したいサーバーを選択します。
6. 専用IPv4アドレスをバインドするには、「_割り当てる_」をクリックします。
7. 専用IPv6アドレスを使用したい場合は、「_コピー_」をクリックします。
    ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. コピーした専用アドレスをデバイス設定に貼り付けます。
