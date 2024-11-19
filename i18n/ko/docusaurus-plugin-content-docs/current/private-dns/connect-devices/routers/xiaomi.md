---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have a lot of advantages: Steady strong signal, network security, stable operation, intelligent management, at the same time, the user can connect up to 64 devices to the local Wi-Fi network.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. Open the router admin panel. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
6. 설정을 저장합니다.
7. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
