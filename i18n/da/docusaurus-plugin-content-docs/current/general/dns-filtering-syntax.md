---
title: Syntaks for DNS-filtreringsregler
sidebar_position: 2
---

## Introduktion

AdGuard DNS-filtreringsregelsyntaks kan bruges til at gøre regler mere fleksible, så de kan blokere indhold iht. personlige præferencer. AdGuard DNS-filtreringsregelsyntaks kan bruges i forskellige AdGuard-produkter, såsom AdGuard Home, AdGuard DNS, AdGuard til Windows/Mac/Android.

Der er tre forskellige tilgange til at skrive værtsblokeringslister:

* [Adblock-syntakstype](#adblock-style-syntax): Den moderne tilgang til at skrive filtreringsregler baseret på brug af et undersæt af Adblock-regelsyntaksen. På denne måde er blokeringslister kompatible med browser-adblockere.

* [`/etc/hosts` syntaks](#etc-hosts-syntax): Den gamle, gennemprøvede tilgang, der bruger samme værtsfilsyntakser som operativsystemerne.

* [Syntaks kun til domæner](#domains-only-syntax): En simpel liste over domænenavne.

Opretter man en blokeringsliste, anbefales brug af [Adblock-syntakstypen](#adblock-style-syntax). Den har et par vigtige fordele ift. den gamle syntakstype:

* **Blokeringslistestørrelse.** Ved at bruge mønstertilpasning kan man have én enkelt regel i stedet for hundredvis af `/etc/hosts`-poster.

* **Kompatibilitet.** Blokeringslisten vil være kompatibel med browser-adblockere, og regler kan nemmere deles med en browser-filtreringsliste.

* **Udvidelsesmuligheder.** I det seneste årti har Adblock-syntakstypen udviklet sig meget, og vi ser ingen grund til ikke at udvide den endnu mere og tilbyde yderligere funktioner til netværksniveau-blockere.

Vedligeholder man enten en `/etc/hosts`-blokeringslistetype, eller flere filtreringslister (uanset type), tilbyder vi et værktøj til brug for kompilering af blokeringslister. Vi har kaldt det [Hostlist compiler][hlc], og vi bruger det selv til oprettelse af [AdGuard DNS-filtre][sdn].

## Basiseksempler

* `||eksempel.org^`: blokér domæneadgang for `eksempel.org` og alle dets underdomæner, f.eks. `www.eksempel.org`.

* `||eksempel.org^`: Afblokér domæneadgang til `eksempel.org` og alle dets underdomæner.

* `1.2.3.4 eksempel.org`: (Bemærk, gammel `/etc/hosts`-syntakstype) i AdGuard Home, svar med `1.2.3.4` på forespørgsler for `eksempel.org`-domænet, men **ikke** dets underdomæner. Blokér i Privat AdGuard DNS adgangen til `eksempel.org`. `www.eksempel.org` forbliver tilladt.

  I AdGuard Home er brug af den uspecificerede IP-adresse (`0.0.0.0`) eller en lokal adresse (`127.0.0.1` o.lign.) for en vært essentielt det samme som at blokere denne vært.

  ```none
  # Returnerer IP-adressen 1.2.3.4 for eksempel.org.
  1.2.3.4 example.org
  # Blocks example.org by responding with 0.0.0.0.
  0.0.0.0 example.org
  ```

* `eksempel.org`: En simpel domæneregel. Blocks the `example.org` domain but **not** its subdomains. `www.eksempel.org` forbliver tilladt.

* `! Her angives en kommentar` og `# Også en kommentar`: Kommentarer.

* `/REGEX/`: Blokér adgang til domæner matchende det angivne regulære udtryk.

## Adblock-syntakstype

Dette er et undersæt af den [traditionelle Adblock-syntakstype][adb] brugt af browser-adblockere.

```none
     regel = ["@@"] mønster [ "$" modifikatorer ]
modifikatorer = [modifikator0, modifikator1[, ...[, modifikatorN]]]
```

* `mønster`: Værtsnavnmasken. Alle værtsnavne matches mod denne maske. Mønsteret kan også indeholde specialtegn, som beskrevet nedenfor.

* `@@`: den markør, der bruges i undtagelsesreglerne. Ønskes filtrering for de matchende værtsnavne deaktiveret, så start reglen med denne markør.

* `modifikatorer`: Parametre, som tydeliggør reglen. De kan begrænse reglens udstrækning eller endda helt ændre måden, den fungerer på.

### Specialtegn

* `*`: jokertegnet. It is used to represent any set of characters. Dette kan også være en tom streng eller en streng af enhver længde.

* `||`: Matcher begyndelsen af et værtsnavn, inkl. ethvert underdomæne. F.eks. så matcher `||eksempel.org` `eksempel.org` og `test.eksempel.org`, men ikke `testeksempel.org`.

* `^`: separatortegnet. Ulig browser-adblocking, er der intet at adskille/opdele i et værtsnavn, så det eneste formål med dette tegn er at markere slutningen på værtsnavnet.

* `|`: En markør for begyndelsen eller slutningen på værtsnavnet. Værdien afhænger af tegnplaceringen i masken. F.eks. svarer reglen `emple.org|` til `eksempel.org`, men ikke til `eksempel.org.com`. `|eksempe` korresponderer med `eksempel.org`, men ikke med `test.eksempel`.

### Regulære udtryk

Ønskes endnu mere fleksibilitet ved regeludarbejdelse, kan man bruge [regulære udtryk][regexp] i stedet for standarden, den forenklede syntaksmatchning. Vil man bruge et regulært udtryk, skal mønsteret se således ud:

```none
mønster = "/" regexp "/"
```

**Eksempler:**

* `/eksempel.*/` blokerer værter matchende `eksempel.*`-regexp'et.

* `@@/eksempel.*/$important` afblokerer værter matchende `eksempel.*`-regexp'et. Bemærk, at denne regel også forudsætter `important`-modifikatoren.

### Kommentarer

Enhver linje startende med et udråbstegn eller et hash-tegn ses som en kommentar, og ignoreres derfor af filtreringsmotoren. En kommentarer beskriver, hvad en regel gør, og den placeres normalt over reglen.

**Eksempel:**

```none
! Dette er en kommentar.
# Dette er også en kommentar.
```

### Regelmodifikatorer

Man kan ændre adfærden for en regel ved at tilføje modifikatorer. Modifikatorer skal placeres i slutningen af reglen efter `$`-tegnet og adskilles med kommaer.

**Eksempler:**

* ``` ingen ||eksempel.org^$important
   ```

  `||eksempel.org^` er det matchende mønster. `$` er afgrænsningstegnet, der signalerer, at resten af reglen er modifikatorer. "important" er modifikationen.

* Man ønsker måske at bruge flere modifikatorer i en regel. Adskil dem i så fald med kommaer:

  ```ingen
  ||eksempel.org^$client=127.0.0.1,dnstype=A
  ```

  `||eksempel.org^` er det matchende mønster. `$` er afgrænsningstegnet, der signalerer, at resten af reglen er modifikatorer. `client=127.0.0.1` is the [`client`](#client) modifier with its value, `127.0.0.1`, is the delimiter. Og endelig er `dnstype=A` [`dnstype`](#dnstype)-modifikatoren med sin værdi `A`.

**BEMÆRK:** Indeholder en regel en modifikator, der ikke er angivet i dette dokument, skal hele regel **ignoreres**. På denne måde undgås falske positiver, når folk forsøger at bruge umodificerede browser-adblockingfilterlister, såsom EasyList eller EasyPrivacy.

#### `client`

Modifikatoren `klient` muliggør at angive de klienter, for hvilke denne regel anvendes. Der er to hovedmåder, en klient kan identificere på:

* Via deres IP-adresse eller CIDR-præfiks. Denne måde fungerer for alle slags klienter.

* Via deres navn. Denne måde fungerer kun for vedvarende klienter (i AdGuard Home) og enheder (i Private AdGuard DNS), som man manuelt har tilføjet.

  **BEMÆRK:** I AdGuard Home understøttes ClientID'er ikke pt., kun navne. Har man tilføjet en klient med navnet "Min Klient" og klient-id `min-klient`, så bogstavér modifikatoren `$client='Min Klient'` i modsætning til `$client=min-klient`.

Syntaksen er:

```none
$client=værdi1|værdi2|...
```

Man kan også udelukke klienter ved at tilføje et `~`-tegn før værdien. Reglen vil så ikke blive anvendt på DNS-forespørgsler fra denne klient.

```none
$client=~værdi1
```

Klientnavne indeholder normalt mellemrum eller andre specialtegn, hvorfor man bør sætte navnet i anførselstegn. Både enkelte og dobbelte ASCII-anførselstegn understøttes. Brug omvendt skråstreg (`\`) til at escape anførselstegnene (`"` og `'`), kommaer (`,`) og pipes (`|`).

**NOTE:** When excluding a client, you **must** keep `~` out of the quotes.

**Eksempler:**

* `@@||*^$client=127.0.0.1`: Afblokér alt for localhost.

* `||eksempel.org^$client='Frank\'s bærbare'`: Blokér kun `eksempel.org` for klienten med navnet `Frank's bærbare`. Bemærk, at anførselstegnet (`'`) i navnet skal escapes.

* `||eksmpel.org^$client=~'Mary\'s\, John\'s\ og Boris\'s bærbarer'`: Blokér `eksmpel.org` for alle undtagen for klientnavnene `Mary's, John's og Boris' bærbarer`. Bemærk, at komma (`,`) også skal escapes.

* `||eksempel.org^$client=~Mor|~Far|Børn`: Blokér `eksempel.org` for `Børn`, men ikke for `Mor` og `Far`. Dette eksempel viser, hvordan man angiver flere klienter i én regel.

* `||eksempel.org^$client=192.168.0.0/24`: Blokér `eksempel.org` for alle klienter med IP-adresser i området fra `192.168.0.0` til `192.168.0.255`.

#### `denyallow`

Man kan bruge `denyallow`-modifikatoren til at udelukke domæner fra blokeringsreglen. For at tilføje flere domæner til én regel, så benyt `|`-tegnet som separator.

Syntaksen er:

```none
$denyallow=domæne1|domæne2|...
```

Denne modifikator muliggør at undgå at oprette unødvendige undtagelsesregler, når vores blokeringsregel dækker for mange domæner. You may want to block everything save for a couple of TLD domains. Man kan bruge standardmetoden, dvs. regler som denne:

```none
! Blokér alt.
/.*/

! Afblokér et par TLD'er.
@@||com^
@@||net^
```

Problemet med denne tilgang er, at man på denne måde også afblokerer sporingsdomæner, som findes på disse TLD'er (f.eks. `google-analytics.com`). Sådan løses dette med `denyallow`:

```none
*$denyallow=com|net
```

**Eksempler:**

* `*$denyallow=com|net`: block everything save for `*.com` and `*.net`.

* `@@*$denyallow=com|net`: unblock everything save for `*.com` and `*.net`.

* `||eksempel.org^$denyallow=under.eksempel.org`. blokér `eksempel.org` og `*.eksempel.org`, men blokér ikke `under.eksempel.org`.

#### `dnstype`

`dnstype`-modifikatoren muliggør angivelse af DNS-forespørgsel eller svartype, for hvilken denne regel vil blive udløst.

Syntaksen er:

```none
$dnstype=værdi1|værdi2|...
$dnstype=~værdi1|~værdi2|~...
```

Typenavnene er minuskel-/majuskelufølsomme, men valideres mod et sæt reelle DNS-ressourceposttyper (RR).

Kombinér ikke udelukkelsesregler med inklusionsregler. Dette:

```none
$dnstype=~værdi1|~værdi2
```

svarer til dette:

```none
$dnstype=værdi2
```

**Eksempler:**

* `||eksemple.org^$dnstype=AAAA`: Blokér DNS-forespørgsler for IPv6-adresserne på `eksemple.org`.

* `||eksemple.org^$dnstype=~A|~CNAME`: Tillad kun `A` og `CNAME` DNS-forespørgsler for `eksemple.org`, blokér resten.

**BEMÆRK:** Før version **v0.108.0,** ville AdGuard Home bruge forespørgselstypen til at filtrere svarposterne, i modsætning til selve svarposttypen.  Det gav problemer, da det betød, at man ikke kunne skrive regler, der ville tillade visse `CNAME`-poster i svar i `A`- og `AAAA`-forespørgsler. I **v0.108.0** blev denne adfærd ændret, så den nu er:

```none
||canon.eksempel.com^$dnstype=~CNAME
```

giver mulighed for at undgå filtrering af det flg. svar:

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

`dnsrewrite`-svarmodifikatoren muliggør at erstatte indholdet af svaret på DNS-forespørgslen for de matchende værter. Bemærk, at denne modifikator i AdGuard Home fungerer i alle regler, men kun i tilpassede regler i Privat AdGuard DNS.

**Regler med `dnsrewrite`-svarmodifikatoren har højere prioritet end andre regler i AdGuard Home.**

Stenografisyntaksen er:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=eksempel.net
$dnsrewrite=REFUSED
```

Nøgleordene SKAL være versaler (f.eks. `NOERROR`). Nøgleordsomskrivninger har forrang over de andre og vil resultere i et tomt svar med en passende svarkode.

Den fulde syntaksform er `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;eksempel.net
$dnsrewrite=REFUSED;;
```

`$dnsrewrite`-modifikatoren med `NOERROR`-svarkoden kan også have tomme `RRTYPE`- og `VALUE`-felter.

`CNAME` er speciel, idet AdGuard Home vil opløse værten og føje dens oplysninger til svaret. Dvs., hvis `eksempel.net` har IP `1.2.3.4`, og brugeren har dette i sine filterregler:

```none
||eksempel.com^$dnsrewrite=eksempel.net
! Eller:
||eksempel.com^$dnsrewrite=FEJL;CNAME;eksempel.net
```

så vil svaret være noget i retning af:

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

Dernæst `CNAME`-omskrivningen. Derefter opsummeres alle andre posters værdier til ét svar, så dette:

```none
||eksempel.com^$dnsrewrite=NOERROR;A;1.2.3.4
||eksempel.dk^$dnsrewrite=NOERROR;A;1.2.3.5
```

vil resultere i et svar med to `A`-poster.

Aktuelt understøttede RR-typer med eksempler:

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

Undtagelsesregler fjerner en eller alle regler:

* `@@||eksempel.com^$dnsrewrite` fjerner alle DNS rewrite-regler.

* `@@||eksempel.com^$dnsrewrite=1.2.3.4` fjerner DNS rewrite-reglen, der tilføjer en `A`-post med værdien `1.2.3.4`.

#### `important`

`important`-modifikatoren anvendt på en regel, øger dens prioritet over alle andre regler uden modifikatoren. Selv over basisundtagelsesregler.

**Eksempler:**

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

Reglerne med `badfilter`-modifikatoren deaktiverer andre basisregler, til hvilke de henviser. Det betyder, at teksten i den deaktiverede regel bør matche teksten i reglen `badfilter` (uden `badfilter`-modifikatoren).

**Eksempler:**

* `||eksempel.com$badfilter` dealtiverer `||eksempel.com`.

* `@@||eksempel.org^$badfilter` deaktiverer `@@||eksempel.org^`.

  **BEMÆRK:** `badfilter`-modifikatoren fungerer ikke pt. med `/etc/hosts`-regeltyper. `127.0.0.1 eksempel.org$badfilter` deaktiverer **ikke** den oprindelige `127.0.0.1 eksempel.org`-regel.

#### `ctag`

**`ctag`-modifikatoren kan kun bruges i AdGuard Home.**

Det muliggør blokering af domæner for bestemte typer DNS-klienttags. Man kan tildele tags til klienter i AdGuard Home-UI'en. I fremtiden planlægger vi at tildele tags automatisk ved at analysere hver klients adfærd.

Syntaksen er:

```none
$ctag=værdi1|værdi2|...
```

Matcher en klients tags `ctag`-værdierne, gælder denne regel for klienten. Syntaksen for undtagelse er:

```none
$ctag=~value1|~value2|...
```

Matcher en klients tags udelukkelses `ctag`-værdierne, gælder denne regel ikke for klienten.

**Eksempler:**

* `||eksempel.org^$ctag=device_pc|device_phone`: Blokerer `eksempel.org` for klienter tagget som `device_pc` eller `device_phone`.

* `||eksempel.org^$ctag=~device_phone`: Blokerer `eksempel.org` for alle klienter, undtagen for den tagget som `device_phone`.

Listen over tilladte tags:

* Efter enhedstype:

  * `device_audio`: Lydenheder.
  * `device_camera`: Kameraer.
  * `device_gameconsole`: Spillekonsoller.
  * `device_laptop`: laptops.
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

For hver vært, skal en enkelt linje fremgå med flg. oplysninger:

```none
IP_adresse kanonisk_værtsnavn [aliases...]
```

Indtastningsfelter adskilles med et vilkårligt antal mellemrum eller tabulatortegn. Tekst efter `#`-tegnet og indtil slutningen af linjen er en kommentar og ignoreres.

Værtsnavne må kun indeholde alfanumeriske tegn, bindestreg-/minustegn (`-`) og punktummer (`.`). De skal begynde med et alfabetisk tegn og slutte med et alfanumerisk tegn. Valgfrie aliaser muliggør navneændringer, alternative stavemåder, kortere værtsnavne eller generiske værtsnavne (f.eks. `localhost`).

**Eksempel:**

```none
# Dette er en kommentar
127.0.0.1 eksempel.org eksempel.info
127.0.0.1 eksempel.com
127.0.0.1 eksempel.net # dette er også en kommentar
```

I AdGuard Home bruges IP-adresserne til at besvare DNS-forespørgsler for disse domæner. I Private AdGuard DNS blokeres disse adresser simpelthen.


## Domæne-specifik syntaks

En simpel liste over domænenavne, ét navn pr. linje.

**Eksempel:**

```none
# Dette er en kommentar
eksempel.com
eksempel.org
eksempel.net # dette er også en kommentar
```

Er en streng ikke er et gyldigt domæne (f.eks `*.eksempel.org`), vil AdGuard Home anse den som en [Adblock-syntakstype](#adblock-style-syntax) regel.

## Hostlists Compiler

Vedligeholder man en blokeringsliste og bruger forskellige kilder heri, kan [Hostlists compiler][hlc] være et nyttigt værktøj. Den er et simpelt værktøj, der gør det nemmere at kompilere en værtsblokeringsliste, der er kompatibel med AdGuard Home, Private AdGuard DNS eller ethvert andet AdGuard-produkt med DNS-filtrering.

Hvad den er i stand til:

1. Kompiler én enkelt blokeringsliste fra flere kilder.

2. Udelukke de regler, man ikke behøver.

3. Oprense den resulterende liste: Fjerne dubletter og ugyldige regler, samt komprimere listen.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
