---
title: UniFi
sidebar_position: 10
---

Маршрутизатор UiFi, широко известный как серия Ubiquiti UniFi, имеет ряд преимуществ, которые делают его оптимальным для домашней, бизнес- и корпоративной среды.

В новой прошивке UniFi недавно появилась поддержка DNS-over-HTTPS. В UniFi эта функция называется _Зашифрованный DNS_.

## Настройте DNS-over-HTTPS

Следуйте этой инструкции, если ваш роутер UniFi поддерживает DNS-over-HTTPS.

Роутеры UiFi используют URL DNS Stamp для указания URL DNS-over-HTTPS. Этот URL должен быть вычислен с использованием вашего частного DNS-over-HTTPS URL.

Получите DNS-over-HTTPS URL, который используется для вычисления URL DNS Stamp.

1. Перейдите в Панель управления AdGuard DNS.
2. Перейдите к разделу _Зашифрованный DNS_ → _Пользовательский_ и введите следующие настройки DNS-сервера:
   - Тип устройства: «Маршрутизатор»
   - Марка устройства: «Unifi»
   - Имя устройства: используйте имя вашего устройства Unifi
3. Нажмите _Далее_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
   - No filter
   - No logs
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. Войдите в систему на контроллере Ubiquiti UniFi.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
   - Server Name: 'AdGuard DNS'
   - DNS Stamp: DNS stamp URL copied from above
5. Нажмите _Сохранить_.

## Через панель управления роутера

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration.

1. Войдите в систему на контроллере Ubiquiti UniFi.
2. Перейдите в «Настройки» → «Сети».
3. Нажмите кнопку «Редактировать сеть» → «WAN».
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` и `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
5. Нажмите _Сохранить_.
6. Вернитесь в раздел «Сеть».
7. Выберите «Редактировать сеть» → «Локальная сеть».
8. Найдите «DHCP Name Server» и выберите «Вручную».
9. Введите адрес шлюза в поле «DNS-сервер 1». Alternatively, you can enter the AdGuard DNS server addresses in the _DNS Server 1_ and _DNS Server 2_ fields:
   - IPv4: `94.140.14.49` и `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
10. Сохраните настройки.
11. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).
    - [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Привязанные IP](private-dns/connect-devices/other-options/linked-ip.md)
