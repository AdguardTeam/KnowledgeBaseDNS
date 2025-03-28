---
title: UniFi
sidebar_position: 10
---

Роутер UiFi (широко известный как серия Ubiquiti UniFi) обладает рядом преимуществ, которые делают его особенно подходящим для домашней, бизнес- и корпоративной среды. К сожалению, он не поддерживает зашифрованный DNS, однако отлично подходит для настройки AdGuard DNS через привязанный IP.

## Через панель управления роутера

Используйте эту инструкцию, если ваш роутер Keenetic не поддерживает настройку DNS-over-HTTPS или DNS-over-TLS:

1. Войдите в систему на контроллере Ubiquiti UniFi.
2. Перейдите в «Настройки» → «Сети».
3. Нажмите кнопку «Редактировать сеть» → «WAN».
4. Перейдите к разделу «Общие настройки» → «DNS-сервер» и введите следующие адреса DNS-серверов.
    - IPv4: `94.140.14.49` и `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
5. Нажмите _Сохранить_.
6. Вернитесь в раздел «Сеть».
7. Выберите «Редактировать сеть» → «Локальная сеть».
8. Найдите «DHCP Name Server» и выберите «Вручную».
9. Введите адрес шлюза в поле «DNS-сервер 1». Кроме того, вы можете ввести адреса DNS-серверов AdGuard в поля «DNS-сервер 1» и «DNS-сервер 2»:
    - IPv4: `94.140.14.49` и `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
10. Сохраните настройки.
11. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).

- [Выделенные IP](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP](private-dns/connect-devices/other-options/linked-ip.md)
