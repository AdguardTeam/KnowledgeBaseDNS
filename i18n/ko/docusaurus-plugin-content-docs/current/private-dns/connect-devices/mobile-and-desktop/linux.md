---
title: Linux
sidebar_position: 6
---

Linux 기기를 AdGuard DNS에 연결하려면 먼저 **대시보드**에 추가하세요.

1. **대시보드**로 이동하여 **새 기기 연결**을 클릭합니다.
2. 하위 메뉴 **기기 종류**에서 Linux를 선택합니다.
3. 기기의 이름을 지정합니다.
   ![장치 연결 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## AdGuard DNS 클라이언트 사용

AdGuard DNS 클라이언트는 암호화된 DNS 프로토콜을 사용하여 AdGuard DNS에 액세스할 수 있도록 하는 크로스 플랫폼 콘솔 유틸리티입니다.

이 내용은 [관련 기사](/dns-client/overview/)에서 자세히 알아볼 수 있습니다.

## AdGuard VPN CLI 사용

AdGuard VPN CLI(명령줄 인터페이스)를 사용하여 사설 AdGuard DNS를 설정할 수 있습니다. AdGuard VPN CLI를 시작하려면 터미널을 사용해야 합니다.

1. [이 지침](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/)에 따라 AdGuard VPN CLI를 설치합니다.
2. [설정](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/)으로 이동합니다.
3. 특정 DNS 서버를 설정하려면 `adguardvpn-cli config set-dns <server_address>` 명령을 사용하세요. 여기서 `<server_address>`은 비공개 서버의 주소입니다.
4. `adguardvpn-cli config set-system-dns on`을 입력하여 DNS 설정을 활성화합니다.

## Ubuntu에서 수동으로 설정 (연결된 IP 또는 전용 IP 필요)

1. Click _System_ → _Settings_ → _Network_.
2. **무선** 탭을 선택한 다음 현재 연결된 네트워크를 선택합니다.
3. Go to _IPv4_.
4. Set _Automatic (DHCP)_ to _Manual_.
5. Change the listed DNS addresses to the following addresses:
   - `94.140.14.49`
   - `94.140.14.59`
6. **적용**을 클릭합니다.
7. **IPv6**로 이동합니다.
8. Set _Automatic_ to _Manual_.
9. Change the listed DNS addresses to the following addresses:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
10. **적용**을 클릭합니다.
11. IP 주소(또는 Team을 구독하는 경우 전용 IP)를 연결합니다.
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Debian에서 수동으로 설정 (연결된 IP 또는 전용 IP 필요)

1. 터미널을 엽니다.
2. 명령줄에 `su`를 입력합니다.
3. `admin` 비밀번호를 입력합니다.
4. 명령줄에 `nano /etc/resolv.conf`를 입력합니다.
5. 나열된 DNS 주소를 다음으로 변경합니다.
   - IPv4: `94.140.14.49 및 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff 및 2a10:50c0:0:0:0:0:dad:ff`
6. 문서를 저장하려면 **Ctrl + O**를 누릅니다.
7. **Enter**를 누릅니다.
8. 문서를 저장하려면 **Ctrl + X**를 누릅니다.
9. 명령줄에 `/etc/init.d/networking restart`를 입력합니다.
10. **Enter**를 누릅니다.
11. _Enter_를 누릅니다.
12. IP 주소(또는 Team을 구독하는 경우 전용 IP)를 연결합니다.
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## dnsmasq를 사용합니다.

1. 다음 명령을 사용하여  dnsmasq 를 설치합니다.

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. dnsmasq.conf에서 다음 명령을 사용하세요:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. dnsmasq 서비스를 다시 시작하세요:

   `sudo service dnsmasq restart`

기기가 AdGuard DNS에 성공적으로 연결되었습니다!

:::note 중요

AdGuard DNS에 연결되지 않았다는 알림이 표시되면, 대부분 dnsmasq가 실행 중인 포트가 다른 서비스에 의해 점유되고 있을 가능성이 높습니다. [이 설명서](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse)를 사용하여 문제를 해결하세요.

:::

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command in the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

기기가 DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## 일반 DNS 사용

DNS 구성을 위한 추가 소프트웨어를 사용하고 싶지 않다면 암호화가 해제된 DNS를 선택할 수 있습니다. 연결된 IP 또는 전용 IP를 사용하는 두 가지 선택 사항이 있습니다:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
