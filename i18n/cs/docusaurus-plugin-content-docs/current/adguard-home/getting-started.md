---
title: Začínáme
sidebar_position: 2
---

## Instalace {#installation}

### Oficiální vydání

Stáhněte si archiv s binárním souborem pro váš operační systém ze stránky [poslední stabilní verze][releases]. Úplný seznam podporovaných platforem a odkazy na beta verze a okrajové (nestabilní) verze naleznete na [naší stránce platforem][platforms].

Chcete-li nainstalovat AdGuard Home jako službu, rozbalte archiv, zadejte adresář `AdGuardHome` a spusťte:

```sh
./AdGuardHome -s install
```

#### Poznámky

- Uživatelé **Fedora Linux** a jeho derivátů: nainstalujte AdGuard Home do adresáře `/usr/local/bin`. Pokud tak neučiníte, může to způsobit problémy s SELinux a oprávněními. Viz [issue 765] a [issue 3281].

- Uživatelé **macOS 10.15 Catalina** a novějších by měli pracovní adresář AdGuard Home umístit do adresáře `/Applications`.

### Docker a Snap

Pro zkušené uživatele poskytujeme také [oficiální obraz dockeru AdGuard Home][docker] a [oficiální balíček Snap Store][snap].

### Další

Mezi další neoficiální možnosti patří:

