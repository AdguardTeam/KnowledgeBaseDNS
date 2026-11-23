---
title: Keenetic
sidebar_position: 5
---

Роутеры Keenetic известны своей стабильностью, гибкой настройкой и простотой установки, что позволяет легко установить шифрованный Private AdGuard DNS на ваше устройство.

## Настройте DNS-over-HTTPS

1. Open the router admin panel. К панели администрирования можно получить доступ по адресу my.keenetic.net, IP-адресу вашего роутера, или по адресу `192.168.1.1`.
2. Нажмите кнопку меню в нижней части экрана и выберите «Управление».
3. Откройте Системные настройки.
4. Нажмите «Параметры компонента» → «Параметры системного компонента».
5. В разделе «Утилиты и сервисы» выберите DNS-over-HTTPS-прокси и установите его.
6. Перейдите в «Меню» → «Правила сети» → «Интернет-безопасность».
7. Перейдите к DNS-over-HTTPS-серверам и нажмите «Добавить DNS-over-HTTPS-сервер».
8. Введите URL сервера Личного AdGuard DNS в поле `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`.
9. Нажмите _Сохранить_.

## Настройка DNS-over-TLS

1. Open the router admin panel. К панели администрирования можно получить доступ по адресу my.keenetic.net, IP-адресу вашего роутера, или по адресу `192.168.1.1`.
2. Нажмите кнопку меню в нижней части экрана и выберите «Управление».
3. Откройте Системные настройки.
4. Нажмите «Параметры компонента» → «Параметры системного компонента».
5. В разделе «Утилиты и сервисы» выберите DNS-over-HTTPS-прокси и установите его.
6. Перейдите в «Меню» → «Правила сети» → «Интернет-безопасность».
7. Перейдите к DNS-over-HTTPS-серверам и нажмите «Добавить DNS-over-HTTPS-сервер».
8. Введите URL сервера Личного AdGuard DNS в поле `tls://*********.d.adguard-dns.com`.
9. Нажмите _Сохранить_.

## Через панель управления роутера

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Введите логин пользователя администратора (обычно это admin) и пароль роутера.
3. Откройте «Интернет» или «Домашнюю сеть».
4. Select _WAN_ or _Internet_.
5. Выберите «DNS» или «Настройки DNS».
6. Выберите «Ручной DNS». Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` и `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
7. Сохраните настройки.
8. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
