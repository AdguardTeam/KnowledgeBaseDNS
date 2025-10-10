---
title: Steam Deck
sidebar_position: 5
---

游戏主机不支持加密 DNS，但它们非常适合通过关联的 IP 地址设置公共 AdGuard DNS 或私人 AdGuard DNS。

路由器很可能支持加密的 DNS 服务器，因此用户可以配置私人 AdGuard DNS 并将游戏主机连接到它。

[如何配置路由器](/private-dns/connect-devices/routers/routers.md)

## 连接 AdGuard DNS

在游戏主机上配置公共 AdGuard DNS 服务器，或用关联的 IP：

1. 单击屏幕右上角的齿轮图标打开 Steam Deck 设置。
2. 单击「_网络_」。
3. 单击要配置的网络连接旁边的齿轮图标。
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. 选择「仅自动（DHCP）地址」或「自动（DHCP）」。
6. 在「DNS 服务器」字段中，输入以下其中一个 DNS 服务器地址：
   - `94.140.14.49`
   - `94.140.14.59`
7. 保存更改。

最好使用关联的 IP 地址（如果拥有团队版订阅，可以使用专用 IP 地址）：

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
