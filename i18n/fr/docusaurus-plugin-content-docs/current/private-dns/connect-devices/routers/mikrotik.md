---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

## Configurer DNS-over-HTTPS

1. Accédez à votre routeur MikroTik :
    - Ouvrez votre navigateur web et allez à l'adresse IP de votre routeur (généralement `192.168.88.1`)
    - Sinon, vous pouvez utiliser Winbox pour vous connecter à votre routeur MikroTik
    - Saisissez votre nom d'utilisateur et votre mot de passe administrateur
2. Importez le certificat racine :
    - Téléchargez le dernier ensemble de certificats racines fiables : [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
    - Accédez à _Fichiers_. Cliquez sur _Télécharger_ et sélectionnez le paquet de certificats cacert.pem téléchargé
    - Allez dans _Système_ → _Certificats_ → _Importation_
    - Dans le champ _Nom du fichier_, choisissez le fichier de certificat téléchargé
    - Cliquez sur _Importer_
3. Configurez DNS-over-HTTPS :
    - Accédez à _IP_ → _DNS_
    - Dans la section _Serveurs_ ajoutez les serveurs AdGuard DNS suivants :
        - `94.140.14.49`
        - `94.140.14.59`
    - Réglez _Autoriser les requêtes à distance_ sur _Oui_ (ceci est crucial pour le fonctionnement du DoH)
    - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
    - Cliquez sur _OK_
4. Créez des enregistrements DNS statiques :
    - Dans les _Paramètres DNS_, cliquez sur _Statique_
    - Cliquez sur _Ajouter Nouveau_
    - Set _Name_ to `d.adguard-dns.com`
    - Set _Type_ to `A`
    - Réglez _Adresse_ sur '94.140.14.49'
    - Set _TTL_ to `1d 00:00:00`
    - Répétez le processus pour créer une entrée identique mais avec _Adresse_ réglée sur `94.140.14.59`
5. Désactivez le Peer DNS sur le client DHCP :
    - Accédez à _IP_ → _DHCP Client_
    - Double-cliquez sur le client utilisé pour votre connexion Internet (généralement sur l'interface WAN)
    - Décochez _Utiliser le DNS Peer_
    - Cliquez sur _OK_
6. Test and verify:
    - You might need to reboot your MikroTik router for all changes to take effect
    - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Accédez à votre routeur MikroTik :
    - Ouvrez votre navigateur web et allez à l'adresse IP de votre routeur (généralement `192.168.88.1`)
    - Sinon, vous pouvez utiliser Winbox pour vous connecter à votre routeur MikroTik
    - Saisissez votre nom d'utilisateur et votre mot de passe administrateur
2. Configure Plain DNS:
    - Go to _IP_ → _DNS_
    - In the _Servers_ section, add the following AdGuard DNS servers:
        - IPv4 : `94.140.14.49` et `94.140.14.59`
        - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
        - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
    - Click _OK_
3. Désactivez le Peer DNS sur le client DHCP :
    - Go to _IP_ → _DHCP Client_
    - Double-cliquez sur le client utilisé pour votre connexion Internet (généralement sur l'interface WAN)
    - Uncheck _Use Peer DNS_
    - Click _OK_
