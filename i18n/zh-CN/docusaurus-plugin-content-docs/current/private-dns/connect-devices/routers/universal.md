---
title: 通用指示说明
sidebar_position: 2
---

以下是一些有关在路由器上设置私人 AdGuard DNS 的一般指示说明。 You can refer to this guide if you can’t find your specific router in the main list. 请注意，这里提供的配置详情只是近似值，可能与具体型号的设置有所不同。

## 使用路由器管理面板

1. 打开路由器的首选项。 通常可以通过浏览器访问它们。 根据路由器型号，尝试输入以下地址之一：
   - Linksys 和 Asus 路由器通常使用的地址：[http://192.168.1.1](http://192.168.1.1/)
   - Netgear 路由器通常使用的地址：[http://192.168.0.1](http://192.168.0.1/) 或 [http://192.168.1.1](http://192.168.1.1/)，D-Link 路由器通常使用的地址：[http://192.168.0.1](http://192.168.0.1/)
   - Ubiquiti 路由器通常使用的地址：[http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Enter the router’s password.

   :::note 重要信息

   如果密码未知，用户一般可以通过按下路由器上的一个按钮来重置它；该操作将路由器恢复到出厂设置。 某些型号拥有专门的管理应用程序，这些应用程序应已经安装在计算机上。

   :::

3. Find where DNS settings are located in the router’s admin console. Change the listed DNS addresses to the following addresses:
   - IPv4 地址：`94.140.14.49` 和 `94.140.14.59`
   - IPv6 地址：`2a10:50c0:0:0:0:0:ded:ff` 和 `2a10:50c0:0:0:0:0:dad:ff`

4. 请保存设置。

5. 关联 IP 地址（如果您有团队版订阅，也可以关联您的专用 IP 地址）。

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
