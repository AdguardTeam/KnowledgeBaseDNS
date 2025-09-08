---
title: iOS
sidebar_position: 3
---

Chcete-li zařízení iOS připojit k AdGuard DNS, přidejte je nejprve na _Přehled_:

1. Přejděte na _Přehled_ a klikněte na _Připojit nové zařízení_.
2. V rozbalovací nabídce _Typ zařízení_ vyberte iOS.
3. Pojmenujte zařízení.
   ![Connecting device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Použití blokátoru reklam AdGuard (placená možnost)

Aplikace AdGuard umožňuje používat šifrovaný DNS, takže je ideální pro nastavení AdGuard DNS v zařízení iOS. Můžete si vybrat z různých šifrovacích protokolů. Spolu s DNS filtrováním získáte také vynikající blokátor reklam, který funguje v celém systému.

1. Nainstalujte aplikaci [AdGuard](https://adguard.com/adguard-ios/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete aplikaci AdGuard.
3. V dolní nabídce vyberte kartu _Ochrana_.
   ![Shield icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Zkontrolujte, zda je zapnuta _DNS ochrana_ a klepněte na ni. Vyberte _DNS server_.
   ![DNS protection \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Přejděte dolů a klepněte na možnost _Přidat vlastní DNS server_.
   ![Add DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Zkopírujte jednu z následujících adres DNS a vložte ji do pole _Adresa DNS serveru_ v aplikaci. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost DNS-over-HTTPS.
   ![Copy server address \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Paste server address \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Klepněte na _Uložit a vybrat_.
   ![Save And Select \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Nově vytvořený server by se měl objevit na konci seznamu.
   ![Custom server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití AdGuard VPN

Ne všechny služby VPN podporují šifrovaný DNS. Naše VPN však ano, takže pokud potřebujete jak VPN, tak soukromý DNS, AdGuard VPN je vaše nejlepší volba.

1. Nainstalujte aplikaci [AdGuard VPN](https://adguard-vpn.com/ios/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete nastavení aplikace AdGuard VPN.
3. Klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky.
   ![Gear icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Otevřete _Obecné_.
   ![General settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Vyberte _DNS server_.
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Přejděte dolů a klikněte na _Přidat vlastní DNS server_.
   ![Add server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Zkopírujte jednu z následujících adres DNS a vložte ji do textového pole _Adresy DNS serverů_. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost _DNS-over-HTTPS_.
   ![DoH server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Klepněte na _Uložit_.
   ![Save server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Nově vytvořený server by se měl objevit v části _Vlastní DNS servery_.
   ![Custom servers \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití konfiguračního profilu

Profil zařízení iOS, který společnost Apple označuje také jako konfigurační profil, je certifikátem podepsaný soubor XML, který můžete do zařízení iOS nainstalovat ručně nebo nasadit pomocí řešení MDM. Umožňuje také nakonfigurovat Soukromý AdGuard DNS ve vašem zařízení.

:::note Důležité

Pokud používáte VPN, bude konfigurační profil ignorován.

:::

1. Stáhněte si profil.
2. Otevřete nastavení.
3. Klepněte na _Stažený profil_.
   ![Profile Downloaded \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Klepněte na _Instalovat_ a postupujte podle pokynů na obrazovce.
   ![Install \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Konfigurace běžného DNS

Pokud nechcete ke konfiguraci DNS používat další software, můžete se rozhodnout pro nešifrovaný DNS. Existují dvě možnosti: použití propojených IP adres nebo vyhrazených IP adres.

 - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
