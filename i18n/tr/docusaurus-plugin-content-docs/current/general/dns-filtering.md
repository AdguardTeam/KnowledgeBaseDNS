---
title: DNS filtreleme
sidebar_position: 1
---

DNS filtrelemeyi daha iyi anlamak için öncelikle "DNS nedir?" sorusuna cevap vermeliyiz.

## DNS nedir?

DNS, "Alan Adı Sistemi" anlamına gelir ve amacı, sitelerin adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Böylece bir siteye her gittiğinizde, tarayıcınız özel bir sunucuya (DNS sunucusu) bir istek gönderir. Bu sunucu, istenen alan adına bakar ve karşılık gelen bir IP adresiyle yanıt verir. Çok şematik olarak şu şekilde temsil edilebilir:

![DNS nasıl çalışır](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Aynısı, elbette, yalnızca tarayıcılar için değil, herhangi bir web isteği gönderen tüm uygulamalar ve programlar için de geçerlidir.

## DNS filtreleme nasıl çalışır?

DNS filtrelemeyi destekleyen AdGuard uygulamalarından birini kullandığınızda, cihazınız ile DNS sunucusu arasında bir arabellek görevi görür. Tarayıcılarınızın veya uygulamalarınızın göndermek üzere olduğu tüm DNS istekleri önce AdGuard tarafından işlenir. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![DNS filtreleme nasıl çalışır](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/en/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/en/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/en/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/en/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

### DNS sunucuları

Aralarından seçim yapabileceğiniz binlerce DNS sunucusu vardır ve bunların tümü özellikleri ve amaçları bakımından benzersizdir. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/en/welcome.html), and it was the world's first to offer the very new and promising [DNS-over-QUIC](https://adguard.com/en/blog/dns-over-quic.html) encryption protocol. AdGuard'ın farklı amaçlar için farklı sunucuları vardır. This diagram illustrates how AdGuard blocking servers work:

![AdGuard DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Diğer DNS sağlayıcıları farklı çalışabilir, bu nedenle şu veya bu DNS sunucusuna bağlanmadan önce onlar hakkında daha fazla bilgi edinin. You can find the list of some of the most popular DNS providers in [this article](dns-providers.md). DNS işlevselliğini destekleyen tüm AdGuard uygulamalarında, aralarından seçim yapabileceğiniz, hatta istediğiniz herhangi bir özel DNS sunucusunu seçmenize izin veren bir DNS sunucuları listesi de vardır.

### Yerel DNS engel listeleri

Ancak, yalnızca DNS trafiğinizi filtrelemek için DNS sunucularına güvenerek tüm esnekliği kaybedersiniz. Seçilen sunucu bir alan adını engellerse, ona erişemezsiniz. AdGuard ile, DNS trafiğini filtrelemek için belirli bir DNS sunucusunu yapılandırmanız bile gerekmez. Tüm AdGuard ürünleri, basit ana makine dosyaları veya [daha gelişmiş söz dizimi](dns-filtering-syntax.md) kullanan listeler olsun, DNS engel listelerini kullanmanıza izin verir. They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, it gets rerouted to a "blackhole".
> iOS için AdGuard'da, DNS engellemeye erişmek için önce ayarlarda "Gelişmiş modu" etkinleştirmeniz gerekir.

İstediğiniz kadar özel engel listesi ekleyebilirsiniz. Örneğin, [AdGuard DNS filtresini](https://github.com/AdguardTeam/AdGuardSDNSFilter) kullanabilirsiniz. AdGuard DNS sunucusunun yaptığı her şeyi tam anlamıyla engeller, ancak bu durumda başka herhangi bir DNS sunucusunu kullanmakta özgürsünüz. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.
> There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## Comparing DNS filtering to network filtering

Ağ filtreleme, AdGuard bağımsız uygulamalarının ağ trafiğini işlemesinin 'normal' yolu olarak adlandırdığımız şeydir, dolayısıyla adı da buradan gelmektedir. Feel free to brush up on it by reading [this article](https://kb.adguard.com/en/general/how-ad-blocking-works).

Öncelikle şunu belirtmeliyiz ki AdGuard ile seçim yapmak zorunda değilsiniz. Her zaman hem normal ağ filtrelemesini hem de DNS filtrelemesini aynı anda kullanabilirsiniz. Ancak, ikisi arasındaki temel farkları anlamak önemlidir. DNS filtrelemenin hem benzersiz avantajları hem de dezavantajları vardır:

**DNS filtrelemenin artıları:**

1. Bazı platformlarda, sistem genelinde filtreleme yapmanın tek yolu budur. Örneğin, iOS'ta yalnızca Safari tarayıcısı bilinen anlamda içerik engellemeyi destekler, diğer her şey için yalnızca DNS filtreleme vardır.
2. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/en/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
3. The stage of processing a DNS request is the earliest you could possibly deal with an ad or a tracker, this helps save a little bit of battery life and traffic.

**DNS filtrelemenin eksileri:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

![Example of difference](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS filtreleme ve ağ filtreleme arasındaki farka bir örnek*

2. Bir DNS isteğinin kaynağını bilmek mümkün değildir; bu, DNS düzeyinde farklı uygulamalar arasında ayrım yapamayacağınız anlamına gelir. Bu, istatistiklere zarar verir ve uygulamaya özel filtreleme kuralları oluşturmayı imkansız hâle getirir.

Mümkün olduğunda bunun yerine ağ filtrelemeye ek olarak DNS filtrelemeyi kullanmanızı tavsiye ederiz.
