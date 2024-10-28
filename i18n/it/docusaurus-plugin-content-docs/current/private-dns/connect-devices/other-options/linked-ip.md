---
title: IP Collegati
sidebar_position: 3
---

## Cosa sono gli IP collegati e perché sono utili

Non tutti i dispositivi supportano i protocolli DNS crittografati. In questo caso, gli utenti dovrebbero considerare di impostare DNS non crittografati.

Puoi utilizzare un **indirizzo IP** collegato: in questa impostazione, il servizio prenderà in considerazione tutte le richieste DNS standard provenienti da quell'indirizzo IP e per quel dispositivo specifico. Il solo requisito per un indirizzo IP collegato è che dev'essere un IP residenziale.

:::note

Un **indirizzo IP residenziale** è assegnato a un dispositivo connesso a un ISP residenziale. Tipicamente, è associato a una posizione fisica ed è allocato a case o appartamenti individuali. Le persone usano indirizzi IP residenziali per attività online quotidiane come navigare nel web, inviare e-mail, usare i social media o fare streaming.

:::

A volte, un indirizzo IP residenziale potrebbe già essere in uso, e se provi a connetterti ad esso, AdGuard DNS impedirà la connessione.
![Indirizzo IPv4 collegato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Se ciò accade, ti preghiamo di contattare il supporto a [supporto@adguard-dns.io](mailto:supporto@adguard-dns.io), e ti aiuteranno con le giuste impostazioni di configurazione.

## Come impostare IP collegato

Le seguenti istruzioni spiegano come connettersi al dispositivo tramite **indirizzo IP**:

1. Apri cruscotto.
2. Aggiungi un nuovo dispositivo o apri le impostazioni di un dispositivo precedentemente collegato.
3. Vai a _Utilizza gli indirizzi dei server DNS_.
4. Apri _indirizzi server DNS semplici_ e connetti l'IP collegato.
   ![IP Associato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## DNS dinamico: perché è utile

Ogni volta che un dispositivo si connette alla rete, ottiene un nuovo indirizzo IP dinamico. Quando un dispositivo si disconnette, il server DHCP riassegna gli indirizzi IP ai dispositivi rimanenti. Questo significa che gli indirizzi IP dinamici possono cambiare frequentemente e in modo imprevedibile. Di conseguenza, dovrai aggiornare le impostazioni ogni volta che il dispositivo viene riavviato o la rete cambia.

Per mantenere automaticamente aggiornato l'indirizzo IP collegato, puoi usare il DNS. AdGuard DNS controllerà regolarmente l'Indirizzo IP del tuo dominio DDNS e lo collegherà al tuo server.

:::note

Il DNS dinamico (DDNS) è un servizio che aggiorna automaticamente i record DNS ogni volta che cambia l'indirizzo IP. Converte gli indirizzi IP di rete in nomi di dominio facili da leggere per comodità. Le informazioni che collegano un nome a un indirizzo IP sono memorizzate in una tabella sul server DNS. Il DDNS aggiorna questi record ogni volta che ci sono cambiamenti negli indirizzi IP.

:::

In questo modo, non dovrai aggiornare manualmente l'indirizzo IP associato ogni volta che cambia.

## DNS dinamico: come configurarlo

1. Prima di tutto, devi verificare se il DDNS è supportato dalle impostazioni del tuo router:
   - Vai in _Impostazioni del router_ → _Rete_
   - Trova la sezione DNS dinamico o _Dynamic DNS_
   - Accedi alla pagina e verifica che le impostazioni siano effettivamente supportate. _Questo è solo un esempio di come potrebbe apparire. Potrebbe variare a seconda del tuo router_
     ![DDNS supportato \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Registra il tuo dominio con un servizio popolare come [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) o qualsiasi altro provider DDNS che preferisci.
3. Enter the domain in your router settings and sync the configurations.
4. Vai alle impostazioni IP collegate per connettere l'indirizzo, quindi naviga su _Impostazioni Avanzate_ e fai clic su _Configurazione DDNS_.
5. Inserisci il dominio che hai registrato in precedenza e fai clic su _Configurare DDNS_.
   ![Configura DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Tutto fatto, hai impostato con successo DDNS!

## Automazione dell'aggiornamento dell'IP collegato tramite script

### Windows

Il modo più semplice è utilizzare Task Scheduler:

1. Crea un'attività:
   - Apri il Task Scheduler.
   - Crea un nuovo compito.
   - Imposta l'attivazione ogni 5 minuti.
   - Seleziona _Esegui programma_ come azione.
2. Seleziona un programma:
   - Nel campo _Programma o Codice_, digita `powershell`
   - Nel campo _Aggiungi Argomenti_, digita:
     - `Comando "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Salva il compito.

### Su macOS e Linux

Su macOS e Linux, il modo più semplice è utilizzare `cron`:

1. Apri crontab:
   - Nel terminale, esegui `crontab -e`.
2. Aggiungi un'attività:
   - Inserisci la riga seguente:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Questo lavoro verrà eseguito ogni 5 minuti
3. Salva crontab.

:::note Importante

- Assicurati di avere `curl` installato su macOS e Linux.
- Ricordati di copiare l'indirizzo dalle impostazioni e sostituire il `ServerID` e il `UniqueKey`.
- Se è necessaria una logica più complessa o l'elaborazione dei risultati della query, considera l'utilizzo di codici (ad esempio Bash, Python) insieme a un programma di pianificazione delle attività o cron.

:::
