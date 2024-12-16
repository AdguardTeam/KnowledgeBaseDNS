---
title: 概览
sidebar_position: 1
---

:::info

使用 AdGuard DNS，可以设置自己的私有 DNS 服务器来解析 DNS 请求并在广告、跟踪器和恶意域名到达设备之前进行拦截。

快速链接：[试用 AdGuard DNS](https://agrd.io/download-dns)

:::

![私有 AdGuard DNS 仪表板主页](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## 通用

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

私有 AdGuard DNS 提供公共 AdGuard DNS 服务器的所有优势，包括流量加密和域名拦截列表。 它还提供额外的功能，例如灵活的定制、DNS 统计和家长控制。 这些选项都可以通过用户友好的仪表板来轻松地访问和管理。

### 为什么您需要私有 AdGuard DNS

今天，用户可以把任何东西连接到互联网上: 电视、冰箱、智能灯泡或扬声器。 但除了这些不可否认的便利之外，用户还会面临追踪器和广告。 在这种情况下，一个简单的基于浏览器的广告拦截器无法保护用户，但用 AdGuard DNS，用户可以设置流量过滤，内容和跟踪器拦截，享受一个系统范围的保护体验。

长久以来，AdGuard 产品线仅包括[公共 AdGuard DNS](../public-dns/overview.md) 和 [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)。 这些解决方案对一些用户来说很好，但对另一些用户来说，公共 AdGuard DNS 缺乏配置的灵活性，而 AdGuard Home 则缺乏简单性。 这就是私人 AdGuard DNS 发挥作用的地方。 它拥有两个优点：它提供可定制性、控制和信息统计，所有这些都可以通过一个简单已用的仪表盘实现。

### 公共 AdGuard DNS 和私有 AdGuard DNS 的区别

以下是公共 AdGuard DNS 和私有 AdGuard DNS 功能的简单比较。

| 公共 AdGuard DNS | 私人 AdGuard DNS                    |
| -------------- | --------------------------------- |
| DNS流量加密        | DNS流量加密                           |
| 自带的域名封锁清单      | 可自定义的域名封锁清单                       |
| -              | 可以 导入/导出 自定义 DNS 过滤规则             |
| -              | 请求统计（看看您的 DNS 请求到哪里去：哪些国家，哪些公司等等） |
| -              | 详细的查询日志                           |
| -              | 家长控制                              |


<!-- ## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Go to your [AdGuard DNS dashboard](https://agrd.io/download-dns) (if not logged in, log in using your AdGuard account)
1. Click *Connect device* and follow on-screen instructions

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Routers
- Gaming consoles
- Smart TVs

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Linked IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard-dns.io.

## Private AdGuard DNS features

### Statistics

In the *Statistics* tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Server settings

This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire.

### Blocklists management

The *Blocklists* feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Security settings

Even if you're aware of all the tricks online scammers use, there's always a risk you'll accidentally click a malicious link. To protect yourself from such accidents, go to the *Security settings* section and check the boxes next to the options listed there.

The *Block malicious, phishing, and scam domains* feature will block domains found in the dedicated database. And the *Block newly registered domains* will block all domains registered less than 30 days ago, which are often considered risky for your online privacy.

### Parental control

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Parental control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### User rules

For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called *User rules*. Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### DNS-over-HTTPS with authentication

DNS-over-HTTPS with authentication provides a login and password to connect to the server. This can limit access to unauthorized users and increase security.

To enable this feature, go to *Server settings* → *Devices* → *Settings* and change the DNS server to the one with authentication. Select *Deny other protocols* to disable alternative protocol usage, ensuring exclusive DNS-over-HTTPS authentication and blocking third-party access.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Advanced

Here you can set the way AdGuard DNS must respond to blocked domains:

- Default — zero IP address
- NXDOMAIN — the domain does not exist
- REFUSED — the server has refused to process the request
- Custom IP — you can manually specify an IP address

Additionally, you can adjust the *Time to live* (TTL) setting. This parameter defines the time period (in seconds) that a client device caches the response to a DNS request. A higher TTL means that even if a previously blocked domain is unblocked, it may still appear as blocked for a while. A TTL of 0 indicates that the device does not cache responses.

In the Advanced section, there are three options that can be customized:

- Block access to iCloud Private Relay. Devices that use iCloud Private Relay may ignore DNS settings. Enabling this option ensures that AdGuard DNS can effectively protect your device.
- Block Firefox canary domain. This setting prevents Firefox from automatically switching to its DoH resolver when AdGuard DNS is set as the system-wide DNS service.
- Log IP addresses. If this option is enabled, IP addresses associated with incoming DNS requests will be recorded and displayed in the Query log.

### Access settings

Here you can manage an access to your DNS server by configuring the following settings:

- Allowed clients. Specify which clients are permitted to use your DNS server. Please note that allowed clients are not counted in added access rules, only disallowed clients and domains

![Added rules](https://cdn.adtidy.org/content/kb/dns/private/rules_added.png)

- Disallowed clients. List clients that are denied to use your DNS server
- Disallowed domains. Specify domain names that will be denied access to your DNS server. Wildcards and DNS filtering rules can also be listed here

:::note

If you only want to use DNS on certain AS numbers or IP addresses, you should block everything else in the Disallowed clients field. Simply allowing only the necessary numbers and addresses in the *Allowed clients* field won’t be enough.

:::

By setting up these options, you can control who uses your DNS server and prevent potential DDoS attacks. Requests that are not allowed will not appear in your Query log, and they are free of charge.-->

### 把设备连接到 AdGuard DNS

AdGuard DNS 非常灵活，可设置在各种设备上，包括平板电脑、PC、路由器和游戏机。 本节描述如何将设备连接至 AdGuard DNS 的详细指示说明。

[把设备连接到 AdGuard DNS](/private-dns/connect-devices/connect-devices.md)

### 服务器和设置

本节解释在 AdGuard DNS 中 「服务器」 的定义以及可用的设置。 这些设置让用户自定义 AdGuard DNS 对已拦截域名的响应方式，并管理您的 DNS 服务器的访问权限。

[服务器和设置](/private-dns/server-and-settings/server-and-settings.md)

### 如何设置过滤

在本节中，我们描述一些允许用户微调 AdGuard DNS 功能的设置。 使用拦截列表、用户规则、家长控制及安全过滤功能，用户可以根据需求配置过滤规则。

[如何设置过滤](/private-dns/setting-up-filtering/blocklists.md)

### 统计数字与查询日志

统计和查询日志可让用户深入了解设备的活动。 在「*统计数据*」标签中，用户可以查看连接私人 AdGuard DNS 的设备发出的 DNS 请求汇总。 在查询日志中，可以查看每个请求的信息，还可以按状态、类型、公司、设备、时间和国家/地区对请求进行排序。

[统计数字与查询日志](/private-dns/statistics-and-log/statistics.md)
