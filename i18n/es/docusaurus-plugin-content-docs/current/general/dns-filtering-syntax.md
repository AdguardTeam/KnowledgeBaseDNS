---
title: Sintaxis de las reglas de filtrado DNS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Aquí te mostramos cómo escribir reglas de filtrado DNS personalizadas para uso en productos AdGuard

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

## Introduction {#introduction}

Puedes usar la sintaxis de las reglas de filtrado DNS de AdGuard para hacer que las reglas sean más flexibles, de esa manera pueden bloquear contenidos según tus preferencias. La sintaxis de las reglas de filtrado DNS de AdGuard puede ser usada en diferentes productos de AdGuard como AdGuard Home, AdGuard DNS y AdGuard para Windows/Mac/Android.

Hay tres diferentes enfoques para escribir listas de bloqueo de hosts:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. De esta manera, las listas de bloqueo creadas son compatibles con las de los bloqueadores de anuncios para navegador.

- [`/etc/hosts` Sintaxis](#etc-hosts-syntax): el enfoque antiguo y probado, que usa la misma sintaxis que los sistemas operativos usan para sus archivos de hosts.

- [Sintaxis de dominios](#domains-only-syntax): una simple lista de nombres de dominio.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Esta sintaxis posee algunas ventajas importantes respecto a la sintaxis antigua:

- **Tamaño de las listas de bloqueo.** El uso de comparación de patrones le permite tener una sola regla en lugar de cientos de entradas `/etc/hosts`.

- **Compatibilidad.** Su lista de bloqueo será compatible con los bloqueadores de anuncios para navegador, y será más fácil compartir reglas con una lista de filtros de navegador.

- **Extensibilidad.** Durante la última década, la sintaxis de estilo Adblock ha evolucionado enormemente, y no vemos por qué no extenderla aún más y proporcionar funciones adicionales para los bloqueadores de toda la red.

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Basic examples {#basic-examples}

- `||example.org^`: bloquea el acceso al dominio `example.org` y todos sus subdominios, como `www.example.org`.

- `@@||example.org^`: desbloquea el acceso al dominio `example.org` y todos sus subdominios.

- `1.2.3.4 example.org`: (atención, sintaxis estilo `/etc/hosts` antiguo) en AdGuard Home, el programa responde con `1.2.3.4` a las consultas para el dominio `example.org`, pero **no** a sus subdominios. En el DNS privado de AdGuard, bloquea el acceso a `example.org`. `www.example.org` sigue estando permitido.

  En AdGuard Home, usar la dirección IP no especificada (`0.0.0.0`) o una dirección local (`127.0.0.1` y similares) para un host es básicamente lo mismo que bloquear ese host.

  ```none
  # Devuelve la dirección IP 1.2.3.4 para example.org.
  1.2.3.4 example.org
  # Bloquea example.org respondiendo con 0.0.0.0.
  0.0.0.0 example.org
  ```

- `example.org`: una regla de dominio simple. Bloquea el dominio `example.org` pero **no** sus subdominios. `www.example.org` sigue estando permitido.

- `! Es un comentario ` y `# También un comentario`: comentarios.

- `/REGEX/`: bloquea el acceso a los dominios que coincidan con la expresión regular especificada.

## Adblock-style syntax {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern` (patrón): la máscara del nombre de host. Cada nombre de host se compara con esta máscara. El patrón también puede contener caracteres especiales, que se describen a continuación.

- `@@`: el marcador que se utiliza en las reglas de excepción. Inicie su regla con este marcador si desea desactivar el filtrado para los nombres de host que coincidan.

- `modifiers` (modificadores): parámetros que aclaran la regla. Pueden limitar el alcance de la norma o incluso cambiar por completo su funcionamiento.

### Special characters {#special-characters}

- `*`: el carácter comodín. Se utiliza para representar cualquier conjunto de caracteres. Esto también puede ser una cadena de texto vacía o una cadena de texto de cualquier longitud.

- `||`: coincide con el comienzo de un nombre de host, incluido cualquier subdominio. Por ejemplo, `||example.org` coincide con `example.org` y `test.example.org` pero no con `testexample.org`.

- `^`: el carácter de separador. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`: un puntero al principio o al final del nombre de host. El valor depende de la ubicación del carácter. Por ejemplo, la regla `ample.org|` corresponde a `example.org` pero no a `example.org.com`. `|example` corresponde a `example.org` pero no a `test.example`.

### Regular expressions {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Si desea utilizar una expresión regular, el patrón debe verse así:

```none
pattern = "/" regexp "/"
```

**Ejemplos:**

- `/example.*/` bloqueará los hosts que coincidan con la regexp `example.*`.

- `@@/example.*/$important` desbloqueará los hosts que coincidan con la regexp `example.*`. Tenga en cuenta que esta regla también implica el modificador `important` (importante).

### Comments {#comments}

Cualquier línea que comience con un signo de exclamación o de almohadilla es un comentario y será ignorado por el motor de filtrado. Los comentarios suelen colocarse encima de las reglas y se utilizan para describir lo que hace una regla.

**Ejemplo:**

```none
! Esto es un comentario.
# Esto también es un comentario.
```

### Rule modifiers {#rule-modifiers}

Puedes cambiar el comportamiento de una regla agregando modificadores. Los modificadores deben situarse al final de la regla después del carácter `$` y estar separados por comas.

**Ejemplos:**

- ```none ||example.org^$important
   ```

  `||example.org^` es el patrón de coincidencia. `$` es el delimitador, que señala que el resto de la regla son modificadores. El modificador es "importante".

- You may want to use multiple modifiers in a rule. En ese caso, sepáralos con comas:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` es el patrón de coincidencia. `$` es el delimitador, que señala que el resto de la regla son modificadores. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` is the delimiter between modifiers. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- Por su dirección IP o prefijo CIDR. Esta forma funciona para todo tipo de clientes.

- Por su nombre. Este modo sólo funciona para los clientes persistentes (en AdGuard Home) y los dispositivos (en Private AdGuard DNS), que usted ha añadido manualmente.

  :::note

  In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

  :::

The syntax is:

```none
$client=valor1|valor2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client’s DNS requests.

```none
$client=~valor1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

:::note

When excluding a client, you **must** place `~` outside the quotes.

:::

**Ejemplos:**

- `@@||*^$client=127.0.0.1`: desbloquea todo para localhost.

- `||example.org^$client="Frank\'s laptop"`: bloquea `example.org` sólo para el cliente llamado `"Frank\'s laptop"`. Ten en cuenta que las comillas (`"`) en el nombre deben escaparse.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: block `example.org` para todos excepto para el cliente llamado `Mary's, John's, and Boris's laptops`. Ten en cuenta que la coma (`,`) también debe escaparse.

- `||example.org^$client=~Mom|~Dad|Kids`: bloque `example.org` para `Kids`, pero no para `Mom` y `Dad`. Este ejemplo demuestra cómo especificar varios clientes en una regla.

- `||example.org^$client=192.168.0.0/24`: block `example.org` para todos los clientes con direcciones IP en el rango de `192.168.0.0` a `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Bloquear todo.
/.*/

! Desbloquee un par de TLD.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Ejemplos:**

- `*$denyallow=com|net`: bloquea todo excepto `*.com` y `*.net`.

- `@@*$denyallow=com|net`: desbloquea todo excepto `*.com` y `*.net`.

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org`, but not `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

The syntax is:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

The names of the types are case-insensitive, but are validated against a set of actual DNS resource record (RR) types.

Do not combine exclusion rules with inclusion ones. This:

```none
$dnstype=~value1|value2
```

is equivalent to this:

```none
$dnstype=value2
```

**Ejemplos:**

- `||example.org^$dnstype=AAAA`: bloquea las consultas de DNS para las direcciones IPv6 de `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: solo permite consultas DNS `A` y `CNAME` para `example.org`, bloquea el resto.

:::note

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
RESPUESTAS:
->  ejemplo.com
    nombre canónico = canon.ejemplo.com.
    ttl = 60
->  canon.example.com
    dirección de Internet = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite` {#dnsrewrite-modifier}

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home and AdGuard DNS.**

Responses to all requests for a host matching a `dnsrewrite` rule will be replaced. The answer section of the replacement response will only contain RRs that match the request’s query type and, possibly, CNAME RRs. Note that this means that responses to some requests may become empty (`NODATA`) if the host matches a `dnsrewrite` rule.

The shorthand syntax is:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

The keywords MUST be in all caps (e.g. `NOERROR`). Keyword rewrites take precedence over the other and will result in an empty response with an appropriate response code.

The full syntax is of the form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

The `$dnsrewrite` modifier with the `NOERROR` response code may also has empty `RRTYPE` and `VALUE` fields.

The `CNAME` one is special because AdGuard Home will resolve the host and add its info to the response. That is, if `example.net` has IP `1.2.3.4`, and the user has this in their filter rules:

```none
||ejemplo.com^$dnsrewrite=ejemplo.net
! O:
||ejemplo.com^$dnsrewrite=NOERROR;CNAME;ejemplo.net
```

then the response will be something like:

```sh
nslookup example.com my.adguard.local
```

```none
Server: my.adguard.local
Address: 127.0.0.1#53

Non-authoritative answer:
example.com canonical name = example.net.
Name: example.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records’ values are summed as one response, so this:

```none
||ejample.com^$dnsrewrite=NOERROR;A;1.2.3.4
||ejample.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR` record for reverse DNS. Invertir solicitudes DNS para `1.2.3.4` al servidor DNS dará como resultado `example.net`.

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` agrega un registro `A` con el valor `1.2.3.4`.

- `||ejample.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` añade un registro `AAAA` con el valor `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` agrega un registro `CNAME`. Consulta la explicación anterior.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` agrega un registro `HTTPS`. Sólo se admite un subconjunto de valores de parámetros: los valores deben ser `contiguos` y, cuando `` se `espera` una lista de valores, actualmente sólo se admite un valor:

   ```none
   ipv4hint=127.0.0.1             // Compatible.
   ipv4hint="127.0.0.1"           // No compatible.
   ipv4hint=127.0.0.1,127.0.0.2   // No compatible.
   ipv4hint="127.0.0.1,127.0.0.2" // No compatible.
   ```

  Esto cambiará en el futuro.

- `||ejample.com^$dnsrewrite=NOERROR;MX;32 example.mail` añade un registro `MX` con valor de precedencia `32` y valor de intercambio `example.mail`.

- `||ejemplo.com^$dnsrewrite=NOERROR;SVCB;32 ejemplo.com alpn=h3` añade un valor `SVCB`. Consulta el ejemplo anterior de `HTTPS`.

- `||ejample.com^$dnsrewrite=NOERROR;TXT;hello_world` añade un registro `TXT` con el valor `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` agrega un registro `SRV` con valor de prioridad `10`, valor de peso `60`, puerto`8080`y destino valor `ejemplo.com`.

- `||ejemplo.com^$dnsrewrite=DOMINIONX;;` responde con un código `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responde con un vacío `NOERROR` responde para todas las solicitudes `AAAA` excepto las de `example.org`.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` unblocks all DNS rewrite rules.

- `@@||example.com^$dnsrewrite=1.2.3.4` unblocks the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Ejemplos:**

- En este ejemplo:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` bloqueará todas las solicitudes a `*.example.org` a pesar de la regla de excepción.

- En este ejemplo:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  la regla de excepción también tiene el modificador `importante`, por lo que funcionará.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Ejemplos:**

- `||ejemplo.com$badfilter` deshabilita `||ejemplo.com`.

- `@@||example.org^$badfilter` deshabilita `@@||example.org^`.

  :::note

  The `badfilter` modifier currently doesn’t work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

  :::

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=valor1|valor2|...
```

If one of client’s tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~valor1|~valor2|...
```

If one of client’s tags matches the exclusion `ctag` values, this rule doesn’t apply to the client.

**Ejemplos:**

- `||example.org^$ctag=device_pc|device_phone`: bloquea `example.org` para clientes taggeados como `device_pc` o `device_phone`.

- `||example.org^$ctag=~device_phone`:Bloquear `example.org` para todos los clientes excepto aquellos etiquetados como `device_phone`.

The list of allowed tags:

- Por tipo de dispositivo:

    - `device_audio`: dispositivos de audio.
    - `device_camera`: cámaras.
    - `device_gameconsole`: consolas de juegos.
    - `device_laptop`: laptops.
    - `device_nas`: NAS (Network-attached Storages).
    - `device_pc`: PCs.
    - `device_phone`: celulares.
    - `device_printer`: impresoras.
    - `device_securityalarm`: alarmas de seguridad.
    - `device_tablet`: tabletas.
    - `device_tv`: televisores.
    - `device_other`: otros dispositivos.

- Por sistema operativo:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: otros sistemas operativos.

- Por grupo de usuarios:

    - `user_admin`: administradores.
    - `user_regular`: usuarios regulares.
    - `user_child`: niños.

## `/etc/hosts`-style syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Ejemplo:**

```none
# Esto es un comentario
127.0.0.1 example.org ejemplo.info
127.0.0.1 example.org
127.0.0.1 example.org # esto también es un comentario
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Domains-only syntax {#domains-only-syntax}

A simple list of domain names, one name per line.

**Ejemplo:**

```none
# Este es un comentario
example.org
example.org
example.org # esto también es un comentario
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it’s capable of:

1. Compila una lista de bloqueo única de varias fuentes.

2. Exclude the rules you don’t need.

3. Limpia la lista resultante: deduplica, borra reglas no válidas y comprime la lista.

<!-- local links -->


<!-- external links -->
[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry
[Adblock-style syntax]: #adblock-style-syntax
[`client`]: #client-modifier
[`dnstype`]: #dnstype-modifier
[AdGuard DNS filter]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[traditional Adblock-style syntax]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
