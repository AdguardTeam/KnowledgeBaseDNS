---
title: Asus
sidebar_position: 3
---

## Configure DNS-over-TLS

These are general instructions for configuring Private AdGuard DNS for Asus routers.

The configuration information in these instructions is taken from a specific router model, so it may differ from the interface of an individual device.

If necessary: Configure DNS-over-TLS on ASUS, install the [ASUS Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. It can be accessed via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), or [http://192.168.2.1](http://192.168.2.1/).
2. Enter the administrator username (usually, it’s admin) and router password.
3. In the _Advanced Settings_ sidebar, navigate to the WAN section.
4. In the _WAN DNS Settings_ section, set _Connect to DNS Server automatically_ to _No_.
5. Set _Forward local queries_, _Enable DNS Rebind_, and _Enable DNSSEC_ to _No_.
6. Change DNS Privacy Protocol to DNS-over-TLS (DoT).
7. Make sure the _DNS-over-TLS Profile_ is set to _Strict_.
8. Scroll down to the _DNS-over-TLS Servers List_ section. In the _Address_ field, enter one of the addresses below:
   - `94.140.14.49` and `94.140.14.59`
9. For _TLS Port_, enter 853.
10. In the _TLS Hostname_ field, enter the Private AdGuard DNS server address:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Scroll to the bottom of the page and click _Apply_.

## 라우터 관리 패널 사용

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 설정을 저장합니다.
8. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
