---
title: Statistiken
sidebar_position: 2
---

## Allgemeine Statistiken

Im Tab _Statistiken_ werden alle Statistiken über DNS-Anfragen von Geräten, die mit dem privaten AdGuard DNS verbunden sind, zusammengefasst. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Gesperrte Website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategorien

### Anfragetypen

- **Werbung**: Werbung und andere werbebezogene Anfragen, die Nutzerdaten sammeln und weitergeben, das Nutzerverhalten analysieren und gezielt Werbung schalten
- **Tracker**: Anfragen von Websites und Dritten zum Zweck der Nachverfolgung von Nutzeraktivitäten
- **Soziale Medien**: Anfragen an soziale Netzwerk-Websites
- **CDN**: Anfrage im Zusammenhang mit Content Delivery Network (CDN), einem weltweiten Netzwerk von Proxy-Servern, das die Bereitstellung von Inhalten an Endnutzer beschleunigt
- **Sonstiges**

![Anfragetypen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Top Unternehmen

Hier sehen Sie die Unternehmen, die die meisten Anfragen gesendet haben.

![Top Unternehmen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top Zielorte

Hier werden die Länder gezeigt, an die die meisten Anfragen gesendet wurden.

Neben den Ländernamen enthält die Liste zwei allgemeinere Kategorien:

- **Nicht anwendbar**: Die Antwort enthält keine IP-Adresse
- **Unbekannter Zielort**: Das Land kann nicht anhand der IP-Adresse bestimmt werden

![Top Zielorte \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top Domains

Enthält eine Liste von Domains, an die die meisten Anfragen gesendet wurden.

![Top Domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
