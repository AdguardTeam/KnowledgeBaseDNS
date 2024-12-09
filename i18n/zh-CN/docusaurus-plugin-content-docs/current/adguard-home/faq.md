---
title: 常见问题
sidebar_position: 3
---

## 为什么 AdGuard Home 无法拦截广告或阻止其他威胁？ {#doesntblock}

假设用户希望 AdGuard Home 拦截 `somebadsite.com`，但由于某些原因无法拦截它。 让我们试图解决这个问题。

可能的原因是，用户尚未配置设备使用 AdGuard Home 作为默认 DNS 服务器。 要检查 AdGuard Home 是否默认 DNS 服务器请执行以下操作：

1. 在 Windows 上，打开命令提示符 (「开始」→「运行」→ `cmd.exe`)。 在其他系统上，打开终端应用程序。

2. 执行 `nslookup example.org`。 它将打印如下内容：

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. 检查 `Server` IP 地址是否为 AdGuard Home 运行的 IP 地址。 如果不是，请配置设备。 请[参阅](#defaultdns)了解如何操作。

4. 确保您的 `example.org` 请求显示在 AdGuard Home 用户界面的「查询日志」页面上。 如果没有，要将 AdGuard Home 配置为侦听指定的网络接口。 最简单的设置方法是使用默认设置重新安装 AdGuard Home。

如果您的设备使用 AdGuard Home 作为默认 DNS 服务器，但问题仍然存在，那么原因可能是 AdGuard Home 配置错误。 请检查以下设置：

1. 在「设置」→「常规设置」页面上启用「使用过滤器和 Hosts 文件以拦截指定域名」设置。

2. 在同一页面上启用适当的安全机制，例如「家长控制」。

3. 在「过滤器」→「DNS 拦截列表」页面上启用相应的过滤器。

4. 在「过滤器」→「DNS 白名单」页面上没有任何例外规则列表可能允许启用请求。

5. 在「过滤器」→「DNS 重写」页面上没有任何可能干扰的 DNS 重写。

6. 在「过滤器」→「自定义过滤规则」页面上没有任何可能干扰的自定义过滤规则。

## 查询日志中的「按 CNAME 或 IP 拦截」是什么意思？ {#logs}

AdGuard Home 检查 DNS 请求和 DNS 响应，以防止称为 [CNAME 伪装][cname-cloak]的广告拦截规避技术。 如果用户的过滤规则包含域名，例如 `tracker.example`，并且其他域名的 DNS 响应，例如 `blogs.example`，在其 CNAME 记录中包含此域名，则该响应将被拦截，因为它实际上指向被拦截的跟踪服务。

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## 在哪里可以查看日志？ {#logs}

纯文本日志的默认位置 (不要与查询日志混淆) 取决于操作系统和安装模式：

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** 使用 `logread -e AdGuardHome` 命令。

- 带有 **systemd** 的 **Linux** 系统和其他带有 **SysV-style init** 的 **Unix** 系统：`/var/log/AdGuardHome.err`。

- **macOS:** `/var/log/AdGuardHome.stderr.log`。

- 带有 **Snapcraft** 的 **Linux** 系统使用 `snap logs adguard-home` 命令。

- **FreeBSD:** `/var/log/daemon.log`。

- **OpenBSD:** `/var/log/daemon`。

- **Windows:** 使用 [Windows 事件日志][wlog]。

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## 如何配置 AdGuard Home 以写入详细级别的日志？ {#verboselog}

若要解决复杂的问题，有时需要详细级别的日志记录。 启用方法如下：

1. 停止 AdGuard Home：

   ```sh
   ./AdGuardHome -s stop
   ```

2. 配置 AdGuard Home 以写入详细级别的日志：

   1. 在编辑器中打开 `AdGuardHome.yaml`。

   2. 将 `log.file` 设置为日志文件的所需路径，例如 `/tmp/aghlog.txt`。 请注意，该目录必须存在。

   3. 将 `log.verbose` 设置为 `true`。

3. 重新启动 AdGuard Home 并重现问题：

   ```sh
   ./AdGuardHome -s start
   ```

4. 完成调试后，将 `log.verbose` 设置为 `false`。

## 如何显示自定义拦截页面？ {#customblock}

:::note

在执行操作之前，请注意，现代浏览器设置为使用 HTTPS，因此它们会验证 Web 服务器证书的真实性。 这意味着使用其中任何一个证书将导致出现一个警告。

有许多扩展被建议使用，如果得到客户端的合理支持，它们将提供更好的用户体验，包括 [RFC 8914 Extended DNS Error codes][rfc8914] 和 [DNS Access Denied Error Page RFC draft][rfcaccess]。 当浏览器开始支持它们时，我们将应用它们。

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### 先决条件

要使用这些方法中的任何一种来显示自定义拦截页面，用户需要在某个 IP 地址上运行的 HTTP 服务器，并在所有路由上提供相关页面。 类似于 [`pixelserv-tls`][pxsrv]。

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### 「家长控制」和「安全浏览」过滤器的自定义拦截页面

目前无法从用户界面设置这些参数，因此需要手动编辑配置文件：

1. 停止 AdGuard Home：

   ```sh
   ./AdGuardHome -s stop
   ```

2. 在编辑器中打开 `AdGuardHome.yaml`。

3. 将 `dns.parental_block_host` 或 `dns.safebrowsing_block_host` 设置为服务器的 IP 地址 (在本例中为 `192.168.123.45`)：

   ```yaml
   # …
   dns:
     # …

     # NOTE: Change to the actual IP address of your server.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. 重新启动 AdGuard Home：

   ```sh
   ./AdGuardHome -s start
   ```

### 其他过滤器的自定义拦截页面

1. 打开网页界面。

2. 前往「设置」→「DNS 设置」。

3. 在「DNS 服务器配置」部分中，选择「拦截模式」选择器中的「自定义 IP」单选按钮，然后输入服务器的 IPv4 和 IPv6 地址。

4. 点击「保存」。

## 如何更改仪表盘界面的地址？ {#webaddr}

1. 停止 AdGuard Home：

   ```sh
   ./AdGuardHome -s stop
   ```

2. 在编辑器中打开 `AdGuardHome.yaml`。

3. 将 `http.address` 设置为新的网络接口。 例如：

   - `0.0.0.0:0` 监听所有网络接口；
   - `0.0.0.0:8080` 监听所有端口为 `8080` 的网络接口；
   - `127.0.0.1:0` 仅监听本地环回接口。

4. 重新启动 AdGuard Home：

   ```sh
   ./AdGuardHome -s start
   ```

## 如何将 AdGuard Home 设置为默认 DNS 服务器？ {#defaultdns}

请参阅「入门」页面上的[「配置设备」部分](getting-started.md#configure-devices)。

## 是否有任何已知限制？ {#limitations}

以下是 DNS 级拦截器无法拦截的内容的一些示例：

- YouTube、Twitch 广告。

- Facebook、X (以前称为 Twitter)、Instagram 赞助帖子。

基本上，任何与内容共享域的广告都无法被 DNS 级拦截器屏蔽，除非用户愿意拦截其他内容。

### 将来是否有可能处理这个问题？

DNS 永远不足以做到这一点。 用户唯一的选择是使用内容拦截代理，就像我们在[独立 AdGuard 应用程序][adguard]中所做的那样。 我们打算在 AdGuard Home 添加对该功能的支持。 遗憾的是，即便如此，在某些情况下还是不够用，或者需要相当复杂的配置。

[adguard]: https://adguard.com/

## 在 Ubuntu 上尝试安装时收到 `bind: address already in use` 错误 {#bindinuse}

发生这种情况的原因是 `localhost` 上用于 DNS 的端口 53 已被另一个程序占用。 Ubuntu 附带一个名为 `systemd-resolved` 的本地 DNS，它使用地址 `127.0.0.53:53`，因此阻止 AdGuard Home 绑定到 `127.0.0.1:53`。 用户可以通过运行以下命令来查看：

```sh
sudo lsof -i :53
```

输出应类似于：

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

要解决此问题，必须禁用 `systemd-resolved` 守护进程，或选择其他网络接口，并将 AdGuard Home 绑定到其上的可访问 IP 地址，例如网络内路由器的 IP 地址。 不过，如果要在本地主机上监听，则有几种解决方案。

首先，如果用户按下安装屏幕上 `address already in use` 消息旁边的「修复」按钮，AdGuard Home 可以检测到此类配置并禁用 `systemd-resolved`。

其次，如果这不起作用，请按照以下说明操作。 请注意，如果您将 AdGuard Home 与 docker 或 snap 一起使用，必须自行执行此操作。

1. 如果需要，请创建 `/etc/systemd/resolved.conf.d` 目录：

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. 停用 `DNSStubListener` 并更新 DNS 服务器地址。 为此，请创建一个新文件 `/etc/systemd/resolved.conf.d/adguardhome.conf`，内容如下：

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

**必须**将 `127.0.0.1` 指定为 DNS 服务器地址。否则，名称服务器将为 `127.0.0.53`，如果没有 `DNSStubListener`，它将无法工作。

1. 激活另一个 `resolv.conf` 文件：

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. 重新启动 `DNSStubListener`：

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

之后，`systemd-resolved` 不应显示在 `lsof` 的输出中，并且 AdGuard Home 应该能够绑定到 `127.0.0.1:53`。

## 如何为 AdGuard Home 配置反向代理服务器？ {#reverseproxy}

如果您已经在运行 Web 服务器，并且想要从 `http://YOUR_SERVER/aghome/` 等 URL 访问 AdGuar Home 仪表盘用户界面，那么可以为您的 Web 服务器使用此配置：

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

或者，如果您只想使用自动 TLS 为 AdGuard Home 提供服务，请使用类似于以下示例的配置：

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

请不要在 Apache 反向 HTTP 代理中使用子目录。  这是一个已知问题 ([#6604])，Apache 处理相对重定向的方式与其他网络服务器不同。 这会导致 AdGuard Home 网络界面出现问题。

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### 在 AdGuard Home 上禁用 DoH 加密

如果在反向代理服务器上使用 TLS，那么无需在 AdGuard Home 上使用 TLS。 在 `AdGuardHome.yaml` 中设置 `allow_unencrypted_doh: true` 以允许 AdGuard Home 在没有 TLS 加密的情况下响应 DoH 请求。

### 客户端的真实 IP 地址

用户可以将参数 `trust_proxies` 设置为 HTTP 代理的 IP 地址 (可以是多个)，以使 AdGuard Home 考虑包含真实客户端 IP 地址的标头。 请参阅[配置][conf]和[加密][encr]页面了解更多信息。

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## 如何修复 Fedora 上的 `permission denied` 错误？ {#fedora}

1. 将 `AdGuardHome` 二进制文件移动到 `/usr/local/bin`。

2. 以 `root` 身份执行以下命令来更改文件的安全上下文：

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. 添加所需的防火墙规则，使其可通过网络访问。 例如：

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

如果您仍然收到 `code=exited status=203/EXEC` 或来自 `systemctl` 的类似错误，请尝试卸载 AdGuard Home，并使用安装脚本的 `-o` 选项将其**直接**安装到 `/usr/local/bin` 中：

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

请参阅 [issue 765] 和 [issue 3281]。

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## 如何修复不兼容的文件系统错误？ {#incompatfs}

您应该将 AdGuard Home 安装或工作目录移至其他位置。 请参阅「入门」页面上的[「限制」部分](getting-started.md#limitations)。

## `Error: control/version.json` 是什么意思？ {#version-error}

此错误消息表示 AdGuard Home 无法访问 AdGuard 服务器以检查更新和/或下载更新。 这可能意味着服务器被您的 ISP 拦截或暂时关闭。 如果错误在一段时间后仍未自行解决，可以尝试执行[手动更新](#manual-update)或通过使用 `--no-check-update` 命令行选项运行 `AdGuardHome` 可执行文件来禁用自动更新检查。

## 如何手动更新 AdGuard Home？ {#manual-update}

如果该按钮未显示或自动更新失败，可以手动更新服务。 在下面的示例中，我们将使用适用于 AMD64 CPU 的 Linux 和 Windows 的 ADGuard Home 版本。

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. 从[发布页面][releases]下载新的 AdGuard Home 软件包。 如果您要从命令行执行此步骤，请键入：

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   或者，使用 `wget`：

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. 导航到 AdGuard Home 的安装目录。 在大多数 Unix 系统上，默认目录是 `/opt/AdGuardHome`，但在 macOS 上是 `/Applications/AdGuardHome`。

3. 停止 AdGuard Home：

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::注意 OpenBSD

   在 OpenBSD 上，您可能需要使用 `doas` 而不是 `sudo`。

   :::

4. 备份数据。 也就是说，您的配置文件和数据目录 (默认为 `AdGuardHome.yaml` 和 `data/`)。 例如，要将数据备份到名为 `~/my-agh-backup` 的新目录：

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. 将 AdGuard Home 压缩包解压到临时目录。 例如，如果您将压缩包下载到 `~/Downloads` 目录，并希望将其解压缩到 `/tmp/`：

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   在 macOS 上，键入如下内容：

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. 将旧的 AdGuard Home 可执行文件替换为新的可执行文件。 在大多数 Unix 系统上，该命令如下所示：

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   在 macOS 上，类似：

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   您可能还希望复制软件包的文档部分，例如更改日志 (`CHANGELOG.md`)、README 文件 (`README.md`) 和许可证 (`LICENSE.txt`)。

   现在，您可以删除临时目录。

7. 重新启动 AdGuard Home：

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows（使用 PowerShell）{#manual-update-win}

在下面的所有示例中，PowerShell 必须以管理员身份运行。

1. 从[发布页面][releases]下载新的 AdGuard Home 软件包。 如果要从命令行执行此步骤：

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. 导航到 AdGuard Home 的安装目录。 在下面的示例中，我们将使用 `C:\Program Files\AdGuardHome`。

3. 停止 AdGuard Home：

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. 备份数据。 也就是说，您的配置文件和数据目录 (默认为 `AdGuardHome.yaml` 和 `data/`)。 例如，要将数据备份到名为 `my-agh-backup` 的新目录：

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. 将 AdGuard Home 压缩包解压到临时目录。 例如，如果您已将压缩包下载到 `Downloads` 目录，并希望将其解压缩到临时目录：

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. 将旧的 AdGuard Home 可执行文件替换为新的可执行文件。 例如：

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   您可能还希望复制软件包的文档部分，例如更改日志 (`CHANGELOG.md`)、README 文件 (`README.md`) 和许可证 (`LICENSE.txt`)。

   现在，您可以删除临时目录。

7. 重新启动 AdGuard Home：

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## 如何卸载 AdGuard Home？ {#uninstall}

根据您安装 AdGuard Home 的方式，有不同的卸载方法。

:::caution

在卸载 AdGuard Home 之前，请不要忘记更改设备的配置并将它们指向其他 DNS 服务器。

:::

### 常规安装

在这种情况下，请执行以下操作：

- 注销 AdGuard Home 服务：`./AdGuardHome -s uninstall`.

- 删除 AdGuard Home 主目录。

### Docker

只需停止并删除图像即可。

### Snap Store

```sh
snap remove adguard-home
```
