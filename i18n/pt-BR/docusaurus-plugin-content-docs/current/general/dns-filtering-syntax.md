---
title: Sintaxe das regras de filtragem de DNS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Aqui, mostramos como escrever regras de filtragem de DNS personalizadas para uso nos produtos AdGuard

Links rápidos: [Baixe o bloqueador de anúncios do AdGuard](https://agrd.io/download-kb-adblock), [Adquira o AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Experimente o AdGuard DNS](https://agrd.io/download-dns)

:::

## Introdução {#introduction}

Pode utilizar a sintaxe das regras de filtragem do AdGuard DNS para tornar as regras mais flexíveis, para que possam bloquear o conteúdo conforme as suas preferências. A sintaxe das regras de filtragem do AdGuard DNS pode ser utilizada em diferentes produtos AdGuard, tais como AdGuard Home, AdGuard DNS, AdGuard para Windows/Mac/Android.

Existem três abordagens diferentes para escrever listas de bloqueio de hosts:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Dessa forma, as listas de bloqueio são compatíveis com os bloqueadores de anúncios do navegador.

- [`/etc/hosts` sintaxe](#etc-hosts-syntax): a abordagem antiga e comprovada que usa a mesma sintaxe que os sistemas operacionais usam para seus arquivos de hosts.

- [Sintaxe somente de domínios](#domains-only-syntax): uma lista simples de nomes de domínio.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Tem algumas vantagens importantes sobre a sintaxe de estilo antigo:

- **Tamanho das listas de bloqueio.** O uso de correspondência de padrões permite que você tenha uma única regra em vez de centenas de `/etc/hosts` entradas.

- **Compatibilidade.** Sua lista de bloqueio será compatível com bloqueadores de anúncios do navegador e será mais fácil compartilhar regras com uma lista de filtros do navegador.

- **Extensibilidade.** Na última década, a sintaxe do estilo Adblock evoluiu muito e não vemos razão para não estendê-la ainda mais e oferecer recursos adicionais para bloqueadores no nível da rede.

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Exemplos básicos {#basic-examples}

- `||exemplo.org^`: bloqueia o acesso ao domínio `exemplo.org` e a todos os seus subdomínios, como `www.exemplo.org`.

- `@@||exemplo.org^`: desbloqueia o acesso ao domínio `exemplo.org` e a todos os seus subdomínios.

- `1.2.3.4 exemplo.org`: (atenção, `/etc/hosts` - estilo antigo de sintaxe) em AdGuard Home, responder com `1.2.3.4` a consultas para o domínio `exemplo.org` mas **não** os seus subdomínios. No AdGuard DNS Privado, bloqueia o acesso a `exemplo.org`. `www.exemplo.org` permanece permitido.

  No AdGuard Home, usar o endereço IP não especificado (`0.0.0.0`) ou um endereço local (`127.0.0.1` e similares) para um host é basicamente o mesmo que bloquear esse host.

  ```none
  # Retorna o endereço IP 1.2.3.4 para exemplo.org.
  1.2.3.4 exemplo.org
  # Bloqueia exemplo.org respondendo com 0.0.0.0.
  0.0.0.0 exemplo.org
  ```

- `exemplo.org`: uma regra de domínio simples. Bloqueia o domínio `exemplo.org`, mas **não** os seus subdomínios. `www.exemplo.org` permanece permitido.

- `! Aqui vai um comentário` e `# Também um comentário`: comentários.

- `/REGEX/`: bloqueia acesso aos domínios que correspondem à expressão regular especificada.

## Adblock-style syntax {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     regra = ["@@"] padrão ["$" modificadores ]
modificadores = [modificador0, modificador1[, ...[, modificadorN]]]
```

- ` pattern `: a máscara do hostname. Cada hostname é comparado com esta máscara. O padrão também pode conter caracteres especiais, que são descritos abaixo.

- `@@`: o marcador que é usado nas regras de exceção. Inicie sua regra com este marcador se desejar desativar a filtragem dos nomes de host correspondentes.

- `modifiers`: parâmetros que esclarecem a regra. Eles podem limitar o escopo da regra ou até mesmo mudar completamente a forma como ela funciona.

### Special characters {#special-characters}

- `*`: o caractere curinga. É usado para representar qualquer conjunto de caracteres. Isso também pode ser uma string vazia ou uma string de qualquer tamanho.

- `||`: corresponde ao início de um nome de host, incluindo qualquer subdomínio. Por exemplo, `||exemplo.org` corresponde a `exemplo.org` e `teste.exemplo.org`, mas não `testexample.org`.

- `^`: o caractere separador. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`: um ponteiro para o início ou o fim do nome do host. O valor depende do posicionamento do caractere na máscara. Por exemplo, a regra `ample.org|` corresponde a `exemplo.org` mas não a `exemplo.org.com`. `|exemplo` corresponde a `exemplo.org` mas não a `teste.exemplo`.

### Regular expressions {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Se você quiser usar uma expressão regular, o padrão deve ficar assim:

```none
padrão = "/" regexp "/"
```

**Exemplos:**

- `/example.*/` bloqueará os hosts correspondentes ao `example.*` regexp.

- `@@/example.*/$important` irá desbloquear os hosts correspondentes ao `exemplo.*` regexp. Observe que esta regra também implica o modificador`important`.

### Comments {#comments}

Qualquer linha que comece com um ponto de exclamação ou hash é um comentário e será ignorado pelo mecanismo de filtragem. Os comentários geralmente são colocados acima das regras e usados para descrever o que uma regra faz.

**Exemplo:**

```none
! Isso é um comentário.
# Isso também é um comentário.
```

### Rule modifiers {#rule-modifiers}

Você pode alterar o comportamento de uma regra adicionando modificadores. Os modificadores devem estar localizados no final da regra após o caractere `$` e ser separados por vírgulas.

**Exemplos:**

- ```none ||exemplo.org^$important
   ```

  `||example.org^` é o padrão correspondente. `$` é o delimitador, que sinaliza que o restante da regra são modificadores. `important` é o modificador.

- You may want to use multiple modifiers in a rule. Nesse caso, separe-os por vírgulas:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` é o padrão correspondente. `$` é o delimitador, que sinaliza que o restante da regra são modificadores. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` is the delimiter between modifiers. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- Por seu endereço IP ou prefixo CIDR. Esta forma funciona para todos os tipos de clientes.

- Pelo seu nome. Essa forma funciona apenas para clientes persistentes (no AdGuard Home) e dispositivos (no DNS privado do AdGuard), que você adicionou manualmente.

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

**Exemplos:**

- `@@||*^$client=127.0.0.1`: desbloqueie tudo para localhost.

- `||example.org^$client='Laptop do Frank'`: bloco `example.org` para o cliente chamado `Laptop do Frank` apenas. Observe que as aspas (`'`) no nome devem ter escape.

- `||example.org^$client=~'Laptops de Mary, John e Boris`: bloqueie `example.org` para todos, exceto para o cliente chamado `Laptop de Mary, John e Boris`. Observe que a vírgula (`,`) também deve ser escapada.

- `||example.org^$client=~Mãe|~Pai|Crianças`: bloqueie `exemplo.org` para `Crianças`, mas não para `Mãe` e `Pai`. Este exemplo demonstra como especificar vários clientes em uma regra.

- `||example.org^$client=192.168.0.0/24`: bloqueie `example.org` para todos os clientes com endereços IP no intervalo de `192.168.0.0` a `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domínio1|domínio2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Bloquear tudo.
/.*/

! Desbloqueie alguns TLDs.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Exemplos:**

- `*$denyallow=com|net`: bloqueie tudo exceto `*.com` e `*.net`.

- `@@*$denyallow=com|net`: desbloqueie tudo exceto `*.com` e `*.net`.

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org`, but not `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

The syntax is:

```none
$dnstype=valor1|valor2|...
$dnstype=~valor1|~valor2|~...
```

The names of the types are case-insensitive, but are validated against a set of actual DNS resource record (RR) types.

Do not combine exclusion rules with inclusion ones. This:

```none
$dnstype=~valor1|valor2
```

is equivalent to this:

```none
$dnstype=valor2
```

**Exemplos:**

- `||example.org^$dnstype=AAAA`: bloqueia consultas DNS para os endereços IPv6 de `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: permita apenas `A` e `CNAME` consultas DNS para `example.org`, bloqueie o resto.

:::note

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
RESPOSTAS:
->  exemplo.com
    nome canônico = canon.exemplo.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
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
||example.com^$dnsrewrite=example.net
! Ou:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
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
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR` record for reverse DNS. Solicitações DNS reversas para `1.2.3.4` para o servidor DNS resultarão em `example.net`.

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||exemplo.com^$dnsrewrite=NOERROR;A;1.2.3.4` adiciona um registro `A` com o valor `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` adiciona um registro `AAAA` com o valor `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adiciona o registro `CNAME`. Veja a explicação acima.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adiciona um registro `HTTPS`. Apenas um subconjunto de valores de parâmetro é suportado: os valores devem ser `contíguos` e, onde uma lista de `valores` é `esperada`, apenas um valor é atualmente compatível:

   ```none
   ipv4hint=127.0.0.1             // Compatível.
   ipv4hint="127.0.0.1"           // Não suportado.
   ipv4hint=127.0.0.1,127.0.0.2   // Não suportado.
   ipv4hint="127.0.0.1,127.0.0.2" // Não suportado.
   ```

  Isso será alterado no futuro.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` adiciona um registro `MX` com valor de precedência `32` e valor de troca `example.mail`.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` adiciona um valor `SVCB`. Veja o exemplo `HTTPS` acima.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` adiciona um registro `TXT` com o valor `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adiciona um registo `SRV` com valor de prioridade `10`, valor de peso `60`, porta`8080`e valor de destino `example.com`.

- `||exemplo.com^$dnsrewrite=NXDOMAIN;;` responde com um código `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responde com um `NOERROR` vazio responde a todos os pedidos `AAAA` exceto os pedidos para `example.org`.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` unblocks all DNS rewrite rules.

- `@@||example.com^$dnsrewrite=1.2.3.4` unblocks the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Exemplos:**

- Neste exemplo:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` bloqueará todas as solicitações para `*.example.org` apesar da regra de exceção.

- Neste exemplo:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  a regra de exceção também tem o modificador`important`, então funcionará.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Exemplos:**

- `||exemplo.com$badfilter` desativa `||exemplo.com`.

- `@@||example.org^$badfilter` desativa `@@||example.org^`.

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

**Exemplos:**

- `||example.org^$ctag=device_pc|device_phone`: bloco `example.org` para clientes marcados como `device_pc` ou `device_phone`.

- `||example.org^$ctag=~device_phone`: bloco `example.org` para todos os clientes, exceto aqueles marcados como `device_phone`.

The list of allowed tags:

- Por tipo de dispositivo:

    - `device_audio`: dispositivos de áudio.
    - `device_camera`: câmeras.
    - `device_gameconsole`: consoles de jogos.
    - `device_laptop`: notebooks.
    - `device_nas`: NAS (Network-attached Storages).
    - `device_pc`: PCs.
    - `device_phone`: celulares.
    - `device_printer`: impressoras.
    - `device_securityalarm`: alarmes de segurança.
    - `device_tablet`: tablets.
    - `device_tv`: TVs.
    - `device_other`: outros dispositivos.

- Por sistema operacional:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: outros sistemas operacionais.

- Por grupo de usuários:

    - `user_admin`: administradores.
    - `user_regular`: usuários comuns.
    - `user_child`: filhos.

## `/etc/hosts`-style syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Exemplo:**

```none
# Este é um comentário
127.0.0.1 exemplo.org exemplo.info
127.0.0.1 exemplo.com
127.0.0.1 exemplo.net # isso também é um comentário
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Domains-only syntax {#domains-only-syntax}

A simple list of domain names, one name per line.

**Exemplo:**

```none
# Isto é um comentário
exemplo.com
exemplo.org
exemplo.net # isto também é um comentário
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it’s capable of:

1. Compilar uma única lista de bloqueios a partir de várias fontes.

2. Exclude the rules you don’t need.

3. Limpe a lista resultante: remova a duplicação, remova regras inválidas e compacte a lista.

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
