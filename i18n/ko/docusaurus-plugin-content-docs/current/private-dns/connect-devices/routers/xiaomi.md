---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have many advantages: a stable, strong signal, network security, robust performance, and smart management. Users can connect up to 64 devices to a local Wi-Fi network.

Unfortunately, it doesn’t support encrypted DNS, but it’s great for setting up AdGuard DNS via linked IP.

## 라우터 관리 패널 사용

Use these instructions if your Xiaomi router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

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
