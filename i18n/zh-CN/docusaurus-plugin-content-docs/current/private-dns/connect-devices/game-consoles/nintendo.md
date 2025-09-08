---
title: Nintendo
sidebar_position: 2
---

游戏主机不支持加密 DNS，但它非常适合通过关联的 IP 地址设置公共 AdGuard DNS 或私人 AdGuard DNS。

您的路由器很可能支持使用加密的分布式的命名系统（DNS）服务器，因此用户可以配置私人 AdGuard DNS 并将游戏主机连接到它。

[如何配置路由器](/private-dns/connect-devices/routers/routers.md)

:::note 兼容性

适用于以下游戏机：New Nintendo 3DS、New Nintendo 3DS XL、New Nintendo 2DS XL、Nintendo 3DS、Nintendo 3DS XL 和 Nintendo 2DS。

:::

## 连接 AdGuard DNS

将游戏主机配置使用公共 AdGuard DNS 服务器，或通过关联的 IP 进行配置：

1. 从主菜单中，选择「_系统设置_」。
2. Go to _Internet_ → _Internet Settings_ → _Connection Settings_.
3. Select your network from the list.
4. Select _Change Settings_ → _DNS Settings_.
5. Set _Automatic_ to _Manual_.
6. Select _Primary DNS_. Hold down the left arrow (B button) to delete the existing DNS.
7. In the _Primary DNS_ field, enter one of the following DNS server addresses:
    - `94.140.14.49`
    - `94.140.14.59`
8. 请保存设置。

最好使用关联的 IP 地址（如果拥有团队版订阅，可以使用专用 IP 地址）：

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
