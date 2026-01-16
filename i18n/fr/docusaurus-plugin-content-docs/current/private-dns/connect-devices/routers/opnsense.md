---
title: OPNSense
sidebar_position: 8
---

Le micrologiciel OPNSense est souvent utilisé pour configurer des points d'accès sans fil, des serveurs DHCP, des serveurs DNS, vous permettant de configurer AdGuard DNS directement sur l'appareil.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Cliquez sur _Services_ dans le menu supérieur, puis sélectionnez _Serveur DHCP_ dans le menu déroulant.
4. Sur la page du Serveur DHCP, sélectionnez l'interface pour laquelle vous souhaitez configurer les paramètres DNS (par exemple, LAN, WLAN).
5. Faites défiler vers le bas jusqu'aux _Serveurs DNS_.
6. Choisissez _DNS Manuel_. Sélectionnez _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_ et saisissez les adresses des serveurs DNS suivantes :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Enregistrez les paramètres.
8. En option, vous pouvez activer DNSSEC pour une sécurité renforcée.
9. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
