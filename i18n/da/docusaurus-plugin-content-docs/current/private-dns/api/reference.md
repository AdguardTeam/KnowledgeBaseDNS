---
title: Reference
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Aktuel version: 1.10

### /oapi/v1/account/limits

#### GET

##### Resumé

Gets account limits

##### Svar

| Kode | Beskrivelse           |
| ---- | --------------------- |
| 200  | Kontobegrænsningsinfo |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Resumé

Lists dedicated IPv4 addresses

##### Svar

| Kode | Beskrivelse                         |
| ---- | ----------------------------------- |
| 200  | Liste over dedikerede IPv4-adresser |

#### POST

##### Resumé

Allocates new IPv4

##### Svar

| Kode | Beskrivelse                      |
| ---- | -------------------------------- |
| 200  | Ny IPv4 er tildelt               |
| 429  | Kvote for dedikeret IPv4 opbrugt |

### /oapi/v1/devices

#### GET

##### Resumé

Lists devices

##### Svar

| Kode | Beskrivelse |
| ---- | ----------- |
| 200  | Enhedsliste |

#### POST

##### Resumé

Creates a new device

##### Svar

| Kode | Beskrivelse                  |
| ---- | ---------------------------- |
| 200  | Enhed oprettet               |
| 400  | Bekræftelse mislykkedes      |
| 429  | Kvote for antal enheder nået |

### /oapi/v1/devices/\{device_id\}

#### SLET

##### Resumé

Removes a device

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse       |
| ---- | ----------------- |
| 200  | Enhed slettet     |
| 404  | Enhed ikke fundet |

#### GET

##### Resumé

Gets an existing device by ID

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse       |
| ---- | ----------------- |
| 200  | Enhedsinfo        |
| 404  | Enhed ikke fundet |

#### PUT

##### Resumé

Updates an existing device

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse             |
| ---- | ----------------------- |
| 200  | Enhed opdateret         |
| 400  | Bekræftelse mislykkedes |
| 404  | Enhed ikke fundet       |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Resumé

List dedicated IPv4 and IPv6 addresses for a device

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse             |
| ---- | ----------------------- |
| 200  | Dedikerede IPv4 og IPv6 |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### SLET

##### Resumé

Unlink dedicated IPv4 from the device

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse                                  |
| ---- | -------------------------------------------- |
| 200  | Linket dedikeret IPv4 er fjernet fra enheden |
| 404  | Enhed eller adresse ikke fundet              |

#### POST

##### Resumé

Link dedicated IPv4 to the device

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse                             |
| ---- | --------------------------------------- |
| 200  | Dedikeret IPv4 er linket til enheden    |
| 400  | Bekræftelse mislykkedes                 |
| 404  | Enhed eller adresse ikke fundet         |
| 429  | Kvote for linket dedikeret IPv4 opbrugt |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Resumé

Gets DNS-over-HTTPS .mobileconfig file.

##### Parametre

| Navn                    | Placeret i   | Beskrivelse                                                                  | Obligatorisk | Struktur   |
| ----------------------- | ------------ | ---------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | sti          |                                                                              | Ja           | streng     |
| exclude_wifi_networks | forespørgsel | Vis Wi-Fi netværk efter deres SSID, for hvilket AdGuard DNS skal deaktiveres | Nej          | [ streng ] |
| exclude_domain          | forespørgsel | Oplist domæner, som vil bruge standard DNS-servere i stedet for AdGuard DNS  | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | DNS-over-HTTPS .plist-fil |
| 404  | Enhed ikke fundet         |

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Resumé

Generate and set new DNS-over-HTTPS password

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse                              |
| ---- | ---------------------------------------- |
| 200  | DNS-over-HTTPS adgangskode er nulstillet |
| 404  | Enhed ikke fundet                        |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Resumé

Gets DNS-over-TLS .mobileconfig file.

##### Parametre

| Navn                    | Placeret i   | Beskrivelse                                                                  | Obligatorisk | Struktur   |
| ----------------------- | ------------ | ---------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | sti          |                                                                              | Ja           | streng     |
| exclude_wifi_networks | forespørgsel | Vis Wi-Fi netværk efter deres SSID, for hvilket AdGuard DNS skal deaktiveres | Nej          | [ streng ] |
| exclude_domain          | forespørgsel | Oplist domæner, som vil bruge standard DNS-servere i stedet for AdGuard DNS  | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | DNS-over-HTTPS .plist-fil |
| 404  | Enhed ikke fundet         |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Resumé

Updates device settings

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------- | ---------- | ----------- | ------------ | -------- |
| device_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse                   |
| ---- | ----------------------------- |
| 200  | Enhedsindstillinger opdateret |
| 400  | Bekræftelse mislykkedes       |
| 404  | Enhed ikke fundet             |

### /oapi/v1/dns_servers

#### GET

##### Resumé

Lists DNS servers that belong to the user.

##### Beskrivelse

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | Liste over DNS-servere |

#### POST

##### Resumé

Creates a new DNS server

##### Beskrivelse

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Svar

| Kode | Beskrivelse                      |
| ---- | -------------------------------- |
| 200  | DNS-server oprettet              |
| 400  | Bekræftelse mislykkedes          |
| 429  | Kvote for antal DNS-servere nået |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### SLET

##### Resumé

Removes a DNS server

##### Beskrivelse

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------------- | ---------- | ----------- | ------------ | -------- |
| dns_server_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | DNS-server slettet     |
| 404  | DNS-server ikke fundet |

#### GET

##### Resumé

