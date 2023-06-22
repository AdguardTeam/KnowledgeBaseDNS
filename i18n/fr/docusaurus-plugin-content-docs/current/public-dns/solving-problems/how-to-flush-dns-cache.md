---
title: Comment vider le cache DNS
sidebar_position: 1
---

:::info

Nous expliquons ici comment vous pouvez vider le cache DNS pour résoudre les problèmes de DNS public. Vous pouvez utiliser le Bloqueur AdGuard pour configurer des serveurs DNS, y compris des serveurs chiffrés

Lien rapide : [Télécharger le Bloqueur AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns)

:::

## Qu'est-ce que le cache DNS ?

Le cache DNS stocke les adresses IP des sites visités sur l'ordinateur local pour qu'ils se chargent plus rapidement la prochaine fois. Au lieu d’effectuer une longue recherche DNS, le système répond aux requêtes avec des enregistrements DNS provenant du cache DNS temporaire.

Le cache DNS contient ce qu'on appelle les [enregistrements de ressource (RR)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), qui sont :

* **Données ressources (ou rdata)**;
* **Type d'enregistrement**;
* **Nom d'enregistrement**;
* **TTL (durée de vie)**;
* **Classe**;
* **Longueur des données de la ressource**.

## Quand peut-il s'avérer nécessaire de vider le cache

**Vous avez changé votre fournisseur DNS pour AdGuard DNS.** Si l'utilisateur a modifié son DNS, l'affichage du résultat peut prendre un certain temps à cause du cache.

**Vous recevez régulièrement une erreur 404.** Par exemple, le site web a été transféré sur un autre serveur et son adresse IP a changé. Pour que le navigateur ouvre le site web à partir de la nouvelle adresse IP, vous devez supprimer l'adresse IP mise en cache du cache DNS.

**Vous souhaitez améliorer votre confidentialité.**

## Comment vider le cache DNS sur différents systèmes d'exploitation

### iOS

Il existe de différentes façons de vider le cache DNS sur votre iPad ou iPhone.

Le plus simple est d'activer le mode Avion (par exemple, dans le Centre de contrôle ou dans l'application Paramètres) et de le désactiver à nouveau. Le cache DNS sera vidé.

Une autre option consiste à réinitialiser les paramètres réseau de votre appareil dans l'application Paramètres. Ouvrez *Général*, faites défiler vers le bas, recherchez *Réinitialiser* et appuyez sur *Réinitialiser les paramètres réseau*.

> Remarque : en procédant ainsi, vous perdrez les connexions aux routeurs Wi-Fi et d'autres paramètres réseau spécifiques, y compris les personnalisations des serveurs DNS. Vous devrez les réinitialiser manuellement.

### Android

Le moyen le plus simple de vider votre cache DNS sur votre appareil Android consiste à activer et désactiver le mode Avion. Vous pouvez activer/désactiver le mode Avion dans le volet Paramètres rapides.

Un redémarrage complet peut également aider à vider le cache DNS de votre appareil. Pour cela, maintenez le bouton d'alimentation enfoncé pendant au moins 20 secondes. Cela obligera (généralement) votre appareil à redémarrer manuellement et le cache DNS sera effacé.

Une autre option consiste à réinitialiser les paramètres réseau de votre appareil dans l'application Paramètres. Ouvrez *Paramètres > Système > Avancé > Options de réinitialisation > Réinitialiser les paramètres réseau* et appuyez sur *Réinitialiser les paramètres* pour confirmer.

> Remarque : en procédant ainsi, vous perdrez les connexions aux routeurs Wi-Fi et d'autres paramètres réseau spécifiques, y compris les personnalisations des serveurs DNS. Vous devrez les réinitialiser manuellement.

### macOS

Pour vider le cache DNS sur macOS, ouvrez le Terminal (vous pouvez le trouver en utilisant la recherche Spotlight — pour ça, appuyez sur Commande+Espace et tapez *Terminal*) et saisissez la commande suivante :

`sudo killall -HUP mDNSResponder`

Sur macOS Big Sur 11.2.0 et macOS Monterey 12.0.0, vous pouvez également utiliser cette commande :

`sudo dscacheutil -flushcache`

Ensuite, entrez votre mot de passe d'administrateur pour terminer le processus.

### Windows

Pour vider le cache DNS sur votre appareil Windows, procédez comme suit :

Ouvrez l'invite de commande en tant qu'administrateur. Vous pouvez le trouver dans le menu de départ en tapant *invite de commande* ou *cmd*. Tapez ensuite `ipconfig/flushdns` et appuyez la touche Entrée.

Vous verrez la ligne *Le cache du résolveur DNS a été vidé*. C'est fait !

### Linux

Linux ne dispose pas de cache DNS au niveau du système d'exploitation, à moins qu'un service de cache tel que systemd-resolved, DNSMasq, BIND ou Nscd soit installé et fonctionne. Le processus d'effacement du cache DNS dépend de la distribution Linux et du service de cache utilisé.

Pour chaque distribution, vous devez démarrer une fenêtre de terminal. Appuyez sur Ctrl + Alt + T sur votre clavier et utilisez la commande correspondante pour effacer le cache DNS du service exécuté par votre système Linux.

Pour savoir quel résolveur DNS vous utilisez, commandez `sudo lsof -i :53 -S`.

#### systemd-resolved

Pour effacer le cache DNS **systemd-resolved** , tapez :

`sudo systemd-resolve --flush-caches`

En cas de succès, la commande ne renvoie aucun message.

#### DNSMasq

Pour vider le cache **DNSMasq** , vous devez le redémarrer :

`sudo service dnsmasq restart`

#### NSCD

Pour vider le cache **NSCD** , vous devez également redémarrer le service :

`sudo service nscd restart`

#### BIND

Pour vider le cache DNS **BIND** , exécutez la commande :

`rndc flush`

Ensuite, vous devrez recharger BIND :

`rndc reload`

Vous recevrez le message indiquant que le serveur a été rechargé avec succès.

## Comment vider le cache DNS dans Chrome

Cela peut être utile si vous ne souhaitez pas redémarrer un navigateur à chaque fois lorsque vous travaillez avec le DNS privé AdGuard ou AdGuard Home. Les réglages 1-2 ne doivent être modifiés qu'une seule fois.

1. Désactivez **DNS sécurisé** dans les paramètres de Chrome

```bash
chrome://settings/security
```

2. Désactivez **Résolveur DNS asynchrone**

```bash
chrome://flags/#enable-async-dns
```

3. Appuyez sur les deux boutons ici

```bash
chrome://net-internals/#sockets
```

4. Appuyez sur **Effacer le cache de l'hôte**

```bash
chrome://net-internals/#dns
```
