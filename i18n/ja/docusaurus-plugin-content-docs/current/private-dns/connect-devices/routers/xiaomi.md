---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have a lot of advantages: Steady strong signal, network security, stable operation, intelligent management, at the same time, the user can connect up to 64 devices to the local Wi-Fi network.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. ルーターの管理画面を開きます。 It can be accessed at `192.168.31.1` or the IP address of your router.
2. 管理者ユーザー名（通常は「admin」）とルーターパスワードを入力します。
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. 「_手動DNS_」を選択します。 「_これらの DNS サーバーを使用する_」または 「_DNS サーバーを手動で指定する_」を選択し、以下の DNS サーバーアドレスを入力します:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Save the settings.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
