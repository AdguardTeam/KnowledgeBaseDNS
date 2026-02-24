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

| **Parameter**                                        | **Type** | **Obligatorisk** | **Gyldige værdier**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Hvad parameteren gør**                                                                                                                                             | **Ved første installation**                                                                                                                | **Når værdien ændres**                                                                                                                                                                                                                                                                                                                                                                    | **Hvis ikke angivet**                                                                               |
| ---------------------------------------------------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Opsætnings-ID** (`setup_id`)    | Streng   | Nej              | AdGuard DNS-opsætningsidentifikator                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identificerer enheden for tilslutning til AdGuard DNS-serveren.                                                                                      | App går håndteret tilstand; feltet er låst; brugeren kan ikke ændre det; muligheden "Nulstil forbindelse" er utilgængelig. | Forbindelse og indstillinger er fuldt nulstillet; bruger skal genoprette forbindelsen; DNS-beskyttelse stopper.                                                                                                                                                                                                                                                           | Bruger kan angive manuelt eller bruge en QR-kode.                                   |
| **Enhedsnavn** (`device_name`)    | Streng   | Nej              | Ethvert enhedsnavn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Indstiller enhedens visningsnavn i AdGuard DNS-kontrolpanelet. Dets maks. længde udgør 64 tegn.                      | App går i håndteret tilstand; navn bruges automatisk, hvis det ikke er indstillet via Opsætnings-ID'et; feltet er låst.    | Intet sker.                                                                                                                                                                                                                                                                                                                                                               | Bruger kan angive manuelt; app kan foreslå navn via Opsætnings-ID.                  |
| **DNS-protokol** (`dns_protocol`) | Valg     | Nej              | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Bemærk: doh_dnsproxy, dot_dnsproxy og doq_dnsproxy fungerer kun i MDM med mobileconfig). | Bestemmer, hvilken krypteret DNS-protokol der bruges (bemærk: DoQ er inkompatibel med Indbygget tilstand på iOS). | App går i håndteret tilstand; angivet protokol anvendes som standard; valg i Indstillinger er låst.                        | App skifter til den nye protokol; genopretter automatisk forbindelsen, hvis DNS-beskyttelse er aktiv. Ved skift af drifttilstand (Indbygget ↔ VPN) genopretter appen ikke automatisk forbindelsen; brugeren skal manuelt genoprette forbindelsen. Med DNS-proxyen aktiveret genopretter appen automatisk forbindelsen. | Bruger kan vælge manuelt i indstillinger, medmindre valget er defineret gennem MDM. |

## Håndteret tilstand

Appen går automatisk i håndteret tilstand, når MDM-systemet leverer mindst én opsætningsparameter. I denne tilstand har MDM-indstillinger altid forrang over brugerpræferencer: Alle parametre opsat via MDM kan ikke ændres af brugeren, mens parametre, som ikke er defineret af MDM, forbliver redigerbare.

Når MDM-opsætningen opdateres, anvendes alle ændringer automatisk. Hvis MDM-systemet fjerner alle opsætningsparametre på én gang, afslutter appen håndteret tilstand, tidligere låste indstillinger gøres tilgængelige igen, og brugeren kan frit ændre alle parametre.

## Opsætningsopdateringer

Appen modtager automatisk notifikationer om opsætningsændringer, og enhver opdatering leveret af EMM-systemet anvendes straks efter modtagelsen. Afhængigt af EMM-udbyderen kan der være en forsinkelse, inden opsætningen når enheden. Ingen app-genstarter kræves for effektuering af ændringerne.

## Opsætning af enheder til altid at bruge AdGuard DNS

Med MDM kan enheder opsættes, så DNS-beskyttelse **altid er slået til**. Brugere kan ikke ændre DNS-indstillinger eller omgå beskyttelsen.

:::caution

For at forhindre brugere i at slå DNS-indstillinger fra på deres enhed, skal selve AdGuard DNS-appen også låses via MDM.

