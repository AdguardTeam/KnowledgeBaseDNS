---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Les consoles de jeux ne prennent pas en charge le DNS crypté, mais elles sont bien adaptées à la configuration de l'AdGuard DNS public ou de l'AdGuard DNS privé via une adresse IP liée.

Il est probable que votre routeur prenne en charge l'utilisation de serveurs DNS cryptés, vous pouvez donc toujours configurer l'AdGuard DNS privé dessus et connecter votre console de jeux à celui-ci.

[Comment configurer votre routeur](/private-dns/connect-devices/routers/routers.md)

## Connectez AdGuard DNS

Configurez votre console de jeux pour utiliser un serveur DNS AdGuard public ou configurez-la via IP liée :

1. Allumez votre console PS4/PS5 et connectez-vous à votre compte.
2. Depuis l'écran d'accueil, sélectionnez l'icône d'engrenage située dans la rangée supérieure.
3. Dans le menu _Paramètres_, sélectionnez _Réseau_.
4. Sélectionnez _Configurer la connexion Internet_.
5. Choisissez _Utiliser le Wi-Fi_ ou _Utiliser un câble LAN_, selon la configuration de votre réseau.
6. Sélectionnez _Personnalisé_, puis sélectionnez _Automatique_ pour les _Paramètres d'adresse IP_.
7. Pour le _nom d'hôte DHCP_, sélectionnez _Ne pas spécifier_.
8. Pour les _paramètres DNS_, sélectionnez _Manuel_.
9. Dans le champ _Serveur DNS_, saisissez l'une des adresses de serveur DNS suivantes :
   - `94.140.14.49`
   - `94.140.14.59`
10. Sélectionnez _Suivant_ pour continuer.
11. Sur l'écran des _paramètres MTU_, sélectionnez _Automatique_.
12. Sur l'écran du _Serveur proxy_, sélectionnez _Ne pas utiliser_.
13. Sélectionnez _Tester la connexion Internet_ pour tester vos nouveaux paramètres DNS.
14. Une fois le test terminé et que vous voyez "Connexion Internet : Réussie", enregistrez vos paramètres.

Il serait préférable d'utiliser une IP liée (ou une IP dédiée si vous avez un abonnement Équipe) :

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
