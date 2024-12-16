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

`/etc/hosts` tarzı bir blok listesi veya birden fazla filtreleme listesi (türüne bakılmaksızın) tutuyorsanız, blok listesi derleme için bir araç sunuyoruz. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Temel örnekler {#basic-examples}

- `||example.org^`: `example.org` alan adına ve `www.example.org` gibi tüm alt alan adlarına erişimi engeller.

- `@@|example.org^`: `example.org` alan adına ve tüm alt alan adlarına erişim engelini kaldırın.

- `1.2.3.4 example.org`: (attention, old `/etc/hosts`-style syntax) in AdGuard Home, respond with `1.2.3.4` to queries for the `example.org` domain but **not** its subdomains. Özel AdGuard DNS'de, `example.org` alan adına erişimi engelleyin. `www.example.org` remains allowed.

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

- `^`: ayırıcı karakter. Tarayıcı reklam engellemesinden farklı olarak, ana makine adında ayrılacak hiçbir şey yoktur, dolayısıyla bu karakterin tek amacı ana makine adının sonunu işaretlemektir.

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

  `|example.org^` eşleşen kalıptır. `$`, kuralın geri kalanının değiştirici olduğunu belirten sınırlayıcıdır. `client=127.0.0.1`, [`client`][] değiştiricisidir ve değeri `127.0.0.1`'dir. `,` değiştiriciler arasındaki sınırlayıcıdır. Ve son olarak, `dnstype=A`, değeri `A` olan [`dnstype`][] değiştiricisidir.

**NOT:** Bir kural bu belgede listelenmeyen bir değiştirici içeriyorsa, kuralın tamamı **yok sayılmalıdır**. Bu şekilde, insanlar EasyList veya EasyPrivacy gibi değiştirilmemiş tarayıcı reklam engelleyicilerinin filtre listelerini kullanmaya çalıştıklarında yanlış pozitiflerden kaçınıyoruz.

#### `i̇stemci` {#client-modifier}

`client` değiştiricisi, bu kuralın uygulanacağı istemcilerin belirtilmesine izin verir. Bir istemciyi tanımlamanın iki ana yolu vardır:

- IP adreslerine veya CIDR öneklerine göre. Bu yol her türlü istemciler için çalışır.

- Adlarına göre. Bu yol, yalnızca elle eklediğiniz kalıcı istemciler (AdGuard Home'da) ve cihazlar (Özel AdGuard DNS'de) için çalışır.

  **NOT:** AdGuard Home'da şu anda ClientID'ler desteklenmemektedir, yalnızca adlar desteklenmektedir. Eğer ”İstemcim” adında ve ClientID `my-client` olan bir istemci eklediyseniz, değiştiricinizi `$client=my-client` yerine `$client='İstemcim'` olarak yazın.

Söz dizimi şöyledir:

```none
$client=value1|value2|...
```

Değerden önce bir `~` karakteri ekleyerek de istemcileri hariç tutabilirsiniz. Bu durumda kural, bu istemcinin DNS isteklerine uygulanmaz.

```none
$client=~value1
```

İstemci adları genellikle boşluklar veya diğer özel karakterler içerir, bu nedenle adı tırnak içine almalısınız. Hem tek hem de çift ASCII tırnak işaretleri desteklenir. Tırnak işaretlerinden (`"` ve `'`), virgüllerden (`,`) ve dikey çizgilerden (`|`) kaçınmak için ters eğik çizgiyi (`\`) kullanın.

**NOT:** Bir istemciyi hariç tutarken, tırnakların dışına `~` işareti **koymalısınız**.

**Örnekler:**

- `@@||*^$client=127.0.0.1`: localhost için her şeyin engelini kaldırın.

- `||example.org^$client='Frank\'s laptop'`: `example.org` alan adını yalnızca `Frank'in dizüstü bilgisayarı` adlı istemci için engelleyin. Addaki tırnak işaretinin (`'`) kaçınılması gerektiğini unutmayın.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: `Mary, John ve Boris dizüstü bilgisayarları` adlı istemci dışındaki herkes için `example.org` alan adını engelleyin. Virgülden (`,`) de kaçınılması gerektiğini unutmayın.

- `||example.org^$client=~Mom|~Dad|Kids`: `example.org` alan adını `Kids` için engelleyin ama `Mom` ve `Dad` için engellemeyin. Bu örnek, bir kuralda birden çok istemcinin nasıl belirtileceğini gösterir.

- `||example.org^$client=192.168.0.0/24`: IP adresleri `192.168.0.0` ila `192.168.0.255` aralığında olan tüm istemciler için `example.org` alan adını engelleyin.

#### `denyallow` {#denyallow-modifier}

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

- `*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyi engelleyin.

- `@@*$denyallow=com|net`: `*.com` ve `*.net` dışındaki her şeyin engelini kaldırın.

- `||example.org^$denyallow=sub.example.org`. `example.org` ve `*.example.org` alan adlarını engelleyin ancak `sub.example.org` alan adını engellemeyin.

#### `dnstype` {#dnstype-modifier}

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

- `||example.org^$dnstype=AAAA`: `example.org` alan adının IPv6 adresleri için DNS sorgularını engeller.

- `||example.org^$dnstype=~A|~CNAME`: `example.org` için yalnızca `A` ve `CNAME` DNS sorgularına izin verin ve gerisini engelleyin.

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

#### `dnsrewrite` {#dnsrewrite-modifier}

`dnsrewrite` yanıt değiştiricisi, eşleşen ana bilgisayarlar için DNS isteğine verilen yanıtın içeriğinin değiştirilmesine olanak tanır. AdGuard Home'daki bu değiştiricinin tüm kurallarda çalıştığını, ancak Özel AdGuard DNS'de ise yalnızca özel kurallarda çalıştığını unutmayın.

**`dnsrewrite` yanıt değiştiricisine sahip kurallar, AdGuard Home'daki diğer kurallardan daha yüksek önceliğe sahiptir.**

`dnsrewrite` kuralına uyan bir ana makineye yönelik tüm isteklere verilen yanıtlar değiştirilecektir. Değiştirme yanıtının yanıt bölümü yalnızca isteğin sorgu türüyle eşleşen RR'leri ve muhtemelen CNAME RR'leri içerir. Bu, ana makinenin `dnsrewrite` kuralıyla eşleşmesi durumunda bazı isteklere verilen yanıtların boş (`NODATA`) olabileceği anlamına gelir.

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

Ardından, `CNAME` yeniden yazılır. Bundan sonra, diğer tüm kayıtların değerleri tek bir yanıt olarak toplanır, yani bu:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

iki `A` kaydıyla bir yanıtla sonuçlanır.

Örneklerle birlikte şu anda desteklenen RR türleri:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.`, ters DNS için bir `PTR` kaydı ekler. DNS sunucusuna `1.2.3.4` için yapılan ters DNS istekleri `example.net` alan adı olarak sonuçlanır.

  **NOT:** IP ters sırada OLMALIDIR. Bkz. [RFC 1035][rfc1035].

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

İstisna kuralları bir veya tüm kuralların engelini kaldırır:

- `@@||example.com^$dnsrewrite` tüm DNS yeniden yazma kurallarının engelini kaldırır.

- `@@|example.com^$dnsrewrite=1.2.3.4`, `1.2.3.4` değerine sahip bir `A` kaydı ekleyen DNS yeniden yazma kuralının engelini kaldırır.

#### `important` {#important-modifier}

Bir kurala uygulanan `önemli` değiştirici, değiştirici olmadan diğer herhangi bir kurala göre önceliğini artırır. Hatta temel istisna kuralları üzerinden bile.

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

`badfilter` değiştiricisine sahip kurallar, atıfta bulundukları diğer temel kuralları devre dışı bırakır. Bu, devre dışı bırakılan kuralın metninin `badfilter` kuralının metniyle eşleşmesi gerektiği anlamına gelir ( `badfilter` değiştiricisi olmadan).

**Örnekler:**

- `||example.com$badfilter`, `||example.com` alan adını devre dışı bırakır.

- `@@|example.org^$badfilter`, `@@|example.org^` alan adını devre dışı bırakır.

  **NOT:** `badfilter` değiştiricisi şu anda `/etc/hosts` tarzı kurallarla çalışmıyor. `127.0.0.1 example.org$badfilter` orijinal `127.0.0.1 example.org` kuralını devre dışı **bırakmaz**.

#### `ctag` {#ctag-modifier}

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

- `||example.org^$ctag=device_pc|device_phone`: `device_pc` veya `device_phone` olarak etiketlenmiş istemciler için `example.org` alan adını engelleyin.

- `||example.org^$ctag=~device_phone`: `example.org` alan adını `device_phone` olarak etiketlenenler hariç tüm istemciler için engelleyin.

İzin verilen etiketlerin listesi:

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

## `/etc/hosts`-style syntax {#etc-hosts-syntax}

Her ana makine için aşağıdaki bilgileri içeren tek bir satır bulunmalıdır:

```none
IP_address canonical_hostname [aliases...]
```

Girdilerin alanları herhangi bir sayıda boşluk veya sekme karakteri ile ayrılır. `#` karakterinden satır sonuna kadar olan metin bir yorumdur ve yok sayılır.

Ana makine adları yalnızca alfanümerik karakterler, tire-eksi işaretleri (`-`) ve noktalar (`,`) içerebilir. Alfabetik bir karakterle başlamalı ve alfasayısal bir karakterle bitmelidirler. İsteğe bağlı takma adlar, ad değişiklikleri, alternatif yazımlar, daha kısa ana makine adları veya genel ana makine adları (örneğin, `localhost`) sağlar.

**Örnek:**

```none
# Bu bir yorumdur
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # bu da bir yorumdur
```

AdGuard Home'da IP adresleri, bu alan adları için DNS sorgularına yanıt vermek için kullanılır. Özel AdGuard DNS'de bu adresler basitçe engellenir.

## Yalnızca alan adları söz dizimi {#domains-only-syntax}

Her satırda bir ad olacak şekilde basit bir alan adları listesi.

**Örnek:**

```none
# Bu bir yorumdur
example.com
example.org
example.net # bu da bir yorumdur
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. AdGuard Home, Özel AdGuard DNS veya DNS filtreli diğer herhangi bir AdGuard ürünü ile uyumlu bir ana makine engel listesi derlemeyi kolaylaştıran basit bir araçtır.

Neler yapabiliyor:

1. Birden fazla kaynaktan tek bir engel listesi derleyin.

2. İhtiyacınız olmayan kuralları hariç tutun.

3. Ortaya çıkan listeyi temizleyin: kopyalarını çıkarın, geçersiz kuralları kaldırın ve listeyi sıkıştırın.

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
