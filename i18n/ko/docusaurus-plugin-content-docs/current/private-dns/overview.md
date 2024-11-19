---
title: 개요
sidebar_position: 1
---

:::info

AdGuard DNS를 사용하면 개인 DNS 서버를 설정하여 DNS 요청을 해결하고 광고, 트래커 및 악성 도메인이 기기에 도달하기 전에 차단할 수 있습니다.

Quick link: [Try AdGuard DNS](https://agrd.io/download-dns)

:::

![사설 AdGuard DNS 대시보드](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## 일반

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube 동영상 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

사설 AdGuard DNS는 트래픽 암호화 및 도메인 차단 목록을 포함하여 공용 AdGuard DNS 서버의 모든 장점을 제공합니다. It also offers additional features such as flexible customization, DNS statistics, and Parental control. 이 모든 옵션은 사용자 친화적인 대시보드를 통해 쉽게 접근하고 관리할 수 있습니다.

### 사설 AdGuard DNS가 필요한 이유는 무엇인가요?

오늘날에는 TV, 냉장고, 스마트 전구, 스피커 등을 인터넷에 연결할 수 있습니다. 그러나 부인할 수 없는 편리함과 함께 추적기와 광고에 노출됩니다. 단순한 브라우저 기반 광고 차단기는 이 경우 사용자를 보호하지 못하지만, 트래픽을 필터링하고 콘텐츠 및 추적기를 차단하도록 설정할 수 있는 AdGuard DNS는 보호할 수 있습니다.

한때 AdGuard 제품군에는 [공용 AdGuard DNS](../public-dns/overview.md)와 [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)만 포함되어 있었습니다. These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information — all through a simple easy-to-use dashboard.

### 공용과 사설 AdGuard DNS의 차이

아래에서는 공용 및 사설 AdGuard DNS에서 사용할 수 있는 기능을 비교했습니다.

| 공용 AdGuard DNS   | 사설 AdGuard DNS                            |
| ---------------- | ----------------------------------------- |
| DNS 트래픽 암호화      | DNS 트래픽 암호화                               |
| 미리 결정된 도메인 차단 목록 | 사용자 정의 가능한 도메인 차단 목록                      |
| -                | 가져오기/내보내기 기능이 있는 사용자 정의 DNS 필터링 규칙        |
| -                | 요청 통계 (DNS 요청이 어떤 국가, 어떤 회사 등으로 전달되는지 확인) |
| -                | 상세 쿼리 로그                                  |
| -                | 자녀 보호                                     |


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

### AdGuard DNS에 기기를 연결하는 방법

AdGuard DNS는 태블릿, PC, 라우터, 게임 콘솔 등 다양한 기기에서 설정할 수 있습니다. 이 섹션에서는 기기를 AdGuard DNS에 연결하는 방법을 확인할 수 있습니다.

[AdGuard DNS에 기기를 연결하는 방법](/private-dns/connect-devices/connect-devices.md)

### 서버 및 설정

이 섹션에서는 AdGuard DNS에서 '서버'가 무엇이며 어떤 설정을 사용할 수 있는지 설명합니다. The settings allow you to customise how AdGuard DNS responds to blocked domains and manage access to your DNS server.

[Server and settings](/private-dns/server-and-settings/server-and-settings.md)

### 필터링 설정하는 법

이 섹션에서는 AdGuard DNS의 기능을 미세 조정할 수 있는 여러 설정을 설명합니다. 차단 목록, 사용자 규칙, 자녀 보호 및 보안 필터를 사용하여 필요에 맞게 필터링을 구성할 수 있습니다.

[필터링 설정하는 법](/private-dns/setting-up-filtering/blocklists.md)

### 통계와 쿼리 로그

통계 및 요청 로그는 기기 활동에 대한 정보를 제공합니다. 여기 *통계* 탭에서는 사설 AdGuard DNS에 연결된 기기에 의해 생성된 DNS 요청의 요약을 볼 수 있습니다. In the Query log, you can view information about each request and also sort requests by status, type, company, device, time, and country.

[Statistics and Query log](/private-dns/statistics-and-log/statistics.md)
