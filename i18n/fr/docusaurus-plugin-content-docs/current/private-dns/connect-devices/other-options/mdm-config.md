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

| **Paramètre**                                            | **Type** | **Obligatoire** | **Valeurs valides**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Ce que fait le paramètre**                                                                                                                                    | **Lors de l'installation initiale**                                                                                                                                            | **Lorsque la valeur change**                                                                                                                                                                                                                                                                                                                                                                                      | **Si non spécifié**                                                                                                                    |
| -------------------------------------------------------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **ID de configuration** (`setup_id`)  | Chaîne   | Non             | Identifiant de configuration AdGuard DNS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifie le dispositif pour le connecter au serveur AdGuard DNS.                                                                               | L'application passe en mode géré ; le champ est verrouillé ; l'utilisateur ne peut pas le modifier ; l'option « Réinitialiser la connexion » est indisponible. | La connexion et les paramètres sont entièrement réinitialisés ; l’utilisateur doit se reconnecter ; la protection DNS est désactivée.                                                                                                                                                                                                                                                             | L'utilisateur peut saisir les données manuellement ou utiliser un code QR.                                             |
| **Nom de l'appareil** (`device_name`) | Chaîne   | Non             | Nom d'appareil aléatoire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Définit le nom d'affichage du dispositif dans le panneau de contrôle d'AdGuard DNS. Sa longueur maximale est de 64 caractères.  | L'application passe en mode géré ; le nom est utilisé automatiquement s'il n'est pas défini via l'ID de configuration ; le champ est verrouillé.               | Rien ne se passe.                                                                                                                                                                                                                                                                                                                                                                                 | L'utilisateur peut saisir le nom manuellement ; l'application peut suggérer un nom via l'identifiant de configuration. |
| **Protocole DNS** (`dns_protocol`)    | Choix    | Non             | **Android :** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Détermine le protocole DNS chiffré utilisé (Remarque : DoQ n’est pas compatible avec le mode natif sur iOS). | L'application passe en mode géré ; le protocole spécifié est appliqué par défaut ; la sélection dans les paramètres est verrouillée.                           | L'application passe au nouveau protocole ; elle se reconnecte automatiquement si la protection DNS est active. Lors du changement du mode de fonctionnement (natif ↔ VPN), l'application ne se reconnectera pas automatiquement, l'utilisateur doit se reconnecter manuellement. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM.                                         |

## Mode géré

L'application passe automatiquement en mode géré lorsque le système MDM fournit au moins un paramètre de configuration. Dans ce mode, les réglages du MDM ont toujours la priorité sur les préférences de l'utilisateur : tout paramètre configuré par le MDM ne peut être modifié par l'utilisateur, tandis que les paramètres non définis par le MDM restent modifiables.

Lorsque la configuration du MDM est mise à jour, tous les changements sont appliqués automatiquement. Si le système MDM supprime tous les paramètres de configuration en une seule fois, l'application quitte le mode géré, les paramètres précédemment verrouillés redeviennent disponibles et l'utilisateur peut modifier librement tous les paramètres.

## Mises à jour de la configuration

L'application reçoit automatiquement des notifications concernant les modifications de configuration, et toutes les mises à jour fournies par le système EMM sont appliquées immédiatement dès leur réception. En fonction du fournisseur EMM, il peut y avoir un délai avant que la configuration n'atteigne l'appareil. Aucun redémarrage de l'application n'est nécessaire pour que les changements prennent effet.

## Configuring devices to always use AdGuard DNS

Using MDM, you can configure devices so that DNS protection is **always on**. Users cannot change DNS settings or bypass protection.

:::caution

To prevent users from disabling DNS settings on their device, the AdGuard DNS app itself must also be locked via MDM.

:::

### On Android

When configuring via MDM, set `com.adguard.dnsclient` as `Always-on` and add `Lockdown` so that the user cannot remove the VPN profile from the device settings.

### On iOS

On iOS, AdGuard DNS uses a DNS proxy to enforce DNS policies and stay **always on** for supervised devices. To enable this, create a `mobileconfig` for the device and deploy it via MDM.

:::important

This method can also be used for non-supervised devices, such as personal devices that have been given access to corporate resources and apps. However, users can open System settings and switch to a different mode. On these devices, DNS proxy is not **always on**; it works as an optional, separate mode.

:::

A minimal profile consists of a top-level payload with a single nested payload:

```bash
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadType</key>
    <string>Configuration</string>

    <key>PayloadVersion</key>
    <integer>1</integer>

    <key>PayloadIdentifier</key>
    <string>com.adguard.ios.adguard-dns.mdmprofile.dnsproxy</string>

    <key>PayloadUUID</key>
    <string>5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28</string>

    <key>PayloadDisplayName</key>
    <string>AdGuard DNS DNSProxy</string>

    <key>PayloadOrganization</key>
    <string>AdGuard</string>

    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.dnsProxy.managed</string>

            <key>PayloadVersion</key>
            <integer>1</integer>

            <key>PayloadIdentifier</key>
            <string>com.adguard.ios.adguard-dns.payload.dnsproxy</string>

            <key>PayloadUUID</key>
            <string>2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931</string>

            <key>PayloadDisplayName</key>
            <string>AdGuard DNS DNSProxy</string>

            <key>AppBundleIdentifier</key>
            <string>com.adguard.ios.adguard-dns</string>

            <key>ProviderBundleIdentifier</key>
            <string>com.adguard.ios.adguard-dns.dnsproxy</string>

            <key>ProviderConfiguration</key>
            <dict>
            </dict>
        </dict>
    </array>
</dict>
</plist>
```

#### Filling the top-level payload

| Key                     | Chaîne                                            | Description                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | Chaîne                                         | Description                                                                                                                                                                                                                                                                         |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**              | `com.apple.dnsProxy.managed`                   | Enables DNS proxy via Network Extension. Do not change.                                                                                                                                                                                             |
| **PayloadVersion**           | `1`                                            | Version of the payload scheme.                                                                                                                                                                                                                                      |
| **PayloadIdentifier**        | `com.adguard.ios.adguard-dns.payload.dnsproxy` | Unique ID for this payload within the profile.                                                                                                                                                                                                                      |
| **PayloadUUID**              | `2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931`         | Unique UUID for this payload.                                                                                                                                                                                                                                       |
| **PayloadDisplayName**       | `AdGuard DNS DNSProxy`                         | This is the name displayed for this specific part of the profile. It may be the same as the `PayloadUUID` or different. The name is shown to the user under Settings → General → VPN & Device Management → DNS. |
| **AppBundleIdentifier**      | `com.adguard.ios.adguard-dns`                  | Bundle ID of the container app responsible for the Network Extension. Do not change.                                                                                                                                                                |
| **ProviderBundleIdentifier** | `com.adguard.ios.adguard-dns.dnsproxy`         | Bundle ID of the DNS proxy provider inside the app. Do not change.                                                                                                                                                                                  |
| **ProviderConfiguration**    | `{ }`                                          | Configuration dictionary passed by iOS into the extension. Empty because all settings come from the main app.                                                                                                                                       |

Once the profile is installed and the user logs into DNS, the Network Extension with DNS proxy starts automatically.
