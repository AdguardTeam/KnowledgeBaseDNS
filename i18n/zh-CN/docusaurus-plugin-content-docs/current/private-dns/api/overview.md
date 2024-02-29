---
title: 概览
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS提供了一个 REST API，您可以使用它集成在您的应用程序中。

## Authentication

### 生成访问令牌

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter    | Description                                                      |
|:------------ |:---------------------------------------------------------------- |
| **username** | Account email                                                    |
| **password** | Account password                                                 |
| mfa_token    | Two-Factor authentication token (if enabled in account settings) |

在响应中，您将同时获得 `access_token` 和 `refresh_token`。

- `access_token` 将在指定的几秒后过期（由响应中的 `expires_in` 参数决定） 您可以重新生成一个新的 `access_token` 使用 `refresh_token`（参考：`Generate Access Token from Refresh Token`）。

- `refresh_token` 是永久性的。 要撤销 `refresh_token`，请参阅：`Revoking a Refresh Token`。

#### 示例请求

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### 示例响应

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### 刷新以生成访问令牌

访问令牌有有效期限 Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

使用给定的参数发出以下 POST 请求以获取新的访问令牌：

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Description                                                         |
|:----------------- |:------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` using which a new access token has to be generated. |

#### 示例请求

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### 示例响应

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### 移除刷新令牌

要取消刷新该令牌，请使用给定参数发出以下 POST 请求：

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### 请求示例

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Description                            |
|:----------------- |:-------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` which is to be revoked |

### 访问API

Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header.

- 标头名称应为 `Authorization`
- 标头值应为 `Bearer {access_token}`

## API

### Reference

Please see the methods reference [here](reference.md).

### 开源API 规范

OpenAPI 规范可在 [https://api.adguard-dns.io/static/swagger/openapi.json][openapi]。

您可以使用不同的工具来查看可用 API 方法的列表。 For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Changelog

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Feedback

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
