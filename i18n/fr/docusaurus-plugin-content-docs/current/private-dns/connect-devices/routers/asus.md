---
title: Asus
sidebar_position: 3
---

## Configuration DNS-over-TLS

Ce sont des instructions générales pour configurer le DNS AdGuard privé pour les routeurs Asus.

Les informations de configuration dans ces instructions sont tirées d'un modèle de routeur spécifique, elles peuvent donc différer de l'interface d'un appareil individuel.

Si nécessaire : Configurez DNS-over-TLS sur ASUS, installez le [firmware ASUS Merlin](https://www.asuswrt-merlin.net/download) adapté à votre version de routeur sur votre ordinateur.

1. Connectez-vous au panneau d'administration de votre routeur Asus. Vous pouvez y accéder via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/) ou [http://192.168.2.1](http://192.168.2.1/).
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Dans la barre latérale _Paramètres avancés_, accédez à la section WAN.
4. Dans la section _Paramètres DNS WAN_, réglez le paramètre _Connexion automatique au serveur DNS_ sur _Non_.
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. Modifiez le protocole de confidentialité DNS en DNS-over-TLS (DoT).
7. Assurez-vous que le _profil DNS-over-TLS_ est défini sur _Strict_.
8. Faites défiler jusqu'à la section _Liste des serveurs DNS-over-TLS_. Dans le champ _Adresse_, saisissez l'une des adresses ci-dessous :
    - `94.140.14.49` et `94.140.14.59`
9. Pour _Port TLS_, saisissez 853.
10. Dans le champ _Nom d'hôte TLS_, saisissez l'adresse du serveur DNS AdGuard privé :
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Faites défiler vers le bas de la page et cliquez sur _Appliquer_.

## Utilisez le panneau d'administration de votre routeur

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez _Paramètres avancés_ ou _Avancé_.
4. Sélectionnez _WAN_ ou _Internet_.
5. Ouvrez _Paramètres DNS_ ou _DNS_.
6. Choose _Manual Setting_. Sélectionnez _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_ et saisissez les adresses des serveurs DNS suivantes :
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Enregistrez les paramètres.
8. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
