---
title: Håndtering af AdGuard DNS mobil-appen via MDM
sidebar_position: 7
---

:::info

Denne artikel beskriver en funktion tilgængelig i AdGuard DNS mobil-appen. For at prøve den selv, download AdGuard DNS-appen til [Android](https://agrd.io/android_dns) eller [iOS](https://agrd.io/ios_dns).

:::

AdGuard DNS mobil-appen understøtter virksomhedshåndtering via MDM-systemer (Mobile Device Management) ved brug af standarden Managed App Configuration (MAC).

Dette tillader IT-administratorer centralt at opsætte og implementere AdGuard DNS-indstillinger på tværs af flere enheder via EMM-konsoller, såsom Google Workspace, Microsoft Intune og andre løsninger kompatible med [AppConfig.org](https://www.appconfig.org/).

### Understøttede EMM-løsninger

Appen er kompatibel med alle EMM-systemer understttende AppConfig.org-standarden:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (til iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Andre AppConfig-kompatible løsninger

## Understøttede parametre

### Håndterede app-opsætningsparametre

| **Parameter**                                                  | **Type** | **Obligatorisk** | **Gyldige værdier**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Hvad parameteren gør**                                                                                                                                                                                                                                        | **Ved første installation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Når værdien ændres**                                                                                                                                                                                                                                                                                                                                                                    | **Hvis ikke angivet**                                                                               |
| -------------------------------------------------------------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Opsætnings-ID** (`setup_id`)              | Streng   | Nej              | AdGuard DNS-opsætningsidentifikator                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identificerer enheden for tilslutning til AdGuard DNS-serveren.                                                                                                                                                                                 | App går håndteret tilstand; feltet er låst; brugeren kan ikke ændre det; muligheden "Nulstil forbindelse" er utilgængelig.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Forbindelse og indstillinger er fuldt nulstillet; bruger skal genoprette forbindelsen; DNS-beskyttelse stopper.                                                                                                                                                                                                                                                           | Bruger kan angive manuelt eller bruge en QR-kode.                                   |
| **Enhedsnavn** (`device_name`)              | Streng   | Nej              | Ethvert enhedsnavn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Indstiller enhedens visningsnavn i AdGuard DNS-kontrolpanelet. Dets maks. længde udgør 64 tegn.                                                                                                                 | App går i håndteret tilstand; navn bruges automatisk, hvis det ikke er indstillet via Opsætnings-ID'et; feltet er låst.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Intet sker.                                                                                                                                                                                                                                                                                                                                                               | Bruger kan angive manuelt; app kan foreslå navn via Opsætnings-ID.                  |
| **DNS-protokol** (`dns_protocol`)           | Valg     | Nej              | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Bemærk: doh_dnsproxy, dot_dnsproxy og doq_dnsproxy fungerer kun i MDM med mobileconfig). | Bestemmer, hvilken krypteret DNS-protokol der bruges (bemærk: DoQ er inkompatibel med Indbygget tilstand på iOS).                                                                                            | App går i håndteret tilstand; angivet protokol anvendes som standard; valg i Indstillinger er låst.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | App skifter til den nye protokol; genopretter automatisk forbindelsen, hvis DNS-beskyttelse er aktiv. Ved skift af drifttilstand (Indbygget ↔ VPN) genopretter appen ikke automatisk forbindelsen; brugeren skal manuelt genoprette forbindelsen. Med DNS-proxyen aktiveret genopretter appen automatisk forbindelsen. | Bruger kan vælge manuelt i indstillinger, medmindre valget er defineret gennem MDM. |
| **App-lås** (`lock_type`)                   | Valg     | Nej              | block                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Låser AdGuard DNS-appen, hvilket forhindrer enhedens bruger i at tilgå den.                                                                                                                                                                     | Appen går i håndteret tilstand; appen låser, hvis værdien er indstillet til `block`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Låser appen, hvis værdien ændres til `block`; oplåser appen, hvis værdien ændres til noget andet eller parameteren slettes.                                                                                                                                                                                                                                          | Appen er ikke låst, brugeren kan tilgå appen og dens indstillinger.                 |
| **Installationstype** (`installation_type`) | Valg     | Nej              | single_touch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Definerer appens installationsflow. Når indstillet til `single_touch`, udfører appen automatisk enhedsopsætning uden brugerinteraktion og overspringer onboarding-forløbet fuldstændigt — brugeren behøver kun at starte appen. | App går i håndteret tilstand; hvis `single_touch` er angivet sammen med et gyldigt `setup_id` (i tilfælde af enhedsopsætnings-ID) eller med et gyldigt `setup_id` og `device_name` (i tilfælde af serveropsætnings-ID), går appen straks i det automatiserede installations-flow; en indlæsningsskærm vises, mens appen udfører opsætning og forbindelse; ved Gennemført accepteres EULA automtisk, onboarding markeres som gennemført, og brugeren føres til hovedskærmen; ellers falder appen tilbage til onboarding-skærmen eller til låseskærmen (hvis `lock_type` er indstillet). | Ingen effekt efter den første installation er fuldført.                                                                                                                                                                                                                                                                                                                   | Standard manuel onboarding-flow er brugt.                                           |
| **EULA accepteret** (`eula_accepted`)       | Boolsk   | Nej              | sand, falsk.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Accepterer automatisk EULA (Slutbrugerlicensaftale) på vegne af brugeren og overspringer skærmen for EULA-samtykke under appens onboarding.                                                                                  | Appen går i håndteret tilstand; hvis `true`, markeres EULA'en som acceptéreret, og EULA-skærmen overspringes under onboarding, og brugeren fortsætter direkte til opsætningsskærmen; denne indstilling anvendes én gang ved hver app-start.                                                                                                                                                                                                                                                                                                                                                                                                     | Intet sker.                                                                                                                                                                                                                                                                                                                                                               | Brugeren skal acceptér EULA'en manuelt under onboarding.                            |
| **Statistik aktiveret** (`stats_enabled`)   | Boolsk   | Nej              | sand, falsk.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Kontrollerer, om nedbrudsrapportering og statistikker over app-brug er aktiveret, hvilket tillader administratorer at fjerhåndtere telemetripræferencen.                                                                                        | App enters managed mode; if specified, the crash reporting preference is set to the provided value, overwriting any previous user choice; only applied when `installation_type` is set **or** `eula_accepted` is `true`; the setting is applied once on each app start.                                                                                                                                                                                                                                                                                                                                                                         | Enables the setting when value is changed to `true`; disables the setting when value is changed to `false`.                                                                                                                                                                                                                                                               | User's existing preference is preserved; user can change the setting manually.      |

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

| Key                     | Streng                                            | Beskrivelse                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | Streng                                         | Beskrivelse                                                                                                                                                                                                                                                                         |
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
