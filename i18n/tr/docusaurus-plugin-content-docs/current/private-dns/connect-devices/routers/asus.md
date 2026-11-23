---
title: Asus
sidebar_position: 3
---

## DNS-over-TLS'yi yapılandırma

Bunlar, Asus yönlendiriciler için Özel AdGuard DNS yapılandırmasına yönelik genel talimatlardır.

Bu talimatlardaki yapılandırma bilgileri belirli bir yönlendirici modelinden alınmıştır, bu nedenle bireysel bir cihazın arayüzünden farklılık gösterebilir.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. Buna [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/) veya [http://192.168.2.1](http://192.168.2.1/) aracılığıyla erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Gelişmiş Ayarlar_ kenar çubuğunda WAN bölümüne gidin.
4. _WAN DNS Ayarları_ bölümünde _DNS Sunucusuna otomatik olarak bağlan_ öğesini _Hayır_ olarak ayarlayın.
5. _Yerel sorguları ilet_, _DNS Yeniden Bağlama korumasını etkinleştir_ ve _DNSSEC desteğini etkinleştir_ öğelerini _Hayır_ olarak ayarlayın.
6. DNS Gizlilik Protokolü öğesini DNS-over-TLS (DoT) olarak değiştirin.
7. _DNS-over-TLS Profili_ öğesini _Katı_ olarak ayarlandığından emin olun.
8. _DNS-over-TLS Sunucuları Listesi_ bölümüne doğru aşağı kaydırın. _Adres_ alanına aşağıdaki adreslerden birini girin:
   - `94.140.14.49` ve `94.140.14.59`
9. _TLS Bağlantı Noktası_ için 853 girin.
10. TLS Ana Makine Adı\* alanına Özel AdGuard DNS sunucu adresini girin:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Sayfanın en altına gidin ve _Uygula_ öğesine tıklayın.

## Yönlendirici yönetici panelini kullanma

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
