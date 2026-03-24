---
title: AdGuard DNS für Mobilgeräte über MDM verwalten
sidebar_position: 7
---

:::info

Dieser Artikel beschreibt eine Funktion, die in der App „AdGuard DNS“ für Mobilgeräte verfügbar ist. Um es selbst auszuprobieren, laden Sie die App „AdGuard DNS” für [Android](https://agrd.io/android_dns) oder [iOS](https://agrd.io/ios_dns) herunter.

:::

Die App „AdGuard DNS“ für Mobigeräte unterstützt die Unternehmensverwaltung über MDM-Systeme (Mobile Device Management) unter Verwendung des MAC-Standards (Managed App Configuration).

Dadurch können IT-Administratoren die AdGuard-DNS-Einstellungen über EMM-Konsolen wie Google Workspace, Microsoft Intune und andere mit [AppConfig.org](https://www.appconfig.org/) kompatible Lösungen zentral für mehrere Geräte konfigurieren und implementieren.

### Unterstützte EMM-Lösungen

Die App ist mit allen EMM-Systemen kompatibel, die den AppConfig.org-Standard unterstützen:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (für iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Weitere AppConfig-kompatible Lösungen

## Unterstützte Parameter

### Konfigurationsparameter für verwaltete Apps

| **Parameter**                                             | **Typ** | **Erforderlich** | **Gültige Werte**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Auswirkung des Parameters**                                                                                                                                                                                                                           | **Bei der Erstinstallation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | **Bei Änderung des Wertes**                                                                                                                                                                                                                                                                                                                                                                                                         | **Falls nicht angegeben**                                                                                              |
| --------------------------------------------------------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Setup-ID** (`setup_id`)              | String  | Nein             | AdGuard-DNS-Setup-ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Identifiziert das Gerät für die Verbindung mit dem AdGuard-DNS-Server.                                                                                                                                                                  | Die App wechselt in den verwalteten Modus; das Feld ist gesperrt; der Benutzer kann es nicht ändern; die Option „Verbindung zurücksetzen“ ist nicht verfügbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Verbindung und Einstellungen werden vollständig zurückgesetzt; Benutzer muss sich erneut verbinden; DNS-Schutz wird beendet.                                                                                                                                                                                                                                                                                        | Der Benutzer kann die Daten manuell eingeben oder einen QR-Code verwenden.                             |
| **Gerätename** (`device_name`)         | String  | Nein             | Beliebiger Gerätename                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Legt den Anzeigenamen des Geräts im AdGuard-DNS-Kontrollpanel fest. Der Name darf maximal 64 Zeichen lang sein.                                                                                                         | Die App wechselt in den verwalteten Modus; der Name wird automatisch verwendet, wenn er nicht über die Setup-ID festgelegt wurde; das Feld ist gesperrt.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Nichts passiert.                                                                                                                                                                                                                                                                                                                                                                                                    | Der Benutzer kann die Eingabe manuell vornehmen; die App kann den Namen über die Setup-ID vorschlagen. |
| **DNS-Protokoll** (`dns_protocol`)     | Auswahl | Nein             | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Legt fest, welches verschlüsselte DNS-Protokoll verwendet wird (Hinweis: DoQ ist nicht mit dem nativen Modus unter iOS kompatibel).                                                                  | Die App wechselt in den verwalteten Modus; das angegebene Protokoll wird standardmäßig angewendet; die Auswahl in den Einstellungen ist gesperrt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Die App wechselt zum neuen Protokoll und stellt automatisch eine neue Verbindung her, wenn der DNS-Schutz aktiv ist. Beim Wechseln des Betriebsmodus (Native ↔ VPN) stellt die App die Verbindung nicht automatisch wieder her, sondern der Benutzer muss die Verbindung manuell wiederherstellen. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM.                         |
| **App lock** (`lock_type`)             | Auswahl | Nein             | block                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Locks the AdGuard DNS app, which prevents device user from accessing the app.                                                                                                                                                           | App enters managed mode; app locks if the value is set to `block`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Locks the app if value is changed to `block`; unlocks the app if value is changed to something else, or if the parameter is deleted.                                                                                                                                                                                                                                                                                | App is not locked, user can access the app and its settings.                                           |
| **Install type** (`installation_type`) | Auswahl | Nein             | single_touch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Defines the installation flow for the app. When set to `single_touch`, the app automatically performs device setup without user interaction, skipping the onboarding flow entirely — user only needs to launch the app. | App enters managed mode; if `single_touch` is specified along with a valid `setup_id` (in case of device setup ID) or with a valid `setup_id` and `device_name` (in case of server setup ID), the app immediately enters the automated install flow; a loading screen is displayed while the app performs setup and connection; on success, EULA is automatically accepted, onboarding is marked as passed, and the user is taken to the main screen; otherwise, the app falls back the onboarding screen or to the lock screen (if `lock_type` is set). | No effect after initial installation is complete.                                                                                                                                                                                                                                                                                                                                                                   | Standard manual onboarding flow is used.                                                               |
| **EULA accepted** (`eula_accepted`)    | Boolean | Nein             | true, false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Automatically accepts End User License Agreement on behalf of the user, skipping EULA consent screen during the app's onboarding.                                                                                                       | App enters managed mode; if `true`, the EULA is marked as accepted and the EULA screen is skipped during onboarding and user proceeds directly to the setup screen; this setting is applied once on each app start.                                                                                                                                                                                                                                                                                                                                                                                               | Nichts passiert.                                                                                                                                                                                                                                                                                                                                                                                                    | The user must accept the EULA manually during onboarding.                                              |
| **Stats enabled** (`stats_enabled`)    | Boolean | Nein             | true, false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Controls whether crash reporting and app usage statistics are enabled, allowing administrators to remotely manage the telemetry preference.                                                                                             | App enters managed mode; if specified, the crash reporting preference is set to the provided value, overwriting any previous user choice; only applied when `installation_type` is set **or** `eula_accepted` is `true`; the setting is applied once on each app start.                                                                                                                                                                                                                                                                                                                                           | Enables the setting when value is changed to `true`; disables the setting when value is changed to `false`.                                                                                                                                                                                                                                                                                                         | User's existing preference is preserved; user can change the setting manually.                         |

:::info

The parameter `installation_type` has higher priority than `eula_accepted`. If both are specified, the install flow handles EULA acceptance on its own, and the `eula_accepted` parameter is ignored.

:::

## Managed mode

The app automatically enters managed mode when the MDM system provides at least one configuration parameter. In this mode, MDM settings always take priority over user preferences: any parameter configured through MDM cannot be changed by the user, while parameters not defined by MDM remain editable.

When the MDM configuration is updated, all changes are applied automatically. If the MDM system removes all configuration parameters at once, the app exits managed mode, previously locked settings become available again, and the user can freely modify all parameters.

## Configuration updates

The app automatically receives notifications about configuration changes, and any updates delivered by the EMM system are applied immediately upon arrival. Depending on the EMM provider, there may be a delay before the configuration reaches the device. No app restart is required for the changes to take effect.

## Configuring devices to always use AdGuard DNS

Using MDM, you can configure devices so that DNS protection is **always on**. Users cannot change DNS settings or bypass protection.

:::caution

To prevent users from disabling DNS settings on their device, the AdGuard DNS app itself must also be locked via MDM.

:::

### On Android

When configuring via MDM, set `com.adguard.dnsclient` as `Always-on` and add `Lockdown` so that the user cannot remove the VPN profile from the device settings.

### On iOS

On iOS, AdGuard DNS uses a DNS proxy to enforce DNS policies and stay **always on** for supervised devices. To enable this, create a `mobileconfig` for the device and deploy it via MDM. For MAC’s `dns_protocol` parameter, use `doh_dnsproxy`, `dot_dnsproxy`, or `doq_dnsproxy`.

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

| Key                     | String                                            | Beschreibung                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | String                                         | Beschreibung                                                                                                                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**              | `com.apple.dnsProxy.managed`                   | Enables DNS proxy via Network Extension. Do not change.                                                                                                                                                                                             |
| **PayloadVersion**           | `1`                                            | Version of the payload scheme.                                                                                                                                                                                                                                      |
| **PayloadIdentifier**        | `com.adguard.ios.adguard-dns.payload.dnsproxy` | Unique ID for this payload within the profile.                                                                                                                                                                                                                      |
| **PayloadUUID**              | `2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931`         | Unique UUID for this payload.                                                                                                                                                                                                                                       |
| **PayloadDisplayName**       | `AdGuard DNS DNSProxy`                         | This is the name displayed for this specific part of the profile. It may be the same as the `PayloadUUID` or different. The name is shown to the user under Settings → General → VPN & Device Management → DNS. |
| **AppBundleIdentifier**      | `com.adguard.ios.adguard-dns`                  | Bundle ID of the container app responsible for the Network Extension. Do not change.                                                                                                                                                                |
| **ProviderBundleIdentifier** | `com.adguard.ios.adguard-dns.dnsproxy`         | Bundle ID of the DNS proxy provider inside the app. Do not change.                                                                                                                                                                                  |
| **ProviderConfiguration**    | `{ }`                                          | Configuration dictionary passed by iOS into the extension. Empty because all settings come from the main app.                                                                                                                                       |

**Once the profile is installed, make sure to log in to the AdGuard DNS app and activate protection.** After that, the Network Extension with DNS proxy will start automatically.
