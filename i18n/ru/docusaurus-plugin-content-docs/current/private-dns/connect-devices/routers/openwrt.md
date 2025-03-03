---
title: OpenWRT
sidebar_position: 7
---

Роутеры OpenWRT используют операционную систему с открытым исходным кодом на базе Linux, которая предоставляет возможность гибкой настройки роутеров и шлюзов в соответствии с предпочтениями пользователей. Разработчики позаботились о добавлении поддержки зашифрованных DNS-серверов, что позволяет настроить Private AdGuard DNS на вашем устройстве.

## Настройте DNS-over-HTTPS

- **Инструкции командной строки**. Установите необходимые пакеты. DNS-шифрование должно быть включено автоматически.

    ```# Install packages
    1. opkg update
    2. opkg install https-dns-proxy

    ```
- **Веб-интерфейс**. Если вы хотите управлять настройками через веб-интерфейс, установите необходимые пакеты.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

Перейдите в раздел «LuCI» → «Сервисы» → «HTTPS DNS Proxy» для настройки https-dns-proxy.

- **Настройте провайдер DoH**. https-dns-proxy настроен с Google DNS и Cloudflare DNS по умолчанию. Вам необходимо изменить его на AdGuard DoH. Укажите несколько DNS преобразователей (DNS resolvers) для повышения отказоустойчивости.

    ```# Configure DoH provider
    1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
    2. uci set https-dns-proxy.dns="https-dns-proxy"
    3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
    4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
    5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
    6. uci set https-dns-proxy.dns.listen_port="5053"
    7. uci commit https-dns-proxy
    8. /etc/init.d/https-dns-proxy restart
    ```

## Настройте DNS-over-TLS

- **Инструкции командной строки**. [Отключите](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) роль DNS в Dnsmasq или удалите ее полностью, при необходимости [заменив](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) роль DHCP с odhcpd.

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

Клиенты локальной сети и локальная система должны использовать Unbound в качестве основного резольвера при условии, что Dnsmasq отключён.

- **Веб-интерфейс**. Если вы хотите управлять настройками через веб-интерфейс, установите необходимые пакеты.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

Перейдите в «LuCI» → «Сервисы» → «Рекурсивный DNS», чтобы настроить Unbound.

- **Настройка DNS-over-TLS**.

    ```1. uci add unbound zone
    2. uci set unbound.@zone[-1].enabled="1"
    3. uci set unbound.@zone[-1].fallback="0"
    4. uci set unbound.@zone[-1].zone_type="forward_zone"
    5. uci add_list unbound.@zone[-1].zone_name="."
    6. uci set unbound.@zone[-1].tls_upstream="1"
    7. uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
    8. uci add_list unbound.@zone[-1].server="94.140.14.49"
    9. uci add_list unbound.@zone[-1].server="94.140.14.59"
    10. uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
    11. uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
    12. uci commit unbound
    13. /etc/init.d/unbound restart
    ```

## Через панель управления роутера

Используйте эту инструкцию, если ваш роутер Keenetic не поддерживает настройку DNS-over-HTTPS или DNS-over-TLS:

1. Откройте панель управления роутера. Доступ возможен по адресам `192.168.1.1` или `192.168.0.1`.
2. Введите логин пользователя администратора (обычно это admin) и пароль роутера.
3. Откройте «Сеть» → «Интерфейсы».
4. Выберите сеть Wi-Fi или проводное соединение.
5. Прокрутите вниз до IPv4-адреса или IPv6-адреса, в зависимости от версии IP, которую вы хотите настроить.
6. Под пунктом «Использовать пользовательские DNS серверы» введите IP-адреса DNS-серверов, которые вы хотите использовать. Вы можете ввести несколько DNS-серверов, разделив их пробелами или запятыми:
    - IPv4: `94.140.14.49` и `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` и `2a10:50c0:0:0:0:0:dad:ff`
7. При желании вы можете включить переадресацию DNS, если хотите, чтобы роутер действовал как переадресатор DNS для устройств в вашей сети.
8. Сохраните настройки.
9. Привяжите свой IP (или ваш выделенный IP, если у вас есть подписка Team).

- [Выделенные IP-адреса](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Привязанные IP-адреса](/private-dns/connect-devices/other-options/linked-ip.md)
