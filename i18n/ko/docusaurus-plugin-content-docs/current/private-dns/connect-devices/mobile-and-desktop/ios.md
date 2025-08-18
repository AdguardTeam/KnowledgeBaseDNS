---
title: iOS
sidebar_position: 3
---

AdGuard DNS에 iOS 기기를 연결하려면 먼저 대시보드에 추가하세요:

1. **대시보드**로 이동하여 **새 기기 연결**을 클릭합니다.
2. 드롭다운 메뉴에서 **기기 유형**을 선택합니다.
3. 기기의 이름을 지정합니다.
    ![기기 연결 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard 광고 차단기 사용(유료 옵션)

AdGuard 앱을 사용하면 암호화된 DNS를 사용할 수 있어, iOS 기기에 AdGuard DNS를 설정하는 데 적합합니다. 다양한 암호화 프로토콜 중에서 선택할 수 있습니다. DNS 필터링과 함께 시스템 전체에서 작동하는 훌륭한 광고 차단기도 함께 제공합니다.

1. AdGuard DNS에 연결하려는 기기에 [AdGuard 앱](https://adguard.com/adguard-ios/overview.html)을 설치합니다.
2. AdGuard 앱을 엽니다.
3. 하단 메뉴에서 **보호** 탭을 선택합니다.
    ![방패 아이콘 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. **DNS 보호**가 켜져 있는지 확인한 다음 누릅니다. **DNS 서버**를 선택합니다.
    ![DNS 보호 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
    ![DNS 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. 아래로 스크롤하여 **사용자 정의 DNS 서버 추가**를 누릅니다.
    ![DNS 서버 추가 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. 다음 DNS 주소 중 하나를 복사하여 앱의 **DNS 서버 주소** 필드에 붙여넣습니다. 어떤 것을 선택해야 할지 모르는 경우, DNS-over-HTTPS를 선택합니다.
    ![서버 주소 복사 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
    ![서버 주소 붙여넣기 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. **저장 및 선택**을 누릅니다.
    ![저장 및 선택 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. 새로 생성한 서버가 목록 맨 아래에 나타납니다.
    ![사용자 정의 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## AdGuard VPN 사용

모든 VPN 서비스가 암호화된 DNS를 지원하는 것은 아닙니다. 하지만 우리의 VPN은 지원하므로, VPN과 개인 DNS가 모두 필요하다면, AdGuard VPN이 최적의 선택입니다.

1. AdGuard DNS에 연결하려는 기기에 [AdGuard VPN 앱](https://adguard-vpn.com/ios/overview.html)을 설치합니다.
2. AdGuard VPN 앱을 엽니다.
3. 화면 오른쪽 하단의 기어 아이콘을 탭합니다.
    ![기어 아이콘 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. **일반** 설정을 엽니다.
    ![일반 설정 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. **DNS 서버**를 선택합니다.
    ![DNS 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. 사용자 정의 DNS 서버 추가까지 아래로 스크롤합니다.
    ![서버 추가 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. 다음 DNS 주소 중 하나를 복사하여 **DNS 서버 주소** 텍스트 필드에 붙여넣습니다. 어떤 것을 선택해야 할지 모르는 경우, DNS-over-HTTPS를 선택합니다.
    ![DoH 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
    ![사용자 정의 DNS 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. **저장**을 누릅니다.
    ![서버 저장 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. 새로 생성한 서버는 **사용자 정의 DNS 서버** 아래에 나타납니다.
    ![사용자 정의 서버 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## 구성 프로필 사용

An iOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. 이 프로필은 기기에서 개인 AdGuard DNS를 구성하는 데에도 사용됩니다.

:::note 중요

VPN을 사용 중인 경우, 구성 프로필은 무시됩니다.

:::

1. 프로필 다운로드.
2. 설정을 엽니다.
3. **프로필 다운로드됨**을 누릅니다.
    ![프로필 다운로드 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. **설치**를 누르고 화면의 지시에 따릅니다.
    ![설치 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## 평문 DNS 구성

DNS를 구성하기 위해 추가 소프트웨어를 사용하지 않으려는 경우, 암호화되지 않은 DNS를 선택할 수 있습니다. 연결된 IP 또는 전용 IP를 사용할 수 있습니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
