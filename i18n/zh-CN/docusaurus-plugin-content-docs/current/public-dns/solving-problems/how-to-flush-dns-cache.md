---
title: 如何刷新 DNS 缓存
sidebar_position: 1
---

:::info

在这篇文章中，我们解释刷新 DNS 缓存以解决公共 DNS 问题的方式。 用户可以使用 AdGuard 广告拦截程序来设置 DNS 服务器，包括加密的服务器。

快速连接：[下载 AdGuard 广告拦截程序](https://agrd.io/download-kb-adblock)

:::

## DNS 缓存是什么？

DNS 缓存将访问站点的 IP 地址存储在本地计算机上，以便在下次加载时可以加载地更快。 系统不进行长时间的 DNS 查找，而是使用临时 DNS 缓存中的 DNS 记录来回答查询。

DNS 缓存包含所谓的[资源记录（RR）](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records)，包括：

- **资源数据（或 rdata）**；
- **记录类型**；
- **记录名字**；
- **TTL（生存时间）**；
- **类别**；
- **资源数据长度**。

## 何时可能需要清除缓存

**您已将 DNS 提供商更改为 AdGuard DNS。**如果用户更改 DNS，由于缓存的原因，可能需要一些时间才能看到结果。

**您经常收到 404 错误**。例如，网站被转移到新服务器，其 IP 地址已经改变。 要使浏览器从新的 IP 地址打开网站，需要从 DNS 缓存中删除已经缓存的 IP。

**您想改善个人隐私。**

## 如何在不同的操作系统上刷新 DNS 缓存

### iOS

有多种方法可以清理 iPad 或 iPhone 上的 DNS 缓存。

最简单的方法是打开再关闭飞行模式（可在控制中心或「设置」中操作）。 DNS 缓存会被刷新。

另一种选择是在「设置」中重置设备的网络设置。 打开「*常规*」，向下滚动，找到「*重置*」然后点击「*重置网络设置*」。

:::note

这样操作之后，用户将断开与 Wi-Fi 路由器的连接，并失去其他特定网络的设置（包括 DNS 服务器自定义设置）。 您将需要手动重置它们。

:::

### Android

在 Android 设备上，有多种方式可以清理 DNS 缓存。 具体步骤会随着设备和 Android 版本而变化。

#### 通过 Chrome 清理 DNS 缓存

Google Chrome 通常是 Android 设备的默认浏览器，拥有自己的 DNS 缓存。 要刷新 Chrome 的缓存，请按照以下步骤操作：

1. 在 Android 设备上启动 Chrome。
1. 在地址栏中输入 `chrome://net-internals/#DNS`
1. 在 DNS 查找页面上，从左侧菜单中选择 DNS。
1. 在右侧面板中，点击「*清除 Host 缓存*」按钮来清除设备上的 DNS 缓存。

#### 将 Wi-Fi 网络修改为静态网络

要把 Wi-Fi 网络设置更改为静态网络以清除 Android 设备的 DNS 缓存，请按照以下步骤操作：

1. 前往*「设置」→「Wi-Fi」*并选择您所连接的网络。
1. 查找 IP 设置并选择「*静态*」。
1. 填写必填字段。 您可以从网络管理员或路由器的配置页面获取必要的信息。
1. 输入所需信息后，重新连接到您的 Wi-Fi 网络。 此操作将强制设备更新其 IP 和 DNS 设置并清除 DNS 缓存。

#### 高级网络设置

另一种选择是在「设置」中重置设备的网络设置。 打开*「设置」→「系统」→「高级」→「重置选项」→「重置网络设置」*，然后点击「*重置设置*」进行确认。

:::note

这样操作之后，用户将断开与 Wi-Fi 路由器的连接，并失去其他特定网络的设置（包括 DNS 服务器自定义设置）。 您将需要手动重置它们。

:::

### macOS

要清除 macOS 上的 DNS 缓存，请打开终端（您可以使用 Spotlight 搜索，按 Command+Space 输入 *Terminal*）并输入以下命令：

`sudo killall -HUP mDNSResponder`

在 macOS Big Sur 11.2.0 和 macOS Monterey 12.0.0 上，您还可以使用以下命令：

`sudo dscacheutil -flushcache`

然后，输入管理员密码完成操作。

### Windows

要刷新 Windows 设备上的 DNS 缓存，请执行以下操作：

以管理员身份打开 cmd。 您可以通过在「开始」菜单中键入「*命令提示符*」或「*cmd*」找到它。 然后输入 `ipconfig/flushdns` 并按回车键。

用户将看到提示：*已成功刷新 DNS 解析器缓存*。 完成！

### Linux

Linux 没有操作系统级别的 DNS 缓存，除非您安装并运行了 systemd-resolved、DNSMasq、BIND 或 Nscd 这样的缓存服务。 清除 DNS 缓存的过程取决于 Linux 的发行版本和使用的缓存服务。

每个发行版本都需要先启动终端窗口。 按键盘上的 Ctrl+Alt+T，然后使用相应的命令清除 Linux 系统运行的服务的 DNS 缓存。

要了解您正在使用哪个 DNS 解析器，请使用命令 `sudo lsof -i :53 -S`。

#### systemd-resolved

要清除 **systemd-resolved** DNS 缓存，请输入：

`sudo systemd-resolve --flush-caches`

成功后，该命令不会返回任何消息。

#### DNSMasq

要清除 **DNSMasq** 缓存，您需要输入命令将其重新启动：

`sudo service dnsmasq restart`

#### NSCD

要清除 **NSCD** 缓存，您也需要输入命令将其重新启动：

`sudo service nscd restart`

#### BIND

要刷新 **BIND** DNS 缓存，请运行以下命令：

`rndc flush`

然后用户需要重新加载 BIND：

`rndc reload`

您将收到服务器已成功重新加载的消息。

## 如何在 Chrome 中刷新 DNS 缓存

如果您不想每次使用私有 AdGuard DNS 或 AdGuard 的主页的时候都重启浏览器，此操作可能会有帮助。 设置 1-2 只需更改一次。

1. 在 Chrome 设置中禁用**安全 DNS**

    ```bash
    chrome://settings/security
    ```

1. 禁用**异步 DNS 解析器**

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. 按此页的两个按钮

    ```bash
    chrome://net-internals/#sockets
    ```

1. 点击**清除主机缓存**

    ```bash
    chrome://net-internals/#dns
    ```
