---
title: 家长控制
sidebar_position: 5
---

「家长控制」是一组设置，可让您灵活自定义对含有敏感内容的特定网站的访问。用户可以使用此功能来限制儿童访问成人网站，定制查询，阻止使用热门服务等。

## 如何设置

您可以灵活配置服务器上的所有功能，包括家长控制功能。[在相应的文章中](private-dns/server-and-settings/server-and-settings.md)，可以了解 AdGuard DNS 中的“服务器”是什么，并学习如何创建具有不同设置的不同服务器。

然后，进入所选服务器的设置，启用所需的配置。

### 拦截成人网站

拦截含有不适当和成人内容的网站。

![已拦截的网站 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### 安全搜索

删除来自 Google、Bing、DuckDuckGo、Yandex、Pixabay、Brave 和 Ecosia 的不适当结果。

### YouTube 受限模式

删除在 YouTube 上查看和发布评论的选项，并限制与 18+ 内容的互动。

### 已阻止的服务及网站

一键限制对热门服务的访问。如果您不希望已连接的设备访问某些平台（例如 Instagram 和 YouTube），这会很有用。

![已拦截的服务 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### 按类别阻止网站

此功能允许您通过选择超过20个类别中的特定类别来限制访问特定类别的网站，包&#x62EC;_&#x6210;人内容_、_游戏_、_银行业&#x52A1;_&#x548C;_通信_。例如，如果您阻止包含有关酒精、烟草或毒品信息的网站，则所选设备将无法再打开属于这些类别的网页。

![基于类别的拦截 \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### 暂停时间表

在选定的日期和指定的时间段内暂时中止「家长控制」限制。您可以为每一天添加一个或多个暂停时段。

例如，您可以在上学日的早上 7:00 到 8:00 （上学前）以及晚上 6:00 到 8:00 暂停限制。在这些时间段之外，「家长控制」会照常生效。

要设置暂停计划：

1. 转到「服务器」→ 选择一台服务器 →「家长控制」→「暂停时间表」。
2. 点击所需日期旁的 **+** 按钮，然后在「添加暂停\*」对话框中设置时段。
3. 重复操作，可为同一天添加更多时段。
4. 要更改现有时段，请点击「编辑」。

您可以为同一天设置多个时段。同一天的时段不能重叠：如果您尝试创建重叠的时段，将会看到警告，并且无法保存计划。

![Overlapping intervals \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

选中「全天」复选框将暂停「家长控制」一整天的限制，并取代您已设置的任何时段。

暂停时段也可以跨过午夜。例如，如果您将暂停时间设置为周一晚上 10 点到周二早上 7 点，仪表盘会将其显示为两个时间段：周一 22:00–00:00 和周二 00:00–07:00。

![Pause schedule \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
