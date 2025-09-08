---
title: OpenWRT
sidebar_position: 7
---

OpenWRT 路由器使用基于 Linux 的开源操作系统，提供依据用户首选项配置路由器和网关的灵活性。 开发者添加了加密 DNS 服务器的支持，让用户在设备上配置私人 AdGuard DNS。

## 配置 DNS-over-HTTPS

 - **命令行指令**。 安装所需的软件包。 DNS 加密应自动启用。

    ```# Install packages
    1. opkg update
    2. opkg install https-dns-proxy

    ```
 - **Web 接口**。 如果用户想使用 Web 界面管理设置，请安装必要的软件包。

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

请转到「_LuCI_」→「_服务_」→「_HTTPS DNS 代理_」以配置 https-dns-proxy。

 - **配置 DNS-over-HTTPS 提供商**。 https-dns-proxy 默认配置 Google DNS 和 Cloudflare DNS。 用户要将其更改为 AdGuard DNS-over-HTTPS。 指定多个解析器以提高容错技术能力。

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

 - **命令行指令**。 [禁用](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS 角色，或者完全删除它，并可选[用 odhcpd 取代](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound)其 DHCP 协议角色。

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

假设 Dnsmasq 已禁用，LAN 客户端和本地系统应使用 Unbound 作为主要解析器。

 - **Web 接口**。 如果用户想使用 Web 界面管理设置，请安装必要的软件包。

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

转到「_LuCI_」→「_服务_」→「_递归 DNS_」以配置 Unbound。

 - **配置 AdGuard DNS-over-TLS**。

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
3. 打开「_网络_」→「_接口_」。
4. 选择您的 Wi-Fi 网络或有线连接。
5. 向下滚动到 IPv4 地址或 IPv6 地址，具体取决于用户要配置的 IP 版本。
6. 在「使用自定义 DNS 服务器」下，输入您希望使用的服务器 IP 地址。 用户可以输入多个 DNS 服务器，以空格或逗号分隔：
    - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
    - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 或者，如果用户希望路由器充当网络上设备的 DNS 转发器，可以启用 DNS 转发。
8. 请保存设置。
9. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
