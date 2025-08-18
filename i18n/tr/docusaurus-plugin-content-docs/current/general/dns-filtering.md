---
title: DNS filtreleme
sidebar_position: 1
---

:::info

DNS filtrelemenin faydalarını keşfetmenin en kolay yolu, AdGuard Reklam Engelleyiciyi kurmak veya AdGuard DNS'i denemektir. DNS'i ağ düzeyinde filtrelemek istiyorsanız, AdGuard Home sizin aracınızdır

Hızlı bağlantılar: [AdGuard Reklam Engelleyiciyi indir](https://agrd.io/download-kb-adblock), [AdGuard Home'u edin](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS'i dene](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## DNS nedir?

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. Böylece, bir sitesye her gittiğinizde, tarayıcınız özel bir sunucu türüne (DNS sunucusu) bir istek gönderir. Bu sunucu, istenen alan adına bakar ve karşılık gelen bir IP adresiyle yanıt verir. Çok şematik olarak şu şekilde temsil edilebilir:

![DNS nasıl çalışır](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Aynısı, elbette, yalnızca tarayıcılar için değil, herhangi bir web isteği gönderen tüm uygulamalar ve programlar için de geçerlidir.

## DNS filtreleme nasıl çalışır?

DNS filtrelemeyi destekleyen AdGuard uygulamalarından birini kullandığınızda, cihazınız ile DNS sunucusu arasında bir arabellek görevi görür. Tarayıcılarınızın veya uygulamalarınızın göndermek üzere olduğu tüm DNS istekleri önce AdGuard tarafından işlenir. If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard, tüm DNS isteklerinizi cihazınızdan ayrılmadan önce şifreler, böylece hiçbir kötü niyetli kişi bu isteklerin içeriğine erişemez. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![DNS filtreleme nasıl çalışır](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtreleme iki ayrı işleve ayrılabilir: DNS trafiğini şifrelemek ile DNS sunucularına yeniden yönlendirmek ve DNS engel listelerini uygulayarak bazı alan adlarını yerel olarak engellemek.

### DNS sunucuları

Aralarından seçim yapabileceğiniz binlerce DNS sunucusu vardır ve bunların tümü özellikleri ve amaçları bakımından benzersizdir. Çoğu yalnızca istenen alan adının IP adresini döndürür ancak bazılarının ek işlevleri vardır: reklamları, izlemeyi, yetişkinlere yönelik alan adlarını, vb. engeller. Günümüzde tüm büyük DNS sunucuları bir veya daha fazla güvenilir şifreleme protokolü kullanmaktadır: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard'ın farklı amaçlar için farklı sunucuları vardır. Bu diyagram, AdGuard engelleme sunucularının nasıl çalıştığını göstermektedir:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Diğer DNS sağlayıcıları farklı çalışabilir, bu nedenle şu veya bu DNS sunucusuna bağlanmadan önce onlar hakkında daha fazla bilgi edinin. En popüler DNS sağlayıcılarından bazılarının listesini [bu makalede](dns-providers.md) bulabilirsiniz. All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### Yerel DNS engel listeleri

Ancak, yalnızca DNS trafiğinizi filtrelemek için DNS sunucularına güvenerek tüm esnekliği kaybedersiniz. If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. Tüm AdGuard ürünleri, basit ana makine dosyaları veya [daha gelişmiş söz dizimi](dns-filtering-syntax.md) kullanan listeler olsun, DNS engel listelerini kullanmanıza izin verir. Normal engel listeleri ile benzer şekilde çalışırlar: bir DNS isteği etkin filtre listesindeki kurallardan biriyle eşleştiğinde engellenir. Daha açık olmak gerekirse, DNS sunucusu böyle bir istek için yönlendirilemeyen bir IP adresi verir.

:::ipucu

iOS için AdGuard'da, DNS engellemeye erişmek için önce *Ayarlarda* *Gelişmiş modu* etkinleştirmeniz gerekir.

:::

İstediğiniz kadar özel engel listesi ekleyebilirsiniz. Örneğin, [AdGuard DNS filtresini](https://github.com/AdguardTeam/AdGuardSDNSFilter) kullanabilirsiniz. AdGuard DNS sunucusunun yaptığı her şeyi tam anlamıyla engeller, ancak bu durumda başka herhangi bir DNS sunucusunu kullanmakta özgürsünüz. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## DNS filtreleme ile ağ filtreleme karşılaştırması

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. [bu makaleyi](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/)okuyarak bu konuda bilginizi tazelemekten çekinmeyin.

First of all, we have to mention that with AdGuard you don’t have to choose. Her zaman hem normal ağ filtrelemesini hem de DNS filtrelemesini aynı anda kullanabilirsiniz. However, it’s important to understand key differences between the two. DNS filtrelemenin hem benzersiz avantajları hem de dezavantajları vardır:

**DNS filtrelemenin artıları:**

1. Bazı platformlarda, sistem genelinde filtreleme yapmanın tek yolu budur. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
1. Bir DNS isteğinin işlenmesi aşaması, bir reklam veya izleyiciyle başa çıkabileceğiniz en erken aşamadır, bu da pil ömründen ve veriden biraz tasarruf etmenize yardımcı olur.

**DNS filtrelemenin eksileri:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS filtreleme ve ağ filtreleme arasındaki farka bir örnek*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. Bu, istatistikleri olumsuz etkiler ve uygulamaya özel filtreleme kuralları oluşturmayı imkansız hâle getirir.

DNS filtrelemeyi mümkün olduğunca ağ filtrelemenin yerine değil, ona ek olarak kullanmanızı tavsiye ederiz.
