---
title: 与 iCloud 专用代理同时使用
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

当您使用 iCloud 专用代理时，AdGuard DNS 仪表板（以及相关的 [AdGuard 测试页面](https://adguard.com/test.html)）会显示您未在该设备上使用 AdGuard DNS。

![设备未连接](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

要解决此问题，需要在设备的设置中允许 AdGuard 网站查看您的 IP 地址。

- iPhone 或 iPad：

    1. 转到 `adguard-dns.io`

    1. 点击「**页面设置**」，然后点击「**显示 IP 地址**」

        ![iCloud 专用代理设置 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. 对 `adguard.com` 重复上述操作

- Mac：

    1. 转到 `adguard-dns.io`

    1. 在 Safari 中，选择「**查看**」→「**重新加载并显示 IP 地址**」

    1. 对 `adguard.com` 重复上述操作

如果看不到暂时允许网站查看您的 IP 地址的选项，请将设备更新到最新版本的 iOS、iPadOS 或 macOS，然后重试。

现在您的设备应该正确显示在 AdGuard DNS 仪表板中：

![设备已连接](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

请注意，一旦您关闭特定网站的专用代理，网络提供商也将能够看到您正在浏览的网站。
