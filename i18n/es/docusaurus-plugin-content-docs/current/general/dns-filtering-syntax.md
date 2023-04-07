---
title: Sintaxis de las reglas de filtrado DNS
sidebar_position: 2
---

## Introducción

Puede usar la sintaxis para reglas de filtrado DNS de AdGuard para hacer las reglas más flexibles, de modo que el bloqueo de contenido se haga conforme a sus preferencias. La sintaxis para reglas de filtrado DNS de AdGuard puede usarse en diferentes productos de AdGuard como AdGuard Home, AdGuard DNS o AdGuard para Windows/Mac/Android.

Hay tres enfoques diferentes para escribir listas de bloqueo de hosts:

* [Sintaxis estilo Adblock](#adblock-style-syntax): el enfoque más moderno para escribir reglas de filtrado, basado en el uso de un subconjunto de reglas al estilo de las usadas por AdBlock. De esta manera, las listas de bloqueo creadas son compatibles con las de los bloqueadores de anuncios para navegador.

* [`/etc/hosts` Sintaxis](#etc-hosts-syntax): el enfoque antiguo y probado, que usa la misma sintaxis que los sistemas operativos usan para sus archivos de hosts.

* [Sintaxis de dominios](#domains-only-syntax): una simple lista de nombres de dominio.

Si estás creando una lista de bloqueo, te recomendamos que utilices la sintaxis estilo [sintaxis-al-estilo-Adblock](#adblock-style-syntax). Tiene algunas ventajas importantes sobre la sintaxis antigua:

* **Tamaño de las listas de bloqueo.** El uso de comparación de patrones le permite tener una sola regla en lugar de cientos de entradas `/etc/hosts`.

* **Compatibilidad.** Su lista de bloqueo será compatible con los bloqueadores de anuncios para navegador, y será más fácil compartir reglas con una lista de filtros de navegador.

* **Extensibility.** In the past decade, the Adblock-style syntax has greatly evolved, and we see no reason not to extend it even further and offer additional features for network-level blockers.

If you're maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][hlc] and we use it ourselves to create [AdGuard DNS filter][sdn].

## Ejemplos básicos

* `||example.org^`: bloquea el acceso al dominio `example.org` y todos sus subdominios, como `www.example.org`.

* `@@||example.org^`: desbloquea el acceso al dominio `example.org` y todos sus subdominios.

* `1.2.3.4 example.org`: (atención, sintaxis estilo `/etc/hosts` antiguo) en AdGuard Home, el programa responde con `1.2.3.4` a las consultas para el dominio `example.org`, pero **no** a sus subdominios. En el DNS privado de AdGuard, bloquea el acceso a `example.org`. `www.example.org` sigue estando permitido.

  En AdGuard Home, usar la dirección IP no especificada (`0.0.0.0`) o una dirección local (`127.0.0.1` y similares) para un host es básicamente lo mismo que bloquear ese host.

  ```none
  # Devuelve la dirección IP 1.2.3.4 para ejemplo.org.
  1.2.3.4 example.org
  # Blocks example.org by responding with 0.0.0.0.
  0.0.0.0 example.org
  ```

* `example.org`: una regla de dominio simple. Blocks the `example.org` domain but **not** its subdomains. `www.example.org` sigue estando permitido.

* `! Es un comentario ` y `# También un comentario`: comentarios.

* `/REGEX/`: bloquea el acceso a los dominios que coincidan con la expresión regular especificada.

## Sintaxis de estilo Adblock

This is a subset of the [traditional Adblock-style][adb] syntax which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern` (patrón): la máscara del nombre de host. Cada nombre de host se compara con esta máscara. El patrón también puede contener caracteres especiales, que se describen a continuación.

* `@@`: el marcador que se utiliza en las reglas de excepción. Inicie su regla con este marcador si desea desactivar el filtrado para los nombres de host que coincidan.

* `modifiers` (modificadores): parámetros que aclaran la regla. Pueden limitar el alcance de la norma o incluso cambiar por completo su funcionamiento.

### Carácteres especiales

* `*`: el carácter comodín. Se utiliza para representar cualquier conjunto de caracteres. Esto también puede ser una cadena de texto vacía o una cadena de texto de cualquier longitud.

* `||`: coincide con el comienzo de un nombre de host, incluido cualquier subdominio. Por ejemplo, `||example.org` coincide con `example.org` y `test.example.org` pero no con `testexample.org`.

* `^`: el carácter de separador. A diferencia del bloqueo de anuncios para navegador, no hay nada que separar en un nombre de host, por lo que el único propósito de este carácter es marcar el final del nombre de host.

* `|`: un puntero al principio o al final del nombre de host. El valor depende de la ubicación del carácter. Por ejemplo, la regla `ample.org|` corresponde a `ample.org` pero no a `example.org.com`. `|example` corresponde a `example.org` pero no a `test.example`.

### Expresiones regulares

Si desea aún más flexibilidad en la creación de reglas, puede usar [expresiones regulares][regexp] en lugar de la sintaxis simplificada predeterminada. Si desea utilizar una expresión regular, el patrón debe verse así:

```none
pattern = "/" regexp "/"
```

**Ejemplos:**

* `/example.*/` bloqueará los hosts que coincidan con la regexp `example.*`.

* `@@/example.*/$important` desbloqueará los hosts que coincidan con la regexp `example.*`. Tenga en cuenta que esta regla también implica el modificador `important` (importante).

### Comentarios

Cualquier línea que comience con un signo de exclamación o de almohadilla es un comentario y será ignorado por el motor de filtrado. Los comentarios suelen colocarse encima de las reglas y se utilizan para describir lo que hace una regla.

**Ejemplos:**

```none
! Esto es un comentario.
# Esto también es un comentario.
```

### Modificadores de reglas

Puedes cambiar el comportamiento de una regla añadiendo modificadores. Los modificadores deben situarse al final de la regla después del carácter `$` y estar separados por comas.

**Ejemplos:**

* ```none ||example.org^$important
   ```

  `||example.org^` es el patrón de coincidencia. `$` es el delimitador, que señala que el resto de la regla son modificadores. El modificador es "importante".

* Es posible que desee utilizar varios modificadores en una regla. In that case, separate them by commas:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` es el patrón de coincidencia. `$` es el delimitador, que señala que el resto de la regla son modificadores. `client=127.0.0.1` es el modificador [`client`](#client) con su valor, `127.0.0.1`, es el delimitador. Y por último, `dnstype=A` es el modificador [`dnstype`](#dnstype) con su valor, `A`.

**NOTA:** Si una regla contiene un modificador que no aparece en este documento, toda la regla **debe ser ignorada**. De este modo, evitamos los falsos positivos cuando alguien intenta utilizar listas de filtros para bloqueadores de anuncios sin modificarlas, como EasyList o EasyPrivacy.

#### `cliente`

El modificador `client` (cliente) permite especificar los clientes a los que se aplica esta regla. Hay dos formas principales de identificar a un cliente:

* Por su dirección IP o prefijo CIDR. Esta forma funciona para todo tipo de clientes.

* Por su nombre. Este modo sólo funciona para los clientes persistentes (en AdGuard Home) y los dispositivos (en Private AdGuard DNS), que usted ha añadido manualmente.

  **NOTA:** En AdGuard Home, actualmente no se admiten ClientIDs, sólo nombres. Si ha añadido un cliente con el nombre "Mi Cliente" y ClientID `mi-cliente` escriba su modificador como `$client='Mi Cliente'` en lugar de `$client=mi-cliente`.

La sintaxis es:

```none
$client=valor1|valor2|...
```

También puede excluir clientes añadiendo un carácter `~` antes del valor. En este caso, la regla no se aplica a las peticiones DNS de este cliente.

```none
$client=~valor1
```

Los nombres de los clientes suelen contener espacios u otros caracteres especiales, por lo que debe colocar el nombre entre comillas. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

**NOTE:** When excluding a client, you **must** place `~` outside the quotes.

**Ejemplos:**

* `@@||*^$client=127.0.0.1`: unblock everything for localhost.

* `||example.org^$client='Frank\'s laptop'`: block `example.org` for the client named `Frank's laptop` only. Note that quote (`'`) in the name must be escaped.

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: block `example.org` for everyone except for the client named `Mary's, John's, and Boris's laptops`. Note that comma (`,`) must be escaped as well.

* `||example.org^$client=~Mom|~Dad|Kids`: block `example.org` for `Kids`, but not for `Mom` and `Dad`. This example demonstrates how to specify multiple clients in one rule.

* `||example.org^$client=192.168.0.0/24`: block `example.org` for all clients with IP addresses in the range from `192.168.0.0` to `192.168.0.255`.

#### `denyallow`

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

La sintaxis es:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Block everything.
/.*/

! Unblock a couple of TLDs.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here's how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Ejemplos:**

* `*$denyallow=com|net`: block everything except for `*.com` and `*.net`.

* `@@*$denyallow=com|net`: unblock everything except for `*.com` and `*.net`.

* `||example.org^$denyallow=sub.example.org`. block `example.org` and `*.example.org` but don't block `sub.example.org`.

#### `dnstype`

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

La sintaxis es:

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

* `||example.org^$dnstype=AAAA`: block DNS queries for the IPv6 addresses of `example.org`.

* `||example.org^$dnstype=~A|~CNAME`: only allow `A` and `CNAME` DNS queries for `example.org`, block out the rest.

**NOTE:** Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
ANSWERS:
->  example.com
    canonical name = canon.example.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite`

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home.**

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
||example.com^$dnsrewrite=example.net
! Or:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

```sh
$ nslookup example.com my.adguard.local
```

```none
Server:     my.adguard.local
Address:    127.0.0.1#53

Non-authoritative answer:
example.com canonical name = example.net.
Name:   example.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records' values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR`record for reverse DNS. Reverse DNS requests for `1.2.3.4` to the DNS server will result in `example.net`.

  **NOTE:** the IP MUST be in reverse order. See [RFC 1035][rfc1035].

* `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` adds an `A` record with the value `1.2.3.4`.

* `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` adds an `AAAA` record with the value `abcd::1234`.

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adds a `CNAME` record. See explanation above.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adds an `HTTPS` record. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Supported.
   ipv4hint="127.0.0.1"           // Unsupported.
   ipv4hint=127.0.0.1,127.0.0.2   // Unsupported.
   ipv4hint="127.0.0.1,127.0.0.2" // Unsupported.
   ```

  This will be changed in the future.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` adds an `MX` record with precedence value `32` and exchange value `example.mail`.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` adds a `SVCB` value. See the `HTTPS` example above.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` adds a `TXT` record with the value `hello_world`.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;` responds with an `NXDOMAIN` code.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responds with an empty `NOERROR` answers for all `AAAA` requests except the ones for `example.org`.

Exception rules remove one or all rules:

* `@@||example.com^$dnsrewrite` removes all DNS rewrite rules.

* `@@||example.com^$dnsrewrite=1.2.3.4` removes the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

#### `important`

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Ejemplos:**

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` will block all requests to `*.example.org` despite the exception rule.

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  the exception rule also has the `important` modifier, so it will work.

#### `badfilter`

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Ejemplos:**

* `||example.com$badfilter` disables `||example.com`.

* `@@||example.org^$badfilter` disables `@@||example.org^`.

  **NOTE:** The `badfilter` modifier currently doesn't work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

#### `ctag`

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

La sintaxis es:

```none
$ctag=value1|value2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**Ejemplos:**

* `||example.org^$ctag=device_pc|device_phone`: block `example.org` for clients tagged as `device_pc` or `device_phone`.

* `||example.org^$ctag=~device_phone`: block `example.org` for all clients except those tagged as `device_phone`.

The list of allowed tags:

* By device type:

  * `device_audio`: audio devices.
  * `device_camera`: cameras.
  * `device_gameconsole`: game consoles.
  * `device_laptop`: laptops.
  * `device_nas`: NAS (Network-attached Storages).
  * `device_pc`: PCs.
  * `device_phone`: phones.
  * `device_printer`: printers.
  * `device_securityalarm`: security alarms.
  * `device_tablet`: tablets.
  * `device_tv`: TVs.
  * `device_other`: other devices.

* By operating system:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: other OSes.

* By user group:

  * `user_admin`: administrators.
  * `user_regular`: regular users.
  * `user_child`: children.


## `/etc/hosts`-Style Syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Ejemplos:**

```none
# This is a comment
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # this is also a comment
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.


## Domains-Only Syntax

A simple list of domain names, one name per line.

**Ejemplos:**

```none
# This is a comment
example.com
example.org
example.net # this is also a comment
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style](#adblock-style-syntax) rule.

## Hostlists Compiler

If you are maintaining a blocklist and use different sources in it, [Hostlists compiler][hlc] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Compile a single blocklist from multiple sources.

2. Exclude the rules you don't need.

3. Cleanup the resulting list: deduplicate, remove invalid rules, and compress the list.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
