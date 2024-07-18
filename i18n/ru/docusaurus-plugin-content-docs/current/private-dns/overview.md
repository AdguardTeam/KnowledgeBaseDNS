---
title: Обзор
sidebar_position: 1
---

:::info

С помощью AdGuard DNS вы можете настроить свои DNS-серверы для разрешения DNS-запросов и блокировки рекламы, трекеров и вредоносных доменов до того, как они попадут на ваше устройство

Quick link: [Try AdGuard DNS](https://agrd.io/download-dns)

:::

![Панель управления приватного AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Общее

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="Видеоплеер YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Private AdGuard DNS offers all the advantages of a public AdGuard DNS server, including traffic encryption and domain blocklists. It also offers additional features such as flexible customization, DNS statistics, and Parental control. All these options are easily accessible and managed via a user-friendly dashboard.

### Why you need private AdGuard DNS

Сегодня к интернету можно подключить всё, что угодно: телевизоры, холодильники, умные лампочки и колонки. Но вместе с неоспоримыми удобствами в вашу жизнь, а точнее в ваши устройства, приходят трекеры и реклама. Простой браузерный блокировщик в этом случае вас не защитит, зато AdGuard DNS, который может опционально обеспечивать фильтрацию трафика и блокировку контента, поможет.

At one time, the AdGuard product line included only [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Кому-то эти решения подошли, но для многих в публичном AdGuard DNS не хватило гибкости настроек, а в AdGuard Home — простоты. Можно сказать, что на стыке этих двух продуктов и появился приватный AdGuard DNS. It has the best of both worlds: it offers customizability, control and information — all through a simple easy-to-use dashboard.

### The difference between public and private AdGuard DNS

Вот простое сравнение функций, доступных в публичном и приватном AdGuard DNS.

| Публичный AdGuard DNS                            | Приватный AdGuard DNS                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Шифрование DNS-трафика                           | Шифрование DNS-трафика                                                                                       |
| Предустановленные списки заблокированных доменов | Настраиваемые списки блокировки доменов                                                                      |
| -                                                | Пользовательские правила DNS-фильтрации с возможностью импорта/экспорта                                      |
| -                                                | Статистика запросов (посмотрите, куда направляются ваши DNS-запросы: в какие страны, какие компании и т. д.) |
| -                                                | Подробный журнал запросов                                                                                    |
| -                                                | Родительский контроль                                                                                        |

## Как настроить приватный AdGuard DNS

### Для устройств, поддерживающих DoH, DoT и DoQ

1. Перейдите на вашу [панель управления AdGuard DNS](https://agrd.io/download-dns) (если вы не авторизовались, войдите, используя свою учётную запись AdGuard)
1. Нажмите *Подключить устройство* и следуйте инструкциям на экране

:::note Поддерживаемые платформы:

- Android
- iOS
- Windows
- Mac
- Linux
- Роутеры
- Игровые консоли
- Умные телевизоры

:::

У каждого устройствa, которое вы добавляете на панель управления AdGuard DNS, есть свой уникальный адрес. Его можно использовать, если устройство поддерживает современные зашифрованные протоколы DNS (DoH, DoT и DoQ).

### Для устройств, не поддерживающих DoH, DoT и DoQ

Если устройство не поддерживает зашифрованный DNS и приходится использовать обычный DNS, есть ещё два способ разрешить AdGuard DNS распознавать устройство — использовать выделенные IP-адреса или привязать IP-адрес устройства.

:::note

Используйте обычные DNS-адреса только в том случае, если у вас нет других вариантов: это снижает безопасность DNS-запросов. Если вы решили использовать незашифрованный DNS, мы рекомендуем вам выбрать выделенные IP-адреса.

:::

#### Выделенные IP-адреса

Для каждого устройства, которое вы подключаете к AdGuard DNS, вам будет предложено два выделенных IPv6-адреса, которые вы можете ввести в настройках устройства. Использование обоих адресов IPv6 не является обязательным, но часто устройства могут запрашивать ввод двух адресов IPv6.

Когда вы подключаетесь к ним, AdGuard DNS сможет определить, какое именно устройство отправляет DNS-запросы, и отобразить статистику по нему. И вы сможете настроить правила DNS специально для этого устройства.

К сожалению, не все поставщики услуг предлагают поддержку IPv6 и не все устройства позволяют настраивать адреса IPv6. If this is your case, you may have to rely on the Linked IP method.

#### Привязанный IP-адрес

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

Единственное требование к привязке IP-адреса заключается в том, что **это должен быть резидентный IP-адрес**.

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

### Родительский контроль

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Родительский контроль](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

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

By setting up these options, you can control who uses your DNS server and prevent potential DDoS attacks. Requests that are not allowed will not appear in your Query log, and they are free of charge.
