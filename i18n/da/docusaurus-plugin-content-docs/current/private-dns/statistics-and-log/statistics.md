---
title: Statistikker
sidebar_position: 2
---

## Generelle statistikker

Fanen _Statistik_ fremviser alle opsummerede statistikker over DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard DNS. Den viser det samlede antal og placeringen på forespørgsler, antallet af blokerede forespørgsler, listen over firmaer, hvortil forespørgslerne blev rettet, typer af forespørgsler og de mest hyppigt forespurgte domæner.

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

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Topdestinationer \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Topdomæner

Indeholder en liste over domæner, som har sendt flest forespørgsler.

![Topdomæner \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Krypterede forespørgsler

Viser det samlede antal forespørgsler og procentdelen af krypteret og ukrypteret trafik.

![Krypterede forespørgsler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Topklienter

Viser antallet af forespørgsler, som er sendt til klienter. For at se klient IP-adresser, aktivér indstillingen _Log IP-adresser_ i _Serverindstillinger_. [Mere om serverindstillinger](/private-dns/server-and-settings/advanced.md) can be found in a related section.
