---
title: 전용 IP
sidebar_position: 2
---

## 전용 IP란 무엇인가요?

전용 IPv4 주소는 팀 및 기업 구독이 있는 사용자에게 제공되며, 연결된 IP는 모든 사용자에게 제공됩니다.

팀 또는 기업 구독이 있는 경우 여러 개의 개인 전용 IP 주소를 받게 됩니다. Requests to these addresses are treated as "yours," and server-level configurations and filtering rules are applied accordingly. 전용 IP 주소는 훨씬 더 안전하고 관리하기 더 쉽습니다. With linked IPs, you have to manually reconnect or use a special program every time the device's IP address changes, which happens after every reboot.

## 전용 IP가 필요한 이유는 무엇인가요?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted private AdGuard DNS server. 이 경우, 일반 암호화되지 않은 DNS를 사용해야 합니다. AdGuard DNS를 설정하려면 [연결된 IP](/private-dns/connect-devices/other-options/linked-ip.md) 또는 전용 IP를 사용할 수 있습니다.

전용 IP는 일반적으로 더 안정적인 옵션입니다. 연결된 IP에는 몇 가지 제한 사항이 있어서 거주지 주소만 허용되며, 제공자가 IP를 변경할 수 있고 IP 주소를 다시 연결해야 합니다. With dedicated IPs, you get an IP address that is exclusively yours, and all requests will be counted for your device.

The disadvantage is that you may start receiving irrelevant traffic (scanners, bots), as always happens with public DNS resolvers. [액세스 설정](/private-dns/server-and-settings/access.md)을 사용하여 봇 트래픽을 제한해야 할 수도 있습니다.

아래 지침은 기기에 전용 IP를 연결하는 방법을 설명합니다.

## 전용 IP 사용하여 AdGuard DNS 연결

1. Open Dashboard.
2. 새 기기를 추가하거나 이전에 생성한 기기의 설정을 엽니다.
3. Select _Use server addresses_.
4. Next, open _Plain DNS Server Addresses_.
5. Select the server you wish to use.
6. To bind a dedicated IPv4 address, click _Assign_.
7. If you want to use a dedicated IPv6 address, click _Copy_.
   ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copy and paste the selected dedicated address into the device configurations.
