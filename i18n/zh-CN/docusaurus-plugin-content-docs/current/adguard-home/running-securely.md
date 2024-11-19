---
title: 安全设置 AdGuard Home
sidebar_position: 4
---

本页面包含一系列其他建议，以帮助确保 AdGuard Home 的安全。

## 选择服务器地址

首次启动 AdGuard Home 时，系统会询问您应该使用哪个接口来提供无加密的 DNS 服务。 最安全、最方便的选项取决于您希望如何运行 AdGuard Home。 用户可以稍后更改地址 (可以是多个地址)，方法是停止 AdGuard Home，编辑配置文件中的 `dns.bind_hosts` 字段，然后重新启动 AdGuard Home。

:::note

用户界面目前只允许选择一个接口，但实际上用户可以通过配置文件选择多个地址。 我们将在未来的版本中改进用户界面。

:::

如果您打算**只在您的计算机上**运行 AdGuard Home，请选择环回设备 (也称为 "localhost")。 它通常被称为 `localhost`、`lo` 或类似的名称，地址为 `127.0.0.1`。

如果您计划在**小型隔离网络内的路由器**上运行 AdGuard Home，请选择本地服务的接口。 它们的名称可能有所不同，但通常包含单词 `wlan` 或 `wlp`，地址以 `192.168.`开头。 如果用户希望路由器本身上的软件也使用 AdGuard Home，可能还应该添加环回地址。

如果您打算在**可公开访问的服务器**上运行 AdGuard Home，可能需要选择_所有接口_选项。 请注意，这可能会使服务器遭受 DDoS 攻击，因此请阅读以下有关访问设置和速率限制的部分。

## 访问设置

:::note

如果您的 AdGuard Home 无法从外部访问，可以跳过本节。

:::

在「_设置_」→「_DNS 设置_」页面的底部，将找到「_访问设置_」部分。 通过这些设置，用户可以禁止已知滥用 AdGuard Home 实例的客户端，也可以启用白名单模式。 对于客户端数量已知且所有客户端都能够使用安全 DNS 的公共实例，建议使用允许列表模式。

要启用白名单模式，请在「_允许的客户端_」字段中输入允许的客户端的 [ClientIDs][cid] (推荐) 或 IP 地址。

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## 禁用无加密的 DNS

:::note

如果您的 AdGuard Home 无法从外部访问，可以跳过本节。

:::

如果所有使用您的 AdGuard Home 的客户端都能够使用加密协议，那么最好禁用无加密的 DNS 或使其无法从外部访问。

如果您想要完全禁用无加密的 DNS 服务，可以在「_设置_」→「_加密设置_」页面上执行此操作。

如果您想要将无加密的 DNS 限制为仅供内部使用，请停止 AdGuard Home，编辑配置文件中的 `dns.bind_hosts` 字段，使其仅包含环回地址 (可以是多个地址)，然后重新启动 AdGuard Home。

## 无加密的 DNS 请求数量限制

:::note

如果您的 AdGuard Home 无法从外部访问，可以跳过本节。

:::

通常来说，默认的无加密的 DNS 请求数量限制为 20 就足够了，但如果有用户有已知客户端的列表，那么可以将它们添加到白名单中，并为其他客户端设置更严格的请求数量限制。

## 操作系统服务问题

要防止通过二进制植入进行权限提升，安装 AdGuard Home 的目录必须设置适当的所有权和权限。

我们感谢 Go Compile 在编写本节时提供的帮助。

### Unix (FreeBSD, Linux, macOS, OpenBSD)

AdGuard Home 工作目录，在 macOS 上默认为 `/Applications/AdGuardHome`，在其他 Unix 系统上为 `/opt/AdGuardHome`，同时，二进制文件本身通常应具有 `root:root` 所有权，并且除了 `root` 之外的任何人都不能写入。 您可以使用以下命令进行检查，将 `/opt/AdGuardHome` 替换为您的目录，将 `/opt/AdGuardHome/AdGuardHome` 替换为您的二进制文件：

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

一个相当安全的输出应该如下所示：

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

请注意，除了 `root` 和 `root` 所有权之外的任何人都没有写入权限。 如果权限和/或所有权不正确，请在 `root` 下运行以下命令：

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

在 Windows 上，原理是相同的：确保 AdGuard Home 目录，通常为 `C:\Program Files\AdGuardHome`，以及 `AdGuardHome.exe` 二进制文件具有仅允许普通用户读取和执行/列出它们的权限。

未来，我们计划将 Windows 版本发布为 MSI 安装程序文件，以确保自动执行此操作。
