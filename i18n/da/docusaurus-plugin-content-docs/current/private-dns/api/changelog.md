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

## v1.7

_Released on March 11, 2024_

- Added dedicated IPv4 addresses functionality:
  - Dedicated IPv4 addresses can now be used on devices for DNS server configuration
  - Dedicated IPv4 address is now associated with the device it is linked to, so that queries made to this address are logged for that device
- Added new operations:
  - List all available dedicated IPv4 addresses
  - Allocate new dedicated IPv4 address
  - Link an available IPv4 address to a device
  - Unlink an IPv4 address from a device
  - Request info on dedicated addresses associated with a device
- Tilføjet nye grænser til Kontogrænser:
  - `dedicated_ipv4` — provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them
- Removed deprecated field of DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Udgivet 22. januar 2024_

- Tilføjet nyt afsnit "Adgangsindstillinger" for DNS-profiler (`access_settings`). Ved at tilpasse disse felter vil AdGuard DNS-serveren kunne beskyttes mod uautoriseret adgang:

  - `allowed_clients` — her kan angives, hvilke klienter, som kan bruge DNS-serveren. Dette felt vil have prioritet over feltet `blocked_clients`
  - `allowed_clients` — her kan angives, hvilke klienter, som ikke har tilladelse til bruge DNS-serveren
  - `blocked_domain_rules` — her kan angives, hvilke domæner, som ikke må tilgå DNS-serveren, samt definere sådanne domæner med jokertegn og DNS-filtreringsregler

- Tilføjet nye grænser til Kontogrænser:

  - `access_rules` giver summen af de aktuelt anvendte `blocked_clients` og `blocked_domain_rules` værdier, samt grænsen for adgangsregler
  - `user_rules` viser antallet af oprettede brugerregler, såvel som grænsen for dem

- Tilføjet ny indstilling: `ip_log_enabled` som muliggør logning af klientens IP-adresser og domæner.

- Tilføjet ny fejlkode "FIELD_REACHED_LIMIT" for at angive, hvornår grænserne er nået:

  - For det samlede antal 'blocked_clients' og 'blocked_domain_rules' i adgangsindstillinger
  - For `rules` i indstillingerne for tilpassede brugerregler

## v1.5

_Udgivet 16. juni 2023_

- Tilføjet ny indstilling `block_nrd` samt grupperet alle sikkerhedsrelaterede indstillinger på ét sted.

### Model for safebrowsing-indstillinger ændret

Fra

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

hvor `enabled` nu styrer alle indstillinger i gruppen, `block_dangerous_domains` er det tidligere modelfelt "enabled", og `block_nrd` er indstillinger for filtrering af nyregistrerede domæner.

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

her bruges det nye felt `safebrowsing_settings` i stedet for det udfasede `safebrowsing_enabled`, hvis værdigemmes i `block_dangerous_domains`.

## v1.4

_Udgivet 29. marts 2023_

- Tilføjet mulighed for tilpasset svarblokering: Standard (0.0.0.0), REFUSED, NXDOMAIN eller tilpasset IP-adresse.

## v1.3

_Udgivet 13. december 2022_

- Tilføjet metode til at hente kontokvoter.

## v1.2

_Udgivet 14. oktober 2022_

- Tilføjet de nye protokoltyper DNS og DNSCRYPT. Udfasning af PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP og DNSCRYPT_UDP, som fjernes helt senere.

## v1.1

_Udgivet 7. juli 2022_

- Tilføjet metoder til statistikhentning efter tid, domæner, virksomheder og enheder.
- Tilføjet metode til opdatering af enhedsindstillinger.
- Rettet definition af obligatoriske felter.

## v1.0

_Udgivet 22. februar 2022_

- Tilføjet godkendelse.
- CRUD-operationer med enheder og DNS-servere.
- Forespørgselslog.
- Downloader DOT og DOT .mobileconfig.
- Filterlister og webtjenester.
