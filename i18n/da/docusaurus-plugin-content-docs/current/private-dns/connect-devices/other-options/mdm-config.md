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
- MobileIron
- BlackBerry UEM
- Andre AppConfig-kompatible løsninger

## Understøttede parametre

### Håndterede app-opsætningsparametre

| **Parameter**                                        | **Type** | **Obligatorisk** | **Gyldige værdier**                                                                                                                                                                                                                                              | **Hvad parameteren gør**                                                                                                                                             | **Ved første installation**                                                                                                                | **Når værdien ændres**                                                                                                                                                                                                                                                                               | **Hvis ikke angivet**                                                              |
| ---------------------------------------------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Opsætnings-ID** (`setup_id`)    | Streng   | Nej              | AdGuard DNS-opsætningsidentifikator                                                                                                                                                                                                                              | Identificerer enheden for tilslutning til AdGuard DNS-serveren.                                                                                      | App går håndteret tilstand; feltet er låst; brugeren kan ikke ændre det; muligheden "Nulstil forbindelse" er utilgængelig. | Forbindelse og indstillinger er fuldt nulstillet; bruger skal genoprette forbindelsen; DNS-beskyttelse stopper.                                                                                                                                                                      | Bruger kan angive manuelt eller bruge en QR-kode.                  |
| **Enhedsnavn** (`device_name`)    | Streng   | Nej              | Ethvert enhedsnavn                                                                                                                                                                                                                                               | Indstiller enhedens visningsnavn i AdGuard DNS-kontrolpanelet. Dets maks. længde udgør 64 tegn.                      | App går i håndteret tilstand; navn bruges automatisk, hvis det ikke er indstillet via Opsætnings-ID'et; feltet er låst.    | Intet sker.                                                                                                                                                                                                                                                                          | Bruger kan angive manuelt; app kan foreslå navn via Opsætnings-ID. |
| **DNS-protokol** (`dns_protocol`) | Valg     | Nej              | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Bestemmer, hvilken krypteret DNS-protokol der bruges (bemærk: DoQ er inkompatibel med Indbygget tilstand på iOS). | App går i håndteret tilstand; angivet protokol anvendes som standard; valg i Indstillinger er låst.                        | App skifter til den nye protokol; genopretter automatisk forbindelsen, hvis DNS-beskyttelse er aktiv. Ved skift af drifttilstand (Indbygget ↔ VPN) genopretter appen ikke automatisk forbindelsen; brugeren skal manuelt genoprette forbindelsen. | Bruger kan vælge manuelt i Indstillinger.                          |

## Håndteret tilstand

Appen går automatisk i håndteret tilstand, når MDM-systemet leverer mindst én opsætningsparameter. I denne tilstand har MDM-indstillinger altid forrang over brugerpræferencer: Alle parametre opsat via MDM kan ikke ændres af brugeren, mens parametre, som ikke er defineret af MDM, forbliver redigerbare.

Når MDM-opsætningen opdateres, anvendes alle ændringer automatisk. Hvis MDM-systemet fjerner alle opsætningsparametre på én gang, afslutter appen håndteret tilstand, tidligere låste indstillinger gøres tilgængelige igen, og brugeren kan frit ændre alle parametre.

## Opsætningsopdateringer

Appen modtager automatisk notifikationer om opsætningsændringer, og enhver opdatering leveret af EMM-systemet anvendes straks efter modtagelsen. Afhængigt af EMM-udbyderen kan der være en forsinkelse, inden opsætningen når enheden. Ingen app-genstarter kræves for effektuering af ændringerne.
