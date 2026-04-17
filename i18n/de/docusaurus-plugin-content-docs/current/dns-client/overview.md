---
title: Überblick
sidebar_position: 1
---


## Was ist AdGuard DNS CLI?

Ein plattformübergreifender, schlanker DNS-Client für [AdGuard DNS]. Er fungiert als DNS-Server, der DNS-Anfragen an die entsprechenden vorgelagerten Resolver weiterleitet.

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

   Auf macOS ist es entscheidend, dass global installierte Daemons von `root` gehört (siehe [`launchd`-Dokumentation][launchd-requirements]), daher muss die ausführbare Datei `adguarddns-cli` im Verzeichnis `/Applications/` oder dessen Unterverzeichnis platziert werden.

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

Die Option `-h` bewirkt, dass AdGuard DNS CLI eine Hilfemeldung auf der Standardausgabe ausgibt und mit einem Erfolgsstatuscode beendet wird.

### Dienst {#opts-service}

Die Option `-s <value>` gibt die Aktion des Betriebssystemdienstes an. Mögliche Werte sind:

- `install`: installiert den AdGuard DNS CLI als Dienst
- `restart`: startet den laufenden Dienst AdGuard DNS CLI neu
- `start`: startet den installierten Dienst AdGuard DNS CLI
- `status`: zeigt den Status des installierten Dienstes AdGuard DNS CLI
- `stop`: beendet den laufenden AdGuard DNS CLI
- `uninstall`: deinstalliert den Dienst AdGuard DNS CLI

### Ausführlich {#opts-verbose}

Die Option `-v` aktiviert die ausführliche Protokollausgabe.

### Version {#opts-version}

Die Option `--version` veranlasst AdGuard DNS CLI, die Version der Anwendung auf der Standardausgabe auszugeben und mit einem Erfolgsstatuscode zu beenden.

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
