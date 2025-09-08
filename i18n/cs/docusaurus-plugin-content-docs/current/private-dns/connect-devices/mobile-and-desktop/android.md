---
title: Android
sidebar_position: 2
---

Chcete-li zařízení Android připojit k AdGuard DNS, přidejte je nejprve na _Přehled_:

1. Přejděte na _Přehled_ a klikněte na _Připojit nové zařízení_.
2. V rozbalovací nabídce _Typ zařízení_ vyberte Android.
3. Pojmenujte zařízení.
   ![Connecting device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Použití blokátoru reklam AdGuard (placená možnost)

Aplikace AdGuard umožňuje používat šifrovaný DNS, takže je ideální pro nastavení AdGuard DNS v zařízení Android. Můžete si vybrat z různých šifrovacích protokolů. Spolu s DNS filtrováním získáte také vynikající blokátor reklam, který funguje v celém systému.

1. Nainstalujte aplikaci [AdGuard](https://adguard.com/adguard-android/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete aplikaci.
3. Klepněte na ikonu štítu na panelu nabídek v dolní části obrazovky.
   ![Shield icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Klepněte na _DNS ochrana_.
   ![DNS protection \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Vyberte _DNS server_.
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Přejděte na _Vlastní servery_ a klepněte na _Přidat DNS server_.
   ![Add DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Zkopírujte jednu z následujících adres DNS a vložte ji do pole _Adresy serverů_ v aplikaci. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost _DNS-over-HTTPS_.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Klepněte na _Přidat_.
9. DNS server, který jste přidali, se objeví v dolní části seznamu _Vlastní servery_. Chcete-li ho vybrat, klepněte na jeho název nebo na přepínač vedle.
   ![Select DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Klepněte na _Uložit a vybrat_.
    ![Save and select \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Použití AdGuard VPN

Ne všechny služby VPN podporují šifrovaný DNS. Naše VPN však ano, takže pokud potřebujete jak VPN, tak soukromý DNS, AdGuard VPN je vaše nejlepší volba.

1. Nainstalujte aplikaci [AdGuard VPN](https://adguard-vpn.com/android/overview.html) do zařízení, které chcete připojit k AdGuard DNS.
2. Otevřete aplikaci.
3. Na panelu nabídek v dolní části obrazovky klepněte na ikonu ozubeného kola.
   ![Gear icon \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Otevřete _Nastavení aplikace_.
   ![App settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Vyberte _DNS server_.
   ![DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Přejděte dolů a klepněte na _Přidat vlastní DNS server_.
   ![Add a DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Zkopírujte jednu z následujících adres DNS a vložte ji do pole _Adresy DNS serverů_ v aplikaci. Pokud si nejste jisti, kterému z nich dát přednost, vyberte možnost DNS-over-HTTPS.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Custom DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Klepněte na _Uložit a vybrat_.
   ![Add a DNS server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. DNS server, který jste přidali, se objeví v dolní části seznamu _Vlastní DNS servery_.

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Ruční konfigurace soukromého AdGuard DNS

Server DNS můžete nakonfigurovat v nastavení zařízení. Upozorňujeme, že zařízení se systémem Android podporují pouze protokol DNS-over-TLS.

1. Přejděte do _Nastavení_ → _Wi-Fi a Internet_ (nebo _Síť a Internet_, v závislosti na verzi operačního systému).
   ![Settings \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Vyberte _Pokročilé_ a klepněte na _Soukromý DNS_.
   ![Private DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Vyberte možnost _Private DNS provider hostname_ a zadejte adresu svého osobního serveru: `{Your_Device_ID}.d.adguard-dns.com`.
4. Klepněte na _Uložit_.
   ![Private DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

## Konfigurace běžného DNS

Pokud nechcete používat další software pro konfiguraci DNS, můžete se rozhodnout pro nešifrovaný DNS. Máte dvě možnosti: použít propojené IP adresy nebo vyhrazené IP adresy.

 - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
