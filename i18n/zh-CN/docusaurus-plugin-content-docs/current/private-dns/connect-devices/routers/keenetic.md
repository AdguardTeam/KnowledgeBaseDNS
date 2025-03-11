---
title: Keenetic
sidebar_position: 5
---

Keenetic 路由器以稳定性和灵活的配置而闻名，并且 Keenetic 路由器易于设置，让用户轻松在设备上安装加密的私有 AdGuard DNS。

## 配置 DNS-over-HTTPS

1. 打开路由器管理面板。 转到 my.keenetic.net、用路由器 IP 地址或 `192.168.1.1` 进行访问。
2. 点击屏幕底部的菜单按钮并选择「管理」。
3. 打开「_系统设置_」。
4. 点击「_组件选项_」→「_系统组件选项_」。
5. 在「_实用程序和服务_」中，选择并安装 DNS-over-HTTPS 代理。
6. 前往「_菜单_」→「_网络规则_」→「_互联网安全_」。
7. 前往 DNS-over-HTTPS 服务器并点击「_添加 DNS-over-HTTPS 服务器_」。
8. Enter the URL of the Private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. 点击「_保存_」。

## 配置 DNS-over-TLS

1. 打开路由器管理面板。 转到 my.keenetic.net、用路由器 IP 地址或 `192.168.1.1` 进行访问。
2. 点击屏幕底部的菜单按钮并选择「管理」。
3. 打开「_系统设置_」。
4. 点击「_组件选项_」→「_系统组件选项_」。
5. 在「_实用程序和服务_」中，选择并安装 DNS-over-HTTPS 代理。
6. 前往「_菜单_」→「_网络规则_」→「_互联网安全_」。
7. 前往 DNS-over-HTTPS 服务器并点击「_添加 DNS-over-HTTPS 服务器_」。
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. 点击「_保存_」。

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_互联网_」或「_家庭网络_」。
4. 选择「_WAN_」或「_互联网_」。
5. 选择「_DNS_」或「_DNS 设置_」。
6. 选择「_手动 DNS_」。 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
    - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
    - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
