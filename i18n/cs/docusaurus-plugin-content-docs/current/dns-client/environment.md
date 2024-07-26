---
title: Prostředí
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

Klient AdGuard DNS používá [proměnné prostředí][wiki-env] k uložení části konfigurace. Zbytek konfigurace je uložen v [konfiguračním souboru][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Cíl protokolu, musí to být absolutní cesta k souboru nebo jedna ze speciálních hodnot. Viz [popis konfigurace protokolu][conf-log] v článku o konfiguračním souboru.

Tato proměnná prostředí nahrazuje pole [`log.output`][conf-log] v konfiguračním souboru.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Formát záznamů protokolu. Viz [popis konfigurace protokolu][conf-log] v článku o konfiguračním souboru.

Tato proměnná prostředí nahrazuje pole [`log.format`][conf-log] v konfiguračním souboru.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

Je-li nastavena hodnota `1`, záznamy protokolu obsahují časové razítko. Pokud je nastavena na `0`, záznamy protokolu jej nemají.

Tato proměnná prostředí nahrazuje pole [`log.timestamp`][conf-log] v konfiguračním souboru.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

Pokud je nastavena hodnota `1`, povolí slovní protokolování. Pokud je nastavena na `0`, je zakázáno.

Tato proměnná prostředí nahrazuje pole [`log.verbose`][conf-log] v konfiguračním souboru.

**Default:** **Unset.**
