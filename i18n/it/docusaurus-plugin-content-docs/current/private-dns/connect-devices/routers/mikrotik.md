---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

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
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - Clicca _OK_
4. Crea record DNS statici:
   - Nelle _Impostazioni DNS_, clicca _Statico_
   - Clicca su _Aggiungi nuovo_
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - Imposta _Indirizzo_ su `94.140.14.49`
   - Set _TTL_ to `1d 00:00:00`
   - Ripeti il processo per creare una voce identica ma con _Indirizzo_ impostato su `94.140.14.59`
5. Disabilita il Peer DNS sul client DHCP:
   - Vai a _IP_ → _DHCP Client_
   - Fai doppio clic sul client usato per la connessione a Internet (solitamente sull'interfaccia WAN)
   - Deseleziona _Usa DNS peer_
   - Clicca _OK_
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Accedi al tuo router MikroTik:
   - Apri il tuo browser web e vai all'indirizzo IP del tuo router (di solito `192.168.88.1`)
   - In alternativa, puoi usare Winbox per connetterti al tuo router MikroTik
   - Inserisci il nome utente e la password dell'amministratore
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4: `94.140.14.49` e `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. Disabilita il Peer DNS sul client DHCP:
   - Go to _IP_ → _DHCP Client_
   - Fai doppio clic sul client usato per la connessione a Internet (solitamente sull'interfaccia WAN)
   - Uncheck _Use Peer DNS_
   - Click _OK_
