---
title: Miljø
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS Client bruger [miljøvariabler][wiki-env] til at gemme en del af opsætningen. Den øvrige opsætning er gemt i [opsætningsfilen][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

The log destination, must be an absolute path to the file or one of the special values. See the [logging configuration description][conf-log] in the article about the configuration file.

This environment variable overrides the [`log.output`][conf-log] field in the configuration file.

**Standard:** **Ikke opsat.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Formatet på logposter. See the [logging configuration description][conf-log] in the article about the configuration file.

This environment variable overrides the [`log.format`][conf-log] field in the configuration file.

**Standard:** **Ikke opsat.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Når sat til `1`, har logposter et tidsstempel. Når sat til `0`, har logposter ingen.

This environment variable overrides the [`log.timestamp`][conf-log] field in the configuration file.

**Standard:** **Ikke opsat.**

## `VERBOSE` {#VERBOSE}

Når sat til `1`, detaljeret logning slået til. Når sat til `1`, detaljeret logning slået fra.

This environment variable overrides the [`log.verbose`][conf-log] field in the configuration file.

**Standard:** **Ikke opsat.**
