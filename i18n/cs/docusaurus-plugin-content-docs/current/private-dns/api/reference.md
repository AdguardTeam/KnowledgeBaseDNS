---
title: Odkaz
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

{/* The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
*/}

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Aktuální verze: 1.10

### /oapi/v1/account/limits

#### GET

##### Shrnutí

Gets account limits

##### Odezvy

| Kód | Popis                     |
| --- | ------------------------- |
| 200 | Informace o limitech účtu |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Shrnutí

Lists dedicated IPv4 addresses

##### Odezvy

| Kód | Popis                         |
| --- | ----------------------------- |
| 200 | Seznam vyhrazených adres IPv4 |

#### POST

##### Shrnutí

Allocates new IPv4

##### Odezvy

| Kód | Popis                                |
| --- | ------------------------------------ |
| 200 | Nová IPv4 byla úspěšně přidělena     |
| 429 | Počet vyhrazených IPv4 dosáhl limitu |

### /oapi/v1/devices

#### GET

##### Shrnutí

Lists devices

##### Odezvy

| Kód | Popis           |
| --- | --------------- |
| 200 | Seznam zařízení |

#### POST

##### Shrnutí

Creates a new device

##### Odezvy

| Kód | Popis                        |
| --- | ---------------------------- |
| 200 | Zařízení vytvořeno           |
| 400 | Ověření se nezdařilo         |
| 429 | Počet zařízení dosáhl limitu |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Shrnutí

Removes a device

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis               |
| --- | ------------------- |
| 200 | Zařízení smazáno    |
| 404 | Zařízení nenalezeno |

#### GET

##### Shrnutí

Gets an existing device by ID

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                |
| --- | -------------------- |
| 200 | Informace o zařízení |
| 404 | Zařízení nenalezeno  |

#### PUT

##### Shrnutí

Updates an existing device

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                  |
| --- | ---------------------- |
| 200 | Zařízení aktualizováno |
| 400 | Ověření se nezdařilo   |
| 404 | Zařízení nenalezeno    |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Shrnutí

List dedicated IPv4 and IPv6 addresses for a device

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                 |
| --- | --------------------- |
| 200 | Vyhrazené IPv4 a IPv6 |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Shrnutí

Unlink dedicated IPv4 from the device

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                                            |
| --- | ------------------------------------------------ |
| 200 | Vyhrazená IPv4 byla úspěšně odpojena od zařízení |
| 404 | Zařízení nebo adresa nalezeny                    |

#### POST

##### Shrnutí

Link dedicated IPv4 to the device

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                                            |
| --- | ------------------------------------------------ |
| 200 | Vyhrazená IPv4 byla úspěšně připojena zařízení   |
| 400 | Ověření se nezdařilo                             |
| 404 | Zařízení nebo adresa nalezeny                    |
| 429 | Počet vyhrazených připojených IPv4 dosáhl limitu |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Shrnutí

Gets DNS-over-HTTPS .mobileconfig file.

##### Parametry

| Název                   | Umístěno v | Popis                                                                      | Požadováno | Schéma      |
| ----------------------- | ---------- | -------------------------------------------------------------------------- | ---------- | ----------- |
| device_id               | cesta      |                                                                            | Ano        | řetězec     |
| exclude_wifi_networks | dotaz      | Seznam sítí Wi-Fi podle jejich SSID, ve kterých má být AdGuard DNS zakázán | Ne         | [ řetězec ] |
| exclude_domain          | dotaz      | Seznam domén, které budou používat výchozí servery DNS místo AdGuard DNS   | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                        |
| --- | ---------------------------- |
| 200 | Soubor .plist DNS-over-HTTPS |
| 404 | Zařízení nenalezeno          |

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Shrnutí

Generate and set new DNS-over-HTTPS password

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                                   |
| --- | --------------------------------------- |
| 200 | Heslo DNS-over-HTTPS úspěšně resetováno |
| 404 | Zařízení nenalezeno                     |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Shrnutí

Gets DNS-over-TLS .mobileconfig file.

##### Parametry