- [Doplňek Home Assistant][has] spravuje [@frenck](https://github.com/frenck).

- [Aplikace OpenWrt LUCI][luci] spravuje [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm] a další operační systémy založené na archu lze sestavit pomocí balíčku [`adguardhome`][aghaur] v [AUR][aur] spravovaném [@graysky2](https://github.com/graysky2).

- [Aplikace Cloudron][cloudron] spravuje [@gramakri](https://github.com/gramakri).

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## První spuštění {#first-time}

Nejprve zkontrolujte nastavení brány firewall. Chcete-li nainstalovat a používat AdGuard Home, musí být k dispozici následující porty a protokoly:

- 3000/TCP pro prvotní instalaci;
- 80/TCP pro webové rozhraní;
- 53/UDP pro DNS server.

Možná bude nutné otevřít další porty pro jiné protokoly než běžný DNS, například DNS-over-HTTPS.

DNS servery se vážou na port 53, což většinou vyžaduje oprávnění superuživatele, [viz níže](#running-without-superuser). Na unixových systémech jej proto musíte spustit pomocí `sudo` nebo `doas` v terminálu:

```sh
sudo ./AdGuardHome
```

V systému Windows spusťte `cmd.exe` nebo PowerShell s právy správce a spusťte `AdGuardHome.exe`.

Při prvním spuštění začne AdGuard Home naslouchat na `0.0.0.0:3000` a vyzve vás, abyste jej otevřeli v prohlížeči:

```none
AdGuard Home je k dispozici na následujících adresách:
go to http://127.0.0.1:3000
go to http://[::1]:3000
[…]
```

Zde projdete průvodcem počáteční konfigurací.

![Obrazovka výběru síťového rozhraní AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![Obrazovka pro vytvoření uživatele AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Podívejte se na [náš článek o bezpečném spuštění AdGuard Home](running-securely.md), kde najdete návod, jak vybrat počáteční konfiguraci, která vám bude nejlépe vyhovovat.

## Spuštění jako služba {#service}

Dalším krokem bude registrace AdGuard Home jako systémové služby (neboli démona). Chcete-li nainstalovat AdGuard Home jako službu, spusťte:

```sh
sudo ./AdGuardHome -s install
```

V systému Windows spusťte `cmd.exe` s právy správce a spusťte `AdGuardHome.exe -s install` pro registraci služby Windows.

Zde jsou uvedeny další příkazy, které můžete potřebovat k ovládání služby:

- `AdGuardHome -s uninstall`: Odinstalování služby AdGuard Home.
- `AdGuardHome -s start`: Spuštění služby.
- `AdGuardHome -s stop`: Ukončení služby.
- `AdGuardHome -s restart`: Restartování služby.
- `AdGuardHome -s status`: Zobrazení aktuálního stavu služby.

### Protokoly

Ve výchozím nastavení se protokoly při spuštění AdGuard Home v terminálu zapisují do `stderr`. Pokud příkazspustíte jako službu, výstup protokolu závisí na platformě:

- V macOS se protokol zapisuje do souborů `/var/log/AdGuardHome.*.log`.

- V ostatních unixech se protokol zapisuje do `syslog` nebo `journald`.

- Ve Windows se protokol zapisuje do protokolu událostí Windows.

Toto chování můžete změnit v [konfiguračním souboru][conf] AdGuard Home.

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Aktualizace {#update}

![Příklad oznámení o aktualizaci](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Při vydání nové verze se v uživatelském rozhraní AdGuard Home zobrazí oznámení a tlačítko _Aktualizovat nyní_. Po kliknutí na toto tlačítko bude AdGuard Home automaticky aktualizován na nejnovější verzi. Aktuální spustitelný soubor AdGuard Home je uložen v adresáři `backup` spolu s aktuálním konfiguračním souborem, takže v případě potřeby můžete změny vrátit.

### Ruční aktualizace {#manual-update}

Pokud se tlačítko nezobrazí nebo se automatická aktualizace nezdařila, můžete provést aktualizaci ručně. Máme [podrobný návod na ruční aktualizace][mupd], ale ve zkratce:

1. Stáhněte nový balíček AdGuard Home.

2. Rozbalte jej do dočasného adresáře.

3. Nahraďte starý spustitelný soubor AdGuard Home novým.

4. Restartujte AdGuard Home.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Aktualizace pro Docker, Home Assistant a Snapcraft

Automatické aktualizace pro Docker, Hass.io/Home Assistant a Snapcraft jsou zakázány. Místo toho aktualizujte obraz.

### Aktualizace pomocí příkazového řádku

Chcete-li aktualizovat balíček AdGuard Home bez použití rozhraní Web API, spusťte:

```sh
./AdGuardHome --update
```

## Konfigurace zařízení {#configure-devices}

### Router

Toto nastavení automaticky pokryje všechna zařízení připojená k Vašemu domácímu routeru a nebudete je muset konfigurovat ručně.

1. Otevřete předvolby routeru. Obvykle se k němu dostanete z prohlížeče prostřednictvím adresy URL, například http://192.168.0.1/ nebo http://192.168.1.1/. Můžete být vyzváni k zadání hesla. Pokud si ho nepamatujete, můžete heslo resetovat stisknutím tlačítka na samotném routeru, ale mějte na paměti, že pokud zvolíte tento postup, pravděpodobně přijdete o celou konfiguraci routeru. Pokud váš router vyžaduje k nastavení aplikaci, nainstalujte si ji do telefonu nebo počítače a použijte ji k přístupu k nastavení routeru.

2. Vyhledejte nastavení DHCP/DNS. Hledejte písmena DNS vedle pole, které umožňuje zadat dvě nebo tři sady čísel, z nichž každá je rozdělena do čtyř skupin po jedné až třech číslicích.

3. Zadejte adresy vašeho serveru AdGuard Home.

4. U některých typů routerů nelze nastavit vlastní DNS server. V takovém případě může pomoci nastavení AdGuard Home jako serveru DHCP. V opačném případě byste měli nahlédnout do příručky k routeru a zjistit, jak přizpůsobit DNS servery v konkrétním modelu routeru.

### Windows

1. Otevřete _ovládací panel_ prostřednictvím nabídky Start nebo vyhledání v systému Windows.

2. Přejděte na _Síť a Internet_ a poté na _Centrum sítí a sdílení_.

3. Na levé straně obrazovky vyhledejte tlačítko _Změnit nastavení adaptéru_ a klepněte na něj.

4. Vyberte své aktivní spojení, klikněte na něj pravým tlačítkem myši a zvolte _Vlastnosti_.

5. V seznamu vyhledejte _Internet Protocol Version 4 (TCP/IP)_, (nebo IPv6, _Internet Protocol Version 6 (TCP/IPv6)_), vyberte jej a znovu klikněte na _Vlastnosti._

6. Zvolte _Použít následující adresy serveru DNS_ a zadejte adresy serveru AdGuard Home.

### macOS

1. Klikněte na ikonu Apple a přejděte na položku _Systémové předvolby_.

2. Klikněte na _Síť_.

3. Vyberte první připojení v seznamu a klepněte na tlačítko _Pokročilé_.

4. Vyberte kartu DNS a zadejte adresy serveru AdGuard Home.

### Android

:::note

Pokyny pro zařízení se systémem Android se mohou lišit v závislosti na verzi operačního systému a výrobci.

:::

1. Na domovské obrazovce nabídky Android klepněte na _Nastavení_.

2. V nabídce klepněte na _Wi-Fi_. Zobrazí se obrazovka se všemi dostupnými sítěmi (pro mobilní připojení nelze nastavit vlastní DNS).

3. Dlouze stiskněte síť, ke které jste připojeni a klepněte na _Změnit síť_.

4. Na některých zařízeních může být nutné zaškrtnout políčko _Pokročilé_, aby se zobrazilo více nastavení. Chcete-li upravit nastavení DNS systému Android, musíte změnit nastavení IP z _DHCP_ na _Statický_.

5. Změňte nastavené hodnoty DNS 1 a DNS 2 na adresy serveru AdGuard Home.

### iOS

1. Na domovské obrazovce klepněte na _Nastavení_.

2. V levé nabídce vyberte _Wi-Fi_ (pro mobilní sítě nelze konfigurovat DNS).

3. Klepněte na název aktuální aktivní sítě.

4. Do políčka _DNS_ zadejte adresy serveru AdGuard Home.

## Spuštění bez oprávnění superuser {#running-without-superuser}

AdGuard Home můžete spustit bez oprávnění superuser, ale musíte binárnímu souboru buď udělit oprávnění (v systému Linux), nebo mu nařídit, aby používal jiný port (všechny platformy).

### Udělení potřebných funkcí (pouze Linux)

Použití této metody vyžaduje nástroj `setcap`. Možná jej budete muset nainstalovat pomocí správce balíčků vaší distribuce Linuxu.

Chcete-li, aby AdGuard Home spuštěný v systému Linux naslouchal na portu 53 bez oprávnění superuser a vázal své DNS servery na určité rozhraní, spusťte:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Poté spusťte `./AdGuardHome` jako neprivilegovaný uživatel.

### Změna portu naslouchání DNS

Chcete-li nakonfigurovat AdGuard Home tak, aby naslouchal na portu, který nevyžaduje oprávnění superuser, ukončete AdGuard Home, otevřete soubor `AdGuardHome.yaml` v editoru a vyhledejte tyto řádky:

```yaml
dns:
    # …
    port: 53
```

Port můžete změnit na libovolnou hodnotu vyšší než 1024, abyste se vyhnuli požadavku na oprávnění superuser.

## Omezení {#limitations}

Některé souborové systémy nepodporují systémové volání `mmap(2)` vyžadované systémem statistik. Viz také [issue 1188].

Tento problém můžete vyřešit:

- buď zadáním argumentů `--work-dir DIRECTORY` do binárního souboru `AdGuardHome`. Tato volba donutí AGH, aby pro všechny své soubory použil jiný adresář namísto výchozího adresáře `./data`.

- nebo vytvořením symbolických odkazů směřujících na jiný souborový systém, který podporuje `mmap(2)` (například tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
