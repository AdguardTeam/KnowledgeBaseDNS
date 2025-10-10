---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box 为所有设备提供最大的灵活性，能够同时使用 2.4 GHz 和 5 GHz 频段。 所有连接到 FRITZ!Box 的设备都能完全抵御互联网的攻击。 这种路由器品牌的配置还允许用户设置加密的私人 AdGuard DNS。

## 配置 DNS-over-TLS

1. 打开路由器管理面板。 可以通过 fritz.box、您的路由器 IP 地址，或 `192.168.178.1` 进行访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_互联网_」或「_家庭网络_」。
4. 选择「_DNS_」或「_DNS 设置_」。
5. 如果具有提供商的支持，请在「DNS-over-TLS」下，选中「_使用 DNS-over-TLS_」。
6. 选择「_使用自定义 TLS 服务器名称指示 (SNI)_」并输入 AdGuard 私人 DNS 服务器地址：`{Your_Device_ID}.d.adguard-dns.com`。
7. 请保存设置。

## 使用路由器管理面板

如果您的 FritzBox 路由器不支持 DNS-over-TLS 配置，请使用以下指南：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_互联网_」或「_家庭网络_」。
4. 选择「_DNS_」或「_DNS 设置_」。
5. 选择「_手动 DNS_」，点击「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
6. 请保存设置。
7. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
