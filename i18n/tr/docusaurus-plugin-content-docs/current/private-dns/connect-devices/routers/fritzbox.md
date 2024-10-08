---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box provides maximum flexibility for all devices by simultaneously using the 2.4 GHz and 5 GHz frequency bands. All devices connected to the FRITZ!Box are fully protected against attacks from the Internet. The configuration of this brand of routers also allows you to set up encrypted Private AdGuard DNS.

## DNS-over-TLS'yi yapılandırma

1. Yönlendirici yönetici panelini açın. It can be accessed at fritz.box, the IP address of your router, or `192.168.178.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _İnternet_ veya _Ev Ağı_ öğesini açın.
4. Select _DNS_ or _DNS Settings_.
5. Under DNS-over-TLS (DoT), check _Use DNS-over-TLS_ if supported by the provider.
6. Select _Use Custom TLS Server Name Indication (SNI)_ and enter the AdGuard Private DNS server address:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Ayarları kaydedin.

## Yönlendirici yönetici panelini kullan

Use this guide if your FritzBox router does not support DNS-over-TLS configuration:

1. Yönlendirici yönetici panelini açın. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _İnternet_ veya _Ev Ağı_ öğesini açın.
4. Select _DNS_ or _DNS Settings_.
5. Select _Manual DNS_, then _Use These DNS Servers_ or _Specify DNS Server Manually_, and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
6. Ayarları kaydedin.
7. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
