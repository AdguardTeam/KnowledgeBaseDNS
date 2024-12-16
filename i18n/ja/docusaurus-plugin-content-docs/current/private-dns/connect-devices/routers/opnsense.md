---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. ルーターの管理画面を開きます。 （管理画面は、`192.168.1.1` または `192.168.0.1` でアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. Click _Services_ in the top menu, then select _DHCP Server_ from the drop-down menu.
4. On the _DHCP Server_ page, select the interface that you want to configure the DNS settings for (e.g., LAN, WLAN).
5. Scroll down to _DNS Servers_.
6. 「_手動DNS_」を選択します。 「_これらの DNS サーバーを使用する_」または 「_DNS サーバーを手動で指定する_」を選択し、以下の DNS サーバーアドレスを入力します:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Save the settings.
8. Optionally, you can enable DNSSEC for enhanced security.
9. Link your IP (or your dedicated IP if you have a Team subscription).

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
