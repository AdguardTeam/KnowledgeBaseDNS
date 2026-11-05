---
title: Statistics
sidebar_position: 2
---

## General statistics

The *Statistics* tab displays all summary statistics of DNS requests made by devices connected to the Private AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Blocked website *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categories

### Requests types

- **Advertising**: advertising and other ad-related requests that collect and share user data, analyze user behavior, and target ads
- **Trackers**: requests from websites and third parties for the purpose of tracking user activity
- **Social media**: requests to social network websites
- **CDN**: request connected to Content Delivery Network (CDN), a worldwide network of proxy servers that speeds the delivery of content to end users
- **Other**

![Request types *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Top companies

Here you can see the companies that have sent the most requests.

![Top companies *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top destinations

This shows the countries to which the most requests have been sent.

In addition to the country names, the list contains two more general categories:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Top destinations *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top domains

Contains a list of domains that have been sent the most requests.

![Top domains *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Top blocked categories

Displays the top 5 most frequently blocked content categories over the selected time range. Domains are categorized into over 20 groups, including adult content, gambling, banking, games, and social networks.

![Top blocked categories *border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the *Log IP addresses* option in the *Server settings*. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blocklists

Shows the top 5 blocklists by the number of blocked requests and their share of all blocks. The data can be filtered by time range, server, and device. Each blocked request is credited only to the blocklist whose rule was triggered, so domains that appear in multiple lists are never double-counted.

Custom blocklists appear under the names you gave them. If a blocklist isn't in the top 5, it blocked fewer requests than the ones shown.

The tile works at the list level: it doesn't show which rule was triggered, and it doesn't include statistics for user rules or allowlists.

![Top blocklists *border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
