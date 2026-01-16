---
title: UniFi
sidebar_position: 10
---

Il router UiFi, comunemente conosciuto come la serie Ubiquiti UniFi, ha numerosi vantaggi che lo rendono particolarmente adatto per ambienti domestici, professionali e commerciali.

Il nuovo firmware di UniFi ha recentemente aggiunto supporto per DNS-over-HTTPS. UniFi si riferisce a questa funzione come _DNS criptato_.

## Configura DNS-over-HTTPS

Segui queste istruzioni se il tuo router UniFi supporta DNS-over-HTTPS.

I router UiFi usano un URL DNS Stamp per specificare l'URL DNS-over-HTTPS. Questo URL deve essere calcolato usando il tuo URL DNS-over-HTTPS privato.

Ottieni l'URL DNS-over-HTTPS che è usato per calcolare l'URL DNS Stamp.

1. Vai alla plancia privata di AdGuard DNS.
2. Procedi a _DNS crittografato_ → _Personale_ e inserisci le seguenti impostazioni del server DNS:
   - Tipo di dispositivo: 'Router'
   - Marchio del dispositivo: 'Unifi'
   - Nome dispositivo: '(usa il nome del tuo dispositivo Unifi)
3. Clicca _Avanti_.
4. Scorri a _Usa indirizzi server DNS_ → _DNS-over-HTTPS_ e prendi nota dell'URL DNS-over-HTTPS (ad es. https://d.adguard-dns.com/dns-query/123456abc).

Genera un DNS Stamp usando il [Calcolatore di DNS Stamp DNSCrypt](https://dnscrypt.info/stamps/), e impostalo:

1. Protocollo: DNS-over-HTTPS
2. Nome host: d.adguard-dns.com
3. Percorso: /dns-query/123456abc (rimpiazza 123456abc con il valore ottenuto dalla tua plancia AdGuard DNS privata)
4. Despunta
   - Nessun filtro
   - Nessun registro
5. Copia l'URL del DNS Stamp (ad es. sdns://AgcAAAAAA…)

Attiva DNS-over-HTTPS in UniFi.

1. Accedi al controller Ubiquiti UniFi.
2. Vai in _Impostazioni_ → _Sicurezza_.
3. Clicca _Protezione_.
4. Procedi a _DNS crittografato_ → _Personale_ e inserisci le seguenti impostazioni degli indirizzi server DNS.
   - Nome del server: 'AdGuard DNS'
   - DNS Stamp: URL DNS Stamp copiato da sopra
5. Clicca _Salva_.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router UniFi non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS.

1. Accedi al controller Ubiquiti UniFi.
2. Vai in _Impostazioni_ → _Reti_.
3. Fai clic su _Modifica rete_ → _WAN_.
4. Procedi a _Impostazioni comuni_ → _Server DNS_ e inserisci i seguenti indirizzi del server DNS.
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
5. Clicca _Salva_.
6. Ritorna alla _Rete_.
7. Scegli _Modifica rete_ → _LAN_.
8. Trova _DHCP Name Server_ e seleziona _Manuale_.
9. Inserisci il tuo indirizzo gateway nel campo _Server DNS 1_. In alternativa, puoi inserire gli indirizzi del server DNS di AdGuard nei campi _Server DNS 1_ e _Server DNS 2_:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
10. Salva le impostazioni.
11. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).
    - [IP dedicati](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IP collegati](private-dns/connect-devices/other-options/linked-ip.md)
