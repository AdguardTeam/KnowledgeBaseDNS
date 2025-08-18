---
title: İstatistikler
sidebar_position: 2
---

## Genel istatistikler

_İstatistikler_ sekmesi, Özel AdGuard DNS'e bağlı cihazlar tarafından yapılan DNS isteklerinin tüm özet istatistiklerini görüntüler. İsteklerin toplam sayısını ve konumunu, engellenen isteklerin sayısını, isteklerin yönlendirildiği şirketlerin listesini, istek türlerini ve en sık istenen alan adlarını gösterir.

![Engellenen site \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Kategoriler

### İstek türleri

- **Reklamcılık**: kullanıcı verilerini toplayan ve paylaşan, davranışı analiz eden ve reklamları hedefleyen reklamcılık ve diğer reklamla ilgili istekler
- **İzleyiciler**: sitelerden ve üçüncü taraflardan kullanıcı etkinliğini izlemek amacıyla gelen istekler
- **Sosyal ağ**: sosyal ağ sitelerine gelen istekler
- **CDN**: request connected to Content Delivery Network (CDN), a worldwide network of proxy servers that speeds the delivery of content to end users
- **Diğer**

![İstek türleri \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Başlıca şirketler

Burada en çok istek gönderen şirketleri görebilirsiniz.

![Başlıca şirketler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Başlıca istikametler

Bu, en çok talebin gönderildiği ülkeleri gösterir.

Ülke isimlerine ek olarak, liste iki genel kategori daha içermektedir:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Başlıca istikametler \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Başlıca alan adları

En çok istek gönderilen alan adlarının bir listesini içerir.

![Başlıca alan adları \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Şifrelenmiş istekler

Toplam istek sayısını, şifrelenmiş ve şifrelenmemiş trafik yüzdesini gösterir.

![Şifrelenmiş istekler \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Başlıca istemciler

İstemcilere yapılan isteklerin sayısını görüntüler. İstemci IP adreslerini görüntülemek için <b>IP adreslerini günlüğe kaydet</b> öğesini <b>Sunucu ayarları</b> öğesinde etkinleştirin. [Sunucu ayarları hakkında daha fazla bilgi](/private-dns/server-and-settings/advanced.md) ilgili bölümde bulunabilir.
