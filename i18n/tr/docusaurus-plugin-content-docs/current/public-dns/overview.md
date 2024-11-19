---
title: Genel Bakış
sidebar_position: 1
---

## AdGuard DNS nedir?

AdGuard DNS, güvenli bağlantı sağlayan ve ayrıca izleme, reklamlar, kimlik avı ve yetişkinlere uygun içeriği (isteğe bağlı olarak) engelleyebilen ücretsiz, gizlilik odaklı bir DNS çözümleyicisidir. AdGuard DNS herhangi bir uygulama kurmayı gerektirmez. Kullanımı kolaydır ve herhangi bir cihazda (akıllı telefonlar, masaüstü bilgisayarlar, yönlendiriciler, oyun konsolları, vb.) zahmetsizce kurulabilir.

## Genel AdGuard DNS sunucuları

AdGuard DNS üç farklı türde genel sunucuya sahiptir. "Varsayılan" sunucu, reklamları, izleyicileri, kötü amaçlı yazılımları ve kimlik avı siteleri engellemek içindir. "Family protection" da aynı şeyi yapar, ancak aynı zamanda yetişkinlere yönelik içeriğe sahip siteleri engeller ve bunu sağlayan tarayıcılarda "Güvenli arama" seçeneğini uygular. "Non-filtering" güvenli ve güvenilir bir bağlantı sağlar ancak hiçbir şeyi engellemez. Herhangi bir cihazda AdGuard DNS kurulumu hakkında ayrıntılı talimatları [web sitemizde](https://adguard-dns.io/public-dns.html) bulabilirsiniz. Her sunucu farklı güvenli protokolleri destekler: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) ve DNS-over-QUIC (DoQ).

## AdGuard VPN protokolleri

Düz DNS'nin (hem IPv4 hem de IPv6) yanı sıra AdGuard DNS, çeşitli şifrelenmiş protokolleri destekler, böylece size en uygun olanı seçebilirsiniz.

### DNSCrypt

AdGuard DNS, belirli bir şifrelenmiş protokol kullanmanıza olanak tanır — DNSCrypt. Bu sayede, tüm DNS istekleri şifrelenir, bu da sizi olası istek müdahalesinden ve ardından gizlice dinleme ve/veya değiştirmeden korur. Ancak DoH, DoT ve DoQ protokolleriyle karşılaştırıldığında DNSCrypt'in modası geçmiş olarak kabul edilir ve mümkünse bu protokolleri kullanmanızı öneririz.

### DNS-over-HTTPS (DoH) ve DNS-over-TLS (DoT)

DoH ve DoT, giderek daha fazla popülerlik kazanan ve öngörülebilir gelecekte endüstri standartları hâline gelecek olan modern güvenli DNS protokolleridir. Her ikisi de DNSCrypt'ten daha güvenilirdir ve her ikisi de AdGuard DNS tarafından desteklenir.

#### DNS için JSON API

AdGuard DNS ayrıca DNS için bir JSON API sağlar. Aşağıdakileri yazarak JSON formatında bir DNS yanıtı almak mümkündür:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

Ayrıntılı dokümantasyon için [DNS-over-HTTPS için JSON API'ye ilişkin Google kılavuzuna](https://developers.google.com/speed/public-dns/docs/doh/json) bakın. JSON'da bir DNS yanıtı almak, AdGuard DNS ile aynı şekilde çalışır.

:::note Not

Google DNS'den farklı olarak AdGuard DNS, yanıt JSON'larında `edns_client_subnet` ve `Comment` değerlerini desteklemez.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC, yeni bir DNS şifreleme protokolüdür](https://adguard.com/blog/dns-over-quic.html) ve AdGuard DNS, onu destekleyen ilk genel çözümleyicidir. DoH ve DoT'un aksine, QUIC'i bir aktarım protokolü olarak kullanır ve sonunda DNS'i köklerine geri getirir — UDP üzerinden çalışır. QUIC'in sunduğu tüm iyi şeyleri getiriyor — kullanıma hazır şifreleme, azaltılmış bağlantı süreleri, veri paketleri kaybolduğunda daha iyi performans. Ayrıca, QUIC'in aktarım düzeyinde bir protokol olduğu varsayılır ve DoH ile oluşabilecek meta veri sızıntısı riski yoktur.

### Oran kısıtlaması

DNS oran kısıtlaması, bir DNS sunucusunun belirli bir süre içinde işleyebileceği trafik miktarını düzenlemek için kullanılan bir tekniktir. Özel AdGuard DNS'in Takım ve Kurumsal planları için varsayılan kısıtlamayı artırma seçeneği sunuyoruz. Daha fazla bilgi için lütfen [ilgili makaleyi okuyun](/private-dns/server-and-settings/rate-limit.md).
