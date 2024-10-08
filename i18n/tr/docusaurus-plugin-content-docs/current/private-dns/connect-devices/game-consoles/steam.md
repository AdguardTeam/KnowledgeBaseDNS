---
title: Steam Deck
sidebar_position: 5
---

Oyun konsolları şifrelenmiş DNS'i desteklemez, ancak bağlı bir IP adresi aracılığıyla Genel AdGuard DNS veya Özel AdGuard DNS kurmak için çok uygundurlar.

Yönlendiricinizin şifrelenmiş DNS sunucularının kullanımını desteklemesi muhtemeldir, bu nedenle her zaman Özel AdGuard DNS'i yapılandırabilir ve oyun konsolunuzu buna bağlayabilirsiniz.

[How to configure your router](/private-dns/connect-devices/routers/routers.md)

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP:

1. Open the Steam Deck settings by clicking the gear icon in the upper right corner of the screen.
2. _Ağ_ öğesine tıklayın.
3. Click the gear icon next to the network connection you want to configure.
4. Select IPv4 or IPv6, depending on the type of network you're using.
5. Select _Automatic (DHCP) addresses only_ or _Automatic (DHCP)_.
6. In the _DNS Server_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
7. Değişiklikleri kaydedin.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
