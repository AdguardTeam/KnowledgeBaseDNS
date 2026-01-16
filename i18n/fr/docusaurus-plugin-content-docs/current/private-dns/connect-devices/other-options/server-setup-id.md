---
title: ID de configuration du serveur
sidebar_position: 6
---

:::info

Cet article couvre une fonctionnalité disponible dans l'app mobile AdGuard DNS. Pour essayer vous-même, téléchargez l’application AdGuard DNS pour [Android](https://agrd.io/android_dns) ou [iOS](https://agrd.io/ios_dns).

:::

## Qu'est-ce qu'un ID de configuration de serveur ?

Si vous souhaitez connecter un appareil à un serveur spécifique et ne souhaitez pas créer chaque appareil manuellement dans le tableau de bord sur le site Web, vous pouvez utiliser l'**ID de configuration du serveur**. Il vous suffit de récupérer l'identifiant et de l'utiliser pour vous connecter via l'application AdGuard DNS. De cette manière, le "dispositif" sera automatiquement créé lors de la connexion.

## Comment se connecter en utilisant l'ID de configuration du serveur

:::note

Si vous configurez AdGuard sur plusieurs appareils gérés, envisagez d'utiliser la configuration d'applications gérées pour fournir l'ID de configuration du serveur automatiquement à chaque application. [En savoir plus](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Allez dans _Tableau de bord_ → [_Serveurs_](https://adguard-dns.io/dashboard/servers).
2. Sélectionnez le serveur souhaité.
3. Faites défiler vers le bas et cliquez sur _ID de configuration_.
   ![ID de configuration \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Copiez l'**ID de configuration**.
   ![ID de configuration du serveur \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Ouvrez l'application et collez l'**ID de configuration**.
   ![Collez l'ID de configuration \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Choisissez un nom pour l'appareil.
7. Cliquez sur **Connecter**.
   ![Connecter \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

C'est fait ! Vous êtes maintenant connecté et l'appareil sera automatiquement créé dans le tableau de bord.

## Réinitialisation de l'ID de configuration du serveur

Si vous souhaitez déconnecter tous les appareils utilisant un identifiant de configuration spécifique, vous pouvez le réinitialiser. Pour faire ça, procédez comme suit �:

1. Allez dans le _Tableau de bord_ → [_Serveurs_](https://adguard-dns.io/dashboard/servers) et sélectionnez le serveur souhaité.
2. Faites défiler vers le bas et cliquez sur _ID de configuration_.
3. Cliquez sur _Réinitialiser l'ID de configuration_.

Après la réinitialisation, l'ID de configuration changera et tous les appareils qui utilisaient l'ancien identifiant seront déconnectés du serveur.
