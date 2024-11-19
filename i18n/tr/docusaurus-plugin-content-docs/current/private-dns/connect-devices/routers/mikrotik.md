---
title: MikroTik
sidebar_position: 6
---

MikroTik yönlendiriciler, ev ve küçük ofis ağları için yönlendirme, kablosuz ağ ve güvenlik duvarı hizmetleri sağlayan açık kaynaklı RouterOS işletim sistemini kullanır.

## DNS-over-HTTPS'i yapılandır

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
   - _DoH sunucusunu kullan_ alanına özel AdGuard DNS sunucusunun URL'sini girin: `https://d.adguard-dns.com/dns-query/*******`
   - _Tamam_ öğesine tıklayın
4. Create Static DNS Records:
   - _DNS Ayarları_ öğesinde _Statik_ öğesine tıklayın
   - _Yeni Ekle_ öğesine tıklayın
   - _Adı_ d.adguard-dns.com olarak ayarlayın
   - _Türü_ A olarak ayarlayın
   - _Adresi_ `94.140.14.49` olarak ayarlayın
   - _TTL_ değerini 1d 00:00:00 olarak ayarlayın
   - Repeat the process to create an identical entry, but with _Address_ set to `94.140.14.59`
5. DHCP İstemcisinde Eş DNS'i devre dışı bırakın:
   - _IP_ → _DHCP İstemcisi_ öğesine gidin
   - İnternet bağlantınız için kullanılan istemciye çift tıklayın (genellikle WAN arayüzünde)
   - _Eş DNS Kullan_ öğesinin işaretini kaldırın
   - _Tamam_ öğesine tıklayın
6. IP'nizi bağlayın.
7. Test edin ve doğrulayın:
   - Tüm değişikliklerin etkili olması için MikroTik yönlendiricinizi yeniden başlatmanız gerekebilir
   - Tarayıcınızın DNS önbelleğini temizleyin. DNS isteklerinizin artık AdGuard üzerinden yönlendirilip yönlendirilmediğini kontrol etmek için [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) gibi bir araç kullanabilirsiniz

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Webfig_ → _IP_ → _DNS_' öğesini açın.
4. _Sunucular_ öğesini seçin ve aşağıdaki DNS sunucu adreslerinden birini girin.
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
5. Ayarları kaydedin.
6. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
