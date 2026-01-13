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

![Частный узел iOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

На Mac:

1. Откройте *Системные настройки* и нажмите на своё имя или на *Apple ID*.
1. Выберите *iCloud* → *Частный узел*.
1. Отключите функцию Частный узел.
1. Нажмите *Готово*.

![Частный узел macOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Расширенная защита от отслеживания действий и цифровых отпечатков (Safari, начиная с iOS 17)

После обновления iOS 17 в настройках Safari может быть включена функция Расширенная защита от отслеживания действий и цифровых отпечатков, которая потенциально может иметь эффект, аналогичный Частному узлу iCloud, обходя настройки AdGuard DNS.

Вот как можно отключить Расширенную защиту от отслеживания действий и цифровых отпечатков:

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Please follow the steps below:

1. Open *Settings* on your iPhone.
1. Tap *Wi-Fi*.
1. Find and tap the name of the Wi-Fi network you are currently connected to.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
