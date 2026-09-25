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

![常规模式拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general_cn.png)

### 区域

一个包含区域列表，用于屏蔽特定语言中的域名的过滤组。

![区域拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional_cn.png)

### 安全

包含规则，用于屏蔽欺诈网站和钓鱼域名的过滤组。

![安全拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security_cn.png)

### 其他

来自第三方开发者的各种屏蔽规则的拦截列表。

![其他拦截列表 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other_cn.png)

## 添加过滤器

如果您希望扩展 AdGuard DNS 过滤器列表，可以在 GitHub 上的 [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) 的相关部分提交请求。

提交请求：

1. 前往上方链接（您可能需要在 GitHub 上注册）。
2. 点击「_New issue_」。
3. 点击「_Blocklist request_」并填写表格。
4. 填写表格后，点击「_Submit new issue_」。

如果您的过滤器拦截规则与现有列表不重复，它将被添加到仓库中。

## 用户规则

您也可以创建自己的拦截规则。
在[用户规则文章](/private-dns/setting-up-filtering/user-rules.md)中了解更多内容。

## 自定义阻止列表

如果您需要将某个特定的阻止列表添加到 AdGuard DNS 中，可以通过 URL 进行下载。

![添加自定义阻止列表](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_zh_cn.png)

1. 打开控制面板，点击左侧菜单中的「服务器」。
2. 选择「我的服务器」→「阻止列表」。
3. 在「自定义」部分，点击「添加自定义阻止列表」。
4. 输入阻止列表的名称、URL 以及可选的描述，然后点击「添加」。

:::note

每个订阅方案都有过滤规则总数的限制：个人版：1000 条，团队版：5000 条，企业版：10 万条。 这一限制是因为阻止列表会下载到 DNS 服务器上，允许无限制的列表大小可能导致服务器过载，进而引发性能问题。

:::

如果自定义阻止列表超过了规则上限，它**将被自动禁用**，您会看到相应的通知。 要重新启用一个超过规则上限的新增阻止列表，您需要先移除其他阻止列表，或升级到规则上限更高的方案。
