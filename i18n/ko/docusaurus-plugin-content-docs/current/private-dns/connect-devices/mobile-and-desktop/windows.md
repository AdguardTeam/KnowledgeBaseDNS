---
title: Windows
sidebar_position: 5
---

To connect an iOS device to AdGuard DNS, first add it to _Dashboard_:

1. **대시보드**로 이동하여 **새 기기 연결**을 클릭합니다.
2. In the drop-down menu _Device type_, select Windows.
3. 기기의 이름을 지정합니다.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## AdGuard 광고 차단기 사용(유료 옵션)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. 다양한 암호화 프로토콜 중에서 선택할 수 있습니다. DNS 필터링과 함께 시스템 전체에서 작동하는 훌륭한 광고 차단기도 함께 제공합니다.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. 앱을 엽니다.
3. Click _Settings_ at the top of the app's home screen.
   ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Select the _DNS Protection_ tab from the menu on the left.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. 현재 선택한 DNS 서버를 클릭합니다.
   ![DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. 아래로 스크롤하여 **사용자 정의 DNS 서버 추가**를 클릭합니다.
   ![사용자 정의 DNS 서버 추가 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. DNS 업스트림 필드에 다음 주소 중 하나를 붙여넣습니다. 어떤 것을 선택해야 할지 모르겠다면, DNS-over-HTTPS를 선택하세요.
   ![DoH 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![서버 생성 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. **저장 및 선택**을 클릭합니다.
   ![저장 및 선택 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. 추가한 DNS 서버는 **사용자 정의 DNS 서버** 목록 하단에 표시됩니다.
   ![사용자 정의 DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## AdGuard VPN 사용

모든 VPN 서비스가 암호화된 DNS를 지원하는 것은 아닙니다. 하지만 우리의 VPN은 지원하므로, VPN과 개인 DNS가 모두 필요하다면, AdGuard VPN이 최적의 선택입니다.

1. AdGuard VPN을 설치합니다.
2. 앱을 열고 **설정**을 클릭합니다.
3. **앱 설정**을 선택합니다.
   ![앱 설정 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. 아래로 스크롤하여 **DNS 서버**를 선택합니다.
   ![DNS 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. **사용자 정의 DNS 서버 추가**를 클릭합니다.
   ![사용자 정의 DNS 서버 추가 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. **서버 주소** 필드에 다음 주소 중 하나를 붙여넣습니다. 어떤 것을 선택해야 할지 모르겠다면, DNS-over-HTTPS를 선택하세요.
   ![DoH 서버 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![서버 생성 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. **저장 및 선택**을 클릭합니다.
   ![저장 및 선택 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## AdGuard DNS 클라이언트 사용

AdGuard DNS Client는 암호화된 DNS 프로토콜을 사용하여 AdGuard DNS에 연결할 수 있는 다목적 크로스 플랫폼 콘솔 도구입니다.

자세한 내용은 [다른 기사](/dns-client/overview/)에서 확인할 수 있습니다.

## 평문 DNS 구성

DNS 구성을 위한 추가 소프트웨어를 사용하고 싶지 않다면 암호화가 해제된 DNS를 선택할 수 있습니다. 연결된 IP 또는 전용 IP를 사용할 수 있습니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
