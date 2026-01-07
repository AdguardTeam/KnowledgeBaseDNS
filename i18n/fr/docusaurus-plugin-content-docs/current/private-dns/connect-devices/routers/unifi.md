---
title: UniFi
sidebar_position: 10
---

Le routeur UiFi (connu sous le nom de série UniFi d'Ubiquiti) présente un certain nombre d'avantages qui le rendent particulièrement adapté aux environnements domestiques, professionnels et d'entreprise.

Le nouveau firmware UniFi a récemment ajouté le support pour DNS-over-HTTPS. UniFi désigne cette fonctionnalité sous le nom de _DNS crypté_.

## Configurer DNS-over-HTTPS

Suivez ces instructions si votre routeur UniFi supporte DNS-over-HTTPS.

Les routeurs UiFi utilisent une URL de timbre DNS pour spécifier l'URL DNS-over-HTTPS. Cette URL doit être calculée à l'aide de votre URL privée DNS-over-HTTPS.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
   - Device type: 'Router'
   - Device brand: 'Unifi'
   - Device name: Use your Unifi device name
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
   - No filter
   - No logs
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
   - Server Name: 'AdGuard DNS'
   - DNS Stamp: DNS stamp URL copied from above
5. Cliquez sur _Enregistrer_.

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Accédez à _Paramètres_ → _Réseaux_.
3. Cliquez sur _Modifier le réseau_ → _WAN_.
4. Allez dans _Paramètres communs_ → _Serveur DNS_ et saisissez les adresses de serveur DNS suivantes :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
5. Cliquez sur _Enregistrer_.
6. Retournez au _Réseau_.
7. Choisissez _Modifier le réseau_ → _LAN_.
8. Recherchez _DHCP Name Server_ et sélectionnez _Manuel_.
9. Saisissez votre adresse de passerelle dans le champ _Serveur DNS 1_. Vous pouvez également saisir les adresses des serveurs DNS AdGuard dans les champs _Serveur DNS 1_ et _Serveur DNS 2_ :
   - IPv4 : `94.140.14.49` et `94.140.14.59`
   - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
10. Enregistrez les paramètres.
11. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).
    - [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
