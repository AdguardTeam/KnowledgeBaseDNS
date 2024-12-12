---
title: 已知问题
sidebar_position: 1
---

部分用户在设置 AdGuard DNS 后可能会发现它无法正常工作：用户收到信息显示其设备未连接到 AdGuard DNS，并且查询日志中不会显示来自该设备的请求。 这可能是由于浏览器或操作系统中某些隐藏的设置。 让我们来看看几个常见问题及其对应的解决方案。

:::tip

您可以在[测试页面](https://adguard.com/test.html)中检查 AdGuard DNS 的状态。

:::

## Chrome 浏览器的安全 DNS 设置

如果用户使用的是 Chrome 浏览器，并且在 AdGuard DNS 面板中看不到任何请求，这可能是因为 Chrome 浏览器使用了自己的 DNS 服务器。 以下是禁用它的方法：

1. 打开 Chrome 浏览器的设置。
1. 转至「*隐私和安全*」。
1. 选择「*安全*」。
1. 向下滚动到「*使用安全 DNS*」。
1. 禁用该功能。

![Chrome 浏览器的使用安全 DNS 功能](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

如果禁用 Chrome 浏览器自身的 DNS 设置，浏览器就会使用操作系统指定的 DNS，如果设置正确，那么就会是 AdGuard DNS。

## iCloud 私有代理（Safari、macOS 和 iOS）

如果您在设备设置中启用 iCloud 私有代理，那么 Safari 将会使用 Apple 的 DNS 地址，这将会覆盖 AdGuard DNS 设置。

以下是在 iPhone 上禁用 iCloud 私有代理的方法：

1. 打开「*设置*」并点击您的姓名。
1. 选择「*iCloud*」→「*私有代理*」。
1. 关闭私有代理。

![iOS 私有代理](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

在您的 Mac 上：

1. 打开「*系统设置*」并单击您的姓名或「*Apple ID*」。
1. 选择「*iCloud*」→「*私有代理*」。
1. 关闭私有代理。
1. 单击*「完成」*。

![macOS 私有代理](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## 高级跟踪和指纹保护（Safari，从 iOS 17 开始）

iOS 17 更新后，Safari 设置中的高级跟踪和指纹保护可能会被启用，这可能会产生类似于 iCloud 私有代理绕过 AdGuard DNS 设置的效果。

以下是禁用高级跟踪和指纹保护的方法：

1. 打开「*设置*」并向下滚动到「*Safari*」。
1. 单击「*高级*」。
1. 禁用「*高级跟踪和指纹保护*」。

![iOS 跟踪和指纹保护 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
