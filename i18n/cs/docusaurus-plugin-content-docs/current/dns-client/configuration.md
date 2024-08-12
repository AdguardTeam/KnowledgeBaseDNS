---
title: Konfigurační soubor
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

Úplný příklad konfiguračního souboru [YAML][yaml] s komentáři najdete v souboru [`config.dist.yml`][dist].

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

Objekt `dns` konfiguruje chování DNS serveru. Vyznačuje se těmito vlastnostmi:

### `cache` {#dns-cache}

Objekt `cache` konfiguruje ukládání výsledků DNS dotazů do mezipaměti. Vyznačuje se těmito vlastnostmi:

- `enabled`: Zda se mají výsledky DNS ukládat do mezipaměti.

  **Příklad:** `true`

- `size`: Maximální velikost mezipaměti výsledků DNS jako velikost dat čitelných pro člověka. Musí být větší než nula, pokud je `enabled` nastaveno na `true`.

  **Example:** `128 MB`

- `client_size`: Maximální velikost mezipaměti výsledků DNS pro každou nakonfigurovanou adresu nebo podsíť klienta jako velikost dat čitelná pro člověka. Musí být větší než nula, pokud je `enabled` nastaveno na `true`.

  **Example:** `4 MB`

### `server` {#dns-server}

Objekt `server` konfiguruje zpracování příchozích požadavků. Vyznačuje se těmito vlastnostmi:

- `listen_addresses`: Sada adres s porty, na kterých se má naslouchat.

  **Příklad vlastnosti:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

Objekt `bootstrap` konfiguruje překlad adres serverů [upstream](#dns-upstream). Vyznačuje se těmito vlastnostmi:

- `servers`: Seznam serverů pro překlad názvů hostitelů odchozích serverů.

  **Příklad vlastnosti:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: Časový limit pro spouštěcí požadavky DNS jako doba trvání čitelná pro člověka.

  **Example:** `2 s`

### `upstream` {#dns-upstream}

Objekt `upstream` konfiguruje skutečné řešení požadavků. Vyznačuje se těmito vlastnostmi:

- `groups`: Sada odchozích serverů s klíčem podle názvu skupiny. Vyznačuje se těmito poli:

  - `address`: Adresa odchozího serveru.

    **Příklad:** `'8.8.8.8:53'`

  - `match`: Seznam kritérií, podle kterých se má požadavek porovnat. Každá položka může obsahovat následující vlastnosti:

    - `question_domain`: Doména nebo přípona domény, kterou má sada odchozích serverů použít k překladu.

      **Příklad:** `'mycompany.local'`

    - `client`: Adresa klienta nebo podsíť adresy klienta, ze které má sada odchozích serverů překládat požadavky. Nesmí mít žádné významné bity mimo masku podsítě.

      **Příklad:** `'192.0.2.0/24'`

    :::note

    Vlastnosti zadané v rámci jedné položky se kombinují pomocí logického AND. Záznamy se kombinují pomocí logického OR.

    :::

    **Příklad vlastnosti:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` by měla obsahovat alespoň jednu položku s názvem `default` a volitelně jednu položku s názvem `private`, obě by neměly mít vlastnost `match`.

  :::

  Skupina `default` se použije, pokud mezi ostatními skupinami není žádná shoda. Skupina `private` bude použita pro překlad požadavků PTR pro privátní IP adresy. Pokud není definována žádná skupina `private`, budou tyto dotazy zodpovězeny pomocí `NXDOMAIN`.

- `timeout`: Časový limit pro odchozí požadavky DNS jako doba trvání čitelná pro člověka.

  **Příklad:** `2s`

### `fallback` {#dns-fallback}

Objekt `fallback` konfiguruje chování DNS serveru v případě selhání. Vyznačuje se těmito vlastnostmi:

- `servers`: Seznam serverů, které se mají použít poté, co aktuální [upstream](#dns-upstream) neodpověděl.

  **Příklad vlastnosti:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: Časový limit pro záložní požadavky DNS jako doba trvání čitelná pro člověka.

  **Příklad:** `2s`

## `debug` {#debug}

Objekt `debug` konfiguruje funkce ladění. Vyznačuje se těmito vlastnostmi:

### `pprof` {#debug-pprof}

Objekt `pprof` konfiguruje obsluhu HTTP [`pprof`][pkg-pprof]. Vyznačuje se těmito vlastnostmi:

- `port`: Port, na kterém budou naslouchat ladicí požadavky HTTP na localhost.

  **Příklad:** `6060`

- `enabled`: Zda je nebo není povoleno ladění profilů.

  **Příklad:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

Objekt `log` konfiguruje protokolování. Vyznačuje se těmito vlastnostmi:

- `output`: Výstup, na který se zapisují protokoly.

  :::note

  Záznamy protokolu zapisované do systémového protokolu jsou ve formátu `text` (viz níže) a používají systémovou časové razítko.

  :::

  Přípustné hodnoty:

  - `syslog` znamená, že se použije systémový protokol specifický pro danou platformu, což je syslog pro Linux a protokol událostí pro Windows.

  - `stdout` pro standardní výstupní datový tok.

  - `stderr` pro standardní chybový datový tok.

  - Absolutní cesta k souboru protokolu.

  **Příklad:** `/home/user/logs`

  **Příklad:** `C:\Users\user\logs.txt`

  **Příklad:** `syslog`

- `format`: Určuje formát záznamů protokolu.

  Přípustné hodnoty:

  - `default`: Jednoduchý formát. Příklad:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Strukturovaný formát JSON. Příklad:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Stejně jako `json`, ale s omezeným počtem polí. Příklad:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `json`: Strukturovaný textový formát. Příklad:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Příklad:** `default`

- `timestamp`: Určuje, zda se má do položek protokolu zahrnout časové razítko.

  **Příklad:** `false`

- `verbose`: Určuje, zda má být protokol více informativní.

  **Příklad:** `false`
