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

Questo articolo contiene la documentazione per l'[API di AdGuard DNS](private-dns/api/overview.md). Per il registro delle modifiche completo dell'API di AdGuard DNS, visita [questa pagina](private-dns/api/changelog.md).

## Current version: 1.10

### /oapi/v1/account/limits

#### GET

##### Riepilogo

Ottiene i limiti del profilo

##### Risposte

| Codice | Descrizione                         |
| ------ | ----------------------------------- |
| 200    | Informazioni sui limiti del profilo |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Riepilogo

Elenca gli indirizzi IPv4 dedicati

##### Risposte

| Codice | Descrizione                         |
| ------ | ----------------------------------- |
| 200    | Lista degli indirizzi IPv4 dedicati |

#### POST

##### Riepilogo

Assegna un nuovo IPv4

##### Risposte

| Codice | Descrizione                                             |
| ------ | ------------------------------------------------------- |
| 200    | Nuovo IPv4 assegnato con successo                       |
| 429    | Il conteggio degli IPv4 dedicati ha raggiunto il limite |

### /oapi/v1/devices

#### GET

##### Riepilogo

Elenca i dispositivi

##### Risposte

| Codice | Descrizione           |
| ------ | --------------------- |
| 200    | Elenco di dispositivi |

#### POST

##### Riepilogo

Crea un nuovo dispositivo

##### Risposte

| Codice | Descrizione                                         |
| ------ | --------------------------------------------------- |
| 200    | Dispositivo creato                                  |
| 400    | Convalida fallita                                   |
| 429    | Il conteggio dei dispositivi ha raggiunto il limite |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Riepilogo

Rimuove un dispositivo

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

Ottiene un dispositivo esistente per ID

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

Aggiorna un dispositivo esistente

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

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### GET

##### Riepilogo

Elenca gli indirizzi IPv4 e IPv6 dedicati per un dispositivo

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione          |
| ------ | -------------------- |
| 200    | IPv4 e IPv6 dedicati |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### DELETE

##### Riepilogo

Scollega l'IPv4 dedicato dal dispositivo

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

Collega l'IPv4 dedicato al dispositivo

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

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Riepilogo

Ottiene il file DNS-over-HTTPS .mobileconfig.

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

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Riepilogo

Genera e imposta una nuova password DNS-over-HTTPS

##### Parametri

| Nome      | Situato in | Descrizione | Obbligatorio | Tipo   |
| --------- | ---------- | ----------- | ------------ | ------ |
| device_id | path       |             | Sì           | string |

##### Risposte

| Codice | Descrizione                                      |
| ------ | ------------------------------------------------ |
| 200    | Password DNS-over-HTTPS reimpostata con successo |
| 404    | Dispositivo non trovato                          |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Riepilogo

Ottiene il file .mobileconfig. del DNS-over-TLS.

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

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Riepilogo

Aggiorna le impostazioni del dispositivo

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

Elenca i server DNS appartenenti all'utente.

##### Descrizione

Elenca i server DNS appartenenti all'utente. Di default, esiste almeno un server predefinito.

##### Risposte

| Codice | Descrizione          |
| ------ | -------------------- |
| 200    | Elenco di server DNS |

#### POST

##### Riepilogo

Crea un nuovo server DNS

##### Descrizione

Crea un nuovo server DNS. Puoi allegare delle impostazioni personalizzate, altrimenti il server DNS sarà creato con le impostazioni predefinite.

##### Risposte

| Codice | Descrizione                                        |
| ------ | -------------------------------------------------- |
| 200    | Server DNS creato                                  |
| 400    | Convalida fallita                                  |
| 429    | Il conteggio dei server DNS ha raggiunto il limite |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Riepilogo

Rimuove un server DNS

##### Descrizione

Rimuove un server DNS. Tutti i dispositivi collegati a questo server DNS saranno spostati al server DNS predefinito. Eliminare il server DNS predefinito è vietato.

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

Ottiene un server DNS esistente per ID

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

Aggiorna un server DNS esistente

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

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Riepilogo

Aggiorna le impostazioni del server DNS

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

Ottiene gli elenchi di filtri

##### Risposte

| Codice | Descrizione      |
| ------ | ---------------- |
| 200    | Elenco di filtri |

### /oapi/v1/oauth_token

#### POST

##### Riepilogo

Genera il token di Accesso e Aggiornamento

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

Cancella il registro delle richieste

##### Risposte

| Codice | Descrizione                                    |
| ------ | ---------------------------------------------- |
| 202    | Il registro delle richieste è stato cancellato |

#### GET

##### Riepilogo

Ottiene il registro delle richieste

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

Revoca un Token d'Aggiornamento

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

Ottiene le statistiche delle categorie

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

Ottiene le statistiche delle aziende

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

Ottiene le statistiche dettagliate delle aziende

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

Ottiene le statistiche dei paesi

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

Ottiene le statistiche dei dispositivi

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

Ottiene le statistiche dei domini

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

Ottiene le statistiche del periodo

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

Elenca i servizi web

##### Risposte

| Codice | Descrizione           |
| ------ | --------------------- |
| 200    | Elenco di servizi web |
