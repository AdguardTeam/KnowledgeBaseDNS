---
title: UniFi
sidebar_position: 10
---

UiFi yönlendirici (genellikle Ubiquiti'nin UniFi serisi olarak bilinir), onu özellikle ev, iş ve kurumsal ortamlar için uygun kılan bir dizi avantaja sahiptir. Ne yazık ki, şifrelenmiş DNS'i desteklemiyor, ancak bağlantılı IP üzerinden AdGuard DNS'i kurmak için harikadır.

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Log in to the Ubiquiti UniFi controller.
2. _Ayarlar_ → _Ağlar_ öğesine gidin\*.
3. _Ağı Düzenle_ → _WAN_ öğesine tıklayın.
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses.
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
5. _Kaydet_ öğesine tıklayın.
6. _Ağ_ öğesine geri dönün.
7. _Ağı Düzenle_ → _LAN_ öğesini seçin.
8. _DHCP Ad Sunucusu_ öğesini bulun ve _Manuel_ öğesini seçin.
9. _DNS Sunucu 1_ alanına ağ geçidi adresinizi girin. Alternatif olarak, AdGuard DNS sunucu adreslerini _DNS Sunucusu 1_ ve _DNS Sunucusu 2_ alanlarına girebilirsiniz:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
10. Ayarları kaydedin.
11. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](private-dns/connect-devices/other-options/linked-ip.md)
