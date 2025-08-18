---
title: Anvendelse sammen med iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Enhed er ikke tilsluttet](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- iPhone eller iPad:

    1. Gå til `adguard-dns.io`

    1. Tryk på knappen **Sideindstillinger**, og tryk dernæst på **Vis IP-adresse**

        ![iCloud Private Relay-indstillinger *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Gentag for `adguard.com`

- Mac:

    1. Gå til `adguard-dns.io`

    1. I Safari vælges **Vis** → **Genindlæs og vis IP-adresse**

    1. Gentag for `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Nu skulle enheden blive vist korrekt i AdGuard DNS-kontrolpanelet:

![Enhed er tilsluttet](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
