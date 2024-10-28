---
title: macOS
sidebar_position: 4
---

To connect a macOS device to AdGuard DNS, first add it to _Dashboard_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo di dispositivo_, seleziona Mac.
3. Assegna un nome al dispositivo.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Utilizza AdGuard Blocca-Annunci (opzione a pagamento)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your macOS device. Puoi scegliere tra vari protocolli di crittografia. Insieme al filtraggio DNS, ottieni anche un eccellente blocco degli annunci che funziona su tutto il sistema.

1. [Install the app](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Apri l'app.
3. Click the icon in the top right corner.
   ![Protection icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Select _Preferences..._.
   ![Preferences \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Click the _DNS_ tab from the top row of icons.
   ![DNS tab \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Enable DNS protection by ticking the box at the top.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Click _+_ in the bottom left corner.
   ![Click + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copy one of the following DNS addresses and paste it into the _DNS servers_ field in the app. Se non sei sicuro di quale preferire, seleziona _DNS-over-HTTPS_.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Click _Save and Choose_.
   ![Save and Choose \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Your newly created server should appear at the bottom of the list.
    ![Providers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Utilizza l'app AdGuard VPN

Non tutti i servizi VPN supportano DNS crittografati. Tuttavia, la nostra VPN lo fa, quindi se hai bisogno sia di una VPN che di un DNS privato, AdGuard VPN è la tua opzione ideale.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Apri l'app AdGuard VPN.
3. Open _Settings_ → _App settings_ → _DNS servers_ → _Add Custom Server_.
   ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copia uno dei seguenti indirizzi DNS e incollalo nel campo di testo _indirizzi server DNS_. If you are not sure which one to prefer, select DNS-over-HTTPS.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Click _Save and select_.
6. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Usa un profilo di configurazione

A macOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. Ti consente anche di configurare il DNS Privato AdGuard sul tuo dispositivo.

:::note Importante

Se stai utilizzando una VPN, il profilo di configurazione verrà ignorato.

:::

1. On the device that you want to connect to AdGuard DNS, download the configuration profile.
2. Choose Apple menu → _System Settings_, click _Privacy & Security_ in the sidebar, then click _Profiles_ on the right (you may need to scroll down).
   ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. In the _Downloaded_ section, double-click the profile.
   ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Review the profile contents and click _Install_.
   ![Install \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Enter the admin password and click _OK_.

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

## Configura DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. You have two choices: using linked IPs or dedicated IPs.

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
