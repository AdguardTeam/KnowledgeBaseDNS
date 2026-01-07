---
title: 사용자 규칙
sidebar_position: 3
---

## 사용자 규칙이란 무엇이며 왜 필요한가요?

사용자 규칙은 일반 차단 목록에서 사용되는 것과 동일한 필터링 규칙입니다. 규칙을 수동으로 추가하거나 미리 정의된 목록에서 가져와 웹사이트 필터링을 필요에 맞게 사용자 정의할 수 있습니다.

환경 설정에 더 잘 맞고 필터링을 더 유연하게 만들기 위해 AdGuard DNS 필터링 규칙에 대한 [규칙 구문](/general/dns-filtering-syntax/)을 확인하세요.

## 사용 방법

사용자 규칙을 설정하는 방법

1. **대시보드**로 이동합니다.

2. **서버** 섹션으로 이동합니다.

3. 필요한 서버를 선택합니다.

4. **사용자 규칙** 옵션을 클릭합니다.

5. You’ll find several options for adding user rules.

   - 가장 쉬운 방법은 생성기를 사용하는 것입니다. 생성기를 사용하려면 **새 규칙 추가** → 차단 또는 차단 해제할 도메인의 이름을 입력하고 **규칙 추가**를 클릭합니다.
     ![규칙 추가 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - 고급 방법은 규칙 편집기를 사용하는 것입니다. **편집기 열기**를 클릭하고 [구문](/general/dns-filtering-syntax/)에 따라 차단 규칙을 입력하세요.

이 기능을 사용하면 [DNS 쿼리의 내용을 교체하여 다른 도메인으로 쿼리를 리디렉션](/general/dns-filtering-syntax/#dnsrewrite-modifier)할 수 있습니다.
