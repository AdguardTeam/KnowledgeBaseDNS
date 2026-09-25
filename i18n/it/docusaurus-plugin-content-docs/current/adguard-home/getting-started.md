---
title: Per iniziare
sidebar_position: 2
---

## Installazione {#installation}

### Versioni ufficiali

Scarica l'archivio con il file binario per il tuo sistema operativo dalle \[pagina dell'ultima versione stabile]\[versioni]. L'elenco completo delle piattaforme supportate, nonché dei collegamenti alle versioni beta ed edge (instabile), si possono trovare sulla \[nostra pagina delle piattaforme]\[piattaforme].

Per installare AdGuard Home come un servizio, estrai l'archivio, entra nella cartella `AdGuardHome`, ed esegui:

```sh
./AdGuardHome -s install
```

#### Note

- Gli utenti di **Fedora Linux** e derivati: installa AdGuard Home nella cartella `/usr/local/bin`. Non farlo potrebbe causare problemi con SELinux e le autorizzazioni. Consulta il \[ticket 765] e \[ticket 3281].

- Gli utenti di **macOS 10.15 Catalina** e più recenti dovrebbero mettere la cartella di lavoro di AdGuard Home nella cartella `/Applications`.

- For **Raspberry Pi** users, there is a separate [guide][raspberry-pi-guide].

[raspberry-pi-guide]: /adguard-home/raspberry-pi

### Docker e Snap

Inoltre, forniamo un [immagine ufficiale del docker di AdGuard Home][docker] e uno [pacchetto ufficiale del Negozio di Snap][snap] per gli utenti esperti.

### Altri

Alcune opzioni non ufficiali includono:

