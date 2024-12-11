---
title: macOS
sidebar_position: 4
---

Per collegare un dispositivo macOS ad AdGuard DNS, aggiungilo prima a _Cruscotto_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo di dispositivo_, seleziona Mac.
3. Assegna un nome al dispositivo.
   ![Collegamento\_dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

L'app AdGuard ti consente di utilizzare DNS criptati, rendendola perfetta per impostare AdGuard DNS sul tuo dispositivo macOS. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. [Installa l'app](https://adguard.com/adguard-mac/overview.html) sul dispositivo che desideri connettere ad AdGuard DNS.
2. Apri l'app.
3. Clicca l'icona in alto a destra.
   ![Icona di protezione \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Seleziona _Preferenze..._.
   ![Preferenze \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Clicca sulla scheda _DNS_ dalla fila d'icone in alto.
   ![Scheda DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Abilita la protezione DNS selezionando la casella in alto.
   ![Protezione DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Clicca _+_ nell'angolo in basso a sinistra.
   ![Clicca + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copia uno dei seguenti indirizzi DNS e incollalo nel campo _Server DNS_ nell'app. Se non sei sicuro di quale preferire, seleziona _DNS-over-HTTPS_.
   ![Server DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Crea server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Clicca _Salva e Scegli_.
   ![Salva e Scegli \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Il tuo server appena creato dovrebbe apparire in fondo all'elenco.
    ![Fornitori \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Installa l'[app AdGuard VPN](https://adguard-vpn.com/mac/overview.html) sul dispositivo che desideri connettere ad AdGuard DNS.
2. Apri l'app AdGuard VPN.
3. Apri _Impostazioni_ → _Impostazioni app_ → _Server DNS_ → _Aggiungi server personalizzato_.
   ![Aggiungi server personalizzato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copia uno dei seguenti indirizzi DNS e incollalo nel campo di testo _indirizzi server DNS_. Se non sei sicuro su quale preferire, seleziona DNS-over-HTTPS.
   ![Server DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Clicca _Salva e seleziona_.
6. Il server DNS che hai aggiunto verrà visualizzato in fondo all'elenco dei _Server DNS personalizzati_.
   ![Server DNS personalizzati \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Usa un profilo di configurazione

Un profilo dispositivo macOS, noto anche come "profilo di configurazione" da Apple, è un file XML firmato da un certificato che puoi installare manualmente sul tuo dispositivo o distribuire utilizzando una soluzione MDM. Ti consente anche di configurare il DNS Privato AdGuard sul tuo dispositivo.

:::note Importante

Se stai utilizzando una VPN, il profilo di configurazione verrà ignorato.

:::

1. Sul dispositivo che desideri connettere ad AdGuard DNS, scarica il profilo di configurazione.
2. Scegli menu Apple → _Impostazioni di sistema_, fai clic su _Privacy e sicurezza_ nella barra laterale, quindi fai clic su _Profili_ a destra (potrebbe essere necessario scorrere verso il basso).
   ![Profilo scaricato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. Nella sezione _Scaricati_, fai doppio clic sul profilo.
   ![Scaricato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Controlla il contenuto del profilo e fai clic su _Installa_.
   ![Installa \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Inserisci la password di amministrazione e fai clic su _OK_.

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Configura DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. Hai due opzioni: utilizzare IP collegati o IP dedicati.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
