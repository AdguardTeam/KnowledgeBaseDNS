---
title: Android
sidebar_position: 2
---

Bir Android cihazını AdGuard DNS'e bağlamak için önce onu _Pano_ öğesine ekleyin:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak Android öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard Reklam Engelleyici kullanma (ücretli seçenek)

AdGuard uygulaması, şifrelenmiş DNS kullanmanıza izin vererek Android cihazınızda AdGuard DNS kurmak için mükemmeldir. Çeşitli şifreleme protokollerinden seçim yapabilirsiniz. DNS filtrelemenin yanı sıra, tüm sisteminizde çalışan mükemmel bir reklam engelleyiciye de sahip olursunuz.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [AdGuard uygulamasını](https://adguard.com/adguard-android/overview.html) yükleyin.
2. Uygulamayı açın.
3. Ekranın altındaki menü çubuğunda bulunan kalkan simgesine dokunun.
   ![Kalkan simgesi \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. _DNS koruması_ öğesine dokunun.
   ![DNS koruması \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. _DNS sunucusu_ öğesini seçin.
   ![DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. _Özel sunucular_ öğesine aşağı kaydırın ve _DNS sunucusu ekle_ öğesine dokunun.
   ![DNS sunucusu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Aşağıdaki DNS adreslerinden birini kopyalayın ve uygulamadaki _Sunucu adresleri_ alanına yapıştırın. Hangi seçeneği kullanacağınızdan emin değilseniz, _DNS-over-HTTPS_ öğesini işaretleyin.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Özel DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. _Ekle_ öğesine dokunun.
9. Eklediğiniz DNS sunucusu _Özel sunucular_ listesinin en altında görünür. Seçmek için adına veya yanındaki onay düğmesine dokunun.
   ![DNS sunucusu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. _Kaydet ve seç_ öğesine dokunun.
    ![Kaydet ve seç \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard VPN'i kullanma

Tüm VPN hizmetleri şifrelenmiş DNS'i desteklemez. Ancak bizim VPN'imiz destekliyor, bu nedenle hem VPN'e hem de özel bir DNS'e ihtiyacınız varsa, AdGuard VPN sizin için başvurabileceğiniz bir seçenektir.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [AdGuard VPN uygulamasını](https://adguard-vpn.com/android/overview.html) yükleyin.
2. Uygulamayı açın.
3. Ekranın altındaki menü çubuğunda dişli çark simgesine dokunun.
   ![Dişli çark simgesi \*mobil\_sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. _Uygulama ayarları_ öğesini Aç.
   ![Uygulama ayarları \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. _DNS sunucusu_ öğesini seçin.
   ![DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Aşağıya kaydırın ve _Özel DNS sunucusu ekle_ öğesine dokunun.
   ![DNS sunucusu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS servers adresses_ field in the app. Hangi seçeneği kullanacağınızdan emin değilseniz, DNS-over-HTTPS öğesini işaretleyin.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Özel DNS sunucusu \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. _Kaydet ve seç_ öğesine dokunun.
   ![DNS sunucusu ekle \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Eklediğiniz DNS sunucusu _Özel DNS sunucuları_ listesinin altında görünür.

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Configure Private DNS manually

DNS sunucunuzu cihaz ayarlarınızdan yapılandırabilirsiniz. Android cihazların yalnızca DNS-over-TLS protokolünü desteklediğini lütfen unutmayın.

1. _Ayarlar_ → _Wi-Fi ve İnternet_ (veya işletim sistemi sürümünüze bağlı olarak _Ağ ve İnternet_) öğesine gidin.
   ![Ayarlar \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. _Gelişmiş_ öğesini seçin ve _Özel DNS_ öğesine dokunun.
   ![Özel DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. _Özel DNS sağlayıcı ana makine adı_ öğesini seçin ve kişisel sunucunuzun adresini girin: `{Your_Device_ID}.d.adguard-dns.com`.
4. _Kaydet_ öğesine dokunun.
   ![Özel DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   Tamamlandı! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Configure plain DNS

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
