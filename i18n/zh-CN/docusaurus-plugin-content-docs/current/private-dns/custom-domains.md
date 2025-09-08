---
title: 自定义域名
sidebar_position: 6
---

AdGuard DNS 订阅用户可以设置自己的域名（如 `dns.example.com`），而不是默认的 `d.adguard-dns.com`。 此项功能旨在通过确保与企业安全策略的无缝集成，帮助企业的 DNS 防护体系与现有基础设施协同运作，同时完全保留 AdGuard DNS 提供的广告拦截和隐私保护特性。

:::note

自定义域名适用于**企业版**和**团队版**套餐的用户。

:::

## 如何设置自定义域名

要设置自定义域名，请登录 AdGuard DNS 控制台并前往[账号设置](https://adguard-dns.io/zh_cn/dashboard/account)。 向下滚动至「高级设置」并选择「自定义域名」。 随后需要完成三个主要配置步骤。

1. 选择协议。 您有两个选项：

    - 添加 DoH 域名（用于 DNS-over-HTTPS）
    - 添加 DoT/DoQ 域名（适用于 DNS-over-TLS 或 DNS-over-QUIC）

   ![选择协议 \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_cn_1.png)

2. 选择协议后，输入首选域名（例如，`example.com`），并验证 CNAME 记录。

   ![CNAME 记录 \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_cn_2.png)

3. 设置证书。 对于 DoT/DoQ 域名，需要上传通配符 TLS 证书。 若选择 DoH，既可自行提供 TLS 证书，也可以让 AdGuard DNS 自动生成证书。 验证通过后，您的自定义域名将显示在控制台中，随时可用。

   ![自定义域名列表 \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_cn_3.png)
