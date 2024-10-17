---
title: Android
sidebar_position: 2
---

Чтобы подключить устройство Android к AdGuard DNS, сначала добавьте его на _Dashboard_:

1. Перейдите в раздел _Панель управления_ и нажмите _Подключить новое устройство_.
2. В выпадающем меню _Тип устройства_ выберите Android.
3. Назовите устройство.
   ![Подключение устройства \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Используйте Блокировщик рекламы AdGuard (платная опция)

Приложение AdGuard позволяет использовать зашифрованный DNS, что делает его идеальным для настройки AdGuard DNS на вашем устройстве Android. Вы можете выбрать различные протоколы шифрования. Вместе с фильтрацией DNS вы также получите отличный блокировщик рекламы, который работает во всей системе.

1. Установите [приложение AdGuard](https://adguard.com/adguard-android/overview.html) на устройство, к которому вы хотите подключиться через AdGuard DNS.
2. Откройте приложение.
3. Нажмите на значок щита в меню внизу экрана.
   ![Иконка щита \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Нажмите «DNS-защита».
   ![DNS-защита \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Выберите _DNS-сервер_.
   ![DNS сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Прокрутите вниз до раздела «Пользовательские серверы» и нажмите _Добавить DNS-сервер_.
   ![Добавить DNS-сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Скопируйте один из следующих DNS-адресов и вставьте его в поле _Адреса сервера_ в приложении. Если вы не уверены, какой выбрать, выберите _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Пользовательский DNS-сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Нажмите _Добавить_.
9. Добавленный вами DNS-сервер появится внизу списка _Пользовательских серверов_. Чтобы его выбрать, нажмите на его название или на кнопку-переключатель рядом с ним.
   ![Выбрать DNS сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Нажмите _Сохранить и выбрать_.
    ![Сохранить и выбрать \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Используйте AdGuard VPN

Не все VPN-сервисы поддерживают зашифрованный DNS. Однако наш VPN это поддерживает, так что если вы нуждаетесь как в VPN, так и в частном DNS, AdGuard VPN — ваш выбор.

1. Установите [приложение AdGuard VPN](https://adguard-vpn.com/android/overview.html) на устройство, которое вы хотите подключить к AdGuard DNS.
2. Откройте приложение.
3. Нажмите на значок настроек внизу экрана.
   ![Значок настроек \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Откройте _Настройки приложения_.
   ![Настройки приложения \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Выберите _DNS-сервер_.
   ![DNS сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Прокрутите вниз и нажмите _Добавить пользовательский DNS-сервер_.
   ![Добавить DNS-сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Скопируйте один из следующих DNS-адресов и вставьте его в поле _DNS-сервера_ в приложении. Если вы не уверены, какой выбрать, выберите DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Пользовательский DNS-сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Нажмите _Сохранить и выбрать_.
   ![Добавить DNS-сервер \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Добавленный вами DNS-сервер появится внизу списка _Пользовательских DNS-серверов_.

Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Настройте Личный DNS вручную

Вы можете настроить свой DNS-сервер в настройках устройства. Обратите внимание, что устройства Android поддерживают только протокол DNS-over-TLS.

1. Откройте _Настройки_ → _Wi-Fi и интернет_ (или _Сеть и интернет_, в зависимости от версии ОС).
   ![Настройки \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Выберите _Расширенные_ и нажмите _Личный DNS_.
   ![Личный DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Выберите опцию _Имя хоста личного DNS-провайдера_ и введите адрес вашего личного сервера: `{Your_Device_ID}.d.adguard-dns.com`.
4. Нажмите _Сохранить_.
   ![Личный DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   Готово! Ваше устройство успешно подключено к AdGuard DNS.

## Настройка незашифрованного DNS

Если вы предпочитаете не использовать дополнительное программное обеспечение для настройки DNS, вы можете выбрать незашифрованный DNS. У вас есть два варианта: использовать привязанные IP или выделенные IP.

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
