---
title: 身份验证的 DNS-over-HTTPS
sidebar_position: 4
---

## 为什么有用

使用身份验证的 DNS-over-HTTPS 让用户设置用户名和密码来访问所选择的服务器。

这有助于防止未经授权的访问并提高安全性。 此外，还可以限制特定描述文件中使用其他协议。 当其他人知道您的 DNS 服务器地址时，此功能特别有用。 添加密码后，用户可以阻止访问权限，并确保只有您自己可以使用它。

## 如何设置

:::note 兼容性

[AdGuard DNS 客户端](/dns-client/overview.md)和 [AdGuard 应用程序](https://adguard.com/welcome.html)支持该功能 。

:::

1. 打开仪表盘。
2. 添加设备或进入之前创建的设备设置。
3. 点击「_使用 DNS 服务器地址_」并打开「_加密的 DNS 服务器地址_」部分。
4. 按照自己的需求配置身份验证的 DNS-over-HTTPS。
5. 重新配置设备以在 AdGuard DNS 客户端或 AdGuard 应用程序中使用此服务器。
6. 为此，复制加密服务器的地址并将其粘贴到 AdGuard 应用程序或 AdGuard DNS 客户端的设置中。
   ![复制地址 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. 用户还可以禁止使用其他协议。
   ![禁止协议 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
