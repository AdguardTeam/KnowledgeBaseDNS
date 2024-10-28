---
title: Xiaomi
sidebar_position: 11
---

I router Xiaomi hanno molti vantaggi: segnale forte e stabile, sicurezza della rete, funzionamento stabile, gestione intelligente, allo stesso tempo, l'utente può collegare fino a 64 dispositivi alla rete Wi-Fi locale.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Scegli _Manuale DNS_. Seleziona _Usa questi server DNS_ oppure _Specifica manualmente il server DNS_ e inserisci i seguenti indirizzi server:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Salva le impostazioni.
7. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
