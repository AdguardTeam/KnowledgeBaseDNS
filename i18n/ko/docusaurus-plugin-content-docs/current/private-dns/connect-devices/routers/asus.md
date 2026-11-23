---
title: Asus
sidebar_position: 3
---

## DNS-over-TLS 설정

다음은 Asus 라우터에 대해 사설 AdGuard DNS를 환경 설정하는 일반 모드 설명서입니다.

이 도움말의 구성 정보는 특정 라우터 모델에서 가져온 것이므로 개별 기기의 인터페이스와 다를 수 있습니다.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Asus 라우터 관리자 패널에 로그인합니다.  [http://router.asus.com](http://router.asus.com/),  [http://192.168.1.1](http://192.168.1.1/),  [http://192.168.0.1](http://192.168.0.1/) 또는  [http://192.168.2.1](http://192.168.2.1/)을 통해 액세스할 수 있습니다.
2. 관리자 사용자 이름(일반적으로 admin)과 라우터 비밀번호를 입력합니다.
3. **고급 설정** 사이드바에서 WAN 섹션으로 이동합니다.
4. **WAN DNS 설정** 섹션에서 **DNS 서버 자동으로 연결**을 **아니요**로 설정합니다.
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. DNS 개인정보 보호 프로토콜을 DNS-over-TLS(DoT)로 변경합니다.
7. **DNS-over-TLS 프로필**이 **Strict**로 설정되어 있는지 확인합니다.
8. **DNS-over-TLS 서버 목록** 섹션까지 아래로 스크롤합니다. **주소** 필드에 아래 주소 중 하나를 입력합니다.
   - `94.140.14.49` 및 `94.140.14.59`
9. **TLS 포트**의 경우, 853을 입력합니다.
10. **TLS 호스트 이름** 필드에 사설 AdGuard DNS 서버 주소를 입력합니다.
    - `{Your_Device_ID}.d.adguard-dns.com`
11. 페이지 아래로 스크롤한 뒤 **적용**을 클릭합니다.

## 라우터 관리 패널 사용

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. 관리자 사용자 이름(일반적으로 admin)과 라우터 비밀번호를 입력합니다.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 설정을 저장합니다.
8. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
