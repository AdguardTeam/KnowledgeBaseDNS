---
title: Synology NAS
sidebar_position: 9
---

I router Synology NAS sono incredibilmente facili da usare e possono essere combinati in un'unica rete mesh. Puoi gestire la tua rete da remoto in qualsiasi momento e ovunque. Puoi anche configurare AdGuard DNS direttamente sul router.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Pannello di controllo_ o _Rete_.
4. Seleziona _Interfaccia di rete_ o _Impostazioni di rete_.
5. Seleziona la tua rete Wi-Fi o connessione cablata.
6. Scegli _Manuale DNS_. Seleziona _Usa questi server DNS_ oppure _Specifica manualmente il server DNS_ e inserisci i seguenti indirizzi server:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salva le impostazioni.
8. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegati](private-dns/connect-devices/other-options/linked-ip.md)
