---
title: 与 iCloud 专用代理同时使用
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![设备未连接](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- iPhone 或 iPad：

    1. 转到 `adguard-dns.io`

    1. 点击「**页面设置**」，然后点击「**显示 IP 地址**」

        ![iCloud 专用代理设置 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. 对 `adguard.com` 重复上述操作

- Mac：

    1. 转到 `adguard-dns.io`

    1. 在 Safari 中，选择「**查看**」→「**重新加载并显示 IP 地址**」

    1. 对 `adguard.com` 重复上述操作

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

现在您的设备应该正确显示在 AdGuard DNS 仪表板中：

![设备已连接](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
