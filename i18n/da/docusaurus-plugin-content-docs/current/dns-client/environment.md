---
title: Miljø
sidebar_position: 3
---

AdGuard DNS CLI bruger [miljøvariablen][wiki-env] til at gemme en del af opsætningen. Den øvrige opsætning er gemt i [opsætningsfilen][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Logdestinationen skal være en absolut sti til filen eller en af de specielle værdier. Se [logningsopsætningsbeskrivelsen][conf-log] i artiklen om opsætningsfilen.

Denne miljøvariabel tilsidesætter feltet [`log.output`][conf-log] i opsætningsfilen.

**Standard:** **Ikke angivet.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Formatet på logposter. Se [logningsopsætningsbeskrivelsen][conf-log] i artiklen om opsætningsfilen.

Denne miljøvariabel tilsidesætter feltet [`log.format`][conf-log] i opsætningsfilen.

**Standard:** **Ikke angivet.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Når sat til `1`, har logposter et tidsstempel. Når sat til `0`, har logposter ingen.

Denne miljøvariabel tilsidesætter feltet [`log.timestamp`][conf-log] i opsætningsfilen.

**Standard:** **Ikke angivet.**

## `VERBOSE` {#VERBOSE}

Når sat til `1`, er detaljeret logning slået til. Når sat til `0`, er det slået fra.

Denne miljøvariabel tilsidesætter feltet [`log.verbose`][conf-log] i opsætningsfilen.

**Standard:** **Ikke angivet.**
