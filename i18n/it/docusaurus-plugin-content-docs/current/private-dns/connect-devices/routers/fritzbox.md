---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box fornisce la massima flessibilità per tutti i dispositivi utilizzando contemporaneamente le bande di frequenza da 2.4 GHz e 5 GHz. Tutti i dispositivi connessi al FRITZ!Box sono completamente protetti contro attacchi provenienti da Internet. La configurazione di questo marchio di router consente anche d'impostare DNS AdGuard Private crittografato.

## Configura DNS-over-TLS

1. Apri il pannello di amministrazione del router. Può essere acceduto all'indirizzo fritz.box, l'indirizzo IP del tuo router, o `192.168.178.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Internet_ o _Rete domestica_.
4. Seleziona _DNS_ o _Impostazioni DNS_.
5. In DNS-over-TLS (DoT), seleziona _Usa DNS-over-TLS_ se supportato dal provider.
6. Seleziona _Usa indicazione del nome del server TLS personalizzato (SNI)_ e inserisci l'indirizzo del server AdGuard DNS Privato:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Salva le impostazioni.

## Utilizza il pannello di amministrazione del tuo router

Usa questa guida se il tuo router FritzBox non supporta la configurazione di DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Internet_ o _Rete domestica_.
4. Seleziona _DNS_ o _Impostazioni DNS_.
5. Scegli DNS manuale, poi _Usa questi server DNS_ o _Specificare manualmente il server DNS_, e inserisci i seguenti indirizzi del server DNS:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Salva le impostazioni.
7. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicati](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegati](/private-dns/connect-devices/other-options/linked-ip.md)
