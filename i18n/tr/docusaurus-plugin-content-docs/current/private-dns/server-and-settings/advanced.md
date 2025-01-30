---
title: Gelişmiş ayarlar
sidebar_position: 2
---

Gelişmiş ayarlar bölümü daha deneyimli kullanıcılara yöneliktir ve aşağıdaki ayarları içerir.

## Engellenen alan adlarına yanıt verme

Burada engellenen istek için DNS yanıtını seçebilirsiniz:

- **Varsayılan**: Reklam engelleme stili kuralı tarafından engellendiğinde sıfır IP adresiyle (A için 0.0.0.0; :: AAAA için) yanıt verin; /etc/hosts-tarzı kural tarafından engellendiğinde, kuralda belirtilen IP adresiyle yanıt verin
- **REFUSED**: REFUSED koduyla yanıt verin
- **NXDOMAIN**: NXDOMAIN koduyla yanıt verin
- **Özel IP**: El ile ayarlanmış bir IP adresiyle yanıt verin

## TTL (Kullanım süresi)

Kullanım süresi (TTL), bir istemci aygıtının bir DNS isteğine gelen yanıtı önbelleğe alması ve DNS sunucusundan yeniden istekte bulunmadan önbelleğinden alması için gereken zaman aralığını (saniye cinsinden) ayarlar. Eğer kullanım süresi yüksekse, yeni engellenmeyen istekler bir süre engelleniyormuş gibi görünmeye devam edebilir. TTL 0 ise cihaz yanıtları önbelleğe almaz.

## iCloud Private Relay'e erişimi engelleme

iCloud Private Relay kullanan cihazlar, DNS ayarlarını yok sayabilir, bu nedenle AdGuard DNS onları koruyamaz.

## Firefox canary alan adını engelleme

AdGuard DNS sistem genelinde yapılandırıldığında Firefox'un ayarlarından DoH çözümleyicisine geçmesini engeller.

## IP adreslerini günlüğe kaydetme

Varsayılan olarak AdGuard DNS, gelen DNS isteklerinin IP adreslerini günlüğe kaydetmez. Bu ayarı etkinleştirirseniz, IP adresleri günlüğe kaydedilecek ve Sorgu günlüğünde görüntülenecektir.
