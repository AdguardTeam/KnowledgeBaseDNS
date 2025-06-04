---
title: Windows
sidebar_position: 5
---

Chcete-li zařízení Windows připojit k AdGuard DNS, přidejte je nejprve na _Přehled_:

1. Přejděte na _Přehled_ a klikněte na _Připojit nové zařízení_.
2. V rozbalovací nabídce _Typ zařízení_ vyberte Windows.
3. Pojmenujte zařízení.
    ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Můžete to nastavit prostřednictvím aplikací [AdGuard](#use-adguard-ad-blocker-paid-option) nebo [AdGuard VPN](#use-adguard-vpn) v [nastavení Windows](#configure-via-windows-settings), nebo pomocí [AdGuard DNS Client](#use-adguard-dns-client).

## Použití blokátoru reklam AdGuard (placená možnost)

Aplikace AdGuard umožňuje používat šifrovaný DNS, takže je ideální pro nastavení AdGuard DNS v zařízení Windows. Můžete si vybrat z různých šifrovacích protokolů. Spolu s DNS filtrováním získáte také vynikající blokátor reklam, který funguje v celém systému.

1. [Nainstalujte aplikaci](https://adguard.com/adguard-windows/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete aplikaci.
3. Klikněte na _Nastavení_ v horní části domovské obrazovky aplikace.
    ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. V nabídce vlevo vyberte kartu _DNS ochrana_.
    ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Klikněte na aktuálně vybraný DNS server.
    ![DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Přejděte dolů a klikněte na _Přidat vlastní DNS server_.
    ![Add a custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Do pole odchozí DNS vložte jednu z následujících adres. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost DNS-over-HTTPS.
    ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
    ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Klikněte na _Uložit a vybrat_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. DNS server, který jste přidali, se objeví v dolní části seznamu _Vlastní DNS servery_.
    ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití AdGuard VPN

Ne všechny služby VPN podporují šifrovaný DNS. Naše VPN však ano, takže pokud potřebujete jak VPN, tak soukromý DNS, AdGuard VPN je vaše nejlepší volba.

1. Nainstalujte AdGuard VPN.
2. Otevřete aplikaci a klikněte na _Nastavení_.
3. Vyberte _Nastavení aplikace_.
    ![App settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Přejděte dolů a vyberte _Servery DNS_.
    ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Klikněte na _Přidat vlastní DNS server_.
    ![Add custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Do pole _Adresa serveru_ vložte jednu z následujících adres. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost DNS-over-HTTPS.
    ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
    ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Klikněte na _Uložit a vybrat_.
    ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Konfigurace prostřednictvím nastavení Windows

:::note

Dodtupné pouze ve Windows 11.

:::

1. Do _vyhledávacího panelu_ na zadejte **Nastavení sítě** nebo **Nastavení Wi-Fi** podle typu připojení.
    Klikněte na síť (Wi-Fi ID nebo Ethernet), kterou chcete konfigurovat.
    ![Search \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Přejděte na _přiřazení DNS serveru_ a klikněte na tlačítko _Upravit_.
    ![DNS server assignment \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Změňte nastavení DNS na _Ruční_.
4. Přepněte přepínač IPv4 na _Zapnuto_.
5. Zadejte následující adresy serverů DNS:
    - Preferovaný DNS: `94.140.14.49`
    - Alternativní DNS: `94.140.14.59`
6. Nastavte možnost _DNS-over-HTTPS_ na _Zapnuto (ruční šablona)_ a zadejte svou adresu osobního DNS. Najdete to na hlavním panelu v části _Nastavení serveru_ → _Zařízení_ → _Nastavení zařízení_ → DNS-over-HTTPS.
7. Klikněte na _Uložit_. To je vše — vaše zařízení je nyní připojeno k AdGuard DNS!
    ![Save DNS settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## Použití klienta AdGuard DNS

Klient AdGuard DNS je univerzální multiplatformní konzolový nástroj, který umožňuje připojení k AdGuard DNS pomocí šifrovaných protokolů DNS.

Další podrobnosti najdete v [jiném článku](/dns-client/overview/).

## Konfigurace běžného DNS

Pokud nechcete používat další software pro konfiguraci DNS, můžete se rozhodnout pro nešifrovaný DNS. Máte dvě možnosti: použít propojené IP adresy nebo vyhrazené IP adresy.

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
