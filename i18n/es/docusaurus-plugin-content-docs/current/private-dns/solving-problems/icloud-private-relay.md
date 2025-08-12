---
title: Usar junto con iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![El dispositivo no está conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- En iPhone o iPad:

    1. Ve a `adguard-dns.io`

    1. Toca el botón **Configuración de página**, luego toca **Mostrar dirección IP**

        ![Configuración de iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Repite para `adguard.com`

- En Mac:

    1. Ve a `adguard-dns.io`

    1. En Safari, elige **Ver** → **Recargar y Mostrar dirección IP**

    1. Repite para `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Ahora tu dispositivo debería mostrarse correctamente en el dashboard de AdGuard DNS:

![El dispositivo está conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
