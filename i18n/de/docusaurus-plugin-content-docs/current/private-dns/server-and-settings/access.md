---
title: Zugriffsrechte
sidebar_position: 3
---

Durch die Konfiguration der Zugriffseinstellungen können Sie Ihren AdGuard DNS vor unbefugtem Zugriff schützen. Zum Beispiel verwenden Sie eine dedizierte IPv4-Adresse, und Angreifer, die Schnüffler verwenden, haben sie erkannt und bombardieren sie mit Anfragen. No problem, just add the pesky domain or IP address to the list and it won’t bother you anymore!

Blockierte Anfragen werden nicht im Anfragenprotokoll angezeigt und zählen nicht zum Gesamtlimit.

## So richten Sie Zugriffsrechte ein

### Zugelassene Clients

Diese Einstellung ermöglicht es Ihnen, anzugeben, welche Clients Ihren DNS-Server verwenden dürfen. Sie hat die höchste Priorität. Wenn beispielsweise dieselbe IP-Adresse sowohl in der Liste der verweigerten als auch in der Liste der zugelassenen Adressen steht, wird sie trotzdem zugelassen.

### Nicht zugelassene Clients

Hier können Sie die Clients auflisten, die Ihren DNS-Server nicht verwenden dürfen. Sie können den Zugriff für alle Clients blockieren und nur ausgewählte zulassen. Fügen Sie dazu zwei Adressen zu den nicht zugelassenen Clients hinzu: `0.0.0.0/0` und `::/0`. Geben Sie dann im Feld _Zugelassene Clients_ die Adressen an, die auf Ihren Server zugreifen dürfen.

:::note Wichtig

Before applying the access settings, make sure you’re not blocking your own IP address. If you do, you won’t be able to access the network. Falls dies passiert, trennen Sie einfach die Verbindung zum DNS-Server, öffnen Sie die Zugriffseinstellungen und passen Sie die Konfiguration entsprechend an.

:::

### Nicht zugelassene Domains

Hier können Sie die Domains (sowie Platzhalter- und DNS-Filterregeln) angeben, denen der Zugriff auf Ihren DNS-Server verweigert wird.

![Zugriffsrechte \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Um IP-Adressen, die mit DNS-Anfragen verbunden sind, im Anfragenprotokoll anzuzeigen, wählen Sie das Kontrollkästchen _IP-Adressen protokollieren_. Öffnen Sie dazu _Servereinstellungen_ → _Erweitert_.
