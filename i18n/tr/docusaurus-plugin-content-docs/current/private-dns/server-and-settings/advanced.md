---
title: Gelişmiş ayarlar
sidebar_position: 2
---

Gelişmiş ayarlar bölümü daha deneyimli kullanıcılara yöneliktir ve aşağıdaki ayarları içerir.

## Engellenen alan adlarına yanıt ver

Burada engellenen istek için DNS yanıtını seçebilirsiniz:

- **Varsayılan**: Reklam engelleme stili kuralı tarafından engellendiğinde sıfır IP adresiyle (A için 0.0.0.0; :: AAAA için) yanıt verin; /etc/hosts-tarzı kural tarafından engellendiğinde, kuralda belirtilen IP adresiyle yanıt verin
- **REFUSED**: REFUSED koduyla yanıt verin
- **NXDOMAIN**: NXDOMAIN koduyla yanıt verin
- **Özel IP**: El ile ayarlanmış bir IP adresiyle yanıt verin

## TTL (Time-To-Live)

Time-to-live (TTL) sets the time period (in seconds) for a client device to cache the response to a DNS request and retrieve it from its cache without re-requesting the DNS server. If the TTL value is high, recently unblocked requests may still look blocked for a while. If TTL is 0, the device does not cache responses.

## iCloud Private Relay'e erişimi engelle

Devices that use iCloud Private Relay may ignore their DNS settings, so AdGuard DNS cannot protect them.

## Firefox canary alan adını engelle

Prevents Firefox from switching to the DoH resolver from its settings when AdGuard DNS is configured system-wide.

## IP adreslerini günlüğe kaydet

Varsayılan olarak AdGuard DNS, gelen DNS isteklerinin IP adreslerini günlüğe kaydetmez. Bu ayarı etkinleştirirseniz, IP adresleri günlüğe kaydedilecek ve Sorgu günlüğünde görüntülenecektir.
