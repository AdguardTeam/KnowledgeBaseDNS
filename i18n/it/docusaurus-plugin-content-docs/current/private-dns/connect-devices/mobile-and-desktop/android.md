---
title: Android
sidebar_position: 2
---

Per connettere un dispositivo Android a AdGuard DNS, prima aggiungilo a _Dashboard_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo dispositivo_, seleziona Android.
3. Assegna un nome al dispositivo.
   ![Collegamento dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

L'app AdGuard ti consente di utilizzare DNS criptati, rendendola perfetta per configurare AdGuard DNS sul tuo dispositivo Android. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. Installa [l'app AdGuard](https://adguard.com/adguard-android/overview.html) sul dispositivo che vuoi connettere ad AdGuard DNS.
2. Apri l'app.
3. Tocca l'icona dello scudo nella barra dei menu nella parte inferiore dello schermo.
   ![Icona dello scudo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tocca _Protezione DNS_.
   ![Protezione DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Seleziona _server DNS_.
   ![Server DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Scorri verso il basso fino a _Server personalizzati_ e tocca _Aggiungi server DNS_.
   ![Aggiungi server DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copia uno dei seguenti indirizzi DNS e incollalo nel campo _Indirizzi server_ nell'app. Se non sei sicuro di quale utilizzare, seleziona _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Server DNS personalizzato \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tocca _Aggiungi_.
9. Il server DNS che hai aggiunto verrà visualizzato in fondo all'elenco dei _Server DNS personalizzati_. Per selezionarlo, tocca il suo nome o il pulsante radio accanto ad esso.
   ![Seleziona server DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tocca _Salva e seleziona_.
    ![Salva e seleziona \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Installa [l'app AdGuard VPN](https://adguard-vpn.com/android/overview.html) sul dispositivo che desideri connettere a AdGuard DNS.
2. Apri l'app.
3. Nella barra dei menu nella parte inferiore dello schermo, tocca l'icona dell'ingranaggio.
   ![Icona dell'ingranaggio \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Apri _Impostazioni app_.
   ![App settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Seleziona _server DNS_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Scroll down and tap _Add a custom DNS server_.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS servers adresses_ field in the app. If you are not sure which one to use, select DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tocca _Salva e seleziona_.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Configure Private DNS manually

You can configure your DNS server in your device settings. Please note that Android devices only support DNS-over-TLS protocol.

1. Go to _Settings_ → _Wi-Fi & Internet_ (or _Network and Internet_, depending on your OS version).
   ![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Select _Advanced_ and tap _Private DNS_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Seleziona l'opzione _Nome host fornitore DNS privato_ e inserisci l'indirizzo del tuo server personale: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tocca _Salva_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Configura DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. You have two choices: using linked IPs or dedicated IPs.

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
