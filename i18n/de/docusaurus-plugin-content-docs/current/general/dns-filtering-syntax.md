---
title: Syntax der DNS-Filterregeln
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Hier zeigen wir Ihnen, wie Sie eigene DNS-Filterregeln für die Verwendung in AdGuard-Produkten erstellen können.

Schnellzugriff: [AdGuard Werbeblocker herunterladen](https://agrd.io/download-kb-adblock), [AdGuard Home erhalten](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS ausprobieren](https://agrd.io/download-dns)

:::

## Einführung {#introduction}

Sie können die Syntax der AdGuard DNS-Filterregeln verwenden, um die Regeln flexibler zu gestalten, so dass sie Inhalte nach Ihren Wünschen sperren können. Die Syntax der AdGuard DNS-Filterregeln kann in verschiedenen AdGuard-Produkten wie AdGuard Home, AdGuard DNS, AdGuard für Windows/Mac/Android verwendet werden.

Es gibt drei verschiedene Ansätze für die Erstellung von Hosts-Sperrlisten:

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. Auf diese Weise sind die Blocklisten mit den Werbeblockern der Browser kompatibel.

- [`/etc/hosts` syntax](#etc-hosts-syntax): Der alte, bewährte Ansatz, der die gleiche Syntax verwendet, die auch die Betriebssysteme für ihre hosts-Dateien verwenden.

- [Domains-only-Syntax](#domains-only-syntax): eine einfache Liste von Domainnamen.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Sie hat eine Reihe wichtiger Vorteile gegenüber der alten Syntax:

- **Größe der Sperrlisten.** Durch die Verwendung des Musterabgleichs können Sie eine einzige Regel anstelle von Hunderten von `/etc/hosts` Einträgen verwenden.

- **Kompatibilität.** Ihre Blockliste ist mit Werbeblockern von Browsern kompatibel, und es ist einfacher, Regeln mit einer Browser-Filterliste auszutauschen.

- **Erweiterbarkeit.** In den letzten zehn Jahren hat sich die Adblock-Syntax stark weiterentwickelt, und wir sehen keinen Grund, sie nicht noch weiter zu erweitern und zusätzliche Funktionen für Blocker auf Netzwerkebene anzubieten.

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Allgemeine Beispiele {#basic-examples}

- `||example.org^`: sperrt den Zugriff auf die Domain `example.org` und alle ihre Subdomains, wie `www.example.org`.

- `@@|| example.org^`: Entsperren Sie den Zugriff auf die `example.org`-Domain und alle ihre Subdomains.

- `1.2.3.4 example.org`: (Achtung, alte `/etc/hosts`-style Syntax) in AdGuard Home, antwortet mit `1.2.3.4` auf Anfragen nach der `example.org` Domain, aber **nicht** deren Subdomains. Blockieren Sie im Private AdGuard DNS den Zugriff auf `example.org`. `www.example.org` bleibt erlaubt.

  In AdGuard Home ist die Verwendung der nicht spezifizierten IP-Adresse (`0.0.0.0`) oder einer lokalen Adresse (`127.0.0.1` und ähnliche) für einen Host im Grunde dasselbe wie das Blockieren dieses Hosts.

  ```none
  # Gibt die IP-Adresse 1.2.3.4 für example.org zurück.
  1.2.3.4 example.org
  # Blockiert example.org, indem es mit 0.0.0.0 antwortet.
  0.0.0.0 example.org
  ```

- `example.org`: eine einfache Domainregel. Blockiert die Domain `example.org`, aber **nicht** ihre Subdomains. `www.example.org` bleibt erlaubt.

- `! Hier kommt ein Kommentar` und `# Auch ein Kommentar`: Kommentare.

- `/REGEX/`: blockiert den Zugriff auf die Domains, die dem angegebenen regulären Ausdruck entsprechen.

## Syntax im Adblock-Stil {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     Regel = ["@@"] pattern [ "$" modifiers ]
Modifikator = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern`: die Hostnamenmaske. Jeder Hostname wird mit dieser Maske abgeglichen. Das Muster kann auch Sonderzeichen enthalten, die im Folgenden beschrieben werden.

- `@@`: die Markierung, die in den Ausnahmeregeln verwendet wird. Beginnen Sie Ihre Regel mit dieser Markierung, wenn Sie die Filterung für die entsprechenden Hostnamen ausschalten wollen.

- `modifiers`: Parameter, die die Regel verdeutlichen. Sie können den Geltungsbereich der Regel einschränken oder sogar ihre Funktionsweise vollständig ändern.

### Sonderzeichen {#special-characters}

- `*`: das Platzhalterzeichen. Es wird verwendet, um eine beliebige Menge von Zeichen darzustellen. Dies kann auch eine leere Zeichenkette oder eine Zeichenkette mit beliebiger Länge sein.

- `||`: stimmt mit dem Anfang eines Hostnamens überein, einschließlich aller Subdomains. Zum Beispiel stimmt `||example.org` mit `example.org` und `test.example.org` überein, aber nicht mit `testexample.org`.

- `^`: das Trennzeichen. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`: ein Zeiger auf den Anfang oder das Ende des Hostnamens. Der Wert hängt von der Platzierung des Zeichens in der Maske ab. Die Regel `ample.org|` entspricht zum Beispiel `example.org`, aber nicht `example.org.com`. `|example` entspricht `example.org` aber nicht `test.example`.

### Reguläre Ausdrücke {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Wenn Sie einen regulären Ausdruck verwenden wollen, muss das Muster wie folgt aussehen:

```none
pattern = "/" regexp "/"
```

**Beispiele:**

- `/example.*/` sperrt Hosts, die mit der Regexp `example.*` übereinstimmen.

- `@@/example.*/$important` hebt die Sperrung von Hosts auf, die mit dem Regexp `example.*` übereinstimmen. Beachten Sie, dass diese Regel auch den `wichtigen` Modifikator impliziert.

### Kommentare {#comments}

Jede Zeile, die mit einem Ausrufezeichen oder einem Rautenzeichen beginnt, ist ein Kommentar und wird von der Filterfunktion ignoriert. Kommentare werden in der Regel oberhalb der Regeln platziert und dienen dazu, die Funktion einer Regel zu beschreiben.

**Beispiel:**

```none
! Dies ist ein Kommentar.
# Dies ist auch ein Kommentar.
```

### Regel-Modifikatoren {#rule-modifiers}

Sie können das Verhalten einer Regel ändern, indem Sie Modifikatoren hinzufügen. Modifikatoren müssen am Ende der Regel nach dem Zeichen `$` stehen und durch Kommata getrennt sein.

**Beispiele:**

- ```none ||example.org^$important
   ```

  ||example.org^` ist das passende Muster. `$` ist das Trennzeichen, das signalisiert, dass der Rest der Regel Modifikatoren sind. „important“ ist der Modifikator.

- Möglicherweise möchten Sie mehrere Modifikatoren in einer Regel verwenden. In diesem Fall sind sie durch Kommata zu trennen:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` ist das passende Muster. `$` ist das Trennzeichen, das signalisiert, dass der Rest der Regel Modifikatoren sind. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` (Komma) ist das Trennzeichen zwischen den Modifikatoren. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- Durch ihre IP-Adresse oder ihr CIDR-Präfix. Dies funktioniert für alle Arten von Clients.

- Durch ihren Namen. Auf diese Weise funktioniert das nur mit permanenten Clients (in AdGuard Home) und Geräten (in Private AdguardDNS), welche Sie manuell hinzugefügt haben.

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

**Beispiele:**

- `@@||*^$client=127.0.0.1`: alles für localhost freigeben.

- `||example.org^$client='Frank\'s laptop'`: sperrt `example.org` nur für den Client mit dem Namen `Frank's Laptop`. Beachten Sie, dass Anführungszeichen (`'`) im Namen mit einem Escape-Zeichen versehen werden müssen.

- `||example.org^$client=~'Mary\'s\, John\'s\, und Boris\'s laptops'`: sperrt `example.org` für alle außer für den Client namens `Mary's, John's, and Boris's Laptops`. Beachten Sie, dass das Komma (`,`) ebenfalls mit einem Escapezeichen versehen werden muss.

- `||example.org^$client=~Mom|~Dad|Kids`: sperrt`example.org` für `Kids`, aber nicht für `Mom` und `Dad`. Dieses Beispiel zeigt, wie man mehrere Clients in einer Regel angeben kann.

- `||example.org^$client=192.168.0.0/24`: sperrt `example.org` für alle Clients mit IP-Adressen im Bereich von `192.168.0.0` bis `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Alles blockieren.
/.*/

! Entsperren Sie einige TLDs.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Beispiele:**

- `*$denyallow=com|net`: sperrt alles außer `*.com` und `*.net`.

- `@@*$denyallow=com|net`: entsperrt alles außer `*.com` und `*.net`.

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org`, but not `sub.example.org`.

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

**Beispiele:**

- `||example.org^$dnstype=AAAA`: sperrt DNS-Anfragen für die IPv6-Adressen von `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: erlaubt ausschließlich `A` und `CNAME` DNS-Anfragen für `example.org`, der Rest wird gesperrt.

:::note

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
! Oder:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

```sh
nslookup example.com my.adguard.local
```

```none
Server: my.adguard.local
Adresse: 127.0.0.1#53

Nicht-autoritative Antwort:
example.com kanonischer Name = example.net
Name: example.net
Adresse: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records’ values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` fügt einen `PTR`-Eintrag für Reverse DNS hinzu. Reverse-DNS-Anfragen für `1.2.3.4` an den DNS-Server ergeben `example.net`.

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` fügt einen `A`-Datensatz hinzu mit dem Wert `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` fügt einen `AAAA`-Datensatz mit dem Wert `abcd::1234` hinzu.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` fügt einen `CNAME`-Eintrag hinzu. Siehe obige Erklärung.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` fügt einen `HTTPS`-Eintrag hinzu. Es wird nur eine Teilmenge von Parameterwerten unterstützt: Die Werte müssen `zusammenhängend` sein und wenn eine `Werteliste` `erwartet` wird, wird derzeit nur ein Wert unterstützt:

   ```none
   ipv4hint=127.0.0.1             // Unterstützt.
   ipv4hint="127.0.0.1"           // Nicht unterstützt.
   ipv4hint=127.0.0.1,127.0.0.2   // Nicht unterstützt.
   ipv4hint="127.0.0.1,127.0.0.2" // Nicht unterstützt.
   ```

  Dies soll in Zukunft geändert werden.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` fügt einen `MX`-Eintrag mit dem Prioritätswert `32` und dem Austauschwert `example.mail` hinzu.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` fügt einen `SVCB`-Wert hinzu. Siehe das obige `HTTPS`-Beispiel.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` fügt einen `TXT`-Datensatz mit dem Wert `hello_world`hinzu.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` fügt einen `SRV`-Eintrag mit dem Prioritätswert `10`, dem Gewichtswert `60`, dem Port`8080`und dem Zielwert `example.com` hinzu.

- `||example.com^$dnsrewrite=NXDOMAIN;;` antwortet mit einem `NXDOMAIN`-Code.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` antwortet mit einem leeren `NOERROR` antwortet auf alle `AAAA` Anfragen außer denen für `example.org`.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` hebt das Sperren aller DNS-Rewrite-Regeln auf.

- `@@||example.com^$dnsrewrite=1.2.3.4` hebt die DNS-Rewrite-Regel auf, die einen `A`-Eintrag mit dem Wert `1.2.3.4` hinzufügt.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Beispiele:**

- In diesem Beispiel:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` sperrt alle Anfragen an `*.example.org` trotz der Ausnahmeregel.

- In diesem Beispiel:

  ```none
  ||example^$important
  @@||example^$important
  ```

  die Ausnahmeregel hat auch den Modifikator `important`, sodass sie funktioniert.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Beispiele:**

- `||example.com$badfilter` deaktiviert `||example.com`.

- `@@||example.org^$badfilter` deaktiviert `@@||example.org^`.

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

**Beispiele:**

- `||example.org^$ctag=device_pc|device_phone`: sperrt `example.org` für Clients, die als `device_pc` oder `device_phone` gekennzeichnet sind.

- `||example.org^$ctag=~device_phone`: sperrt `example.org` für alle Clients außer denen, die als `device_phone` gekennzeichnet sind.

The list of allowed tags:

- Nach Gerätetyp:

    - `device_audio`: Audiogeräte.
    - `device_camera`: Kameras.
    - `device_gameconsole`: Spielekonsolen.
    - `device_laptop`: Laptops.
    - `device_nas`: NAS (Network-attached Storages).
    - `device_pc`: PCs.
    - `device_phone`: Telefone.
    - `device_printer`: Drucker.
    - `device_securityalarm`: Sicherheitsalarmanlagen.
    - `device_tablet`: Tablets.
    - `device_tv`: Fernsehgeräte.
    - `device_other`: andere Geräte.

- Nach Betriebssystem:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: andere Betriebssysteme.

- Nach Benutzergruppen:

    - `user_admin`: Administratoren.
    - `user_regular`: normale Benutzer.
    - `user_child`: Kinder.

## `/etc/hosts`-Style-Syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_Adresse canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Beispiel:**

```none
# Dies ist ein Kommentar
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # Dies ist auch ein Kommentar
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Nur-Domain-Syntax {#domains-only-syntax}

A simple list of domain names, one name per line.

**Beispiel:**

```none
# Dies ist ein Kommentar
example.com
example.org
example.net # dies ist auch ein Kommentar
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlists Compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it’s capable of:

1. Zusammenstellung einer einzigen Blockliste aus mehreren Quellen.

2. Exclude the rules you don’t need.

3. Bereinigt die resultierende Liste: entfernt Dubletten, entfernt ungültige Regeln und komprimiert die Liste.

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
