---
title: 统计信息
sidebar_position: 2
---

## 概况统计

在「统计数字」选项卡中，用户可以查看连接到私有 AdGuard DNS 的设备发出的所有 DNS 请求的汇总统计信息。 It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

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

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![流量目的地排行 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### 域名排行

包含接收最多请求的域名列表。

![域名排行 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Top blocked categories

Displays the top 5 most frequently blocked content categories. The data can be filtered by time range, server, and device. Domains fall into more than 20 categories, including _Adult content_, _Gambling_, _Banking_, _Games_, and _Social networks_.

![Top blocked categories \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blocklists

Shows the top 5 blocklists by the number of blocked requests and their share of all blocks. The data can be filtered by time range, server, and device. Each blocked request is credited only to the blocklist whose rule was triggered, so domains that appear in multiple lists are never double-counted.

Custom blocklists appear under the names you gave them. If a blocklist isn’t in the top 5, it blocked fewer requests than the ones shown.

The tile works at the list level: it doesn’t show which rule was triggered, and it doesn’t include statistics for user rules or allowlists.

![Top blocklists \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
