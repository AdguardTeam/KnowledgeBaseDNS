---
title: Archivo de configuración
sidebar_position: 2
---

See file [`config.dist.yml`][dist] for a full example of a [YAML][yaml] configuration file with comments.

{/*
TODO(a.garipov): Find ways to add IDs to individual list items.
*/}

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

El objeto `dns` configura el comportamiento del servidor DNS. Tiene las siguientes propiedades:

### `cache` {#dns-cache}

El objeto `cache` configura el almacenamiento en caché de los resultados de las consultas DNS. Tiene las siguientes propiedades:

- `enabled`: Si los resultados DNS deben ser almacenados en caché o no.

  **Ejemplo:** `true`

- `size`: El tamaño máximo de la caché de resultados DNS como tamaño de datos legible por humanos. Debe ser mayor que cero si `enabled` es `true`.

  **Ejemplo:** `128 MB`

- `client_size`: El tamaño máximo de la caché de resultados DNS para la dirección de cada cliente configurado o subred como tamaño de datos legible por humanos. Debe ser mayor que cero si `enabled` es `true`.

  **Ejemplo:** `4 MB`

### `server` {#dns-server}

El objeto `server` configura el manejo de las solicitudes entrantes. Tiene las siguientes propiedades:

- `reintentar _ enlace`: La configuración del mecanismo de reintento para enlazar las direcciones enlistadas. Esto resulta útil si el servidor se inicia antes de que la red esté lista y las direcciones aún no estén disponibles, como ocurre en algunas ediciones de Windows cuando se instala como servicio del sistema.

  :::note

  Este objeto está disponible desde **v0.0.3**.

  :::

  Tiene las siguientes propiedades:

  - `habilitado`: Si el reintento de enlace está habilitado o no.

    **Ejemplo:** `true`

  - `interval`: El intervalo entre reintentos, expresado como una duración legible para humanos.

    **Ejemplo:** `1s`

  - `count`: El número máximo de intentos después del primer fallo. Es decir, si el `recuento` es `4` el número total de intentos será de cinco.

    **Ejemplo:** `4`

- `listen_addresses`: El conjunto de direcciones con puertos para escuchar.

  **Ejemplo de propiedad:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

- `pending_requests`: Configuración para gestionar peticiones simultáneas duplicadas, utilizada para mitigar ataques de envenenamiento de cache.

  :::note

  Este objeto está disponible desde **v0.0.4**.

  :::

  - `enabled`: Si es true, el servidor solo realizará una única Petición para cada pregunta única.  El valor predeterminado es verdadero.

    **Ejemplo:** `true`

### `bootstrap` {#dns-bootstrap}

El objeto `bootstrap` configura la resolución de las direcciones de los servidores [upstream](#dns-upstream). Tiene las siguientes propiedades:

- `servers`: La lista de servidores para resolver los nombres de los servidores upstream.

  **Ejemplo de propiedad:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: El tiempo de espera para las peticiones DNS bootstrap como duración legible por humanos.

  **Ejemplo:** `2s`

### `upstream` {#dns-upstream}

El objeto `upstream` configura la resolución real de las solicitudes. Tiene las siguientes propiedades:

- `groups`: El conjunto de servidores upstream con clave por el nombre del grupo. Tiene las siguientes propiedades:

  - `address`: La dirección del servidor upstream.

    **Ejemplo:** `'8.8.8.8:53'`

  - `match`: La lista de criterios para hacer coincidir la solicitud. Cada entrada puede contener las siguientes propiedades:

    - `question_domain`: El dominio o un sufijo del dominio que debe ser usado para resolver por el conjunto de servidores upstream.

      **Ejemplo:** `'mycompany.local'`

    - `client`: La dirección del cliente o una subnet de la dirección del cliente desde donde el conjunto de servidores upstream debería resolver solicitudes. No debe tener bits significativos fuera de la máscara de subred.

      **Ejemplo:** `'192.0.2.0/24'`

    :::note

    Las propiedades especificadas dentro de una única entrada se combinan con un AND lógico. Las entradas se combinan con un OR lógico.

    :::

    **Ejemplo de propiedad:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` debe contener al menos una única entrada llamada `default`, y opcionalmente una única entrada llamada `private`, ambas no deben tener la propiedad `match`.

  :::

  El grupo `default` se usará cuando no haya coincidencias entre otros grupos. El grupo `private` se usará para resolver las solicitudes PTR para las direcciones IP privadas. Tales consultas serán respondidas con `NXDOMAIN` si no se define un grupo `private`.

- `timeout`: El tiempo de espera para las solicitudes DNS upstream como una duración legible por humanos.

  **Ejemplo:** `2s`

### `fallback` {#dns-fallback}

El objeto `fallback` configura el comportamiento del servidor DNS en caso de fallo. Tiene las siguientes propiedades:

- `servers`: La lista de servidores que se usarán después de que el [upstream](#dns-upstream) real no haya respondido.

  **Ejemplo de propiedad:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: El tiempo de espera para las solicitudes DNS de fallback como una duración legible por humanos.

  **Ejemplo:** `2s`

## `debug` {#debug}

El objeto `debug` configura las características de depuración. Tiene las siguientes propiedades:

### `pprof` {#debug-pprof}

El objeto `pprof` configura los manejadores HTTP [`pprof`][pkg-pprof]. Tiene las siguientes propiedades:

- `port`: El puerto en el que escuchar para solicitudes HTTP de depuración en localhost.

  **Ejemplo:** `6060`

- `enabled`: Si la depuración del perfil está habilitada o no.

  **Ejemplo:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

El objeto `log` configura el registro. Tiene las siguientes propiedades:

- `output`: La salida a la que se escriben los registros.

  :::note

  Las entradas de registro escritas en el registro del sistema están en formato `text` (ver abajo) y utilizan la marca de tiempo del sistema.

  :::

  Valores posibles:

  - `syslog` significa que se usa el registro del sistema específico de la plataforma, que es syslog para Linux y Registro de eventos para Windows.

  - `stdout` para el flujo de salida estándar.

  - `stderr` para el flujo de error estándar.

  - Ruta absoluta al archivo de registro.

  **Ejemplo:** `/home/user/logs`

  **Ejemplo:** `C:\Users\user\logs.txt`

  **Ejemplo:** `syslog`

- `format`: Especifica el formato de las entradas de registro.

  Valores posibles:

  - `default`: Un formato simple. Ejemplo:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Un formato JSON estructurado. Ejemplo:

    ```json
    {"level":"INFO","msg":"servicio iniciado","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Igual que `json` pero con un número limitado de campos. Ejemplo:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Un formato de texto estructurado. Ejemplo:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Ejemplo:** `default`

- `timestamp`: Especifica si se debe incluir una marca de tiempo en las entradas de registro.

  **Ejemplo:** `false`

- `verbose`: Especifica si el registro debe ser más informativo.

  **Ejemplo:** `false`
