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
6. Collega il tuo IP.
7. Testa e verifica:
   - Potrebbe essere necessario riavviare il router MikroTik affinché tutte le modifiche abbiano effetto
   - Svuota la cache DNS del tuo browser. Puoi utilizzare uno strumento come [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) per verificare se le tue richieste DNS sono ora instradate tramite AdGuard

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Webfig_ → _IP_ → _DNS_.
4. Seleziona _Server_ e inserisci uno dei seguenti indirizzi di server DNS.
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
5. Salva le impostazioni.
6. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
