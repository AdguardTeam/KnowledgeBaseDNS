---
title: Gebruiken naast iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Wanneer je iCloud Private Relay gebruikt, zal het AdGuard DNS-dashboard (en de bijbehorende [AdGuard-testpagina](https://adguard.com/test.html)) laten zien dat je AdGuard DNS niet gebruikt op dat apparaat.

![Apparaat is niet verbonden](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Om dit probleem op te lossen, moet je AdGuard-websites jouw IP-adres laten zien in de instellingen van je apparaat.

- Op iPhone of iPad:

    1. Ga naar `adguard-dns.io`

    1. Tik op de knop **Pagina-instellingen** en tik vervolgens op **IP-adres tonen**

        ![iCloud Private Relay-instellingen *mobiel](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Herhaal dit voor `adguard.com`

- Op Mac:

    1. Ga naar `adguard-dns.io`

    1. Kies in Safari **Bekijken** → **Opnieuw laden en IP-adres weergeven**

    1. Herhaal dit voor `adguard.com`

If you can't see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Now your device should be displayed correctly in the AdGuard DNS dashboard:

![Device is connected](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you're browsing.
