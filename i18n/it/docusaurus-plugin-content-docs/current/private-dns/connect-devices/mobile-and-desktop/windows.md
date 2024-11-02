---
title: Windows
sidebar_position: 5
---

Per connettere un dispositivo iOS a AdGuard DNS, prima aggiungilo al _Cruscotto_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo di dispositivo_, seleziona Windows.
3. Assegna un nome al dispositivo.
   ![Collegamento\_dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

L'app AdGuard ti consente di utilizzare DNS criptati, rendendola perfetta per configurare AdGuard DNS sul tuo dispositivo Windows. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. [Installa l'app](https://adguard.com/adguard-windows/overview.html) sul dispositivo che desideri connettere a AdGuard DNS.
2. Apri l'app.
3. Fai clic su _Impostazioni_ nella parte superiore della schermata iniziale dell'app.
   ![Impostazioni \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Seleziona la scheda _Protezione DNS_ dal menu a sinistra.
   ![Protezione DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Fai clic sul server DNS attualmente selezionato.
   ![Server DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Scorri verso il basso e fai clic su _Aggiungere un server DNS personalizzato_.
   ![Aggiungi un server DNS personalizzato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Nel campo degli upstream DNS, incolla uno dei seguenti indirizzi. Se non sei sicuro di quale preferire, scegli DNS-over-HTTPS.
   ![Server DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Crea server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Clicca _Salva e seleziona_.
   ![Salva e seleziona \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Il server DNS che hai aggiunto verrà visualizzato in fondo all'elenco dei _Server DNS personalizzati_.
   ![Server DNS personalizzati \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Installa AdGuard VPN.
2. Apri l'app e fai clic su _Impostazioni_.
3. Seleziona _Impostazioni app_.
   ![Impostazioni dell'app \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Scorri verso il basso e seleziona _Server DNS_.
   ![Server DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Fai clic su _Aggiungi server DNS personalizzato_.
   ![Aggiungi server DNS personalizzato \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Nel campo _Indirizzo server_, incolla uno dei seguenti indirizzi. Se non sei sicuro su quale preferire, seleziona DNS-over-HTTPS.
   ![Server DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Crea server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Clicca _Salva e seleziona_.
   ![Salva e seleziona \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Usa il Client AdGuard DNS

AdGuard DNS Client è uno strumento versatile e multipiattaforma che ti consente di connetterti a AdGuard DNS utilizzando protocolli DNS criptati.

Maggiori dettagli possono essere trovati in [articolo diverso](/dns-client/overview/).

## Configura DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. Hai due opzioni: utilizzare IP collegati o IP dedicati.

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
