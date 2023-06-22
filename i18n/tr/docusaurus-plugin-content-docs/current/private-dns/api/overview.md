---
title: Genel Bakış
sidebar_position: 1
---

# AdGuard DNS API

AdGuard DNS provides a REST API you can use to integrate your apps with it.

## Kimlik Doğrulama

### Generate Access token

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametre         | Açıklama                                                         |
|:----------------- |:---------------------------------------------------------------- |
| **kullanıcı adı** | Hesap e-postası                                                  |
| **parola**        | Hesap parolası                                                   |
| mfa_token         | Two-Factor authentication token (if enabled in account settings) |

In the response, you will get both `access_token` and `refresh_token`.

- The `access_token` will expire after some specified seconds (represented by the `expires_in` param in the response). You can regenerate a new `access_token` using the `refresh_token` (Refer: `Generate Access Token from Refresh Token`).

- The `refresh_token` is permanent. To revoke a `refresh_token`, refer: `Revoking a Refresh Token`.

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

### Generate Access Token from Refresh Token

Access tokens have limited validity. Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

Make the following POST request with the given params to get a new access token:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametre         | Açıklama                                                            |
|:----------------- |:------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` using which a new access token has to be generated. |

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

### API'ye erişim

Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header.

- Header name should be `Authorization`
- Header value should be `Bearer {access_token}`

## API

### Referans

Please see the methods reference [here](private-dns/api/reference.md).

### OpenAPI özellikleri

OpenAPI specification is available at [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

## Geri bildirim

Bu API'nin yeni yöntemlerle genişletilmesini istiyorsanız, lütfen `devteam@adguard.com` adresine e-posta gönderin ve nelerin eklenmesini istediğinizi bize bildirin.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
