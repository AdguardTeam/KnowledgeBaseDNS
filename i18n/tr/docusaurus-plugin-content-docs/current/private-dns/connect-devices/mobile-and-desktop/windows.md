---
title: Windows
sidebar_position: 5
---

Bir iOS cihazını AdGuard DNS'e bağlamak için önce onu _Pano_ öğesine ekleyin:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak Windows öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## AdGuard Reklam Engelleyici kullanma (ücretli seçenek)

AdGuard uygulaması, şifrelenmiş DNS kullanmanıza izin vererek Windows cihazınızda AdGuard DNS kurmak için mükemmeldir. Çeşitli şifreleme protokollerinden seçim yapabilirsiniz. DNS filtrelemenin yanı sıra, tüm sisteminizde çalışan mükemmel bir reklam engelleyiciye de sahip olursunuz.

1. AdGuard DNS'e bağlanmak istediğiniz cihaza [uygulamayı yükleyin](https://adguard.com/adguard-windows/overview.html).
2. Uygulamayı açın.
3. Uygulamanın ana ekranının üst kısmındaki _Ayarlar_ öğesine tıklayın.
   ![Uygulama ayarları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Soldaki menüden _DNS Koruması_ sekmesini seçin.
   ![DNS koruması \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Şu anda seçili olan DNS sunucunuza tıklayın.
   ![DNS sunucusu \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Aşağıya kaydırın ve _Özel DNS sunucusu ekle_ öğesine tıklayın.
   ![Özel DNS sunucusu ekle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. In the DNS upstreams field, paste one of the following addresses. Hangisini tercih edeceğinizden emin değilseniz DNS-over-HTTPS'yi seçin.
   ![DoH sunucusu \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Sunucu oluştur \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. _Kaydet ve seç_ öğesine tıklayın.
   ![Kaydet ve seç \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Eklediğiniz DNS sunucusu _Özel DNS sunucuları_ listesinin altında görünür.
   ![Özel DNS sunucuları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard VPN'i kullanma

Tüm VPN hizmetleri şifrelenmiş DNS'i desteklemez. Ancak bizim VPN'imiz destekliyor, bu nedenle hem VPN'e hem de özel bir DNS'e ihtiyacınız varsa, AdGuard VPN sizin için başvurabileceğiniz bir seçenektir.

1. AdGuard VPN’i yükleyin.
2. Uygulamayı açın ve _Ayarlar_ öğesine tıklayın.
3. _Uygulama ayarları_ öğesini seçin.
   ![Uygulama ayarları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Aşağı kaydırın ve _DNS sunucuları_ öğesini seçin.
   ![DNS sunucuları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. _Özel DNS sunucusu ekle_ öğesine tıklayın.
   ![Özel DNS sunucusu ekle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. _Sunucu adresi_ alanına aşağıdaki adreslerden birini yapıştırın. Hangisini tercih edeceğinizden emin değilseniz DNS-over-HTTPS'yi seçin.
   ![DoH sunucusu \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Sunucu oluştur \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. _Kaydet ve seç_ öğesine tıklayın.
   ![Kaydet ve seç \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard DNS İstemcisini kullanma

AdGuard DNS İstemcisi, şifrelenmiş DNS protokollerini kullanarak AdGuard DNS'e bağlanmanızı sağlayan çok yönlü, platformlar arası bir konsol aracıdır.

Daha fazla ayrıntı [farklı makalede](/dns-client/overview/) bulunabilir.

## Configure plain DNS

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
