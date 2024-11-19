---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box는 2.4GHz 및 5GHz 주파수 대역을 동시에 사용하여 모든 기기에 최대의 유연성을 제공합니다. FRITZ!Box에 연결된 모든 기기는 인터넷으로부터의 공격으로부터 완전히 보호됩니다. 이 브랜드의 라우터를 설정하면 암호화된 사설 AdGuard DNS를 설정할 수도 있습니다.

## DNS-over-TLS 설정

1. Open the router admin panel. 라우터의 IP 주소인 fritz.box 또는 `192.168.178.1`에서 접근할 수 있습니다.
2. Enter the administrator username (usually, it’s admin) and router password.
3. **인터넷** 또는 **홈 네트워크**를 엽니다.
4. DNS 또는 DNS 설정을 선택합니다.
5. DNS-over-TLS(DoT)에서, 공급업체에서 지원하는 경우 DNS-over-TLS 사용을 확인합니다.
6. **사용자 지정 TLS 서버 이름 표시(SNI) 사용**을 선택하고 AdGuard 사설 DNS 서버 주소를 입력합니다: `{Your_Device_ID}.d.adguard-dns.com`
7. 설정을 저장합니다.

## 라우터 관리 패널 사용

FritzBox 라우터가 DNS-over-TLS 구성을 지원하지 않으면 이 가이드를 사용하세요.

1. 라우터 관리자 패널을 엽니다. 192.168.1.1`또는`192.168.0.1\`에서 접속할 수 있습니다.
2. 관리자 사용자 아이디(일반적으로 admin)와 라우터 비밀번호를 입력합니다.
3. **인터넷** 또는 **홈 네트워크**를 엽니다.
4. DNS 또는 DNS 설정을 선택합니다.
5. **수동 DNS**를 선택한 다음 **이 DNS 서버 사용** 또는 **수동으로 DNS 서버 지정**을 선택하고 다음 DNS 서버 주소를 입력합니다.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
6. 설정을 저장합니다.
7. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
