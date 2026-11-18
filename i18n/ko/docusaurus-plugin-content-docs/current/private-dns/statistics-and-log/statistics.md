---
title: 통계
sidebar_position: 2
---

## 일반 통계

이 **통계** 탭에서는 사설 AdGuard DNS에 연결된 기기가 생성한 DNS 요청의 요약 통계를 표시합니다. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

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

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![상위 도착지 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### 상위 도메인

가장 많이 요청된 도메인 목록이 포함되어 있습니다.

![상위 도메인 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Top blocked categories

Displays the top 5 most frequently blocked content categories. The data can be filtered by time range, server, and device. Domains fall into more than 20 categories, including _Adult content_, _Gambling_, _Banking_, _Games_, and _Social networks_.

![Top blocked categories \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blocklists

Shows the top 5 blocklists by the number of blocked requests and their share of all blocks. The data can be filtered by time range, server, and device. Each blocked request is credited only to the blocklist whose rule was triggered, so domains that appear in multiple lists are never double-counted.

Custom blocklists appear under the names you gave them. If a blocklist isn’t in the top 5, it blocked fewer requests than the ones shown.

The tile works at the list level: it doesn’t show which rule was triggered, and it doesn’t include statistics for user rules or allowlists.

![Top blocklists \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
