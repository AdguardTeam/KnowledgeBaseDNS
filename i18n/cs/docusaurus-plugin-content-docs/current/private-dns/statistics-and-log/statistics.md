---
title: Statistiky
sidebar_position: 2
---

## Obecné statistiky

Na kartě _Statistiky_ se zobrazují všechny souhrnné statistiky požadavků DNS provedených zařízeními připojenými k soukromému AdGuard DNS. Zobrazují celkový počet a umístění požadavků, počet blokovaných požadavků, seznam společností, na které byly požadavky směřovány, typy požadavků a nejčastěji požadované domény.

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

### Šifrované požadavky

Zobrazuje celkový počet požadavků a procento šifrovaného a nešifrovaného provozu.

![Encrypted requests \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Nejčastější klienti

Zobrazuje počet požadavků zadaných klientům. Chcete-li zobrazit IP adresy klientů, povolte v _Nastavení serveru_ možnost _Zaznamenat IP adresy_. [More about server settings](/private-dns/server-and-settings/advanced.md) can be found in a related section.
