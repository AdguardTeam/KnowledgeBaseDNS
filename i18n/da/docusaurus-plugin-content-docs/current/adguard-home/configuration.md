---
title: Opsætning
sidebar_position: 9
---

:::warning

Arbejdet med denne artikel er stadig i gang. Den kan blive omarbejdet.

:::

Denne side indeholder beskrivelser af kommandolinje- og opsætningsfilindstillingerne.

:::note

De fleste af disse indstillinger kan ændres via den webbaserede admin-grænseflade.

:::

## Kommandolinjeargumenter {#kommandolinje}

Her er en liste over alle tilgængelige kommandolinjeargumenter.

```sh
$ ./AdGuardHome --help
Usage:

./AdGuardHome [options]

Options: 
-c, --config VALUE                 Sti til opsætningsfilen.
-w, --work-dir VALUE               Stil til arbejdsmappen.
-h, --host VALUE                   Udfaset. Værtsadresse at binde HTTP-serveren til. Benyt --web-addr. Den korte -h vil fungere som --help i fremtiden. 
-p, --port VALUE                   Udfaset. Port til levering af HTTP-sider. Benyt --web-addr.
--web-addr VALUE                   Adresse til levering af web-UI, i formatet host:port. 
-s, --service VALUE                Tjenestekontrolhandling: status, install (som en tjeneste), uninstall (som en tjeneste), start, stop, restart, reload (opsætning).
-l, --logfile VALUE                Sti til logfil. Hvis tom, skriv til stdout; hvis "syslog", skriv til systemlog.
--pidfile VALUE                    Sti til fil, hvori PID er gemt.
--check-config                     Tjek opsætning og afslut.
--no-check-update                  Tjek ikke for opdateringer.
--update                           Opdatér den aktuelle binære og genstart tjenesten, hvis den er installeret. 
--no-mem-optimization              Udfaset. Deaktivér hukommelsesoptimering.
--no-etc-hosts                     Udfaset: Benyt clients.runtime_sources.hosts og dns.hostsfile_enabled i stedet. Benyt ikke de OS-leverede værter. 
--local-frontend                   Benyt lokal frontend-mapper. 
-v, --verbose                      Aktivér udførligt output. 
--glinet                           Kør i GL-Inet-kompatibilitetstilstand.
--no-permcheck                     Overspring tjek og migereing af tilladelser for sikkerhedsfølsomme filer. 
--version                          Vis versionen og afslut. Vis mere detaljeret versionsbeskrivelse med -v. 
--help                             Udskriv denne hjælp.
```

:::note

Kommandolinjeargumenter tilsidesætter indstillinger fra opsætningsfilen.

:::

`./AdGuardHome -s reload`-kommanden gør flg.:

- opfrisk runtime-klienternes data fra operativsystemets ARP-tabeller;

- genlæs SSL-certifikatfilen (hvis den er ændret).

Kommandolinjeargumenter sendt til kommandoen `-s install` benyttes dernæst af tjenesten. Iinstalleres AdGuard Home-tjenesten f.eks. med `sudo ./AdGuardHome -s install --no-check-update`, deaktiveres opdateringstjekfunktionen ligeledes i tjenesten.

## Opsætning af upstreams {#upstreams}

AdGuard Home er dybest set en DNS-proxy, der sender DNS-forespørgsler til upstream-servere. Flere upstream-servere for alle eller udvalgte domænenavne kan angives i AdGuard Home-indstillinger.

**Eksempler**:

- `94.140.14.140`, `2a10:50c0::1:ff`: Almindelig DNS (over UDP).

- `94.140.14.140:53`, `[2a10:50c0::1:ff]:53`: Almindelig DNS (over UDP, med port).

- `udp://dns-unfiltered.adguard.com`: Almindelig DNS (over UDP, værtsnavn).

- `tcp://94.140.14.140`, `tcp://[2a10:50c0::1:ff]`: Almindelig DNS (over TCP).

- `tcp://94.140.14.140:53`, `tcp://[2a10:50c0::1:ff]:53`: Almindelig DNS (over TCP, med port).

- `tcp://dns-unfiltered.adguard.com`: Almindelig DNS (over TCP, værtsnavn).

- `tls://dns-unfiltered.adguard.com`: Krypteret [DNS-over-TLS].

- `https://dns-unfiltered.adguard.com/dns-query`: Krypteret [DNS-over-HTTPS].

- `h3://dns-unfiltered.adguard.com/dns-query`: Krypteret [DNS-over-HTTPS] med tvungen [HTTP/3] og ingen HTTP/2-reserve eller lavere.

- `quic://dns-unfiltered.adguard.com`: Krypteret [DNS-over-QUIC].

- `sdns://...`: \[DNS-stempler] til [DNSCrypt]- eller [DNS-over-HTTPS]-opløsere.

- `[/example.local/]94.140.14.140`: DNS-upstream for specifikke domæner, se nedenfor.

- `[/*.example.local/]94.140.14.140`: DNS-upstream for specifikke underdomains, se nedenfor.

### Angivelse af upstreams for domæner {#upstreams-for-domains}

Der kan angives upstreams til brug for specifikke domæner vha. den dnsmasq-lignende syntaks (se dokumentationen for indstillingen `--server` [her][dnsmasq-man]). Denne funktion er beregnet til private navneservere, som håndterer intranetdomæner.

Syntaksen er:

```none
[/domæne1/domæne2/domæneN/]<upstreamString>
```

Hvor `upstreamString` er en eller flere upstreams adskilt af mellemrum (f.eks. `1.1.1.1 2.2.2.2`).

Er et eller flere domæner angivet, benyttes denne upstream (her `upstreamString`) kun til disse domæner. Normalt bruges den til private navneservere. Findes f.eks. en navneserver på netværket, der håndterer `xxx.internal.local` på adressen `192.168.0.1`, så kan der angives `[/internal.local/]192.168.0.1`, og AdGuard Home vil sende alle `*.internal.local`-forespørgsler til den navneserver. Alt andet vil blive sendt til standard-upstreams, som også skal angives.

