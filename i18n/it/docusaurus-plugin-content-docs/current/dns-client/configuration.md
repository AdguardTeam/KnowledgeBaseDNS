---
title: File di configurazione
sidebar_position: 2
---

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

{/\*
TODO(a.garipov): Find ways to add IDs to individual list items.
\*/}

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

L'oggetto `dns` configura il comportamento del server DNS. Ha le seguenti proprietà:

### `cache` {#dns-cache}

L'oggetto `cache` configura la memorizzazione nella cache dei risultati delle richieste DNS. Ha le seguenti proprietà:

- `enabled`: se i risultati DNS devono essere memorizzati nella cache.

  **Esempio:** `true`

- `size`: la dimensione massima della cache dei risultati DNS come dimensione dei dati leggibile dall'uomo. Deve essere maggiore di zero se `enabled` è `true`.

  **Esempio:** `128 MB`

- `client_size`: la dimensione massima della cache dei risultati DNS per ciascun indirizzo o sottorete del client configurato, espressa come dimensione dei dati leggibile dall'uomo. Deve essere maggiore di zero se `enabled` è `true`.

  **Esempio:** `4 MB`

### `server` {#dns-server}

L'oggetto `server` configura la gestione delle richieste in arrivo. Ha le seguenti proprietà:

- `bind_retry`: La configurazione del meccanismo di ripetizione per l'assegnazione agli indirizzi di ascolto. Questo è utile se il server è avviato prima che la rete sia pronta e gli indirizzi non siano ancora disponibili, come in alcune edizioni di Windows quando installato come servizio di sistema.

  :::note

  Questo oggetto è disponibile da **v0.0.3**.

  :::

  Ha le seguenti proprietà:

  - `enabled`: Se il ripristino del legame è abilitato o meno.

    **Esempio:** `true`

  - `interval`: L'intervallo tra i tentativi come durata leggibile dall'uomo.

    **Esempio:** `1s`

  - `count`: Numero massimo di tentativi dopo il primo errore. Cioè, se `count` è `4`, il numero totale di tentativi sarà cinque.

    **Esempio:** `4`

- `listen_addresses`: l'insieme degli indirizzi con le porte dalle quali ricevere.

  **Esempio di proprietà:**

  ```yaml
  'listen_addresses':
      - indirizzo: '127.0.0.1:53'
      - indirizzo: '[::1]:53'
  ```

- `pending_requests`: configurazione per la gestione di richieste simultanee duplicate usata per mitigare gli attacchi di danneggiamento della memoria temporanea.

  :::note

  Questo oggetto è disponibile da **v0.0.4**.

  :::

  - `enabled`: se è impostato come true, il server eseguirà una sola richiesta per ogni domanda univoca.  L'impostazione prescelta è true.

    **Esempio:** `true`

### `bootstrap` {#dns-bootstrap}

L'oggetto `bootstrap` configura la risoluzione degli indirizzi del server [upstream](#dns-upstream). Ha le seguenti proprietà:

- `servers`: l'elenco dei server per risolvere i nomi host dei server upstream.

  **Esempio di proprietà:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: il tempo limite per le richieste DNS bootstrap, espresso in una durata leggibile dall'uomo.

  **Esempio:** `2 s`

### `upstream` {#dns-upstream}

L'oggetto `upstream` configura la risoluzione effettiva delle richieste. Ha le seguenti proprietà:

- `groups`: l'insieme dei server upstream identificati dal nome del gruppo. Ha le seguenti proprietà:

  - `address`: Indirizzo del server upstream.

    **Esempio:** `'8.8.8.8:53'`

  - `match`: l'elenco dei criteri con cui confrontare la richiesta. Ogni voce può contenere le seguenti proprietà:

    - `question_domain`: il dominio o un suffisso del dominio che il set di server upstream deve usare per risolvere.

      **Esempio:** `'mycompany.local'`

    - `client`: l'indirizzo del client o una sottorete dell'indirizzo del client da cui il set di server upstream dovrebbe risolvere le richieste. Non deve avere bit significativi al di fuori della maschera di sottorete.

      **Esempio:** \`\`192.0.2.0/24'\`

    :::note

    Le proprietà specificate all'interno di una singola voce vengono combinate con un AND logico. Le voci vengono combinate con un OR logico.

    :::

    **Esempio di proprietà:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` dovrebbe contenere almeno un'unica voce chiamata `default`, e facoltativamente un'unica voce chiamata `private`, entrambe non dovrebbero avere la proprietà `match`.

  :::

  Il gruppo `default` sarà usato quando non ci sono corrispondenze tra gli altri gruppi. Il gruppo `private` sarà utilizzato per risolvere le richieste PTR per gli indirizzi IP privati. Tali query riceveranno una risposta `NXDOMAIN` se non è definito alcun gruppo `private`.

- `timeout`: il tempo limite per le richieste DNS upstream, espresso in una durata leggibile dall'uomo.

  **Esempio:** `2 s`

### `fallback` {#dns-fallback}

L'oggetto `fallback` configura il comportamento del server DNS in caso di errore. Ha le seguenti proprietà:

- `servers`: La lista dei server da utilizzare dopo che il [upstream](#dns-upstream) attuale ha fallito nel rispondere.

  **Esempio di proprietà:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: il tempo limite per le richieste DNS fallback, espresso in una durata leggibile dall'uomo.

  **Esempio:** `2 s`

## `debug` {#debug}

L'oggetto `debug` configura le funzionalità di debug. Ha le seguenti proprietà:

### `pprof` {#debug-pprof}

L'oggetto `pprof` configura i gestori HTTP [`pprof`][pkg-pprof]. Ha le seguenti proprietà:

- `port`: La porta su cui ascoltare le richieste HTTP di debug su localhost.

  **Esempio:** `6060`

- `enabled`: Se il profiling di debug è attivo o meno.

  **Esempio:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

L'oggetto `log` configura la registrazione. Ha le seguenti proprietà:

- `output`: L'output a cui vengono scritti i registri.

  :::note

  Le voci di registro scritte nel registro di sistema sono in formato `text` (vedi sotto) e utilizzano il timestamp di sistema.

  :::

  Valori possibili:

  - `syslog` significa che viene utilizzato il registro di sistema specifico per la piattaforma, che è syslog per Linux e Event Log per Windows.

  - `stdout` per il flusso di output standard.

  - `stderr` per il flusso di errore standard.

  - Percorso assoluto del file di registro.

  **Esempio:** `/home/user/logs`

  **Esempio:** `C:\Users\user\logs.txt`

  **Esempio:** `syslog`

- `format`: Specifica il formato delle voci di registro.

  Valori possibili:

  - `default`: Un formato semplice. Esempio:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Un formato JSON strutturato. Esempio:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Stesso di `json` ma con un numero limitato di campi. Esempio:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Un formato di testo strutturato. Esempio:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Esempio:** `default`

- `timestamp`: Specifica se includere un timestamp nelle voci di registro.

  **Esempio:** `false`

- `verbose`: Specifica se il registro deve essere più informativo.

  **Esempio:** `false`
