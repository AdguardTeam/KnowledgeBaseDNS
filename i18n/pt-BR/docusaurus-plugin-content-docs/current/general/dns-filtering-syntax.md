---
title: Sintaxe das regras de filtragem de DNS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Aqui, mostramos como escrever regras de filtragem de DNS personalizadas para uso nos produtos AdGuard

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

## Introduction {#introduction}

Pode utilizar a sintaxe das regras de filtragem do AdGuard DNS para tornar as regras mais flexíveis, para que possam bloquear o conteúdo conforme as suas preferências. A sintaxe das regras de filtragem do AdGuard DNS pode ser utilizada em diferentes produtos AdGuard, tais como AdGuard Home, AdGuard DNS, AdGuard para Windows/Mac/Android.

Existem três abordagens diferentes para escrever listas de bloqueio de hosts:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Dessa forma, as listas de bloqueio são compatíveis com os bloqueadores de anúncios do navegador.

- [`/etc/hosts` sintaxe](#etc-hosts-syntax): a abordagem antiga e comprovada que usa a mesma sintaxe que os sistemas operacionais usam para seus arquivos de hosts.

- [Sintaxe somente de domínios](#domains-only-syntax): uma lista simples de nomes de domínio.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Tem algumas vantagens importantes sobre a sintaxe de estilo antigo:

- **Tamanho das listas de bloqueio.** O uso de correspondência de padrões permite que você tenha uma única regra em vez de centenas de `/etc/hosts` entradas.

- **Compatibilidade.** Sua lista de bloqueio será compatível com bloqueadores de anúncios do navegador e será mais fácil compartilhar regras com uma lista de filtros do navegador.

- **Extensibilidade.** Na última década, a sintaxe do estilo Adblock evoluiu muito e não vemos razão para não estendê-la ainda mais e oferecer recursos adicionais para bloqueadores no nível da rede.

Se você estiver mantendo uma lista de bloqueio de estilo `/etc/hosts`ou várias listas de filtragem (independentemente do tipo), fornecemos uma ferramenta para compilação de lista de bloqueio. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Basic examples {#basic-examples}

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

- `^`: o caractere separador. Ao contrário do bloqueio de anúncios do navegador, não há nada para separar em um nome de host, portanto, o único objetivo desse caractere é marcar o final do nome do host.

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

**NOTA:** Se uma regra contém um modificador não listado neste documento, toda a regra **deve ser ignorada**. Dessa forma, evitamos falsos positivos quando as pessoas estão tentando usar listas de filtros de bloqueadores de anúncios de navegador não modificados, como EasyList ou EasyPrivacy.

#### `client` {#client-modifier}

O modificador `client` permite especificar os clientes aos quais esta regra é aplicada. Existem duas maneiras principais de identificar um cliente:

- Por seu endereço IP ou prefixo CIDR. Esta forma funciona para todos os tipos de clientes.

- Pelo seu nome. Essa forma funciona apenas para clientes persistentes (no AdGuard Home) e dispositivos (no DNS privado do AdGuard), que você adicionou manualmente.

  **NOTA:** No AdGuard Home, ClientIDs não são compatíveis atualmente, apenas nomes são compatíveis. Se você adicionou um cliente com o nome “My Client” e ClientID `my-client` digite seu modificador como `$client='My Client'` em vez de `$client=my-client`.

A sintaxe é:

```none
$client=valor1|valor2|...
```

Você também pode excluir clientes adicionando um caractere `~` antes do valor. Nesse caso, a regra não será aplicada às solicitações de DNS desse cliente.

```none
$client=~valor1
```

Os nomes dos clientes geralmente contêm espaços ou outros caracteres especiais, e é por isso que você deve colocar o nome entre aspas. As aspas ASCII simples e duplas são compatíveis. Use a barra invertida (`\`) para escapar de aspas (`"` e `'`), vírgulas (`,`) e barras verticais (`|`).

**NOTA:** Ao excluir um cliente, você **deve** colocar `~` fora das aspas.

**Exemplos:**

- `@@||*^$client=127.0.0.1`: desbloqueie tudo para localhost.

- `||example.org^$client='Laptop do Frank'`: bloco `example.org` para o cliente chamado `Laptop do Frank` apenas. Observe que as aspas (`'`) no nome devem ter escape.

- `||example.org^$client=~'Laptops de Mary, John e Boris`: bloqueie `example.org` para todos, exceto para o cliente chamado `Laptop de Mary, John e Boris`. Observe que a vírgula (`,`) também deve ser escapada.

- `||example.org^$client=~Mãe|~Pai|Crianças`: bloqueie `exemplo.org` para `Crianças`, mas não para `Mãe` e `Pai`. Este exemplo demonstra como especificar vários clientes em uma regra.

- `||example.org^$client=192.168.0.0/24`: bloqueie `example.org` para todos os clientes com endereços IP no intervalo de `192.168.0.0` a `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

Você pode usar o modificador `denyallow` para excluir domínios da regra de bloqueio. Para adicionar vários domínios a uma regra, use o caractere `|` como separador.

A sintaxe é:

```none
$denyallow=domínio1|domínio2|...
```

Este modificador permite evitar a criação de regras de exceção desnecessárias quando nossa regra de bloqueio abrange muitos domínios. Talvez você queira bloquear tudo, exceto alguns domínios TLD. Você pode usar a abordagem padrão, ou seja, regras como esta:

```none
! Bloquear tudo.
/.*/

! Desbloqueie alguns TLDs.
@@||com^
@@||net^
```

O problema com essa abordagem é que, dessa forma, você também desbloqueará os domínios de rastreamento localizados nesses TLDs (ou seja `google-analytics.com`). Veja como resolver isso com `denyallow`:

```none
*$denyallow=com|net
```

**Exemplos:**

- `*$denyallow=com|net`: bloqueie tudo exceto `*.com` e `*.net`.

- `@@*$denyallow=com|net`: desbloqueie tudo exceto `*.com` e `*.net`.

- `||exemplo.org^$denyallow=sub.exemplo.org`. bloqueie `example.org` e `*.example.org`, mas não bloqueie `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

O modificador `dnstype` permite especificar a solicitação de DNS ou o tipo de resposta em que essa regra será acionada.

A sintaxe é:

```none
$dnstype=valor1|valor2|...
$dnstype=~valor1|~valor2|~...
```

Os nomes dos tipos não diferenciam maiúsculas de minúsculas, mas são validados em relação a um conjunto de tipos reais de registro de recurso DNS (RR).

Não combine regras de exclusão com as de inclusão. Isso:

```none
$dnstype=~valor1|valor2
```

é equivalente a isso:

```none
$dnstype=valor2
```

**Exemplos:**

- `||example.org^$dnstype=AAAA`: bloqueia consultas DNS para os endereços IPv6 de `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: permita apenas `A` e `CNAME` consultas DNS para `example.org`, bloqueie o resto.

**NOTA:** Antes da versão **v0.108.0,** o AdGuard Home usaria o tipo de solicitação para filtrar os registros de resposta, em oposição ao tipo do próprio registro de resposta.  Isso causava problemas, pois significava que você não poderia escrever regras que permitissem certos registros `CNAME` em respostas em solicitações `A` e `AAAA`. Em **v0.108.0** esse comportamento foi alterado, agora isso:

```none
||canon.example.com^$dnstype=~CNAME
```

permite evitar a filtragem da seguinte resposta:

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

O modificador de resposta `dnsrewrite` permite substituir o conteúdo da resposta à solicitação DNS para os hosts correspondentes. Observe que esse modificador no AdGuard Home funciona em todas as regras, mas no DNS privado do AdGuard, funciona apenas nas regras personalizadas.

**As regras com o modificador de resposta `dnsrewrite` têm prioridade mais alta do que outras regras no AdGuard Home.**

Responses to all requests for a host matching a `dnsrewrite` rule will be replaced. The answer section of the replacement response will only contain RRs that match the request's query type and, possibly, CNAME RRs. Note that this means that responses to some requests may become empty (`NODATA`) if the host matches a `dnsrewrite` rule.

A sintaxe abreviada é:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

As palavras-chave DEVEM estar em letras maiúsculas (por exemplo `NOERROR`). As reescritas de palavras-chave têm precedência sobre as outras e resultarão em uma resposta vazia com um código de resposta apropriado.

A sintaxe completa está no formato `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

O modificador `$dnsrewrite` com o código de resposta `NOERROR` também pode ter campos `RRTYPE` e `VALUE` vazios.

O `CNAME` é especial porque o AdGuard Home resolverá o host e adicionará suas informações à resposta. Ou seja, se `example.net` tiver o IP `1.2.3.4`, e o usuário tiver isso em suas regras de filtragem:

```none
||example.com^$dnsrewrite=example.net
! Ou:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

então a resposta será algo como:

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

Em seguida, a substituição do `CNAME`. Depois disso, os valores de todos os outros registros são somados como uma resposta, então isso:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

resultará em uma resposta com dois registros `A`.

Tipos de RR atualmente compatíveis, com exemplos:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR` record for reverse DNS. Solicitações DNS reversas para `1.2.3.4` para o servidor DNS resultarão em `example.net`.

  **NOTA:** o IP DEVE estar na ordem inversa. See [RFC 1035][rfc1035].

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

#### `important` {#important-modifier}

O modificador `important` aplicado a uma regra aumenta sua prioridade sobre qualquer outra regra sem o modificador. Mesmo em relação a regras básicas de exceção.

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

As regras com o modificador `badfilter` desativam outras regras básicas às quais se referem. Isso significa que o texto da regra desabilitada deve corresponder ao texto da regra `badfilter` (sem o modificador `badfilter`).

**Exemplos:**

- `||exemplo.com$badfilter` desativa `||exemplo.com`.

- `@@||example.org^$badfilter` desativa `@@||example.org^`.

  **NOTA:** O modificador `badfilter` atualmente não funciona com regras de estilo `/etc/hosts`. `127.0.0.1 exemplo.org$badfilter` **não** irá desativar a regra original `127.0.0.1 exemplo.org`.

#### `ctag` {#ctag-modifier}

**O modificador `ctag` só pode ser usado no AdGuard Home.**

Ele permite bloquear domínios apenas para tipos específicos de tags de cliente DNS. Você pode atribuir tags a clientes na interface do usuário do AdGuard Home. No futuro, planejamos atribuir tags automaticamente analisando o comportamento de cada cliente.

A sintaxe é:

```none
$ctag=valor1|valor2|...
```

Se uma das tags do cliente corresponder aos valores `ctag`, esta regra se aplica ao cliente. A sintaxe para exclusão é:

```none
$ctag=~valor1|~valor2|...
```

Se uma das tags do cliente corresponder aos valores de exclusão `ctag`, essa regra não se aplica ao cliente.

**Exemplos:**

- `||example.org^$ctag=device_pc|device_phone`: bloco `example.org` para clientes marcados como `device_pc` ou `device_phone`.

- `||example.org^$ctag=~device_phone`: bloco `example.org` para todos os clientes, exceto aqueles marcados como `device_phone`.

A lista de tags permitidas:

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

Para cada host, uma única linha deve estar presente com as seguintes informações:

```none
IP_address canonical_hostname [aliases...]
```

Os campos das entradas são separados por qualquer número de caracteres de espaço ou tabulação. O texto do caractere `#` até o final da linha é um comentário e é ignorado.

Os nomes de host podem conter apenas caracteres alfanuméricos, hífen (`-`) e pontos (`.`). Eles devem começar com um caractere alfabético e terminar com um caractere alfanumérico. Os aliases opcionais fornecem mudanças de nome, grafias alternativas, nomes de host mais curtos ou nomes de host genéricos (por exemplo, `localhost`).

**Exemplo:**

```none
# Este é um comentário
127.0.0.1 exemplo.org exemplo.info
127.0.0.1 exemplo.com
127.0.0.1 exemplo.net # isso também é um comentário
```

No AdGuard Home, os endereços IP são usados para responder às consultas de DNS desses domínios. No DNS privado do AdGuard, esses endereços são simplesmente bloqueados.

## Domains-only syntax {#domains-only-syntax}

Uma lista simples de nomes de domínio, um nome por linha.

**Exemplo:**

```none
# Isto é um comentário
exemplo.com
exemplo.org
exemplo.net # isto também é um comentário
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. É uma ferramenta simples que facilita a compilação de uma lista de bloqueio de hosts compatível com AdGuard Home, Private AdGuard DNS ou qualquer outro produto AdGuard com filtragem de DNS.

O que é capaz de fazer:

1. Compilar uma única lista de bloqueios a partir de várias fontes.

2. Excluir as regras de que você não precisa.

3. Limpe a lista resultante: remova a duplicação, remova regras inválidas e compacte a lista.

<!-- local links -->


<!-- external links -->
[Adblock-style syntax]: #adblock-style-syntax
[`client`]: #client-modifier
[`dnstype`]: #dnstype-modifier
[AdGuard DNS filter]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[traditional Adblock-style syntax]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
