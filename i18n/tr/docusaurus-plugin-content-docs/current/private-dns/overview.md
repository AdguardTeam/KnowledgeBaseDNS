---
title: Genel Bakış
sidebar_position: 1
---

:::info

AdGuard DNS ile, DNS isteklerini çözümlemek ve reklamları, izleyicileri ve kötü amaçlı alan adlarını cihazınıza ulaşmadan önce engellemek için özel DNS sunucularınızı ayarlayabilirsiniz

Quick link: [Try AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# Özel AdGuard DNS

![Özel AdGuard DNS ana sayfa esas](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Özel AdGuard DNS nedir?

Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard.

## Özel AdGuard DNS'e neden ihtiyacınız var

Bugün internete her şeyi bağlayabilirsiniz: TV'ler, buzdolapları, akıllı ampuller veya hoparlörler. Ancak inkar edilemez kolaylıkların yanı sıra izleyiciler ve reklamlar elde edersiniz. Basit bir tarayıcı tabanlı reklam engelleyici bu durumda sizi korumayacaktır, ancak trafiği filtrelemek, içeriği ve izleyicileri engellemek için ayarlayabileceğiniz AdGuard DNS, sistem genelinde bir etkiye sahiptir.

Halihazırda [genel AdGuard DNS](../public-dns/overview.md) ve [AdGuard Home'a](https://github.com/AdguardTeam/AdGuardHome) sahibiz. Bu çözümler bazı kullanıcılar için iyi çalışıyor, ancak diğerleri için genel AdGuard DNS yapılandırma esnekliğinden yoksunken AdGuard Home basitlikten yoksun. İşte bu noktada özel AdGuard DNS devreye giriyor. Her iki dünyanın da en iyisine sahiptir: özelleştirilebilirlik, kontrol ve bilgi sunar - tümü basit, kullanımı kolay bir ana sayfa aracılığıyla.

## Özel ve Genel AdGuard DNS arasındaki fark

Genel AdGuard DNS ve Özel AdGuard DNS sunucularında bulunan özelliklerin basit bir karşılaştırmasını burada bulabilirsiniz.

| Genel AdGuard DNS                            | Özel AdGuard DNS                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS trafik şifreleme                         | DNS trafik şifreleme                                                                                  |
| Önceden belirlenmiş alan adı engel listeleri | Özelleştirilebilir alan adı engel listeleri                                                           |
| -                                            | İçe ve dışa aktarma özelliğine sahip özel DNS filtreleme kuralları                                    |
| -                                            | İstek istatistikleri (DNS isteklerinizin nereye gittiğini görün: hangi ülkeler, hangi şirketler, vb.) |
| -                                            | Ayrıntılı sorgu günlüğü                                                                               |
| -                                            | Ebeveyn denetimi                                                                                      |

## Özel AdGuard DNS nasıl kurulur

1. Go to your [AdGuard DNS dashboard](https://adguard-dns.io/dashboard/) (if not logged in, log in using your AdGuard account)
2. "Cihazı bağla" öğesine tıklayın ve ekrandaki talimatları takip edin

**Desteklenen platformlar:**
* Android
* iOS
* Windows
* Mac
* Linux
* Yönlendiriciler
* Oyun konsolları

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### Linked IP

If the device does not support encrypted DNS and you have to use plain DNS, there's another way to allow AdGuard DNS to recognize the device — link its IP address. In this case AdGuard DNS counts all plain DNS requests that come from that IP address towards that "device".

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard.com.

## Özel AdGuard DNS özellikleri

### Engel listeleri yönetimi

"Engel listeleri" özelliği ile hangi alan adlarını engellemek istediğinizi ve hangilerini istemediğinizi belirleyebilirsiniz. Farklı amaçlar için çok çeşitli engel listeleri arasından seçim yapın.

![Özel AdGuard DNS ana sayfa engel listeleri](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Kullanıcı kuralları

Binlerce kurala sahip önceden yüklenmiş *Engel listelerinin* yeterli olmadığı zamanlar için, "Kullanıcı kuralları" adlı kullanışlı bir fonksiyonumuz var. Burada, belirli bir etki alanını engellemek/engelini kaldırmak için manuel olarak özel kurallar ekleyebilir veya özel kural listelerini içe aktarabilirsiniz ([DNS filtreleme kuralları söz dizimine](../general/dns-filtering-syntax.md) bakın). Listeleri dışa aktarabilirsiniz.

![Özel AdGuard DNS ana sayfa kullanıcı kuralları](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### İstatistikler

"İstatistikler" sekmesinde, Özel AdGuard DNS'inize bağlı cihazlar tarafından yapılan DNS sorgularıyla ilgili tüm özet istatistikleri görebilirsiniz. İsteklerin toplam sayısını ve coğrafyasını, engellenen isteklerin sayısını, isteklerin yönlendirildiği şirketlerin listesini, istek türlerini ve başlıca istenen alan adlarını gösterir.

![Özel AdGuard DNS ana sayfa istatistikler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Trafik istikameti

Bu özellik, cihazlarınız tarafından gönderilen DNS isteklerinin nereye gittiğini gösterir. İstek istikametlerinin haritasını görmenin yanı sıra bilgileri tarihe, cihaza ve ülkeye göre filtreleyebilirsiniz.

![Özel AdGuard DNS ana sayfa trafik](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Şirketler

Bu sekme, hangi şirketlerin en çok istek gönderdiğini ve hangi şirketlerin en çok engellenen istekleri olduğunu hızlı bir şekilde kontrol etmenizi sağlar.

![Özel AdGuard DNS ana sayfa şirketler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Sorgu günlüğü

Bu, her bir istekle ilgili bilgileri kontrol edebileceğiniz ve ayrıca istekleri duruma, türe, şirkete, cihaza, zamana, ülkeye göre sıralayabileceğiniz ayrıntılı bir günlüktür.

![Özel AdGuard DNS ana sayfa sorgu günlüğü](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Ebeveyn denetimi

Çocuğunuzu uygunsuz bulduğunuz çevrimiçi içerikten korumak için *Ebeveyn denetimi* seçeneğini ayarlayın ve etkinleştirin. "Yetişkinlere yönelik içerik" engelleme ve güvenli arama gibi seçeneklere ek olarak, engelleme için etki alanlarını manuel olarak belirleme ve *Ebeveyn kontrolü*'nün buna göre çalışması için bir zamanlama ayarlama olanağı ekledik.

![Özel AdGuard DNS ana sayfa Ebeveyn Denetimi](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

:::note

Henüz Özel AdGuard DNS'iniz yoksa [resmi siteden edinebilirsiniz](https://adguard-dns.io/).

:::