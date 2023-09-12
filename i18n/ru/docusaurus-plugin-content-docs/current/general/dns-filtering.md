---
title: DNS-фильтрация
sidebar_position: 1
---

:::info

Самый простой способ изучить преимущества DNS-фильтрации — установить блокировщик рекламы AdGuard или попробовать AdGuard DNS. Если вы хотите фильтровать DNS на сетевом уровне, AdGuard Home — подходящий инструмент

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

Чтобы лучше понять DNS-фильтрацию, надо сначала ответить на вопрос «‎Что такое DNS?».

## Что такое DNS?

DNS расшифровывается как «‎система доменных имён» (от англ. «Domain name system). Её цель — переводить имена доменов, понятные человеку, в нечто понятное браузерам, т. е. в IP-адреса. Таким образом, каждый раз, когда вы переходите на сайт, ваш браузер посылает запрос на специальный тип сервера (DNS-сервер). Этот сервер смотрит на имя запрашиваемого домена и отвечает соответствующим IP-адресом. Очень схематично это выглядит так:

![Как работает DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Разумеется, всё то же самое применимо не только к браузерам, но к приложениям и программам, которые посылают какие-либо веб-запросы.

## Как работает DNS-фильтрация?

Когда вы используете одно из приложений AdGuard, поддерживающее DNS-фильтрацию, оно работает как буфер между вашим устройством и DNS-сервером. Все DNS-запросы, которые ваши браузеры или приложения собираются отправить, сначала обрабатываются AdGuard. Если вы используете DNS-сервер, предоставленный по умолчанию вашим интернет-провайдером, ваш DNS-трафик, скорее всего, не зашифрован и уязвим для отслеживания и перехвата. AdGuard зашифрует все ваши DNS-запросы до того, как они будут отправлены, так что никакие злоумышленники не смогут получить доступ к их содержимому. Кроме того, AdGuard может определить запросы к рекламным, трекинговым и «взрослым» сайтам и перенаправить их «‎в никуда» вместо того, чтобы переслать на DNS-сервер. Подробнее об этом мы расскажем [чуть позже](#local-dns-blocklists).

![Как работает DNS-фильтрация](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS-фильтрация — это мощный инструмент, который поддерживается всеми основными приложениями AdGuard: [AdGuard для Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard для Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard для Android](https://adguard.com/adguard-android/overview.html) и [AdGuard для iOS](https://adguard.com/adguard-ios/overview.html).

DNS-фильтрация может быть условно разделена на две основные функции: шифрование DNS-трафика и его перенаправление на DNS-сервер, а также блокировка определённых доменов с помощью локальных DNS-фильтров.

### DNS-серверы

В мире существуют тысячи DNS-серверов, и все они уникальны по своим свойствам и целям. Большинство просто возвращает IP-адрес запрошенного домена, но некоторые выполняют дополнительные функции: они блокируют рекламные, трекинговые, «взрослые» домены и т. д. Сегодня все крупные DNS-серверы используют один или несколько надёжных протоколов шифрования DNS-трафика: DNS-over-HTTPS, DNS-over-TLS. AdGuard также предоставляет свой [DNS-сервис](https://adguard-dns.io/), и он стал самым первым DNS-провайдером в мире, который добавил поддержку нового и многообещающего протокола шифрования [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html). AdGuard располагает несколькими разными серверами для разных целей. Эта диаграмма иллюстрирует работу блокирующих серверов AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Другие DNS-провайдеры могут работать иначе, так что узнайте все подробности перед тем, как делать выбор в пользу того или иного DNS-сервера. Вы можете найти список некоторых популярных DNS-провайдеров в [этой статье](dns-providers.md). Все приложения AdGuard, которые поддерживают DNS-функционал, также предоставляют на выбор список проверенных DNS-серверов и даже дают возможность вручную указать любой предпочитаемый вами DNS-сервер.

### Локальные DNS-фильтры

Но если полагаться только на DNS-серверы в вопросе фильтрации DNS-трафика, то неизбежны потери в гибкости. Если выбранный сервер блокирует домен, вы не сможете получить к нему доступ. С AdGuard же вам даже не обязательно настраивать какой-то конкретный DNS-сервер, чтобы фильтровать DNS-трафик. Все продукты AdGuard позволяют использовать чёрные DNS-списки, будь то простые hosts-файлы или списки, использующие [более сложный синтаксис](dns-filtering-syntax.md). Они работают сходным образом с обычными рекламными фильтрами: когда DNS-запрос подходит под одно из правил в активном фильтре, он блокируется. А точнее, перенаправляется «в никуда».

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in settings in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## Сравнение DNS-фильтрации с сетевой фильтрацией

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. На некоторых платформах это единственный способ фильтровать весь системный трафик. Например, на iOS только Safari поддерживает блокировку контента в привычном смысле. Фильтровать трафик всех остальных браузеров и приложений поможет только DNS-фильтрация.
1. С некоторыми формами слежки (такими как [CNAME-трекинг](https://adguard.com/blog/cname-tracking.html)) может справиться только DNS-фильтрация.
1. Этап обработки DNS-запроса — самое раннее, когда можно заблокировать рекламу или трекер. Это помогает немного сэкономить время жизни батареи и трафик.

**Cons of DNS filtering:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

1. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
