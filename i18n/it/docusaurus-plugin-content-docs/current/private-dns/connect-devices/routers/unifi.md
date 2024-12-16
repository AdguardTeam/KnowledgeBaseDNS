---
title: UniFi
sidebar_position: 10
---

Il router UiFi (comunemente conosciuto come la serie UniFi di Ubiquiti) ha numerosi vantaggi che lo rendono particolarmente adatto per ambienti domestici, professionali ed aziendali. Sfortunatamente, non supporta DNS crittografato, ma è ottimo per impostare AdGuard DNS tramite IP collegato.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

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
