---
title: Erişim ayarları
sidebar_position: 3
---

Erişim ayarlarını yapılandırarak AdGuard DNS'inizi yetkisiz erişime karşı koruyabilirsiniz. For example, you are using a dedicated IPv4 address, and attackers using sniffers have recognized it and are bombarding it with requests. Sorun değil, sadece sinir bozucu alan adını veya IP adresini listeye ekleyin ve artık sizi rahatsız etmesin!

Engellenen istekler Sorgu Günlüğünde görüntülenmeyecek ve toplam limite dâhil edilmeyecektir.

## Nasıl ayarlanır

### İzin verilen istemciler

Bu ayar, hangi istemcilerin DNS sunucunuzu kullanabileceğini belirlemenizi sağlar. En yüksek önceliğe sahiptir. Örneğin, aynı IP adresi hem reddedilenler hem de izin verilenler listesindeyse, yine de izin verilecektir.

### İzin verilmeyen istemciler

Burada DNS sunucunuzu kullanmasına izin verilmeyen istemcileri listeleyebilirsiniz. Tüm istemcilerin erişimini engelleyebilir ve yalnızca seçilenleri kullanabilirsiniz. Bunu yapmak için izin verilmeyen istemcilere iki adres ekleyin: `0.0.0.0/0` ve `::/0`. Daha sonra _İzin verilen istemciler_ alanına sunucunuza erişebilecek adresleri belirtin.

:::note Önemli

Erişim ayarlarını uygulamadan önce, kendi IP adresinizi engellemediğinizden emin olun. Eğer bunu yaparsanız, ağa erişemezsiniz. Eğer böyle bir durum olursa, DNS sunucusundan bağlantınızı kesin, erişim ayarlarına gidin ve yapılandırmaları buna göre ayarlayın.

:::

### İzin verilmeyen alan adları

Burada, DNS sunucunuza erişimi reddedilecek alan adlarını (joker karakter ve DNS filtreleme kurallarının yanı sıra) belirtebilirsiniz.

![Erişim ayarları \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Sorgu günlüğünde DNS istekleriyle ilişkili IP adreslerini görüntülemek için _IP adreslerini günlüğe kaydet_ onay kutusunu seçin. Bunu yapmak için _Sunucu ayarları_ → _Gelişmiş ayarlar_ öğesini açın.
