---
title: Server installatie-ID
sidebar_position: 6
---

:::info

Dit artikel behandelt een functie die beschikbaar is in de AdGuard DNS mobiele app. Om het zelf te proberen, download je de AdGuard DNS-app voor [Android](https://agrd.io/android_dns) of [iOS](https://agrd.io/ios_dns).

:::

## Wat is een serverinstallatie-ID?

Als je een apparaat met een specifieke server wilt verbinden en niet elk apparaat handmatig wilt aanmaken in het Dashboard op de website, kun je de **serverinstallatie-ID** gebruiken. Neem gewoon de ID en gebruik die om via de AdGuard DNS-app te verbinden. Op deze manier wordt het "apparaat" automatisch aangemaakt bij de verbinding.

## Verbinding maken met behulp van de serverinstallatie-ID

:::note

Als je AdGuard configureert op meerdere beheerde apparaten, overweeg dan om beheerde app-configuratie te gebruiken om automatisch de server-installatie-ID aan elke app te verstrekken. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Ga naar _Dashboard_ → [_Servers_](https://adguard-dns.io/dashboard/servers).
2. Selecteer de gewenste server.
3. Scroll naar beneden en klik op _Installatie-ID_.
   ![Installatie-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Kopieer de **installatie-ID**.
   ![Serverinstallatie-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Open de app en plak de **installatie-ID**.
   ![Installatie-ID plakken \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Kies een apparaatnaam.
7. Klik **Verbinden**.
   ![Verbinden \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Voltooid! Je bent nu verbonden en het apparaat wordt automatisch aangemaakt in het Dashboard.

## De serverinstallatie-ID opnieuw instellen

Als je alle apparaten wilt loskoppelen die een specifieke installatie-ID gebruiken, kun je deze opnieuw instellen. Om dit te doen, volg je deze stappen:

1. Ga naar _Dashboard_ → [_Servers_](https://adguard-dns.io/dashboard/servers) en selecteer de gewenste server.
2. Scroll naar beneden en klik op _Installatie-ID_.
3. Klik _Installatie-ID opnieuw instellen_.

Na het opnieuw instellen verandert de installatie-ID en worden alle apparaten die de oude ID gebruikten van de server losgekoppeld.
