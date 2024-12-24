---
title: Linux
sidebar_position: 6
---

要将 Linux 设备连接至 AdGuard DNS，首先将其添加到「_仪表盘_」：

1. 进入「_仪表盘_」并点击「_连接新设备_」。
2. 在下拉菜单「_设备类型_」中，选择 Linux。
3. 命名设备。
   ![连接设备 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## 使用 AdGuard DNS 客户端

AdGuard DNS 客户端是一个跨平台的控制台工具，让用户使用加密的 DNS 协议访问 AdGuard DNS。

用户可以在[相关文章](/dns-client/overview/)中了解更多详情。

## 使用 AdGuard VPN CLI

用户可以使用 AdGuard VPN CLI（命令行界面）设置私人 AdGuard DNS。 要开始使用 AdGuard VPN CLI，需要使用终端。

1. 按照[指示说明](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/)安装 AdGuard VPN CLI。
2. 转到[设置](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/)。
3. 要设置特定的 DNS 服务器，请使用命令：`adguardvpn-cli config set-dns <server_address>`，其中 `<server_address>` 为您的专用服务器地址。
4. 输入 `adguardvpn-cli config set-system-dns on` 激活 DNS 设置。

## 在 Ubuntu 上手动配置（需要已链接 IP 地址或专用 IP 地址）

1. 点击「_系统_」→「_首选项_」→「_网络连接_」。
2. 选择「_无线_」标签，然后选择您连接的网络。
3. 点击「_编辑_」→「_IPv4_」。
4. 将列出的 DNS 地址更改为以下地址：
   - `94.140.14.49`
   - `94.140.14.59`
5. 关闭「_自动模式_」。
6. 点击「_应用_」。
7. 前往「_IPv6_」。
8. 将列出的 DNS 地址更改为以下地址：
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. 关闭「_自动模式_」。
10. 点击「_应用_」。
11. 连接您的 IP 地址（如果用户有团队订阅，可以使用专用 IP 地址）：
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## 在 Debian 上手动配置（需要已链接 IP 地址或专用 IP 地址）

1. 打开终端。
2. 在命令行输入：`su`。
3. 输入您的 `admin` 密码。
4. 在命令行输入：`nano /etc/resolv.conf`。
5. 将列出的 DNS 地址更改为以下地址：
   - IPv4：`94.140.14.49 和 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff 及 2a10:50c0:0:0:0:0:dad:ff`
6. 按「_Ctrl + O_」以保存文件。
7. 按下回车键。
8. 按「_Ctrl + X_」以保存文件。
9. 在命令行输入：`/etc/init.d/networking restart`。
10. 按下回车键。
11. 关闭终端。
12. 连接您的 IP 地址（如果用户有团队订阅，可以使用专用 IP 地址）：
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## 使用 dnsmasq

1. 使用以下命令安装 dnsmasq：

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. 在 dnsmasq.conf 中使用以下命令：

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. 重启 dnsmasq 服务：

   `sudo service dnsmasq restart`

完成！ 您的设备已成功连接到 AdGuard DNS。

:::note 重要信息

如果您看到未连接到 AdGuard DNS 的通知，很可能 dnsmasq 运行的端口被其他服务占用了。 使用[指示说明](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse)解决问题。

:::

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command in the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

完成！ DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## 使用无加密的 DNS

如果您选择不使用额外的软件进行 DNS 配置，可以选择无加密 DNS。 您有两种选择：使用关联的 IP 或专用 IP：

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
