---
title: Changelog
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

This article contains the changelog for [AdGuard DNS API](private-dns/api/overview.md).

## v1.10

_Uitgebracht op 12 december 2024_

Een nieuwe DNS-serverinstelling toegevoegd - `block_chrome_prefetch`. Het schakelt _Private prefetch proxy_ in Chrome uit. Wanneer deze functie is ingeschakeld, zal Chrome soms links op de Google-zoekresultatenpagina en andere deelnemende websites vooraf ophalen, zelfs voordat de gebruiker erop klikt.

## v1.9

_Uitgebracht op 11 juli 2024_

- Added automatic device connection functionality:
  - New DNS server setting — `auto_connect_devices_enabled`, allowing approval for auto-connecting devices through a specific link type
  - New field in Device — `auto_device`, indicating that the device is automatically connected
- Replaced `int` with `long` for `queries` in CategoryQueriesStats, for `used` in AccountLimits, and for `blocked` and `queries` in QueriesStats

## v1.8

_Released on April 20, 2024_

- Added support for DNS-over-HTTPS with authentication:
  - New operation — reset DNS-over-HTTPS password for device
  - New device setting — `detect_doh_auth_only`. Disables all DNS connection methods except DNS-over-HTTPS with authentication
  - Nieuw veld in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Indicates the URL to use when connecting using DNS-over-HTTPS with authentication

## v1.7

_Uitgebracht op 11 maart 2024_

- Functionaliteit voor speciale IPv4-adressen toegevoegd:
  - Speciale IPv4-adressen kunnen nu op apparaten worden gebruikt voor DNS-serverconfiguratie
  - Het speciale IPv4-adres is nu gekoppeld aan het apparaat waarmee het is verbonden, zodat zoekopdrachten naar dit adres worden gelogd voor dat apparaat
- Nieuwe bewerkingen toegevoegd:
  - Alle speciale IPv4-adressen weergeven
  - Nieuw speciaal IPv4-adres toewijzen
  - Een beschikbaar IPv4-adres aan een apparaat koppelen
  - Een IPv4-adres ontkoppelen van een apparaat
  - Informatie opvragen over speciale adressen die aan een apparaat zijn gekoppeld
- Nieuwe limieten toegevoegd aan accountlimieten:
  - 'dedicated_ipv4' geeft informatie over het aantal reeds toegewezen speciale IPv4-adressen en de limiet daarvoor
- Verouderd veld van DNSServerSettings verwijderd:
  - `safebrowsing_enabled`

## v1.6

_Uitgebracht op 22 januari 2024_

- Nieuwe sectie Toegangsinstellingen toegevoegd voor DNS-profielen (`access_settings`). Door deze velden aan te passen, kun je je AdGuard DNS-server beschermen tegen ongeoorloofde toegang:

  - 'allowed_clients' — hier kun je opgeven welke clients jouw DNS-server mogen gebruiken. Dit veld heeft voorrang op het veld 'blocked_clients'
  - `blocked_clients` - hier kun je opgeven welke clients jouw DNS-server niet mogen gebruiken
  - 'blocked_domain_rules' — hier kun je opgeven welke domeinen geen toegang hebben tot jouw DNS-server, en dergelijke domeinen definiëren met jokertekens en DNS-filterregels

- Nieuwe limieten toegevoegd aan accountlimieten:

  - "access_rules" geeft de som van de momenteel gebruikte waarden "blocked_clients" en "blocked_domain_rules" aan, alsmede de limiet voor toegangsregels
  - `user_rules` toont het aantal aangemaakte gebruikersregels en de limiet daarop

- Er is een nieuwe `ip_log_enabled`-instelling toegevoegd om client-IP-adressen en -domeinen te loggen

- Nieuwe foutcode `FIELD_REACHED_LIMIT` toegevoegd om aan te geven wanneer limieten zijn bereikt:

  - Voor het totale aantal 'blocked_clients' en 'blocked_domain_rules' in de toegangsinstellingen
  - Voor 'regels' in de instellingen voor aangepaste gebruikersregels

## v1.5

_Uitgebracht op 16 juni 2023_

- Er is een nieuwe 'block_nrd'-instelling toegevoegd en alle beveiligingsgerelateerde instellingen op één plek gegroepeerd

### Model for safebrowsing settings changed

From:

```json
{
   "enabled": true
}
```

To:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

waarbij `enabled` nu alle instellingen in de groep beheert, `block_dangerous_domains` het vorige `enabled`-modelveld is en `block_nrd` een instelling is die nieuw geregistreerde domeinen blokkeert.

### Model for saving server settings changed

Van:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

to:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

hier wordt een nieuw veld `safebrowsing_settings` gebruikt in plaats van het verouderde `safebrowsing_enabled`, waarvan de waarde is opgeslagen in `block_dangerous_domains`.

## v1.4

_Uitgebracht op 29 maart 2023_

- Configureerbare optie toegevoegd voor het blokkeren van reacties: standaard (0.0.0.0), GEWEIGERD, NXDOMAIN of aangepast IP-adres

## v1.3

_Uitgebracht op 13 december 2022_

- Methode toegevoegd om accountlimieten te verkrijgen

## v1.2

_Uitgebracht op 14 oktober 2022_

- Added new protocol types DNS and DNSCRYPT. Afschaffen van PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP en DNSCRYPT_UDP die later zullen worden verwijderd

## v1.1

_Uitgebracht op 7 juli 2022_

- Methoden toegevoegd om statistieken op te halen op basis van tijd, domeinen, bedrijven en apparaten
- Methode toegevoegd voor het bijwerken van apparaatinstellingen
- Definitie van vaste verplichte velden

## v1.0

_Uitgebracht op 22 februari 2022_

- Authenticatie toegevoegd
- CRUD-bewerkingen met apparaten en DNS-servers
- Querylogboek
- DoH en DoT .mobileconfig downloaden
- Filterlijsten en webservices
