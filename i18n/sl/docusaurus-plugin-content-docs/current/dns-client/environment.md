---
title: Environment
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS CLI uses [environment variables][wiki-env] to store part of the configuration. The rest of the configuration is stored in the [configuration file][conf].

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

The log destination, must be an absolute path to the file or one of the special values. See the [logging configuration description][conf-log] in the article about the configuration file.

This environment variable overrides the [`log.output`][conf-log] field in the configuration file.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

The format for log entries. See the [logging configuration description][conf-log] in the article about the configuration file.

This environment variable overrides the [`log.format`][conf-log] field in the configuration file.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

When set to `1`, log entries have a timestamp. When set to `0`, log entries don’t have it.

This environment variable overrides the [`log.timestamp`][conf-log] field in the configuration file.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

When set to `1`, enable verbose logging. When set to `0`, disable it.

This environment variable overrides the [`log.verbose`][conf-log] field in the configuration file.

**Default:** **Unset.**
