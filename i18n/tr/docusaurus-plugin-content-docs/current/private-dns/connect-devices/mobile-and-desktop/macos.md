---
title: macOS
sidebar_position: 4
---

Bir macOS cihazını AdGuard DNS'e bağlamak için önce cihazı _Pano_ öğesine ekleyin:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak macOS öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## AdGuard Reklam Engelleyici kullanma (ücretli seçenek)

AdGuard uygulaması, şifrelenmiş DNS kullanmanıza izin vererek macOS cihazınızda AdGuard DNS kurmak için mükemmeldir. Çeşitli şifreleme protokollerinden seçim yapabilirsiniz. DNS filtrelemenin yanı sıra, tüm sisteminizde çalışan mükemmel bir reklam engelleyiciye de sahip olursunuz.

1. [Install the app](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Uygulamayı açın.
3. Sağ üst köşedeki simgeye tıklayın.
   ![Koruma simgesi \*mobil\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. _Tercihler..._ öğesini seçin.
   ![Tercihler \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Simgelerin üst satırından _DNS_ sekmesine tıklayın.
   ![DNS sekmesi \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Üstteki kutuyu işaretleyerek DNS korumasını etkinleştirin.
   ![DNS koruması \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Sol alt köşedeki _+_ öğesine tıklayın.
   ![Click + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Aşağıdaki DNS adreslerinden birini kopyalayın ve uygulamadaki _DNS sunucuları_ alanına yapıştırın. Hangisini tercih edeceğinizden emin değilseniz _DNS-over-HTTPS_ öğesini seçin.
   ![DoH sunucusu \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Sunucu oluştur \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. _Kaydet ve Seç_ öğesine tıklayın.
   ![Kaydet ve Seç \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Yeni oluşturulan sunucunuz listenin en altında görünmelidir.
    ![Sağlayıcılar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard VPN'i kullanma

Tüm VPN hizmetleri şifrelenmiş DNS'i desteklemez. Ancak bizim VPN'imiz destekliyor, bu nedenle hem VPN'e hem de özel bir DNS'e ihtiyacınız varsa, AdGuard VPN sizin için başvurabileceğiniz bir seçenektir.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [AdGuard VPN uygulamasını](https://adguard-vpn.com/mac/overview.html) yükleyin.
2. AdGuard VPN uygulamasını açın.
3. _Ayarlar_ → _Uygulama ayarları_ → _DNS sunucuları_ → _Özel Sunucu Ekle_ öğesini açın.
   ![Özel sunucu ekle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Aşağıdaki DNS adreslerinden birini kopyalayın ve _DNS sunucu adresleri_ metin alanına yapıştırın. Hangisini tercih edeceğinizden emin değilseniz DNS-over-HTTPS'yi seçin.
   ![DNS sunucuları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. _Kaydet ve seç_ öğesine tıklayın.
6. Eklediğiniz DNS sunucusu _Özel DNS sunucuları_ listesinin altında görünür.
   ![Özel DNS sunucuları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Yapılandırma profili kullanma

A macOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. Ayrıca cihazınızda Özel AdGuard DNS'i yapılandırmanıza da olanak tanır.

:::note Önemli

Eğer VPN kullanıyorsanız yapılandırma profili göz ardı edilecektir.

:::

1. AdGuard DNS'e bağlamak istediğiniz cihaza yapılandırma profilini indirin.
2. Apple menüsünü seçin → _Sistem Ayarları_, kenar çubuğunda _Gizlilik ve Güvenlik_ öğesine tıklayın, ardından sağdaki _Profiller_ öğesine tıklayın (aşağı kaydırmanız gerekebilir).
   ![Profil İndirildi \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. _İndirilenler_ bölümünde profile çift tıklayın.
   ![İndirilen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Profil içeriğini gözden geçirin ve _Yükle_ öğesine tıklayın.
   ![Yükle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Enter the admin password and click _OK_.

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Configure plain DNS

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
