---
title: OpenWRT
sidebar_position: 7
---

Routery OpenWRT používají open source operační systém založený na Linuxu, který umožňuje flexibilní konfiguraci routerů a bran podle preferencí uživatele. Vývojáři se postarali o přidání podpory pro šifrované servery DNS a umožnili vám nakonfigurovat Soukromý AdGuard DNS ve vašem zařízení.

## Konfigurace DNS-over-HTTPS

- **Pokyny příkazového řádku**. Nainstalujte požadované balíčky. Šifrování DNS by mělo být povoleno automaticky.

    ```# Install packages
    1. opkg update
    2. opkg install https-dns-proxy

    ```
- **Webové rozhraní**. Pokud chcete spravovat nastavení pomocí webového rozhraní, nainstalujte potřebné balíčky.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

Přejděte do části _LuCI_ → _Služby_ → _HTTPS DNS Proxy_ a nakonfigurujte https-dns-proxy.

- **Nakonfigurujte poskytovatele DoH**. https-dns-proxy je ve výchozím nastavení nakonfigurován s Google DNS a Cloudflare DNS. Musíte ho změnit na AdGuard DoH. Zadejte několik řešitelů, abyste zlepšili odolnost proti chybám.

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

## Konfigurace DNS-over-TLS

- **Pokyny příkazového řádku**. [Zakažte](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) roli Dnsmasq DNS nebo ji zcela odeberte, případně [nahraďte](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) její DHCP rolí s odhcpd.

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

Klienti sítě LAN a místní systém by měli používat odchozí server jako primární řešitel za předpokladu, že je Dnsmasq zakázáno.

- **Webové rozhraní**. Pokud chcete spravovat nastavení pomocí webového rozhraní, nainstalujte potřebné balíčky.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

Přejděte do části _LuCI_ → _Služby_ → _Rekurzivní DNS_ a nakonfigurujte Unbound.

- **Konfigurace AdGuard DNS-over-TLS**.

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

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Síť_ → _Rozhraní_.
4. Vyberte svou Wi-Fi nebo kabelové připojení.
5. Přejděte dolů na adresu IPv4 nebo adresu IPv6 v závislosti na verzi IP, kterou chcete nakonfigurovat.
6. V části _Použít vlastní servery DNS_ zadejte IP adresy DNS serverů, které chcete použít. Můžete zadat více serverů DNS oddělených mezerami nebo čárkami:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
7. Volitelně můžete povolit přesměrování DNS, pokud chcete, aby router fungoval jako přesměrovávač DNS pro zařízení v síti.
8. Uložte nastavení.
9. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
