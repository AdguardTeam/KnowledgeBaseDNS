---
title: macOS
sidebar_position: 4
---

Чтобы подключить устройство с macOS к AdGuard DNS, сначала добавьте его в _Dashboard_:

1. Перейдите в раздел _Панель управления_ и нажмите _Подключить новое устройство_.
2. В выпадающем меню _Тип устройства_ выберите macOS.
3. Назовите устройство.
   ![Подключение устройства \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Используйте Блокировщик рекламы AdGuard (платная опция)

Приложение AdGuard позволяет использовать зашифрованный DNS, что делает его идеальным для настройки AdGuard DNS на вашем устройстве с macOS. Вы можете выбрать различные протоколы шифрования. Вместе с фильтрацией DNS вы также получите отличный блокировщик рекламы, который работает во всей системе.

1. [Установите приложение](https://adguard.com/adguard-mac/overview.html) на устройстве, которое хотите подключить к AdGuard DNS.
2. Откройте приложение.
3. Нажмите на иконку в правом верхнем углу.
   ![Иконка защиты \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Выберите _Настройки..._.
   ![Настройки \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Нажмите на вкладку _DNS_ в верхнем ряду иконок.
   ![Вкладка DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Включите DNS-защиту, поставив галочку сверху.
   ![DNS-защита \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Нажмите _+_ в левом нижнем углу.
   ![Нажмите + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Скопируйте один из следующих DNS-адресов и вставьте его в поле _DNS-серверы_ в приложении. Если вы не уверены, что выбрать, выберите _DNS-over-HTTPS_.
   ![DoH сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Создать сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Нажмите _Сохранить и выбрать_.
   ![Сохранить и выбрать \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Ваш только что созданный сервер должен появиться внизу списка.
    ![Поставщики \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Используйте AdGuard VPN

Не все VPN-сервисы поддерживают зашифрованный DNS. Однако наш VPN это поддерживает, так что если вы нуждаетесь как в VPN, так и в частном DNS, AdGuard VPN — ваш выбор.

1. Установите приложение [AdGuard VPN](https://adguard-vpn.com/mac/overview.html) на устройстве, которое хотите подключить к AdGuard DNS.
2. Откройте приложение AdGuard VPN.
3. Откройте _Настройки_ → _Настройки приложения_ → _DNS-серверы_ → _Добавить пользовательский сервер_.
   ![Добавить пользовательский сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Скопируйте один из следующих DNS-адресов и вставьте его в текстовое поле _Адреса DNS-сервера_. Если вы не уверены, какой вариант выбрать, выберите DNS-over-HTTPS.
   ![DNS-серверы \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Нажмите _Сохранить и выбрать_.
6. Добавленный вами DNS-сервер появится внизу списка _Пользовательских DNS-серверов_.
   ![Пользовательские DNS-серверы \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Использовать профиль конфигурации

Профиль macOS устройства, называемый также «профиль конфигурации» компанией Apple, — это XML-файл, подписанный сертификатом, который можно установить на устройство вручную или развернуть с помощью решения MDM. Также он позволяет настроить частный AdGuard DNS на вашем устройстве.

:::note Важно

Если вы используете VPN, профиль конфигурации будет игнорироваться.

:::

1. На устройстве, которое хотите подключить к AdGuard DNS, скачайте профиль конфигурации.
2. Выберите меню Apple → _Системные настройки_, нажмите _Защита и безопасность_ в боковой панели, затем нажмите _Профили_ справа (возможно, потребуется прокрутить вниз).
   ![Профиль загружен \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. В разделе _Загрузки_ дважды щёлкните профиль.
   ![Загрузки \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Просмотрите содержимое профиля и нажмите кнопку _Установить_.
   ![Установить \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Введите пароль администратора и нажмите _OK_.

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Настройка незашифрованного DNS

Если вы предпочитаете не использовать дополнительное программное обеспечение для настройки DNS, вы можете выбрать незашифрованный DNS. У вас есть два варианта: использовать привязанные IP или выделенные IP.

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
