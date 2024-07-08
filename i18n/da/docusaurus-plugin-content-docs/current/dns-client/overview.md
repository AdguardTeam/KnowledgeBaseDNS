---
title: Oversigt
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## Hvad er AdGuard DNS Client?

En krydsplatforms, letvægts DNS-klient til [AdGuard DNS][agdns]. Den fungerer som en DNS-server, der videresender DNS-forespørgsler til de korresponderende upstream-opløsere.

[agdns]: https://adguard-dns.io

## Hurtigstart {#start}

:::caution

AdGuard DNS Client er stadig i betastadiet. Den kan være ustabil.

:::

Understøttede operativsystemer:

- Linux
- macOS
- Windows

Understøttede CPU-arkitekturer:

- 64-bit ARM
- AMD64
- i386

## Komme i gang {#start-basic}

### UNIX-agtig operativsystemer {#start-basic-unix}

1. Download og udpak `.tar.gz`- eller `.zip`-arkivet fra [udgivelsessiden][releases].

   :::caution

   På macOS er det afgørende, at globalt installerede daemons ejes af `root` (se \[`launchd`-dokumentationen]\[launchd-krav]), så den eksekverbare `AdGuardDNSClient` skal placeres i mappen `/Applications/` eller dens undermappe.

   :::

2. Installér den som en tjeneste ved at eksekvere:

   ```sh
   ./AdGuardDNSClient -s install -v
   ```

3. Redigér opsætningsfilen `config.yaml`.

4. Start tjenesten:

   ```sh
   ./AdGuardDNSClient -s start -v
   ```

For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolværktøj. F.eks. ved at bruge `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Download og installér blot vha. MSI-installationsprogrammet fra [udgivelsessiden][releases].

For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolværktøj. F.eks. ved at bruge `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Kommandolinjemuligheder {#opts}

Hver valgmulighed tilsidesætter den korresponderende værdi fra opsætningsfilen og miljøet.

### Hjælp {#opts-help}

Valgmulighed `-h` får AdGuard DNS Client til at udskrive en hjælpemeddelelse til standardoutput og afslutte med en succes-statuskode.

### Tjeneste {#opts-service}

Mulighed `-s <value>` angiver OS-tjenestehandlingen. Gyldige værdier er:

- `install`: Installerer AdGuard DNS Client som en tjeneste
- `restart`: Genstarter den kørende AdGuard DNS Client-tjeneste
- `start`: Starter den installerede AdGuard DNS Client-tjeneste
- `status`: Viser statussen på den installerede AdGuard DNS Client-tjeneste
- `stop`: Stopper den kørende AdGuard DNS Client
- `uninstall`: Afinstallerer AdGuard DNS Client-tjenesten

### Udførlig {#opts-verbose}

Valgmulighed `-v` aktiverer det udførlige logoutput.

### Version {#opts-version}

Valgmulighed `--version` får AdGuard DNS Client til at udskrive versionen på den eksekverbare `AdGuardDNSClient` til standardoutput og afslutte med en succes-statuskode.

## Opsætning {#conf}

### Fil {#conf-file}

YAML-opsætningsfilen er beskrevet i [sin egen artikel][conf], og der findes også en eksempel-opsætningsfil `config.dist.yaml`.  Visse opsætningsparametre kan også tilsidesættes vha. [environment][env].

[conf]: configuration.md
[env]: environment.md

## Afslutningskoder {#exit-codes}

Der er et nogle forskellige afslutningskoder, som kan vises under forskellige fejltilstande:

- `0`: Fuldført og afsluttet, ingen fejl.

- `1`: Intern fejl, højst sandsynligt en fejlopsætning.

- `2`: Forkert kommandolinjeargument eller -værdi.
