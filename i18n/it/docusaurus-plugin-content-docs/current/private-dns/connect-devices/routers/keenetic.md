---
title: Keenetic
sidebar_position: 5
---

I router Keenetic sono noti per la loro stabilità e configurazioni flessibili, e sono facili da impostare, consentendoti di installare facilmente il DNS privato AdGuard crittografato sul tuo dispositivo.

## Configurazione di DNS-over-HTTPS

1. Apri il pannello di amministrazione del router. Può essere accesso su my.keenetic.net, l'indirizzo IP del tuo router, o `192.168.1.1`.
2. Premi il pulsante del menu nella parte inferiore dello schermo e seleziona _Gestione_.
3. Apri _Impostazioni di sistema_.
4. Premi _Opzioni componente_ → _Opzioni componente di sistema_.
5. In _Utilità e servizi_, seleziona il proxy DNS-over-HTTPS e installalo.
6. Vai a _Menu_ → _Regole di rete_ → _Sicurezza in Internet_.
7. Spostati sui server DNS-over-HTTPS e fai clic su _Aggiungi server DNS-over-HTTPS_.
8. Inserisci l'URL del server DNS privato AdGuard nel campo `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`.
9. Clicca _Salva_.

## Configura DNS-over-TLS

1. Apri il pannello di amministrazione del router. Può essere accesso su my.keenetic.net, l'indirizzo IP del tuo router, o `192.168.1.1`.
2. Premi il pulsante del menu nella parte inferiore dello schermo e seleziona _Gestione_.
3. Apri _Impostazioni di sistema_.
4. Premi _Opzioni componente_ → _Opzioni componente di sistema_.
5. In _Utilità e servizi_, seleziona il proxy DNS-over-HTTPS e installalo.
6. Vai a _Menu_ → _Regole di rete_ → _Sicurezza in Internet_.
7. Spostati sui server DNS-over-HTTPS e fai clic su _Aggiungi server DNS-over-HTTPS_.
8. Inserisci l'URL del server DNS privato AdGuard nel campo `tls://*********.d.adguard-dns.com`.
9. Clicca _Salva_.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Internet_ o _Rete domestica_.
4. Seleziona _WAN_ o _Internet_.
5. Seleziona _DNS_ o _Impostazioni DNS_.
6. Scegli _Manuale DNS_. Seleziona _Usa questi server DNS_ oppure _Specifica manualmente il server DNS_ e inserisci i seguenti indirizzi server:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salva le impostazioni.
8. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicati](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegati](/private-dns/connect-devices/other-options/linked-ip.md)
