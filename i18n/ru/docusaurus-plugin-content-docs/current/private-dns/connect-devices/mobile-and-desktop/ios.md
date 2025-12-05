---
title: iOS
sidebar_position: 3
---

Чтобы подключить iOS-устройство к AdGuard DNS, сначала добавьте его на _Панель управления_:

1. Перейдите в раздел _Панель управления_ и нажмите _Подключить новое устройство_.
2. В выпадающем меню _Тип устройства_ выберите iOS.
3. Назовите устройство.
   ![Подключение устройства \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Через AdGuard DNS

Приложение AdGuard DNS предназначено для базовой защиты на уровне DNS — блокировки рекламы, трекеров и вредоносных сайтов. Если вам не нужен полный набор функций, которые предлагают Блокировщик рекламы AdGuard или AdGuard VPN, этот вариант может стать для вас оптимальным.

Чтобы настроить устройство:

1. [Скачайте приложение AdGuard DNS](https://agrd.io/ios_dns).
2. Перейдите на Панель управления AdGuard DNS по адресу [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
3. Click _Connect device_ on the _Home_ tab.
4. Выберите тип устройства и дайте ему название, затем нажмите _Далее_.
5. Разверните раздел _Через приложения AdGuard_.

![Через приложения AdGuard \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps-ru.png)

1. В разделе _Через AdGuard DNS_ выберите один из следующих способов настройки:

   - Нажмите _Настроить_ на устройстве, которое хотите защитить.
   - Отсканируйте QR-код с помощью устройства, которое хотите защитить.
   - Скопируйте ID установки и вставьте его в приложение.

     ![ID установки \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDiOS.png)

2. Нажмите _Продолжить_ → _Подключиться_.

![Подключиться \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. Ваше устройство успешно подключено к AdGuard DNS. Чтобы запустить защиту, достаточно нажать кнопку _Включить_.

![Включить \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/protect-ru.png)

1. При использовании протокола на основе VPN сначала нужно разрешить создание VPN-профиля. Для этого перейдите на главную страницу приложения, нажмите _Включить_ и следуйте инструкции.

2. Если вы предпочитаете использовать нативный DNS, перейдите в _Настройки_ → _Основные_ → _VPN и управление устройством_ → _DNS_ и включите AdGuard DNS.

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Используйте Блокировщик рекламы AdGuard (платная опция)

Приложение AdGuard позволяет использовать зашифрованный DNS, что делает его идеальным для настройки AdGuard DNS на вашем устройстве iOS. Вы можете выбрать различные протоколы шифрования. Вместе с фильтрацией DNS вы также получите отличный блокировщик рекламы, который работает во всей системе.

1. Установите [приложение AdGuard](https://adguard.com/adguard-ios/overview.html) на устройство, которое хотите подключить к AdGuard DNS.
2. Откройте приложение AdGuard.
3. Выберите вкладку _Защита_ в нижнем меню.
   ![Иконка щита \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Убедитесь, что _DNS-защита_ включена, а затем нажмите на неё. Выберите _DNS-сервер_.
   ![Защита DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS-сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Прокрутите вниз и нажмите _Добавить пользовательский DNS-сервер_.
   ![Добавить DNS сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Скопируйте один из приведённых ниже адресов DNS и вставьте его в поле _Адрес DNS-сервера_ в приложении. Если вы не уверены, какой выбрать, выберите DNS-over-HTTPS.
   ![Копирование адреса сервера \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Вставка адреса сервера \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Нажмите _Сохранить и выбрать_.
   ![Сохранить и выбрать \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Ваш только что созданный сервер должен появиться внизу списка.
   ![Пользовательский сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Используйте AdGuard VPN

Не все VPN-сервисы поддерживают зашифрованный DNS. Однако наш VPN это поддерживает, так что если вы нуждаетесь как в VPN, так и в частном DNS, AdGuard VPN — ваш выбор.

1. Установите [приложение AdGuard VPN](https://adguard-vpn.com/ios/overview.html) на устройство, которое хотите подключить к AdGuard DNS.
2. Откройте приложение AdGuard VPN.
3. Нажмите на иконку шестерёнки в правом нижнем углу экрана.
   ![Иконка шестерёнки \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Откройте _Основные_.
   ![Основные настройки \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Выберите _DNS-сервер_.
   ![DNS-сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Прокрутите вниз до _Добавить пользовательский DNS-сервер_.
   ![Добавить сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Скопируйте один из следующих DNS-адресов и вставьте его в текстовое поле _Адреса DNS-сервера_. Если вы не уверены, что выбрать, выберите _DNS-over-HTTPS_.
   ![Сервер DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Пользовательский DNS-сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Нажмите _Сохранить_.
   ![Сохранить сервер \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Ваш только что созданный сервер появится в разделе _Пользовательские DNS-серверы_.
   ![Пользовательские серверы \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Использовать профиль конфигурации

Профиль устройства iOS, также называемый «профиль конфигурации» Apple, — это подписанный сертификатом XML-файл, который можно установить вручную на устройстве iOS или развернуть с помощью решения MDM. Также он позволяет настроить частный AdGuard DNS на вашем устройстве.

:::note Важно

Если вы используете VPN, профиль конфигурации будет игнорироваться.

:::

1. Скачайте профиль конфигурации.
2. Откройте настройки.
3. Нажмите _Профиль загружен_.
   ![Профиль загружен \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Нажмите _Установить_ и следуйте инструкциям на экране.
   ![Установить \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Настройка незашифрованного DNS

Если вы предпочитаете не использовать дополнительное программное обеспечение для настройки DNS, вы можете выбрать незашифрованный DNS. Есть два варианта: использовать связанные IP-адреса или выделенные IP-адреса.

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
