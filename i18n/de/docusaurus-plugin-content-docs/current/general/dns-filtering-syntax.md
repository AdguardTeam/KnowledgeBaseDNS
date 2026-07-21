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

- [Adblock-Syntax][]: der moderne Ansatz zum Schreiben von Filterregeln, der auf der Verwendung einer Untermenge der Adblock-Syntax basiert. Auf diese Weise sind die Blocklisten mit den Werbeblockern der Browser kompatibel.

- [`/etc/hosts` syntax](#etc-hosts-syntax): Der alte, bewährte Ansatz, der die gleiche Syntax verwendet, die auch die Betriebssysteme für ihre hosts-Dateien verwenden.

- [Domains-only-Syntax](#domains-only-syntax): eine einfache Liste von Domainnamen.

Wenn Sie eine Blockliste erstellen, empfehlen wir die Verwendung der [Adblock-Stil-Syntax][]. Sie hat eine Reihe wichtiger Vorteile gegenüber der alten Syntax:

- **Größe der Sperrlisten.** Durch die Verwendung des Musterabgleichs können Sie eine einzige Regel anstelle von Hunderten von `/etc/hosts` Einträgen verwenden.

- **Kompatibilität.** Ihre Blockliste ist mit Werbeblockern von Browsern kompatibel, und es ist einfacher, Regeln mit einer Browser-Filterliste auszutauschen.

- **Erweiterbarkeit.** In den letzten zehn Jahren hat sich die Adblock-Syntax stark weiterentwickelt, und wir sehen keinen Grund, sie nicht noch weiter zu erweitern und zusätzliche Funktionen für Blocker auf Netzwerkebene anzubieten.

Wenn Sie entweder eine Blockliste im Stil von `/etc/hosts` oder mehrere Filterlisten (unabhängig vom Typ) verwalten, bieten wir ein Werkzeug zur Zusammenstellung von Blocklisten. Wir haben es [Hostlist compiler][] genannt und wir verwenden es selbst, um den [AdGuard DNS filter][] zu erstellen.

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

Dies ist eine Teilmenge der [traditionellen Adblock-Syntax][], die von den Werbeblockern der Browser verwendet wird.

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

- `^`: das Trennzeichen. Anders als bei der Werbeblockierung in Browsern gibt es in einem Hostnamen nichts zu trennen, so dass der einzige Zweck dieses Zeichens darin besteht, das Ende des Hostnamens zu markieren.

- `|`: ein Zeiger auf den Anfang oder das Ende des Hostnamens. Der Wert hängt von der Platzierung des Zeichens in der Maske ab. Die Regel `ample.org|` entspricht zum Beispiel `example.org`, aber nicht `example.org.com`. `|example` entspricht `example.org` aber nicht `test.example`.

### Reguläre Ausdrücke {#regular-expressions}

Wenn Sie bei der Erstellung von Regeln noch flexibler sein wollen, können Sie [reguläre Ausdrücke][regexp] anstelle der standardmäßigen vereinfachten Syntax verwenden. Wenn Sie einen regulären Ausdruck verwenden wollen, muss das Muster wie folgt aussehen:

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

  `||example.org^` ist das passende Muster. `$` ist das Trennzeichen, das signalisiert, dass der Rest der Regel Modifikatoren sind. `client=127.0.0.1` ist der [client</code>-][]Modifikator mit seinem Wert `127.0.0.1`. `,` (Komma) ist das Trennzeichen zwischen den Modifikatoren. Und schließlich ist `dnstype=A` der [`dnstype`][]-Modifikator mit seinem Wert, `A`.

:::note

Wenn eine Regel einen Modifikator enthält, der nicht in diesem Dokument aufgeführt ist, wird die gesamte Regel **nicht berücksichtigt**. Auf diese Weise werden Fehlalarme vermieden, wenn Nutzer versuchen, unveränderte Filterlisten von Browser-Werbeblockern wie EasyList oder EasyPrivacy zu verwenden.

:::

#### `client` {#client-modifier}

:::note

Der Modifikator `client` kann nur in AdGuard Home und AdGuard DNS verwendet werden.

:::

Der Modifikator `client` ermöglicht die Angabe von Clients, auf die diese Regel angewendet werden soll. Es gibt zwei Hauptmethoden, um einen Client zu identifizieren:

- Durch ihre IP-Adresse oder ihr CIDR-Präfix. Dies funktioniert für alle Arten von Clients.

- Durch ihren Namen. Auf diese Weise funktioniert das nur mit permanenten Clients (in AdGuard Home) und Geräten (in Private AdguardDNS), welche Sie manuell hinzugefügt haben.

  :::note

  In AdGuard Home werden derzeit keine Client-IDs unterstützt, sondern nur Namen. Wenn Sie einen Client mit dem Namen „Mein Client” und der „ClientID” `mein-client` hinzugefügt haben, benennen Sie ihren Modifikator mit „`$client='Mein Client'`” anstelle von „`$client=mein-client`”.

  :::

Die Syntax lautet:

```none
$client=value1|value2|...
```

Sie können auch Clients ausschließen, indem Sie `~` vor dem Wert einfügen. In diesem Fall wird die Regel nicht auf die DNS-Anfragen dieses Clients angewendet.

```none
$client=~value1
```

Client-Namen enthalten in der Regel Leerzeichen oder andere Sonderzeichen, weshalb Sie den Namen in Anführungszeichen setzen sollten. Sowohl einfache als auch doppelte ASCII-Anführungszeichen werden unterstützt. Verwenden Sie den Backslash (`\`), um Anführungszeichen (`"` und `'`), Kommata (`,`) und Pipes (`|`) zu vermeiden.

:::note

Wenn Sie einen Client ausschließen, **müssen** Sie `~` außerhalb der Anführungszeichen platzieren.

:::

**Beispiele:**

- `@@||*^$client=127.0.0.1`: alles für localhost freigeben.

- `||example.org^$client='Frank\'s laptop'`: sperrt `example.org` nur für den Client mit dem Namen `Frank's Laptop`. Beachten Sie, dass Anführungszeichen (`'`) im Namen mit einem Escape-Zeichen versehen werden müssen.

- `||example.org^$client=~'Mary\'s\, John\'s\, und Boris\'s laptops'`: sperrt `example.org` für alle außer für den Client namens `Mary's, John's, and Boris's Laptops`. Beachten Sie, dass das Komma (`,`) ebenfalls mit einem Escapezeichen versehen werden muss.

- `||example.org^$client=~Mom|~Dad|Kids`: sperrt`example.org` für `Kids`, aber nicht für `Mom` und `Dad`. Dieses Beispiel zeigt, wie man mehrere Clients in einer Regel angeben kann.

- `||example.org^$client=192.168.0.0/24`: sperrt `example.org` für alle Clients mit IP-Adressen im Bereich von `192.168.0.0` bis `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

Sie können den `denyallow`-Modifikator verwenden, um Domänen von der Blockierungsregel auszuschließen. Um mehrere Domains zu einer Regel hinzuzufügen, verwenden Sie das Pipe-Zeichen `|` als Trennzeichen.

Die Syntax lautet:

```none
$denyallow=domain1|domain2|...
```

Dieser Modifikator ermöglicht es, unnötige Ausnahmeregeln zu vermeiden, wenn unsere Blockierungsregel zu viele Domains abdeckt. Möglicherweise möchten Sie alles außer einigen TLD-Domains blockieren. Sie könnten den Standardansatz verwenden, d. h. Regeln wie diese:

```none
! Alles blockieren.
/.*/

! Entsperren Sie einige TLDs.
@@||com^
@@||net^
```

Das Problem bei diesem Ansatz ist, dass Sie auf diese Weise auch Tracking-Domains freigeben, die sich auf diesen TLDs befinden (z. B. `google-analytics.com`). So lösen Sie dieses Problem mit `denyallow`:

```none
*$denyallow=com|net
```

**Beispiele:**

- `*$denyallow=com|net`: sperrt alles außer `*.com` und `*.net`.

- `@@*$denyallow=com|net`: entsperrt alles außer `*.com` und `*.net`.

- `||example.org^$denyallow=sub.example.org`: blockiert `example.org` und `*.example.org`, aber nicht `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

Mit dem Modifikator `dnstype` kann der Typ der DNS-Anfrage oder -Antwort angegeben werden, bei dem diese Regel ausgelöst wird.

Die Syntax lautet:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

Die Namen der Typen sind unabhängig von Groß- und Kleinschreibung, werden jedoch anhand einer Menge tatsächlicher DNS-Resource-Record-(RR)-Typen validiert.

Kombinieren Sie keine Ausschlussregeln mit Einschlussregeln. Dies:

```none
$dnstype=~value1|value2
```

ist gleichbedeutend mit diesem:

```none
$dnstype=value2
```

**Beispiele:**

- `||example.org^$dnstype=AAAA`: sperrt DNS-Anfragen für die IPv6-Adressen von `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: erlaubt ausschließlich `A` und `CNAME` DNS-Anfragen für `example.org`, der Rest wird gesperrt.

:::note

Vor Version **v0.108.0** verwendete AdGuard Home den Typ der Anfrage, um die Antwortdatensätze zu filtern, im Gegensatz zum Typ des Antwortdatensatzes selbst.  Das führte zu Problemen, da dies bedeutete, dass man keine Regeln schreiben konnte, die bestimmte `CNAME`-Datensätze in Antworten auf `A`- und `AAAA`-Anfragen zuließen. In **v0.108.0** wurde dieses Verhalten geändert, so dass jetzt dieses:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

erlaubt es, die Filterung der folgenden Antwort zu vermeiden:

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

Der `dnsrewrite`-Antwortmodifikator erlaubt es, den Inhalt der Antwort auf die DNS-Anfrage für die entsprechenden Hosts zu ersetzen. Beachten Sie, dass dieser Modifikator in AdGuard Home in allen Regeln funktioniert, in Private AdGuard DNS jedoch nur in benutzerdefinierten Regeln.

:::note

Regeln mit dem Antwortmodifikator `dnsrewrite` haben eine höhere Priorität als andere Regeln in AdGuard Home.

:::

Die Antworten auf alle Anfragen nach einem Host, der einer `dnsrewrite`-Regel entspricht, werden ersetzt. Der Antwortabschnitt der Ersatzantwort enthält nur RRs, die dem Abfragetyp der Anfrage entsprechen, und möglicherweise CNAME-RRs. Beachten Sie, dass dies bedeutet, dass Antworten auf einige Anfragen leer sein können (`NODATA`), wenn der Host einer `dnsrewrite`-Regel entspricht.

Die Kurzsyntax lautet:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Die Schlüsselwörter MÜSSEN in Großbuchstaben geschrieben werden (z.B. `NOERROR`). Keyword-Rewrites haben Vorrang vor anderen und führen zu einer leeren Antwort mit einem entsprechenden Antwortcode.

Die vollständige Syntax hat die Form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

Die `$dnsrewrite` Modifikator mit dem `NOERROR` Der Antwortcode kann ebenfalls leer sein `RRTYPE` und `WERT` Felder.

Der `CNAME` ist besonders, weil AdGuard Home den Host auflöst und seine Informationen in die Antwort einfügt. Das heißt, wenn `example.net` die IP `1.2.3.4`hat, und der Benutzer dies in seinen Filterregeln hat:

```none
||example.com^$dnsrewrite=example.net
! Oder:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

dann lautet die Antwort etwa so:

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

Als nächstes wird der `CNAME` umgeschrieben. Danach werden alle Werte der anderen Datensätze zu einer Antwort zusammengefasst, also so:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

führt zu einer Antwort mit zwei `A`-Datensätzen.

Derzeit unterstützte RR-Typen mit Beispielen:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` fügt einen `PTR`-Eintrag für Reverse DNS hinzu. Reverse-DNS-Anfragen für `1.2.3.4` an den DNS-Server ergeben `example.net`.

  :::note

  Die IP-Adresse MUSS in umgekehrter Reihenfolge angegeben werden. Siehe [RFC 1035][rfc1035].

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

Ausschlussregeln heben die Sperre einer oder aller Regeln auf:

- `@@||example.com^$dnsrewrite` hebt das Sperren aller DNS-Rewrite-Regeln auf.

- `@@||example.com^$dnsrewrite=1.2.3.4` hebt die DNS-Rewrite-Regel auf, die einen `A`-Eintrag mit dem Wert `1.2.3.4` hinzufügt.

:::info

Wenn Sie eine Blockliste pflegen, die in AdGuard DNS und AdGuard Home enthalten ist (d. h. enthalten in [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` Die Regeln werden automatisch herausgefiltert. Falls diese Regeln für Ihre Blockliste erforderlich sind, beantragen Sie bitte die Genehmigung, indem Sie ein neues Issue im Repository [„HostlistsRegistry“][hostlistsregistry] eröffnen.

:::

#### `important` {#important-modifier}

Der `important` Modifikator, der auf eine Regel angewendet wird, erhöht ihre Priorität gegenüber allen anderen Regeln ohne den Modifikator. Sogar über grundlegende Ausnahmeregeln.

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

Die Regeln mit dem Modifikator `badfilter` deaktivieren andere Grundregeln, auf die sie sich beziehen. Dies bedeutet, dass der Text der deaktivierten Regel dem Text der Regel `badfilter` (ohne den Modifikator `badfilter`) entsprechen sollte.

**Beispiele:**

- `||example.com$badfilter` deaktiviert `||example.com`.

- `@@||example.org^$badfilter` deaktiviert `@@||example.org^`.

  :::note

  Der Modifikator `badfilter` funktioniert derzeit nicht mit Regeln im Stil von `/etc/hosts`. `127.0.0.1 example.org$badfilter` wird **nicht** die ursprüngliche Regel `127.0.0.1 example.org` deaktivieren.

  :::

#### `ctag` {#ctag-modifier}

:::note

Der Modifikator `ctag` kann nur in AdGuard Home verwendet werden.

:::

Es ermöglicht, Domains nur für bestimmte Arten von DNS-Client-Tags zu blockieren. Sie können Tags den Clients im AdGuard Home UI zuweisen. Zukünftig planen wir, Tags automatisch zu vergeben, indem wir das Verhalten jedes einzelnen Clients analysieren.

Die Syntax lautet:

```none
$ctag=value1|value2|...
```

Wenn eines der Schlagwörter (Tags) des Clients mit den Werten von `ctag` übereinstimmt, gilt diese Regel für den Client. Die Syntax für den Ausschluss lautet:

```none
$ctag=~value1|~value2|...
```

Wenn eines der Schlagwörter (Tags) des Clients mit den Ausschlusswerten `ctag` übereinstimmt, gilt diese Regel nicht für den Client.

**Beispiele:**

- `||example.org^$ctag=device_pc|device_phone`: sperrt `example.org` für Clients, die als `device_pc` oder `device_phone` gekennzeichnet sind.

- `||example.org^$ctag=~device_phone`: sperrt `example.org` für alle Clients außer denen, die als `device_phone` gekennzeichnet sind.

Die Liste der zulässigen Tags:

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

#### `respgeo` {#respgeo-modifier}

:::note

Der Modifikator `respgeo` kann ausschließlich in AdGuard DNS verwendet werden.

:::

Mit dem Modifikator `respgeo` können Regeln angewendet werden, die auf dem Land oder der ASN der in der DNS-Antwort zurückgegebenen IP-Adresse basieren. Er überprüft die **Ziel**-IP-Adresse — also die IP-Adresse, auf die die Domain aufgelöst wird. Er **überprüft nicht** die IP-Adresse, das Land oder die ASN des Benutzers, des Geräts oder des DNS-Clients.

##### Blockierung nach antwortendem Land

Der Wert des Modifikators muss dem zweistelligen Ländercode im ISO 3166-1-Alpha-2-Format entsprechen. Sie können auch `--` verwenden, um Antworten abzugleichen, bei denen das Land nicht ermittelt werden konnte.

**Beispiele:**

- `||*^$respgeo=US`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort den Vereinigten Staaten zugeordnet ist.
- `||*^$respgeo=FR|DE`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort mit Frankreich oder Deutschland in Verbindung steht.
- `||*^$respgeo=--`: Domains blockieren, wenn das Land der IP-Adresse in der DNS-Antwort unbekannt ist.
- `||*^$respgeo=~--`: Domains blockieren, wenn das Land der IP-Adresse in der DNS-Antwort bekannt ist.
- `@@||whitehouse.gov^`: `whitehouse.gov` zulassen, auch wenn die Domain durch eine Platzhalterregel mit dem Modifikator `respgeo` blockiert ist.
- `@@||example.org^$respgeo=US`: `example.org` zulassen, wenn die IP-Adresse in der DNS-Antwort den Vereinigten Staaten zugeordnet ist.
- `||whitehouse.gov^$respgeo=US`: blockiert `whitehouse.gov` nur dann, wenn die IP-Adresse in der DNS-Antwort mit den Vereinigten Staaten verknüpft ist.
- In diesem Beispiel:

  ```none
  ||whitehouse.gov^
  @@||whitehouse.gov^$respgeo=US
  ```

  `@@||whitehouse.gov^$respgeo=US` wird **nicht** `whitehouse.gov` zulassen, da die erste Regel die Anfrage durch Prüfung der Anfragedaten blockiert, während die zweite versucht, sie durch Prüfung der Antwort zuzulassen.

Sie können `~` verwenden, um die Bedingung zu invertieren:

- `||*^$respgeo=~DE`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort **nicht** Deutschland zugeordnet ist.

**Einschränkungen**

Der `respgeo`-Modifikator verwendet eine einzelne berechnete IP-Adresse und ein Land gemäß der aktuellen *Anfragenprotokoll*-Logik. Wenn eine Domain zu mehreren IP-Adressen oder Ländern aufgelöst wird, analysiert AdGuard DNS nicht alle zurückgegebenen IP-Adressen.

Da viele Domains CDNs, Lastenausgleich oder geografisch verteilte Infrastruktur verwenden, kann sich das erkannte Land im Laufe der Zeit ändern.

Wenn das Land nicht ermittelt werden kann, trifft die GeoIP-Bedingung nicht zu. Verwenden Sie `respgeo=--`, um Antworten mit einem unbekannten Land abzugleichen.

Regeln mit dem Modifikator `respgeo` werden im *Anfragenprotokoll* als reguläre Regeln angezeigt.

##### Blockierung nach ASN

Der `respgeo`-Modifikator kann auch verwendet werden, um Regeln basierend auf der ASN der IP-Adresse anzuwenden, die in der DNS-Antwort zurückgegeben wird.

ASN steht für **Autonomous System Number**. Es identifiziert ein autonomes System — ein Netzwerk, das von einem ISP, Hosting-Anbieter, Cloud-Anbieter, Unternehmen oder einer anderen Organisation betrieben wird.

Dieser Modifikator überprüft die <strong x-id=\"1\">Ziel-ASN</strong> — die ASN, die der IP-Adresse zugeordnet ist, zu der die Domain auflöst. Er überprüft **nicht** die ASN des Benutzers, Geräts oder DNS-Clients.

Der Wert des Modifikators muss eine ASN im Format `AS<number>` sein, zum Beispiel `AS15169`.

**Beispiele:**

- `||*^$respgeo=AS15169`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort zu ASN AS15169 gehört.
- `||*^$respgeo=AS15169|AS8075`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort zum ASN AS15169 oder AS8075 gehört.
- `||*^$respgeo=AS--`: Domains blockieren, wenn die ASN der IP-Adresse in der DNS-Antwort unbekannt ist.
- `||*^$respgeo=~AS--`: Domains blockieren, wenn die ASN der IP-Adresse in der DNS-Antwort bekannt ist.
- `@@||google.com^$respgeo=AS15169`: `google.com` zulassen, wenn die IP-Adresse in der DNS-Antwort zum ASN AS15169 gehört.
- `||google.com^$respgeo=AS15169`: `google.com` nur dann blockieren, wenn die IP-Adresse in der DNS-Antwort zum ASN AS15169 gehört.
- In diesem Beispiel:

  ```none
  ||google.com^
  @@||google.com^$respgeo=AS15169
  ```

  `@@||google.com^$respgeo=AS15169` wird **nicht** `google.com` zulassen, weil die erste Regel die Anfrage durch Auswertung der Anfragedaten blockiert, während die zweite versucht, sie durch Auswertung der Antwort zuzulassen.

Sie können `~` verwenden, um die Bedingung zu invertieren:

- `||*^$respgeo=~AS15169`: Domains blockieren, wenn die IP-Adresse in der DNS-Antwort **nicht** zu ASN AS15169 gehört.

**Einschränkungen**

Der `respgeo`-Modifikator verwendet eine einzelne berechnete IP-Adresse und ASN gemäß der aktuellen *Anfragenprotokoll*-Logik. Wenn eine Domain zu mehreren IP-Adressen oder ASNs aufgelöst wird, analysiert AdGuard DNS nicht alle zurückgegebenen ASNs.

Große CDN-, Cloud- oder Hosting-ASNs können viele nicht miteinander verbundene Websites enthalten. Die Sperrung einer ASN kann daher mehr Domains betreffen als erwartet.

Wenn die ASN nicht ermittelt werden kann, stimmt die ASN-Bedingung nicht überein. Verwenden Sie `respgeo=AS--`, um Antworten mit einem unbekannten ASN abzugleichen.

Eine ASN entspricht nicht immer einem bestimmten Unternehmen, Produkt oder Dienst. Es identifiziert nur das Netzwerk, das mit der aufgelösten IP-Adresse verbunden ist.

Regeln mit dem Modifikator `respgeo` werden im *Anfragenprotokoll* als reguläre Regeln angezeigt.

## `/etc/hosts`-Style-Syntax {#etc-hosts-syntax}

Für jeden Host sollte eine einzelne Zeile mit den folgenden Informationen vorhanden sein:

```none
IP_Adresse canonical_hostname [aliases...]
```

Die Felder der Einträge werden durch eine beliebige Anzahl von Leer- oder Tabulatorzeichen getrennt. Der Text ab dem Zeichen `#` bis zum Ende der Zeile ist ein Kommentar und wird ignoriert.

Hostnamen dürfen nur alphanumerische Zeichen, Bindestrich-Minuszeichen (`-`) und Punkte (`.`) enthalten. Sie müssen mit einem Buchstaben beginnen und mit einem alphanumerischen Zeichen enden. Optionale Aliase ermöglichen Namensänderungen, alternative Schreibweisen, kürzere Hostnamen oder generische Hostnamen (z. B. `localhost`).

**Beispiel:**

```none
# Dies ist ein Kommentar
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # Dies ist auch ein Kommentar
```

In AdGuard Home werden die IP-Adressen verwendet, um DNS-Anfragen für diese Domains zu beantworten. Im Private AdGuard DNS werden diese Adressen einfach blockiert.

## Nur-Domain-Syntax {#domains-only-syntax}

Eine einfache Liste von Domainnamen, ein Name pro Zeile.

**Beispiel:**

```none
# Dies ist ein Kommentar
example.com
example.org
example.net # dies ist auch ein Kommentar
```

Wenn eine Zeichenkette keine gültige Domain ist (z.B. `*.example.org`), wird AdGuard Home sie als [Adblock-Syntax][]-Regel betrachten.

## Hostlists Compiler {#hostlist-compiler}

Wenn Sie eine Blockliste pflegen und darin verschiedene Quellen verwenden, kann der [Hostlist-Compiler][] für Sie nützlich sein. Es ist ein einfaches Hilfsmittel, das die Zusammenstellung einer Sperrliste für Hosts erleichtert, die mit AdGuard Home, Private AdGuard DNS oder jedem anderen AdGuard-Produkt mit DNS-Filterung kompatibel ist.

Was es kann:

1. Zusammenstellung einer einzigen Blockliste aus mehreren Quellen.

2. Streicht die Regeln, die nicht benötigt werden.

3. Bereinigt die resultierende Liste: entfernt Dubletten, entfernt ungültige Regeln und komprimiert die Liste.

<!-- local links -->



<!-- external links -->

[Adblock-Syntax]: #adblock-style-syntax

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry

[Adblock-Stil-Syntax]: #adblock-style-syntax
[client</code>-]: #client-modifier
[`dnstype`]: #dnstype-modifier

[AdGuard DNS filter]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[Hostlist-Compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[traditionellen Adblock-Syntax]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
