---
title: Asus
sidebar_position: 3
---

## Настройка DNS-over-TLS

Это общая инструкция по настройке AdGuard DNS для роутеров Asus.

Информация по настройке в этой инструкции взята с конкретной модели роутера, поэтому она может отличаться от интерфейса вашего устройства.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Войдите в панель управления роутера Asus. Доступ можно получить через [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), или [http://192.168.2.1](http://192.168.2.1/).
2. Введите логин пользователя администратора (обычно это admin) и пароль роутера.
3. На боковой панели «Дополнительные параметры» перейдите к разделу «WAN».
4. В разделе «Настройки WAN DNS» установите для параметра «Автоматически подключаться к DNS-серверу» значение «Нет».
5. Установите для параметра «Переадресация локальных запросов», «Включить повторную привязку DNS» и «Включить DNSSEC» значение «Нет».
6. Измените протокол конфиденциальности DNS на DNS-over-TLS (DoT).
7. Убедитесь, что для профиля DNS-over-TLS установлено значение «Строгий».
8. Прокрутите вниз до раздела «Список серверов DNS-over-TLS». В поле «Адрес» введите один из следующих адресов:
   - `94.140.14.49` и `94.140.14.59`
9. В поле «Порт TLS» введите 853.
10. В поле «Имя хоста TLS» введите адрес сервера Private AdGuard DNS:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Прокрутите страницу вниз и нажмите «Применить».

## Через панель управления роутера

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Введите логин пользователя администратора (обычно это admin) и пароль роутера.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` и `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
7. Сохраните настройки.
8. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
