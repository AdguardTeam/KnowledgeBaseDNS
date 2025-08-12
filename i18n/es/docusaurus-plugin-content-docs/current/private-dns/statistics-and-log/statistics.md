---
title: Estadísticas
sidebar_position: 2
---

## Estadísticas generales

La pestaña _Estadísticas_ muestra todas las estadísticas resumidas de las peticiones DNS realizadas por los dispositivos conectados a AdGuard DNS privado. Muestra el número total y la ubicación de las peticiones, el número de peticiones bloqueadas, la lista de empresas a las que se enviaron las peticiones, los tipos de peticiones y los dominios más solicitados.

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

### Peticiones cifradas

Muestra el número total de peticiones y el porcentaje de tráfico cifrado y no cifrado.

![Peticiones cifradas \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Principales clientes

Muestra el número de peticiones realizadas a los clientes. Para ver las direcciones IP de los clientes, habilita la opción _Registrar direcciones IP_ en la configuración del _Servidor_. [Más sobre la configuración del servidor](/private-dns/server-and-settings/advanced.md) se puede encontrar en una sección relacionada.
