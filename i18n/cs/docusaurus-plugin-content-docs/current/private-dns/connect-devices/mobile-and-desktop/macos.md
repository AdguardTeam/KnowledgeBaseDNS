---
title: macOS
sidebar_position: 4
---

Chcete-li zařízení macOS připojit k AdGuard DNS, přidejte je nejprve na _Přehled_:

1. Přejděte na _Přehled_ a klikněte na _Připojit nové zařízení_.
2. V rozbalovací nabídce _Typ zařízení_ vyberte Mac.
3. Pojmenujte zařízení.
   ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Použití blokátoru reklam AdGuard (placená možnost)

Aplikace AdGuard umožňuje používat šifrovaný DNS, takže je ideální pro nastavení AdGuard DNS v zařízení macOS. Můžete si vybrat z různých šifrovacích protokolů. Spolu s DNS filtrováním získáte také vynikající blokátor reklam, který funguje v celém systému.

1. [Nainstalujte aplikaci](https://adguard.com/adguard-mac/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete aplikaci.
3. Klikněte na ikonu v pravém horním rohu.
   ![Protection icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Vyberte _Předvolby..._.
   ![Preferences \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. V horní řadě ikon klikněte na kartu _DNS_.
   ![DNS tab \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Zaškrtnutím políčka v horní části zapněte DNS ochranu.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Klikněte na tlačítko _+_ v levém dolním rohu.
   ![Click + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Zkopírujte jednu z následujících adres DNS a vložte ji do pole _DNS servery_ v aplikaci. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost _DNS-over-HTTPS_.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Klikněte na _Uložit a vybrat_.
   ![Save and Choose \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Nově vytvořený server by se měl objevit na konci seznamu.
    ![Providers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití AdGuard VPN

Ne všechny služby VPN podporují šifrovaný DNS. Naše VPN však ano, takže pokud potřebujete jak VPN, tak soukromý DNS, AdGuard VPN je vaše nejlepší volba.

1. Nainstalujte aplikaci [AdGuard VPN](https://adguard-vpn.com/mac/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete nastavení aplikace AdGuard VPN.
3. Otevřete _Nastavení_ → _Nastavení aplikace_ → _DNS servery_ → _Přidat vlastní server_.
   ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Zkopírujte jednu z následujících adres DNS a vložte ji do textového pole _Adresy DNS serverů_. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost DNS-over-HTTPS.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Klikněte na _Uložit a vybrat_.
6. DNS server, který jste přidali, se objeví v dolní části seznamu _Vlastní DNS servery_.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití konfiguračního profilu

Profil zařízení macOS, který společnost Apple označuje také jako konfigurační profil, je certifikátem podepsaný soubor XML, který můžete do zařízení nainstalovat ručně nebo nasadit pomocí řešení MDM. Umožňuje také nakonfigurovat Soukromý AdGuard DNS ve vašem zařízení.

:::note Důležité

Pokud používáte VPN, bude konfigurační profil ignorován.

:::

1. Na zařízení, které chcete připojit k AdGuard DNS, stáhněte konfigurační profil.
2. Vyberte Apple → _Nastavení systému,_ klikněte na _Soukromí a zabezpečení_ na postranním panelu a poté klikněte na _Profily_ napravo (možná budete muset přejít dolů).
   ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. V části _Stahování_ dvakrát klikněte na profil.
   ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Zkontrolujte obsah profilu a klikněte na _Instalovat_.
   ![Install \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Zadejte heslo správce a klikněte na _OK_.

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Konfigurace běžného DNS

Pokud nechcete používat další software pro konfiguraci DNS, můžete se rozhodnout pro nešifrovaný DNS. Máte dvě možnosti: použít propojené IP adresy nebo vyhrazené IP adresy.

 - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
