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

### Erişim belirteci oluştur

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametre         | Açıklama                                                                       |
|:----------------- |:------------------------------------------------------------------------------ |
| **kullanıcı adı** | Hesap e-postası                                                                |
| **parola**        | Hesap parolası                                                                 |
| mfa_token         | İki Faktörlü kimlik doğrulama belirteci (hesap ayarlarında etkinleştirilmişse) |

Yanıt olarak hem `access_token` hem de `refresh_token` alırsınız.

- `access_token` süresi belirli bir saniye sonra dolar (yanıttaki `expires_in` parametresiyle temsil edilir). `refresh_token` kullanarak yeni bir `access_token` oluşturabilirsiniz (Bakınız: `Yenileme Belirtecinden Erişim Belirteci Oluşturma`).

- `refresh_token` kalıcıdır. To revoke a `refresh_token`, refer: `Revoking a Refresh Token`.

#### Örnek istek

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Örnek yanıt

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Yenileme Belirtecinden Erişim Belirteci Oluşturma

Erişim belirteçlerinin geçerliliği sınırlıdır. Süresi dolduğunda, uygulamanız yeni bir `refresh token` talep etmek için `access token` kullanması gerekecektir.

Make the following POST request with the given params to get a new access token:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametre         | Açıklama                                                                 |
|:----------------- |:------------------------------------------------------------------------ |
| **refresh_token** | `REFRESH TOKEN` kullanılarak yeni bir erişim belirteci oluşturulmalıdır. |

#### Örnek istek

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Örnek yanıt

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Revoking a Refresh Token

To revoke a refresh token, make the following POST request with the given params:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### İstek Örneği

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametre         | Açıklama                               |
|:----------------- |:-------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` which is to be revoked |

### Authorization endpoint

> To access this endpoint, you need to contact us at **devteam@adguard.com**. Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the **client_id** parameter.

The **/oapi/v1/oauth_authorize** endpoint is used to interact with the resource owner and get the authorization to access the protected resource.

The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application.

The request parameters of the **/oapi/v1/oauth_authorize** endpoint are:

| Parametre         | Açıklama                                                                                                                                                       |
|:----------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Tells the authorization server which grant to execute                                                                                                          |
| **client_id**     | The ID of the OAuth client that asks for authorization                                                                                                         |
| **redirect_uri**  | Contains a URL. A successful response from this endpoint results in a redirect to this URL                                                                     |
| **state**         | An opaque value used for security purposes. If this request parameter is set in the request, it is returned to the application as part of the **redirect_uri** |
| **aid**           | Affiliate identifier                                                                                                                                           |

Örneğin:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

To inform the authorization server which grant type to use, the **response_type** request parameter is used as follows:

- For the Implicit grant, use **response_type=token** to include an access token.

A successful response is **302 Found**, which triggers a redirect to **redirect_uri** (which is a request parameter). The response parameters are embedded in the fragment component (the part after `#`) of the **redirect_uri** parameter in the **Location** header.

Örneğin:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### API'ye erişim

Erişim ve yenileme belirteçleri oluşturulduktan sonra, başlıktaki erişim belirtecini geçirilerek API çağrıları yapılabilir.

- Başlık adı `Authorization` olmalıdır
- Başlık değeri `Bearer {access_token}` olmalıdır

## API

### Referans

Lütfen referans yöntemlerine [buradan](reference.md) bakın.

### OpenAPI özellikleri

OpenAPI specification is available at [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Kullanılabilir API yöntemlerinin listesini görüntülemek için farklı araçlar kullanabilirsiniz. Örneğin, bu dosyayı [https://editor.swagger.io/][swagger] adresinde açabilirsiniz.

### Değişiklik günlüğü

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Geri Bildirim

Bu API'nin yeni yöntemlerle genişletilmesini istiyorsanız, lütfen `devteam@adguard.com` adresine e-posta gönderin ve nelerin eklenmesini istediğinizi bize bildirin.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
