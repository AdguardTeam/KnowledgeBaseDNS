---
title: Überblick
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. Er fungiert als DNS-Server, der DNS-Anfragen an die entsprechenden vorgelagerten Resolver weiterleitet.

[AdGuard DNS]: https://adguard-dns.io/de/

## Schnellstart {#start}

Unterstützte Betriebssysteme:

- Linux
- macOS
- Windows

Unterstützte CPU-Architekturen:

- 64-bit ARM
- AMD64
- i386

## Erste Schritte {#start-basic}

### Unix-ähnliche Betriebssysteme {#start-basic-unix}

1. Laden Sie das `.tar.gz`- oder `.zip`-Archiv von der [Seite für Veröffentlichungen][releases] herunter und entpacken Sie es.

   :::caution

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Installieren Sie ihn als Dienst, indem Sie Folgendes ausführen:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Bearbeiten Sie die Konfigurationsdatei `config.yaml`.

4. Starten Sie den Dienst:

   ```sh
   ./adguarddns-cli -s start -v
   ```

Um zu überprüfen, ob es funktioniert, verwenden Sie ein beliebiges DNS-Prüfprogramm. Zum Beispiel unter Verwendung von `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

Laden Sie einfach das MSI-Installationsprogramm von der [Seite für Veröffentlichungen][releases] herunter und installieren Sie es.

Um zu überprüfen, ob es funktioniert, verwenden Sie ein beliebiges DNS-Prüfprogramm. Zum Beispiel mit `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Kommandozeilenoptionen {#opts}

Jede Option überschreibt den entsprechenden Wert, der in der Konfigurationsdatei und der Umgebung angegeben ist.

### Hilfe {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### Dienst {#opts-service}

Die Option `-s <value>` gibt die Aktion des Betriebssystemdienstes an. Mögliche Werte sind:

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### Ausführlich {#opts-verbose}

Die Option `-v` aktiviert die ausführliche Protokollausgabe.

### Version {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

## Konfiguration {#conf}

### Datei {#conf-file}

Die YAML-Konfigurationsdatei wird in [eigenem Artikel][conf] beschrieben, und es gibt auch eine Beispielkonfigurationsdatei `config.dist.yaml`.  Einige Konfigurationsparameter können auch mit der Option [environment][env] überschrieben werden.

[conf]: configuration.md
[env]: environment.md

## Beendigungscodes {#exit-codes}

Es gibt einige verschiedene Beendigungscodes, die unter verschiedenen Fehlerbedingungen auftreten können:

- `0`: Erfolgreich abgeschlossen und beendet, keine Fehler.

- `1`: Interner Fehler, höchstwahrscheinlich eine Fehlkonfiguration.

- `2`: Falsches Kommandozeilenargument oder falscher Wert.
