---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

## DNS-over-HTTPS 설정

1. MikroTik 라우터 설정으로 이동합니다.
   - 웹브라우저를 열고 라우터의 IP 주소(일반적으로 `192.168.88.1`)로 이동합니다.
   - 또는 Winbox를 사용하여 MikroTik 라우터에 연결할 수 있습니다.
   - 관리자 사용자 아이디와 비밀번호를 입력합니다.
2. 루트 인증서를 가져옵니다.
   - 신뢰할 수 있는 최신 루트 인증서 번들을 다운로드합니다: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
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
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - **확인**을 클릭합니다.
4. 정적 DNS 레코드를 만듭니다.
   -  **DNS 설정**에서 **정적**을 클릭합니다.
   - **새로 추가**를 클릭합니다.
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - **주소**를 `94.140.14.49`로 설정합니다.
   - Set _TTL_ to `1d 00:00:00`
   - 이 과정을 반복하여 동일한 항목을 생성하되, **주소**를 `94.140.14.59`로 설정합니다.
5. DHCP 클라이언트에서 Peer DNS를 비활성화합니다.
   - **IP** → **DHCP 클라이언트**로 이동합니다.
   - 인터넷 연결에 사용되는 클라이언트(일반적으로 WAN 인터페이스에서)를 두 번 클릭합니다.
   - **Peer DNS 사용**을 선택 취소합니다.
   - **확인**을 클릭합니다.
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. MikroTik 라우터 설정으로 이동합니다.
   - 웹브라우저를 열고 라우터의 IP 주소(일반적으로 `192.168.88.1`)로 이동합니다.
   - 또는 Winbox를 사용하여 MikroTik 라우터에 연결할 수 있습니다.
   - 관리자 사용자 아이디와 비밀번호를 입력합니다.
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4: `94.140.14.49` 및 `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. DHCP 클라이언트에서 Peer DNS를 비활성화합니다.
   - Go to _IP_ → _DHCP Client_
   - 인터넷 연결에 사용되는 클라이언트(일반적으로 WAN 인터페이스에서)를 두 번 클릭합니다.
   - Uncheck _Use Peer DNS_
   - Click _OK_
