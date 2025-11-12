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

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

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

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Please follow the steps below:

1. Open *Settings* on your iPhone.
1. Tap *Wi-Fi*.
1. Find and tap the name of the Wi-Fi network you are currently connected to.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
