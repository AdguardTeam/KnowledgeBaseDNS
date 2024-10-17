---
title: 小米
sidebar_position: 11
---

小米路由器有很多优势：信号稳定强大、网络安全、运行稳定、智能管理，同时用户可以将多达 64 台设备连接到本地 Wi-Fi 网络。

有一个缺点，小米路由器不支持加密 DNS，但非常适合通过绑定 IP 地址设置 AdGuard DNS。

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 用户可以通过 `192.168.31.1` 或路由器的 IP 地址进行访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_高级设置_」或「_高级_」，具体取决于路由器型号。
4. 打开「_网络_」或「_互联网_」，然后查找「DNS」或「DNS 设置」。
5. 选择「_手动 DNS_」。 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
6. 请保存设置。
7. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
