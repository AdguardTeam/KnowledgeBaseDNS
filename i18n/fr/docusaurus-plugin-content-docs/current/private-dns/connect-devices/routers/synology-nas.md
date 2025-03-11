---
title: Synology NAS
sidebar_position: 9
---

Les routeurs Synology NAS sont incroyablement faciles à utiliser et peuvent être combinés en un seul réseau maillé. Vous pouvez gérer votre réseau à distance, à tout moment et de n'importe où. Vous pouvez également configurer AdGuard DNS directement sur le routeur.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez le _Panneau de configuration_ ou _Réseau_.
4. Sélectionnez _Interface réseau_ ou _Paramètres réseau_.
5. Sélectionnez votre réseau Wi-Fi ou votre connexion filaire.
6. Choisissez _DNS Manuel_. Sélectionnez _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_ et saisissez les adresses des serveurs DNS suivantes :
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Enregistrez les paramètres.
8. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs liées](private-dns/connect-devices/other-options/linked-ip.md)
