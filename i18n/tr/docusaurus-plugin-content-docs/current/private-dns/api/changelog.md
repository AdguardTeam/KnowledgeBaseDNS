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
  - New field in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Kimlik doğrulamayla DNS-over-HTTPS kullanarak bağlanırken kullanılacak URL'yi belirtir

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
  - `dedicated_ipv4` provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them
- DNSServerSettings'in kullanımdan kalkmış alanı kaldırıldı:
  - `safebrowsing_enabled`

## v1.6

_22 Ocak 2024 tarihinde yayınlandı_

- Added new Access settings section for DNS profiles (`access_settings`). Bu alanları özelleştirerek AdGuard DNS sunucunuzu yetkisiz erişime karşı koruyabilirsiniz:

  - `allowed_clients` — burada hangi istemcilerin DNS sunucunuzu kullanabileceğini belirtebilirsiniz. Bu alan `blocked_clients` alanına göre önceliğe sahip olur
  - `blocked_clients` — burada hangi istemcilerin DNS sunucunuzu kullanmasına izin verilmediğini belirtebilirsiniz
  - `blocked_domain_rules` — burada hangi alan adlarının DNS sunucunuza erişmesine izin verilmediğini belirtebilir ve bu alan adlarını joker karakter ve DNS filtreleme kuralları ile tanımlayabilirsiniz

- Hesap limitlerine yeni limitler eklendi:

  - `access_rules` şu anda kullanılan `blocked_clients` ve `blocked_domain_rules` değerlerinin toplamının yanı sıra erişim kuralları sınırını da sağlar
  - `user_rules` oluşturulan kullanıcı kurallarının miktarını ve bunlar üzerindeki sınırı gösterir

- Added a new `ip_log_enabled` setting to log client IP addresses and domains

- Limitlere ulaşıldığını belirtmek için yeni `FIELD_REACHED_LIMIT` hata kodu eklendi:

  - Erişim ayarlarındaki toplam `blocked_clients` ve `blocked_domain_rules` sayısı için
  - Özel kullanıcı kuralları ayarlarındaki `rules` için

## v1.5

_16 Haziran 2023 tarihinde yayınlandı_

- Added a new `block_nrd` setting and grouped all security-related settings in one place

### Güvenli gezinti ayarları için model değiştirildi

From:

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

where `enabled` now controls all settings in the group, `block_dangerous_domains` is the previous `enabled` model field, and `block_nrd` is a setting that blocks newly registered domains.

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

here a new field `safebrowsing_settings` is used instead of the deprecated `safebrowsing_enabled`, whose value is stored in `block_dangerous_domains`.

## v1.4

_29 Mart 2023 tarihinde yayınlandı_

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP address

## v1.3

_13 Aralık 2022 tarihinde yayınlandı_

- Added method to get account limits

## v1.2

_14 Ekim 2022 tarihinde yayınlandı_

- Yeni protokol türleri DNS ve DNSCrypt eklendi. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later

## v1.1

_Released on July 7, 2022_

- Added methods to retrieve statistics by time, domains, companies and devices
- Added method for updating device settings
- Fixed required fields definition

## v1.0

_22 Şubat 2022 tarihinde yayınlandı_

- Added authentication
- CRUD operations with devices and DNS servers
- Sorgu günlüğü
- Downloading DoH and DoT .mobileconfig
- Filter lists and web services
