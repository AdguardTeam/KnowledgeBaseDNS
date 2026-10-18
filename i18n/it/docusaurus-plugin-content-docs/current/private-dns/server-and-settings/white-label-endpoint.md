---
title: Endpoint white-label (indirizzo IP dell'account)
sidebar_position: 7
---

I domini personalizzati consentono ai partner di offrire AdGuard DNS con il proprio marchio. Con il piano Aziendale, questo servizio può essere eseguito su un indirizzo IP privato: questa funzione si chiama _Indirizzo IP dell'account_. I domini puntano all'_indirizzo IP dell'account_ tramite un record A anziché tramite un record CNAME, utilizzato per i domini personalizzati standard.

:::note

**CNAME** punta il tuo dominio a un altro dominio (`dns.partner.com` → `cname.adguard-dns.com`). L'indirizzo IP reale viene risolto tramite quel secondo dominio, quindi il traffico passa attraverso l'infrastruttura condivisa che serve.

La **registrazione A** punta direttamente il tuo dominio a un indirizzo IP (`dns.partner.com` → `203.0.113.10`). Non c’è alcun dominio intermedio: l’indirizzo a cui risolve il tuo dominio è quello che gestisce il traffico.

:::

Ogni account può avere un _indirizzo IP dell'account_ e puoi puntarvi diversi domini. Questo non è lo stesso degli indirizzi IPv4 e IPv6 dedicati utilizzati per identificare i dispositivi: un _IP dell'account_ è l'indirizzo a cui si risolvono i domini personalizzati.

## Come ottenere un indirizzo IP dell'account

Per richiedere un _IP dell'account_, contatta il tuo account manager o il team di supporto all'indirizzo [support@adguard-dns.io](mailto:support@adguard-dns.io).

Una volta assegnato l'indirizzo, il blocco _Endpoint white-label_ appare in _Impostazioni_ → _Impostazioni avanzate_ → _Domini personalizzati_, mostrando il tuo _Indirizzo IP dell'account_. Fino ad allora, il blocco non viene mostrato.

![Endpoint white label](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Se il tuo profilo si sposta dal piano Aziendale, l'indirizzo diventa inattivo e i domini che puntano ad esso si fermano. I domini personalizzati rimangono disponibili nel piano **Team**, ma solo tramite un record CNAME; per riattivare i domini sospesi, è necessario aggiungerli nuovamente come domini personalizzati standard.

L'indirizzo stesso rimane riservato per il tuo profilo, quindi se torni al piano Aziendale, riavrai lo stesso.

:::

## Come puntare un dominio all'indirizzo IP dell'account

La configurazione segue gli stessi passaggi di un dominio personalizzato standard, con la differenza che si crea un record A anziché un record CNAME. Inoltre, per i domini DoH, il certificato non viene emesso automaticamente: è necessario caricarne uno proprio.

1. In _Domini personali_, scegli il protocollo: _Aggiungi dominio DoH_ (per DNS-over-HTTPS) o _Aggiungi dominio DoT/DoQ_ (per DNS-over-TLS o DNS-over-Quic).

   ![Scelta del protocollo](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Inserisci il dominio che desideri utilizzare (ad es. `dns.partner.com`) e clicca su _Avanti_. È necessario avere accesso al pannello di gestione DNS di questo dominio.

   ![Inserimento del dominio](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. La schermata successiva mostra i valori per la tua registrazione DNS: il tuo dominio sotto _Nome (Host)_ e il tuo _IP del profilo_ sotto _Valore (Punta a / indirizzo IP)_. Lasciando aperta questa schermata, vai al Pannello di controllo del tuo fornitore DNS e crea una registrazione A con quei valori. Non creare una registrazione CNAME — i domini su un _IP dell'account_ puntano direttamente all'indirizzo.

   ![Valori della registrazione DNS](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. Nella schermata di AdGuard DNS con i valori della registrazione, clicca su _Verifica_. Se la registrazione non si è ancora propagata o punta da qualche parte diversa, la verifica fallisce. Controlla la registrazione e tenta ancora tra qualche minuto.

5. Carica certificato TLS. I certificati non vengono rilasciati automaticamente per i domini associati a un _IP dell'account_:

   - Per **DoT/DoQ**, carica un certificato con carattere universale (`*.partner.com`), come per un dominio personale standard.
   - Per **DoH**, è necessario caricare anche il proprio certificato. Ciò differisce dalla procedura standard, in cui AdGuard DNS può generarne uno automaticamente.

   Finché non aggiungi un certificato, il dominio mostra lo stato _Nessun certificato_ e i tuoi clienti non possono connettersi ad esso.

   ![Caricamento di un certificato](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

Il rinnovo è dalla tua parte. Riceverai un'email di promemoria prima della scadenza del certificato. Quando questo accade, il tuo dominio si fermerà finché non caricherai un nuovo certificato.

:::

## Domini personalizzati esistenti e indirizzo IP dell'account

I domini aggiunti prima di ottenere un _IP dell'account_ non vengono trasferiti automaticamente. Continuano a funzionare tramite la loro registrazione CNAME, come prima.

Per trasferire un dominio al tuo _IP dell'account_, inizia eliminando il record CNAME presso il tuo provider DNS: un dominio non può avere contemporaneamente un record CNAME e un record A. Quindi elimina il dominio in AdGuard DNS e aggiungilo di nuovo, seguendo le fasi sopra indicate.

:::caution

I tuoi clienti non potranno utilizzare il dominio tra il momento in cui lo elimini e il momento in cui il nuovo approntamento viene verificato.

:::

## Limitazioni

Un _IP dell'account_ modifica l'indirizzo a cui viene risolto il tuo dominio. Alcuni argomenti che non tratta:

- L'indirizzo IP dell'account non è completamente personalizzabile a livello di rete. Una ricerca WHOIS, RDAP o ASN dell'indirizzo IP può ancora identificare AdGuard come fornitore dell'infrastruttura IP sottostante.
- Il DNS inverso non è personalizzabile, quindi una ricerca PTR non restituirà il tuo dominio.
- Il rilevamento del server DNS (DDR) non è disponibile su un _IP dell'account_.
- I certificati con l'indirizzo IP nel campo SAN non sono gestiti, quindi i tuoi clienti si connettono tramite il nome di dominio anziché tramite l'indirizzo stesso.
- L'utilizzo del proprio intervallo IP (BYOIP) non è gestito, poiché l'indirizzo è assegnato da AdGuard.
- I domini DNSCheck, utilizzati per verificare la connessione DNS di un dispositivo, vengono ancora risolti tramite l'infrastruttura di AdGuard.
