---
title: Miljø
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS CLI bruger [miljøvariablen][wiki-env] til at gemme en del af opsætningen. Den øvrige opsætning er gemt i [opsætningsfilen][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Logdestinationen skal være en absolut sti til filen eller en af de specielle værdier. Se [logningsopsætningsbeskrivelsen][conf-log] i artiklen om opsætningsfilen.

Denne miljøvariabel tilsidesætter [`log.output`][conf-log]-feltet i opsætningsfilen.

**Standard:** **Ikke opsat.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Formatet på logposter. Se [logningsopsætningsbeskrivelsen][conf-log] i artiklen om opsætningsfilen.

Denne miljøvariabel tilsidesætter [`log.format`][conf-log]-feltet i opsætningsfilen.

**Standard:** **Ikke opsat.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Når sat til `1`, har logposter et tidsstempel. Når sat til `0`, har logposter ingen.

Denne miljøvariabel tilsidesætter [`log.timestamp`][conf-log]-feltet i opsætningsfilen.

**Standard:** **Ikke opsat.**

## `VERBOSE` {#VERBOSE}

Når sat til `1`, detaljeret logning slået til. Når sat til `1`, detaljeret logning slået fra.

Denne miljøvariabel tilsidesætter [`log.verbose`][conf-log]-feltet i opsætningsfilen.

**Standard:** **Ikke opsat.**
