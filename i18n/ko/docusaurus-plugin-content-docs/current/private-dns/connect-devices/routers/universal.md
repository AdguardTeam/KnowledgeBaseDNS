---
title: 일반 지침
sidebar_position: 2
---

다음은 라우터에서 사설 AdGuard DNS를 설정하는 몇 가지 일반적인 지침입니다. You can refer to this guide if you can’t find your specific router in the main list. 여기에 제공된 환경 설정 세부 사항은 대략적인 것이며 특정 모델의 설정과 다를 수 있습니다.

## 라우터 관리 패널 사용

1. 라우터의 환경 설정을 엽니다. 보통 브라우저에서 이들에 액세스할 수 있습니다. 라우터 모델에 따라 다음 주소 중 하나를 입력해 보세요.
    - Linksys 및 Asus 라우터는 일반적으로 [http://192.168.1.1](http://192.168.1.1/)를 사용합니다.
    - Netgear 라우터는 일반적으로 [http://192.168.0.1](http://192.168.0.1/) 또는 [http://192.168.1.1](http://192.168.1.1/)을 사용합니다. D-Link 라우터는 일반적으로 [http://192.168.0.1](http://192.168.0.1/)를 사용합니다.
    - Ubiquiti 라우터는 일반적으로 [http://unifi.ubnt.com](http://unifi.ubnt.com/)를 사용합니다.

2. Enter the router’s password.

    :::note 중요

    비밀번호가 알려지지 않은 경우, 라우터의 버튼을 눌러 초기화할 수 있으며, 이로 인해 라우터가 공장 설정으로 초기화됩니다. 일부 모델에는 전용 관리 앱이 있으며, 이 앱은 이미 컴퓨터에 설치되어 있어야 합니다.

    :::

3. Find where DNS settings are located in the router’s admin console. Change the listed DNS addresses to the following addresses:
    - IPv4: `94.140.14.49` 및 `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`

4. 설정을 저장합니다.

5. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
