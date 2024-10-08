---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have a lot of advantages: Steady strong signal, network security, stable operation, intelligent management, at the same time, the user can connect up to 64 devices to the local Wi-Fi network.

Unfortunately, it doesn't support encrypted DNS, but it's great for setting up AdGuard DNS via linked IP.

## Yönlendirici yönetici panelini kullan

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. It can be accessed at `192.168.31.1` or the IP address of your router.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Open _Advanced Settings_ or _Advanced_, depending on your router model.
4. Open _Network_ or _Internet_ and look for DNS or DNS Settings.
5. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
6. Ayarları kaydedin.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
