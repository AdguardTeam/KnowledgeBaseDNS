---
title: Xiaomi
sidebar_position: 11
---

I router Xiaomi hanno molti vantaggi: un segnale stabile e forte, la sicurezza della rete dedicata, prestazioni robuste e gestione intelligente. Gli utenti possono connettere fino a 64 dispositivi a una rete Wi-Fi locale.

Sfortunatamente, non supporta DNS crittografati, ma è ottimo per impostare AdGuard DNS tramite IP collegato.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.31.1` o all'indirizzo IP del tuo router.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Impostazioni avanzate_ o _Avanzate_, a seconda del modello del tuo router.
4. Apri _Rete_ o _Internet_ e cerca DNS o Impostazioni DNS.
5. Scegli _Manuale DNS_. Seleziona _Usa questi server DNS_ oppure _Specifica manualmente il server DNS_ e inserisci i seguenti indirizzi server:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Salva le impostazioni.
7. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicati](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegati](/private-dns/connect-devices/other-options/linked-ip.md)
