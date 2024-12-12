---
title: Asus
sidebar_position: 3
---

## DNS-over-TLS'yi yapılandırma

Bunlar, Asus yönlendiriciler için Özel AdGuard DNS yapılandırmasına yönelik genel talimatlardır.

Bu talimatlardaki yapılandırma bilgileri belirli bir yönlendirici modelinden alınmıştır, bu nedenle bireysel bir cihazın arayüzünden farklılık gösterebilir.

If necessary: Configure DNS-over-TLS on ASUS, install the [ASUS Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. Buna [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/) veya [http://192.168.2.1](http://192.168.2.1/) aracılığıyla erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Gelişmiş Ayarlar_ kenar çubuğunda WAN bölümüne gidin.
4. _WAN DNS Ayarları_ bölümünde _DNS Sunucusuna otomatik olarak bağlan_ öğesini _Hayır_ olarak ayarlayın.
5. Set _Forward local queries_, _Enable DNS Rebind_, and _Enable DNSSEC_ to _No_.
6. DNS Gizlilik Protokolü öğesini DNS-over-TLS (DoT) olarak değiştirin.
7. _DNS-over-TLS Profili_ öğesini _Katı_ olarak ayarlandığından emin olun.
8. _DNS-over-TLS Sunucuları Listesi_ bölümüne doğru aşağı kaydırın. _Adres_ alanına aşağıdaki adreslerden birini girin:
   - `94.140.14.49` ve `94.140.14.59`
9. _TLS Bağlantı Noktası_ için 853 girin.
10. TLS Ana Makine Adı\* alanına Özel AdGuard DNS sunucu adresini girin:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Sayfanın en altına gidin ve _Uygula_ öğesine tıklayın.

## Yönlendirici yönetici panelini kullanma

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Gelişmiş Ayarlar_ veya _Gelişmiş_ öğesini açın.
4. _WAN_ veya _İnternet_ öğesini seçin.
5. _DNS Ayarları_ veya _DNS_ öğesini açın.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
