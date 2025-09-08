---
title: Выделенные IP-адреса
sidebar_position: 2
---

## Что такое выделенные IP-адреса?

Выделенные IPv4-адреса доступны пользователям с подписками Team и Enterprise, в то время как связанные IP-адреса доступны всем.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Выделенные IP-адреса намного безопаснее и проще в управлении. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## Зачем вам нужен выделенный IP-адрес?

К сожалению, технические характеристики подключаемого устройства не всегда позволяют настроить зашифрованный сервер Личного AdGuard DNS. В этом случае вам придется использовать стандартный незашифрованный DNS. Есть два способа настроить AdGuard DNS: [использование связанных IP-адресов](/private-dns/connect-devices/other-options/linked-ip.md) и использования выделенных IP-адресов.

Выделенные IP-адреса, как правило, более стабильный вариант. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. С выделенными IP-адресами вы получаете IP-адрес, который используется исключительно вами, и все запросы будут учитываться для вашего устройства.

Недостаток в том, что вы можете начать получать нерелевантный трафик (сканеры, боты), как это всегда происходит с общедоступными DNS-резолверами. Вам может потребоваться использовать [настройки доступа](/private-dns/server-and-settings/access.md), чтобы ограничить трафик ботов.

Ниже приведена инструкция по подключению выделенного IP-адреса к устройству:

## Подключение AdGuard DNS с использованием выделенных IP-адресов

1. Откройте Панель управления.
2. Добавьте новое устройство или откройте настройки ранее созданного устройства.
3. Выберите _Использовать адреса серверов_.
4. Далее откройте _Адреса незашифрованных DNS-серверов_.
5. Выберите сервер, который вы хотите использовать.
6. Для привязки выделенного IPv4-адреса нажмите _Назначить_.
7. Если вы хотите использовать выделенный IPv6-адрес, нажмите _Копировать_.
   ![Копировать адрес \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Скопируйте и вставьте выбранный выделенный адрес в настройки устройства.
