---
title: IP dedicati
sidebar_position: 2
---

## Cosa sono gli IP dedicati?

Gli indirizzi IPv4 dedicati sono disponibili per gli utenti con abbonamenti Team ed Azienda, mentre gli IP collegati sono disponibili per tutti.

Se hai un abbonamento Team o Azienda, riceverai diversi indirizzi IP dedicati personali. Le richieste a questi indirizzi sono trattate come "tuoi", e le configurazioni a livello di server e le regole di filtraggio sono applicate di conseguenza. Gli indirizzi IP dedicati sono molto più sicuri e più facili da gestire. Con gli IP collegati, devi riconnetterti manualmente o utilizzare un programma speciale ogni volta che l'indirizzo IP del dispositivo cambia, il che accade dopo ogni riavvio.

## Perché hai bisogno di un IP dedicato?

Sfortunatamente, le specifiche tecniche del dispositivo connesso potrebbero non consentirti sempre di configurare un server DNS privato AdGuard crittografato. In questo caso, dovrai utilizzare DNS standard non crittografato. Ci sono due modi per impostare AdGuard DNS: [utilizzando IP collegati](/private-dns/connect-devices/other-options/linked-ip.md) e utilizzando IP dedicati.

Gli IP dedicati sono generalmente un'opzione più stabile. L'IP collegato ha alcune limitazioni, come ad esempio sono consentiti solo indirizzi residenziali, il tuo fornitore può cambiare l'IP, e dovrai ricollegare l'indirizzo IP. Con gli IP dedicati, ottieni un indirizzo IP che è esclusivamente tuo, e tutte le richieste verranno conteggiate per il tuo dispositivo.

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
