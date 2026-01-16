---
title: UniFi
sidebar_position: 10
---

Le routeur UiFi (connu sous le nom de série UniFi d'Ubiquiti) présente un certain nombre d'avantages qui le rendent particulièrement adapté aux environnements domestiques, professionnels et d'entreprise.

Le nouveau firmware UniFi a récemment ajouté le support pour DNS-over-HTTPS. UniFi désigne cette fonctionnalité sous le nom de _DNS crypté_.

## Configurer DNS-over-HTTPS

Suivez ces instructions si votre routeur UniFi supporte DNS-over-HTTPS.

Les routeurs UiFi utilisent une URL de timbre DNS pour spécifier l'URL DNS-over-HTTPS. Cette URL doit être calculée à l'aide de votre URL privée DNS-over-HTTPS.

Obtenez l'URL de DNS-over-HTTPS utilisée pour calculer l'URL du tampon DNS.

1. Accédez au tableau de bord privé AdGuard DNS.
2. Allez dans _DNS chiffré_ → _Personnalisé_ et saisissez les paramètres du serveur DNS suivants :
   - Type d'appareil : 'Routeur'
   - Marque d'appareil : 'Unifi'
   - Nom d'appareil : Utilisez le nom de votre appareil Unifi
3. Cliquez sur _Suivant_.
4. Défilez jusqu'à _Utiliser les adresses de serveur DNS_ → _DNS sur HTTPS_ et notez l'URL DNS sur HTTPS (par exemple, https://d.adguard-dns.com/dns-query/123456abc).

Générez un tampon DNS en utilisant le [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) et configurez-le.

1. Protocole : DNS-over-HTTPS
2. Nom d'hôte : d.adguard-dns.com
3. Chemin : /dns-query/123456abc (remplacez 123456abc par la valeur obtenue depuis votre tableau de bord privé AdGuard DNS)
4. Décochez
   - Pas de filtrage
   - Sans journalisation
5. Copiez l'URL du tampon DNS (par exemple, sdns://AgcAAAAAA…)

Activez DNS-over-HTTPS dans UniFi.

1. Connectez-vous au contrôleur Ubiquiti UniFi.
2. Accédez à _Paramètres_ → _Sécurité_.
3. Cliquez sur _Protection_.
4. Allez dans _DNS chiffré_ → _Personnalisé_ et saisissez les adresses des serveurs DNS suivantes.
   - Nom du serveur�: 'AdGuard DNS'
   - Tampon DNS : URL de l'empreinte DNS copiée à partir de l'adresse ci-dessus
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
    - [IPs dédiées](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IPs liées](private-dns/connect-devices/other-options/linked-ip.md)
