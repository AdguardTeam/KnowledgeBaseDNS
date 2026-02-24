---
title: 拦截列表
sidebar_position: 2
---

## 拦截列表是什么

拦截列表是 AdGuard DNS 用于过滤可能危害用户隐私的广告和内容的规则集，格式为文本。 通常，一个过滤器由具有相似用途的规则构成。 例如，可以创建用于网站语言的规则（如中文或俄语的过滤规则）或针对钓鱼网站的规则（例如，网络钓鱼 URL 拦截列表）。 用户可以轻松地将这些规则作为一个组启用或禁用。

## 为什么拦截列表有用

拦截列表旨在灵活定制过滤规则。 例如，用户可能希望阻止特定语言区域的广告域名，或者摆脱跟踪器或广告域名。 选择所需的拦截列表，按您的喜好自定义过滤规则。

## 如何在 AdGuard DNS 中激活拦截列表

要激活拦截列表：

1. 打开仪表盘。
2. 前往「_服务器_」。
3. 选择所需的服务器。
4. 点击「_拦截列表_」。

## 拦截列表类型

### 通用

包含屏蔽广告和跟踪域名列表的过滤组。

![常规模式拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### 区域

一个包含区域列表，用于屏蔽特定语言中的域名的过滤组。

![区域拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### 安全

包含规则，用于屏蔽欺诈网站和钓鱼域名的过滤组。

![安全拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### 其他

来自第三方开发者的各种屏蔽规则的拦截列表。

![其他拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## 添加过滤器

如果您希望扩展 AdGuard DNS 过滤器列表，可以在 GitHub 上的 [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) 的相关部分提交请求。

提交请求：

1. 前往上方链接（您可能需要在 GitHub 上注册）。
2. 点击「_New issue_」。
3. 点击「_Blocklist request_」并填写表格。
4. 填写表格后，点击「_Submit new issue_」。

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## 用户规则

您也可以创建自己的拦截规则。
在[用户规则文章](/private-dns/setting-up-filtering/user-rules.md)中了解更多内容。

## Custom blocklists

If you need any specific blocklist to be added to AdGuard DNS, you can download it via URL.

![Add custom blocklist](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Open the dashboard and click _Servers_ in the left-hand menu
2. Select _My server → Blocklists_
3. In the _Custom_ section, click _Add custom blocklist_
4. Enter the blocklist name, its URL, and an optional description, then click _Add_

:::note

Each subscription plan has a limit on the total number of filtering rules: Personal — 1K, Team — 5K, Enterprise — 100K. This limitation is in place because blocklists are downloaded to DNS servers, and allowing unlimited blocklist sizes could lead to server overload, potentially causing performance issues.

:::

If a custom blocklist surpasses the limit, it will be **disabled automatically**, and you’ll see a corresponding notification. To enable a newly added blocklist that exceeds the rule limit, you’ll need to either remove other blocklists or upgrade to a plan with a higher rule limit.
