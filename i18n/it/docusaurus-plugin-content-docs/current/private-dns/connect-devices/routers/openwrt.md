---
title: OpenWRT
sidebar_position: 7
---

I router OpenWRT utilizzano un sistema operativo open source basato su Linux che fornisce la flessibilità per configurare router e gateway secondo le preferenze dell'utente. Gli sviluppatori hanno provveduto ad aggiungere il supporto per i server DNS crittografati, consentendoti di configurare il DNS privato di AdGuard sul tuo dispositivo.

:::note

OpenWrt 25.12 and later use the `apk` package manager, while OpenWrt 24.10 and earlier use `opkg`. To check your OpenWrt version, run `cat /etc/openwrt_release`.

:::

## Configurazione di DNS-over-HTTPS

- **Istruzioni della riga di comando**. Installa i pacchetti necessari. La crittografia DNS dovrebbe essere abilitata automaticamente.

  For OpenWrt 25.12 and later:

  ```text
  apk update
  apk add https-dns-proxy
  ```

  For OpenWrt 24.10 and earlier:

  ```text
  opkg update
  opkg install https-dns-proxy
  ```

- **Interfaccia web**. Se vuoi gestire le impostazioni usando l'interfaccia web, installa i pacchetti necessari.

  For OpenWrt 25.12 and later:

  ```text
  apk update
  apk add luci-app-https-dns-proxy
  /etc/init.d/rpcd restart
  ```

  For OpenWrt 24.10 and earlier:

  ```text
  opkg update
  opkg install luci-app-https-dns-proxy
  /etc/init.d/rpcd restart
  ```

Naviga a _LuCI_ → _Servizi_ → _HTTPS DNS Proxy_ per configurare l'https-dns-proxy.

- **Configura il provider DoH**. l'https-dns-proxy è configurato con Google DNS e Cloudflare DNS per impostazione predefinita. È necessario cambiarlo in AdGuard DoH. Specifica diversi risolutori per migliorare la tolleranza ai guasti.

  ```text
  while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  uci set https-dns-proxy.dns="https-dns-proxy"
  uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  uci set https-dns-proxy.dns.listen_port="5053"
  uci commit https-dns-proxy
  /etc/init.d/https-dns-proxy restart
  ```

## Configura DNS-over-TLS

- **Istruzioni della riga di comando**. [Disattiva](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) il ruolo DNS di Dnsmasq o rimuovilo completamente, se vuoi [Sostituisci](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) il suo ruolo DHCP con odhcpd.

  For OpenWrt 25.12 and later:

  ```text
  apk update
  apk add unbound-daemon ca-certificates
  ```

  For OpenWrt 24.10 and earlier:

  ```text
  opkg update
  opkg install unbound-daemon ca-certificates
  ```

I client LAN e il sistema locale devono utilizzare Unbound come risolutore primario, assumendo che Dnsmasq sia disabilitato.

- **Interfaccia web**. Se vuoi gestire le impostazioni usando l'interfaccia web, installa i pacchetti necessari.

  For OpenWrt 25.12 and later:

  ```text
  apk update
  apk add luci-app-unbound ca-certificates
  /etc/init.d/rpcd restart
  ```

  For OpenWrt 24.10 and earlier:

  ```text
  opkg update
  opkg install luci-app-unbound ca-certificates
  /etc/init.d/rpcd restart
  ```

Naviga a _LuCI_ → _Servizi_ → _DNS ricorsivo_ per configurare Unbound.

- **Configura AdGuard DNS-over-TLS**.

  ```text
  uci add unbound zone
  uci set unbound.@zone[-1].enabled="1"
  uci set unbound.@zone[-1].fallback="0"
  uci set unbound.@zone[-1].zone_type="forward_zone"
  uci add_list unbound.@zone[-1].zone_name="."
  uci set unbound.@zone[-1].tls_upstream="1"
  uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  uci add_list unbound.@zone[-1].server="94.140.14.49"
  uci add_list unbound.@zone[-1].server="94.140.14.59"
  uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  uci commit unbound
  /etc/init.d/unbound restart
  ```

## Utilizza il pannello di amministrazione del tuo router

Use these instructions if your OpenWrt router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Apri _Rete_ → _Interfacce_.
4. Seleziona la tua rete Wi-Fi o connessione cablata.
5. Scorri verso il basso fino all'indirizzo IPv4 o all'indirizzo IPv6, a seconda della versione IP che desideri configurare.
6. Sotto _Utilizza server DNS personalizzati_, inserisci gli indirizzi IP dei server DNS che desideri utilizzare. Puoi inserire più server DNS, separati da spazi o virgole:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Facoltativamente, puoi abilitare l'inoltro DNS se desideri che il router agisca come server d'inoltro DNS per i dispositivi sulla tua rete.
8. Salva le impostazioni.
9. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
