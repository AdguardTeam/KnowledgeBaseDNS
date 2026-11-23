---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## ルーターの管理画面を使って接続する

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. トップメニューの「サービス」をクリックし、ドロップダウンメニューから「DHCPサーバー」を選択します。
4. 「DHCPサーバー」ページで、どのインターフェース（LAN、WLANなど）に対してDNS設定を行いたいかを選択します。
5. 「DNS サーバー」までスクロールダウンします。
6. 「_手動DNS_」を選択します。 Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` と `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` と `2a10:50c0:0:0:0:0:dad:ff`
7. 設定を保存します。
8. オプションとして、セキュリティを強化するためにDNSSECを有効にすることができます。
9. IP（チームプランをご利用の場合は専用IP）をリンクします。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
