---
title: User rules
sidebar_position: 2
---

## What is it and why you need it

User rules are the same filtering rules as those used in common blocklists. Vous pouvez personnaliser le filtrage des sites Web selon vos besoins en ajoutant des règles manuellement ou en les important depuis une liste prédéfinie.

To make your filtering more flexible and better suited to your preferences, check out the [rule syntax](/general/dns-filtering-syntax/) for AdGuard DNS filtering rules.

## How to use

To set up user rules:

1. Navigate to the _Dashboard_.

2. Go to the _Servers_ section.

3. Select the required server.

4. Click the _User rules_ option.

5. You'll find several options for adding user rules.

   - The easiest way is to use the generator. To use it, click _Add new rule_ → Enter the name of the domain you want to block or unblock → Click _Add rule_
     ![Add rule \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - The advanced way is to use the rule editor. Click _Open editor_ and enter blocking rules according to [syntax](/general/dns-filtering-syntax/)

Cette fonctionnalité vous permet de [rediriger une requête vers un autre domaine en remplaçant le contenu de la requête DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
