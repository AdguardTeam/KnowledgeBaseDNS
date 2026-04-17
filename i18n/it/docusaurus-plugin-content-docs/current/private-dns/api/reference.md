---
title: Riferimento
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Versione attuale: 1.10

### /oapi/v1/account/limits

#### GET

##### Riepilogo

Gets account limits

##### Risposte

| Codice | Descrizione                         |
| ------ | ----------------------------------- |
| 200    | Informazioni sui limiti del profilo |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Riepilogo

Lists dedicated IPv4 addresses

##### Risposte

| Codice | Descrizione                         |
| ------ | ----------------------------------- |
| 200    | Lista degli indirizzi IPv4 dedicati |

#### POST

##### Riepilogo

Allocates new IPv4

##### Risposte

| Codice | Descrizione                                             |
| ------ | ------------------------------------------------------- |
| 200    | Nuovo IPv4 assegnato con successo                       |
| 429    | Il conteggio degli IPv4 dedicati ha raggiunto il limite |

### /oapi/v1/devices

#### GET

##### Riepilogo

Lists devices

##### Risposte

| Codice | Descrizione           |
| ------ | --------------------- |
| 200    | Elenco di dispositivi |

#### POST

##### Riepilogo

Creates a new device

##### Risposte

| Codice | Descrizione                                         |
| ------ | --------------------------------------------------- |
| 200    | Dispositivo creato                                  |
| 400    | Convalida fallita                                   |
| 429    | Il conteggio dei dispositivi ha raggiunto il limite |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Riepilogo

Removes a device

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione             |
| ------ | ----------------------- |
| 200    | Dispositivo eliminato   |
| 404    | Dispositivo non trovato |

#### GET

##### Riepilogo

Gets an existing device by ID

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                  |
| ------ | ---------------------------- |
| 200    | Informazioni sul dispositivo |
| 404    | Dispositivo non trovato      |

#### PUT

##### Riepilogo

Updates an existing device

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione             |
| ------ | ----------------------- |
| 200    | Dispositivo aggiornato  |
| 400    | Convalida fallita       |
| 404    | Dispositivo non trovato |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Riepilogo

List dedicated IPv4 and IPv6 addresses for a device

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione          |
| ------ | -------------------- |
| 200    | IPv4 e IPv6 dedicati |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Riepilogo

Unlink dedicated IPv4 from the device

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                                           |
| ------ | ----------------------------------------------------- |
| 200    | IPv4 dedicato scollegato con successo dal dispositivo |
| 404    | Dispositivo o indirizzo non trovato                   |

#### POST

##### Riepilogo

Link dedicated IPv4 to the device

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                                                       |
| ------ | ----------------------------------------------------------------- |
| 200    | IPv4 dedicato collegato con successo al dispositivo               |
| 400    | Convalida fallita                                                 |
| 404    | Dispositivo o indirizzo non trovato                               |
| 429    | Il conteggio degli IPv4 dedicati collegati ha raggiunto il limite |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Riepilogo

Gets DNS-over-HTTPS .mobileconfig file.

##### Parametri

| Nome                    | Situato in | Descrizione                                                                                | Obbligatorio | Tipo       |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------ | ------------ | ---------- |
| device_id               | path       |                                                                                            | Sì           | string     |
| exclude_wifi_networks | query      | Elenca le reti Wi-Fi secondo il loro SSID in cui desideri che AdGuard DNS sia disabilitato | No           | [ string ] |
| exclude_domain          | query      | Elenca i domini che utilizzeranno i server DNS predefiniti, al posto di AdGuard DNS        | No           | [ string ] |

##### Risposte

| Codice | Descrizione                    |
| ------ | ------------------------------ |
| 200    | File .plist del DNS-over-HTTPS |
| 404    | Dispositivo non trovato        |

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Riepilogo

Generate and set new DNS-over-HTTPS password

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                                      |
| ------ | ------------------------------------------------ |
| 200    | Password DNS-over-HTTPS reimpostata con successo |
| 404    | Dispositivo non trovato                          |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Riepilogo

