---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Utilisez le panneau d'administration de votre routeur

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Cliquez sur _Services_ dans le menu supérieur, puis sélectionnez _Serveur DHCP_ dans le menu déroulant.
4. Sur la page du Serveur DHCP, sélectionnez l'interface pour laquelle vous souhaitez configurer les paramètres DNS (par exemple, LAN, WLAN).
5. Faites défiler vers le bas jusqu'aux _Serveurs DNS_.
6. Choisissez _DNS Manuel_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Enregistrez les paramètres.
8. En option, vous pouvez activer DNSSEC pour une sécurité renforcée.
9. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
