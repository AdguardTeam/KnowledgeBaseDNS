---
title: Nintendo
sidebar_position: 2
---

Oyun konsolları şifrelenmiş DNS'i desteklemez, ancak bağlı bir IP adresi aracılığıyla Genel AdGuard DNS veya Özel AdGuard DNS kurmak için çok uygundurlar.

Yönlendiricinizin şifrelenmiş DNS sunucularının kullanımını desteklemesi muhtemeldir, bu nedenle her zaman Özel AdGuard DNS'i yapılandırabilir ve oyun konsolunuzu buna bağlayabilirsiniz.

[Yönlendiricinizi nasıl yapılandırabilirsiniz](/private-dns/connect-devices/routers/routers.md)

:::note Uyumluluk

New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL ve Nintendo 2DS için geçerlidir.

:::

## AdGuard DNS'e bağlanma

Oyun konsolunuzu bir genel AdGuard DNS sunucusunu kullanacak şekilde yapılandırın veya bunu bağlı IP üzerinden yapılandırın:

1. Ana menüden _Sistem Ayarları_ öğesini seçin.
2. Go to _Internet_ → _Internet Settings_ → _Connection Settings_.
3. Select your network from the list.
4. Select _Change Settings_ → _DNS Settings_.
5. Set _Automatic_ to _Manual_.
6. Select _Primary DNS_. Hold down the left arrow (B button) to delete the existing DNS.
7. In the _Primary DNS_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
8. Ayarları kaydedin.

Bağlı IP (veya bir Takım aboneliğiniz varsa özel IP) kullanmak tercih edilir:

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
