---
title: Utilizzo insieme a iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Quando stai utilizzando iCloud Private Relay, il pannello di controllo di AdGuard DNS (e la [pagina di test di AdGuard](https://adguard.com/test.html) associata), mostrerà che non stai utilizzando AdGuard DNS su quel dispositivo.

![Il dispositivo non è connesso](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Per risolvere questo problema, devi consentire ai siti web di AdGuard di visualizzare il tuo indirizzo IP, nelle impostazioni del tuo dispositivo.

- Su iPhone o iPad:

    1. Vai a `adguard-dns.io`

    1. Tocca il pulsante delle **Impostazioni della pagina**, quindi tocca su **Mostra Indirizzo IP**

        ![Impostazioni iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Ripeti per `adguard.com`

- Su Mac:

    1. Vai a `adguard-dns.io`

    1. Su Safari, scegli **Visualizza** → **Ricarica e mostra indirizzo IP**

    1. Ripeti per `adguard.com`

Se non vedi l'opzione per consentire temporaneamente a un sito web di visualizzare il tuo indirizzo IP, aggiorna il tuo dispositivo alla versione più recente di iOS, iPadOS o macOS, quindi riprova.

Ora, il tuo dispositivo dovrebbe essere mostrato correttamente nel pannello di controllo di AdGuard DNS:

![Il dispositivo è connesso](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Tieni presente che, una volta disattivato Private Relay per un sito web nello specifico, anche il tuo fornitore di rete potrà visualizzare quali siti stai visitando.
