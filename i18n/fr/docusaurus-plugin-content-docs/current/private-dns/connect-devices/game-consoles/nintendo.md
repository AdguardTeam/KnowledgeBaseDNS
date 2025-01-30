---
title: Nintendo
sidebar_position: 2
---

Les consoles de jeux ne prennent pas en charge le DNS crypté, mais elles sont bien adaptées à la configuration de l'AdGuard DNS public ou de l'AdGuard DNS privé via une adresse IP liée.

Il est probable que votre routeur prenne en charge l'utilisation de serveurs DNS cryptés, vous pouvez donc toujours configurer l'AdGuard DNS privé dessus et connecter votre console de jeux à celui-ci.

[Comment configurer votre routeur](/private-dns/connect-devices/routers/routers.md)

:::note Compatibilité

S'applique à : New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL et Nintendo 2DS.

:::

## Connectez AdGuard DNS

Configurez votre console de jeux pour utiliser un serveur DNS AdGuard public ou configurez-la via IP liée :

1. Dans le menu d'accueil, sélectionnez _Paramètres système_.
2. Go to _Internet_ → _Internet Settings_ → _Connection Settings_.
3. Select your network from the list.
4. Select _Change Settings_ → _DNS Settings_.
5. Set _Automatic_ to _Manual_.
6. Select _Primary DNS_. Hold down the left arrow (B button) to delete the existing DNS.
7. In the _Primary DNS_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
8. Enregistrez les paramètres.

Il serait préférable d'utiliser une IP liée (ou une IP dédiée si vous avez un abonnement Équipe) :

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
