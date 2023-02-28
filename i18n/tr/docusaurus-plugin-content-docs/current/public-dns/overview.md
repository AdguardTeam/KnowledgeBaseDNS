---
title: Genel Bakış
sidebar_position: 1
---

## AdGuard DNS nedir?

AdGuard DNS, güvenli bağlantı sağlayan ve ayrıca izleme, reklamlar, kimlik avı ve yetişkinlere uygun içeriği (isteğe bağlı olarak) engelleyebilen ücretsiz, gizlilik odaklı bir DNS çözümleyicisidir. AdGuard DNS herhangi bir uygulama kurmayı gerektirmez. Kullanımı kolaydır ve herhangi bir cihazda (akıllı telefonlar, masaüstü bilgisayarlar, yönlendiriciler, oyun konsolları, vb.) zahmetsizce kurulabilir.

## Genel AdGuard DNS sunucuları

AdGuard DNS has three different types of public servers. "Default" server is for blocking ads, trackers, malware and phishing websites. "Family protection" does the same, but also blocks websites with adult content and enforces "Safe search" option in browsers that provide it. "Non-filtering" provides a secure and reliable connection but doesn't block anything. You can find detailed instructions on setting up AdGuard DNS on any device on [our website](https://adguard-dns.io/public-dns.html). Her sunucu farklı güvenli protokolleri destekler: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) ve DNS-over-QUIC (DoQ).

## AdGuard VPN protokolleri

Düz DNS'nin (hem IPv4 hem de IPv6) yanı sıra AdGuard DNS, çeşitli şifreli protokolleri destekler, böylece size en uygun olanı seçebilirsiniz.

### DNSCrypt

AdGuard DNS, belirli bir şifreli protokol kullanmanıza izin verir — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration. Ancak DoH, DoT ve DoQ protokolleriyle karşılaştırıldığında DNSCrypt'in modası geçmiş olarak kabul edilir ve mümkünse bu protokolleri kullanmanızı öneririz.

### DNS-over-HTTPS (DoH) ve DNS-over-TLS (DoT)

DoH ve DoT, giderek daha fazla popülerlik kazanan ve öngörülebilir gelecekte endüstri standartları hâline gelecek olan modern güvenli DNS protokolleridir. Her ikisi de DNSCrypt'ten daha güvenilirdir ve her ikisi de AdGuard DNS tarafından desteklenir.

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard.com/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. QUIC'in sunduğu tüm iyi şeyleri getiriyor — kullanıma hazır şifreleme, azaltılmış bağlantı süreleri, veri paketleri kaybolduğunda daha iyi performans. Ayrıca, QUIC'in aktarım düzeyinde bir protokol olduğu varsayılır ve DoH ile oluşabilecek meta veri sızıntısı riski yoktur.
