---
title: Panoramica
sidebar_position: 1
---


## Cos'è AdGuard DNS CLI?

C'è un client DNS leggero e multipiattaforma per [AdGuard DNS]. Funziona come un server DNS che inoltra le richieste DNS ai resolver upstream corrispondenti.

[AdGuard DNS]: https://adguard-dns.io

## Avvio rapido {#start}

Sistemi operativi supportati:

- Linux
- macOS
- Windows

Architetture CPU supportate:

- ARM a 64 bit
- AMD64
- i386

## Iniziare {#start-basic}

### Sistemi operativi simili a Unix {#start-basic-unix}

1. Scarica e decomprimi l'archivio `.tar.gz` o `.zip` dalla [pagina delle release][releases].

   :::caution

   Su macOS, è fondamentale che i daemon installati a livello globale siano di proprietà di `root` (vedi la [documentazione di `launchd`][launchd-requirements]), quindi l'eseguibile `adguarddns-cli` deve essere posizionato nella directory `/Applications/` o nella sua sottodirectory.

   :::

2. Installalo come servizio eseguendo:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Modifica il file di configurazione `config.yaml`.

4. Avvia il servizio:

   ```sh
   ./adguarddns-cli -s start -v
   ```

Per controllare che funzioni, usa qualsiasi utilità di controllo DNS. Ad esempio, usando `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Basta scaricare e installare utilizzando l'installer MSI dalla [pagina delle release][releases].

Per controllare che funzioni, usa qualsiasi utilità di controllo DNS. Ad esempio, usando `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Opzioni da riga di comando {#opts}

Ogni opzione sovrascrive il valore corrispondente fornito dal file di configurazione e dall'ambiente.

### Aiuto {#opts-help}

L'opzione `-h` fa stampare ad AdGuard DNS CLI un messaggio di aiuto sull'output standard e termina con un codice di stato di successo.

### Servizio {#opts-service}

L'opzione `-s <value>` specifica l'azione del servizio del sistema operativo. Valori possibili:

- `install`: installa AdGuard DNS CLI come servizio
- `restart`: riavvia il servizio AdGuard DNS CLI in esecuzione
- `start`: avvia il servizio AdGuard DNS CLI installato
- `status`: mostra lo stato del servizio AdGuard DNS CLI installato
- `stop`: ferma l'AdGuard DNS CLI in esecuzione
- `uninstall`: disinstalla il servizio AdGuard DNS CLI

### Verboso {#opts-verbose}

L'opzione `-v` abilita l'output del registro verboso, o dettagliato.

### Versione {#opts-version}

L'opzione `--version` fa sì che AdGuard DNS CLI stampi la versione dell'applicazione sullo standard output ed esca con un codice di stato di successo.

## Configurazione {#conf}

### File {#conf-file}

Il file di configurazione YAML è descritto in [un suo articolo][conf], e c'è anche un file di configurazione di esempio `config.dist.yaml`.  Alcuni parametri di configurazione possono anche essere sovrascritti utilizzando l'[ambiente][env].

[conf]: configuration.md
[env]: environment.md

## Codici di uscita {#exit-codes}

Ci sono alcuni codici di uscita diversi che possono apparire in diverse condizioni di errore:

- `0`: Completato con successo e uscito, nessun errore.

- `1`: Errore interno, molto probabilmente una configurazione errata.

- `2`: Argomento o valore della riga di comando non valido.
