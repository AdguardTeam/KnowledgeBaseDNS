---
title: API에 대한 도움말
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Current version: 1.10

### /oapi/v1/account/limits

#### GET

##### 요약

Gets account limits

##### 응답

| 코드  | 설명       |
| --- | -------- |
| 200 | 계정 제한 정보 |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### 요약

Lists dedicated IPv4 addresses

##### 응답

| 코드  | 설명            |
| --- | ------------- |
| 200 | 전용 IPv4 주소 목록 |

#### POST

##### 요약

Allocates new IPv4

##### 응답

| 코드  | 설명                 |
| --- | ------------------ |
| 200 | 새 IPv4가 성공적으로 할당됨  |
| 429 | 전용 IPv4 수가 제한에 도달함 |

### /oapi/v1/devices

#### 가져오기

##### 요약

Lists devices

##### 응답

| 코드  | 설명    |
| --- | ----- |
| 200 | 기기 목록 |

#### POST

##### 요약

Creates a new device

##### 응답

| 코드  | 설명            |
| --- | ------------- |
| 200 | 기기 생성 완료      |
| 400 | 유효성 검사 실패     |
| 429 | 기기 수가 제한에 도달함 |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### 요약

Removes a device

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명          |
| --- | ----------- |
| 200 | 기기 삭제됨      |
| 404 | 기기를 찾을 수 없음 |

#### 가져오기

##### 요약

Gets an existing device by ID

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명          |
| --- | ----------- |
| 200 | 기기 정보       |
| 404 | 기기를 찾을 수 없음 |

#### PUT

##### 요약

Updates an existing device

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명          |
| --- | ----------- |
| 200 | 기기 업데이트 완료  |
| 400 | 유효성 검사 실패   |
| 404 | 기기를 찾을 수 없음 |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### 요약

List dedicated IPv4 and IPv6 addresses for a device

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명             |
| --- | -------------- |
| 200 | 전용 IPv4 및 IPv6 |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### 요약

Unlink dedicated IPv4 from the device

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명                         |
| --- | -------------------------- |
| 200 | 전용 IPv4가 기기에서 성공적으로 연결 해제됨 |
| 404 | 기기 또는 주소를 찾을 수 없음          |

#### POST

##### 요약

Link dedicated IPv4 to the device

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명                     |
| --- | ---------------------- |
| 200 | 전용 IPv4가 기기에 성공적으로 연결됨 |
| 400 | 유효성 검사 실패              |
| 404 | 기기 또는 주소를 찾을 수 없음      |
| 429 | 전용 IPv4 수가 제한에 도달함     |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### 요약

Gets DNS-over-HTTPS .mobileconfig file.

##### 매개변수

| 이름                      | 위치 | 설명                                              | 필수  | 스키마        |
| ----------------------- | -- | ----------------------------------------------- | --- | ---------- |
| device_id               | 경로 |                                                 | 네   | 문자열        |
| exclude_wifi_networks | 쿼리 | SSID에 따라 AdGuard DNS 사용하지 않을 Wi-Fi 네트워크를 나열합니다. | 아니오 | [ string ] |
| exclude_domain          | 쿼리 | 기본 DNS 서버 대신 사용할 도메인 목록                         | 아니오 | [ string ] |

##### 응답

| 코드  | 설명                       |
| --- | ------------------------ |
| 200 | DNS-over-HTTPS .plist 파일 |
| 404 | 기기를 찾을 수 없음              |

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### 요약

Generate and set new DNS-over-HTTPS password

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명                              |
| --- | ------------------------------- |
| 200 | DNS-over-HTTPS 비밀번호가 성공적으로 재설정됨 |
| 404 | 기기를 찾을 수 없음                     |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### 요약

Gets DNS-over-TLS .mobileconfig file.

##### 매개변수

