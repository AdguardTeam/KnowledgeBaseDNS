---
title: Blocklists
sidebar_position: 2
---

## What blocklists are

Blocklists are sets of rules in text format that AdGuard DNS uses to filter out ads and content that could compromise your privacy. In general, a filter consists of rules with a similar focus. For example, there may be rules for website languages (such as German or Russian filters) or rules that protect against phishing sites (such as the Phishing URL Blocklist). You can easily enable or disable these rules as a group.

## Why they are useful

Blocklists are designed for flexible customization of filtering rules. For example, you may want to block advertising domains in a specific language region, or you may want to get rid of tracking or advertising domains. Select the blocklists you want and customize the filtering to your liking.

## How to activate blocklists in AdGuard DNS

To activate the blocklists:

1. Open the Dashboard.
2. Go to the _Servers_ section.
3. Select the required server.
4. Click _Blocklists_.

## Blocklists types

### Algemeen

A group of filters that includes lists for blocking ads and tracking domains.

![General blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

A group of filters consisting of regional lists to block domains in specific languages.

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Beveiliging

A group of filters containing rules for blocking fraudulent sites and phishing domains.

![Security blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Other

Blocklists with various blocking rules from third-party developers.

![Other blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Adding filters

If you would like the list of AdGuard DNS filters to be expanded, you can submit a request to add them in the relevant section of [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) on GitHub.

To submit a request:

1. Go to the link above (you may need to register on GitHub).
2. Click _New issue_.
3. Click _Blocklist request_ and fill out the form.
4. After filling out the form, click _Submit new issue_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## User rules

You can also create your own blocking rules.
Learn more in the [User rules article](/private-dns/setting-up-filtering/user-rules.md).

## Aangepaste blokkeerlijsten

Als je een specifieke blokkeerlijst aan AdGuard DNS wilt toevoegen, kun je deze downloaden via een URL.

![Aangepaste blokkeerlijst toevoegen](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Open het dashboard en klik op _Servers_ in het menu aan de linkerkant
2. Selecteer _Mijn server → Blokkeerlijsten_
3. Klik in het gedeelte _Aangepast_ op _Aangepaste blokkeerlijst toevoegen_
4. Voer de naam van de blokkeerlijst, de URL en een optionele beschrijving in en klik vervolgens op _Toevoegen_

:::note

Elk abonnement heeft een limiet voor het totale aantal filterregels: Persoonlijk — 1000, Team — 5000, Zakelijk — 100.000. Deze beperking is ingesteld omdat blokkeerlijsten naar DNS-servers worden gedownload. Het toestaan van onbeperkte blokkeerlijstgroottes zou kunnen leiden tot overbelasting van de server en mogelijk prestatieproblemen.

:::

Als een aangepaste blokkeerlijst de limiet overschrijdt, wordt deze **automatisch uitgeschakeld** en ontvang je een bijbehorende melding. Om een nieuw toegevoegde blokkeerlijst in te schakelen die de regellimiet overschrijdt, moet je ofwel andere blokkeerlijsten verwijderen of upgraden naar een abonnement met een hogere limiet.
