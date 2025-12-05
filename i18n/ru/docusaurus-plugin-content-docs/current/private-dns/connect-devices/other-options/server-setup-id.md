---
title: ID установки сервера
sidebar_position: 6
---

:::info

This article covers a feature available in the AdGuard DNS mobile app. To try it yourself, download the AdGuard DNS app for [Android](https://agrd.io/android_dns) or [iOS](https://agrd.io/ios_dns).

:::

## Что такое ID установки сервера?

Если вы хотите подключить устройство к серверу и не хотите вручную добавлять каждое устройство на Панели управления на сайте, вы можете использовать **ID установки сервера**. Просто возьмите ID и используйте его для подключения через приложение AdGuard DNS. Таким образом, «устройство» будет добавлено автоматически при подключении.

## Как подключиться, используя ID установки сервера

:::note

If you’re configuring AdGuard on multiple managed devices, consider using managed app configuration to automatically provide the server setup ID to each app. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Перейдите на _Панель управления_ → [_Серверы_](https://adguard-dns.io/dashboard/servers).
2. Выберите нужный сервер.
3. Прокрутите вниз и нажмите _ID установки_.
   ![ID установки \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Скопируйте **ID установки**.
   ![ID установки сервера \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Откройте приложение и вставьте **ID установки**.
   ![Вставить ID установки сервера \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Выберите название устройства.
7. Нажмите **Подключиться**.
   ![Подключиться \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Готово! Теперь вы подключены, и устройство будет автоматически добавлено на Панель управления.

## Сброс ID установки сервера

Если вы хотите отключить все устройства, использующие определённый ID установки, вы можете сбросить его. Для этого выполните следующие шаги:

1. Перейдите на _Панель управления_ → [_Серверы_](https://adguard-dns.io/dashboard/servers) и выберите нужный сервер.
2. Прокрутите вниз и нажмите _ID установки_.
3. Нажмите _Сбросить ID установки_.

После сброса ID установки изменится, и все устройства, которые использовали старый ID, будут отключены от сервера.
