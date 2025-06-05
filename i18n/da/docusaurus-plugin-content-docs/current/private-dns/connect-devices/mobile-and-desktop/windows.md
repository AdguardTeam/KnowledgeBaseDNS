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

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. Man kan vælge mellem forskellige krypteringsprotokoller. Sammen med DNS-filtrering får man også en fremragende adblocker, der fungerer på hele systemet.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Åbn appen.
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
8. Tryk på _Gem og vælg_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Den tilføjede DNS-server vises nederst på listen _Tilpassede DNS-servere_.
    ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Færdig! Enheden er nu tilsluttet AdGuard DNS.

## Brug af AdGuard VPN

Ikke alle VPN-tjenester understøtter krypteret DNS. Det understøttes dog af vores VPN, så har man behov for både et VPN og en privat DNS, er AdGuard VPN det oplagte valg.

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
7. Tryk på _Gem og vælg_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

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

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Opsæt almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er.

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
