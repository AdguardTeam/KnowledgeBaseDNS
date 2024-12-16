---
title: OPNSense
sidebar_position: 8
---

OPNSense donanım yazılımı genellikle kablosuz erişim noktalarını, DHCP sunucularını, DNS sunucularını yapılandırmak için kullanılır ve AdGuard DNS'i doğrudan cihaz üzerinde yapılandırmanıza olanak tanır.

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Üst menüde _Hizmetler_ öğesine tıklayın, ardından açılır menüden _DHCP Sunucusu_ öğesini seçin.
4. _DHCP Sunucusu_ sayfasında, DNS ayarlarını yapılandırmak istediğiniz arayüzü seçin (örn. LAN, WLAN).
5. _DNS Sunucuları_ öğesine aşağı kaydırın.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. İsteğe bağlı olarak, gelişmiş güvenlik için DNSSEC'yi etkinleştirebilirsiniz.
9. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
