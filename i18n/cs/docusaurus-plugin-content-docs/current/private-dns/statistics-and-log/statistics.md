---
title: Statistiky
sidebar_position: 2
---

## Obecné statistiky

Na kartě _Statistiky_ se zobrazují všechny souhrnné statistiky požadavků DNS provedených zařízeními připojenými k soukromému AdGuard DNS. It shows the total number and location of requests, the number of blocked requests, the list of companies to which the requests were directed, the types of requests, the most frequently requested domains, as well as the top blocked categories of unwanted content and the most active blocklists.

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategorie

### Typy požadavků

- **Reklama**: reklama a další požadavky související s reklamou, které shromažďují a sdílejí uživatelská data, analyzují chování uživatelů a cílí reklamu
- **Slídiče**: požadavky z webových stránek a třetích stran za účelem sledování aktivity uživatele
- **Sociální sítě**: požadavky na webové stránky sociálních sítí
- **CDN**: požadavek připojený k síti CDN (Content Delivery Network), celosvětové síti proxy serverů, která urychluje doručování obsahu koncovým uživatelům
- **Další**

![Request types \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Nejaktivnější společnosti

Zde si můžete prohlédnout společnosti, které zaslaly nejvíce požadavků.

![Top companies \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Nejaktivnější cíle

Zde jsou uvedeny země, do kterých bylo odesláno nejvíce požadavků.

Kromě názvů zemí obsahuje seznam ještě dvě obecné kategorie:

- **Neuplatňuje se**: odpověď neobsahuje IP adresu
- **Neznámý cíl**: zemi nelze určit z IP adresy

![Top destinations \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Nejaktivnější domény

Obsahuje seznam domén, kterým bylo odesláno nejvíce požadavků.

![Top domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

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
