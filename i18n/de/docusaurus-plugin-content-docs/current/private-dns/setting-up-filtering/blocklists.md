---
title: Blocklisten
sidebar_position: 1
---

## Was Blocklisten sind

Blocklisten sind Filter mit Regeln im Textformat, die AdGuard DNS verwendet, um Werbung und Inhalte herauszufiltern, die Ihre Privatsphäre gefährden könnten. Im Allgemeinen besteht ein Filter aus Regeln mit ähnlichem Fokus. Zum Beispiel kann Filter Regeln für Website-Sprachen (wie deutsche oder russische Filter) oder Regeln zum Schutz vor Phishing (wie die Blockliste für Phishing-URLs) geben. Sie können diese Regeln problemlos als Gruppe aktivieren oder deaktivieren.

## Warum sie nützlich sind

Blocklisten sind für die flexible Anpassung von Filterregeln konzipiert. Zum Beispiel möchten Sie vielleicht Werbedomains in einer bestimmten Sprachregion blockieren oder Tracking- oder Werbedomains loswerden. Wählen Sie die gewünschten Blocklisten aus und passen Sie die Filterung nach Ihren Wünschen an.

## So aktivieren Sie Blocklisten in AdGuard DNS

Um die Blocklisten zu aktivieren:

1. Öffnen Sie Übersicht.
2. Gehen Sie zum Abschnitt _Server_.
3. Wählen Sie den erforderlichen Server aus.
4. Klicken Sie auf _Blocklisten_.

## Arten von Blocklisten

### Allgemein

Eine Gruppe von Filtern, die Listen zum Blockieren von Werbung und Tracker-Domains enthält.

![Allgemeine Blocklisten \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

Eine Gruppe von Filtern, die regionale Listen zum Blockieren von Domains in bestimmten Sprachen enthält.

![Regionale Blocklisten \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Sicherheit

Eine Gruppe von Filtern mit Regeln zum Blockieren betrügerischer Websites und Phishing-Domains.

![Sicherheitsblocklisten \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Sonstiges

Blocklisten mit verschiedenen Regeln von Drittentwicklern.

![Sonstige Blocklisten \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Filter hinzufügen

Wenn Sie möchten, dass die Liste der AdGuard DNS-Filter erweitert wird, können Sie eine Anfrage zum Hinzufügen im entsprechenden Abschnitt des [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) auf GitHub senden.

Um eine Anfrage zu senden:

1. Gehen Sie zu dem oben genannten Link (möglicherweise müssen Sie sich bei GitHub registrieren).
2. Klicken Sie auf _New issue_.
3. Klicken Sie auf _Blocklist request_ und füllen Sie das Formular aus.
4. Nachdem Sie das Formular ausgefüllt haben, klicken Sie auf _Submit new issue_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Benutzerregeln

Sie können auch Ihre eigenen Sperrregeln erstellen.
Weitere Informationen finden Sie im [Artikel zu Benutzerregeln](/private-dns/setting-up-filtering/user-rules.md).
