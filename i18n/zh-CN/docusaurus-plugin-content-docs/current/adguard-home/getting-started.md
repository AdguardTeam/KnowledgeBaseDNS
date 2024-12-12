---
title: 入门
sidebar_position: 2
---

## 安装指示说明 {#installation}

### 正式版本

从[最新的稳定版发布页面][releases]下载包含适用于您的操作系统的二进制文件的压缩包。 在[我们的平台页面][platforms]上可以查看支持服务的平台完整列表，以及 Beta 和 Edge（不稳定）版本的链接。

要将 AdGuard Home 安装为服务，请解压压缩包，进入 `AdGuardHome` 目录，然后运行以下命令：

```sh
./AdGuardHome -s install
```

#### 注意

- **Fedora Linux** 及其衍生产品的用户：在 `/usr/local/bin` 目录中安装 AdGuard Home。 如果不这样做，会导致 SELinux 和权限问题。 请参阅 [issue 765] 和 [issue 3281]。

- **macOS 10.15 Catalina** 及更新版本的用户应将 AdGuard Home 工作目录放在 `/Applications` 目录中。

### Docker 和 Snap

我们还为有经验的用户提供[官方 AdGuard Home Docker 镜像][docker]和[官方 Snap 商店软件包][snap]。

### 其他

其他非官方选择包括：

