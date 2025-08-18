---
title: Использование вместе с Частным узлом iCloud
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Устройство не подключено](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- На iPhone или iPad:

    1. Перейдите на сайт `adguard-dns.io`

    1. Нажмите кнопку **Параметры страницы**, затем нажмите **Показать IP-адрес**

        ![Настройки Частного узла iCloud *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Повторите для `adguard.com`

- На Mac:

    1. Перейдите на сайт `adguard-dns.io`

    1. В Safari выберите **Вид** → **Перезагрузить и показать IP-адрес**

    1. Повторите для `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Теперь ваше устройство должно корректно отображаться в панели AdGuard DNS:

![Устройство подключено](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
