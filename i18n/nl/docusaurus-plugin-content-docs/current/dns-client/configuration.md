---
title: Configuration file
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

The `dns` object configures the behavior of the DNS server. It has the following properties:

### `cache` {#dns-cache}

The `cache` object configures caching the results of querying DNS. It has the following properties:

- `enabled`: Whether or not the DNS results should be cached.

  **Example:** `true`

- `size`: The maximum size of the DNS result cache as human-readable data size. It must be greater than zero if `enabled` is `true`.

  **Example:** `128 MB`

- `client_size`: The maximum size of the DNS result cache for each configured client’s address or subnetwork as human-readable data size. It must be greater than zero if `enabled` is `true`.

  **Example:** `4 MB`

### `server` {#dns-server}

The `server` object configures the handling of incoming requests. It has the following properties:

- `listen_addresses`: The set of addresses with ports to listen on.

  **Property example:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

The `bootstrap` object configures the resolution of [upstream](#dns-upstream) server addresses. It has the following properties:

- `servers`: The list of servers to resolve the hostnames of upstream servers.

  **Property example:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: The timeout for bootstrap DNS requests as a human-readable duration.

  **Example:** `2 s`

### `upstream` {#dns-upstream}

The `upstream` object configures the actual resolving of requests. It has the following properties:

- `groups`: The set of upstream servers keyed by the group’s name. It has the following fields:

  - `address`: The upstream server’s address.

    **Example:** `'8.8.8.8:53'`

  - `match`: The list of criteria to match the request against. Each entry may contain the following properties:

    - `question_domain`: The domain or a suffix of the domain that the set of upstream servers should be used to resolve.

      **Example:** `'mycompany.local'`

    - `client`: The client’s address or a subnet of the client’s address from which the set of upstream servers should resolve requests. It must have no significant bits outside the subnet mask.

      **Example:** `'192.0.2.0/24'`

    :::note

    Properties specified within a single entry are combined with a logical AND. Entries are combined with a logical OR.

    :::

    **Property example:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` should contain at least a single entry named `default`, and optionally a single entry named `private`, both should have no `match` property.

  :::

  The `default` group will be used when there are no matches among other groups. The `private` group will be used to resolve the PTR requests for the private IP addresses. Such queries will be answered with `NXDOMAIN` if no `private` group is defined.

- `timeout`: The timeout for upstream DNS requests as a human-readable duration.

  **Example:** `2s`

### `fallback` {#dns-fallback}

The `fallback` object configures the behavior of the DNS server in case of failure. It has the following properties:

- `servers`: The list of servers to use after the actual [upstream](#dns-upstream) failed to respond.

  **Property example:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: The timeout for fallback DNS requests as a human-readable duration.

  **Example:** `2s`

## `debug` {#debug}

The `debug` object configures the debugging features. It has the following properties:

### `pprof` {#debug-pprof}

The `pprof` object configures the [`pprof`][pkg-pprof] HTTP handlers. It has the following properties:

- `port`: The port to listen on for debug HTTP requests on localhost.

  **Example:** `6060`

- `enabled`: Whether or not the debug profiling is enabled.

  **Example:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

The `log` object configures the logging. It has the following properties:

- `output`: The output to which logs are written.

  :::note

  Log entries written to the system log are in `text` format (see below) and use the system timestamp.

  :::

  Possible values:

  - `syslog` means that the platform-specific system log is used, which is syslog for Linux and Event Log for Windows.

  - `stdout` for standard output stream.

  - `stderr` for standard error stream.

  - Absolute path to the log file.

  **Example:** `/home/user/logs`

  **Example:** `C:\Users\user\logs.txt`

  **Example:** `syslog`

- `format`: Specifies the format of the log entries.

  Possible values:

  - `standaard`: Een eenvoudig formaat. Voorbeeld:

    ```none
    INFO service heeft prefix=program addr=127.0.0.1:53 gestart
    ```

  - 'json': een gestructureerd JSON-formaat. Voorbeeld:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - 'jsonhybrid': Zelfde als 'json', maar met een beperkt aantal velden. Voorbeeld:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - 'tekst': Een gestructureerd tekstformaat. Voorbeeld:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Example:** `default`

- `timestamp`: Specifies whether to include a timestamp in the log entries.

  **Example:** `false`

- `verbose`: Specifies whether the log should be more informative.

  **Example:** `false`
