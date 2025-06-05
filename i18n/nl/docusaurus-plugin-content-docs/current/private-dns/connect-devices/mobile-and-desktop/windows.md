---
title: Windows
sidebar_position: 5
---

To connect a Windows device to AdGuard DNS, first add it to _Dashboard_:

1. Go to _Dashboard_ and click _Connect new device_.
2. In the drop-down menu _Device type_, select Windows.
3. Name the device.
    ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Je kunt dit instellen via de [AdGuard](#use-adguard-ad-blocker-paid-option) of [AdGuard VPN](#use-adguard-vpn) apps, in de [Windows instellingen](#configure-via-windows-settings), of met behulp van de [AdGuard DNS Client](#use-adguard-dns-client).

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the app.
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

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

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

All done! Your device is successfully connected to AdGuard DNS.

## Configureren via Windows-instellingen

:::note

Alleen beschikbaar op Windows 11.

:::

1. Typ in de _Zoekbalk_ op de taakbalk **Ethernet-instellingen** of **Wi-Fi-instellingen**, afhankelijk van je verbindingstype.
    Klik op het netwerk (Wi-Fi-ID of Ethernet) dat je wilt configureren.
    ![Zoeken \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Blader naar _DNS-servertoewijzing_ en klik op _Bewerken_.
    ![DNS-servertoewijzing \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Wijzig de DNS-instellingen naar _Handmatig_.
4. Zet de IPv4-schakelaar op _Aan_.
5. Voer de volgende DNS-serveradressen in:
    - Voorkeur DNS: '94.140.14.49'
    - Alternatieve DNS: '94.140.14.59'
6. Zet _DNS-over-HTTPS-sjabloon_ op _Aan (handmatig sjabloon)_ en voer je persoonlijke DNS-adres in. Je kunt het vinden in het Dashboard onder _Serverinstellingen_ → _Apparaten_ → _Apparaatinstellingen_ → DNS-over-HTTPS.
7. Klik op _Opslaan_. Dat is alles - je apparaat is nu verbonden met AdGuard DNS!
    ![DNS-instellingen opslaan \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## Use AdGuard DNS Client

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Configure plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [Toegewezen IP's](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Gekoppelde IP's](/private-dns/connect-devices/other-options/linked-ip.md)
