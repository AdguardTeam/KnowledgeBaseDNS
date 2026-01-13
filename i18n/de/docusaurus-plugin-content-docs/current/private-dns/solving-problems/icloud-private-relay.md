---
title: Verwendung neben iCloud Privat-Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Gerät ist nicht verbunden](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- Auf iPhone oder iPad:

    1. Besuchen Sie `adguard-dns.io`

    1. Tippen Sie auf die Schaltfläche **Seiteneinstellungen** und dann auf **IP-Adresse anzeigen**

        ![iCloud Private Relay-Einstellungen *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Wiederholen Sie dies für `adguard.com`

- Unter Mac:

    1. Besuchen Sie `adguard-dns.io`

    1. In Safari wählen Sie **Ansicht** → **Neu laden und IP-Adresse anzeigen**

    1. Wiederholen Sie dies für `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Jetzt sollte Ihr Gerät in der AdGuard DNS-Übersicht korrekt angezeigt werden:

![Gerät ist verbunden](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
