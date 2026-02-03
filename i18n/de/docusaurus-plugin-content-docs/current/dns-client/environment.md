---
title: Umgebung
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS CLI uses [environment variables][wiki-env] to store part of the configuration. Die restliche Konfiguration wird in der [Konfigurationsdatei][conf] gespeichert.

[conf]: configuration.md
[wiki-env]: https://de.wikipedia.org/wiki/Umgebungsvariable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Das Ziel des Protokolls muss ein absoluter Pfad zu der Datei oder einer der speziellen Werte sein. Siehe die [Konfigurationsbeschreibung der Protokollierung][conf-log] im Artikel über die Konfigurationsdatei.

Diese Umgebungsvariable überschreibt das Feld [`log.output`][conf-log] in der Konfigurationsdatei.

**Standard:** **Nicht festgelegt.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Das Format für die Protokolleinträge. Siehe die [Konfigurationsbeschreibung der Protokollierung][conf-log] im Artikel über die Konfigurationsdatei.

Diese Umgebungsvariable überschreibt das Feld [`log.format`][conf-log] in der Konfigurationsdatei.

**Standard:** **Nicht festgelegt.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Mit dem Wert `1` werden die Protokolleinträge mit einem Zeitstempel versehen. Mit dem Wert `0` haben die Protokolleinträge keinen Zeitstempel.

Diese Umgebungsvariable überschreibt das Feld [`log.timestamp`][conf-log] in der Konfigurationsdatei.

**Standard:** **Nicht festgelegt.**

## `VERBOSE` {#VERBOSE}

Mit dem Wert `1` wird die ausführliche Protokollierung aktiviert. Mit dem Wert `0` wird sie deaktiviert.

Diese Umgebungsvariable überschreibt das Feld [`log.verbose`][conf-log] in der Konfigurationsdatei.

**Standard:** **Nicht festgelegt.**
