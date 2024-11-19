- - -
title: How to create your own DNS stamp for Secure DNS

sidebar_position: 4
- - -

本指南将介绍如何为安全 DNS 创建自己的 DNS 戳。 安全 DNS 是一项通过加密 DNS 查询来增强互联网安全和隐私的服务。 这可以防止用户的查询被恶意行为者拦截或操纵。

安全 DNS 通常使用 `tls://`、`https://` 或 `quic://` URL。 这对大多数用户来说已经足够，也是推荐的方式。

不过，如果需要额外的安全性，例如预解析服务器 IP 或通过散列进行证书标号，用户可以生成自己的 DNS 戳。

## DNS 戳简介

DNS 戳是简短的字符串，包含连接到安全 DNS 服务器所需的全部信息。 DNS 戳简化设置安全 DNS 的过程，可使用户无需再手动输入这些数据。

DNS 戳让用户自定义常规 URL 之外的安全 DNS 设置。 它们还允许用户指定硬编码的服务器地址，使用证书哈希等等。 这些功能使 DNS 戳成为配置安全 DNS 设置更强大、更通用的选择。

## 选择协议

安全 DNS 的类型包括 `DNS-over-HTTPS (DoH)`、`DNS-over-QUIC (DoQ)`、`DNS-over-TLS (DoT)` 等。 具体协议的选择取决于您的使用环境。

## 创建 DNS 戳

1. 打开 [DNSCrypt 戳计算器](https://dnscrypt.info/stamps/)。

2. 根据所选协议，从下拉菜单中选择相应协议(DoH、DoT 或 DoQ)。

3. 填写必填字段：
    - **IP 地址**：输入 DNS 服务器的 IP 地址。 如果用户使用 DoT 或 DoQ 协议，请确保您也指定了适当的端口。

    :::note

    该字段为可选项，应谨慎使用：使用该选项可能会干扰仅 IPv6 网络上的网络。


:::
    - **哈希值**：输入在验证链中找到的 TBS 证书之一的 SHA256 摘要。 如果您使用的 DNS 服务器提供了现成的哈希值，请找到并将其复制。 否则，您可以按照「[*获取证书哈希*](#obtaining-the-certificate-hash)」部分的说明获取。

    :::note

    该字段为可选项


:::

    - **主机名**：输入 DNS 服务器的主机名。 该字段用于 DoT 和 DoQ 协议中的服务器名称验证。

    - **DoH**：
      - **路径**：输入执行 DoH 请求的路径。 该路径通常是 `"/dns-query"`，但您的提供商可能会提供不同的路径。

    -     对于 **DoT 和 DoQ**：
      - 该工具中通常没有针对这些协议的特定字段。 只需确保解析器地址中指定的端口是正确端口即可。

    - 在「**属性**」部分中，可以检查相关属性是否已知且适用于您的 DNS 服务器。

4. 您的 DNS 戳将自动生成，并在「**戳**」字段中显示。

### 获取证书哈希

要填写**服务器证书哈希值**字段，可以使用以下命令，将 `<IP_ADDRESS>`、`<PORT>` 和 `<SERVER_NAME>` 替换为您的 DNS 服务器的相应值：

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

哈希命令的结果可能随着服务器证书的更新而随时间变化。 所以，如果 DNS 戳突然停止工作，您可能需要重新计算证书的哈希值并生成一个新的 DNS 戳。 定期更新 DNS 戳有助于确保安全 DNS 服务的持续安全运行。

:::

## 使用 DNS 戳

现在您有自己的 DNS 戳，可以用来设置安全 DNS。 DNS 戳可以导入 AdGuard 和 AdGuard VPN，从而增强互联网隐私性和安全性。

## 创建 DNS 戳示例

让我们以使用 DoT 为 AdGuard DNS 创建 DNS 戳为例进行说明：

1. 打开 [DNSCrypt 戳计算器](https://dnscrypt.info/stamps/)。

2. 选择 DNS-over-TLS（DoT）协议。

3. 填写以下字段：

    - **IP 地址**：输入 DNS 服务器的 IP 地址和端口。 在本例中，它是 `94.140.14.14:853`。

    - **主机名**：输入 DNS 服务器的主机名。 在本例中，它是 `dns.adguard-dns.com`。

    - **哈希值**：执行命令

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    结果为 `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` 将服务器证书的 SHA256 哈希值粘贴到字段中。

4. 将属性部分留空。

5. 您的 DNS 戳将自动生成，并在「**戳**」字段中显示。
