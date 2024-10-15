---
title: Android
sidebar_position: 2
---

To connect an Android device to AdGuard DNS, first add it to _Dashboard_:

1. Go to _Dashboard_ and click _Connect new device_.
2. In the drop-down menu _Device type_, select Android.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Android device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install [the AdGuard app](https://adguard.com/adguard-android/overview.html) on the device you want to connect to AdGuard DNS.
2. Öffnen Sie die App.
3. Tap the shield icon in the menu bar at the bottom of the screen.
   ![Schild-Symbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tippen Sie auf _DNS-Schutz_.
   ![DNS-Schutz \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Scroll down to _Custom servers_ and tap _Add DNS server_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server adresses_ field in the app. If you are not sure which one to use, select _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tap _Add_.
9. The DNS server you’ve added will appear at the bottom of the _Custom servers_ list. To select it, tap its name or the radio button next to it.
   ![DNS-Server auswählen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tap _Save and select_.
    ![Save and select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install [the AdGuard VPN app](https://adguard-vpn.com/android/overview.html) on the device you want to connect to AdGuard DNS.
2. Öffnen Sie die App.
3. In the menu bar at the bottom of the screen, tap the gear icon.
   ![Zahnradsymbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Open _App settings_.
   ![App-Einstellungen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Scroll down and tap _Add a custom DNS server_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS servers adresses_ field in the app. If you are not sure which one to use, select DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Benutzerdefinierter DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tap _Save and select_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Configure Private DNS manually

You can configure your DNS server in your device settings. Please note that Android devices only support DNS-over-TLS protocol.

1. Go to _Settings_ → _Wi-Fi & Internet_ (or _Network and Internet_, depending on your OS version).
   ![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Select _Advanced_ and tap _Private DNS_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Select the _Private DNS provider hostname_ option and enter the address of your personal server: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tippen Sie auf _Speichern_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Configure plain DNS

Wenn Sie es vorziehen, keine zusätzliche Software für die DNS-Konfiguration zu verwenden, können Sie unverschlüsselte DNS verwenden. You have two choices: using linked IPs or dedicated IPs.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
