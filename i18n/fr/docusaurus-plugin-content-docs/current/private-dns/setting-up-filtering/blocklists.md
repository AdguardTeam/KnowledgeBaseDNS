---
title: Listes de blocage
sidebar_position: 1
---

## Qu'est-ce qu'une liste de blocage ?

Les listes de blocage sont des ensembles de règles au format texte que AdGuard DNS utilise pour filtrer les publicités et le contenu qui pourrait compromettre votre confidentialité. En général, un filtre est constitué de règles ayant un objectif similaire. Par exemple, il peut y avoir des règles pour les langues de site Web (comme les filtres allemands ou russes) ou des règles qui protègent contre les sites de hameçonnage (comme la Liste de blocage URL de hameçonnage). Vous pouvez facilement activer ou désactiver ces règles en groupe.

## Pourquoi c'est utile

Les listes de blocage sont conçues pour une personnalisation flexible des règles de filtrage. Par exemple, vous pouvez vouloir bloquer des domaines publicitaires dans une région linguistique spécifique, ou vous pouvez vouloir vous débarrasser des domaines de traqueurs ou de publicités. Sélectionnez les listes de blocage que vous souhaitez et personnalisez le filtrage à votre goût.

## Comment activer les listes de blocage dans AdGuard DNS

Pour activer les listes de blocage :

1. Ouvrez le tableau de bord.
2. Allez à la section _Serveurs_.
3. Sélectionnez le serveur requis.
4. Cliquez sur _Listes de blocage_.

## Types de listes de blocage

### Général

Un groupe de filtres qui inclut des listes pour bloquer les publicités et les domaines de suivi.

![Listes de blocage générales \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Régional

Un groupe de filtres composé de listes régionales pour bloquer des domaines dans des langues spécifiques.

![Listes de blocage régionales \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Sécurité

Un groupe de filtres contenant des règles pour bloquer des sites frauduleux et des domaines d'hameçonnage.

![Listes de blocage de sécurité \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Autres

Listes de blocage avec de diverses règles de blocage provenant des développeurs tiers.

![Autres listes de blocage \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Ajout de filtres

Si vous souhaitez que la liste des filtres AdGuard DNS soit élargie, vous pouvez soumettre une requête pour les ajouter dans la section pertinente de [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) sur GitHub.

Pour soumettre une requête :

1. Allez au lien ci-dessus (vous devrez peut-être vous inscrire sur GitHub).
2. Cliquez sur _Nouveau problème_.
3. Cliquez sur _Demande de liste de blocage_ et remplissez le formulaire.
4. Après avoir rempli le formulaire, cliquez sur _Soumettre nouveau problème_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Règles utilisateur

Vous pouvez également créer vos propres règles de blocage.
Apprenez plus dans l'[article sur les règles utilisateur](/private-dns/setting-up-filtering/user-rules.md).
