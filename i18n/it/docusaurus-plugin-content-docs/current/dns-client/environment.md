---
title: Ambiente
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS CLI utilizza [variabili d'ambiente][wiki-env] per memorizzare parte della configurazione. Il resto della configurazione è memorizzato nel [file di configurazione][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

La destinazione del registro, deve essere un percorso assoluto al file o uno dei valori speciali. Consulta la [descrizione della configurazione del registro][conf-log] nell'articolo sul file di configurazione.

Questa variabile di ambiente sovrascrive il campo [`log.output`][conf-log] nel file di configurazione.

**Predefinito:** **Non impostato.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Il formato per le voci di registro. Consulta la [descrizione della configurazione del registro][conf-log] nell'articolo sul file di configurazione.

Questa variabile di ambiente sovrascrive il campo [`log.format`][conf-log] nel file di configurazione.

**Predefinito:** **Non impostato.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Quando impostato su `1`, le voci di registro hanno un timestamp. Quando impostato su `0`, le voci di registro non lo hanno.

Questa variabile di ambiente sovrascrive il campo [`log.timestamp`][conf-log] nel file di configurazione.

**Predefinito:** **Non impostato.**

## `VERBOSE` {#VERBOSE}

Quando impostato su `1`, attiva la registrazione dettagliata. Quando impostato su `0`, disattivalo.

Questa variabile di ambiente sovrascrive il campo [`log.verbose`][conf-log] nel file di configurazione.

**Predefinito:** **Non impostato.**
