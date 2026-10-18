---
title: Controllo parentale
sidebar_position: 5
---

Il _Controllo parentale_ è un insieme di impostazioni che ti offre la flessibilità di personalizzare l'accesso a determinati siti web con contenuti sensibili. Puoi utilizzare questa funzionalità per limitare l'accesso dei tuoi figli a siti per adulti, personalizzare le query di ricerca, bloccare l'uso di servizi popolari e altro ancora.

## Come configurarlo

Puoi configurare in modo flessibile tutte le funzionalità sui tuoi server, inclusa la funzionalità di controllo genitori. [Nell'articolo corrispondente](private-dns/server-and-settings/server-and-settings.md), puoi familiarizzare con cosa sia un server in AdGuard DNS e imparare come creare diversi server con diversi insiemi di impostazioni.

Poi, vai alle impostazioni del server selezionato e abilita le configurazioni richieste.

### Bloccare i siti web per adulti

Blocca i siti web con contenuti inappropriati e per adulti.

![Sito web bloccato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Ricerca sicura

Rimuove risultati inappropriati da Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave ed Ecosia.

### Modalità ristretta di YouTube

Rimuove l'opzione di visualizzare e postare commenti sotto i video e interagire con contenuti 18+ su YouTube.

### Servizi e siti web bloccati

Limita l'accesso a servizi noti con un clic. Questo è utile se non vuoi che i dispositivi connessi visitino certe piattaforme, come Instagram e YouTube.

![Servizi bloccati \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Blocca i siti web per categoria

Consente di limitare l'accesso a specifiche categorie di siti web scegliendo tra più di 20 categorie, inclusi _Contenuti per adulti_, _Giochi_, _Bancheggio_ e _Comunicazione_. Ad esempio, se blocchi i siti che contengono informazioni su alcol, tabacco o droghe, il dispositivo selezionato non potrà più aprire le pagine che rientrano in quelle categorie.

![Bloccaggio basato su categoria \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pianificazione delle pause

Questa funzione consente di limitare l'accesso a specifiche categorie di siti web scegliendo tra più di 20 categorie, inclusi _Contenuti per adulti_, _Giochi_, _Bancheggio_ e _Comunicazione_. Puoi aggiungere uno o più intervalli di pausa per ciascun giorno.

Ad esempio, è possibile sospendere le restrizioni nei giorni feriali dalle 7:00 del mattino alle 8:00 prima dell'inizio delle lezioni e dalle 18:00 alle 20:00 di sera. Al di fuori di questi intervalli, il _Controllo parentale_ si applica come di consueto.

Per approntare un programma di pausa:

1. Vai su _Server_ → seleziona un server → _Controllo parentale_ → _Pianificazione delle pause_.
2. Clicca sul pulsante **+** accanto al giorno desiderato e imposta l'intervallo nel dialogo _Aggiungi pausa_.
3. Ripeti per aggiungere altri intervalli allo stesso giorno.
4. Per modificare un intervallo esistente, clicca su _Modifica_.

Puoi impostare più intervalli per lo stesso giorno. Gli intervalli nello stesso giorno non possono sovrapporsi: se provi a creare intervalli sovrapposti, vedrai un avviso e non potrai salvare il programma.

![Intervalli sovrapposti \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Selezionare la casella di controllo _Tutto il giorno_ mette in pausa le restrizioni di _Controllo parentale_ per l'intera giornata, rimpiazzando qualunque intervallo tu abbia impostato.

Gli intervalli di pausa possono anche comprendere la mezzanotte. Ad esempio, se imposti una pausa dalle 22:00 di lunedì alle 7:00 martedì, il quadro comandi lo mostrerà come due intervalli: lunedì, 22:00–00:00, e martedì, 00:00–07:00.

![Pianificazione delle pause \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
