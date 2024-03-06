---
title: FAQ
sidebar_position: 3
---

## Hvorfor blokerer AdGuard Home ikke annoncer eller trusler? {#doesntblock}

Ønskes man, at AdGuard Home blokerer `somebadsite.com`, men af en eller anden grund ikke gør det. Lad os prøve at løse dette problem.

Man har højst sandsynligt ikke opsat sin enhed til at bruge AdGuard Home som standard DNS-server. Sådan tjekkes, om AdGuard Home bruges som standard DNS-server:

1. Åbn i Windows en kommandoprompt (_Start_ → _Kør_ → `cmd.exe`). På andre systemer, åbn Terminal-applikationen.

2. Eksekvér `nslookup example.org`. Det vil give et skærmoutput i stil med dette:

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Tjek, om 'Server' IP-adressen er den, hvor AdGuard Home kører. Hvis ikke, opsæt da enheden i overensstemmelse hermed. Se [nedenfor](#defaultdns), hvordan dette gøres.

4. Sørg for, at forespørgslen til `example.org` vises i AdGuard Home-UI'et på siden _Forespørgselslog_. Hvis ikke, opsæt da AdGuard Home til at lytte på den angivne netværksgrænseflade. Den nemmeste måde at gøre dette på er ved at geninstallere AdGuard Home med standardindstillinger.

Er man sikker på, at enheden bruger AdGuard Home som standard DNS-server, men problemet fortsætter, kan det skyldes en forkert opsætning af AdGuard Home. Tjek venligst og sørg for at:

1. Indstillingen _Blokér domæner ved hjælp af filtre og hosts-filer_ er aktiveret på siden _Indstillinger_ → _Generelle indstillinger_.

2. De relevante sikkerhedsmekanismer på samme side er aktiveret, såsom Forældrekontrol.

3. De relevante filtre er aktiveret på siden _Filtre_ → _DNS-sortlister_.

4. Der ikke er nogen undtagelsesregellister, som kan tillade forespørgsler, aktiveret på siden _Filtre_ → _DNS-hvidlister_.

5. Der ikke er nogen DNS-rewrites, som kan forstyrre på siden _Filtre_ → _DNS-rewrites_.

6. Der ikke er nogen tilpassede filtreringsregler, som kan forstyrre på siden _Filtre_ → _Tilpassede filtreringsregler_.

## Hvor kan man se logfilerne? {#logs}

Standardplaceringen af alm. tekstlogfiler (ikke at forveksle med forespørgselslogfiler) afhænger af operativsystemet og installationstilstanden:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** Eksekvér kommandoen `logread -e AdGuardHome`.

- **Linux**-systemer med **systemd** og andre **Unix**-systemer med **SysV-lignende init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linux**-systemer med **Snapcraft** bruger kommandoen `snap logs adguard-home`.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** [Windows Hændelseslog][wlog] anvendes.

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## Hvordan opsættes AdGuard Home til at skrive logfiler på udførligt (verbose) niveau? {#verboselog}

For at fejlfinde på et kompliceret problem kræves nogle gange logning på udførligt (verbose) niveau. Sådan aktiveres dette:

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Opsæt AdGuard Home til at skrive logfiler på udførligt (verbose) niveau:

   1. Åbn `AdGuardHome.yaml` i editoren.

   2. Indstil `log.file` til den ønskede sti til logfilen, f.eks. `/tmp/aghlog.txt`. Bemærk, at mappen skal eksistere.

   3. Indstil 'log.verbose' til 'true'.

3. Genstart AdGuard Home og genskab problemet:

   ```sh
   ./AdGuardHome -s start
   ```

4. Når fejlfindingen er færdig, sæt `log.verbose` tilbage til `false`.

## Hvordan får man vist en tilpasset blokeringsside? {#customblock}

:::note

Før noget af dette gøres, vær da opmærksom på, at moderne webbrowsere er opsat til brug af HTTPS, så de validerer ægtheden af webservercertifikatet. Dette betyder, at brug af enhver af disse vil resultere i advarselsskærme.

Der er en række foreslåede udvidelser, som, hvis de er rimeligt velunderstøttede af klienter, ville give en bedre brugeroplevelse, herunder [RFC 8914 Extended DNS Error codes][rfc8914] og [DNS Access Denied Error Page RFC draft][rfcaccess]. Vi implementerer dem, når webbrowsere reelt begynder at understøtte dem.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914

[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Forudsætninger

For at bruge nogen af disse metoder til at vise en tilpasset blokeringsside, skal der bruges en HTTP-server, der kører på en IP-adresse og leverer den pågældende side på alle rutninger. Noget i stil med [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Tilpasset blokeringsside for Forældrekontrol og Safe Browsing-filtre

Disse parametre kan pt. ikke indstilles fra UI'en, hvorfor opsætningsfilen skal redigeres manuelt:

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Åbn `AdGuardHome.yaml` i editoren.

3. Sæt indstillingerne "dns.parental_block_host" eller "dns.safebrowsing_block_host" til serverens IP-adresse (i dette eksempel "192.168.123.45"):

   ```yaml
   # …
   dns:
     # …

     # BEMÆRK: Ændr til den faktiske IP-adresse på serveren.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Genstart AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

### Tilpasset blokeringsside til andre filtre

1. Åbn web-UI'en.

2. Gå til _Indstillinger_ → _DNS-indstillinger._

3. Vælg i afsnittet _DNS-serverkonfiguration_ drejeknappen _Tilpasset IP_ i vælgeren _Blokeringstilstand_ og angiv serverens IPv4- og IPv6-adresser.

4. Klik på _Gem_.

## Hvordan ændres adressen på kontrolpanelgrænsefladen? {#webaddr}

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Åbn `AdGuardHome.yaml` i editoren.

3. Sæt `http.address`-indstillingen til en ny netværksgrænseflade. F.eks.:

   - `0.0.0.0:0` for at lytte på alle netværksgrænseflader;
   - `0.0.0.0:0:8080` for at lytte på alle netværksgrænseflader med port `8080`;
   - `127.0.0.1:0` for kun at lytte på den lokale loopback-grænseflade.

4. Genstart AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

## Hvordan opsættes AdGuard Home som standard DNS-server? {#defaultdns}

Se [afsnittet _Opsætning af enheder_](getting-started.md#configure-devices) på siden _Kom godt i gang_.

## Findes nogen kendte begrænsninger? {#limitations}

Her er nogle eksempler på, hvad der ikke kan blokeres af en DNS-niveau blocker:

- YouTube-, Twitch-annoncer.

- Facebook-, X- (tidligere Twitter) og Instagram-sponsorerede opslag.

Grundlæggende kan enhver annonce, der deler et domæne med indhold, ikke blokeres af en blocker på DNS-niveau, medmindre man også er villig til at blokere indholdet.

### Nogen mulighed for at håndtere dette i fremtiden?

DNS vil aldrig være tilstrækkelig til at gøre dette. Den eneste mulighed er brug af en indholdsblokerende proxy, som vi gør det i [enkeltstående AdGuard-applikationerne][adguard]. Vi tilføjer understøttelse af denne funktion til AdGuard Home i fremtiden. Selv da, vil der desværre stadig være tilfælde, hvor det er utilstrækkeligt eller vil kræve en ret kompleks opsætning.

[adguard]: https://adguard.com/

## Hvorfor ses en "bind: adresse allerede i brug"-fejl under forsøg på at installere på Ubuntu? {#bindinuse}

Dette sker, fordi port 53 på `localhost`, der bruges til DNS, allerede er optaget af et andet program. Ubuntu kommer med en lokal DNS kaldet `systemd-resolved`, der bruger adressen `127.0.0.53:53`, hvilket forhindrer AdGuard Home i at tilknytte `127.0.0.1:53`. Dette kan ses ved at eksekvere:

```sh
sudo lsof -i :53
```

Outputtet bør ligne:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

For at løse dette skal enten `systemd-resolved`-deamonen deaktiveres eller en anden netværksgrænseflade vælges og AdGuard Home tilknyttes en tilgængelig IP-adresse på den, såsom routerens IP-adresse i netværket. Er der behov for at lytte på 'localhost', findes der flere løsninger.

For det første kan AdGuard Home detektere sådanne opsætninger og selv deaktivere 'systemd-resolved', hvis der trykkes på knappen _Ret_ placeret ved siden af meddelelsen 'adresse allerede i brug' på installationsskærmen.

For det andet, hvis dette ikke virker, følg da vejledningen nedenfor. Bemærk, at såfremt AdGuard Home bruges med docker eller snap, skal dette gøres manuelt.

1. Opret om nødvendigt mappen `/etc/systemd/resolved.conf.d`:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deaktivér `DNSStubListener` og opdatér DNS-serveradressen. For at gøre dette, opret en ny fil, `/etc/systemd/resolved.conf.d/adguardhome.conf`, med flg. indhold:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Angivelse af `127.0.0.1` som DNS-serveradressen er **nødvendig.**, da navneserveren ellers vil være `127.0.0.53`, hvilket ikke vil fungerer uden `DNSStubListener`.

1. Aktivér en anden `resolv.conf`-fil:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Genstart `DNSStubListener`:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

Derefter skulle `systemd-resolved` ikke blive vist i outputtet af `lsof`, og AdGuard Home skulle være i stand til at tilknytte sig `127.0.0.1:53`.

## Hvordan opsættes en omvendt proxyserver til AdGuard Home? {#reverseproxy}

Kører man allerede en webserver og ønsker at tilgå AdGuard Home kontrolpanel-UI'en fra en URL, såsom `http://DIN_SERVER/aghome/`, kan denne opsætning anvendes på webserveren:

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

Ønsker man derimod kun at betjene AdGuard Home med automatisk TLS, kan en opsætning svarende til eksemplet vist nedenfor anvendes:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Deaktivering af DoH-kryptering på AdGuard Home

Anvendes TLS på den reverse-proxyserveren, behøver man ikke bruge TLS på AdGuard Home. Indstil `allow_unencrypted_doh: true` i `AdGuardHome.yaml` for at tillade AdGuard Home at svare på DoH-forespørgsler uden TLS-kryptering.

### Reelle IP-adresser på klienter

Man kan indstille parameteren `trusted_proxies` til sin HTTP-proxys IP-adresse(r) for at få AdGuard Home til at tage headerne indeholdende den reelle klient IP-adresse i betragtning. Se siderne [opsætning][conf] og [kryptering][encr] for yderligere information.

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Hvordan rettes "tilladelse nægtet"-fejl på Fedora? {#fedora}

1. Flyt `AdGuardHome`-binærfilen til `/usr/local/bin`.

2. Som `root`, eksekvér flg. kommando for at ændre sikkerhedskonteksten for filen:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Tilføj de nødvendige firewall-regler for at gøre den tilgængelig over netværket. F.eks.:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

Opleves stadig `code=exited status=203/EXEC`, eller lignende fejl fra `systemctl`, så prøv at afinstallere AdGuard Home og installere den **direkte** i `/usr/local/bin` ved brug af `-o `-muligheden i installationsscriptet:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Se \[problematik 765] og \[problematik 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281

[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## Hvordan rettes "inkompatibelt filsystem"-fejl? {#incompatfs}

AdGuard Home-installationen eller arbejdsmappen bør flyttes til en anden placering. Se [afsnittet Begrænsninger](getting-started.md#limitations) på siden _Kom godt i gang_.

## Hvordan opdateres AdGuard Home manuelt? {#manual-update}

Hvis knappen ikke vises, eller en automatisk opdatering mislykkedes, kan opdatering ske manuelt. I eksemplerne nedenfor bruges AdGuard Home-versioner til Linux og Windows til AMD64 CPU'er.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Download den nye AdGuard Home-pakke fra \[udgivelsessiden]\[Udgivelser]. For at udføre dette trin via kommandolinjen, skriv:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Eller med 'wget':

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Gå til den mappe, hvori AdGuard Home er installeret. På de fleste Unix-systemer er standardmappen `/opt/AdGuardHome`, men på macOS er det `/Applications/AdGuardHome`.

3. Stop AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   På OpenBSD vil man sandsynligvis bruge `doas` i stedet for `sudo`.

   :::

4. Sikkerhedskopiér data. Det vil sige opsætningsfilen og databiblioteket (`AdGuardHome.yaml` og `data/` som standard). For f.eks. at sikkerhedskopiere data til en ny mappe kaldet `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Udpak AdGuard Home-arkivet til en midlertidig mappe. Downloades arkivet til `~/Downloads`-mappen, så udpak det f.eks. til `/tmp/`:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   På macOS, skriv noget i stil med:

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. Erstat den gamle AdGuard Home eksekverbare fil med den nye. På de fleste Unix-systemer vil kommandoen se således ud:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   På macOS, skriv noget i stil med:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   Man ønsker måske også kopiere dokumentationsdelene af pakken, såsom ændringsloggen (`CHANGELOG.md`), README-filen (`README.md`) og licensen (`LICENSE.txt`).

   Den midlertidige mappe kan derefter fjernes.

7. Genstart AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (vha. PowerShell) {#manual-update-win}

I alle eksempler nedenfor skal PowerShell eksekveres som Administrator.

1. Download den nye AdGuard Home-pakke fra \[udgivelsessiden]\[Udgivelser]. For at udføre dette trin via kommandolinjen:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Gå til mappen, hvori AdGuard Home er installeret. I eksemplerne nedenfor bruges `C:\Program Files\AdGuardHome`.

3. Stop AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Sikkerhedskopiér data. Det vil sige opsætningsfilen og databiblioteket (`AdGuardHome.yaml` og `data/` som standard). For f.eks. at sikkerhedskopiere data til en ny mappe kaldet `~/my-agh-backup`:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Udpak AdGuard Home-arkivet til en midlertidig mappe. Er arkivet downloadet til f.eks. `Downloads`-mappen og ønskes udpakket til en midlertidig mappe:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Erstat den gamle AdGuard Home eksekverbare fil med den nye. F.eks.:

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   Man ønsker måske også kopiere dokumentationsdelene af pakken, såsom ændringsloggen (`CHANGELOG.md`), README-filen (`README.md`) og licensen (`LICENSE.txt`).

   Den midlertidige mappe kan derefter fjernes.

7. Genstart AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## Hvordan afinstalleres AdGuard Home? {#uninstall}

Afhængigt af, hvordan AdGuard Home blev installeret, er der forskellige måder at afinstallere den på.

:::caution

Inden afinstallation af AdGuard Home, skal man huske at ændre opsætningen af sine enheder, så der peges på en anden DNS-server.

:::

### Almindelig installation

I så tilfælde skal man gøre flg.:

- Afregistrér AdGuard Home-tjenesten: `./AdGuardHome -s uninstall`.

- Fjern AdGuard-hjemmemappen.

### Docker

Stop og fjern blot afbildningen.

### Snap Store

```sh
snap remove adguard-home
```
