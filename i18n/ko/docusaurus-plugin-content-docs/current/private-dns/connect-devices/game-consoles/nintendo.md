---
title: Nintendo
sidebar_position: 2
---

게임 콘솔은 암호화된 DNS를 지원하지 않지만, 연결된 IP 주소를 통해 공용 AdGuard DNS 또는 개인 AdGuard DNS를 설정하는 데 적합합니다.

귀하의 라우터에서 암호화된 DNS 서버의 사용을 지원할 가능성이 높으므로 항상 개인 AdGuard DNS를 환경 설정하고 게임 콘솔을 연결할 수 있습니다.

[라우터 설정 방법](/private-dns/connect-devices/routers/routers.md)

:::note Compatibility

Applies to New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL, and Nintendo 2DS.

:::

## AdGuard DNS 연결

게임 콘솔을 공용 AdGuard DNS 서버를 사용하도록 설정하거나 연결된 IP를 통해 환경 설정합니다.

1. From the home menu, select _System Settings_.
2. Go to _Internet Settings_ → _Connection Settings_.
3. Select the connection file, then select _Change Settings_.
4. Select _DNS_ → _Set Up_.
5. Set _Auto-Obtain DNS_ to _No_.
6. Select _Detailed Setup_ → _Primary DNS_. Hold down the left arrow to delete the existing DNS.
7. **DNS 서버** 필드에 다음 DNS 서버 주소 중 하나를 입력합니다:
   - `94.140.14.49`
   - `94.140.14.59`
8. 설정을 저장합니다.

연결된 IP(또는 Team을 구독하는 경우 전용 IP)를 사용하는 것이 좋습니다:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
