---
title: Gestion de l'application mobile AdGuard DNS via MDM
sidebar_position: 7
---

:::info

Cet article décrit une fonctionnalité disponible dans l'application mobile AdGuard DNS. Pour essayer vous-même, téléchargez l’application AdGuard DNS pour [Android](https://agrd.io/android_dns) ou [iOS](https://agrd.io/ios_dns).

:::

L'application mobile AdGuard DNS prend en charge la gestion d'entreprise par le biais de systèmes MDM (Mobile Device Management) à l'aide de la norme Managed App Configuration (MAC).

Cela permet aux administrateurs informatiques de configurer et de mettre en œuvre les paramètres DNS d'AdGuard sur plusieurs appareils de manière centralisée via des consoles EMM, telles que Google Workspace, Microsoft Intune et d'autres solutions compatibles avec [AppConfig.org](https://www.appconfig.org/).

### Solutions EMM prises en charge

L'application est compatible avec tous les systèmes EMM prenant en charge la norme AppConfig.org :

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (pour iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Autres solutions compatibles avec AppConfig

## Paramètres pris en charge

### Paramètres de configuration de l'application gérée

| **Paramètre**                                            | **Type** | **Obligatoire** | **Valeurs valides**                                                                                                                                                                                                                                                | **Ce que fait le paramètre**                                                                                                                                    | **Lors de l'installation initiale**                                                                                                                                            | **Lorsque la valeur change**                                                                                                                                                                                                                                                                                                        | **Si non spécifié**                                                                                                                    |
| -------------------------------------------------------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **ID de configuration** (`setup_id`)  | Chaîne   | Non             | Identifiant de configuration AdGuard DNS                                                                                                                                                                                                                           | Identifie le dispositif pour le connecter au serveur AdGuard DNS.                                                                               | L'application passe en mode géré ; le champ est verrouillé ; l'utilisateur ne peut pas le modifier ; l'option « Réinitialiser la connexion » est indisponible. | La connexion et les paramètres sont entièrement réinitialisés ; l’utilisateur doit se reconnecter ; la protection DNS est désactivée.                                                                                                                                                                               | L'utilisateur peut saisir les données manuellement ou utiliser un code QR.                                             |
| **Nom de l'appareil** (`device_name`) | Chaîne   | Non             | Nom d'appareil aléatoire                                                                                                                                                                                                                                           | Définit le nom d'affichage du dispositif dans le panneau de contrôle d'AdGuard DNS. Sa longueur maximale est de 64 caractères.  | L'application passe en mode géré ; le nom est utilisé automatiquement s'il n'est pas défini via l'ID de configuration ; le champ est verrouillé.               | Rien ne se passe.                                                                                                                                                                                                                                                                                                   | L'utilisateur peut saisir le nom manuellement ; l'application peut suggérer un nom via l'identifiant de configuration. |
| **Protocole DNS** (`dns_protocol`)    | Choix    | Non             | **Android :** doh, dot, doq. **iOS :** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Détermine le protocole DNS chiffré utilisé (Remarque : DoQ n’est pas compatible avec le mode natif sur iOS). | L'application passe en mode géré ; le protocole spécifié est appliqué par défaut ; la sélection dans les paramètres est verrouillée.                           | L'application passe au nouveau protocole ; elle se reconnecte automatiquement si la protection DNS est active. Lors du changement du mode de fonctionnement (natif ↔ VPN), l'application ne se reconnectera pas automatiquement, l'utilisateur doit se reconnecter manuellement. | L'utilisateur peut faire cette sélection manuellement dans les paramètres.                                             |

## Mode géré

L'application passe automatiquement en mode géré lorsque le système MDM fournit au moins un paramètre de configuration. Dans ce mode, les réglages du MDM ont toujours la priorité sur les préférences de l'utilisateur : tout paramètre configuré par le MDM ne peut être modifié par l'utilisateur, tandis que les paramètres non définis par le MDM restent modifiables.

Lorsque la configuration du MDM est mise à jour, tous les changements sont appliqués automatiquement. Si le système MDM supprime tous les paramètres de configuration en une seule fois, l'application quitte le mode géré, les paramètres précédemment verrouillés redeviennent disponibles et l'utilisateur peut modifier librement tous les paramètres.

## Mises à jour de la configuration

L'application reçoit automatiquement des notifications concernant les modifications de configuration, et toutes les mises à jour fournies par le système EMM sont appliquées immédiatement dès leur réception. En fonction du fournisseur EMM, il peut y avoir un délai avant que la configuration n'atteigne l'appareil. Aucun redémarrage de l'application n'est nécessaire pour que les changements prennent effet.