Gets an existing DNS server by ID

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------------- | ---------- | ----------- | ------------ | -------- |
| dns_server_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | DNS-serverinfo         |
| 404  | DNS-server ikke fundet |

#### PUT

##### Resumé

Updates an existing DNS server

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------------- | ---------- | ----------- | ------------ | -------- |
| dns_server_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse             |
| ---- | ----------------------- |
| 200  | DNS-server opdateret    |
| 400  | Bekræftelse mislykkedes |
| 404  | DNS-server ikke fundet  |

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Resumé

Updates DNS server settings

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Struktur |
| --------------- | ---------- | ----------- | ------------ | -------- |
| dns_server_id | sti        |             | Ja           | streng   |

##### Svar

| Kode | Beskrivelse                       |
| ---- | --------------------------------- |
| 200  | DNS-serverindstillinger opdateret |
| 400  | Bekræftelse mislykkedes           |
| 404  | DNS-server ikke fundet            |

### /oapi/v1/filter_lists

#### GET

##### Resumé

Gets filter lists

##### Svar

| Kode | Beskrivelse |
| ---- | ----------- |
| 200  | Filterliste |

### /oapi/v1/oauth_token

#### POST

##### Resumé

Generates Access and Refresh token

##### Svar

| Kode | Beskrivelse                                                                  |
| ---- | ---------------------------------------------------------------------------- |
| 200  | Adgangstoken udstedt                                                         |
| 400  | Mangler obligatoriske parametre                                              |
| 401  | Ugyldige legitimationsoplysninger, MFA-token eller opfriskningstoken angivet |

null

### /oapi/v1/query_log

#### SLET

##### Resumé

Clears query log

##### Svar

| Kode | Beskrivelse                    |
| ---- | ------------------------------ |
| 202  | Forespørgselslog hermed ryddet |

#### GET

##### Resumé

Gets query log

##### Parametre

| Navn               | Placeret i   | Beskrivelse                                                           | Obligatorisk | Struktur                                            |
| ------------------ | ------------ | --------------------------------------------------------------------- | ------------ | --------------------------------------------------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.)                                       | Ja           | long                                                |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.)                                       | Ja           | long                                                |
| enheder            | forespørgsel | Filtrer efter enheder                                                 | Nej          | [ streng ]                                          |
| lande              | forespørgsel | Filtrer efter lande                                                   | Nej          | [ streng ]                                          |
| virksomheder       | forespørgsel | Filtrer efter virksomheder                                            | Nej          | [ streng ]                                          |
| statusser          | forespørgsel | Filtrér efter statusser                                               | Nej          | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| kategorier         | forespørgsel | Filtrér efter kategorier                                              | Nej          | [ [CategoryType](#CategoryType) ]                   |
| søg                | forespørgsel | Filtrér efter domænenavn                                              | Nej          | streng                                              |
| begræns            | forespørgsel | Begræns antallet af returnerede poster                                | Nej          | heltal                                              |
| markør             | forespørgsel | Bladringsmarkør. Brug markøren fra svar til at bladre gennem siderne. | Nej          | streng                                              |

##### Svar

| Kode | Beskrivelse      |
| ---- | ---------------- |
| 200  | Forespørgselslog |

### /oapi/v1/revoke_token

#### POST

##### Resumé

Revokes a Refresh Token

##### Parametre

| Navn          | Placeret i   | Beskrivelse   | Obligatorisk | Struktur |
| ------------- | ------------ | ------------- | ------------ | -------- |
| refresh_token | forespørgsel | Refresh-token | Ja           | streng   |

##### Svar

| Kode | Beskrivelse           |
| ---- | --------------------- |
| 200  | Refresh-token ophævet |

null

### /oapi/v1/stats/categories

#### GET

##### Resumé

Gets categories statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                   |
| ---- | ----------------------------- |
| 200  | Kategoristatistikker modtaget |
| 400  | Bekræftelse mislykkedes       |

### /oapi/v1/stats/companies

#### GET

##### Resumé

Gets companies statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                      |
| ---- | -------------------------------- |
| 200  | Virksomhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes          |

### /oapi/v1/stats/companies/detailed

#### GET

##### Resumé

Gets detailed companies statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |
| markør             | forespørgsel | Bladringsmarkør                 | Nej          | streng     |

##### Svar

| Kode | Beskrivelse                                  |
| ---- | -------------------------------------------- |
| 200  | Detaljerede virksomhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes                      |

### /oapi/v1/stats/countries

#### GET

##### Resumé

Gets countries statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                |
| ---- | -------------------------- |
| 200  | Landestatistikker modtaget |
| 400  | Bekræftelse mislykkedes    |

### /oapi/v1/stats/devices

#### GET

##### Resumé

Gets devices statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                 |
| ---- | --------------------------- |
| 200  | Enhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes     |

### /oapi/v1/stats/domains

#### GET

##### Resumé

Gets domains statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                 |
| ---- | --------------------------- |
| 200  | Domænestatistikker modtaget |
| 400  | Bekræftelse mislykkedes     |

### /oapi/v1/stats/time

#### GET

##### Resumé

Gets time statistics

##### Parametre

| Navn               | Placeret i   | Beskrivelse                     | Obligatorisk | Struktur   |
| ------------------ | ------------ | ------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Tid fra i millisekunder (inkl.) | Ja           | long       |
| time_to_millis   | forespørgsel | Tid til i millisekunder (inkl.) | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder           | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande             | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | Tidsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes   |

### /oapi/v1/web_services

#### GET

##### Resumé

Lists web services

##### Svar

| Kode | Beskrivelse      |
| ---- | ---------------- |
| 200  | Webtjenesteliste |
