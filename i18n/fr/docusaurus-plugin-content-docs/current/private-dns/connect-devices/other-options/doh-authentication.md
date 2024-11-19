---
title: DNS-over-HTTPS avec authentification
sidebar_position: 4
---

## Pourquoi c'est utile

DNS-over-HTTPS avec authentification vous permet de définir un nom d'utilisateur et un mot de passe pour accéder à votre serveur choisi.

Cela aide à prévenir les utilisateurs non autorisés d'y accéder et améliore la sécurité. De plus, vous pouvez restreindre l'utilisation d'autres protocoles pour des profils spécifiques. Cette fonctionnalité est particulièrement utile lorsque l'adresse de votre serveur DNS est connue d'autres personnes. En ajoutant un mot de passe, vous pouvez bloquer l'accès et vous assurer que vous seul pouvez l'utiliser.

## Comment le mettre en place

:::note Compatibilité

Cette fonctionnalité est prise en charge par le [Client DNS AdGuard](/dns-client/overview.md) ainsi que par [les applications AdGuard](https://adguard.com/welcome.html).

:::

1. Open Dashboard.
2. Ajoutez un appareil ou accédez aux paramètres d'un appareil précédemment créé.
3. Cliquez sur _Utiliser les adresses des serveurs DNS_ et ouvrez la section _Adresses des serveurs DNS chiffrés_.
4. Configurez DNS-over-HTTPS avec authentification comme bon vous semble.
5. Reconfigurez votre appareil pour utiliser ce serveur dans le Client DNS AdGuard ou dans l'une des applications AdGuard.
6. Pour ce faire, copiez l'adresse du serveur chiffré et collez-la dans les paramètres de l'application AdGuard ou du Client DNS AdGuard.
   ![Copier l'adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Vous pouvez également refuser l'utilisation d'autres protocoles.
   ![Refuser les protocoles \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
