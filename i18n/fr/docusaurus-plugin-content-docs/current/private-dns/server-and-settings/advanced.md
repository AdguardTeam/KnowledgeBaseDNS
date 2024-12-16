---
title: Paramètres avancés
sidebar_position: 2
---

La section des paramètres avancés est destinée à l'utilisateur plus expérimenté et inclut les paramètres suivants.

## Répondre aux domaines bloqués

Ici, vous pouvez sélectionner la réponse DNS pour la requête bloquée :

- **Default** : Répondre avec adresse IP zéro (0.0.0.0 pour A ; :: pour AAAA) lorsque bloqué par la règle de style Adblock ; répondre avec l’adresse IP spécifiée dans la règle lorsque bloquée par la règle du style /etc/hosts
- **REFUSED** : Répondre avec le code REFUSED
- **NXDOMAIN** : Répondre avec le code NXDOMAIN
- **IP personnalisée** : Répondre avec une adresse IP définie manuellement

## Durée de vie (TTL)

La durée de vie (TTL) définit la période (en secondes) pendant laquelle un dispositif client peut mettre en cache la réponse à une requête DNS et la récupérer dans son cache sans redemander au serveur DNS. Si la valeur TTL est élevée, les requêtes récemment débloquées peuvent sembler encore bloquées pendant un certain temps. Si le TTL est 0, le dispositif ne met pas les réponses en cache.

## Bloquer l'accès au relais privé iCloud

Les appareils qui utilisent le relais privé iCloud peuvent ignorer leurs paramètres DNS, donc AdGuard DNS ne peut pas les protéger.

## Bloquer le domaine Firefox Canary

Empêche Firefox de basculer vers le résolveur DoH à partir de ses paramètres lorsque AdGuard DNS est configuré à l'échelle du système.

## Enregistrer les adresses IP

Par défaut, AdGuard DNS ne journalise pas les adresses IP des requêtes DNS entrantes. Si vous activez ce paramètre, les adresses IP seront journalisées et affichées dans le journal des requêtes.
