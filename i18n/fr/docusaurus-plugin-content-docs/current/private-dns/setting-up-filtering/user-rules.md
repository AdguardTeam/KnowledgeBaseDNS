---
title: Règles utilisateur
sidebar_position: 3
---

## Qu'est-ce que c'est et pourquoi en avez-vous besoin

Les règles utilisateur sont les mêmes que les règles de filtrage utilisées dans les listes de blocage communes. Vous pouvez personnaliser le filtrage des sites Web selon vos besoins en ajoutant des règles manuellement ou en les important depuis une liste prédéfinie.

Pour rendre votre filtrage plus flexible et mieux adapté à vos préférences, consultez la [syntaxe des règles](/general/dns-filtering-syntax/) pour les règles de filtrage AdGuard DNS.

## Comment utiliser

Pour configurer les règles utilisateur :

1. Accédez au _tableau de bord_.

2. Allez à la section _Serveurs_.

3. Sélectionnez le serveur requis.

4. Cliquez sur l'option _Règles utilisateur_.

5. You’ll find several options for adding user rules.

   - Le moyen le plus facile est d'utiliser le générateur. Pour l'utiliser, cliquez sur _Ajouter nouvelle règle_ → Entrez le nom du domaine que vous souhaitez bloquer ou débloquer → Cliquez sur _Ajouter la règle_
     ![Ajouter règle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - Le moyen avancé est d'utiliser l'éditeur de règles. Cliquez sur _Ouvrir l'éditeur_ et entrez les règles de blocage selon la [syntaxe](/general/dns-filtering-syntax/)

Cette fonctionnalité vous permet de [rediriger une requête vers un autre domaine en remplaçant le contenu de la requête DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
