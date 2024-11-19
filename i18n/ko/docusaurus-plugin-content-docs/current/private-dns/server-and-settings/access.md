---
title: Access settings
sidebar_position: 3
---

By configuring Access settings, you can protect your AdGuard DNS from unauthorized access. For example, you are using a dedicated IPv4 address, and attackers using sniffers have recognized it and are bombarding it with requests. No problem, just add the pesky domain or IP address to the list and it won't bother you anymore!

Blocked requests will not be displayed in the Query Log and are not counted in the total limit.

## 설정 방법

### Allowed clients

This setting allows you to specify which clients can use your DNS server. It has the highest priority. For example, if the same IP address is on both the denied and allowed list, it will still be allowed.

### Disallowed clients

Here you can list the clients that are not allowed to use your DNS server. You can block access to all clients and use only selected ones. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Then, in the _Allowed clients_ field, specify the addresses that can access your server.

:::note 중요

Before applying the access settings, make sure you're not blocking your own IP address. If you do, you won't be able to access the network. If that happens, just disconnect from the DNS server, go to the access settings, and adjust the configurations accordingly.

:::

### 차단된 도메인

여기에서 DNS 서버에 액세스를 거부할 도메인(와일드카드 및 DNS 필터링 규칙 포함)을 지정할 수 있습니다.

![접근 설정 \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-ko.png)

쿼리 로그에 DNS 요청과 연결된 IP 주소를 표시하려면 **IP 주소 로그** 체크박스를 선택하세요. 이렇게 하려면 **서버 설정** → **고급 설정**을 열으세요.
