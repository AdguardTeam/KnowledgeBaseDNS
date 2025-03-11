---
title: UniFi
sidebar_position: 10
---

Le routeur UiFi (connu sous le nom de série UniFi d'Ubiquiti) présente un certain nombre d'avantages qui le rendent particulièrement adapté aux environnements domestiques, professionnels et d'entreprise. Malheureusement, il ne prend pas en charge le DNS chiffré, mais il est idéal pour configurer AdGuard DNS via IP liée.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Accédez à _Paramètres_ → _Réseaux_.
3. Cliquez sur _Modifier le réseau_ → _WAN_.
4. Allez dans _Paramètres communs_ → _Serveur DNS_ et saisissez les adresses de serveur DNS suivantes.
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
5. Cliquez sur _Enregistrer_.
6. Retournez au _Réseau_.
7. Choisissez _Modifier le réseau_ → _LAN_.
8. Recherchez _DHCP Name Server_ et sélectionnez _Manuel_.
9. Saisissez votre adresse de passerelle dans le champ _Serveur DNS 1_. Vous pouvez également saisir les adresses des serveurs DNS AdGuard dans les champs _Serveur DNS 1_ et _Serveur DNS 2_ :
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
10. Enregistrez les paramètres.
11. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [IPs dédiées](private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs liées](private-dns/connect-devices/other-options/linked-ip.md)
