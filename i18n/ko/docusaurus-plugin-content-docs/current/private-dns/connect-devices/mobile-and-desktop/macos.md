---
title: macOS
sidebar_position: 4
---

To connect a macOS device to AdGuard DNS, first add it to _Dashboard_:

1. **대시보드**로 이동하여 **새 기기 연결**을 클릭합니다.
2. In the drop-down menu _Device type_, select Mac.
3. 기기의 이름을 지정합니다.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## AdGuard 광고 차단기 사용(유료 옵션)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your macOS device. 다양한 암호화 프로토콜 중에서 선택할 수 있습니다. DNS 필터링과 함께 시스템 전체에서 작동하는 훌륭한 광고 차단기도 함께 제공합니다.

1. [Install the app](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
2. 앱을 엽니다.
3. 오른쪽 상단 모서리에 있는 아이콘을 클릭합니다.
   ![Protection icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. \*\*설정...\*\*을 선택합니다.
   ![환경 설정 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. 아이콘의 맨 위 행에서 **DNS** 탭을 클릭합니다.
   ![DNS 탭 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. 상단의 확인란을 선택하여 DNS 보호를 활성화합니다.
   ![DNS 보호 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. 좌측 하단의 \*\*+\*\*를 클릭합니다.
   ![+ 클릭하기 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. 다음 DNS 주소 중 하나를 복사하여 앱의 **DNS 서버** 필드에 붙여넣습니다. 어떤 것을 선택해야 할지 모르는 경우, DNS-over-HTTPS를 선택합니다.
   ![DoH 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![사용자 정의 DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. **저장 및 선택**을 클릭합니다.
   ![저장 및 선택 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. 새로 만든 서버가 목록 맨 아래에 나타나야 합니다.
    ![공급자 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## AdGuard VPN 사용

모든 VPN 서비스가 암호화된 DNS를 지원하는 것은 아닙니다. 하지만 우리의 VPN은 지원하므로, VPN과 개인 DNS가 모두 필요하다면, AdGuard VPN이 최적의 선택입니다.

1. AdGuard DNS에 연결할 기기에 [AdGuard VPN 앱](https://adguard-vpn.com/mac/overview.html)을 설치합니다.
2. AdGuard VPN 앱을 엽니다.
3. **설정** → **앱 설정** → **DNS 서버** → **사용자 정의 서버 추가**를 엽니다.
   ![사용자 정의 서버 추가 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. 다음 DNS 주소 중 하나를 복사하여 **DNS 서버 주소** 텍스트 필드에 붙여넣습니다. 어떤 것을 선택해야 할지 모르는 경우, DNS-over-HTTPS를 선택합니다.
   ![DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. **저장 및 선택**을 클릭합니다.
6. 추가한 DNS 서버는 **사용자 정의 DNS 서버** 목록 하단에 표시됩니다.
   ![사용자 정의 DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## 구성 프로필 사용

Apple에서 '구성 프로필'이라고도 하는 macOS 기기 프로필은 기기에 수동으로 설치하거나 MDM 솔루션을 사용하여 배포할 수 있는 인증서로 서명된 XML 파일입니다. 이 프로필은 기기에서 개인 AdGuard DNS를 구성하는 데에도 사용됩니다.

:::note 중요

VPN을 사용 중인 경우, 구성 프로필은 무시됩니다.

:::

1. AdGuard DNS에 연결할 기기에서 구성 프로파일을 다운로드합니다.
2. Apple 메뉴 → **시스템 설정**을 선택하고 사이드바에서 **개인정보 및 보안**을 클릭한 후 오른쪽에서 **프로파일**을 클릭합니다(아래로 스크롤해야 할 수도 있음).
   ![다운로드된 프로필 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. **다운로드됨** 섹션에서 프로파일을 두 번 클릭합니다.
   ![다운로드 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. 프로파일 내용을 검토한 후, **설치**를 클릭합니다.
   ![설치 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. 관리자 비밀번호를 입력한 후 **확인**을 클릭합니다.

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## 평문 DNS 구성

DNS 구성을 위한 추가 소프트웨어를 사용하고 싶지 않다면 암호화가 해제된 DNS를 선택할 수 있습니다. 연결된 IP 또는 전용 IP를 사용할 수 있습니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
