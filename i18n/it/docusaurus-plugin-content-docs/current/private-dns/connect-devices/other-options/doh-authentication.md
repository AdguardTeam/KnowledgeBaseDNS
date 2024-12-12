---
title: DNS-over-HTTPS con autenticazione
sidebar_position: 4
---

## Perché è utile

DNS-over-HTTPS con autenticazione consente di impostare un nome utente e una password per accedere al server scelto.

Questo aiuta a prevenire accessi non autorizzati e migliora la sicurezza. Inoltre, puoi limitare l'uso di altri protocolli per profili specifici. Questa funzione è particolarmente utile quando l'indirizzo del tuo server DNS è noto ad altri. Aggiungendo una password, puoi bloccare l'accesso e assicurarti che solo tu possa utilizzarlo.

## Come configurarlo

:::note Compatibilità

Questa funzione è supportata da [AdGuard DNS Client](/dns-client/overview.md) così come da [App AdGuard](https://adguard.com/welcome.html).

:::

1. Apri cruscotto.
2. Aggiungi un dispositivo o vai alle impostazioni di un dispositivo precedentemente creato.
3. Clicca su _Usa indirizzi server DNS_ e apri la sezione _Indirizzi server DNS crittografati_.
4. Configura DNS-over-HTTPS con autenticazione come desideri.
5. Riconfigura il tuo dispositivo per utilizzare questo server nell'AdGuard DNS Client o in una delle app AdGuard.
6. Per farlo, copia l'indirizzo del server crittografato e incollalo nelle impostazioni dell'app AdGuard o dell'AdGuard DNS Client.
   ![Copia indirizzo \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Puoi anche negare l'uso di altri protocolli.
   ![Nega protocolli \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
