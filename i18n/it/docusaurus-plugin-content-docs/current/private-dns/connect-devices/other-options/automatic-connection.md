---
title: Connessione automatica
sidebar_position: 5
---

## Perché è utile

Non tutti si sentono a proprio agio ad aggiungere dispositivi tramite il Cruscotto. Ad esempio, se sei un amministratore di sistema che configura più dispositivi aziendali contemporaneamente, vorrai ridurre al minimo le attività manuali il più possibile.

Puoi creare un collegamento e utilizzarlo nelle impostazioni del dispositivo. Il tuo dispositivo sarà rilevato e connesso automaticamente al server.

## Come configurare la connessione automatica

1. Apri il _Cruscotto_ e seleziona il server richiesto.
2. Vai a _Avanzate_.
3. Abilita l'opzione per connettere i dispositivi automaticamente.
   ![Connetti i dispositivi automaticamente \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

Ora puoi connettere automaticamente il tuo dispositivo al server creando un indirizzo speciale che include il nome del dispositivo, il tipo di dispositivo e l'ID del server corrente. Esploriamo come appaiono questi indirizzi e le regole per crearli.

### Esempi di indirizzi di connessione automatica

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — questo creerà automaticamente un dispositivo `Android` con il protocollo `DNS-over-TLS` chiamato `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — questo creerà automaticamente un dispositivo `Windows` con il protocollo `DNS-over-HTTPS` chiamato `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — questo creerà automaticamente un dispositivo `iOS` con il protocollo `DNS-over-QUIC` chiamato `Mary Sue`

### Convenzioni di denominazione

Quando crei dispositivi manualmente, tieni presente che ci sono restrizioni relative alla lunghezza del nome, ai caratteri, agli spazi e ai trattini.

**Lunghezza del nome**: massimo 50 caratteri. I caratteri oltre questo limite vengono ignorati.

**Caratteri permessi**: lettere inglesi, numeri e trattini `-`. Altri caratteri vengono ignorati.

**Spazi e trattini**: usa un trattino per uno spazio e un doppio trattino (`--`) per un trattino.

**Tipo di dispositivo**: Usa le seguenti abbreviazioni:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Smart TV — `stv`
- Console di gioco — `gam`
- Altro — `otr`

## Generatore collegamenti

Abbiamo aggiunto un modello che genera un collegamento per il tipo di dispositivo e il protocollo specifici.

1. Vai a _Server_ → _Impostazioni server_ → _Dispositivi_ → _Connetti dispositivi automaticamente_ e clicca su _Generatore collegamenti e istruzioni_.
2. Seleziona il protocollo che desideri usare, il nome del dispositivo e il tipo di dispositivo.
3. Clicca su _Genera collegamento_.
   ![Genera collegamento \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Hai generato correttamente il collegamento, ora copia l'indirizzo del server e usalo in una delle [app AdGuard](https://adguard.com/welcome.html)
