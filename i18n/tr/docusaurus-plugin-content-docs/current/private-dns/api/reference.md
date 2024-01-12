---
title: Referans
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec
    https://api.adguard-dns.io/static/swagger/openapi.json to markdown using
    https://swagger-markdown-ui.netlify.app/.

    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

## AdGuard DNS API

DNS API belgeleri

## AdGuard DNS API Değişiklik Günlüğü

### v1.0

- Kimlik doğrulama eklendi.
- Cihazlar ve DNS sunucularıyla CRUD işlemleri.
- Sorgu günlüğü.
- DoT ve DoT .mobileconfig dosyasının indirilmesi.
- Filtre Listeleri ve Web Hizmetleri.

### v1.1

- İstatistikleri zamana, alan adlarına, şirketlere ve cihazlara göre almak için yöntemler eklendi.

- Cihaz ayarlarını güncellemek için yöntem eklendi.
- Gerekli alanların tanımı düzeltildi.

### v1.2

- Yeni protokol türleri DNS ve DNSCrypt eklendi. Daha sonra çıkarılacak olan PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP ve DNSCRYPT_UDP kaldırılacaktır.

### v1.3

- Hesap limitlerini almak için yöntem eklendi.

### v1.4

- Yanıtın engellenmesi için yapılandırılabilir seçenek eklendi: varsayılan (0.0.0.0), REFUSED, NXDOMAIN veya özel IP adresi.

### v1.5

- Yeni `block_nrd` ayarı eklendi ve güvenlikle ilgili tüm ayarlar tek bir yerde toplandı.

#### Güvenli gezinti ayarları için model şu şekilde değiştirildi

``` json
{
   "enabled": true
}
```

şuna:

``` json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

burada `enabled` artık gruptaki tüm ayarları kontrol ediyor, b`lock_dangerous_domains` önceki model alanı "enabled" ve `block_nrd` yeni kaydedilen alan adların filtrelemeye yönelik ayarlardır.

#### Sunucu ayarlarını kaydetme modeli şu şekilde değiştirildi

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ...
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
  ...
}
```

burada değeri kullanımdan çıkarılacak olan `safebrowsing_enabled` yerine yeni `safebrowsing_settings` alanı kullanılır, `block_dangerous_domains` içinde saklanır.

## Sürüm: 1.5

### /oapi/v1/account/limits

#### GET

##### Özet

Hesap limitlerini alır

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Account limits info |

### /oapi/v1/devices

#### GET

##### Özet

Cihazları listeler

##### Yanıtlar

| Kod | Açıklama        |
| --- | --------------- |
| 200 | List of devices |

#### POST

##### Özet

Yeni bir cihaz oluşturur

##### Yanıtlar

| Kod | Açıklama                        |
| --- | ------------------------------- |
| 200 | Cihaz oluşturuldu               |
| 400 | Doğrulama başarısız             |
| 429 | Devices count reached the limit |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Özet

Bir cihazı kaldırır

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama         |
| --- | ---------------- |
| 200 | Cihaz silindi    |
| 404 | Cihaz bulunamadı |

#### GET

##### Özet

Mevcut bir cihazı kimliğe göre alır

##### Parametreler

| Adı           | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| ------------- | ---------------- | -------- | ------- | ------ |
| cihaz_kimliği | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama         |
| --- | ---------------- |
| 200 | Cihaz bilgisi    |
| 404 | Cihaz bulunamadı |

#### PUT

##### Özet

Mevcut bir cihazı günceller

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| --------- | ---------------- | -------- | ------- | ------ |
| device_id | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Cihaz güncellendi   |
| 400 | Doğrulama başarısız |
| 404 | Cihaz bulunamadı    |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Özet

DNS-over-HTTPS, .mobileconfig dosyasını alır.

##### Parametreler

| Adı                     | Konumlandığı yer | Açıklama                                                                                        | Gerekli | Şema       |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------- | ------- | ---------- |
| cihaz_kimliği           | yol              |                                                                                                 | Evet    | string     |
| exclude_wifi_networks | sorgu            | AdGuard DNS'nin devre dışı bırakılmasını istediğiniz Wi-Fi ağlarını SSID'lerine göre listeleyin | Hayır   | [ string ] |
| exclude_domain          | sorgu            | AdGuard DNS yerine varsayılan DNS sunucularını kullanacak alan adlarını listeleyin              | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                      |
| --- | ----------------------------- |
| 200 | DNS-over-HTTPS .plist dosyası |
| 404 | Cihaz bulunamadı              |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Özet

