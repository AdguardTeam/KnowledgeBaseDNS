---
title: Statistiques
sidebar_position: 2
---

## Statistiques générales

L'onglet _Statistiques_ affiche toutes les statistiques résumées des requêtes DNS effectuées par des appareils connectés au DNS privé AdGuard. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Site bloqué \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Catégories

### Types de requêtes

- **Publicité** : demandes publicitaires et autres requêtes liées à la publicité qui collectent et partagent les données des utilisateurs, analysent le comportement des utilisateurs et ciblent les annonces
- **Traqueurs** : requêtes provenant de sites Web et de tiers dans le but de suivre l'activité des utilisateurs
- **Réseaux sociaux** : requêtes vers des sites de réseaux sociaux
- **CDN** : requête liée au réseau de diffusion de contenu (CDN), un réseau mondial de serveurs proxy qui accélère la diffusion de contenu aux utilisateurs finaux
- **Autre**

![Types de requêtes \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Top des sociétés

Ici, vous pouvez voir les entreprises qui ont envoyé le plus de requêtes.

![Top des sociétés \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top des destinations

Cela montre les pays vers lesquels le plus de requêtes ont été envoyées.

En plus des noms de pays, la liste contient deux autres catégories générales :

- **Non applicable** : La réponse ne contient pas d'adresse IP
- **Destination inconnue** : Le pays ne peut pas être déterminé à partir de l'adresse IP

![Top des destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top des domaines

Contient une liste de domaines qui ont reçu le plus de requêtes.

![Top des domaines \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
