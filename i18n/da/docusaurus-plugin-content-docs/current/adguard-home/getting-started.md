---
title: Komme i gang
sidebar_position: 2
---

## Installation {#installation}

### Officielle udgivelser

Download arkivet med den binære fil til operativsystemet fra \[siden Seneste stabile udgivelser]\[Udgivelser]. Den fulde liste over understøttede platforme samt links til beta og edge (ustabile) udgivelser kan findes på \[vores side platforme]\[Platforme].

For at installere AdGuard Home som en tjeneste, udpak arkivet, gå til mappen 'AdGuardHome' og eksekvér:

```sh
./AdGuardHome -s install
```

#### Notater

- Brugere af **Fedora Linux** og afledte heraf: Installér AdGuard Home i mappen `/usr/local/bin`. Gøres det ikke, kan det forårsage problemer med SELinux og tilladelser. Se \[problematik 765] og \[problematik 3281].

- Brugere af **macOS 10.15 Catalina** og senere bør placere AdGuard Home-arbejdsmappen i mappen `/Applications`.

### Docker og Snap

Vi leverer også en [officiel AdGuard Home docker-afbildning][docker] og en [officiel Snap Store-pakke][snap] til erfarne brugere.

### Øvrigt

Nogle andre uofficielle muligheder indbefatter:

