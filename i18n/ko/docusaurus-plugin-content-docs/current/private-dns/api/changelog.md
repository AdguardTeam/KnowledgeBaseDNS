---
title: 변경 로그
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

이 문서에는 [AdGuard DNS API](private-dns/api/overview.md)에 대한 변경 로그가 포함되어 있습니다.

## v1.9

**2024년 7월 11일에 출시됨**

- 자동 기기 연결 기능이 추가되었습니다.
  - `auto_connect_devices_enabled`는 특정 링크 유형을 통해 기기의 자동 연결을 주장할 수 있는 DNS 서버 섹션의 새로운 설정입니다.
  - 'auto_device\` - 기기가 자동으로 연결되었음을 나타내는 기기 섹션의 새 필드입니다.
- CategoryQueriesStats에서 'queries'의 'int'를 'long'으로, AccountLimits에서 `used`를, QueriesStats에서 `blocked`과 `queries`를 대체했습니다.

## v1.8

**2024년 4월 20일에 출시됨**

- 인증이 있는 DNS-over-HTTPS 지원이 추가되었습니다.
  - 새로운 작업 — 기기의 DNS-over-HTTPS 비밀번호를 초기화합니다.
  - `detect_doh_auth_only` — 새로운 기기 설정입니다. 인증이 있는 DNS-over-HTTPS를 제외한 모든 DNS 연결 방법을 비활성화합니다.
  - `dns_over_https_with_auth_url` — DeviceDNSAddresses에 새 필드입니다. 인증이 있는 DNS-over-HTTPS를 사용할 때 연결에 사용할 URL을 나타냅니다.

## v1.7

**2024년 3월 11일에 출시됨**

- 전용 IPv4 주소 기능이 추가되었습니다:
  - 전용 IPv4 주소는 이제 DNS 서버 구성에 대해 기기에서 사용할 수 있습니다.
  - 전용 IPv4 주소는 이제 연결된 기기에 연결되어 있어, 해당 주소에 대한 쿼리는 그 기기에 대해 기록됩니다.
- 새로운 작업이 추가되었습니다:
  - 사용 가능한 모든 전용 IPv4 주소 목록
  - 새 전용 IPv4 주소 할당
  - 사용 가능한 IPv4 주소를 기기에 연결
  - 기기에서 IPv4 주소 연결 해제
  - 기기에 연결된 전용 주소에 대한 정보 요청
- 계정 제한에 새로운 제한이 추가되었습니다:
  - `dedicated_ipv4`는 이미 할당된 전용 IPv4 주소의 수와 그에 대한 제한 정보를 제공합니다.
- DNSServerSettings의 더 이상 사용되지 않는 필드가 제거되었습니다:
  - `safebrowsing_enabled`

## v1.6

**2024년 1월 22일에 출시됨**

- DNS 프로필(`access_settings`)에 대한 새로운 액세스 설정 섹션이 추가되었습니다. 이러한 필드를 설정하면 무단 액세스로부터 AdGuard DNS 서버를 보호할 수 있습니다.

  - `allowed_clients` — 여기에서 귀하의 DNS 서버를 사용할 수 있는 클라이언트를 지정할 수 있습니다. 이 필드는 `blocked_clients` 필드보다 우선합니다.
  - `blocked_clients` — 여기에서 귀하의 DNS 서버를 사용할 수 없는 클라이언트를 지정할 수 있습니다.
  - `blocked_domain_rules` — 여기에서 귀하의 DNS 서버에 액세스할 수 없는 도메인을 지정하고 와일드카드 및 DNS 필터링 규칙으로 이러한 도메인을 정의할 수 있습니다.

- 계정 제한에 새로운 제한이 추가되었습니다:

  - `access_rules`는 현재 사용 중인 `blocked_clients` 및 `blocked_domain_rules` 값의 합계와 액세스 규칙의 제한을 제공합니다.
  - `user_rules`는 생성된 사용자 규칙의 수와 해당 규칙의 제한을 보여줍니다.

- 클라이언트 IP 주소 및 도메인을 기록하기 위해 새로운 `ip_log_enabled` 설정이 추가되었습니다.

- 제한에 도달했을 때를 나타내는 새로운 오류 코드 `FIELD_REACHED_LIMIT`가 추가되었습니다:

  - 접근 설정에서 `blocked_clients` 및 `blocked_domain_rules`의 총 수
  - 사용자 정의 사용자 규칙 설정의 `rules`

## v1.5

**2023년 6월 16일에 출시됨**

- 새로운 `block_nrd` 설정이 추가되었고 모든 보안 관련 설정이 한 곳에 그룹화되었습니다.

### 안전한 브라우징 설정 모델이 변경되었습니다.

변경 전:

```json
{
   "enabled": true
}
```

변경 후:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

`enabled`는 이제 그룹 내 모든 설정을 제어하고, `block_dangerous_domains`는 이전 `enabled` 모델 필드이며, `block_nrd`는 새로 등록된 도메인을 차단하는 설정입니다.

### 서버 설정 저장 모델이 변경되었습니다.

변경 전:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

변경 후:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

여기서 `safebrowsing_settings`라는 새로운 필드가 더 이상 사용되지 않는 `safebrowsing_enabled`를 대신 사용되며, 그 값은 `block_dangerous_domains`에 저장됩니다.

## v1.4

**2023년 3월 29일에 출시됨**

- 기본값(0.0.0.0), REFUSED, NXDOMAIN 또는 사용자 정의 IP 주소와 같은 응답 차단을 위한 구성 가능한 옵션이 추가되었습니다.

## v1.3

**2022년 12월 13일에 출시됨**

- 계정 한도를 확인하는 방법이 추가되었습니다.

## v1.2

**2022년 10월 14일에 출시됨**

- 새로운 프로토콜 유형 DNS 및 DNSCRYPT가 추가되었습니다. 나중에 제거될 PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP 및 DNSCRYPT_UDP를 더 이상 사용하지 않습니다.

## v1.1

**2022년 7월 7일에 출시됨**

- 도메인, 회사 및 기기에 대한 통계를 검색하는 방법 추가
- 기기 설정을 업데이트하는 방법 추가
- 필수 필드 정의 수정

## v1.0

**2022년 2월 22일에 출시됨**

- 인증 추가
- 기기 및 DNS 서버와의 CRUD 작업
- 쿼리 로그
- DoH 및 DoT .mobileconfig 다운로드
- 필터 목록 및 웹 서비스
