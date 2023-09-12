---
title: Comment vider le cache DNS
sidebar_position: 1
---

:::info

Nous expliquons ici comment vous pouvez vider le cache DNS pour résoudre les problèmes de DNS public. Vous pouvez utiliser le Bloqueur AdGuard pour configurer des serveurs DNS, y compris des serveurs chiffrés

Quick link: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock)

:::

## Qu'est-ce que le cache DNS ?

Le cache DNS stocke les adresses IP des sites visités sur l'ordinateur local pour qu'ils se chargent plus rapidement la prochaine fois. Au lieu d’effectuer une longue recherche DNS, le système répond aux requêtes avec des enregistrements DNS provenant du cache DNS temporaire.

Le cache DNS contient ce qu'on appelle les [enregistrements de ressource (RR)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), qui sont :

- **Données ressources (ou rdata)**;
- **Type d'enregistrement**;
- **Nom d'enregistrement**;
- **TTL (durée de vie)**;
- **Classe**;
- **Longueur des données de la ressource**.

## Quand peut-il s'avérer nécessaire de vider le cache

**Vous avez changé votre fournisseur DNS pour AdGuard DNS.** Si l'utilisateur a modifié son DNS, l'affichage du résultat peut prendre un certain temps à cause du cache.

**Vous recevez régulièrement une erreur 404.** Par exemple, le site web a été transféré sur un autre serveur et son adresse IP a changé. Pour que le navigateur ouvre le site web à partir de la nouvelle adresse IP, vous devez supprimer l'adresse IP mise en cache du cache DNS.

**Vous souhaitez améliorer votre confidentialité.**

## Comment vider le cache DNS sur différents systèmes d'exploitation

### iOS

Il existe de différentes façons de vider le cache DNS sur votre iPad ou iPhone.

Le plus simple est d'activer le mode Avion (par exemple, dans le Centre de contrôle ou dans l'application Paramètres) et de le désactiver à nouveau. Le cache DNS sera vidé.

Une autre option consiste à réinitialiser les paramètres réseau de votre appareil dans l'application Paramètres. Ouvrez *Général*, faites défiler vers le bas, recherchez *Réinitialiser* et appuyez sur *Réinitialiser les paramètres réseau*.

:::note

By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

:::

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Une autre option consiste à réinitialiser les paramètres réseau de votre appareil dans l'application Paramètres. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

:::note

By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

:::

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Open the Command Prompt as an administrator. You can find it in the Start Menu by typing *command prompt* or *cmd*. Then type `ipconfig/flushdns` and press Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you're using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### NSCD

To clear the **NSCD** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

## Comment vider le cache DNS dans Chrome

This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once.

1. Disable **secure DNS** in Chrome settings

    ```bash
    chrome://settings/security
    ```

1. Disable **Async DNS resolver**

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Press both buttons here

    ```bash
    chrome://net-internals/#sockets
    ```

1. Press **Clear host cache**

    ```bash
    chrome://net-internals/#dns
    ```
