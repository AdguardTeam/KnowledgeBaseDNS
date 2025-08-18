---
title: 차단 목록
sidebar_position: 1
---

## 차단 목록이란 무엇인가요?

차단 목록은 AdGuard DNS가 광고 및 개인정보 보호를 침해할 수 있는 콘텐츠를 필터링하기 위해 사용하는 텍스트 형식의 규칙 집합입니다. 일반적으로 필터는 유사한 초점을 가진 규칙으로 구성됩니다. 예를 들어, 독일어 또는 러시아어 필터와 같은 웹사이트 언어별 규칙이나 피싱 URL 차단 목록과 같은 피싱 사이트를 방지하는 규칙이 있을 수 있습니다. 이 규칙들을 그룹으로 쉽게 활성화하거나 비활성화할 수 있습니다.

## 차단 목록이 왜 유용한가요?

차단 목록은 필터링 규칙을 유연하게 사용자화하도록 설계되었습니다. 예를 들어, 특정 언어 지역의 광고 도메인을 차단하거나 추적 또는 광고 도메인을 제거할 수 있습니다. 원하는 차단 목록을 선택하고 원하는 대로 필터링을 설정하세요.

## AdGuard DNS에서 차단 목록 활성화하는 방법

차단 목록을 활성화하는 방법

1. 대시보드를 엽니다.
2. **서버** 섹션으로 이동합니다.
3. 필요한 서버를 선택합니다.
4. **차단 목록**을 클릭합니다.

## 차단 목록 유형

### 일반

광고 및 추적 도메인을 차단하기 위한 목록을 포함하는 필터 그룹입니다.

![일반 차단 목록 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### 지역 목록

특정 언어로 된 도메인을 차단하기 위해 지역 목록으로 구성된 필터 그룹입니다.

![지역 차단 목록 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### 보안

사기성 사이트와 피싱 도메인을 차단하기 위한 규칙을 포함하는 필터 그룹입니다.

![보안 차단 목록 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### 기타

제3자 개발자로부터 가져온 다양한 차단 규칙이 포함된 차단 목록입니다.

![기타 차단 목록 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## 필터 추가하는 방법

AdGuard DNS 필터 목록을 확장하고 싶다면, GitHub의 [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) 관련 섹션에 요청을 제출할 수 있습니다.

요청 제출 방법:

1. 위의 링크를 클릭합니다(GitHub에 등록해야 할 수 있습니다).
2. **New issue**를 클릭합니다.
3. **Blocklist request** 클릭하고 양식을 작성합니다.
4. 양식을 작성한 후에 **Submit new issue**을 클릭합니다.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## 사용자 규칙

나만의 차단 규칙을 생성할 수도 있습니다.
[사용자 규칙 문서](/private-dns/setting-up-filtering/user-rules.md)에서 자세히 알아보세요.
