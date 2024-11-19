---
title: Linux
sidebar_position: 6
---

Чтобы подключить устройство на Linux к AdGuard DNS, для начала добавьте его в _Dashboard_:

1. Перейдите в раздел _Панель управления_ и нажмите _Подключить новое устройство_.
2. В выпадающем меню _Тип устройства_ выберите Linux.
3. Назовите устройство.
   ![Подключение устройства \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Использовать AdGuard DNS Client

AdGuard DNS Client — это кроссплатформенная консольная утилита, которая позволяет использовать зашифрованные протоколы DNS для доступа к AdGuard DNS.

Подробнее об этом вы можете узнать в [связанной статье](/dns-client/overview/).

## Использовать AdGuard VPN CLI

Вы можете настроить Private AdGuard DNS с помощью интерфейса командной строки AdGuard VPN (CLI). Чтобы начать работу с AdGuard VPN CLI, вам нужно использовать Терминал.

1. Установите AdGuard VPN CLI, следуя [этим инструкциям](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Чтобы задать определённый DNS-сервер, используйте команду: `adguardvpn-cli config set-dns <server_address>`, где `<server_address>` — это адрес вашего частного сервера.
4. Активируйте настройки DNS, введя `adguardvpn-cli config set-system-dns on`.

## Настройте вручную на Debian (требуется привязанный или выделенный IP-адрес)

1. Нажмите _Система_ → _Настройки_ → _Сетевые подключения_.
2. Выберите вкладку _Беспроводная сеть_, затем выберите вашу текущую сеть.
3. Нажмите _Редактировать_ → _IPv4_.
4. Измените перечисленные DNS-адреса на следующие:
   - `94.140.14.49`
   - `94.140.14.59`
5. Отключите _Автоматический режим_.
6. Нажмите _Применить_.
7. Перейдите в _IPv6_.
8. Измените перечисленные DNS-адреса на следующие:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Отключите _Автоматический режим_.
10. Нажмите _Применить_.
11. Привяжите свой IP-адрес (или выделенный IP, если у вас есть Командная подписка):
    - [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)

## Настройте вручную на Debian (требуется привязанный или выделенный IP-адрес)

1. Откройте Терминал.
2. В командной строке введите: `su`.
3. Введите ваш `админ` пароль.
4. В командной строке введите: `nano /etc/resolv.conf`.
5. Измените перечисленные DNS-адреса на следующие:
   - IPv4: `94.140.14.49 и 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff и 2a10:50c0:0:0:0:0:dad:ff`
6. Нажмите _Ctrl + O_, чтобы сохранить документ.
7. Нажмите _Enter_.
8. Нажмите _Ctrl + X_, чтобы сохранить документ.
9. В командной строке введите: `/etc/init.d/networking restart`.
10. Нажмите _Enter_.
11. Закройте Терминал.
12. Привяжите свой IP-адрес (или выделенный IP, если у вас есть Командная подписка):
    - [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)

## Использовать dnsmasq

1. Установите dnsmasq, используя следующие команды:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Используйте следующие команды в dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Перезапустите сервис dnsmasq:

   `sudo service dnsmasq restart`

Готово! Ваше устройство успешно подключено к AdGuard DNS.

:::note Важно

Если вы увидите уведомление о том, что не подключены к AdGuard DNS, скорее всего, порт для dnsmasq занят другими службами. Используйте [эту инструкцию](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse), чтобы решить проблему.

:::

## Использовать обычный DNS

Если вы предпочитаете не использовать дополнительное программное обеспечение для настройки DNS, вы можете выбрать незашифрованный DNS. У вас есть два варианта: использовать связанные IP-адреса или выделенные IP-адреса:

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
