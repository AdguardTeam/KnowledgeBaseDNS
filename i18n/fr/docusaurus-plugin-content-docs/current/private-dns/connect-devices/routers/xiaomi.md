---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have many advantages: a stable, strong signal, network security, robust performance, and smart management. Users can connect up to 64 devices to a local Wi-Fi network.

Malheureusement, il ne prend pas en charge le DNS chiffré, mais il est excellent pour configurer AdGuard DNS via l'adresse IP liée.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. Accédez-y à `192.168.31.1` ou à l'adresse IP de votre routeur.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez les _Paramètres avancés_ ou _Avancé_, selon le modèle de votre routeur.
4. Ouvrez _Réseau_ ou _Internet_ et recherchez DNS ou Paramètres DNS.
5. Choisissez _DNS Manuel_. Sélectionnez _Utiliser ces serveurs DNS_ ou _Spécifier le serveur DNS manuellement_ et saisissez les adresses des serveurs DNS suivantes :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
6. Enregistrez les paramètres.
7. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