| Název                   | Umístěno v | Popis                                                                      | Požadováno | Schéma      |
| ----------------------- | ---------- | -------------------------------------------------------------------------- | ---------- | ----------- |
| device_id               | cesta      |                                                                            | Ano        | řetězec     |
| exclude_wifi_networks | dotaz      | Seznam sítí Wi-Fi podle jejich SSID, ve kterých má být AdGuard DNS zakázán | Ne         | [ řetězec ] |
| exclude_domain          | dotaz      | Seznam domén, které budou používat výchozí servery DNS místo AdGuard DNS   | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                        |
| --- | ---------------------------- |
| 200 | Soubor .plist DNS-over-HTTPS |
| 404 | Zařízení nenalezeno          |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Shrnutí

Updates device settings

##### Parametry

| Název     | Umístěno v | Popis | Požadováno | Schéma  |
| --------- | ---------- | ----- | ---------- | ------- |
| device_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                            |
| --- | -------------------------------- |
| 200 | Nastavení zařízení aktualizováno |
| 400 | Ověření se nezdařilo             |
| 404 | Zařízení nenalezeno              |

### /oapi/v1/dns_servers

#### GET

##### Shrnutí

Lists DNS servers that belong to the user.

##### Popis

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Odezvy

| Kód | Popis              |
| --- | ------------------ |
| 200 | Seznam DNS serverů |

#### POST

##### Shrnutí

Creates a new DNS server

##### Popis

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Odezvy

| Kód | Popis                           |
| --- | ------------------------------- |
| 200 | DNS server vytvořen             |
| 400 | Ověření se nezdařilo            |
| 429 | Počet DNS serverů dosáhl limitu |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Shrnutí

Removes a DNS server

##### Popis

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### Parametry

| Název           | Umístěno v | Popis | Požadováno | Schéma  |
| --------------- | ---------- | ----- | ---------- | ------- |
| dns_server_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                |
| --- | -------------------- |
| 200 | DNS server odstraněn |
| 404 | DNS server nenalezen |

#### GET

##### Shrnutí

Gets an existing DNS server by ID

##### Parametry

| Název           | Umístěno v | Popis | Požadováno | Schéma  |
| --------------- | ---------- | ----- | ---------- | ------- |
| dns_server_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                 |
| --- | --------------------- |
| 200 | Informace DNS serveru |
| 404 | DNS server nenalezen  |

#### PUT

##### Shrnutí

Updates an existing DNS server

##### Parametry

| Název           | Umístěno v | Popis | Požadováno | Schéma  |
| --------------- | ---------- | ----- | ---------- | ------- |
| dns_server_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                   |
| --- | ----------------------- |
| 200 | DNS server aktualizován |
| 400 | Ověření se nezdařilo    |
| 404 | DNS server nenalezen    |

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Shrnutí

Updates DNS server settings

##### Parametry

| Název           | Umístěno v | Popis | Požadováno | Schéma  |
| --------------- | ---------- | ----- | ---------- | ------- |
| dns_server_id | cesta      |       | Ano        | řetězec |

##### Odezvy

| Kód | Popis                               |
| --- | ----------------------------------- |
| 200 | Nastavení DNS serveru aktualizováno |
| 400 | Ověření se nezdařilo                |
| 404 | DNS server nenalezen                |

### /oapi/v1/filter_lists

#### GET

##### Shrnutí

Gets filter lists

##### Odezvy

| Kód | Popis         |
| --- | ------------- |
| 200 | Seznam filtrů |

### /oapi/v1/oauth_token

#### POST

##### Shrnutí

Generates Access and Refresh token

##### Odezvy

| Kód | Popis                                                       |
| --- | ----------------------------------------------------------- |
| 200 | Vydaný přístupový token                                     |
| 400 | Chybějící požadované parametry                              |
| 401 | Neplatná pověření, poskytnutý token MFA nebo obnovený token |

null

### /oapi/v1/query_log

#### DELETE

##### Shrnutí

Clears query log

##### Odezvy

| Kód | Popis                 |
| --- | --------------------- |
| 202 | Význam dotazu vymazán |

#### GET

##### Shrnutí

Gets query log

##### Parametry

