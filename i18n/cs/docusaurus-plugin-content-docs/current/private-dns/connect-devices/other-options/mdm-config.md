---
title: Správa mobilní aplikace AdGuard DNS přes MDM
sidebar_position: 7
---

:::info

Tento článek popisuje funkci dostupnou v mobilní aplikaci AdGuard DNS. Chcete-li to vyzkoušet sami, stáhněte si aplikaci AdGuard DNS pro [Android](https://agrd.io/android_dns) nebo pro [iOS](https://agrd.io/ios_dns).

:::

Mobilní aplikace AdGuard DNS podporuje správu podnikových zařízení prostřednictvím systémů MDM (Mobile Device Management) využívajících standard MAC (Managed App Configuration).

To umožňuje správcům IT centrálně konfigurovat a implementovat nastavení AdGuard DNS na více zařízeních prostřednictvím konzolí EMM, jako jsou Google Workspace, Microsoft Intune a další řešení kompatibilní s [AppConfig.org](https://www.appconfig.org/).

### Podporovaná řešení EMM

Aplikace je kompatibilní se všemi systémy EMM, které podporují standard AppConfig.org:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (pro iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Další řešení kompatibilní s AppConfig

## Podporované parametry

### Spravované parametry konfigurace aplikace

| **Parametr**                                          | **Typ**   | **Požadováno** | **Platné hodnoty**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Co parametr dělá**                                                                                                                                                   | **Při prvotní instalaci**                                                                                                                             | **Když se hodnota změní**                                                                                                                                                                                                                                                                                                                        | **Není-li specifikováno**                                                                              |
| ----------------------------------------------------- | --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **ID nastavení** (`setup_id`)      | Řetězec   | Ne             | Identifikátor nastavení AdGuard DNS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Identifikuje zařízení pro připojení k serveru AdGuard DNS.                                                                                             | Aplikace přejde do řízeného režimu; pole je uzamčeno; uživatel jej nemůže změnit; možnost ”Obnovit připojení” není k dispozici.       | Připojení a nastavení jsou zcela resetovány; uživatel se musí znovu připojit; ochrana DNS se zastaví.                                                                                                                                                                                                                            | Uživatel může zadat ručně nebo použít QR kód.                                          |
| **Název zařízení** (`device_name`) | Řetězec   | Ne             | Jakýkoliv název zařízení                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Nastaví zobrazovaný název zařízení v ovládacím panelu AdGuard DNS. Musí mít maximální délku 64 znaků.                                  | Aplikace přejde do řízeného režimu; název se použije automaticky, pokud není nastaven prostřednictvím ID nastavení; pole je uzamčeno. | Nic se neděje.                                                                                                                                                                                                                                                                                                                   | Uživatel může zadat ručně; aplikace může navrhnout název prostřednictvím ID nastavení. |
| **DNS Protokol** (`dns_protocol`)  | Volitelné | Ne             | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Určuje, který šifrovaný protokol DNS se používá (poznámka: DoQ není kompatibilní s nativním režimem v systému iOS). | Aplikace přejde do řízeného režimu; přednastavený protokol se použije jako výchozí; výběr v nastavení je uzamčen.                     | Aplikace přepne na nový protokol; pokud je aktivní ochrana DNS, automaticky se znovu připojí. Při přepnutí provozního režimu (Native ↔ VPN) se aplikace nepřipojí automaticky, uživatel se musí připojit ručně. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM.         |

## Spravovaný režim

Aplikace automaticky přejde do spravovaného režimu, pokud systém MDM poskytne alespoň jeden konfigurační parametr. V tomto režimu mají nastavení MDM vždy přednost před uživatelskými preferencemi: žádné parametry nakonfigurované prostřednictvím MDM nelze uživatelem změnit, zatímco parametry, které nejsou definovány MDM, zůstávají editovatelné.

Po aktualizaci konfigurace MDM se všechny změny použijí automaticky. Pokud systém MDM odstraní všechny konfigurační parametry najednou, aplikace opustí řízený režim, dříve uzamčená nastavení se znovu zpřístupní a uživatel může libovolně měnit všechny parametry.

## Aktualizace konfigurace

Aplikace automaticky přijímá oznámení o změnách konfigurace a veškeré aktualizace dodané systémem EMM jsou aplikovány ihned po doručení. V závislosti na poskytovateli EMM může dojít ke zpoždění, než se konfigurace dostane do zařízení. Pro provedení změn není požadován restart aplikace.

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

| Key                     | Řetězec                                           | Popis                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | Řetězec                                        | Popis                                                                                                                                                                                                                                                                               |
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
