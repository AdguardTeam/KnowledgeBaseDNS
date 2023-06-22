---
title: Syntaks for DNS-filtreringsregler
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

I denne artikel forklares, hvordan man skriver tilpassede filtreringsregler til brug i AdGuard-produkter

Hurtig-links: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Hent AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Prøv AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

## Introduktion

AdGuard DNS-filtreringsregelsyntaks kan bruges til at gøre regler mere fleksible, så de kan blokere indhold iht. personlige præferencer. AdGuard DNS-filtreringsregelsyntaks kan bruges i forskellige AdGuard-produkter, såsom AdGuard Home, AdGuard DNS, AdGuard til Windows/Mac/Android.

Der er tre forskellige tilgange til at skrive værtsblokeringslister:

* [Adblock-syntakstype](#adblock-style-syntax): Den moderne tilgang til at skrive filtreringsregler baseret på brug af et undersæt af Adblock-regelsyntaksen. På denne måde er blokeringslister kompatible med browser-adblockere.

* [`/etc/hosts` syntaks](#etc-hosts-syntax): Den gamle, gennemprøvede tilgang, der bruger samme værtsfilsyntakser som operativsystemerne.

* [Syntaks kun til domæner](#domains-only-syntax): En simpel liste over domænenavne.

Opretter man en sortliste, anbefales brug af [Adblock-syntakstypen](#adblock-style-syntax). Den har et par vigtige fordele ift. den gamle syntakstype:

* **Blokeringslistestørrelse.** Ved at bruge mønstertilpasning kan man have én enkelt regel i stedet for hundredvis af `/etc/hosts`-poster.

* **Kompatibilitet.** Blokeringslisten vil være kompatibel med browser-adblockere, og regler kan nemmere deles med en browser-filtreringsliste.

* **Udvidelsesmuligheder.** I det seneste årti har Adblock-syntakstypen udviklet sig meget, og vi ser ingen grund til ikke at udvide den yderligere og tilbyde flere funktioner til netværksniveau-blockere.

Vedligeholder man enten en sortliste af typen `/etc/hosts` eller flere filtreringslister (uanset type), tilbyder vi et værktøj til kompilering af sortlister. Vi har kaldt det [Hostlist compiler][hlc] og vi bruger det selv til oprettelse af [AdGuard DNS-filtre][sdn].

## Basiseksempler

* `||eksempel.org^`: blokér domæneadgang for `eksempel.org` og alle dets underdomæner, f.eks. `www.eksempel.org`.

* `||eksempel.org^`: Afblokér domæneadgang til `eksempel.org` og alle dets underdomæner.

* `1.2.3.4 eksempel.org`: (Bemærk, gammel `/etc/hosts`-syntakstype) i AdGuard Home, svar med `1.2.3.4` på forespørgsler for `eksempel.org`-domænet, men **ikke** dets underdomæner. Blokér i Private AdGuard DNS adgangen til `eksempel.org`. `www.eksempel.org` forbliver tilladt.

  I AdGuard Home er brug af den uspecificerede IP-adresse (`0.0.0.0`) eller en lokal adresse (`127.0.0.1` o.lign.) for en vært essentielt det samme som at blokere denne vært.

  ```none
  # Returnerer IP-adressen 1.2.3.4 for eksempel.org.
  1.2.3.4 eksempel.org
  # Blokerer eksempel.org ved at svare med 0.0.0.0.
  0.0.0.0 eksempel.org
  ```

* `eksempel.org`: En simpel domæneregel. Blokerer `eksempel.org`-domænet, men **ikke** dets underdomæner. `www.eksempel.org` forbliver tilladt.

* `! Her angives en kommentar` og `# Også en kommentar`: Kommentarer.

* `/REGEX/`: Blokér adgang til domæner matchende det angivne regulære udtryk.

## Adblock-syntakstype

This is a subset of the [traditional Adblock-style][adb] syntax which is used by browser ad blockers.

```none
     regel = ["@@"] mønster [ "$" modifikatorer ]
modifikatorer = [modifikator0, modifikator1[, ...[, modifikatorN]]]
```

* `mønster`: Værtsnavnmasken. Alle værtsnavne matches mod denne maske. Mønsteret kan også indeholde specialtegn, som beskrevet nedenfor.

* `@@`: den markør, der bruges i undtagelsesreglerne. Ønskes filtrering for de matchende værtsnavne deaktiveret, så start reglen med denne markør.

* `modifikatorer`: Parametre, som tydeliggør reglen. De kan begrænse reglens udstrækning eller endda helt ændre måden, den fungerer på.

### Specialtegn

* `*`: jokertegnet. Det bruges til at repræsentere et hvilket som helst tegn. Dette kan også være en tom streng eller en streng af enhver længde.

* `||`: Matcher begyndelsen af et værtsnavn, inkl. ethvert underdomæne. F.eks. så matcher `||eksempel.org` `eksempel.org` og `test.eksempel.org`, men ikke `testeksempel.org`.

* `^`: separatortegnet. Ulig browser-adblocking, er der intet at adskille/opdele i et værtsnavn, så det eneste formål med dette tegn er at markere slutningen på værtsnavnet.

* `|`: En markør for begyndelsen eller slutningen på værtsnavnet. Værdien afhænger af tegnplaceringen i masken. F.eks. svarer reglen `emple.org|` til `eksempel.org`, men ikke til `eksempel.org.com`. `|eksempe` korresponderer med `eksempel.org`, men ikke med `test.eksempel`.

### Regulære udtryk

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. If you want to use a regular expression, the pattern has to look like this:

```none
mønster = "/" regexp "/"
```

**Examples:**

* `/eksempel.*/` blokerer værter matchende `eksempel.*`-regexp'et.

* `@@/eksempel.*/$important` afblokerer værter matchende `eksempel.*`-regexp'et. Bemærk, at denne regel også forudsætter `important`-modifikatoren.

### Kommentarer

Any line that starts with an exclamation mark or a hash sign is a comment and it will be ignored by the filtering engine. Comments are usually placed above rules and used to describe what a rule does.

**Example:**

```none
! Dette er en kommentar.
# Dette er også en kommentar.
```

### Regelmodifikatorer

You can change the behavior of a rule by adding modifiers. Modifiers must be located at the end of the rule after the `$` character and be separated by commas.

**Examples:**

* ``` ingen ||eksempel.org^$important
   ```

  `||eksempel.org^` er det matchende mønster. `$` er afgrænsningstegnet, der signalerer, at resten af reglen er modifikatorer. "important" er modifikationen.

* Man ønsker måske at bruge flere modifikatorer i en regel. Adskil dem i så fald med kommaer:

  ```none
  ||eksempel.org^$client=127.0.0.1,dnstype=A
  ```

  `||eksempel.org^` er det matchende mønster. `$` er afgrænsningstegnet, der signalerer, at resten af reglen er modifikatorer. `client=127.0.0.1` is the [`client`](#client) modifier with its value, `127.0.0.1`, is the delimiter. Og endelig er `dnstype=A` [`dnstype`](#dnstype)-modifikatoren med sin værdi `A`.

**NOTE:** If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers' filter lists like EasyList or EasyPrivacy.

#### `client`

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

* Via deres IP-adresse eller CIDR-præfiks. Denne måde fungerer for alle slags klienter.

* Via deres navn. Denne måde fungerer kun for vedvarende klienter (i AdGuard Home) og enheder (i Private AdGuard DNS), som man manuelt har tilføjet.

  **BEMÆRK:** I AdGuard Home understøttes ClientID'er ikke pt., kun navne. Har man tilføjet en klient med navnet "Min Klient" og klient-id `min-klient`, så bogstavér modifikatoren `$client='Min Klient'` i modsætning til `$client=min-klient`.

The syntax is:

```none
$client=værdi1|værdi2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client's DNS requests.

```none
$client=~værdi1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

**NOTE:** When excluding a client, you **must** place `~` outside the quotes.

**Examples:**

* `@@||*^$client=127.0.0.1`: Afblokér alt for localhost.

* `||eksempel.org^$client='Frank\'s bærbare'`: Blokér kun `eksempel.org` for klienten med navnet `Frank's bærbare`. Bemærk, at anførselstegnet (`'`) i navnet skal escapes.

* `||eksmpel.org^$client=~'Mary\'s\, John\'s\ og Boris\'s bærbarer'`: Blokér `eksmpel.org` for alle undtagen for klientnavnene `Mary's, John's og Boris' bærbarer`. Bemærk, at komma (`,`) også skal escapes.

* `||eksempel.org^$client=~Mor|~Far|Børn`: Blokér `eksempel.org` for `Børn`, men ikke for `Mor` og `Far`. Dette eksempel viser, hvordan man angiver flere klienter i én regel.

* `||eksempel.org^$client=192.168.0.0/24`: Blokér `eksempel.org` for alle klienter med IP-adresser i området fra `192.168.0.0` til `192.168.0.255`.

#### `denyallow`

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domæne1|domæne2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Blokér alt.
/.*/

! Afblokér et par TLD'er.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here's how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Examples:**

* `*$denyallow=com|net`: Blokér alt, undtagen `*.com` og `*.net`.

* `@@*$denyallow=com|net`: Afblokér alt, undtagen `*.com` og `*.net`.

* `||eksempel.org^$denyallow=under.eksempel.org`. blokér `eksempel.org` og `*.eksempel.org`, men blokér ikke `under.eksempel.org`.

#### `dnstype`

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

The syntax is:

```none
$dnstype=værdi1|værdi2|...
$dnstype=~værdi1|~værdi2|~...
```

The names of the types are case-insensitive, but are validated against a set of actual DNS resource record (RR) types.

Do not combine exclusion rules with inclusion ones. This:

```none
$dnstype=~værdi1|~værdi2
```

is equivalent to this:

```none
$dnstype=værdi2
```

**Examples:**

* `||eksemple.org^$dnstype=AAAA`: Blokér DNS-forespørgsler for IPv6-adresserne på `eksemple.org`.

* `||eksemple.org^$dnstype=~A|~CNAME`: Tillad kun `A` og `CNAME` DNS-forespørgsler for `eksemple.org`, blokér resten.

**NOTE:** Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

```none
||canon.eksempel.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
SVAR:
->  eksempel.com
    kanonisk navn = canon.eksempel.com.
    ttl = 60
->  canon.eksempel.com
    internetadresse = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite`

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home.**

The shorthand syntax is:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=eksempel.net
$dnsrewrite=REFUSED
```

The keywords MUST be in all caps (e.g. `NOERROR`). Keyword rewrites take precedence over the other and will result in an empty response with an appropriate response code.

The full syntax is of the form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;eksempel.net
$dnsrewrite=REFUSED;;
```

The `$dnsrewrite` modifier with the `NOERROR` response code may also has empty `RRTYPE` and `VALUE` fields.

The `CNAME` one is special because AdGuard Home will resolve the host and add its info to the response. That is, if `example.net` has IP `1.2.3.4`, and the user has this in their filter rules:

```none
||eksempel.com^$dnsrewrite=eksempel.net
! Eller:
||eksempel.com^$dnsrewrite=FEJL;CNAME;eksempel.net
```

then the response will be something like:

```sh
$ nslookup eksempel.com my.adguard.local
```

```none
Server:     my.adguard.local
Address:    127.0.0.1#53

Non-authoritative answer:
eksempel.com canonical name = eksempel.net.
Name:   eksempel.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records' values are summed as one response, so this:

```none
||eksempel.com^$dnsrewrite=NOERROR;A;1.2.3.4
||eksempel.dk^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;eksempel.net.` tilføjer en `PTR`-post for reverse DNS. Reverse DNS-forespørgsler for `1.2.3.4` til DNS-serveren vil resultere i `eksempel.net`.

  **BEMÆRK:** IP'en SKAL være i omvendt rækkefølge. Se [RFC 1035][rfc1035].

* `||eksempel.com^$dnsrewrite=NOERROR;A;1.2.3.4` tilføjer en `A`-post med værdien `1.2.3.4`.

* `||eksempel.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` tilføjer en `AAAA`-post med værdien `abcd::1234`.

* `||eksempel.com^$dnsrewrite=NOERROR;CNAME;eksempel.org` tilføjer en `CNAME`-post. Se forklaring ovenfor.

* `||eksempel.com^$dnsrewrite=NOERROR;HTTPS;32 eksempel.com alpn=h3` tilføjer en `HTTPS`-post. Kun et undersæt af parameterværdier understøttes: Værdier skal være `sammenhængende`, og hvor en `værdiliste` `forventes`, understøttes pt. kun én værdi:

   ```none
   ipv4hint=127.0.0.1             // Understøttet.
   ipv4hint="127.0.0.1"           // Uunderstøttet.
   ipv4hint=127.0.0.1,127.0.0.2   // Uunderstøttet.
   ipv4hint="127.0.0.1,127.0.0.2" // Uunderstøttet.
   ```

  Dette vil blive ændret fremtiden.

* `||eksempel.com^$dnsrewrite=NOERROR;MX;32 eksempel.mail` tilføjer en `MX`-post med forrangsværdien `32` og udvekslingsværdien `eksempel.mail`.

* `||eksempel.com^$dnsrewrite=NOERROR;SVCB;32 eksempel.com alpn=h3` tilføjer en `SVCB`-value. Se `HTTPS`-eksemplet ovenfor.

* `||eksempel.com^$dnsrewrite=NOERROR;TXT;hallo_verden` tilføjer en `TXT`-post med værdien `hallo_verden`.

* `||_svctype._tcp.eksempel.com^$dnsrewrite=NOERROR;SRV;10 60 8080 eksempel.com` tilføjer en `SRV`-post med prioritetsværdien `10`, vægtværdien `60`, porten`8080` og målværdien `eksempel.com`.

* `||eksempel.com^$dnsrewrite=NXDOMAIN;;` svarer med en `NXDOMAIN`-kode.

* `$dnstype=AAAA,denyallow=eksempel.org,dnsrewrite=NOERROR;;` besvares med tomme `NOERROR`-svar for alle `AAAA`-forespørgsler, undtagen for dem indeholdende `eksempel.org`.

Exception rules remove one or all rules:

* `@@||eksempel.com^$dnsrewrite` fjerner alle DNS rewrite-regler.

* `@@||eksempel.com^$dnsrewrite=1.2.3.4` fjerner DNS rewrite-reglen, der tilføjer en `A`-post med værdien `1.2.3.4`.

#### `important`

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Examples:**

* I dette eksempel:

  ```none
  ||eksempel.org^$important
  @@||eksempel.org^
  ```

  `||eksempel.org^$important` blokerer alle forespørgsler til `*.eksempel.org` på trods af undtagelsesreglen.

* I dette eksempel:

  ```none
  ||eksempel.org^$important
  @@||eksempel.org^$important
  ```

  undtagelsesreglen har også `vigtige`-modifikator, så den vil virke.

#### `badfilter`

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Examples:**

* `||eksempel.com$badfilter` dealtiverer `||eksempel.com`.

* `@@||eksempel.org^$badfilter` deaktiverer `@@||eksempel.org^`.

  **BEMÆRK:** `badfilter`-modifikatoren fungerer ikke pt. med `/etc/hosts`-regeltyper. `127.0.0.1 eksempel.org$badfilter` deaktiverer **ikke** den oprindelige `127.0.0.1 eksempel.org`-regel.

#### `ctag`

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=værdi1|værdi2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**Examples:**

* `||eksempel.org^$ctag=device_pc|device_phone`: Blokerer `eksempel.org` for klienter tagget som `device_pc` eller `device_phone`.

* `||eksempel.org^$ctag=~device_phone`: Blokerer `eksempel.org` for alle klienter, undtagen for den tagget som `device_phone`.

The list of allowed tags:

* Efter enhedstype:

  * `device_audio`: Lydenheder.
  * `device_camera`: Kameraer.
  * `device_gameconsole`: Spillekonsoller.
  * `device_laptop`: Bærbare.
  * `device_nas`: NAS (netværkstilsluttede lagerenheder).
  * `device_pc`: PC'er.
  * `device_phone`: Mobiler.
  * `device_printer`: Printere.
  * `device_securityalarm`: Sikkerhedsalarmer.
  * `device_tablet`: Tablets.
  * `device_tv`: TV.
  * `device_other`: Øvrige enhedstyper.

* Efter styresystem:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: Øvrige OS'er.

* Efter brugergruppe:

  * `user_admin`: Administratorer.
  * `user_regular`: Almindelige brugere.
  * `user_child`: Børn.


## `/etc/hosts`Syntakstype {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_adresse kanonisk_værtsnavn [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Example:**

```none
# Dette er en kommentar
127.0.0.1 eksempel.org eksempel.info
127.0.0.1 eksempel.com
127.0.0.1 eksempel.net # dette er også en kommentar
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.


## Domæne-specifik syntaks

A simple list of domain names, one name per line.

**Example:**

```none
# Dette er en kommentar
eksempel.com
eksempel.org
eksempel.net # dette er også en kommentar
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style](#adblock-style-syntax) rule.

## Hostlists Compiler

If you are maintaining a blocklist and use different sources in it, [Hostlists compiler][hlc] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Kompiler én enkelt blokeringsliste fra flere kilder.

2. Udelukke de regler, man ikke behøver.

3. Oprense den resulterende liste: Fjerne dubletter og ugyldige regler, samt komprimere listen.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
