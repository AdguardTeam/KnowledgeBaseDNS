---
title: iCloud 비공개 릴레이와 동시에 사용하기
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![기기가 연결되지 않음](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- iPhone 또는 iPad의 경우:

    1. `adguard-dns.io`로 이동하세요.

    1. **페이지 설정** 버튼을 누른 다음 **IP 주소 표시**를 누르세요.

        ![iCloud 비공개 릴레이 설정 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com`으로 위 과정을 반복하세요.

- Mac의 경우:

    1. `adguard-dns.io`로 이동하세요.

    1. Safari에서 **보기** → **새로고침 및 IP 주소 표시**를 선택하세요.

    1. `adguard.com`으로 위 과정을 반복하세요.

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

이제 AdGuard DNS 상태창에 기기가 올바르게 표시될 것 입니다.

![기기가 연결됨](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
