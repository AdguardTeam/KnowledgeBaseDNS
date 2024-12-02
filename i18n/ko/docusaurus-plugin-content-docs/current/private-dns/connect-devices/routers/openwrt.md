---
title: OpenWRT
sidebar_position: 7
---

OpenWRT 라우터는 사용자 기본 설정에 따라 라우터와 게이트웨이를 구성할 수 있는 유연성을 제공하는 오픈 소스 Linux 기반 운영 체제를 사용합니다. 개발자들은 암호화된 DNS 서버에 대한 지원을 추가하여 기기에서 사설 AdGuard DNS를 구성할 수 있도록 했습니다.

## DNS-over-HTTPS 설정

- **명령줄 지침**. 필요한 패키지를 설치합니다. DNS 암호화가 자동으로 활성화되어야 합니다.

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy

  ```
- **웹 인터페이스**. 웹 인터페이스를 사용하여 설정을 관리하려면 필요한 패키지를 설치하세요.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

**LuCI** → **서비스** → **HTTPS DNS 프록시**로 이동하여 https-dns-proxy를 설정합니다.

- **DoH 제공자 구성**. https-dns-proxy는 기본적으로 Google DNS 및 Cloudflare DNS로 구성됩니다. AdGuard DoH로 변경해야 합니다. 여러 리졸버를 지정하여 내결함성을 개선하세요.

  ```# Configure DoH provider
  1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  2. uci set https-dns-proxy.dns="https-dns-proxy"
  3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  6. uci set https-dns-proxy.dns.listen_port="5053"
  7. uci commit https-dns-proxy
  8. /etc/init.d/https-dns-proxy restart
  ```

## DNS-over-TLS 설정

- **명령줄 지침**. Dnsmasq DNS 역할을 [비활성화](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role)하거나 선택적으로 완전히 제거하여 해당 DHCP 역할을 odhcpd로 [대체](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound)합니다.

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

Dnsmasq가 비활성화되어 있다고 가정했을 때, LAN 클라이언트와 로컬 시스템은 기본 리졸버로 Unbound를 사용해야 합니다.

- **웹 인터페이스**. 웹 인터페이스를 사용하여 설정을 관리하려면 필요한 패키지를 설치하세요.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

**LuCI** → **서비스** → **재귀 DNS**로 이동하여 Unbound를 설정합니다.

- **AdGuard DNS-over-TLS를 설정합니다**.

  ```1. uci add unbound zone
  2. uci set unbound.@zone[-1].enabled="1"
  3. uci set unbound.@zone[-1].fallback="0"
  4. uci set unbound.@zone[-1].zone_type="forward_zone"
  5. uci add_list unbound.@zone[-1].zone_name="."
  6. uci set unbound.@zone[-1].tls_upstream="1"
  7. uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  8. uci add_list unbound.@zone[-1].server="94.140.14.49"
  9. uci add_list unbound.@zone[-1].server="94.140.14.59"
  10. uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  11. uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  12. uci commit unbound
  13. /etc/init.d/unbound restart
  ```

## 라우터 관리 패널 사용

Keenetic 라우터가 DNS-over-HTTPS 또는 DNS-over-TLS 구성을 지원하지 않는 경우, 이 지침을 따르세요.

1. 라우터 관리자 패널을 엽니다. 192.168.1.1`또는`192.168.0.1\`에서 접속할 수 있습니다.
2. 관리자 사용자 이름(일반적으로 admin)과 라우터 비밀번호를 입력합니다.
3. **네트워크** → **인터페이스**를 엽니다.
4. Wi-Fi 네트워크 또는 유선 연결을 선택합니다.
5. 설정하고자 하는 IP 버전에 따라 IPv4 주소 또는 IPv6까지 스크롤을 내립니다.
6. **사용자 정의 DNS 서버 사용**에서 사용하려는 DNS 서버의 IP 주소를 입력합니다. 여러 개의 DNS 서버를 공백이나 쉼표로 구분하여 입력할 수 있습니다.
   - IPv4: `94.140.14.49` 및 `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` 및 `2a10:50c0:0:0:0:0:dad:ff`
7. 필요에 따라 라우터가 네트워크에 있는 기기에 대한 DNS 전달자 역할을 하도록 하려면 DNS 전달을 활성화할 수 있습니다.
8. 설정을 저장합니다.
9. IP(또는 팀 구독이 있는 경우 전용 IP)를 연결합니다.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [연결된 IPs](/private-dns/connect-devices/other-options/linked-ip.md)
