---
title: DNS-фильтрация
sidebar_position: 1
---

:::info

Самый простой способ изучить преимущества DNS-фильтрации — установить Блокировщик рекламы AdGuard или попробовать AdGuard DNS. Если вы хотите фильтровать DNS на сетевом уровне, AdGuard Home — подходящий инструмент

Быстрые ссылки: [Скачать Блокировщик AdGuard](https://agrd.io/download-kb-adblock), [Установить AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Попробовать AdGuard DNS](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## Что такое DNS?

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. Таким образом, каждый раз, когда вы переходите на сайт, ваш браузер посылает запрос на специальный тип сервера (DNS-сервер). Этот сервер смотрит на имя запрашиваемого домена и отвечает соответствующим IP-адресом. Очень схематично это выглядит так:

![Как работает DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Разумеется, всё то же самое применимо не только к браузерам, но к приложениям и программам, которые посылают какие-либо веб-запросы.

## Как работает DNS-фильтрация?

Когда вы используете одно из приложений AdGuard, поддерживающее DNS-фильтрацию, оно работает как буфер между вашим устройством и DNS-сервером. Все DNS-запросы, которые ваши браузеры или приложения собираются отправить, сначала обрабатываются AdGuard. If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard зашифрует все ваши DNS-запросы до того, как они будут отправлены, так что никакие злоумышленники не смогут получить доступ к их содержимому. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. Подробнее об этом мы расскажем [чуть позже](#local-dns-blocklists).

![Как работает DNS-фильтрация](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS-фильтрация может быть условно разделена на две основные функции: шифрование DNS-трафика и его перенаправление на DNS-сервер, а также блокировка определённых доменов с помощью локальных DNS-фильтров.

### DNS-серверы

В мире существуют тысячи DNS-серверов, и все они уникальны по своим свойствам и целям. Большинство просто возвращает IP-адрес запрошенного домена, но некоторые выполняют дополнительные функции: они блокируют рекламные, трекинговые, «взрослые» домены и т. д. Сегодня все крупные DNS-серверы используют один или несколько надёжных протоколов шифрования DNS-трафика: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard располагает несколькими разными серверами для разных целей. Эта диаграмма иллюстрирует работу блокирующих серверов AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Другие DNS-провайдеры могут работать иначе, так что узнайте все подробности перед тем, как делать выбор в пользу того или иного DNS-сервера. Вы можете найти список некоторых популярных DNS-провайдеров в [этой статье](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### Локальные DNS-фильтры

Но если полагаться только на DNS-серверы в вопросе фильтрации DNS-трафика, то неизбежны потери в гибкости. If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. Все продукты AdGuard позволяют использовать чёрные DNS-списки, будь то простые hosts-файлы или списки, использующие [более сложный синтаксис](dns-filtering-syntax.md). Они работают сходным образом с обычными рекламными фильтрами: когда DNS-запрос подходит под одно из правил в активном фильтре, он блокируется. Точнее говоря, DNS-сервер выдаёт немаршрутизируемый IP-адрес для такого запроса.

:::tip

Чтобы получить доступ к DNS-фильтрации в AdGuard для iOS, включите *Расширенный режим* в *Настройках*.

:::

Вы можете добавлять столько собственных DNS-фильтров, сколько захотите. Например, вы можете использовать [DNS-фильтр AdGuard](https://github.com/AdguardTeam/AdGuardSDNSFilter). Он блокирует то же самое, что и сервер AdGuard DNS, но с ним можно использовать любой другой DNS-сервер. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## Сравнение DNS-фильтрации с сетевой фильтрацией

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. [В статье о том, как работает блокировка рекламы](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/), можно узнать больше о сетевой фильтрации.

First of all, we have to mention that with AdGuard you don’t have to choose. Вы всегда можете использовать сетевую и DNS-фильтрацию одновременно. However, it’s important to understand key differences between the two. DNS-фильтрация обладает как уникальными преимуществами, так и недостатками.

**Плюсы DNS-фильтрации:**

1. На некоторых платформах это единственный способ фильтровать весь системный трафик. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. С некоторыми формами слежки (такими как [CNAME-трекинг](https://adguard.com/blog/cname-tracking.html)) может справиться только DNS-фильтрация.
1. Этап обработки DNS-запроса — самое раннее, когда можно заблокировать рекламу или трекер. Это помогает немного сэкономить время жизни батареи и трафик.

**Минусы DNS-фильтрации:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Пример разницы](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Пример разницы между DNS-фильтрацией и сетевой фильтрацией*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. Из-за этого сложно собирать статистику и создавать правила, работающие только для конкретных приложений.

Рекомендуем использовать DNS-фильтрацию вместе с сетевой фильтрацией, а не вместо неё, если это возможно.
