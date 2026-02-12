---
title: Přehled
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## Co je AdGuard DNS CLI?

Lehký multiplatformní klient DNS pro [AdGuard DNS]. Funguje jako DNS server, který předává požadavky DNS odpovídajícím odchozím řešitelům.

[AdGuard DNS]: https://adguard-dns.io

## Rychlé spuštění {#start}

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

   V macOS je zásadní, aby globálně nainstalované démony vlastnil `root` (viz dokumentace [`launchd`][launchd-requirements]), takže spustitelný soubor `adguarddns-cli` musí být umístěn v adresáři `/Applications/` nebo jeho podadresář.

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

Možnost `-h` způsobí, že AdGuard DNS CLI vytiskne zprávu nápovědy na standardní výstup a ukončí se s kódem stavu úspěchu.

### Služba {#opts-service}

Možnost `-s <value>` určuje akci služby operačního systému. Přípustné hodnoty jsou:

- `install`: nainstaluje AdGuard DNS CLI jako službu
- `restart`: restartuje běžící službu AdGuard DNS CLI
- `start`: spustí nainstalovanou službu AdGuard DNS CLI
- `status`: zobrazí stav nainstalované služby AdGuard DNS CLI
- `stop`: ukončí spuštěný AdGuard DNS CLI
- `uninstall`: odinstaluje službu AdGuard DNS CLI

### Verbose {#opts-verbose}

Možnost `-v` umožňuje podrobný výstup protokolu.

### Verze {#opts-version}

Možnost `--version` způsobí, že AdGuard DNS CLI vypíše verzi aplikace na standardní výstup a ukončí se stavovým kódem úspěchu.

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
