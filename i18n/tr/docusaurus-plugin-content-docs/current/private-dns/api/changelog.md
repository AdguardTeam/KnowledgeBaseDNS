---
title: Değişiklik günlüğü
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Bu makale [AdGuard DNS API](private-dns/api/overview.md) için değişiklik günlüğünü içerir.

## v1.6

- DNS profilleri için yeni "Erişim ayarları" bölümü eklendi (`access_settings`). Bu alanları özelleştirerek AdGuard DNS sunucunuzu yetkisiz erişime karşı koruyabilirsiniz:

  - `allowed_clients` — burada hangi istemcilerin DNS sunucunuzu kullanabileceğini belirtebilirsiniz. Bu alan `blocked_clients` alanına göre önceliğe sahip olur
  - `blocked_clients` — burada hangi istemcilerin DNS sunucunuzu kullanmasına izin verilmediğini belirtebilirsiniz
  - `blocked_domain_rules` — burada hangi alan adlarının DNS sunucunuza erişmesine izin verilmediğini belirtebilir ve bu alan adlarını joker karakter ve DNS filtreleme kuralları ile tanımlayabilirsiniz

- Hesap limitlerine yeni limitler eklendi:

  - `access_rules` şu anda kullanılan `blocked_clients` ve `blocked_domain_rules` değerlerinin toplamının yanı sıra erişim kuralları sınırını da sağlar
  - `user_rules` oluşturulan kullanıcı kurallarının miktarını ve bunlar üzerindeki sınırı gösterir

- Yeni ayar eklendi: İstemci IP adreslerini ve alan adlarını günlüğe kaydetme yeteneği için `ip_log_enabled`.

- Limitlere ulaşıldığını belirtmek için yeni `FIELD_REACHED_LIMIT` hata kodu eklendi:

  - Erişim ayarlarındaki toplam `blocked_clients` ve `blocked_domain_rules` sayısı için
  - Özel kullanıcı kuralları ayarlarındaki `rules` için

## v1.5

- Yeni `block_nrd` ayarı eklendi ve güvenlikle ilgili tüm ayarlar tek bir yerde toplandı.

### Güvenli gezinti ayarları için model değiştirildi

From

```json
{
   "enabled": true
}
```

To:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

burada "enabled" artık gruptaki tüm ayarları kontrol ediyor, "block_dangerous_domains" önceki model alanı "enabled" ve "block_nrd" yeni kaydedilen alan adlarını filtrelemeye yönelik ayarlar.

### Sunucu ayarlarını kaydetme modeli değiştirildi

From:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

şuna:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

burada, değeri `block_dangerous_domains` içinde depolanan ve kullanımdan kaldırılan `safebrowsing_enabled` yerine yeni `safebrowsing_settings` alanı kullanılıyor.

## v1.4

- Yanıtın engellenmesi için yapılandırılabilir seçenek eklendi: varsayılan (0.0.0.0), REFUSED, NXDOMAIN veya özel IP adresi.

## v1.3

- Hesap limitlerini almak için yöntem eklendi.

## v1.2

- Yeni protokol türleri DNS ve DNSCrypt eklendi. Daha sonra çıkarılacak olan PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP ve DNSCRYPT_UDP kaldırılacaktır.

## v1.1

- İstatistikleri zamana, alan adlarına, şirketlere ve cihazlara göre almak için yöntemler eklendi.
- Cihaz ayarlarını güncellemek için yöntem eklendi.
- Gerekli alanların tanımı düzeltildi.

## v1.0

- Kimlik doğrulama eklendi.
- Cihazlar ve DNS sunucularıyla CRUD işlemleri.
- Sorgu günlüğü.
- DoT ve DoT .mobileconfig dosyasının indirilmesi.
- Filtre Listeleri ve Web Hizmetleri.
