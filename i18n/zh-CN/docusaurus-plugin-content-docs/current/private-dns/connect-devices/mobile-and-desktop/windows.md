---
title: Windows
sidebar_position: 5
---

To connect an iOS device to AdGuard DNS, first add it to _Dashboard_:

1. 进入「_仪表盘_」并点击「_连接新设备_」。
2. In the drop-down menu _Device type_, select Windows.
3. Name the device.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. 打开应用程序。
3. Click _Settings_ at the top of the app's home screen.
   ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Select the _DNS Protection_ tab from the menu on the left.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Click your currently selected DNS server.
   ![DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Scroll down and click _Add a custom DNS server_.
   ![Add a custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. In the DNS upstreams field, paste one of the following addresses. If you’re not sure which one to prefer, choose DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Click _Save and select_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. 您所添加的 DNS 服务器将显示在「_自定义 DNS 服务器_」列表的底部。
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## 使用 AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install AdGuard VPN.
2. Open the app and click _Settings_.
3. Select _App settings_.
   ![App settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Scroll down and select _DNS servers_.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Click _Add custom DNS server_.
   ![Add custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. In the _Server address_ field, paste one of the following addresses. If you’re not sure which one to prefer, select DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Click _Save and select_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

完成！ 您的设备已成功连接到 AdGuard DNS。

## Use AdGuard DNS Client

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## 配置无加密的 DNS

如果您选择不使用额外的软件进行 DNS 配置，可以选择无加密 DNS。 您有两种选择：使用关联的 IP 或专用 IP。

- [专用 IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [关联 IP](/private-dns/connect-devices/other-options/linked-ip.md)
