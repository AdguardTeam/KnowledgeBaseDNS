---
title: IP dedicati
sidebar_position: 2
---

## Cosa sono gli IP dedicati?

Gli indirizzi IPv4 dedicati sono disponibili per gli utenti con abbonamenti Team ed Azienda, mentre gli IP collegati sono disponibili per tutti.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Gli indirizzi IP dedicati sono molto più sicuri e più facili da gestire. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## Perché hai bisogno di un IP dedicato?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted Private AdGuard DNS server. In questo caso, dovrai utilizzare DNS standard non crittografato. Ci sono due modi per impostare AdGuard DNS: [utilizzando IP collegati](/private-dns/connect-devices/other-options/linked-ip.md) e utilizzando IP dedicati.

Gli IP dedicati sono generalmente un'opzione più stabile. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. Con gli IP dedicati, ottieni un indirizzo IP che è esclusivamente tuo, e tutte le richieste verranno conteggiate per il tuo dispositivo.

Lo svantaggio è che potresti iniziare a ricevere traffico irrilevante (scannerizzatori, bot), come accade sempre con i risolutori DNS pubblici. Potresti aver bisogno di utilizzare [Impostazioni di accesso](/private-dns/server-and-settings/access.md) per limitare il traffico dei bot.

Le istruzioni qui sotto spiegano come collegare un IP dedicato al dispositivo:

## Collegare AdGuard DNS utilizzando IP dedicati

1. Apri cruscotto.
2. Aggiungi un nuovo dispositivo o apri le impostazioni di un dispositivo precedentemente creato.
3. Seleziona _Utilizza gli indirizzi del server_.
4. Poi, apri _Indirizzi di server DNS semplici_.
5. Seleziona il server che desideri utilizzare.
6. Per associare un indirizzo IPv4 dedicato, fai clic su _Assegna_.
7. Se desideri utilizzare un indirizzo IPv6 dedicato, fai clic su _Copia_.
   ![Copia indirizzo \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copia e incolla l'indirizzo dedicato selezionato nelle configurazioni del dispositivo.
