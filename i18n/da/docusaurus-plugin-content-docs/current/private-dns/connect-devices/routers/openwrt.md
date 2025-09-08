---
title: OpenWRT
sidebar_position: 7
---

OpenWRT-routere bruger et open-source, Linux-baseret operativsystem, der giver fleksibilitet til opsætning af routere og gateways jf. brugerpræferencer. Udviklerne tog sig af at tilføje understøttelse for krypterede DNS-servere, hvilket muliggør at opsætte Private AdGuard DNS på brugerens enhed.

## Opsæt DNS-over-HTTPS

 - **Kommandolinjevejledning**. Installér de nødvendige pakker. DNS-kryptering bør aktiveres automatisk.

    ```# Install packages
    1. opkg update
    2. opkg install https-dns-proxy

    ```
 - **Webgrænseflade**. Ønskes indstillingerne håndteret via webgrænsefladen, skal de nødvendige pakker installeres.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

Gå til _LuCI_ → _Tjenester_ → _HTTPS DNS-proxy_ for at opsætte https-dns-proxy.

 - **Opsæt DoH-udbyder**. https-dns-proxy er opsat med Google DNS og Cloudflare DNS som standard. Dette skal ændres til AdGuard DoH. Angiv flere opløsere for at forbedre fejltolerancen.

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

## Opsæt DNS-over-TLS

 - **Kommandolinjevejledning**. [Deaktivér](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS-rollen eller fjern den helt og evt. [erstatte](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) dens DHCP-rolle med odhcpd.

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

LAN-klienter og det lokale system bør bruge Unbound som en primær opløser, forudsat at Dnsmasq er deaktiveret.

 - **Webgrænseflade**. Ønskes indstillingerne håndteret via webgrænsefladen, skal de nødvendige pakker installeres.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

Gå til _LuCI_ → _Tjenester_ → _Rekursiv DNS_ for at opsætte Unbound.

 - **Opsæt AdGuard DNS-over-TLS**.

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

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Netværk_ → _Grænseflader_.
4. Vælg relevant Wi-Fi netværk eller kabelforbindelse.
5. Rul ned til IPv4 eller IPv6, afhængigt af den IP-version, der skal opsættes.
6. Under _Brug tilpassede DNS-servere_, angiv IP-adresserne på de DNS-servere, som skal anvendes. Der kan angives flere DNS-servere, adskilt af mellemrum eller kommaer:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. DNS-videresendelse kan evt. slås til, såfremt routeren skal fungere som DNS-videresender for netværksklienterne.
8. Gem indstillingerne.
9. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

 - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linkede IP'erIPs](/private-dns/connect-devices/other-options/linked-ip.md)
