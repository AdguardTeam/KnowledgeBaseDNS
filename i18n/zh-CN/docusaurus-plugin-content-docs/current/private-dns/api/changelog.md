---
title: 更新日志
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

本文包含 [AdGuard DNS API](private-dns/api/overview.md) 的更新日志。

## v1.9

_2024年7月11日发布_

- 新增自动设备连接功能：
  - 新增 DNS 服务设置 — `auto_connect_devices_enabled`，允许通过特定链接类型验证自动连接设备。
  - 设备中新增字段 — `auto_device`，表示设备已自动给连接。
- 将 CategoryQueriesStats 中的 `queries`、AccountLimits 中的 `used` 以及 QueriesStats 中的 `blocked` 和 `queries` 由 `int` 替换为 `long`。

## v1.8

_2024年4月20日发布_

- 新增对使用具有身份验证的 DNS-over-HTTPS 的支持：
  - 新增操作：重置设备的 DNS-over-HTTPS 密码。
  - 新增设备设置：`detect_doh_auth_only`。 禁用除具有身份验证的 DNS-over-HTTPS 以外的所有 DNS 连接。
  - DeviceDNSAddresses 新增字段：`dns_over_https_with_auth_url`。 用于指定使用具有身份验证的 DNS-over-HTTPS 连接时的 URL。

## v1.7

_2024年3月11日发布_

- 添加 IPv4 专用地址功能：
  - 现在可在设备上使用专用 IPv4 地址配置 DNS 服务器。
  - 专用 IPv4 地址现在与它所连接的设备相关联，以便记录对该设备的查询。
- 新增操作：
  - 列出所有可用的专用 IPv4 地址
  - 分配新的专用 IPv4 地址
  - 将可用的 IPv4 地址链接到设备
  - 取消 IPv4 地址与设备的连接
  - 查询与设备关联的专用地址信息
- 已将新限制添加到账号限制中：
  - `dedicated_ipv4`：提供有关已分配的专用 IPv4 地址数量及其限制的信息。
- 删除了 `DNSServerSettings` 中的弃用字段：
  - `safebrowsing_enabled`

## v1.6

_2024年1月22日发布_

- 为 DNS 描述文件新增了「访问设置」部分（`access_settings`）。 用户可以通过自定义这些字段来保护您的 AdGuard DNS 服务器，使其免受未经授权的访问：

  - `allowed_clients`：在这里，您可以设置允许使用您 DNS 服务器的客户端。 此字段优先于 `blocked_clients` 字段。
  - `blocked_clients`：在这里，可以指定不允许哪些客户端使用您的 DNS 服务器。
  - `blocked_domain_rules`：在这里，可以指定不允许哪些域名访问您的 DNS 服务器，并可以使用通配符和 DNS 过滤规则定义这些域名。

- 已将新限制添加到账号限制中：

  - `access_rules` 提供当前使用的 `blocked_clients` 和 `blocked_domain_rules` 的总和，以及访问规则的限制。
  - `user_rules` 显示已创建的用户规则数量，以及用户规则限制。

- 新增设置：`ip_log_enabled` 用于记录客户端 IP 地址和域名。

- 新增错误代码 `FIELD_REACHED_LIMIT`，用于指示字段值超过限制：

  - 访问设置中 `blocked_clients` 和 `blocked_domain_rules` 的总数。
  - 自定义用户规则设置中的 `rules`。

## v1.5

_2023年6月16日发布_

- 添加新设置 block_nrd 并将所有安全相关设置分组到一处。

### 安全浏览设置模式更改前：

变更前：

```json
{
   "enabled": true
}
```

更改后：

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

现在，其中的 `enabled` 会控制组中的所有设置， `block_dangerous_domains` 是之前模型的 `enabled` 字段，`block_nrd` 是过滤新注册域名的设置。

### 保存服务器设置的模型变更

变更前：

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

更改后：

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

此处使用新字段 `safebrowsing_settings` 代替已弃用的 `safebrowsing_enabled`，其值存储在 `block_dangerous_domains`中。

## v1.4

_2023年3月29日发布_

- 添加了用于阻止响应的可配置选项：默认 (0.0.0.0)、REFUSED、NXDOMAIN 或自定义 IP 地址。

## v1.3

_2022年12月13日发布_

- 添加了获取账号限制的方法。

## v1.2

_2022年10月14日发布_

- 新增 DNS 和 DNSCRYPT 协议类型。 弃用即将删除的 PLAIN_TCP、PLAIN_UDP、DNSCRYPT_TCP 和 DNSCRYPT_UDP。

## v1.1

_2022年7月7日发布_

- 添加了按时间、域名、公司和设备检索统计数字的方法。
- 添加了更新设备设置的方法。
- 修复了必填字段定义。

## v1.0

_2022年2月22日发布_

- 添加了身份验证。
- 对设备和 DNS 服务器进行 CRUD 操作。
- 查询日志
- 下载 DoH 和 DoT .mobileconfig。
- 过滤列表和网络服务。
