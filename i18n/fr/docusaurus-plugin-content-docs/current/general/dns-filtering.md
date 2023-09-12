---
title: Filtrage DNS
sidebar_position: 1
---

:::info

La façon la plus simple d'explorer les avantages du filtrage DNS est d'installer le Bloqueur AdGuard ou d'essayer AdGuard DNS. Si vous souhaitez filtrer les DNS au niveau du réseau, AdGuard Home est votre outil idéal

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

Pour mieux comprendre le filtrage DNS, il faut d'abord répondre à la question "Qu'est-ce que le DNS ?".

## Qu'est-ce que le DNS ?

DNS est l'abréviation de "Domain Name System", et son objectif est de traduire les noms des sites web en quelque chose que les navigateurs peuvent comprendre, c'est-à-dire en des adresses IP. Donc, chaque fois que vous accédez à un site web, votre navigateur envoie une requête à un type de serveur spécial (serveur DNS). Ce serveur examine le nom de domaine demandé et répond avec une adresse IP correspondante. Très schématiquement, il peut être représenté comme ceci :

![Comment fonctionne le DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Il en va de même, bien sûr, pour toutes les applications et tous les programmes qui envoient des requêtes web, et pas seulement pour les navigateurs.

## Comment fonctionne le filtrage DNS ?

Lorsque vous utilisez l'une des applications AdGuard qui prend en charge le filtrage DNS, elle agit comme un tampon entre votre appareil et le serveur DNS. Toutes les requêtes DNS que vos navigateurs ou applications sont sur le point d'envoyer sont d'abord traitées par AdGuard. Si vous utilisez le serveur DNS par défaut fourni par votre FAI, votre trafic DNS n’est probablement pas chiffré et donc vulnérable à l’espionnage et au détournement. AdGuard crypte toutes vos requêtes DNS avant qu'elles ne quittent votre appareil, afin qu'aucun malfaiteur ne puisse avoir accès à leur contenu. En outre, AdGuard peut identifier les demandes adressées aux domaines publicitaires, de suivi et/ou pour adultes et les rediriger vers un "trou noir" au lieu de les transmettre au serveur DNS. Plus à ce sujet [plus tard](#local-dns-blocklists).

![Comment fonctionne le filtrage DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Le filtrage DNS est un outil puissant et il est pris en charge par toutes les principales applications AdGuard : [AdGuard pour Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard pour Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard pour Android](https://adguard.com/adguard-android/overview.html) et [AdGuard pour iOS](https://adguard.com/adguard-ios/overview.html).

Le filtrage DNS peut être divisé en deux fonctions distinctes : chiffrer et rediriger le trafic DNS vers les serveurs DNS, et bloquer certains domaines localement en appliquant des listes de blocage DNS.

### Serveurs DNS

Il existe des milliers de serveurs DNS parmi lesquels choisir, et ils sont tous uniques dans leurs propriétés et leurs objectifs. La plupart renvoient simplement l'adresse IP du domaine demandé, mais certains ont des fonctions supplémentaires : ils bloquent les publicités, le suivi, les domaines pour adultes, etc. De nos jours, tous les principaux serveurs DNS utilisent un ou plusieurs protocoles de cryptage fiables : DNS-over-HTTPS, DNS-over-TLS. AdGuard fournit également un service DNS [](https://adguard-dns.io/), et a été le premier au monde à offrir le très nouveau et prometteur protocole de cryptage [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html). AdGuard dispose de serveurs différents pour de différents objectifs. Ce schéma illustre le fonctionnement des serveurs de blocage AdGuard :

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

D'autres fournisseurs de DNS peuvent fonctionner différemment. Renseignez-vous sur eux avant de vous engager avec tel ou tel serveur DNS. Vous pouvez trouver la liste des fournisseurs de DNS les plus populaires dans [cet article](dns-providers.md). Toutes les applications AdGuard qui prennent en charge la fonctionnalité DNS disposent également d'une liste de serveurs DNS à choisir, ou permettent même de sélectionner n'importe quel serveur DNS personnalisé.

### Listes de blocage DNS locales

Mais en vous fiant uniquement aux serveurs DNS pour filtrer votre trafic DNS, vous perdez toute flexibilité. Si le serveur sélectionné bloque un domaine, vous ne pouvez pas y accéder. Avec AdGuard, vous n'avez même pas besoin de configurer un serveur DNS spécifique pour filtrer le trafic DNS. Tous les produits AdGuard vous permettent d'utiliser des listes de blocage DNS, qu'il s'agisse de simples fichiers d'hôtes ou de listes utilisant une [syntaxe plus avancée](dns-filtering-syntax.md). Elles fonctionnent de la même manière que les listes de blocage classiques : lorsqu'une requête DNS correspond à l'une des règles de la liste de filtres actifs, elle est bloquée. Plus précisément, elle est redirigée vers un "trou noir".

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in settings in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## Filtrage DNS vs filtrage réseau

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. Sur certaines plateformes, c'est le seul moyen d'obtenir un filtrage à l'échelle du système. Par exemple, sur iOS, seul le navigateur Safari prend en charge le blocage de contenu au sens familier, pour tout le reste, il n'y a que le filtrage DNS.
1. Certaines formes de suivi (comme le suivi masqué [CNAME](https://adguard.com/blog/cname-tracking.html)) ne peuvent être traitées que par le filtrage DNS.
1. L'étape de traitement d'une requête DNS est la plus précoce à laquelle vous pourriez avoir affaire avec une publicité ou un traqueur, ce qui permet d'économiser un peu d'autonomie de la batterie et de trafic.

**Cons of DNS filtering:**

1. Le filtrage DNS est "rudimentaire", ce qui signifie qu'il ne supprimera pas les espaces vides laissés derrière une publicité bloquée, ni n'appliquera aucune sorte de filtrage cosmétique. La plupart des publicités les plus compliquées ne peuvent pas être bloquées au niveau DNS (ou plutôt, elles le peuvent, mais uniquement en bloquant les domaines entiers qui sont utilisés à d'autres fins).

    ![Exemple de différence](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Un exemple de la différence entre le filtrage DNS et le filtrage réseau*

1. C'est impossible de connaître l'origine d'une requête DNS, ce qui signifie que vous ne pouvez pas faire la distinction entre des apps différentes au niveau DNS. Cela a un impact négatif sur les statistiques et rend impossible la création de règles de filtrage spécifiques à l'application.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
