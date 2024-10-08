---
title: Android
sidebar_position: 2
---

To connect an Android device to AdGuard DNS, first add it to _Dashboard_:

1. Go to _Dashboard_ and click _Connect new device_.
2. In the drop-down menu _Device type_, select Android.
3. Name the device.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Brug AdGuard Ad Blocker (betalt mulighed)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Android device. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. Install [the AdGuard app](https://adguard.com/adguard-android/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the app.
3. Tap the shield icon in the menu bar at the bottom of the screen.
   ![Shield icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tap _DNS protection_.
   ![DNS protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Select _DNS server_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Scroll down to _Custom servers_ and tap _Add DNS server_.
   ![Add DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server adresses_ field in the app. If you are not sure which one to use, select _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tap _Add_.
9. The DNS server you’ve added will appear at the bottom of the _Custom servers_ list. To select it, tap its name or the radio button next to it.
   ![Select DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tap _Save and select_.
    ![Save and select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Use AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Vores VPN understøtter det dog, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

1. Installér [AdGuard VPN-appen](https://adguard-vpn.com/android/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn appen.
3. Tryk på tandhjulsikonet på menubjælken nederst på skærmen.
   ![Tandhjulsikon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Åbn _App-indstillinger_.
   ![App indstillinger \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Vælg _DNS-server_.
   ![DNS-server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Rul ned og tryk på _Tilføj en tilpasset DNS-server_.
   ![Tilføj en DNS-server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Kopiér en af flg. DNS-adresser, og indsæt den i feltet _DNS-serveradresser_ i appen. Er man usikker på, hvilken én man skal bruge, vælg DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Tilpasset DNS-server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tryk på _Gem og vælg_.
   ![Tilføj en DNS-server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Den tilføjede DNS-server vises nederst på listen _Tilpassede DNS-servere_.

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Opsæt Private DNS manuelt

Man kan opsætte DNS-serveren i enhedsindstillingerne. Bemærk venligst, at Android-enheder kun understøtter protokollen DNS-over-TLS.

1. Gå til _Indstillinger_ → _Wi-Fi og Internet_ (eller _Netværk og Internet_, afhængigt af OS-versionen).
   ![Indstillinger \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Vælg _Avanceret_ og tryk på _Private DNS_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Select the _Private DNS provider hostname_ option and enter the address of your personal server: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tryk på _Gem_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Enheden er nu tilsluttet AdGuard DNS.

## Opsætning af almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
