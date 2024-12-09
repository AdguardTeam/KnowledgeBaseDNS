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

AdGuard DNS 提供一个 REST API，可以使用它集成在您的应用程序中。

## 身份验证

### 生成访问令牌

使用以下参数向指定 URL 发送 POST 请求以生成 `access_token`：

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| 参数           | 详细信息                  |
|:------------ |:--------------------- |
| **username** | 账号邮箱                  |
| **password** | 账号密码                  |
| mfa_token    | 双重身份验证令牌（如果已在账户设置中启用） |

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

访问令牌有有效期限。 过期后，应用程序将需要使用 `refresh_token` 来请求新的 `access_token`。

使用给定的参数发出以下 POST 请求以获取新的访问令牌：

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| 参数                | 详细信息                            |
|:----------------- |:------------------------------- |
| **refresh_token** | 必须使用 `REFRESH TOKEN` 来生成新的访问令牌。 |

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
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| 参数                | 详细信息                  |
|:----------------- |:--------------------- |
| **refresh_token** | 等待撤销的 `REFRESH TOKEN` |

### 授权端点

> 要访问此端点，您需要通过 **devteam@adguard.com** 联系我们。 请描述您访问此端点的目的和用例，并提供重定向 URI。 获得批准后，您将收到一个唯一的客户端标识符，该标识符应用于 **client_id** 参数。

**/oapi/v1/oauth_authorize** 端点用于与资源所有者交互，并获取访问受保护资源的授权。

服务将用户重定向到 AdGuard 进行身份验证（如果您尚未登录），然后将您重定向回应用程序。

**/oapi/v1/oauth_authorize** 端点的请求参数如下：

| 参数                | 详细信息                                                            |
|:----------------- |:--------------------------------------------------------------- |
| **response_type** | 告诉授权服务器要执行哪个授权。                                                 |
| **client_id**     | 请求授权的 OAuth 客户端的 ID。                                            |
| **redirect_uri**  | 包含一个 URL。 该端点的成功响应会重定向到该 URL。                                   |
| **state**         | 用于安全目的的不透明值。 如果请求中设置此请求参数，它将作为重定向 **redirect_uri** 的一部分返回给应用程序。 |
| **aid**           | 联盟标识符                                                           |

示例：

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

用于告知授权服务器使用哪种授权类型 **response_type** 响应类型请求参数用法如下：

- 对于隐式授权，使用 **response_type=token** 包含访问令牌。

一个成功的响应是 **302 Found**，将触发重定向到 **redirect_uri**（一个请求参数）。 响应参数嵌入在 **Location** 头部的 **redirect_uri** 参数的片段组件（即 `#` 后面的部分）中。

示例：

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### 访问 API

获取访问令牌和刷新令牌后，可以通过在请求头标中传递访问令牌来进行 API 调用。

- 标头名称应为 `Authorization`
- 标头值应为 `Bearer {access_token}`

## API

### 参考资料

请点击[此处](reference.md)查看方法参考。

### 开源API 规范

OpenAPI 规范可在 [https://api.adguard-dns.io/static/swagger/openapi.json][openapi]。

您可以使用不同的工具来查看可用 API 方法的列表。 例如，您可以使用 Swagger 编辑器 [https://editor.swagger.io/][swagger] 打开此文件。

### 更新日志

完整的 AdGuard DNS API 更新日志可在[此页面](private-dns/api/changelog.md)查看。

## 反馈

如果您希望使用新方法扩展此 API，请发送电子邮件至 `devteam@adguard.com` 并让我们知道您希望添加的内容。

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
