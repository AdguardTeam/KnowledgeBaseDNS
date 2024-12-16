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
2. 转至「_互联网设置_」→「_连接设置_」。
3. 选择连接文件，然后选择「_更改设置_」。
4. 选择「_DNS_」→「_设置_」。
5. 将「_自动获取 DNS_」设置为「_否_」。
6. 选择「_详细设置_」→「_主 DNS_」。 按住左箭头删除现有的 DNS。
7. 在「_DNS 服务器_」字段中，输入以下其中一个 DNS 服务器地址：
   - `94.140.14.49`
   - `94.140.14.59`
8. 请保存设置。

最好使用关联的 IP 地址（如果拥有团队版订阅，可以使用专用 IP 地址）：

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
