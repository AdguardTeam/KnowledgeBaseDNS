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

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

# AdGuard DNS API
DNS API documentation

## Sürüm: 1.4

### /oapi/v1/account/limits

#### GET
##### Özet:

Gets account limits

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | Account limits info |

### /oapi/v1/devices

#### GET
##### Özet:

Cihazları listeler

##### Yanıtlar

| Kod | Açıklama        |
| --- | --------------- |
| 200 | List of devices |

#### POST
##### Özet:

Yeni bir cihaz oluşturur

##### Yanıtlar

| Kod | Açıklama                        |
| --- | ------------------------------- |
| 200 | Cihaz oluşturuldu               |
| 400 | Validation failed               |
| 429 | Devices count reached the limit |

### /oapi/v1/devices/{device_id}

#### DELETE
##### Özet:

Bir cihazı kaldırır

##### Parametreler

| Name      | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama         |
| --- | ---------------- |
| 200 | Cihaz silindi    |
| 404 | Cihaz bulunamadı |

#### GET
##### Özet:

Gets an existing device by ID

##### Parametreler

| Name          | Konumlandığı yer | Açıklama | Gerekli | Şema |
| ------------- | ---------------- | -------- | ------- | ---- |
| cihaz_kimliği | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama         |
| --- | ---------------- |
| 200 | Device info      |
| 404 | Cihaz bulunamadı |

#### PUT
##### Özet:

Updates an existing device

##### Parametreler

| Name      | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama          |
| --- | ----------------- |
| 200 | Cihaz güncellendi |
| 400 | Validation failed |
| 404 | Cihaz bulunamadı  |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET
##### Özet:

Gets DNS-over-HTTPS .mobileconfig file.

##### Parametreler

| Name                    | Konumlandığı yer | Açıklama                                                                       | Gerekli | Şema       |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------ | ------- | ---------- |
| cihaz_kimliği           | yol              |                                                                                | Evet    | dize       |
| exclude_wifi_networks | sorgu            | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled | Hayır   | [ string ] |
| exclude_domain          | sorgu            | List domains that will use default DNS servers instead of AdGuard DNS          | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | DNS-over-HTTPS .plist file |
| 404 | Cihaz bulunamadı           |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET
##### Özet:

Gets DNS-over-TLS .mobileconfig file.

##### Parametreler

| Name                    | Konumlandığı yer | Açıklama                                                                       | Gerekli | Şema       |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------ | ------- | ---------- |
| cihaz_kimliği           | path             |                                                                                | Evet    | dize       |
| exclude_wifi_networks | sorgu            | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled | Hayır   | [ string ] |
| exclude_domain          | sorgu            | List domains that will use default DNS servers instead of AdGuard DNS          | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | DNS-over-HTTPS .plist file |
| 404 | Cihaz bulunamadı           |

### /oapi/v1/devices/{device_id}/settings

#### PUT
##### Özet:

Cihaz ayarlarını günceller

##### Parametreler

| Name      | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------- | ---------------- | -------- | ------- | ---- |
| device_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Cihaz ayarları güncellendi |
| 400 | Validation failed          |
| 404 | Cihaz bulunamadı           |

### /oapi/v1/dns_servers

#### GET
##### Özet:

Kullanıcıya ait DNS sunucularını listeler.

##### Açıklama:

Kullanıcıya ait DNS sunucularını listeler. By default there is at least one default server.

##### Yanıtlar

| Kod | Açıklama            |
| --- | ------------------- |
| 200 | List of DNS servers |

#### POST
##### Özet:

Yeni bir DNS sunucusu oluşturur

##### Açıklama:

Yeni bir DNS sunucusu oluşturur. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Yanıtlar

| Kod | Açıklama                            |
| --- | ----------------------------------- |
| 200 | DNS sunucusu oluşturuldu            |
| 400 | Validation failed                   |
| 429 | DNS servers count reached the limit |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE
##### Özet:

Bir DNS sunucusunu kaldırır

##### Açıklama:

Bir DNS sunucusunu kaldırır. Bu DNS sunucusuna bağlı tüm cihazlar, varsayılan DNS sunucusuna taşınacaktır. Varsayılan bir DNS sunucusunu silmek yasaktır.

##### Parametreler

| Name            | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                |
| --- | ----------------------- |
| 200 | DNS sunucusu silindi    |
| 404 | DNS sunucusu bulunamadı |

#### GET
##### Özet:

Gets an existing DNS server by ID

##### Parametreler

| Name            | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                |
| --- | ----------------------- |
| 200 | DNS sunucu bilgisi      |
| 404 | DNS sunucusu bulunamadı |

#### PUT
##### Özet:

Mevcut bir DNS sunucusunu günceller

##### Parametreler

| Name            | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                 |
| --- | ------------------------ |
| 200 | DNS sunucusu güncellendi |
| 400 | Validation failed        |
| 404 | DNS sunucusu bulunamadı  |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT
##### Özet:

DNS sunucusu ayarlarını günceller

##### Parametreler

| Name            | Konumlandığı yer | Açıklama | Gerekli | Şema |
| --------------- | ---------------- | -------- | ------- | ---- |
| dns_server_id | path             |          | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama                          |
| --- | --------------------------------- |
| 200 | DNS sunucusu ayarları güncellendi |
| 400 | Validation failed                 |
| 404 | DNS sunucusu bulunamadı           |

