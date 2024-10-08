---
title: OpenWRT
sidebar_position: 7
---

OpenWRT routers use an open source, Linux-based operating system that provides the flexibility to configure routers and gateways according to user preferences. The developers took care to add support for encrypted DNS servers, allowing you to configure Private AdGuard DNS on your device.

## Configure DNS-over-HTTPS

- **Command-line instructions**. Install the required packages. DNS encryption should be enabled automatically.

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy

  ```
- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

Navigate to _LuCI_ → _Services_ → _HTTPS DNS Proxy_ to configure the https-dns-proxy.

- **Configure DoH provider**. https-dns-proxy is configured with Google DNS and Cloudflare DNS by default. You need to change it to AdGuard DoH. Specify several resolvers to improve fault tolerance.

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

## 配置 DNS-over-TLS

- **Command-line instructions**. [Disable](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS role or remove it completely optionally [replacing](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) its DHCP role with odhcpd.

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

LAN clients and the local system should use Unbound as a primary resolver assuming that Dnsmasq is disabled.

- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

Navigate to _LuCI_ → _Services_ → _Recursive DNS_ to configure Unbound.

- **Configure AdGuard DNS-over-TLS**.

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

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. Open _Network_ → _Interfaces_.
4. Select your Wi-Fi network or wired connection.
5. Scroll down to IPv4 address or IPv6 address, depending on the IP version you want to configure.
6. Under _Use custom DNS servers_, enter the IP addresses of the DNS servers you want to use. You can enter multiple DNS servers, separated by spaces or commas:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. Optionally, you can enable DNS forwarding if you want the router to act as a DNS forwarder for devices on your network.
8. 请保存设置。
9. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
