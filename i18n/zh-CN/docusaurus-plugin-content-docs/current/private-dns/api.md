---
title: API
sidebar_position: 2
---

# AdGuard DNS API

AdGuard DNS提供了一个 REST API，您可以使用它集成在您的应用程序中。

## 验证

### 生成访问令牌

使用给定的参数对以下 URL 发出 POST 请求以生成 `access_token`：

`https://api.adguard-dns.io/oapi/v1/oauth_token`

|           |                        |
| --------- | ---------------------- |
| 范围        | 描述                     |
| **用户名**   | 账号邮箱                   |
| **密码**    | 账号密码                   |
| mfa_token | 双重身份验证令牌（需要提前在账户设置中启用） |

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

访问令牌有有效期限 过期后，您的应用将不得不使用 `refresh token` 以请求新的 `access token`。

使用给定的参数发出以下 POST 请求以获取新的访问令牌：

`https://api.adguard-dns.io/oapi/v1/oauth_token`

|                   |                                |
| ----------------- | ------------------------------ |
| 范围                | 描述                             |
| **refresh_token** | 必须使用`REFRESH TOKEN` 来生成新的访问令牌。 |

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

### 取消刷新该令牌

要取消刷新该令牌，请使用给定参数发出以下 POST 请求：

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### 请求示例

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

|                   |                      |
| ----------------- | -------------------- |
| 范围                | 描述                   |
| **refresh_token** | 等待撤销的`REFRESH TOKEN` |

### 访问API

生成访问和刷新令牌后，可以通过在标头中传递访问令牌来进行 API 调用。

- 标头名称应为 `Authorization`
- 标头值应为 `Bearer {access_token}`

## API

### 开源API 规范

OpenAPI 规范可在 [https： //api.adguard-dns.io/static/swagger/openapi.json][openapi]。

您可以使用不同的工具来查看可用 API 方法的列表。 例如，您可以在 [https://editor.swagger.io/][swagger]。

## 反馈

如果您希望使用新方法扩展此 API，请发送电子邮件至 `devteam@adguard.com` 并让我们知道您想添加什么。

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
