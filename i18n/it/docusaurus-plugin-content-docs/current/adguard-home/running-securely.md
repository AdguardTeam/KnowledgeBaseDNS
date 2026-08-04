---
title: Configurazione sicura di AdGuard Home
sidebar_position: 4
---

Questa pagina contiene un elenco di consigli aggiuntivi per garantire la sicurezza di AdGuard Home.

## Scegliere gli indirizzi del server

Al primo avvio di AdGuard Home, ti sarà chiesto quale interfaccia dovrebbe utilizzare per servire il DNS semplice. L'opzione più sicura e conveniente dipende da come vuoi eseguire AdGuard Home. Puoi modificare gli indirizzi in seguito, arrestando AdGuard Home, modificando il campo `dns.bind_hosts` nel file di configurazione, e riavviando AdGuard Home.

:::note

Al momento, l'UI ti consente soltanto di selezionare un'interfaccia, ma puoi selezionarne più di una tramite il file di configurazione. Miglioreremo l'UI nelle versioni future.

:::

Se intendi eseguire AdGuard Home **solo sul tuo computer**, seleziona il dispositivo di loopback (noto anche come "localhost"). Solitamente si chiama `localhost`, `lo`, o qualcosa di simile, e ha l'indirizzo `127.0.0.1`.

Se prevedi di eseguire AdGuard Home su un **router all'interno di una piccola rete isolata**, seleziona l'interfaccia servita localmente. I nomi possono variare, ma solitamente contengono le parole `wlan` o `wlp` e hanno un indirizzo che inizia per `192.168.`. Probabilmente dovresti anche aggiungere l'indirizzo di loopback, se desideri che il software sia anche sul router stesso, per utilizzare AdGuard Home.

Se intendi eseguire AdGuard Home su un **server pubblicamente accessibile**, vorrai probabilmente selezionare l'opzione "Tutte le interfacce". Nota che, questo, potrebbe esporre il tuo server agli attacchi DDoS, quindi, sei pregato di leggere le sezioni sulle impostazioni d'accesso e sulla limitazione della frequenza, di seguito.

## Impostazioni di accesso

:::note

Se il tuo AdGuard Home non è accessibile dall'esterno, puoi saltare questa sezione.

:::

Nella parte inferiore della pagina _Impostazioni_ → _Impostazioni DNS_, troverai la sezione _Impostazioni d'accesso_. Queste impostazioni consentono di bloccare i client noti per abusare della tua istanza di AdGuard Home oppure di abilitare la modalità Lista consensi. La Modalità Lista consensi è consigliata per le istanze pubbliche in cui il numero di client è noto e tutti i client possono utilizzare il DNS sicuro.

Per abilitarla, inserisci [CliendIDs][cid] (consigliato) o gli indirizzi IP per i client consentiti nel campo _Client consentiti_.

[cid]: /adguard-home/clients#client-id

## Disabilitare il DNS semplice

:::note

Se il tuo AdGuard Home non è accessibile dall'esterno, puoi saltare questa sezione.

:::

Se tutti i client che utilizzano AdGuard Home possono utilizzare i protocolli crittografati, è una buona idea disabilitare il DNS semplice o renderlo inaccessibile dall'esterno.

Se desideri disabilitare completamente il DNS semplice, puoi farlo sulla pagina _Impostazioni_ → _Impostazioni crittografiche_.

Se desideri limitarlo al solo uso interno, arresta il tuo AdGuard Home, modifica il campo `dns.bind_hosts` nel file di configurazione affinché contenga soltanto gli indirizzi di loopback, e riavvia AdGuard Home.

## Limitazione della frequenza del DNS semplice

:::note

Se il tuo AdGuard Home non è accessibile dall'esterno, puoi saltare questa sezione.

:::

Il limite di frequenza predefinito del DNS semplice di 20 dovrebbe essere generalmente sufficiente, ma se hai un elenco dei client noti, puoi aggiungerli all'elenco dei consentiti e impostare un limite più rigido per gli altri client.

## Problemi di servizio dell'OS

Per poter prevenire l'escalation dei privilegi tramite l'inserimento binario, è importante che la cartella in cui AdGuard Home è installato abbia impostati adeguate proprietà e autorizzazioni.

Ringraziamo Go Compile per l'assistenza nello scrivere questa sezione.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

La directory di lavoro di AdGuard Home, che per impostazione predefinita è `/Applications/AdGuardHome` su macOS e `/opt/AdGuardHome` su altri sistemi Unix, così come il binario stesso, dovrebbe generalmente avere la proprietà di `root:root` e non essere scrivibile da nessuno se non da `root`. Puoi verificarlo con il seguente comando, sostituendo `/opt/AdGuardHome` con la tua cartella e `/opt/AdGuardHome/AdGuardHome` con il tuo binario:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Un risultato ragionevolmente sicuro dovrebbe somigliare al seguente:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Nota la mancanza delle autorizzazioni di scrittura per tutti tranne `root`, nonché la proprietà di `root`. Se le autorizzazioni e/o la proprietà sono errate, esegui i seguenti comandi sotto `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Il principio è lo stesso su Windows: assicurati che la directory di AdGuard Home, tipicamente `C:\Program Files\AdGuardHome`, e il binario `AdGuardHome.exe` abbiano le autorizzazioni che consentirebbero soltanto agli utenti regolari di leggerli ed eseguirli/elencarli.

In futuro, prevediamo di rilasciare le build per Windows come file d'installazione MSI, che assicurino l'esecuzione automatica.

## Verify releases {#verify-releases}

We sign the executable files that we build so that you can verify that they were created by us and not by anyone else. Inside an archive file, there is a small file with a `.sig` extension that contains the signature data. If someone replaces the binary file inside an archive, you’ll know it isn’t an official release from AdGuard.

### How to verify that the executable file was built by AdGuard? {#how-to-verify-executable}

1. Unpack the AdGuard Home archive file.

2. Import the AdGuard Home public key from the keyserver. For **current releases,** run:

   ```sh
   gpg --keyserver 'keys.openpgp.org' --recv-key '28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6'
   ```

   The above command will print something similar to:

   ```none
   gpg: key 0FE641E7235E2EC6: public key "AdGuard <devteam@adguard.com>" imported
   gpg: Total number processed: 1
   gpg:               imported: 1
   ```

3. Verify.

   - On UNIX:

     ```sh
     gpg --verify AdGuardHome/AdGuardHome.sig
     ```

   - On Windows (you might need to install PGP):

     ```ps1
     gpg --verify AdGuardHome/AdGuardHome.exe.sig
     ```

   You'll see something like this:

   ```none
   gpg: assuming signed data in 'AdGuardHome/AdGuardHome'
   gpg: Signature made Mon 15 Aug 2022 19:30:55 MSK
   gpg:                using RSA key 28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6
   gpg:                issuer "devteam@adguard.com"
   gpg: Good signature from "AdGuard <devteam@adguard.com>" [ultimate]
   ```

   Check the following:

   - RSA key: must be `28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6`;
   - issuer name: must be `AdGuard`;
   - E-mail address: must be `devteam@adguard.com`;

   There may also be the following warning:

   ```none
   gpg: WARNING: The key's User ID is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 2864 5AC9 776E C4C0 0BCE  2AFC 0FE6 41E7 235E 2EC6
   ```

### Reproducing AdGuard Home builds {#reproducing-builds}

AdGuard Home uses [reproducible builds][repr]. See the `build-release.sh` section in our [build script documentation][build].

[build]: https://github.com/AdguardTeam/AdGuardHome/tree/master/scripts
[repr]: https://reproducible-builds.org/
