---
title: Ændringslog
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Denne artikel indeholder ændringsloggen for [AdGuard DNS API](private-dns/api/overview.md).

## v1.9

_Released on July 11, 2024_

- Tilføjet automatisk enhedstilslutningsfunktion:
  - Ny DNS-serverindstilling — `auto_connect_devices_enabled`, der tillader godkendelse af automatisk tilslutning af enheder via en specifik linktype
  - Nyt felt i Enhed — `auto_device`, der angiver, at enheden automatisk tilsluttes
- Erstattet `int` med `long` for `queries` i CategoryQueriesStats, for `used` i AccountLimits samt for `blocked` og `queries` i QueriesStats

## v1.8

_Udgivet 20. april 2024_

- Tilføjet understøttelse af DNS-over-HTTPS med godkendelse:
  - Ny handling — nulstil DNS-over-HTTPS adgangskode for enheden
  - Ny enhedsindstilling — `detect_doh_auth_only`. Deaktiverer alle DNS-forbindelsesmetoder undtagen DNS-over-HTTPS med godkendelse
  - New field in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Angiver den URL, der skal bruges, når der oprettes forbindelse vha. DNS-over-HTTPS med godkendelse

## v1.7

_Udgivet 11. marts 2024_

- Tilføjet dedikeret IPv4-adressefunktionalitet:
  - Dedikerede IPv4-adresser kan nu bruges på enheder til DNS-serveropsætning
  - Dedikeret IPv4-adresse er nu associeret til den enhed, den er tilknyttet, således at forespørgsler til denne adresse logges for den pågældende enhed
- Tilføjet nye operationer:
  - Opliste alle tilgængelige dedikerede IPv4-adresser
  - Tildel ny dedikeret IPv4-adresse
  - Knyt en tilgængelig IPv4-adresse til en enhed
  - Fjern tilknytning af en IPv4-adresse fra en enhed
  - Anmod om oplysninger på dedikerede adresser associeret med en enhed
- Tilføjet nye grænser til Kontogrænser:
  - `dedicated_ipv4` provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them
- Fjernet forældet felt i DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Udgivet 22. januar 2024_

- Added new Access settings section for DNS profiles (`access_settings`). Ved at tilpasse disse felter vil AdGuard DNS-serveren kunne beskyttes mod uautoriseret adgang:

  - `allowed_clients` — her kan angives, hvilke klienter, som kan bruge DNS-serveren. Dette felt vil have prioritet over feltet `blocked_clients`
  - `allowed_clients` — her kan angives, hvilke klienter, som ikke har tilladelse til bruge DNS-serveren
  - `blocked_domain_rules` — her kan angives, hvilke domæner, som ikke må tilgå DNS-serveren, samt definere sådanne domæner med jokertegn og DNS-filtreringsregler

- Tilføjet nye grænser til Kontogrænser:

  - `access_rules` giver summen af de aktuelt anvendte `blocked_clients` og `blocked_domain_rules` værdier, samt grænsen for adgangsregler
  - `user_rules` viser antallet af oprettede brugerregler, såvel som grænsen for dem

- Added a new `ip_log_enabled` setting to log client IP addresses and domains

- Tilføjet ny fejlkode "FIELD_REACHED_LIMIT" for at angive, hvornår grænserne er nået:

  - For det samlede antal 'blocked_clients' og 'blocked_domain_rules' i adgangsindstillinger
  - For `rules` i indstillingerne for tilpassede brugerregler

## v1.5

_Udgivet 16. juni 2023_

- Added a new `block_nrd` setting and grouped all security-related settings in one place

### Model for safebrowsing-indstillinger ændret

Fra:

```json
{
   "enabled": true
}
```

Til:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

where `enabled` now controls all settings in the group, `block_dangerous_domains` is the previous `enabled` model field, and `block_nrd` is a setting that blocks newly registered domains.

### Model til lagring af serverindstillinger ændret

Fra:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

til:

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

here a new field `safebrowsing_settings` is used instead of the deprecated `safebrowsing_enabled`, whose value is stored in `block_dangerous_domains`.

## v1.4

_Udgivet 29. marts 2023_

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP address

## v1.3

_Udgivet 13. december 2022_

- Added method to get account limits

## v1.2

_Udgivet 14. oktober 2022_

- Tilføjet de nye protokoltyper DNS og DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later

## v1.1

_Released on July 7, 2022_

- Added methods to retrieve statistics by time, domains, companies and devices
- Added method for updating device settings
- Fixed required fields definition

## v1.0

_Udgivet 22. februar 2022_

- Added authentication
- CRUD operations with devices and DNS servers
- Forespørgselslog
- Downloading DoH and DoT .mobileconfig
- Filter lists and web services
