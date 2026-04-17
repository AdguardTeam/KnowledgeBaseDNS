---
title: DNS 加密
sidebar_position: 6
---

AdGuard Home **开箱即支持**所有现代 DNS 加密协议。

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home 同时支持客户端和服务端的 [DNSCrypt][dnscrypt-info]。 [了解如何将 AdGuard Home 配置为 DNSCrypt 服务器](#configure-dnscrypt)。

:::

本指南介绍如何使用 AdGuard Home 搭建加密 DNS 服务器。

[dnscrypt-info]: https://dnscrypt.info/

## 服务器安装 {#server-installation}

加密 DNS 流量的目的是保护其免受第三方（例如 ISP）的分析或篡改。

{/*
TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226.
*/}

这意味着您需要一台拥有公网独立 IP 地址的服务器。 有很多廉价的云服务器提供商：[DigitalOcean][digital-ocean]、[Vultr][vultr]、[Linode][linode] 等。 任选一家，在其上创建云服务器，然后在服务器上[安装 AdGuard Home](adguard-home/getting-started.md)。

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## 注册域名 {#register-domain}

首先，您需要一个域名。 如果您从未注册过域名，这里有[一份简单的教程][domain-name-register]可以帮助您。

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## 获取 SSL 证书 {#certificate}

`DNS-over-HTTPS` 和 `DNS-over-TLS` 都基于 [TLS 加密][tls-wikipedia]，因此使用它们需要 SSL 证书。

SSL 证书可以从证书颁发机构（CA）购买。CA 是受浏览器和操作系统信任、为域名颁发 SSL 证书的公司。

或者，您也可以从 [Let’s Encrypt CA][letsencrypt] 免费获取证书。Let's Encrypt 是由互联网安全研究组（ISRG）开发的免费证书颁发机构。

本指南介绍如何获取证书。

### 使用 CertBot

Certbot 是一个易于使用的客户端，用于从 Let's Encrypt 获取证书。

1. 访问 [certbot.eff.org][certbot]，选择「以上都不是」软件以及您的操作系统。
2. 按照安装说明操作，在进入「入门」部分之前停止。

#### 使用 DNS 挑战获取证书

如果您已有域名，使用 DNS 挑战是获取证书的最简单方式。

运行以下命令并按 Certbot 的提示操作：

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

最后，您会得到两个文件：

- `fullchain.pem`：PEM 编码的 SSL 证书
- `privkey.pem`：PEM 编码的私钥

配置 AdGuard Home 时需要这两个文件。

:::info 重要信息

续期现有证书时需要使用完全相同的方法。

:::

### 使用 Lego

还有一个非常不错且易于使用的 CertBot 替代方案：[LEGO][lego-source]。

1. [使用相应的方法][lego-install]安装它。
2. 从[列表][lego-provider]中选择您的 DNS 服务商，然后按照说明获取证书。

此外，这里有[一个简单的脚本][legoagh]，可用于自动化证书生成和续期。

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## 配置 AdGuard Home {#configure}

1. 打开 AdGuard Home 网络界面并前往「设置」。

2. 选择「加密」部分。

   ![加密设置截图][encryption-screenshot]

3. 将 `fullchain.pem` 文件的内容复制/粘贴到「证书」下的输入字段中，或指定文件路径。

4. 将 `privkey.pem` 文件的内容复制/粘贴到「私钥」下的输入字段中，或指定文件路径。

5. 在「服务器名称」中输入您的域名。

6. 看到验证成功的提示后，点击「保存设置」。

:::note

当通过文件路径指定的证书和/或私钥发生更改时，AdGuard Home 会自动重新加载。 也可通过 `SIGHUP` 信号触发重新加载。

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## 与反向代理一起使用 {#reverse-proxy}

我们已有一篇关于配置反向代理服务器以访问 AdGuard Home Web 界面的[指南][reverse-proxy-faq]。

AdGuard Home 能够限制来自未加入「受信任」列表的代理服务器的 DNS-over-HTTPS 请求。 默认情况下，它被配置为接受来自 IPv4 和 IPv6 本地回环地址的请求。

要让 AdGuard Home 处理来自反向代理服务器的 DNS-over-HTTPS 请求，请在 `AdGuardHome.yaml` 中将 `trusted_proxies` 设置为该代理服务器的 IP 地址。 如果有多个代理服务器，可以使用 CIDR 而不是单个 IP 地址。

### Nginx 反向代理

要将 AdGuard Home 配置为接受来自 Nginx 反向代理服务器的请求，请确保反向代理服务器本身已正确配置。

`nginx.conf` 文件中应包含相应的指令，以向请求添加支持的转发头，这些头是 `X-Real-IP` 或 `X-Forwarded-For`。 这可以通过 [`ngx_http_realip_module`][ngx-http-realip-module] 实现。 简而言之，该模块会获取客户端的真实 IP 地址，并将其写入 HTTP 请求的头信息中。 AdGuard Home 将接收该头部的值，并将其解析为真实的客户端地址。 反向代理服务器的地址也将被接收，并同样与「受信任」代理列表进行核对。

您可能希望代理的另一个头部是 `Host` 头，该头用于使 AdGuard Home 能够识别来自主机名中包含 ClientID 的客户端的请求。

例如，如果反向代理服务器的配置包含以下指令：

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home 会将 `192.168.1.2` 作为代理服务器的地址，并与 `trusted_proxies` 进行核对。 如果该代理是「受信任的」，则 `1.2.3.4` 将受到访问设置的控制。

### Cloudflare CDN

Cloudflare 的内容分发网络充当反向代理，会将其[自己的头部][cloudflare-headers]（`CF-Connecting-IP` 和 `True-Client-IP`）附加到转发的请求中。 AdGuard Home 也支持这些头部，因此反向代理服务器的[地址][cloudflare-addresses]可以直接添加到 `trusted_proxies` 列表中。 有关恢复原始访问者 IP 的详细信息，请参阅 [Cloudflare 官方参考文档][cloudflare-real-ip]。

### 其他头部

未来 AdGuard Home 可能会支持其他 HTTP 头部。 不过，任何与 HTTP 头部相关的功能请求，应首先尝试通过配置反向代理自身来解决。

例如，要修改 [HTTP 严格传输安全][hsts]机制以包含实验性的 `preload` 指令，可以使用类似如下的配置片段：

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

{/*
TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226.
*/}

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## 配置设备 {#configure-devices}

### Android

- Android 9 及以上版本原生支持 `DNS-over-TLS`。 要配置它，请前往「设置」→「网络和互联网」→「高级」→「私人 DNS」，并在其中输入您的域名。
- [AdGuard Android 版][ag-for-android]支持 `DNS-over-HTTPS`、`DNS-over-TLS`、`DNSCrypt` 和 `DNS-over-QUIC`。
- [Intra][intra] 为 Android 添加了 `DNS-over-HTTPS` 支持。

### iOS

- iOS 14 及以上版本通过配置描述文件原生支持 `DNS-over-TLS` 和 `DNS-over-HTTPS`。 为简化操作，AdGuard Home 可以为您生成这些配置描述文件。 只需前往「设置向导」→「DNS 隐私」，然后滚动到 iOS 部分即可。
- [AdGuard for iOS][ag-for-ios] 支持 `DNS-over-HTTPS`、`DNS-over-TLS`、`DNSCrypt` 和 `DNS-over-QUIC`。
- [DNSCloak][dnscloak] 支持 `DNS-over-HTTPS`，但要将其配置为使用您自己的服务器，需要为其生成一个 [DNS Stamp][stamps]。

### Windows

- Windows 10 版本 19628 及更高版本原生支持 `DNS-over-HTTPS`。
- [AdGuard Windows 版][ag-for-windows]支持 `DNS-over-HTTPS`、`DNS-over-TLS`、`DNSCrypt` 和 `DNS-over-QUIC`。

### macOS

- macOS Big Sur 及更高版本通过配置描述文件原生支持 `DNS-over-TLS` 和 `DNS-over-HTTPS`。 为简化操作，AdGuard Home 可以为您生成这些配置描述文件。 只需前往「设置向导」→「DNS 隐私」，然后滚动到 iOS 部分即可。

### 其他实现方式

- AdGuard Home 本身可以在任何平台上作为安全的 DNS 客户端使用。
- [dnsproxy][ag-dnsproxy] 支持所有已知的安全 DNS 协议。
- [dnscrypt-proxy][dnscrypt-proxy] 支持 `DNS-over-HTTPS`。
- [Mozilla Firefox][firefox] 支持 `DNS-over-HTTPS`。

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## 配置 DNSCrypt {#configure-dnscrypt}

AdGuard Home 能够作为 DNSCrypt 服务器工作。 不过，此功能只能通过配置文件启用，无法通过 Web 界面进行设置。 本指南将说明如何操作。

### 生成配置文件

以下是生成 DNSCrypt 配置文件并让 AdGuard Home 指向它的方法：

:::info 重要信息

确保您的 TLS 设置有效且加密已启用。

:::

1. 获取适用于您系统的最新版 [`dnscrypt`] 工具。 解压缩归档文件，并进入生成的目录。

   - 在 Unix 系统上，使用兼容 POSIX 的 shell：

     （此处及下文均以 `linux-amd64` 为例。 请务必下载并使用适用于您平台的版本。）

     1. 提取文件：

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        输出示例：

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. 转到提取的目录：

           ```sh
           cd ./linux-amd64/
           ```

     3. 生成配置文件：

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        输出示例：

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - 在 Windows 上，使用 PowerShell：

     （此处及下文中，`windows-amd64` 用作示例。 请确保下载并使用适用于您的 CPU 架构的版本。）

     1. 提取文件：

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. 转到提取的目录：

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. 生成配置文件：

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        输出示例：

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   其中 `example.org` 是您的主机名，`./dnscrypt.yaml` 是配置输出文件的名称。

   您可以将二进制文件的路径添加到您的 `PATH`/`$env:PATH` 中。

2. 在配置文件（通常为 `AdGuardHome.yaml`）中，添加以下内容：

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   其中 `5443` 是您的 DNSCrypt 服务器端口，`./dnscrypt.yaml` 是步骤 2 中生成的配置文件的名称。

   :::info 重要信息

   修改配置文件前，请先停止 AdGuard Home。

   :::

   :::tip

   在 Windows 上，建议使用配置文件的完整路径。 例如，`C:\用户\Me\文件\dnscrypt.yaml`。

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### 生成 DNSCrypt stamp

以下是如何生成 DNSCrypt stamp 并检查安装：

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. 输入来自您的 DNSCrypt 配置文件中的数据。 「提供方公钥」即您 DNSCrypt 配置文件中 `public_key` 字段的值。

   :::note

   输入带有自定义端口的主机。

   :::

3. 现在您会得到一个类似这样的印章：

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   运行以下命令检查安装：

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   或者，在 Windows 上：

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   其中 `example.com` 是要查询的域名。

### 配置设备以使用 DNSCrypt

#### 所有平台

- [`dnscrypt-proxy`][prox]（参考实现）。 DNSCrypt-Proxy 是一个命令行代理，支持 Linux、BSD、Windows、macOS、Android 等系统。

#### Android

- [AdGuard Android 版][andr]支持 DNSCrypt。

#### iOS

- [AdGuard iOS 版][ios]支持 DNSCrypt。
- [DNSCloak][cloa] 内部使用 `dnscrypt-proxy`，并支持 DNSCrypt。

#### Windows

- [AdGuard Windows 版][win]支持 DNSCrypt。
- [Simple DNSCrypt][simp] 是一个在 Windows 上配置和运行 `dnscrypt-proxy` 的简易管理工具。

更多信息请参阅 [DNSCrypt 官网][imps1]和 [DNS 隐私项目列表][imps2]。

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