DNS-over-TLS .mobileconfig dosyasını alır.

##### Parametreler

| Adı                     | Konumlandığı yer | Açıklama                                                                                        | Gerekli | Şema       |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------- | ------- | ---------- |
| cihaz_kimliği           | yol              |                                                                                                 | Evet    | dize       |
| exclude_wifi_networks | sorgu            | AdGuard DNS'nin devre dışı bırakılmasını istediğiniz Wi-Fi ağlarını SSID'lerine göre listeleyin | Hayır   | [ string ] |
| exclude_domain          | sorgu            | AdGuard DNS yerine varsayılan DNS sunucularını kullanacak alan adlarını listeleyin              | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                      |
| --- | ----------------------------- |
| 200 | DNS-over-HTTPS .plist dosyası |
| 404 | Cihaz bulunamadı              |

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Özet

Cihaz ayarlarını günceller

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| --------- | ---------------- | -------- | ------- | ------ |
| device_id | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Cihaz ayarları güncellendi |
| 400 | Doğrulama başarısız        |
| 404 | Cihaz bulunamadı           |

### /oapi/v1/dns_servers

#### GET

##### Özet

Kullanıcıya ait DNS sunucularını listeler.

##### Açıklama

Kullanıcıya ait DNS sunucularını listeler. Varsayılan olarak en az bir varsayılan sunucu vardır.

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | List of DNS servers |

#### POST

##### Özet

Yeni bir DNS sunucusu oluşturur

##### Açıklama

Yeni bir DNS sunucusu oluşturur. Özel ayarlar ekleyebilirsiniz, aksi takdirde DNS sunucusu varsayılan ayarlarla oluşturulacaktır.

##### Yanıtlar

| Kod | Açıklama                        |
| --- | ------------------------------- |
| 200 | DNS sunucusu oluşturuldu        |
| 400 | Doğrulama başarısız             |
| 429 | DNS sunucu sayısı sınıra ulaştı |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Özet

Bir DNS sunucusunu kaldırır

##### Açıklama

Bir DNS sunucusunu kaldırır. Bu DNS sunucusuna bağlı tüm cihazlar, varsayılan DNS sunucusuna taşınacaktır. Varsayılan DNS sunucusunun silinmesi yasaktır.

##### Parametreler

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                |
| --- | ----------------------- |
| 200 | DNS sunucusu silindi    |
| 404 | DNS sunucusu bulunamadı |

#### GET

##### Özet

Kimliğe göre mevcut bir DNS sunucusunu alır

##### Parametreler

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                |
| --- | ----------------------- |
| 200 | DNS sunucu bilgisi      |
| 404 | DNS sunucusu bulunamadı |

#### PUT

##### Özet

Mevcut bir DNS sunucusunu günceller

##### Parametreler

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                 |
| --- | ------------------------ |
| 200 | DNS sunucusu güncellendi |
| 400 | Doğrulama başarısız      |
| 404 | DNS sunucusu bulunamadı  |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Özet

DNS sunucusu ayarlarını günceller

##### Parametreler

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| --------------- | ---------------- | -------- | ------- | ------ |
| dns_server_id | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama                          |
| --- | --------------------------------- |
| 200 | DNS sunucusu ayarları güncellendi |
| 400 | Doğrulama başarısız               |
| 404 | DNS sunucusu bulunamadı           |

### /oapi/v1/filter_lists

#### GET

##### Özet

Filtre listelerini alır

##### Yanıtlar

| Kod | Açıklama        |
| --- | --------------- |
| 200 | List of filters |

### /oapi/v1/oauth_token

#### POST

##### Özet

Erişim ve Yenileme belirteci oluşturur

##### Yanıtlar

| Kod | Açıklama                                                                  |
| --- | ------------------------------------------------------------------------- |
| 200 | Erişim belirteci verildi                                                  |
| 400 | Gerekli parametreler eksik                                                |
| 401 | Geçersiz kimlik bilgileri, MFA belirteci veya yenileme belirteci sağlandı |

