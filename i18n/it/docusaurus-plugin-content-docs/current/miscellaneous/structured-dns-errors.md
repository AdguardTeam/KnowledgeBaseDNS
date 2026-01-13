---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

Con il rilascio di AdGuard DNS v2.10, AdGuard è diventato il primo risolutore DNS pubblico a implementare il supporto per [_Errori DNS Strutturati_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), un'aggiornamento a [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Questa funzione consente ai server DNS di fornire informazioni dettagliate sui siti web bloccati direttamente nella risposta DNS, piuttosto che fare affidamento su messaggi generici del browser. In this article, we’ll explain what _Structured DNS Errors_ are and how they work.

## Cosa sono gli SDE (errori DNS strutturati)

Quando una richiesta a un dominio pubblicitario o quello di tracciamento è bloccata, l'utente potrebbe vedere spazi vuoti su un sito web o potrebbe non notare affatto che è avvenuto un filtro DNS. Tuttavia, se un intero sito web è bloccato a livello DNS, l'utente non sarà completamente in grado di accedere alla pagina. When trying to access a blocked website, the user may see a generic “This site can’t be reached” error displayed by the browser.

![“This site can’t be reached” error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Such errors don’t explain what happened and why. Questo lascia gli utenti confusi su perché un sito web sia inaccessibile, portandoli spesso a supporre che la loro connessione a Internet o il risolutore DNS siano danneggiati.

Per chiarire questo punto, i server DNS potrebbero reindirizzare gli utenti alla propria pagina con una spiegazione. Tuttavia, i siti web HTTPS (che sono la maggioranza dei siti web) richiederebbero un certificato.

![Errore di certificato](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Esiste una soluzione più semplice: [SDE (Errori DNS strutturati)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Il concetto di SDE si basa sui principi degli [_Errori DNS Estesi_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), che ha introdotto la possibilità d'includere ulteriori informazioni sugli errori nelle risposte DNS. Il progetto SDE porta questo ulteriore passaggio utilizzando [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (un profilo ristretto di JSON) per formattare le informazioni in un modo che i browser e le app client possono facilmente analizzare.

I dati SDE sono inclusi nel campo `EXTRA-TEXT` della risposta DNS. Contiene:

- `j` (giustificazione): Motivo per cui è stato bloccato
- `c` (contatto): Informazioni di contatto per richieste se la pagina è stata bloccata per errore
- `o` (organizzazione): Organizzazione responsabile del filtraggio DNS in questo caso (facoltativo)
- `s` (suberror): il codice suberror per questo particolare filtraggio DNS (facoltativo)

Un sistema del genere aumenta la trasparenza tra i servizi DNS e gli utenti.

### Cosa è richiesto per implementare gli SDE

Sebbene AdGuard DNS abbia implementato il supporto per gli SDE, i browser attualmente non supportano nativamente l'analisi e la visualizzazione dei dati SDE. Affinché gli utenti possano visualizzare spiegazioni dettagliate nei loro browser quando un sito web è bloccato, gli sviluppatori di browser devono adottare e supportare la specifica SDE.

### Estensione demo DNS AdGuard per SDE

Per mostrare come funzionano gli SDE AdGuard DNS ha sviluppato un'estensione demo per il browser che mostra come potrebbero funzionare gli _SDE_ se i browser li supportassero. Se provi a visitare un sito web bloccato da AdGuard DNS con questa estensione abilitata, vedrai una pagina di spiegazione dettagliata con le informazioni fornite tramite SDE, come il motivo del blocco, i dettagli di contatto e l'organizzazione responsabile.

![Pagina di spiegazione](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Puoi installare l'estensione dal [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) o da [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Se desideri vedere come appare a livello di DNS, puoi utilizzare il comando `dig` e cercare `EDE` nell'output.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
