---
title: Steam Deck
sidebar_position: 5
---

Oyun konsolları şifrelenmiş DNS'i desteklemez, ancak bağlı bir IP adresi aracılığıyla Genel AdGuard DNS veya Özel AdGuard DNS kurmak için çok uygundurlar.

Yönlendiricinizin şifrelenmiş DNS sunucularının kullanımını desteklemesi muhtemeldir, bu nedenle her zaman Özel AdGuard DNS'i yapılandırabilir ve oyun konsolunuzu buna bağlayabilirsiniz.

[Yönlendiricinizi nasıl yapılandırabilirsiniz](/private-dns/connect-devices/routers/routers.md)

## AdGuard DNS'e bağlanma

Oyun konsolunuzu bir genel AdGuard DNS sunucusunu kullanacak şekilde yapılandırın veya bunu bağlı IP üzerinden yapılandırın:

1. Ekranın sağ üst köşesindeki dişli çark simgesine tıklayarak Steam Deck ayarlarını açın.
2. _Ağ_ öğesine tıklayın.
3. Yapılandırmak istediğiniz ağ bağlantısının yanındaki dişli çark simgesine tıklayın.
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. Yalnızca _Otomatik (DHCP)_ adresler veya _Otomatik (DHCP)_ öğesini seçin.
6. DNS Sunucusu alanına aşağıdaki DNS sunucu adreslerinden birini girin:
   - `94.140.14.49`
   - `94.140.14.59`
7. Değişiklikleri kaydedin.

Bağlı IP (veya bir Takım aboneliğiniz varsa özel IP) kullanmak tercih edilir:

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
