---
title: Statistics
sidebar_position: 2
---

## General statistics

The _Statistics_ tab displays all summary statistics of DNS requests made by devices connected to the Private AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categories

### Requests types

- **Advertising**: advertising and other ad-related requests that collect and share user data, analyze user behavior, and target ads
- **Trackers**: requests from websites and third parties for the purpose of tracking user activity
- **Social media**: requests to social network websites
- **CDN**: request connected to Content Delivery Network (CDN), a worldwide network of proxy servers that speeds the delivery of content to end users
- **Other**

![Request types \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Top companies

Here you can see the companies that have sent the most requests.

![Top companies \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top destinations

This shows the countries to which the most requests have been sent.

In addition to the country names, the list contains two more general categories:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Top destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top domains

Contains a list of domains that have been sent the most requests.

![Top domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Meest geblokkeerde categorieën

Weergave van de top 5 van de meest geblokkeerde inhoudscategorieën. De gegevens kunnen worden gefilterd op tijdsperiode, server en apparaat. Domeinen vallen onder meer dan 20 categorieën, waaronder _Inhoud voor volwassenen_, _Gokken_, _Bankieren_, _Games_ en _Sociale netwerken_.

![Meest geblokkeerde categorieën \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blokkeerlijsten

Geeft de top 5 blokkeerlijsten weer op basis van het aantal geblokkeerde verzoeken en hun aandeel in alle blokkeringen. De gegevens kunnen worden gefilterd op tijdsperiode, server en apparaat. Elk geblokkeerd verzoek wordt alleen toegeschreven aan de blokkeerlijst waarvan de regel werd geactiveerd, zodat domeinen die in meerdere lijsten voorkomen nooit dubbel worden geteld.

Aangepaste blokkeerlijsten worden weergegeven onder de namen die je eraan hebt gegeven. Als een blokkeerlijst niet in de top 5 staat, heeft deze minder verzoeken geblokkeerd dan degene die worden weergegeven.

De tegel werkt op lijstniveau: er wordt niet weergegeven welke regel is geactiveerd, en er worden geen statistieken voor gebruikersregels of toelatingslijsten getoond.

![Topblokkeerlijsten \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
