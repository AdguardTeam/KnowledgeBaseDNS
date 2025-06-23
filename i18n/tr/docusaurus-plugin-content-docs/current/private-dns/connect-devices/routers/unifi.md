---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## DNS-over-HTTPS'i yapılandırma

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Device name: Use your Unifi device name
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protokol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Yol: /dns-query/123456abc (123456abc değerini AdGuard DNS Özel Panonuzdan elde ettiğiniz değerle değiştirin)
4. İşareti kaldırın
    - No filter
    - No logs
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. Log in to the Ubiquiti UniFi controller.
2. _Ayarlar_ → _Güvenlik_ öğesine gidin.
3. _Koruma_ öğesine tıklayın.
4. _Şifrelenmiş DNS_ → _Özel_ öğesine gidin ve aşağıdaki DNS sunucu adreslerini girin.
    - Sunucu Adı: 'AdGuard DNS'
    - DNS Stamp: DNS stamp URL copied from above
5. _Kaydet_ öğesine tıklayın.

## Yönlendirici yönetici panelini kullanma

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration.

1. Ubiquiti UniFi denetleyicisinde oturum açın.
2. _Ayarlar_ → _Ağlar_ öğesine gidin\*.
3. _Ağı Düzenle_ → _WAN_ öğesine tıklayın.
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses:
    - IPv4: `94.140.14.49` ve `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
5. _Kaydet_ öğesine tıklayın.
6. _Ağ_ öğesine geri dönün.
7. _Ağı Düzenle_ → _LAN_ öğesini seçin.
8. _DHCP Ad Sunucusu_ öğesini bulun ve _Manuel_ öğesini seçin.
9. _DNS Sunucu 1_ alanına ağ geçidi adresinizi girin. Alternatively, you can enter the AdGuard DNS server addresses in the _DNS Server 1_ and _DNS Server 2_ fields:
    - IPv4: `94.140.14.49` ve `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
10. Ayarları kaydedin.
11. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.
    - [Özel IP'ler](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Bağlı IP'ler](private-dns/connect-devices/other-options/linked-ip.md)
