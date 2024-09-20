---
title: Statistics
sidebar_position: 2
---

## General statistics

The *Statistics* tab displays all summary statistics of DNS requests made by devices connected to the Private AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, and the most frequently requested domains.

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

    - Not applicable (Response doesn't include IP address)
    - Unknown destination (Can't determine country by IP address)

![Top destinations *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top domains

Contains a list of domains that have been sent the most requests.

![Top domains *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the *Log IP addresses* option in the *Server settings*. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.
