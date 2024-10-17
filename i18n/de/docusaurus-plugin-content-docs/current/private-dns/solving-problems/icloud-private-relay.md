---
title: Verwendung neben iCloud Privat-Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Wenn Sie iCloud Privat-Relay verwenden, zeigt die AdGuard DNS-Übersicht (und die zugehörige [AdGuard-Testseite](https://adguard.com/test.html)), dass Sie AdGuard DNS auf diesem Gerät nicht verwenden.

![Gerät ist nicht verbunden](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Um dieses Problem zu beheben, müssen Sie in den Einstellungen Ihres Geräts festlegen, dass AdGuard-Websites Ihre IP-Adresse erfassen dürfen.

- Auf iPhone oder iPad:

    1. Besuchen Sie `adguard-dns.io`

    1. Tippen Sie auf die Schaltfläche **Seiteneinstellungen** und dann auf **IP-Adresse anzeigen**

        ![iCloud Private Relay-Einstellungen *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Wiederholen Sie dies für `adguard.com`

- Unter Mac:

    1. Besuchen Sie `adguard-dns.io`

    1. In Safari, choose **View** → **Reload and Show IP Address**

    1. Wiederholen Sie dies für `adguard.com`

If you can't see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Jetzt sollte Ihr Gerät in der AdGuard DNS-Übersicht korrekt angezeigt werden:

![Gerät ist verbunden](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Beachten Sie, dass Ihr Netzbetreiber nach der Deaktivierung von Private Relay für eine bestimmte Website auch erkennen kann, auf welcher Website Sie surfen.
