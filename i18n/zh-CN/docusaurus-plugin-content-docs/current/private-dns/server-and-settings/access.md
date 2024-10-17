---
title: 权限设置
sidebar_position: 3
---

通过配置权限设置，可以保护 AdGuard DNS 免受未经授权的访问。 例如，您使用的是一个专用的 IPv4 地址，攻击者通过嗅探器识别了它，并向它发送大量请求。 没问题，只需将麻烦的域名或 IP 地址添加到列表中，它将不再打扰您！

被拦截的请求不会显示在查询日志中，也不会计入总请求限制。

## 设置方式

### 允许的客户端

This setting allows you to specify which clients can use your DNS server. It has the highest priority. For example, if the same IP address is on both the denied and allowed list, it will still be allowed.

### Disallowed clients

Here you can list the clients that are not allowed to use your DNS server. You can block access to all clients and use only selected ones. To do this, add two addresses to the disallowed clients: `0.0.0.0.0/0` and `::/0`. Then, in the _Allowed clients_ field, specify the addresses that can access your server.

:::note Important

Before applying the access settings, make sure you're not blocking your own IP address. If you do, you won't be able to access the network. If that happens, just disconnect from the DNS server, go to the access settings, and adjust the configurations accordingly.

:::

### Disallowed domains

Here you can specify the domains (as well as wildcard and DNS filtering rules) that will be denied access to your DNS server.

![其他设置 \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

要在查询日志中显示与 DNS 请求相关联的 IP 地址，请选择「_记录 IP 地址_」复选框。 为此，请打开「_服务器设置_」→「_高级设置_」。
