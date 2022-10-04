---
title: Syntaxe pravidel DNS filtrování
sidebar_position: 2
---

## Úvod

Syntaxi pravidel filtrování AdGuard DNS můžete použít k tomu, aby byla pravidla flexibilnější a mohla blokovat obsah podle vašich preferencí. Syntaxi pravidel filtrování AdGuard DNS lze použít v různých produktech AdGuard, například AdGuard Home, AdGuard DNS, AdGuard pro Windows/Mac/Android.

Existují tři různé přístupy k psaní hostitelských seznamů zakázaných:

* [Syntaxe ve stylu Adblock](#adblock-style-syntax): moderní přístup k psaní pravidel filtrování založený na použití podmnožiny syntaxe pravidel ve stylu Adblock. Tímto způsobem jsou seznamy blokování kompatibilní s blokátory reklam v prohlížečích.

* [`/etc/hosts` syntaxe](#etc-hosts-syntax): starý a osvědčený přístup, který používá stejnou syntaxi, jakou používají operační systémy pro své funkce hostitelských souborů.

* [Syntaxe pouze pro domény](#domains-only-syntax): jednoduchý seznam doménových názvů.

Pokud vytváříte seznam zakázaných, doporučujeme použít [syntaxi ve stylu Adblock](#adblock-style-syntax). Oproti staré syntaxi má několik důležitých výhod:

* **Velikost seznamu zakázaných.** Použití porovnávání vzorů umožňuje mít jediné pravidlo namísto stovek záznamů `/etc/hosts`.

* **Kompatibilita.** Váš seznam zakázaných bude kompatibilní s blokátory reklam v prohlížeči a bude snazší sdílet pravidla se seznamem filtrů prohlížeče.

* **Rozšiřitelnost.** Za posledních deset let se syntaxe ve stylu Adblock značně vyvinula a nevidíme důvod, proč bychom ji nemohli ještě více rozšířit a poskytnout další funkce pro blokátory napříč celou sítí.

Pokud udržujete seznam zakázaných ve stylu `/etc/hosts` nebo pokud udržujete více seznamů filtrů bez ohledu na jejich typ, poskytujeme nástroj, který lze použít k sestavení seznamů zakázaných. Nazýváme jej [Překladač seznamu hostitelů][hlc] a sami jej použijeme k vytvoření [filtru AdGuard DNS][sdn].

## Základní příklady

* `||example.org^`: blokuje přístup k doméně `example.org` a jejím subdoménám jako `www.example.org`.

* `@@||example.org^`: odblokuje přístup k doméně `example.org` a jejím subdoménám.

* `1.2.3.4 example.org`: (pozor, starý styl syntaxe `/etc/hosts`) v AdGuard Home, odezva s `1.2.3.4` do dotazu domény `example.org`, ale **ne** jejích subdomén. V soukromém AdGuard DNS blokuje přístup k `example.org`. Doména `www.example.org` zůstává povolena.

  V AdGuard Home je použití nespecifikované IP adresy (`0.0.0.0`) nebo místní adresy (`127.0.0.1` a pod.) pro hostitele v podstatě stejné jako zablokování tohoto hostitele.

  ```none
  # Vrátí IP adresu 1.2.3.4 pro example.org.
  1.2.3.4 example.org
  # Blokuje doménu example.com odpovědí 0.0.0.0.
  0.0.0.0 example.com
  ```

* `example.org`: jednoduché pravidlo domény. Blokuje doménu `example.org`, ale **ne** její subdomény. Doména `www.example.org` zůstává povolena.

* `! Zde je komentář` a `# Také komentář`: komentáře.

* `/REGEX/`: blokuje přístup doménám, které vyhovují regulárnímu výrazu.

## Syntaxe ve stylu Adblock

Toto je podmnožina [tradiční syntaxe ve stylu Adblock][adb], kterou používají blokátory reklam v prohlížečích.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern`: maska názvu hostitele. Každý název hostitele se shoduje s touto maskou. Vzor může obsahovat také speciální znaky, které jsou popsány níže.

* `@@`: značka, která se používá v pravidlech pro výjimky. Pokud chcete vypnout filtrování odpovídajících názvů hostitele, začněte pravidlo touto značkou.

* `modifiers`: parametry, které toto pravidlo upřesňují. Mohou omezit oblast působnosti pravidla nebo dokonce zcela změnit jeho fungování.

### Speciální znaky

* `*`: zástupný znak. Používá se k reprezentaci libovolné sady znaků. Může to být také prázdný řetězec nebo řetězec libovolné délky.

* `||`: odpovídá začátku názvu hostitele včetně subdomény. Např. `||example.org` odpovídá `example.org` a `test.example.org`, ale ne `testexample.org`.

* `^`: oddělovací znak. Na rozdíl od blokování reklam v prohlížeči není v názvu hostitele nic odděleno, takže jediný účel tohoto znaku je označit konec názvu hostitele.

* `|`: ukazatel na začátku nebo konci názvu hostitele. Hodnota závisí na umístění znaku v masce. Např. pravidlo `ample.org|` odpovídá `example.org`, ale ne `example.org.com`. `|example` odpovídá `example.org`, ale ne `test.example`.

### Regulární výrazy

Pokud chcete ještě větší flexibilitu při vytváření pravidel, můžete použít [regulární výrazy][regexp] namísto výchozí zjednodušené syntaxe porovnávání. Pokud chcete použít regulární výraz, musí vzor vypadat takto:

```none
pattern = "/" regexp "/"
```

**Příklady:**

* `/example.*/` zablokuje hostitele odpovídající `example.*` regexp.

* `@@/example.*/$important` odblokuje hostitele odpivídající `example.*` regexp. Všimněte si, že toto pravidlo také zahrnuje modifikátor `important`.

### Komentáře

Každý řádek, který začíná vykřičníkem nebo znakem hash, je komentář a filtrovací nástroj jej bude ignorovat. Komentáře se obvykle umísťují nad pravidla a slouží k popisu toho, co pravidlo dělá.

**Příklad:**

```none
! Toto je komentář.
# Toto je také komentář.
```

### Modifikátory pravidel

Chování pravidla můžete změnit přidáním modifikátorů. Modifikátory musí být umístěny na konci pravidla za znakem `$` a musí být odděleny čárkami.

**Příklady:**

* ```none ||example.org^$important
   ```

  `||example.org^` je odpovídající vzor. `$` je oddělovač, který signalizuje, že zbytek pravidla jsou modifikátory. `important` je modifikátor.

* V pravidle můžete použít více modifikátorů. V tomto případě je oddělujte čárkami:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` je odpovídající vzor. `$` je oddělovač, který signalizuje, že zbytek pravidla jsou modifikátory. `client=127.0.0.1` je modifikátor [`client`](#client) s jeho hodnotou, `127.0.0.1`, je oddělovač. A na konec `dnstype=A` je [`dnstype`](#dnstype) s jeho hodnotou `A`.

**POZNÁMKA:** pokud pravidlo obsahuje modifikátor, který není uveden v tomto dokumentu, musí být celé pravidlo **ignorováno**. Tímto způsobem se vyhneme falešně pozitivním výsledkům, když se lidé pokoušejí používat seznamy filtrů nemodifikovaných blokátorů reklam v prohlížečích, jako je EasyList nebo EasyPrivacy.

#### `client`

Modifikátor `client` umožňuje specifikovat klienty, na které se toto pravidlo vztahuje. Existují dva hlavní způsoby identifikace klienta:

* Podle jejich IP adresy nebo prefixu CIDR. Tento způsob funguje pro všechny typy klientů.

* Podle jejich názvu. Tento způsob funguje pouze pro trvalé klienty (v AdGuard Home) a zařízení (v soukromý AdGuard DNS), které jste přidali ručně.

  **POZNÁMKA:** v AdGuard Home nejsou v současné době podporovány identifikátory klientů, ale pouze názvy. Pokud jste přidali klienta s názvem “My Client“ a identifikátor klienta `my-client`, zapište modifikátor jako `$client= 'My Client'` na rozdíl od `$client= my-client`.

Syntaxe je:

```none
$client=value1|value2|...
```

Klienty můžete také vyloučit přidáním znaku `~` před hodnotu. V tomto případě se pravidlo na DNS požadavky tohoto klienta neuplatní.

```none
$client=~value1
```

Názvy klientů obvykle obsahují mezery nebo jiné speciální znaky, proto byste měli název uzavřít do uvozovek. Podporovány jsou jednoduché i dvojité uvozovky ASCII. Zpětné lomítko (`\`) použijte k vynechání uvozovek (`"` a `'`), čárek (`,`) a svislých čar (`|`).

**POZNÁMKA:** když vyloučíte klienta, **musíte** zachovat znak `~` mimo uvozovky.

**Příklady:**

* `@@||*^$client=127.0.0.1`: odblokuje vše pro místního hostitele.

* `||example.org^$client='Frank\'s laptop'`: zablokuje doménu `example.org` pouze pro klienta s názvem `Frank's laptop`. Všimněte si, že uvozovka (`'`) v názvu musí být vynechána ze závorek.

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: zablokuje doménu `example.org` pro všechny kromě klienta s názvem `Mary's, John's, and Boris's laptops`. Všimněte si, že čárka (`,`) v názvu musí být též vynechána ze závorek.

* `||example.org^$client=~Mom|~Dad|Kids`: zablokuje doménu `example.org` pro `Kids`, ale ne pro `Mom` and `Dad`. Tento příklad ukazuje, jak zadat více klientů v jednom pravidle.

* `||example.org^$client=192.168.0.0/24`: zablokuje doménu `example.org` pro všechny klienty s IP adresami v rozsahu od `192.168.0.0` do `192.168.0.255`.

#### `denyallow`

Pomocí modifikátoru `denyallow` můžete domény z pravidla blokování vyloučit. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

Syntaxe je:

```none
$denyallow=domain1|domain2|...
```

Tento modifikátor umožňuje vyhnout se vytváření zbytečných pravidel výjimek, pokud naše blokovací pravidlo pokrývá příliš mnoho domén. Možná budete chtít zablokovat vše kromě několika domén TLD. Můžete použít standardní přístup, tj. tato pravidla:

```none
! Block everything.
/.*/

! Unblock a couple of TLDs.
@@||com^
@@||net^
```

Problém tohoto přístupu spočívá v tom, že tímto způsobem odblokujete také sledovací domény, které se nacházejí na těchto TLD (tj. `google-analytics.com`). Zde je návod, jak to vyřešit pomocí `denyallow`:

```none
*$denyallow=com|net
```

**Příklady:**

* `*$denyallow=com|net`: zablokovat vše kromě `*.com` a `*.net`.

* `@@*$denyallow=com|net`: odblokovat vše kromě `*.com` a `*.net`.

* `||example.org^$denyallow=sub.example.org`. zablokuje `example.org` a `*.example.org`, ale nezablokuje `sub.example.org`.

#### `dnstype`

Modifikátor `dnstype` umožňuje určit typ požadavku nebo DNS odpovědi, na základě kterého bude toto pravidlo spuštěno.

Syntaxe je:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

V názvech typů se nerozlišují velká a malá písmena, ale ověřují se podle sady skutečných typů záznamů o prostředcích DNS (RR).

Nekombinujte pravidla pro výjimky s pravidly pro zařazení. Tohle:

```none
$dnstype=~value1|value2
```

odpovídá tomuto:

```none
$dnstype=value2
```

**Příklady:**

* `||example.org^$dnstype=AAAA`: blokuje DNS dotazy pro adresy IPv6 domény `example.org`.

* `||example.org^$dnstype=~A|~CNAME`: povoluje pouze `A` a `CNAME` DNS dotazů pro `example.org` zablokuje zbytek.

**POZNÁMKA:** před verzí **v0.108.0** by AdGuard Home k filtrování záznamů odpovědi použil typ požadavku, nikoli typ samotného záznamu odpovědi.  To způsobovalo problémy, protože to znamenalo, že nebylo možné napsat pravidla, která by v odpovědích na požadavky `A` a `AAAA` povolila určité záznamy `CNAME`. Ve verzi **v0.108.0** bylo toto chování změněno, takže nyní je to:

```none
||canon.example.com^$dnstype=~CNAME
```

umožňuje vyhnout se filtrování následující odpovědi:

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

Modifikátor odpovědi `dnsrewrite` umožňuje nahradit obsah odpovědi na DNS požadavek pro odpovídající hostitele. Všimněte si, že tento modifikátor v AdGuard Home funguje ve všech pravidlech, ale v soukromém AdGuard DNS pouze ve vlastních pravidlech.

**Pravidla s modifikátorem odezvy `dnsrewrite` mají vyšší prioritu než ostatní pravidla v AdGuard Home.**

Zkrácená syntaxe je:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Klíčová slova MUSÍ být napsána velkými písmeny (např. `NOERROR`). Přepisování klíčových slov má přednost před ostatním a výsledkem bude prázdná odezva s příslušným kódem odezvy.

Úplná syntaxe má tvar `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

Modifikátor `$dnsrewrite` s kódem odezvy `NOERROR` může mít také prázdná pole `RRTYPE` a `VALUE`.

`CNAME` je speciální, protože AdGuard Home hostitele přeloží a přidá jeho informace do odezvy. To znamená, že pokud doména `example.net` má IP adresu `1.2.3.4` a uživatel ji má ve svých pravidlech filtru:

```none
||example.com^$dnsrewrite=example.net
! Nebo:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

pak bude odezva vypadat asi takto:

```sh
$ nslookup example.com my.adguard.local
```

```none
Server:     my.adguard.local
Adresa:    127.0.0.1#53

Neautorizovaná odpověď:
example.com canonical name = example.net.
Název: example.net
Adresa: 1.2.3.4
```

Následuje přepis `CNAME`. Poté se hodnoty všech ostatních záznamů sečtou jako jedna odezva, takže:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

bude výsledkem odezva se dvěma záznamy `A`.

Aktuálně podporované typy RR s příklady:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` přidá `PTR` záznam pro reverzní DNS. Výsledkem reverzních DNS požadavků na `1.2.3.4` na server DNS bude `example.net`.

  **POZNÁMKA:** IP ADRESA MUSÍ být v opačném pořadí. Viz. [RFC 1035][rfc1035].

* `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` přidá odezvu `A` s hodnotou `1.2.3.4`.

* `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` přidá záznam `AAAA` s hodnotou `abcd::1234`.

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` přidá záznam `CNAME`. Viz vysvětlení výše.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` přidá záznam `HTTPS`. Podporována je pouze podmnožina hodnot parametrů: hodnoty musí na sebe `navazovat` a tam, kde se `očekává` `seznam hodnot`, je v současné době podporována pouze jedna hodnota:

   ```none
   ipv4hint=127.0.0.1             // podporováno.
   ipv4hint="127.0.0.1"           // nepodporováno.
   ipv4hint=127.0.0.1,127.0.0.2   // nepodporováno.
   ipv4hint="127.0.0.1,127.0.0.2" // nepodporováno.
   ```

  To bude v budoucnu změněno.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` přidá záznam `MX` s přednostní hodnotou `32` a změní hodnotu `example.mail`.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` přidá hodnotu `SVCB`. Viz výše uvedený příklad `HTTPS`.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` přidá záznam `TXT` s hodnotou `hello_world`.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` přidá záznam `SRV` s přednostní hodnotou `10`, hodnota `60`, port `8080`, a cíl hodnoty `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;` odpoví s kódem `NXDOMAIN`.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` odpoví s prázdnou odezvou `NOERROR` pro všechny požadavky `AAAA` mimo jeden pro `example.org`.

Pravidla výjimek odstraňují jedno nebo všechna pravidla:

* `@@||example.com^$dnsrewrite` odstraní všechna pravidla pro přepis DNS.

* `@@||example.com^$dnsrewrite=1.2.3.4` odstraní pravidlo pro přepis DNS, které přidá záznam `A` s hodnotou `1.2.3.4`.

#### `important`

Modifikátor `important` použitý na pravidlo zvyšuje jeho prioritu před jakýmkoli jiným pravidlem bez modifikátoru. Dokonce i přes základní pravidla výjimek.

**Příklady:**

* V tomto příkladu:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` zablokuje všechny požadavky na doménu `*.example.org` navzdory pravidlu výjimky.

* V tomto příkladu:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  pravidlo výjimky má také modifikátor `important`, takže bude fungovat.

#### `badfilter`

Pravidla s modifikátorem `badfilter` vypnou ostatní základní pravidla, na která se vztahují. To znamená, že text vypnutého pravidla by měl odpovídat textu pravidla `badfilter` (bez modifikátoru `badfilter`).

**Příklady:**

* `||example.com$badfilter` zakáže `||example.com`.

* `@@||example.org^$badfilter` zakáže `@@||example.org^`.

  **POZNÁMKA:** modifikátor `badfilter` v současné době nefunguje s pravidly ve stylu `/etc/hosts`. `127.0.0.1 example.org$badfilter` nezakáže **** původní pravidlo `127.0.0.1 example.org`.

#### `ctag`

**Modifikátor `ctag` lze použít pouze v AdGuard Home.**

Umožňuje blokovat domény pouze pro určité typy značek klientů DNS. Značky můžete klientům přiřadit v uživatelském rozhraní AdGuard Home. V budoucnu plánujeme automatické přiřazování značek na základě analýzy chování jednotlivých klientů.

Syntaxe je:

```none
$ctag=value1|value2|...
```

Pokud jedna ze značek klienta odpovídá hodnotám `ctag`, toto pravidlo se na klienta vztahuje. Syntaxe pro výjimku je:

```none
$ctag=~value1|~value2|...
```

Pokud jedna ze značek klienta odpovídá hodnotám vylučujícím `ctag`, toto pravidlo se na klienta nevztahuje.

**Příklady:**

* `||example.org^$ctag=device_pc|device_phone`: zablokuje `example.org` pro klienty označené jako `device_pc` nebo `device_phone`.

* `||example.org^$ctag=~device_phone`: zablokuje `example.org` pro všechny klienty kromě těch, kteří jsou označeni jako `device_phone`.

Seznam povolených značek:

* Podle typu zařízení:

  * `device_audio`: audio zařízení.
  * `device_camera`: fotoaparáty.
  * `device_gameconsole`: herní konzole.
  * `device_laptop`: notebooky.
  * `device_nas`: NAS servery (Síťová úložiště).
  * `device_pc`: stolní počítače.
  * `device_phone`: telefony.
  * `device_printer`: tiskárny.
  * `device_securityalarm`: bezpečnostní alarmy.
  * `device_tablet`: tablety.
  * `device_tv`: televizory.
  * `device_other`: ostatní zařízení.

* Podle operačního systému:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: ostatní operační systémy.

* Podle skupiny uživatelů:

  * `user_admin`: administrátoři.
  * `user_regular`: běžní uživatelé.
  * `user_child`: děti.


## Syntaxe stylu `/etc/hosts` {#etc-hosts-syntax}

Pro každého hostitele by měl být uveden jeden řádek s následujícími informacemi:

```none
IP_address canonical_hostname [aliases...]
```

Pole záznamů jsou oddělena libovolným počtem znaků mezery nebo tabulátoru. Text od znaku `#` do konce řádku je komentář a je ignorován.

Hostitelské názvy mohou obsahovat pouze alfanumerické znaky, pomlčky a znaménka (`-`) a tečky (`.`). Musí začínat abecedním znakem a končit alfanumerickým znakem. Volitelné aliasy umožňují změny názvů, alternativní hláskování, kratší hostitelské názvy nebo obecné hostitelské názvy (například `localhost`).

**Příklad:**

```none
# Toto je komentář
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # toto je taky komentář
```

V AdGuard Home se IP adresy používají k odpovědi na DNS dotazy pro tyto domény. V soukromém AdGuard DNS jsou tyto adresy jednoduše blokovány.


## Syntaxe pouze pro domény

Jednoduchý seznam názvů domén, jeden název na řádek.

**Příklad:**

```none
# Toto je komentář
example.com
example.org
example.net # toto je také komentář
```

Pokud řetězec není platnou doménou (např. `*.example.org`), bude jej AdGuard Home považovat za pravidlo [ve stylu AdBlock](#adblock-style-syntax).

## Překladač hostitelských seznamů

Pokud spravujete seznam zakázaných a používáte v něm různé zdroje, může se vám hodit kompilátor [Hostitelských seznamů][hlc]. Jedná se o jednoduchý nástroj, který usnadňuje sestavení seznamu blokovaných hostitelů kompatibilního s AdGuard Home, soukromým AdGuard DNS nebo jiným produktem AdGuard s DNS filtrováním.

Co dokáže:

1. Sestavit jeden seznam blokování z více zdrojů.

2. Vyloučit pravidla, která nepotřebujete.

3. Vyčistit výsledný seznamu: deduplikace, odstranění neplatných pravidel a komprese seznamu.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
