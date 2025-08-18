---
title: Steam Deck
sidebar_position: 5
---

Les consoles de jeux ne prennent pas en charge le DNS crypté, mais elles sont bien adaptées à la configuration de l'AdGuard DNS public ou de l'AdGuard DNS privé via une adresse IP liée.

Il est probable que votre routeur prenne en charge l'utilisation de serveurs DNS cryptés, vous pouvez donc toujours configurer l'AdGuard DNS privé dessus et connecter votre console de jeux à celui-ci.

[Comment configurer votre routeur](/private-dns/connect-devices/routers/routers.md)

## Connectez AdGuard DNS

Configurez votre console de jeux pour utiliser un serveur DNS AdGuard public ou configurez-la via IP liée :

1. Ouvrez les paramètres de Steam Deck en cliquant sur l'icône d'engrenage dans le coin supérieur droit de l'écran.
2. Cliquez sur _Réseau_.
3. Cliquez sur l'icône d'engrenage à côté de la connexion réseau que vous souhaitez configurer.
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. Sélectionnez _Adresses automatiques (DHCP) uniquement_ ou _Automatique (DHCP)_.
6. Dans le champ _Serveur DNS_, saisissez l'une des adresses de serveur DNS suivantes :
    - `94.140.14.49`
    - `94.140.14.59`
7. Enregistrez les modifications.

Il serait préférable d'utiliser une IP liée (ou une IP dédiée si vous avez un abonnement Équipe) :

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
