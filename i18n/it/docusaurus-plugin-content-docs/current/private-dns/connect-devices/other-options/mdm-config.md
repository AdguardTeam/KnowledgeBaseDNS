---
title: Gestire l'app mobile AdGuard DNS tramite MDM
sidebar_position: 7
---

:::info

Questo articolo descrive una funzione disponibile nell'app mobile AdGuard DNS. Per provarlo tu stesso, scarica l'app AdGuard DNS per [Android](https://agrd.io/android_dns) o [iOS](https://agrd.io/ios_dns).

:::

L'app mobile AdGuard DNS supporta la gestione aziendale tramite sistemi MDM (Mobile Device Management) usando lo standard Managed App Configuration (MAC).

Questo consente agli amministratori IT di configurare e implementare le impostazioni di AdGuard DNS per più dispositivi tramite console EMM, come Google Workspace, Microsoft Intune e altre soluzioni compatibili con [AppConfig.org](https://www.appconfig.org/).

### Soluzioni EMM supportate

L'app è compatibile con qualunque sistema EMM che supporti lo standard di AppConfig.org:

- Google Workspace (Android Commerciale)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (per iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Altre soluzioni compatibili con AppConfig

## Parametri supportati

### Parametri di configurazione gestita dell'app

| **Parametro**                                            | **Tipo** | **Obbligatorio** | **Valori validi**                                                                                                                                                                                                                                                | **Cosa fa il parametro**                                                                                                                                        | **Per l'installazione iniziale**                                                                                                                     | **Quando il valore cambia**                                                                                                                                                                                                                                                                     | **Se non è specificato**                                                                                      |
| -------------------------------------------------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **ID di configurazione** (`setup_id`) | Stringa  | No               | Identificatore di configurazione DNS di AdGuard                                                                                                                                                                                                                  | Identifica il dispositivo per la connessione al server AdGuard DNS.                                                                             | L'app entra in modalità gestita; il campo è bloccato; l'utente non può modificarlo; opzione "Reimposta connessione" non disponibile. | Connessione e impostazioni sono completamente reimpostati; l'utente deve riconnettersi; la protezione DNS si ferma.                                                                                                                                                             | L'utente può inserire manualmente o usare un codice QR.                                       |
| **Nome dispositivo** (`device_name`)  | Stringa  | No               | Un nome per il dispositivo                                                                                                                                                                                                                                       | Imposta il nome del dispositivo nel Pannello di controllo di AdGuard DNS. Deve avere una lunghezza massima di 64 caratteri.     | L'app entra in modalità gestita; il nome è usato automaticamente se non impostato tramite ID approntamento; il campo è bloccato.     | Nulla accade.                                                                                                                                                                                                                                                                   | L'utente può inserire manualmente; l'app può suggerire il nome tramite l'ID di approntamento. |
| **Protocollo DNS** (`dns_protocol`)   | Scelta   | No               | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Determina quale protocollo DNS criptato è usato (Nota: DoQ non è compatibile con la modalità nativa su iOS). | L'app entra in modalità gestita; protocollo specificato applicato come Predefinito; selezione nelle impostazioni bloccata.           | L'app passa al nuovo protocollo; si riconnette automaticamente se la protezione DNS è attiva. Quando si cambia la modalità operativa (Nativa ↔ VPN), l'app non si riconnetterà automaticamente, ma l'utente dovrà riconnettersi manualmente. | L'utente può selezionare manualmente nelle impostazioni.                                      |

## Modalità gestita

L'app entra automaticamente in modalità gestita quando il sistema MDM fornisce almeno un parametro di configurazione. In questa modalità, le impostazioni MDM hanno sempre la priorità sulle preferenze dell'utente: qualsiasi parametro configurato tramite MDM non può essere modificato dall'utente, mentre i parametri non definiti da MDM rimangono modificabili.

Quando la configurazione MDM è aggiornata, tutte le modifiche vengono applicate automaticamente. Se il sistema MDM rimuove tutti i parametri di configurazione in una volta, l'app esce dalla modalità gestita, le impostazioni precedentemente bloccate diventano nuovamente disponibili e l'utente può modificare liberamente tutti i parametri.

## Aggiornamenti della configurazione

L'app riceve automaticamente le notifiche relative alle modifiche di configurazione e gli aggiornamenti forniti dal sistema EMM vengono applicati immediatamente all'arrivo. A seconda del fornitore EMM, può esserci un ritardo prima che la configurazione raggiunga il dispositivo. Non è necessario riavviare l'app affinché le modifiche abbiano effetto.
