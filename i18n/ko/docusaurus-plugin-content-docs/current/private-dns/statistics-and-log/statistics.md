---
title: 통계
sidebar_position: 2
---

## 일반 통계

이 **통계** 탭에서는 사설 AdGuard DNS에 연결된 기기가 생성한 DNS 요청의 요약 통계를 표시합니다. 요청의 총 수와 위치, 차단된 요청의 수, 요청이 전송된 기업 목록, 요청 유형 및 가장 자주 요청된 도메인을 보여줍니다.

![차단된 웹사이트 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## 카테고리

### 요청 유형

- **광고**: 사용자 데이터를 수집 및 공유하고 행동을 분석하며 광고를 타겟팅하는 광고 및 기타 광고 관련 요청
- **추적기**: 사용자 활동을 추적하기 위해 웹사이트와 제3자에서 발생한 요청
- **소셜 미디어**: 소셜 네트워크 웹사이트에 대한 요청
- **CDN**: 최종 사용자에게 콘텐츠를 빠르게 전송하는 전 세계 프록시 서버 네트워크인 CDN(콘텐츠 전송 네트워크)에 연결된 요청
- **기타**

![요청 유형 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### 상위 기업

가장 많은 요청을 보낸 기업을 볼 수 있습니다.

![상위 기업 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### 상위 도착지

가장 많은 요청이 전송된 국가를 보여줍니다.

국가 이름 외에도 목록에는 두 개의 일반 카테고리가 추가로 포함됩니다:

- **해당 없음**: 응답에 IP 주소가 포함되지 않습니다.
- **알 수 없는 위치**: IP 주소로부터 국가를 확인할 수 없습니다.

![상위 도착지 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### 상위 도메인

가장 많이 요청된 도메인 목록이 포함되어 있습니다.

![상위 도메인 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### 암호화된 요청

요청의 총 수와 암호화된 트래픽과 암호화되지 않은 트래픽의 비율을 보여줍니다.

![암호화된 요청 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### 상위 클라이언트

클라이언트에 대한 요청 수를 표시합니다. 클라이언트 IP 주소를 보려면 서버 설정에서 **IP 주소 기록** 옵션을 활성화하세요. [서버 설정에 대한 자세한 내용](/private-dns/server-and-settings/advanced.md)는 관련 섹션에서 찾을 수 있습니다.
