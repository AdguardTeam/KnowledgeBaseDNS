---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

Mit der Veröffentlichung von AdGuard DNS v2.10 ist AdGuard der erste öffentliche DNS-Auflösungsdienst, der Unterstützung für [_Structured DNS Errors_ (SDE)] (https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), ein Aktualisierung von [RFC 8914] (https://datatracker.ietf.org/doc/rfc8914/), bietet. Mit dieser Funktion können DNS-Server detaillierte Informationen über gesperrte Websites direkt in der DNS-Antwort bereitstellen, anstatt sich auf allgemeine Browsermeldungen zu verlassen. In diesem Artikel erklären wir, was _Structured DNS Errors_ sind und wie sie funktionieren.

## Was sind Structured DNS Errors?

Wenn eine Anfrage an eine Werbe- oder Tracking-Domain gesperrt wird, sieht man möglicherweise leere Stellen auf einer Website oder merkt nicht, dass eine DNS-Filterung stattgefunden hat. Wenn jedoch eine gesamte Website auf DNS-Ebene gesperrt ist, kann die Website nicht mehr aufgerufen werden. Beim Versuch, auf eine gesperrte Website zuzugreifen, kann es vorkommen, dass der Browser die allgemeine Fehlermeldung „Diese Website ist nicht erreichbarn“ anzeigt.

![Fehler „Diese Website ist nicht erreichbar“](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Solche Fehler erklären nicht, was passiert ist und warum. Dies hat zur Folge, dass man nicht weiß, warum eine Website nicht zugänglich ist, und oft davon ausgeht, dass die Internetverbindung oder der DNS-Auflösungsdienst gestört ist.

DNS-Server könnten durch Umleitung auf die eigene Erklärungsseite dieses Problem lösen. Für HTTPS-Websites (die die Mehrheit der Websites ausmachen) ist jedoch ein separates Zertifikat erforderlich.

![Zertifikatsfehler](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Es gibt eine einfachere Lösung: [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Das Konzept von SDE baut auf der Grundlage von [_Extended DNS Errors_ (RFC 8914)] (https://datatracker.ietf.org/doc/rfc8914/) auf, mit dem die Möglichkeit eingeführt wurde, zusätzliche Fehlerinformationen in DNS-Antworten aufzunehmen. Der SDE-Entwurf geht noch einen Schritt weiter, indem er [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (ein eingeschränktes Profil von JSON) verwendet, um die Informationen so zu formatieren, dass sie von Browsern und Client-Anwendungen leicht verarbeitet werden können.

Die SDE-Daten sind im Feld „EXTRA-TEXT“ der DNS-Antwort enthalten. Enthalten sind:

- `j` (Rechtfertigung): Grund für die Sperrung
- `c` (Kontakt): Kontaktinformationen für Rückfragen, falls die Seite versehentlich gesperrt wurde
- `o` (Organisation): Organisation, die in diesem Fall für die DNS-Filterung zuständig ist (optional)
- `s` (suberror): Der suberror-Code für diese bestimmte DNS-Filterung (optional)

Ein solches System verbessert die Transparenz zwischen DNS-Diensten und Nutzern.

### Was erforderlich ist, um Structured DNS Errors zu implementieren

Obwohl AdGuard DNS Unterstützung für Structured DNS Errors implementiert hat, unterstützen die Browser derzeit nicht die Analyse und Anzeige von SDE-Daten. Damit Nutzer detaillierte Erklärungen in ihren Browsern angezeigt bekommen, wenn eine Website gesperrt ist, müssen die Browser-Entwickler die SDE-Spezifikation übernehmen und unterstützen.

### AdGuard DNS Demo-Erweiterung für SDE

Um die Funktionsweise von Structured DNS Errors zu demonstrieren, hat AdGuard DNS eine Demo-Browsererweiterung entwickelt, die zeigt, wie _Structured DNS Errors_ funktionieren könnten, wenn die Browser sie unterstützen würden. Wenn Sie versuchen, eine Website zu besuchen, die von AdGuard DNS mit aktivierter Erweiterung gesperrt wurde, wird eine detaillierte Erklärungsseite mit den über SDE bereitgestellten Informationen angezeigt, wie z. B. der Grund für die Sperrung, Kontaktdaten und die verantwortliche Organisation.

![Erklärungsseite](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Sie können die Erweiterung aus dem [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) oder von [GitHub](https://github.com/AdguardTeam/dns-sde-extension/) installieren.

Wenn Sie sehen wollen, wie es auf DNS-Ebene aussieht, können Sie den Befehl `dig` verwenden und in der Ausgabe nach `EDE` suchen.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
