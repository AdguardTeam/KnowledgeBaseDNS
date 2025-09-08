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

- [Синтаксис в стиле Adblock][]: современный подход к написанию правил фильтрации, базирующийся на использовании подгруппы синтаксиса правил типа Adblock. Таким образом списки блокировки становятся совместимы с браузерными блокировщиками.

- [`/etc/hosts` синтаксис](#etc-hosts-syntax): это старый и проверенный подход, при котором используется тот же синтаксис, что и в операционных системах для hosts-файлов.

- [Синтаксис Domains-only](#domains-only-syntax): простое перечисление имён доменов.

Если вы создаёте список блокировки, мы рекомендуем использовать [синтаксис Adblock][]. У него есть несколько важных преимуществ перед старым синтаксисом:

- **Размер списков блокировки.** Применяя сопоставление шаблонов, вы сможете использовать одно правило вместо сотен записей `/etc/hosts`.

- **Совместимость.** Ваш список блокировки будет совместим с браузерными блокировщиками рекламы, что сделает обмен правилами с фильтрами браузера более простым.

- **Расширяемость.** За последнее десятилетие синтаксис Adblock значительно развился, и мы не видим причин, почему мы не можем расширить его ещё больше и дать дополнительные возможности сетевым блокировщикам.

Если вы поддерживаете чёрный список в стиле `/etc/hosts` или несколько списков фильтрации (независимо от типа), мы предоставляем инструмент для их составления. Мы назвали его [Hostlist compiler][] и сами используем его для создания [DNS-фильтра AdGuard][].

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

Это подмножество [традиционного синтаксиса][], который используется блокировщиками рекламы в браузерах.

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

- `^`: символ-разделитель. В отличие от блокировки рекламы в браузере в имени хоста нечего разделять, поэтому единственная цель этого символа — отметить конец имени хоста.

- `|`: указатель на начало или конец имени хоста. Значение зависит от расположения символов в маске. Например, правило `ample.org|` относится к `example.org`, но не к `example.org.com`. А правило `|example` относится к `example.org`, но не к `test.example`.

### Регулярные выражения {#regular-expressions}

Если вам нужна ещё большая гибкость в создании правил, вы можете использовать [регулярные выражения][regexp] вместо упрощённого синтаксиса сопоставления по умолчанию. Если вы хотите использовать регулярные выражения, шаблон должен выглядеть так:

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

  `||example.org^` — совпадающий шаблон. `$` — разделитель, который указывает на то, что остальные части правила являются модификаторами. `client=127.0.0.1` — модификатор [`client`][] со значением `127.0.0.1`. `,` — разделитель между модификаторами. И наконец, `dnstype=A` — [`dnstype-модификатор`][] со значением `А`.

:::note

Если правило содержит модификатор, не указанный в этом документе, всё правило **будет игнорироваться**. Таким образом мы избегаем ложных срабатываний, когда люди пытаются использовать немодифицированные списки фильтров браузерных блокировщиков рекламы, таких как EasyList или EasyPrivacy.

:::

#### `client` {#client-modifier}

Модификатор `client` позволяет указывать клиентов, к которым применяется это правило. Есть два основных способа определения клиента:

- По его IP-адресу или CIDR-префиксу. Этот способ подходит для всех типов клиентов.

- По имени. Этот способ работает только для сохранённых клиентов в AdGuard Home и устройств в приватном AdGuard DNS, которых вы добавили вручную.

  :::note

  В AdGuard Home ClientID временно не поддерживаются, только имена. Если вы добавили клиента с именем «My Client» и ClientID `my-client`, запишите модификатор как `$client='My Client'`, а не `$client=my-client`.

  :::

Синтаксис:

```none
$client=value1|value2|...
```

Вы также можете исключить клиента из фильтрации, добавив перед значением символ `~`. В этом случае правило не будет применяться к DNS-запросам этого клиента.

```none
$client=~value1
```

Имена клиентов обычно содержат пробелы или другие специальные символы, поэтому необходимо заключать их в кавычки. Поддерживаются как одинарные, так и двойные кавычки ASCII. Используйте обратный слеш (`\`), чтобы изолировать кавычки (`"` и `'`), запятые (`,`) и вертикальные разделители (`|`).

:::note

Исключая клиента из фильтрации, **обязательно** выносите символ `~` за кавычки.

:::

**Примеры:**

- `@@||*^$client=127.0.0.1`: разблокирует всё для localhost.

- `||example.org^$client='Frank\'s laptop'`: блокирует домен `example.org` только для клиента с именем `Frank's laptop`. Обратите внимание, что апостроф (`'`) в имени должен быть экранирован.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: блокирует домен `example.org` для всех, кроме клиентов с именами `Mary's, John's, and Boris's laptops`. Как вы видите, запятая (`,`) тоже должна быть экранирована.

- `||example.org^$client=~Mom|~Dad|Kids`: блокирует домен `example.org` для клиента `Kids`, но не для клиентов `Mom` и `Dad`. Этот пример демонстрирует, как указать несколько клиентов в одном правиле.

- `||example.org^$client=192.168.0.0/24`: блокирует домен `example.org` для клиентов с IP-адресами в диапазоне от `192.168.0.0` до `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

Вы можете использовать модификатор `denyallow`, чтобы исключить домены из правила блокировки. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

Синтаксис:

```none
$denyallow=domain1|domain2|...
```

Этот модификатор позволяет избежать создания ненужных правил исключения, когда блокирующее правило охватывает слишком много доменов. Возможно, вы захотите заблокировать всё, за исключением нескольких доменов верхнего уровня. В таком случае используйте стандартный подход, т. е. такие правила, как эти:

```none
! Заблокировать всё.
/.*/

! Разблокировать несколько доменов верхнего уровня.
@@||com^
@@||net^
```

Проблема этого подхода в том, что вы также разблокируете отслеживающие домены, расположенные на этих доменах верхнего уровня (например, `google-analytics.com`). Вот как решить эту проблему с помощью `denyallow`:

```none
*$denyallow=com|net
```

**Примеры:**

- `*$denyallow=com|net`: блокирует все домены `*.com` и `*.net`.

- `@@*$denyallow=com|net`: разблокирует все домены, кроме `*.com` и `*.net`.

- `||example.org^$denyallow=sub.example.org`: блокирует `example.org` и `*.example.org`, но не блокирует `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

Модификатор `dnstype` позволяет указать тип DNS-запроса или ответа, на который будет срабатывать это правило.

Синтаксис:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

Имена типов нечувствительны к регистру, но проверяются на соответствие набору фактических типов записей DNS-ресурсов (RR).

Не объединяйте исключающие правила с включающими. Например, это правило:

```none
$dnstype=~value1|value2
```

эквивалентно этому:

```none
$dnstype=value2
```

**Примеры:**

- `||example.org^$dnstype=AAAA`: блокирует DNS-запросы для IPv6-адресов домена `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: пропускает только `A` и `CNAME` DNS-запросы для домена `example.org` и блокирует все остальные.

:::note

До версии **0.108.0** для фильтрации записей ответа AdGuard Home использовал тип запроса, а не тип ответа самой записи.  Это вызывало проблемы, поскольку у пользователя не было возможности написать правила, которые разрешали бы определённые записи `CNAME` в ответах на запросы `A` и `AAAA`. Начиная с версии **0.108.0** были внесены изменения, и теперь это правило:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

позволяет избежать фильтрации следующего ответа:

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

Модификатор ответа `dnsrewrite` позволяет заменить содержание ответа на DNS-запрос для совпадающих хостов. Обратите внимание, что этот модификатор работает во всех правилах AdGuard Home, а в приватном AdGuard DNS — только в пользовательских.

**Правила, с модификатором ответа `dnsrewrite`, в AdGuard Home и AdGuard DNS получают больший приоритет в сравнении с другими правилами.**

Ответы на все запросы к хосту, соответствующему правилу `dnsrewrite`, будут заменены. Раздел ответа замещающего ответа будет содержать только RR, которые соответствуют типу запроса и, возможно, CNAME RR. Обратите внимание, что это означает, что ответы на некоторые запросы могут стать пустыми (`NODATA`), если хост соответствует правилу `dnsrewrite`.

Сокращённый синтаксис:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Ключевые слова должны быть написаны ЗАГЛАВНЫМИ буквами (например, `NOERROR`). Перезапись ключевых слов получает приоритет над остальными, результатом будет пустой ответ с соответствующим кодом.

Полный синтаксис использует форму `RCODE;RRTYPE;VALUE`:

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

Синтаксис:

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
[Синтаксис в стиле Adblock]: #adblock-style-syntax

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry
[синтаксис Adblock]: #adblock-style-syntax
[Adblock-style syntax]: #adblock-style-syntax
[`client`]: #client-modifier
[`dnstype-модификатор`]: #dnstype-modifier
[DNS-фильтра AdGuard]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[традиционного синтаксиса]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
