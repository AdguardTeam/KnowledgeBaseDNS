---
title: IPs dédiés
sidebar_position: 2
---

## Qu'est-ce qu'une IP dédiée ?

Les adresses IPv4 dédiées sont disponibles pour les utilisateurs avec des abonnements Équipe et Entreprise, tandis que les IPs liées sont disponibles pour tout le monde.

Si vous avez un abonnement Équipe ou Entreprise, vous recevrez plusieurs adresses IP dédiées personnelles. Les requêtes vers ces adresses sont considérées comme "les vôtres", et les configurations au niveau du serveur et les règles de filtrage sont appliquées en conséquence. Les adresses IP dédiées sont beaucoup plus sécuritaires et plus faciles à gérer. Avec les IPs liées, vous devez vous reconnecter manuellement ou utiliser un programme spécial chaque fois que l'adresse IP de l'appareil change, ce qui se produit après chaque redémarrage.

## Pourquoi avez-vous besoin d'une IP dédiée ?

Malheureusement, les spécifications techniques de l'appareil connecté ne permettent pas toujours de configurer un serveur DNS privé AdGuard chiffré. Dans ce cas, vous devrez utiliser un DNS standard non chiffré. Il existe deux manières de configurer AdGuard DNS : [en utilisant des IPs liées](/private-dns/connect-devices/other-options/linked-ip.md) et en utilisant des IPs dédiées.

Les IPs dédiées sont généralement une option plus stable. Les IPs liées ont certaines limitations, comme le fait que seules les adresses résidentielles sont autorisées, votre fournisseur peut changer l'adresse IP, et vous devrez relier à nouveau l'adresse IP. Avec les IPs dédiées, vous obtenez une adresse IP qui vous appartient exclusivement, et toutes les requêtes seront comptées pour votre appareil.

L'inconvénient est que vous pourriez commencer à recevoir un trafic non pertinent (scanneurs, bots), comme cela se produit toujours avec des résolveurs DNS publics. Vous pourriez avoir besoin d'utiliser [les paramètres d'accès](/private-dns/server-and-settings/access.md) pour limiter le trafic des bots.

Les instructions ci-dessous expliquent comment connecter une IP dédiée à l'appareil :

## Connectez AdGuard DNS en utilisant des IPs dédiées

1. Open Dashboard.
2. Ajoutez un nouvel appareil ou ouvrez les paramètres d'un appareil précédemment créé.
3. Sélectionnez _Utiliser les adresses des serveurs_.
4. Ensuite, ouvrez _Adresses des serveurs DNS brut_.
5. Sélectionnez le serveur que vous souhaitez utiliser.
6. Pour lier une adresse IPv4 dédiée, cliquez sur _Assigner_.
7. Si vous souhaitez utiliser une adresse IPv6 dédiée, cliquez sur _Copier_.
   ![Copier l'adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copiez et collez l'adresse dédiée sélectionnée dans les configurations de l'appareil.
