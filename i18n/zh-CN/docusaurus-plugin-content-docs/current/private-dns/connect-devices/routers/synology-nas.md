---
title: Synology NAS
sidebar_position: 9
---

Synology NAS routers are incredibly easy to use and can be combined into a single mesh network. You can manage your network remotely anytime, anywhere. You can also configure AdGuard DNS directly on the router.

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. Open _Control Panel_ or _Network_.
4. Select _Network Interface_ or _Network Settings_.
5. Select your Wi-Fi network or wired connection.
6. 选择「_手动 DNS_」。 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](private-dns/connect-devices/other-options/linked-ip.md)