| 이름                      | 위치 | 설명                                              | 필수  | 스키마        |
| ----------------------- | -- | ----------------------------------------------- | --- | ---------- |
| device_id               | 경로 |                                                 | 네   | 문자열        |
| exclude_wifi_networks | 쿼리 | SSID에 따라 AdGuard DNS 사용하지 않을 Wi-Fi 네트워크를 나열합니다. | 아니오 | [ string ] |
| exclude_domain          | 쿼리 | 기본 DNS 서버 대신 사용할 도메인 목록                         | 아니오 | [ string ] |

##### 응답

| 코드  | 설명                       |
| --- | ------------------------ |
| 200 | DNS-over-HTTPS .plist 파일 |
| 404 | 기기를 찾을 수 없음              |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### 요약

Updates device settings

##### 매개변수

| 이름        | 위치 | 설명 | 필수 | 스키마 |
| --------- | -- | -- | -- | --- |
| device_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명                |
| --- | ----------------- |
| 200 | 기기 설정이 업데이트되었습니다. |
| 400 | 유효성 검사 실패         |
| 404 | 기기를 찾을 수 없음       |

### /oapi/v1/dns_servers

#### GET

##### 요약

Lists DNS servers that belong to the user.

##### 설명

Lists DNS servers that belong to the user. By default there is at least one default server.

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | DNS 서버 목록 |

#### POST

##### 요약

Creates a new DNS server

##### 설명

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### 응답

| 코드  | 설명                |
| --- | ----------------- |
| 200 | DNS 서버 생성됨        |
| 400 | 유효성 검사 실패         |
| 429 | DNS 서버 수가 제한에 도달함 |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### 요약

Removes a DNS server

##### 설명

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### 매개변수

| 이름              | 위치 | 설명 | 필수 | 스키마 |
| --------------- | -- | -- | -- | --- |
| dns_server_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명         |
| --- | ---------- |
| 200 | DNS 서버 삭제됨 |
| 404 | DNS 서버 없음  |

#### GET

##### 요약

Gets an existing DNS server by ID

##### 매개변수

| 이름              | 위치 | 설명 | 필수 | 스키마 |
| --------------- | -- | -- | -- | --- |
| dns_server_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | DNS 서버 정보 |
| 404 | DNS 서버 없음 |

#### PUT

##### 요약

Updates an existing DNS server

##### 매개변수

| 이름              | 위치 | 설명 | 필수 | 스키마 |
| --------------- | -- | -- | -- | --- |
| dns_server_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명             |
| --- | -------------- |
| 200 | DNS 서버 업데이트 완료 |
| 400 | 유효성 검사 실패      |
| 404 | DNS 서버 없음      |

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### 요약

Updates DNS server settings

##### 매개변수

| 이름              | 위치 | 설명 | 필수 | 스키마 |
| --------------- | -- | -- | -- | --- |
| dns_server_id | 경로 |    | 네  | 문자열 |

##### 응답

| 코드  | 설명                |
| --- | ----------------- |
| 200 | DNS 서버 설정이 업데이트됨 |
| 400 | 유효성 검사 실패         |
| 404 | DNS 서버 없음         |

### /oapi/v1/filter_lists

#### GET

##### 요약

Gets filter lists

##### 응답

| 코드  | 설명    |
| --- | ----- |
| 200 | 필터 목록 |

### /oapi/v1/oauth_token

#### POST

##### 요약

Generates Access and Refresh token

##### 응답

| 코드  | 설명                                 |
| --- | ---------------------------------- |
| 200 | 액세스 토큰 발급됨                         |
| 400 | 필수 매개변수 누락됨                        |
| 401 | 유효하지 않은 자격 증명, MFA 토큰 또는 제공된 갱신 토큰 |

null

### /oapi/v1/query_log

#### DELETE

##### 요약

Clears query log

##### 응답

| 코드  | 설명         |
| --- | ---------- |
| 202 | 쿼리 로그가 지워짐 |

#### GET

##### 요약

Gets query log

##### 매개변수

