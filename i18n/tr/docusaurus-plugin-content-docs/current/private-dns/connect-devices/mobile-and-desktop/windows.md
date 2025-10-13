---
title: Windows
sidebar_position: 5
---

To connect a Windows device to AdGuard DNS, first add it to _Dashboard_:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak Windows öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting_device \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Bunu [AdGuard](#use-adguard-ad-blocker-paid-option) veya [AdGuard VPN](#use-adguard-vpn) uygulamaları, [Windows ayarları](#configure-via-windows-settings) veya [AdGuard DNS İstemcisi](#use-adguard-dns-client) kullanarak ayarlayabilirsiniz.

## AdGuard Reklam Engelleyici kullanma (ücretli seçenek)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Windows device. Çeşitli şifreleme protokollerinden seçim yapabilirsiniz. DNS filtrelemenin yanı sıra, tüm sisteminizde çalışan mükemmel bir reklam engelleyiciye de sahip olursunuz.

1. [Install the app](https://adguard.com/adguard-windows/overview.html) on the device you want to connect to AdGuard DNS.
2. Uygulamayı açın.
3. Click _Settings_ at the top of the app’s home screen.
   ![Settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Select the _DNS Protection_ tab from the menu on the left.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Click your currently selected DNS server.
   ![DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Scroll down and click _Add a custom DNS server_.
   ![Add a custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. In the DNS upstreams field, paste one of the following addresses. If you’re not sure which one to prefer, choose DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. _Kaydet ve seç_ öğesine tıklayın.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Eklediğiniz DNS sunucusu _Özel DNS sunucuları_ listesinin altında görünür.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## AdGuard VPN'i kullanma

Tüm VPN hizmetleri şifrelenmiş DNS'i desteklemez. Ancak bizim VPN'imiz destekliyor, bu nedenle hem VPN'e hem de özel bir DNS'e ihtiyacınız varsa, AdGuard VPN sizin için başvurabileceğiniz bir seçenektir.

1. Install AdGuard VPN.
2. Open the app and click _Settings_.
3. Select _App settings_.
   ![App settings \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Scroll down and select _DNS servers_.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Click _Add custom DNS server_.
   ![Add custom DNS server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. In the _Server address_ field, paste one of the following addresses. If you’re not sure which one to prefer, select DNS-over-HTTPS.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. _Kaydet ve seç_ öğesine tıklayın.
   ![Save and select \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

## Windows ayarları aracılığıyla yapılandırma

:::note

Yalnızca Windows 11'de kullanılabilir.

:::

1. Görev çubuğundaki _Arama_ çubuğuna bağlantı türünüze bağlı olarak **Ethernet ayarları** veya **Wi-Fi ayarları** yazın.
   Yapılandırmak istediğiniz ağa (Wi-Fi ID veya Ethernet) tıklayın.
   ![Ara \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. _DNS sunucusu ataması_ öğesine gidin ve _Düzenle_ öğesine tıklayın.
   ![DNS sunucu ataması \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. DNS ayarlarını _El ile girilen_ olarak değiştirin.
4. IPv4 düğmesini _Açık_ konumuna getirin.
5. Aşağıdaki DNS sunucu adreslerini girin:
   - Tercih edilen DNS: `94.140.14.49`
   - Alternatif DNS: `94.140.14.59`
6. _HTTPS üzerinden DNS şablonu_ öğesini _Açık (el ile şablon)_ olarak ayarlayın ve kişisel DNS adresinizi girin. Bunu, Panoda _Sunucu ayarları_ → _Cihazlar_ → _Cihaz ayarları_ → DNS-over-HTTPS altında bulabilirsiniz.
7. _Kaydet_ öğesine tıklayın. İşte bu kadar — cihazınız artık AdGuard DNS'e bağlı!
   ![DNS ayarlarını kaydet \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## AdGuard DNS İstemcisini kullanma

AdGuard DNS Client is a versatile, cross-platform console tool that allows you to connect to AdGuard DNS using encrypted DNS protocols.

More details can be found in [different article](/dns-client/overview/).

## Düz DNS'i yapılandırma

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
