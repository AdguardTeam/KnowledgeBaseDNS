---
title: Configuration file
sidebar_position: 2
---

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

<!-- TODO(a.garipov): Find ways to add IDs to individual list items. -->

[dist]: https://github.com/AdguardTeam/AdGuardDNSCLI/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

The `dns` object configures the behavior of the DNS server. It has the following properties:

### `cache` {#dns-cache}

The `cache` object configures caching the results of querying DNS. It has the following properties:

- `enabled`: Whether or not the DNS results should be cached.

  **Example:** `true`

- `size`: The maximum size of the DNS result cache as human-readable data size. It must be greater than zero if `enabled` is `true`.

  **Example:** `128MB`

- `client_size`: The maximum size of the DNS result cache for each configured client’s address or subnetwork as human-readable data size. It must be greater than zero if `enabled` is `true`.

  **Example:** `4MB`

### `server` {#dns-server}

The `server` object configures the handling of incoming requests. It has the following properties:

- `bind_retry`: The configuration of the retry mechanism for binding to the listen addresses. This is useful if the server is started before the network is ready and the addresses are not yet available, as on some editions of Windows when installed as a system service.

  :::note

  This object is available since **v0.0.3**.

  :::

  It has the following properties:

  - `enabled`: Whether bind retry is enabled or not.

    **Example:** `true`

  - `interval`: The interval between retries as a human-readable duration.

    **Example:** `1s`

  - `count`: The maximum number of attempts after the first failure. That is, if `count` is `4`, the total number of attempts will be five.

    **Example:** `4`

- `listen_addresses`: The set of addresses with ports to listen on.

  **Property example:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

- `pending_requests`: Configuratie voor het afhandelen van dubbele gelijktijdige verzoeken die worden gebruikt om cache poisoning-aanvallen te beperken.

  :::note

  Dit object is beschikbaar sinds **v0.0.4**.

  :::

  - `enabled`: Als deze op waar staat, zal de server slechts een enkel verzoek uitvoeren voor elke unieke vraag.  Standaard is waar.

    **Example:** `true`

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

  **Example:** `2s`

### `upstream` {#dns-upstream}

The `upstream` object configures the actual resolving of requests. It has the following properties:

- `groups`: The set of upstream servers keyed by the group’s name. Het heeft de volgende eigenschappen:

  - `address`: Het adres van de upstream server. Als `autodevice.enabled` voor deze groep op `true` is ingesteld, moet het adres een URL zijn met een van de schema's `https`, `tls` of `quic`.

    **Example:** `'8.8.8.8:53'`

  - `autodevice`: Vertegenwoordigt een [automatische verbinding][automatic-connection] van een apparaat.

    :::note

    De autodevice-optie mag alleen worden gebruikt voor AdGuard DNS-upstreams. Anders kunnen we geen correcte werking garanderen.

    :::

    It has the following properties:

    - `enabled`: Bepaalt of alle clients binnen de huidige groep automatisch kunnen worden verbonden.

      :::info

      De vooraf gedefinieerde `private`-groep moet `enabled` ingesteld hebben op false, aangezien deze nog geen autodevice ondersteunt.

      :::

    - `profile_id`: [ID van een profiel][profile-id], waarin nieuwe apparaten worden toegevoegd.

    - `device_type`: Een [type apparaat][device-type] dat zal worden aangemaakt voor nieuwe clients.

    **Property example:**

    ```yaml
    'autodevice':
        - enabled: true
        - profile_id: 'defa5678'
        - device_type: 'lnx'
    ```

  - `match`: The list of criteria to match the request against. Each entry may contain the following properties:

    - `question_domain`: The domain or a suffix of the domain that the set of upstream servers should be used to resolve.

      **Example:** `'mycompany.local'`

    - `client`: The client’s address or a subnet of the client’s address from which the set of upstream servers should resolve requests. It must have no significant bits outside the subnet mask.

      **Example:** `'192.0.2.0/24'`

    :::note

    Properties specified within a single entry are combined with a logical AND. Entries are combined with a logical OR.

    :::

    **Voorbeeld van eigenschap:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` should contain at least a single entry named `default`, and optionally a single entry named `private`, both should have no `match` property. De `private`-groep wordt ook gebruikt om de HumanID te definiëren voor clients die zijn aangemaakt door de `autodevice`-functie. Als dit niet is gedefinieerd, wordt een alternatieve generatiemethode gebruikt, waarbij de HumanID wordt gevormd op basis van het IP-adres.

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

[automatic-connection]: /private-dns/connect-devices/other-options/automatic-connection
[profile-id]: /private-dns/solving-problems/automatic-devices/#dns-server-id
[device-type]: /private-dns/solving-problems/automatic-devices/#device-type

## `debug` {#debug}

The `debug` object configures the debugging features. It has the following properties:

### `pprof` {#debug-pprof}

The `pprof` object configures the [`pprof`][pkg-pprof] HTTP handlers. It has the following properties:

- `port`: The port to listen on for debug HTTP requests on localhost.

  **Example:** `6060`

- `enabled`: Whether or not the debug profiling is enabled.

  **Voorbeeld:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

The `log` object configures the logging. Het heeft de volgende eigenschappen:

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

  **Voorbeeld:** `false`
