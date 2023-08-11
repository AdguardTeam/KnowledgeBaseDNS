---
title: Reference
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!-- 
    The content below is simply an automatic conversion from the OpenAPI spec
    https://api.adguard-dns.io/static/swagger/openapi.json to markdown using
    https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

# AdGuard DNS API
DNS API-dokumentation

## Version: 1.4

### /oapi/v1/account/limits

#### GET
##### Resumé:

Henter kontokvoter

##### Svar

| Kode | Beskrivelse           |
| ---- | --------------------- |
| 200  | Kontobegrænsningsinfo |

### /oapi/v1/devices

#### GET
##### Resumé:

Oplist enheder

##### Svar

| Kode | Beskrivelse |
| ---- | ----------- |
| 200  | Enhedsliste |

#### POST
##### Resumé:

Opretter en ny enhed

##### Svar

| Kode | Beskrivelse                  |
| ---- | ---------------------------- |
| 200  | Enhed oprettet               |
| 400  | Bekræftelse mislykkedes      |
| 429  | Kvote for antal enheder nået |

### /oapi/v1/devices/{device_id}

#### SLET
##### Resumé:

Fjerner en enhed

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse       |
| ---- | ----------------- |
| 200  | Enhed slettet     |
| 404  | Enhed ikke fundet |

#### GET
##### Resumé:

Henter en eksisterede enhed jf. ID

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse       |
| ---- | ----------------- |
| 200  | Enhedsinfo        |
| 404  | Enhed ikke fundet |

#### PUT
##### Resumé:

Opdaterer en eksisterende enhed

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse             |
| ---- | ----------------------- |
| 200  | Enhed opdateret         |
| 400  | Bekræftelse mislykkedes |
| 404  | Enhed ikke fundet       |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET
##### Resumé:

Henter DNS-over-HTTPS .mobileconfig-filen.

##### Parametre

| Navn                    | Placeret i   | Beskrivelse                                                                  | Obligatorisk | Schema     |
| ----------------------- | ------------ | ---------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | sti          |                                                                              | Ja           | streng     |
| exclude_wifi_networks | forespørgsel | Vis Wi-Fi netværk efter deres SSID, for hvilket AdGuard DNS skal deaktiveres | Nej          | [ streng ] |
| exclude_domain          | forespørgsel | Oplist domæner, som vil bruge standard DNS-servere i stedet for AdGuard DNS  | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | DNS-over-HTTPS .plist-fil |
| 404  | Enhed ikke fundet         |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET
##### Resumé:

Henter DNS-over-TLS .mobileconfig-filen.

##### Parametre

| Navn                    | Placeret i   | Beskrivelse                                                                  | Obligatorisk | Schema     |
| ----------------------- | ------------ | ---------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | sti          |                                                                              | Ja           | streng     |
| exclude_wifi_networks | forespørgsel | Vis Wi-Fi netværk efter deres SSID, for hvilket AdGuard DNS skal deaktiveres | Nej          | [ streng ] |
| exclude_domain          | forespørgsel | Oplist domæner, som vil bruge standard DNS-servere i stedet for AdGuard DNS  | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | DNS-over-HTTPS .plist-fil |
| 404  | Enhed ikke fundet         |

### /oapi/v1/devices/{device_id}/settings

#### PUT
##### Resumé:

Opdaterer enhedsindstillinger

##### Parametre

| Navn      | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse                   |
| ---- | ----------------------------- |
| 200  | Enhedsindstillinger opdateret |
| 400  | Bekræftelse mislykkedes       |
| 404  | Enhed ikke fundet             |

### /oapi/v1/dns_servers

#### GET
##### Resumé:

Viser DNS-servere tilhørende brugeren.

##### Beskrivelse:

Viser DNS-servere tilhørende brugeren. Som standard er der mindst én standardserver.

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | Liste over DNS-servere |

#### POST
##### Resumé:

Opretter en ny DNS-server

##### Beskrivelse:

Opretter en ny DNS-server. Tilpassede indstillinger kan vedhæftes, ellers oprettes DNS-serveren med standardindstillinger.

##### Svar

| Kode | Beskrivelse                      |
| ---- | -------------------------------- |
| 200  | DNS-server oprettet              |
| 400  | Bekræftelse mislykkedes          |
| 429  | Kvote for antal DNS-servere nået |

### /oapi/v1/dns_servers/{dns_server_id}

#### SLET
##### Resumé:

Fjerner en DNS-server

##### Beskrivelse:

Fjerner en DNS-server. Alle enheder tilknyttet denne DNS-server flyttes til standard DNS-serveren. Sletning af en standard DNS-server er forbudt.

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | DNS-server slettet     |
| 404  | DNS-server ikke fundet |

#### GET
##### Resumé:

Henter en eksisterede DNS-server jf. ID

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse            |
| ---- | ---------------------- |
| 200  | DNS-serverinfo         |
| 404  | DNS-server ikke fundet |

#### PUT
##### Resumé:

