---
title: Genel Bakış
sidebar_position: 1
slug: /
---

## DNS nedir?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS, "Alan Adı Sistemi" anlamına gelir ve amacı, site adlarını IP adreslerine dönüştürmektir. Bir siteye her gittiğinizde, tarayıcınız sitenin IP adresini bulmak için bir DNS sunucusuna bir DNS sorgusu gönderir. Ve normal bir DNS çözümleyici, istenen alan adının IP adresini döndürür.

:::note Not

Varsayılan DNS sunucusu genellikle İSS'niz tarafından sağlanır. Bu, İSS'nizin çevrimiçi etkinliğinizi izleyebileceği ve günlükleri üçüncü taraflara satabileceği anlamına gelir.

:::

![Cihazınız, çeşitli uygulamalar, hizmetler, vb. tarafından erişilen alan adlarının IP adreslerini almak için her zaman bir DNS sunucusu kullanır.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

DNS düzeyinde belirli siteleri engelleyebilen DNS sunucuları da vardır. Nasıl çalışırlar? When your device sends a bad request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## İçerik engelleme için neden DNS kullanılmalı

Bugünlerde TV'den akıllı ampullere, mobil cihazlardan akıllı arabalara kadar her şey kesinlikle internete bağlı. İnternetin olduğu her yerde reklamlar ve izleyiciler de vardır. Bu durumda, tarayıcı tabanlı bir reklam engelleyicinin yetersiz olduğu kanıtlanmıştır. Daha iyi bir koruma elde etmek için DNS'i VPN ve reklam engelleyici ile birlikte kullanın.

İçerik engelleme için DNS kullanmanın bazı avantajları olduğu kadar bariz kusurları da vardır. Bir yandan DNS, tüm cihazlardan ve uygulamalarından gelen sorgular için döngüde yer alıyor. Ancak öte yandan, DNS engelleme tek başına kozmetik filtreleme sağlayamaz.

## AdGuard DNS nedir?

AdGuard DNS, piyasadaki en gizlilik odaklı DNS hizmetlerinden biridir. DNS-over-HTTPS, DNS-over-TLS ve DNS-over-QUIC gibi güvenilir şifreleme protokollerini destekler. Non-filtering modda normal bir DNS çözümleyici olarak çalışabilir, ancak aynı zamanda DNS düzeyinde içerik engelleme sağlayabilir: reklam, izleme ve/veya yetişkin alan adlarına (isteğe bağlı) yönelik istekleri tanımlayın ve boş bir yanıtla yanıt verin. AdGuard, reklam, izleyici ve dolandırıcılık hizmeti veren alan adlarını içeren ve sık sık güncellenen kendi veri tabanına sahiptir.

![AdGuard DNS'in nasıl çalıştığına dair yaklaşık bir şema](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

AdGuard DNS trafiğinin yaklaşık %75'i şifrelenmiştir. DNS sunucularını engelleyen içeriği diğerlerinden ayıran aslında budur. CloudFlare veya Quad9 istatistiklerine bakarsanız, şifrelenmiş DNS'nin tüm sorguların sadece küçük bir kısmı olduğunu görürsünüz.

AdGuard DNS iki ana biçimde mevcuttur: [Genel AdGuard DNS](public-dns/overview) ve [Özel AdGuard DNS](private-dns/overview). Bu hizmetlerin hiçbiri uygulama yüklemeyi gerektirmez. Kurulumu ve kullanımı kolaydır ve kullanıcılara reklamları, izleyicileri, kötü amaçlı siteleri ve (gerekirse) yetişkinlere yönelik içeriği engellemek için gereken minimum özellikleri sağlar. Hangi cihazlarla kullanılabileceği konusunda herhangi bir kısıtlama yoktur.

Pek çok benzerliğe rağmen, özel AdGuard DNS ve genel AdGuard DNS iki farklı üründür. Temel farkları, Özel AdGuard DNS'i özelleştirebilmeniz, ancak Genel AdGuard DNS'nin yapamamasıdır.

## AdGuard ürünlerinde DNS filtreleme modülü

AdGuard VPN dahil olmak üzere tüm büyük AdGuard ürünlerinde, güvendiğiniz bir sağlayıcının DNS sunucusunu seçebileceğiniz bir **DNS filtreleme modülü** bulunur. Tabii ki AdGuard DNS Default, AdGuard DNS Non-filtering ve AdGuard DNS Family Protection listede yer alıyor. Ayrıca AdGuard uygulamaları, kullanıcıların [AdGuard DNS'i kolayca yapılandırmasına ve kullanmasına](https://adguard-dns.io/public-dns.html) olanak tanır — Genel veya Özel.
