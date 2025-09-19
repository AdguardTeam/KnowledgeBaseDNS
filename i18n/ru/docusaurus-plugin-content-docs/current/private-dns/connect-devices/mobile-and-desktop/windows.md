---
title: Windows
sidebar_position: 5
---

Чтобы подключить Windows-устройство к AdGuard DNS, сначала добавьте его в _Панель управления_:

1. Перейдите в раздел _Панель управления_ и нажмите _Подключить новое устройство_.
2. В выпадающем меню _Тип устройства_ выберите Windows.
3. Назовите устройство.
   ![Подключение устройства \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Вы можете настроить это через приложения [AdGuard](#use-adguard-ad-blocker-paid-option) или [AdGuard VPN](#use-adguard-vpn), в [настройках Windows](#configure-via-windows-settings) или с помощью [AdGuard DNS Client](#use-adguard-dns-client).

## Используйте Блокировщик рекламы AdGuard (платная опция)

Приложение AdGuard позволяет использовать зашифрованный DNS, что делает его идеальным для настройки AdGuard DNS на вашем устройстве Windows. Вы можете выбрать различные протоколы шифрования. Вместе с фильтрацией DNS вы также получите отличный блокировщик рекламы, который работает во всей системе.

1. [Установите приложение](https://adguard.com/adguard-windows/overview.html) на устройство, которое хотите подключить к AdGuard DNS.
2. Откройте приложение.
3. Нажмите _Настройки_ в верхней части главного экрана приложения.
   ![Настройки \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Выберите вкладку _DNS-защита_ в меню слева.
   ![DNS-защита \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Нажмите на выбранный DNS-сервер.
   ![DNS-сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Прокрутите вниз и нажмите _Добавить свой DNS-сервер_.
   ![Добавить пользовательский DNS-сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. В поле DNS-серверы вставьте один из следующих адресов. Если не уверены, какой адрес предпочтительнее, выберите DNS-over-HTTPS.
   ![DoH сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Создать сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Нажмите _Сохранить и выбрать_.
   ![Сохранить и выбрать \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Добавленный вами DNS-сервер появится внизу списка _Пользовательских DNS-серверов_.
   ![Пользовательские DNS-серверы \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Используйте AdGuard VPN

Не все VPN-сервисы поддерживают зашифрованный DNS. Однако наш VPN это поддерживает, так что если вы нуждаетесь как в VPN, так и в частном DNS, AdGuard VPN — ваш выбор.

1. Установите AdGuard VPN.
2. Откройте приложение и нажмите _Настройки_.
3. Выберите _Настройки приложения_.
   ![Настройки приложения \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Прокрутите вниз и выберите _DNS-серверы_.
   ![DNS-серверы \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Нажмите _Добавить DNS-сервер_.
   ![Добавить свой DNS-сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. В поле _Адрес сервера_ вставьте один из следующих адресов. Если не уверены, какой адрес предпочтительнее, выберите DNS-over-HTTPS.
   ![DoH сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Создать сервер \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Нажмите _Сохранить и выбрать_.
   ![Сохранить и выбрать \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Настроить через параметры Windows

:::note

Доступно только на Windows 11.

:::

1. В строке _Поиск_ на панели задач введите **настройки Ethernet** или **настройки Wi-Fi** в зависимости от вашего типа подключения.
   Щёлкните по сети (Wi-Fi ID или Ethernet), которую вы хотите настроить.
   ![Поиск \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Прокрутите страницу до пункта «Назначение DNS-сервера» и нажмите «Изменить».
   ![Назначение DNS-сервера \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Выберите ручную настройку DNS.
4. Переведите переключатель IPv4 в положение _Включено_.
5. Введите следующие адреса DNS-серверов:
   - Предпочтительный DNS: `94.140.14.49`
   - Альтернативный DNS: `94.140.14.59`
6. Переведите _шаблон DNS-over-HTTPS_ в режим _Включено (ручной шаблон)_ и введите свой личный DNS-адрес. Вы можете найти его в панели управления в разделе _Настройки сервера_ → _Устройства_ → _Настройки устройств_ → DNS-over-HTTPS.
7. Нажмите _Сохранить_. Вот и всё — ваше устройство теперь подключено к AdGuard DNS!
   ![Сохранить настройки DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## Использовать AdGuard DNS Client

AdGuard DNS Client — это универсальный кроссплатформенный консольный инструмент, который позволяет подключиться к AdGuard DNS, используя зашифрованные DNS-протоколы.

Более подробно можно ознакомиться [в другой статье](/dns-client/overview/).

## Настройка незашифрованного DNS

Если вы предпочитаете не использовать дополнительное программное обеспечение для настройки DNS, вы можете выбрать незашифрованный DNS. У вас есть два варианта: использовать привязанные IP или выделенные IP.

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
