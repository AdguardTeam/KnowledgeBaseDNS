---
title: 概览
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. 它充当一个 DNS 服务器，将 DNS 请求转发到相应的上游解析器。

[AdGuard DNS]: https://adguard-dns.io

## 快速开始 {#start}

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

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. 安装并运行以下命令将其设置为服务：

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. 编辑配置文件 `config.yaml`。

4. 启动服务：

   ```sh
   ./adguarddns-cli -s start -v
   ```

使用任意 DNS 检查工具验证是否运行正常。 例如，使用 `nslookup`：

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

只需从[版本页面][releases]下载 MSI 安装程序并安装即可。

使用任意 DNS 检查工具验证是否运行正常。 例如，使用 `nslookup.exe`：

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## 命令行选项 {#opts}

每个选项都会覆盖配置文件和环境变量中的对应值。

### 帮助 {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### 服务 {#opts-service}

`-s <value>` 选项用于指定对操作系统服务的操作。 可能的选项值如下：

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### 详细日志输出 {#opts-verbose}

`-v` 选项用于启用详细日志输出。

### 版本 {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

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
