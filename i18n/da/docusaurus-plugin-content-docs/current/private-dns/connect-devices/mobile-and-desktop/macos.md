---
title: macOS
sidebar_position: 4
---

For at tilslutte en macOS-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Mac i rullemenuen _Enhedstype_.
3. Navngiv enheden.
    ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Brug AdGuard Ad Blocker (betalt mulighed)

Med AdGuard-appen kan man bruge krypteret DNS, hvilket gør den perfekt til opsætning af AdGuard DNS på en macOS-enhed. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. [Installér appen](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Åbn appen.
3. Klik på ikonet øverst til højre.
    ![Beskyttelsesikon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Vælg _Præferencer..._.
    ![Præferencer \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Klik på fanen _DNS_ fra øverste ikonrække.
    ![DNS-fane \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Aktivér DNS-beskyttelse ved at markere afkrydsningsfeltet øverst.
    ![DNS-beskyttelse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Klik på _+_ nederst til venstre.
    ![Klik på + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Kopiér en af flg. DNS-adresser, og indsæt den i feltet _DNS-servere_ i appen. Er man usikker på, hvilken én man skal vælge, vælg _DNS-over-HTTPS_.
    ![DoH-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
    ![Opret server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Tryk på _Gem og vælg_.
    ![Gem og vælg \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Den nyoprettede server bør nu dukke op nederst på listen.
    ![Udbydere \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug af AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Det understøttes dog af vores VPN, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

1. Installér [AdGuard VPN-appen](https://adguard-vpn.com/mac/overview.html) på den enhed, der skal tilsluttes AdGuard DNS.
2. Åbn AdGuard VPN-appen.
3. Åbn _Indstillinger_ → _App-indstillinger_ → _DNS-servere_ → _Tilføj tilpasset server_.
    ![Tilføj tilpasset server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Kopiér en af flg. DNS-adresser, og indsæt den i tekstfeltet _DNS-serveradresser_. Er man usikker på, hvilken én man skal vælge, vælg DNS-over-HTTPS.
    ![DNS-servere \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Tryk på _Gem og vælg_.
6. Den tilføjede DNS-server vises nederst på listen _Tilpassede DNS-servere_.
    ![Tilpassede DNS-servere \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug en opsætningsprofil

En macOS-enhedsprofil, også kaldet en konfigurationsprofil af Apple, er en certifikatsigneret XML-fil, som kan installere manuelt på enheden eller udrulles vha. en MDM-løsning. Den muliggør også opsætning af AdGuard DNS på enheden.

:::note Vigtigt

Benyttes et VPN, ignoreres opsætningsprofilen.

:::

1. Download opsætningsprofilen fra enheden, der skal tilsluttes AdGuard DNS.
2. Vælg Apple-menuen → _Systemindstillinger_, klik på _Fortrolighed og Sikkerhed_ på sidebjælken, og klik dernæst på _Profiler_ til højre (der skal muligvis rulles ned).
    ![Downloadet profil \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. Dobbeltklik på profilen i afsnittet _Downloadet_.
    ![Downloadet \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Gennemgå profilindholdet, og klik dernæst på _Installér_.
    ![Installér \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Angiv admin-adgangskoden, og klik på _OK_.

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Opsæt almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
