---
title: Статистика
sidebar_position: 2
---

## Общая статистика

На вкладке _Статистика_ отображается вся сводная статистика по DNS-запросам, сделанным устройствами, подключёнными к Личному AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Заблокированный сайт \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Категории

### Типы запросов

- **Реклама**: рекламные и другие связанные с рекламой запросы, которые собирают и передают данные пользователей, анализируют их поведение, и таргетируют рекламу
- **Трекеры**: запросы с сайтов и от третьих сторон с целью отслеживания активности пользователей
- **Соцсети**: запросы к сайтам социальных сетей
- **CDN**: запросы, связанные с Content Delivery Network (CDN), глобальной сетью прокси-серверов, ускоряющей доставку контента конечным пользователям
- **Прочее**

![Типы запросов \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Топ компаний

Здесь можно увидеть компании, отправившие наибольшее количество запросов.

![Топ компаний \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Топ направлений

Здесь показаны страны, в которые отправлено больше всего запросов.

В дополнение к названиям стран список содержит две более общие категории:

- **Не применимо**: Ответ не содержит IP-адреса
- **Неизвестное направление**: Страна не может быть определена по IP-адресу

![Топ направлений \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Топ доменов

Содержит список доменов, к которым было отправлено наибольшее количество запросов.

![Топ доменов \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
