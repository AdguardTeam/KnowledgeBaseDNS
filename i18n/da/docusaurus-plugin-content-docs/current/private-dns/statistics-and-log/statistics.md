---
title: Statistikker
sidebar_position: 2
---

## Generelle statistikker

Fanen _Statistik_ fremviser alle opsummerede statistikker over DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard DNS. Den viser det samlede antal af og placeringen på forespørgsler, antallet af blokerede forespørgsler, listen over firmaer, hvortil forespørgslerne blev rettet, typer af forespørgsler og de mest hyppigt forespurgte domæner samt de mest blokerede kategorier af uønsket indhold og de mest aktive sortliter.

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

### Mest blokerede kategorier

Viser de 5 hyppigst blokerede indholdskategorier. Dataene kan filtreres efter tidsinterval, server og enhed. Domæner falder ind under mere end 20 kategorier, herunder _Voksenindhold_, _Gambling_, _Bankvirksomhed_, _Spil_ og _Sociale netværk_.

![Mest blokerede kategorier \*border](https://cdn.adtidy.org/content/blog/dns/top-categories-blocked_en.png)

### Krypterede forespørgsler

Viser det samlede antal forespørgsler og procentdelen af krypteret og ukrypteret trafik.

![Krypterede forespørgsler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Topklienter

Viser antallet af forespørgsler sendt til klienter. For at se klient-IP-adresser, aktivér indstillingen _Log IP-adresser_ i _Serverindstillinger_. [Mere om serverindstillinger](/private-dns/server-and-settings/advanced.md) can be found in a related section.

### Top-sortlister

Viser de 5 øverste sortlister efter antallet af blokerede forespørgsler og deres andel af alle blokeringer. Dataene kan filtreres efter tidsinterval, server og enhed. Hver blokeret forespørgsel tilskrives kun den sortliste, hvis regel blev udløst, så domæner, som optræder på flere lister, aldrig dobbelttælles.

Tilpassede sortlister vises under de navne, de er blevet givet. Er en sortliste ikke i top 5, blokerede den færre forespørgsler end de viste.

Flisen fungerer på listeniveau: Den viser ikke, hvilken regel der blev udløst, og den indeholder ikke statistikker for brugerregler eller hvidlister.

![Top-sortlister \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-25/top-blocklists.png)
