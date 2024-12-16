---
title: PlayStation PS4/PS5
sidebar_position: 4
---

游戏主机不支持加密 DNS，但它们非常适合通过关联的 IP 地址设置公共 AdGuard DNS 或私人 AdGuard DNS。

路由器很可能支持加密的 DNS 服务器，因此用户可以配置私人 AdGuard DNS 并将游戏主机连接到它。

[如何配置路由器](/private-dns/connect-devices/routers/routers.md)

## 连接 AdGuard DNS

将游戏主机配置为使用公共 AdGuard DNS 服务器，或用关联的 IP 进行配置：

1. 打开 PS4/PS5 主机并登录账户。
2. 在主屏幕中，选择位于顶部的齿轮图标。
3. 在「_设置_」菜单中，选择「_网络_」。
4. 选择「_设置互联网连接_」。
5. 根据网络设置，请选择「_使用 Wi-Fi_」或「_使用 LAN 电缆_」。
6. 选择「_自定义_」，然后在「_IP 地址设置_」选择「_自动_」。
7. 「_DHCP 主机名_」，选择「_未指定_」。
8. 「_DNS 设置_」选择「_手动_」。
9. 在「_DNS 服务器_」字段中，输入以下其中一个 DNS 服务器地址：
   - `94.140.14.49`
   - `94.140.14.59`
10. 选择「_下一步_」继续。
11. 在「_MTU 设置_」屏幕上，选择「_自动_」。
12. 在「_代理服务器_」页面上，选择「_不使用_」。
13. 选择「_测试互联网连接_」以测试新的 DNS 设置。
14. 测试完成后，将看到「_互联网连接：成功_」，请保存设置。

最好使用关联的 IP 地址（如果拥有团队版订阅，可以使用专用 IP 地址）：

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
