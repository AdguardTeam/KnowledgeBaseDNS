---
title: Известные проблемы
sidebar_position: 1
---

После настройки AdGuard DNS некоторые пользователи могут обнаружить, что он не работает должным образом: они видят сообщение о том, что их устройство не подключено к AdGuard DNS, а запросы с этого устройства не отображаются в журнале запросов. Это может произойти из-за скрытых настроек в браузере или операционной системе. Давайте рассмотрим несколько распространённых проблем и их решения.

:::tip

Проверить состояние AdGuard DNS можно на тестовой странице [](https://adguard.com/test.html).

:::

## Настройки безопасного DNS в Chrome

Если вы используете Chrome и не видите никаких запросов на панели управления AdGuard DNS, это может быть связано с тем, что Chrome использует собственный DNS-сервер. Вот как его можно отключить:

1. Откройте настройки Chrome.
1. Перейдите в *Конфиденциальность и безопасность*.
1. Выберите *Безопасность*.
1. Прокрутите страницу вниз до *Использовать безопасный DNS-сервер*.
1. Отключите эту функцию.

![Функция «Использовать безопасный DNS-сервер» в Chrome](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Если вы отключите собственные DNS-настройки в Chrome, браузер будет использовать DNS, указанный в вашей операционной системе, который должен быть AdGuard DNS, если вы правильно его настроили.

## Частный узел iCloud (Safari, macOS и iOS)

Если в настройках устройства включена функция Частный узел iCloud, Safari будет использовать DNS-адреса Apple, которые переопределят настройки AdGuard DNS.

Вот как можно отключить функцию iCloud Private Relay на iPhone:

1. Откройте *Настройки* и коснитесь своего имени.
1. Выберите *iCloud* → *Частный узел*.
1. Отключите функцию Частный узел.

![Частный узел iOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

На Mac:

1. Откройте *Системные настройки* и нажмите на своё имя или на *Apple ID*.
1. Выберите *iCloud* → *Частный узел*.
1. Отключите функцию Частный узел.
1. Нажмите *Готово*.

![Частный узел macOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Расширенная защита от отслеживания действий и цифровых отпечатков (Safari, начиная с iOS 17)

После обновления iOS 17 в настройках Safari может быть включена функция Расширенная защита от отслеживания действий и цифровых отпечатков, которая потенциально может иметь эффект, аналогичный Частному узлу iCloud, обходя настройки AdGuard DNS.

Вот как можно отключить Расширенную защиту от отслеживания действий и цифровых отпечатков:

1. Откройте *Настройки* и прокрутите вниз до *Safari*.
1. Нажмите *Дополнения*.
1. Отключите *Расширенную защиту от отслеживания действий и цифровых отпечатков*.

![Расширенная защита от отслеживания действий и цифровых отпечатков на iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
