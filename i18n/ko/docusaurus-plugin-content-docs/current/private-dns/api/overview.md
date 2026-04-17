---
title: 개요
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

Adguard DNS는 앱을 통합하는데 사용할 수 있는 REST API를 제공합니다.

## 인증

### API keys

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

#### 응답 예시

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| 매개변수       | 설명                         |
|:---------- |:-------------------------- |
| **사용자 이름** | 계정 이메일                     |
| **비밀번호**   | 계정 비밀번호                    |
| mfa_token  | 이중 인증 토큰 (계정 설정에서 활성화된 경우) |

In the response, you will get both `access_token` and `refresh_token`.

- `access_token`은 지정된 몇 초 후에 만료됩니다(응답의 응답의 `expires_in` 매개변수로 표시됨). You can regenerate a new `access_token` using the `refresh_token` (Refer to `Generating access tokens from refresh tokens`).

- `refresh_token`은 영구적으로 유지됩니다. To revoke a `refresh_token`, refer to `Revoking refresh tokens`.

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

| 매개변수              | 설명                                       |
|:----------------- |:---------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` 사용하여 새 액세스 토큰을 생성해야 합니다. |

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

| 매개변수              | 설명                      |
|:----------------- |:----------------------- |
| **refresh_token** | `REFRESH TOKEN`을 취소합니다. |

### Authorization endpoint

:::warning

To access this endpoint, you need to contact us at **devteam@adguard.com**. Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the **client_id** parameter.

:::

The **/oapi/v1/oauth_authorize** endpoint is used to interact with the resource owner and get the authorization to access the protected resource.

The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application.

The request parameters of the **/oapi/v1/oauth_authorize** endpoint are:

| 매개변수              | 설명                                                                                  |
|:----------------- |:----------------------------------------------------------------------------------- |
| **response_type** | 인증 서버에 실행할 권한 부여를 알려줍니다.                                                            |
| **client_id**     | 권한 부여를 요청하는 OAuth 클라이언트의 ID입니다.                                                     |
| **redirect_uri**  | URL을 포함합니다. 이 엔드포인트에서 응답이 성공하면 이 URL로 리디렉션됩니다.                                      |
| **상태**            | 보안 목적으로 사용되는 불투명 값입니다. 이 요청 매개변수가 요청에 설정되어 있으면 **redirect_uri**의 일부로 애플리케이션에 반환됩니다. |
| **aid**           | 제휴사 식별자                                                                             |

예를 들어:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

To inform the authorization server which grant type to use, the **response_type** request parameter is used as follows:

- 암시적 권한 부여의 경우 **response_type=token**을 사용하여 액세스 토큰을 포함합니다.

A successful response is **302 Found**, which triggers a redirect to **redirect_uri** (which is a request parameter). The response parameters are embedded in the fragment component (the part after the `#` symbol) of the `redirect_uri` in the *Location* header.

예를 들어:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

## API

### API에 대한 도움말

Please see the [method’s reference](reference.md).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### 변경 로그

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## 피드백

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
