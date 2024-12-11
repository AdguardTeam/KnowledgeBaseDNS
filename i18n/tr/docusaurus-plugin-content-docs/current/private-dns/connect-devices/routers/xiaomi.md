---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have many advantages: a stable, strong signal, network security, robust performance, and smart management. Users can connect up to 64 devices to a local Wi-Fi network.

Ne yazık ki, şifrelenmiş DNS'i desteklemiyor, ancak bağlı IP aracılığıyla AdGuard DNS'i kurmak için harikadır.

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. `192.168.31.1` adresinden veya yönlendiricinizin IP adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Yönlendirici modelinize bağlı olarak _Gelişmiş Ayarlar_ veya _Gelişmiş_ öğesini açın.
4. _Ağ_ veya _İnternet_ öğesini açın ve DNS veya DNS Ayarları öğesini arayın.
5. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
6. Ayarları kaydedin.
7. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
