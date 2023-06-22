---
title: Vue d'ensemble
sidebar_position: 1
---

:::info

Avec AdGuard DNS, vous pouvez configurer vos serveurs DNS privés pour résoudre les requêtes DNS et bloquer les publicités, les trackers et les domaines malveillants avant qu'ils n'atteignent votre appareil

Lien rapide : [Essayer AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# AdGuard DNS privé

![Tableau de bord AdGuard DNS privé principal](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Qu'est-ce que AdGuard DNS privé ?

AdGuard DNS privé est un serveur DNS qui, en plus des avantages d'un serveur DNS public (tels que le cryptage du trafic et les listes de blocage de domaine), fournit des fonctionnalités comme la personnalisation flexible, les statistiques DNS et le contrôle parental, plus il est facilement géré via un tableau de bord pratique.

## Pourquoi avez-vous besoin de AdGuard DNS privé

Aujourd'hui, vous pouvez connecter n'importe quoi à Internet : téléviseurs, réfrigérateurs, ampoules intelligentes ou haut-parleurs. Mais ces avantages indéniables s'accompagnent de traqueurs et de publicités. Un simple bloqueur de publicité basé sur un navigateur ne vous protégera pas dans ce cas, mais AdGuard DNS, que vous pouvez configurer pour filtrer le trafic, bloquer le contenu et les traqueurs, a un effet sur l'ensemble du système.

Nous avons déjà [AdGuard DNS public](../public-dns/overview.md) et [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Ces solutions conviennent à certains utilisateurs, mais pour d'autres, AdGuard DNS public manque de souplesse de configuration, tandis qu'AdGuard Home manque de simplicité. C'est là que AdGuard DNS privé entre en jeu. Il offre le meilleur des deux mondes : personnalisation, contrôle et information, le tout au moyen d'un tableau de bord simple et facile à utiliser.

## La différence entre AdGuard DNS privé et public

Voici une simple comparaison des fonctionnalités disponibles dans les serveurs AdGuard DNS Public et Privé.

| AdGuard DNS public                           | AdGuard DNS privé                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Cryptage du trafic DNS                       | Cryptage du trafic DNS                                                                            |
| Listes de blocage de domaines prédéterminées | Listes de blocage de domaines personnalisables                                                    |
| -                                            | Règles de filtrage DNS personnalisées avec fonction d'importation/exportation                     |
| -                                            | Statistiques des requêtes (voir où vont vos requêtes DNS : quels pays, quelles entreprises, etc.) |
| -                                            | Journal de requêtes détaillé                                                                      |
| -                                            | Contrôle Parental                                                                                 |

## Comment configurer AdGuard DNS Privé

1. Accédez à votre [tableau de bord AdGuard DNS](https://adguard-dns.io/dashboard/) (si vous n'êtes pas connecté, connectez-vous à l'aide de votre compte AdGuard)
2. Cliquez sur "Connecter l'appareil" et suivez les instructions sur l'écran

> Plateformes prises en charge : - Android - iOS - Windows - Mac - Linux - Routeurs - Consoles de jeu

## Fonctionnalités de AdGuard DNS privé

### Gestion des listes de blocage

Avec la fonctionnalité "Listes de blocage", vous pouvez définir les domaines que vous souhaitez bloquer et ceux que vous ne souhaitez pas. Choisissez parmi une grande variété de listes de blocage à des fins différentes.

![Listes de blocage du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Règles d'utilisateur

Pour les cas où les *listes de blocage* préinstallées avec des milliers de règles ne suffisent pas, nous disposons d'une fonction pratique appelée "Règles d'utilisateur". Ici, vous pouvez ajouter des règles personnalisées manuellement pour bloquer/débloquer un certain domaine ou importer des listes de règles personnalisées (voir [Syntaxe des règles de filtrage DNS](../general/dns-filtering-syntax.md)). Vous pouvez exporter les listes.

![Règles d'utilisateur du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistiques

Dans l'onglet "Statistiques", vous pouvez voir toutes les statistiques résumées sur les requêtes DNS effectuées par les appareils connectés à votre DNS privé AdGuard. Il indique le nombre total et la géographie des requêtes, le nombre de requêtes bloquées, la liste des entreprises auxquelles les requêtes ont été adressées, les types de requêtes et les domaines les plus demandés.

![Statistiques du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Destination du trafic

Cette fonctionnalité vous montre où vont les requêtes DNS envoyées par vos appareils. En plus de voir la carte des destinations de demande, vous pouvez filtrer les informations par date, appareil et pays.

![Trafic du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Sociétés

Cet onglet vous permet de vérifier rapidement quelles sociétés envoient le plus de demandes et quelles entreprises ont le plus de demandes bloquées.

![Sociétés du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Journal des requêtes

Il s'agit d'un journal détaillé où vous pouvez consulter les informations sur chaque requête et également trier les requêtes par statut, type, société, appareil, heure, pays.

![Journal des requêtes du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Contrôle Parental

Pour protéger votre enfant des contenus en ligne que vous jugez inappropriés, configurez et activez l'option *Contrôle parental*. En plus des options telles que le blocage du "contenu pour adultes" et la recherche sécurisée, nous avons ajouté la possibilité de spécifier manuellement les domaines à bloquer et de définir un calendrier pour que le *Contrôle parental* fonctionne en conséquence.

![Contrôle parental du tableau de bord AdGuard DNS privé](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

> Si vous n'avez pas encore de DNS privé AdGuard, vous pouvez [l'obtenir sur le site officiel](https://adguard-dns.io/).
