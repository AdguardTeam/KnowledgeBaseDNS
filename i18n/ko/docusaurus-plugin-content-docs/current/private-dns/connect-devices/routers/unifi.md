---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## DNS-over-HTTPS 설정

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Device name: '(use your Unifi device name)
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS Stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/), and set it:

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
    - No filter
    - No logs
5. Copy the DNS Stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi

1. Ubiquiti UniFi 컨트롤러에 로그인합니다.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
    - Server Name: 'AdGuard DNS'
    - DNS Stamp: DNS Stamp URL copied from above
5. **저장**을 클릭합니다.

## 라우터 관리 패널 사용

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration:

1. Ubiquiti UniFi 컨트롤러에 로그인합니다.
2. **설정** → **네트워크**로 이동합니다.
3. **네트워크 수정** → **WAN**을 클릭합니다.
4. **일반 설정** → **DNS 서버**로 이동하여 다음 DNS 서버 주소를 입력합니다.
    - IPv4: `94.140.14.49` 및 `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
5. Click _Save_.
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
