---
title: OpenWRT
sidebar_position: 7
---

Les routeurs OpenWRT utilisent un système d'exploitation open source, basé sur Linux, qui offre la flexibilité de configurer les routeurs et les passerelles selon les préférences des utilisateurs. Les développeurs ont pris soin d'ajouter une assistance pour les serveurs DNS cryptés, vous permettant de configurer AdGuard DNS sur votre appareil.

## Configurer DNS-over-HTTPS

- **Instructions de ligne de commande**. Installez les paquets nécessaires. Le chiffrement DNS devrait être activé automatiquement.

    ```# Install packages
    1. opkg update
    2. opkg install https-dns-proxy

    ```
- **Interface web**. Si vous souhaitez gérer les paramètres à l'aide de l'interface web, installez les paquets nécessaires.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-https-dns-proxy
    3. /etc/init.d/rpcd restart
    ```

Accédez à _LuCI_ → _Services_ → _Proxy DNS HTTPS_ pour configurer le proxy https-dns.

- **Configurez le fournisseur DoH**. https-dns-proxy est configuré avec Google DNS et Cloudflare DNS par défaut. Vous devez le remplacer par AdGuard DoH. Spécifiez plusieurs résolveurs pour améliorer la tolérance aux pannes.

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

## Configuration DNS-over-TLS

- **Instructions de ligne de commande**. [Désactivez](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) le rôle DNS de Dnsmasq ou supprimez-le complètement en option, en [remplaçant](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) son rôle DHCP par odhcpd.

    ```# Install packages
    1. opkg update
    2. opkg install unbound-daemon ca-certificates
    ```

Les clients LAN et le système local doivent utiliser Unbound comme résolveur principal en supposant que Dnsmasq est désactivé.

- **Interface web**. Si vous souhaitez gérer les paramètres à l'aide de l'interface web, installez les paquets nécessaires.

    ```# Install packages
    1. opkg update
    2. opkg install luci-app-unbound ca-certificates
    3. /etc/init.d/rpcd restart
    ```

Accédez à _LuCI_ → _Services_ → _DNS récursif_ pour configurer Unbound.

- **Configuration AdGuard DNS-over-TLS**.

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

## Utilisez le panneau d'administration de votre routeur

Utilisez ces instructions si votre routeur Keenetic ne prend pas en charge la configuration DNS-over-HTTPS ou DNS-over-TLS :

1. Ouvrez le panneau d'administration du routeur. On peut y accéder à `192.168.1.1` ou `192.168.0.1`.
2. Saisissez le nom d'utilisateur de l'administrateur (en général, c'est admin) et le mot de passe du routeur.
3. Ouvrez _Réseau_ → _Interfaces_.
4. Sélectionnez votre réseau Wi-Fi ou votre connexion filaire.
5. Faites défiler jusqu'à l'adresse IPv4 ou l'adresse IPv6, selon la version IP que vous souhaitez configurer.
6. Sous _Utiliser des serveurs DNS personnalisés_, saisissez les adresses IP des serveurs DNS que vous souhaitez utiliser. Vous pouvez saisir plusieurs serveurs DNS, séparés par des espaces ou des virgules :
    - IPv4 : `94.140.14.49` et `94.140.14.59`
    - IPv6 : `2a10:50c0:0:0:0:0:ded:ff` et `2a10:50c0:0:0:0:0:dad:ff`
7. Si vous le souhaitez, vous pouvez activer le transfert DNS si vous souhaitez que le routeur agisse en tant que redirecteur DNS pour les appareils de votre réseau.
8. Enregistrez les paramètres.
9. Liez votre IP (ou votre IP dédiée si vous avez un abonnement Équipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
