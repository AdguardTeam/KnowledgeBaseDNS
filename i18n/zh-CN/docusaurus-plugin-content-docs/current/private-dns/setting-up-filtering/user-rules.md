---
title: 用户规则
sidebar_position: 2
---

## 这是什么，作用是什么？

用户规则与常见拦截列表使用的过滤规则相同。 用户可以手动添加规则或从预定义列表中导入它们，用这些规则来自定义网站过滤以符合自己的需求。

要让过滤更加灵活更符合您的偏好，请参阅 AdGuard DNS 过滤规则的[规则语法](/general/dns-filtering-syntax/)。

## 使用方式

设置用户规则：

1. 转到「仪表盘」。

2. 前往「服务器」。

3. 选择所需的服务器。

4. 点击「用户规则」。

5. 您将找到几种添加用户规则的选项。

   - 最简单的方式是使用生成器。 点击「添加新规则」→ 输入您要拦截或取消拦截的域名 → 点击「添加规则」。
     ![添加规则 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - 另一个方式是使用规则编辑器。 点击「打开编辑器」并根据[语法](/general/dns-filtering-syntax/)输入拦截规则。

此功能允许用户替换 DNS 查询内容[将查询重定向到其他域名](/general/dns-filtering-syntax/#dnsrewrite-modifier)。
