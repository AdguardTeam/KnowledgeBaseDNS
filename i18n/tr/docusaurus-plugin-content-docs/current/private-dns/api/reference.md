---
title: Referans
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Current version: 1.9

### /oapi/v1/account/limits

#### GET

##### Özet

Hesap limitlerini alır

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Account limits info |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Özet

Özel IPv4 adreslerini listeler

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Özel IPv4 adreslerinin listesi |

#### POST

##### Özet

Yeni IPv4 tahsis eder

##### Yanıtlar

| Kod | Açıklama                          |
| --- | --------------------------------- |
| 200 | Yeni IPv4 başarıyla tahsis edildi |
| 429 | Özel IPv4 sayısı limite ulaştı    |

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

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### GET

##### Özet

List dedicated IPv4 and IPv6 addresses for a device

##### Parametreler

| Adı           | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| ------------- | ---------------- | -------- | ------- | ------ |
| cihaz_kimliği | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama          |
| --- | ----------------- |
| 200 | Özel IPv4 ve IPv6 |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### DELETE

##### Özet

Özel IPv4'ün cihazla bağlantısını kaldır

##### Parametreler

| Adı           | Konumlandığı yer | Açıklama | Gerekli | Şema |
| ------------- | ---------------- | -------- | ------- | ---- |
| cihaz_kimliği | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                                             |
| --- | ---------------------------------------------------- |
| 200 | Özel IPv4'ün cihazla bağlantısı başarıyla kaldırıldı |
| 404 | Cihaz veya adres bulunamadı                          |

#### POST

##### Özet

Özel IPv4'ü cihaza bağla

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| --------- | ---------------- | -------- | ------- | ------ |
| device_id | yol              |          | Evet    | string |

##### Yanıtlar

| Kod | Açıklama                            |
| --- | ----------------------------------- |
| 200 | Özel IPv4 başarıyla cihaza bağlandı |
| 400 | Doğrulama başarısız                 |
| 404 | Cihaz veya adres bulunamadı         |
| 429 | Özel IPv4 sayısı limite ulaştı      |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Özet

DNS-over-HTTPS, .mobileconfig dosyasını alır.

##### Parametreler

| Adı                     | Konumlandığı yer | Açıklama                                                                                        | Gerekli | Şema       |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------- | ------- | ---------- |
| device_id               | yol              |                                                                                                 | Evet    | dize       |
| exclude_wifi_networks | sorgu            | AdGuard DNS'nin devre dışı bırakılmasını istediğiniz Wi-Fi ağlarını SSID'lerine göre listeleyin | Hayır   | [ string ] |
| exclude_domain          | sorgu            | AdGuard DNS yerine varsayılan DNS sunucularını kullanacak alan adlarını listeleyin              | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                      |
| --- | ----------------------------- |
| 200 | DNS-over-HTTPS .plist dosyası |
| 404 | Cihaz bulunamadı              |

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Özet

DNS-over-HTTPS parolası oluştur ve ayarla

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                                     |
| --- | -------------------------------------------- |
| 200 | DNS-over-HTTPS parolası başarıyla sıfırlandı |
| 404 | Cihaz bulunamadı                             |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Özet

DNS-over-TLS .mobileconfig dosyasını alır.

##### Parametreler

| Adı                     | Konumlandığı yer | Açıklama                                                                                        | Gerekli | Şema       |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------- | ------- | ---------- |
| device_id               | yol              |                                                                                                 | Evet    | dize       |
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

| Kod | Açıklama                  |
| --- | ------------------------- |
| 200 | DNS sunucularının listesi |

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

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema   |
| --------------- | ---------------- | -------- | ------- | ------ |
| dns_server_id | yol              |          | Evet    | string |

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

| Adı             | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | yol              |          | Evet    | dize |

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

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Filtrelerin listesi |

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

null

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

| Adı           | Konumlandığı yer | Açıklama           | Gerekli | Şema |
| ------------- | ---------------- | ------------------ | ------- | ---- |
| refresh_token | sorgu            | Yenileme Belirteci | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama              |
| --- | --------------------- |
| 200 | Refresh token revoked |

null

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
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | long       |
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
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)          | Evet    | long       |
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
| time_from_millis | sorgu            | Milisaniye cinsinden başlayan süre (dahil) | Evet    | uzun       |
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

| Kod | Açıklama                  |
| --- | ------------------------- |
| 200 | Web hizmetlerinin listesi |
