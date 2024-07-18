---
title: Environment
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS Client uses [environment variables][wiki-env] to store part of the configuration. The rest of the configuration is stored in the [configuration file][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

De logbestemming moet een absoluut pad naar het bestand of een van de speciale waarden zijn. Zie de [logconfiguratiebeschrijving][conf-log] in het artikel over het configuratiebestand.

Deze omgevingsvariabele overschrijft het veld [`log.output`][conf-log] in het configuratiebestand.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

The format for log entries. Zie de [logconfiguratiebeschrijving][conf-log] in het artikel over het configuratiebestand.

Deze omgevingsvariabele overschrijft het veld [`log.format`][conf-log] in het configuratiebestand.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

When set to `1`, log entries have a timestamp. When set to `0`, log entries don’t have it.

Deze omgevingsvariabele overschrijft het veld [`log.timestamp`][conf-log] in het configuratiebestand.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

When set to `1`, enable verbose logging. When set to `0`, disable it.

Deze omgevingsvariabele overschrijft het veld [`log.verbose`][conf-log] in het configuratiebestand.

**Default:** **Unset.**
