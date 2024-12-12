---
title: Ortam
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS Client uses [environment variables][wiki-env] to store part of the configuration. Yapılandırmanın geri kalanı [yapılandırma dosyası][conf] içinde saklanır.

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Günlük hedefi, dosyaya giden mutlak bir yol veya özel değerlerden biri olmalıdır. Yapılandırma dosyasıyla ilgili makaledeki [günlük yapılandırma açıklaması][conf-log] bölümüne bakın.

This environment variable overrides the [`log.output`][conf-log] field in the configuration file.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Günlük girişlerinin biçimi. Yapılandırma dosyasıyla ilgili makaledeki [günlük yapılandırma açıklaması][conf-log] bölümüne bakın.

This environment variable overrides the [`log.format`][conf-log] field in the configuration file.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

When set to `1`, log entries have a timestamp. When set to `0`, log entries don’t have it.

This environment variable overrides the [`log.timestamp`][conf-log] field in the configuration file.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

`1` olarak ayarlandığında ayrıntılı günlük kaydını etkinleştirir. `0` olarak ayarlandığında devre dışı bırakılır.

This environment variable overrides the [`log.verbose`][conf-log] field in the configuration file.

**Default:** **Unset.**
