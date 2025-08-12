---
title: Обзор
sidebar_position: 1
---

## Что такое AdGuard DNS?

AdGuard DNS — это бесплатный, защищающий конфиденциальность DNS-резолвер, который делает соединение безопасным и блокирует рекламу, трекеры, фишинг и контент для взрослых (опционально). AdGuard DNS не требует установки приложений. Им легко пользоваться, его легко настроить на любом устройстве (смартфоне, компьютере, роутере, игровой консоли и т. д.).

## Публичные серверы AdGuard DNS

У AdGuard DNS три типа публичных серверов. *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. Инструкцию по установке AdGuard DNS на любом устройстве можно найти [на нашем сайте](https://adguard-dns.io/public-dns.html). Каждый сервер поддерживает разные протоколы безопасности: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) и DNS-over-QUIC (DoQ).

## Протоколы AdGuard DNS

Помимо обычного DNS (IPv4 и IPv6), AdGuard DNS поддерживает различные протоколы шифрования, так что вы можете выбрать тот, который подходит вам больше всего.

### DNS-over-HTTPS (DoH) и DNS-over-TLS (DoT)

DoH и DoT — современные безопасные DNS-протоколы, которые набирают популярность и станут стандартами индустрии в обозримом будущем. Оба протокола более надёжны по сравнению с DNSCrypt, и оба поддерживаются AdGuard DNS.

#### JSON API для DNS

AdGuard DNS также предоставляет JSON API для DNS. Получить DNS-ответ в формате JSON можно, набрав:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). Получение DNS-ответа в формате JSON работает точно так же с AdGuard DNS.

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC — это новый протокол шифрования DNS](https://adguard.com/blog/dns-over-quic.html), а AdGuard DNS — первый публичный резолвер, который его поддерживает. В отличие от DoH и DoT, он использует QUIC в качестве транспортного протокола и возвращает DNS к истокам — работе через UDP. Он привносит всё хорошее, что QUIC может предложить — готовое шифрование, ускоренное время соединения, лучшую производительность при потере пакетов трафика. К тому же, QUIC создавался как транспортный протокол, и с ним нет риска утечки метаданных, в отличие от DoH.

### Лимит запросов

Ограничение лимита запросов DNS — это метод, используемый для контроля объёма трафика, который DNS-сервер может обрабатывать за определённый промежуток времени. Мы предлагаем возможность увеличить лимит по умолчанию для Командных и Коммерческих планов Личного AdGuard DNS. Для получения дополнительной информации [прочтите сопутствующую статью](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration.

:::note

This is an obsolete protocol with restricted support.

:::
