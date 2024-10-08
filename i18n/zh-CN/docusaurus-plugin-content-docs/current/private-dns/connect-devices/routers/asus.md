---
title: Asus
sidebar_position: 3
---

## 配置 TLS 加密协议的 DNS（DNS-over-TLS）

以下是针对 Asus 路由器配置私人 AdGuard DNS 的一般指示说明。

The configuration information in these instructions is taken from a specific router model, so it may differ from the interface of an individual device.

If necessary: Configure DNS-over-TLS on ASUS, install the [ASUS Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. It can be accessed via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), or [http://192.168.2.1](http://192.168.2.1/).
2. Enter the administrator username (usually, it’s admin) and router password.
3. In the _Advanced Settings_ sidebar, navigate to the WAN section.
4. In the _WAN DNS Settings_ section, set _Connect to DNS Server automatically_ to _No_.
5. Set _Forward local queries_, _Enable DNS Rebind_, and _Enable DNSSEC_ to _No_.
6. Change DNS Privacy Protocol to DNS-over-TLS (DoT).
7. Make sure the _DNS-over-TLS Profile_ is set to _Strict_.
8. Scroll down to the _DNS-over-TLS Servers List_ section. In the _Address_ field, enter one of the addresses below:
   - `94.140.14.49` and `94.140.14.59`
9. For _TLS Port_, enter 853.
10. In the _TLS Hostname_ field, enter the Private AdGuard DNS server address:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Scroll to the bottom of the page and click _Apply_.

## 使用路由器管理面板

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Enter the administrator username (usually, it’s admin) and router password.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
