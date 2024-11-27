---
title: MikroTik
sidebar_position: 6
---

MikroTik 라우터는 가정 및 소규모 사무실 네트워크에 라우팅, 무선 네트워킹 및 방화벽 서비스를 제공하는 오픈 소스 RouterOS 운영 체제를 사용합니다.

## DNS-over-HTTPS 설정

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
   -  **DNS 설정**에서 **정적**을 클릭합니다.
   - **새로 추가**를 클릭합니다.
   - **이름**을 d.adguard-dns.com으로 설정합니다.
   - **유형**을 A로 설정합니다.
   - **주소**를 `94.140.14.49`로 설정합니다.
   - **TTL**을 1d 00:00:00로 설정합니다.
   - 이 과정을 반복하여 동일한 항목을 생성하되, **주소**를 `94.140.14.59`로 설정합니다.
5. DHCP 클라이언트에서 Peer DNS를 비활성화합니다.
   - **IP** → **DHCP 클라이언트**로 이동합니다.
   - 인터넷 연결에 사용되는 클라이언트(일반적으로 WAN 인터페이스에서)를 두 번 클릭합니다.
   - **Peer DNS 사용**을 선택 취소합니다.
   - **확인**을 클릭합니다.
6. IP를 연결합니다.
7. 테스트하고 확인합니다.
   - 모든 변경 사항을 적용하려면 MikroTik 라우터를 재부팅해야 할 수 있습니다.
   - 브라우저의 DNS 캐시를 지웁니다. [https://www.dnsleaktest.com](https://www.dnsleaktest.com/)와 같은 도구를 사용하여 DNS 요청이 AdGuard를 통해 라우팅되는지 확인할 수 있습니다.

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. 라우터 관리자 패널을 엽니다. 192.168.1.1`또는`192.168.0.1\`에서 접속할 수 있습니다.
2. 관리자 사용자 아이디(일반적으로 admin)와 라우터 비밀번호를 입력합니다.
3. **Webfig** → **IP** → **DNS**를 엽니다.
4. **서버**를 선택하고 다음 DNS 서버 주소 중 하나를 입력합니다.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
5. 설정을 저장합니다.
6. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
