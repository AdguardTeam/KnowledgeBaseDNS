---
title: Environnement
sidebar_position: 3
---


Le client AdGuard DNS utilise des [variables d'environnement][wiki-env] pour stocker une partie de la configuration. Le reste de la configuration est stocké dans le [fichier de configuration][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

La destination du log, doit être un chemin absolu vers le fichier ou l'une des valeurs spéciales. Voir la [description de la configuration de journalisation][conf-log] dans l'article sur le fichier de configuration.

Cette variable d'environnement remplace le champ [`log.output`][conf-log] dans le fichier de configuration.

**Par défaut :** **Non défini.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Le format des entrées de journal. Voir la [description de la configuration de journalisation][conf-log] dans l'article sur le fichier de configuration.

Cette variable d'environnement remplace le champ [`log.format`][conf-log] dans le fichier de configuration.

**Par défaut :** **Non défini.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Lorsqu'il est défini sur `1`, les entrées de journal sont horodatées. Lorsqu'il est défini sur `0`, les entrées de journal ne sont pas horodatées.

Cette variable d'environnement remplace le champ [`log.timestamp`][conf-log] dans le fichier de configuration.

**Par défaut :** **Non défini.**

## `VERBOSE` {#VERBOSE}

Lorsqu'il est défini sur `1`, la journalisation détaillée est activée. Lorsqu'il est défini sur `0`, elle se désactive.

Cette variable d'environnement remplace le champ [`log.verbose`][conf-log] dans le fichier de configuration.

**Par défaut :** **Non défini.**
