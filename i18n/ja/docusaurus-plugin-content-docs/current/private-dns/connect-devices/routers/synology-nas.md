---
title: Synology NAS
sidebar_position: 9
---

Synology NAS routers are incredibly easy to use and can be combined into a single mesh network. You can manage your network remotely anytime, anywhere. You can also configure AdGuard DNS directly on the router.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. ルーターの管理画面を開きます。 （管理画面は、`192.168.1.1` または `192.168.0.1` でアクセスできます。）
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. Open _Control Panel_ or _Network_.
4. Select _Network Interface_ or _Network Settings_.
5. Select your Wi-Fi network or wired connection.
6. 「_手動DNS_」を選択します。 「_これらの DNS サーバーを使用する_」または 「_DNS サーバーを手動で指定する_」を選択し、以下の DNS サーバーアドレスを入力します:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Save the settings.
8. Link your IP (or your dedicated IP if you have a Team subscription).

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
