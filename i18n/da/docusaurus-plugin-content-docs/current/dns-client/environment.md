---
title: Miljø
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS Client bruger [miljøvariabler][wiki-env] til at gemme en del af opsætningen. Den øvrige opsætning er gemt i [opsætningsfilen][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Logdestinationen skal være en absolut sti til filen eller en af de specielle værdier.

- `syslog` betyder, at den platformsspecifikke systemlog bruges, dvs. syslog til Linux og Event Log til Windows.

  :::note

  Logposter skrevet til systemloggen er i tekstformat og bruger systemets tidsstempling.

  :::

- "stdout" for standard outputstrøm.

- "stdout" for standard fejlstrøm.

- Absolut sti til logfilen.

  **Eks.:** `/home/user/logs.txt`

  **Eks.:** `C:\Users\user\logs.txt`

Denne miljøvariabel har prioritet over feltet [log.output][conf-log] i opsætningsfilen.

**Standard:** **Ikke opsat.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Formatet på logposter.  Gyldige formater er:

- `adguard_legacy`
- `default`
- `json`
- `json_hybrid`
- `text`

<!--
    TODO(s.chzhen):  Add output examples.
-->

Denne miljøvariabel har prioritet over feltet [log.format][conf-log] i opsætningsfilen.

**Standard:** **Ikke opsat.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Når sat til `1`, har logposter et tidsstempel. Når sat til `0`, har logposter ingen.

Denne miljøvariabel har prioritet over feltet [log.timestamp][conf-log] i opsætningsfilen.

**Standard:** **Ikke opsat.**

## `VERBOSE` {#VERBOSE}

Når sat til `1`, detaljeret logning slået til. Når sat til `1`, detaljeret logning slået fra.

Denne miljøvariabel har prioritet over feltet [log.verbose][conf-log] i opsætningsfilen.

**Standard:** **Ikke opsat.**
