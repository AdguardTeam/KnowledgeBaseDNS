---
title: Erişim ayarları
sidebar_position: 3
---

Erişim ayarlarını yapılandırarak AdGuard DNS'inizi yetkisiz erişime karşı koruyabilirsiniz. For example, you are using a dedicated IPv4 address, and attackers using sniffers have recognized it and are bombarding it with requests. No problem, just add the pesky domain or IP address to the list and it won’t bother you anymore!

Engellenen istekler Sorgu Günlüğünde görüntülenmeyecek ve toplam limite dâhil edilmeyecektir.

## Nasıl ayarlanır

### İzin verilen istemciler

Bu ayar, hangi istemcilerin DNS sunucunuzu kullanabileceğini belirlemenizi sağlar. En yüksek önceliğe sahiptir. Örneğin, aynı IP adresi hem reddedilenler hem de izin verilenler listesindeyse, yine de izin verilecektir.

### İzin verilmeyen istemciler

Burada DNS sunucunuzu kullanmasına izin verilmeyen istemcileri listeleyebilirsiniz. Tüm istemcilerin erişimini engelleyebilir ve yalnızca seçilenleri kullanabilirsiniz. Bunu yapmak için izin verilmeyen istemcilere iki adres ekleyin: `0.0.0.0/0` ve `::/0`. Daha sonra _İzin verilen istemciler_ alanına sunucunuza erişebilecek adresleri belirtin.

:::note Önemli

Before applying the access settings, make sure you’re not blocking your own IP address. If you do, you won’t be able to access the network. Eğer böyle bir durum olursa, DNS sunucusundan bağlantınızı kesin, erişim ayarlarına gidin ve yapılandırmaları buna göre ayarlayın.

:::

### İzin verilmeyen alan adları

Burada, DNS sunucunuza erişimi reddedilecek alan adlarını (joker karakter ve DNS filtreleme kurallarının yanı sıra) belirtebilirsiniz.

![Erişim ayarları \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Sorgu günlüğünde DNS istekleriyle ilişkili IP adreslerini görüntülemek için _IP adreslerini günlüğe kaydet_ onay kutusunu seçin. Bunu yapmak için _Sunucu ayarları_ → _Gelişmiş ayarlar_ öğesini açın.
