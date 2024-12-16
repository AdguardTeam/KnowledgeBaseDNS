---
title: OpenWRT
sidebar_position: 7
---

OpenWRT yönlendiriciler, yönlendiricileri ve ağ geçitlerini kullanıcı tercihlerine göre yapılandırma esnekliği sağlayan açık kaynaklı, Linux tabanlı bir işletim sistemi kullanır. Geliştiriciler, cihazınızda Özel AdGuard DNS'i yapılandırmanıza olanak tanıyan şifrelenmiş DNS sunucularına yönelik desteği eklemeye özen gösterdiler.

## DNS-over-HTTPS'i yapılandır

- **Komut satırı talimatları**. Gerekli paketleri yükleyin. DNS şifrelemesi otomatik olarak etkinleştirilmelidir.

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy
  ```
- **Web arayüzü**. Ayarları web arayüzünü kullanarak yönetmek istiyorsanız, gerekli paketleri yükleyin.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

https-dns-proxy'yi yapılandırmak için _LuCI_ → _Hizmetler_ → _HTTPS DNS Proxy_ öğesine gidin.

- **DoH sağlayıcısını yapılandırın**. https-dns-proxy varsayılan olarak Google DNS ve Cloudflare DNS ile yapılandırılmıştır. Bunu AdGuard DoH olarak değiştirmeniz gerekiyor. Hata toleransını iyileştirmek için birkaç çözümleyici belirtin.

  ```# Configure DoH provider
  1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  2. uci set https-dns-proxy.dns="https-dns-proxy"
  3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  6. uci set https-dns-proxy.dns.listen_port="5053"
  7. uci commit https-dns-proxy
  8. /etc/init.d/https-dns-proxy restart
  ```

## DNS-over-TLS'yi yapılandırma

- **Komut satırı talimatları**. [Disable](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS role or remove it completely optionally [replacing](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) its DHCP role with odhcpd.

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

LAN istemcileri ve yerel sistem, Dnsmasq'ın devre dışı bırakıldığını varsayarak birincil çözümleyici olarak Unbound kullanmalıdır.

- **Web arayüzü**. Ayarları web arayüzünü kullanarak yönetmek istiyorsanız, gerekli paketleri yükleyin.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

Navigate to _LuCI_ → _Services_ → _Recursive DNS_ to configure Unbound.

- **Configure AdGuard DNS-over-TLS**.

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

## Yönlendirici yönetici panelini kullanma

Keenetic yönlendiriciniz DNS-over-HTTPS veya DNS-over-TLS yapılandırmasını desteklemiyorsa bu talimatları kullanın:

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
