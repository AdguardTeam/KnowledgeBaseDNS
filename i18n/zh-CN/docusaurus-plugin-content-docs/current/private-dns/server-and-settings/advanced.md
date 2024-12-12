---
title: 高级设置
sidebar_position: 2
---

高级设置部分是为更有经验的用户准备的，包含以下设置。

## 对阻止域名的响应

用户可以选择已拦截请求的 DNS 响应：

- **默认**：被 Adblock 规则拦截时反应为零 IP 地址（A记录：0.0.0.0；AAAA记录：::）；被 /etc/hosts 规则拦截时反应为规则中指定 IP 地址。
- **REFUSED**：以 REFUSED 码响应请求。
- **NXDOMAIN**：以 NXDOMAIN 码响应。
- **自定义 IP**：以手动设置的 IP 地址响应。

## 生存时间（TTL）

生存时间 (TTL) 为客户端装置设定时间周期（以秒为单位）以缓存 DNS 请求的响应，并从其缓存中检索，而无需重新请求 DNS 服务器。 如果 TTL 值较高，最近取消拦截的请求可能在一段时间内仍会显示为已拦截。 如果 TTL 为 0，设备不会缓存响应。

## 阻止访问 iCloud 专用代理

使用 iCloud 专用代理的设备可能会忽略其 DNS 设置，因此 AdGuard DNS 无法保护它们。

## 阻止 Firefox Canary 域名

当 AdGuard DNS 在系统范围内配置时，防止火狐浏览器从其设置中切换到 DNS-over-HTTPS 解析器。

## 记录 IP 地址

默认情况下，AdGuard DNS 不记录传入 DNS 请求的 IP 地址。 如果启用此设置，IP 地址将被记录并显示在查询日志中。
