---
title: Обзор
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS предоставляет REST API, который вы можете использовать в своих приложениях.

## Аутентификация

### Генерация токена доступа

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Параметр             | Описание                                                                 |
|:-------------------- |:------------------------------------------------------------------------ |
| **имя пользователя** | Email                                                                    |
| **пароль**           | Пароль                                                                   |
| mfa_token            | Токен двухфакторной аутентификации (если включена в настройках аккаунта) |

В ответ вы получите `access_token` и `refresh_token`.

- `access_token` истекает через несколько секунд (срок указан в параметре `expires_in`). Вы можете запросить новый `access_token`, используя `refresh_token` (См.: `Генерация токена доступа через продлеваемый токен`).

- `refresh_token` генерируется один раз и затем не изменяется. Чтобы отозвать `refresh_token`, см.: `Отзыв продлеваемого токена`.

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

### Генерация токена доступа через продлеваемый токен

Токены доступа имеют ограниченное время действия. Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

Сделайте следующий POST-запрос с указанными параметрами, чтобы получить новый токен доступа:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Параметр          | Описание                                                                               |
|:----------------- |:-------------------------------------------------------------------------------------- |
| **refresh_token** | `Продлеваемый токен`, с помощью которого должен быть сгенерирован новый токен доступа. |

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

### Отзыв продлеваемого токена

Чтобы сбросить продлеваемый токен, сделайте следующий POST-запрос с указанными параметрами:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Пример запроса

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Параметр          | Описание                                          |
|:----------------- |:------------------------------------------------- |
| **refresh_token** | `Продлеваемый токен`, который должен быть сброшен |

### Получение доступа к API

Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header.

- Имя заголовка должно быть `Authorization`
- Значение заголовка должно быть `Bearer {access_token}`

## API

### Руководство по API

Please see the methods reference [here](reference.md).

### Спецификация OpenAPI

Спецификация OpenAPI доступна по адресу [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Вы можете использовать другие инструменты для просмотра списка доступных методов API. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Changelog

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Обратная связь

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
