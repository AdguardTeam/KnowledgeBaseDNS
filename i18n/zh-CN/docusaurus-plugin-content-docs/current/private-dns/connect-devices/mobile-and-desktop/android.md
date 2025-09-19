---
title: Android
sidebar_position: 2
---

要将 Android 设备连接至 AdGuard DNS，请将其添加到「_仪表盘_」：

1. 进入「_仪表盘_」点击「_连接新设备_」。
2. 在下拉菜单的「_设备类型_」中选择 Android。
3. 命名设备。
   ![连接设备 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard 广告拦截程序（付费）

AdGuard 应用程序让用户使用加密的 DNS，在 Android 设备上使用 AdGuard DNS 是一个理想的选择。 您可以选择多种加密协议。 除了 DNS 过滤，还可以获得一款出色的广告拦截程序。它在整个系统上屏蔽广告。

1. 在要连接到 AdGuard DNS 的设备上安装 [AdGuard 应用程序] (https://adguard.com/adguard-android/overview.html)。
2. 打开应用程序。
3. 点击屏幕底部菜单栏中的盾牌图标。
   ![盾牌图标 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. 点击「_DNS 保护_」。
   ![DNS 保护 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. 选择「_DNS 服务器_」。
   ![DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. 向下滚动至「_自定义服务器_」，然后点击「_添加 DNS 服务器_」。
   ![添加 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server addresses_ field in the app. 如果不确定使用哪个地址，请选择「_DNS-over-HTTPS_」。
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![自定义 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. 点击「_添加_」。
9. 您添加的 DNS 服务器将显示在「_自定义服务器_」列表的底部。 要选择它，请点击它的名称或旁边的单选按钮。
   ![选择 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. 点击「_保存并选择_」。
    ![保存并选择 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## AdGuard VPN

并不是所有的 VPN 都支持加密 DNS。 然而，我们的 VPN 支持加密 DNS，因此，如果要同时使用 VPN 和私人 DNS，AdGuard VPN 是您的理想选择。

1. 在想要连接到 AdGuard DNS 的设备上安装 [AdGuard VPN 应用程序](https://adguard-vpn.com/android/overview.html)。
2. 打开应用程序。
3. 在屏幕底部的菜单栏中，点击齿轮图标。
   ![齿轮图标 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. 打开「_应用程序设置_」。
   ![应用程序设置 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. 选择「_DNS 服务器_」。
   ![DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. 向下滚动并点击「_添加自定义 DNS 服务器_」。
   ![添加 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ field in the app. 如果不确定使用哪个地址，请选择「DNS-over-HTTPS」。
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![自定义 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. 点击「_保存并选择_」。
   ![添加 DNS 服务器 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. 您所添加的 DNS 服务器将显示在「_自定义 DNS 服务器_」列表的底部。

完成！ 您的设备已成功连接到 AdGuard DNS。

## 手动配置私人 DNS

用户可以在设备设置中配置 DNS 服务器。 请注意，Android 设备仅支持 DNS-over-TLS 协议。

1. 前往「_设置_」→「_Wi-Fi 和互联网_」（或「_网络和互联网_」，取决于操作系统版本）。
   ![设置 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. 选择「_高级_」并点击「_私人 DNS_」。
   ![私人 DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. 选择「_私人 DNS 提供商主机名_」并输入您个人服务器的地址：`{Your_Device_ID}.d.adguard-dns.com`。
4. 点击「_保存_」。
   ![私人 DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   完成！ 您的设备已成功连接到 AdGuard DNS。

## 配置无加密的 DNS

如果您选择不使用额外的软件进行 DNS 配置，可以选择无加密 DNS。 您有两种选择：使用关联的 IP 或专用 IP。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
