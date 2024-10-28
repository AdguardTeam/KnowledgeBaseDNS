---
title: Özel IP'ler
sidebar_position: 2
---

## Özel IP'ler nedir?

Dedicated IPv4 addresses are available to users with Team and Enterprise subscriptions, while linked IPs are available to everyone.

If you have a Team or Enterprise subscription, you'll receive several personal dedicated IP addresses. Requests to these addresses are treated as "yours," and server-level configurations and filtering rules are applied accordingly. Dedicated IP addresses are much more secure and easier to manage. With linked IPs, you have to manually reconnect or use a special program every time the device's IP address changes, which happens after every reboot.

## Neden özel IP'ye ihtiyacınız var?

Ne yazık ki, bağlı cihazın teknik özellikleri her zaman şifrelenmiş özel bir AdGuard DNS sunucusu kurmanıza izin vermeyebilir. In this case, you will have to use standard unencrypted DNS. AdGuard DNS'i kurmanın iki yolu vardır: [bağlı IP'leri kullanarak](/private-dns/connect-devices/other-options/linked-ip.md) ve özel IP'leri kullanarak.

Özel IP'ler genellikle daha istikrarlı bir seçenektir. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you'll need to relink the IP address. With dedicated IPs, you get an IP address that is exclusively yours, and all requests will be counted for your device.

Dezavantajı, genel DNS çözümleyicilerinde her zaman olduğu gibi alakasız trafik (tarayıcılar, botlar) almaya başlayabilirsiniz. You may need to use [Access settings](/private-dns/server-and-settings/access.md) to limit bot traffic.

Aşağıdaki talimatlar cihaza özel IP'nin nasıl bağlanacağını açıklamaktadır:

## Connect AdGuard DNS using dedicated IPs

1. Panoyu açın.
2. Yeni bir cihaz ekleyin veya önceden oluşturulmuş bir cihazın ayarlarını açın.
3. _Sunucu adreslerini kullan_ öğesini seçin.
4. Ardından, _Düz DNS Sunucu Adresleri_ öğesini açın.
5. Kullanmak istediğiniz sunucuyu seçin.
6. To bind a dedicated IPv4 address, click _Assign_.
7. If you want to use a dedicated IPv6 address, click _Copy_.
   ![Adresi kopyala \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Seçili özel adresi kopyalayıp cihaz yapılandırmalarına yapıştırın.
