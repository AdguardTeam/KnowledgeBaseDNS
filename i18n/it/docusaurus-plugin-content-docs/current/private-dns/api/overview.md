---
title: Panoramica
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS fornisce un'API di REST che puoi utilizzare per integrare con esso le tue app.

## Autenticazione

### Genera Token d'accesso

Effettua una richiesta POST per il seguente URL con i parametri dati, per generare `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametro    | Descrizione                                                                         |
|:------------ |:----------------------------------------------------------------------------------- |
| **username** | Email del profilo                                                                   |
| **password** | Password del profilo                                                                |
| mfa_token    | Token di autenticazione a due fattori (se abilitato nelle impostazioni del profilo) |

Nella risposta, otterrai sia `access_token` che `refresh_token`.

- `access_token` scadrà dopo i secondi specificati (rappresentati dal parametro `expires_in` nella risposta). Puoi rigenerare un nuovo `access_token` utilizzando `refresh_token` (Fare riferimento a: `Genera Token d'Accesso dal Token di Aggiornamento`).

- `refresh_token` è permanente. Per revocare un `refresh_token`, fai riferimento a: `Revocare un Token di aggiornamento`.

#### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Esempio di risposta

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Genera Token d'Accesso dal Token di Aggiornamento

I token d'accesso hanno una validità limitata. Una volta scaduta, la tua app dovrà utilizzarre il `token d'aggiornamento` per richiedere un nuovo `token d'accesso`.

Effettua la seguente richiesta POST con i dati parametri per ottenere un nuovo token d'accesso:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametro         | Descrizione                                                            |
|:----------------- |:---------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, con cui dev'essere generato un nuovo token d'accesso. |

#### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Esempio di risposta

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Revocare un Token di Aggiornamento

Per revocare un token d'aggiornamento, effettua la seguente richiesta di POST, con i seguenti parametri:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Esempio di Richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametro         | Descrizione                 |
|:----------------- |:--------------------------- |
| **refresh_token** | `REFRESH TOKEN` da revocare |

### Endpoint di autorizzazione

> Per accedere a questo endpoint, è necessario contattarci a **devteam@adguard.com**. Si prega di descrivere il motivo e gli casi d'uso per questo endpoint, nonché di fornire l'URI di reindirizzamento. Una volta approvato, riceverai un identificatore cliente unico, che dovrà essere utilizzato per il parametro **client_id**.

L'endpoint **/oapi/v1/oauth_authorize** viene utilizzato per interagire con il proprietario delle risorse e ottenere l'autorizzazione per accedere alla risorsa protetta.

Il servizio ti reindirizza ad AdGuard per l'autenticazione (se non hai già effettuato l'accesso) e poi di nuovo alla tua applicazione.

I parametri della richiesta dell'endpoint **/oapi/v1/oauth_authorize** sono:

| Parametro         | Descrizione                                                                                                                                                                         |
|:----------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Indica al server di autorizzazione quale concessione eseguire                                                                                                                       |
| **client_id**     | L'ID del client OAuth che richiede l'autorizzazione                                                                                                                                 |
| **redirect_uri**  | Contiene un URL. Una risposta positiva da questo endpoint comporta un reindirizzamento a questo URL                                                                                 |
| **state**         | Un valore opaco utilizzato per scopi di sicurezza. Se questo parametro di richiesta è impostato nella richiesta, viene restituito all'applicazione come parte dell'**redirect_uri** |
| **aid**           | Identificatore affiliato                                                                                                                                                            |

Ad esempio:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

Per informare il server di autorizzazione quale tipo di concessione utilizzare, il parametro di richiesta **response_type** viene utilizzato come segue:

- Per la concessione implicita, usa **response_type=token** per includere un token di accesso.

Una risposta positiva è **302 Found**, che attiva un reindirizzamento a **redirect_uri** (che è un parametro di richiesta). I parametri di risposta sono incorporati nel componente frammento (la parte dopo `#`) del parametro **redirect_uri** nell'intestazione **Location**.

Ad esempio:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Accesso all'API

Una volta che i token d'accesso e di aggiornamento sono generati, le chiamate all'API possono essere effettuate passando il token d'accesso nell'intestazione.

- Il nome dell'intestazione dovrebbe essere `Authorization`
- Il nome dell'intestazione dovrebbe essere `Bearer {access_token}`

## API

### Riferimento

Sei pregato di consultare i riferimenti del metodo, [qui](reference.md).

### Specifiche OpenAPI

Le specifiche di OpenAPI sono disponibili a [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Puoi utilizzare diversi strumenti per visualizzare l'elenco dei metodi API disponibili. Ad esempio, puoi aprire questo file su [https://editor.swagger.io/][swagger].

### Registro delle modifiche

Il registro delle modifiche completo dell'API DNS di AdGuard è disponibile su [questa pagina](private-dns/api/changelog.md).

## Feedback

Se vorresti che quest'API fosse estesa con nuovi metodi, ti preghiamo di inviarci un'email a `devteam@adguard.com` e di farci sapere cosa vorresti fosse aggiunto.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
