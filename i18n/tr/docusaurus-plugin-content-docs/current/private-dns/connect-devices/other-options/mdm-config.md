---
title: Managing the AdGuard DNS mobile app via MDM
sidebar_position: 7
---

:::info

Bu makale, AdGuard DNS mobil uygulamasında bulunan bir özelliği açıklamaktadır. Bunu kendiniz denemek için [Android](https://agrd.io/android_dns) veya [iOS](https://agrd.io/ios_dns) için AdGuard DNS uygulamasını indirin.

:::

The AdGuard DNS mobile app supports enterprise management through MDM (Mobile Device Management) systems using the Managed App Configuration (MAC) standard.

This allows IT administrators to configure and implement AdGuard DNS settings across multiple devices centrally through EMM consoles, such as Google Workspace, Microsoft Intune, and other solutions compatible with [AppConfig.org](https://www.appconfig.org/).

### Desteklenen EMM çözümleri

Uygulama, AppConfig.org standardını destekleyen tüm EMM sistemleriyle uyumludur:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (iOS için)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Diğer AppConfig uyumlu çözümler

## Desteklenen parametreler

### Managed App Configuration Parameters

| **Parametre**                                         | **Tür** | **Gerekli** | **Geçerli değerler**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Parametre ne yapar**                                                                                                                                 | **On initial installation**                                                                                                         | **When value changes**                                                                                                                                                                                                                                                                                                                               | **Belirtilmemişse**                                                                            |
| ----------------------------------------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Kurulum kimliği** (`setup_id`)   | String  | Hayır       | AdGuard DNS setup identifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | AdGuard DNS sunucusuna bağlanmak için cihazı tanımlar.                                                                                 | Uygulama yönetilen moda girer; alan kilitlidir; kullanıcı değiştiremez; "Bağlantıyı sıfırla" seçeneği kullanılamaz. | Connection and settings are fully reset; user must reconnect; DNS protection stops.                                                                                                                                                                                                                                                  | Kullanıcı elle girebilir veya bir QR kodu kullanabilir.                        |
| **Cihaz adı** (`device_name`)      | String  | Hayır       | Herhangi bir cihaz adı                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Sets the device’s display name in the AdGuard DNS control panel. It must have a maximum length of 64 characters.       | App enters managed mode; name used automatically if not set via Setup ID; field is locked.                          | Nothing happens.                                                                                                                                                                                                                                                                                                                     | User can enter manually; app may suggest name via Setup ID.                    |
| **DNS Protokolü** (`dns_protocol`) | Choice  | Hayır       | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Determines which encrypted DNS protocol is used (Note: DoQ not compatible with Native mode on iOS). | Uygulama yönetilen moda girer; belirtilen protokol varsayılan olarak uygulanır; ayarlardaki seçim kilitlenir.       | Uygulama yeni protokole geçer; DNS koruması etkinse otomatik olarak yeniden bağlanır. When switching the operating mode (Native ↔ VPN), the app will not reconnect automatically, the user must manually reconnect. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM. |

## Managed mode

The app automatically enters managed mode when the MDM system provides at least one configuration parameter. In this mode, MDM settings always take priority over user preferences: any parameter configured through MDM cannot be changed by the user, while parameters not defined by MDM remain editable.

When the MDM configuration is updated, all changes are applied automatically. If the MDM system removes all configuration parameters at once, the app exits managed mode, previously locked settings become available again, and the user can freely modify all parameters.

## Yapılandırma güncellemeleri

The app automatically receives notifications about configuration changes, and any updates delivered by the EMM system are applied immediately upon arrival. Depending on the EMM provider, there may be a delay before the configuration reaches the device. No app restart is required for the changes to take effect.

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

| Key                     | String                                            | Açıklama                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | String                                         | Açıklama                                                                                                                                                                                                                                                                            |
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
