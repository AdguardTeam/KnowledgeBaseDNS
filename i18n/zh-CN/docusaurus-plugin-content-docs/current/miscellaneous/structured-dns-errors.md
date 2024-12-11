---
title: 结构化 DNS 错误（SDE）
sidebar_position: 5
---

AdGuard DNS v2.10 发布后，AdGuard 成为首个应用[**结构化 DNS 错误**](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/)（英语：Structured DNS Errors，简称：SDE）支持的公共 DNS 解析器，是 [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/) 的更新。 新功能允许 DNS 服务器在 DNS 响应中提供有关已拦截网站的详细信息，而不局限于通用的浏览器消息。 在本文中，我们将解释什么是**结构化 DNS 错误**，以及其工作原理。

## 什么是结构化 DNS 错误

由于 DNS 过滤，当对广告或跟踪域名的请求被拦截时，用户可能会在网页上看到空白区域，或者甚至完全没有注意到 DNS 过滤的发生。 然而，如果整个网站在 DNS 级别被拦截，用户将完全无法访问网页。 尝试访问已拦截的网站，用户可能会看到浏览器显示的通用「无法访问网站」错误。

![无法访问网站的错误](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

网页上并没有解释发生错误的原因。 这让用户感到困惑，不明白为什么有一个网站无法访问，往往导致用户假设自己的互联网连接或 DNS 解析器出现了问题。

为了澄清这一点， DNS 服务器将用户重定向到他们的网页上并提供解释。 不过，HTTPS 网站（绝大多数网站）需要单独的证书才能被访问。

![证书验证错误](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

缺少相关信息的问题有一个更简单的解决方案：[结构化 DNS 错误（SDE）](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/)。 SDE 的概念建立在 [**Extended DNS Errors**（RFC 8914）](https://datatracker.ietf.org/doc/rfc8914/)的基础之上，该规范引入在 DNS 响应中包含额外错误信息的能力。 SDE 草稿通过使用 [I-JSON](https://www.rfc-editor.org/rfc/rfc7493)（一个限制性描述文件）将信息格式化为浏览器和客户端应用程序可以轻松解析的方式，从而更进一步。

SDE 数据包含在 DNS 响应的 `EXTRA-TEXT` 字段中。 它包含：

- `j`（justification）：已拦截的原因。
- `c`（contact）：如果页面被错误屏蔽，用于查询的联系信息。
- `o`（organization）：在这种情况下负责 DNS 过滤的组织（可选）。
- `s`（suberror）：此特定的 DNS 过滤的子错误代码（可选）。

这样的系统增强了 DNS 服务与用户之间的透明度。

### 应用结构化 DNS 错误需要什么

尽管 AdGuard DNS 已实现结构化 DNS 错误的支持，目前浏览器并不原生支持解析和显示 SDE 数据。 要让用户在浏览器中看到网站被拦截的详细说明，浏览器开发者需要采用并支持 SDE 草案规范。

### AdGuard DNS SDE 的 Demo 扩展

为了展示结构化 DNS 错误的工作原理，AdGuard DNS 开发了一个演示浏览器扩展，能够展示如果浏览器支持**结构化 DNS 错误**，它们将如何工作。 如果用户尝试访问被 AdGuard DNS 拦截的网站，并且启用此扩展，您将看到一个详细的说明网页，其中包含通过 SDE 提供的信息，例如拦截原因、联系信息和负责的组织。

![说明页面](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

您可以在 [Chrome Web 商店](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) 或 [GitHub](https://github.com/AdguardTeam/dns-sde-extension/) 安装扩展。

如果您想查看在 DNS 级别的样子，可以使用 `dig` 命令并在输出中查找 `EDE`。

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
