---
title: Asus
sidebar_position: 3
---

## 配置 DNS-over-TLS

以下是针对 Asus 路由器配置私人 AdGuard DNS 的一般指示说明。

指示说明中的配置信息用特定路由器型号作为例子，因此可能与某些设备的界面有所不同。

如有必要：要在 ASUS 上配置 TLS 加密协议的 DNS（DNS-over-TLS），请在计算机上安装适合您路由器版本的 [ASUS Merlin 固件](https://www.asuswrt-merlin.net/download)。

1. 登录 Asus 路由器管理面板。 可以通过 [http://router.asus.com](http://router.asus.com/)、 [http://192.168.1.1](http://192.168.1.1/)、 [http://192.168.0.1](http://192.168.0.1/)、或 [http://192.168.2.1](http://192.168.2.1/) 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 在「_高级设置_」侧边栏中，转到「WAN」部分。
4. 在「_WAN DNS 设置_」部分中，将「_自动连接到 DNS 服务器_」设置为「_否_」。
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. 将「DNS 隐私协议」更改为「DNS-over-TLS」。
7. 确保「_DNS-over-TLS 描述文件_」设置为「_严格_」。
8. 向下滚动到「_DNS-over-TLS 服务器列表_」部分。 在「_地址_」字段中，输入以下地址之一：
    - `94.140.14.49` 和 `94.140.14.59`
9. 指定「_TLS 端口_」，输入 853。
10. 在「_TLS 主机名_」字段中，输入私人 AdGuard DNS 服务器地址：
     - `{Your_Device_ID}.d.adguard-dns.com`
11. 滚动到页面底部并按「_应用_」。

## 使用路由器管理面板

1. 打开路由器管理面板。 可以通过 `192.168.1.1` 或 `192.168.0.1` 访问。
2. 输入管理员用户名（通常是「admin」）和路由器密码。
3. 打开「_高级设置_」或「_高级_」。
4. 选择「_WAN_」或「_互联网_」。
5. 打开「_DNS 设置_」或「_DNS_」。
6. Choose _Manual Setting_. 选择「_使用指定 DNS 服务器_」或「_手动指定 DNS 服务器_」，然后输入以下 DNS 服务器地址：
    - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
    - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`
7. 请保存设置。
8. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
