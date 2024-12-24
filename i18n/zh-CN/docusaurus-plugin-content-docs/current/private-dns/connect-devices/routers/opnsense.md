---
title: OPNSense
sidebar_position: 8
---

OPNSense 固件通常用于配置无线接入点、DHCP 服务器、DNS 服务器，让用户在设备上配置 AdGuard DNS。

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 单击顶部菜单中的「_服务_」，然后从下拉菜单中选择「_DHCP 服务器_」。
4. 在「_DHCP 服务器_」页面上，选择要配置 DNS 设置的界面（例如 LAN、WLAN）。
5. 向下滚动到「_DNS 服务器_」。
6. 选择「_手动 DNS_」。 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 或者，用户可以启用 DNSSEC 以增强安全性。
9. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
