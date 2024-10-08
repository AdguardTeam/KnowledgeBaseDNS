---
title: Asus
sidebar_position: 3
---

## DNS-over-TLS'yi yapılandırma

Bunlar, Asus yönlendiriciler için Özel AdGuard DNS yapılandırmasına yönelik genel talimatlardır.

The configuration information in these instructions is taken from a specific router model, so it may differ from the interface of an individual device.

If necessary: Configure DNS-over-TLS on ASUS, install the [ASUS Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. It can be accessed via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), or [http://192.168.2.1](http://192.168.2.1/).
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. In the _Advanced Settings_ sidebar, navigate to the WAN section.
4. In the _WAN DNS Settings_ section, set _Connect to DNS Server automatically_ to _No_.
5. Set _Forward local queries_, _Enable DNS Rebind_, and _Enable DNSSEC_ to _No_.
6. Change DNS Privacy Protocol to DNS-over-TLS (DoT).
7. Make sure the _DNS-over-TLS Profile_ is set to _Strict_.
8. Scroll down to the _DNS-over-TLS Servers List_ section. In the _Address_ field, enter one of the addresses below:
   - `94.140.14.49` ve `94.140.14.59`
9. _TLS Bağlantı Noktası_ için 853 girin.
10. TLS Ana Makine Adı\* alanına Özel AdGuard DNS sunucu adresini girin:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Sayfanın en altına gidin ve _Uygula_ öğesine tıklayın.

## Yönlendirici yönetici panelini kullan

1. Yönlendirici yönetici panelini açın. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. Open _Advanced Settings_ or _Advanced_.
4. _WAN_ veya _İnternet_ öğesini seçin.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. Ayarları kaydedin.
8. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