| 이름                 | 위치 | 설명                                   | 필수  | 스키마                                                 |
| ------------------ | -- | ------------------------------------ | --- | --------------------------------------------------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함)                        | 네   | long                                                |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함)                        | 네   | long                                                |
| 기기                 | 쿼리 | 기기로 필터링                              | 아니오 | [ string ]                                          |
| 국가                 | 쿼리 | 국가로 필터링                              | 아니오 | [ string ]                                          |
| 기업                 | 쿼리 | 기업별 필터링                              | 아니오 | [ string ]                                          |
| 상태                 | 쿼리 | 상태별 필터링                              | 아니오 | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| 카테고리               | 쿼리 | 카테고리별 필터링                            | 아니오 | [ [CategoryType](#CategoryType) ]                   |
| 검색                 | 쿼리 | 도메인 이름으로 필터링                         | 아니오 | 문자열                                                 |
| 제한                 | 쿼리 | 반환되는 레코드 수 제한하기                      | 아니오 | 정수                                                  |
| 커서                 | 쿼리 | 페이지 매김 커서. 응답에서 커서를 사용하여 페이지를 매김합니다. | 아니오 | 문자열                                                 |

##### 응답

| 코드  | 설명    |
| --- | ----- |
| 200 | 쿼리 로그 |

### /oapi/v1/revoke_token

#### POST

##### 요약

Revokes a Refresh Token

##### 매개변수

| 이름            | 위치 | 설명    | 필수 | 스키마 |
| ------------- | -- | ----- | -- | --- |
| refresh_token | 쿼리 | 갱신 토큰 | 네  | 문자열 |

##### 응답

| 코드  | 설명             |
| --- | -------------- |
| 200 | 갱신 토큰이 취소되었습니다 |

null

### /oapi/v1/stats/categories

#### GET

##### 요약

Gets categories statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명          |
| --- | ----------- |
| 200 | 카테고리 통계 수신됨 |
| 400 | 유효성 검사 실패   |

### /oapi/v1/stats/companies

#### GET

##### 요약

Gets companies statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | 기업 통계 수신됨 |
| 400 | 유효성 검사 실패 |

### /oapi/v1/stats/companies/detailed

#### GET

##### 요약

Gets detailed companies statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |
| 커서                 | 쿼리 | 페이지 매김 커서     | 아니오 | 문자열        |

##### 응답

| 코드  | 설명           |
| --- | ------------ |
| 200 | 상세 기업 통계 수신됨 |
| 400 | 유효성 검사 실패    |

### /oapi/v1/stats/countries

#### GET

##### 요약

Gets countries statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | 국가 통계 수신됨 |
| 400 | 유효성 검사 실패 |

### /oapi/v1/stats/devices

#### GET

##### 요약

Gets devices statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | 기기 통계 수신됨 |
| 400 | 유효성 검사 실패 |

### /oapi/v1/stats/domains

#### GET

##### 요약

Gets domains statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명         |
| --- | ---------- |
| 200 | 도메인 통계 수신됨 |
| 400 | 유효성 검사 실패  |

### /oapi/v1/stats/time

#### GET

##### 요약

Gets time statistics

##### 매개변수

| 이름                 | 위치 | 설명            | 필수  | 스키마        |
| ------------------ | -- | ------------- | --- | ---------- |
| time_from_millis | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| time_to_millis   | 쿼리 | 밀리초 단위 시간(포함) | 네   | long       |
| 기기                 | 쿼리 | 기기로 필터링       | 아니오 | [ string ] |
| 국가                 | 쿼리 | 국가로 필터링       | 아니오 | [ string ] |

##### 응답

| 코드  | 설명        |
| --- | --------- |
| 200 | 시간 통계 수신됨 |
| 400 | 유효성 검사 실패 |

### /oapi/v1/web_services

#### GET

##### 요약

Lists web services

##### 응답

| 코드  | 설명       |
| --- | -------- |
| 200 | 웹 서비스 목록 |
