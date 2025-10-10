---
title: Использование вместе с Частным узлом iCloud
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

При использовании Частного узла iCloud панель управления AdGuard DNS (и связанная с ней [тестовая страница AdGuard](https://adguard.com/test.html)) покажет, что вы не используете AdGuard DNS на этом устройстве.

![Устройство не подключено](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Чтобы решить эту проблему, разрешите сайтам AdGuard видеть ваш IP-адрес в настройках устройства.

- На iPhone или iPad:

    1. Перейдите на сайт `adguard-dns.io`

    1. Нажмите кнопку **Параметры страницы**, затем нажмите **Показать IP-адрес**

        ![Настройки Частного узла iCloud *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Повторите для `adguard.com`

- На Mac:

    1. Перейдите на сайт `adguard-dns.io`

    1. В Safari выберите **Вид** → **Перезагрузить и показать IP-адрес**

    1. Повторите для `adguard.com`

Если вы не видите возможность временно разрешить сайту видеть ваш IP-адрес, обновите устройство до последней версии iOS, iPadOS или macOS, а затем повторите попытку.

Теперь ваше устройство должно корректно отображаться в панели AdGuard DNS:

![Устройство подключено](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Помните, что если вы отключите Частный узел для определённого сайта, ваш провайдер также сможет видеть, какой сайт вы просматриваете.
