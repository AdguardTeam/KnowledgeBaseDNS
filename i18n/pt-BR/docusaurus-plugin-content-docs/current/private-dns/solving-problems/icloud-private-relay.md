---
title: Usando junto com o iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Quando você estiver usando o iCloud Private Relay, a dashboard do AdGuard DNS (e a [página de teste do AdGuard](https://adguard.com/test.html)) mostrará que você não está usando o AdGuard DNS nesse dispositivo.

![Dispositivo não conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Para corrigir esse problema, você precisa permitir que os sites do AdGuard vejam seu endereço de IP nas configurações do seu dispositivo.

- No iPhone ou iPad:

    1. Vá para `adguard-dns.io`

    1. Toque no botão **Configurações da Página**, depois toque em **Mostrar Endereço de IP**

        ![Configurações do iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Faça o mesmo para `adguard.com`

- No Mac:

    1. Vá para `adguard-dns.io`

    1. No Safari, escolha **Visualizar** → **Atualizar e Mostrar Endereço de IP**

    1. Faça o mesmo para `adguard.com`

Se você não conseguir ver a opção para permitir temporariamente que um site veja seu endereço de IP, atualize seu dispositivo para a versão mais recente do iOS, iPadOS ou macOS e tente novamente.

Agora seu dispositivo deve ser exibido corretamente no painel do AdGuard DNS:

![Dispositivo conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Lembre-se de que, uma vez que você desative o Private Relay para um site específico, seu provedor de rede também poderá ver qual site você está procurando.
