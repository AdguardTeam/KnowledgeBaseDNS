---
title: MikroTik
sidebar_position: 6
---

I router MikroTik utilizzano il sistema operativo open source RouterOS, che fornisce routing, reti wireless e servizi di firewall per reti domestiche e di piccoli uffici.

## Configurazione di DNS-over-HTTPS

1. Accedi al tuo router MikroTik:
   - Apri il tuo browser web e vai all'indirizzo IP del tuo router (di solito `192.168.88.1`)
   - In alternativa, puoi usare Winbox per connetterti al tuo router MikroTik
   - Inserisci il nome utente e la password dell'amministratore
2. Importa certificato di root:
   - Scarica il pacchetto più recente di certificati root affidabili: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Andare a _Files_. Clicca _Carica_ e seleziona il pacchetto di certificati cacert.pem scaricato
   - Vai a _Sistema_ → _Certificati_ → _Importa_
   - Nel campo _Nome file_, seleziona il file del certificato caricato
   - Clicca su _Importa_
3. Configurazione di DNS-over-HTTPS:
   - Vai a _IP_ → _DNS_
   - Nella sezione _Server_, aggiungere i seguenti server DNS AdGuard:
     - `94.140.14.49`
     - `94.140.14.59`
   - Imposta _Consenti richieste remote_ su _Sì_ (questo è cruciale per il funzionamento del DoH)
   - Nel campo _Usa il server DoH_, inserisci l'URL del server DNS privato AdGuard: `https://d.adguard-dns.com/dns-query/*******`
   - Clicca _OK_
4. Crea record DNS statici:
   - Nelle _Impostazioni DNS_, clicca _Statico_
   - Clicca su _Aggiungi nuovo_
   - Imposta _Nome_ su d.adguard-dns.com
   - Imposta _Tipo_ su A
   - Imposta _Indirizzo_ su `94.140.14.49`
   - Imposta _TTL_ su 1d 00:00:00
   - Ripeti il processo per creare una voce identica ma con _Indirizzo_ impostato su `94.140.14.59`
5. Disabilita il Peer DNS sul client DHCP:
   - Vai a _IP_ → _DHCP Client_
   - Fai doppio clic sul client usato per la connessione a Internet (solitamente sull'interfaccia WAN)
   - Deseleziona _Usa DNS peer_
   - Clicca _OK_
6. Testa e verifica:
   - Potrebbe essere necessario riavviare il router MikroTik affinché tutte le modifiche abbiano effetto
   - Svuota la cache DNS del tuo browser. Puoi utilizzare uno strumento come [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) per verificare se le tue richieste DNS sono ora instradate tramite AdGuard

## Il mio router non supporta DNS-over-HTTPS

Usa queste istruzioni se il router MikroTik non supporta la configurazione DNS-over-HTTPS:

1. Accedi al tuo router MikroTik:
   - Apri il tuo browser web e vai all'indirizzo IP del tuo router (di solito `192.168.88.1`)
   - In alternativa, puoi usare Winbox per connetterti al tuo router MikroTik
   - Inserisci il nome utente e la password dell'amministratore
2. Configura DNS semplice:
   - Vai in _IP_ → _DNS_
   - Nella sezione _Server_, aggiungere i seguenti server DNS AdGuard:
     - IPv4: `94.140.14.49` e `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
     - IPv6 dedicato: AdGuard DNS privato supporta indirizzi IPv6 dedicati. Per trovarli, apri il cruscotto, clicca _Impostazioni_ accanto al tuo dispositivo → _Indirizzi server DNS semplice_ → _Indirizzi IPv6 dedicati_.
   - Clicca _OK_
3. Disabilita il Peer DNS sul client DHCP:
   - Vai in _IP_ → _Client DHCP_
   - Fai doppio clic sul client usato per la connessione a Internet (solitamente sull'interfaccia WAN)
   - Deseleziona _Usa Peer DNS_
   - Clicca _OK_
