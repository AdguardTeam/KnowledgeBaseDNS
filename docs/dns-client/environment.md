---
title: Environment
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS Client uses [environment variables][wiki-env] to store part of the configuration. The rest of the configuration is stored in the [configuration file][conf].

[conf]:     configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

The log destination, must be an absolute path to the file or one of the special values.

  - `syslog` means that the platform-specific system log is used, which is syslog for Linux and Event Log for Windows.

    :::note

    Log entries written to the system log are in text format and use the system timestamp.

    :::

  - `stdout` for standard output stream.

  - `stderr` for standard error stream.

  - Absolute path to the log file.

    **Example:** `/home/user/logs.txt`

    **Example:** `C:\Users\user\logs.txt`

This environment variable has priority over the [log.output][conf-log] field in the configuration file.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

The format for log entries.  Valid formats are:

  - `adguard_legacy`
  - `default`
  - `json`
  - `json_hybrid`
  - `text`

<!--
    TODO(s.chzhen):  Add output examples.
-->

This environment variable has priority over the [log.format][conf-log] field in the configuration file.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

When set to `1`, log entries have a timestamp. When set to `0`, log entries don’t have it.

This environment variable has priority over the [log.timestamp][conf-log] field in the configuration file.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

When set to `1`, enable verbose logging. When set to `0`, disable it.

This environment variable has priority over the [log.verbose][conf-log] field in the configuration file.

**Default:** **Unset.**
