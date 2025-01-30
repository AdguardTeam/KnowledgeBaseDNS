---
title: Keenetic
sidebar_position: 5
---

Les routeurs Keenetic sont connus pour leur stabilité et leurs configurations flexibles, et ils sont faciles à configurer, vous permettant d'installer facilement le DNS AdGuard privé chiffré sur votre appareil.

## Configurer DNS-over-HTTPS

1. Ouvrez le panneau d'administration du routeur. Accédez-y à my.keenetic.net, l'Adresse IP de votre routeur, ou `192.168.1.1`.
2. Appuyez sur le bouton de menu en bas de l'écran et sélectionnez _Gestion_.
3. Ouvrez _Paramètres du système_.
4. Appuyez sur _Options des composants_ → _Options des composants du système_.
5. Dans _Utilitaires et services_, sélectionnez le proxy DNS-over-HTTPS et installez-le.
6. Allez dans _Menu_ → _Règles de réseau_ → _Sécurité Internet_.
7. Naviguez jusqu'aux serveurs DNS-over-HTTPS et cliquez sur _Ajouter un serveur DNS-over-HTTPS_.
8. Enter the URL of the Private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. Cliquez sur _Enregistrer_.

## Configuration DNS-over-TLS

1. Ouvrez le panneau d'administration du routeur. Accédez-y à my.keenetic.net, l'Adresse IP de votre routeur, ou `192.168.1.1`.
2. Appuyez sur le bouton de menu en bas de l'écran et sélectionnez _Gestion_.
3. Ouvrez _Paramètres du système_.
4. Appuyez sur _Options des composants_ → _Options des composants du système_.
5. Dans _Utilitaires et services_, sélectionnez le proxy DNS-over-HTTPS et installez-le.
6. Allez dans _Menu_ → _Règles de réseau_ → _Sécurité Internet_.
7. Naviguez jusqu'aux serveurs DNS-over-HTTPS et cliquez sur _Ajouter un serveur DNS-over-HTTPS_.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. Cliquez sur _Enregistrer_.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez _Internet_ ou _Réseau domestique_.
4. Sélectionnez _WAN_ ou _Internet_.
5. Sélectionnez _DNS_ ou _Paramètres DNS_.
6. Choisissez _DNS Manuel_. Sélectionnez _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_ et saisissez les adresses des serveurs DNS suivantes :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Enregistrez les paramètres.
8. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