- [Add-on per Home Assistant][has] mantenuto da [@frenck](https://github.com/frenck).

- [App OpenWrt LUCI][luci] mantenuta da [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm] e altri OS basati su Arch, potrebbero costruire tramite il [pacchetto `adguardhome`][aghaur] nell'[AUR][aur] mantenuto da [@graysky2](https://github.com/graysky2).

- [App Cloudron][cloudron] mantenuta da [@gramakri](https://github.com/gramakri).

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
[platforms]: /adguard-home/platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## Primo avvio {#first-time}

Prima di tutto, controlla le impostazioni del tuo firewall. Per installare e usare AdGuard Home, le seguenti porte e protocolli devono essere disponibili:

- 3000/TCP per l'installazione iniziale;
- 80/TCP per l'interfaccia web;
- 53/UDP per il server DNS.

Potresti dover aprire ulteriori porte per i protocolli, oltre che DNS semplice, come DNS su HTTPS.

I server DNS si collegano alla porta 53, che richiede i privilegi da superutente per il più delle volte; [vedi sotto](#running-without-superuser). Dunque, sui sistemi Unix, dovrai eseguirlo con `sudo` o `doas` nel terminale:

```sh
sudo ./AdGuardHome
```

Su Windows, esegui `cmd.exe` o PowerShell con privilegi da amministratore, ed esegui `AdGuardHome.exe` da lì.

Quando esegui AdGuard Home per la prima volta, inizia ad ascoltare su `0.0.0.0:3000` e ti richiede di aprirlo nel tuo browser:

```none
AdGuard Home è disponibile ai seguenti indirizzi:
vai a http://127.0.0.1:3000
vai a http://[::1]:3000
[…]
```

Lì, seguirai la procedura guidata di configurazione iniziale.

![Schermata di selezione dell'interfaccia di rete di AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![Schermata di creazione dell'utente di AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Consulta il [nostro articolo sull'esecuzione sicura di AdGuard Home](running-securely.md) per indicazioni su come selezionare la configurazione iniziale più adatta a te.

## Esecuzione come servizio {#service}

Il passaggio successivo sarebbe registrare AdGuard Home come un servizio di sistema (anche noto come daemon). Per installare AdGuard Home come un servizio, esegui:

```sh
sudo ./AdGuardHome -s install
```

Su Windows, esegui `cmd.exe` con privilegii da amministratore ed esegui `AdGuardHome.exe -s install` per registrare un servizio di Windows.

Ecco gli altri comandi di cui potresti aver bisogno per controllare il servizio:

- `AdGuardHome -s uninstall`: Disinstalla il servizio AdGuard Home.
- `AdGuardHome -s start`: Avvia il servizio.
- `AdGuardHome -s stop`: Arresta il servizio.
- `AdGuardHome -s restart`: Riavvia il servizio.
- `AdGuardHome -s status`: Mostra lo stato attuale del servizio.

### Registri

Di default, i registri sono scritti a `stderr` quando esegui AdGuard Home in un terminale. Se lo esegui come un servizio, il risultato del registro dipenderà dalla piattaforma:

- Su macOS, il registro viene scritto nei file `/var/log/AdGuardHome.*.log`.

- Su altri Unix, il registro è scritto a `syslog` o `journald`.

- Su Windows, il registro è scritto al Registro eventi di Windows.

Puoi modificare questo comportamento nel [file di configurazione][conf] di AdGuard Home.

[conf]: /adguard-home/configuration#log

## Aggiornamento {#update}

![Un esempio di una notifica di aggiornamento](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Quando una nuova versione viene rilasciata, l'UI di AdGuard Home mostra un messaggio di notifica e il pulsante _Aggiorna ora_. Clicca questo pulsante e AdGuard Home sarà aggiornato automaticamente alla versione più recente. Il tuo file eseguibile attuale di AdGuard Home è salvato nella cartella `backup` insieme al file di configurazione corrente, così, puoi ripristinare le modifiche, se necessario.

### Aggiornamento manuale {#manual-update}

Nel caso in cui il pulsante non sia mostrato o un aggiornamento automatico fallisca, puoi aggiornare manualmente. Disponiamo di una [guida dettagliat agli aggiornamenti manuali][mupd], ma in breve:

1. Scarica il nuovo pacchetto di AdGuard Home.

2. Estrailo in una cartella temporanea.

3. Sostituisci il vecchio file eseguibile di AdGuard Home con quello nuovo.

4. Riavvia AdGuard Home.

[mupd]: faq.md#manual-update

### Aggiornamenti di Docker, Home Assistant e Snapcraft

Gli aggiornamenti automatici per le installazioni di Docker, Hass.io/Home Assistant e Snapcraft sono disabilitati. Invece, aggiorna l'immagine.

### Aggiornamento della riga di comando

Per aggiornare il pacchetto di AdGuard Home senza dover utilizzare l'API Web, esegui:

```sh
./AdGuardHome --update
```

## Configurare i dispositivi {#configure-devices}

### Router

Questa configurazione coprirà automaticamente tutti i dispositivi connessi al tuo router domestico, e non dovrai configurare manualmente ognuno di essi.

1. Apri le preferenze per il tuo router. Solitamente, puoi accedervi dal tuo browser tramite un URL, come [http://192.168.0.1/](http://192.168.0.1/) o [http://192.168.1.1/](http://192.168.1.1/). Potrebbe esserti richiesto di inserire una password. Se non te la ricordi, spesso, puoi reimpostarla premendo un pulsante sullo stesso router, ma sappi che, se si sceglie questa procedura, perderai probabilmente l'intera configurazione del router. Se il tuo router richiede un'app per la configurazione, sei pregato di installarla sul tuo telefono o PC, e di utilizzarla per accedere alle impostazioni del router.

2. Trova le impostazioni DHCP/DNS. Cerca le lettere DNS affianco a un campo che consente due o tre serie di numeri, ognuno diviso in quattro gruppi, di 1-3 cifre.

3. Inserisci lì gli indirizzi del server di AdGuard Home.

4. Su alcuni tipi di router, non può essere configurato un server DNS personalizzato. In tal caso, configurare AdGuard Home come server DHCP potrebbe aiutare. Altrimenti, dovresti consultare il manuale del tuo router per scoprire come personalizzare i server DNS sul tuo modello di router specifico.

### Windows

1. Apri il _Pannello di Controllo_ dal menu Start o dalla ricerca di Windows.

2. Vai su _Rete e Internet_ e poi su _Centro connessioni di rete e condivisione_.

3. Sul lato sinistro dello schermo, trova il pulsante _Modifica impostazioni dell'adattatore_ e cliccalo.

4. Seleziona la connessione attiva, cliccala con il pulsante destro del mouse e scegli _Proprietà_.

5. Trova _Protocollo Internet Versione 4 (TCP/IPv4)_ (o, per IPv6, _Protocollo Internet Versione 6 (TCP/IPv6)_) nell'elenco, selezionalo, quindi clicca nuovamente su _Proprietà_.

6. Scegli _Utilizza i seguenti indirizzi del server DNS_ e inserisci gli indirizzi del tuo server di AdGuard Home.

### macOS

1. Clicca sull'icona di Apple e vai a _Preferenze di Sistema_.

2. Clicca _Rete_.

3. Seleziona la prima connessione nella tua lista e clicca _Avanzate_.

4. Seleziona la scheda del DNS e inserisci gli indirizzi del tuo server di AdGuard Home.

### Android

:::note

Le istruzioni per i dispositivi Android potrebbero differire, a seconda della versione dell'OS e del produttore.

:::

1. Dalla schermata iniziale del menu' Android, tocca _Impostazioni_.

2. Tocca _Wi-Fi_ nel menu'. Sarà mostrata la schermata con tutte le reti disponibili (è impossibile impostare il DNS personalizzato per la connessione mobile).

3. Premi a lungo la rete a cui sei connesso e tocca _Modifica rete_.

4. Su alcuni dispositivi, potresti dover selezionare la casella per _Avanzate_ per visualizzare ulteriori impostazioni. Per modificare le impostazioni DNS del tuo Android, dovrai modificare le impostazioni IP da _DHCP_ a _Statico_.

5. Modifica i valori impostati per DNS 1 e DNS 2 agli indirizzi del tuo server di AdGuard Home.

### iOS

1. Dalla schermata iniziale, tocca _Impostazioni_.

2. Seleziona _Wi-Fi_ dal menu a sinistra (è impossibile configurare DNS per le reti mobili).

3. Tocca sul nome della rete attiva al momento.

4. Nel campo _DNS_, inserisci gli indirizzi del tuo server di AdGuard Home.

## Esecuzione senza superutente.{#running-without-superuser}

Puoi eseguire AdGuard Home senza i privilegi da superutente, ma devi garantire una capacità al binario (su Linux), o istruirlo a utilizzare una porta differente (tutte le piattaforme).

### Concedere le capacità necessarie (solo su Linux)

L'utilizzo di questo metodo richiede l'utilità `setcap`. Potresti doverla installare utilizzando il gestore di pacchetti della tua distribuzione di Linux.

Per consentire ad AdGuard Home l'esecuzione su Linux per ascoltare alla porta 53 senza i privilegi da superutente e associare i suoi server DNS a un'interfaccia in particolare, esegui:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Quindi, esegui `./AdGuardHome` come un utente non privilegiato.

### Modificare la porta d'ascolto del DNS

Per configurare AdGuard Home per l'ascolto a una porta che non richiede i privilegi da superutente, arresta AdGuard Home, apri `AdGuardHome.yaml` nel tuo editor e trova queste linee:

```yaml
dns:
    # …
    port: 53
```

Puoi modificare la porta con un qualsiasi valore superiore a 1024, per evitare che richieda i privilegi da superutente.

## Limitazioni {#limitations}

Alcuni file di sistema non supportano la chiamata di sistema `mmap(2)`, richiesta dal sistema statistico. Consulta anche il \[ticket 1188].

Puoi risolvere questo problema:

- fornendo gli argomenti `--work-dir DIRECTORY` al binario `AdGuardHome`. Quest'opzione comunicherà ad AGH di utilizzare un'altra cartella per tutti i suoi file, invece di quella predefinita `./data`.

- o creando collegamenti simbolici a un altro file di sistema che supporta `mmap(2)` (es., tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
