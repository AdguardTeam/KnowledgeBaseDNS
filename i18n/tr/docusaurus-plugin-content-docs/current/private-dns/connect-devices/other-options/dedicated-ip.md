---
title: Özel IP'ler
sidebar_position: 2
---

## Özel IP'ler nedir?

Özel IPv4 adresleri Takım ve Kurumsal aboneliklere sahip kullanıcılar tarafından kullanılabilirken, bağlı IP'ler herkes tarafından kullanılabilir.

Bir Takım veya Kurumsal aboneliğiniz varsa, birkaç kişisel özel IP adresi alırsınız. Bu adreslere gelen istekler "sizin" olarak değerlendirilir, sunucu düzeyindeki yapılandırmalar ve filtreleme kuralları buna göre uygulanır. Özel IP adresleri çok daha güvenli ve yönetimi daha kolaydır. Bağlı IP'lerde, cihazın IP adresi her yeniden başlatmadan sonra değiştiğinde, elle yeniden bağlanmanız veya özel bir program kullanmanız gerekir.

## Neden özel IP'ye ihtiyacınız var?

Ne yazık ki, bağlı cihazın teknik özellikleri her zaman şifrelenmiş özel bir AdGuard DNS sunucusu kurmanıza izin vermeyebilir. Bu durumda, standart şifrelenmemiş DNS kullanmanız gerekir. AdGuard DNS'i kurmanın iki yolu vardır: [bağlı IP'leri kullanarak](/private-dns/connect-devices/other-options/linked-ip.md) ve özel IP'leri kullanarak.

Özel IP'ler genellikle daha istikrarlı bir seçenektir. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you'll need to relink the IP address. Özel IP'lerle, yalnızca size ait bir IP adresine sahip olursunuz ve cihazınıza gelen tüm istekler sayılacaktır.

Dezavantajı, genel DNS çözümleyicilerinde her zaman olduğu gibi alakasız trafik (tarayıcılar, botlar) almaya başlayabilirsiniz. Bot trafiğini kısıtlamak için [Erişim ayarları](/private-dns/server-and-settings/access.md) kullanmanız gerekebilir.

Aşağıdaki talimatlar cihaza özel IP'nin nasıl bağlanacağını açıklamaktadır:

## Connect AdGuard DNS using dedicated IPs

1. Panoyu açın.
2. Yeni bir cihaz ekleyin veya önceden oluşturulmuş bir cihazın ayarlarını açın.
3. _Sunucu adreslerini kullan_ öğesini seçin.
4. Ardından, _Düz DNS Sunucu Adresleri_ öğesini açın.
5. Kullanmak istediğiniz sunucuyu seçin.
6. Özel bir IPv4 adresini bağlamak için _Ata_ öğesine tıklayın.
7. Özel bir IPv6 adresi kullanmak istiyorsanız, _Kopyala_ öğesine tıklayın.
   ![Adresi kopyala \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Seçili özel adresi kopyalayıp cihaz yapılandırmalarına yapıştırın.
