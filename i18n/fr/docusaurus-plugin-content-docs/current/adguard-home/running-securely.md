---
title: Configuration sécurisée d’AdGuard Home
sidebar_position: 4
---

Cette page contient une liste de recommandations supplémentaires pour aider à garantir la sécurité de votre AdGuard Home.

## Le choix des adresses de serveurs

La première fois que vous lancez AdGuard Home, on vous demandera quelle interface utiliser pour servir le DNS simple. L'option la plus sécurisée et la plus pratique dépend de la manière dont vous souhaitez faire fonctionner AdGuard Home. Vous pouvez changer l'adresse ou les adresses ultérieurement en arrêtant votre AdGuard Home, en modifiant le champ `dns.bind_hosts` dans le fichier de configuration, puis en redémarrant AdGuard Home.

:::note

L'interface utilisateur ne vous permet actuellement de sélectionner qu'une seule interface, mais vous pouvez en fait sélectionner plusieurs adresses via le fichier de configuration. Nous allons améliorer l'interface utilisateur dans les prochaines versions.

:::

Si vous avez l'intention d'exécuter AdGuard Home uniquement sur **votre ordinateur**, sélectionnez l'interface de boucle locale (également connue sous le nom de «localhost»). Il est généralement appelé `localhost`, `lo` ou quelque chose de similaire et possède l'adresse `127.0.0.1`.

Si vous prévoyez d'exécuter AdGuard Home sur un **routeur au sein d'un petit réseau isolé**, sélectionnez l'interface servie localement. Les noms peuvent varier, mais ils contiennent généralement les mots `wlan` ou `wlp` et ont une adresse commençant par `192.168.`. Vous devriez probablement également ajouter l'adresse de boucle locale si vous souhaitez que les logiciels sur le routeur lui-même utilisent aussi AdGuard Home.

Si vous avez l'intention d'exécuter AdGuard Home sur un **serveur accessible publiquement,** vous voudrez probablement sélectionner l'option _Toutes les interfaces_. Notez que cela peut exposer votre serveur à des attaques DDoS. Veuillez donc lire les sections sur les paramètres d'accès et la limitation du débit ci-dessous.

## Paramètres d'accès

:::note

Si votre AdGuard Home n'est pas accessible depuis l'extérieur, vous pouvez ignorer cette section.

:::

En bas de la page _Paramètres_ → _Paramètres DNS_, vous trouverez la section _Paramètres d'accès_. Ces paramètres vous permettent soit d'interdire les clients connus pour abuser de votre instance AdGuard Home, soit d'activer le mode liste autorisée. Le mode liste autorisée est recommandé pour les instances publiques où le nombre de clients est connu et que tous les clients peuvent utiliser un DNS sécurisé.

Pour activer le mode liste autorisée, saisissez les [ClientIDs][cid] (recommandé) ou les adresses IP des clients autorisés dans le champ _Clients autorisés_.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## La désactivation du DNS simple

:::note

Si votre AdGuard Home n'est pas accessible depuis l'extérieur, vous pouvez ignorer cette section.

:::

Si tous les clients utilisant votre AdGuard Home peuvent utiliser des protocoles chiffrés, il est judicieux de désactiver le DNS simple ou de le rendre inaccessible de l'extérieur.

Si vous souhaitez désactiver complètement le service DNS simple, vous pouvez le faire sur la page _Paramètres_ → _Paramètres de chiffrement_.

Si vous souhaitez restreindre le DNS brut à un usage interne uniquement, arrêtez votre AdGuard Home, éditez le champ `dns.bind_hosts` dans le fichier de configuration pour ne contenir que l'adresse de boucle, puis redémarrez AdGuard Home.

## La limitation de débit du DNS simple

:::note

Si votre AdGuard Home n'est pas accessible depuis l'extérieur, vous pouvez ignorer cette section.

:::

La limitation de débit par défaut du DNS brut de 20 devrait généralement être suffisante, mais si vous avez une liste de clients connus, vous pouvez les ajouter à la liste d'autorisation et définir une limitation de débit plus stricte pour les autres clients.

## Des problèmes de service du système d'exploitation

Pour éviter l’escalade des privilèges par la plantation binaire, il est important que le répertoire où AdGuard Home est installé dispose d’une propriété et d’autorisations appropriées.

Nous remercions Go Compile pour son aide dans la rédaction de cette section.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

Le répertoire de travail d'AdGuard Home, qui est par défaut `/Applications/AdGuardHome` sur macOS et `/opt/AdGuardHome` sur d'autres systèmes Unix, ainsi que le binaire lui-même devraient généralement avoir la propriété `root:root` et ne pas être modifiables par quiconque sauf `root`. Vous pouvez vérifier cela avec la commande suivante, en remplaçant `/opt/AdGuardHome` par votre répertoire et `/opt/AdGuardHome/AdGuardHome` par votre binaire :

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Une sortie raisonnablement sécurisée devrait ressembler à ceci :

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Notez l'absence d'autorisation d'écriture pour quiconque sauf `root`, ainsi que la propriété `root`. Si les autorisations et/ou la propriété ne sont pas correctes, exécutez les commandes suivantes sous `root` :

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Le principe est le même sur Windows : assurez-vous que le répertoire AdGuard Home, généralement `C:\Program Files\AdGuardHome`, et le binaire `AdGuardHome.exe` ont les autorisations qui n'autoriseraient que les utilisateurs réguliers à les lire et à les exécuter/lister.

Nous prévoyons de publier des versions Windows sous forme de fichiers installateurs MSI qui s'assureront que cela est effectué automatiquement.
