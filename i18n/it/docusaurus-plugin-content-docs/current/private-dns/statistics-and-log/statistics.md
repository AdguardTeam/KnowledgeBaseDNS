---
title: Statistiche
sidebar_position: 2
---

## Statistiche generali

La scheda _Statistiche_ visualizza tutte le statistiche riepilogative delle richieste DNS effettuate dai dispositivi connessi al DNS privato di AdGuard. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Sito bloccato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categorie

### Tipi di richieste

- **Pubblicità**: richieste pubblicitarie e altre richieste correlate agli annunci che raccolgono e condividono i dati degli utenti, analizzano il comportamento degli utenti e mirano a pubblicità
- **Tracker**: richieste da siti web e terze parti per la raccolta dell'attività degli utenti
- **Social media**: richieste a siti web di social network
- **CDN**: richiesta connessa a Content Delivery Network (CDN), una rete globale di server proxy che accelera la consegna dei contenuti agli utenti finali
- **Altro**

![Tipi di richieste \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Aziende maggiori

Qui puoi vedere le aziende che hanno inviato il maggior numero di richieste.

![Aziende principali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Destinazioni principali

Questo mostra i paesi a cui sono state inviate il maggior numero di richieste.

Oltre ai nomi dei paesi, l'elenco contiene due ulteriori categorie generali:

- **Non applicabile**: La risposta non include l'indirizzo IP
- **Destinazione sconosciuta**: Il paese non può essere determinato dall'indirizzo IP

![Destinazioni principali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Domini principali

Contiene un elenco di domini che hanno ricevuto il maggior numero di richieste.

![Domini principali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
