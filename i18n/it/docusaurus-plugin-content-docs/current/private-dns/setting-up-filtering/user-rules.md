---
title: Regole utente
sidebar_position: 2
---

## Cos'è e perché ne hai bisogno

Le regole utente sono le stesse regole di filtraggio usate nelle liste di blocco comune. Puoi personalizzare il filtraggio del sito web per adattarlo alle tue esigenze aggiungendo regole manualmente o importandole da una lista predefinita.

Per rendere il tuo filtraggio più flessibile e meglio adattato alle tue impostazioni, dai un'occhiata alla [sintassi delle regole](/general/dns-filtering-syntax/) per le regole di filtraggio di AdGuard DNS.

## Come si usa

Per impostare le regole utente:

1. Passa al _Cruscotto_.

2. Vai alla sezione _Server_.

3. Seleziona il server richiesto.

4. Clicca sull'opzione _Regole utente_.

5. You’ll find several options for adding user rules.

    - Il modo più semplice è utilizzare il generatore. Per utilizzarlo, clicca su _Aggiungi nuova regola_ → Inserisci il nome del dominio che vuoi bloccare o sbloccare → Clicca su _Aggiungi regola_
        ![Aggiungi regola \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
    - Il metodo avanzato è utilizzare l'editor delle regole. Clicca su _Apri editor_ e inserisci le regole di blocco secondo la [sintassi](/general/dns-filtering-syntax/)

Questa funzione consente di [reindirizzare una query a un altro dominio sostituendo il contenuto della query DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
