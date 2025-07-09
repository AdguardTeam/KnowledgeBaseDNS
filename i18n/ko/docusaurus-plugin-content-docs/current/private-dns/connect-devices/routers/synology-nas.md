---
title: Synology NAS
sidebar_position: 9
---

Synology NAS 라우터는 매우 사용하기 쉬우며 단일 메시 네트워크로 결합할 수 있습니다. 언제 어디서나 원격으로 네트워크를 관리할 수 있습니다. 라우터에서 AdGuard DNS를 직접 환경 설정할 수도 있습니다.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. 라우터 관리자 패널을 엽니다. 192.168.1.1`또는`192.168.0.1\`에서 접속할 수 있습니다.
2. 관리자 사용자 이름(일반적으로 admin)과 라우터 비밀번호를 입력합니다.
3. **제어판** 혹은 **네트워크**를 엽니다.
4. **네트워크 인터페이스** 또는 **네트워크 설정**을 선택합니다.
5. Wi-Fi 네트워크 또는 유선 연결을 선택합니다.
6. **수동 DNS**를 선택합니다. **이 DNS 서버 사용** 또는 **수동으로 DNS 서버 지정**을 선택하고 다음 DNS 서버 주소를 입력합니다:
    - IPv4: `94.140.14.49` 및 `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 설정을 저장합니다.
8. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
