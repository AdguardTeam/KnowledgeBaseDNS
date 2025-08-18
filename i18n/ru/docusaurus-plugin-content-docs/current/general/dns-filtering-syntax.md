---
title: Синтаксис правил DNS-фильтрации
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Рассказываем, как писать пользовательские правила DNS-фильтрации для использования в продуктах AdGuard

Быстрые ссылки: [Скачать Блокировщик AdGuard](https://agrd.io/download-kb-adblock), [Установить AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Попробовать AdGuard DNS](https://agrd.io/download-dns)

:::

## Введение {#introduction}

Синтаксис правил фильтрации AdGuard DNS можно использовать, чтобы сделать правила более гибкими и блокировать контент в соответствии с вашими предпочтениями. Применять данный синтаксис можно в разных продуктах AdGuard, таких как AdGuard Home, AdGuard DNS, AdGuard для Windows/Mac/Android.

Есть три подхода к написанию hosts-списков блокировки:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Таким образом списки блокировки становятся совместимы с браузерными блокировщиками.

- [`/etc/hosts` синтаксис](#etc-hosts-syntax): это старый и проверенный подход, при котором используется тот же синтаксис, что и в операционных системах для hosts-файлов.

- [Синтаксис Domains-only](#domains-only-syntax): простое перечисление имён доменов.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. У него есть несколько важных преимуществ перед старым синтаксисом:

- **Размер списков блокировки.** Применяя сопоставление шаблонов, вы сможете использовать одно правило вместо сотен записей `/etc/hosts`.

- **Совместимость.** Ваш список блокировки будет совместим с браузерными блокировщиками рекламы, что сделает обмен правилами с фильтрами браузера более простым.

- **Расширяемость.** За последнее десятилетие синтаксис Adblock значительно развился, и мы не видим причин, почему мы не можем расширить его ещё больше и дать дополнительные возможности сетевым блокировщикам.

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Базовые примеры {#basic-examples}

- `||example.org^`: блокирует доступ к домену `example.org` и всем его поддоменам, таким как `www.example.org`.

- `@@||example.org^`: разблокирует доступ к домену `example.org` и всем его поддоменам.

- `1.2.3.4 example.org`: (внимание, устаревший синтаксис типа `/etc/hosts`) в AdGuard Home отвечает `1.2.3.4` на запросы к домену `example.org`, но **не** к его поддоменам. В приватном AdGuard DNS блокирует доступ к `example.org`. `www.example.org` остаётся доступным.

  В AdGuard Home использование неопределённого IP-адреса (`0.0.0.0`) или локального адреса (`127.0.0.1` и т. п.) для хоста практически то же самое, что и блокировка этого хоста.

  ```none
  # Возвращает IP-адрес 1.2.3.4. для example.org.
  1.2.3.4 example.org
  # Блокирует example.org ответом 0.0.0.0.
  0.0.0.0 example.org
  ```

- `example.org`: простое доменное правило. Блокирует домен `example.org`, но **не** его поддомены. `www.example.org` остаётся доступным.

- `! Это комментарий ` и ` # Это тоже комментарий`: комментарии.

- `/REGEX/`: блокирует доступ к доменам, соответствующим заданному регулярному выражению.

## Синтаксис по примеру блокировщиков {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern`: маска имени хоста. Каждое имя хоста сопоставляется с этой маской. Шаблон также может содержать особые знаки, о которых сказано ниже.

- `@@`: маркер, использующийся в правилах исключений. Ставьте этот маркер в начало правила, если хотите отключить фильтрацию для совпадающих имён хостов.

- `modifiers`: параметры, объясняющие правило. Они могут ограничить сферу применения правила или даже полностью изменить принцип его действия.

### Специальные символы {#special-characters}

- `*`: подстановочный знак. Используется, чтобы обозначить любой набор символов. Это может быть пустая строка или строка любой длины.

- `||`: совпадает с началом имени хоста, включая любые субдомены. Например, `||example.org` соответствует `example.org` и `test.example.org`, но не `testexample.org`.

- `^`: символ-разделитель. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`: указатель на начало или конец имени хоста. Значение зависит от расположения символов в маске. Например, правило `ample.org|` относится к `example.org`, но не к `example.org.com`. А правило `|example` относится к `example.org`, но не к `test.example`.

### Регулярные выражения {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Если вы хотите использовать регулярные выражения, шаблон должен выглядеть так:

```none
pattern = "/" regexp "/"
```

**Примеры:**

- `/example.*/` заблокирует хосты, совпадающие с регулярным выражением `example.*`.

- `@@/example.*/$important` разблокирует хосты, совпадающие с регулярным выражением `example.*`. Обратите внимание, что это правило также включает модификатор `important`.

### Комментарии {#comments}

Любая строка, начинающаяся с восклицательного знака или хеша, является комментарием, и будет проигнорирована движком фильтрации. Комментарии обычно размещаются над правилами и описывают то, что они делают.

**Пример:**

```none
! Это комментарий.
# Это тоже комментарий.
```

### Модификаторы правил {#rule-modifiers}

Вы можете изменить поведение правила при помощи модификаторов. Их необходимо располагать в конце правила после символа `$` и разделять запятыми.

**Примеры:**

- ```none ||example.org^$important
   ```

  `||example.org^` — паттерн правила. `$` — разделитель, который указывает на то, что остальные части правила — это модификаторы. `important` — модификатор.

- Возможно, вы захотите использовать в правиле несколько модификаторов. В этом случае разделяйте их запятыми:

  ``none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` — совпадающий шаблон. `$` — разделитель, который указывает на то, что остальные части правила являются модификаторами. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` — разделитель между модификаторами. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- По его IP-адресу или CIDR-префиксу. Этот способ подходит для всех типов клиентов.

- По имени. Этот способ работает только для сохранённых клиентов в AdGuard Home и устройств в приватном AdGuard DNS, которых вы добавили вручную.

  :::note

  In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

  :::

The syntax is:

```none
$client=value1|value2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client’s DNS requests.

```none
$client=~value1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

:::note

When excluding a client, you **must** place `~` outside the quotes.

:::

**Примеры:**

- `@@||*^$client=127.0.0.1`: разблокирует всё для localhost.

- `||example.org^$client='Frank\'s laptop'`: блокирует домен `example.org` только для клиента с именем `Frank's laptop`. Обратите внимание, что апостроф (`'`) в имени должен быть экранирован.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: блокирует домен `example.org` для всех, кроме клиентов с именами `Mary's, John's, and Boris's laptops`. Как вы видите, запятая (`,`) тоже должна быть экранирована.

- `||example.org^$client=~Mom|~Dad|Kids`: блокирует домен `example.org` для клиента `Kids`, но не для клиентов `Mom` и `Dad`. Этот пример демонстрирует, как указать несколько клиентов в одном правиле.

- `||example.org^$client=192.168.0.0/24`: блокирует домен `example.org` для клиентов с IP-адресами в диапазоне от `192.168.0.0` до `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Заблокировать всё.
/.*/

! Разблокировать несколько доменов верхнего уровня.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Примеры:**

- `*$denyallow=com|net`: блокирует все домены `*.com` и `*.net`.

- `@@*$denyallow=com|net`: разблокирует все домены, кроме `*.com` и `*.net`.

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org` but don’t block `sub.example.org`.

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

**Примеры:**

- `||example.org^$dnstype=AAAA`: блокирует DNS-запросы для IPv6-адресов домена `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: пропускает только `A` и `CNAME` DNS-запросы для домена `example.org` и блокирует все остальные.

:::note

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
ОТВЕТЫ:
->  example.com
    canonical name = canon.example.com.
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
! Или:
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

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` добавляет запись `PTR` для обратного DNS. Обратные DNS-запросы на `1.2.3.4` к DNS-серверу получат результат `example.net`.

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` добавляет запись `A` со значением `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` добавляет запись `AAAA` со значением `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` добавляет запись `CNAME`. Выше объяснение, почему так.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` добавляет запись `HTTPS`. Поддерживается только подмножество значений параметров: значения должны быть `смежными ` и, там, где `ожидался список значений`, только одно значение поддерживается:

   ```none
   ipv4hint=127.0.0.1             // Поддерживается.
   ipv4hint="127.0.0.1"           // Не поддерживается.
   ipv4hint=127.0.0.1,127.0.0.2   // Не поддерживается.
   ipv4hint="127.0.0.1,127.0.0.2" // Не поддерживается.
   ```

  В будущем это изменится.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` добавляет запись `MX` с порядковым номером `32` и доменным именем почтового сервера `example.mail`.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` добавляет значение `SVCB`. Посмотрите на пример `HTTPS` выше.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` добавляет запись `TXT` со значением `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` добавляет запись `SRV` с приоритетным значением `10`, значением веса `60`, портом `8080` и целевым значением `example.com`.

- `||example.com^$dnsrewrite=NXDOMAIN;;` отвечает кодом `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` отвечает пустым `NOERROR` значением для всех запросов `AAAA`, кроме запросов к `example.org`.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` разблокирует все правила перезаписи DNS.

- `@@||example.com^$dnsrewrite=1.2.3.4` разблокирует правило перезаписи DNS, которое добавляет запись `A` со значением `1.2.3.4`.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Примеры:**

- В этом примере:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` заблокирует все запросы к `*.example.org`, несмотря на правило исключения.

- В этом примере:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  правило исключения также содержит модификатор `important`, поэтому правило сработает.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Примеры:**

- `||example.com$badfilter` отменяет `||example.com`.

- `@@||example.org^$badfilter` отменяет `@@||example.org^`.

  :::note

  The `badfilter` modifier currently doesn’t work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

  :::

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=value1|value2|...
```

If one of client’s tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client’s tags matches the exclusion `ctag` values, this rule doesn’t apply to the client.

**Примеры:**

- `||example.org^$ctag=device_pc|device_phone`: блокировать `example.org` для тегов `device_pc` или `device_phone`.

- `||example.org^$ctag=~device_phone`: блокировать `example.org` для всех тегов, кроме `device_phone`.

The list of allowed tags:

- По типу устройства:

    - `device_audio`: аудио устройства.
    - `device_camera`: фотоаппараты.
    - `device_gameconsole`: игровые консоли.
    - `device_laptop`: ноутбуки.
    - `device_nas`: системы NAS (сетевые хранилища).
    - `device_pc`: ПК.
    - `device_phone`: телефоны.
    - `device_printer`: принтеры.
    - `device_securityalarm`: системы сигнализации.
    - `device_tablet`: планшеты.
    - `device_tv`: телевизоры.
    - `device_other`: другие устройства.

- По операционной системе:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: другие операционные системы.

- По группам пользователей:

    - `user_admin`: администраторы.
    - `user_regular`: рядовые пользователи.
    - `user_child`: дети.

## синтаксис в стиле `/etc/hosts` {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Пример:**

```none
# Это комментарий
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # это тоже комментарий
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Синтаксис только для доменов {#domains-only-syntax}

A simple list of domain names, one name per line.

**Пример:**

```none
# Это комментарий
example.com
example.org
example.net # это тоже комментарий
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Компилятор хостлистов {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it’s capable of:

1. Собрать единый список блокировки из разных источников.

2. Exclude the rules you don’t need.

3. Подчистить список, получившийся в результате: убрать дубли, неработающие правила и сжать список.

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
