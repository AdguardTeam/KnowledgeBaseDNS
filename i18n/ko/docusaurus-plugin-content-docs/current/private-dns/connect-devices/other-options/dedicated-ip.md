---
title: 전용 IP
sidebar_position: 2
---

## 전용 IP란 무엇인가요?

전용 IPv4 주소는 팀 및 기업 구독이 있는 사용자에게 제공되며, 연결된 IP는 모든 사용자에게 제공됩니다.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. 전용 IP 주소는 훨씬 더 안전하고 관리하기 더 쉽습니다. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## 전용 IP가 필요한 이유는 무엇인가요?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted Private AdGuard DNS server. 이 경우, 일반 암호화되지 않은 DNS를 사용해야 합니다. AdGuard DNS를 설정하려면 [연결된 IP](/private-dns/connect-devices/other-options/linked-ip.md) 또는 전용 IP를 사용할 수 있습니다.

전용 IP는 일반적으로 더 안정적인 옵션입니다. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. 전용 IP를 사용하면 본인만 사용할 수 있는 IP 주소가 제공되며 모든 요청이 해당 기기에서 계산됩니다.

단점은 항상 공용 DNS 리졸버와 함께 발생하는 것처럼 스캐너, 봇과 같은 관련 없는 트래픽을 받기 시작할 수 있다는 것입니다. [액세스 설정](/private-dns/server-and-settings/access.md)을 사용하여 봇 트래픽을 제한해야 할 수도 있습니다.

아래 지침은 기기에 전용 IP를 연결하는 방법을 설명합니다.

## 전용 IP 사용하여 AdGuard DNS 연결

1. 대시보드를 엽니다.
2. 새 기기를 추가하거나 이전에 생성한 기기의 설정을 엽니다.
3. **서버 주소 사용**을 선택합니다.
4. 다음으로, **일반 DNS 서버 주소**를 엽니다.
5. 사용하려는 서버를 선택합니다.
6. 전용 IPv4 주소를 연결하려면 **할당**을 클릭합니다.
7. 전용 IPv6 주소를 사용하려면 **복사**를 클릭합니다.
    ![주소 복사 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. 선택한 전용 주소를 복사하여 기기 설정에 붙여넣습니다.
