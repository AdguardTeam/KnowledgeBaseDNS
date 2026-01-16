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

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

Sul tuo Mac:

1. Apri le *Impostazioni di sistema* e clicca sul tuo nome o sul tuo *Apple ID*.
1. Seleziona *iCloud* → *Private Relay*.
1. Disattiva Private Relay.
1. Clicca su *Fatto*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protezione Avanzata da Tracciamento e Rilevamento (Safari, a partire da iOS 17)

Dopo l'aggiornamento a iOS 17, la Protezione Avanzata da Tracciamento e Rilevamento potrebbe essere abilitata nelle impostazioni di Safari, che potrebbe avere un effetto simile all'Inoltro Privato di iCloud, aggirando le impostazioni di AdGuard DNS.

Ecco come puoi disabilitare la Protezione Avanzata da Tracciamento e Rilevamento:

Per iOS 26.1 e versioni successive:

1. Vai alle *Impostazioni*.
1. Scorri in basso e seleziona *App*.
1. Vai a *Safari* → *Avanzate*.
1. Tocca *Protezione avanzata da tracciamento e impronte digitali* e poi *Disattiva*.

![Protezione da tracciamento e impronte digitali iOS 26.1 *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

Per le versioni iOS precedenti alla 26.1:

1. Apri le *Impostazioni* e scorri in basso fino a *Safari*.
1. Tocca su *Avanzate*.
1. Disabilita la *Protezione Avanzata da Tracciamento e Rilevamento*.

![Protezione da tracciamento e impronte digitali iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limita il monitoraggio dell'indirizzo IP per iPhone

Quando la funzione Limita monitoraggio indirizzo IP è abilitata sul tuo iPhone, può interferire con la capacità di AdGuard DNS di filtrare il traffico.

Ciò accade perché la funzione instrada le richieste DNS da Safari (e altre app che la supportano) attraverso i server relay privati di Apple. Ciò impedisce ad AdGuard DNS di ricevere l'indirizzo IP effettivo del tuo dispositivo e di elaborare le richieste DNS, con conseguente disattivazione del filtro per inserzioni e tracciatori.

Per ripristinare il filtraggio completo basato su DNS, dovrai disattivare questa funzione per la rete Wi-Fi che stai usando attualmente.

Per favore segui le fasi qui sotto:

1. Apri *Impostazioni* sul tuo iPhone.
1. Tocca *Wi-Fi*.
1. Trova e tocca il nome della rete Wi-Fi a cui sei attualmente connesso.
1. Nella pagina delle impostazioni di rete, commuta l'interruttore per *Limita il monitoraggio degli indirizzi IP.* su No

![Limita il monitoraggio dell'indirizzo IP *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

Il filtraggio DNS riprenderà immediatamente dopo aver disabilitato questa impostazione. Tieni presente che potrebbe essere necessario ripetere questa procedura per altre reti Wi-Fi a cui ti connetterai in futuro.
