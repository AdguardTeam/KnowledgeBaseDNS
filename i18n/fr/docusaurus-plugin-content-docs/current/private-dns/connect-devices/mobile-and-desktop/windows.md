---
title: Windows
sidebar_position: 5
---

To connect a Windows device to AdGuard DNS, first add it to _Dashboard_:

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type d'appareil_, sélectionnez Windows.
3. Nommez le dispositif.
   ![Connexion de l'appareil \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

You can set it up via [AdGuard](#use-adguard-ad-blocker-paid-option) or [AdGuard VPN](#use-adguard-vpn) apps, in [Windows settings](#configure-via-windows-settings), or using the [AdGuard DNS Client](#use-adguard-dns-client).

## Utilisez le Bloqueur AdGuard (option payante)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. Vous pouvez choisir parmi les différents protocoles de chiffrement. En plus du filtrage DNS, vous obtenez également un excellent bloqueur de publicité qui fonctionne sur l'ensemble de votre système.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Ouvrez l'application.
3. Click _Settings_ at the top of the app’s home screen.
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
8. Cliquez sur _Enregistrer et sélectionner_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Le serveur DNS que vous avez ajouté apparaîtra en bas de la liste des _Serveurs DNS personnalisés_.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez AdGuard VPN

Tous les services VPN ne prennent pas en charge DNS chiffré. Cependant, notre VPN le fait, donc si vous avez besoin à la fois d'un VPN et d'un DNS privé, AdGuard VPN est votre option de choix.

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
7. Cliquez sur _Enregistrer et sélectionner_.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Configure via Windows settings

:::note

Available only on Windows 11.

:::

1. In the _Search_ bar on the taskbar, type **Ethernet settings** or **Wi-Fi settings**, depending on your connection type.
   Click the network (Wi-Fi ID or Ethernet) you want to configure.
   ![Search \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Scroll to _DNS server assignment_ and click _Edit_.
   ![DNS server assignment \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Change DNS settings to _Manual_.
4. Toggle the IPv4 switch to _On_.
5. Enter the following DNS server addresses:
   - Preferred DNS: `94.140.14.49`
   - Alternate DNS: `94.140.14.59`
6. Turn _DNS over HTTPS template_ to _On (manual template)_ and enter your personal DNS address. You can find it in the Dashboard under _Server settings_ → _Devices_ → _Devices settings_ → DNS-over-HTTPS.
7. Cliquez sur _Enregistrer_. That’s it — your device is now connected to AdGuard DNS!
   ![Save DNS settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## Utiliser le client AdGuard DNS

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Configuration du DNS brut

Si vous préférez ne pas utiliser de logiciel supplémentaire pour la configuration DNS, vous pouvez opter pour le DNS non chiffré. Vous avez deux choix : utiliser des IP liées ou des IP dédiées.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
