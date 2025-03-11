---
title: Instructions universelles
sidebar_position: 2
---

Voici quelques instructions générales pour configurer AdGuard DNS privé sur les routeurs. Vous pouvez vous référer à ce guide si vous ne trouvez pas votre routeur spécifique dans la liste principale. Veuillez noter que les détails de configuration fournis ici sont approximatifs et peuvent différer des paramètres de votre modèle particulier.

## Utilisez le panneau d'administration de votre routeur

1. Ouvrez les préférences de votre routeur. En général, vous pouvez y accéder depuis votre navigateur. Selon le modèle de votre routeur, essayez de saisir l'une des adresses suivantes :
    - Les routeurs Linksys et Asus utilisent généralement : [http://192.168.1.1](http://192.168.1.1/)
    - Les routeurs Netgear utilisent généralement : [http://192.168.0.1](http://192.168.0.1/) ou [http://192.168.1.1](http://192.168.1.1/) Les routeurs D-Link utilisent généralement [http://192.168.0.1](http://192.168.0.1/)
    - Les routeurs Ubiquiti utilisent généralement : [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Saisissez le mot de passe du routeur.

    :::note Important

    Si le mot de passe est inconnu, vous pouvez souvent le réinitialiser en appuyant sur un bouton sur le routeur ; cela réinitialisera également le routeur à ses paramètres d'usine. Certains modèles ont une application de gestion dédiée, qui devrait déjà être installée sur votre ordinateur.

    :::

3. Trouvez où les paramètres DNS sont situés dans la console d'administration du routeur. Change the listed DNS addresses to the following addresses:
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`

4. Enregistrez les paramètres.

5. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
