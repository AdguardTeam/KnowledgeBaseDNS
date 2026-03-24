---
title: Vue d'ensemble
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## Qu'est-ce que AdGuard DNS CLI ?

Un client DNS léger multiplateforme pour [AdGuard DNS]. Il fonctionne comme un serveur DNS qui transmet les requêtes DNS aux résolveurs en amont correspondants.

[AdGuard DNS]: https://adguard-dns.io

## Démarrage rapide {#start}

Systèmes d'exploitation pris en charge :

- Linux
- macOS
- Windows

Les architectures de CPU prises en charge :

- ARM 64 bits
- AMD64
- i386

## Premiers pas {#start-basic}

### Systèmes d'exploitation de type Unix {#start-basic-unix}

1. Téléchargez et décompressez l'archive `.tar.gz` ou `.zip` depuis la [page de publications][releases].

   ::caution

   Sous macOS, il est crucial que les daemons installés globalement soient la propriété de `root` (voir la [documentation `launchd`][launchd-requirements]), donc l'exécutable `adguarddns-cli` doit être placé dans le répertoire `/Applications/` ou son sous-répertoire.

   :::

2. Installez-le en tant que service en exécutant :

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Modifiez le fichier de configuration `config.yaml`.

4. Démarrez le service :

   ```sh
   ./adguarddns-cli -s start -v
   ```

Pour vérifier que ça fonctionne, utilisez n'importe quel utilitaire de vérification DNS. Par exemple, en utilisant `nslookup` :

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Il suffit de télécharger et d'installer en utilisant l'installateur MSI de la [page de publications][releases].

Pour vérifier que ça fonctionne, utilisez n'importe quel utilitaire de vérification DNS. Par exemple, en utilisant `nslookup.exe` :

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Options de ligne de commande {#opts}

Chaque option remplace la valeur correspondante fournie par le fichier de configuration et l'environnement.

### Aide {#opts-help}

L'option `-h` fait en sorte que le client DNS AdGuard CLI affiche un message d'aide sur la sortie standard et quitte avec un code d'état de succès.

### Service {#opts-service}

L'option `-s <value>` spécifie l'action du service OS. Les valeurs possibles sont :

- `installer`: installe AdGuard DNS CLI comme un service
- `restart` : redémarre le service AdGuard DNS CLI en cours d'exécution
- `start` : démarre le service AdGuard DNS CLI installé
- 'status' : affiche l’état du service ADGuard DNS CLI installé
- `stop` : arrête AdGuard DNS CLI en cours d'exécution
- `uninstall` : désinstalle le service AdGuard DNS CLI

### Verbose {#opts-verbose}

L'option `-v` active la sortie de journal détaillée.

### Version {#opts-version}

L'option `--version` permet à AdGuard DNS CLI d'afficher la version de l'application sur la sortie standard et de sortir avec un code de statut de réussite.

## Configuration {#conf}

### Fichier {#conf-file}

Le fichier de configuration YAML est décrit dans [son propre article][conf], et il existe également un exemple de fichier de configuration `config.dist.yaml`.  Certains paramètres de configuration peuvent également être remplacés à l'aide de l'[environnement][env].

[conf]: configuration.md
[env]: environment.md

## Codes de sortie {#exit-codes}

Il existe plusieurs codes de sortie différents qui peuvent apparaître dans différentes conditions d'erreur :

- `0` : Terminé et sorti avec succès, sans erreurs.

- `1`: Erreur interne, très probablement une mauvaise configuration.

- `2`: Mauvais argument ou valeur de ligne de commande.
