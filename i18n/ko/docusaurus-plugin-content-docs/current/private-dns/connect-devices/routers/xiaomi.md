---
title: Xiaomi
sidebar_position: 11
---

Xiaomi 라우터는 안정적이고 강력한 신호, 네트워크 보안, 안정적인 작동, 지능형 관리와 같은 많은 장점을 가지고 있으며 동시에 사용자는 최대 64 개의 기기를 로컬 Wi-Fi 네트워크에 연결할 수 있습니다.

안타깝게도 암호화된 DNS는 지원하지 않지만 연결된 IP를 통해 AdGuard DNS를 설정하는 데는 매우 유용합니다.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. 라우터 관리자 패널을 엽니다. 192.168.31.1\` 또는 라우터의 IP 주소로 접속할 수 있습니다.
2. 관리자 사용자 아이디(일반적으로 admin)와 라우터 비밀번호를 입력합니다.
3. 라우터 모델에 따라 **고급 설정** 또는 **고급**을 엽니다.
4. **네트워크** 또는 **인터넷**을 열고 DNS 또는 DNS 설정을 찾습니다.
5. **수동 DNS**를 선택합니다. **이 DNS 서버 사용** 또는 **수동으로 DNS 서버 지정**을 선택하고 다음 DNS 서버 주소를 입력합니다:
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
6. 설정을 저장합니다.
7. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
