---
title: DNS-over-HTTPS с аутентификацией
sidebar_position: 4
---

## Почему это полезно

DNS-over-HTTPS с аутентификацией позволяет задать логин пользователя и пароль для доступа к выбранному серверу.

Это помогает предотвратить несанкционированный доступ и повысить безопасность. Кроме того, можно ограничить использование других протоколов для конкретных профилей. Эта функция особенно полезна, если адрес вашего DNS-сервера известен другим. Добавив пароль, вы можете заблокировать доступ и убедиться, что только вы можете его использовать.

## Как настроить

:::note Совместимость

Эта функция поддерживается [AdGuard DNS Client](/dns-client/overview.md), а также [приложениями AdGuard](https://adguard.com/welcome.html).

:::

1. Откройте Панель управления.
2. Добавьте устройство или перейдите в настройки ранее созданного устройства.
3. Щелкните _Использовать адреса DNS-серверов_ и откройте раздел _Зашифрованные адреса DNS-серверов_.
4. Настройте DNS-over-HTTPS с аутентификацией по своему усмотрению.
5. Перенастройте свое устройство для использования этого сервера в AdGuard DNS Client или одном из приложений AdGuard.
6. Для этого скопируйте адрес зашифрованного сервера и вставьте его в настройки приложения AdGuard или AdGuard DNS Client.
    ![Копировать адрес \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Вы также можете запретить использование других протоколов.
    ![Запретить протоколы \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
