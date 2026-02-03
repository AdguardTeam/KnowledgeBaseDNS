---
title: Oversigt
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. Den fungerer som en DNS-server, der videresender DNS-forespørgsler til de korresponderende upstream-opløsere.

[AdGuard DNS]: https://adguard-dns.io

## Hurtigstart {#start}

:::caution

AdGuard DNS CLI is still in the Beta stage. Den kan være ustabil.

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

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Installér den som en tjeneste ved at eksekvere:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Redigér opsætningsfilen `config.yaml`.

4. Start tjenesten:

   ```sh
   ./adguarddns-cli -s start -v
   ```

For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolværktøj. F.eks. ved at bruge `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

Download og installér blot vha. MSI-installationsprogrammet fra [udgivelsessiden][releases].

For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolværktøj. F.eks. ved at bruge `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Kommandolinjemuligheder {#opts}

Hver valgmulighed tilsidesætter den korresponderende værdi fra opsætningsfilen og miljøet.

### Hjælp {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### Tjeneste {#opts-service}

Mulighed `-s <value>` angiver OS-tjenestehandlingen. Gyldige værdier er:

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### Udførlig {#opts-verbose}

Valgmulighed `-v` aktiverer det udførlige logoutput.

### Version {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

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
