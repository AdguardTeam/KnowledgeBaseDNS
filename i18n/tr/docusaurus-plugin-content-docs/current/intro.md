---
title: Genel Bakış
sidebar_position: 1
slug: /
---

## DNS nedir

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. Bir siteye her gittiğinizde, tarayıcınız sitenin IP adresini bulmak için bir DNS sunucusuna bir DNS sorgusu gönderir. Ve normal bir DNS çözümleyici, istenen alan adının IP adresini döndürür.

> Varsayılan DNS sunucusu genellikle İSS'niz tarafından sağlanır. Bu, İSS'nizin çevrimiçi etkinliğinizi izleyebileceği ve günlükleri üçüncü taraflara satabileceği anlamına gelir.

![Cihazınız, uygulamaların gitmek istediği alan adının IP adreslerini almak için her zaman bir DNS sunucusu kullanır](https://cdn.adguard.com/content/blog/articles/dns-cbs/scr1.png)

There are also DNS servers that can block certain websites at DNS-level. Nasıl çalışırlar? Cihazınız, ister reklam ister izleyici olsun, "kötü" bir istek gönderdiğinde, bir DNS sunucusu engellenen bir alan adı için yönlendirilemez bir IP adresiyle yanıt vererek bağlantıyı engeller.

## İçerik engelleme için neden DNS kullanmalısınız

Bugünlerde TV'den akıllı ampullere, mobil cihazlardan akıllı otomobile kadar her şey kesinlikle internete bağlı. İnternetin olduğu her yerde reklamlar ve izleyiciler de vardır. Bu durumda tarayıcı tabanlı bir reklam engelleyici yeterli değil gibi görünüyor. Daha iyi bir koruma elde etmek için DNS'i VPN ve reklam engelleyici ile birlikte kullanın.

İçerik engelleme için DNS kullanmanın bazı avantajları olduğu kadar bariz kusurları da vardır. Bir yandan, DNS sadece tarayıcıları değil tüm cihazları gözlemlediği için kör noktalara sahip değildir. Ancak öte yandan, DNS engelleme tek başına kozmetik filtreleme sağlayamaz.

## AdGuard DNS nedir

AdGuard DNS, piyasadaki en gizlilik dostu DNS hizmetlerinden biridir. DNS-over-HTTPS, DNS-over-TLS ve DNS-over-QUIC gibi güvenilir şifreleme protokollerini destekler. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard'ın reklamlar, izleyiciler ve dolandırıcılık sunan kendi alan adları tabanı vardır ve düzenli olarak güncellenir.

![AdGuard DNS'in nasıl çalıştığına dair yaklaşık bir şema](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> AdGuard DNS trafiğinin yaklaşık %75'i şifrelenmiştir. DNS sunucularını engelleyen içeriği diğerlerinden ayıran aslında budur. CloudFlare veya Quad9 istatistiklerine bakarsanız, şifrelenmiş DNS'nin tüm sorguların sadece küçük bir kısmı olduğunu görürsünüz.

AdGuard DNS exists in two main forms: [public AdGuard DNS](public-dns/overview.md) and [private AdGuard DNS](private-dns/overview.md). Bu hizmetlerin her ikisi de herhangi bir uygulama yüklemeyi gerektirmez. Kurulumu ve kullanımı kolaydır ve kullanıcılara reklamları, izleyicileri, kötü amaçlı siteleri ve (gerekirse) yetişkinlere yönelik içeriği engellemek için gereken minimum özellikleri sağlar. Hangi cihazlarla kullanılabileceği konusunda herhangi bir kısıtlama yoktur.

Pek çok benzerliğe rağmen, özel AdGuard DNS ve genel AdGuard DNS iki farklı hizmettir. Temel farkları, özel AdGuard DNS'i özelleştirebilmeniz, ancak genel AdGuard DNS'nin yapamamasıdır.

## AdGuard ürünlerinde DNS filtreleme modülü

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Tabii ki AdGuard DNS Default, AdGuard DNS Non-filtering ve AdGuard DNS Family Protection listede yer alıyor. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/en/public-dns.html) — public or private.







