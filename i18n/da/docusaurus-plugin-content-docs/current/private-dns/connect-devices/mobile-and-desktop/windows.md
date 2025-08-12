---
title: Windows
sidebar_position: 5
---

For at slutte en Windows-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Windows i rullemenuen _Enhedstype_.
3. Navngiv enheden.
    ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Man kan opsætte det via [AdGuard](#use-adguard-ad-blocker-paid-option) eller [AdGuard VPN](#use-adguard-vpn) apps, i [Windows-indstillingerne](#configure-via-windows-settings) eller ved at bruge [AdGuard DNS Client](#use-adguard-dns-client).

## Brug AdGuard Ad Blocker (betalt mulighed)

Med AdGuard-appen kan man bruge krypteret DNS, hvilket gør den perfekt til opsætning af AdGuard DNS på en Windows-enhed. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. [Installér appen](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Åbn appen.
3. Click _Settings_ at the top of the app’s home screen.
    ![Indstillinger \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Vælg fanen _DNS-beskyttelse_ fra menuen til venstre.
    ![DNS-beskyttelse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Klik på den aktuelt valgte DNS-server.
    ![DNS-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Rul ned og klik på _Tilføj en tilpasset DNS-server_.
    ![Tilføj en tilpasset DNS-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Indsæt i feltet DNS upstreams en af flg. adresser. Er man usikker på, hvilken én man skal vælge, vælg DNS-over-HTTPS.
    ![DoH-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
    ![Opret server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Tryk på _Gem og vælg_.
    ![Gem og vælg \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Den tilføjede DNS-server vises nederst på listen _Tilpassede DNS-servere_.
    ![Tilpassede DNS-servere \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug af AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Det understøttes dog af vores VPN, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

1. Installér AdGuard VPN.
2. Åbn appen og klik på _Indstillinger_.
3. Vælg _App-indstillinger_.
    ![App-indstillinger \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Rul ned og vælg _DNS-servere_.
    ![DNS-servere \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Klik på _Tilføj tilpasset DNS-server_.
    ![Tilføj tilpasset DNS-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Indsæt i feltet _Serveradresse_ en af flg. adresser. Er man usikker på, hvilken én man skal vælge, vælg DNS-over-HTTPS.
    ![DoH-server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
    ![Opret server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Tryk på _Gem og vælg_.
    ![Gem og vælg \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Opsæt via Windows-indstillinger

:::note

Kun tilgængelig på Windows 11.

:::

1. Skriv i _Søgefeltet_ på procesbjælken **Ethernet-indstillinger** eller **Wi-Fi indstillinger**, afhængigt af forbindelsestypen.
    Klik på det netværk (Wi-Fi ID eller Ethernet), der skal opsættes.
    ![Søg \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Find _DNS-servertildeling_, og klik på _Redigér_.
    ![DNS-servertildeling \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Skift DNS-indstillinger til _Manuel_.
4. Slå IPv4-knappen til _Til_.
5. Angiv flg. DNS-serveradresser:
    - Foretrukken DNS: `94.140.14.49`
    - Alternativ DNS: `94.140.14.59`
6. Slå _DNS over HTTPS-skabelon_ til _Til (manuel skabelon)_ og angiv den personlige DNS-adresse. Man kan finde den i kontrolpanelet under _Serverindstillinger_ → _Enheder_ → _Enhedsindstillinger_ → DNS-over-HTTPS.
7. Klik på _Gem_. Det var det – enheden er nu forbundet til AdGuard DNS!
    ![Gem DNS-indstillinger \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## Brug AdGuard DNS Client

AdGuard DNS Client er et alsidigt, tværplatforms konsolværktøj, der muliggør AdGuard DNS-tilslutning vha. krypterede DNS-protokoller.

Flere detaljer kan findes i [forskellig artikel](/dns-client/overview/).

## Opsæt almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
