---
title: 统计信息
sidebar_position: 2
---

## 概况统计

在「统计数字」选项卡中，用户可以查看连接到私有 AdGuard DNS 的设备发出的所有 DNS 请求的汇总统计信息。 它显示请求的总数和地理位置、被拦截的请求数、请求被发送到的公司列表、请求类型和请求最多的域名。

![已拦截网站 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## 类别

### 请求类型

- **广告**：包含广告或与广告有关的请求，它们将收集和分享用户数据，分析用户行为，并投放广告。
- **跟踪器**：来自网站和第三方的请求，目的是跟踪用户活动。
- **社交网络**：向社交网络网站发送的请求。
- **CDN**：请求连接到内容分发网络（CDN），这是一个全球的代理服务器网络，能够加速内容传递到用户。
- **其他**

![请求类型 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### 公司排行

在此，可以看到发送最多请求的公司。

![公司排行 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### 流量目的地排行

这里可以查看接收最多请求的国家/地区。

除了国家/地区名称外，列表还包含两个常规类别：

- **不适用**：响应不包含 IP 地址。
- **未知目的地**：无法从 IP 地址确定国家。

![流量目的地排行 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### 域名排行

包含接收最多请求的域名列表。

![域名排行 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### 加密的请求

显示请求总数以及加密和未加密流量的比例。

![加密的请求 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### 客户端排行

在这里我们显示发送请求的客户端数量。 要查看客户端 IP 地址，请在服务器设置中启用「记录 IP 地址」。 [更多关于服务器设置](/private-dns/server-and-settings/advanced.md)可以在相关章节中找到。
