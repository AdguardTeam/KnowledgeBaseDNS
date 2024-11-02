---
title: Problemi noti
sidebar_position: 1
---

Dopo aver configurato AdGuard DNS, alcuni utenti potrebbero scoprire che non funziona correttamente: visualizzano un messaggio che il loro dispositivo non è connesso ad AdGuard DNS e le richieste da quel dispositivo non sono mostrate nel Registro delle richieste. Ciò si può verificare a causa di certe impostazioni nascoste nel tuo browser o sistema operativo. Diamo un'occhiata ai problemi comuni e alle loro soluzioni.

:::tip

Puoi verificare lo stato di AdGuard DNS sulla [pagina di prova](https://adguard.com/test.html).

:::

## Impostazioni di DNS sicuro di Chrome

Se utilizzi Chrome e non visualizzi alcuna richiesta nel tuo pannello di controllo di AdGuard DNS, ciò potrebbe dipendere dal fatto che Chrome utilizza il proprio server DNS. Ecco come lo puoi disabilitare:

1. Apri le impostazioni di Chrome.
1. Naviga a *Privacy e sicurezza*.
1. Seleziona *Sicurezza*.
1. Scorri in basso fino a *Utilizza DNS sicuro*.
1. Disabilita la funzionalità.

![Funzionalità Utilizza DNS sicuro di Chrome](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Se disabiliti le impostazioni DNS di Chrome, il browser utilizzerà il DNS specificato nel tuo sistema operativo, che dovrebbe essere AdGuard DNS se lo hai configurato correttamente.

## iCloud Private Relay (Safari, macOS e iOS)

Se abiliti l'Inoltro Privato d'iCloud nelle impostazioni del tuo dispositivo, Safari utilizzerà gli indirizzi DNS di Apple, che sovrascriveranno le impostazioni di AdGuard DNS.

Ecco come puoi disabilitare iCloud Private Relay sul tuo iPhone:

1. Apri le *Impostazioni* e tocca sul tuo nome.
1. Seleziona *iCloud* → *Private Relay*.
1. Disattiva Private Relay.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Sul tuo Mac:

1. Apri le *Impostazioni di sistema* e clicca sul tuo nome o sul tuo *Apple ID*.
1. Seleziona *iCloud* → *Private Relay*.
1. Disattiva Private Relay.
1. Clicca su *Fatto*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protezione Avanzata da Tracciamento e Rilevamento (Safari, a partire da iOS 17)

Dopo l'aggiornamento a iOS 17, la Protezione Avanzata da Tracciamento e Rilevamento potrebbe essere abilitata nelle impostazioni di Safari, che potrebbe avere un effetto simile all'Inoltro Privato di iCloud, aggirando le impostazioni di AdGuard DNS.

Ecco come puoi disabilitare la Protezione Avanzata da Tracciamento e Rilevamento:

1. Apri le *Impostazioni* e scorri in basso fino a *Safari*.
1. Tocca su *Avanzate*.
1. Disabilita la *Protezione Avanzata da Tracciamento e Rilevamento*.

![Protezione da Tracciamento e Rilevamento iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
