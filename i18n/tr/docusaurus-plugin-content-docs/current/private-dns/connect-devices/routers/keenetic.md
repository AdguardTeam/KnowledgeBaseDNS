---
title: Keenetik
sidebar_position: 5
---

Keenetic routers are known for their stability and flexible configurations, and are easy to set up, allowing you to easily install encrypted Private AdGuard DNS on your device.

## Configure DNS-over-HTTPS

1. Yönlendirici yönetici panelini açın. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. _Kaydet_ öğesine tıklayın.

## DNS-over-TLS'yi yapılandırma

1. Yönlendirici yönetici panelini açın. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. _Kaydet_ öğesine tıklayın.

## Yönlendirici yönetici panelini kullan

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

1. Yönlendirici yönetici panelini açın. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _İnternet_ veya _Ev Ağı_ öğesini açın.
4. _WAN_ veya _İnternet_ öğesini seçin.
5. Select _DNS_ or _DNS Settings_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
