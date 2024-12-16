---
title: Impostazioni di accesso
sidebar_position: 3
---

Configurando le impostazioni di accesso, puoi proteggere il tuo AdGuard DNS da accessi non autorizzati. Ad esempio, stai utilizzando un indirizzo IPv4 dedicato e gli aggressori che usano gli sniffer lo hanno riconosciuto e lo stanno bombardando con richieste. Nessun problema, aggiungi semplicemente il fastidioso dominio o indirizzo IP alla lista e non ti darà più fastidio!

Le richieste bloccate non verranno visualizzate nel registro delle query e non sono conteggiate nel limite totale.

## Come configurarlo

### Clienti consentiti

Questa impostazione consente di specificare quali client possono utilizzare il tuo server DNS. Ha la massima priorità. Ad esempio, se lo stesso indirizzo IP è presente sia nell'elenco negato che in quello consentito, sarà comunque consentito.

### Client non consentiti

Qui puoi elencare i client ai quali non è consentito utilizzare il tuo server DNS. Puoi bloccare l'accesso a tutti i client e utilizzare solo quelli selezionati. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Poi, nel campo _Clienti consentiti_, specifica gli indirizzi che possono accedere al tuo server.

:::note Importante

Prima di applicare le impostazioni di accesso, assicurati di non bloccare il tuo indirizzo IP. Se lo fai, non potrai accedere alla rete. Se ciò accade, disconnetti semplicemente dal server DNS, vai alle impostazioni di accesso e regola le configurazioni di conseguenza.

:::

### Domini non consentiti

Qui puoi specificare i domini (insieme a regole di carattere universale e regole di filtraggio DNS) che verranno negati l'accesso al tuo server DNS.

![Impostazioni di accesso \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Per visualizzare gli indirizzi IP associati alle richieste DNS nel Registro delle richieste, seleziona la casella _Registra indirizzi IP_. Per fare ciò, apri _Impostazioni del server_ → _Impostazioni avanzate_.
