---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Le console di gioco non supportano DNS crittografati, ma sono ben adatte per configurare AdGuard DNS Pubblico o AdGuard DNS Privato tramite un indirizzo IP collegato.

È probabile che il tuo router supporti l'uso di server DNS crittografati, quindi puoi sempre configurare AdGuard DNS Privato su di esso e connettere la tua console di gioco ad esso.

[Come configurare il tuo router](/private-dns/connect-devices/routers/routers.md)

## Connetti AdGuard DNS

Configura la tua console di gioco per utilizzare un server DNS AdGuard pubblico o configurala tramite IP collegato:

1. Accendi la tua console PS4/PS5 e accedi al tuo account.
2. Dalla schermata principale, seleziona l'icona a forma d'ingranaggio situata nella riga superiore.
3. Nel menu _Impostazioni_, seleziona _Rete_.
4. Seleziona _Configura connessione Internet_.
5. Scegli _Usa Wi-Fi_ o _Usa un cavo LAN_, a seconda della configurazione della rete.
6. Scegli _Personalizzato_ e quindi seleziona _Automatico_ per _Impostazioni indirizzo IP_.
7. Per _Nome host DHCP_, scegli _Non specificare_.
8. Per _Impostazioni DNS_, seleziona _Manuale_.
9. Nel campo _Server DNS_, inserisci uno dei seguenti indirizzi del server DNS:
   - `94.140.14.49`
   - `94.140.14.59`
10. Seleziona _Avanti_ per continuare.
11. Nella schermata Impostazioni MTU, seleziona _Automatico_.
12. Nella schermata _Server proxy_, seleziona _Non utilizzare_.
13. Seleziona _Verifica connessione Internet_ per testare le nuove impostazioni DNS.
14. Una volta completato il test e viene visualizzato "Connessione Internet: riuscita", salva le impostazioni.

Sarebbe preferibile utilizzare un IP collegato (o un IP dedicato se hai un abbonamento Team):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
