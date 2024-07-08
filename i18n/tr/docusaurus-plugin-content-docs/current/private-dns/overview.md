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

Özel AdGuard DNS, trafik şifreleme ve alan adı engel listeleri de dahil olmak üzere genel bir AdGuard DNS sunucusunun tüm avantajlarını sunar. Ayrıca esnek özelleştirme, DNS istatistikleri ve Ebeveyn denetimi gibi ek özellikler de sunar. Tüm bu seçeneklere kullanıcı dostu bir gösterge pano aracılığıyla kolayca erişilebilir ve yönetilebilir.

### Özel AdGuard DNS'e neden ihtiyacınız var

Bugün internete her şeyi bağlayabilirsiniz: TV'ler, buzdolapları, akıllı ampuller veya hoparlörler. Ancak inkar edilemez kolaylıkların yanı sıra izleyiciler ve reklamlar elde edersiniz. Basit bir tarayıcı tabanlı reklam engelleyici bu durumda sizi korumayacaktır, ancak trafiği filtrelemek, içeriği ve izleyicileri engellemek için ayarlayabileceğiniz AdGuard DNS, sistem genelinde bir etkiye sahiptir.

Bir zamanlar, AdGuard ürün grubu yalnızca [genel AdGuard DNS](../public-dns/overview.md) ve [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) içeriyordu. Bu çözümler bazı kullanıcılar için iyi çalışıyor, ancak diğerleri için genel AdGuard DNS yapılandırma esnekliğinden yoksunken AdGuard Home basitlikten yoksun. İşte bu noktada özel AdGuard DNS devreye giriyor. Her iki dünyanın da en iyisine sahiptir: özelleştirilebilirlik, kontrol ve bilgi sunar - tümü basit, kullanımı kolay bir pano aracılığıyla.

### Özel ve genel AdGuard DNS arasındaki fark

Burada genel ve özel AdGuard DNS'de bulunan özelliklerin basit bir karşılaştırmasını bulabilirsiniz.

| Genel AdGuard DNS                            | Özel AdGuard DNS                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DNS trafik şifreleme                         | DNS trafik şifreleme                                                                                  |
| Önceden belirlenmiş alan adı engel listeleri | Özelleştirilebilir alan adı engel listeleri                                                           |
| -                                            | İçe ve dışa aktarma özelliğine sahip özel DNS filtreleme kuralları                                    |
| -                                            | İstek istatistikleri (DNS isteklerinizin nereye gittiğini görün: hangi ülkeler, hangi şirketler, vb.) |
| -                                            | Ayrıntılı sorgu günlüğü                                                                               |
| -                                            | Ebeveyn denetimi                                                                                      |

## Özel AdGuard DNS nasıl kurulur

### DoH, DoT ve DoQ'yu destekleyen cihazlar için

