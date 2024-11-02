---
title: macOS
sidebar_position: 4
---

要将 macOS 设备连接至 AdGuard DNS，首先将其添加到「_仪表盘_」：

1. 进入「_仪表盘_」并点击「_连接新设备_」。
2. 在下拉菜单「_设备类型_」中，选择 Mac。
3. 命名设备。
   ![连接设备 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## 使用 AdGuard 广告拦截程序（付费）

AdGuard 应用程序让用户使用加密的 DNS，在 macOS 设备上使用 AdGuard DNS 是一个理想的选择。 您可以选择多种加密协议。 除了 DNS 过滤，还可以获得一款出色的广告拦截程序。它在整个系统上屏蔽广告。

1. 在想要连接到 AdGuard DNS 的设备上安装[应用程序](https://adguard.com/adguard-mac/overview.html)。
2. 打开应用程序。
3. 在右上角点击图标。
   ![保护图标 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. 选择「_首选项..._」。
   ![首选项 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. 在上面的一排图标上点击「_DNS_」标签。
   ![DNS 标签 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. 点击上面的复选框以启用 DNS 保护。
   ![DNS 保护 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. 在左下角点击「_+_」按钮。
   ![点击 + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. 将以下的 DNS 地址之一，复制并粘贴到应用程序的「_DNS 服务器_」字段中。 如果不确定使用哪个地址，请选择「_DNS-over-HTTPS_」。
   ![DoH 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![建立服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. 点击「_保存并选择_」。
   ![保存并选择 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. 创建的新服务器应出现在列表底部。
    ![提供商 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用 AdGuard VPN

并不是所有的 VPN 都支持加密 DNS。 然而，我们的 VPN 支持加密 DNS，因此，如果要同时使用 VPN 和私人 DNS，AdGuard VPN 是您的理想选择。

1. 在想要连接到 AdGuard DNS 的设备上安装 [AdGuard VPN 应用程序](https://adguard-vpn.com/mac/overview.html)。
2. 打开 AdGuard VPN 应用程序。
3. 打开「_设置_」→「_应用程序设置_」→「_DNS 服务器_」→「_添加自定义服务器_」。
   ![添加自定义服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. 复制以下 DNS 地址并将其粘贴到「_DNS 服务器地址_」文本字段。 如果不确定使用哪个地址，请选择 DNS-over-HTTPS。
   ![DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. 点击「_保存并选择_」。
6. 您所添加的 DNS 服务器将显示在「_自定义 DNS 服务器_」列表的底部。
   ![自定义 DNS 服务器 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用配置文件

macOS 设备的描述文件，也被 Apple 称为「配置描述文件」，是一个通过证书签名的 XML 文件，用户可以手动在设备上安装，或者通过 MDM 解决方案进行部署。 用户还可以用配置描述文件在设备上配私人 AdGuard DNS。

:::note 重要信息

如果您使用 VPN，配置文件将被忽略。

:::

1. 请在想要连接到 AdGuard DNS 的设备上下载配置文件。
2. 选取 Apple 菜单 >「_系统设置_」，点按边栏中的「_隐私和安全_」，然后点按右侧的「_个人资料_」（用户可能需要向下滚动）。
   ![已下载描述文件 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. 在「_已下载_」部分中，双击描述文件。
   ![已下载 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. 查看描述文件内容，然后点击「_安装_」。
   ![安装 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. 输入管理员密码并单击「_确定_」。

完成！ 您的设备已成功连接到 AdGuard DNS。

## 配置无加密的 DNS

如果您选择不使用额外的软件进行 DNS 配置，可以选择无加密 DNS。 您有两种选择：使用关联的 IP 或专用 IP。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
