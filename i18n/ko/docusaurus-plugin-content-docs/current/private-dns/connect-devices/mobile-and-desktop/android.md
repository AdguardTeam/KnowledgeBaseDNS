---
title: Android
sidebar_position: 2
---

Android 기기를 AdGuard DNS에 연결하려면 먼저 **대시보드**에 추가하세요:

1. **대시보드**로 이동하여 **새 기기 연결**을 클릭합니다.
2. 드롭다운 메뉴 **기기 종류**에서 Android를 선택합니다.
3. 기기의 이름을 지정합니다.
   ![기기 연결 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard 광고 차단기 사용(유료 옵션)

AdGuard 앱을 사용하면 암호화된 DNS를 사용할 수 있어 Android 기기에서 AdGuard DNS를 설정하기에 완벽합니다. 다양한 암호화 프로토콜 중에서 선택할 수 있습니다. DNS 필터링과 함께 시스템 전체에서 작동하는 훌륭한 광고 차단기도 함께 제공합니다.

1. AdGuard DNS에 연결하려는 기기에 [AdGuard 앱](https://adguard.com/adguard-android/overview.html)을 설치합니다.
2. 앱을 엽니다.
3. 화면 하단의 메뉴 막대에서 방패 아이콘을 탭합니다.
   ![방패 아이콘 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. **DNS 보호**를 탭합니다.
   ![DNS 보호 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. **DNS 서버**를 선택합니다.
   ![DNS 서버 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. **사용자 정의 서버**로 스크롤한 다음 **DNS 서버 추가**를 탭합니다.
   ![DNS 서버 추가 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. 다음 DNS 주소 중 하나를 복사하여 앱의 **서버 주소** 필드에 붙여넣습니다. 어떤 것을 사용할지 확실하지 않다면 **DNS-over-HTTPS**를 선택합니다.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![사용자 정의 DNS 서버 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. **추가**를 탭합니다.
9. 추가한 DNS 서버는 **사용자 정의 서버** 목록 하단에 표시됩니다. 선택하려면 이름이나 그 옆의 라디오 버튼을 탭합니다.
   ![DNS 서버 선택 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. **저장 및 선택**을 탭합니다.
    ![저장 및 선택 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

## AdGuard VPN 사용

모든 VPN 서비스가 암호화된 DNS를 지원하는 것은 아닙니다. 하지만 우리의 VPN은 지원하므로, VPN과 개인 DNS가 모두 필요하다면, AdGuard VPN이 최적의 선택입니다.

1. AdGuard DNS에 연결하려는 기기에 [AdGuard VPN 앱](https://adguard-vpn.com/android/overview.html)을 설치합니다.
2. 앱을 엽니다.
3. 화면 하단의 메뉴 막대에서 톱니바퀴 아이콘을 탭합니다.
   ![톱니바퀴 아이콘 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. **앱 설정**을 엽니다.
   ![앱 설정 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. **DNS 서버**를 선택합니다.
   ![DNS 서버 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Scroll down and tap _Add a custom DNS server_.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS servers adresses_ field in the app. If you are not sure which one to use, select DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. **저장 및 선택**을 탭합니다.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.

All done! Your device is successfully connected to AdGuard DNS.

## Configure Private DNS manually

You can configure your DNS server in your device settings. Please note that Android devices only support DNS-over-TLS protocol.

1. Go to _Settings_ → _Wi-Fi & Internet_ (or _Network and Internet_, depending on your OS version).
   ![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Select _Advanced_ and tap _Private DNS_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Select the _Private DNS provider hostname_ option and enter the address of your personal server: `{Your_Device_ID}.d.adguard-dns.com`.
4. **저장**을 누릅니다.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Your device is successfully connected to AdGuard DNS.

## 평문 DNS 구성

DNS 구성을 위한 추가 소프트웨어를 사용하고 싶지 않다면 암호화가 해제된 DNS를 선택할 수 있습니다. You have two choices: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