En tom domænespecifikation, `//` har den særlige betydning "kun ukvalificerede navne", dvs. navne uden nogen punktummer i dem, såsom `myhost` eller `router`. Disse vil kun blive brugt til at opløse forespørgsler for ukvalificerede domænenavne, men ikke deres underdomæner. Så en opsætning som denne:

```none
5.6.7.8:53
[//]4.3.2.1:53 [/com/]1.2.3.4:53
```

sender forespørgsler for `com` (og dets underdomæner) til `1.2.3.4:53`, forespørgsler for andre topdomæner til `4.3.2.1:53` og alle øvrige forespørgsler til `5.6.7.8:53`.

Mere specifikke domæner har forrang over mindre specifikke domæner. Så en opsætning som denne:

```none
[/host.com/]1.2.3.4 [/www.host.com/]2.3.4.5
```

sender forespørgsler for `*.host.com` til `1.2.3.4`, undtagen forespørgsler for `*.www.host.com`, som sendes til `2.3.4.5`.

Den særlige serveradresse `#` betyder "brug standardserverne". Så en opsætning som denne:

```none
6.7.8.9
[/host.com/]1.2.3.4 [/www.host.com/]#
```

sender forespørgsler for `*.host.com` til `1.2.3.4`, undtagen forespørgsler for `*.www.host.com`, som sendes til `6.7.8.9`, som er standard-upstream.

