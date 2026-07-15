---
title: Vue d'ensemble
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS fournit une API REST que vous pouvez utiliser pour y intégrer vos applications.

## Authentification

### Clés API

Lorsqu'elles sont incluses dans l'en-tête de la requête, les clés API peuvent être utilisées pour autoriser les requêtes adressées à l'API utilisateur.

#### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization : ApiKey {api_key}'
```

#### Génération de clés API

Pour attribuer ou révoquer des clés API, allez dans la [sous-section correspondante](https://adguard-dns.io/en/dashboard/user-settings/api-keys) des *préférences de l'utilisateur*.

### Jetons d'accès

Lorsqu'ils sont inclus dans l'en-tête de la demande, les jetons d'accès peuvent être utilisés pour autoriser les demandes auprès de l'API utilisateur.

#### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization : Bearer {access_token}'
```

#### Generating access tokens with username and password

Faites une requête POST pour l'URL suivante avec les paramètres donnés pour générer le `access_token` :

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Paramètre      | Description                                                      |
|:-------------- |:---------------------------------------------------------------- |
| **grant_type** | Must be `password`                                               |
| **username**   | Account email                                                    |
| **password**   | Account password                                                 |
| mfa_token      | Two-factor authentication token (if enabled in account settings) |

Dans la réponse, vous obtiendrez à la fois `access_token` et `refresh_token`.

- Le `access_token` expirera après un certain nombre de secondes spécifiées (représentées par le paramètre `expires_in` dans la réponse). Vous pouvez régénérer un nouveau `access_token` en utilisant le `refresh_token` (Référez-vous à : `Générer un jeton d'accès à partir du jeton d'actualisation`).

- Le `refresh_token` est permanent. Pour révoquer un `refresh_token` référez-vous à : `Révocation d’un jeton d’actualisation`.

##### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=password' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Exemple de réponse

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

#### Génération de jetons d’accès à partir de jetons d'actualisation

Les jetons d'accès ont une validité limitée. Une fois qu'il a expiré, votre application devra utiliser le `jeton d'actualisation` pour demander un nouveau `jeton d'accès`.

Effectuez la requête POST suivante avec les paramètres donnés pour obtenir un nouveau jeton d'accès :

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Paramètre         | Description                                          |
|:----------------- |:---------------------------------------------------- |
| **grant_type**    | Must be `refresh_token`                              |
| **refresh_token** | `REFRESH TOKEN` used to generate a new access token. |

##### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=refresh_token' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Exemple de réponse

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

#### Révocation d'un jeton d'actualisation

Pour révoquer un jeton d'actualisation, effectuez la requête POST suivante avec les paramètres donnés :

`https://api.adguard-dns.io/oapi/v1/revoke_token`

##### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Paramètre         | Description                           |
|:----------------- |:------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` qui doit être révoqué |

### Point de terminaison d'autorisation

:::avertissement

Pour accéder à ce point de terminaison, vous devez nous contacter à **devteam@adguard.com**. Veuillez décrire la raison et les cas d'utilisation de ce point de terminaison, et fournir l'URL de redirection. Une fois l’approbation obtenue, vous recevrez un identificateur de client unique, qui doit être utilisé pour le paramètre **client_id**.

:::

Le point de terminaison **/oapi/v1/oauth_authorize** est utilisé pour interagir avec le propriétaire de la ressource et obtenir l'autorisation d'accéder à la ressource protégée.

Le service vous redirige vers AdGuard pour authentification (si vous n'êtes pas déjà connecté) puis vers votre application.

Les paramètres de la requête du point de terminaison **/oapi/v1/oauth_authorize** sont :

| Paramètre         | Description                                                                                                                                                                  |
|:----------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Indique au serveur d'autorisation quel autoriser exécuter                                                                                                                    |
| **client_id**     | L'ID du client OAuth qui demande une autorisation                                                                                                                            |
| **redirect_uri**  | Contient une URL. Une réponse réussie de ce point de terminaison entraîne une redirection vers cette URL                                                                     |
| **state**         | Une valeur opaque utilisée à des fins de sécurité. Si ce paramètre de requête est défini dans la requête, il est renvoyé à l'application dans le cadre de l'**redirect_uri** |
| **aid**           | Identifiant de l'affilié                                                                                                                                                     |

Par exemple :

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

Pour informer le serveur d'autorisation du type de demande à utiliser, le paramètre de requête **response_type** est utilisé comme suit :

- Pour l'autorisation implicite, utilisez **response_type=token** pour inclure un jeton d'accès.

Une réponse réussie est **302 Found**, ce qui déclenche une redirection vers **redirect_uri** (qui est un paramètre de requête). Les paramètres de réponse sont intégrés dans le fragment (la partie après le symbole `#` ) du `redirect_uri` dans l'en-tête *Location*.

Par exemple :

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Authorization Code + PKCE

:::avertissement

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

| Paramètre                   | Obligatoire | Description                              |
|:--------------------------- |:----------- |:---------------------------------------- |
| **response_type**           | Oui         | Must be `code`                           |
| **client_id**               | Oui         | Your registered OAuth2 client identifier |
| **redirect_uri**            | Oui         | Where to redirect after authorization    |
| **state**                   | Oui         | Random string to prevent CSRF            |
| **code_challenge**          | Oui         | BASE64URL(SHA256(code_verifier))         |
| **code_challenge_method** | Oui         | Must be `S256`                           |

Exemple :

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

| Paramètre         | Obligatoire | Description                                    |
|:----------------- |:----------- |:---------------------------------------------- |
| **grant_type**    | Oui         | Must be `authorization_code`                   |
| **code**          | Oui         | Authorization code received in Step 2          |
| **client_id**     | Oui         | Your registered OAuth2 client identifier       |
| **code_verifier** | Oui         | The original code verifier generated in Step 1 |
| **redirect_uri**  | Oui         | Must match the `redirect_uri` used in Step 2   |

#### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=authorization_code' \
    -d 'code=SplxlOBeZQQYbYS6WxSbIA' \
    -d 'client_id=CLIENT_ID' \
    -d 'code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk' \
    -d 'redirect_uri=REDIRECT_URI'
```

##### Exemple de réponse

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "expires_in": 2620978
}
```

## API

### Référence

Please see the [method’s reference](private-dns/api/reference.mdx).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Journal des modifications

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Commentaires

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
