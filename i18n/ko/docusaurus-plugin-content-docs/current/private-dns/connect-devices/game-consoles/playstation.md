---
title: PlayStation PS4/PS5
sidebar_position: 4
---

게임 콘솔은 암호화된 DNS를 지원하지 않지만, 연결된 IP 주소를 통해 공용 AdGuard DNS 또는 개인 AdGuard DNS를 설정하는 데 적합합니다.

귀하의 라우터에서 암호화된 DNS 서버의 사용을 지원할 가능성이 높으므로 항상 개인 AdGuard DNS를 환경 설정하고 게임 콘솔을 연결할 수 있습니다.

[라우터 설정 방법](/private-dns/connect-devices/routers/routers.md)

## AdGuard DNS 연결

게임 콘솔을 공용 AdGuard DNS 서버를 사용하도록 설정하거나 연결된 IP를 통해 환경 설정합니다.

1. Turn on your PS4/PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. In the _Settings_ menu, select _Network_.
4. Select _Set Up Internet Connection_.
5. Choose _Use Wi-Fi_ or _Use a LAN Cable_, depending on your network setup.
6. Select _Custom_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. **DNS 서버** 필드에 다음 DNS 서버 주소 중 하나를 입력합니다:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see "Internet Connection: Successful", save your settings.

연결된 IP(또는 Team을 구독하는 경우 전용 IP)를 사용하는 것이 좋습니다:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
