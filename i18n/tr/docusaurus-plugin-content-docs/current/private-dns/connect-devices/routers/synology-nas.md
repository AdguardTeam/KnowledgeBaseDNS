---
title: Synology NAS
sidebar_position: 9
---

Synology NAS yönlendiricilerin kullanımı son derece kolaydır ve tek bir örgü ağda birleştirilebilir. Ağınızı istediğiniz zaman, istediğiniz yerden uzaktan yönetebilirsiniz. AdGuard DNS'i doğrudan yönlendirici üzerinde de yapılandırabilirsiniz.

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Denetim Masası_ veya _Ağ_ öğesini açın.
4. Select _Network Interface_ or _Network Settings_.
5. Wi-Fi ağınızı veya kablolu bağlantınızı seçin.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](private-dns/connect-devices/other-options/linked-ip.md)