Opdaterer en eksisterende DNS-server

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse             |
| ---- | ----------------------- |
| 200  | DNS-server opdateret    |
| 400  | Bekræftelse mislykkedes |
| 404  | DNS-server ikke fundet  |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT
##### Resumé:

Opdaterer DNS-serverindstillinger

##### Parametre

| Navn            | Placeret i | Beskrivelse | Obligatorisk | Schema |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | sti        |             | Ja           | streng |

##### Svar

| Kode | Beskrivelse                       |
| ---- | --------------------------------- |
| 200  | DNS-serverindstillinger opdateret |
| 400  | Bekræftelse mislykkedes           |
| 404  | DNS-server ikke fundet            |

### /oapi/v1/filter_lists

#### GET
##### Resumé:

Henter filterliste

##### Svar

| Kode | Beskrivelse |
| ---- | ----------- |
| 200  | Filterliste |

### /oapi/v1/oauth_token

#### POST
##### Resumé:

Genererer Access og Refresh tokener

##### Svar

| Kode | Beskrivelse                                                                  |
| ---- | ---------------------------------------------------------------------------- |
| 200  | Adgangstoken udstedt                                                         |
| 400  | Mangler obligatoriske parametre                                              |
| 401  | Ugyldige legitimationsoplysninger, MFA-token eller opfriskningstoken angivet |

null

### /oapi/v1/query_log

#### SLET
##### Resumé:

Rydder forespørgselslog

##### Svar

| Kode | Beskrivelse                    |
| ---- | ------------------------------ |
| 202  | Forespørgselslog hermed ryddet |

#### GET
##### Resumé:

Henter forespørgselslog

##### Parametre

| Navn               | Placeret i   | Beskrivelse                                                           | Obligatorisk | Schema                                              |
| ------------------ | ------------ | --------------------------------------------------------------------- | ------------ | --------------------------------------------------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive)                                 | Ja           | long                                                |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)                                   | Ja           | long                                                |
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
##### Resumé:

Ophæver et Refresh-token

##### Parametre

| Navn          | Placeret i   | Beskrivelse   | Obligatorisk | Schema |
| ------------- | ------------ | ------------- | ------------ | ------ |
| refresh_token | forespørgsel | Refresh-token | Ja           | streng |

##### Svar

| Kode | Beskrivelse           |
| ---- | --------------------- |
| 200  | Refresh-token ophævet |

null

### /oapi/v1/stats/categories

#### GET
##### Resumé:

Henter kategoristatistik

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                   |
| ---- | ----------------------------- |
| 200  | Kategoristatistikker modtaget |
| 400  | Bekræftelse mislykkedes       |

### /oapi/v1/stats/companies

#### GET
##### Resumé:

Henter virksomhedsstatistik

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                      |
| ---- | -------------------------------- |
| 200  | Virksomhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes          |

### /oapi/v1/stats/companies/detailed

#### GET
##### Resumé:

Henter detaljerede virksomhedsstatistikker

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |
| markør             | forespørgsel | Bladringsmarkør                       | Nej          | streng     |

##### Svar

| Kode | Beskrivelse                                  |
| ---- | -------------------------------------------- |
| 200  | Detaljerede virksomhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes                      |

### /oapi/v1/stats/countries

#### GET
##### Resumé:

Henter landestatistikker

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                |
| ---- | -------------------------- |
| 200  | Landestatistikker modtaget |
| 400  | Bekræftelse mislykkedes    |

### /oapi/v1/stats/devices

#### GET
##### Resumé:

Henter enhedsstatistikker

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                 |
| ---- | --------------------------- |
| 200  | Enhedsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes     |

### /oapi/v1/stats/domains

#### GET
##### Resumé:

Henter domænestatistikker

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse                 |
| ---- | --------------------------- |
| 200  | Domænestatistikker modtaget |
| 400  | Bekræftelse mislykkedes     |

### /oapi/v1/stats/time

#### GET
##### Resumé:

Henter tidsstatistikker

##### Parametre

| Navn               | Placeret i   | Beskrivelse                           | Obligatorisk | Schema     |
| ------------------ | ------------ | ------------------------------------- | ------------ | ---------- |
| time_from_millis | forespørgsel | Time from in milliseconds (inclusive) | Ja           | long       |
| time_to_millis   | forespørgsel | Time to in milliseconds (inclusive)   | Ja           | long       |
| enheder            | forespørgsel | Filtrer efter enheder                 | Nej          | [ streng ] |
| lande              | forespørgsel | Filtrer efter lande                   | Nej          | [ streng ] |

##### Svar

| Kode | Beskrivelse               |
| ---- | ------------------------- |
| 200  | Tidsstatistikker modtaget |
| 400  | Bekræftelse mislykkedes   |

### /oapi/v1/web_services

#### GET
##### Resumé:

Viser webtjenester

##### Svar

| Kode | Beskrivelse      |
| ---- | ---------------- |
| 200  | Webtjenesteliste |
