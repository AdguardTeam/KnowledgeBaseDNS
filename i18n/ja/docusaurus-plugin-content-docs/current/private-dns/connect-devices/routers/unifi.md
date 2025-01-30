---
title: UniFi
sidebar_position: 10
---

UiFiルーター（一般的にはUbiquitiのUniFiシリーズとして知られています）には、家庭、ビジネス、エンタープライズ環境に適した多くの利点があります。 残念ながら、暗号化された DNS をサポートしていませんが、リンクされた IP を介して AdGuard DNS を設定するには最適です。

## ルーターの管理画面を使って接続する

UniFiルーターがDNS-over-TLSや DNS-over-HTTPS設定をサポートしていない場合は、以下のガイドをご利用ください:

1. Ubiquiti UniFi コントローラにログインします。
2. Settings → Networks にに移動します。
3. 「Edit Network」→「WAN」をクリックします。
4. 「Common Settings」→「DNS Server」に進み、以下のDNSサーバーアドレスを入力します。
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
5. [_保存_] をクリックします。
6. 「ネットワーク」に戻ります。
7. Edit Network → LAN を選択します。
8. DHCP Name Server を見つけ、Manual を選択します。
9. DNS Server 1 フィールドにゲートウェイアドレスを入力します。 または、_DNS Server 1_ および _DNS Server 2_ フィールドに AdGuard DNS サーバー アドレスを入力することもできます：
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
10. 設定を保存します。
11. IP（チームプランをご利用の場合は専用IP）をリンクします。

- [専用IP](private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](private-dns/connect-devices/other-options/linked-ip.md)
