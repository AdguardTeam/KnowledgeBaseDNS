---
title: 알려진 문제
sidebar_position: 1
---

AdGuard DNS를 설정한 후 일부 사용자에게는 제대로 작동하지 않을 수 있습니다. 이런 경우 기기가 AdGuard DNS에 연결되지 않았고 해당 기기의 요청이 쿼리 로그에 표시되지 않는다는 메시지가 표시됩니다. 이는 브라우저 또는 운영 체제의 특정한 숨겨진 설정으로 인해 발생할 수 있습니다. 몇 가지 일반적인 문제와 해결 방법을 살펴보겠습니다.

:::tip

[테스트 페이지](https://adguard.com/test.html)에서 AdGuard DNS 상태를 확인할 수 있습니다.

:::

## Chrome의 보안 DNS 설정

Chrome을 사용 중이고 AdGuard DNS 대시보드에 요청이 표시되지 않으면 Chrome이 자체 DNS 서버를 사용하기 때문일 수 있습니다. 다음은 이것을 비활성화하는 방법입니다.

1. Chrome 설정을 엽니다.
1. *개인 정보 보호 및 보안*로 이동합니다.
1. *보안*을 선택하세요.
1. *보안 DNS 사용*으로 스크롤을 내리세요.
1. 기능을 비활성화합니다.

![Chrome의 보안 DNS 사용 기능](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Chrome의 자체 DNS 설정을 비활성화하면 브라우저는 운영 체제가 지정한 DNS를 사용합니다. 올바르게 설정했다면 AdGuard DNS가 되어야 합니다.

## iCloud 비공개 릴레이(Safari, macOS 및 iOS)

기기 설정에서 iCloud 비공개 릴레이를 활성화하면 Safari는 AdGuard DNS 설정을 무시하는 Apple의 DNS 주소를 사용하게 됩니다.

iPhone에서 iCloud 비공개 릴레이를 비활성화하는 방법은 다음과 같습니다.

1. *설정*을 열고 당신의 이름을 누르세요.
1. *iCloud* → *비공개 릴레이*를 선택합니다.
1. 비공개 릴레이를 끕니다.

![iOS 비공개 릴레이](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Mac의 경우

1. *시스템 설정* 열고 이름 또는 *Apple ID*를 클릭합니다.
1. *iCloud* → *비공개 릴레이*를 선택합니다.
1. 비공개 릴레이를 끕니다.
1. *완료*를 누릅니다.

![macOS 비공개 릴레이](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## 고급 추적 및 핑거프린팅 방지(Safari, iOS 17부터)

iOS 17 업데이트 후 Safari 설정에서 고급 추적 및 핑거프린팅 방지가 활성화될 수 있으며, 이는 AdGuard DNS 설정을 우회하는 iCloud 비공개 릴레이와 유사한 효과를 가질 수 있습니다.

고급 추적 및 핑거프린팅 방지를 비활성화하는 방법은 다음과 같습니다.

1. *설정*을 열고 *Safari*까지 아래로 스크롤합니다.
1. *고급*을 누릅니다.
1. *고급 추적 및 핑거프린팅 방지*를 비활성화합니다.

![iOS 추적 및 핑거프린팅 방지 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
