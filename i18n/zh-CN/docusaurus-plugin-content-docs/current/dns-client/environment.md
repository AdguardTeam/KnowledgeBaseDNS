---
title: 环境变量
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS 客户端使用[环境变量][wiki-env]来存储部分配置。 其他配置存储在[配置文件][conf]中。

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

日志输出位置，必须是文件的绝对路径，或者是下面的特殊值之一。 请参阅有关配置文件的文章中的[日志记录配置说明][conf-log]。

该环境变量的优先级高于配置文件中的[`log.output`][conf-log]字段。

**默认**：**未设置**。

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

日志条目的格式。 请参阅有关配置文件的文章中的[日志记录配置说明][conf-log]。

该环境变量的优先级高于配置文件中的 [`log.format`][conf-log] 字段。

**默认**：**未设置**。

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

当设置为 `1` 时，日志条目带有时间戳。 当设置为 `0` 时，日志条目不包含它。

该环境变量的优先级高于配置文件中的 [`log.timestamp`][conf-log] 字段。

**默认**：**未设置**。

## `VERBOSE` {#VERBOSE}

设置为 `1` 时，启用详细日志记录。 设置为 `0` 时，禁用详细日志记录。

该环境变量的优先级高于配置文件中的 [`log.verbose`][conf-log] 字段。

**默认**：**未设置**。
