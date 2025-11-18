---
title: 인증이 있는 DNS-over-HTTPS
sidebar_position: 4
---

## 왜 유용한가요?

인증이 있는 DNS-over-HTTPS는 선택한 서버에 접근하기 위해 사용자 이름과 비밀번호를 설정할 수 있도록 허용합니다.

이는 무단 사용자가 접근하는 것을 방지하고 보안을 강화하는 데 도움이 됩니다. 추가적으로, 특정 프로필에 대해 다른 프로토콜의 사용을 제한할 수 있습니다. 이 기능은 당신의 DNS 서버 주소가 다른 사람에게 알려져 있을 때 특히 유용합니다. 비밀번호를 추가함으로써 접근을 차단하고 오직 당신만 사용할 수 있도록 할 수 있습니다.

## 설정 방법

:::note 호환성

이 기능은 [AdGuard DNS Client](/dns-client/overview.md)뿐만 아니라 [AdGuard 앱](https://adguard.com/welcome.html)에서도 지원됩니다.

:::

1. 대시보드를 엽니다.
2. 기기를 추가하거나 이전에 생성된 기기의 설정으로 이동합니다.
3. **DNS 서버 주소 사용**을 클릭하고 **암호화된 DNS 서버 주소** 섹션을 엽니다.
4. 원하는 대로 인증이 있는 DNS-over-HTTPS를 구성합니다.
5. AdGard DNS 클라이언트 또는 AdGard 앱 중 하나에서 이 서버를 사용하도록 기기를 재구성합니다.
6. 이를 위해 암호화된 서버의 주소를 복사하여 AdGuard 앱이나 AdGuard DNS 클라이언트 설정에 붙여넣습니다.
   ![주소 복사 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. 다른 프로토콜의 사용도 거부할 수 있습니다.
   ![프로토콜 거부 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
