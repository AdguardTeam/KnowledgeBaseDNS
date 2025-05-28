---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## Configurer DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Device name: '(use your Unifi device name)
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS Stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/), and set it:

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
    - No filter
    - No logs
5. Copy the DNS Stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
    - Server Name: 'AdGuard DNS'
    - DNS Stamp: DNS Stamp URL copied from above
5. Cliquez sur _Enregistrer_.

## Utilisez le panneau d'administration de votre routeur

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration:

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Accédez à _Paramètres_ → _Réseaux_.
3. Cliquez sur _Modifier le réseau_ → _WAN_.
4. Allez dans _Paramètres communs_ → _Serveur DNS_ et saisissez les adresses de serveur DNS suivantes.
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

- [IPs dédiées](private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs liées](private-dns/connect-devices/other-options/linked-ip.md)
