---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box provides maximum flexibility for all devices by simultaneously using the 2.4 GHz and 5 GHz frequency bands. All devices connected to the FRITZ!Box are fully protected against attacks from the Internet. The configuration of this brand of routers also allows you to set up encrypted Private AdGuard DNS.

## 配置 TLS 加密协议的 DNS（DNS-over-TLS）

1. Open the router admin panel. It can be accessed at fritz.box, the IP address of your router, or `192.168.178.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Internet_ or _Home Network_.
4. Select _DNS_ or _DNS Settings_.
5. Under DNS-over-TLS (DoT), check _Use DNS-over-TLS_ if supported by the provider.
6. Select _Use Custom TLS Server Name Indication (SNI)_ and enter the AdGuard Private DNS server address:  `{Your_Device_ID}.d.adguard-dns.com`.
7. 请保存设置。

## 使用路由器管理面板

Use this guide if your FritzBox router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Internet_ or _Home Network_.
4. Select _DNS_ or _DNS Settings_.
5. Select _Manual DNS_, then _Use These DNS Servers_ or _Specify DNS Server Manually_, and enter the following DNS server addresses:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
6. 请保存设置。
7. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
