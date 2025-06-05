---
title: Konfigurationsdatei
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

In der Datei [`config.dist.yml`][dist] finden Sie ein vollständiges Beispiel für eine [YAML][yaml]-Konfigurationsdatei mit Kommentaren.

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

Das Objekt `dns` konfiguriert das Verhalten des DNS-Servers. Es hat folgende Eigenschaften:

### `cache` {#dns-cache}

Das Objekt `cache` konfiguriert das Zwischenspeichern der Ergebnisse von DNS-Abfragen. Es hat folgende Eigenschaften:

- `enabled`: Legt fest, ob die DNS-Ergebnisse zwischengespeichert werden sollen oder nicht.

  **Beispiel:** `true`

- `size`: Die maximale Größe des DNS-Ergebnis-Caches als für den Nutzer erfassbare Datengröße. Sie muss größer als Null sein, wenn `enabled` auf `true` steht.

  **Beispiel:** `128 MB`

- `client_size`: Die maximale Größe des DNS-Ergebnis-Caches für die Adresse oder das Subnetz eines jeden konfigurierten Clients in Form von für den Nutzer erfassbaren Daten. Sie muss größer als Null sein, wenn `enabled` auf `true` steht.

  **Beispiel:** `4 MB`

### `server` {#dns-server}

Das Objekt `server` konfiguriert die Verarbeitung der eingehenden Anfragen. Es hat folgende Eigenschaften:

- `bind_retry`: The confguration of the retry mechanism for binding to the listen addresses. This is useful if the server is started before the network is ready and the addresses are not yet available, as on some editions of Windows when installed as a system service.

  :::note

  This object is available since **v0.0.3**.

  :::

  Es hat folgende Eigenschaften:

  - `enabled`: Whether bind retry is enabled or not.

    **Beispiel:** `true`

  - `interval`: The interval between retries as a human-readable duration.

    **Example:** `1s`

  - `count`: The maximum number of attempts after the first failure. That is, if `count` is `4`, the total number of attempts will be five.

    **Example:** `4`

- `listen_addresses`: Die Menge der Adressen mit den zu überwachenden Ports.

  **Eigenschaftsbeispiel:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

Das Objekt `bootstrap` konfiguriert die Auflösung von [upstream](#dns-upstream) Serveradressen. Es hat folgende Eigenschaften:

- `servers`: Die Liste der Server, die die Hostnamen der Upstream-Server auflösen.

  **Eigenschaftsbeispiel:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: Die Zeitüberschreitung für Bootstrap-DNS-Anfragen in einer für den Nutzer erfassbaren Dauer.

  **Beispiel:** `2 s`

### `upstream` {#dns-upstream}

Das Objekt `upstream` konfiguriert die eigentliche Auflösung von Anfragen. Es hat folgende Eigenschaften:

- `groups`: Die Gruppe von Upstream-Servern, die durch den Gruppennamen gekennzeichnet sind. Es hat folgende Eigenschaften:

  - `address`: Die Adresse des Upstream-Servers.

    **Beispiel:** `'8.8.8.8:53'`

  - `match`: Die Liste der Kriterien, mit denen die Anfrage abgeglichen werden soll. Jeder Eintrag kann die folgenden Eigenschaften enthalten:

    - `question_domain`: Die Domain oder ein Suffix der Domain, die von der Gruppe der Upstream-Server aufgelöst werden soll.

      **Beispiel:** `'mycompany.local'`

    - `client`: Die Adresse des Clients oder ein Teilnetz der Adresse des Clients, von dem aus die Gruppe der Upstream-Server Anfragen auflösen soll. Sie darf keine signifikanten Bits außerhalb der Subnetzmaske haben.

      **Beispiel:** `'192.0.2.0/24'`

    :::note

    Die in einem einzigen Eintrag angegebenen Eigenschaften werden mit einem logischen UND verknüpft. Die Eingaben werden mit einem logischen ODER kombiniert.

    :::

    **Eigenschaftsbeispiel:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` sollte mindestens einen einzelnen Eintrag namens `default` und optional einen einzelnen Eintrag namens `private` enthalten, beide sollten keine `match` Eigenschaft haben.

  :::

  Die Gruppe `default` wird verwendet, wenn es keine Übereinstimmung mit anderen Gruppen gibt. Die Gruppe `private` wird verwendet, um die PTR-Anfragen für die privaten IP-Adressen aufzulösen. Solche Abfragen werden mit `NXDOMAIN` beantwortet, wenn keine Gruppe `private` definiert ist.

- `timeout`: Die Zeitüberschreitung für vorgelagerte DNS-Anfragen in einer für den Nutzer erfassbaren Dauer.

  **Beispiel:** `2s`

### `fallback` {#dns-fallback}

Das Objekt `fallback` konfiguriert das Verhalten des DNS-Servers im Falle eines Fehlers. Es hat folgende Eigenschaften:

- `server`: Die Liste der Server, die verwendet werden sollen, nachdem der eigentliche [upstream](#dns-upstream) nicht geantwortet hat.

  **Eigenschaftsbeispiel:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: Die Zeitüberschreitung für Fallback-DNS-Anfragen in einer für den Nutzer erfassbaren Dauer.

  **Beispiel:** `2s`

## `debug` {#debug}

Das Objekt `debug` konfiguriert die Debugging-Funktionen. Es hat folgende Eigenschaften:

### `pprof` {#debug-pprof}

Das Objekt `pprof` konfiguriert die [`pprof`][pkg-pprof] HTTP-Handler. Es hat folgende Eigenschaften:

- `port`: Der Port, der auf Debug-HTTP-Anfragen auf localhost überwacht werden soll.

  **Beispiel:** `6060`

- `enabled`: Gibt an, ob die Debug-Profilerstellung aktiviert ist oder nicht.

  **Beispiel:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

Das Objekt `log` konfiguriert die Protokollierung. Es hat folgende Eigenschaften:

- `output`: Die Ausgabe, in die die Protokolle geschrieben werden.

  :::note

  Protokolleinträge, die in das Systemprotokoll geschrieben werden, haben das Format `text` (siehe unten) und verwenden den Zeitstempel des Systems.

  :::

  Mögliche Werte:

  - `syslog` bedeutet, dass das plattformspezifische Systemprotokoll verwendet wird, d. h. „syslog“ für Linux und „Ereignisprotokoll“ für Windows.

  - `stdout` für Standard-Ausgabe-Stream.

  - `stderr` für den Standard-Fehler-Stream.

  - Absoluter Pfad zur Protokolldatei.

  **Beispiel:** `/home/user/logs`

  **Beispiel:** `C:\Users\user\logs.txt`

  **Beispiel:** `syslog`

- `format`: Gibt das Format der Protokolleinträge an.

  Mögliche Werte:

  - `default`: Ein einfaches Format. Beispiel:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Ein strukturiertes JSON-Format. Beispiel:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Identisch mit `json`, aber mit einer begrenzten Anzahl von Feldern. Beispiel:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Ein strukturiertes Textformat. Beispiel:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Standard:** `default`

- `timestamp`: Gibt an, ob ein Zeitstempel in die Protokolleinträge aufgenommen werden soll.

  **Beispiel:** `false`

- `verbose`: Gibt an, ob das Protokoll mehr Informationen enthalten soll.

  **Beispiel:** `false`
