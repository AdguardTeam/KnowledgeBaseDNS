---
title: Genel Bakış
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS, uygulamalarınızı entegre etmek için kullanabileceğiniz bir REST API sağlar.

## Kimlik Doğrulama

### API keys

API anahtarları, istek başlığına eklendiğinde Kullanıcı API'sine yapılan istekleri yetkilendirmek için kullanılabilir.

#### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generating API keys

To issue or revoke API keys, go to the [corresponding subsection](https://adguard-dns.io/en/dashboard/user-settings/api-keys) of *User preferences*.

### Access tokens

When included in the request header, access tokens can be used to authorize requests to User API.

#### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Generating access tokens with username and password

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametre      | Açıklama                                                         |
|:-------------- |:---------------------------------------------------------------- |
| **grant_type** | Must be `password`                                               |
| **username**   | Account email                                                    |
| **password**   | Account password                                                 |
| mfa_token      | Two-factor authentication token (if enabled in account settings) |

In the response, you will get both `access_token` and `refresh_token`.

- `access_token` süresi belirli bir saniye sonra dolar (yanıttaki `expires_in` parametresiyle temsil edilir). You can regenerate a new `access_token` using the `refresh_token` (Refer to `Generating access tokens from refresh tokens`).

- `refresh_token` kalıcıdır. To revoke a `refresh_token`, refer to `Revoking refresh tokens`.

##### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=password' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Yanıt örneği

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

| Parametre         | Açıklama                                             |
|:----------------- |:---------------------------------------------------- |
| **grant_type**    | Must be `refresh_token`                              |
| **refresh_token** | `REFRESH TOKEN` used to generate a new access token. |

##### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=refresh_token' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Yanıt örneği

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

##### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametre         | Açıklama                               |
|:----------------- |:-------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` which is to be revoked |

### Authorization endpoint

:::warning

To access this endpoint, you need to contact us at **devteam@adguard.com**. Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the **client_id** parameter.

:::

The **/oapi/v1/oauth_authorize** endpoint is used to interact with the resource owner and get the authorization to access the protected resource.

The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application.

The request parameters of the **/oapi/v1/oauth_authorize** endpoint are:

| Parametre         | Açıklama                                                                                                                                                  |
|:----------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Yetkilendirme sunucusuna hangi iznin yürütüleceğini söyler                                                                                                |
| **client_id**     | Yetkilendirme isteyen OAuth istemcisinin kimliği                                                                                                          |
| **redirect_uri**  | Bir URL içerir. Bu uç noktadan gelen başarılı bir yanıt, bu URL'ye yönlendirme yapar                                                                      |
| **state**         | Güvenlik amacıyla kullanılan opak bir değer. Bu istek parametresi istekte ayarlanırsa, **redirect_uri** öğesinin bir parçası olarak uygulamaya döndürülür |
| **aid**           | Ortaklık tanımlayıcısı                                                                                                                                    |

Örneğin:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

To inform the authorization server which grant type to use, the **response_type** request parameter is used as follows:

- Örtülü izin için, bir erişim belirteci eklemek üzere **Response_type=token** kullanın.

A successful response is **302 Found**, which triggers a redirect to **redirect_uri** (which is a request parameter). The response parameters are embedded in the fragment component (the part after the `#` symbol) of the `redirect_uri` in the *Location* header.

Örneğin:

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

| Parametre                   | Gerekli | Açıklama                                 |
|:--------------------------- |:------- |:---------------------------------------- |
| **response_type**           | Evet    | Must be `code`                           |
| **client_id**               | Evet    | Your registered OAuth2 client identifier |
| **redirect_uri**            | Evet    | Where to redirect after authorization    |
| **state**                   | Evet    | Random string to prevent CSRF            |
| **code_challenge**          | Evet    | BASE64URL(SHA256(code_verifier))         |
| **code_challenge_method** | Evet    | Must be `S256`                           |

Örnek:

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

| Parametre         | Gerekli | Açıklama                                       |
|:----------------- |:------- |:---------------------------------------------- |
| **grant_type**    | Evet    | Must be `authorization_code`                   |
| **code**          | Evet    | Authorization code received in Step 2          |
| **client_id**     | Evet    | Your registered OAuth2 client identifier       |
| **code_verifier** | Evet    | The original code verifier generated in Step 1 |
| **redirect_uri**  | Evet    | Must match the `redirect_uri` used in Step 2   |

#### İstek örneği

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=authorization_code' \
    -d 'code=SplxlOBeZQQYbYS6WxSbIA' \
    -d 'client_id=CLIENT_ID' \
    -d 'code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk' \
    -d 'redirect_uri=REDIRECT_URI'
```

##### Yanıt örneği

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "expires_in": 2620978
}
```

## API

### Referans

Please see the [method’s reference](reference.md).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Değişiklik günlüğü

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Geri bildirim

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
