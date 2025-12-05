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

### API keys

When included in the request header, API keys can be used to authorize requests to User API.

#### Exemple de requête

``` bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generating API keys

To issue or revoke API keys, go to the [corresponding subsection](https://adguard-dns.io/en/dashboard/user-settings/api-keys) of *User preferences*.

### Access tokens

When included in the request header, access tokens can be used to authorize requests to User API.

#### Exemple de requête

``` bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Exemple de réponse

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Paramètre    | Description                                                                        |
|:------------ |:---------------------------------------------------------------------------------- |
| **username** | E-mail du compte                                                                   |
| **password** | Mot de passe du compte                                                             |
| mfa_token    | Jeton d'authentification à deux facteurs (si activé dans les paramètres du compte) |

In the response, you will get both `access_token` and `refresh_token`.

- Le `access_token` expirera après un certain nombre de secondes spécifiées (représentées par le paramètre `expires_in` dans la réponse). You can regenerate a new `access_token` using the `refresh_token` (Refer to `Generating access tokens from refresh tokens`).

- Le `refresh_token` est permanent. To revoke a `refresh_token`, refer to `Revoking refresh tokens`.

##### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Response example

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

#### Generating access tokens from refresh tokens

Access tokens have limited validity. Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

Make the following POST request with the given params to get a new access token:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Paramètre         | Description                                                                        |
|:----------------- |:---------------------------------------------------------------------------------- |
| **refresh_token** | `JETON D'ACTUALISATION` à l'aide duquel un nouveau jeton d'accès doit être généré. |

##### Exemple de requête

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Response example

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

## API

### Référence

Veuillez consulter la référence des méthodes [ici](reference.md).

### Spécification OpenAPI

La spécification OpenAPI est disponible à l'adresse [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Vous pouvez utiliser des outils différents pour voir la liste des méthodes API disponibles. Par exemple, vous pouvez ouvrir ce fichier dans [https://editor.swagger.io/][swagger].

### Journal des modifications

Pour le journal des modifications complet de l'API AdGuard DNS, visitez [cette page](private-dns/api/changelog.md).

## Commentaires

Si vous souhaitez que cette API soit complétée par de nouvelles méthodes, envoyez-nous un courriel à `devteam@adguard.com` et indiquez-nous ce que vous souhaiteriez voir ajouté.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
