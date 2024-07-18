---
title: FAQ
sidebar_position: 3
---

## Proč AdGuard Home neblokuje reklamy nebo hrozby? {#doesntblock}

Předpokládejme, že chcete, aby AdGuard Home blokoval stránku `somebadsite.com`, ale z nějakého důvodu to nedělá. Pokusme se tento problém vyřešit.

Pravděpodobně jste nenakonfigurovali zařízení tak, aby používalo AdGuard Home jako výchozí DNS server. Zkontrolujte, zda používáte AdGuard Home jako výchozí DNS server:

1. Ve Windows otevřete příkazový řádek (_Start_ → _Spustit_ → `cmd.exe`). V jiných systémech otevřete aplikaci Terminal.

2. Spusťte příkaz `nslookup example.org`. Vypíše se něco takového:

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Zkontrolujte, zda IP adresa `serveru` je ta, na které běží AdGuard Home. Pokud tomu tak není, je třeba zařízení odpovídajícím způsobem nakonfigurovat. Podívejte se [níže](#defaultdns), jak to provést.

4. Ujistěte se, že se váš požadavek na `example.org` zobrazuje v uživatelském rozhraní AdGuard Home na stránce _Protokol dotazů_. Pokud tomu tak není, je třeba nakonfigurovat AdGuard Home tak, aby běžel na zadaném síťovém rozhraní. Nejjednodušší je přeinstalovat AdGuard Home s výchozím nastavením.

Pokud jste si jisti, že vaše zařízení používá AdGuard Home jako výchozí DNS server, ale problém přetrvává, může to být způsobeno nesprávnou konfigurací AdGuard Home. Zkontrolujte a ujistěte se, že:

1. Na stránce _Nastavení_ → _Obecná nastavení_ jste povolili nastavení _Blokovat domény pomocí filtrů a souborů hostitelů_.

2. Na stejné stránce jste povolili příslušné bezpečnostní mechanismy, například rodičovskou ochranu.

3. Povolili jste příslušné filtry na stránce _Filtry_ → _DNS seznamy zakázaných_.

4. Na stránce _Filtry_ → _DNS seznamy povolených_ nemáte povoleny žádné výjimky seznamů pravidel, které mohou povolit požadavky.

5. Nemáte žádné přepisy DNS, které by mohly zasahovat do _Filtrů_ → _Přepisů DNS_.

6. Nemáte žádná vlastní pravidla filtrování, která by mohla zasahovat do _Filtrů_ → _Vlastních pravidel filtrování_.

## What does “Blocked by CNAME or IP” in the query log mean? {#logs}

AdGuard Home checks both DNS requests and DNS responses to prevent an adblock evasion technique known as [CNAME cloaking][cname-cloak]. That is, if your filtering rules contain a domain, say `tracker.example`, and a DNS response for some other domain name, for example `blogs.example`, contains this domain name among its CNAME records, that response is blocked, because it actually leads to the blocked tracking service.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Kde si mohu prohlédnout protokoly? {#logs}

Výchozí umístění prostých textových protokolů (nezaměňovat s protokoly dotazů) závisí na operačním systému a režimu instalace:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** použijte příkaz `logread -e AdGuardHome`.

- **Linuxové** systémy se **systemd** a další **unixové** systémy s **SysV-style init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linuxové** systémy se **Snapcraft** používají příkaz `snap logs adguard-home`.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** používá se [Protokol událostí Windows][wlog].

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## Jak mohu nakonfigurovat AdGuard Home tak, aby zapisoval protokoly na úrovni verbose? {#verboselog}

Při řešení složitých problémů je někdy nutné použít protokolování na úrovni verbose. Zde najdete návod, jak to povolit:

1. Ukončete AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Nakonfigurujte AdGuard Home tak, aby zapisoval protokoly na úrovni verbose:

   1. Otevřete `AdGuardHome.yaml` ve svém editoru.

   2. Nastavte `log.file` na požadovanou cestu k souboru protokolu, např. `/tmp/aghlog.txt`. Upozorňujeme, že adresář musí existovat.

   3. Nastavte `log.verbose` na hodnotu `true`.

3. Restartujte AdGuard Home a reprodukujte problém:

   ```sh
   ./AdGuardHome -s start
   ```

4. Po dokončení ladění nastavte hodnotu `log.verbose` zpět na `false`.

## Jak zobrazím stránku s vlastním blokováním? {#customblock}

:::note

Než něco z toho provedete, mějte na paměti, že moderní prohlížeče jsou nastaveny na používání protokolu HTTPS, takže ověřují pravost certifikátu webového serveru. To znamená, že při použití kteréhokoli z nich se zobrazí varovné obrazovky.

Existuje řada navrhovaných rozšíření, která by v případě přiměřené podpory ze strany klientů poskytla lepší uživatelský komfort, včetně [RFC 8914 Extended DNS Error codes][rfc8914] a [DNS Access Denied Error Page RFC draft][rfcaccess]. Zavedeme je, až je prohlížeče začnou skutečně podporovat.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Předpoklady

Chcete-li některou z těchto metod použít k zobrazení vlastní stránky blokování, potřebujete server HTTP, který běží na některé IP adrese a obsluhuje danou stránku na všech trasách. Něco jako [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Stránka s vlastím blokováním pro filtry Rodičovská ochrana a Bezpečné prohlížení

V současné době není možné tyto parametry nastavit z uživatelského rozhraní, takže je nutné upravit konfigurační soubor ručně:

1. Ukončete AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Otevřete `AdGuardHome.yaml` ve svém editoru.

3. Nastavte `dns.parental_block_host` nebo `dns.safebrowsing_block_host` na IP adresu serveru (v tomto příkladu na `192.168.123.45`):

   ```yaml
   # …
   dns:
     # …

     # POZNÁMKA: Změňte na skutečnou IP adresu serveru.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Restartujte AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

### Stránka s vlastním blokováním pro další filtry

1. Otevřete webové UI.

2. Přejděte do _Nastavení_ → _Nastavení DNS._

3. V části _Konfigurace serveru DNS_ vyberte přepínač _Vlastní IP_ ve voliči _Režim blokování_ a zadejte adresy serverů IPv4 a IPv6.

4. Klikněte na _Uložit_.

## Jak změním adresu rozhraní ovládacího panelu? {#webaddr}

1. Ukončete AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Otevřete `AdGuardHome.yaml` ve svém editoru.

3. Nastavte `http.address` na nové síťové rozhraní. Např:

   - `0.0.0.0:0` k naslouchání na všech síťových rozhraní;
   - `0.0.0.0:8080` k naslouchání na všech síťových rozhraní s portem `8080`;
   - `127.0.0.1:0` k naslouchání pouze na místním rozhraní zpětné smyčky.

4. Restartujte AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

## Jak nastavím AdGuard Home jako výchozí DNS server? {#defaultdns}

Viz část [_Konfigurace zařízení_](getting-started.md#configure-devices) na stránce _Začínáme_.

## Jsou známa nějaká omezení? {#limitations}

Zde je několik příkladů toho, co blokátor na úrovni DNS nemůže blokovat:

- Reklamy YouTube, Twitch.

- Sponzorované příspěvky na Facebooku, X (dříve Twitter) a Instagramu.

V zásadě platí, že jakákoli reklama, která sdílí doménu s obsahem, nemůže být blokována blokátorem na úrovni DNS, pokud nejste připraveni blokovat i obsah.

### Existuje nějaká možnost, jak se s tím v budoucnu vypořádat?

DNS k tomu nikdy nebude stačit. Jedinou možností je použít proxy server pro blokování obsahu, jako je tomu v [aplikacích AdGuard][adguard]. V budoucnu přidáme podporu této funkce do AdGuard Home. Bohužel i pak se najdou případy, kdy to nebude stačit nebo to bude vyžadovat poměrně složitou konfiguraci.

[adguard]: https://adguard.com/

## Proč se mi při pokusu o instalaci v Ubuntu zobrazí chyba `bind: address already in use`? {#bindinuse}

K tomu dochází, protože port 53 na `localhost`, který se používá pro DNS, je již obsazen jiným programem. Ubuntu obsahuje lokální DNS nazvaný `systemd-resolved`, který používá adresu `127.0.0.53:53`, což brání tomu, aby se AdGuard Home vázal na adresu `127.0.0.1:53`. Můžete to zjistit spuštěním:

```sh
sudo lsof -i :53
```

Výstup by měl vypadat podobně jako:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

Chcete-li to napravit, musíte buď zakázat daemon `systemd-resolved`, nebo zvolit jiné síťové rozhraní a navázat AdGuard Home na přístupnou IP adresu, například IP adresu routeru uvnitř sítě. Pokud však potřebujete naslouchat na `localhost`, existuje několik řešení.

Za prvé, AdGuard Home může detekovat takové konfigurace a zakázat `systemd-resolved` za vás, pokud stisknete tlačítko _Opravit_ umístěné vedle zprávy `adresa je již používána` na instalační obrazovce.

Pokud to nepomůže, postupujte podle následujících pokynů. Upozorňujeme, že pokud používáte AdGuard Home s dockerem nebo snapem, budete to muset udělat sami.

1. V případě potřeby vytvořte adresář `/etc/systemd/resolved.conf.d`:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deaktivujte `DNSStubListener` a aktualizujte adresu DNS serveru. Za tímto účelem vytvořte nový soubor `/etc/systemd/resolved.conf.d/adguardhome.conf` s následujícím obsahem:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Jako adresu DNS serveru je **nutné zadat `127.0.0.1`.** Jinak bude název serveru `127.0.0.53`, což bez `DNSStubListener` nebude fungovat.

1. Aktivujte další soubor `resolv.conf`:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Restartujte `DNSStubListener`:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

Poté by se ve výstupu příkazu `lsof` nemělo zobrazovat `systemd-resolved` a AdGuard Home by měl být schopen navázat se na `127.0.0.1:53`.

## Jak nakonfigurovat reverzní proxy server pro AdGuard Home? {#reverseproxy}

Pokud již používáte webový server a chcete přistupovat k uživatelskému rozhraní hlavního panelu AdGuardu z adresy URL, jako je `http://YOUR_SERVER/aghome/`, můžete použít tuto konfiguraci pro svůj webový server:

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

Nebo pokud chcete AdGuard Home obsluhovat pouze pomocí automatického protokolu TLS, použijte konfiguraci podobnou níže uvedenému příkladu:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

Do not use subdirectories with the Apache reverse HTTP proxy.  It's a known issue ([#6604]) that Apache handles relative redirects differently than other web servers. This causes problems with the AdGuard Home web interface.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### Zakázání šifrování DoH v AdGuard Home

Pokud používáte TLS na reverzním proxy serveru, nemusíte používat TLS v AdGuard Home. Nastavením `allow_unencrypted_doh: true` v `AdGuardHome.yaml` umožníte AdGuard Home odpovídat na požadavky DoH bez šifrování TLS.

### Skutečné IP adresy klientů

Parametr `trusted_proxies` můžete nastavit na IP adresy proxy serveru HTTP, aby AdGuard Home zohlednil záhlaví obsahující skutečnou IP adresu klienta. Další informace naleznete na stránkách [konfigurace][conf] a [šifrování][encr].

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Jak opravím chyby `permission denied` v systému Fedora? {#fedora}

1. Přesuňte binární soubor `AdGuardHome` do adresáře `/usr/local/bin`.

2. Jako `root` proveďte následující příkaz pro změnu bezpečnostního kontextu souboru:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Přidejte požadovaná pravidla brány firewall, aby byla přístupná skrze síť. Např:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

Pokud stále dostáváte `code=exited status=203/EXEC` nebo podobné chyby ze `systemctl`, zkuste odinstalovat AdGuard Home a nainstalovat jej **přímo** do `/usr/local/bin` pomocí volby `-o` instalačního skriptu:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Viz [issue 765] a [issue 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## Jak opravím chyby `nekompatibilního souborového systému`? {#incompatfs}

Měli byste přesunout instalaci nebo pracovní adresář AdGuard Home do jiného umístění. Viz část [omezení](getting-started.md#limitations) na stránce _Začínáme_.

## What does `Error: control/version.json` mean? {#version-error}

This error message means that AdGuard Home was unable to reach AdGuard servers to check for updates and/or download them. This could mean that the servers are blocked by your ISP or are temporarily down. If the error does not resolve itself after some time, you can try performing a [manual update](#manual-update) or disabling the automatic update check by running the `AdGuardHome` executable with the `--no-check-update` command-line option.

## Jak mohu AdGuard Home aktualizovat ručně? {#manual-update}

Pokud se tlačítko nezobrazí nebo se automatická aktualizace nezdařila, můžete provést aktualizaci ručně. V níže uvedených příkladech použijeme verze AdGuard Home pro Linux a Windows pro procesory AMD64.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Stáhněte si nový balíček AdGuard Home ze [stránky vydání][releases]. Pokud chcete tento krok provést z příkazového řádku, zadejte:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Nebo pomocí `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Přejděte do adresáře, kde je AdGuard Home nainstalován. Ve většině unixových systémů je výchozí adresář `/opt/AdGuardHome`, ale v systému MacOS je to `/Applications/AdGuardHome`.

3. Ukončete AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   V systému OpenBSD budete pravděpodobně chtít použít `doas` místo `sudo`.

   :::

4. Zálohujte svá data. Tedy konfigurační soubor a adresář s daty (ve výchozím nastavení `AdGuardHome.yaml` a `data/`). Příklad pro zálohování dat do nového adresáře s názvem `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Rozbalte archiv AdGuard Home do dočasného adresáře. Pokud jste například stáhli archiv do adresáře `~/Downloads` a chcete jej rozbalit do adresáře `/tmp/`:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   V macOS zadejte něco jako:

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. Nahraďte starý spustitelný soubor AdGuard Home novým. Ve většině unixových systémů by měl příkaz vypadal takto:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   V macOS zadejte něco jako:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   Možná budete chtít zkopírovat také dokumentační části balíčku, například protokol změn (`CHANGELOG.md`), soubor README (`README.md`) a licenci (`LICENSE.txt`).

   Nyní můžete dočasný adresář odstranit.

7. Restartujte AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (pomocí PowerShell) {#manual-update-win}

Ve všech níže uvedených příkladech musí být PowerShell spuštěn jako správce.

1. Stáhněte si nový balíček AdGuard Home ze [stránky vydání][releases]. Pokud chcete tento krok provést z příkazového řádku:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Přejděte do adresáře, kde byl AdGuard Home nainstalován. V níže uvedených příkladech použijeme `C:\Program Files\AdGuardHome`.

3. Ukončete AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Zálohujte svá data. Tedy konfigurační soubor a adresář s daty (ve výchozím nastavení `AdGuardHome.yaml` a `data/`). Příklad pro zálohování dat do nového adresáře s názvem `my-agh-backup`:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Rozbalte archiv AdGuard Home do dočasného adresáře. Pokud jste například stáhli archiv do adresáře `Downloads` a chcete jej rozbalit do dočasného adresáře:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Nahraďte starý spustitelný soubor AdGuard Home novým. Např:

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   Možná budete chtít zkopírovat také dokumentační části balíčku, například protokol změn (`CHANGELOG.md`), soubor README (`README.md`) a licenci (`LICENSE.txt`).

   Nyní můžete dočasný adresář odstranit.

7. Restartujte AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## Jak odinstalovat AdGuard Home? {#uninstall}

V závislosti na tom, jak jste AdGuard Home nainstalovali, jej můžete odinstalovat různými způsoby.

:::caution

Před odinstalováním AdGuard Home nezapomeňte změnit konfiguraci zařízení a nasměrovat je na jiný DNS server.

:::

### Běžná instalace

V tomto případě postupujte následovně:

- Zrušte registraci služeb AdGuard Home: `./AdGuardHome -s uninstall`.

- Odeberte adresář AdGuard Home.

### Docker

Jednoduše ukončete a odstraňte obraz.

### Snap Store

```sh
snap remove adguard-home
```
