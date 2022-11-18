---
title: DNS filtreleme kuralları söz dizimi
sidebar_position: 2
---

## Giriş

Kuralları daha esnek hâle getirmek için AdGuard DNS filtreleme kuralları söz dizimini kullanabilirsiniz, böylece tercihlerinize göre içeriği engelleyebilirler. AdGuard DNS filtreleme kuralları söz dizimi, AdGuard Home, AdGuard DNS, Windows/Mac/Android için AdGuard gibi farklı AdGuard ürünlerinde kullanılabilir.

Ana makine engel listeleri yazmak için üç farklı yaklaşım vardır:

* [Adblock-style syntax](#adblock-style-syntax): the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. This way blocklists are compatible with browser ad blockers.

* [`/etc/hosts` syntax](#etc-hosts-syntax): the old, tried-and-true approach that uses the same syntax that operating systems do for their hosts files.

* [Domains-only syntax](#domains-only-syntax): a simple list of domain names.

If you are creating a blocklist, we recommend using the [Adblock-style syntax](#adblock-style-syntax). Eski tarz söz dizimine göre birkaç önemli avantajı vardır:

* **Blocklists size.** Using pattern matching allows you to have a single rule instead of hundreds of `/etc/hosts` entries.

* **Compatibility.** Your blocklist will be compatible with browser ad blockers, and it will be easier to share rules with a browser filter list.

* **Extensibility.** For the last decade the Adblock-style syntax has greatly evolved, and we don't see why we can't extend it even more and provide additional features for network-wide blockers.

If you're maintaining an `/etc/hosts`-style blocklist or if you maintain multiple filter lists regardless of their type, we provide a tool that can be used to compile blocklists. We called it [Hostlist compiler][hlc] and we use it ourselves to create [AdGuard DNS filter][sdn].

## Temel Örnekler

* `||example.org^`: block access to the `example.org` domain and all its subdomains, like `www.example.org`.

* `@@||example.org^`: unblock access to the `example.org` domain and all its subdomains.

* `1.2.3.4 example.org`: (attention, old `/etc/hosts`-style syntax) in AdGuard Home, respond with `1.2.3.4` to queries for the `example.org` domain but **not** its subdomains. Özel AdGuard DNS'de, `example.org` alan adına erişimi engelleyin. `www.example.org` remains allowed.

  In AdGuard Home, using the unspecified IP address (`0.0.0.0`) or a local address (`127.0.0.1` and alike) for a host is basically the same as blocking that host.

  ```none
  # Returns the IP address 1.2.3.4 for example.org.
  1.2.3.4 example.org
  # example.org alan adını 0.0.0.0 ile yanıtlayarak engeller.
  0.0.0.0 example.org
  ```

* `example.org`: basit bir alan adı kuralı. `example.org` alan adını engeller ancak alt alanlarını **engellemez**. `www.example.org` remains allowed.

* `! Here goes a comment` and `# Also a comment`: comments.

* `/REGEX/`: block access to the domains matching the specified regular expression.

## Adblock-Style Syntax

This is a subset of the [traditional Adblock-style][adb] syntax which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern`: the hostname mask. Every hostname is matched against this mask. The pattern can also contain special characters, which are described below.

* `@@`: the marker that is used in the exception rules. Eşleşen ana makine adları için filtrelemeyi kapatmak istiyorsanız kuralınıza bu işaretçiyle başlayın.

* `modifiers`: parameters that clarify the rule. Kuralın kapsamını sınırlayabilir veya hatta çalışma şeklini tamamen değiştirebilirler.

### Özel Karakterler

* `*`: the wildcard character. It is used to represent any set of characters. Bu ayrıca boş bir dize veya herhangi bir uzunlukta bir dize olabilir.

* `||`: matches the beginning of a hostname, including any subdomain. For instance, `||example.org` matches `example.org` and `test.example.org` but not `testexample.org`.

* `^`: the separator character. Unlike browser ad blocking, there's nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

* `|`: a pointer to the beginning or the end of the hostname. The value depends on the character placement in the mask. For example, the rule `ample.org|` corresponds to `example.org` but not to `example.org.com`. `|example`, `example.org` alan adına karşılık gelir ancak `test.example` alan adına karşılık gelmez.

### Regular Expressions

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. If you want to use a regular expression, the pattern has to look like this:

```none
pattern = "/" regexp "/"
```

**Örnekler:**

* `/example.*/` will block hosts matching the `example.*` regexp.

* `@@/example.*/$important` will unblock hosts matching the `example.*` regexp. Bu kuralın aynı zamanda `önemli` değiştiricisi anlamına geldiğini unutmayın.

### Yorumlar

Any line that starts with an exclamation mark or a hash sign is a comment and it will be ignored by the filtering engine. Yorumlar genellikle kuralların üzerine yerleştirilir ve bir kuralın ne yaptığını açıklamak için kullanılır.

**Örnek:**

```none
! This is a comment.
# This is also a comment.
```

### Kural Değiştiriciler

You can change the behavior of a rule by adding modifiers. Modifiers must be located at the end of the rule after the `$` character and be separated by commas.

**Örnekler:**

* ```none ||example.org^$important
   ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `important` is the modifier.

* You may want to use multiple modifiers in a rule. Separate them by commas in this case:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `client=127.0.0.1` is the [`client`](#client) modifier with its value, `127.0.0.1`, is the delimiter. And finally, `dnstype=A` is the [`dnstype`](#dnstype) modifier with its value, `A`.

**NOTE:** If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers' filter lists like EasyList or EasyPrivacy.

#### `i̇stemci`

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

* By their IP address or CIDR prefix. This way works for all kinds of clients.

* By their name. This way only works for persistent clients (in AdGuard Home) and devices (in Private AdGuard DNS), which you have manually added.

  **NOTE:** In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

Söz dizimi şöyledir:

```none
$client=value1|value2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client's DNS requests.

```none
$client=~value1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

**NOTE:** When excluding a client, you **must** keep `~` out of the quotes.

**Örnekler:**

* `@@||*^$client=127.0.0.1`: unblock everything for localhost.

* `||example.org^$client='Frank\'s laptop'`: block `example.org` for the client named `Frank's laptop` only. Note that quote (`'`) in the name must be escaped.

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: block `example.org` for everyone except for the client named `Mary's, John's, and Boris's laptops`. Note that comma (`,`) must be escaped as well.

* `||example.org^$client=~Mom|~Dad|Kids`: block `example.org` for `Kids`, but not for `Mom` and `Dad`. This example demonstrates how to specify multiple clients in one rule.

* `||example.org^$client=192.168.0.0/24`: block `example.org` for all clients with IP addresses in the range from `192.168.0.0` to `192.168.0.255`.

#### `denyallow`

Alan adlarını engelleme kuralından hariç tutmak için `denyallow` değiştiricisini kullanabilirsiniz. Bir kurala birden fazla alan adı eklemek için ayırıcı olarak `|` karakterini kullanın.

Söz dizimi şöyledir:

```none
$denyallow=domain1|domain2|...
```

Bu değiştirici, engelleme kuralımız çok fazla alan adını kapsadığında gereksiz istisna kuralları oluşturmaktan kaçınmaya olanak tanır. You may want to block everything save for a couple of TLD domains. Standart yaklaşımı, yani aşağıdaki gibi kuralları kullanabilirsiniz:

```none
! Her şeyi engelleyin.
/.*/

! Birkaç üst seviye alan adlarının engelini kaldırın.
@@||com^
@@||net^
```

Bu yaklaşımla ilgili sorun, bu şekilde bu üst seviye alan adlarında (ör. `google-analytics.com`) bulunan izleme alan adlarının engelini kaldırmanızdır. Bunu `denyallow` ile nasıl çözeceğiniz aşağıda açıklanmıştır:

```none
*$denyallow=com|net
```

**Örnekler:**

* `*$denyallow=com|net`: `*.com` ve `*.net` dışında her şeyi engelleyin.

* `@@*$denyallow=com|net`: `*.com` ve `*.net` dışında her şeyin engelini kaldırın.

* `||example.org^$denyallow=sub.example.org`. block `example.org` and `*.example.org` but don't block `sub.example.org`.

#### `dnstype`

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

Söz dizimi şöyledir:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

Türlerin adları büyük/küçük harfe duyarlı değildir, ancak gerçek DNS kaynak kaydı (RR) türleri kümesine göre doğrulanır.

İstisna kurallarını dahil etme kurallarıyla birleştirmeyin. Bu:

```none
$dnstype=~value1|value2
```

şuna eş değerdir:

```none
$dnstype=value2
```

**Örnekler:**

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

Kısa yol söz dizimi şöyledir:

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

`CNAME` özeldir çünkü AdGuard Home ana makineyi çözer ve bilgisini yanıta ekler. Yani, `example.net` alan adının IP'si `1.2.3.4` ise ve kullanıcının filtre kurallarında bu varsa:

```none
||example.com^$dnsrewrite=example.net
! Veya:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

o zaman yanıt şöyle bir şey olacaktır:

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

Ardından, `CNAME` yeniden yazılır. Bundan sonra, diğer tüm kayıtların değerleri tek bir yanıt olarak toplanır, yani bu:

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

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adds a `CNAME` record. Yukarıdaki açıklamaya bakın.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adds an `HTTPS` record. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Supported.
   ipv4hint="127.0.0.1"           // Unsupported.
   ipv4hint=127.0.0.1,127.0.0.2   // Unsupported.
   ipv4hint="127.0.0.1,127.0.0.2" // Unsupported.
   ```

  Bu gelecekte değiştirilecektir.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` adds an `MX` record with precedence value `32` and exchange value `example.mail`.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` adds a `SVCB` value. Yukarıdaki `HTTPS` örneğine bakın.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` adds a `TXT` record with the value `hello_world`.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;` responds with an `NXDOMAIN` code.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responds with an empty `NOERROR` answers for all `AAAA` requests except the ones for `example.org`.

İstisna kuralları, bir veya tüm kuralları kaldırır:

* `@@||example.com^$dnsrewrite`, tüm DNS yeniden yazma kurallarını kaldırır.

* `@@||example.com^$dnsrewrite=1.2.3.4` removes the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

#### `önemli`

Bir kurala uygulanan `önemli` değiştirici, değiştirici olmadan diğer herhangi bir kurala göre önceliğini artırır. Even over basic exception rules.

**Örnekler:**

* Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` will block all requests to `*.example.org` despite the exception rule.

* Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  istisna kuralı da `önemli` değiştiricisine sahiptir, bu yüzden işe çalışacaktır.

#### `badfilter`

`badfilter` değiştiricisine sahip kurallar, atıfta bulundukları diğer temel kuralları devre dışı bırakır. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Örnekler:**

* `||example.com$badfilter`, `||example.com` alan adını devre dışı bırakır.

* `@@|example.org^$badfilter`, `@@|example.org^` alan adını devre dışı bırakır.

  **NOTE:** The `badfilter` modifier currently doesn't work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` orijinal `127.0.0.1 example.org` kuralını devre dışı **bırakmaz**.

#### `ctag`

**`ctag` değiştiricisi yalnızca AdGuard Home'da kullanılabilir.**

Alan adlarını yalnızca belirli DNS istemci etiketleri türleri için engellemeye olanak tanır. AdGuard Home Kullanıcı Arayüzünde istemcilere etiket atayabilirsiniz. Gelecekte, her istemcinin davranışını analiz ederek etiketleri otomatik olarak atamayı planlıyoruz.

Söz dizimi şöyledir:

```none
$ctag=value1|value2|...
```

İstemcinin etiketlerinden biri `ctag` değerleriyle eşleşiyorsa, bu kural istemci için geçerlidir. İstisna söz dizimi şöyledir:

```none
$ctag=~value1|~value2|...
```

İstemcinin etiketlerinden biri istisna `ctag` değerleriyle eşleşiyorsa, bu kural istemci için geçerli değildir.

**Örnekler:**

* `||example.org^$ctag=device_pc|device_phone`: block `example.org` for clients tagged as `device_pc` or `device_phone`.

* `||example.org^$ctag=~device_phone`: block `example.org` for all clients except those tagged as `device_phone`.

İzin verilen etiketlerin listesi:

* Cihaz türüne göre:

  * `device_audio`: ses cihazları.
  * `device_camera`: kameralar.
  * `device_gameconsole`: oyun konsolları.
  * `device_laptop`: dizüstü bilgisayarlar.
  * `device_nas`: NAS (Ağa Bağlı Depolar).
  * `device_pc`: bilgisayarlar.
  * `device_phone`: telefonlar.
  * `device_printer`: yazıcılar.
  * `device_securityalarm`: güvenlik alarmları.
  * `device_tablet`: tabletler.
  * `device_tv`: televizyonlar.
  * `device_other`: diğer cihazlar.

* İşletim sistemine göre:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: diğer işletim sistemleri.

* Kullanıcı grubuna göre:

  * `user_admin`: yöneticiler.
  * `user_regular`: normal kullanıcılar.
  * `user_child`: çocuklar.


## `/etc/hosts`-Style Syntax {#etc-hosts-syntax}

Her ana makine için aşağıdaki bilgileri içeren tek bir satır bulunmalıdır:

```none
IP_address canonical_hostname [aliases...]
```

Girişlerin alanları herhangi bir sayıda boşluk veya sekme karakteri ile ayrılır. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). Alfabetik bir karakterle başlamalı ve alfasayısal bir karakterle bitmelidirler. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Örnek:**

```none
# This is a comment
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # this is also a comment
```

AdGuard Home'da IP adresleri, bu alan adları için DNS sorgularına yanıt vermek için kullanılır. Özel AdGuard DNS'de bu adresler basitçe engellenir.


## Yalnızca Alan Adları Söz Dizimi

Her satırda bir ad olacak şekilde basit bir alan adları listesi.

**Örnek:**

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

2. İhtiyacınız olmayan kuralları hariç tutun.

3. Cleanup the resulting list: deduplicate, remove invalid rules, and compress the list.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