Forespørgsler for forespørgselstypen `DS` følger antagelsen baseret på specifikationen for posters tilstedeværelse angivet i [RFC 4035, afsnit 2.4](https://datatracker.ietf.org/doc/html/rfc4035#section-2.4):

> Et DS RRset BØR være til stede ved et delegeringspunkt, når underzonen signeres. \[…\] Alle DS RRsets i en zone SKAL signeres, og DS RRsets MÅ IKKE vises ved et roddomæne.

En `DS`-forespørgsel for `domain.example.com` vil f.eks. blive sendt til den upstream, der er angivet for `example.com`, `com` eller standard-upstreamen, selvom der er en mere specifik upstream, såsom `*.example.com`. Bemærk, at for `DS`-forespørgsler med to navneelementer vil den upstream, der er angivet for ukvalificerede navne, eller den mere specifikke blive brugt, hvis nogen findes.

Jokertegnet `*` har en særlig betydning for "ethvert underdomæne", så `--upstream=[/*.host.com/]1.2.3.4` vil sende forespørgsler for `*.host.com` til `1.2.3.4`, men `host.com` videresendes til standard upstreams.

**Eksempler:**

- En opsætning såsom:

    ```none
    8.8.8.8:53
    [/local/]192.168.0.1:53
    ```

  sender forespørgsler for `*.local`-domæner til `192.168.0.1:53`. Øvrige forespørgsler sendes til `8.8.8.8:53`.

- En opsætning såsom:

    ```none
    8.8.8.8:53
    [/host.com/]1.1.1.1:53
    [/maps.host.com/]#
    ```

  sender forespørgsler for `*.host.com` til `1.1.1.1:53`, undtagen `*.maps.host.com`, der sendes til `8.8.8.8:53` sammen med alle øvrige forespørgsler.

- En opsætning såsom:

    ```none
    8.8.8.8:53
    [/host.com/]1.1.1.1:53
    [/*.host.com/]2.2.2.2:53
    ```

  sender forespørgsler for `*.host.com` til `2.2.2.2:53`, undtagen `host.com`-forespørgsler, som sendes til `1.1.1.1:53`, men alle øvrige forespørgsler sendes til `8.8.8.8:53`.

- En opsætning såsom:

    ```none
    8.8.8.8:53
    [/host.com/]1.1.1.1:53 2.2.2.2:53
    ```

  sender forespørgsler for `*.host.com` til `1.1.1.1:53` og `2.2.2.2:53`, men alle andre forespørgsler sendes til `8.8.8.8:53`.

### Indlæser upstreams fra fil {#upstreams-from-file}

Brug af specifikke upstreams for visse domæner er en almindelig måde at accelerere internethastigheden på i Kina. For et eksempel, se https://github.com/felixonmars/dnsmasq-china-list eller en af de mange andre `dnsmasq`-lister. Disse lister kan nemt konverteres til en AdGuard Home-liste:

```none
Før: server=/0-100.com/114.114.114.114
Efter:  [/0-100.com/]114.114.114.114
```

Problemet med disse lister er, at de kan være for store. I så tilfælde kan indlæsning af upstream-servere fra en separat fil være at foretrække frem for at angive dem alle i AdGuard Home-indstillingerne. For at gøre dette, angiv blot stien til filen med listen i feltet `upstream_dns_file` i `AdGuardHome.yaml`.

:::warning

Ligesom input i webgrænsefladen, accepterer filen p.t. ikke internationaliserede domænenavne (f.eks. `пример.рф` eller `例子.中国`). Som en midlertidig løsning kan de konverteres til Punycode (f.eks. henholdsvis `xn--e1afmkfd.xn--p1ai` eller `xn--fsqu00a.xn--fiqs8s`). Se [problematik 2915][2915].

:::

### Angivelse af upstreams til omvendt DNS {#upstreams-for-rdns}

Ved brug af den domænespecifikke upstream-notation kan der angives dedikerede upstream-DNS-servere til omvendt DNS-forespørgsler (rDNS). Ønskes **alle** `PTR`-forespørgslerne med ARPA-domæne omdirigeret til `192.168.8.8`:

1. Angiv flg. i feltet _Upstream DNS-servere_ på siden _Indstillinger_ → _DNS-indstillinger_:

    ```none
    [/in-addr.arpa/]192.168.8.8
    [/ip6.arpa/]192.168.8.8
    ```

2. Angiv flg. i feltet _Private omvendt DNS-servere_ på den
   samme side under det foregående felt:

    ```none
    192.168.8.8
    ```

   Brug af den domænespecifikke notation er ikke nødvendig her, medmindre forespørgsler for forskellige private intervaller ønskes omdirigeret til forskellige upstream-servere.

:::note

Alle upstreams for private intervaller **skal** gå til feltet _Private omvendt DNS-servere_ **og ikke** til det primære felt _Upstream DNS-servere_. Angivelse af noget i stil med `[/192.in-addr.arpa/]192.168.8.8` i hovedfeltet vil være uden effekt.

:::

#### Private adresser {#rdns-private}

Alle adresser fra [private IP-områder][private-ip] opløses kun via relevante lokale opløsere for at undgå lækage af klienters oplysninger. Som standard forsøger AdGuard Home at hente adresserne på standardopløserne fra OS'et. Der kan angives tilpassede upstream-servere for den i feltet _Private omvendt DNS-servere_ i afsnittet _Upstream DNS-servere_ eller via feltet `local_ptr_upstreams` i opsætningsfilen. Private IP-områder kan tilpasses via feltet `private_networks`. Det er som standard tomt, hvilket får AdGuard Home til at bruge det førnævnte standardsæt af netværk.

Brug af private omvendt DNS-upstream-servere kan deaktiveres via afkrydsningsfeltet _Brug private omvendt DNS-opløsere_ i afsnittet _Upstream DNS-servere_ eller via feltet `use_private_ptr_resolvers` i opsætningsfilen. Er det deaktiveret, vil de ukendte adresser fra lokalt betjente netværk slet ikke blive opløst, og klienter, som foretager disse forespørgsler, vil modtage `NXDOMAIN`-svar.

`SOA`- og `NS`-forespørgsler tjekkes også for, om de indebærer privat rDNS og opløses efter de samme regler som `PTR`.

#### Offentlige adresser {#rdns-public}

Er ønsket, at AdGuard Home skal bruge en anden DNS-server til et specifikt IP-adresseområde, kan denne skiftes via den samme syntaks som for generelle upstream-servere. Føjes dette f.eks. til feltet _Upstream DNS servers_:

```none
[/200.in-addr.arpa/]192.168.7.7
```

så vil AdGuard Home bruge DNS-serveren `192.168.7.7` til alle rDNS-forespørgsler for at opløse klienters IP-adresser fra netværket `200.0.0.0/8`.

Bemærk, at såfremt adressen ønskes brugt til `PTR`-forespørgsler for IP-adresser i et lokalt betjent netværksområde, f.eks. `192.168.0.0/16`, så bør adressen føjes til feltet _Private omvendt DNS-servere_:

```none
[/168.192.in-addr.arpa/]192.168.7.7
```

#### Klientopslag {#rdns-clients}

AdGuard Home henter automatisk navnene på tilsluttede enheder via omvendt DNS-opslag (rDNS). Den sender `PTR`-forespørgsler med klienters IP-adresser til relevante DNS-servere og bruger svarene til at berige klientoplysninger med menneskeligt læsbare navne.

Denne funktion kan aktiveres og deaktiveres med indstillingen _Aktivé opløsning af klienters værtsnavn_ i afsnittet _Upstream-DNS-servere_ eller via feltet `clients.runtime_sources.rdns` i opsætningsfilen.

[2915]: https://github.com/AdguardTeam/AdGuardHome/issues/2915
[DNS Stamps]: https://dnscrypt.info/stamps/
[DNS-over-HTTPS]: https://en.wikipedia.org/wiki/DNS_over_HTTPS
[DNS-over-QUIC]: https://datatracker.ietf.org/doc/html/rfc9250
[DNS-over-TLS]: https://en.wikipedia.org/wiki/DNS_over_TLS
[DNSCrypt]: https://dnscrypt.info/
[HTTP/3]: https://en.wikipedia.org/wiki/HTTP/3
[dnsmasq-man]: http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html
[private-ip]: https://tools.ietf.org/html/rfc6303

## Opsætningsfil {#configuration-file}

Ved første eksekvering oprettes en fil med navnet `AdGuardHome.yaml` indeholdende standardværdier. Filen kan redigeres, mens AdGuard Home-tjeneste ikke kører. Ellers vil evt. ændringer i filen gå tabt, da det kørende program vil overskrive dem.

Indstillinger gemmes i [YAML][yaml]-formatet. Mulige parametre, som kan opsættes, er listet nedenfor.

[yaml]: https://yaml.org/

### `http` {#http}

Objektet `http` opsætter webgrænsefladen.

- `address`: IP-adresse for webgrænsefladen med port, der skal lyttes på.

- `session_ttl`: Websession-TTL er en tidsvarighed i et menneskeligt læsbart format. Webbrugeren forbliver indlogget i dette tidsrum.

- `doh`: DNS-over-HTTPS-opsætning. Den har flg. egenskaber:

  - `routes`: Liste over HTTP-rutemønstre for DoH-forespørgsler. Standardruter er:

    - `GET /dns-query`

    - `POST /dns-query`

    - `GET /dns-query/{ClientID}`

    - `POST /dns-query/{ClientID}`

  - `insecure_enabled`: Hvis `true`, tillad DoH-forespørgsler via ukrypteret HTTP, f.eks. til brug med omvendt proxier.

- `pprof`: Profiling HTTP handler-opsætning. Se afsnittet [Profilering med pprof](#pprof).

  - `enabled`: Hvorvidt pprof er aktiveret eller ej.

  - `port`: IP-port, der skal lyttes på.

### `users` {#users}

Webbrugerinfo. Hvis sat til en tom liste (`[]`), deaktiveres godkendelse. Den har flg. egenskaber:

- `name`: Brugernavn.

- `password`: BCrypt-krypteret adgangskode.

### `auth_attempts` {#auth_attempts}

Maksimalt antal mislykkede loginforsøg en bruger kan foretage, før vedkommende blokeres. Hele blokeringslogikken deaktiveres, hvis den er lig med 0.

### `block_auth_min` {#block_auth_min}

Varigheden af blokeringsperioden. Hele blokeringslogikken deaktiveres, hvis den er lig med 0.

### `http_proxy` {#http_proxy}

Proxy-URL til HTTP-klient. Understøtter `http`, `https` og `socks5`-protokoller.

**Eksempel:** `http://user:password@server:port/`

### `language` {#language}

UI-sprogkode.

**Eksempel:** `da`

### `theme` {#theme}

UI-temaet. Gyldige værdier:

- `auto`

- `dark`

- `light`

### `dns` {#dns}

Objektet `dns` opsætter DNS-serveren. Den har flg. egenskaber:

- `bind_hosts`: IP-adresser, hvortil DNS-forespørgsler leveres. For hver netværksgrænseflade kan der kun være én IP-adresse for hver IP-version.

  **Eksempel:**

    ```yaml
    # Forskellige netværksgrænseflader.
    'dns':
        'bind_hosts':
        - '127.0.0.1'
        - '192.168.1.1'
    ```

    ```yaml
    # Samme netværksgrænseflade, forskellige IP-versioner.
    'dns':
        'bind_hosts':
        - '127.0.0.1'
        - '::1'
    ```

  Ønskes det, at serveren skal acceptere forespørgsler på alle grænseflader og benytte begge IP-versioner, hvis f.eks. der køres en offentlig server, angiv da **ét** element med den uspecificerede IP for en given version:

    ```yaml
    'dns':
        'bind_hosts':
        - '0.0.0.0'
    ```

- `port`: DNS-serverport, der skal lyttes på.

- `anonymize_client_ip`: Hvis sand, anonymiseres klienters IP-adresser i logfiler og statistikker.

- `ratelimit`: DDoS-beskyttelse, angiver hvor mange forespørgsler pr. sekund AdGuard Home skal håndtere. Alt derover droppes ubemærket. For at deaktivere, sæt til `0`, standard er `20`. Sikker at deaktivere, hvis DNS-server er utilgængelig fra internet.

- `ratelimit_subnet_len_ipv4`: Undernetlængde for IPv4-adresser brugt til hastighedsbegrænsende forespørgsler. Standard er '24'.

- `ratelimit_subnet_len_ipv4`: Undernetlængde for IPv4-adresser brugt til hastighedsbegrænsende forespørgsler. Standard er `56`.

- `ratelimit_whitelist`: Ønskes visse IP-adresser undtaget fra den aktive hastighedsbegrænsning, angiv disse her.

- `refuse_any`: En anden DDoS-beskyttelsesmekanisme. Forespørgsler af typen `ANY` er sjældent nødvendige, så det at afvise at leberre til dem mindsker risikoen for, at angribere forsøger at bruge en DNS som en reflektor. Sikker at deaktivere, hvis DNS-server er utilgængelig fra internet.

- `upstream_dns`: Liste over upstream-DNS-servere.  Kommentarer (linjer startende med `#`) og tomme linjer ignoreres.

- `upstream_dns_file`: Sti til fil med listen over upstream-DNS-servere. Hvis opsat, ignoreres `upstream_dns`-værdien.

- `bootstrap_dns`: Liste over DNS-servere brugt til indledende værtsnavnsopløsning i tilfælde, hvor et upstream-servernavn er et værtsnavn.  Kommentarer (linjer startende med `#`) og tomme linjer ignoreres.

- `bootstrap_prefer_ipv6`: Hvis `true`, instruerer bootstrapperen om at foretrække IPv6-adresser frem for IPv4-adresser ved opløsning af DoH-, DoQ- og DoT-værtsnavne.

- `fallback_dns`: Liste over reserve-DNS-servere, som anvendes, når upstream-DNS-servere ikke svarer.  Kommentarer (linjer startende med `#`) og tomme linjer ignoreres.

- `private_networks`: Liste over netværk brugt til at kontrollere, om en IP-adresse tilhører et lokalt betjent adresseregister. Hvis tomt, benytter AdGuard Home sættet defineret af [RFC 6303][private-ip].

- `use_private_ptr_resolvers`: Hvorvidt AdGuard Home skal benytte private omvendt-DNS-servere.

- `local_ptr_upstreams`: Liste over upstream-DNS-servere til opløsning af PTR-forespørgsler for adresser indenfor lokalt betjente netværk. Hvis tomt, forsøger AdGuard Home automatisk at hente lokale opløsere fra OS'et. Domænespecifikke upstreams valideres for at være et gyldigt ARPA-domæne, der peger på et lokalt betjent netværk.  Kommentarer (linjer startende med `#`) og tomme linjer ignoreres.

- `upstream_mode`: Tilstanden beskriver den logik, efter hvilken upstreams anvendes. Gyldige værdier:

  - `load_balance`: Forespørgsler sendes til hver upstream-server én efter én. AdGuard Home anvender en vægtet randomiseringsalgoritme til at vælge servere med det laveste antal mislykkede opslag og den laveste gennemsnitlige opslagstid.

  - `parallel`: Parallelle forespørgsler til alle opsatte upstream-servere for at accelerere navneopslag.

  - `fastest_addr`: Finder IP-adressen med den laveste latenstid og returnerer denne IP-adresse i DNS-svaret.

- `fastest_timeout`: The timeout used for dialing the addresses while picking the fastest. Andre værdier end positive erstattes med standardværdien `1s`.

- `use_http3_upstreams`: Aktiverer DNS-over-HTTP/3 for DNS-over-HTTPS-upstream-servere, som understøtter det.

- `use_dns64`: Aktiverer/deaktiverer DNS64-funktionaliteten. Se `dns64_prefixes` for flere oplysninger.

- `dns64_prefixes`: Listen over DNS64-præfikser, som skal benyttes. Det først angivne præfiks bruges til at syntetisere DNS64-svar. Hvis tomt, benytter AdGuard Home standardpræfikset (Well-Known) `64:ff9b::/96`. Præfikserne valideres som IPv6-undernet af højst 96 bits længde. Iht. [RFC 6147][rfc6147] rutes PTR-forespørgsler til `local_ptr_upstreams`, hvis den anmodede adresse er inden for enten et af de opsatte præfikser eller standard Well-Known-præfikset.

- `pending_requests`: Opsætningen til beskyttelse mod cacheforgiftningsangreb. Den har flg. egenskaber:

  - `enabled`: Angiver, om AdGuard Home skal spore samtidige identiske forespørgsler og udføre ét enkelt opslag for dem. Som standard er værdien `true`.

- `edns_client_subnet`: Styrer EDNS Client Subnet-adfærden. Den har flg. egenskaber:

  - `enabled`: Føj ECS-indstillingen til upstream-forespørgsler.

  - `use_custom`: Send et fast undernet i stedet for det reelle klientnetværk.

  - `custom_ip`: Den IP-adresse, hvorfra det faste undernet skal udledes, når `use_custom` er `true`.

- `allowed_clients`: Listen over CIDR'er, IP-adresser eller ClientID'er for tilladte DNS-klienter. Indeholder denne liste poster, accepterer AdGuard Home kun forespørgsler fra disse klienter.

  Se også noten på [Docker wiki-siden][docker-conf] om brugen af denne egenskab i en container.

- `disallowed_clients`: Listen over CIDR'er, IP-adresser eller ClientID'er for ikke-tilladte DNS-klienter. Indeholder denne liste poster, dropper AdGuard Home forespørgsler fra disse klienter. Bemærk, at dette felt ignoreres, hvis der er poster i `allowed_clients`.

  Se også noten på [Docker-wikisiden][docker-conf] om brug af denne egenskab i en container.

- `blocked_hosts`: Listen over domænenavne, jokertegn eller filtreringsregler til at matche forespørgsler, som slet ikke skal behandles. Disse ignoreres også af statistikker og forespørgselsloggen.

  Se også noten på [Docker wiki-siden][docker-conf] om brugen af denne egenskab i en container.

- `trusted_proxies`: Listen over IP-adresser og CIDR-præfikser for betroede HTTP-proxyservere. Hvis en DNS-over-HTTPS-forespørgsel kommer fra en af disse adresser eller netværk, bruger AdGuard Home de angivne proxy-headere, såsom `X-Real-IP`, til at hente klientens reelle IP-adresse. Forespørgsler fra HTTP-proxyer uden for disse netværk betragtes som forespørgsler fra selve proxyen. Det vil sige, at proxy-headere ignoreres. Den fulde liste over proxy-headere, i den rækkefølge AdGuard Home inspicerer dem:

  1. `CF-Connecting-IP`
  2. `True-Client-IP`
  3. `X-Real-IP`
  4. `X-Forwarded-For`

- `cache_enabled`: Slå DNS-cachen til/fra globalt.

- `cache_size`: DNS-cachestørrelse (i byte).

- `cache_ttl_min`: Den mindste TTL-tilsidesættelse i sekunder. Er TTL'en for et svar fra upstream under denne værdi, erstattes TTL'en med den. Skal være mindre end eller lig med `cache_ttl_max`.

- `cache_ttl_max`: Den maksimale TTL-tilsidesættelse i sekunder. Er TTL'en for et svar fra upstream over denne værdi, erstattes TTL'en med denne. Skal være større end eller lig med `cache_ttl_min`.

- `cache_optimistic`: Make AdGuard Home respond from the cache even when the entries are expired and also try to refresh them. TTL'en for sådanne svar er 10 sekunder.

- `cache_optimistic_answer_ttl`: TTL for svar fra optimistisk cache.

- `cache_optimistic_max_age`: Den maksimale tid udløbne poster forbliver i den optimistiske cache.

- `bogus_nxdomain`: Svar med `NXDOMAIN` i stedet for svar indeholdende IP-adresser matchende dem på denne liste. CIDR'er er også understøttet.

- `enable_dnssec`: Definerer, hvorvidt proxyen skal sætte DO-flaget i upstream-forespørgslerne.

- `aaaa_disabled`: Svar med et tomt svar på alle `AAAA`-forespørgsler. Den fjerner også IPv6-hints fra svarene på HTTPS-forespørgsler.

- `cache_time`: _Sikker browsing_-, _Sikker søgning_- og _Forældrekontrol_-cache TTL i sekunder.

- `max_goroutines`: Maksimalt antal parallelle goroutiner til behandling af indgående forespørgsler.

- `handle_ddr`: Håndtér [Discovery of Designated Resolvers (DDR)][DDR]-forespørgsler.

- `ipset`: Liste over domæne-ipset_navn-tilknytninger for tilføjelse af IP-adresser for de angivne domænenavne til en ipset-liste. Syntaks:

    ```none
    DOMAIN[,DOMAIN,…]/IPSET_NAME[,IPSET_NAME,…]
    ```

  IPv4-adresser føjes til en ipset-liste med `ipv4`-familien; IPv6-adresser til en `ipv6`-ipset-liste. ipset-liste skal findes.

  Denne indstilling understøttes kun på Linux-OS'er. Denne funktion svarer til `--ipset` i dnsmasq.

- `ipset_file`: Samme som `ipset`, men reglerne læses fra en fil. Sættes denne egenskab, ignoreres egenskaben `ipset`. Kommentarer (linjer startende med `#`) og tomme linjer ignoreres.

- `upstream_timeout`: Timeout for forespørgsler til upstream-servere. En nulværdi overskrives med standardværdien, der er `10s`.

- `serve_http3`: Aktiverer DNS-over-HTTP/3-levering for DNS-over-HTTPS-klienter samt for web-UI'en.

- `serve_plain_dns`: Aktiverer almindelig DNS-levering.

  :::note

  `serve_plain_dns` kan p.t. ikke sættes til `false`, medmindre en eller flere krypterede protokoller (DNS-over-HTTPS, DNS-over-TLS mv.) er aktiveret.

  :::

- `hostsfile_enabled`: Tillader brug af information fra systemets hosts-fil til opløsning af forespørgsler.

### `filtering` {#filtering}

Objektet `filtering` opsætter filtreringsindstillinger. Det har flg. egenskaber:

- `protection_enabled`: Hvorvidt nogen form for filtrering og beskyttelse skal udføres. Bemærk, at det ikke påvirker reglerne med modifikatoren `$dnsrewrite` og andre omskrivninger, inkl. dem taget fra operativsystemets hosts-fil.

- `filtering_enabled`: Hvorvidt filtrering af DNS-forespørgsler baseret på regellister skal udføres.

- `blocking_mode`: Angiver, hvordan DNS-forespørgsler skal blokeres. Gyldige værdier:

  - `custom_ip`: Svar med en manuelt angivet IP-adresse af en passende familie, der er angivet i egenskaberne `blocking_ipv4` og `blocking_ipv6`.

  - \`standard: Svar med nul-IP-adresse (0.0.0.0 for A; :: for AAAA), når blokeret af Adblock-lignende regel; svar med IP-adressen angivet i reglen, når blokeret af /etc/hosts-lignende regel.

  - `null_ip`: Svar med nul-IP-adresse (0.0.0.0 for A; :: for AAAA).

  - `nxdomain`: Svar med NXDOMAIN-kode.

  - `refused`: Svar med koden REFUSED.

- `blocking_ipv4`: Returneret IP-adresse for en blokeret A-forespørgsel, hvis `blocking_mode` er sat til `custom_ip`.

- `blocking_ipv6`: IP-adresse, der skal returneres for en blokeret AAAA-forespørgsel, hvis `blocking_mode` er sat til `custom_ip`.

- `blocked_response_ttl`: Hvor mange sekunder klienterne skal cache et filtreret svar. Lave værdier er nyttige på LAN, hvis filtre hyppigt ændres; høje værdier er nyttige til at øge ydeevnen og spare trafik.

- `max_http_size`: Denne egenskab definerer den maksimale HTTP-forespørgselsstørrelse for regellister. For at deaktivere begrænsningen, angiv en stor størrelse, såsom `1 TB`.

- `protection_disabled_until`: Tidsstempel, for hvornår beskyttelsen deaktiveres.

- `parental_block_host`: IP (eller domænenavn) brugt til besvarelse af DNS-forespørgsler blokeret af forældrekontrol.

- `safebrowsing_block_host`: IP (eller domænenavn) brugt til besvarelse af DNS-forespørgsler blokeret af sikker browsing.

- `parental_enabled`: Filtrering af DNS-forespørgsler baseret på _Forældrekontrol_.

- `safe_search`: _Sikker søgning_-indstillingsafsnit. Den har flg. egenskaber:

  - `enabled`: Håndhæver _Sikker søgning_-indstillingen for søgemaskiner, når muligt.

  - `bing`: Håndhæver indstillingen _Safe search_ for `bing`-domæner.

  - `duckduckgo`: Håndhæver indstillingen _Sikker søgning_ for `duckduckgo`-domæner.

  - `ecosia`: Håndhæver indstillingen _Sikker søgning_ for `ecosia`-domæner.

  - `google`: Håndhæver indstillingen _Sikker søgning_ for `google`-domæner.

  - `pixabay`: Håndhæver indstillingen _Sikker søgning_ for `pixabay`-domæner.

  - `yandex`: Håndhæver indstillingen _Sikker søgning_ for `yandex`-domæner.

  - `youtube`: Håndhæver indstillingen _Sikker søgning_ for `youtube`-domæner.

- `safebrowsing_enabled`: Filtrering af DNS-forespørgsler baseret på _Sikker browsing_.

- `safebrowsing_cache_size`: _Sikker browsing_-cache-størrelse i bytes.

- `safesearch_cache_size`: _Sikker søgning_-cache-størrelse i byte.

- `parental_cache_size`: _Forældrekontrol_-cache-størrelse i byte.

- `rewrites`: Liste over ældre DNS-omskrivninger, hvor `domain` er domænet eller jokertegnet, der ønskes omskrevet, og `answer` er IP-adresse, CNAME-post, `A` eller `AAAA` særværdier. Særværdi `A` bevarer `A`-poster fra upstream, og `AAAA` bevarer `AAAA`-værdier fra upstream.

  **Eksempel:**

    ```yaml
    'rewrites':
      - 'domain': example.com
        'answer': 127.0.0.1
      - 'domain': '*.example.com'
        'answer': A
    ```

- `safe_fs_patterns`: Liste over tilladte filsystemstimønstre til tilføjelse af **lokale** filterfiler.

- `cache_time`: Tidsinterval i minutter, i hvilket cacheposter opbevares.

- `filters_update_interval`: Tidsinterval i timer for opdatering af filtre.

- `blocked_services`: Indstillingsafsnittet til Blokerede tjenester. Den har flg. egenskaber:

  - `ids`: Liste over blokerede tjenester.

  - `schedule`: Angiver inaktivitetsperioder under filtrering af blokerede tjenester. Tidsplanen indeholder 7 dage (søndag til lørdag) samt en tidszone. Hver dag består af `start` og `end`, som er varighederne fra dagens start. Varighed er en streng i et læsbart format. `start` er større end eller lig med `0s` og mindre end `24h`. `end` skal være større end `start` og mindre end eller lig med `24h`. `start` og `end` forventes afrundet til minutter.

  **Eksempel:**

    ```yaml
    'blocked_services':
        'ids':
        - 'onlyfans'
        'schedule':
            'sun':
                'start': '0s'
                'end': '24h'
            'mon':
                'start': '10m'
                'end': '23h50m'
            'tue':
                'start': '20m'
                'end': '23h40m'
            # Ingen tidsplan for onsdag.
            'thu':
                'start': '40m'
                'end': '23h20m'
            'fri':
                'start': '50m'
                'end': '23h10m'
            'sat':
                'start': '1h'
                'end': '23h'
            'time_zone': 'America/New_York'
    ```

### `querylog` {#querylog}

Objektet `querylog` opsætter indstillingerne for _Forespørgselslog_. Det har flg. egenskaber:

- `enabled`: Angiver, om _Forespørgselslog_ er aktiveret.

- `file_enabled`: Skriv forespørgselslogger til en fil.

- `interval`: Tidsinterval for rotation af forespørgselslogfiler. Det er en streng med en læsbar varighed på mellem en time (1h) og ét år (8760h).

- `size_memory`: Antal poster opbevaret i hukommelsen, før de skrives til disken.

- `ignored`: Liste over værtsnavne, som ikke skal skrives til loggen. AdBlock-regelsyntaksen understøttes.

- `ignored_enabled`: Angiver, om værter fra listen `ignored` skal ignoreres eller ej.

- `dir_path`: Tilpasset mappe til lagring af _forespørgselslogfiler_.

### `statistics` {#statistics}

Objektet `statistics` opsætter statistikindstillinger. Det har flg. egenskaber:

- `enabled`: Angiver, om statistik er aktiveret.

- `interval`: Tidsinterval for statistik. Det er en streng med en læsbar varighed mellem en time (1h) og ét år (8760h).

- `ignored`: Liste over værtsnavne, som ikke skal tælles med. AdBlock-regelsyntaksen understøttes.

- `ignored_enabled`: Angiver, om værter fra listen `ignored` skal ignoreres eller ej.

- `dir_path`: Tilpasset mappe til lagring af statistikker.

### `filters` {#filters}

Filterliste. Hvert filter har flg. egenskaber:

- `enabled`: Det aktuelle filters status (aktiveret/deaktiveret).

- `url`: URL, der peger på filterindholdet (filtreringsregler).

- `name`: Filternavnet. Er det et filter med AdGuard-syntaks, opdateres det automatisk. Ellers forbliver det uændret.

- `last_updated`: Tidspunktet, hvor filteret senest blev opdateret fra serveren.

- `id`: Filter-ID (skal være unikt).

### `dhcp` {#dhcp}

Indbygget DHCP-serveropsætning. Se også artiklen [DHCP][DHCPv4]. Den har flg. egenskaber:

- `enabled`: DHCP-serverstatus.

- `interface_name`: Navn på netværksgrænseflade (`eth0`, `en0` osv.).

- `dhcpv4`: DHCPv4-indstillinger. Den har flg. egenskaber:

  - `gateway_ip`: Gatewayens IP-adresse.

  - `undernetmaske`: Undernetmaske.

  - `range_start`, `range_end`: Starten og slutningen på området af lejede IP-adresser.

  - `lease_duration`: Lejemålsperiode i sekunder. Hvis `0`, anvend standardvarigheden på 24 timer.

  - `icmp_timeout_msec`: Den tid (i millisekunder), der skal ventes på et ICMP-svar for at registrere en IP-konflikt. Hvis `0`, er funktionen deaktiveret.

  - `options`: Tilpassede DHCP-indstillinger. Se afsnittet om disse indstillinger i artiklen [DHCP][DHCPv4] for yderligere oplysninger.

- `dhcpv6`: DHCPv6-indstillinger. Den har flg. egenskaber:

  - `range_start`: Den første IP-adresse, der skal tildeles en klient.

  - `lease_duration`: Samme som i v4 ovenfor.

  - `ra_slaac_only` og `ra_allow_slaac`: Send RA-pakker, som enten tvinger klienterne til at anvende SLAAC eller muliggør egne valg. Se afsnittet om disse indstillinger i artiklen [DHCP][DHCPv6] for yderligere oplysninger.

- `local_domain_name`: Domænenavnet AdGuard Homes DHCP-server anvender til værtsnavnene på sine klienter. Standardværdien, der også angives, når dette felt er tomt, er `lan`. Findes f.eks. en maskine med navnet `myhost` på netværket, hvor AdGuard Home er DHCP-serveren, vil maskinens værtsnavn være `myhost.lan`. DNS-forespørgsler af typen `A` for sådanne værter er kun tilladt fra lokalt betjente netværk, såsom `10.0.0.0/8`, `192.168.0.0/16` mv. Andre klienter modtager et tomt `NXDOMAIN`-svar.

### `tls` {#tls}

Indstillinger for HTTPS/DoH/DoQ/DoT. Den har flg. egenskaber:

- `enabled`: Hvorvidt kryptering (DoT/DoH+HTTPS/DoQ) er aktiveret.

  **Eksempel**: `true`

- `server_name`: Værtsnavnet på den lokale server. Hvis angivet, benyttes den til at registrere ClientID'er (via feltet _ServerName_ i ClientHello-meddelelser), besvare [Discovery of Designated Resolvers (DDR)][DDR]-forespørgsler og udføre yderligere forbindelsesvalideringer. Hvis ikke angivet, er disse funktioner deaktiveret. Skal matche et af DNS-navnene i certifikatet.

  **Eksempel**: `example.org`

- `force_https`: Hvis `true`, gennemtving HTTP-til-HTTPS omdirigering. Denne indstilling angiver også headeren [`Strict-Transport-Security`][hsts].

  **Eksempel**: `true`

- `port_https`: HTTPS-porten. Anvendes til både web-UI og DNS-over-HTTPS. Hvis `0`, er HTTPS deaktiveret.

  **Eksempel**: `443`

- `port_dns_over_tls`: DNS-over-TLS-port. Hvis `0`, er DNS-over-TLS deaktiveret.

  **Eksempel**: `853`

- `port_dns_over_quic`: DNS-over-QUIC-port. Hvis `0`, er DNS-over-QUIC deaktiveret. Standardværdien er `853`.

- `port_dnscrypt`: DNSCrypt-port. Hvis `0`, er DNSCrypt deaktiveret. Se siden “[DNSCrypt]” for yderligere information og eksempler.

- `dnscrypt_config_file`: Sti til DNSCrypt-opsætningsfilen. Den skal angives, såfremt `port_dnscrypt` ikke er `0`. Se dokumentationen til værktøjet [dnscrypt] for eksempler på opsætningsgenerering.

- `certificate_chain`: PEM-kodede certifikatkæde.

- `strict_sni_check`: Hvis `true`, afvises forbindelser, hvis klienten bruger et servernavn (i SNI), der ikke matcher det i certifikatet.

- `private_key`: PEM-kodet private nøgle.

- `certificate_path`: Filsystemsti til et PEM-certifikat.

- `private_key_path`: Filsystemsti til en privat PEM-nøgle.

- `override_tls_ciphers`: Hvis angivet, muliggør denne strengmatrix at tilsidesætte standardsættet af TLS-krypteringspakker, som skal bruges. Strengene er [navnene på krypteringssuiter][tls-names].

### `whitelist_filters` {#whitelist-filters}

Liste over **hvidliste**-filtre.

### `user_rules` {#user-rules}

Brugerdefinerede filtreringsregler.

### `os` {#os}

Indstillinger relateret til operativsystemet.

- `group`: Navnet på den brugergruppe, der skal skiftes til efter opstart.

- `user`: Navnet på den bruger, der skal skiftes til efter opstart.

- `rlimit_nofile`: Begrænsning af det maksimale antal åbne filer for serverprocessen (på Unix-lignende operativsystemer). Indstil til `0` for brug af systemets standardværdi.

### `clients` {#clients}

Indstillinger for permanente og runtime-klienter.

- `persistent`: En matrix af eksplicit opsatte klienter. Hver klient har flg. egenskaber:

  - `safe_search`: _Sikker søgning_-indstillingsafsnit.

  - `blocked_services`: _Blokerede tjenester_-indstillingsafsnit.

  - `navn`: Klientens navn.

  - `ids`: Liste over klientens identifikatorer.

  - `tags`: Liste over klientens tags.

  - `upstreams`: Opsætning af upstreams.

  - `uid`: Klientens unikke identifikator.

  - `upstreams_cache_size`: Klientens cachestørrelse.

  - `upstreams_cache_enabled`: Hvorvidt klientens cache er aktiveret.

  - `use_global_settings`: Viser, om de klientspecifikke indstillinger bruges til at tilsidesætte de globale indstillinger.

  - `filtering_enabled`: Angiver, hvorvidt filterlister skal benyttes eller ej.

  - `parental_enabled`: Angiver, hvorvidt forældrebeskyttelse skal benyttes eller ej.

  - `safebrowsing_enabled`: Angiver, hvorvidt sikker browsing skal bruges eller ej.

  - `use_global_blocked_services`: Viser, om de klientspecifikke indstillinger anvendes til at tilsidesætte de globale indstillinger for Blokerede tjenester.

  - `ignore_querylog`: Angiver, hvorvidt klientens aktivitet skal undtages fra forespørgselsloggen.

  - `ignore_statistics`: Angiver, hvorvidt klientens aktivitet skal undtages fra statistikken eller ej.

- `runtime_sources`: Dette styrer runtime-klientens datakilder.

  - `whois`: Anmod om WHOIS-oplysninger for klienter med offentlige IP-adresser.

  - `arp`: Tager hensyn til operativsystemets ARP-tabel.

  - `rdns`: Udfør rDNS-opslag for klientens adresse.

  - `dhcp`: Tjek AdGuard Homes DHCP-lejemål for klientens adresse.

  - `hosts`: Følg operativsystemets hosts-filer.

### `log` {#log}

Logindstillinger.

- `enabled`: Aktivér eller deaktivér skrivning til logfiler.

- `file`: Sti til logfilen. Hvis tomt, skrives til stdout, såfremt `syslog` skriver systemloggen (eller hændelseslog i Windows).

- `compress`: Hvis `true`, aktiveres GZIP-komprimering af logfilerne.

- `local_time`: Hvis `true`, er tidspunktet brugt til formatering af tidsstemplerne computerens lokale tid.

- `max_backups`: Maksimalt antal gamle logfiler, som skal bevares. `0` betyder, at alle gamle logfiler bevares. Bemærk, at `max_age` stadig kan medføre, at de slettes.

- `max_size`: Logfilens maksimalstørrelse, i megabyte, før den roteres.

- `max_age`: Maksimalt antal dage gamle logfiler skal beholdes.

- `verbose`: Hvis `true`, aktiveres detaljeret fejlfindingsoutput.

Fjernes en post fra indstillingsfilen, nulstilles den til standardværdien. Slettes filen, nulstilles alle indstillinger til standardværdierne.

[DDR]: https://www.ietf.org/archive/id/draft-ietf-add-ddr-06.html
[DHCPv4]: /adguard-home/dhcp#dhcpv4-options
[DHCPv6]: /adguard-home/dhcp#dhcpv6-options
[docker-conf]: /adguard-home/docker
[hsts]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
[rfc6147]: https://datatracker.ietf.org/doc/html/rfc6147
[tls-names]: https://pkg.go.dev/crypto/tls#pkg-constants

## Nulstil webadgangskode {#password-reset}

Følg disse trin for at oprette en ny brugerkontoadgangskode:

1. Installér `htpasswd`, der er en del af _Apache2-webserveren:_

   - Ubuntu:

        ```sh
        sudo apt-get install apache2
        ```

   - Fedora:

        ```sh
        sudo dnf install httpd-tools
        ```

   - Windows:

     Vælg den relevante [download][htpasswd], udpak den downloadede mappe, åbn en terminal, og gå til dens `bin`-mappe med kommandoen `chdir` og eksekvér dernæst `.\Htpasswd`. Bemærk majusklen “H” i Windows-versionen.

   Andre versioner af `htpasswd` kan bruges, men **kun** såfremt de understøtter _bcrypt_-hashkryptering, hvilket udelukker f.eks. de fleste webbaserede `htpasswd`-generatorer.

2. Brug værktøjet `htpasswd` til at generere en ny hash:

   - Ubuntu/Fedora:

        ```sh
        htpasswd -B -C 10 -n -b <USERNAME> <PASSWORD>
        ```

   - Windows:

        ```ps1
        .\Htpasswd -B -C 10 -n -b <USERNAME> <PASSWORD>
        ```

   Den vil printe `<USERNAME>:<HASH>` i terminalen.

3. Åbn `AdGuardHome.yaml` i en teksteditor med sudo-rettigheder.

   Find eget brugernavn i afsnittet `users:`, og indsæt værdien `<HASH>` for indstillingen `password`:

    ```yaml
    users:
      - name: ...
        password: <HASH>
    ```

4. Gem filen, og genstart AdGuard Home. Nu burde der kunne logges ind på webgrænsefladen med den nye adgangskode.

[htpasswd]: https://httpd.apache.org/docs/current/platform/windows.html#down

## Profilering med pprof {#pprof}

For at aktivere pprof skal `http.pprof.enabled` og `http.pprof.port` opsættes i YAML-opsætningsfilen og AdGuard Home dernæst genstartes. Nu kan profileringsoplysninger hentes via webbrowseren. F.eks. viser `http://localhost:[PORT]/debug/pprof/goroutine?debug=2` kaldsporet for hver kørende goroutine.

Denne URL muliggør at se oplysninger om AdGuard Home-processens heap-forbrug: `http://localhost:[PORT]/debug/pprof/heap?debug=1`.

Eller med `go tool pprof`:

```sh
go tool pprof -top http://localhost:6060/debug/pprof/heap
```

For at se en liste over understøttede profiler, gå til `http://localhost:6060/debug/pprof/`.

Alternativt kan filen blot downloades og analyseres senere:

```sh
wget http://localhost:6060/debug/pprof/heap
go tool --http=':8080' heap
```
