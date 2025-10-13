---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## 配置 DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
   - Device type: 'Router'
   - Device brand: 'Unifi'
   - Device name: Use your Unifi device name
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
   - No filter
   - No logs
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. 登录 Ubiquiti UniFi 控制器。
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
   - Server Name: 'AdGuard DNS'
   - DNS Stamp: DNS stamp URL copied from above
5. 点击「_保存_」。

## 使用路由器管理面板

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration.

1. 登录 Ubiquiti UniFi 控制器。
2. 转至「_设置_」→「_网络_」。
3. 单击「_编辑网络_」→「_WAN_」。
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
5. 点击「保存」。
6. 返回「_网络_」。
7. 选择「_编辑网络_」→「_LAN_」。
8. 找到「DHCP 名称服务器」并选择「_手动_」。
9. 在「_DNS 服务器 1_」字段中输入您的网关地址。 Alternatively, you can enter the AdGuard DNS server addresses in the _DNS Server 1_ and _DNS Server 2_ fields:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
10. 请保存设置。
11. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。
    - [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
