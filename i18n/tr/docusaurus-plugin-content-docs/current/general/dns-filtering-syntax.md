---
title: DNS filtreleme kuralları söz dizimi
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Burada, AdGuard ürünlerinde kullanılmak üzere özel DNS filtreleme kurallarının nasıl yazılacağını gösteriyoruz

Hızlı bağlantılar: [AdGuard Reklam Engelleyiciyi indir](https://agrd.io/download-kb-adblock), [AdGuard Home'u edin](https://github.com/AdguardTeam/AdGuardHome #getting-started), [AdGuard DNS'i dene](https://agrd.io/download-dns)

:::

## Giriş {#introduction}

Kuralları daha esnek hâle getirmek için AdGuard DNS filtreleme kuralları söz dizimini kullanabilirsiniz, böylece tercihlerinize göre içeriği engelleyebilirler. AdGuard DNS filtreleme kuralları söz dizimi, AdGuard Home, AdGuard DNS, Windows/Mac/Android için AdGuard gibi farklı AdGuard ürünlerinde kullanılabilir.

Ana makine engel listeleri yazmak için üç farklı yaklaşım vardır:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Bu şekilde engel listeleri tarayıcı reklam engelleyicileriyle uyumludur.

- [`/etc/hosts` sözdizimi](#etc-hosts-syntax): işletim sistemlerinin hosts dosyaları için kullandığı söz diziminin aynısını kullanan eski, denenmiş ve doğru yaklaşım.

- [Yalnızca alan adı söz dizimi](#domains-only-syntax): alan adlarının basit bir listesi.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Eski tarz söz dizimine göre birkaç önemli avantajı vardır:

- **Engel listesi boyutu.** Düzen eşleştirmeyi kullanmak, yüzlerce `/etc/hosts` girişi yerine tek bir kurala sahip olmanızı sağlar.

- **Uyumluluk.** Engel listeniz, tarayıcı reklam engelleyicilerle uyumlu olur ve bir tarayıcı filtre listesiyle kuralları paylaşmak daha kolay olacaktır.

- **Genişletilebilirlik.** Geçtiğimiz on yılda, Reklam engelleme stili söz dizimi büyük ölçüde gelişti ve bunu daha da genişletmemek ve ağ düzeyindeki engelleyiciler için ek özellikler sunmamak için hiçbir neden göremiyoruz.

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Temel örnekler {#basic-examples}

- `||example.org^`: `example.org` alan adına ve `www.example.org` gibi tüm alt alan adlarına erişimi engeller.

- `@@|example.org^`: `example.org` alan adına ve tüm alt alan adlarına erişim engelini kaldırın.

- `1.2.3.4 example.org`: (dikkat, eski `/etc/hosts` biçimi söz dizimi) AdGuard Home'da, `example.org` alan adına yönelik sorgulara `1.2.3.4` ile yanıt verin ancak alt alan adlarına **yanıt vermeyin**. Özel AdGuard DNS'de, `example.org` alan adına erişimi engelleyin. `www.example.org` remains allowed.

  AdGuard Home'da, bir ana makine için belirtilmemiş IP adresini (`0.0.0.0`) veya yerel bir adresi (`127.0.0.1` ve benzeri) kullanmak, temel olarak o ana makineyi engellemekle aynıdır.

  ```none
  # example.org için 1.2.3.4 IP adresini döndürür.
  1.2.3.4 example.org
  # example.org alan adını 0.0.0.0 ile yanıtlayarak engeller.
  0.0.0.0 example.org
  ```

- `example.org`: basit bir alan adı kuralı. `example.org` alan adını engeller ancak alt alanlarını **engellemez**. `www.example.org` remains allowed.

- `! Here goes a comment` and `# Also a comment`: comments.

- `/REGEX/`: belirtilen normal ifadeyle eşleşen alan adlarına erişimi engelleyin.

## Adblock-style syntax {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     kural = ["@@"] pattern [ "$" modifiers ]
değiştiriciler = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern`: ana makine adı maskesi. Her ana makine adı bu maskeyle eşleştirilir. Kalıp, aşağıda açıklanan özel karakterleri de içerebilir.

- `@@`: istisna kurallarında kullanılan işaretçi. Eşleşen ana makine adları için filtrelemeyi kapatmak istiyorsanız kuralınıza bu işaretçiyle başlayın.

- `değiştiriciler`: kuralı netleştiren parametreler. Kuralın kapsamını sınırlayabilir veya hatta çalışma şeklini tamamen değiştirebilirler.

### Özel karakterler {#special-characters}

- `*`: joker karakter. Herhangi bir karakter kümesini temsil etmek için kullanılır. Bu ayrıca boş bir dize veya herhangi bir uzunlukta bir dize olabilir.

- `||`: herhangi bir alt alan dahil olmak üzere bir ana makine adının başlangıcıyla eşleşir. Örneğin, `|example.org`, `example.org` ve `test.example.org` ile eşleşir ancak `testexample.org` ile eşleşmez.

- `^`: ayırıcı karakter. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`: ana makine adının başına veya sonuna bir işaretçi. Değer, maskedeki karakter yerleşimine bağlıdır. Örneğin, `ample.org|` kuralı `example.org` alan adına karşılık gelir ancak `example.org.com` alan adına karşılık gelmez. `|example`, `example.org` alan adına karşılık gelir ancak `test.example` alan adına karşılık gelmez.

### Düzenli ifadeler {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Düzenli bir ifade kullanmak istiyorsanız, kalıp aşağıdaki gibi görünmelidir:

```none
pattern = "/" regexp "/"
```

**Örnekler:**

- `/example.*/`, `example.*` alan adı regexp'iyle eşleşen ana makineleri engeller.

- `@@/example.*/$important`, `example.*` regexp'iyle eşleşen ana makinelerin engelini kaldırır. Bu kuralın aynı zamanda `önemli` değiştiricisi anlamına geldiğini unutmayın.

### Yorumlar {#comments}

Ünlem işareti veya hash işareti ile başlayan her satır bir yorumdur ve filtreleme motoru tarafından göz ardı edilir. Yorumlar genellikle kuralların üzerine yerleştirilir ve bir kuralın ne yaptığını açıklamak için kullanılır.

**Örnek:**

```none
! Bu bir yorumdur.
# Bu da bir yorumdur.
```

### Kural değiştiriciler {#rule-modifiers}

Değiştiriciler ekleyerek bir kuralın davranışını değiştirebilirsiniz. Değiştiriciler, kuralın sonunda `$` karakterinden sonra yerleştirilmeli ve virgülle ayrılmalıdır.

**Örnekler:**

- ```none ||example.org^$important
   ```

  `|example.org^` eşleşen kalıptır. `$`, kuralın geri kalanının değiştirici olduğunu belirten sınırlayıcıdır. `important` değiştiricidir.

- Bir kuralda birden çok değiştirici kullanmak isteyebilirsiniz. Bu durumda, bunları virgülle ayırın:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `|example.org^` eşleşen kalıptır. `$`, kuralın geri kalanının değiştirici olduğunu belirten sınırlayıcıdır. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` değiştiriciler arasındaki sınırlayıcıdır. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note Not

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `i̇stemci` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- IP adreslerine veya CIDR öneklerine göre. Bu yol her türlü istemciler için çalışır.

- Adlarına göre. Bu yol, yalnızca elle eklediğiniz kalıcı istemciler (AdGuard Home'da) ve cihazlar (Özel AdGuard DNS'de) için çalışır.

  :::note Not

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

:::note Not

When excluding a client, you **must** place `~` outside the quotes.

:::

**Örnekler:**

- `@@||*^$client=127.0.0.1`: localhost için her şeyin engelini kaldırın.

- `||example.org^$client='Frank\'s laptop'`: `example.org` alan adını yalnızca `Frank'in dizüstü bilgisayarı` adlı istemci için engelleyin. Addaki tırnak işaretinin (`'`) kaçınılması gerektiğini unutmayın.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: `Mary, John ve Boris dizüstü bilgisayarları` adlı istemci dışındaki herkes için `example.org` alan adını engelleyin. Virgülden (`,`) de kaçınılması gerektiğini unutmayın.

- `||example.org^$client=~Mom|~Dad|Kids`: `example.org` alan adını `Kids` için engelleyin ama `Mom` ve `Dad` için engellemeyin. Bu örnek, bir kuralda birden çok istemcinin nasıl belirtileceğini gösterir.

- `||example.org^$client=192.168.0.0/24`: IP adresleri `192.168.0.0` ila `192.168.0.255` aralığında olan tüm istemciler için `example.org` alan adını engelleyin.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Her şeyi engelleyin.
/.*/

! Birkaç üst seviye alan adlarının engelini kaldırın.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Örnekler:**

- `*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyi engelleyin.

- `@@*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyin engelini kaldırın.

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

**Örnekler:**

- `||example.org^$dnstype=AAAA`: `example.org` alan adının IPv6 adresleri için DNS sorgularını engeller.

- `||example.org^$dnstype=~A|~CNAME`: `example.org` için yalnızca `A` ve `CNAME` DNS sorgularına izin verin ve gerisini engelleyin.

:::note Not

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

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
! Veya:
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
Ad: example.net
Adres: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records’ values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.`, ters DNS için bir `PTR` kaydı ekler. DNS sunucusuna `1.2.3.4` için yapılan ters DNS istekleri `example.net` alan adı olarak sonuçlanır.

  :::note Not

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4`, `1.2.3.4` değerine sahip bir `A` kaydı ekler.

- `||example.com^$dnsrewrite=NOERROR;AAAA;.`, `abcd::1234` değerine sahip bir `AAAA` kaydı ekler.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org`, bir `CNAME` kaydı ekler. Yukarıdaki açıklamaya bakın.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3`, bir `HTTPS` kaydı ekler. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Destekleniyor.
   ipv4hint="127.0.0.1"           // Desteklenmiyor.
   ipv4hint=127.0.0.1,127.0.0.2   // Desteklenmiyor.
   ipv4hint="127.0.0.1,127.0.0.2" // Desteklenmiyor.
   ```

  Bu gelecekte değiştirilecektir.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail`, öncelik değeri `32` ve değişim değeri `example.mail` olan bir `MX `kaydı ekler.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3`, bir `SVCB` değeri ekler. Yukarıdaki `HTTPS` örneğine bakın.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world`, `hello_world` değerine sahip bir `TXT` kaydı ekler.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

- `||example.com^$dnsrewrite=NXDOMAIN;;`, bir `NXDOMAIN` kodu ile yanıt verir.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` `example.org` hariç tüm `AAAA` istekleri için boş `NOERROR` yanıtlarıyla yanıt verir.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` tüm DNS yeniden yazma kurallarının engelini kaldırır.

- `@@|example.com^$dnsrewrite=1.2.3.4`, `1.2.3.4` değerine sahip bir `A` kaydı ekleyen DNS yeniden yazma kuralının engelini kaldırır.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Örnekler:**

- Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` istisna kuralına rağmen `*.example.org` alan adına gelen tüm istekleri engeller.

- Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  istisna kuralı da `önemli` değiştiricisine sahiptir, bu nedenle çalışır.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Örnekler:**

- `||example.com$badfilter`, `||example.com` alan adını devre dışı bırakır.

- `@@|example.org^$badfilter`, `@@|example.org^` alan adını devre dışı bırakır.

  :::note Not

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

**Örnekler:**

- `||example.org^$ctag=device_pc|device_phone`: `device_pc` veya `device_phone` olarak etiketlenmiş istemciler için `example.org` alan adını engelleyin.

- `||example.org^$ctag=~device_phone`: `example.org` alan adını `device_phone` olarak etiketlenenler hariç tüm istemciler için engelleyin.

The list of allowed tags:

- Cihaz türüne göre:

    - `device_audio`: ses cihazları.
    - `device_camera`: kameralar.
    - `device_gameconsole`: oyun konsolları.
    - `device_laptop`: dizüstü bilgisayarlar.
    - `device_nas`: NAS (Ağa Bağlı Depolar).
    - `device_pc`: bilgisayarlar.
    - `device_phone`: telefonlar.
    - `device_printer`: yazıcılar.
    - `device_securityalarm`: güvenlik alarmları.
    - `device_tablet`: tabletler.
    - `device_tv`: televizyonlar.
    - `device_other`: diğer cihazlar.

- İşletim sistemine göre:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: diğer işletim sistemleri.

- Kullanıcı grubuna göre:

    - `user_admin`: yöneticiler.
    - `user_regular`: normal kullanıcılar.
    - `user_child`: çocuklar.

## `/etc/hosts` biçimi söz dizimi {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Örnek:**

```none
# Bu bir yorumdur
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # bu da bir yorumdur
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Yalnızca alan adları söz dizimi {#domains-only-syntax}

A simple list of domain names, one name per line.

**Örnek:**

```none
# Bu bir yorumdur
example.com
example.org
example.net # bu da bir yorumdur
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

Neler yapabiliyor:

1. Birden fazla kaynaktan tek bir engel listesi derleyin.

2. Exclude the rules you don’t need.

3. Ortaya çıkan listeyi temizleyin: kopyalarını çıkarın, geçersiz kuralları kaldırın ve listeyi sıkıştırın.

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
