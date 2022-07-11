---
title: API
sidebar_position: 2
---

# AdGuard DNS API

AdGuard DNS предоставляет REST API, который вы можете использовать в своих приложениях.

## Аутентификация

### Генерация токена доступа

Сделайте POST-запрос с указанными параметрами по следующему URL, чтобы сгенерировать `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter    | Description                                                      |
|:------------ |:---------------------------------------------------------------- |
| **username** | Account email                                                    |
| **password** | Account password                                                 |
| mfa_token    | Two-Factor authentication token (if enabled in account settings) |

В ответ вы получите `access_token` и `refresh_token`.

- `access_token` истекает через несколько секунд (срок указан в параметре `expires_in`). Вы можете запросить новый `access_token`, используя `refresh_token` (См.: `Генерация токена доступа через Refresh Token`).

- `refresh_token` генерируется один раз и затем не изменяется. Чтобы сбросить `refresh_token`, см.: `Сброс Refresh-токена`.

#### Пример запроса

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Пример ответа

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Генерация токена доступа через Refresh Token

Токены доступа имеют ограниченное время действия. После истечения этого срока ваше приложение должно использовать `refresh-токен` для генерации нового `access token`.

Сделайте следующий POST-запрос с указанными параметрами, чтобы получить новый токен доступа:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Description                                                         |
|:----------------- |:------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` using which a new access token has to be generated. |

#### Пример запроса

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Пример ответа

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Сброс Refresh-токена

Чтобы сбросить refresh-токен, сделайте следующий POST-запрос с указанными параметрами:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Пример запроса

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```
| Parameter         | Description                            |
|:----------------- |:-------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` which is to be revoked |

### Получение доступа к API

После того как токен доступа и refresh-токен сгенерированы, получить доступ к API можно, указав токен доступа в заголовке.

- Имя заголовка должно быть `Authorization`
- Значение заголовка должно быть `Bearer {access_token}`

## API

### Спецификация OpenAPI

Спецификация OpenAPI доступна по адресу [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Вы можете использовать другие инструменты для просмотра списка доступных методов API. Например, вы можете открыть этот файл в [https://editor.swagger.io/][swagger].

## Обратная связь

Если вы хотите расширить этот API, напишите нам по адресу `devteam@adguard.com` и расскажите, что вы хотите добавить.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