| Název              | Umístěno v | Popis                                                                 | Požadováno | Schéma                                              |
| ------------------ | ---------- | --------------------------------------------------------------------- | ---------- | --------------------------------------------------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně)                                     | Ano        | délka                                               |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně)                                     | Ano        | délka                                               |
| zařízení           | dotaz      | Filtrování podle zařízení                                             | Ne         | [ řetězec ]                                         |
| země               | dotaz      | Filtrování podle zemí                                                 | Ne         | [ řetězec ]                                         |
| společnosti        | dotaz      | Filtrování podle společností                                          | Ne         | [ řetězec ]                                         |
| stavy              | dotaz      | Filtrování podle stavů                                                | Ne         | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| kategorie          | dotaz      | Filtrování podle kategorií                                            | Ne         | [ [CategoryType](#CategoryType) ]                   |
| hledat             | dotaz      | Filtrování podle názvu domény                                         | Ne         | řetězec                                             |
| limit              | dotaz      | Omezení počtu vrácených záznamů                                       | Ne         | celé číslo                                          |
| kurzor             | dotaz      | Stránkovací kurzor. Pro listování stránkami použijte kurzor z odezvy. | Ne         | řetězec                                             |

##### Odezvy

| Kód | Popis           |
| --- | --------------- |
| 200 | Protokol dotazů |

### /oapi/v1/revoke_token

#### POST

##### Shrnutí

Revokes a Refresh Token

##### Parametry

| Název         | Umístěno v | Popis         | Požadováno | Schéma  |
| ------------- | ---------- | ------------- | ---------- | ------- |
| refresh_token | dotaz      | Obnovit token | Ano        | řetězec |

##### Odezvy

| Kód | Popis                    |
| --- | ------------------------ |
| 200 | Obnovovací token odvolán |

null

### /oapi/v1/stats/categories

#### GET

##### Shrnutí

Gets categories statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                         |
| --- | ----------------------------- |
| 200 | Obdrženy statistiky kategorií |
| 400 | Ověření se nezdařilo          |

### /oapi/v1/stats/companies

#### GET

##### Shrnutí

Gets companies statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                           |
| --- | ------------------------------- |
| 200 | Obdrženy statistiky společností |
| 400 | Ověření se nezdařilo            |

### /oapi/v1/stats/companies/detailed

#### GET

##### Shrnutí

Gets detailed companies statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |
| kurzor             | dotaz      | Stránkovací kurzor                | Ne         | řetězec     |

##### Odezvy

| Kód | Popis                                    |
| --- | ---------------------------------------- |
| 200 | Obdrženy podrobné statistiky společností |
| 400 | Ověření se nezdařilo                     |

### /oapi/v1/stats/countries

#### GET

##### Shrnutí

Gets countries statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                    |
| --- | ------------------------ |
| 200 | Obdrženy statistiky zemí |
| 400 | Ověření se nezdařilo     |

### /oapi/v1/stats/devices

#### GET

##### Shrnutí

Gets devices statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                        |
| --- | ---------------------------- |
| 200 | Obdrženy statistiky zařízení |
| 400 | Ověření se nezdařilo         |

### /oapi/v1/stats/domains

#### GET

##### Shrnutí

Gets domains statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                     |
| --- | ------------------------- |
| 200 | Obdrženy statistiky domén |
| 400 | Ověření se nezdařilo      |

### /oapi/v1/stats/time

#### GET

##### Shrnutí

Gets time statistics

##### Parametry

| Název              | Umístěno v | Popis                             | Požadováno | Schéma      |
| ------------------ | ---------- | --------------------------------- | ---------- | ----------- |
| time_from_millis | dotaz      | "Čas od" v milisekundách (včetně) | Ano        | délka       |
| time_to_millis   | dotaz      | "Čas do" v milisekundách (včetně) | Ano        | délka       |
| zařízení           | dotaz      | Filtrování podle zařízení         | Ne         | [ řetězec ] |
| země               | dotaz      | Filtrování podle zemí             | Ne         | [ řetězec ] |

##### Odezvy

| Kód | Popis                    |
| --- | ------------------------ |
| 200 | Obdrženy statistiky času |
| 400 | Ověření se nezdařilo     |

### /oapi/v1/web_services

#### GET

##### Shrnutí

Lists web services

##### Odezvy

| Kód | Popis                  |
| --- | ---------------------- |
| 200 | Seznam webových služeb |
