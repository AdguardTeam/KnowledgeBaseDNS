---
title: Xiaomi
sidebar_position: 11
---

Les routeurs Xiaomi présentent de nombreux avantages : un signal fort et constant, la sécurité du réseau, un fonctionnement stable, une gestion intelligente, en même temps, l'utilisateur peut connecter jusqu'à 64 appareils au réseau Wi-Fi local.

Malheureusement, il ne prend pas en charge le DNS chiffré, mais il est excellent pour configurer AdGuard DNS via l'adresse IP liée.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Save the settings.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
