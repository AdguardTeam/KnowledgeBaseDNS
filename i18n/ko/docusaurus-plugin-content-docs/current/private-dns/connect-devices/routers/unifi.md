---
title: UniFi
sidebar_position: 10
---

The UiFi router (commonly known as Ubiquiti's UniFi series) has a number of advantages that make it particularly suitable for home, business, and enterprise environments. Unfortunately, it does not support encrypted DNS, but it is great for setting up AdGuard DNS via linked IP.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. Ubiquiti UniFi 컨트롤러에 로그인합니다.
2. **설정** → **네트워크**로 이동합니다.
3. **네트워크 수정** → **WAN**을 클릭합니다.
4. **일반 설정** → **DNS 서버**로 이동하여 다음 DNS 서버 주소를 입력합니다.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
5. **저장**을 클릭합니다.
6. **네트워크**로 돌아갑니다.
7. **네트워크 수정** → **LAN**을 클릭합니다.
8. **DHCP 이름 서버**를 찾아 **수동**을 선택합니다.
9. **DNS 서버 1** 필드에 게이트웨이 주소를 입력합니다. 또는 **DNS 서버 1** 및 **DNS 서버 2** 필드에 AdGuard DNS 서버 주소를 입력할 수 있습니다.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
10. 설정을 저장합니다.
11. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [전용 IP](private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IP](private-dns/connect-devices/other-options/linked-ip.md)
