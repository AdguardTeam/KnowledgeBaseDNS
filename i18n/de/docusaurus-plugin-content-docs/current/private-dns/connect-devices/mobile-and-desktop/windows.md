---
title: Windows
sidebar_position: 5
---

To connect a Windows device to AdGuard DNS, first add it to _Dashboard_:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ Windows aus.
3. Benennen Sie das Gerät.
    ![Gerät verbinden \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

You can set it up via [AdGuard](#use-adguard-ad-blocker-paid-option) or [AdGuard VPN](#use-adguard-vpn) apps, in [Windows settings](#configure-via-windows-settings), or using the [AdGuard DNS Client](#use-adguard-dns-client).

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der im gesamten System funktioniert.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Öffnen Sie die App.
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
8. Klicken Sie auf _Speichern und auswählen_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Der hinzugefügte DNS-Server wird unten in der Liste der _Benutzerdefinierten DNS-Server_ angezeigt.
    ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Nicht alle VPN-Dienste unterstützen verschlüsseltes DNS. Unser VPN jedoch schon, daher ist AdGuard VPN die erste Wahl für Sie, wenn Sie sowohl ein VPN als auch ein privates DNS benötigen.

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
7. Klicken Sie auf _Speichern und auswählen_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

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
7. Klicken Sie auf _Speichern_. That’s it — your device is now connected to AdGuard DNS!
    ![Save DNS settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## AdGuard DNS Client verwenden

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
