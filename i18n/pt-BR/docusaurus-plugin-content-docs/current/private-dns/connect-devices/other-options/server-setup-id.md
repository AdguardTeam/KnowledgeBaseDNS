---
title: ID de configuração do servidor
sidebar_position: 6
---

:::info

This article covers a feature available in the AdGuard DNS mobile app. To try it yourself, download the AdGuard DNS app for [Android](https://agrd.io/android_dns) or [iOS](https://agrd.io/ios_dns).

:::

## O que é um ID de configuração do servidor?

Se você deseja conectar um dispositivo a um servidor específico e não quer criar manualmente cada dispositivo no painel de controle do site, pode usar o **ID de configuração do servidor**. Basta copiar o ID e usá-lo para se conectar pelo aplicativo AdGuard DNS. Dessa forma, o “dispositivo” será criado automaticamente ao conectar-se.

## Como conectar usando o ID de configuração do servidor

:::note

If you’re configuring AdGuard on multiple managed devices, consider using managed app configuration to automatically provide the server setup ID to each app. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Acesse _Painel de Controle_ → [_Servidores_](https://adguard-dns.io/dashboard/servers).
2. Selecione o servidor desejado.
3. Role a tela para baixo e clique em _Setup ID_.
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Copie o **ID de configuração**.
   ![Server setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Abra o aplicativo e cole o **ID de configuração**.
   ![Paste setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Escolha um nome para o dispositivo.
7. Clique em **Conectar**.
   ![Conectar \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Pronto! Agora você está conectado, e o dispositivo será criado automaticamente no painel de controle.

## Redefinindo o ID de configuração do servidor

Se você quiser desconectar todos os dispositivos que estão usando um ID de configuração específico, você pode redefini-lo. Para isso, siga estas etapas:

1. Vá para _Painel de controle_ → [_Servidores_](https://adguard-dns.io/dashboard/servers) e selecione o servidor desejado.
2. Deslize a tela para baixo e clique em _ID de configuração_.
3. Clique em _Redefinir ID de configuração_.

Após a reinicialização, o ID de configuração será alterado e todos os dispositivos que estavam usando o ID antigo serão desconectados do servidor.
