---
title: Utiliser avec le Relais privé iCloud
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Lorsque vous utilisez le Relais privé iCloud, le tableau de bord AdGuard DNS (et la [page de test AdGuard](https://adguard.com/test.html)) indiquera que vous n'utilisez pas AdGuard DNS sur cet appareil.

![Appareil non connecté](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Pour résoudre ce problème, vous devez autoriser les sites Web AdGuard à voir votre adresse IP dans les paramètres de votre appareil.

- Sur iPhone ou iPad :

    1. Allez sur `adguard-dns.io`

    1. Appuyez sur le bouton **Paramètres de la page**, puis appuyez sur **Afficher l'adresse IP**

        ![Paramètres du relais privé iCloud *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Répétez pour `adguard.com`

- Sur Mac :

    1. Allez sur `adguard-dns.io`

    1. Dans Safari, choisissez **Affichage** → **Actualiser et afficher l'adresse IP**

    1. Répétez pour `adguard.com`

Si vous ne voyez pas l'option pour autoriser temporairement un site Web à voir votre adresse IP, mettez à jour votre appareil vers la dernière version d'iOS, d'iPadOS ou de macOS, puis réessayez.

Maintenant, votre appareil devrait être affiché correctement dans le tableau de bord AdGuard DNS :

![L'appareil est connecté](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Gardez à l'esprit qu'une fois que vous désactivez le Relais privé pour un site Web spécifique, votre fournisseur de réseau pourra également voir quel site vous parcourez.
