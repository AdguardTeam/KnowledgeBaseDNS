---
title: Structured DNS Errors(SDE)
sidebar_position: 5
---

AdGuard DNS 2.10의 출시와 함께 AdGuard DNS는 Structured DNS Errors(SDE)에 대한 지원을 추가한 최초의 공용 DNS 리졸버가 되었습니다. Structured DNS Errors는 RFC 8914에 추가된 기능입니다. 이 기능을 사용하면 DNS 서버가 일반적인 브라우저 메시지에 의존하지 않고 차단된 웹사이트에 대한 자세한 정보를 DNS 응답에 직접 제공할 수 있습니다. In this article, we’ll explain what _Structured DNS Errors_ are and how they work.

## Structured DNS Errors란 무엇인가요?

광고 또는 추적 도메인에 대한 요청이 차단되면 사용자는 웹사이트에 빈 공간이 표시되거나 DNS 필터링이 발생했다는 사실조차 인지하지 못할 수 있습니다. 그러나 전체 웹사이트가 DNS 수준에서 차단되면 사용자는 해당 페이지에 완전히 액세스할 수 없게 됩니다. When trying to access a blocked website, the user may see a generic “This site can’t be reached” error displayed by the browser.

![“This site can’t be reached” error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Such errors don’t explain what happened and why. 이로 인해 사용자는 웹사이트에 액세스할 수 없는 이유에 대해 혼란스러워하며 인터넷 연결이나 DNS 리졸버가 고장났다고 생각하는 경우가 많습니다.

이를 명확히 하기 위해 DNS 서버는 사용자를 설명이 포함된 자체 페이지로 리디렉션할 수 있습니다. 그러나 HTTPS 웹사이트(대부분의 웹사이트)에는 별도의 인증서가 필요합니다.

![인증서 오류](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

더 간단한 해결책이 있는데, 바로 [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/)입니다. SDE의 개념은 DNS 응답에 추가 오류 정보를 포함하는 기능을 도입한 [**Extended DNS Errors**(RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/)를 기반으로 합니다. SDE 초안에서는 한 단계 더 나아가 [I-JSON](https://www.rfc-editor.org/rfc/rfc7493)을 사용하여 브라우저와 클라이언트 애플리케이션이 쉽게 구문 분석할 수 있는 방식으로 정보를 형식화함으로써 이를 더욱 발전시켰습니다.

SDE 데이터는 DNS 응답의 `EXTRA-TEXT` 필드에 포함됩니다. 다음이 포함되어 있습니다:

- `j` (justification): 차단 이유
- `c` (contact): 실수로 페이지가 차단된 경우 문의처 연락처
- `o` (organization): 이 경우 DNS 필터링을 담당하는 단체(선택 사항)
- `s` (suberror): 이 특정 DNS 필터링에 대한 서브 오류 코드 (선택 사항)

이러한 시스템은 DNS 서비스와 사용자 간의 투명성을 강화합니다.

### Structured DNS Errors를 구현하려면 무엇이 필요하나요?

AdGuard DNS는 Structured DNS Errors에 대한 지원을 구현했지만 현재 브라우저는 기본적으로 SDE 데이터의 구문 분석 및 표시를 지원하지 않습니다. 웹사이트가 차단되었을 때 사용자가 브라우저에서 자세한 설명을 볼 수 있도록 하려면 브라우저 개발자가 SDE 초안 사양을 채택하고 지원해야 합니다.

### SDE용 AdGuard DNS 데모 확장 프로그램

Structured DNS Errors가 작동하는 방식을 보여주기 위해 AdGuard DNS는 브라우저에서 지원하는 경우, **Structured DNS Errors**가 어떻게 작동하는지 보여주는 데모 브라우저 확장 프로그램을 개발했습니다. 이 확장 프로그램을 활성화한 상태에서 AdGuard DNS에 의해 차단된 웹사이트를 방문하려고 하면 차단 이유, 연락처 정보, 담당 단체 등 SDE를 통해 제공된 정보가 포함된 자세한 설명 페이지가 표시됩니다.

![설명 페이지](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

확장 프로그램은 [Chrome 웹 스토어](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) 또는 [GitHub](https://github.com/AdguardTeam/dns-sde-extension/)에서 다운로드할 수 있습니다.

DNS 수준에서 어떻게 보이는지 확인하려면 `dig` 명령을 사용하여 출력에서 `EDE`를 찾으면 됩니다.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
