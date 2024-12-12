---
title: 关联 IP 地址
sidebar_position: 3
---

## 什么是关联 IP 地址，为什么有用

并非所有设备都支持加密的 DNS 协议。 在这种情况下，用户应考虑设置无加密的 DNS。 例如，用户可以使用 **IP 地址**。 关联 IP 地址的唯一要求是，它必须是住宅 IP。

:::note

**住宅 IP 地址**是指分配给连接到住宅互联网服务提供商（ISP）的设备地址。 通常它与地理位置相关联，并分配给个人住宅或公寓。 人们使用住宅 IP 地址进行日常在线活动，如浏览网络、发送电子邮箱、使用社交媒体或进行串流。

:::

有时候，住宅 IP 地址可能已被设置，如果用户尝试连接到它，AdGuard DNS 将阻止连接。
![关联 IPv4 地址 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
如果发生这种情况，请联系 [support@adguard-dns.io](mailto:support@adguard-dns.io) 支持，他们将帮助您完成正确的配置设置。

## 如何设置关联 IP

如何通过**关联 IP 地址**连接到设备的说明如下：

1. 打开仪表盘。
2. 添加新设备或打开已连接设备的设置。
3. 转到「_使用 DNS 服务器地址_」。
4. 打开「_无加密的 DNS 服务器地址_」连接关联的 IP。
   ![关联 IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## 动态 DNS：为什么有用

每次设备连接到网络时，它都会获得一个新的动态 IP 地址。 当设备断开连接时，DHCP 协议服务器可以将释放的 IP 地址分配给网络上的另一台设备。 这意味着动态 IP 地址经常变化，而用户无法预测变化地址的时间。 因此，每当设备重新启动或网络变化时，您需要更新设置。

要自动保持关联 IP 地址更新，用户可以使用 DNS。 AdGuard DNS 将定期检查 DDNS 域名的 IP 地址，并将其连接到用户的服务器。

:::note

动态 DNS（DDNS）是一种服务，它会在您的 IP 地址变化时自动更新 DNS 记录。 DDNS 将网络 IP 地址转换为易于阅读的域名，以方便使用。 将名称与 IP 地址连接的信息存储在 DNS 服务器上的表中。 IP 地址发生变化时，DDNS 就会更新这些记录。

:::

这样，用户就不必在每次更改地址时手动更新关联 IP 地址。

## 动态 DNS：如何设置

1. 首先，需要检查您的路由器设置是否支持 DDNS：
   - 转到「_路由器设置_」→「_网络_」。
   - 找到 DDNS 或「_动态 DNS_」部分。
   - 请验证设置确实受支持。 _以下是一个示例。 这可能会因用户的路由器而异_
     ![DDNS 支持 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. 使用像 [DynDNS](https://dyn.com/remote-access/)、[NO-IP](https://www.noip.com/) 或您喜欢的任何其他 DNS 提供商注册您的域名。
3. 在路由器设置中输入域名并同步配置。
4. 前往关联 IP 设置以连接地址，然后导航到「_高级设置_」并点击「_配置 DDNS_」。
5. 输入您之前注册的域名，然后点击「_配置 DDNS_」。
   ![配置 DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

全部完成，DDNS 设置成功！

## 通过脚本自动更新关联 IP 地址

### 在 Windows 上

最简单的方式是使用任务调度程序（Task Scheduler）：

1. 创建任务：
   - 打开任务计划程序。
   - 创建新任务。
   - 将触发器设置为每 5 分钟运行。
   - 选择「_运行程序_」作为操作。
2. 选择一个程序：
   - 在「_程序或脚本_」字段中，输入 `powershell`
   - 在「_添加参数_」字段中，输入：
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. 保存任务。

### 在 macOS 和 Linux 上

在 macOS 和 Linux 上，最简单的方法是使用 `cron`：

1. 打开 crontab:
   - 在终端中运行 `crontab -e`。
2. 添加任务：
   - 插入以下行：
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - 此任务将每 5 分钟运行一次
3. 保存 crontab。

:::note 重要信息

- 确保您在 macOS 和 Linux 上已安装 `curl`。
- 记得从设置中复制地址并替换 `ServerID` 和 `UniqueKey`。
- 如果需要更复杂的逻辑或查询结果的处理，请考虑使用脚本（例如 Bash、Python）结合任务调度程序或 cron。

:::
