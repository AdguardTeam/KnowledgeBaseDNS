---
title: OPNSense
sidebar_position: 8
---

OPNSense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Yönlendirici yönetici panelini kullan

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Click _Services_ in the top menu, then select _DHCP Server_ from the drop-down menu.
4. On the _DHCP Server_ page, select the interface that you want to configure the DNS settings for (e.g., LAN, WLAN).
5. Scroll down to _DNS Servers_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. Optionally, you can enable DNSSEC for enhanced security.
9. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
