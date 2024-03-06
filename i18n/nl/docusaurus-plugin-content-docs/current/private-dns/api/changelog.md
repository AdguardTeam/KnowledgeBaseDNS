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

## v1.6

- Nieuwe sectie "Toegangsinstellingen" toegevoegd voor DNS-profielen ('access_settings'). Door deze velden aan te passen, kun je je AdGuard DNS-server beschermen tegen ongeoorloofde toegang:

  - 'allowed_clients' — hier kun je opgeven welke clients jouw DNS-server mogen gebruiken. Dit veld heeft voorrang op het veld 'blocked_clients'
  - `blocked_clients` - hier kun je opgeven welke clients jouw DNS-server niet mogen gebruiken
  - 'blocked_domain_rules' — hier kun je opgeven welke domeinen geen toegang hebben tot jouw DNS-server, en dergelijke domeinen definiëren met jokertekens en DNS-filterregels

- Nieuwe limieten toegevoegd aan accountlimieten:

  - "access_rules" geeft de som van de momenteel gebruikte waarden "blocked_clients" en "blocked_domain_rules" aan, alsmede de limiet voor toegangsregels
  - `user_rules` toont het aantal aangemaakte gebruikersregels en de limiet daarop

- Nieuwe instelling toegevoegd: `ip_log_enabled` voor de mogelijkheid om client-IP-adressen en domeinen te loggen.

- Nieuwe foutcode `FIELD_REACHED_LIMIT` toegevoegd om aan te geven wanneer limieten zijn bereikt:

  - Voor het totale aantal 'blocked_clients' en 'blocked_domain_rules' in de toegangsinstellingen
  - Voor 'regels' in de instellingen voor aangepaste gebruikersregels

## v1.5

- Added new setting `block_nrd` and group all security-related settings to one place.

### Model for safebrowsing settings changed

From

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

where `enabled` is now control all settings in group, `block_dangerous_domains` is previous model field "enabled" and `block_nrd` is settings for filtering newly registered domains.

### Model for saving server settings changed

From:

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

here new field `safebrowsing_settings` is used instead of deprecated `safebrowsing_enabled`, whose value stored in `block_dangerous_domains`.

## v1.4

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.

## v1.3

- Added method to get account limits.

## v1.2

- Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.

## v1.1

- Added methods to retrieve statistics by time, domains, companies and devices.
- Added method for updating device settings.
- Fixed required fields definition.

## v1.0

- Added authentication.
- CRUD operations with devices and DNS servers.
- Query log.
- Downloading DOT and DOT .mobileconfig.
- Filter Lists and Web-Services.
