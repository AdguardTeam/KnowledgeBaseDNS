---
title: MikroTik
sidebar_position: 6
---

MikroTik 路由器使用开放源代码 RouterOS 操作系统，该系统为家庭和小型办公室网络提供路由、防火墙和无线网络服务。

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
   - 在「_使用 DoH 服务器_」字段中，输入私有 AdGuard DNS 服务器的 URL：`https://d.adguard-dns.com/dns-query/*******`
   - 点击「_确定_」。
4. 创建「静态 DNS 记录」：
   - 在「_DNS 设置_」中，点击「_静态_」。
   - 点击「_添加新的_」。
   - 将「_名称_」设置为 d.adguard-dns.com
   - 将「_类型_」设置为 A。
   - 将「_地址_」设置为 `94.140.14.49`
   - 将「_TTL_」设置为 1d 00:00:00
   - 请重复该过程以创建相同的条目，但将「_地址_」设置为 `94.140.14.59`
5. 禁用 DHCP 客户端的 Peer DNS：
   - 转到「_IP 地址_」→「_DHCP 协议客户端_」。
   - 双击用于互联网连接的客户端（通常在 WAN 接口上）。
   - 取消勾选「_使用 Peer DNS_」
   - 点击「_确定_」。
6. 连接 IP 地址。
7. 测试和验证：
   - 可能需要重启 MikroTik 路由器，以使更改生效。
   - 请清除浏览器的 DNS 缓存。 用户可以使用类似 [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) 的工具来检查 DNS 请求是否已通过 AdGuard 进行路由。

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_Webfig_」→「_IP 地址_」→「_DNS_」。
4. 选择「_服务器_」并输入以下 DNS 服务器地址之一：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
5. 请保存设置。
6. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
