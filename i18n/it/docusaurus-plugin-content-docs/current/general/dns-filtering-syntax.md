---
title: Sintassi delle regole di filtraggio DNS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Qui ti mostriamo come scrivere regole di filtro DNS personalizzate da utilizzare nei prodotti AdGuard

Collegamenti rapidi: [Scarica AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Ottieni AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Prova AdGuard DNS](https://agrd.io/download-dns)

:::

## Introduzione {#introduction}

Puoi utilizzare la sintassi delle regole di filtraggio DNS di AdGuard per rendere più flessibili le regole, così che possano bloccare i contenuti a seconda delle tue preferenze. La sintassi delle regole di filtraggio DNS di AdGuard è utilizzabile in diversi prodotti di AdGuard come AdGuard Home, AdGuard DNS, AdGuard per Windows/Mac/Android.

Esistono tre approcci differenti alla scrittura delle liste di blocco degli host:

- [Sintassi in stile Adblock][]: l'approccio moderno alla scrittura di regole di filtraggio, basata sull'utilizzo di un sottoinsieme della sintassi delle regole, in stile Adblock. In questo modo le liste di blocco sono compatibili con i blocca-inserzioni del browser.

- [`/etc/hosts` sintassi](#etc-hosts-syntax): il vecchio approccio collaudato che utilizza la stessa sintassi che i sistemi operativi utilizzano per i file host.

- [Sintassi solo per i domini](#domains-only-syntax): un semplice elenco di nomi di dominio.

Se stai creando un elenco di blocco, consigliamo di utilizzare la [sintassi in stile adblock][]. Ha un paio di vantaggi importanti sulla sintassi in vecchio stile:

- **Dimensioni delle liste di blocco.** L'uso del pattern matching permette di avere una singola regola invece di centinaia di voci `/etc/hosts`.

- **Compatibilità.** La tua lista di blocco sarà compatibile con i blocchi pubblicitari del browser e sarà più facile condividere le regole con un elenco di filtri del browser.

- **Estensibilità.** Nell'ultimo decennio, la sintassi in stile Adblock si è notevolmente evoluta e non vediamo perché non sia possibile estenderla ulteriormente e offrire ulteriori funzionalità per i blocchi a livello della rete.

Se stai mantenendo una lista di blocco in stile `/etc/hosts` o più elenchi di filtraggio (indipendentemente dal tipo), forniamo uno strumento per la compilazione delle liste di blocco. Lo abbiamo denominato [Compilatore di elenchi di host][], e lo utilizziamo noi stessi per creare il [filtro di AdGuard DNS][].

## Esempi essenziali {#basic-examples}

- `||example.org^`: bloccare l'accesso al dominio `example.org` e a tutti i suoi sottodomini, come `www.example.org`.

- `@@||example.org^`: sbloccare l'accesso al dominio `example.org` e a tutti i suoi sottodomini.

- `1.2.3.4 example.org`: (attenzione, vecchia sintassi in stile `/etc/hosts`) in AdGuard Home, risponde con `1.2.3.4` alle richieste per il dominio `example.org`, ma **non** per i relativi sottodomini. In AdGuard DNS Privato, blocca l'accesso a `example.org`. `www.example.org` rimane consentito.

  In AdGuard Home, utilizzare l'indirizzo IP (`0.0.0.0`) non specificato o un indirizzo locale (`127.0.0.1` e simili) per un host è fondamentalmente uguale a bloccare quell'host.

  ```none
  # Restituisce l'indirizzo IP 1.2.3.4 per esempio.org.
  1.2.3.4 esempio.org
  # Blocca esempio.org rispondendo con 0.0.0.0.
  0.0.0.0 esempio.org
  ```

- `esempio.org`: una semplice regola di dominio. Blocca il dominio `esempio.org` ma **non** i suoi sottodomini. `www.esempio.org` rimane consentito.

- `! Ecco un commento` e `# Anche un commento`: commenti.

- `/REGEX/`: bloccare l'accesso ai domini in compatibilità con l'espressione regolare specificata.

## Sintassi in stile Adblock {#adblock-style-syntax}

Si tratta di un sottoinsieme della [sintassi tradizionale in stile Adblock][], usata dai blocca-inserzioni per browser.

```none
     regola = ["@@"] pattern [ "$" modificatori ]
modificatori = [modificatore0, modificatore1[, ...[, modificatoreN]]]
```

- `pattern`: la maschera del nome host. Ogni nome host è abbinato a questa maschera. Il pattern può anche contenere caratteri speciali, i quali sono descritti di seguito.

- `@@`: il marcatore che è utilizzato nelle regole d'eccezione. Inizia la regola con questo marcatore se vuoi disattivare il filtraggio per i nomi host corrispondenti.

- `modificatori`: parametri che chiariscono la regola. Possono limitare la portata della regola o addirittura cambiarne completamente il funzionamento.

### Caratteri speciali {#special-characters}

- `*`: il carattere universale. Viene utilizzato per rappresentare qualsiasi insieme di caratteri. Può anche essere una stringa vuota o una stringa di qualsiasi lunghezza.

- `||`: corrisponde all'inizio di un nome host, compresi eventuali sottodomini. Ad esempio, `||esempio.org` corrisponde a `esempio.org` e `test.esempio.org` ma non `testesempio.org`.

- `^`: il carattere separatore. A differenza del bloccaggio delle inserzioni del browser, non c'è nulla da separare in un nome host, quindi l'unico scopo di questo carattere è contrassegnare la fine del nome host.

- `|`: un puntatore dell'inizio o della fine del nome host. Il valore dipende dalla posizione del carattere nella maschera. Ad esempio, la regola `ample.org|` corrisponde a `esempio.org` ma non a `esempio.org.com`. `|esempio` corrisponde a `esempio.org` ma non a `test.esempio`.

### Espressioni regolari {#regular-expressions}

Se desideri disporre di una flessibilità persino maggiore per creare regole, puoi utilizzare le [espressioni regolari][regexp], invece della sintassi semplificata corrispondente. Se desideri usare un'espressione regolare, il modello deve somigliare al seguente:

```none
pattern = "/" regexp "/"
```

**Esempi:**

- `/example.*/` bloccherà gli host corrispondenti alla regexp `example.*`.

- `@@/example.*/$important` sbloccherà gli host corrrispondenti alla regexp `example.*`. Nota che questa regola implica anche il modificatore `important`.

### Commenti {#comments}

Qualsiasi riga inizi per un punto esclamativo o un simbolo del cancelletto, è un commento e sarà ignorato dal motore di filtraggio. I commenti sono solitamente posti sulle righe e utilizzati per descrivere cosa fa una regola.

**Esempio:**

```none
! Questo è un commento.
# Anche questo è un commento.
```

### Modificatori di regole {#rule-modifiers}

Puoi modificare il comportamento di una regola aggiungendo i modificatori. I modificatori devono essere posti al termine della regola dopo il carattere `$` e separati da virgole.

**Esempi:**

- ```none ||esempio.org^$important
   ```

  `||esempio.org^` è il modello corrispondente. `$` è il delimitatore, che segnala che il resto della regola sono i modificatori. `important` è il modificatore.

- Potresti voler utilizzare più modificatori in una regola. In tal caso, separali con delle virgole:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||esempio.org^` è il modello corrispondente. `<0>$` è il delimitatore, che segnala che il resto della regola sono i modificatori. `client=127.0.0.1` è il modificatore del [`client`][] con il proprio valore, `127.0.0.1`. `,` è il delimitatore tra i modificatori. E, infine, `dnstype=A` è il modificatore [`dnstype`][] avente il proprio valore: `A`.

:::note

Se una regola contiene un modificatore non elencato in questo documento, l'intera regola **dev'essere ignorata**. Così, evitiamo i falsi positivi quando le persone provano a usare liste filtri dei blocca-inserzioni del browser non modificate, come EasyList o EasyPrivacy.

:::

#### `client` {#client-modifier}

:::note

Il modificatore `client` può essere utilizzato solo in AdGuard Home e AdGuard DNS.

:::

Il modificatore `client` consente di specificare i client a cui è applicata questa regola. Esistono due metodi principali per identificare un client:

- Secondo il suo indirizzo IP o secondo il prefisso CIDR. Questo metodo funziona per tutti i tipi di client.

- Secondo il loro nome. Questo metodo funziona soltanto per i client persistenti (in AdGuard Home) e dispositivi (nel DNS Privato di AdGuard), che hai aggiunto manualmente.

  :::note

  In AdGuard Home, i ClientID non sono attualmente supportati, solo i nomi lo sono. Se hai aggiunto un client con il nome "Il mio client" e ClientID `my-client`, scrivi il tuo modificatore come `$client='My Client'` invece di `$client=my-client`.

  :::

La sintassi è:

```none
$client=value1|value2|...
```

Inoltre, puoi escludere i client aggiungendo un carattere `~` prima del valore. In questo caso, la regola non è da applicarsi alle richieste DNS del client.

```none
$client=~value1
```

Solitamente, i nomi del client contengono spazi o altri caratteri speciali, per cui dovresti racchiudere il nome tra virgolette. Sono supportate sia le virgolette singole che doppie, in ASCII. Utilizza la barra rovesciata (`\`) per evadere le virgolette (`"` e `'`), le virgole (`,`) e le barre verticali (`|`).

:::note

Quando escludi un client, **devi** posizionare `~` all'esterno delle virgolette.

:::

**Esempi:**

- `@@||*^$client=127.0.0.1`: sblocca tutto per localhost.

- `||example.org^$client='Frank\'s laptop'`: blocca `example.org`, soltanto per il client denominato `Frank's laptop`. Nota che la virgoletta (`'`) nel nome dev'essere evasa.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: blocca `example.org` per tutti, tranne che per il client denominato `Mary's, John's, and Boris's laptops`. Nota che anche la virgola (`,`) dev'essere evasa.

- `||example.org^$client=~Mom|~Dad|Kids`: blocca `example.org` per `Kids`, ma non per `Mom` e `Dad`. Questo esempio dimostra come specificare più client in una regola.

- `||example.org^$client=192.168.0.0/24`: blocca `example.org` per tutti i client con gli indirizzi IP da `192.168.0.0` a `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

Puoi utilizzare il modificatore `denyallow` per escludere i domini dalla regola di blocco. Per aggiungere più domini a una regola, utilizza il carattere `|` come un separatore.

La sintassi è:

```none
$denyallow=domain1|domain2|...
```

Questo modificatore consente di evitare la creazione di regole d'eccezione non necessarie quando la regola di blocco copre troppi domini. Potresti voler bloccare tutto tranne un paio di domini TLS. Puoi utilizzare l'approccio standard, ovvero regole come questa:

```none
! Blocca tutto.
/.*/

! Sblocca un paio di TLD.
@@||com^
@@||net^
```

Il problema con questo approccio è che, così, sbloccherai anche i domini di tracciamento situati su quei TLD (ad esempio, `google-analytics.com`). Ecco come risolvere questo con `denyallow`:

```none
*$denyallow=com|net
```

**Esempi:**

- `*$denyallow=com|net`: blocca tutto tranne `*.com` e `*.net`.

- `@@*$denyallow=com|net`: sblocca tutto tranne `*.com` e `*.net`.

- `||example.org^$denyallow=sub.example.org`: blocca `example.org` e `*.example.org`, ma non bloccare `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

Il modificatore `dnstype` consente di specificare il tipo di richiesta o risposta DNS su cui sarà innescata questa regola.

La sintassi è:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

I nomi dei tipi non fanno distinzione tra maiuscole e minuscole, ma sono convalidati rispetto a una serie di tipi di registri di risorse DNS reali (RR).

Non combinare le regole d'esclusione con quelle d'inclusione. Questo:

```none
$dnstype=~value1|value2
```

equivale a questo:

```none
$dnstype=value2
```

**Esempi:**

- `||example.org^$dnstype=AAAA`: blocca le richieste DNS per gli indirizzi IPv6 di `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: consenti soltanto le richieste DNS di `A` e `CNAME` per `example.org`, blocca il resto.

:::note

Prima della versione **v0.108.0**, AdGuard Home usava il tipo di richiesta per filtrare i registri delle risposte, invece che il tipo degli stessi registri di risposte.  Ciò causava problemi, poiché ciò significava che non era possibile scrivere regole che consentissero certi registri `CNAME` nelle risposte, nelle richieste `A` e `AAAA`. Nella **v0.108.0**, tale comportamento è stato modificato, cosicché ora:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

ti consente di evitare il filtraggio della seguente risposta:

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

Il modificatore della risposta `dnsrewrite` consente la sostituzione dei contenuti della risposta alla richiesta DNS per gli host corrispondenti. Nota che questo modificatore in AdGuard Home, funziona in tutte le regole, mentre in AdGuard DNS privato soltanto in quelle personalizzate.

:::note

Le regole con il modificatore di risposta `dnsrewrite` hanno una priorità maggiore rispetto alle altre regole in AdGuard Home e AdGuard DNS.

:::

Le risposte a tutte le richieste per un host che corrisponde a una regola `dnsrewrite` verranno sostituite. La sezione delle risposte della risposta sostitutiva conterrà solo i record di risorse (RR) che corrispondono al tipo di query della richiesta e, possibilmente, i record di risorse CNAME. Si noti che questo significa che le risposte a alcune richieste potrebbero diventare vuote (`NODATA`) se l'host corrisponde a una regola `dnsrewrite`.

La sintassi abbreviata è:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Le parole chiave DEVONO essere in maiuscole (es. `NOERROR`). La riscrittura delle parole chiave ha la precedenza sulle altre e risulterà in una risposta vuota con un codice di risposta appropriato.

La sintassi completa è nella forma `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

Il modificatore `$dnsrewrite` con il codice di risposta `NOERROR` potrebbe anche avere i campi vuoti `RRTYPE` e `VALUE`.

Il campo `CNAME` è speciale perché AdGuard Home risolverà lo host e ne aggiungerà le informazioni alla risposta. Cioè, se `example.net` ha un IP `1.2.3.4` e l'utente ha questo nelle proprie regole del filtro:

```none
||example.com^$dnsrewrite=example.net
! O:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

allora la risposta somiglierà a questa:

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

Poi, `CNAME` viene riscritto. Dopodiché, tutti gli altri valori delle registrazioni sono sommati come una risposta, cosicché:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

risulterà in una risposta con due registri `A`.

Tipi RR supportati al momento con esempi:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` aggiunge un registro `PTR` per il DNS inverso. Le richieste al DNS inverso per `1.2.3.4` al server DNS risulteranno in `example.net`.

  :::note

  L'IP DEVE essere in ordine inverso. Consulta [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` aggiunge un registro `A` con il valore `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` aggiunge un registro `AAAA` con il valore `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` aggiunge un registro `CNAME`. Vedi la spiegazione sopra.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` aggiunge un registro `HTTPS`. È supportato soltanto un sottoinsieme di valori del parametro: i valori devono essere `contigui` e, laddove è `previsto` un `elenco di valori`, soltanto un valore è correntemente supportato:

   ```none
   ipv4hint=127.0.0.1             // Supportato.
   ipv4hint="127.0.0.1"           // Non supportato.
   ipv4hint=127.0.0.1,127.0.0.2   // Non supportato.
   ipv4hint="127.0.0.1,127.0.0.2" // Non supportato.
   ```

  Ciò cambierà in futuro.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` aggiunge un registro `MX` con valore di precedenza `32` e valore di scambio `example.mail`.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` aggiunge un valore `SVCB`. Consulta l'esempio `HTTPS` sopra.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` aggiunge un registro `TXT` con il valore `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` aggiunge un registro `SRV` con valore prioritario `10`, valore ponderato `60`, porta `8080` e valore di destinazione `example.com`.

- `||example.com^$dnsrewrite=NXDOMAIN;;` risponde con un codice `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` risponde con una risposta `NOERROR` vuota per tutte le richieste `AAAA` tranne quelle per `example.org`.

Le regole di eccezione sbloccano una o tutte le regole:

- `@@||example.com^$dnsrewrite` sblocca tutte le regole di riscrittura DNS.

- `@@||example.com^$dnsrewrite=1.2.3.4` sblocca la regola di riscrittura DNS che aggiunge un registro `A` con il valore `1.2.3.4`.

:::info

Se mantieni una lista di blocco inclusa in AdGuard DNS e AdGuard Home (ossia inclusa in [HostlistsRegistry][hostlistsregistry]), le regole `$dnsrewrite` verranno escluse automaticamente. Se queste regole sono necessarie per la tua lista blocchi, ti preghiamo di richiedere permesso aprendo un nuovo problema nel [dispensario HostlistsRegistry][hostlistsregistry].

:::

#### `important` {#important-modifier}

Il modificatore `important` applicato a una regola ne incrementa la priorità rispetto qualsiasi altra regola priva del modificatore. Anche rispetto alle regole d'eccezione di base.

**Esempi:**

- In questo esempio:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` bloccherà tutte le richieste a `*.example.org`, nonostante la regola d'eccezione.

- In questo esempio:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  anche la regola d'eccezione contiene il modificatore `important`, quindi funzionerà.

#### `badfilter` {#badfilter-modifier}

Le regole con il modificatore `badfilter` disabilitano le altre regole di base a cui fanno riferimento. Ciò significa che il testo della regola disabilitata dovrebbe corrispondre al testo della regola `badfilter` (senza il modificatore `badfilter`).

**Esempi:**

- `||example.com$badfilter` disabilita `||example.com`.

- `@@||example.org^$badfilter` disabilita `@@||example.org^`.

  :::note

  Il modificatore `badfilter` attualmente non funziona con le regole in stile `/etc/hosts`. `127.0.0.1 example.org$badfilter` **non** disabiliterà la regola originale di `127.0.0.1 example.org`.

  :::

#### `ctag` {#ctag-modifier}

:::note

Il modificatore `ctag` è utilizzabile soltanto su AdGuard Home.

:::

Consente di bloccare i domini soltanto per tipi specifici di tag del client DNS. Puoi assegnare tag ai client nell'interfaccia utente di AdGuard Home. In futuro, pianifichiamo di assegnare i tag automaticamente, analizzando il comportamento di ogni client.

La sintassi è:

```none
$ctag=value1|value2|...
```

Se i tag di uno dei client corrispondono ai valori `ctag`, questa regola si applica al client. La sintassi per l'esclusione è:

```none
$ctag=~value1|~value2|...
```

Se uno dei tag del client corrisponde ai valori dell'esclusione `ctag`, questa regola non si applica al client.

**Esempi:**

- `||example.org^$ctag=device_pc|device_phone`: blocca `example.org` per i client contrassegnati come `device_pc` o `device_phone`.

- `||example.org^$ctag=~device_phone`: blocca `example.org` per tutti i client tranne quelli contrassegnati come `device_phone`.

L'elenco di tag consentiti:

- Per tipo di dispositivo:

    - `device_audio`: dispositivi audio.
    - `device_camera`: fotocamere.
    - `device_gameconsole`: console da gioco.
    - `device_laptop`: portatili.
    - `device_nas`: NAS (Archiviazioni di rete).
    - `device_pc`: PC.
    - `device_phone`: telefoni.
    - `device_printer`: stampanti.
    - `device_securityalarm`: allarmi di sicurezza.
    - `device_tablet`: tablet.
    - `device_tv`: TV.
    - `device_other`: altri dispositivi.

- Per sistema operativo:

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: altri OS.

- Per gruppo di utenti:

    - `user_admin`: amministratori.
    - `user_regular`: utenti regolari.
    - `user_child`: bambini.

#### `respgeo` {#respgeo-modifier}

:::note

Il modificatore `respgeo` può essere utilizzato solo in AdGuard DNS.

:::

Il modificatore `respgeo` consente di applicare regole in base al Paese o all'ASN dell'indirizzo IP restituito nella risposta DNS. Controlla l'indirizzo IP di **destinazione**, ovvero l'indirizzo IP a cui viene risolto il dominio. **Non** verifica l'indirizzo IP, il Paese o l'ASN dell'utente, del dispositivo o del client DNS.

##### Blocco in base al Paese della risposta

Il valore del modificatore deve essere un codice paese di due lettere nel formato ISO 3166-1 alpha-2. Puoi anche usare `--` per trovare le risposte per le quali non è stato possibile determinare il Paese.

**Esempi:**

- `||*^$respgeo=US`: blocca i domini se l'indirizzo IP nella risposta DNS è associato agli Stati Uniti.
- `||*^$respgeo=FR|DE`: blocca i domini se l'indirizzo IP nella risposta DNS è associato alla Francia o alla Germania.
- `||*^$respgeo=--`: blocca i domini se il Paese dell'indirizzo IP nella risposta DNS è sconosciuto.
- `||*^$respgeo=~--`: blocca i domini se il Paese dell'indirizzo IP nella risposta DNS è noto.
- `@@||whitehouse.gov^`: consente `whitehouse.gov`, anche se è bloccato da una regola con carattere generale con il modificatore `respgeo`.
- `@@||example.org^$respgeo=US`: consenti `example.org` se l'indirizzo IP nella risposta DNS è associato agli Stati Uniti.
- `||whitehouse.gov^$respgeo=US`: blocca `whitehouse.gov` solo se l'indirizzo IP nella risposta DNS è associato agli Stati Uniti.
- In questo esempio:

  ```none
  ||whitehouse.gov^
  @@||whitehouse.gov^$respgeo=US
  ```

  `@@||whitehouse.gov^$respgeo=US` **non** consentirà `whitehouse.gov`, perché la prima regola blocca la query esaminando i dati della richiesta, mentre la seconda tenta di consentirla esaminando la risposta.

Puoi usare `~` per invertire la condizione:

- `||*^$respgeo=~DE`: blocca i domini se l'indirizzo IP nella risposta DNS **non** è associato alla Germania.

**Limitazioni**

Il modificatore `respgeo` utilizza un unico indirizzo IP calcolato e un unico paese in base alla logica corrente del *Registro delle richieste*. Se un dominio viene risolto in più indirizzi IP o paesi, AdGuard DNS non analizza tutti gli indirizzi IP restituiti.

Poiché molti domini utilizzano CDN, bilanciamento del carico o infrastrutture distribuite geograficamente, il Paese rilevato può cambiare nel tempo.

Se non è possibile determinare il Paese, la condizione GeoIP non troverà corrispondenza. Usa `respgeo=--` per trovare corrispondenze con le risposte provenienti da un Paese sconosciuto.

Le regole con il modificatore `respgeo` vengono visualizzate nel *Registro delle richieste* come regole normali.

##### Blocco per ASN

Il modificatore `respgeo` può essere utilizzato anche per applicare regole basate sull'ASN dell'indirizzo IP restituito nella risposta DNS.

ASN sta per **numero di sistema autonomo**. Identifica un sistema autonomo, ovvero una rete gestita da un ISP, un provider di hosting, un provider cloud, un'azienda o un'altra organizzazione.

Questo modificatore controlla l'**ASN di destinazione**, ovvero l'ASN associato all'indirizzo IP in cui viene risolto il dominio. **Non** verifica l'ASN dell'utente, del dispositivo o del client DNS.

Il valore del modificatore deve essere un ASN nel formato `AS<number>`, ad esempio `AS15169`.

**Esempi:**

- `||*^$respgeo=AS15169`: blocca i domini se l'indirizzo IP nella risposta DNS appartiene all'ASN AS15169.
- `||*^$respgeo=AS15169|AS8075`: blocca i domini se l'indirizzo IP nella risposta DNS appartiene all'ASN AS15169 o AS8075.
- `||*^$respgeo=AS--`: blocca i domini se l'ASN dell'indirizzo IP nella risposta DNS è sconosciuto.
- `||*^$respgeo=~AS--`: blocca i domini se l'ASN dell'indirizzo IP nella risposta DNS è noto.
- `@@||google.com^$respgeo=AS15169`: consente `google.com` se l'indirizzo IP nella risposta DNS appartiene all'ASN AS15169.
- `||google.com^$respgeo=AS15169`: blocca `google.com` solo se l'indirizzo IP nella risposta DNS appartiene all'ASN AS15169.
- In questo esempio:

  ```none
  ||google.com^
  @@||google.com^$respgeo=AS15169
  ```

  `@@||google.com^$respgeo=AS15169` **non** consentirà `google.com`, perché la prima regola blocca la query esaminando i dati della richiesta, mentre la seconda tenta di consentirla esaminando la risposta.

Puoi usare `~` per invertire la condizione:

- `||*^$respgeo=~AS15169`: blocca i domini se l'indirizzo IP nella risposta DNS **non** appartiene all'ASN AS15169.

**Limitazioni**

Il modificatore `respgeo` utilizza un singolo indirizzo IP calcolato e un ASN in base alla logica corrente del *Registro delle richieste*. Se un dominio viene risolto in più indirizzi IP o ASN, AdGuard DNS non analizza tutti gli ASN restituiti.

Gli ASN di grandi dimensioni relativi a CDN, cloud o hosting possono contenere numerosi siti web non correlati tra loro. Il blocco di un ASN potrebbe pertanto interessare più domini del previsto.

Se non è possibile determinare l'ASN, la condizione ASN non corrisponderà. Usa `respgeo=AS--` per trovare corrispondenza con risposte con un ASN sconosciuto.

L'ASN non corrisponde sempre a un'azienda, un prodotto o un servizio specifico. Identifica solo la rete associata all'indirizzo IP risolto.

Le regole con il modificatore `respgeo` vengono visualizzate nel *Registro delle richieste* come regole normali.

## Sintassi in stile `/etc/hosts` {#etc-hosts-syntax}

Per ogni host, una singola riga dovrebbe presentare le seguenti informazioni:

```none
IP_address canonical_hostname [aliases...]
```

I campi delle voci sono separati da un numero qualsiasi di caratteri di spazio o tabulazione. Il testo dal carattere `#` fino alla fine della riga è un commento e viene ignorato.

I nomi del host potrebbero contenere soltanto caratteri alfanumerici, segni meno (`-`) e punti (`.`). Devono iniziare per un carattere alfabetico e terminare per un carattere alfanumerico. Gli alias facoltativi forniscono modifiche al nome, ortografie alternative, nomi degli host più brevi o generici (ad esempio, `localhost`).

**Esempio:**

```none
# Questo è un commento
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # anche questo è un commento
```

Su AdGuard Home, gli indirizzi IP sono utilizzati per rispondere alle richieste DNS per tali domini. Su AdGuard DNS privato, questi indirizzi sono semplicemente bloccati.

## Sintassi esclusiva per domini {#domains-only-syntax}

Un semplice elenco di nomi di dominio, uno per riga.

**Esempio:**

```none
# Questo è un commento
example.com
example.org
example.net # anche questo è un commento
```

Se una stringa non è un dominio valido (ad es. `*.example.org`), AdGuard Home la considererà una regola con [sintassi in stile Adblock][].

## Compilatore di elenchi di host {#hostlist-compiler}

Se stai mantenendo una lista blocchi e vi usi fonti differenti, il [Compilatore di elenchi di host][] può tornarti utile. È un semplice strumento che facilita la compilazione di una lista di blocco degli host compatibile con AdGuard Home, AdGuard DNS Privato o qualsiasi altro prodotto AdGuard dotato di filtraggio DNS.

Cosa può fare:

1. Compilare un singolo elenco di blocco da più fonti.

2. Escludere le regole che non ti sono necessarie.

3. Ripulisci l'elenco risultante: elimina i duplicati, rimuovi le regole non valide e comprimi l'elenco.

<!-- local links -->



<!-- external links -->

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry

[Sintassi in stile Adblock]: #adblock-style-syntax

[sintassi in stile adblock]: #adblock-style-syntax
[`client`]: #client-modifier

[sintassi in stile Adblock]: #adblock-style-syntax
[`dnstype`]: #dnstype-modifier

[filtro di AdGuard DNS]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Compilatore di elenchi di host]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[sintassi tradizionale in stile Adblock]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
