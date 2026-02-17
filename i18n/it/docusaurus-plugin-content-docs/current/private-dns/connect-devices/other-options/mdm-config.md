---
title: Gestire l'app mobile AdGuard DNS tramite MDM
sidebar_position: 7
---

:::info

Questo articolo descrive una funzione disponibile nell'app mobile AdGuard DNS. Per provarlo tu stesso, scarica l'app AdGuard DNS per [Android](https://agrd.io/android_dns) o [iOS](https://agrd.io/ios_dns).

:::

L'app mobile AdGuard DNS supporta la gestione aziendale tramite sistemi MDM (Mobile Device Management) usando lo standard Managed App Configuration (MAC).

Questo consente agli amministratori IT di configurare e implementare le impostazioni di AdGuard DNS per più dispositivi tramite console EMM, come Google Workspace, Microsoft Intune e altre soluzioni compatibili con [AppConfig.org](https://www.appconfig.org/).

### Soluzioni EMM supportate

L'app è compatibile con qualunque sistema EMM che supporti lo standard di AppConfig.org:

- Google Workspace (Android Commerciale)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (per iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Altre soluzioni compatibili con AppConfig

## Parametri supportati

### Parametri di configurazione gestita dell'app

| **Parametro**                                            | **Tipo** | **Obbligatorio** | **Valori validi**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Cosa fa il parametro**                                                                                                                                        | **Per l'installazione iniziale**                                                                                                                     | **Quando il valore cambia**                                                                                                                                                                                                                                                                                                                                                   | **Se non è specificato**                                                                                      |
| -------------------------------------------------------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **ID di configurazione** (`setup_id`) | Stringa  | No               | Identificatore di configurazione DNS di AdGuard                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifica il dispositivo per la connessione al server AdGuard DNS.                                                                             | L'app entra in modalità gestita; il campo è bloccato; l'utente non può modificarlo; opzione "Reimposta connessione" non disponibile. | Connessione e impostazioni sono completamente reimpostati; l'utente deve riconnettersi; la protezione DNS si ferma.                                                                                                                                                                                                                                           | L'utente può inserire manualmente o usare un codice QR.                                       |
| **Nome dispositivo** (`device_name`)  | Stringa  | No               | Un nome per il dispositivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Imposta il nome del dispositivo nel Pannello di controllo di AdGuard DNS. Deve avere una lunghezza massima di 64 caratteri.     | L'app entra in modalità gestita; il nome è usato automaticamente se non impostato tramite ID approntamento; il campo è bloccato.     | Nulla accade.                                                                                                                                                                                                                                                                                                                                                 | L'utente può inserire manualmente; l'app può suggerire il nome tramite l'ID di approntamento. |
| **Protocollo DNS** (`dns_protocol`)   | Scelta   | No               | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy and doq_dnsproxy work only in MDM with mobileconfig). | Determina quale protocollo DNS criptato è usato (Nota: DoQ non è compatibile con la modalità nativa su iOS). | L'app entra in modalità gestita; protocollo specificato applicato come Predefinito; selezione nelle impostazioni bloccata.           | L'app passa al nuovo protocollo; si riconnette automaticamente se la protezione DNS è attiva. Quando si cambia la modalità operativa (Nativa ↔ VPN), l'app non si riconnetterà automaticamente, ma l'utente dovrà riconnettersi manualmente. With the DNS proxy enabled, the app reconnects automatically. | User can select manually in settings unless the choice is defined through MDM.                |

## Modalità gestita

L'app entra automaticamente in modalità gestita quando il sistema MDM fornisce almeno un parametro di configurazione. In questa modalità, le impostazioni MDM hanno sempre la priorità sulle preferenze dell'utente: qualsiasi parametro configurato tramite MDM non può essere modificato dall'utente, mentre i parametri non definiti da MDM rimangono modificabili.

Quando la configurazione MDM è aggiornata, tutte le modifiche vengono applicate automaticamente. Se il sistema MDM rimuove tutti i parametri di configurazione in una volta, l'app esce dalla modalità gestita, le impostazioni precedentemente bloccate diventano nuovamente disponibili e l'utente può modificare liberamente tutti i parametri.

## Aggiornamenti della configurazione

L'app riceve automaticamente le notifiche relative alle modifiche di configurazione e gli aggiornamenti forniti dal sistema EMM vengono applicati immediatamente all'arrivo. A seconda del fornitore EMM, può esserci un ritardo prima che la configurazione raggiunga il dispositivo. Non è necessario riavviare l'app affinché le modifiche abbiano effetto.

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

| Key                     | Stringa                                           | Descrizione                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Defines a configuration profile. Do not change.                                                                                                    |
| **PayloadVersion**      | `1`                                               | Version of the payload scheme.                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unique UUID for this profile. Generate a new one for each profile instance.                                                                        |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unique ID within MDM/device that can be customized. Must be unique per device/MDM so the profile can be updated or replaced with the same profile. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Name shown to the user in Settings and to the admin in MDM.                                                                                                        |
| **PayloadOrganization** | `AdGuard`                                         | Name of the organization that issued the config.                                                                                                                   |
| **PayloadContent**      |                                                   | Contains nested payloads; each defines a policy or setting.                                                                                                        |

#### Filling the nested payload

| Key                          | Stringa                                        | Descrizione                                                                                                                                                                                                                                                                         |
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
