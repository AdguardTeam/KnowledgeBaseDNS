---
title: Blocklisten
sidebar_position: 2
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

Wenn die Sperrregeln Ihres Filters nicht mit den bestehenden Listen übereinstimmen, wird er in das Repository aufgenommen.

## Benutzerregeln

Sie können auch Ihre eigenen Sperrregeln erstellen.
Weitere Informationen finden Sie im [Artikel zu Benutzerregeln](/private-dns/setting-up-filtering/user-rules.md).

## Benutzerdefinierte Blocklisten

Wenn Sie eine bestimmte Blockliste zu AdGuard DNS hinzufügen möchten, können Sie diese über eine URL herunterladen.

![Benutzerdefinierte Blockliste hinzufügen](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_de.png)

1. Öffnen Sie die Übersicht und klicken Sie im Menü auf der linken Seite auf _Server_
2. Wählen Sie _Mein Server → Blocklisten_
3. Klicken Sie im Abschnitt _Benutzerdefinierte_ auf _Blockliste hinzufügen_
4. Geben Sie den Namen der Blockliste, deren URL und eine optionale Beschreibung ein und klicken Sie dann auf _Hinzufügen_

:::note

Jedes Abonnement hat eine Begrenzung hinsichtlich der Gesamtzahl der Filterregeln: Einzellizenz – 1.000, Team – 5.000, Enterprise – 100.000. Diese Beschränkung besteht, weil Blocklisten auf DNS-Server heruntergeladen werden und eine unbegrenzte Größe der Blocklisten zu einer Überlastung der Server führen könnte, was möglicherweise Leistungsprobleme verursachen könnte.

:::

Wenn eine benutzerdefinierte Blockliste das Limit überschreitet, wird sie **automatisch deaktiviert** und Sie erhalten eine entsprechende Benachrichtigung. Um eine neu hinzugefügte Blockliste zu aktivieren, die die Anzahl der Regeln überschreitet, müssen Sie entweder andere Blocklisten entfernen oder einen Wechsel auf ein Abonnement mit einer höheren Anzahl an Regeln vornehmen.
