---
title: 概览
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## 什么是 AdGuard DNS 客户端？

适用于 [AdGuard DNS][agdns] 的一个跨平台的轻量级 DNS 客户端。 它充当一个 DNS 服务器，将 DNS 请求转发到相应的上游解析器。

[agdns]: https://adguard-dns.io

## 快速开始 {#start}

:::caution

AdGuard DNS 客户端仍处于测试阶段。 它可能运行不稳定。

:::

支持的操作系统：

- Linux
- macOS
- Windows

支持的 CPU 架构：

- 64-bit ARM
- AMD64
- i386

## 开始 {#start-basic}

### 类 Unix 操作系统 {#start-basic-unix}

1. 从[版本页面][releases]下载并解压 `.tar.gz` 或 `.zip` 文件。

   :::caution

   在 macOS 上，全局安装的守护进程必须归 `root` 所有 (参见 [`launchd` 文档][launchd-requirements])，因此 `AdGuardDNSClient` 可执行文件必须放在 `/Applications/` 目录或其子目录中。

   :::

2. 安装并运行以下命令将其设置为服务：

   ```sh
   ./AdGuardDNSClient -s install -v
   ```

3. 编辑配置文件 `config.yaml`。

4. 启动服务：

   ```sh
   ./AdGuardDNSClient -s start -v
   ```

使用任意 DNS 检查工具验证是否运行正常。 例如，使用 `nslookup`：

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

只需从[版本页面][releases]下载 MSI 安装程序并安装即可。

使用任意 DNS 检查工具验证是否运行正常。 例如，使用 `nslookup.exe`：

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## 命令行选项 {#opts}

每个选项都会覆盖配置文件和环境变量中的对应值。

### 帮助 {#opts-help}

使用 `-h` 选项可在标准输出查看 AdGuard DNS Client 的帮助信息，并以成功状态退出。

### 服务 {#opts-service}

`-s <value>` 选项用于指定对操作系统服务的操作。 可能的选项值如下：

- `install`：将 AdGuard DNS 客户端安装为一项服务
- `restart`：重启正在运行的 AdGuard DNS 客户端服务
- `start`：启动已安装的 AdGuard DNS 客户端服务
- `status`：显示已安装的 AdGuard DNS 客户端服务状态
- `stop`：停止正在运行的 AdGuard DNS 客户端服务
- `uninstall`：卸载 AdGuard DNS 客户端服务

### 详细日志输出 {#opts-verbose}

`-v` 选项用于启用详细日志输出。

### 版本 {#opts-version}

`--version` 选项可以让 AdGuard DNS 客户端打印可执行文件 `AdGuardDNSClient` 的版本信息到标准输出并退出 (退出状态为成功)。

## 配置文件 {#conf}

### 文件 {#conf-file}

YAML 配置文件在[配置文件说明][conf]中描述，并有一个示例配置文件 `config.dist.yaml`。  部分配置参数可以通过设置[环境变量][env]来覆盖配置文件中的值。

[conf]: configuration.md
[env]: environment.md

## 退出代码 {#exit-codes}

在不同的错误状况下返回不同的退出代码：

- `0`：成功完成并退出，没有错误。

- `1`：内部错误，很可能是配置错误导致。

- `2`：无效的命令行参数或参数值。
