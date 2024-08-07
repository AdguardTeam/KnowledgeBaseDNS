---
title: Обзор
sidebar_position: 1
slug: /
---

## Что такое DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="Видеоплеер YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS расшифровывается как «‎cистема доменных имён» (от англ. Domain Name System). Её цель — переводить названия сайтов в IP-адреса. Каждый раз, когда вы заходите на сайт, ваш браузер отправляет запрос на DNS-сервер, чтобы определить IP-адрес сайта. В ответ обычный DNS-резолвер просто возвращает IP-адрес запрошенного домена.

:::note

Обычно по умолчанию DNS-сервер предоставляется вашим интернет-провайдером. Это означает, что интернет-провайдер может отслеживать ваши действия в сети и продавать логи третьим лицам.

:::

![Ваше устройство всегда использует DNS-сервер для получения IP-адресов доменов, к которым обращаются различные приложения, сервисы и т. д.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Есть и DNS-серверы, которые блокируют сайты на уровне DNS. Как они работают? Когда ваше устройство отправляет «плохой» запрос, будь то реклама или трекер, DNS-сервер предотвращает соединение, отвечая немаршрутизируемым IP-адресом заблокированного домена.

## Зачем использовать DNS для блокировки контента

Сегодня к интернету подключено абсолютно всё — от телевизора до умных лампочек, от мобильных устройств до умных автомобилей. А где есть интернет, есть реклама и трекеры. В этом случае браузерного блокировщика рекламы будет явно недостаточно. Чтобы усилить защиту, используйте DNS в сочетании с VPN и блокировщиком рекламы.

У использования DNS для блокировки контента есть как преимущества, так и очевидные недостатки. С одной стороны, DNS обрабатывает запросы со всех устройств и их приложений. Но, с другой стороны, в DNS-блокировке нет косметической фильтрации.

## Что такое AdGuard DNS?

AdGuard DNS — это DNS-сервис, который заботится о вашей конфиденциальности и безопасности в интернете. Он поддерживает такие надёжные протоколы шифрования, как DNS-over-HTTPS, DNS-over-TLS и DNS-over-QUIC. Он может работать как обычный DNS-резолвер в Нефильтрующем режиме, но может и блокировать контент на уровне DNS: определять запросы к рекламным, отслеживающим доменам и/или доменам со «взрослым» контентом (опционально) и возвращать им пустой ответ. У AdGuard есть собственная часто обновляемая база данных с названиями рекламных, трекинговых и мошеннических доменов.

![Примерная схема того, как работает AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

Около 75% трафика AdGuard DNS шифруется. Именно это отличает DNS-серверы, блокирующие контент, от других. Если вы посмотрите на статистику CloudFlare или Quad9, то увидите, что зашифрованный DNS-трафик составляет лишь небольшую долю всех запросов.

AdGuard DNS существует в двух основных формах: [Публичный AdGuard DNS](public-dns/overview) и [Личный AdGuard DNS](private-dns/overview). Ни один из этих сервисов не требует установки приложений. Их легко настроить и использовать, и они обеспечивают пользователей минимумом функций, необходимых для блкоировки рекламы, трекеров, вредоносных сайтов и контента для взрослых (если потребуется). Нет никаких ограничений на то, с какими устройствами их можно использовать.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot.

## Модуль DNS-фильтрации в продуктах AdGuard

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — Public or Private.
