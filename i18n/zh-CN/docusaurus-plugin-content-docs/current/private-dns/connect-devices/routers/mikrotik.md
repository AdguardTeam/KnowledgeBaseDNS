---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

## 配置 DNS-over-HTTPS

1. 请转到 MikroTik 路由器设置：
   - 打开浏览器并转到路由器的 IP 地址（通常为 `192.168.88.1`）。
   - 或者，也可以使用 Winbox 连接到 MikroTik 路由器。
   - 输入您的管理员用户名和密码。
2. 导入根证书：
   - 下载最新的受信任根证书包：[https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - 前往「_文件_」。 单击「_上传_」，然后选择已下载的 cacert.pem 证书包。
   - 转到「_系统_」→「_证书_」→「_导入_」。
   - 在「_文件名_」字段中，选择已上传的证书文件。
   - 点击「_导入_」。
3. 配置 DNS-over-HTTPS：
   - 转到「_IP 地址_」→「_DNS_」。
   - 在「_服务器_」部分，添加以下 AdGuard DNS 服务器：
     - `94.140.14.49`
     - `94.140.14.59`
   - 将「_允许远程请求_」设置为「_是_」（这对 DNS-over-HTTPS 的功能至关重要）。
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - 点击「_确定_」。
4. 创建「静态 DNS 记录」：
   - 在「_DNS 设置_」中，点击「_静态_」。
   - 点击「_添加新的_」。
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - 将「_地址_」设置为 `94.140.14.49`
   - Set _TTL_ to `1d 00:00:00`
   - 请重复该过程以创建相同的条目，但将「_地址_」设置为 `94.140.14.59`
5. 禁用 DHCP 客户端的 Peer DNS：
   - 转到「_IP 地址_」→「_DHCP 协议客户端_」。
   - 双击用于互联网连接的客户端（通常在 WAN 接口上）。
   - 取消勾选「_使用 Peer DNS_」
   - 点击「_确定_」。
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. 请转到 MikroTik 路由器设置：
   - 打开浏览器并转到路由器的 IP 地址（通常为 `192.168.88.1`）。
   - 或者，也可以使用 Winbox 连接到 MikroTik 路由器。
   - 输入您的管理员用户名和密码。
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
     - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. 禁用 DHCP 客户端的 Peer DNS：
   - Go to _IP_ → _DHCP Client_
   - 双击用于互联网连接的客户端（通常在 WAN 接口上）。
   - Uncheck _Use Peer DNS_
   - Click _OK_
