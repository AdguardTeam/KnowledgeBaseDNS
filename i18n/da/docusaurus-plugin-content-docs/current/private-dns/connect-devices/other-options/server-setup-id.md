---
title: Serveropsætnings-ID
sidebar_position: 6
---

:::info

Denne artikel dækker en funktion tilgængelig i AdGuard DNS mobil-appen. For at prøve den selv, download AdGuard DNS-appen til [Android](https://agrd.io/android_dns) eller [iOS](https://agrd.io/ios_dns).

:::

## Hvad er et serveropsætnings-ID?

Ønskes en enhed tilsluttet en bestemt server, uden at hver enhed skal oprettes manuelt i kontrolpanelet på webstedet, kan **serveropsætnings-ID** bruges. Benyt blot ID'et til at tilslutte via AdGuard DNS-appen. På denne måde oprettes "enheden" automatisk ved tilslutning.

## Sådan tilsluttes ved brug af serveropsætnings-ID

:::note

Opsættes AdGuard på flere håndterede enheder, bør det overvejes at bruge håndteret app-opsætning for automatisk at angive serveropsætnings-ID'et til hver app. [Læs mere](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Gå til _Kontrolpanel_ → [_Servere_](https://adguard-dns.io/dashboard/servers).
2. Vælg den ønskede server.
3. Rul ned og klik på _Opsætning-ID_.
   ![Opsætnings-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Kopiér **opsætnings-ID'et**.
   ![Serveropsætnings-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Åbn appen og indsæt **opsætnings-ID'et**.
   ![Indsæt opsætnings-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Vælg et enhedsnavn.
7. Klik på **Tilslut**.
   ![Tilslut \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Færdig! Enheden er nu tilsluttet og oprettes automatisk i Kontrolpanel.

## Nulstilling af serveropsætnings-ID

Ønskes forbindelsen afbrudt til alle enheder, som benytter et bestemt opsætnings-ID, kan dette nulstilles. For at gøre dette, følg blot disse trin:

1. Gå til _Kontrolpanel_ → [_Servere_](https://adguard-dns.io/dashboard/servers) og vælg den ønskede server.
2. Rul ned og klik på _Opsætning-ID_.
3. Klik på _Nulstil opsætnings-ID_.

Efter nulstillingen vil opsætnings-ID'et være ændret, og alle enheder, som brugte det gamle ID, frakobles serveren.
