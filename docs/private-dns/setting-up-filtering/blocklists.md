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
1. Go to the *Servers* section.
1. Select the required server.
1. Click *Blocklists*.

## Blocklists types

### General

A group of filters that includes lists for blocking ads and tracking domains.

![General blocklists *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

A group of filters consisting of regional lists to block domains in specific languages.

![Regional blocklists *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Security

A group of filters containing rules for blocking fraudulent sites and phishing domains.

![Security blocklists *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Other

Blocklists with various blocking rules from third-party developers.

![Other blocklists *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Custom blocklists

If you need any specific blocklist to be added to AdGuard DNS, you can download it via URL.

![Add custom blocklist]()

1. Open the dashboard and click *Servers* in the left-hand menu
1. Select *My server → Blocklists*
1. In the *Custom* section, click *Add custom blocklist*
1. Enter the blocklist name, its URL, and an optional description, then click *Add*

:::note 

Each subscription plan has a limit on the total number of filtering rules. This limitation is in place because blocklists are downloaded to DNS servers, and allowing unlimited blocklist sizes could lead to server overload, potentially causing performance issues.

:::

If a custom blocklist surpasses the limit, it will be **disabled automatically**, and you’ll see a corresponding notification. To enable a newly added blocklist that exceeds the rule limit, you’ll need to either remove other blocklists or upgrade to a plan with a higher rule limit.

## Adding filters

If you would like the list of AdGuard DNS filters to be expanded, you can submit a request to add them in the relevant section of [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) on GitHub.

To submit a request:

1. Go to the link above (you may need to register on GitHub).
1. Click *New issue*.
1. Click *Blocklist request* and fill out the form.
1. After filling out the form, click *Submit new issue*.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## User rules

You can also create your own blocking rules.
Learn more in the [User rules article](/private-dns/setting-up-filtering/user-rules.md).
