---
title: Statistikker
sidebar_position: 2
---

## Generelle statistikker

Fanen _Statistik_ fremviser alle opsummerede statistikker over DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Blokeret websted \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategorier

### Forespørgselstyper

- **Annoncering**: Annoncering og andre reklamerelaterede forespørgsler, som indsamler og deler brugerdata, analyserer brugeradfærd og målretter annoncer
- **Trackere**: Forespørgsler fra websteder og tredjeparter med det formål at spore brugeraktivitet
- **Sociale medier**: Forespørgsler til sociale netværkswebsteder
- **CDN**: Forespørgsel forbundet til Content Delivery Network (CDN), et verdensomspændende netværk af proxyservere, som øger hastigheden på levering af indhold til slutbrugere
- **Øvrige**

![Forespørgselstyper \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Topvirksomheder

Her fremgår de firmaer, som har sendt flest forespørgsler.

![Topvirksomheder \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Topdestinationer

Her fremgår de lande, hvortil de fleste forespørgsler er blevet sendt.

Ud over landenavnene indeholder listen yderligere to generelle kategorier:

- **Ikke anvendelig**: Svaret inkluderer ikke IP-adresse
- **Ukendt destination**: Land kan ikke bestemmes ud fra IP-adressen

![Topdestinationer \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Topdomæner

Indeholder en liste over domæner, som har sendt flest forespørgsler.

![Topdomæner \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Top blocked categories

Displays the top 5 most frequently blocked content categories. The data can be filtered by time range, server, and device. Domains fall into more than 20 categories, including _Adult content_, _Gambling_, _Banking_, _Games_, and _Social networks_.

![Top blocked categories \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Encrypted requests

Shows the total number of requests and the percentage of encrypted and unencrypted traffic.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top clients

Displays the number of requests made to clients. To view client IP addresses, enable the _Log IP addresses_ option in the _Server settings_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top blocklists

Shows the top 5 blocklists by the number of blocked requests and their share of all blocks. The data can be filtered by time range, server, and device. Each blocked request is credited only to the blocklist whose rule was triggered, so domains that appear in multiple lists are never double-counted.

Custom blocklists appear under the names you gave them. If a blocklist isn’t in the top 5, it blocked fewer requests than the ones shown.

The tile works at the list level: it doesn’t show which rule was triggered, and it doesn’t include statistics for user rules or allowlists.

![Top blocklists \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
