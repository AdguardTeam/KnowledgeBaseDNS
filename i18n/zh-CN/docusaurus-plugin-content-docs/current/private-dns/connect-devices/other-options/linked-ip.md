---
title: 关联 IP 地址
sidebar_position: 3
---

## 什么是关联 IP 地址，为什么有用

并非所有设备都支持加密的 DNS 协议。 在这种情况下，用户应考虑设置无加密的 DNS。

您可以使用**关联 IP 地址**：在此设置中，服务将视来自该 IP 地址和特定设备的所有标准 DNS 查询。 关联 IP 地址的唯一要求是，它必须是住宅 IP。

:::note

**住宅 IP 地址**是分配给连接到住宅互联网服务提供商（ISP）的设备地址。 通常它与地理位置相关联，并分配给个人住宅或公寓。 人们使用住宅 IP 地址进行日常在线活动，如浏览网络、发送电子邮箱、使用社交媒体或进行串流。

:::

有时候，住宅 IP 地址可能已被使用，如果用户尝试连接到它，AdGuard DNS 将阻止连接。
![关联 IPv4 地址 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
如果发生这种情况，请联系 [support@adguard-dns.io](mailto:support@adguard-dns.io) 支持，他们将帮助您完成正确的配置设置。

## 如何设置关联 IP

如何通过**关联 IP 地址**连接到设备的说明如下：

1. 打开仪表盘。
2. 添加一个新设备或打开已连接设备的设置。
3. 转到「_使用 DNS 服务器地址_」。
4. 打开「_无加密的 DNS 服务器地址_」连接关联的 IP。
   ![关联 IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## 动态 DNS：为什么有用

每次设备连接到网络时，它都会获得一个新的动态 IP 地址。 当设备断开连接时，DHCP 协议服务器会将 IP 地址重新分配给其他设备。 This means dynamic IP addresses can change frequently and unpredictably. Consequently, you'll need to update settings whenever the device is rebooted or the network changes.

To automatically keep the linked IP address updated, you can use DNS. AdGuard DNS will regularly check the IP address of your DDNS domain and link it to your server.

:::note

Dynamic DNS (DDNS) is a service that automatically updates DNS records whenever your IP address changes. It converts network IP addresses into easy-to-read domain names for convenience. The information that connects a name to an IP address is stored in a table on the DNS server. DDNS updates these records whenever there are changes to the IP addresses.

:::

This way, you won’t have to manually update the associated IP address each time it changes.

## Dynamic DNS: How to set it up

1. First, you need to check if DDNS is supported by your router settings:
   - Go to _Router settings_ → _Network_
   - Locate the DDNS or the _Dynamic DNS_ section
   - Navigate to it and verify that the settings are indeed supported. _This is just an example of what it may look like. It may vary depending on your router_
     ![DDNS supported \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Register your domain with a popular service like [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/), or any other DDNS provider you prefer.
3. Enter the domain in your router settings and sync the configurations.
4. Go to the Linked IP settings to connect the address, then navigate to _Advanced Settings_ and click _Configure DDNS_.
5. Input the domain you registered earlier and click _Configure DDNS_.
   ![Configure DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

All done, you've successfully set up DDNS!

## Automation of linked IP update via script

### On Windows

The easiest way is to use the Task Scheduler:

1. Create a task:
   - Open the Task Scheduler.
   - Create a new task.
   - Set the trigger to run every 5 minutes.
   - Select _Run Program_ as the action.
2. Select a program:
   - In the _Program or Script_ field, type \`powershell'
   - In the _Add Arguments_ field, type:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Save the task.

### On macOS and Linux

On macOS and Linux, the easiest way is to use `cron`:

1. Open crontab:
   - In the terminal, run `crontab -e`.
2. Add a task:
   - Insert the following line:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - This job will run every 5 minutes
3. Save crontab.

:::note 重要信息

- Make sure you have `curl` installed on macOS and Linux.
- Remember to copy the address from the settings and replace the `ServerID` and `UniqueKey`.
- If more complex logic or processing of query results is required, consider using scripts (e.g. Bash, Python) in conjunction with a task scheduler or cron.

:::
