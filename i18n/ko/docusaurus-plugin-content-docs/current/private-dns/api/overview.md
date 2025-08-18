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

### Access token 생성

주어진 파라미터를 사용하여 다음 URL에 대한 POST 요청을 보내 `access_token`을 생성합니다.

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| 매개변수       | 설명                         |
|:---------- |:-------------------------- |
| **사용자 이름** | 계정 이메일                     |
| **비밀번호**   | 계정 비밀번호                    |
| mfa_token  | 이중 인증 토큰 (계정 설정에서 활성화된 경우) |

응답으로 `access_token`과 `refresh_token`을 모두 받게 됩니다.

- `access_token`은 지정된 몇 초 후에 만료됩니다(응답의 응답의 `expires_in` 매개변수로 표시됨). 새로 `access_token`을 사용하여 새 `refresh_token`을 다시 생성할 수 있습니다. (참고: `새로 고침 토큰을 통한 액세스 토큰` 생성)

- `refresh_token`은 영구적으로 유지됩니다. `새로 고침 토큰`을 해지하려면 다음을 참조하세요: `새로 고침 토큰 해지하기`

#### 요청 예시

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### 응답 예시

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Refresh token에서 Access Token 생성

Access token은 제한된 유효 기간을 가지고 있습니다. 이것이 만료되면 앱은 `refresh token` 을 사용하여 새로운 `access token`를 요청해야 합니다.

새 액세스 토큰을 받으려면 주어진 파라미터를 사용하여 다음 POST 요청을 합니다:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| 매개변수              | 설명                                       |
|:----------------- |:---------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` 사용하여 새 액세스 토큰을 생성해야 합니다. |

#### 요청 예시

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### 응답 예시

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### 새로 고침 토큰 취소

새로 고침 토큰을 취소하려면 주어진 파라미터를 사용하여 다음 POST 요청을 합니다:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### 요청 예시

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| 매개변수              | 설명                      |
|:----------------- |:----------------------- |
| **refresh_token** | `REFRESH TOKEN`을 취소합니다. |

### 인증 엔드포인트

> 이 엔드포인트에 액세스하려면 **devteam@adguard.com**으로 문의하세요. 이 엔드포인트의 이유와 사용 사례를 설명하고 리디렉션 URI를 제공하세요. 승인되면 고유한 클라이언트 식별자를 받게 되며, 이 식별자를 **client_id** 매개변수에 사용해야 합니다.

**oapi/v1/oauth_authorize** 엔드포인트는 리소스 소유자와 상호 작용하고 보호된 리소스에 액세스할 수 있는 권한을 얻는 데 사용됩니다.

이 서비스는 사용자를 AdGuard로 리디렉션하여 인증(아직 로그인하지 않은 경우)한 다음 애플리케이션으로 다시 리디렉션합니다.

**oapi/v1/oauth_authorize** 엔드포인트의 요청 매개변수는 다음과 같습니다:

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

인증 서버에 사용할 권한 부여 유형을 알리기 위해 **response_type** 매개 변수는 다음과 같이 사용됩니다.

- 암시적 권한 부여의 경우 **response_type=token**을 사용하여 액세스 토큰을 포함합니다.

성공적인 응답은 **302 Found**이며, 요청 매개변수인 **redirect_uri**로 리디렉션을 트리거합니다. 응답 매개변수는 **Location** 헤더에 있는 **redirect_uri** 매개변수의 조각 구성 요소(`#` 뒤 부분)에 포함되어 있습니다.

예를 들어:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### API 접근하기

액세스 토큰과 새로 고침 토큰이 생성되면 헤더에 액세스 토큰을 전달하여 API 호출을 수행할 수 있습니다.

- 헤더 이름은 `Authorization` 부여여야 합니다.
- 헤더 값은 `Bearer {access_token}`이어야 합니다.

## API

### 참조

Please see the [method’s reference](reference.md).

### OpenAPI 사양

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

다양한 도구를 사용하여 사용 가능한 API 메서드 목록을 볼 수 있습니다. 예를 들어, [https://editor.swagger.io/][swagger]에서 이 파일을 열 수 있습니다.

### 변경 로그

전체 AdGuard DNS API 변경 로그는 [이 페이지](private-dns/api/changelog.md)에서 확인할 수 있습니다.

## 피드백

이 API를 새로운 방법으로 확장하고 싶다면 `devteam@adguard.com` 으로 이메일을 보내 추가하고 싶은 내용을 알려주세요.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
