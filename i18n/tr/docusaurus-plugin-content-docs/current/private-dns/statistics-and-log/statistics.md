---
title: İstatistikler
sidebar_position: 2
---

## Genel istatistikler

The _Statistics_ tab displays all summary statistics of DNS requests made by devices connected to the Private AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, and the most frequently requested domains.

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategoriler

### Requests types

- **Advertising**: advertising and other ad-related requests that collect and share user data, analyze user behavior, and target ads
- **Trackers**: requests from websites and third parties for the purpose of tracking user activity
- **Social media**: requests to social network websites
- **CDN**: request connected to Content Delivery Network (CDN), a worldwide network of proxy servers that speeds the delivery of content to end users
- **Other**

![Request types \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Başlıca şirketler

Here you can see the companies that have sent the most requests.

![Top companies \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top destinations

This shows the countries to which the most requests have been sent.

In addition to the country names, the list contains two more general categories:

- **Not applicable**: Response doesn't include IP address
- **Unknown destination**: Country can't be determined from IP address

![Top destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Başlıca alan adları

Contains a list of domains that have been sent the most requests.

![Top domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Şifrelenmiş istekler

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Başlıca istemciler

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.
