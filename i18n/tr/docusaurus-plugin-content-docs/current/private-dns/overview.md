---
title: Genel Bakış
sidebar_position: 1
---

:::info

AdGuard DNS ile, DNS isteklerini çözümlemek ve reklamları, izleyicileri ve kötü amaçlı alan adlarını cihazınıza ulaşmadan önce engellemek için özel DNS sunucularınızı ayarlayabilirsiniz

Hızlı bağlantı: [AdGuard DNS'i dene](https://agrd.io/download-dns)

:::

![Özel AdGuard DNS pano esas](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Genel

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Private AdGuard DNS offers all the advantages of a public AdGuard DNS server, including traffic encryption and domain blocklists. It also offers additional features such as flexible customization, DNS statistics, and Parental control. All these options are easily accessible and managed via a user-friendly dashboard.

### Why you need private AdGuard DNS

Bugün internete her şeyi bağlayabilirsiniz: TV'ler, buzdolapları, akıllı ampuller veya hoparlörler. Ancak inkar edilemez kolaylıkların yanı sıra izleyiciler ve reklamlar elde edersiniz. Basit bir tarayıcı tabanlı reklam engelleyici bu durumda sizi korumayacaktır, ancak trafiği filtrelemek, içeriği ve izleyicileri engellemek için ayarlayabileceğiniz AdGuard DNS, sistem genelinde bir etkiye sahiptir.

At one time, the AdGuard product line included only [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Bu çözümler bazı kullanıcılar için iyi çalışıyor, ancak diğerleri için genel AdGuard DNS yapılandırma esnekliğinden yoksunken AdGuard Home basitlikten yoksun. İşte bu noktada özel AdGuard DNS devreye giriyor. Her iki dünyanın da en iyisine sahiptir: özelleştirilebilirlik, kontrol ve bilgi sunar - tümü basit, kullanımı kolay bir pano aracılığıyla.

### The difference between public and private AdGuard DNS

Here is a simple comparison of features available in public and private AdGuard DNS.

| Genel AdGuard DNS                            | Özel AdGuard DNS                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS trafik şifreleme                         | DNS trafik şifreleme                                                                                  |
| Önceden belirlenmiş alan adı engel listeleri | Özelleştirilebilir alan adı engel listeleri                                                           |
| -                                            | İçe ve dışa aktarma özelliğine sahip özel DNS filtreleme kuralları                                    |
| -                                            | İstek istatistikleri (DNS isteklerinizin nereye gittiğini görün: hangi ülkeler, hangi şirketler, vb.) |
| -                                            | Ayrıntılı sorgu günlüğü                                                                               |
| -                                            | Ebeveyn denetimi                                                                                      |

## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. [AdGuard DNS panonuza](https://agrd.io/download-dns) gidin (giriş yapmadıysanız AdGuard hesabınızı kullanarak giriş yapın)
1. Click *Connect device* and follow on-screen instructions

:::note Desteklenen platformlar:

- Android
- iOS
- Windows
- Mac
- Linux
- Yönlendiriciler
- Oyun konsolları
- Akıllı TV'ler

:::

AdGuard DNS paneline eklediğiniz her cihazın, modern şifreli DNS protokollerini (DoH, DoT ve DoQ) desteklemesi durumunda kullanılabilecek kendi benzersiz adresi vardır.

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::not

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Bağlı IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

IP bağlamak için tek gereksinim **konut IP adresi olmasıdır**.

:::not

Konut IP adresi, bir konut İSS'sine bağlı bir cihaza atanan IP adresidir. Tipik olarak fiziksel bir konumla ilişkilendirilir ve bireysel evlere veya dairelere atanır. Konut IP adresleri, normal internet kullanıcıları tarafından web'de gezinme, sosyal medya platformlarına erişim, e-posta gönderme veya içerik canlı yayın akışı gibi günlük çevrimiçi etkinlikleri için kullanılır.

:::

Bir konut IP adresini bağlamaya çalışıyorsanız ve AdGuard DNS buna izin vermiyorsa, lütfen support@adguard.com adresinden destek ekibimizle iletişime geçin.

## Özel AdGuard DNS özellikleri

### İstatistikler

*İstatistikler* sekmesinde Özel AdGuard DNS'inize bağlı cihazlar tarafından yapılan DNS sorgularına ilişkin tüm özet istatistikleri görebilirsiniz. İsteklerin toplam sayısını ve coğrafyasını, engellenen isteklerin sayısını, isteklerin yönlendirildiği şirketlerin listesini, istek türlerini ve başlıca istenen alan adlarını gösterir.

![Özel AdGuard DNS panosu istatistikler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Trafik istikameti

Bu özellik, cihazlarınız tarafından gönderilen DNS isteklerinin nereye gittiğini gösterir. İstek istikametlerinin haritasını görmenin yanı sıra bilgileri tarihe, cihaza ve ülkeye göre filtreleyebilirsiniz.

![Özel AdGuard DNS panosu trafik](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Şirketler

Bu sekme, hangi şirketlerin en çok istek gönderdiğini ve hangi şirketlerin en çok engellenen istekleri olduğunu hızlı bir şekilde kontrol etmenizi sağlar.

![Özel AdGuard DNS panosu şirketler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Sorgu günlüğü

Bu, her bir istekle ilgili bilgileri kontrol edebileceğiniz ve ayrıca istekleri duruma, türe, şirkete, cihaza, zamana, ülkeye göre sıralayabileceğiniz ayrıntılı bir günlüktür.

![Özel AdGuard DNS panosu sorgu günlüğü](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Server settings

This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire.

### Engel listeleri yönetimi

The *Blocklists* feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes.

![Özel AdGuard DNS panosu engel listeleri](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Security settings

Even if you're aware of all the tricks online scammers use, there's always a chance you'll accidentally click a malicious link. To protect yourself from such accidents, go to the *Security settings* section and check the boxes next to the options listed there.

The *Block malicious, phishing, and scam domains* feature will block domains found in the dedicated database. And the *Block newly registered domains* will block all domains registered less than 30 days ago, which are often considered risky for your online privacy.

### Kullanıcı kuralları

For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called *User rules*. Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). Listeleri dışa aktarabilirsiniz.

![Özel AdGuard DNS panosu kullanıcı kuralları](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Ebeveyn denetimi

Çocuğunuzu uygunsuz bulduğunuz çevrimiçi içerikten korumak için *Ebeveyn denetimi* seçeneğini ayarlayın ve etkinleştirin. "Yetişkinlere yönelik içerik" engelleme ve güvenli arama gibi seçeneklere ek olarak, engelleme için etki alanlarını manuel olarak belirleme ve *Ebeveyn kontrolü*'nün buna göre çalışması için bir zamanlama ayarlama olanağı ekledik.

![Özel AdGuard DNS panosu Ebeveyn Denetimi](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)
