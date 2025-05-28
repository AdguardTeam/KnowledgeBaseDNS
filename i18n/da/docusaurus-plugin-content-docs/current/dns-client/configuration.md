---
title: Opsætningsfil
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

Se filen [`config.dist.yml`][dist] for et fuldstændigt eksempel på en [YAML][yaml] opsætningsfil med kommentarer.

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

`dns`-objektet opsætter adfærden for DNS-serveren. Den har flg. egenskaber:

### `cache` {#dns-cache}

`cache`-objektet opsætter caching af DNS-forespørgselsresultaterne. Den har flg. egenskaber:

- 'enabled': Hvorvidt DNS-resultaterne skal cachelagres eller ej.

  **Eks.:** `true`

- `size`: Den maksimale størrelse af DNS-resultatcachen som menneskelig læsbar datastørrelse. Den skal være større end nul, hvis `enabled` er `true`.

  **Eksempel:** `128MB`

- `client_size`: Maks. størrelse på DNS-resultatcachen for hver opsat klients adresse eller undernetværk som menneskelig læsbar datastørrelse. Den skal være større end nul, hvis `enabled` er `true`.

  **Eksempel:** `4MB`

### `server` {#dns-server}

`server`-objektet opsætter håndteringen af indgående forespørgsler. Den har flg. egenskaber:

- `bind_retry`: Opsætningen af genforsøgs-mekanismen for knytning til lytteadresserne. Dette er nyttigt, hvis serveren startes, før netværket er klar, og adresserne endnu ikke er tilgængelige, som på visse Windows-versioner når installeret som en systemtjeneste.

  :::note

  Dette objekt tilgængeligt siden **v0.0.3**.

  :::

  Den har flg. egenskaber:

  - `enabled`: Om tilknytnings-genforsøg er aktiveret eller ej.

    **Eks.:** `true`

  - `interval`: Intervallet mellem gentagelser som en menneskelig læsbar varighed.

    **Eks.:** `1s`

  - `count`: Det maksimale antal forsøg efter første fejlslagne forsøg. Dvs., såfremt `count` er `4`, udgør det samlede antal forsøg fem.

    **Eks.:** `4`

- `listen_addresses`: Sættet af adresser med porte at lytte på.

  **Egenskabseksempel:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

`bootstrap`-objektet opsætter opløsningen af [upstream](#dns-upstream) serveradresser. Den har flg. egenskaber:

- `servers`: Listen over servere til at opløse værtsnavnene på upstream-servere.

  **Egenskabseksempel:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- 'timeout': Timeout for bootstrap DNS-forespørgsler som en menneskelig læsbar varighed.

  **Eksempel:** `2s`

### `upstream` {#dns-upstream}

'upstream'-objektet opsætter den faktiske forespørgselsopløsning. Den har flg. egenskaber:

- `groups`: Sættet af upstream-servere med gruppens navn som nøgle. Den har flg. egenskaber:

  - `address`: Opstrømsserveradresse.

    **Eks.:** `'8.8.8.8:53'`

  - `match`: Listen over kriterier forespørgslen skal matches imod. Hver post kan indeholde flg. egenskaber:

    - `question_domain`: Domænet eller et suffiks af domænet, som sættet af upstream-servere skal bruges til at opløse.

      **Eks.:** `'mycompany.local'`

    - `client`: Klientadressen eller et undernet af klientadressen, hvorfra sættet af upstream-servere skal opløse forespørgsler. Den må ikke have betydende bits uden for undernetmasken.

      **Eks.:** `'192.0.2.0/24'`

    :::note

    Egenskaber angivet i en enkelt post kombineres med et logisk AND. Poster kombineres med et logisk OR.

    :::

    **Egenskabseksempel:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` skal indeholde mindst én post med navnet `default` og evt. en post med navnet `private`, og begge skal ikke have nogen `match`-egenskab.

  :::

  `default`-gruppen bruges, når ingen match eksisterer blandt de øvrige grupper. `private`-gruppen vil blive brugt til opløsning af PTR-forespørgsler for de private IP-adresser. Sådanne forespørgsler besvares med `NXDOMAIN`, hvis ingen `private`-gruppe er defineret.

- 'timeout': Timeout for upstream DNS-forespørgsler som en menneskelig læsbar varighed.

  **Eks.:** `2s`

### `fallback` {#dns-fallback}

`fallback`-objektet opsætter adfærden for DNS-serveren i tilfælde af fejl. Den har flg. egenskaber:

- `servers`: Listen over servere til brug ved manglende svar fra den aktuelle [upstream](#dns-upstream).

  **Egenskabseksempel:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- 'timeout': Timeout for fallback DNS-forespørgsler som en menneskelig læsbar varighed.

  **Eks.:** `2s`

## `debug` {#debug}

`debug`-objektet opsætter fejlfindingsfunktionerne. Den har flg. egenskaber:

### `pprof` {#debug-pprof}

`pprof`-objektet opsætter [`pprof`][pkg-pprof] HTTP-rutiner. Den har flg. egenskaber:

- `port`: Porten, der skal lyttes til efter fejlfindings HTTP-forespørgsler på localhost.

  **Eks.:** `6060`

- 'enabled': Hvorvidt fejlretningsprofileringen er aktiveret eller ej.

  **Eks.:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

"log"-objektet opsætter logningen. Den har flg. egenskaber:

- `output`: Det output, hvortil logger skrives.

  :::note

  Logposter skrevet til systemloggen er i tekstformat (se nedenfor) og bruger systemets tidsstempling.

  :::

  Gyldige værdier:

  - `syslog` betyder, at den platformsspecifikke systemlog bruges, dvs. syslog til Linux og Event Log til Windows.

  - "stdout" for standard outputstrøm.

  - "stdout" for standard fejlstrøm.

  - Absolut sti til logfilen.

  **Eks.:** `/home/user/logs`

  **Eks.:** `C:\Users\user\logs.txt`

  **Eks.:** `syslog`

- `format`: Angiver formatet for logposterne.

  Gyldige værdier:

  - `standard`: Et simpelt format. Eksempel:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Et struktureret JSON-format. Eksempel:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Samme som `json`, men med et begrænset antal felter. Eksempel:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Et struktureret tekstformat. Eksempel:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Eks.:** `default`

- `timestamp`: Angiver, om et tidsstempel skal medtages i logposterne.

  **Eks.:** `false`

- `verbose`: Angiver om loggen skal være mere udførlig.

  **Eks.:** `false`
