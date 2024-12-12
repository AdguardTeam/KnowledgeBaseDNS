---
title: Registro delle modifiche
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Questo articolo contiene il registro delle modifiche per [AdGuard DNS API](private-dns/api/overview.md).

## v1.9

_Rilasciato l'11 luglio 2024_

- Aggiunta funzionalità di connessione automatica dei dispositivi:
  - Nuova impostazione del server DNS — `auto_connect_devices_enabled`, che consente l'approvazione per dispositivi che si connettono automaticamente tramite un tipo di link specifico
  - Nuovo campo in Dispositivo — `auto_device`, che indica che il dispositivo è connesso automaticamente
- Sostituito `int` con `long` per `queries` in CategoryQueriesStats, per `used` in AccountLimits, e per `blocked` e `queries` in QueriesStats

## v1.8

_Rilasciato il 20 aprile 2024_

- Aggiunto supporto per DNS-over-HTTPS con autenticazione:
  - Nuova operazione — reimposta password DNS-over-HTTPS per dispositivo
  - Nuova impostazione del dispositivo — `detect_doh_auth_only`. Disabilita tutti i metodi di connessione DNS eccetto DNS-over-HTTPS con autenticazione
  - Nuovo campo in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Indica l'URL da utilizzare quando ci si connette tramite DNS-over-HTTPS con autenticazione

## v1.7

_Rilasciato l'11 marzo 2024_

- Aggiunta funzionalità per indirizzi IPv4 dedicati:
  - Gli indirizzi IPv4 dedicati possono ora essere utilizzati sui dispositivi per la configurazione del server DNS
  - L'indirizzo IPv4 dedicato è ora associato al dispositivo a cui è collegato, in modo che le query effettuate a questo indirizzo siano registrate per quel dispositivo
- Aggiunte nuove operazioni:
  - Elenca tutti gli indirizzi IPv4 dedicati disponibili
  - Assegna un nuovo indirizzo IPv4 dedicato
  - Collega un indirizzo IPv4 disponibile a un dispositivo
  - Scollega un indirizzo IPv4 da un dispositivo
  - Richiesta d'informazioni sugli indirizzi dedicati associati a un dispositivo
- Aggiunti nuovi limiti ai limiti del profilo:
  - `dedicated_ipv4` fornisce informazioni sulla quantità di indirizzi IPv4 dedicati già allocati, così come il limite su di essi
- Rimosso il campo deprecato di DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Rilasciato il 22 gennaio 2024_

- Aggiunta nuova sezione Impostazioni di accesso per profili DNS (`access_settings`). Personalizzando questi campi, sarai in grado di proteggere il tuo server DNS AdGuard da accessi non autorizzati:

  - `allowed_clients` — qui puoi specificare quali client possono utilizzare il tuo server DNS. Questo campo avrà la priorità sul campo `blocked_clients`
  - `blocked_clients` — qui puoi specificare quali client non sono autorizzati a utilizzare il tuo server DNS
  - `blocked_domain_rules` — qui puoi specificare quali domini non sono autorizzati ad accedere al tuo server DNS, così come definire tali domini con caratteri universali e regole di filtraggio DNS

- Aggiunti nuovi limiti ai limiti del profilo:

  - `access_rules` fornisce la somma dei valori `blocked_clients` e `blocked_domain_rules` attualmente utilizzati, così come il limite sulle regole di accesso
  - `user_rules` mostra la quantità di regole utente create, così come il limite su di esse

- Aggiunta una nuova impostazione `ip_log_enabled` per registrare gli indirizzi IP e i domini dei client

- Aggiunto nuovo codice di errore `FIELD_REACHED_LIMIT` per indicare quando i limiti sono stati raggiunti:

  - Per il numero totale di `blocked_clients` e `blocked_domain_rules` nelle impostazioni di accesso
  - Per `rules` nelle impostazioni delle regole utente personalizzate

## v1.5

_Rilasciato il 16 giugno 2023_

- Aggiunta una nuova impostazione `block_nrd` e raggruppate tutte le impostazioni di sicurezza in un unico posto

### Modificato il modello per le impostazioni di navigazione sicura

Da:

```json
{
   "enabled": true
}
```

A:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

dove `enabled` ora controlla tutte le impostazioni nel gruppo, `block_dangerous_domains` è il campo del modello precedente "enabled" e `block_nrd` è un'impostazione che blocca i domini registrati di recente.

### Modificato il modello per salvare le impostazioni del server

Da:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

a:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

qui viene utilizzato un nuovo campo `safebrowsing_settings` al posto del deprecato `safebrowsing_enabled`, il cui valore è memorizzato in `block_dangerous_domains`.

## v1.4

_Rilasciato il 29 marzo 2023_

- Aggiunta opzione configurabile per bloccare risposte: predefinita (0.0.0.0), REFUSED, NXDOMAIN o indirizzo IP personalizzato

## v1.3

_Rilasciato il 13 dicembre 2022_

- Aggiunto metodo per ottenere limiti del profilo

## v1.2

_Rilasciato il 14 ottobre 2022_

- Aggiunti nuovi tipi di protocollo DNS e DNSCRYPT. Deprecazione di PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP e DNSCRYPT_UDP che verranno rimossi in seguito

## v1.1

_Rilasciato il 7 luglio 2022_

- Aggiunti metodi per recuperare statistiche per tempo, domini, aziende e dispositivi
- Aggiunto metodo per aggiornare le impostazioni del dispositivo
- Corretto la definizione dei campi richiesti

## v1.0

_Rilasciato il 22 febbraio 2022_

- Aggiunta autenticazione
- Operazioni CRUD con dispositivi e server DNS
- Registro delle richieste
- Scaricamento DoH e DoT .mobileconfig
- Elenchi di filtri e servizi web
