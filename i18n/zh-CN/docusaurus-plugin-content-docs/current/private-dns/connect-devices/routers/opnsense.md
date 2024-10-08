---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. Click _Services_ in the top menu, then select _DHCP Server_ from the drop-down menu.
4. On the _DHCP Server_ page, select the interface that you want to configure the DNS settings for (e.g., LAN, WLAN).
5. Scroll down to _DNS Servers_.
6. 选择「_手动 DNS_」。 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. Optionally, you can enable DNSSEC for enhanced security.
9. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
