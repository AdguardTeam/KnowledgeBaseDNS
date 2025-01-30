---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Игровые консоли не поддерживают зашифрованный DNS, но они отлично подходят для настройки Публичного AdGuard DNS или Личного AdGuard DNS через привязанный IP-адрес.

Скорее всего, ваш роутер поддерживает использование зашифрованных DNS-серверов, поэтому вы всегда можете настроить Личный AdGuard DNS на нём и подключить к нему вашу игровую консоль.

[Как настроить ваш роутер](/private-dns/connect-devices/routers/routers.md)

## Подключиться к AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP.

### For PlayStation 4

1. Turn on your PS4 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Use a LAN Cable_ → _Easy_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. В поле «DNS-сервер» введите один из следующих адресов DNS-сервера:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

### For PlayStation 5

1. Turn on your PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Set Up Wired LAN_ → _Connect_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. В поле «DNS-сервер» введите один из следующих адресов DNS-сервера:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

Предпочтительнее использовать привязанный IP (или выделенный IP, если у вас подписка Team):

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