Gets DNS-over-TLS .mobileconfig file.

##### Parametri

| Nome                    | Situato in | Descrizione                                                                                | Obbligatorio | Tipo       |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------ | ------------ | ---------- |
| device_id               | path       |                                                                                            | Sì           | string     |
| exclude_wifi_networks | query      | Elenca le reti Wi-Fi secondo il loro SSID in cui desideri che AdGuard DNS sia disabilitato | No           | [ string ] |
| exclude_domain          | query      | Elenca i domini che utilizzeranno i server DNS predefiniti, al posto di AdGuard DNS        | No           | [ string ] |

##### Risposte

| Codice | Descrizione                  |
| ------ | ---------------------------- |
| 200    | File .plist del DNS-over-TLS |
| 404    | Dispositivo non trovato      |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Riepilogo

Updates device settings

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                             |
| ------ | --------------------------------------- |
| 200    | Impostazioni del dispositivo aggiornate |
| 400    | Convalida fallita                       |
| 404    | Dispositivo non trovato                 |

### /oapi/v1/dns_servers

#### GET

##### Riepilogo

Lists DNS servers that belong to the user.

##### Descrizione

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Risposte

| Codice | Descrizione          |
| ------ | -------------------- |
| 200    | Elenco di server DNS |

#### POST

##### Riepilogo

Creates a new DNS server

##### Descrizione

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Risposte

| Codice | Descrizione                                        |
| ------ | -------------------------------------------------- |
| 200    | Server DNS creato                                  |
| 400    | Convalida fallita                                  |
| 429    | Il conteggio dei server DNS ha raggiunto il limite |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Riepilogo

Removes a DNS server

##### Descrizione

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### Parametri

| Nome            | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione            |
| ------ | ---------------------- |
| 200    | Server DNS eliminato   |
| 404    | Server DNS non trovato |

#### GET

##### Riepilogo

Gets an existing DNS server by ID

##### Parametri

| Nome            | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                 |
| ------ | --------------------------- |
| 200    | Informazioni sul server DNS |
| 404    | Server DNS non trovato      |

#### PUT

##### Riepilogo

Updates an existing DNS server

##### Parametri

| Nome            | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione            |
| ------ | ---------------------- |
| 200    | Server DNS aggiornato  |
| 400    | Convalida fallita      |
| 404    | Server DNS non trovato |

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Riepilogo

Updates DNS server settings

##### Parametri

| Nome            | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------------- | ---------- | ----------- | ------------ | ------ |
| dns_server_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                            |
| ------ | -------------------------------------- |
| 200    | Impostazioni del server DNS aggiornate |
| 400    | Convalida fallita                      |
| 404    | Server DNS non trovato                 |

### /oapi/v1/filter_lists

#### GET

##### Riepilogo

Gets filter lists

##### Risposte

| Codice | Descrizione      |
| ------ | ---------------- |
| 200    | Elenco di filtri |

### /oapi/v1/oauth_token

#### POST

##### Riepilogo

Generates Access and Refresh token

##### Risposte

| Codice | Descrizione                                                  |
| ------ | ------------------------------------------------------------ |
| 200    | Token d'accesso emesso                                       |
| 400    | Parametri obbligatori mancanti                               |
| 401    | Credenziali non valide, token MFA o di aggiornamento forniti |

null

### /oapi/v1/query_log

#### DELETE

##### Riepilogo

Clears query log

##### Risposte

| Codice | Descrizione                                    |
| ------ | ---------------------------------------------- |
| 202    | Il registro delle richieste è stato cancellato |

#### GET

##### Riepilogo

Gets query log

##### Parametri

