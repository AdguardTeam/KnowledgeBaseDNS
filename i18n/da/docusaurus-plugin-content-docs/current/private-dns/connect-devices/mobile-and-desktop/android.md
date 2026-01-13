---
title: Android
sidebar_position: 2
---

For at tilslutte en Android-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Android i rullemenuen _Enhedstype_.
3. Navngiv enheden.
   ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Benyt AdGuard DNS-appen

AdGuard DNS-appen er designet til basis DNS-niveaubeskyttelse – blokering af annoncer, trackere og ondsindede websteder. Er der ikke behov for alle de funktioner, som tilbydes af AdGuard Ad Blocker eller AdGuard VPN, kan dette være det bedste valg.

Opsætning af enheden:

1. [Download AdGuard DNS-appen](https://agrd.io/android_dns).

2. Gå til AdGuard DNS-kontrolpanelet på [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).

3. Klik på _Tilføj enhed_ på fanen _Hjem_.

4. Vælg enhedstypen og navngiv den, og klik dernæst på _Næste_.

5. Udvid afsnittet _Brug AdGuard-apps_.

   ![Brug AdGuard-apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps.png)

6. Vælg under _Benyt AdGuard DNS-appen_ en af disse opsætningsmetoder:

   - Klik på _Opsæt_ fra den enhed, der ønskes beskyttet.
   - Skan QR-koden med den enhed, der ønskes beskyttet.
   - Kopiér opsætnings-ID'et, og indsæt det direkte i appen.

     ![Opsætnings-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupID.png)

7. Tryk på _Fortsæt_ → _Tilslut_.

   ![Tilslut \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Connect.png)

8. Ved brug af en VPN-baseret protokol skal der stadig tillades oprettelse af en VPN-profil for at opnå fuld beskyttelse. For at gøre dette, gå til appens startside, klik på _Slå til_, og følg vejledningen i appen.

9. Færdig! Enheden er nu tilsluttet AdGuard DNS. Klik på _Slå til_, hver gang beskyttelsen ønskes startet.

   ![Slå til \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Protection.png)

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