1. [AdGuard DNS panonuza](https://agrd.io/download-dns) gidin (giriş yapmadıysanız AdGuard hesabınızı kullanarak giriş yapın)
1. *Cihazı bağla* öğesine tıklayın ve ekrandaki talimatları izleyin

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

### DoH, DoT ve DoQ'yu desteklemeyen cihazlar için

Cihaz şifrelenmiş DNS'i desteklemiyorsa ve düz DNS kullanmanız gerekiyorsa, AdGuard DNS'nin cihazı tanımasına izin vermenin iki yolu daha vardır — özel IP adresleri kullanın veya cihazın IP adresini bağlayın.

:::note Not

Yalnızca başka seçeneğiniz yoksa düz DNS adreslerini kullanın: bu, DNS isteklerinin güvenliğini azaltır. Düz DNS kullanmaya karar verirseniz, özel IP adresleri seçmenizi öneririz.

:::

#### Özel IP adresleri

AdGuard DNS'e bağladığınız her cihaz için, cihaz ayarlarınıza girebileceğiniz iki özel IPv6 adresi sunulacaktır. Her iki IPv6 adresini kullanmak zorunlu değildir, ancak genellikle cihazlar sizden iki IPv6 adresi girmenizi isteyebilir.

Bunlara bağlandığınızda, AdGuard DNS hangi cihazın DNS istekleri gönderdiğini belirleyebilecek ve bunun için istatistikleri görüntüleyebilecektir. Ve DNS kurallarını özellikle bu cihaz için yapılandırabileceksiniz.

Ne yazık ki, tüm servis sağlayıcılar IPv6 desteği sunmaz ve tüm cihazlar IPv6 adreslerini yapılandırmanıza izin vermez. Eğer durumunuz buysa, Bağlı IP yöntemine güvenmeniz gerekebilir.

#### Bağlı IP

Cihazınızı Bağlı IP üzerinden AdGuard DNS'e bağlarsanız, hizmet bu IP adresinden gelen tüm düz DNS isteklerini bu "cihaza" doğru sayar. Bu bağlantı yöntemiyle, cihazın IP'si her değiştiğinde, yani her yeniden başlatmanın ardından elle veya özel bir program aracılığıyla yeniden bağlanmanız gerekir.

IP bağlamak için tek gereksinim **konut IP adresi olmasıdır**.

:::note Not

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

## Sunucu ayarları

Bu bölümde, özel AdGuard DNS'nin çalışmasını özelleştirmenize olanak tanıyan ve internetin tam istediğiniz gibi çalışmasını sağlayan bir dizi ayar bulunur.

### Engel listeleri yönetimi

*Engel listeleri* özelliği, hangi alan adlarını engellemek istediğinizi ve hangilerini istemediğinizi belirtmenize olanak tanır. Farklı amaçlara yönelik çeşitli engel listeleri arasından seçim yapın.

![Özel AdGuard DNS panosu engel listeleri](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Güvenlik ayarları

Çevrimiçi dolandırıcıların kullandığı tüm hilelerin farkında olsanız bile, yanlışlıkla kötü amaçlı bir bağlantıya tıklama riskiniz her zaman vardır. Kendinizi bu tür durumlardan korumak için *Güvenlik ayarları* öğesine gidin ve burada listelenen seçeneklerin yanındaki kutuları işaretleyin.

*Kötü amaçlı, kimlik avı ve dolandırıcılık alan adlarını engelle* özelliği, özel veri tabanında bulunan alan adlarını engeller. Ve *Yeni kaydedilen alan adlarını engelle* 30 günden daha kısa bir süre önce kaydedilen ve genellikle çevrimiçi gizliliğiniz açısından riskli olduğu düşünülen tüm alan adlarını eneller.

### Ebeveyn denetimi

Çocuğunuzu uygunsuz bulduğunuz çevrimiçi içerikten korumak için *Ebeveyn denetimi* seçeneğini ayarlayın ve etkinleştirin. "Yetişkinlere yönelik içerik" engelleme ve güvenli arama gibi seçeneklere ek olarak, engelleme için etki alanlarını manuel olarak belirleme ve *Ebeveyn kontrolü*'nün buna göre çalışması için bir zamanlama ayarlama olanağı ekledik.

![Ebeveyn denetimi](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### Kullanıcı kuralları

Binlerce kurala sahip önceden yüklenmiş engel listelerinin yeterli olmadığı durumlar için *Kullanıcı kuralları* adı verilen kullanışlı bir özelliğimiz var. Burada belirli bir alan adını engellemek/engelini kaldırmak için elle özel kurallar ekleyebilir veya özel kural listelerini içe aktarabilirsiniz (bkz. [DNS filtreleme kuralları söz dizimi](../general/dns-filtering-syntax.md)). Listeleri dışa aktarabilirsiniz.

![Özel AdGuard DNS panosu kullanıcı kuralları](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Kimlik doğrulamalı DNS-over-HTTPS

Kimlik doğrulamalı DNS-over-HTTPS, sunucuya bağlanmak için bir giriş yapma ve parola sağlar. Bu, yetkisiz kullanıcıların erişimini sınırlandırabilir ve güvenliği artırabilir.

Bu özelliği etkinleştirmek için *Sunucu ayarları* → *Aygıtlar* → *Ayarlar* öğesine gidin ve DNS sunucusunu kimlik doğrulamalı olan sunucu olarak değiştirin. Alternatif protokol kullanımını devre dışı bırakmak, özel DNS-over-HTTPS kimlik doğrulaması sağlamak ve üçüncü taraf erişimini engellemek için *Diğer protokolleri reddet * öğesini seçin.

![Kimlik doğrulamalı DNS-over-HTTPS](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Gelişmiş

Burada AdGuard DNS'nin engellenen alan adlarına yanıt verme şeklini ayarlayabilirsiniz:

- Varsayılan - sıfır IP adresi
- NXDOMAIN — alan adı mevcut değil
- REFUSED — sunucu isteği işlemeyi reddetti
- Özel IP — elle bir IP adresi belirtebilirsiniz

Ayrıca, *kullanım süresi* (TTL) ayarını yapabilirsiniz. Bu parametre, bir istemci aygıtın bir DNS isteğine verilen yanıtı önbelleğe aldığı süreyi (saniye cinsinden) tanımlar. Daha yüksek bir kullanım süresi, daha önce engellenmiş bir alan adının engeli kaldırılsa bile bir süre daha engellenmiş olarak görünebileceği anlamına gelir. Kullanım süresi değerinin 0 olması cihazın yanıtları önbelleğe almadığını gösterir.

Gelişmiş bölümünde, özelleştirilebilecek üç seçenek vardır:

- iCloud Private Relay'e erişimi engelle. iCloud Özel Geçişi kullanan aygıtlar DNS ayarlarını yok sayabilir. Bu seçeneğin etkinleştirilmesi, AdGuard DNS'nin cihazınızı etkili bir şekilde koruyabilmesini sağlar.
- Firefox canary alan adını engelle. Bu ayar, AdGuard DNS sistem genelinde DNS hizmeti olarak ayarlandığında Firefox'un otomatik olarak DoH çözümleyicisine geçmesini engeller.
- IP adreslerini günlüğe kaydet. Bu seçenek etkinleştirilirse, gelen DNS istekleriyle ilişkili IP adresleri kaydedilecek ve Sorgu günlüğünde görüntülenecektir.

### Erişim ayarları

Burada aşağıdaki ayarları yapılandırarak DNS sunucunuza erişimi yönetebilirsiniz:

- İzin verilen istemciler. Hangi istemcilerin DNS sunucunuzu kullanmasına izin verildiğini belirtin. İzin verilen istemcilerin eklenen erişim kurallarında sayılmadığını, yalnızca izin verilmeyen istemcilerin ve alan adlarının sayıldığını lütfen unutmayın

![Eklenen kurallar](https://cdn.adtidy.org/content/kb/dns/private/rules_added.png)

- İzin verilmeyen istemciler. DNS sunucunuzu kullanması reddedilen istemcileri listeleyin
- İzin verilmeyen alan adları. DNS sunucunuza erişimi reddedilecek alan adlarını belirtin. Joker karakterler ve DNS filtreleme kuralları da burada listelenebilir

:::note Not

DNS'i yalnızca belirli AS numaralarında veya IP adreslerinde kullanmak istiyorsanız, İzin verilmeyen istemciler alanında diğer her şeyi engellemelisiniz. *İzin verilen istemciler* alanında yalnızca gerekli sayılara ve adreslere izin vermek yeterli olmayacaktır.

:::

Bu seçenekleri ayarlayarak DNS sunucunuzu kimlerin kullandığını kontrol edebilir ve olası DDoS saldırılarını önleyebilirsiniz. İzin verilmeyen istekler Sorgu günlüğünüzde görünmez ve ücretsizdir.
