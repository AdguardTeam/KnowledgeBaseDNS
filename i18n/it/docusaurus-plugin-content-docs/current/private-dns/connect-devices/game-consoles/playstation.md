---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Le console di gioco non supportano DNS crittografati, ma sono ben adatte per configurare AdGuard DNS Pubblico o AdGuard DNS Privato tramite un indirizzo IP collegato.

È probabile che il tuo router supporti l'uso di server DNS crittografati, quindi puoi sempre configurare AdGuard DNS Privato su di esso e connettere la tua console di gioco ad esso.

[Come configurare il tuo router](/private-dns/connect-devices/routers/routers.md)

## Connetti AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP.

### For PlayStation 4

1. Turn on your PS4 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Use a LAN Cable_ → _Easy_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. Nel campo _Server DNS_, inserisci uno dei seguenti indirizzi del server DNS:
   - `94.140.14.49`
   - `94.140.14.59`
10. Seleziona _Avanti_ per continuare.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Seleziona _Verifica connessione Internet_ per testare le nuove impostazioni DNS.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

### For PlayStation 5

1. Turn on your PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Set Up Wired LAN_ → _Connect_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. Nel campo _Server DNS_, inserisci uno dei seguenti indirizzi del server DNS:
   - `94.140.14.49`
   - `94.140.14.59`
10. Seleziona _Avanti_ per continuare.
11. Nella schermata _Impostazioni MTU_, seleziona _Automatico_.
12. Nella schermata _Server proxy_, seleziona _Non utilizzare_.
13. Seleziona _Verifica connessione Internet_ per testare le nuove impostazioni DNS.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

Sarebbe preferibile utilizzare un IP collegato (o un IP dedicato se hai un abbonamento Team):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
