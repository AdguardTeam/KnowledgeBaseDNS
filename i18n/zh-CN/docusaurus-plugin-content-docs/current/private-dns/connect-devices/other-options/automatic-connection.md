---
title: 自动连接
sidebar_position: 5
---

## 为什么有用

并非所有人都能通过控制面板添加设备。 例如，您是同时设置多个公司设备的系统管理员，将希望尽可能减少手动工作量。

用户可以创建一个用于连接的链接并在设备设置中使用。 您的设备将被检测并自动连接到服务器。

## 如何配置自动连接

1. 打开「_仪表盘_」并选择所需的服务器。
2. Go to _Advanced_.
3. 启用自动连接设备的选项。
   ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

现在，可以通过创建包含设备名称、设备类型和当前服务器 ID 的特殊地址，将设备自动连接到服务器。 让我们来了解这些地址的格式以及创建它们的规则。

### 自动连接地址示例

 - `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` —— 这将自动创建一个使用 `DNS-over-TLS` 协议的 `Android` 设备，名称为 `AdGuard Test Device`

 - `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` —— 这将自动创建一个使用 `DNS-over-HTTPS` 协议的 `Windows` 设备，名称为 `John Doe`

 - `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` —— 这将自动创建一个使用 `DNS-over-Quic` 协议的 `iOS` 设备，名称为 `Mary Sue`

### 命名设备

手动创建设备时，请注意名称长度、字符、空格和连字符的限制。

**名称长度**：最多不超过 50 个字符。 超过此数量限制的字符将被忽略。

**允许的字符**：英文字母、数字和连字符（`-`）。 其他字符将被忽略。

**空格和连字符**：使用连字符代表空格，双连字符（`--`）代表连字符。

**设备类型**：请使用以下缩写：

 - Windows：`win`
 - macOS：`mac`
 - Android：`adr`
 - iOS：`ios`
 - Linux：`lnx`
 - 路由器：`rtr`
 - 智能电视：`stv`
 - 游戏机：`gam`
 - 其他：`otr`

## 链接生成器

我们添加了一个模板，生成特定设备类型和协议的链接。

1. 转到「_服务器_」→「_服务器设置_」→「_设备_」→「_自动连接设备_」然后点击「_链接生成器和指示说明_」。
2. 选择要使用的协议，以及设备名称和设备类型。
3. 点击「_生成链接_」。
   ![生成链接 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. 链接生成成功。请复制服务器地址并在 [AdGuard 应用程序](https://adguard.com/welcome.html)中使用它。
