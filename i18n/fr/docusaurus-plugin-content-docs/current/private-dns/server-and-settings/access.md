---
title: Paramètres d'accès
sidebar_position: 3
---

En configurant les paramètres d'accès, vous pouvez protéger votre AdGuard DNS contre tout accès non autorisé. Par exemple, vous utilisez une adresse IPv4 dédiée et les attaquants utilisant des sniffers l’ont reconnue et la bombardent de requêtes. Pas de problème, il suffit d'ajouter le domaine ou l'adresse IP gênante à la liste et ils ne vous dérangeront plus !

Les requêtes bloquées ne seront pas affichées dans le Journal des requêtes et ne sont pas comptées dans la limite totale.

## Comment le mettre en place

### Clients autorisés

Ce paramètre vous permet de spécifier quels clients peuvent utiliser votre serveur DNS. Il a la plus haute priorité. Par exemple, si la même adresse IP figure à la fois sur la liste des refusés et des autorisés, elle sera quand même autorisée.

### Clients non autorisés

Ici, vous pouvez lister les clients qui ne sont pas autorisés à utiliser votre serveur DNS. Vous pouvez bloquer l'accès à tous les clients et n'utiliser que ceux sélectionnés. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Ensuite, dans le champ _Clients autorisés_, spécifiez les adresses qui peuvent accéder à votre serveur.

:::note Important

Avant d'appliquer les paramètres d'accès, assurez-vous de ne pas bloquer votre propre adresse IP. Si vous le faites, vous ne pourrez pas accéder au réseau. Si cela se produit, déconnectez-vous simplement du serveur DNS, allez dans les paramètres d'accès, et ajustez les configurations en conséquence.

:::

### Domaines interdits

Ici, vous pouvez spécifier les domaines (ainsi que les règles de filtrage DNS et de caractères génériques) qui se verront refuser l'accès à votre serveur DNS.

![Paramètres d'accès \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Pour afficher les adresses IP associées aux requêtes DNS dans le journal des requêtes, sélectionnez la case à cocher _Journaliser les adresses IP_. Pour cela, ouvrez _Paramètres du serveur_ → _Paramètres avancés_.
