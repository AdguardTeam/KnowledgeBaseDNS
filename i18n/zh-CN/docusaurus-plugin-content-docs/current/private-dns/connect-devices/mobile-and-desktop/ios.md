---
title: iOS
sidebar_position: 3
---

要将 iOS 设备连接至 AdGuard DNS，首先将其添加到「_仪表盘_」：

1. 进入「_仪表盘_」并点击「_连接新设备_」。
2. 在下拉菜单「_设备类型_」中，选择 iOS。
3. 命名设备。
   ![连接设备 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## 使用 AdGuard 广告拦截程序（付费）

AdGuard 应用程序让用户使用加密的 DNS，在 iOS 设备上使用 AdGuard DNS 是一个理想的选择。 您可以选择多种加密协议。 除了 DNS 过滤，还可以获得一款出色的广告拦截程序。它在整个系统上屏蔽广告。

1. 在想要连接到 AdGuard DNS 的设备上安装 [AdGuard 应用程序](https://adguard.com/adguard-ios/overview.html)。
2. 开启 AdGuard。
3. 在下面菜单选择「_保护_」标签。
   ![盾牌图标 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. 确保「_DNS 保护_」已开启然后点击它。 选择「_DNS 服务器_」。
   ![DNS 保护 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS 服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. 向下滑动页面到底部，点击「_添加自定义 DNS 服务器_」。
   ![添加 DNS 服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. 复制以下 DNS 地址之一，并将其粘贴到应用程序的「_DNS 服务器地址_」字段中。 如果不确定使用哪个地址，请选择「DNS-over-HTTPS」。
   ![复制服务器地址 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![粘贴服务器地址 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. 点击「_保存并选择_」。
   ![保存并选择 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. 创建的新服务器应出现在列表底部。
   ![自定义服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用 AdGuard VPN

并不是所有的 VPN 都支持加密 DNS。 然而，我们的 VPN 支持加密 DNS，因此，如果要同时使用 VPN 和私人 DNS，AdGuard VPN 是您的理想选择。

1. 在想要连接到 AdGuard DNS 的设备上安装 [AdGuard VPN 应用程序](https://adguard-vpn.com/ios/overview.html)。
2. 打开 AdGuard VPN 应用程序。
3. 点击屏幕右下角的齿轮图标。
   ![齿轮图标 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. 打开「_常规_」。
   ![常规设置 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. 选择「_DNS 服务器_」。
   ![DNS 服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. 向下滚动至「_添加自定义 DNS 服务器_」。
   ![添加服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. 复制以下 DNS 地址并将其粘贴到「_DNS 服务器地址_」文本字段。 如果不确定使用哪个地址，请选择「_DNS-over-HTTPS_」。
   ![DNS-over-HTTPS 服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![自定义 DNS 服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. 点击_保存_。
   ![保存服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. 创建的新服务器应该出现在「_自定义 DNS 服务器_」下方。
   ![自定义服务器 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用配置文件

iOS 设备的描述文件，也被 Apple 称为「配置描述文件」，是一个通过证书签名的 XML 文件，用户可以手动在 iOS 设备上安装，或者通过 MDM 解决方案进行部署。 用户还可以用配置描述文件在设备上配私人 AdGuard DNS。

:::note 重要信息

如果您使用 VPN，配置文件将被忽略。

:::

1. [下载](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml)描述文件。
2. 打开设置。
3. 点击「_已下载描述文件_」。
   ![已下载配置文件\*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. 点击「_安装_」并按照屏幕上的指示说明进行操作。
   ![安装 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## 配置无加密的 DNS

如果您不希望通过额外的软件来配置 DNS，可以选择无加密的 DNS。 有两种选择：使用链接的 IP 或专用 IP 地址。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
