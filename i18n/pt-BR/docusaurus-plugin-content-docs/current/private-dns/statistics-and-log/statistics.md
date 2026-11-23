---
title: Estatísticas
sidebar_position: 2
---

## Estatísticas gerais

A aba _Estatísticas_ exibe todas as estatísticas resumidas das solicitações de DNS feitas por dispositivos conectados ao AdGuard DNS Privado. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Site bloqueado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categorias

### Tipos de solicitações

- **Publicidade**: solicitações publicitárias e outras relacionadas a anúncios que coletam e compartilham dados do usuário, analisam o comportamento do usuário e segmentam anúncios
- **Rastreadores**: solicitações de sites e terceiros com o objetivo de rastrear a atividade do usuário
- **Mídias sociais**: solicitações a sites de redes sociais
- **CDN**: solicitação conectada à Rede de Distribuição de Conteúdo (CDN), uma rede mundial de servidores proxy que acelera a entrega de conteúdo aos usuários finais
- **Outro**

![Tipos de solicitações \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Principais empresas

Aqui você pode ver as empresas que mais enviaram solicitações.

![Principais empresas \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Principais destinos

Isso mostra os países para os quais mais solicitações foram enviadas.

Além dos nomes dos países, a lista contém duas categorias gerais adicionais:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Principais destinos \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Principais domínios

Contém uma lista de domínios que receberam mais solicitações.

![Principais domínios \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
