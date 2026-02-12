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

| **Parameter**                                        | **Type** | **Obligatorisk** | **Gyldige værdier**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Hvad parameteren gør**                                                                                                                                             | **Ved første installation**                                                                                                                | **Når værdien ændres**                                                                                                                                                                                                                                                                                                                                                             | **Hvis ikke angivet**                                                                          |
| ---------------------------------------------------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Opsætnings-ID** (`setup_id`)    | Streng   | Nej              | AdGuard DNS-opsætningsidentifikator                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Identificerer enheden for tilslutning til AdGuard DNS-serveren.                                                                                      | App går håndteret tilstand; feltet er låst; brugeren kan ikke ændre det; muligheden "Nulstil forbindelse" er utilgængelig. | Forbindelse og indstillinger er fuldt nulstillet; bruger skal genoprette forbindelsen; DNS-beskyttelse stopper.                                                                                                                                                                                                                                                    | Bruger kan angive manuelt eller bruge en QR-kode.                              |
| **Enhedsnavn** (`device_name`)    | Streng   | Nej              | Ethvert enhedsnavn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Indstiller enhedens visningsnavn i AdGuard DNS-kontrolpanelet. Dets maks. længde udgør 64 tegn.                      | App går i håndteret tilstand; navn bruges automatisk, hvis det ikke er indstillet via Opsætnings-ID'et; feltet er låst.    | Intet sker.                                                                                                                                                                                                                                                                                                                                                        | Bruger kan angive manuelt; app kan foreslå navn via Opsætnings-ID.             |
| **DNS-protokol** (`dns_protocol`) | Valg     | Nej              | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Bestemmer, hvilken krypteret DNS-protokol der bruges (bemærk: DoQ er inkompatibel med Indbygget tilstand på iOS). | App går i håndteret tilstand; angivet protokol anvendes som standard; valg i Indstillinger er låst.                        | App skifter til den nye protokol; genopretter automatisk forbindelsen, hvis DNS-beskyttelse er aktiv. Ved skift af drifttilstand (Indbygget ↔ VPN) genopretter appen ikke automatisk forbindelsen; brugeren skal manuelt genoprette forbindelsen. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM. |

## Håndteret tilstand

Appen går automatisk i håndteret tilstand, når MDM-systemet leverer mindst én opsætningsparameter. I denne tilstand har MDM-indstillinger altid forrang over brugerpræferencer: Alle parametre opsat via MDM kan ikke ændres af brugeren, mens parametre, som ikke er defineret af MDM, forbliver redigerbare.

Når MDM-opsætningen opdateres, anvendes alle ændringer automatisk. Hvis MDM-systemet fjerner alle opsætningsparametre på én gang, afslutter appen håndteret tilstand, tidligere låste indstillinger gøres tilgængelige igen, og brugeren kan frit ændre alle parametre.

## Opsætningsopdateringer

Appen modtager automatisk notifikationer om opsætningsændringer, og enhver opdatering leveret af EMM-systemet anvendes straks efter modtagelsen. Afhængigt af EMM-udbyderen kan der være en forsinkelse, inden opsætningen når enheden. Ingen app-genstarter kræves for effektuering af ændringerne.

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

Once the profile is installed and the user logs into DNS, the Network Extension with DNS proxy starts automatically.
