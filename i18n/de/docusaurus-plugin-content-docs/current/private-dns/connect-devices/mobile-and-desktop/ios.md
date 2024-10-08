---
title: iOS
sidebar_position: 3
---

Um ein iOS-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. Go to _Dashboard_ and click _Connect new device_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ iOS.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your iOS device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install the [AdGuard app](https://adguard.com/adguard-ios/overview.html) on the device you want to connect to AdGuard DNS.
2. Öffnen Sie die AdGuard-App.
3. Wählen Sie die Registerkarte _Schutz_ im unteren Menü.
   ![Shield icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Make sure that _DNS protection_ is toggled on and then tap it. Choose _DNS server_.
   ![DNS protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Scroll down to the bottom and tap _Add a custom DNS server_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copy one of the following DNS addresses and paste it into the _DNS server adress_ field in the app. If you are not sure which one to prefer, choose DNS-over-HTTPS.
   ![Serveradresse kopieren \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Serveradresse einfügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tap _Save And Select_.
   ![Save And Select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Your freshly created server should appear at the bottom of the list.
   ![Custom server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/ios/overview.html) on the device you want to connect to AdGuard DNS.
2. Öffnen Sie die AdGuard VPN-App.
3. Tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms.
   ![Zahnradsymbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Open _General_.
   ![General settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Scroll down to _Add custom DNS server_.
   ![Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ text field. If you are not sure which one to prefer, select _DNS-over-HTTPS_.
   ![DoH server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tippen Sie auf _Speichern_.
   ![Server speichern \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Your freshly created server should appear under _Custom DNS servers_.
   ![Custom servers \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Ein Konfigurationsprofil verwenden

An iOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

:::note Wichtig

If you are using a VPN, the configuration profile will be ignored.

:::

1. [Download](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml) profile.
2. Öffnen Sie die Einstellungen.
3. Tap _Profile Downloaded_.
   ![Profile Downloaded \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tippen Sie auf „Installieren“ und folgen Sie den Anweisungen.
   ![Installieren \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configure plain DNS

If you prefer not to use extra software to configure DNS, you can opt for unencrypted DNS. There are two options: using linked IPs or dedicated IPs.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
