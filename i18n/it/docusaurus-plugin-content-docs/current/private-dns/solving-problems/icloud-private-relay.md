---
title: Utilizzo insieme a iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Il dispositivo non è connesso](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- Su iPhone o iPad:

    1. Vai a `adguard-dns.io`

    1. Tocca il pulsante delle **Impostazioni della pagina**, quindi tocca su **Mostra Indirizzo IP**

        ![Impostazioni iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Ripeti per `adguard.com`

- Su Mac:

    1. Vai a `adguard-dns.io`

    1. Su Safari, scegli **Visualizza** → **Ricarica e mostra indirizzo IP**

    1. Ripeti per `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Ora, il tuo dispositivo dovrebbe essere mostrato correttamente nel pannello di controllo di AdGuard DNS:

![Il dispositivo è connesso](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
