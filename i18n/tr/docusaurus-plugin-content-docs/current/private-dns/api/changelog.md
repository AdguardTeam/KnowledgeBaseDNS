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

## v1.9

_11 Temmuz 2024 tarihinde yayınlandı_

- Otomatik cihaz bağlantısı işlevi eklendi:
  - Yeni DNS sunucusu ayarı — `auto_connect_devices_enabled`, belirli bir bağlantı türü aracılığıyla cihazların otomatik olarak bağlanmasının onaylanmasına olanak tanır
  - Cihazda yeni alan — `auto_device`, cihazın otomatik olarak bağlandığını gösterir
- CategoryQueriesStats içindeki `queries`, AccountLimits içindeki `used` ve QueriesStats içindeki `blocked` ve `queries` için `int` değeri `long` ile değiştirildi

## v1.8

_20 Nisan 2024 tarihinde yayınlandı_

- Kimlik doğrulama ile DNS-over-HTTPS desteği eklendi:
  - Yeni işlem — cihaz için DNS-over-HTTPS parolasını sıfırlama
  - Yeni cihaz ayarı — `detect_doh_auth_only`. Kimlik doğrulamalı DNS-over-HTTPS dışındaki tüm DNS bağlantı yöntemlerini devre dışı bırakır
  - DeviceDNSAddresses içinde yeni alan — `dns_over_https_with_auth_url`. Kimlik doğrulamayla DNS-over-HTTPS kullanarak bağlanırken kullanılacak URL'yi belirtir

## v1.7

_11 Mart 2024 tarihinde yayınlandı_

- Özel IPv4 adresleri işlevi eklendi:
  - Özel IPv4 adresleri artık DNS sunucusu yapılandırması için cihazlarda kullanılabilir
  - Özel IPv4 adresi artık bağlı olduğu cihazla ilişkilendirilmiştir, böylece bu adrese yapılan sorgular o cihaz için kaydedilir
- Yeni işlemler eklendi:
  - Mevcut tüm özel IPv4 adreslerini listeleme
  - Yeni özel IPv4 adresi tahsis etme
  - Kullanılabilir bir IPv4 adresini bir cihaza bağlama
  - Bir cihazdan IPv4 adresinin bağlantısını kaldırma
  - Bir cihazla ilişkilendirilmiş özel adreslerle ilgili bilgi isteği
- Hesap limitlerine yeni limitler eklendi:
  - `dedicated_ipv4` önceden tahsis edilmiş tahsisli IPv4 adreslerinin miktarı ve bunların limiti hakkında bilgi sağlar
- DNSServerSettings'in kullanımdan kalkmış alanı kaldırıldı:
  - `safebrowsing_enabled`

## v1.6

_22 Ocak 2024 tarihinde yayınlandı_

- DNS profilleri için yeni Erişim ayarları bölümü eklendi (`access_settings`). Bu alanları özelleştirerek AdGuard DNS sunucunuzu yetkisiz erişime karşı koruyabilirsiniz:

  - `allowed_clients` — burada hangi istemcilerin DNS sunucunuzu kullanabileceğini belirtebilirsiniz. Bu alan `blocked_clients` alanına göre önceliğe sahip olur
  - `blocked_clients` — burada hangi istemcilerin DNS sunucunuzu kullanmasına izin verilmediğini belirtebilirsiniz
  - `blocked_domain_rules` — burada hangi alan adlarının DNS sunucunuza erişmesine izin verilmediğini belirtebilir ve bu alan adlarını joker karakter ve DNS filtreleme kuralları ile tanımlayabilirsiniz

- Hesap limitlerine yeni limitler eklendi:

  - `access_rules` şu anda kullanılan `blocked_clients` ve `blocked_domain_rules` değerlerinin toplamının yanı sıra erişim kuralları sınırını da sağlar
  - `user_rules` oluşturulan kullanıcı kurallarının miktarını ve bunlar üzerindeki sınırı gösterir

- İstemci IP adreslerini ve alan adlarını günlüğe kaydetmek için yeni bir `ip_log_enabled` ayarı eklendi

- Limitlere ulaşıldığını belirtmek için yeni `FIELD_REACHED_LIMIT` hata kodu eklendi:

  - Erişim ayarlarındaki toplam `blocked_clients` ve `blocked_domain_rules` sayısı için
  - Özel kullanıcı kuralları ayarlarındaki `rules` için

## v1.5

_16 Haziran 2023 tarihinde yayınlandı_

- Yeni bir `block_nrd` ayarı eklendi ve güvenlikle ilgili tüm ayarlar tek bir yerde gruplandırıldı

### Güvenli gezinti ayarları için model değiştirildi

Şundan:

```json
{
   "enabled": true
}
```

Şuna:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

burada `enabled` artık gruptaki tüm ayarları kontrol eder, `block_dangerous_domains` önceki `enabled` model alanıdır ve `block_nrd` yeni tescilli alan adlarını engelleyen bir ayardır.

### Sunucu ayarlarını kaydetme modeli değiştirildi

Şundan:

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

burada, değeri `block_dangerous_domains` içinde saklanan ve kullanımdan kaldırılan `safebrowsing_enabled` yerine yeni bir alan olan `safebrowsing_settings` kullanılır.

## v1.4

_29 Mart 2023 tarihinde yayınlandı_

- Yanıtın engellenmesi için yapılandırılabilir seçenek eklendi: varsayılan (0.0.0.0), REFUSED, NXDOMAIN veya özel IP adresi

## v1.3

_13 Aralık 2022 tarihinde yayınlandı_

- Hesap limitlerini almak için yöntem eklendi

## v1.2

_14 Ekim 2022 tarihinde yayınlandı_

- Yeni protokol türleri DNS ve DNSCrypt eklendi. Daha sonra çıkarılacak olan PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP ve DNSCRYPT_UDP kaldırılacaktır

## v1.1

_7 Temmuz 2022 tarihinde yayınlandı_

- İstatistikleri zamana, alan adlarına, şirketlere ve cihazlara göre almak için yöntemler eklendi
- Cihaz ayarlarını güncellemek için yöntem eklendi
- Gerekli alanların tanımı düzeltildi

## v1.0

_22 Şubat 2022 tarihinde yayınlandı_

- Kimlik doğrulama eklendi
- Cihazlar ve DNS sunucularıyla CRUD işlemleri
- Sorgu günlüğü
- DoT ve DoT .mobileconfig dosyasının indirilmesi
- Filtre listeleri ve web hizmetleri
