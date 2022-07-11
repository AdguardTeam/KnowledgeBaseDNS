---
title: 如何刷新DNS缓存
sidebar_position: 1
---

# 如何刷新DNS缓存

## DNS缓存是什么？

DNS 缓存将访问站点的 IP 地址存储在本地计算机上，以便在下次加载时可以加载地更快。 系统不进行长时间的 DNS 查找，而是使用临时 DNS 缓存中的 DNS 记录来回答查询。

DNS 缓存包含所谓的[资源记录](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records)，他们是：

* **资源数据(或 rdata)**
* **记录类型**
* **记录名字**
* **TTL**
* **Class**
* **资源数据长度**

## 当您可能需要清除缓存时

**你经常会得到一个404的错误。**例如，该网站被转移到另一台服务器，其 IP 地址发生了变化。 要使浏览器从新的 IP 地址打开网站，您需要从 DNS 缓存中删除已经缓存的 IP。

**你想改善你的隐私。**

**你想保护自己免受黑客攻击和电脑病毒的影响。**当 DNS 缓存损坏时，浏览器可能会将您重定向到攻击者插入您计算机的 DNS 记录中的恶意网站的 IP 地址。

## 如何在不同的操作系统上刷新 DNS 缓存

### macOS

要清除 macOS 上的 DNS 缓存，请打开终端（您可以使用 Spotlight 搜索找到它 - 然后，请按 Command+Space 并输入 *Terminal*）并输入以下命令：

`sudo killall -HUP mDNSResponder`

在 macOS Big Sur 11.2.0 和 macOS Monterey 12.0.0 上，您还可以使用以下命令：

`sudo dscacheutil -flushcache`

之后，输入您的管理员密码以完成该过程。

### Windows

要刷新 Windows 设备上的 DNS 缓存，请执行以下操作：

以管理员身份加载命令提示符。 你可以通过输入 *command prompt* 或 *cmd*在开始菜单中找到它。 然后输入 `ipconfig/flushdns` 并按回车键。

你会看到这样一行： *成功刷新了DNS解析器缓存*。 完成!

### Linux

Linux 没有操作系统级别的 DNS 缓存，除非安装并运行了 Systemd Resolved、DNSMasq、BIND 或 Nscd 等缓存服务。 清除 DNS 缓存的过程取决于 Linux 发行版和使用的缓存服务。

对于每个发行版，您需要启动一个终端窗口。 按键盘上的 Ctrl+Alt+T 并使用相应的命令清除 Linux 系统正在运行的服务的 DNS 缓存。

要找出您正在使用的 DNS 解析器，请使用命令 `sudo lsof -i :53 -S`。

#### Systemd Resolved

要清除 **Systemd Resolved** DNS缓存，请输入：

`sudo systemd-resolve --flush-caches`

成功后，该命令不会返回任何消息。

#### DNSMasq

要清除 **DNSMasq** 缓存，您需要重新启动它：

`sudo service dnsmasq restart`

#### Nscd

要清除 **Nscd** 缓存，您还需要重新启动服务：

`sudo service nscd restart`

#### BIND

要刷新 **BIND** DNS 缓存，请运行以下命令：

`rndc flush`

然后你需要重新加载 BIND：

`rndc reload`

您将收到服务器已成功重新加载的消息。

### Android（安卓）

清除 Android 设备上的 DNS 缓存的最简单方法是打开和关闭飞行模式。 您可以在“快速设置”窗格中 启用/禁用 飞行模式。

硬重启还可以帮助刷新设备的 DNS 缓存。 为了做到这一点，按住电源按钮至少20秒。 它（通常）会强制您的设备手动重启，并且 DNS 缓存将被清除。

另一种选择是在“设置”应用中重置设备的网络设置。 打开 *设置 > 系统 > 高级 > 重置选项 > 重置网络设置* 并点击 *重置设置* 进行确认。

> 注意：这样做，您将失去与 Wi-Fi 路由器和其他特定网络设置（包括 DNS 服务器自定义）的连接。 您将需要手动重置它们。

### iOS

有多种方法可以清除 iPad 或 iPhone 上的 DNS 缓存。

最简单的方法是激活飞行模式（例如，在控制中心或设置应用程序中）并再次将其停用。 DNS 缓存将被刷新。

另一种选择是在“设置”应用中重置设备的网络设置。 打开 *常规*，向下滚动，找到 *重置* 然后点击 *重置网络设置*。

> 注意：这样做，您将失去与 Wi-Fi 路由器和其他特定网络设置（包括 DNS 服务器自定义）的连接。 您将需要手动重置它们。