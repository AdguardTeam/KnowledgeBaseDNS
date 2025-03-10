---
title: Syntaxe pravidel DNS filtrování
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Zde vám ukážeme, jak psát vlastní pravidla DNS filtrování pro použití v produktech AdGuard

Rychlé odkazy: [Stáhnout Blokátor reklam AdGuard](https://agrd.io/download-kb-adblock), [Získat AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Vyzkoušet AdGuard DNS](https://agrd.io/download-dns)

:::

## Úvod {#introduction}

Syntaxi pravidel filtrování AdGuard DNS můžete použít k tomu, aby byla pravidla flexibilnější a mohla blokovat obsah podle vašich preferencí. Syntaxi pravidel filtrování AdGuard DNS lze použít v různých produktech AdGuard, například AdGuard Home, AdGuard DNS, AdGuard pro Windows/Mac/Android.

Existují tři různé přístupy k psaní hostitelských seznamů zakázaných:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Tímto způsobem jsou seznamy blokování kompatibilní s blokátory reklam v prohlížečích.

- [`/etc/hosts` syntaxe](#etc-hosts-syntax): starý a osvědčený přístup, který používá stejnou syntaxi, jakou používají operační systémy pro své funkce hostitelských souborů.

- [Syntaxe pouze pro domény](#domains-only-syntax): jednoduchý seznam doménových názvů.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Oproti staré syntaxi má několik důležitých výhod:

- **Velikost seznamu zakázaných.** Použití porovnávání vzorů umožňuje mít jediné pravidlo namísto stovek záznamů `/etc/hosts`.

- **Kompatibilita.** Váš seznam zakázaných bude kompatibilní s blokátory reklam v prohlížeči a bude snazší sdílet pravidla se seznamem filtrů prohlížeče.

- **Rozšiřitelnost.** Za posledních deset let se syntaxe ve stylu Adblock značně vyvinula a nevidíme důvod, proč bychom ji nemohli ještě více rozšířit a poskytnout další funkce pro blokátory napříč celou sítí.

Pokud udržujete seznam blokování ve stylu `/etc/hosts` nebo více seznamů filtrování (bez ohledu na typ), poskytujeme nástroj pro kompilaci seznamu zakázaných. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Základní příklady {#basic-examples}

- `||example.org^`: blokuje přístup k doméně `example.org` a jejím subdoménám jako `www.example.org`.

- `@@||example.org^`: odblokuje přístup k doméně `example.org` a jejím subdoménám.

- `1.2.3.4 example.org`: (pozor, starý styl syntaxe `/etc/hosts`) v AdGuard Home, odezva s `1.2.3.4` do dotazu domény `example.org`, ale **ne** jejích subdomén. V soukromém AdGuard DNS blokuje přístup k `example.org`. Doména `www.example.org` zůstává povolena.

  V AdGuard Home je použití nespecifikované IP adresy (`0.0.0.0`) nebo místní adresy (`127.0.0.1` a pod.) pro hostitele v podstatě stejné jako zablokování tohoto hostitele.

  ```none
  # Vrátí IP adresu 1.2.3.4 pro example.org.
  1.2.3.4 example.org
  # Blokuje doménu example.org odpovědí 0.0.0.0.
  0.0.0.0 example.org
  ```

- `example.org`: jednoduché pravidlo domény. Blokuje doménu `example.org`, ale **ne** její subdomény. Doména `www.example.org` zůstává povolena.

- `! Zde je komentář` a `# Také komentář`: komentáře.

- `/REGEX/`: blokuje přístup doménám, které vyhovují regulárnímu výrazu.

## Syntaxe ve stylu Adblock {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern`: maska názvu hostitele. Každý název hostitele se shoduje s touto maskou. Vzor může obsahovat také speciální znaky, které jsou popsány níže.

- `@@`: značka, která se používá v pravidlech pro výjimky. Pokud chcete vypnout filtrování odpovídajících názvů hostitele, začněte pravidlo touto značkou.

- `modifiers`: parametry, které toto pravidlo upřesňují. Mohou omezit oblast působnosti pravidla nebo dokonce zcela změnit jeho fungování.

### Speciální znaky {#special-characters}

- `*`: zástupný znak. Používá se k reprezentaci libovolné sady znaků. Může to být také prázdný řetězec nebo řetězec libovolné délky.

- `||`: odpovídá začátku názvu hostitele včetně subdomény. Např. `||example.org` odpovídá `example.org` a `test.example.org`, ale ne `testexample.org`.

- `^`: oddělovací znak. Na rozdíl od blokování reklam v prohlížeči není v názvu hostitele nic odděleno, takže jediný účel tohoto znaku je označit konec názvu hostitele.

- `|`: ukazatel na začátku nebo konci názvu hostitele. Hodnota závisí na umístění znaku v masce. Např. pravidlo `ample.org|` odpovídá `example.org`, ale ne `example.org.com`. `|example` odpovídá `example.org`, ale ne `test.example`.

### Regulární výrazy {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Pokud chcete použít regulární výraz, musí vzor vypadat takto:

```none
pattern = "/" regexp "/"
```

**Příklady:**

- `/example.*/` zablokuje hostitele odpovídající `example.*` regexp.

- `@@/example.*/$important` odblokuje hostitele odpivídající `example.*` regexp. Všimněte si, že toto pravidlo také zahrnuje modifikátor `important`.

### Komentáře {#comments}

Každý řádek, který začíná vykřičníkem nebo znakem hash, je komentář a filtrovací nástroj jej bude ignorovat. Komentáře se obvykle umísťují nad pravidla a slouží k popisu toho, co pravidlo dělá.

**Příklad:**

```none
! Toto je komentář.
# Toto je také komentář.
```

### Modifikátory pravidel {#rule-modifiers}

Chování pravidla můžete změnit přidáním modifikátorů. Modifikátory musí být umístěny na konci pravidla za znakem `$` a musí být odděleny čárkami.

**Příklady:**

- ```none ||example.org^$important
   ```

  `||example.org^` je odpovídající vzor. `$` je oddělovač, který signalizuje, že zbytek pravidla jsou modifikátory. `important` je modifikátor.

- V pravidle můžete použít více modifikátorů. V takovém případě je oddělte čárkami:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` je odpovídající vzor. `$` je oddělovač, který signalizuje, že zbytek pravidla jsou modifikátory. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` je oddělovač mezi modifikátory. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

**POZNÁMKA:** pokud pravidlo obsahuje modifikátor, který není uveden v tomto dokumentu, musí být celé pravidlo **ignorováno**. Tímto způsobem se vyhneme falešně pozitivním výsledkům, když se lidé pokoušejí používat seznamy filtrů nemodifikovaných blokátorů reklam v prohlížečích, jako je EasyList nebo EasyPrivacy.

#### `client` {#client-modifier}

Modifikátor `client` umožňuje specifikovat klienty, na které se toto pravidlo vztahuje. Existují dva hlavní způsoby identifikace klienta:

- Podle jejich IP adresy nebo prefixu CIDR. Tento způsob funguje pro všechny typy klientů.

- Podle jejich názvu. Tento způsob funguje pouze pro trvalé klienty (v AdGuard Home) a zařízení (v soukromý AdGuard DNS), které jste přidali ručně.

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

**POZNÁMKA:** když vyloučíte klienta, **musíte** umístit znak `~` mimo uvozovky.

**Příklady:**

- `@@||*^$client=127.0.0.1`: odblokuje vše pro místního hostitele.

- `||example.org^$client='Frank\'s laptop'`: zablokuje doménu `example.org` pouze pro klienta s názvem `Frank's laptop`. Všimněte si, že uvozovka (`'`) v názvu musí být vynechána ze závorek.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: zablokuje doménu `example.org` pro všechny kromě klienta s názvem `Mary's, John's, and Boris's laptops`. Všimněte si, že čárka (`,`) v názvu musí být též vynechána ze závorek.

- `||example.org^$client=~Mom|~Dad|Kids`: zablokuje doménu `example.org` pro `Kids`, ale ne pro `Mom` and `Dad`. Tento příklad ukazuje, jak zadat více klientů v jednom pravidle.

- `||example.org^$client=192.168.0.0/24`: zablokuje doménu `example.org` pro všechny klienty s IP adresami v rozsahu od `192.168.0.0` do `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

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

- `*$denyallow=com|net`: zablokovat vše kromě `*.com` a `*.net`.

- `@@*$denyallow=com|net`: odblokovat vše kromě `*.com` a `*.net`.

- `||example.org^$denyallow=sub.example.org`. zablokuje `example.org` a `*.example.org`, ale nezablokuje `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

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

- `||example.org^$dnstype=AAAA`: blokuje DNS dotazy pro adresy IPv6 domény `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: povoluje pouze `A` a `CNAME` DNS dotazů pro `example.org` zablokuje zbytek.

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

#### `dnsrewrite` {#dnsrewrite-modifier}

Modifikátor odpovědi `dnsrewrite` umožňuje nahradit obsah odpovědi na DNS požadavek pro odpovídající hostitele. Všimněte si, že tento modifikátor v AdGuard Home funguje ve všech pravidlech, ale v soukromém AdGuard DNS pouze ve vlastních pravidlech.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home and AdGuard DNS.**

Odezvy na všechny požadavky na hostitele vyhovující pravidlu `dnsrewrite` budou nahrazeny. Část odpovědí náhradní odezvy bude obsahovat pouze RR, které odpovídají typu dotazu požadavku, a případně RR CNAME. Všimněte si, že to znamená, že odezvy na některé požadavky mohou být prázdné (`NODATA`), pokud hostitel odpovídá pravidlu `dnsrewrite`.

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
nslookup example.com my.adguard.local
```

```none
Server: my.adguard.local
Adresa: 127.0.0.1#53

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

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` přidá `PTR` záznam pro reverzní DNS. Výsledkem reverzních DNS požadavků na `1.2.3.4` na server DNS bude `example.net`.

  **POZNÁMKA:** IP ADRESA MUSÍ být v opačném pořadí. See [RFC 1035][rfc1035].

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` přidá odezvu `A` s hodnotou `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` přidá záznam `AAAA` s hodnotou `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` přidá záznam `CNAME`. Viz vysvětlení výše.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` přidá záznam `HTTPS`. Podporována je pouze podmnožina hodnot parametrů: hodnoty musí na sebe `navazovat` a tam, kde se `očekává` `seznam hodnot`, je v současné době podporována pouze jedna hodnota:

   ```none
   ipv4hint=127.0.0.1             // podporováno.
   ipv4hint="127.0.0.1"           // nepodporováno.
   ipv4hint=127.0.0.1,127.0.0.2   // nepodporováno.
   ipv4hint="127.0.0.1,127.0.0.2" // nepodporováno.
   ```

  To bude v budoucnu změněno.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` přidá záznam `MX` s přednostní hodnotou `32` a změní hodnotu `example.mail`.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` přidá hodnotu `SVCB`. Viz výše uvedený příklad `HTTPS`.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` přidá záznam `TXT` s hodnotou `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` přidá záznam `SRV` s přednostní hodnotou `10`, hodnota `60`, port `8080`, a cíl hodnoty `example.com`.

- `||example.com^$dnsrewrite=NXDOMAIN;;` odpoví s kódem `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` odpoví s prázdnou odezvou `NOERROR` pro všechny požadavky `AAAA` mimo jeden pro `example.org`.

Pravidla výjimek odblokují jedno nebo všechna pravidla:

- `@@||example.com^$dnsrewrite` odblokuje všechna pravidla pro přepis DNS.

- `@@||example.com^$dnsrewrite=1.2.3.4` odblokuje pravidlo pro přepis DNS, které přidá záznam `A` s hodnotou `1.2.3.4`.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Příklady:**

- V tomto příkladu:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` zablokuje všechny požadavky na doménu `*.example.org` navzdory pravidlu výjimky.

- V tomto příkladu:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  pravidlo výjimky má také modifikátor `important`, takže bude fungovat.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Příklady:**

- `||example.com$badfilter` zakáže `||example.com`.

- `@@||example.org^$badfilter` zakáže `@@||example.org^`.

  **POZNÁMKA:** modifikátor `badfilter` v současné době nefunguje s pravidly ve stylu `/etc/hosts`. `127.0.0.1 example.org$badfilter` nezakáže **** původní pravidlo `127.0.0.1 example.org`.

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

Syntaxe je:

```none
$ctag=value1|value2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**Příklady:**

- `||example.org^$ctag=device_pc|device_phone`: zablokuje `example.org` pro klienty označené jako `device_pc` nebo `device_phone`.

- `||example.org^$ctag=~device_phone`: zablokuje `example.org` pro všechny klienty kromě těch, kteří jsou označeni jako `device_phone`.

The list of allowed tags:

- Podle typu zařízení:

    - `device_audio`: audio zařízení.
    - `device_camera`: fotoaparáty.
    - `device_gameconsole`: herní konzole.
    - `device_laptop`: notebooky.
    - `device_nas`: NAS servery (Síťová úložiště).
    - `device_pc`: stolní počítače.
    - `device_phone`: telefony.
    - `device_printer`: tiskárny.
    - `device_securityalarm`: bezpečnostní alarmy.
    - `device_tablet`: tablety.
    - `device_tv`: televizory.
    - `device_other`: ostatní zařízení.

- Podle operačního systému:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: ostatní operační systémy.

- Podle skupiny uživatelů:

    - `user_admin`: administrátoři.
    - `user_regular`: běžní uživatelé.
    - `user_child`: děti.

## Syntaxe stylu `/etc/hosts` {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Příklad:**

```none
# Toto je komentář
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # toto je taky komentář
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Syntaxe pouze pro domény {#domains-only-syntax}

A simple list of domain names, one name per line.

**Příklad:**

```none
# Toto je komentář
example.com
example.org
example.net # toto je také komentář
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Překladač hostitelských seznamů {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Sestavit jeden seznam blokování z více zdrojů.

2. Vyloučit pravidla, která nepotřebujete.

3. Vyčistit výsledný seznamu: deduplikace, odstranění neplatných pravidel a komprese seznamu.

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
