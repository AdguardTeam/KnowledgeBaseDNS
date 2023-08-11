---
title: DNS filtreleme kuralları söz dizimi
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Here we show you how to write custom DNS filtering rules for use in AdGuard products

Quick links: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

## Giriş

Kuralları daha esnek hâle getirmek için AdGuard DNS filtreleme kuralları söz dizimini kullanabilirsiniz, böylece tercihlerinize göre içeriği engelleyebilirler. AdGuard DNS filtreleme kuralları söz dizimi, AdGuard Home, AdGuard DNS, Windows/Mac/Android için AdGuard gibi farklı AdGuard ürünlerinde kullanılabilir.

Ana makine engel listeleri yazmak için üç farklı yaklaşım vardır:

* [Adblock-style syntax](#adblock-style-syntax): the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. This way blocklists are compatible with browser ad blockers.

* [`/etc/hosts` syntax](#etc-hosts-syntax): the old, tried-and-true approach that uses the same syntax that operating systems do for their hosts files.

* [Domains-only syntax](#domains-only-syntax): a simple list of domain names.

Engellenenler listesi oluşturuyorsanız, [Adblock tarzı sözdizimini](#adblock-style-syntax) kullanmanızı öneririz. Eski tarz söz dizimine göre birkaç önemli avantajı vardır:

* **Blocklists size.** Using pattern matching allows you to have a single rule instead of hundreds of `/etc/hosts` entries.

* **Compatibility.** Your blocklist will be compatible with browser ad blockers, and it will be easier to share rules with a browser filter list.

* **Extensibility.** In the past decade, the Adblock-style syntax has greatly evolved, and we see no reason not to extend it even further and offer additional features for network-level blockers.

`/etc/hosts` tarzı bir blok listesi veya birden fazla filtreleme listesi (türüne bakılmaksızın) tutuyorsanız, blok listesi derleme için bir araç sunuyoruz. Buna [Hostlist compiler][hlc] adını verdik ve [AdGuard DNS filtresi][sdn] oluşturmak için kendimiz kullanıyoruz.

## Temel Örnekler

* `||example.org^`: block access to the `example.org` domain and all its subdomains, like `www.example.org`.

* `@@||example.org^`: unblock access to the `example.org` domain and all its subdomains.

* `1.2.3.4 example.org`: (attention, old `/etc/hosts`-style syntax) in AdGuard Home, respond with `1.2.3.4` to queries for the `example.org` domain but **not** its subdomains. Özel AdGuard DNS'de, `example.org` alan adına erişimi engelleyin. `www.example.org` remains allowed.

  In AdGuard Home, using the unspecified IP address (`0.0.0.0`) or a local address (`127.0.0.1` and alike) for a host is basically the same as blocking that host.

  ```none
  # example.org için 1.2.3.4 IP adresini döndürür.
  1.2.3.4 example.org
  # example.org alan adını 0.0.0.0 ile yanıtlayarak engeller.
  0.0.0.0 example.org
  ```

* `example.org`: basit bir alan adı kuralı. `example.org` alan adını engeller ancak alt alanlarını **engellemez**. `www.example.org` remains allowed.

* `! Here goes a comment` and `# Also a comment`: comments.

* `/REGEX/`: belirtilen normal ifadeyle eşleşen alan adlarına erişimi engelleyin.

## Adblock-Style Syntax

Bu, tarayıcı reklam engelleyicileri tarafından kullanılan [geleneksel Adblock tarzı][adb] sözdiziminin bir alt kümesidir.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern`: the hostname mask. Her ana makine adı bu maskeyle eşleştirilir. The pattern can also contain special characters, which are described below.

* `@@`: the marker that is used in the exception rules. Eşleşen ana makine adları için filtrelemeyi kapatmak istiyorsanız kuralınıza bu işaretçiyle başlayın.

* `modifiers`: parameters that clarify the rule. Kuralın kapsamını sınırlayabilir veya hatta çalışma şeklini tamamen değiştirebilirler.

### Özel Karakterler

* `*`: joker karakter. It is used to represent any set of characters. Bu ayrıca boş bir dize veya herhangi bir uzunlukta bir dize olabilir.

* `||`: herhangi bir alt alan dahil olmak üzere bir ana makine adının başlangıcıyla eşleşir. For instance, `||example.org` matches `example.org` and `test.example.org` but not `testexample.org`.

* `^`: the separator character. Unlike browser ad blocking, there's nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

* `|`: a pointer to the beginning or the end of the hostname. The value depends on the character placement in the mask. For example, the rule `ample.org|` corresponds to `example.org` but not to `example.org.com`. `|example`, `example.org` alan adına karşılık gelir ancak `test.example` alan adına karşılık gelmez.

### Regular Expressions

Kural oluşturmada daha fazla esneklik istiyorsanız, varsayılan basitleştirilmiş eşleme sözdizimi yerine [normal ifade][regexp] kullanabilirsiniz. If you want to use a regular expression, the pattern has to look like this:

```none
pattern = "/" regexp "/"
```

**Örnekler:**

* `/example.*/` will block hosts matching the `example.*` regexp.

* `@@/example.*/$important` will unblock hosts matching the `example.*` regexp. Bu kuralın aynı zamanda `önemli` değiştiricisi anlamına geldiğini unutmayın.

### Yorumlar

Ünlem işareti veya hash işareti ile başlayan her satır bir yorumdur ve filtreleme motoru tarafından göz ardı edilir. Yorumlar genellikle kuralların üzerine yerleştirilir ve bir kuralın ne yaptığını açıklamak için kullanılır.

**Örnek:**

```none
! This is a comment.
# This is also a comment.
```

### Kural Değiştiriciler

Değiştiriciler ekleyerek bir kuralın davranışını değiştirebilirsiniz. Değiştiriciler, kuralın sonunda `$` karakterinden sonra yerleştirilmeli ve virgülle ayrılmalıdır.

**Örnekler:**

* ```none ||example.org^$important
   ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `important` is the modifier.

* You may want to use multiple modifiers in a rule. In that case, separate them by commas:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `client=127.0.0.1` is the [`client`](#client) modifier with its value, `127.0.0.1`, is the delimiter. And finally, `dnstype=A` is the [`dnstype`](#dnstype) modifier with its value, `A`.

**NOT:** Bir kural bu belgede listelenmeyen bir değiştirici içeriyorsa, kuralın tamamı **yok sayılmalıdır**. Bu şekilde, insanlar EasyList veya EasyPrivacy gibi değiştirilmemiş tarayıcı reklam engelleyicilerinin filtre listelerini kullanmaya çalıştıklarında yanlış pozitiflerden kaçınıyoruz.

#### `i̇stemci`

`client` değiştiricisi, bu kuralın uygulanacağı istemcilerin belirtilmesine izin verir. Bir istemciyi tanımlamanın iki ana yolu vardır:

* IP adreslerine veya CIDR öneklerine göre. Bu yol her türlü istemciler için çalışır.

* Adlarına göre. This way only works for persistent clients (in AdGuard Home) and devices (in Private AdGuard DNS), which you have manually added.

  **NOTE:** In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

Söz dizimi şöyledir:

```none
$client=value1|value2|...
```

Değerden önce bir `~` karakteri ekleyerek de istemcileri hariç tutabilirsiniz. Bu durumda kural, bu istemcinin DNS isteklerine uygulanmaz.

```none
$client=~value1
```

İstemci adları genellikle boşluklar veya diğer özel karakterler içerir, bu nedenle adı tırnak içine almalısınız. Hem tek hem de çift ASCII tırnak işaretleri desteklenir. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

**NOTE:** When excluding a client, you **must** place `~` outside the quotes.

**Örnekler:**

* `@@||*^$client=127.0.0.1`: localhost için her şeyin engelini kaldırın.

* `||example.org^$client='Frank\'s laptop'`: `example.org` alan adını yalnızca `Frank'in dizüstü bilgisayarı` adlı istemci için engelleyin. Note that quote (`'`) in the name must be escaped.

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: block `example.org` for everyone except for the client named `Mary's, John's, and Boris's laptops`. Note that comma (`,`) must be escaped as well.

* `||example.org^$client=~Mom|~Dad|Kids`: block `example.org` for `Kids`, but not for `Mom` and `Dad`. Bu örnek, bir kuralda birden çok istemcinin nasıl belirtileceğini gösterir.

* `||example.org^$client=192.168.0.0/24`: block `example.org` for all clients with IP addresses in the range from `192.168.0.0` to `192.168.0.255`.

#### `denyallow`

Alan adlarını engelleme kuralından hariç tutmak için `denyallow` değiştiricisini kullanabilirsiniz. Bir kurala birden fazla alan adı eklemek için ayırıcı olarak `|` karakterini kullanın.

Söz dizimi şöyledir:

```none
$denyallow=domain1|domain2|...
```

Bu değiştirici, engelleme kuralımız çok fazla alan adını kapsadığında gereksiz istisna kuralları oluşturmaktan kaçınmaya olanak tanır. Birkaç üst seviye alan adları dışında her şeyi engellemek isteyebilirsiniz. Standart yaklaşımı, yani aşağıdaki gibi kuralları kullanabilirsiniz:

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

* `*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyi engelleyin.

* `@@*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyin engelini kaldırın.

* `||example.org^$denyallow=sub.example.org`. `example.org` ve `*.example.org` alan adlarını engelleyin ancak `sub.example.org` alan adını engellemeyin.

#### `dnstype`

`dnstype` değiştiricisi, bu kuralın tetikleneceği DNS isteğinin veya yanıt türünün belirtilmesine izin verir.

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

* `||example.org^$dnstype=AAAA`: `example.org` alan adının IPv6 adresleri için DNS sorgularını engeller.

* `||example.org^$dnstype=~A|~CNAME`: only allow `A` and `CNAME` DNS queries for `example.org`, block out the rest.

**NOT:** **v0.108.0 sürümünden önce,** AdGuard Home yanıt kayıtlarını filtrelemek için yanıt kaydının türünün aksine istek türünü kullanırdı.  Bu, `A` ve `AAAA` isteğindeki yanıtlarda belirli `CNAME` kaydına izin verecek kurallar yazamayacağınız anlamına geldiğinden sorunlara neden oldu. Bu özellik **v0.108.0** sürümünde değiştirildi, yani şimdi:

```none
||canon.example.com^$dnstype=~CNAME
```

aşağıdaki yanıtın filtrelenmesini önlemenizi sağlar:

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

`dnsrewrite` yanıt değiştiricisi, eşleşen ana bilgisayarlar için DNS isteğine verilen yanıtın içeriğinin değiştirilmesine olanak tanır. AdGuard Home'daki bu değiştiricinin tüm kurallarda çalıştığını, ancak Özel AdGuard DNS'de ise yalnızca özel kurallarda çalıştığını unutmayın.

**`dnsrewrite` yanıt değiştiricisine sahip kurallar, AdGuard Home'daki diğer kurallardan daha yüksek önceliğe sahiptir.**

Kısa yol söz dizimi şöyledir:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Anahtar kelimelerin TÜMÜ büyük harfle yazılmalıdır (örn. `NOERROR`). Anahtar kelime yeniden yazımları diğerine göre önceliklidir ve uygun bir yanıt kodu ile boş bir yanıtla sonuçlanacaktır.

Tam söz dizimi `RCODE;RRTYPE;VALUE` şeklindedir:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

`NOERROR` yanıt koduna sahip `$dnsrewrite` değiştiricisi ayrıca boş `RRTYPE` ve `VALUE` alanlarına sahip olabilir.

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

iki `A` kaydıyla bir yanıtla sonuçlanır.

Örneklerle birlikte şu anda desteklenen RR türleri:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR`record for reverse DNS. Reverse DNS requests for `1.2.3.4` to the DNS server will result in `example.net`.

  **NOTE:** the IP MUST be in reverse order. See [RFC 1035][rfc1035].

* `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4`, `1.2.3.4` değerine sahip bir `A` kaydı ekler.

* `||example.com^$dnsrewrite=NOERROR;AAAA;.`, `abcd::1234` değerine sahip bir `AAAA` kaydı ekler.

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adds a `CNAME` record. Yukarıdaki açıklamaya bakın.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adds an `HTTPS` record. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Supported.
   ipv4hint="127.0.0.1"           // Unsupported.
   ipv4hint=127.0.0.1,127.0.0.2   // Unsupported.
   ipv4hint="127.0.0.1,127.0.0.2" // Unsupported.
   ```

  Bu gelecekte değiştirilecektir.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail`, öncelik değeri `32` ve değişim değeri `example.mail` olan bir `MX `kaydı ekler.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3`, bir `SVCB` değeri ekler. Yukarıdaki `HTTPS` örneğine bakın.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world`, `hello_world` değerine sahip bir `TXT` kaydı ekler.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;`, bir `NXDOMAIN` kodu ile yanıt verir.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responds with an empty `NOERROR` answers for all `AAAA` requests except the ones for `example.org`.

İstisna kuralları, bir veya tüm kuralları kaldırır:

* `@@||example.com^$dnsrewrite`, tüm DNS yeniden yazma kurallarını kaldırır.

* `@@||example.com^$dnsrewrite=1.2.3.4`, `1.2.3.4` değerine sahip bir `A` kaydı ekleyen DNS yeniden yazma kuralını kaldırır.

#### `önemli`

Bir kurala uygulanan `önemli` değiştirici, değiştirici olmadan diğer herhangi bir kurala göre önceliğini artırır. Hatta temel istisna kuralları üzerinden bile.

**Örnekler:**

* Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` istisna kuralına rağmen `*.example.org` alan adına gelen tüm istekleri engeller.

* Bu örnekte:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  istisna kuralı da `önemli` değiştiricisine sahiptir, bu nedenle çalışır.

#### `badfilter`

`badfilter` değiştiricisine sahip kurallar, atıfta bulundukları diğer temel kuralları devre dışı bırakır. Bu, devre dışı bırakılan kuralın metninin `badfilter` kuralının metniyle eşleşmesi gerektiği anlamına gelir ( `badfilter` değiştiricisi olmadan).

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

* `||example.org^$ctag=device_pc|device_phone`: `device_pc` veya `device_phone` olarak etiketlenmiş istemciler için `example.org` alan adını engelleyin.

* `||example.org^$ctag=~device_phone`: `example.org` alan adını `device_phone` olarak etiketlenenler hariç tüm istemciler için engelleyin.

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

Fields of the entries are separated by any number of space or tab characters. `#` karakterinden satır sonuna kadar olan metin bir yorumdur ve yok sayılır.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

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

Neler yapabiliyor:

1. Compile a single blocklist from multiple sources.

2. İhtiyacınız olmayan kuralları hariç tutun.

3. Cleanup the resulting list: deduplicate, remove invalid rules, and compress the list.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
