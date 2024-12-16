---
title: iCloud 비공개 릴레이와 동시에 사용하기
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

iCloud 비공개 릴레이를 사용하는 경우, AdGuard DNS 대시보드(및 관련 [테스트 페이지](https://adguard.com/test.html))에는 해당 기기에서 AdGuard DNS를 사용하고 있지 않다는 메시지가 표시됩니다.

![기기가 연결되지 않음](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

이 문제를 해결하려면 기기 설정에서 AdGuard 웹사이트가 사용자의 IP 주소를 볼 수 있도록 허용해야 합니다.

- iPhone 또는 iPad의 경우:

    1. `adguard-dns.io`로 이동하세요.

    1. **페이지 설정** 버튼을 누른 다음 **IP 주소 표시**를 누르세요.

        ![iCloud 비공개 릴레이 설정 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com`으로 위 과정을 반복하세요.

- Mac의 경우:

    1. `adguard-dns.io`로 이동하세요.

    1. Safari에서 **보기** → **새로고침 및 IP 주소 표시**를 선택하세요.

    1. `adguard.com`으로 위 과정을 반복하세요.

웹사이트에서 일시적으로 IP 주소를 볼 수 있도록 허용하는 옵션이 표시되지 않는 경우 기기를 최신 버전의 iOS, iPadOS 또는 macOS로 업데이트한 다음 다시 시도하세요.

이제 AdGuard DNS 상태창에 기기가 올바르게 표시될 것 입니다.

![기기가 연결됨](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

특정 웹사이트에 대해 비공개 릴레이를 끄면 네트워크 공급자도 귀하가 탐색 중인 사이트를 볼 수 있다는 점에 유의하세요.
