---
title: ID di configurazione del server
sidebar_position: 6
---

:::info

This article covers a feature available in the AdGuard DNS mobile app. To try it yourself, download the AdGuard DNS app for [Android](https://agrd.io/android_dns) or [iOS](https://agrd.io/ios_dns).

:::

## Che cos'è un ID di configurazione del server?

Se vuoi connettere un dispositivo a un server specifico e non vuoi creare manualmente ogni dispositivo nel panello di controllo sul sito web, puoi utilizzare l'**ID di configurazione del server**. È sufficiente prendere l'ID e utilizzarlo per connettersi tramite l'app AdGuard DNS. In questo modo, il "dispositivo" verrà creato automaticamente al momento della connessione.

## Come connettersi utilizzando l'ID di configurazione del server

:::note

If you’re configuring AdGuard on multiple managed devices, consider using managed app configuration to automatically provide the server setup ID to each app. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Vai al _Panello di controllo_ → [_Server_](https://adguard-dns.io/dashboard/servers).
2. Seleziona il server richiesto.
3. Scorri verso il basso e fai clic su _ID configurazione_.
   ![ID di configurazione \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Copia l'**ID di configurazione**.
   ![ID di configurazione server \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Apri l'app e incolla l'**ID di configurazione**.
   ![Incolla ID di configurazione \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Scegli un nome per il dispositivo.
7. Clicca **Connetti**.
   ![Connetti \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Fatto! Ora sei connesso e il dispositivo verrà creato automaticamente nel panello di controllo.

## Ripristino dell'ID di configurazione del server

Se vuoi disconnettere tutti i dispositivi che utilizzano un ID di configurazione specifico, puoi reimpostarlo. Per farlo, segui questi passaggi:

1. Vai sul _Panello di controllo_ → [_Server_](https://adguard-dns.io/dashboard/servers) e seleziona il server desiderato.
2. Scorri verso il basso e fai clic su _ID configurazione_.
3. Fare clic su _Reimposta ID configurazione_.

Dopo il ripristino, l'ID di configurazione cambierà e tutti i dispositivi che utilizzavano il vecchio ID verranno disconnessi dal server.
