---
title: İstatistikler
sidebar_position: 2
---

## Genel istatistikler

_İstatistikler_ sekmesi, Özel AdGuard DNS'e bağlı cihazlar tarafından yapılan DNS isteklerinin tüm özet istatistiklerini görüntüler. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Engellenen site \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategoriler

### İstek türleri

- **Reklamcılık**: kullanıcı verilerini toplayan ve paylaşan, davranışı analiz eden ve reklamları hedefleyen reklamcılık ve diğer reklamla ilgili istekler
- **İzleyiciler**: sitelerden ve üçüncü taraflardan kullanıcı etkinliğini izlemek amacıyla gelen istekler
- **Sosyal ağ**: sosyal ağ sitelerine gelen istekler
- **CDN**: request connected to Content Delivery Network (CDN), a worldwide network of proxy servers that speeds the delivery of content to end users
- **Diğer**

![İstek türleri \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Başlıca şirketler

Burada en çok istek gönderen şirketleri görebilirsiniz.

![Başlıca şirketler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Başlıca istikametler

Bu, en çok talebin gönderildiği ülkeleri gösterir.

Ülke isimlerine ek olarak, liste iki genel kategori daha içermektedir:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Başlıca istikametler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Başlıca alan adları

En çok istek gönderilen alan adlarının bir listesini içerir.

![Başlıca alan adları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
