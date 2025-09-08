---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box, 2,4 GHz ve 5 GHz frekans bantlarını aynı anda kullanarak tüm cihazlar için maksimum esneklik sağlar. FRITZ!Box'a bağlı tüm cihazlar internetten gelebilecek saldırılara karşı tam olarak korunmaktadır. Bu marka yönlendiricilerin yapılandırması ayrıca şifrelenmiş Özel AdGuard DNS'i ayarlamanıza da olanak tanır.

## DNS-over-TLS'yi yapılandırma

1. Yönlendirici yönetici panelini açın. Fritz.box adresinden, yönlendiricinizin IP adresinden veya `192.168.178.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _İnternet_ veya _Ev Ağı_ öğesini açın.
4. _DNS_ veya _DNS Ayarları_ öğesini seçin.
5. Under DNS-over-TLS (DoT), check _Use DNS-over-TLS_ if supported by the provider.
6. Select _Use Custom TLS Server Name Indication (SNI)_ and enter the AdGuard Private DNS server address:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Ayarları kaydedin.

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-TLS yapılandırmasını desteklemiyorsa bu kılavuzu kullanın:

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _İnternet_ veya _Ev Ağı_ öğesini açın.
4. _DNS_ veya _DNS Ayarları_ öğesini seçin.
5. Select _Manual DNS_, then _Use These DNS Servers_ or _Specify DNS Server Manually_, and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
6. Ayarları kaydedin.
7. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
