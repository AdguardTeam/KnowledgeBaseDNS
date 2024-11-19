---
title: iOS
sidebar_position: 3
---

Bir iOS cihazını AdGuard DNS'e bağlamak için önce onu _Pano_ öğesine ekleyin:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak iOS öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard Reklam Engelleyici kullanma (ücretli seçenek)

AdGuard uygulaması, şifrelenmiş DNS kullanmanıza izin vererek iOS cihazınızda AdGuard DNS kurmak için mükemmeldir. Çeşitli şifreleme protokollerinden seçim yapabilirsiniz. DNS filtrelemenin yanı sıra, tüm sisteminizde çalışan mükemmel bir reklam engelleyiciye de sahip olursunuz.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [AdGuard uygulamasını](https://adguard.com/adguard-ios/overview.html) yükleyin.
2. AdGuard uygulamasını açın.
3. Alt menüden _Koruma_ sekmesini seçin.
   ![Kalkan simgesi \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. _DNS koruması_ öğesinin açık olduğundan emin olun ve ardından dokunun. _DNS sunucusu_ öğesini seçin.
   ![DNS koruması \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Aşağıya kaydırın ve "Özel DNS sunucusu ekle" öğesine dokunun.
   ![DNS sunucusu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Aşağıdaki DNS adreslerinden birini kopyalayın ve uygulamadaki _DNS sunucu adresi_ alanına yapıştırın. Hangisini tercih edeceğinizden emin değilseniz DNS-over-HTTPS'yi seçin.
   ![Sunucu adresini kopyala \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Sunucu adresini yapıştır \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. _Kaydet Ve Seç_ öğesine dokunun.
   ![Kaydet Ve Seç \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Yeni oluşturduğunuz sunucu listenin en altında görünmelidir.
   ![Özel sunucu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard VPN'i kullanma

Tüm VPN hizmetleri şifrelenmiş DNS'i desteklemez. Ancak bizim VPN'imiz destekliyor, bu nedenle hem VPN'e hem de özel bir DNS'e ihtiyacınız varsa, AdGuard VPN sizin için başvurabileceğiniz bir seçenektir.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [AdGuard VPN uygulamasını](https://adguard-vpn.com/ios/overview.html) yükleyin.
2. AdGuard VPN uygulamasını açın.
3. Ekranın sağ alt köşesindeki dişli çark simgesine dokunun.
   ![Dişli çark simgesi \*mobil\_sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. _Genel_ öğesini açın.
   ![Genel ayarlar \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. _DNS sunucusu_ öğesini seçin.
   ![DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. _Özel DNS sunucusu ekle_ öğesine gidin.
   ![Sunucu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Aşağıdaki DNS adreslerinden birini kopyalayın ve _DNS sunucu adresleri_ metin alanına yapıştırın. Hangisini tercih edeceğinizden emin değilseniz _DNS-over-HTTPS_ öğesini seçin.
   ![DNS-over-HTTPS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Özel DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. _Kaydet_ öğesine dokunun.
   ![Sunucuyu kaydet \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Yeni oluşturulan sunucunuz _Özel DNS sunucuları_ altında görünmelidir.
   ![Özel sunucular \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Yapılandırma profili kullanma

An iOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. Ayrıca cihazınızda Özel AdGuard DNS'i yapılandırmanıza da olanak tanır.

:::note Önemli

Eğer VPN kullanıyorsanız yapılandırma profili göz ardı edilecektir.

:::

1. Profili [indirin](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml).
2. Ayarları açın.
3. Tap _Profile Downloaded_.
   ![Profile Downloaded \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. _Yükle_ öğesine dokunun ve ekrandaki talimatları izleyin.
   ![Yükle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configure plain DNS

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçenek var: bağlı IP'ler veya özel IP'ler kullanmak.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
