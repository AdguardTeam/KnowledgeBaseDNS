---
title: Windows
sidebar_position: 5
---

要将 iOS 设备连接至 AdGuard DNS，首先将其添加到「_仪表盘_」：

1. 进入「_仪表盘_」并点击「_连接新设备_」。
2. 在下拉菜单「_设备类型_」中，选择 Windows。
3. 命名设备。
   ![连接设备 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## 使用 AdGuard 广告拦截程序（付费）

AdGuard 应用程序让用户使用加密的 DNS，在 Windows 设备上使用 AdGuard DNS 是一个理想的选择。 您可以选择多种加密协议。 除了 DNS 过滤，还可以获得一款出色的广告拦截程序。它在整个系统上屏蔽广告。

1. 在想要连接到 AdGuard DNS 的设备上安装[应用程序](https://adguard.com/adguard-windows/overview.html)。
2. 打开应用程序。
3. 点击该应用程序主屏幕顶部的「_设置_」。
   ![设置 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. 从左侧的菜单中选择「_DNS 保护_」标签。
   ![DNS 保护 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. 单击当前选择的 DNS 服务器。
   ![DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. 向下滚动并点击「_添加自定义 DNS 服务器_」。
   ![添加自定义 DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. 在 DNS 上游字段中，粘贴以下地址之一。 如果不确定使用哪个地址，请选择 DNS-over-HTTPS。
   ![DoH 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![创建服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. 点击「_保存并选择_」。
   ![保存并选择 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. 您所添加的 DNS 服务器将显示在「_自定义 DNS 服务器_」列表的底部。
   ![自定义 DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用 AdGuard VPN

并不是所有的 VPN 都支持加密 DNS。 然而，我们的 VPN 支持加密 DNS，因此，如果要同时使用 VPN 和私人 DNS，AdGuard VPN 是您的理想选择。

1. 安装 AdGuard VPN。
2. 打开应用程序并点击「_设置_」。
3. 选择「_应用程序设置_」。
   ![应用程序设置 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. 向下滚动并选择「_DNS 服务器_」。
   ![DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. 点击「_添加自定义 DNS 服务器_」。
   ![添加自定义 DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. 在「_服务器地址_」字段中，粘贴以下地址之一。 如果不确定使用哪个地址，请选择 DNS-over-HTTPS。
   ![DoH 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![创建服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. 点击「_保存并选择_」。
   ![保存并选择 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用 AdGuard DNS 客户端

AdGuard DNS 客户端是一个多功能的跨平台控制台工具，让用户使用加密的 DNS 协议连接到 AdGuard DNS。

更多细节，请参阅[相应的文章](/dns-client/overview/)。

## 配置无加密的 DNS

如果您选择不使用额外的软件进行 DNS 配置，可以选择无加密 DNS。 您有两种选择：使用关联的 IP 或专用 IP。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
