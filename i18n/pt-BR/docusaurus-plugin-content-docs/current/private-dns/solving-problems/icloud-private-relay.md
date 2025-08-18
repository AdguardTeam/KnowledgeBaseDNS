---
title: Usando junto com o iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Dispositivo não conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- No iPhone ou iPad:

    1. Vá para `adguard-dns.io`

    1. Toque no botão **Configurações da Página**, depois toque em **Mostrar Endereço de IP**

        ![Configurações do iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Faça o mesmo para `adguard.com`

- No Mac:

    1. Vá para `adguard-dns.io`

    1. No Safari, escolha **Visualizar** → **Atualizar e Mostrar Endereço de IP**

    1. Faça o mesmo para `adguard.com`

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Agora seu dispositivo deve ser exibido corretamente no painel do AdGuard DNS:

![Dispositivo conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
