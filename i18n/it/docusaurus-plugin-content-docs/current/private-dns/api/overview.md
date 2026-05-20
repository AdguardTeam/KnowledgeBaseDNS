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

### Chiavi API

Se incluse nell'intestazione della richiesta, le chiavi API possono essere usate per autorizzare le richieste all'API utente.

#### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generazione delle chiavi API

Per assegnare o revocare le chiavi API, vai alla [sottosezione corrispondente](https://adguard-dns.io/en/dashboard/user-settings/api-keys) delle *Preferenze utente*.

### Token d'accesso

Se inclusi nell'intestazione della richiesta, i token di accesso possono essere usati per autorizzare le richieste all'API utente.

#### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Generating access tokens with username and password

Effettua una richiesta POST per il seguente URL con i parametri dati, per generare `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametro      | Descrizione                                                      |
|:-------------- |:---------------------------------------------------------------- |
| **grant_type** | Must be `password`                                               |
| **username**   | Account email                                                    |
| **password**   | Account password                                                 |
| mfa_token      | Two-factor authentication token (if enabled in account settings) |

Nella risposta, otterrai sia `access_token` che `refresh_token`.

- `access_token` scadrà dopo i secondi specificati (rappresentati dal parametro `expires_in` nella risposta). Puoi rigenerare un nuovo `access_token` utilizzando `refresh_token` (Fare riferimento a: `Genera Token d'Accesso dal Token di Aggiornamento`).

- `refresh_token` è permanente. Per revocare un `refresh_token`, fai riferimento a: `Revocare un Token di aggiornamento`.

##### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=password' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Esempio di risposta

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

#### Generazione di token di accesso da token di aggiornamento

I token d'accesso hanno una validità limitata. Una volta scaduta, la tua app dovrà utilizzarre il `token d'aggiornamento` per richiedere un nuovo `token d'accesso`.

Effettua la seguente richiesta POST con i dati parametri per ottenere un nuovo token d'accesso:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametro         | Descrizione                                          |
|:----------------- |:---------------------------------------------------- |
| **grant_type**    | Must be `refresh_token`                              |
| **refresh_token** | `REFRESH TOKEN` used to generate a new access token. |

##### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=refresh_token' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Esempio di risposta

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

#### Revoca dei token di aggiornamento

Per revocare un token d'aggiornamento, effettua la seguente richiesta di POST, con i seguenti parametri:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

##### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametro         | Descrizione                 |
|:----------------- |:--------------------------- |
| **refresh_token** | `REFRESH TOKEN` da revocare |

### Endpoint di autorizzazione

:::warning

Per accedere a questo endpoint, è necessario contattarci a **devteam@adguard.com**. Si prega di descrivere il motivo e gli casi d'uso per questo endpoint, nonché di fornire l'URI di reindirizzamento. Una volta approvato, riceverai un identificatore cliente unico, che dovrà essere utilizzato per il parametro **client_id**.

:::

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

Una risposta positiva è **302 Found**, che attiva un reindirizzamento a **redirect_uri** (che è un parametro di richiesta). I parametri della risposta sono incorporati nel componente frammento (la parte dopo il simbolo `#`) del `redirect_uri` nell'intestazione *Location*.

Ad esempio:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Authorization Code + PKCE

:::warning

To access this endpoint, please contact us at **devteam@adguard.com**. In your message, please describe the reason for and use cases of this endpoint, and provide the redirect URI. Once approved, you will receive a unique client identifier to use for the **client_id** parameter.

:::

The Authorization Code + PKCE flow is the **recommended integration method** for new clients. It is designed for public clients (single-page apps, mobile apps) and does not require a client secret.

**Step 1: Generate a code verifier and code challenge**

Generate a cryptographically random `code_verifier` (43–128 characters), then compute:

``` text
code_challenge = BASE64URL(SHA256(ASCII(code_verifier)))
```

**Step 2: Redirect the user to the authorization endpoint**

`GET https://api.adguard-dns.io/oapi/v1/oauth_authorize`

| Parametro                   | Obbligatorio | Descrizione                              |
|:--------------------------- |:------------ |:---------------------------------------- |
| **response_type**           | Sì           | Must be `code`                           |
| **client_id**               | Sì           | Your registered OAuth2 client identifier |
| **redirect_uri**            | Sì           | Where to redirect after authorization    |
| **state**                   | Sì           | Random string to prevent CSRF            |
| **code_challenge**          | Sì           | BASE64URL(SHA256(code_verifier))         |
| **code_challenge_method** | Sì           | Must be `S256`                           |

Esempio:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=RANDOM_STATE&code_challenge=CODE_CHALLENGE&code_challenge_method=S256
```

After successful authentication, the service redirects to:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI?code=AUTH_CODE&state=RANDOM_STATE
```

**Step 3: Exchange the code for an access token**

`POST https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametro         | Obbligatorio | Descrizione                                    |
|:----------------- |:------------ |:---------------------------------------------- |
| **grant_type**    | Sì           | Must be `authorization_code`                   |
| **code**          | Sì           | Authorization code received in Step 2          |
| **client_id**     | Sì           | Your registered OAuth2 client identifier       |
| **code_verifier** | Sì           | The original code verifier generated in Step 1 |
| **redirect_uri**  | Sì           | Must match the `redirect_uri` used in Step 2   |

#### Esempio di richiesta

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=authorization_code' \
    -d 'code=SplxlOBeZQQYbYS6WxSbIA' \
    -d 'client_id=CLIENT_ID' \
    -d 'code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk' \
    -d 'redirect_uri=REDIRECT_URI'
```

##### Esempio di risposta

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "expires_in": 2620978
}
```

## API

### Riferimento

Please see the [method’s reference](reference.md).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Registro delle modifiche

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Feedback

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