- [Home Assistant-tilføjelse][has] vedligeholdt af [@frenck](https://github.com/frenck).

- [OpenWrt LUCI-app][luci] vedligeholdes af [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm] og andre Arch-baserede OS'er kan bygge via [`adguardhome`-pakken][aghaur] i [AUR][aur] vedligeholdt af [@graysky2](https://github.com/graysky2).

- [Cloudron-app][cloudron] vedligeholdes af [@gramakri](https://github.com/gramakri).

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

## Første start {#first-time}

Tjek først og fremmest firewallindstillingerne. Flg. porte og protokoller være tilgængelige for at installere og anvende AdGuard Home:

- 3000/TCP til den indledende installation;
- 80/TCP til webgrænsefladen;
- 53/UDP til DNS-serveren.

Der skal muligvis åbnes yderligere porte til andre protokoller end alm. DNS, f.eks. DNS-over-HTTPS.

DNS-servere tilknyttes port 53, hvilket kræver superbrugerprivilegier det meste af tiden, [se nedenfor](#running-without-superuser). Derfor skal den på Unix-systemer køres med 'sudo' eller 'doas' i terminalen:

```sh
sudo ./AdGuardHome
```

På Windows skal `cmd.exe` eller PowerShell eksekveres med administratorrettigheder og `AdGuardHome.exe` eksekveres derfra.

Når AdGuard Home afvikles for første gang, begynder den at lytte på `0.0.0.0:3000` og anmoder om at åbne den i webbrowseren:

```none
AdGuard Home er tilgængelig på flg. adresser:
gå til http://127.0.0.1:3000
gå til http://[::1]:3000
[…]
```

Der kan man gennemgå den indledende opsætningsguide.

![AdGuard Home network interface selection screen](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![AdGuard Home user creation screen](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Se [vores artikel om at køre AdGuard Home sikkert](running-securely.md) for vejledning i, hvordan man vælger den indledende opsætning, der passer bedst.

## Kørsel som en tjeneste {#service}

Næste trin vil være at registrere AdGuard Home som en systemtjeneste (såkaldt daemon). For at installere AdGuard Home som en tjeneste, eksekvér:

```sh
sudo ./AdGuardHome -s install
```

Eksekvér på Windows `cmd.exe` med administratorrettigheder og eksekvér `AdGuardHome.exe -s install` for at registrere en Windows-tjeneste.

Her er de andre kommandoer, som muligvis skal bruges til håndtering af tjenesten:

- `AdGuardHome -s uninstall`: Afinstallerer AdGuard Home-tjenesten.
- `AdGuardHome -s start`: Starter tjenesten.
- `AdGuardHome -s stop`: Stopper tjenesten.
- `AdGuardHome -s restart`: Genstarter tjenesten.
- `AdGuardHome -s status`: Vis den aktuelle tjenestestatus.

### Logfiler

Som standard skrives logfilerne til `stderr`, når AdGuard Home køres i en terminal. Køres den som en tjeneste, afhænger logoutputtet af platformen:

- På macOS skrives loggen til `/var/log/AdGuardHome.*.log`-filer.

- På andre Unix-varianter skrives loggen til 'syslog' eller 'journald'.

- På Windows skrives loggen til Windows-hændelsesloggen.

Denne adfærd kan ændres i AdGuard Home-[opsætningsfilen][conf].

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Opdatering {#update}

![Et eksempel på en opdateringsnotifikation](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Når en ny version frigives, viser AdGuard Home-UI'en en notifikation samt knappen _Opdatér nu_. Klik på denne knap, hvorefter AdGuard Home automatisk opdateres til seneste version. Den aktuelle AdGuard Home-eksekverbare fil gemmes i 'backup'-mappen sammen med den aktuelle opsætningsfil, så man om nødvendigt kan fortryde evt. ændringer.

### Manuel opdatering {#manual-update}

Hvis knappen ikke vises, eller en automatisk opdatering mislykkedes, kan opdatering ske manuelt. Vi har en [detaljeret guide til manuelle opdateringer][mupd], men kort sagt:

1. Download den nye AdGuard Home-pakke.

2. Udpak den til en midlertidig mappe.

3. Erstat den gamle AdGuard Home eksekverbare fil med den nye.

4. Genstart AdGuard Home.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Opdateringer til Docker, Home Assistant og Snapcraft

Auto-opdateringer til Docker-, Hass.io/Home Assistant- og Snapcraft-installationer er deaktiveret. Opdatér afbildningen i stedet for.

### Kommandolinjeopdatering

For at opdatere AdGuard Home-pakken uden at skulle bruge Web API, eksekvér:

```sh
./AdGuardHome --update
```

## Opsætning af enheder {#configure-devices}

### Router

Denne opsætning dækker automatisk alle enheder tilsluttet hjemmerouteren uden behov for manuelt at skulle opsætte nogen enhed.

1. Åbn præferencerne for routeren. Disse kan normalt tilgås med en webbrowser via en URL, såsom http\://192.168.0.1/ eller http\://192.168.1.1/. Der kan blive anmodet om adgangskode. Kan man ikke huske denne, kan man ofte nulstille adgangskoden ved at trykke på en knap på selve routeren, men vær dog opmærksom på, at man med denne fremgangsmåde typisk mister hele routeropsætningen. Kræver routeren en app for at opsætte den, installér appen på en telefon eller PC og brug den for at tilgå routerens indstillinger.

2. Find DHCP/DNS-indstillingerne. Se efter bogstaverne DNS ved siden af et felt, der tillader to eller tre sæt tal, hver opdelt i fire grupper med et til tre cifre.

3. Angiv AdGuard Home-serveradresserne dér.

4. Visse routertyper understøtter ikke opsætning af en tilpasset DNS-server. I så fald kan det hjælpe at opsætte AdGuard Home som DHCP-server. Ellers bør routermanualen tjekkes for at se, hvordan DNS-servere kan tilpasses på den givne routermodel.

### Windows

1. Åbn _Kontrolpanel_ via menuen Start eller en Windows-søgning.

2. Gå til _Netværk og Internet_ og dernæst til _Netværks- og delingscenter_.

3. Find knappen "Skift adapterindstillinger" til venstre på skærmen, klik på den.

4. Vælg den aktive forbindelse, højreklik på den og vælg _Egenskaber_.

5. Find _Internet Protocol Version 4 (TCP/IPv4)_ (eller for IPv6, _Internet Protocol Version 6 (TCP/IPv6)_) på listen, vælg den og klik dernæst på _Egenskaber_ igen.

6. Vælg _Brug følgende DNS-serveradresser_ og angiv AdGuard Home-serveradresserne.

### macOS

1. Klik på Apple-ikonet og gå til _Systempræferencer_.

2. Klik på _Netværk_.

3. Vælg den første forbindelse på listen, og klik på _Avanceret_.

4. Vælg fanen DNS og angiv AdGuard Home-serveradresserne.

### Android

:::note

Vejledningen til Android-enheder kan variere afhængigt af OS-version og producent.

:::

1. Tryk på _Indstillinger_ fra Android-menustartskærmen.

2. Tryk på _Wi-Fi_ i menuen. Skærmen med alle tilgængelige netværk vises (det er ikke muligt at indstille tilpasset DNS for mobilforbindelsen).

3. Langt tryk på netværket, der er oprettet forbindelse til, og tryk dernæst på _Redigér Netværk_.

4. På visse enheder skal afkrydsningsfeltet ud for _Avanceret_ muligvis markeres for at se flere indstillinger. For at justere Android DNS-indstillingerne, ændr IP-indstillingerne fra _DHCP_ til _Statisk_.

5. Skift de indstillede DNS 1- og DNS 2-værdier til AdGuard Home-serveradresserne.

### iOS

1. Tryk på _Indstillinger_ fra Startskærmen.

2. Vælg _Wi-Fi_ i menuen til venstre (det er ikke muligt at opsætte DNS for mobilnetværker).

3. Tryk på navnet på det aktuelt aktive netværk.

4. Angiv AdGuard Home-serveradresserne i feltet _DNS_.

## Kørsel uden superbruger {#running-without-superuser}

AdGuard Home kan køres uden superbrugerrettigheder, men den binære skal enten tildeles en funktion (på Linux) eller opsættes til brug af en anden port (alle platforme).

### Tildeling af de nødvendige funktioner (kun Linux)

Brug af denne metode kræver `setcap`-værktøjet. Det skal muligvis installeres vha. af Linux-distributionens pakkehåndtering.

For at tillade, at AdGuard Home på Linux kan lytte på port 53 uden superbrugerrettigheder og tilknytte dens DNS-servere til en bestemt grænseflade, kør:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Kør derefter `./AdGuardHome` som en ikke-privilegeret bruger.

### Skift af DNS-lytteporten

For at opsætte AdGuard Home til at lytte på en port, der ikke kræver superbrugerrettigheder, stop AdGuard Home, åbne `AdGuardHome.yaml` i editoren og find disse linjer:

```yaml
dns:
    # …
    port: 53
```

Porten kan skiftes til alt over 1024 for at undgå kravet om superbrugerrettigheder.

## Begrænsninger {#limitations}

Nogle filsystemer understøtter ikke `mmap(2)`-systemkaldet, der kræves af statistiksystemet. Se også \[problematik 1188].

Dette problem kan løses:

- enten ved at levere `--work-dir DIRECTORY`-argumenterne til `AdGuardHome`-binæren. Denne mulighed vil instruere AGH i at bruge en anden mappe til alle sine filer i stedet for standardmappen `./data`.

- eller ved at oprette symbolske links, som peger på et andet filsystem, der understøtter `mmap(2)` (f.eks. tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
