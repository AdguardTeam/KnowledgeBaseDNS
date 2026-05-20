---
title: Liste di blocco
sidebar_position: 2
---

## Cosa sono le liste di blocco

Le liste di blocco sono insiemi di regole in formato testo che AdGuard DNS utilizza per filtrare annunci e contenuti che potrebbero compromettere la tua privacy. In generale, un filtro consiste in regole con un focus simile. Ad esempio, potrebbero esserci regole per le lingue dei siti web (come i filtri in tedesco o russo) o regole che proteggono da siti di phishing (come la Phishing URL Blocklist). Puoi facilmente abilitare o disabilitare queste regole come un gruppo.

## Perché sono utili

Le liste di blocco sono progettate per una personalizzazione flessibile delle regole di filtraggio. Ad esempio, potresti voler bloccare domini pubblicitari in una specifica regione linguistica, o potresti voler liberarti di domini di tracciamento o pubblicità. Seleziona le liste di blocco che desideri e personalizza il filtraggio a tuo piacimento.

## Come attivare le liste di blocco in AdGuard DNS

Per attivare le liste di blocco:

1. Apri il cruscotto.
2. Vai alla sezione _Server_.
3. Seleziona il server richiesto.
4. Clicca su _Liste di blocco_.

## Tipi di liste di blocco

### Generale

Un gruppo di filtri che include liste per il blocco di annunci e domini di tracciamento.

![Liste di blocco generali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general_it.png)

### Regionale

Un gruppo di filtri composto da liste regionali per bloccare domini in lingue specifiche.

![Liste di blocco regionali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional_it.png)

### Sicurezza

Un gruppo di filtri contenente regole per il blocco di siti fraudolenti e domini di phishing.

![Liste di blocco di sicurezza \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security_it.png)

### Altro

Liste di blocco con varie regole di blocco da sviluppatori terzi.

![Altre liste di blocco \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other_it.png)

## Aggiunta di filtri

Se desideri espandere l'elenco dei filtri di AdGuard DNS, puoi inviare una richiesta per aggiungerli nella sezione pertinente di [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) su GitHub.

Per inviare una richiesta:

1. Vai al link sopra (potresti dover registrarti su GitHub).
2. Clicca su _Nuovo problema_.
3. Clicca su _Richiesta lista di blocco_ e compila il modulo.
4. Dopo aver compilato il modulo, clicca su _Invia nuovo problema_.

Se le regole di blocco del tuo filtro non duplicano le liste esistenti, verrà aggiunto al repository.

## Regole utente

Puoi anche creare le tue regole di blocco.
Scopri di più nell'articolo sulle [Regole utente](/private-dns/setting-up-filtering/user-rules.md).

## Liste blocchi personali

Se hai bisogno che sia aggiunta ad AdGuard DNS una lista blocchi specifica, puoi scaricarla tramite URL.

![Aggiungi lista blocchi personale](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_it.png)

1. Apri il quadro comandi e clicca _Server_ nel menu' a sinistra
2. Seleziona _Il mio server → Liste blocchi_
3. Nella sezione _Personale_, clicca _Aggiungi lista blocchi personale_
4. Inserisci il nome della lista blocchi, il relativo URL e una descrizione facoltativa, quindi clicca _Aggiungi_

:::note

Ciascun piano di abbonamento ha un limite per il numero totale di regole di filtraggio: Personale — mille, Team — 5mila, Aziendale — 100mila. Questa limitazione è in vigore perché le liste blocchi sono scaricate sui server DNS e consentire dimensioni delle liste blocchi senza limiti potrebbe portare a un sovraccarico del server, causando potenzialmente inghippi di prestazioni.

:::

Se una lista blocchi personale supera il limite, sarà **disabilitata automaticamente** e vedrai una notifica corrispondente. Per attivare una lista blocchi appena aggiunta che eccede il limite di regole, dovrai rimuovere altre liste blocchi o aggiornare a un piano con un limite di regole più elevato.
