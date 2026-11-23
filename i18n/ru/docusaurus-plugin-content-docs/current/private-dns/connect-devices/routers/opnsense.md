---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Через панель управления роутера

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Введите логин пользователя администратора (обычно это admin) и пароль роутера.
3. Нажмите «Сервисы» в верхнем меню, затем выберите «DHCP-сервер» в раскрывающемся меню.
4. На странице «DHCP-сервер» выберите интерфейс, для которого вы хотите настроить параметры DNS (например, LAN, WLAN).
5. Прокрутите вниз до DNS-серверов.
6. Выберите «Ручной DNS». Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` и `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
7. Сохраните настройки.
8. При желании вы можете включить DNSSEC для повышения безопасности.
9. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
