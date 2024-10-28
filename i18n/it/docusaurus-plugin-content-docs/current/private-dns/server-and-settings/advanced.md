---
title: Impostazioni avanzate
sidebar_position: 2
---

La sezione delle impostazioni avanzate è destinata agli utenti più esperti e include le seguenti impostazioni.

## Rispondere ai domini bloccati

Qui puoi selezionare la risposta DNS per la richiesta bloccata:

- **Predefinito**: Rispondi con un indirizzo IP pari a zero (0.0.0.0 per A; :: per AAAA) quando bloccato da una regola in stile Blocco-annunci; rispondi con l'indirizzo IP specificato nella regola quando bloccato da una regola in stile /etc/hosts
- **REFUSED**: Rispondere con il codice REFUSED
- **NXDOMAIN**: Rispondere con il codice NXDOMAIN
- **IP personalizzato**: Rispondere con un indirizzo IP impostato manualmente

## Tempo di vita (TTL)

Il tempo di vita (TTL) stabilisce il periodo di tempo (in secondi) in cui un dispositivo client può memorizzare nella cache la risposta a una richiesta DNS e recuperarla dalla sua cache senza richiedere nuovamente il server DNS. Se il valore TTL è alto, le richieste sbloccate di recente possono sembrare ancora bloccate per un po'. Se il TTL è 0, il dispositivo non memorizza le risposte nella cache.

## Bloccare l'accesso a iCloud Private Relay

I dispositivi che utilizzano relay privato iCloud possono ignorare le loro impostazioni DNS, quindi AdGuard DNS non può proteggerli.

## Blocca il dominio canary di Firefox

Impedisce a Firefox di passare al risolutore DoH dalle sue impostazioni quando AdGuard DNS è configurato a livello di sistema.

## Registra gli indirizzi IP

Per impostazione predefinita, AdGuard DNS non registra gli indirizzi IP delle richieste DNS in entrata. Se attivi questa impostazione, gli indirizzi IP saranno registrati e visualizzati nel registro delle query.
