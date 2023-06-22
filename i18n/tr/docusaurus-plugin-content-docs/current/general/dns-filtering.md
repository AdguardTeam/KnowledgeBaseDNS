---
title: DNS filtreleme
sidebar_position: 1
---

:::info

The easiest way to explore the benefits of DNS filtering is to install AdGuard Ad Blocker or try AdGuard DNS. If you want to filter DNS at the network level, AdGuard Home is your tool

Quick links: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

DNS filtrelemeyi daha iyi anlamak için öncelikle “DNS nedir?” sorusunu cevaplamalıyız.

## DNS nedir?

DNS, "Alan Adı Sistemi" anlamına gelir ve amacı, sitelerin adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). Bu sunucu, istenen alan adına bakar ve karşılık gelen bir IP adresiyle yanıt verir. Çok şematik olarak şu şekilde temsil edilebilir:

![DNS nasıl çalışır](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Aynısı, elbette, yalnızca tarayıcılar için değil, herhangi bir web isteği gönderen tüm uygulamalar ve programlar için de geçerlidir.

## DNS filtreleme nasıl çalışır?

DNS filtrelemeyi destekleyen AdGuard uygulamalarından birini kullandığınızda, cihazınız ile DNS sunucusu arasında bir arabellek görevi görür. Tarayıcılarınızın veya uygulamalarınızın göndermek üzere olduğu tüm DNS istekleri önce AdGuard tarafından işlenir. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#local-dns-blocklists).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

### DNS sunucuları

There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the very new and promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in [this article](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like.

### Yerel DNS engel listeleri

But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use [more advanced syntax](dns-filtering-syntax.md). Normal engel listeleri ile benzer şekilde çalışırlar: bir DNS isteği etkin filtre listesindeki kurallardan biriyle eşleştiğinde engellenir. Daha açık olmak gerekirse, bir "kara deliğe" yönlendirilir.
> iOS için AdGuard'da, DNS engellemeye erişmek için önce ayarlarda "Gelişmiş modu" etkinleştirmeniz gerekir.

İstediğiniz kadar özel engel listesi ekleyebilirsiniz. Örneğin, [AdGuard DNS filtresini](https://github.com/AdguardTeam/AdGuardSDNSFilter) kullanabilirsiniz. AdGuard DNS sunucusunun yaptığı her şeyi tam anlamıyla engeller, ancak bu durumda başka herhangi bir DNS sunucusunu kullanmakta özgürsünüz. Ayrıca, bu şekilde daha fazla filtre ekleyebilir veya özel istisna kuralları oluşturabilirsiniz; bunların tümü basit bir "engelleyici bir DNS sunucusu kullanın" ayarıyla imkansız olacaktır.
> There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## DNS filtreleme ile ağ filtreleme karşılaştırması

Ağ filtreleme, AdGuard bağımsız uygulamalarının ağ trafiğini işlemesinin 'normal' yolu olarak adlandırdığımız şeydir, dolayısıyla adı da buradan gelmektedir. [bu makaleyi](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/)okuyarak bu konuda bilginizi tazelemekten çekinmeyin.

Öncelikle şunu belirtmeliyiz ki AdGuard ile seçim yapmak zorunda değilsiniz. Her zaman hem normal ağ filtrelemesini hem de DNS filtrelemesini aynı anda kullanabilirsiniz. Ancak, ikisi arasındaki temel farkları anlamak önemlidir. DNS filtrelemenin hem benzersiz avantajları hem de dezavantajları vardır:

**DNS filtrelemenin artıları:**

1. Bazı platformlarda, sistem genelinde filtreleme yapmanın tek yolu budur. Örneğin, iOS'ta yalnızca Safari tarayıcısı bilinen anlamda içerik engellemeyi destekler, diğer her şey için yalnızca DNS filtreleme vardır.
2. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
3. Bir DNS isteğinin işlenmesi aşaması, bir reklam veya izleyiciyle başa çıkabileceğiniz en erken aşamadır, bu da pil ömründen ve veriden biraz tasarruf etmenize yardımcı olur.

**DNS filtrelemenin eksileri:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

![Fark örneği](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *DNS filtreleme ve ağ filtreleme arasındaki farka bir örnek*

2. Bir DNS isteğinin kaynağını bilmek mümkün değildir; bu, DNS düzeyinde farklı uygulamalar arasında ayrım yapamayacağınız anlamına gelir. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

DNS filtrelemeyi mümkün olduğunca ağ filtrelemenin yerine değil, ona ek olarak kullanmanızı tavsiye ederiz.
