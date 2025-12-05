---
title: Überblick
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS bietet eine REST-API, die Sie zur Integration Ihrer Anwendungen verwenden können.

## Authentifizierung

### API-Schlüssel

When included in the request header, API keys can be used to authorize requests to User API.

#### Request example

``` bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generating API keys

To issue or revoke API keys, go to the [corresponding subsection](https://adguard-dns.io/en/dashboard/user-settings/api-keys) of *User preferences*.

### Access tokens

When included in the request header, access tokens can be used to authorize requests to User API.

#### Request example

``` bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Beispielantwort

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter    | Beschreibung                                                                            |
|:------------ |:--------------------------------------------------------------------------------------- |
| **username** | Konto-E-Mail                                                                            |
| **password** | Konto-Passwort                                                                          |
| mfa_token    | Token für die Zwei-Faktor-Authentifizierung (falls in den Kontoeinstellungen aktiviert) |

In the response, you will get both `access_token` and `refresh_token`.

- Der `access_token` läuft nach einigen angegebenen Sekunden ab (dargestellt durch den `expires_in` Parameter in der Antwort). You can regenerate a new `access_token` using the `refresh_token` (Refer to `Generating access tokens from refresh tokens`).

- Das `refresh_token` ist dauerhaft. To revoke a `refresh_token`, refer to `Revoking refresh tokens`.

##### Request example

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

| Parameter         | Beschreibung                                                                   |
|:----------------- |:------------------------------------------------------------------------------ |
| **refresh_token** | `AKTUALISIERUNGS-TOKEN`, mit dem ein neuer Zugangstoken generiert werden muss. |

##### Request example

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

#### Revoking refresh tokens

To revoke a refresh token, make the following POST request with the given params:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

##### Request example

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Beschreibung                                        |
|:----------------- |:--------------------------------------------------- |
| **refresh_token** | `AKTUALISIERUNGS-TOKEN`, der widerrufen werden soll |

### Authorization endpoint

:::warning

To access this endpoint, you need to contact us at **devteam@adguard.com**. Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the **client_id** parameter.

:::

The **/oapi/v1/oauth_authorize** endpoint is used to interact with the resource owner and get the authorization to access the protected resource.

The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application.

The request parameters of the **/oapi/v1/oauth_authorize** endpoint are:

| Parameter         | Beschreibung                                                                                                                                                                                      |
|:----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Weist den Autorisierungsserver an, welche Erlaubnis ausgeführt werden soll                                                                                                                        |
| **client_id**     | Die ID des OAuth-Clients, der die Autorisierung anfordert                                                                                                                                         |
| **redirect_uri**  | Enthält eine URL. Eine erfolgreiche Antwort von diesem Endpunkt führt zu einer Umleitung zu dieser URL                                                                                            |
| **state**         | Ein intransparenter Wert, der zu Sicherheitszwecken verwendet wird. Wenn dieser Anfrageparameter in der Anfrage gesetzt ist, wird er als Teil der **redirect_uri** an die Anwendung zurückgegeben |
| **aid**           | Partnerkennung                                                                                                                                                                                    |

Zum Beispiel:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

To inform the authorization server which grant type to use, the **response_type** request parameter is used as follows:

- Für die implizite Gewährung verwenden Sie **response_type=token**, um ein Zugriffstoken einzuschließen.

A successful response is **302 Found**, which triggers a redirect to **redirect_uri** (which is a request parameter). The response parameters are embedded in the fragment component (the part after the `#` symbol) of the `redirect_uri` in the *Location* header.

Zum Beispiel:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

## API

### Referenz

Please see the [method’s reference](reference.md).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Änderungsprotokoll

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Feedback

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
