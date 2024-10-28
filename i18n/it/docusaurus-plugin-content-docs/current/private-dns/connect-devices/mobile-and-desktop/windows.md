---
title: Windows
sidebar_position: 5
---

Per connettere un dispositivo iOS a AdGuard DNS, prima aggiungilo al _Cruscotto_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo di dispositivo_, seleziona Windows.
3. Assegna un nome al dispositivo.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Apri l'app.
3. Click _Settings_ at the top of the app's home screen.
   ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Select the _DNS Protection_ tab from the menu on the left.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Click your currently selected DNS server.
   ![DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Scroll down and click _Add a custom DNS server_.
   ![Add a custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. In the DNS upstreams field, paste one of the following addresses. If you’re not sure which one to prefer, choose DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Click _Save and select_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Install AdGuard VPN.
2. Open the app and click _Settings_.
3. Select _App settings_.
   ![App settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Scroll down and select _DNS servers_.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Click _Add custom DNS server_.
   ![Add custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. In the _Server address_ field, paste one of the following addresses. If you’re not sure which one to prefer, select DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Click _Save and select_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Usa il Client AdGuard DNS

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Configura DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. You have two choices: using linked IPs or dedicated IPs.

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
