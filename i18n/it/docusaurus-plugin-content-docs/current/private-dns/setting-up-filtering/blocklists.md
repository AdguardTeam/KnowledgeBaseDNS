---
title: Liste di blocco
sidebar_position: 1
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

![Liste di blocco generali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regionale

Un gruppo di filtri composto da liste regionali per bloccare domini in lingue specifiche.

![Liste di blocco regionali \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Sicurezza

Un gruppo di filtri contenente regole per il blocco di siti fraudolenti e domini di phishing.

![Liste di blocco di sicurezza \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Altro

Liste di blocco con varie regole di blocco da sviluppatori terzi.

![Altre liste di blocco \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Aggiunta di filtri

Se desideri espandere l'elenco dei filtri di AdGuard DNS, puoi inviare una richiesta per aggiungerli nella sezione pertinente di [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) su GitHub.

Per inviare una richiesta:

1. Vai al link sopra (potresti dover registrarti su GitHub).
2. Clicca su _Nuovo problema_.
3. Clicca su _Richiesta lista di blocco_ e compila il modulo.
4. Dopo aver compilato il modulo, clicca su _Invia nuovo problema_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Regole utente

Puoi anche creare le tue regole di blocco.
Scopri di più nell'articolo sulle [Regole utente](/private-dns/setting-up-filtering/user-rules.md).
