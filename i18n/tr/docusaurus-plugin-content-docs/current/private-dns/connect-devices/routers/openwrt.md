---
title: OpenWRT
sidebar_position: 7
---

OpenWRT yönlendiriciler, yönlendiricileri ve ağ geçitlerini kullanıcı tercihlerine göre yapılandırma esnekliği sağlayan açık kaynaklı, Linux tabanlı bir işletim sistemi kullanır. Geliştiriciler, cihazınızda Özel AdGuard DNS'i yapılandırmanıza olanak tanıyan şifrelenmiş DNS sunucularına yönelik desteği eklemeye özen gösterdiler.

:::note

OpenWrt 25.12 and later use the `apk` package manager, while OpenWrt 24.10 and earlier use `opkg`. To check your OpenWrt version, run `cat /etc/openwrt_release`.

:::

## DNS-over-HTTPS'i yapılandırma

- **Komut satırı talimatları**. Gerekli paketleri yükleyin. DNS şifrelemesi otomatik olarak etkinleştirilmelidir.

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

- **Web arayüzü**. Ayarları web arayüzünü kullanarak yönetmek istiyorsanız, gerekli paketleri yükleyin.

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

https-dns-proxy'yi yapılandırmak için _LuCI_ → _Hizmetler_ → _HTTPS DNS Proxy_ öğesine gidin.

- **DoH sağlayıcısını yapılandırın**. https-dns-proxy varsayılan olarak Google DNS ve Cloudflare DNS ile yapılandırılmıştır. Bunu AdGuard DoH olarak değiştirmeniz gerekiyor. Hata toleransını iyileştirmek için birkaç çözümleyici belirtin.

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

## DNS-over-TLS'yi yapılandırma

- **Komut satırı talimatları**. Dnsmasq DNS rolünü [devre dışı bırakın](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) veya isteğe bağlı olarak DHCP rolünü odhcpd ile [değiştirerek](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) tamamen kaldırın.

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

LAN istemcileri ve yerel sistem, Dnsmasq'ın devre dışı bırakıldığını varsayarak birincil çözümleyici olarak Unbound kullanmalıdır.

- **Web arayüzü**. Ayarları web arayüzünü kullanarak yönetmek istiyorsanız, gerekli paketleri yükleyin.

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

Navigate to _LuCI_ → _Services_ → _Recursive DNS_ to configure Unbound.

- **Configure AdGuard DNS-over-TLS**.

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

## Yönlendirici yönetici panelini kullanma

Use these instructions if your OpenWrt router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Yönlendirici yönetici panelini açın. `192.168.1.1` veya `192.168.0.1` adresinden erişilebilir.
2. Yönetici kullanıcı adını (genellikle yöneticidir) ve yönlendirici parolasını girin.
3. _Ağ_ → _Arayüzler_ öğesini açın\*.
4. Wi-Fi ağınızı veya kablolu bağlantınızı seçin.
5. Yapılandırmak istediğiniz IP sürümüne bağlı olarak IPv4 adresine veya IPv6 adresine gidin.
6. _Özel DNS sunucularını kullan_ alında, kullanmak istediğiniz DNS sunucularının IP adreslerini girin. Boşluk veya virgülle ayırarak birden fazla DNS sunucusu girebilirsiniz:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
7. İsteğe bağlı olarak, yönlendiricinin ağınızdaki cihazlar için bir DNS iletici görevi görmesini istiyorsanız, DNS iletmeyi etkinleştirebilirsiniz.
8. Ayarları kaydedin.
9. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
