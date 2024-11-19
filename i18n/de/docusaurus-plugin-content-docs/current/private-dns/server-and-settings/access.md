---
title: Zugriffsrechte
sidebar_position: 3
---

Durch die Konfiguration der Zugriffseinstellungen können Sie Ihren AdGuard DNS vor unbefugtem Zugriff schützen. Zum Beispiel verwenden Sie eine dedizierte IPv4-Adresse, und Angreifer, die Schnüffler verwenden, haben sie erkannt und bombardieren sie mit Anfragen. Kein Problem, fügen Sie einfach die lästige Domain oder IP-Adresse der Liste hinzu und sie wird Sie nicht mehr stören!

Blockierte Anfragen werden nicht im Anfragenprotokoll angezeigt und zählen nicht zum Gesamtlimit.

## So richten Sie Zugriffsrechte ein

### Zugelassene Clients

Diese Einstellung ermöglicht es Ihnen, anzugeben, welche Clients Ihren DNS-Server verwenden dürfen. Sie hat die höchste Priorität. Wenn beispielsweise dieselbe IP-Adresse sowohl in der Liste der verweigerten als auch in der Liste der zugelassenen Adressen steht, wird sie trotzdem zugelassen.

### Nicht zugelassene Clients

Hier können Sie die Clients auflisten, die Ihren DNS-Server nicht verwenden dürfen. Sie können den Zugriff für alle Clients blockieren und nur ausgewählte zulassen. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Geben Sie dann im Feld _Zugelassene Clients_ die Adressen an, die auf Ihren Server zugreifen dürfen.

:::note Wichtig

Bevor Sie die Zugriffseinstellungen übernehmen, stellen Sie sicher, dass Sie Ihre eigene IP-Adresse nicht blockieren. In diesem Fall können Sie nicht auf das Netzwerk zugreifen. Falls dies passiert, trennen Sie einfach die Verbindung zum DNS-Server, öffnen Sie die Zugriffseinstellungen und passen Sie die Konfiguration entsprechend an.

:::

### Nicht zugelassene Domains

Hier können Sie die Domains (sowie Platzhalter- und DNS-Filterregeln) angeben, denen der Zugriff auf Ihren DNS-Server verweigert wird.

![Zugriffsrechte \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Um IP-Adressen, die mit DNS-Anfragen verbunden sind, im Anfragenprotokoll anzuzeigen, wählen Sie das Kontrollkästchen _IP-Adressen protokollieren_. Öffnen Sie dazu _Servereinstellungen_ → _Erweitert_.