:::

### På Android

Ved opsætning via MDM, indstil `com.adguard.dnsclient` til `Altid til` og tilføj `Aflåsning`, så brugeren ikke kan fjerne VPN-profilen fra enhedsindstillingerne.

### På iOS

På iOS bruger AdGuard DNS en DNS-proxy til at håndhæve DNS-politikker og forblive **altid slået til** på overvågede enheder. For at aktivere dette, opret en `mobileconfig` til enheden og distribuér den via MDM. Som `dns_protocol`-parameter på MAC, brug `doh_dnsproxy`, `dot_dnsproxy` eller `doq_dnsproxy`.

:::important

Denne metode kan også anvendes til ikke-overvågede enheder, såsom personlige enheder, som har fået adgang til virksomhedens ressourcer og apps. Brugere kan dog åbne Systemindstillinger og skifte til en anden tilstand. På disse enheder er DNS-proxy ikke **altid slået til**; men fungerer som en valgfri, separat tilstand.

:::

En minimal profil består af et topniveauindhold med et enkelt indlejret indhold:

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

#### Udfyldelse af topniveauindholdet

| Nøgle                   | Streng                                            | Beskrivelse                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Configuration`                                   | Definerer en opsætningsprofil. Ændr ikke.                                                                                                             |
| **PayloadVersion**      | `1`                                               | Version af indholdsskemaet.                                                                                                                                           |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Unik UUID til denne profil. Generér en ny for hver profilinstans.                                                                                     |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Unik ID i MDM/enhed, der kan tilpasses. Skal være unik pr. enhed/MDM, så profilen kan opdateres eller erstattes med den samme profil. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Navn vist for brugeren i Indstillinger og for admin'en i MDM.                                                                                                         |
| **PayloadOrganization** | `AdGuard`                                         | Navnet på organisationen, der leverede opsætningen.                                                                                                                   |
| **PayloadContent**      |                                                   | Indeholder indlejrede indhold; hver definerer en politik eller indstilling.                                                                                           |

#### Udfyldelse af det indlejrede indhold

| Nøgle                        | Streng                                         | Beskrivelse                                                                                                                                                                                                                                                      |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**              | `com.apple.dnsProxy.managed`                   | Aktiverer DNS-proxy via netværksudvidelse. Ændr ikke.                                                                                                                                                                            |
| **PayloadVersion**           | `1`                                            | Version af indholdsskemaet.                                                                                                                                                                                                                      |
| **PayloadIdentifier**        | `com.adguard.ios.adguard-dns.payload.dnsproxy` | Unik ID for dette indhold i profilen.                                                                                                                                                                                                            |
| **PayloadUUID**              | `2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931`         | Unik UUID for dette indhold.                                                                                                                                                                                                                     |
| **PayloadDisplayName**       | `AdGuard DNS DNSProxy`                         | Dette er navnet, der vises for denne specifikke del af profilen. Det kan være det samme som `PayloadUUID`, eller ikke. Navnet vises for brugeren under Indstillinger → Generelt → VPN og Enhedshåndtering → DNS. |
| **AppBundleIdentifier**      | `com.adguard.ios.adguard-dns`                  | Pakke-ID for container-appen ansvarlig for netværksudvidelsen. Ændr ikke.                                                                                                                                                        |
| **ProviderBundleIdentifier** | `com.adguard.ios.adguard-dns.dnsproxy`         | Pakke-ID for DNS-proxyudbyderen i appen. Ændr ikke.                                                                                                                                                                              |
| **ProviderConfiguration**    | `{ }`                                          | Opsætningsordbog overført af iOS til udvidelsen. Tom, da alle indstillinger kommer fra hoved-appen.                                                                                                                              |

**Sørg efter profileninstallationen for at logge ind i AdGuard DNS-appen og aktivere beskyttelse.** Derefter starter netværksudvidelsen med DNS-proxy automatisk.
