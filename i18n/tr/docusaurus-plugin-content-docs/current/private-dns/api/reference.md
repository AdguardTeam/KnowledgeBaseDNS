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

## Current version: 1.10

### /oapi/v1/account/limits

#### GET

##### Özet

Gets account limits

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Account limits info |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Özet

Lists dedicated IPv4 addresses

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Özel IPv4 adreslerinin listesi |

#### POST

##### Özet

Allocates new IPv4

##### Yanıtlar

| Kod | Açıklama                          |
| --- | --------------------------------- |
| 200 | Yeni IPv4 başarıyla tahsis edildi |
| 429 | Özel IPv4 sayısı limite ulaştı    |

### /oapi/v1/devices

#### GET

##### Özet

Lists devices

##### Yanıtlar

| Kod | Açıklama           |
| --- | ------------------ |
| 200 | Cihazların listesi |

#### POST

##### Özet

Creates a new device

##### Yanıtlar

| Kod | Açıklama                        |
| --- | ------------------------------- |
| 200 | Cihaz oluşturuldu               |
| 400 | Doğrulama başarısız             |
| 429 | Devices count reached the limit |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Özet

Removes a device

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

Gets an existing device by ID

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

Updates an existing device

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

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

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

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Özet

Unlink dedicated IPv4 from the device

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

Link dedicated IPv4 to the device

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

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Özet

Gets DNS-over-HTTPS .mobileconfig file.

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

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Özet

Generate and set new DNS-over-HTTPS password

##### Parametreler

| Adı       | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | yol              |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                                     |
| --- | -------------------------------------------- |
| 200 | DNS-over-HTTPS parolası başarıyla sıfırlandı |
| 404 | Cihaz bulunamadı                             |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Özet

Gets DNS-over-TLS .mobileconfig file.

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

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Özet

Updates device settings

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

Lists DNS servers that belong to the user.

##### Açıklama

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Yanıtlar

| Kod | Açıklama                  |
| --- | ------------------------- |
| 200 | DNS sunucularının listesi |

#### POST

##### Özet

Creates a new DNS server

##### Açıklama

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Yanıtlar

| Kod | Açıklama                        |
| --- | ------------------------------- |
| 200 | DNS sunucusu oluşturuldu        |
| 400 | Doğrulama başarısız             |
| 429 | DNS sunucu sayısı sınıra ulaştı |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Özet

Removes a DNS server

##### Açıklama

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

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

Gets an existing DNS server by ID

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

Updates an existing DNS server

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

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Özet

Updates DNS server settings

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

Gets filter lists

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Filtrelerin listesi |

### /oapi/v1/oauth_token

#### POST

##### Özet

Generates Access and Refresh token

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

Clears query log

##### Yanıtlar

| Kod | Açıklama                 |
| --- | ------------------------ |
| 202 | Sorgu günlüğü temizlendi |

#### GET

##### Özet

Gets query log

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

Gets categories statistics

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

Gets companies statistics

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

Gets detailed companies statistics

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

Gets countries statistics

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

Gets devices statistics

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

Gets domains statistics

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

Gets time statistics

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

Lists web services

##### Yanıtlar

| Kod | Açıklama                  |
| --- | ------------------------- |
| 200 | Web hizmetlerinin listesi |
