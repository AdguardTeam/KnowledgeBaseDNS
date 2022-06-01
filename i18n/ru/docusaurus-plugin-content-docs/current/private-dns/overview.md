---
title: Обзор
sidebar_position: 1
---

# Приватный AdGuard DNS

![Панель управления приватного AdGuard DNS](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png)

## Что такое приватный AdGuard DNS

Приватный AdGuard DNS — это DNS-сервер, который, помимо преимуществ публичного DNS-сервера (таких как шифрование трафика и возможность добавлять домены в списки блокировки), предоставляет такие возможности, как гибкая настройка, статистика DNS-запросов и родительский контроль, и легко управляется с помощью удобной приборной панели.

## Зачем нужен приватный AdGuard DNS

Сегодня к интернету можно подключить всё, что угодно: телевизоры, холодильники, умные лампочки и колонки. Но вместе с неоспоримыми удобствами в вашу жизнь, а точнее в ваши устройства, приходят трекеры и реклама. Простой браузерный блокировщик в этом случае вас не защитит, зато AdGuard DNS, который может опционально обеспечивать фильтрацию трафика и блокировку контента, поможет.

Изначально мы могли предложить либо [публичный AdGuard DNS](../public-dns/overview.md), либо [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Кому-то эти решения подошли, но для многих в публичном AdGuard DNS не хватило гибкости настроек, а в AdGuard Home — простоты. Можно сказать, что на стыке этих двух продуктов и появился приватный AdGuard DNS. Он предлагает обширные параметры настройки, контроль и информацию — и все это с помощью простой и удобной приборной панели.

## Разница между приватным и публичным AdGuard DNS

Вот простое сравнение функций, доступных в публичном AdGuard DNS и частном AdGuard DNS серверах.

| Публичный AdGuard DNS                            | Приватный AdGuard DNS                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Шифрование DNS-трафика                           | Шифрование DNS-трафика                                                                                       |
| Предустановленные списки заблокированных доменов | Настраиваемые списки блокировки доментов                                                                     |
| -                                                | Пользовательские правила DNS-фильтрации с возможностью импорта/экспорта                                      |
| -                                                | Статистика запросов (посмотрите, куда направляются ваши DNS-запросы: в какие страны, какие компании и т. д.) |
| -                                                | Подробный журнал запросов                                                                                    |
| -                                                | Родительский контроль                                                                                        |

## Как настроить приватный AdGuard DNS

1. Перейдите на вашу [панель управления AdGuard DNS](https://adguard-dns.io/dashboard/) (если вы не авторизовались, войдите, используя свою учётную запись AdGuard)
2. Кликните «Подключить устройство» и следуйте инструкциям на экране

> Поддерживаемые платформы: - Android - iOS - Windows - Mac - Linux - Роутеры - Игровые консоли


## Функции приватного AdGuard DNS

### Blocklists management

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Родительский контроль

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png)
> Если у вас ещё нет приватного AdGuard DNS, вы можете [настроить его на официальном сайте](https://adguard-dns.io/).