| Nome               | Situato in | Descrizione                                                                          | Obbligatorio | Tipo                                                |
| ------------------ | ---------- | ------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso)                                                   | Sì           | long                                                |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)                                                    | Sì           | long                                                |
| devices            | query      | Filtra per dispositivi                                                               | No           | [ string ]                                          |
| countries          | query      | Filtra per paesi                                                                     | No           | [ string ]                                          |
| companies          | query      | Filtra per aziende                                                                   | No           | [ string ]                                          |
| statuses           | query      | Filtra per stati                                                                     | No           | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | query      | Filtra per categorie                                                                 | No           | [ [CategoryType](#CategoryType) ]                   |
| search             | query      | Filtra per nome di dominio                                                           | No           | string                                              |
| limit              | query      | Limita il numero di registri da restituire                                           | No           | integer                                             |
| cursor             | query      | Cursore d'impaginazione. Utilizza il cursore dalla risposta per sfogliare le pagine. | No           | string                                              |

##### Risposte

| Codice | Descrizione              |
| ------ | ------------------------ |
| 200    | Registro delle richieste |

### /oapi/v1/revoke_token

#### POST

##### Riepilogo

Revokes a Refresh Token

##### Parametri

| Nome          | Situato in | Descrizione           | Obbligatorio | Tipo   |
| ------------- | ---------- | --------------------- | ------------ | ------ |
| refresh_token | query      | Token d'Aggiornamento | Sì           | string |

##### Risposte

| Codice | Descrizione                    |
| ------ | ------------------------------ |
| 200    | Token d'aggiornamento revocato |

null

### /oapi/v1/stats/categories

#### GET

##### Riepilogo

Gets categories statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                          |
| ------ | ------------------------------------ |
| 200    | Statistiche delle categorie ricevute |
| 400    | Convalida fallita                    |

### /oapi/v1/stats/companies

#### GET

##### Riepilogo

Gets companies statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                        |
| ------ | ---------------------------------- |
| 200    | Statistiche delle aziende ricevute |
| 400    | Convalida fallita                  |

### /oapi/v1/stats/companies/detailed

#### GET

##### Riepilogo

Gets detailed companies statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |
| cursor             | query      | Cursore d'impaginazione            | No           | string     |

##### Risposte

| Codice | Descrizione                                    |
| ------ | ---------------------------------------------- |
| 200    | Statistiche dettagliate delle aziende ricevute |
| 400    | Convalida fallita                              |

### /oapi/v1/stats/countries

#### GET

##### Riepilogo

Gets countries statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                    |
| ------ | ------------------------------ |
| 200    | Statistiche dei paesi ricevute |
| 400    | Convalida fallita              |

### /oapi/v1/stats/devices

#### GET

##### Riepilogo

Gets devices statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                          |
| ------ | ------------------------------------ |
| 200    | Statistiche dei dispositivi ricevute |
| 400    | Convalida fallita                    |

### /oapi/v1/stats/domains

#### GET

##### Riepilogo

Gets domains statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                     |
| ------ | ------------------------------- |
| 200    | Statistiche dei domini ricevute |
| 400    | Convalida fallita               |

### /oapi/v1/stats/time

#### GET

##### Riepilogo

Gets time statistics

##### Parametri

| Nome               | Situato in | Descrizione                        | Obbligatorio | Tipo       |
| ------------------ | ---------- | ---------------------------------- | ------------ | ---------- |
| time_from_millis | query      | Tempo da in millisecondi (incluso) | Sì           | long       |
| time_to_millis   | query      | Tempo a in millisecondi (incluso)  | Sì           | long       |
| devices            | query      | Filtra per dispositivi             | No           | [ string ] |
| countries          | query      | Filtra per paesi                   | No           | [ string ] |

##### Risposte

| Codice | Descrizione                      |
| ------ | -------------------------------- |
| 200    | Statistiche del periodo ricevute |
| 400    | Convalida fallita                |

### /oapi/v1/web_services

#### GET

##### Riepilogo

Lists web services

##### Risposte

| Codice | Descrizione           |
| ------ | --------------------- |
| 200    | Elenco di servizi web |
