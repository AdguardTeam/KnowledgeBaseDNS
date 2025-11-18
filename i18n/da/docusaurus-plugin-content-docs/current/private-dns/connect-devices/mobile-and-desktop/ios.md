---
title: iOS
sidebar_position: 3
---

For at tilslutte en iOS-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg iOS i rullemenuen _Enhedstype_.
3. Navngiv enheden.
   ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Use the AdGuard DNS app

The AdGuard DNS app is designed for basic DNS-level protection — blocking ads, trackers, and malicious websites. If you don’t need the full range of features offered by AdGuard Ad Blocker or AdGuard VPN, this may be the best choice for you.

To set up your device:

1. [Download the AdGuard DNS app](https://agrd.io/ios_dns).
2. Go to your AdGuard DNS dashboard at [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
3. Click _Add new device_ on the _Home_ tab.
4. Select your device type and give it a name, then click _Next_.
5. Expand the _Use AdGuard apps_ section.

![Use AdGuard apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardDnsAppsiOS.png)

1. Under _Use the AdGuard DNS app_, choose one of these setup methods:

   - Click _Configure_ if you’re on the device you want to protect.
   - Scan the QR code with the device you want to protect.
   - Copy your setup ID and paste it directly into the app.

     ![SetupID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDiOS.png)

2. Tap _Continue_ → _Connect_.

![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. Enheden er nu tilsluttet AdGuard DNS. All you have to do is tap _Enable_ to start the protection.

![Enable \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ProtectioniOS.png)

1. When using a VPN-based protocol, you still need to allow creating a VPN profile before being fully protected. To do this, go to the app’s home page, click _Enable_, and follow the in-app instructions.

2. If you prefer to use native DNS, go to _Settings_ → _General_ → _VPN & Device Management_ → _DNS_ and enable AdGuard DNS.

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug AdGuard Ad Blocker (betalt mulighed)

Med AdGuard-appen kan man bruge krypteret DNS, hvilket gør den perfekt til opsætning af AdGuard DNS på en iOS-enhed. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. Installér [AdGuard-appen](https://adguard.com/adguard-ios/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn AdGuard-appen.
3. Vælg fanen _Beskyttelse_ i nederste menu.
   ![Skjoldikon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Sørg for, at "DNS-beskyttelse" er slået til, og tryk derefter på den. Vælg _DNS-server_.
   ![DNS-beskyttelse \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Rul ned til bunden, og tryk på _Tilføj en tilpasset DNS-server_.
   ![Tilføj DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Kopiér en af flg. DNS-adresser, og indsæt den i feltet _DNS-serveradresse_ i appen. Er man usikker på, hvilken én man skal vælge, vælg DNS-over-HTTPS.
   ![Kopiér serveradresse \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Indsæt serveradresse \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tryk på _Gem og vælg_.
   ![Gem og vælg \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Den nyoprettede server bør nu dukke op nederst på listen.
   ![Tilpasset server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug af AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Det understøttes dog af vores VPN, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

1. Installér [AdGuard VPN-appen](https://adguard-vpn.com/ios/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn AdGuard VPN-appen.
3. Tryk på tandhjulsikonet nederste til højre på skærmen.
   ![Tandhjulsikon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Åbn _Generelt_.
   ![Generelle indstillinger \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Vælg _DNS-server_.
   ![DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Rul ned og klik på _Tilføj en tilpasset DNS-server_.
   ![Tilføj server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Kopiér en af flg. DNS-adresser, og indsæt den i tekstfeltet _DNS-serveradresser_. Er man usikker på, hvilken én man skal vælge, vælg _DNS-over-HTTPS_.
   ![DoH-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Tilpasset DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tryk på _Gem_.
   ![Gem server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Den nyoprettede server bør nu dukke op under _Tilpassede DNS-servere_.
   ![Tilføj servere \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug en opsætningsprofil

En iOS-enhedsprofil, også kaldet en konfigurationsprofil af Apple, er en certifikatsigneret XML-fil, der kan installeres manuelt på iOS-enheden eller udrulles vha. en MDM-løsning. Den muliggør også opsætning af AdGuard DNS på enheden.

:::note Vigtigt

Benyttes et VPN, ignoreres opsætningsprofilen.

:::

1. Download profil.
2. Åbn Indstillinger.
3. Tryk på "Downloadet profil".
   ![Downloadet profil \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tryk på _Installér_ og følg skærmvejledningen.
   ![Installér \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Opsæt almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ukrypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
