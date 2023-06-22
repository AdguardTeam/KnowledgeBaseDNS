---
title: Odkaz
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
Dokumentace DNS API

## Verze: 1.4

### /oapi/v1/account/limits

#### GET
##### Shrnutí:

Zjišťuje limity účtu

##### Odezvy

| Kód | Popis                     |
| --- | ------------------------- |
| 200 | Informace o limitech účtu |

### /oapi/v1/devices

#### GET
##### Shrnutí:

Seznamy zařízení

##### Odezvy

| Kód | Popis           |
| --- | --------------- |
| 200 | Seznam zařízení |

#### POST
##### Shrnutí:

Vytvoří nové zařízení

##### Odezvy

| Kód | Popis                        |
| --- | ---------------------------- |
| 200 | Zařízení vytvořeno           |
| 400 | Ověření se nezdařilo         |
| 429 | Počet zařízení dosáhl limitu |

### /oapi/v1/devices/{device_id}

#### DELETE
##### Shrnutí:

Odstraní zařízení

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
##### Shrnutí:

Získá existující zařízení podle ID

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
##### Shrnutí:

Aktualizuje existující zařízení

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

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET
##### Shrnutí:

Získá soubor .mobileconfig DNS-over-HTTPS.

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

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET
##### Shrnutí:

Získá soubor .mobileconfig DNS-over-TLS.

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

### /oapi/v1/devices/{device_id}/settings

#### PUT
##### Shrnutí:

Aktualizuje nastavení zařízení

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
##### Shrnutí:

Seznam DNS serverů, které patří uživateli.

##### Popis:

Seznam DNS serverů, které patří uživateli. Ve výchozím nastavení je alespoň jeden výchozí server.

##### Odezvy

| Kód | Popis              |
| --- | ------------------ |
| 200 | Seznam DNS serverů |

#### POST
##### Shrnutí:

Vytvoří nový DNS server

##### Popis:

Vytvoří nový DNS server. Můžete připojit vlastní nastavení, jinak bude DNS server vytvořen s výchozím nastavením.

##### Odezvy

| Kód | Popis                           |
| --- | ------------------------------- |
| 200 | DNS server vytvořen             |
| 400 | Ověření se nezdařilo            |
| 429 | Počet DNS serverů dosáhl limitu |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE
##### Shrnutí:

Odstraní DNS server

##### Popis:

Odstraní DNS server. Všechna zařízení připojená k tomuto DNS serveru budou přesunuta na výchozí DNS server. Odstranění výchozího DNS serveru je zakázáno.

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
##### Shrnutí:

Získá existující DNS server podle ID

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
##### Shrnutí:

Aktualizuje existující DNS server

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

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT
##### Shrnutí:

Aktualizuje nastavení DNS serveru

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
##### Shrnutí:

Získá seznamy filtrů

##### Odezvy

| Kód | Popis         |
| --- | ------------- |
| 200 | Seznam filtrů |

### /oapi/v1/oauth_token

#### POST
##### Shrnutí:

Vygeneruje přístupový a obnovovací token

##### Odezvy

| Kód | Popis                                                       |
| --- | ----------------------------------------------------------- |
| 200 | Vydaný přístupový token                                     |
| 400 | Chybějící požadované parametry                              |
| 401 | Neplatná pověření, poskytnutý token MFA nebo obnovený token |

null

### /oapi/v1/query_log

#### DELETE
##### Shrnutí:

Vymaže záznamy dotazů

##### Odezvy

| Kód | Popis                 |
| --- | --------------------- |
| 202 | Význam dotazu vymazán |

#### GET
##### Shrnutí:

Získá záznamy dotazů

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
##### Shrnutí:

Odvolá obnovovací token

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
##### Shrnutí:

Získá statistiky kategorií

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
##### Shrnutí:

Získá statistiky společností

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
##### Shrnutí:

Získá podrobné statistiky společností

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
##### Shrnutí:

Získá statistiky zemí

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
##### Shrnutí:

Získá statistiky zařízení

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
##### Shrnutí:

Získá statistiky domén

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
##### Shrnutí:

Získá statistiky času

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
##### Shrnutí:

Vypíše webové služby

##### Odezvy

| Kód | Popis                  |
| --- | ---------------------- |
| 200 | Seznam webových služeb |
