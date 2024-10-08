---
title: Keenetic
sidebar_position: 5
---

Keenetic routers are known for their stability and flexible configurations, and are easy to set up, allowing you to easily install encrypted Private AdGuard DNS on your device.

## Configure DNS-over-HTTPS

1. Open the router admin panel. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. Click _Save_.

## 配置 TLS 加密协议的 DNS（DNS-over-TLS）

1. Open the router admin panel. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. Click _Save_.

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Internet_ or _Home Network_.
4. Select _WAN_ or _Internet_.
5. Select _DNS_ or _DNS Settings_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
