---
title: iOS
sidebar_position: 3
---

Per connettere un dispositivo iOS a AdGuard DNS, prima aggiungilo al _Cruscotto_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo di dispositivo_, seleziona iOS.
3. Assegna un nome al dispositivo.
    ![Collegamento dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

L'app AdGuard ti consente di utilizzare DNS crittografati, rendendola perfetta per configurare AdGuard DNS sul tuo dispositivo iOS. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. Installa l'[app AdGuard](https://adguard.com/adguard-ios/overview.html) sul dispositivo che desideri connettere a AdGuard DNS.
2. Apri l'app AdGuard.
3. Seleziona la scheda _Protezione_ nel menu inferiore.
    ![Icona scudo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Assicurati che _Protezione DNS_ sia attivato e quindi toccalo. Scegli _server DNS_.
    ![Protezione DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
    ![Server DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Scorri verso il basso fino in fondo e tocca _Aggiungi un server DNS personalizzato_.
    ![Aggiungi server DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copia uno dei seguenti indirizzi DNS e incollalo nel campo _indirizzo server DNS_ nell'app. Se non sei sicuro di quale preferire, scegli DNS-over-HTTPS.
    ![Copia indirizzo server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
    ![Incolla indirizzo server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tocca _Salva e Seleziona_.
    ![Salva e Seleziona \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Il tuo server appena creato dovrebbe apparire in fondo all'elenco.
    ![Server personalizzato \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Installa l'[app AdGuard VPN](https://adguard-vpn.com/ios/overview.html) sul dispositivo che desideri connettere a AdGuard DNS.
2. Apri l'app AdGuard VPN.
3. Tocca l'icona dell'ingranaggio nell'angolo in basso a destra dello schermo.
    ![Icona dell'ingranaggio \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Apri _Modalità generale_.
    ![Impostazioni generali \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Seleziona _server DNS_.
    ![Server DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Scorri verso il basso fino a _Aggiungi server DNS personalizzato_.
    ![Aggiungi server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copia uno dei seguenti indirizzi DNS e incollalo nel campo di testo _indirizzi server DNS_. Se non sei sicuro di quale preferire, seleziona _DNS-over-HTTPS_.
    ![Server DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
    ![Server DNS personalizzato \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tocca _Salva_.
    ![Salva server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Il tuo server appena creato dovrebbe apparire sotto _Server DNS personalizzati_.
    ![Server personalizzato \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Usa un profilo di configurazione

Un profilo dispositivo iOS, noto anche come "profilo di configurazione" da Apple, è un file XML firmato con un certificato che puoi installare manualmente sul tuo dispositivo iOS o distribuire utilizzando una soluzione MDM. Ti consente anche di configurare il DNS Privato AdGuard sul tuo dispositivo.

:::note Importante

Se stai utilizzando una VPN, il profilo di configurazione verrà ignorato.

:::

1. Scarica il profilo.
2. Apri impostazioni.
3. Tocca _Profilo scaricato_.
    ![Profilo scaricato \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tocca _Installa_ e segui le istruzioni sullo schermo.
    ![Installa \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configura DNS semplice

Se preferisci non utilizzare software extra per configurare DNS, puoi optare per DNS non crittografato. Ci sono due opzioni: utilizzare IP collegati o IP dedicati.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
