---
title: 白标端点（账号 IP 地址）
sidebar_position: 7
---

自定义域名允许合作伙伴以自有品牌提供 AdGuard DNS。使用企业版时，该服务可在私有 IP 地址上运行：此功能称为「账号 IP」。域名通过 A 记录指向「账号 IP」，而不是使用标准自定义域名所用的 CNAME 记录。

:::note

**CNAME** 将您的域名指向另一个域名（`dns.partner.com` → `cname.adguard-dns.com`）。真实的 IP 地址通过第二个域名解析，因此流量经过它所服务的共享基础设施。

**A 记录**将您的域名直接指向 IP 地址（`dns.partner.com` → `203.0.113.10`）。中间没有其他域名：您的域名解析到的地址就是处理流量的地址。

:::

每个账号可以有一个「账号 IP」，您可以将多个域名指向它。这与用于标识设备的专用 IPv4 和 IPv6 地址不同：「账号 IP」是您的自定义域名解析到的地址。

## 如何获取账号 IP

如需申请「账号 IP」，请联系您的客户经理或支持团队：[support@adguard-dns.io](mailto:support@adguard-dns.io)。

地址分配后，「白标端点」区块会出现在「设置」→「高级设置」→「自定义域名」中，显示您的「账号 IP」。在此之前，该区块不会显示。

![White-label endpoint](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

如果您的账号退出企业版套餐，该地址将变为非活动状态，指向它的域名也会停止工作。自定义域名在**团队版**套餐上仍可使用，但只能通过 CNAME 记录。要恢复暂停的域名，请重新将它们添加为标准自定义域名。

该地址本身会保留给您的账号，因此如果您重新使用企业版，会拿回同一个地址。

:::

## 如何将域名指向您的账户 IP 地址

设置步骤与标准自定义域名相同，区别仅在于您创建的是 A 记录而不是 CNAME 记录。此外，对于 DoH 域名，证书不会自动签发，您必须自行上传。

1. 在「自定义域名」中选择协议：「添加 DoH 域名」（用于 DNS-over-HTTPS）或「添加 DoT/DoQ 域名」（用于 DNS-over-TLS 或 DNS-over-QUIC）。

   ![选择协议](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. 输入您要使用的域名（例如 `dns.partner.com`），然后点击「下一步」。您需要拥有该域名的 DNS 管理面板访问权限。

   ![输入域名](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. 下一个屏幕会显示您的 DNS 记录值：「名称（主机）」下是您的域名，「值（指向 / IP 地址）」下是您的「账号 IP」。保持此屏幕打开，前往您的 DNS 提供商控制面板，使用这些值创建 A 记录。不要创建 CNAME 记录，「账号 IP」上的域名直接指向该地址。

   ![DNS 记录值](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. 在显示记录值的 AdGuard DNS 界面上，点击「验证」。如果记录尚未传播或指向其他位置，验证将会失败。检查记录并过几分钟重试。

5. 上传 TLS 证书。「账号 IP」上的域名不会自动签发证书：

   - 对于 **DoT/DoQ**，需要上传通配符证书（`*.partner.com`），与标准自定义域名相同。
   - 对于 **DoH**，您也需要上传自己的证书。这与标准流程不同，标准流程中 AdGuard DNS 可以为您生成证书。

   在添加证书之前，域名会显示「无证书」状态，您的客户将无法连接到它。

   ![上传证书](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

续期由您负责。证书到期前，将会收到电子邮件提醒。届时，域名将停止工作，直到您上传新证书。

:::

## 现有自定义域名与账号 IP 地址

在获得「账号 IP」之前添加的域名不会自动迁移到它。它们继续通过原有的 CNAME 记录正常工作。

要将域名迁移到您的「账号 IP」，请先在 DNS 提供商处删除其 CNAME 记录，一个域名不能同时拥有 CNAME 和 A 记录。然后在 AdGuard DNS 中删除该域名，并按照上述步骤重新添加。

:::caution

从删除域名到新设置验证通过之前，您的客户将无法使用该域名。

:::

## 限制

「账号 IP」会更改您的域名解析到的地址。它不涵盖以下几点：

- 账号 IP 地址在网络层面并非完全白标。对 IP 地址进行 WHOIS、RDAP 或 ASN 查询，仍可识别出 AdGuard 是底层 IP 基础设施的提供商。
- 反向 DNS 无法自定义，因此 PTR 查询不会返回您的域名。
- DNS 服务器发现（DDR）在「账号 IP」上不可用。
- 不支持在 SAN 字段中包含 IP 地址的证书，因此您的客户通过域名而非地址本身进行连接。
- 不支持使用您自己的 IP 范围（BYOIP），因为该地址由 AdGuard 分配。
- 用于验证设备 DNS 连接的 DNSCheck 域名，仍通过 AdGuard 的基础设施解析。
