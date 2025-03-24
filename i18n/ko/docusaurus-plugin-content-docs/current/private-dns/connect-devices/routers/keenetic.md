---
title: Keenetic
sidebar_position: 5
---

Keenetic 라우터는 안정성과 유연한 환경 설정으로 잘 알려져 있으며, 설정하기 쉽고, 기기에 암호화된 사설 AdGuard DNS를 쉽게 설치할 수 있습니다.

## DNS-over-HTTPS 설정

1. 라우터 관리자 패널을 엽니다. 라우터의 IP 주소인 my.keenetic.net 또는 `192.168.1.1`에서 접근할 수 있습니다.
2. 화면 하단의 메뉴 버튼을 누르고 **관리**를 선택합니다.
3. **시스템 설정**을 엽니다.
4. **구성 요소 옵션** → **시스템 구성 요소 옵션**을 누릅니다.
5. **유틸리티 및 서비스**에서 DNS-over-HTTPS 프록시를 선택하고 설치합니다.
6. **메뉴** → **네트워크 규칙** → **인터넷 보안**으로 이동합니다.
7. DNS-over-HTTPS 서버로 이동하여 **DNS-over-HTTPS 서버 추가**를 클릭합니다.
8. Enter the URL of the Private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. **저장**을 클릭합니다.

## DNS-over-TLS 설정

1. 라우터 관리자 패널을 엽니다. 라우터의 IP 주소인 my.keenetic.net 또는 `192.168.1.1`에서 접근할 수 있습니다.
2. 화면 하단의 메뉴 버튼을 누르고 **관리**를 선택합니다.
3. **시스템 설정**을 엽니다.
4. **구성 요소 옵션** → **시스템 구성 요소 옵션**을 누릅니다.
5. **유틸리티 및 서비스**에서 DNS-over-HTTPS 프록시를 선택하고 설치합니다.
6. **메뉴** → **네트워크 규칙** → **인터넷 보안**으로 이동합니다.
7. DNS-over-HTTPS 서버로 이동하여 **DNS-over-HTTPS 서버 추가**를 클릭합니다.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. **저장**을 클릭합니다.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. 라우터 관리자 패널을 엽니다. 192.168.1.1`또는`192.168.0.1\`에서 접속할 수 있습니다.
2. 관리자 사용자 아이디(일반적으로 admin)와 라우터 비밀번호를 입력합니다.
3. **인터넷** 또는 **홈 네트워크**를 엽니다.
4. **WAN** 또는 **인터넷**을 선택합니다.
5. DNS 또는 DNS 설정을 선택합니다.
6. **수동 DNS**를 선택합니다. **이 DNS 서버 사용** 또는 **수동으로 DNS 서버 지정**을 선택하고 다음 DNS 서버 주소를 입력합니다:
    - IPv4: `94.140.14.49` 및 `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 설정을 저장합니다.
8. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
