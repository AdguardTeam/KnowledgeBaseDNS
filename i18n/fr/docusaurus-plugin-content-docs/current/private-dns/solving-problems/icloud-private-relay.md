---
title: Utiliser avec le Relais privé iCloud
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Appareil non connecté](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- Sur iPhone ou iPad :

    1. Allez sur `adguard-dns.io`

    1. Appuyez sur le bouton **Paramètres de la page**, puis appuyez sur **Afficher l'adresse IP**

        ![Paramètres du relais privé iCloud *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Répétez pour `adguard.com`

- Sur Mac :

    1. Allez sur `adguard-dns.io`

    1. Dans Safari, choisissez **Affichage** → **Actualiser et afficher l'adresse IP**

    1. Répétez pour `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Maintenant, votre appareil devrait être affiché correctement dans le tableau de bord AdGuard DNS :

![L'appareil est connecté](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
