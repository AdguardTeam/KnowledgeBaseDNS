---
title: Estadísticas
sidebar_position: 2
---

## Estadísticas generales

La pestaña _Estadísticas_ muestra todas las estadísticas resumidas de las peticiones DNS realizadas por los dispositivos conectados a AdGuard DNS privado. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Sitio web bloqueado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categorías

### Tipos de peticiones

- **Anuncios**: peticiones publicitarias y otras relacionadas con anuncios que recogen y comparten datos de los usuarios, analizan el comportamiento de los usuarios y dirigen los anuncios
- **Rastreadores**: peticiones de sitios web y terceros con el propósito de rastrear la actividad del usuario
- **Redes sociales**: peticiones a sitios web de redes sociales
- **CDN**: petición conectada a la Red de Entrega de Contenidos (CDN), una red mundial de servidores proxy que acelera la entrega de contenido a los usuarios finales
- **Otro**

![Tipos de peticiones \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Principales empresas

Aquí puedes ver las empresas que han enviado más peticiones.

![Principales empresas \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Principales destinos

Esto muestra los países a los que se han enviado más peticiones.

Además de los nombres de los países, la lista contiene dos categorías generales más:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Principales destinos \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Principales dominios

Contiene una lista de dominios que han recibido más peticiones.

![Principales dominios \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
