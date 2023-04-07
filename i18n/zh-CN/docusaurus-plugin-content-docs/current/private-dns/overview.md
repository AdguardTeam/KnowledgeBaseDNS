---
title: 概览
sidebar_position: 1
---

# 私人 AdGuard DNS

![私人AdGuard DNS仪表盘主](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## 什么是私人 AdGuard DNS?

私人 AdGuard DNS是一种DNS服务器，除了有公共DNS服务器的好处（如流量加密和域名阻止列表）外，还提供灵活的定制、DNS统计和家长控制等功能，并通过一个方便的仪表板轻松管理。

## Why you need Private AdGuard DNS

今天，您可以将任何东西连接到互联网：电视、冰箱、智能电灯或扬声器。 但伴随着不可否认的便利，您会被追踪和被迫看到广告。 在这种情况下，一个简单的基于浏览器的广告拦截器不会保护您，但您可以设置AdGuard DNS来过滤流量、阻止广告和跟踪器， AdGuard DNS 具有系统范围的效果。

我们已经有 [公共 AdGuard DNS](../public-dns/overview.md) 和 [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)。 这些解决方案对一些用户来说效果不错，但对其他用户来说，公共的AdGuard DNS缺乏配置的灵活性，而AdGuard Home则缺乏简单性。 这就是私人AdGuard DNS发挥作用的地方。 它具有两方面的优点：它提供可定制、可控制和信息统计--所有这些都通过一个简单易用的仪表盘实现。

## 私人和公共 AdGuard DNS的区别

以下是公共 AdGuard DNS 和私人 AdGuard DNS 可用功能的简单比较。

| 公共 AdGuard DNS | 私人 AdGuard DNS                    |
| -------------- | --------------------------------- |
| DNS流量加密        | DNS流量加密                           |
| 自带的域名封锁清单      | 可自定义的域名封锁清单                       |
| -              | 可以 导入/导出 自定义 DNS 过滤规则             |
| -              | 请求统计（看看您的 DNS 请求到哪里去：哪些国家，哪些公司等等） |
| -              | 详细的查询日志                           |
| -              | 家长控制                              |

## 如何配置私人 AdGuard DNS

1. 前往 [AdGuard DNS 仪表盘](https://adguard-dns.io/dashboard/)（如果没有登录，请使用您的 AdGuard 账号登录）
2. 单击“连接设备”并按照屏幕上的说明进行操作。

> Supported platforms: - Android - iOS - Windows - Mac - Linux - Routers - Gaming consoles

## 私人 AdGuard DNS的特点

### 封锁清单管理

通过 "拦截列表"功能，你可以设置你想拦截的域名和放行的域名。 从各种各样的阻止列表中进行选择以用于不同的目的。

![私人AdGuard DNS仪表盘 拦截列表](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### 用户规则

当预装的有数千条规则的*拦截列表*还不够时，我们有一个方便的功能，称为“用户规则”。 在这里，您可以手动添加自定义规则以 拦截/放行 某个域名或导入自定义规则列表（查看 [DNS 过滤规则语法](../general/dns-filtering-syntax.md)）。 您可以导出列表。

![私人 AdGuard DNS 仪表盘 自定义规则](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### 统计

在 "统计 "选项中，您可以查看到连接私人AdGuard DNS的设备所做的DNS查询的所有汇总统计信息。 它显示了请求的总数和地理位置、被阻止的请求数、请求被发送到的公司列表、请求类型和请求最多的域名。

![私人 AdGuard DNS 仪表盘 统计信息](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### 流量终点

该功能显示你的设备发送的DNS请求的去向。 除了查看请求目的地地图之外，您还可以按日期、设备和国家/地区过滤信息。

![私人AdGuard DNS仪表盘 流量](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### 公司

此选项允许您快速检查哪些公司发送的请求最多，以及哪些公司的请求被阻止最多。

![私人AdGuard DNS仪表盘 公司](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### 查询日志

这是一个详细的日志，您可以在其中查看每一个请求的信息，还可以按状态、类型、公司、设备、时间、国家/地区对请求进行排序。

![私人AdGuard DNS仪表盘 查询日志](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### 家长控制

为了保护您的孩子免受您认为不合适的在线内容的影响，请设置并激活 *家长控制*选项。 除了 "成人内容 "拦截和安全搜索等选项外，我们还增加了手动指定拦截域名的功能，并为 *家长控制* 设置了相应的工作时间表

![私人 AdGuard DNS 仪表盘 家长控制](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

> 如果您还没有私人 AdGuard DNS，您可以在[官网](https://adguard-dns.io/)上获得它。
