---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box offre une flexibilité maximale pour tous les appareils en utilisant simultanément les bandes de fréquences 2,4 GHz et 5 GHz. Tous les appareils connectés à la FRITZ!Box sont entièrement protégés contre les attaques provenant d'Internet. La configuration de cette marque de routeurs vous permet également de configurer le DNS privé AdGuard chiffré.

## Configuration DNS-over-TLS

1. Ouvrez le panneau d'administration du routeur. Il peut être accessible à fritz.box, l'adresse IP de votre routeur, ou `192.168.178.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez _Internet_ ou _Réseau domestique_.
4. Sélectionnez _DNS_ ou _Paramètres DNS_.
5. Sous DNS-over-TLS (DoT), cochez _Utiliser DNS-over-TLS_ si le fournisseur le prend en charge.
6. Sélectionnez _Utiliser l'indication de nom de serveur TLS personnalisé (SNI)_ et saisissez l'adresse du serveur DNS privé AdGuard :  `{Your_Device_ID}.d.adguard-dns.com`.
7. Enregistrez les paramètres.

## Utilisez le panneau d'administration de votre routeur

Utilisez ce guide si votre routeur FritzBox ne prend pas en charge la configuration DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez _Internet_ ou _Réseau domestique_.
4. Sélectionnez _DNS_ ou _Paramètres DNS_.
5. Sélectionnez _DNS manuel_, puis _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_, et saisissez les adresses suivantes des serveurs DNS :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
6. Enregistrez les paramètres.
7. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
