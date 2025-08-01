---
title: Привязанные IP-адреса
sidebar_position: 3
---

## Что такое привязанные IP-адреса и почему они полезны

Не все устройства поддерживают зашифрованные DNS-протоколы. В этом случае стоит рассмотреть возможность настройки незашифрованного DNS. Например, вы можете использовать **привязанный IP-адрес**. Единственным требованием к привязанному IP-адресу является то, что это должен быть резидентный IP.

:::note

Резидентный IP-адрес — это IP-адрес, назначенный устройству, подключённому к резидентному интернет-провайдеру. Как правило, он связан с физическим местоположением и выделяется для отдельных домов или квартир. Люди используют резидентные IP-адреса для повседневной онлайн-деятельности, такой как просмотр веб-страниц, отправка почты, использование социальных сетей или стриминг контента.

:::

Иногда резидентный IP-адрес уже может быть задействован, и при попытке подключения к нему, AdGuard DNS предотвратит соединение.

![Привязанный IPv4-адрес \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)

Если это произошло, обратитесь в поддержку по адресу [support@adguard-dns.io](mailto:support@adguard-dns.io), и вам помогут с правильными настройками конфигурации.

## Как настроить привязанный IP

Следующая инструкция объясняет, как подключиться к устройству через **привязанный IP-адрес**:

1. Откройте Панель управления.
2. Добавьте новое устройство или откройте настройки ранее подключённого устройства.
3. Перейдите в раздел _Использовать адреса DNS-серверов_.
4. Откройте _Адреса незашифрованных DNS-серверов_ и подключите привязанный IP.

    ![Привязанный IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Динамический DNS: зачем это нужно

Каждый раз, когда устройство подключается к сети, оно получает новый динамический IP-адрес. Когда устройство отсоединяется, DHCP-сервер может назначить освободившийся IP-адрес другому устройству в сети. Это означает, что динамические IP-адреса меняются часто и непредсказуемо. Следовательно, вам нужно будет обновлять настройки всякий раз, когда перезагружается устройство или меняется сеть.

Чтобы автоматически обновлять привязанный IP-адрес, вы можете использовать DNS. AdGuard DNS будет регулярно проверять IP-адрес вашего домена DDNS и связывать его с вашим сервером.

:::note

Динамический DNS (DDNS) — это служба, которая автоматически обновляет записи DNS при каждом изменении вашего IP-адреса. Она преобразует сетевые IP-адреса в легко читаемые доменные имена для удобства. Информация, связывающая имя с IP-адресом, хранится в таблице на DNS-сервере. DDNS обновляет эти записи при любых изменениях IP-адресов.

:::

Таким образом, вам не придётся вручную обновлять привязанный IP-адрес каждый раз, когда он изменяется.

## Динамический DNS: как настроить

1. Сначала вам нужно проверить, поддерживает ли ваш роутер DDNS:

    - Перейдите в _Настройки роутера_ → _Сеть_
    - Найдите раздел DDNS или _Dynamic DNS_
    - Перейдите в него и убедитесь, что настройки действительно поддерживаются. _Это только пример того, как это может выглядеть, настройки могут различаться в зависимости от вашего роутера_

    ![Поддержка DDNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)

2. Зарегистрируйте домен через популярный сервис, такой как [Dyn](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) или любой другой предпочитаемый вами поставщик DDNS.

3. Введите домен в настройках роутера и синхронизируйте конфигурации.

4. Откройте настройки _Привязанного IP-адреса_, затем перейдите в _Расширенные настройки_ и нажмите _Настроить Dyn_.

5. Введите домен, который вы зарегистрировали ранее, и нажмите _Настроить Dyn_.

    ![Настроить Dyn \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Готово, вы успешно настроили DDNS!

## Автоматизация обновления привязанного IP-адреса через скрипт

### На Windows

Самый простой способ — использовать Планировщик задач:

1. Создайте задачу:
    - Откройте Планировщик задач.
    - Создайте новую задачу.
    - Установите триггер на запуск каждые 5 минут.
    - Выберите _Запуск программы_ в качестве действия.
2. Выберите программу:
    - В поле _Программа или скрипт_ введите `powershell`
    - В поле _Добавить аргументы_ введите:
        - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Сохраните задачу.

### На macOS и Linux

На macOS и Linux самый простой способ — использовать `cron`:

1. Откройте crontab:
    - В терминале выполните `crontab -e`.
2. Добавьте задачу:
    - Добавьте следующую строку:
        `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
    - Эта задача будет выполняться каждые 5 минут
3. Сохраните crontab.

:::note Важно

- Убедитесь, что на macOS и Linux установлен `curl`.
- Не забудьте скопировать адрес из настроек и заменить значения `ServerID` и `UniqueKey`.
- Если требуется более сложная логика или обработка результатов запросов, рассмотрите возможность использования скриптов (например, Bash, Python) в сочетании с планировщиком задач или cron.

:::
