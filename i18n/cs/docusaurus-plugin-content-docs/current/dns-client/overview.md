---
title: Přehled
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. Funguje jako DNS server, který předává požadavky DNS odpovídajícím odchozím řešitelům.

[AdGuard DNS]: https://adguard-dns.io

## Rychlé spuštění {#start}

:::caution

AdGuard DNS CLI is still in the Beta stage. Může být nestabilní.

:::

Podporované operační systémy:

- Linux
- macOS
- Windows

Podporované architektury CPU:

- 64-bit ARM
- AMD64
- i386

## Začínáme {#start-basic}

### Operační systémy podobné Unixu {#start-basic-unix}

1. Stáhněte a rozbalte archiv `.tar.gz` nebo `.zip` ze [stránky vydání][releases].

   :::caution

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Nainstalujte jej jako službu spuštěním:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Upravte konfigurační soubor `config.yaml`.

4. Spusťte službu:

   ```sh
   ./adguarddns-cli -s start -v
   ```

Chcete-li zkontrolovat, zda funguje, použijte libovolný nástroj pro kontrolu DNS. Například pomocí `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

Stačí stáhnout a nainstalovat pomocí instalačního programu MSI ze [stránky vydání][releases].

Chcete-li zkontrolovat, zda funguje, použijte libovolný nástroj pro kontrolu DNS. Například pomocí `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Možnosti příkazového řádku {#opts}

Každá volba přepíše odpovídající hodnotu uvedenou v konfiguračním souboru a prostředí.

### Nápověda {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### Služba {#opts-service}

Možnost `-s <value>` určuje akci služby operačního systému. Přípustné hodnoty jsou:

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### Verbose {#opts-verbose}

Možnost `-v` umožňuje podrobný výstup protokolu.

### Verze {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

## Konfigurace {#conf}

### Soubor {#conf-file}

Konfigurační soubor YAML je popsán ve [vlastním článku][conf] a k dispozici je také ukázkový konfigurační soubor `config.dist.yaml`.  Některé konfigurační parametry lze také nadefinovat pomocí příkazu [environment][env].

[conf]: configuration.md
[env]: environment.md

## Výstupní kódy {#exit-codes}

Existuje několik různých kódů ukončení, které se mohou objevit při různých chybových stavech:

- `0`: Úspěšně dokončeno a ukončeno, žádné chyby.

- `1`: Interní chyba, pravděpodobně chybná konfigurace.

- `2`: Chybný argument nebo hodnota příkazového řádku.
