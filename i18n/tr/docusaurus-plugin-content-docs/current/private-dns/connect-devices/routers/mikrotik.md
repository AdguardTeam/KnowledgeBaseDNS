---
title: MikroTik
sidebar_position: 6
---

MikroTik yönlendiriciler, ev ve küçük ofis ağları için yönlendirme, kablosuz ağ ve güvenlik duvarı hizmetleri sağlayan açık kaynaklı RouterOS işletim sistemini kullanır.

## DNS-over-HTTPS'i yapılandırma

1. MikroTik yönlendiricinize erişin:
    - Web tarayıcınızı açın ve yönlendiricinizin IP adresine gidin (genellikle `192.168.88.1`)
    - Alternatif olarak, MikroTik yönlendiricinize bağlanmak için Winbox'ı kullanabilirsiniz
    - Enter your administrator username and password
2. Kök sertifikayı içe aktarın:
    - Güvenilir kök sertifikalarının en son paketini indirin: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
    - _Dosyalar_ öğesine gidin. Yükle öğesine tıklayın ve indirilen cacert.pem sertifika paketini seçin
    - _Sistem_ → _Sertifikalar_ → _İçe aktar_ öğesine gidin
    - _Dosya Adı_ alanında, yüklenen sertifika dosyasını seçin
    - _İçe aktar_ öğesine tıklayın
3. DNS-over-HTTPS'i yapılandırın:
    - _IP_ → _DNS_ öğesine gidin
    - _Sunucular_ bölümüne aşağıdaki AdGuard DNS sunucularını ekleyin:
        - `94.140.14.49`
        - `94.140.14.59`
    - _Uzak İsteklere İzin Ver_ öğesini _Evet_ olarak ayarlayın (bu, DoH'un çalışması için önemlidir)
    - _DoH sunucusu kullan_ alanına özel AdGuard DNS sunucusunun URL'sini girin: `https://d.adguard-dns.com/dns-query/*******`
    - _Tamam_ öğesine tıklayın
4. Create Static DNS Records:
    - _DNS Ayarları_ öğesinde _Statik_ öğesine tıklayın
    - _Yeni Ekle_ öğesine tıklayın
    - Set _Name_ to `d.adguard-dns.com`
    - Set _Type_ to `A`
    - _Adresi_ `94.140.14.49` olarak ayarlayın
    - Set _TTL_ to `1d 00:00:00`
    - Aynı girdiyi oluşturmak için işlemi tekrarlayın, ancak _Adres_ `94.140.14.59` olarak ayarlanmalıdır
5. DHCP İstemcisinde Eş DNS'i devre dışı bırakın:
    - _IP_ → _DHCP İstemcisi_ öğesine gidin
    - İnternet bağlantınız için kullanılan istemciye çift tıklayın (genellikle WAN arayüzünde)
    - _Eş DNS Kullan_ öğesinin işaretini kaldırın
    - _Tamam_ öğesine tıklayın
6. Test edin ve doğrulayın:
    - Tüm değişikliklerin etkili olması için MikroTik yönlendiricinizi yeniden başlatmanız gerekebilir
    - Tarayıcınızın DNS önbelleğini temizleyin. DNS isteklerinizin artık AdGuard üzerinden yönlendirilip yönlendirilmediğini kontrol etmek için [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) gibi bir araç kullanabilirsiniz

## Yönlendiricim DNS-over-HTTPS'yi desteklemiyor

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. MikroTik yönlendiricinize erişin:
    - Web tarayıcınızı açın ve yönlendiricinizin IP adresine gidin (genellikle `192.168.88.1`)
    - Alternatif olarak, MikroTik yönlendiricinize bağlanmak için Winbox'ı kullanabilirsiniz
    - Enter your administrator username and password
2. Configure Plain DNS:
    - _IP_ → _DNS_ öğesine gidin
    - Sunucular\* bölümünde, aşağıdaki AdGuard DNS sunucularını ekleyin:
        - IPv4: `94.140.14.49` ve `94.140.14.59`
        - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
        - Özel IPv6: Özel AdGuard DNS, özel IPv6 adreslerini destekler. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
    - _Tamam_ öğesine tıklayın
3. DHCP İstemcisinde Eş DNS'i devre dışı bırakın:
    - _IP_ → _DHCP İstemcisi_ öğesine gidin
    - İnternet bağlantınız için kullanılan istemciye çift tıklayın (genellikle WAN arayüzünde)
    - _Eş DNS Kullan_ öğesinin işaretini kaldırın
    - _Tamam_ öğesine tıklayın
