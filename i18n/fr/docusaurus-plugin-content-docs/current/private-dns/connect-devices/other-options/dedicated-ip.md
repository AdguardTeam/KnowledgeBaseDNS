---
title: Dedicated IPs
sidebar_position: 2
---

## What are dedicated IPs?

Les adresses IPv4 dédiées sont disponibles pour les utilisateurs avec des abonnements Équipe et Entreprise, tandis que les IPs liées sont disponibles pour tout le monde.

If you have a Team or Enterprise subscription, you'll receive several personal dedicated IP addresses. Requests to these addresses are treated as "yours," and server-level configurations and filtering rules are applied accordingly. Dedicated IP addresses are much more secure and easier to manage. Avec les IPs liées, vous devez vous reconnecter manuellement ou utiliser un programme spécial chaque fois que l'adresse IP de l'appareil change, ce qui se produit après chaque redémarrage.

## Why do you need a dedicated IP?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted private AdGuard DNS server. In this case, you will have to use standard unencrypted DNS. Il existe deux manières de configurer AdGuard DNS : [en utilisant des IPs liées](/private-dns/connect-devices/other-options/linked-ip.md) et en utilisant des IPs dédiées.

Dedicated IPs are generally a more stable option. Les IPs liées ont certaines limitations, comme le fait que seules les adresses résidentielles sont autorisées, votre fournisseur peut changer l'adresse IP, et vous devrez relier à nouveau l'adresse IP. Avec les IPs dédiées, vous obtenez une adresse IP qui vous appartient exclusivement, et toutes les requêtes seront comptées pour votre appareil.

The disadvantage is that you may start receiving irrelevant traffic (scanners, bots), as always happens with public DNS resolvers. Vous pourriez avoir besoin d'utiliser [les paramètres d'accès](/private-dns/server-and-settings/access.md) pour limiter le trafic des bots.

The instructions below explain how to connect a dedicated IP to the device:

## Connect AdGuard DNS using dedicated IPs

1. Open Dashboard.
2. Add a new device or open the settings of a previously created device.
3. Select _Use server addresses_.
4. Next, open _Plain DNS Server Addresses_.
5. Select the server you wish to use.
6. To bind a dedicated IPv4 address, click _Assign_.
7. If you want to use a dedicated IPv6 address, click _Copy_.
   ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copy and paste the selected dedicated address into the device configurations.
