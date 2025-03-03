---
title: OpenWRT
sidebar_position: 7
---

OpenWRT-Router verwenden ein quelloffenes, Linux-basiertes Betriebssystem, das die Flexibilität bietet, Router und Gateways gemäß den Nutzer-Einstellungen zu konfigurieren. Sie unterstützen auch das Hinzufügen von verschlüsselten DNS-Servern, was bedeutet, dass Sie Privates AdGuard DNS auf Ihrem Gerät konfigurieren können.

## DNS-over-HTTPS konfigurieren

- **Befehlszeilen-Anweisungen**. Installieren Sie die erforderlichen Pakete. Die DNS-Verschlüsselung sollte automatisch aktiviert werden.

    ```# Install packages
    1. opkg update.
    2. opkg install https-dns-proxy

    ```
- **Weboberfläche**. Wenn Sie die Einstellungen über eine Weboberfläche verwalten möchten, installieren Sie die erforderlichen Pakete.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

Navigieren Sie zu _LuCI_ → _Dienste_ → _HTTPS DNS Proxy_, um den HTTPS-DNS-Proxy zu konfigurieren.

- **DoH-Anbieter konfigurieren**. https-dns-proxy ist standardmäßig mit Google DNS und Cloudflare DNS konfiguriert. Sie müssen es auf AdGuard DNS-over-HTTPS ändern. Geben Sie mehrere Resolver an, um die Fehlerresistenz zu verbessern.

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

## DNS-over-TLS konfigurieren

- **Befehlszeilen-Anweisungen**. [Deaktivieren](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Sie die DNS-Rolle von Dnsmasq oder entfernen Sie sie komplett, indem Sie optional [ihre DHCP-Rolle](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) mit odhcpd ersetzen.

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

LAN-Clients und das lokale System sollten Unbound als primären Resolver verwenden, vorausgesetzt, Dnsmasq ist deaktiviert.

- **Weboberfläche**. Wenn Sie die Einstellungen über eine Weboberfläche verwalten möchten, installieren Sie die erforderlichen Pakete.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

Navigieren Sie zu _LuCI_ → _Dienste_ → _Rekursives DNS_, um Unbound zu konfigurieren.

- **AdGuard DNS-over-TLS konfigurieren**.

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

## Administrationsoberfläche Ihres Routers verwenden

Verwenden Sie diese Anweisungen, wenn Ihr Keenetic-Router keine DNS-over-HTTPS- oder DNS-over-TLS-Konfiguration unterstützt:

1. Öffnen Sie das Router-Admin-Panel. Es ist zugänglich unter `192.168.1.1` oder `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Öffnen Sie _Netzwerk_ → _Schnittstellen_.
4. Wählen Sie Ihr WLAN-Netzwerk oder Ihre Kabelverbindung.
5. Blättern Sie nach unten zu IPv4-Adresse oder IPv6-Adresse, je nach der IP-Version, die Sie konfigurieren möchten.
6. Unter _Benutzerdefinierte DNS-Server verwenden_, geben Sie die IP-Adressen der DNS-Server ein, die Sie verwenden möchten. Sie können mehrere DNS-Server eingeben, getrennt durch Leerzeichen oder Kommas:
    - IPv4: `94.140.14.49` und `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Optional können Sie die DNS-Weiterleitung aktivieren, wenn Sie möchten, dass der Router als DNS-Weiterleitung für Geräte in Ihrem Netzwerk fungiert.
8. Speichern Sie die Einstellungen.
9. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
