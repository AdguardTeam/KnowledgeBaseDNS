---
title: Linux
sidebar_position: 6
---

Pour connecter un dispositif Linux à AdGuard DNS, commencez par l'ajouter au _tableau de bord_ :

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type de dispositif_, sélectionnez Linux.
3. Nommez le dispositif.
    ![Connecter le dispositif \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Utiliser le client AdGuard DNS

Le client AdGuard DNS est un utilitaire de console multiplateforme qui vous permet d'utiliser des protocoles DNS chiffrés pour accéder à AdGuard DNS.

Vous pouvez en savoir plus à ce sujet dans l'[article connexe](/dns-client/overview/).

## Utilisation de AdGuard VPN CLI

Vous pouvez configurer le DNS privé AdGuard à l'aide de l'interface de ligne de commande (CLI) VPN AdGuard. Pour commencer l'utilisation de AdGuard VPN CLI, vous devrez utiliser le Terminal.

1. Installez AdGuard VPN CLI en suivant [ces instructions](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Pour définir un serveur DNS spécifique, utilisez la commande : `adguardvpn-cli config set-dns <server_address>`, où `<server_address>` est l'adresse de votre serveur privé.
4. Activez les paramètres DNS en saisissant `adguardvpn-cli config set-system-dns on`.

## Configuration manuelle sur Ubuntu (IP liée ou IP dédiée requise)

1. Click _System_ → _Settings_ → _Network_.
2. Sélectionnez l'onglet _Sans fil_, puis choisissez le réseau auquel vous êtes connecté.
3. Go to _IPv4_.
4. Set _Automatic (DHCP)_ to _Manual_.
5. Change the listed DNS addresses to the following addresses:
    - `94.140.14.49`
    - `94.140.14.59`
6. Cliquez sur _Appliquer_.
7. Allez sur _IPv6_.
8. Set _Automatic_ to _Manual_.
9. Change the listed DNS addresses to the following addresses:
    - `2a10:50c0:0:0:0:0:ded:ff`
    - `2a10:50c0:0:0:0:0:dad:ff`
10. Cliquez sur _Appliquer_.
11. Liez votre adresse IP (ou votre IP dédiée si vous avez un abonnement Équipe) :
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configuration manuelle sur Debian (IP liée ou IP dédiée requise)

1. Ouvrez le Terminal.
2. Dans la ligne de commande, tapez : `su`.
3. Saisissez votre mot de passe `admin`.
4. Dans la ligne de commande, tapez : `nano /etc/resolv.conf`.
5. Changez les adresses DNS de la liste comme suit :
    - IPv4 : `94.140.14.49 et 94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff et 2a10:50c0:0:0:0:0:dad:ff`
6. Tapez 'Ctrl + O' pour enregistrer le fichier.
7. Tapez _Entrée_.
8. Tapez 'Ctrl + X' pour fermer le fichier.
9. Dans la ligne de commande, tapez : `/etc/init.d/networking restart`.
10. Tapez _Entrée_.
11. Fermez le Terminal.
12. Liez votre adresse IP (ou votre IP dédiée si vous avez un abonnement Équipe) :
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Utilisation de dnsmasq

1. Installez dnsmasq à l'aide des commandes suivantes :

    `sudo apt updatesudo`

    `apt install`

    `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Utilisez les commandes suivantes dans dnsmasq.conf :

    `no-resolv`

    `bogus-priv`

    `strict-order`

    `server=94.140.14.49`

    `server=94.140.14.59`

    `port=5353`

    `add-cpe-id={Your_Device_ID}`

3. Redémarrez le service dnsmasq :

    `sudo service dnsmasq restart`

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

:::note Important

Si vous voyez une notification indiquant que vous n'êtes pas connecté à AdGuard DNS, il est fort probable que le port sur lequel dnsmasq s'exécute soit occupé par d'autres services. Utilisez [ces instructions](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) pour résoudre le problème.

:::

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command in the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

C'est fait ! DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## Utilisation du DNS simple

Si vous préférez ne pas utiliser de logiciel supplémentaire pour la configuration DNS, vous pouvez opter pour le DNS non chiffré. Vous avez deux choix : utiliser des IP liées ou des IP dédiées :

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
