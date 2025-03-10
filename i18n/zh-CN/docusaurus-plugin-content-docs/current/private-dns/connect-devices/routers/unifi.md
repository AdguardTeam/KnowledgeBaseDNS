---
title: UniFi
sidebar_position: 10
---

UiFi 路由器（通常称为 Ubiquiti 的 UniFi）具有许多优势，特别适合家庭、商业和企业环境。 不过，它不支持加密 DNS，但适合通过关联 IP 设置 AdGuard DNS。

## 使用路由器管理面板

如果您的 Keenetic 路由器不支持 DNS-over-HTTPS 或 DNS-over-TLS 配置，请使用以下指示说明：

1. 登录 Ubiquiti UniFi 控制器。
2. 转至「_设置_」→「_网络_」。
3. 单击「_编辑网络_」→「_WAN_」。
4. 进入「_通用设置_」→「_DNS 服务器_」并输入以下 DNS 服务器地址。
    - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
    - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
5. 点击「_保存_」。
6. 返回「_网络_」。
7. 选择「_编辑网络_」→「_LAN_」。
8. 找到「DHCP 名称服务器」并选择「_手动_」。
9. 在「_DNS 服务器 1_」字段中输入您的网关地址。 或者，用户还可以在「_DNS 服务器 1_」和「_DNS 服务器 2_」字段中输入 AdGuard DNS 服务器地址：
    - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
    - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
10. 请保存设置。
11. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [专用 IP](private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](private-dns/connect-devices/other-options/linked-ip.md)
