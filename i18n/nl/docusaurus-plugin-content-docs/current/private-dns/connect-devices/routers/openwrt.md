---
title: OpenWRT
sidebar_position: 7
---

OpenWRT routers use an open source, Linux-based operating system that provides the flexibility to configure routers and gateways according to user preferences. The developers took care to add support for encrypted DNS servers, allowing you to configure Private AdGuard DNS on your device.

:::note

OpenWrt 25.12 en latere versies maken gebruik van de `apk`-pakketbeheerder, terwijl OpenWrt 24.10 en eerdere versies `opkg` gebruiken. Om te controleren welke versie van OpenWrt je hebt, voer je het commando `cat /etc/openwrt_release` uit.

:::

## Configure DNS-over-HTTPS

- **Command-line instructions**. Install the required packages. DNS encryption should be enabled automatically.

  Voor OpenWrt 25.12 en later:

  ```text
  apk-update
  apk add https-dns-proxy
  ```

  Voor OpenWrt 24.10 en eerdere versies:

  ```text
  opkg update
  opkg install https-dns-proxy
  ```

- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

  Voor OpenWrt 25.12 en later:

  ```text
  apk update
  apk add luci-app-https-dns-proxy
  /etc/init.d/rpcd restart
  ```

  Voor OpenWrt 24.10 en eerdere versies:

  ```text
  opkg update
  opkg install luci-app-https-dns-proxy
  /etc/init.d/rpcd restart
  ```

Navigate to _LuCI_ → _Services_ → _HTTPS DNS Proxy_ to configure the https-dns-proxy.

- **Configure DoH provider**. https-dns-proxy is configured with Google DNS and Cloudflare DNS by default. You need to change it to AdGuard DoH. Specify several resolvers to improve fault tolerance.

  ```text
  terwijl uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  uci set https-dns-proxy.dns="https-dns-proxy"
  uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  uci set https-dns-proxy.dns.listen_port="5053"
  uci commit https-dns-proxy
  /etc/init.d/https-dns-proxy restart
  ```

## Configure DNS-over-TLS

- **Command-line instructions**. [Disable](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS role or remove it completely optionally [replacing](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) its DHCP role with odhcpd.

  Voor OpenWrt 25.12 en later:

  ```text
  apk update
  apk add unbound-daemon ca-certificates
  ```

  Voor OpenWrt 24.10 en eerdere versies:

  ```text
  opkg update
  opkg install unbound-daemon ca-certificates
  ```

LAN clients and the local system should use Unbound as a primary resolver assuming that Dnsmasq is disabled.

- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

  Voor OpenWrt 25.12 en later:

  ```text
  apk update
  apk add luci-app-unbound ca-certificates
  /etc/init.d/rpcd restart
  ```

  Voor OpenWrt 24.10 en eerdere versies:

  ```text
  opkg update
  opkg install luci-app-unbound ca-certificates
  /etc/init.d/rpcd restart
  ```

Navigate to _LuCI_ → _Services_ → _Recursive DNS_ to configure Unbound.

- **Configure AdGuard DNS-over-TLS**.

  ```text
  uci add unbound zone
  uci set unbound.@zone[-1].enabled="1"
  uci set unbound.@zone[-1].fallback="0"
  uci set unbound.@zone[-1].zone_type="forward_zone"
  uci add_list unbound.@zone[-1].zone_name="."
  uci set unbound.@zone[-1].tls_upstream="1"
  uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  uci add_list unbound.@zone[-1].server="94.140.14.49"
  uci add_list unbound.@zone[-1].server="94.140.14.59"
  uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  uci commit unbound
  /etc/init.d/unbound restart
  ```

## Use your router admin panel

Volg deze instructies als je OpenWrt-router geen ondersteuning biedt voor DNS-over-HTTPS of DNS-over-TLS:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Network_ → _Interfaces_.
4. Select your Wi-Fi network or wired connection.
5. Scroll down to IPv4 address or IPv6 address, depending on the IP version you want to configure.
6. Under _Use custom DNS servers_, enter the IP addresses of the DNS servers you want to use. You can enter multiple DNS servers, separated by spaces or commas:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Optionally, you can enable DNS forwarding if you want the router to act as a DNS forwarder for devices on your network.
8. Save the settings.
9. Link your IP (or your dedicated IP if you have a Team subscription).

- [Toegewezen IP's](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Gekoppelde IP's](/private-dns/connect-devices/other-options/linked-ip.md)