boş

### /oapi/v1/query_log

#### DELETE

##### Özet

Sorgu günlüğünü temizler

##### Yanıtlar

| Kod | Açıklama                 |
| --- | ------------------------ |
| 202 | Sorgu günlüğü temizlendi |

#### GET

##### Özet

Sorgu günlüğünü alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                                                         | Gerekli | Şema                                                |
| ------------------ | ---------------- | -------------------------------------------------------------------------------- | ------- | --------------------------------------------------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil)                                       | Evet    | uzun                                                |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)                                                | Evet    | long                                                |
| cihazlar           | sorgu            | Cihazlara göre filtrele                                                          | Hayır   | [ string ]                                          |
| ülkeler            | sorgu            | Ülkelere göre filtrele                                                           | Hayır   | [ string ]                                          |
| şirketler          | sorgu            | Şirketlere göre filtrele                                                         | Hayır   | [ string ]                                          |
| durumlar           | sorgu            | Durumlara göre filtrele                                                          | Hayır   | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| kategoriler        | sorgu            | Kategorilere göre filtrele                                                       | Hayır   | [ [CategoryType](#CategoryType) ]                   |
| search             | sorgu            | Alan adına göre filtrele                                                         | Hayır   | dize                                                |
| limit              | sorgu            | Döndürülecek kayıt sayısını sınırlayın                                           | Hayır   | integer                                             |
| imleç              | sorgu            | Sayfalandırma imleci. Sayfalar arasında gezinmek için yanıttaki imleci kullanın. | Hayır   | dize                                                |

##### Yanıtlar

| Kod | Açıklama      |
| --- | ------------- |
| 200 | Sorgu günlüğü |

### /oapi/v1/revoke_token

#### POST

##### Özet

Revokes a Refresh Token

##### Parametreler

| Adı           | Konumlandığı yer | Açıklama           | Gerekli | Şema   |
| ------------- | ---------------- | ------------------ | ------- | ------ |
| refresh_token | sorgu            | Yenileme Belirteci | Evet    | string |

##### Yanıtlar

| Kod | Açıklama              |
| --- | --------------------- |
| 200 | Refresh token revoked |

boş

### /oapi/v1/stats/categories

#### GET

##### Özet

Kategori istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Kategori istatistikleri alındı |
| 400 | Doğrulama başarısız            |

### /oapi/v1/stats/companies

#### GET

##### Özet

Şirket istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | long       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                     |
| --- | ---------------------------- |
| 200 | Şirket istatistikleri alındı |
| 400 | Doğrulama başarısız          |

### /oapi/v1/stats/companies/detailed

#### GET

##### Özet

Ayrıntılı şirket istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | long       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |
| imleç              | sorgu            | Sayfalandırma imleci                       | Hayır   | dize       |

##### Yanıtlar

| Kod | Açıklama                               |
| --- | -------------------------------------- |
| 200 | Ayrıntılı şirket istatistikleri alındı |
| 400 | Doğrulama başarısız                    |

### /oapi/v1/stats/countries

#### GET

##### Özet

Ülke istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Ülke istatistikleri alındı |
| 400 | Doğrulama başarısız        |

### /oapi/v1/stats/devices

#### GET

##### Özet

Cihaz istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | long       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                    |
| --- | --------------------------- |
| 200 | Cihaz istatistikleri alındı |
| 400 | Doğrulama başarısız         |

### /oapi/v1/stats/domains

#### GET

##### Özet

Alan adı istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | long       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Alan adı istatistikleri alındı |
| 400 | Doğrulama başarısız            |

### /oapi/v1/stats/time

#### GET

##### Özet

Süre istatistiklerini alır

##### Parametreler

| Adı                | Konumlandığı yer | Açıklama                                   | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------------ | ------- | ---------- |
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | long       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele                    | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                     | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Süre istatistikleri alındı |
| 400 | Doğrulama başarısız        |

### /oapi/v1/web_services

#### GET

##### Özet

Web hizmetlerini listeler

##### Yanıtlar

| Kod | Açıklama             |
| --- | -------------------- |
| 200 | List of web-services |
