- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## DNS 戳简介

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## 选择协议

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

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

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## 使用 DNS 戳

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## 创建 DNS 戳示例

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

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
