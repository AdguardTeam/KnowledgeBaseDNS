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

## Custom blocklists

If you need any specific blocklist to be added to AdGuard DNS, you can download it via URL.

![Add custom blocklist](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Open the dashboard and click _Servers_ in the left-hand menu
2. Select _My server → Blocklists_
3. In the _Custom_ section, click _Add custom blocklist_
4. Enter the blocklist name, its URL, and an optional description, then click _Add_

:::note

Each subscription plan has a limit on the total number of filtering rules: Personal — 1K, Team — 5K, Enterprise — 100K. This limitation is in place because blocklists are downloaded to DNS servers, and allowing unlimited blocklist sizes could lead to server overload, potentially causing performance issues.

:::

If a custom blocklist surpasses the limit, it will be **disabled automatically**, and you’ll see a corresponding notification. To enable a newly added blocklist that exceeds the rule limit, you’ll need to either remove other blocklists or upgrade to a plan with a higher rule limit.
