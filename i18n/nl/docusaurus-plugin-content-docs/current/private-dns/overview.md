---
title: Overzicht
sidebar_position: 1
---

:::info

With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device

Snelle link: [AdGuard DNS proberen](https://agrd.io/download-dns)

:::

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Algemeen

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube-videospeler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Private AdGuard DNS biedt alle voordelen van een openbare AdGuard DNS-server, inclusief dataverkeer versleuteling en domeinblokkeerlijsten. Het biedt ook extra functies zoals flexibele aanpassing, DNS-statistieken en ouderlijk toezicht. Al deze opties zijn eenvoudig toegankelijk en worden beheerd via een gebruiksvriendelijk dashboard.

### Waarom je privé AdGuard DNS nodig hebt

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

Ooit omvatte de AdGuard-productlijn alleen [openbare AdGuard DNS](../public-dns/overview.md) en [AdGuard Startpagina](https://github.com/AdguardTeam/AdGuardHome). These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information — all through a simple easy-to-use dashboard.

### Het verschil tussen publieke en private AdGuard DNS

Hier is een eenvoudige vergelijking van functies die beschikbaar zijn in openbare en private AdGuard DNS.

| Public AdGuard DNS               | Private AdGuard DNS                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| DNS traffic encryption           | DNS traffic encryption                                                                                 |
| Pre-determined domain blocklists | Customizable domain blocklists                                                                         |
| -                                | Custom DNS filtering rules with import/export feature                                                  |
| -                                | Verzoekstatistieken (zie waar je DNS-verzoeken naartoe gaan: naar welke landen, welke bedrijven, enz.) |
| -                                | Detailed query log                                                                                     |
| -                                | Parental control                                                                                       |


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

### How to connect devices to AdGuard DNS

AdGuard DNS is very flexible and can be set up on various devices including tablets, PCs, routers, and game consoles. This section provides detailed instructions on how to connect your device to AdGuard DNS.

[How to connect devices to AdGuard DNS](/private-dns/connect-devices/connect-devices.md)

### Server en instellingen

This section explains what a "server" is in AdGuard DNS and what settings are available. The settings allow you to customise how AdGuard DNS responds to blocked domains and manage access to your DNS server.

[Server en instellingen](/private-dns/server-and-settings/server-and-settings.md)

### Hoe een filter in te stellen

In this section we describe a number of settings that allow you to fine-tune the functionality of AdGuard DNS. Using blocklists, user rules, parental controls and security filters, you can configure filtering to suit your needs.

[Hoe een filter in te stellen](/private-dns/setting-up-filtering/blocklists.md)

### Statistieken en zoeklogboek

Statistics and Query log provide insight into the activity of your devices. The *Statistics* tab allows you to view a summary of DNS requests made by devices connected to your Private AdGuard DNS. In the Query log, you can view information about each request and also sort requests by status, type, company, device, time, and country.

[Statistieken en zoeklogboek](/private-dns/statistics-and-log/statistics.md)
