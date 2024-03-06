---
title: DNS filtreleme
sidebar_position: 1
---

:::info

DNS filtrelemenin faydalarını keşfetmenin en kolay yolu, AdGuard Reklam Engelleyiciyi kurmak veya AdGuard DNS'i denemektir. DNS'i ağ düzeyinde filtrelemek istiyorsanız, AdGuard Home sizin aracınızdır

Hızlı bağlantılar: [AdGuard Reklam Engelleyiciyi indir](https://agrd.io/download-kb-adblock), [AdGuard Home'u edin](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS'i dene](https://agrd.io/download-dns)

:::

DNS filtrelemeyi daha iyi anlamak için öncelikle “DNS nedir?” sorusunu cevaplamalıyız.

## DNS nedir?

DNS, "Alan Adı Sistemi" anlamına gelir ve amacı, sitelerin adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Böylece, bir sitesye her gittiğinizde, tarayıcınız özel bir sunucu türüne (DNS sunucusu) bir istek gönderir. Bu sunucu, istenen alan adına bakar ve karşılık gelen bir IP adresiyle yanıt verir. Çok şematik olarak şu şekilde temsil edilebilir:

![DNS nasıl çalışır](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Aynısı, elbette, yalnızca tarayıcılar için değil, herhangi bir web isteği gönderen tüm uygulamalar ve programlar için de geçerlidir.

## DNS filtreleme nasıl çalışır?

DNS filtrelemeyi destekleyen AdGuard uygulamalarından birini kullandığınızda, cihazınız ile DNS sunucusu arasında bir arabellek görevi görür. Tarayıcılarınızın veya uygulamalarınızın göndermek üzere olduğu tüm DNS istekleri önce AdGuard tarafından işlenir. İSS'niz tarafından sağlanan varsayılan DNS sunucusunu kullanıyorsanız, DNS trafiğiniz muhtemelen şifrelenmemiş, gözetlemeye ve ele geçirilmeye karşı savunmasızdır. AdGuard, tüm DNS isteklerinizi cihazınızdan ayrılmadan önce şifreler, böylece hiçbir kötü niyetli kişi bu isteklerin içeriğine erişemez. Bunun da ötesinde, AdGuard reklam, izleme ve/veya yetişkinlere yönelik alan adlarına gelen istekleri tespit edebilir ve bunları DNS sunucusuna yönlendirmek yerine bir "kara deliğe" yönlendirebilir. More on that [later](#local-dns-blocklists).

![DNS filtreleme nasıl çalışır](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtreleme güçlü bir araçtır ve tüm büyük AdGuard uygulamaları tarafından desteklenir: [Windows için AdGuard](https://adguard.com/adguard-windows/overview.html), [Mac için AdGuard](https://adguard.com/adguard-mac/overview.html), [Android için AdGuard](https://adguard.com/adguard-android/overview.html) ve [iOS için AdGuard](https://adguard.com/adguard-ios/overview.html).

DNS filtreleme iki ayrı işleve ayrılabilir: DNS trafiğini şifrelemek ile DNS sunucularına yeniden yönlendirmek ve DNS engel listelerini uygulayarak bazı alan adlarını yerel olarak engellemek.

### DNS sunucuları

Aralarından seçim yapabileceğiniz binlerce DNS sunucusu vardır ve bunların tümü özellikleri ve amaçları bakımından benzersizdir. Çoğu yalnızca istenen alan adının IP adresini döndürür ancak bazılarının ek işlevleri vardır: reklamları, izlemeyi, yetişkinlere yönelik alan adlarını, vb. engeller. Günümüzde tüm büyük DNS sunucuları bir veya daha fazla güvenilir şifreleme protokolü kullanmaktadır: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard'ın farklı amaçlar için farklı sunucuları vardır. Bu diyagram, AdGuard engelleme sunucularının nasıl çalıştığını göstermektedir:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Diğer DNS sağlayıcıları farklı çalışabilir, bu nedenle şu veya bu DNS sunucusuna bağlanmadan önce onlar hakkında daha fazla bilgi edinin. En popüler DNS sağlayıcılarından bazılarının listesini [bu makalede](dns-providers.md) bulabilirsiniz. DNS işlevselliğini destekleyen tüm AdGuard uygulamalarında, aralarından seçim yapabileceğiniz, hatta istediğiniz herhangi bir özel DNS sunucusunu seçmenize izin veren bir DNS sunucuları listesi de vardır.

### Yerel DNS engel listeleri

Ancak, yalnızca DNS trafiğinizi filtrelemek için DNS sunucularına güvenerek tüm esnekliği kaybedersiniz. Seçilen sunucu bir alan adını engellerse, ona erişemezsiniz. AdGuard ile, DNS trafiğini filtrelemek için belirli bir DNS sunucusunu yapılandırmanız bile gerekmez. Tüm AdGuard ürünleri, basit ana makine dosyaları veya [daha gelişmiş söz dizimi](dns-filtering-syntax.md) kullanan listeler olsun, DNS engel listelerini kullanmanıza izin verir. Normal engel listeleri ile benzer şekilde çalışırlar: bir DNS isteği etkin filtre listesindeki kurallardan biriyle eşleştiğinde engellenir. Daha açık olmak gerekirse, DNS sunucusu böyle bir istek için yönlendirilemeyen bir IP adresi verir.

:::ipucu

iOS için AdGuard'da, DNS engellemeye erişmek için önce *Ayarlarda* *Gelişmiş modu* etkinleştirmeniz gerekir.

:::

İstediğiniz kadar özel engel listesi ekleyebilirsiniz. Örneğin, [AdGuard DNS filtresini](https://github.com/AdguardTeam/AdGuardSDNSFilter) kullanabilirsiniz. AdGuard DNS sunucusunun yaptığı her şeyi tam anlamıyla engeller, ancak bu durumda başka herhangi bir DNS sunucusunu kullanmakta özgürsünüz. Ayrıca, bu şekilde daha fazla filtre ekleyebilir veya özel istisna kuralları oluşturabilirsiniz; bunların tümü basit bir "engelleyici bir DNS sunucusu kullanın" ayarıyla imkansız olacaktır.

Yüzlerce farklı DNS engelleme listesi vardır, bunlara [buradan](https://filterlists.com/) bakabilirsiniz.

## DNS filtreleme ile ağ filtreleme karşılaştırması

Ağ filtreleme, AdGuard bağımsız uygulamalarının ağ trafiğini işlemesinin 'normal' yolu olarak adlandırdığımız şeydir, dolayısıyla adı da buradan gelmektedir. [bu makaleyi](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/)okuyarak bu konuda bilginizi tazelemekten çekinmeyin.

Öncelikle şunu belirtmeliyiz ki AdGuard ile seçim yapmak zorunda değilsiniz. Her zaman hem normal ağ filtrelemesini hem de DNS filtrelemesini aynı anda kullanabilirsiniz. Ancak, ikisi arasındaki temel farkları anlamak önemlidir. DNS filtrelemenin hem benzersiz avantajları hem de dezavantajları vardır:

**DNS filtrelemenin artıları:**

1. Bazı platformlarda, sistem genelinde filtreleme yapmanın tek yolu budur. Örneğin, iOS'ta yalnızca Safari tarayıcısı bilinen anlamda içerik engellemeyi destekler, diğer her şey için yalnızca DNS filtreleme vardır.
1. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
1. Bir DNS isteğinin işlenmesi aşaması, bir reklam veya izleyiciyle başa çıkabileceğiniz en erken aşamadır, bu da pil ömründen ve veriden biraz tasarruf etmenize yardımcı olur.

**DNS filtrelemenin eksileri:**

1. DNS filtreleme "kabadır", yani engellenen bir reklamın arkasında kalan boşlukları kaldırmaz veya herhangi bir kozmetik filtreleme uygulamaz. Daha karmaşık reklamların çoğu, DNS düzeyinde engellenemez (veya daha doğrusu, yalnızca başka amaçlar için kullanılan tüm alan adlarının engellenmesiyle engellenebilir).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS filtreleme ve ağ filtreleme arasındaki farka bir örnek*

1. Bir DNS isteğinin kaynağını bilmek mümkün değildir; bu, DNS düzeyinde farklı uygulamalar arasında ayrım yapamayacağınız anlamına gelir. Bu, istatistikleri olumsuz etkiler ve uygulamaya özel filtreleme kuralları oluşturmayı imkansız hâle getirir.

DNS filtrelemeyi mümkün olduğunca ağ filtrelemenin yerine değil, ona ek olarak kullanmanızı tavsiye ederiz.
