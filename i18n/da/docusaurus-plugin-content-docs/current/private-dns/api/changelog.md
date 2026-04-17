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

## v1.11

_Udgivet 5. november 2025_

- Tilføjet API-nøglegodkendelsesmetode:
  - API-nøgler kan genereres og tilbagekaldes i afsnittet [Brugerpræferencer](https://adguard-dns.io/en/dashboard/user-settings/api-keys)
  - API-nøgler kan bruges til at godkende forespørgsler til API'en ved at medtage dem i forespørgsels-headeren i formatet `Authorization: ApiKey {api_key}`
  - API-nøgler tilbyder en alternativ godkendelsesmetode sammen med adgangstokener

## v1.10

_Udgivet 12. december 2024_

Ny DNS-serverindstilling tilføjet — `block_chrome_prefetch`. Den deaktiverer _Private prefetch proxy_ i Chrome. Når funktionen er aktiveret, forudindlæser Chrome nogle gange links på Google-søgeresultatsiden og andre deltagende websteder, selv før brugeren klikker på dem.

## v1.9

_Udgivet 11. juli 2024_

- Tilføjet automatisk enhedstilslutningsfunktion:
  - Ny DNS-serverindstilling — `auto_connect_devices_enabled`, der tillader godkendelse af automatisk tilslutning af enheder via en specifik linktype
  - Nyt felt i Enhed — `auto_device`, der angiver, at enheden automatisk tilsluttes
- Erstattet `int` med `long` for `queries` i CategoryQueriesStats, for `used` i AccountLimits samt for `blocked` og `queries` i QueriesStats

## v1.8

_Udgivet 20. april 2024_

- Tilføjet understøttelse af DNS-over-HTTPS med godkendelse:
  - Ny handling — nulstil DNS-over-HTTPS adgangskode for enheden
  - Ny enhedsindstilling — `detect_doh_auth_only`. Deaktiverer alle DNS-forbindelsesmetoder undtagen DNS-over-HTTPS med godkendelse
  - Nyt felt i DeviceDNSAddresses — `dns_over_https_with_auth_url`. Angiver den URL, der skal bruges, når der oprettes forbindelse vha. DNS-over-HTTPS med godkendelse

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
  - `dedicated_ipv4` giver information om mængden af allerede tildelte dedikerede IPv4-adresser, samt grænsen for dem
- Fjernet forældet felt i DNSServerSettings:
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

- Tilføjet ny indstilling `ip_log_enabled` til logning af klient IP-adresser og domæner

- Tilføjet ny fejlkode "FIELD_REACHED_LIMIT" for at angive, hvornår grænserne er nået:

  - For det samlede antal 'blocked_clients' og 'blocked_domain_rules' i adgangsindstillinger
  - For `rules` i indstillingerne for tilpassede brugerregler

## v1.5

_Udgivet 16. juni 2023_

- Tilføjet ny indstilling `block_nrd` samt grupperet alle sikkerhedsrelaterede indstillinger på ét sted

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

hvor `enabled` nu styrer alle indstillinger i gruppen, `block_dangerous_domains` er det tidligere `enabled` modelfelt, og `block_nrd` er en indstilling, der blokerer nyregistrerede domæner.

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

her bruges det nye felt `safebrowsing_settings` i stedet for det udfasede `safebrowsing_enabled`, hvis værdi gemmes i `block_dangerous_domains`.

## v1.4

_Udgivet 29. marts 2023_

- Tilføjet mulighed for tilpasset svarblokering: Standard (0.0.0.0), REFUSED, NXDOMAIN eller tilpasset IP-adresse

## v1.3

_Udgivet 13. december 2022_

- Tilføjet metode til at hente kontokvoter

## v1.2

_Udgivet 14. oktober 2022_

- Tilføjet de nye protokoltyper DNS og DNSCRYPT. Udfasning af PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP og DNSCRYPT_UDP, som fjernes helt senere

## v1.1

_Udgivet 7. juli 2022_

- Tilføjet metoder til statistikhentning efter tid, domæner, virksomheder og enheder
- Tilføjet metode til opdatering af enhedsindstillinger
- Rettet definition af obligatoriske felter

## v1.0

_Udgivet 22. februar 2022_

- Tilføjet godkendelse
- CRUD-operationer med enheder og DNS-servere
- Forespørgselslog
- Downloader DoH og DoT .mobileconfig
- Filterlister og webtjenester
