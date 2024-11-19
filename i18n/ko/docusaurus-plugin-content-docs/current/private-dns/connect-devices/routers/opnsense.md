---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. 상단 메뉴에서 **서비스**를 클릭한 다음 드롭다운 메뉴에서 **DHCP 서버**를 선택합니다.
4. **DHCP 서버** 페이지에서 DNS 설정을 구성할 인터페이스(예: LAN, WLAN)를 선택합니다.
5. **DNS 서버**까지 아래로 스크롤합니다.
6. **수동 DNS**를 선택합니다. **이 DNS 서버 사용** 또는 **수동으로 DNS 서버 지정**을 선택하고 다음 DNS 서버 주소를 입력합니다:
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 설정을 저장합니다.
8. 필요에 따라 보안 강화를 위해 DNSSEC를 활성화할 수 있습니다.
9. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [전용 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
