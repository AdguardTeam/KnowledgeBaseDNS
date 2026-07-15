---
title: Filtrage DNS
sidebar_position: 1
---

:::info

La façon la plus simple d'explorer les avantages du filtrage DNS est d'installer le Bloqueur AdGuard ou d'essayer AdGuard DNS. Si vous souhaitez filtrer les DNS au niveau du réseau, AdGuard Home est votre outil idéal

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## Qu'est-ce que le DNS ?

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. Donc, chaque fois que vous accédez à un site web, votre navigateur envoie une requête à un type de serveur spécial (serveur DNS). Ce serveur examine le nom de domaine demandé et répond avec une adresse IP correspondante. Très schématiquement, il peut être représenté comme ceci :

![Comment fonctionne le DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Il en va de même, bien sûr, pour toutes les applications et tous les programmes qui envoient des requêtes web, et pas seulement pour les navigateurs.

## Comment fonctionne le filtrage DNS ?

Lorsque vous utilisez l'une des applications AdGuard qui prend en charge le filtrage DNS, elle agit comme un tampon entre votre appareil et le serveur DNS. Toutes les requêtes DNS que vos navigateurs ou applications sont sur le point d'envoyer sont d'abord traitées par AdGuard. If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard crypte toutes vos requêtes DNS avant qu'elles ne quittent votre appareil, afin qu'aucun malfaiteur ne puisse avoir accès à leur contenu. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. Plus à ce sujet [plus tard](#local-dns-blocklists).

![Comment fonctionne le filtrage DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

Le filtrage DNS peut être divisé en deux fonctions distinctes : chiffrer et rediriger le trafic DNS vers les serveurs DNS, et bloquer certains domaines localement en appliquant des listes de blocage DNS.

### Serveurs DNS

Il existe des milliers de serveurs DNS parmi lesquels choisir, et ils sont tous uniques dans leurs propriétés et leurs objectifs. La plupart renvoient simplement l'adresse IP du domaine demandé, mais certains ont des fonctions supplémentaires : ils bloquent les publicités, le suivi, les domaines pour adultes, etc. De nos jours, tous les principaux serveurs DNS utilisent un ou plusieurs protocoles de cryptage fiables : DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard dispose de serveurs différents pour de différents objectifs. Ce schéma illustre le fonctionnement des serveurs de blocage AdGuard :

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

D'autres fournisseurs de DNS peuvent fonctionner différemment. Renseignez-vous sur eux avant de vous engager avec tel ou tel serveur DNS. Vous pouvez trouver la liste des fournisseurs de DNS les plus populaires dans [cet article](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### Listes de blocage DNS locales

Mais en vous fiant uniquement aux serveurs DNS pour filtrer votre trafic DNS, vous perdez toute flexibilité. If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. Tous les produits AdGuard vous permettent d'utiliser des listes de blocage DNS, qu'il s'agisse de simples fichiers d'hôtes ou de listes utilisant une [syntaxe plus avancée](dns-filtering-syntax.md). Elles fonctionnent de la même manière que les listes de blocage classiques : lorsqu'une requête DNS correspond à l'une des règles de la liste de filtres actifs, elle est bloquée. To be more precise, the DNS server gives a non-routable IP address for such a request.

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in *Settings* in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## Filtrage DNS vs filtrage réseau

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don’t have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it’s important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. Sur certaines plateformes, c'est le seul moyen d'obtenir un filtrage à l'échelle du système. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. Certaines formes de suivi (comme le suivi masqué [CNAME](https://adguard.com/blog/cname-tracking.html)) ne peuvent être traitées que par le filtrage DNS.
1. L'étape de traitement d'une requête DNS est la plus précoce à laquelle vous pourriez avoir affaire avec une publicité ou un traqueur, ce qui permet d'économiser un peu d'autonomie de la batterie et de trafic.

**Cons of DNS filtering:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Exemple de différence](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Un exemple de la différence entre le filtrage DNS et le filtrage réseau*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. Cela a un impact négatif sur les statistiques et rend impossible la création de règles de filtrage spécifiques à l'application.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
