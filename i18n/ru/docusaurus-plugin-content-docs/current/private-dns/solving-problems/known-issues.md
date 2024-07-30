---
title: Known issues
sidebar_position: 1
---

After setting up AdGuard DNS, some users may find that it doesn’t work properly: they see a message that their device is not connected to AdGuard DNS and the requests from that device are not displayed in the Query log. This can happen because of certain hidden settings in your browser or operating system. Let’s look at several common issues and their solutions.

:::tip

You can check the status of AdGuard DNS on the [test page](https://adguard.com/test.html).

:::

## Chrome’s secure DNS settings

If you’re using Chrome and you don’t see any requests in your AdGuard DNS dashboard, this may be because Chrome uses its own DNS server. Here’s how you can disable it:

1. Open Chrome’s settings.
1. Navigate to *Privacy and security*.
1. Select *Security*.
1. Scroll down to *Use secure DNS*.
1. Disable the feature.

![Chrome’s Use secure DNS feature](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you've set it up correctly.

## iCloud Private Relay (Safari, macOS, and iOS)

If you enable iCloud Private Relay in your device settings, Safari will use Apple’s DNS addresses, which will override the AdGuard DNS settings.

Вот как можно отключить функцию iCloud Private Relay на iPhone:

1. Откройте *Настройки* и коснитесь своего имени.
1. Выберите *iCloud* → *Частный узел*.
1. Отключите функцию Частный узел.

![Частный узел iOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

На Mac:

1. Open *System Settings* and click your name or *Apple ID*.
1. Выберите *iCloud* → *Частный узел*.
1. Отключите функцию Частный узел.
1. Нажмите *Готово*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Advanced Tracking and Fingerprinting Protection (Safari, starting from iOS 17)

После обновления iOS 17 в настройках Safari может быть включена функция Расширенная защита от отслеживания действий и цифровых отпечатков, которая потенциально может иметь эффект, аналогичный Частному узлу iCloud, обходя настройки AdGuard DNS.

Here’s how you can disable Advanced Tracking and Fingerprinting Protection:

1. Откройте *Настройки* и прокрутите вниз до *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
