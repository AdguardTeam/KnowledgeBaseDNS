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

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

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