### /oapi/v1/filter_lists

#### GET
##### Özet:

Filtre listelerini alır

##### Yanıtlar

| Kod | Açıklama        |
| --- | --------------- |
| 200 | List of filters |

### /oapi/v1/oauth_token

#### POST
##### Özet:

Generates Access and Refresh token

##### Yanıtlar

| Kod | Açıklama                                                 |
| --- | -------------------------------------------------------- |
| 200 | Access token issued                                      |
| 400 | Gerekli parametreler eksik                               |
| 401 | Invalid credentials, MFA token or refresh token provided |

boş

### /oapi/v1/query_log

#### DELETE
##### Özet:

Sorgu günlüğünü temizler

##### Yanıtlar

| Kod | Açıklama                 |
| --- | ------------------------ |
| 202 | Sorgu günlüğü temizlendi |

#### GET
##### Özet:

Sorgu günlüğünü alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                                                                         | Gerekli | Şema                                                |
| ------------------ | ---------------- | -------------------------------------------------------------------------------- | ------- | --------------------------------------------------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive)                                            | Evet    | uzun                                                |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)                                                | Evet    | uzun                                                |
| cihazlar           | sorgu            | Cihazlara göre filtrele                                                          | Hayır   | [ string ]                                          |
| ülkeler            | sorgu            | Ülkelere göre filtrele                                                           | Hayır   | [ string ]                                          |
| şirketler          | sorgu            | Şirketlere göre filtrele                                                         | Hayır   | [ string ]                                          |
| durumlar           | sorgu            | Durumlara göre filtrele                                                          | Hayır   | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| kategoriler        | sorgu            | Kategorilere göre filtrele                                                       | Hayır   | [ [CategoryType](#CategoryType) ]                   |
| search             | sorgu            | Alan adına göre filtrele                                                         | Hayır   | dize                                                |
| limit              | sorgu            | Limit the number of records to be returned                                       | Hayır   | integer                                             |
| imleç              | sorgu            | Sayfalandırma imleci. Sayfalar arasında gezinmek için yanıttaki imleci kullanın. | Hayır   | dize                                                |

##### Yanıtlar

| Kod | Açıklama      |
| --- | ------------- |
| 200 | Sorgu günlüğü |

### /oapi/v1/revoke_token

#### POST
##### Özet:

Revokes a Refresh Token

##### Parametreler

| Name          | Konumlandığı yer | Açıklama      | Gerekli | Şema |
| ------------- | ---------------- | ------------- | ------- | ---- |
| refresh_token | sorgu            | Refresh Token | Evet    | dize |

##### Yanıtlar

| Kod | Açıklama              |
| --- | --------------------- |
| 200 | Refresh token revoked |

boş

### /oapi/v1/stats/categories

#### GET
##### Özet:

Kategori istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Kategori istatistikleri alındı |
| 400 | Validation failed              |

### /oapi/v1/stats/companies

#### GET
##### Özet:

Şirket istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                     |
| --- | ---------------------------- |
| 200 | Şirket istatistikleri alındı |
| 400 | Validation failed            |

### /oapi/v1/stats/companies/detailed

#### GET
##### Özet:

Ayrıntılı şirket istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |
| imleç              | sorgu            | Sayfalandırma imleci                  | Hayır   | dize       |

##### Yanıtlar

| Kod | Açıklama                               |
| --- | -------------------------------------- |
| 200 | Ayrıntılı şirket istatistikleri alındı |
| 400 | Validation failed                      |

### /oapi/v1/stats/countries

#### GET
##### Özet:

Ülke istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Ülke istatistikleri alındı |
| 400 | Validation failed          |

### /oapi/v1/stats/devices

#### GET
##### Özet:

Cihaz istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                    |
| --- | --------------------------- |
| 200 | Cihaz istatistikleri alındı |
| 400 | Validation failed           |

### /oapi/v1/stats/domains

#### GET
##### Özet:

Alan adı istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                       |
| --- | ------------------------------ |
| 200 | Alan adı istatistikleri alındı |
| 400 | Validation failed              |

### /oapi/v1/stats/time

#### GET
##### Özet:

Süre istatistiklerini alır

##### Parametreler

| Name               | Konumlandığı yer | Açıklama                              | Gerekli | Şema       |
| ------------------ | ---------------- | ------------------------------------- | ------- | ---------- |
| time_from_millis | sorgu            | Time from in milliseconds (inclusive) | Evet    | uzun       |
| time_to_millis   | sorgu            | Milisaniye cinsinden süre (dahil)     | Evet    | uzun       |
| cihazlar           | sorgu            | Cihazlara göre filtrele               | Hayır   | [ string ] |
| ülkeler            | sorgu            | Ülkelere göre filtrele                | Hayır   | [ string ] |

##### Yanıtlar

| Kod | Açıklama                   |
| --- | -------------------------- |
| 200 | Süre istatistikleri alındı |
| 400 | Validation failed          |

### /oapi/v1/web_services

#### GET
##### Özet:

Lists web services

##### Yanıtlar

| Kod | Açıklama             |
| --- | -------------------- |
| 200 | List of web-services |