- 由 [@frenck](https://github.com/frenck) 维护的 [Home Assistant 插件][has]。

- 由 [@kongfl888](https://github.com/kongfl888) 维护的 [OpenWrt LUCI 应用程序][luci]。

- [Arch Linux][arch]、[Arch Linux ARM][archarm] 和其他基于 Arch 的操作系统可以通过由 [@graysky2](https://github.com/graysky2) 维护的 [AUR][aur] 中的 [adguardhome 软件包][aghaur] 进行构建。

- 由 [@gramakri](https://github.com/gramakri) 维护的 [Cloudron 应用程序][cloudron]。

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## 首次启动 {#first-time}

首先，检查防火墙设置。 要安装和使用 AdGuard Home，以下端口和协议必须可用：

- 3000/TCP 用于初始安装；
- 80/TCP 用于网页界面；
- 53/UDP 用于 DNS 服务器。

您可能需要为除无加密的 DNS 以外的协议打开其他端口，例如 DNS-over-HTTPS。

DNS 服务器绑定到端口 53，这在大多数情况下需要超级用户权限，[请参见下文](#running-without-superuser)。 因此，在 Unix 系统上，需要在终端中使用 `sudo` 或 `doas` 运行它：

```sh
sudo ./AdGuardHome
```

在 Windows 上，使用管理员权限运行 `cmd.exe` 或 PowerShell，然后从那里运行 `AdGuardHome.exe`。

首次运行 AdGuard Home 时，它​​将开始监听 `0.0.0.0:3000` 并提示您在浏览器中打开它：

```none
AdGuard Home is available at the following addresses:
go to http://127.0.0.1:3000
go to http://[::1]:3000
[…]
```

用户将在此处完成初始配置向导。

![AdGuard Home 网络界面选择](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![AdGuard Home 用户创建的屏幕](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

请参阅[我们关于安全运行 AdGuard Home](running-securely.md) 的文章，了解如何选择最适合您的初始配置。

## 作为服务运行 {#service}

下一步是将 AdGuard Home 注册为系统服务（又名守护进程）。 要将 AdGuard Home 安装为服务，请运行以下命令：

```sh
sudo ./AdGuardHome -s install
```

在 Windows 上，以管理员权限运行 `cmd.exe` 和 `AdGuardHome.exe -s install` 以注册 Windows 服务。

以下是控制服务可能需要的其他命令：

- `AdGuardHome -s uninstall`：卸载 AdGuard Home 服务。
- `AdGuardHome -s start`：启动服务。
- `AdGuardHome -s stop`：停止服务。
- `AdGuardHome -s restart`：重新启动服务。
- `AdGuardHome -s status`：显示当前服务状态。

### 日志记录

默认情况下，当用户在终端中运行 AdGuard Home 时，日志会写入 `stderr`。 如果将其作为服务运行，则日志输出取决于平台：

- 在 macOS 上，日志将写入 `/var/log/AdGuardHome.*.log` 文件。

- 在其他 Unix 上，日志被写入 `syslog` 或 `journald`。

- 在 Windows 上，日志将写入 Windows 事件日志。

您可以在 AdGuard Home [配置文件][conf]中更改此行为。

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## 更新 {#update}

![更新通知的示例](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

当新版本发布时，AdGuard Home 的用户界面会显示一条通知消息和「立即更新」按钮。 点击此按钮，AdGuard Home 将自动更新到最新版本。 当前的 AdGuard Home 可执行文件与当前配置文件一起保存在 `backup` 目录中，因此您可以在必要时还原更改。

### 手动更新 {#manual-update}

如果未显示该按钮或自动更新失败，可以手动更新服务。 我们有一个[关于手动更新的详细指南][mupd]，简而言之：

1. 下载新的 AdGuard Home 软件包。

2. 将其解压到临时目录。

3. 将旧的 AdGuard Home 可执行文件替换为新文件。

4. 重新启动 AdGuard Home。

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Docker, Home Assistant, and Snapcraft 更新

Docker 、Hass.io/Home Assistant 和 Snapcraft 安装的自动更新已禁用。 请改为更新镜像。

### 命令行更新

要更新 AdGuard Home 程序包而无需使用 Web API，请运行：

```sh
./AdGuardHome --update
```

## 配置设备 {#configure-devices}

### 路由器

此设置将自动覆盖连接到您家用路由器的所有设备，无需手动配置每台设备。

1. 打开路由器的首选项。 通常，可以通过 URL，例如 <http://192.168.0.1/> 或 <http://192.168.1.1/>，从浏览器访问它。 系统可能会提示您输入密码。 如果您忘记密码，通常可以按下路由器本身上的按钮来重置密码。请注意，如果决定重置密码，您可能会丢失整个路由器配置。 如果您的路由器需要应用程序来设置它，请在手机或 PC 上安装该应用程序并使用它来访问路由器的设置。

2. 找到 DHCP/DNS 设置。 在允许两组或三组数字的字段旁边查找 DNS 字母，每组数字分为四组，每组一到三位数字。

3. 输入您的 AdGuard Home 服务器地址。

4. 在某些路由器类型上，无法设置自定义 DNS 服务器。 在这种情况下，将 AdGuard Home 设置为 DHCP 服务器可能会有所帮助。 否则，您应该查阅路由器手册，了解如何在特定路由器型号上自定义 DNS 服务器。

### Windows

1. 从开始菜单或 Windows 搜索中打开「控制面板」。

2. 转到「网络和 Internet」，然后转到「网络和共享中心」。

3. 在屏幕左侧，找到「更改适配器设置」按钮并单击它。

4. 选择您的活动连接，右键单击它，然后选择「属性」。

5. 在列表中找到「Internet 协议版本 4 (TCP/IPv4)」（或者，对于 IPv6，则为「Internet 协议版本 6 (TCP/IPv6)」），选择它，然后再次单击「属性」。

6. 选择「使用以下 DNS 服务器地址」，然后输入您的 AdGuard Home 服务器地址。

### macOS

1. 单击 Apple 图标并转到「系统偏好设置」。

2. 单击「网络」。

3. 选择您的列表中的第一个连接，然后单击「高级」。

4. 选择 DNS 选项卡，然后输入您的 AdGuard Home 服务器地址。

### Android

:::note

Android 设备的说明可能因操作系统版本和制造商而异。

:::

1. 在 Android 菜单主屏幕上，点击「设置」。

2. 点击菜单上的「Wi-Fi」。 将显示所有可用网络的屏幕 (无法为移动连接设置自定义 DNS)。

3. 长按您所连接的网络，然后点击「更改网络」。

4. 在某些设备上，可能需要选中「高级」复选框才能查看更多设置。 要调整您的 Android DNS 设置，需要将 IP 设置从「DHCP」更改为「静态」。

5. 将设置的 DNS 1 和 DNS 2 值更改为您的 AdGuard Home 服务器地址。

### iOS

1. 在主屏幕上，点击「设置」。

2. 从左侧菜单中选择「Wi-Fi」（无法为移动网络配置 DNS）。

3. 点击当前活动网络的名称。

4. 在「DNS」字段中，输入您的 AdGuard Home 服务器地址。

## 无需超级用户权限即可运行 {#running-without-superuser}

用户可以在没有超级用户权限的情况下运行 AdGuard Home，但您必须授予二进制文件功能（在 Linux 上）或指示其使用其他端口 (所有平台)。

### 授予必要的功能 (仅限 Linux)

使用此方法需要 `setcap` 工具。 用户可能需要使用 Linux 发行版的软件包管理器安装它。

要允许在 Linux 上运行的 AdGuard Home 在没有超级用户权限的情况下监听端口 53 并将其 DNS 服务器绑定到特定接口，请运行：

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

然后以非特权用户身份运行 `./AdGuardHome`。

### 更改 DNS 监听端口

要将 AdGuard Home 配置为监听不需要超级用户权限的端口，请停止 AdGuard Home，在编辑器中打开 `AdGuardHome.yaml`，然后找到以下行：

```yaml
dns:
    # …
    port: 53
```

您可以将端口更改为 1024 以上的任何端口，以避免需要超级用户权限。

## 限制 {#limitations}

某些文件系统不支持统计系统所需的 `mmap(2)` 系统调用。 请参阅 [issue 1188]。

用户可以通过以下方式解决此问题：

- 向 `AdGuardHome` 二进制文件提供 `--work-dir DIRECTORY` 参数。 此选项将告诉 AGH 使用另一个目录来存放其所有文件，而不是默认的 `./data` 目录。

- 通过创建指向另一个支持 `mmap(2)` 的文件系统（例如 tmpfs）的符号链接：

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
