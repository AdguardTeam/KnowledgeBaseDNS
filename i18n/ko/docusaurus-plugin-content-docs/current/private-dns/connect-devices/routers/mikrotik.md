---
title: MikroTik
sidebar_position: 6
---

MikroTik 라우터는 가정 및 소규모 사무실 네트워크에 라우팅, 무선 네트워킹 및 방화벽 서비스를 제공하는 오픈 소스 RouterOS 운영 체제를 사용합니다.

## Configure DNS-over-HTTPS

1. Access your MikroTik router:
   - 웹브라우저를 열고 라우터의 IP 주소(일반적으로 `192.168.88.1`)로 이동합니다.
   - 또는 Winbox를 사용하여 MikroTik 라우터에 연결할 수 있습니다.
   - 관리자 사용자 아이디와 비밀번호를 입력합니다.
2. 루트 인증서를 가져옵니다.
   - Download the latest bundle of trusted root certificates: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - **파일**로 이동합니다. **업로드**를 클릭하고 다운로드한 cacert.pem 인증서 번들을 선택합니다.
   - **시스템** → **인증서** → **가져오기**로 이동합니다.
   - **파일 이름** 필드에서 업로드한 인증서 파일을 선택합니다.
   - **가져오기**를 클릭합니다.
3. DNS-over-HTTPS를 설정합니다.
   - **IP** → **DNS**로 이동합니다.
   - **서버** 섹션에서 다음 AdGuard DNS 서버를 추가합니다.
     - `94.140.14.49`
     - `94.140.14.59`
   - **원격 요청 허용**을 **예**로 설정합니다(DoH가 작동하려면 이 설정이 필수입니다).
   - **DoH 서버 사용** 필드에 사설 AdGuard DNS 서버의 URL을 입력합니다: `https://d.adguard-dns.com/dns-query/*******`
   - **확인**을 클릭합니다.
4. 정적 DNS 레코드를 만듭니다.
   - In the _DNS Settings_, click _Static_
   - Click _Add New_
   - Set _Name_ to d.adguard-dns.com
   - Set _Type_ to A
   - Set _Address_ to `94.140.14.49`
   - Set _TTL_ to 1d 00:00:00
   - Repeat the process to create an identical entry, but with _Address_ set to `94.140.14.59`
5. Disable Peer DNS on DHCP Client:
   - Go to _IP_ → _DHCP Client_
   - Double-click the client used for your Internet connection (usually on the WAN interface)
   - Uncheck _Use Peer DNS_
   - **확인**을 클릭합니다.
6. Link your IP.
7. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Webfig_ → _IP_ → _DNS_.
4. Select _Servers_ and enter one of the following DNS server addresses.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
5. 설정을 저장합니다.
6. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
