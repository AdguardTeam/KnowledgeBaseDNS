---
title: 配置文件
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

完整的 [YAML][yaml] 配置文件示例请参考配置文件 [`config.dist.yml`][dist]。

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

`dns` 配置对象用于设置 DNS 服务器的行为。 它包含以下属性：

### `cache` {#dns-cache}

`cache` 对象配置缓存查询 DNS 的结果。 它包含以下属性：

- `enabled`：是否启用 DNS 结果缓存。

  **示例：** `true`

- `size`：DNS 结果缓存的最大值（人类可读的数据量格式）。 如果 `enabled` 为 `true`，该值必须大于零。

  **示例：** `128MB`

- `client_size`：指定每个已配置客户端地址或子网的 DNS 结果缓存的最大尺寸（人类可读的数据量格式）。 如果 `enabled` 为 `true`，该值必须大于零。

  **示例：** `4MB`

### `server` {#dns-server}

`server` 对象配置处理传入请求。 它包含以下属性：

- `listen_addresses`：客户端监听的地址和端口集合。

  **属性示例：**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

`bootstrap` 对象配置[上游](#dns-upstream)服务器地址的解析。 它包含以下属性：

- `servers`：该列表用于指定上游服务器主机名的解析服务器。

  **属性示例：**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`：指定引导 DNS 请求的超时时间，使用人类可读的数据量格式。

  **示例：** `2s`

### `upstream` {#dns-upstream}

`upstream` 对象用于配置实际的请求解析。 它包含以下属性：

- `groups`：使用服务器组名称作为键值定义了一组上游服务器集合。 它包含以下字段：

  - `address`：指定上游服务器的地址和端口。

    **示例：** `'8.8.8.8:53'`

  - `match`: 用于定义将哪些请求路由到该服务器组进行解析。 每个列表项可以包含以下属性：

    - `question_domain`：指定域名或域名后缀。如果请求的域名匹配该值，则使用此服务器组进行解析。

      **示例：** `'mycompany.local'`

    - `client`：指定客户端的地址或子网。如果请求来自匹配的客户端地址或子网，则使用此服务器组进行解析。 该值必须是子网掩码内的有效地址。

      **示例：** `'192.0.2.0/24'`

    :::note

    同一条目中指定的属性会使用逻辑 AND 进行组合判断。 不同条目之间的判断会使用逻辑 OR 进行组合判断。

    :::

    **属性示例：**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` 配置中至少需要包含一个名为 `default` 的条目，并且可以 (可选) 包含一个名为 `private` 的条目，两个条目都不应该包含 `match` 属性。

  :::

  当其他组的匹配规则都不满足时，将使用 `default` 组指定的服务器进行解析。 如果定义了 `private` 组，则会将其用于解析来自私有 IP 地址的反向解析请求 (PTR)。 如果未定义 `private` 组，此类请求将返回 `NXDOMAIN`。

- `timeout`：指定上游 DNS 请求的超时时间，使用人类可读的数据量格式。

  **示例：** `2s`

### `fallback` {#dns-fallback}

`fallback` 对象用于配置当主上游 DNS 服务器无法响应时的备用行为。 它包含以下属性：

- `servers`：指定在主[上游服务器](#dns-upstream)无法响应时使用的备用服务器列表。

  **属性示例：**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`：指定备用 DNS 请求的超时时间，使用人类可读的数据量格式。

  **示例：** `2s`

## `debug` {#debug}

`debug` 对象配置调试功能。 它包含以下属性：

### `pprof` {#debug-pprof}

`pprof` 对象配置 [`pprof`][pkg-pprof] HTTP 处理程序。 它包含以下属性：

- `port`: 用于在本地监听调试 HTTP 请求的端口。

  **示例：** `6060`

- `enabled`：是否启用调试。

  **示例：** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

`log` 对象配置日志记录。 它包含以下属性：

- `output`：指定日志记录的输出位置。

  :::note

  写入系统日志的日志条目采用 `text` 文本格式（如下），并使用系统时间戳。

  :::

  可能的选项值如下：

  - `syslog` 表示使用特定于平台的系统日志，对于 Linux 是 syslog，对于 Windows 是 Event Log。

  - `stdout` 表示标准输出流。

  - `stderr` 表示标准错误流。

  - 日志文件的绝对路径。

  **示例：** `/home/user/logs`

  **示例：** `C:\Users\user\logs.txt`

  **示例：** `syslog`

- `format`：指定日志条目的格式。

  可能的选项值如下：

  - `default`：简单格式。 例如：

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`：结构化 JSON 格式。 例如：

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`：与 `json` 相同，但字段数量有限。 例如：

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`：结构化文本格式。 例如：

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **示例：** `default`

- `timestamp`：指定是否在日志条目中包含时间戳。

  **示例：** `false`

- `verbose`：指定是否启用详细日志输出。

  **示例：**`false`
