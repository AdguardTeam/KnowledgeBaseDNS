---
title: Android
sidebar_position: 2
---

For at tilslutte en Android-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Android i rullemenuen _Enhedstype_.
3. Navngiv enheden.
   ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Use the AdGuard DNS app

The AdGuard DNS app is designed for basic DNS-level protection — blocking ads, trackers, and malicious websites. If you don’t need the full range of features offered by AdGuard Ad Blocker or AdGuard VPN, this may be the best choice for you.

To set up your device:

1. [Download the AdGuard DNS app](https://agrd.io/android_dns).

2. Go to your AdGuard DNS dashboard at [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).

3. Click _Add new device_ on the _Home_ tab.

4. Select your device type and give it a name, then click _Next_.

5. Expand the _Use AdGuard apps_ section.

   ![Use AdGuard apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps.png)

6. Under _Use the AdGuard DNS app_, choose one of these setup methods:

   - Click _Configure_ if you’re on the device you want to protect.
   - Scan the QR code with the device you want to protect.
   - Copy your setup ID and paste it directly into the app.

     ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupID.png)

7. Tap _Continue_ → _Connect_.

   ![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Connect.png)

8. When using a VPN-based protocol, you still need to allow creating a VPN profile before being fully protected. To do this, go to the app’s home page, click _Enable_, and follow the in-app instructions.

9. Færdig! Enheden er nu tilsluttet AdGuard DNS. Click _Enable_ every time you want to start the protection.

   ![Enable \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Protection.png)

## Brug AdGuard Ad Blocker (betalt mulighed)

Med AdGuard-appen kan man bruge krypteret DNS, hvilket gør den perfekt til opsætning af AdGuard DNS på sin Android-enhed. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. Installér [AdGuard-appen](https://adguard.com/adguard-android/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn appen.
3. Tryk på skjoldikonet på menubjælken nederst på skærmen.
   ![Skjoldikon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tryk på _DNS-beskyttelse_.
   ![DNS-beskyttelse \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Vælg _DNS-server_.
   ![DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Rul ned til _Tilpassede servere_ og tryk på _Tilføj DNS-server_.
   ![Tilføj DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Kopiér en af flg. DNS-adresser, og indsæt den i feltet _Serveradresser_ i appen. Er man usikker på, hvilken én man skal bruge, vælg _DNS-over-HTTPS_.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Tilpasset DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tryk på Tilføj\*.
9. Den tilføjede DNS-server vises nederst på listen, _Tilpassede DNS-servere_. For at vælge den, tryk på navnet eller radioknappen ved siden af det.
   ![Vælg DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tryk på _Gem og vælg_.
    ![Gem og vælg \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug af AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Vores VPN understøtter det dog, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

1. Installér [AdGuard VPN-appen](https://adguard-vpn.com/android/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn appen.
3. Tryk på tandhjulsikonet på menubjælken nederst på skærmen.
   ![Tandhjulsikon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Åbn _App-indstillinger_.
   ![App indstillinger \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Vælg _DNS-server_.
   ![DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Rul ned og tryk på _Tilføj en tilpasset DNS-server_.
   ![Tilføj en DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Kopiér en af flg. DNS-adresser, og indsæt den i feltet _DNS-serveradresser_ i appen. Er man usikker på, hvilken én man skal bruge, vælg DNS-over-HTTPS.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Tilpasset DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tryk på _Gem og vælg_.
   ![Tilføj en DNS-server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Den tilføjede DNS-server vises nederst på listen _Tilpassede DNS-servere_.

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Opsæt Private DNS manuelt

Man kan opsætte DNS-serveren i enhedsindstillingerne. Bemærk venligst, at Android-enheder kun understøtter protokollen DNS-over-TLS.

1. Gå til _Indstillinger_ → _Wi-Fi og Internet_ (eller _Netværk og Internet_, afhængigt af OS-versionen).
   ![Indstillinger \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Vælg _Avanceret_ og tryk på _Private DNS_.
   ![Private DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Vælg indstillingen _Private DNS-udbyder værtsnavn_ og angiv adressen på den personlige server: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tryk på _Gem_.
   ![Private DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Enheden er nu tilsluttet AdGuard DNS.

## Opsætning af almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
