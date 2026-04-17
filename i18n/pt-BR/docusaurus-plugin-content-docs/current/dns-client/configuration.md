---
title: Arquivo de configuração
sidebar_position: 2
---

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

<!-- TODO(a.garipov): Find ways to add IDs to individual list items. -->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

O objeto `dns` configura o comportamento do servidor DNS. Ele tem as seguintes propriedades:

### `cache` {#dns-cache}

O objeto `cache` configura o cache dos resultados de inquérito de DNS. Ele tem as seguintes propriedades:

- `enabled`: Se os resultados de DNS devem ser armazenados em cache ou não.

  **Exemplo:** `true`

- `size`: O tamanho máximo do cache de resultados de DNS em tamanho de dados legível por humanos. Deve ser maior que zero se `enabled` for `true`.

  **Exemplo:** `128 MB`

- `client_size`: O tamanho máximo do cache de resultados de DNS para cada endereço de cliente configurado ou sub-rede em tamanho de dados legível por humanos. Deve ser maior que zero se `enabled` for `true`.

  **Exemplo:** `4 MB`

### `server` {#dns-server}

O objeto `server` configura o atendimento de solicitações recebidas. Ele tem as seguintes propriedades:

- `bind_retry`: A configuração do mecanismo de nova tentativa para vincular aos endereços de escuta. Isso é útil se o servidor for iniciado antes que a rede esteja pronta e os endereços ainda não estejam disponíveis, como em algumas edições do Windows quando instalado como um serviço do sistema.

  :::note

  Esse objeto está disponível desde **v0.0.3**.

  :::

  Ele tem as seguintes propriedades:

  - `enabled`: Se a nova tentativa de vincular está ativada ou não.

    **Exemplo:** `true`

  - `interval`: O intervalo entre novas tentativas, representado como uma duração legível para humanos.

    **Exemplo:** `1s`

  - `count`: O número máximo de tentativas após a primeira falha. Ou seja, se `count` for `4`, o número total de tentativas será cinco.

    **Exemplo:** `4`

- `listen_addresses`: O conjunto de endereços com portas para escutar.

  **Exemplo de propriedade:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

- `pending_requests`: Configuração para lidar com solicitações simultâneas duplicadas, usada para mitigar ataques de envenenamento de cache.

  :::note

  Esse objeto está disponível desde **v0.0.4**.

  :::

  - `enabled`: Se true, o servidor realizará apenas uma única solicitação para cada pergunta exclusiva.  O valor padrão é true.

    **Exemplo:** `true`

### `bootstrap` {#dns-bootstrap}

O objeto `bootstrap` configura a resolução dos endereços de servidores [upstream](#dns-upstream). Ele tem as seguintes propriedades:

- `servers`: A lista de servidores para resolver os nomes dos servidores upstream.

  **Exemplo de propriedade:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: O tempo de espera para as solicitações de DNS bootstrap em uma duração legível por humanos.

  **Exemplo:** `2 s`

### `upstream` {#dns-upstream}

O objeto `upstream` configura a resolução real das solicitações. Ele tem as seguintes propriedades:

- `groups`: O conjunto de servidores upstream identificados pelo nome do grupo. Ele tem as seguintes propriedades:

  - `address`: O endereço do servidor upstream.

    **Exemplo:** `'8.8.8.8:53'`

  - `match`: A lista de critérios para combinar a solicitação. Cada entrada pode conter as seguintes propriedades:

    - `question_domain`: O domínio ou um sufixo do domínio que o conjunto de servidores upstream deve usar para resolver.

      **Exemplo:** `'mycompany.local'`

    - `client`: O endereço do cliente ou uma sub-rede do endereço do cliente a partir do qual o conjunto de servidores upstream deve resolver solicitações. Deve não ter bits significativos fora da máscara de sub-rede.

      **Exemplo:** `'192.0.2.0/24'`

    :::note

    As propriedades especificadas dentro de uma única entrada são combinadas com um AND lógico. As entradas são combinadas com um OR lógico.

    :::

    **Exemplo de propriedade:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` deve conter pelo menos uma entrada chamada `default`, e opcionalmente uma entrada única chamada `private`, ambas não devem ter a propriedade `match`.

  :::

  O grupo `default` será usado quando não houver correspondências entre outros grupos. O grupo `private` será usado para resolver as solicitações PTR para os endereços IP privados. Essas consultas serão respondidas com `NXDOMAIN` se nenhum grupo `private` estiver definido.

- `timeout`: O tempo de espera para as solicitações de DNS upstream em uma duração legível por humanos.

  **Exemplo:** `2s`

### `fallback` {#dns-fallback}

O objeto `fallback` configura o comportamento do servidor DNS em caso de falha. Ele tem as seguintes propriedades:

- `servers`: A lista de servidores a serem usados após o [upstream](#dns-upstream) real não responder.

  **Exemplo de propriedade:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: O tempo de espera para as solicitações de DNS de recuo em uma duração legível por humanos.

  **Exemplo:** `2s`

## `debug` {#debug}

O objeto `debug` configura os recursos de depuração. Ele tem as seguintes propriedades:

### `pprof` {#debug-pprof}

O objeto `pprof` configura os manipuladores HTTP [`pprof`][pkg-pprof]. Ele tem as seguintes propriedades:

- `port`: A porta para escutar solicitações HTTP de depuração em localhost.

  **Exemplo:** `6060`

- `enabled`: Se a depuração do perfil está ativada ou não.

  **Exemplo:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

O objeto `log` configura o registro. Ele tem as seguintes propriedades:

- `output`: A saída para a qual os registros são escritos.

  :::note

  As entradas de registro escritas no registro do sistema estão no formato `text` (veja abaixo) e usam a data/hora do sistema.

  :::

  Valores possíveis:

  - `syslog` significa que o log do sistema específico da plataforma é usado, que é syslog para Linux e o Log de Eventos para Windows.

  - `stdout` para o fluxo de saída padrão.

  - `stderr` para o fluxo de erros padrão.

  - Caminho absoluto para o arquivo de log.

  **Exemplo:** `/home/user/logs`

  **Exemplo:** `C:\Users\user\logs.txt`

  **Exemplo:** `syslog`

- `format`: Especifica o formato das entradas de log.

  Valores possíveis:

  - `default`: Um formato simples. Exemplo:

    ```none
    Serviço INFO iniciado prefix=program addr=127.0.0.1:53
    ```

  - `json`: Um formato JSON estruturado. Exemplo:

    ```json
    {"level":"INFO","msg":"serviço iniciado","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Idêntico a `json`, mas com um número limitado de campos. Exemplo:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Um formato de texto estruturado. Exemplo:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Exemplo:** `default`

- `timestamp`: Especifica se deve incluir um carimbo de data/hora nas entradas de log.

  **Exemplo:** `false`

- `verbose`: Especifica se o log deve ser mais informativo.

  **Exemplo:** `false`
