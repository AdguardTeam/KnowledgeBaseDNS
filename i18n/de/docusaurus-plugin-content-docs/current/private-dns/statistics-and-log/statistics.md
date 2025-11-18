---
title: Statistiken
sidebar_position: 2
---

## Allgemeine Statistiken

Im Tab _Statistiken_ werden alle Statistiken über DNS-Anfragen von Geräten, die mit dem privaten AdGuard DNS verbunden sind, zusammengefasst. Man sieht die Gesamtzahl und den Standort der Anfragen, die Zahl der gesperrten Anfragen, die Liste der Unternehmen, an die die Anfragen gerichtet waren, die Anfragetypen und die am häufigsten angefragten Domains.

![Gesperrte Website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategorien

### Anfragetypen

- **Werbung**: Werbung und andere werbebezogene Anfragen, die Nutzerdaten sammeln und weitergeben, das Nutzerverhalten analysieren und gezielt Werbung schalten
- **Tracker**: Anfragen von Websites und Dritten zum Zweck der Nachverfolgung von Nutzeraktivitäten
- **Soziale Medien**: Anfragen an soziale Netzwerk-Websites
- **CDN**: Anfrage im Zusammenhang mit Content Delivery Network (CDN), einem weltweiten Netzwerk von Proxy-Servern, das die Bereitstellung von Inhalten an Endnutzer beschleunigt
- **Sonstiges**

![Anfragetypen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Top Unternehmen

Hier sehen Sie die Unternehmen, die die meisten Anfragen gesendet haben.

![Top Unternehmen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Top Zielorte

Hier werden die Länder gezeigt, an die die meisten Anfragen gesendet wurden.

Neben den Ländernamen enthält die Liste zwei allgemeinere Kategorien:

- **Nicht anwendbar**: Die Antwort enthält keine IP-Adresse
- **Unbekannter Zielort**: Das Land kann nicht anhand der IP-Adresse bestimmt werden

![Top Zielorte \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Top Domains

Enthält eine Liste von Domains, an die die meisten Anfragen gesendet wurden.

![Top Domains \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Verschlüsselte Anfragen

Zeigt die Gesamtzahl der Anfragen und den Prozentsatz des verschlüsselten und unverschlüsselten Datenverkehrs.

![Verschlüsselte Anfragen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Top Clients

Zeigt die Anzahl der gesendeten Anfragen an Clients. Um IP-Adressen der Clients anzuzeigen, aktivieren Sie die Option _IP-Adressen protokollieren_ in den _Servereinstellungen_. [Weitere Informationen zu den Servereinstellungen](/private-dns/server-and-settings/advanced.md) finden Sie in einem entsprechenden Abschnitt.
