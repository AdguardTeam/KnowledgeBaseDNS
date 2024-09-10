---
title: Обзор
sidebar_position: 1
---

## Что такое AdGuard DNS?

AdGuard DNS — это бесплатный, защищающий конфиденциальность DNS-резолвер, который делает соединение безопасным и блокирует рекламу, трекеры, фишинг и контент для взрослых (опционально). AdGuard DNS не требует установки приложений. Им легко пользоваться, его легко настроить на любом устройстве (смартфоне, компьютере, роутере, игровой консоли и т. д.).

## Публичные серверы AdGuard DNS

У AdGuard DNS три типа публичных серверов. Сервер «По умолчанию» — для блокировки рекламы, трекеров, вредоносного ПО и фишинговых сайтов. Сервер «Семейная защита» делает то же самое, но ещё блокирует сайты с контентом для взрослых и включает опцию «Безопасный поиск» в браузерах, где она доступна. «Нефильтрующий» сервер обеспечивает безопасное и надёжное соединение, но ничего не блокирует. Инструкцию по установке AdGuard DNS на любом устройстве можно найти [на нашем сайте](https://adguard-dns.io/public-dns.html). Каждый сервер поддерживает разные протоколы безопасности: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) и DNS-over-QUIC (DoQ).

## Протоколы AdGuard DNS

Помимо обычного DNS (IPv4 и IPv6), AdGuard DNS поддерживает различные протоколы шифрования, так что вы можете выбрать тот, который подходит вам больше всего.

### DNSCrypt

С AdGuard DNS можно использовать специальный протокол шифрования — DNSCrypt. Благодаря ему, все DNS-запросы зашифровываются, что защищает вас от их возможного перехвата и последующего чтения и/или подмены. По сравнению с протоколами DoH, DoT и DoQ, DNSCrypt считается устаревшим, и по возможности мы рекомендуем использовать эти протоколы.

### DNS-over-HTTPS (DoH) и DNS-over-TLS (DoT)

DoH и DoT — современные безопасные DNS-протоколы, которые набирают популярность и станут стандартами индустрии в обозримом будущем. Оба протокола более надёжны по сравнению с DNSCrypt, и оба поддерживаются AdGuard DNS.

#### JSON API for DNS

AdGuard DNS also provides a JSON API for DNS. It is possible to get a DNS response in JSON by typing:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google's guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). Getting a DNS response in JSON works the same way with AdGuard DNS.

:::note

Unlike with Google DNS, AdGuard DNS doesn't support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC — это новый протокол шифрования DNS](https://adguard.com/blog/dns-over-quic.html), а AdGuard DNS — первый публичный резолвер, который его поддерживает. В отличие от DoH и DoT, он использует QUIC в качестве транспортного протокола и возвращает DNS к истокам — работе через UDP. Он привносит всё хорошее, что QUIC может предложить — готовое шифрование, ускоренное время соединения, лучшую производительность при потере пакетов трафика. К тому же, QUIC создавался как транспортный протокол, и с ним нет риска утечки метаданных, в отличие от DoH.
